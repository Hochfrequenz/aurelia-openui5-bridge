import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-table-select-dialog')
@inject(Element)
export class Ui5TableSelectDialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() title = null;
  @bindable() contentHeight = null;
  @bindable() noDataText = null;
  @bindable() multiSelect = false;
  @bindable() growingThreshold = null;
  @bindable() contentWidth = null;
  @bindable() rememberSelections = false;
  @bindable() confirm = this.defaultFunc;
  @bindable() search = this.defaultFunc;
  @bindable() liveChange = this.defaultFunc;
  @bindable() cancel = this.defaultFunc;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'item')
      { this._dialog.addItem(child); return elem.localName; }
      if (elem.localName == 'column')
      { this._dialog.addColumn(child); return elem.localName; }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._dialog.removeItem(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      multiSelect: getBooleanFromAttributeValue(this.multiSelect),
      noDataText: this.noDataText,
      growingThreshold: this.growingThreshold,
      rememberSelections: getBooleanFromAttributeValue(this.rememberSelections),
      confirm: this.confirm,
      search: this.search,
      liveChange: this.liveChange,
      cancel: this.cancel
    };
    if (this.ui5Id)
      this._dialog = new sap.m.TableSelectDialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.TableSelectDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }

  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  }
  contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  }
  noDataTextChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setNoDataText(newValue);
    }
  }
  multiSelectChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  }
  growingThresholdChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGrowingThreshold(newValue);
    }
  }
  rememberSelectionsChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setRememberSelections(getBooleanFromAttributeValue(newValue));
    }
  }

}
