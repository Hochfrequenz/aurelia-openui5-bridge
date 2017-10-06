import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-icon-tab-filter')
@inject(Element)
export class Ui5IconTabFilter {
  _tab = null;
  _parent = null;
  _relation = null;
  @bindable() text = null;
  @bindable() tabKey = null;
  @bindable() design = 'Vertical';
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.IconTabFilter({
      text: this.text,
      key: this.tabKey,
      design: this.design
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent) {
      this._parent.removeChildByRelation(this._tab, this._relation);
    }
    else {
      this._tab.destroy();
    }
  }
  tabKeyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setKey(newValue);
    }
  }
  textChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setText(newValue);
    }
  }
  designChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setDesign(newValue);
    }
  }
  /*TODO: Add change bindings for event handlers */
}
