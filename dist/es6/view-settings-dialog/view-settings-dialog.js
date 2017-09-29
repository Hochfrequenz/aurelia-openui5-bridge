import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-view-settings-dialog')
@inject(Element)
export class Ui5ViewSettingsDialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() title = null;
  @bindable() sortDescending = false;
  @bindable() groupDescending = false;
  @bindable() confirm = this.defaultFunc;
  @bindable() cancel = this.defaultFunc;
  @bindable() resetFilters = this.defaultFunc;
  @bindable() filterDetailPageOpened = this.defaultFunc;

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
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'sortitems') {
        this._dialog.addSortItem(child);
        return 'sortItems';
      }
      if (elem.localName == 'groupitems') {
        this._dialog.addGroupItem(child);
        return 'groupItems';
      }
      if (elem.localName == 'filteritems') {
        this._dialog.addFilterItem(child);
        return 'filterItems';
      }
      if (elem.localName == 'presetfilteritems') {
        this._dialog.addPresetFilterItem(child);
        return 'presetFilterItems';
      }
      if (elem.localName == 'customtabs') {
        this._dialog.addCustomTab(child);
        return 'customTabs';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'sortItems') {
      //skip removal of sortItems (gives error)
      //this._dialog.removeSortItem(child);
    }
    else if (relation == 'groupItems') {
      this._dialog.removeGroupItem(child);
    }
    else if (relation == 'filterItems') {
      this._dialog.removeFilterItem(child);
    }
    else if (relation == 'presetFilterItems') {
      this._dialog.removePresetFilterItem(child);
    }
    else if (relation == 'customTabs') {
      this._dialog.removeCustomTab(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      sortDescending: getBooleanFromAttributeValue(this.sortDescending),
      groupDescending: getBooleanFromAttributeValue(this.groupDescending),
      confirm: this.confirm,
      cancel: this.cancel,
      beforeClose: this.beforeClose,
      filterDetailPageOpened  : this.filterDetailPageOpened
    };
    if (this.ui5Id)
      this._dialog = new sap.m.ViewSettingsDialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.ViewSettingsDialog(props);
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
  sortDescendingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setSortDescending(getBooleanFromAttributeValue(newValue));
    }
  }
  
  groupDescendingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGroupDescending(getBooleanFromAttributeValue(newValue));
    }
  }
  }
