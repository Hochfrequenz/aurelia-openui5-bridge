import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase } from '../input-base/input-base';
@customElement('ui5-input')
@inject(Element)

export class Ui5Input extends Ui5InputBase {
  _input = null;
  @bindable() ui5Id = null;
  @bindable() type = 'Text';
  @bindable() maxLength = 0;
  @bindable() dateFormat = 'YYYY-MM-DD';
  @bindable() showValueHelp = false;
  @bindable() showSuggestion = false;
  @bindable() valueHelpOnly = false;
  @bindable() filterSuggests = true;
  @bindable() maxSuggestionWidth = null;
  @bindable() showTableSuggestionValueHelp = true;
  @bindable() description = null;
  @bindable() fieldWidth = '50%';
  @bindable() valueLiveUpdate = false;
  @bindable() selectedKey = '';
  @bindable() textFormatMode = 'Value';
  @bindable() textFormatter = '';
  @bindable() suggestionRowValidator = '';

  @bindable() suggestionItems = [];
  @bindable() suggestionColumns = [];
  @bindable() suggestionRows = [];
  @bindable() selectedItem = null;
  @bindable() selectedRow = null;

  @bindable() liveChange = this.defaultFunc;
  @bindable() valueHelpRequest = this.defaultFunc;
  @bindable() suggest = this.defaultFunc;
  @bindable() suggestionItemSelected = this.defaultFunc;
  @bindable() submit = this.defaultFunc;

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
  get UIElement()
  {
    return this._input;
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
    this._input = new sap.m.Input(this.ui5Id, {
      type: this.type,
      maxLength: this.maxLength,
      dateFormat: this.dateFormat,
      showValueHelp: getBooleanFromAttributeValue(this.showValueHelp),
      showSuggestion: getBooleanFromAttributeValue(this.showSuggestion),
      valueHelpOnly: getBooleanFromAttributeValue(this.valueHelpOnly),
      filterSuggests: getBooleanFromAttributeValue(this.filterSuggests),
      maxSuggestionWidth: this.maxSuggestionWidth,
      showTableSuggestionValueHelp: getBooleanFromAttributeValue(this.showTableSuggestionValueHelp),
      description: this.description,
      fieldWidth: this.fieldWidth,
      valueLiveUpdate: getBooleanFromAttributeValue(this.valueLiveUpdate),
      selectedKey: this.selectedKey,
      textFormatMode: this.textFormatMode,
      suggestionRowValidator: this.suggestionRowValidator,
      suggestionItems: this.suggestionItems,
      suggestionColumns: this.suggestionColumns,
      suggestionRows: this.suggestionRows,
      selectedItem: this.selectedItem,
      selectedRow: this.selectedRow,
      liveChange: this.liveChange,
      valueHelpRequest: this.valueHelpRequest,
      suggest: this.suggest,
      suggestionItemSelected: this.suggestionItemSelected,
      submit: this.submit,
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
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._input, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    var that = this;
    this._input.attachChange((event) => {
      that.value = event.mParameters.value;
    });
    this._input.attachLiveChange((event) => {
      if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {
        that.value = event.mParameters.value;
      }
    });
    this._input.addEventDelegate(this.element);
    super.attached();
  }
  typeChanged(newValue) {
    if (this._input !== null) {
      this._input.setType(newValue);
    }
  }
  maxLengthChanged(newValue) {
    if (this._input !== null) {
      this._input.setMaxLength(newValue);
    }
  }
  dateFormatChanged(newValue) {
    if (this._input !== null) {
      this._input.setDateFormat(newValue);
    }
  }
  showValueHelpChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));
    }
  }
  showSuggestionChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));
    }
  }
  valueHelpOnlyChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));
    }
  }
  filterSuggestsChanged(newValue) {
    if (this._input !== null) {
      this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));
    }
  }
  maxSuggestionWidthChanged(newValue) {
    if (this._input !== null) {
      this._input.setMaxSuggestionWidth(newValue);
    }
  }
  showTableSuggestionValueHelpChanged(newValue) {
    if (this._input !== null) {
      this._input.setTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));
    }
  }
  descriptionChanged(newValue) {
    if (this._input !== null) {
      this._input.setDescription(newValue);
    }
  }
  fieldWidthChanged(newValue) {
    if (this._input !== null) {
      this._input.setFieldWidth(newValue);
    }
  }
  valueLiveUpdateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));
    }
  }
  selectedKeyChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedKey(newValue);
    }
  }
  textFormatModeChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextFormatMode(newValue);
    }
  }
  textFormatterChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextFormatter(newValue);
    }
  }
  suggestionRowValidatorChanged(newValue) {
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  }
  suggestionItemsChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._input !== null) {
      this._input.setSuggestionsItems(newValue);
    }
  }
  suggestionColumnsChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  }
  suggestionRowsChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  }
  selectedItemChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedItem(newValue);
    }
  }
  selectedRowChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedRow(newValue);
    }
  }
  liveChangeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachLiveChange(newValue);
    }
  }
  valueHelpRequestChanged(newValue) {
    if (this._input !== null) {
      this._input.attachValueHelpRequest(newValue);
    }
  }
  suggestChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSuggest(newValue);
    }
  }
  suggestionItemSelectedChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSuggestionItemSelected(newValue);
    }
  }
  submitChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSubmit(newValue);
    }
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
