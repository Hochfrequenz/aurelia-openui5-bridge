import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-input-base')
@inject(Element)

export class Ui5InputBase extends Ui5Control {
  _picker = null;

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
  removeChild(child, elem) {
    super.removeChild(child, elem);
  }
  valueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueState(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setName(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setPlaceholder(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateTextChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueStateText(newValue);
    }
  }
  showValueStateMessageChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextDirection(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  changeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.attachChange(newValue);
    }
  }
}
