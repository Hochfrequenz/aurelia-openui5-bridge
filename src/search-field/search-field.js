import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-search-field')
@inject(Element)

export class Ui5SearchField extends Ui5Control {
  _field = null;

  @bindable() value = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() visible = true;
  @bindable() maxLength = 0;
  @bindable() placeholder = null;
  @bindable() showMagnifier = true;
  @bindable() showRefreshButton = false;
  @bindable() refreshButtonTooltip = null;
  @bindable() showSearchButton = true;
  @bindable() enableSuggestions = false;
  @bindable() selectOnFocus = true;

  @bindable() liveChange = this.defaultFunc;
  @bindable() suggest = this.defaultFunc;
  @bindable() search = this.defaultFunc;

  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    super.addChild(child, elem);
    for (elem of path) {
      if (elem.localName == 'suggestion-item') {
        this._field.addSuggestionItem(child);
        break;
      }
    }
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
      maxLength: this.maxLength,
      enableSuggestions: getBooleanFromAttributeValue(this.enableSuggestions),
      liveChange: this.liveChange,
      suggest: this.suggest,
      search: this.search,
      value: this.value,
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      placeholder: this.placeholder,
      showMagnifier: getBooleanFromAttributeValue(this.showMagnifier),
      showRefreshButton: getBooleanFromAttributeValue(this.showRefreshButton),
      refreshButtonTooltip: this.refreshButtonTooltip,
      showSearchButton: getBooleanFromAttributeValue(this.showSearchButton),
      selectOnFocus: getBooleanFromAttributeValue(this.selectOnFocus)
    };
    if (this.ui5Id)
      this._field = new sap.m.SearchField(this.ui5Id, params);
    else
      this._field = new sap.m.SearchField(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._field, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._field.attachLiveChange((event) => {
        that.value = event.mParameters.newValue;
    });
    this._field.addEventDelegate(this.element);
    super.attached();
  }
  valueChanged(newValue) {
    if (this._field !== null) {
      this._field.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._field !== null) {
      this._field.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._field !== null) {
      this._field.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  visibleChanged(newValue) {
    if (this._field !== null) {
      this._field.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  maxLengthChanged(newValue) {
    if (this._field !== null) {
      this._field.setMaxLength(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._field !== null) {
      this._field.setPlaceholder(newValue);
    }
  }
  showMagnifierChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowMagnifier(getBooleanFromAttributeValue(newValue));
    }
  }
  showRefreshButtonChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowRefreshButton(getBooleanFromAttributeValue(newValue));
    }
  }
  refreshButtonTooltipChanged(newValue) {
    if (this._field !== null) {
      this._field.setRefreshButtonTooltip(newValue);
    }
  }
  showSearchButtonChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowSearchButton(getBooleanFromAttributeValue(newValue));
    }
  }
  enableSuggestionsChanged(newValue) {
    if (this._field !== null) {
      this._field.setEnableSuggestions(getBooleanFromAttributeValue(newValue));
    }
  }
  selectOnFocusChanged(newValue) {
    if (this._field !== null) {
      this._field.setSelectOnFocus(getBooleanFromAttributeValue(newValue));
    }
  }
 /*Todo change event handlers*/
}
