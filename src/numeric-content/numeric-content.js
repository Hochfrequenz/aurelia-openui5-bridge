import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-numeric-content')
@inject(Element)
export class Ui5NumericContent {
    _content = null;
    @bindable() icon = null;
    @bindable() value = null;
    @bindable() indicator = null;
    @bindable() scale = null;
    @bindable() valueColor = null;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this._content = new sap.m.NumericContent({
            icon: this.icon,
            value: this.value,
            indicator: this.indicator,
            scale : this.scale,
            valueColor : this.valueColor
        });
        $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    iconChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setIcon(newValue);
        }
    }
    valueChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValue(newValue);
        }
    }
    indicatorChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setIndicator(newValue);
        }
    }
    scaleChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setScale(newValue);
        }
    }
    valueColorChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValueColor(newValue);
        }
    }
    
}
