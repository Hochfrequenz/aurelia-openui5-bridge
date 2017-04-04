import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-tile-content')
@inject(Element)
export class Ui5TileContent {
    _content = null;
    @bindable() footer = null;
    @bindable() unit = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content')
            this._content.setContent(child);
    }
    removeChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content')
            this._content.destroyContent(child);
    }
    attached() {
        this._content = new sap.m.TileContent({
            footer: this.footer,
            unit: this.unit
        });
        $(this.element).parents("ui5-generic-tile")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).parents("ui5-generic-tile")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    footerChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setFooter(newValue);
        }
    }
    unitChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setUnit(newValue);
        }
    }
}
