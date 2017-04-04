import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-input-base')
@inject(Element)

export class Ui5InputBase extends Ui5Control {
  _input = null;

  @bindable() value = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() valueState = 'None';
  @bindable() name = null;
  @bindable() placeholder = null;
  @bindable() editable = true;
  @bindable() valueStateText = null;
  @bindable() showValueStateMessage = true;
  @bindable() textAlign = 'Initial';
  @bindable() textDirection = 'Inherit';
  @bindable() required = false;

  @bindable() change = this.defaultFunc;

  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    super.attached();
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  valueChanged(newValue) {
    if (this._input !== null) {
      this._input.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._input !== null) {
      this._input.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._input !== null) {
      this._input.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueState(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._input !== null) {
      this._input.setName(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._input !== null) {
      this._input.setPlaceholder(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._input !== null) {
      this._input.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateTextChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueStateText(newValue);
    }
  }
  showValueStateMessageChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextDirection(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._input !== null) {
      this._input.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  changeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachChange(newValue);
    }
  }
}
