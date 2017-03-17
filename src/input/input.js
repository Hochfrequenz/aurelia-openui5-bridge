import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-input')
@inject(Element)

export class Ui5Input {
   _label = null;
   @bindable() id = null;
   @bindable() labelFor = null;
   @bindable() text = null;
   @bindable() required = false;
   @bindable() textAlign = "Begin";
   @bindable() textDirection = null;
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._label = new sap.m.Label({
      text : this.text,
      labelFor: this.labelFor,
      required : getBooleanFromAttributeValue(this.required),
      textAlign : this.textAlign,  
      textDirection : this.textDirection
    }); 
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._label,this.element);  
  }
   textChanged(newValue) {
    if (this._form !== null) {
      this._form.setText(newValue);
    }
  }
  labelForChanged(newValue) {
    if (this._form !== null) {
      this._form.setLabelFor(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._form !== null) {
      this._form.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._form !== null) {
      this._form.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._form !== null) {
      this._form.setTextDirection(newValue);
    }
  }
}
