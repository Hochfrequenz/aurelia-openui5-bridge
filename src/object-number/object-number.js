import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-object-number')
@inject(Element)

export class Ui5ObjectNumber {
  _number = null;
  @bindable ui5Id = null;
  @bindable() number = null;
  @bindable() numberUnit = null;
  @bindable() emphasized = null;
  @bindable() state = null;
  @bindable() unit = null;
  @bindable() textDirection = 'Inherit';
  @bindable() textAlign = 'Begin';

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {

    this._number = new sap.m.ObjectNumber({
      number: this.number != null ? this.number : this.element.innerText.trim(),
      numberUnit : this.numberUnit,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      state: this.state,
      unit:this.unit,
      textDirection: this.textDirection,
      textAlign: this.textAlign
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._number, this.element);
  }
  numberChanged(newValue) {
    if (this._number != null) {
      this._number.setNumber(newValue);
    }
  }
  numberUnit(newValue) {
    if (this._number !== null) {
      this._number.setNumberUnit(newValue);
    }
  }
  emphasizedChanged(newValue) {
    if (this._number !== null) {
      this._number.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  }
  stateChanged(newValue) {
    if (this._number !== null) {
      this._number.setState(newValue);
    }
  }
  unitChanged(newValue) {
    if (this._number !== null) {
      this._number.setUnit(newValue);
    }
  }
  textAlignChanged(newValue) {
    if (this._number !== null) {
      this._number.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._number !== null) {
      this._number.setTextDirection(newValue);
    }
  }
}
