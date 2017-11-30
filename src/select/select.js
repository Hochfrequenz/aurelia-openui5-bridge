import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase } from '../input-base/input-base';
@customElement('ui5-select')
@inject(Element)

export class Ui5Select {
  _select = null;
  @bindable() ui5Id = null;

  @bindable() name = null;
  @bindable() width = null;
  @bindable() maxWidth = null;
  @bindable() enabled = true;
  @bindable() selectedKey = null;
  @bindable() selectedItemId = null;
  @bindable() icon = null;
  @bindable() type = null;
  @bindable() autoAdjustWidth = false;
  @bindable() valueState = null;
  @bindable() valueStateText = null;
  @bindable() showSecondaryValues = false;
  @bindable() forceSelection = true;

  @bindable() items = [];

  @bindable() selectedItem = null;

  @bindable() change = this.defaultFunc;
  get UIElement() {
    return this._select;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item') {
        //if (this._select.getItems().length) // set key when first item is added
        //  this.selectedKey = child.mProperties.key;
        if (this._select.getItemByKey(child.mProperties.key) == null)
          this._select.addItem(child);
        //reset selected key
        var oldVal = this.selectedKey;
        this.selectedKey = null;
        this.selectedKey = oldVal;
        return elem.localName;
      }
      break;
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'item') {
      this._select.removeItem(child);
      var oldVal = this.selectedKey;
      this.selectedKey = null;
      this.selectedKey = oldVal;
    }
  }
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      name: this.name,
      width: this.width,
      maxWidth: this.maxWidth,
      enabled: getBooleanFromAttributeValue(this.enabled),
      selectedKey: this.selectedKey,
      selectedItemId: this.selectedItemId,
      icon: this.icon,
      type: this.type,
      autoAdjustWidth: getBooleanFromAttributeValue(this.autoAdjustWidth),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      valueState: this.valueState,
      valueStateText: this.valueStateText,
      showSecondaryValues: getBooleanFromAttributeValue(this.showSecondaryValues),
      forceSelection: getBooleanFromAttributeValue(this.forceSelection),
      items: this.items,
      selectedItem: this.selectedItem,
      change: this.change
    };
    if (this.ui5Id)
      this._select = new sap.m.Select(this.ui5Id, params);
    else
      this._select = new sap.m.Select(params);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._select, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._select.attachChange((event) => {
      that.selectedItem = event.mParameters.selectedItem;
      if (event.mParameters.selectedItem)
        that.selectedKey = event.mParameters.selectedItem.mProperties.key;
      else
        that.selectedKey = null;
    });

    this._select.addEventDelegate(this.element);
  }
  nameChanged(newValue) {
    if (this._select !== null) {
      this._select.setName(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._select !== null) {
      this._select.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    if (this._select !== null) {
      this._select.setWidth(newValue);
    }
  }
  maxWidthChanged(newValue) {
    if (this._select !== null) {
      this._select.setMaxWidth(newValue);
    }
  }

  selectedKeyChanged(newValue) {
    if (this._select !== null) {
      this._select.setSelectedKey(newValue);
    }
  }
  selectedItemIdChanged(newValue) {
    if (this._select !== null) {
      this._select.setSelectedItemId(newValue);
    }
  }

  iconChanged(newValue) {
    if (this._select !== null) {
      this._select.setIcon(newValue);
    }
  }

  typeChanged(newValue) {
    if (this._select !== null) {
      this._select.setType(newValue);
    }
  }
  autoAdjustWidthChanged(newValue) {
    if (this._select !== null) {
      this._select.setAutoAdjustWidth(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._select !== null) {
      this._select.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._select !== null) {
      this._select.setTextDirection(newValue);
    }
  }
  valueStateChanged(newValue) {
    if (this._select !== null) {
      this._select.setValueState(newValue);
    }
  }
  valueStateTextChanged(newValue) {
    if (this._select !== null) {
      this._select.setValueStateText(newValue);
    }
  }

  showSecondaryValuesChanged(newValue) {
    if (this._select !== null) {
      this._select.setShowSecondaryValues(getBooleanFromAttributeValue(newValue));
    }
  }

  forceSelectionChanged(newValue) {
    if (this._select !== null) {
      this._select.setForceSelection(getBooleanFromAttributeValue(newValue));
    }
  }
}
