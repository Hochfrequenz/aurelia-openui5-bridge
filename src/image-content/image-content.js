import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-image-content')
@inject(Element)
export class Ui5ImageContent {
    _content = null;
    @bindable() src = null;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this._content = new sap.m.ImageContent({
            src: this.src,
        });
        $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    srcChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setSrc(newValue);
        }
    }
    
}
