import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-grid')
@inject(Element)
export class Ui5Grid {
    _grid = null;
    @bindable() defaultSpan = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        for (elem of path) {
            if (elem.localName == 'content') {
                this._grid.addContent(child);
                break;
            }
        }
    }
    removeChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
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
        if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._grid, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
        }
    }
    detached() {
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._grid, this.element);
    }
    defaultSpanChanged(newValue) {
        if (this._grid != null) {
            this._grid.setDefaultSpan(newValue);
        }
    }

}
