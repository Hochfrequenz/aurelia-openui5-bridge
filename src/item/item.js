import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-item')
@inject(Element)

export class Ui5Item{
  _item = null;

  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text =null;
  @bindable() textDirection = null;
  
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
  }
  addChild(child, elem) {
  }
  fillProperties(propertyObject) {
        propertyObject.text = this.text;
        propertyObject.key = this.key;
        propertyObject.textDirection = this.textDirection;
        propertyObject.enabled = this.enabled;
    }
  keyChanged(newValue) {
    if (this._item !== null) {
      this._item.setKey(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._item !== null) {
      this._item.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  textChanged(newValue) {
    if (this._item !== null) {
      this._item.setText(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTextDirection(newValue);
    }
  }
  
}
