import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-tab-container-item')
@inject(Element)
export class Ui5TabContainerItem {
  @bindable() name = null;
  @bindable() key = null;
  @bindable() modified = false;
  @bindable() itemPropertyChanged = this.defaultFunc;
  _tab = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.TabContainerItem({
      name: this.name,
      key: this.key,
      modified: getBooleanFromAttributeValue(this.modified),
      itemPropertyChanged: this.itemPropertyChanged,
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    }
    else {
      this._tab.destroy();
    }
  }
  keyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setKey(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setName(newValue);
    }
  }
  modifiedChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setModified(getBooleanFromAttributeValue(newValue));
    }
  }
  /*TODO: Add change bindings for event handlers */
}
