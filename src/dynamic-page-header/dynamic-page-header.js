import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-dynamic-page-header')
@inject(Element)
export class Ui5DynamicPageHeader {
    _header = null;
    _parent = null;
    @bindable() pinnable = true;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'content') {
                this._header.addContent(child);
            }
        }
    }
    removeChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'content') {
                this._header.removeContent(child);
            }
        }
    }
    removeChildByRelation(child, relation) {
        if (relation == 'content') {
          this._header.removeContent(child);
        }
      }
    defaultPress() {

    }
    attached() {
        var attributeManager = new AttributeManager(this.element);

        this._header = new sap.f.DynamicPageHeader(
            {
                pinnable: getBooleanFromAttributeValue(this.pinnable),
            }
        );
        if ($(this.element).closest("[ui5-container]").length > 0) {
          this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._parent.addChild(this._header, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
        }
    }
    detached() {
        this._parent.removeChild(this._header, this.element);
    }
    pinnableChanged(newValue) {
        if (this._header !== null) {
            this._header.setPinnable(getBooleanFromAttributeValue(newValue));
        }
    }

}
