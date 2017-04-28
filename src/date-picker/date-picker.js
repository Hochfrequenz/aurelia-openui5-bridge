import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase } from '../input-base/input-base';
@customElement('ui5-date-picker')
@inject(Element)

export class Ui5DatePicker extends Ui5InputBase {
  _picker = null;
  @bindable() ui5Id = null;

  @bindable() displayFormat = null;
  @bindable() valueFormat = null;
  @bindable() dateValue = null;
  @bindable() displayFormatType = null;
  @bindable() secondaryCalendarType = 'Gregorian';
  @bindable() minDate = null;
  @bindable() maxDate = null;

  @bindable() specialDates = [];


  /*Inherited from InputBase */
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
  get UIElement() {
    return this._picker;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    super.addChild(child, elem);

  }
  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      displayFormat: this.displayFormat,
      valueFormat: this.valueFormat,
      dateValue: this.dateValue,
      displayFormatType: this.displayFormatType,
      secondaryCalendarType: this.secondaryCalendarType,
      minDate: this.minDate,
      maxDate: this.maxDate,
      specialDates: this.specialDates,
      /*inherited from InputBase*/
      value: this.value,
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      valueState: this.valueState,
      name: this.value,
      placeholder: this.placeholder,
      editable: getBooleanFromAttributeValue(this.editable),
      valueStateText: this.valueStateText,
      showValueStateMessage: getBooleanFromAttributeValue(this.showValueStateMessage),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      required: getBooleanFromAttributeValue(this.required),
      change: this.change
      /*inherited from InputBase*/
    };
    if (this.ui5Id)
      this._picker = new sap.m.DatePicker(this.ui5Id, params);
    else
      this._picker = new sap.m.DatePicker(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._picker, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    var that = this;
    this._picker.attachChange((event) => {
      that.value = event.mParameters.value;
    });

    this._picker.addEventDelegate(this.element);
    super.attached();
  }
  displayFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormat(newValue);
    }
  }
  valueFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueFormat(newValue);
    }
  }
  dateValueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDateValue(newValue);
    }
  }
  displayFormatTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormatType(newValue);
    }
  }

  secondaryCalendarTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setSecondaryCalendarType(newValue);
    }
  }
  minDateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setMinDate(newValue);
    }
  }
  
  specialDatesChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._picker !== null) {
      this._picker.setSpecialDates(newValue);
    }
  }
  
  /*valueChanged(newValue) {
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
  }*/
}
