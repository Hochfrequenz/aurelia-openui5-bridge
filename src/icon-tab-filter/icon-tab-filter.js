import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
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
  @computedFrom('_tab')
  get UIElement() {
    return this._tab;
  }
  addChild(child, elem, afterElement) {

    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    var prevChild = null;
    for (var childElem of path) {
      if (childElem.localName == 'content') {
        var _index = null;
        if (afterElement)
          _index = this._tab.indexOfContent(afterElement);
        if (_index)
          this._tab.insertContent(child, _index + 1);
        else
          this._tab.addContent(child);
        return childElem.localName;
      }
      prevChild = childElem;
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (var childElem of path) {
      if (childElem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'content' && this._tab && child) {
      this._tab.removeContent(child);
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
