import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-link')
@inject(Element)
export class Ui5Link {
  @bindable() enabled = true;
  @bindable() subtle = false;
  @bindable() emphasized = false;
  @bindable() text = '';
  @bindable() press = this.defaultPress;
  @bindable() target = null;
  @bindable() href = null;
  _link = null;
  _parent = null;
  constructor(element) {
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  attached() {
    this._link = new sap.m.Link({
      text: this.text,
      target: this.target,
      href: this.href,
      subtle: getBooleanFromAttributeValue(this.subtle),
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      enabled: getBooleanFromAttributeValue(this.enabled),
      press: this.press != null ? this.press : this.defaultPress
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this.parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this.parent.addChild(this._link, this.element);
    }
  }
  defaultPress() {

  }
  detached() {
    if (this.parent && this.parent.removeChild) {
      this.parent.removeChild(this._link, this.elememt);
    }
  }
  hrefChanged(newValue) {
    if (this._link !== null) {
      this._link.setHref(newValue);
    }
  }
  typeChanged(newValue) {
    if (this._link !== null) {
      this._link.setType(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._link !== null) {
      this._link.setEnabled(getBooleanFromAttributeValue(newValue));
    }

  }
  targetChanged(newValue) {
    if (this._link !== null) {
      this._link.setTarget(newValue);
    }
  }
  textChanged(newValue) {
    if (this._link !== null) {
      this._link.setText(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._link !== null) {
      if (newValue == null)
        newValue = this.defaultPress;
      this._link.attachPress(newValue);
    }
  }
}
