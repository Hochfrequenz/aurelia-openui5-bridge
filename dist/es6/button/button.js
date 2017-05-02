import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-button')
@inject(Element)
export class Ui5Button {
  @bindable() disabled = false;
  @bindable() floating = false;
  @bindable() large = false;
  @bindable() text = '';
  @bindable() press = null;
  @bindable() icon = null;
  _button = null;
  constructor(element) {
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  attached() {
    this._button = new sap.m.Button({
      text: this.text,
      icon: this.icon,
      enabled: !getBooleanFromAttributeValue(this.disabled),
      press: this.press != null ? this.press : this.defaultPress
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
    }
  }
  defaultPress() {

  }
  detached() {

  }

  disabledChanged(newValue) {
    if (this._button !== null) {
      this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
    }

  }
  iconChanged(newValue) {
    if (this._button !== null) {
      this._button.setIcon(newValue);
    }
  }
  textChanged(newValue) {
    if (this._button !== null) {
      this._button.setText(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._button !== null) {
      this._button.attachPress(newValue);
    }
  }
}
