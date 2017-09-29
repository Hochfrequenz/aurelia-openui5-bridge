import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-feed-content')
@inject(Element)
export class Ui5FeedContent {
    _content = null;
    @bindable() value = null;
    @bindable() contentText = null;
    @bindable() subheader = null;
    @bindable() valueColor  = null;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this._content = new sap.m.FeedContent({
            value: this.value,
            contentText: this.contentText,
            subheader: this.subheader,
            valueColor: this.valueColor
        });
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    valueChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValue(newValue);
        }
    }
    valueColorChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValueColor(newValue);
        }
    }
    contentTextChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setContentText(newValue);
        }
    }
    subheaderChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setSubheader(newValue);
        }
    }
    
}
