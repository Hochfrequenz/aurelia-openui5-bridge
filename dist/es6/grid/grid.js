import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-grid')
@inject(Element)
export class Ui5Grid {
    _grid = null;
    _parent = null;
    @bindable() defaultSpan = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'content') {
                this._grid.addContent(child);
                break;
            }
        }
    }
    removeChildByRelation(child, relation) {
        if (relation == 'content') {
            this._grid.removeContent(child);
        }
    }
    removeChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        if (path[0].localName == 'content')
            this._grid.removeContent(child);
    }
    defaultPress() {

    }
    attached() {
        var attributeManager = new AttributeManager(this.element);

        this._grid = new sap.ui.layout.Grid(
            {
                defaultSpan: this.defaultSpan,
            }
        );
        if ($(this.element).closest("[ui5-container]").length > 0) {
          this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._parent.addChild(this._grid, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
        }
    }
    detached() {
        this._parent.removeChild(this._grid, this.element);
    }
    defaultSpanChanged(newValue) {
        if (this._grid != null) {
            this._grid.setDefaultSpan(newValue);
        }
    }

}
