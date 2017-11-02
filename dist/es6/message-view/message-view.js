import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-message-view')
@inject(Element)

export class Ui5MessageView {
  _view = null;
  _parent = null;
  _relation = null;
  @bindable() ui5Id = null;
  @bindable() asyncDescriptionHandler = this.defaultFunc;
  @bindable() asyncURLHandler = this.defaultFunc;
  @bindable() groupItems = false;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  @computedFrom('_view')
  get UIElement() {
    return this._view;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'items') {
        this._view.addItem(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'items' && this._view && child) {
      this._view.removeItem(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._view = new sap.m.MessageView({
      asyncDescriptionHandler: this.asyncDescriptionHandler,
      asyncURLHandler: this.asyncURLHandler,
      groupItems: getBooleanFromAttributeValue(this.groupItems),
    });
    this.element.removeAttribute('ui5-container');
    if ($(this.element).closest("[ui5-container]").length > 0) {
      var prevSibling = null;
      if (this.element.previousElementSibling)
        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._view, this.element, prevSibling);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._view.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation)
      this._parent.removeChildByRelation(this._view, this._relation);
    var attributeManager = new AttributeManager(this.element);
    attributeManager.removeAttributes(["ui5-container"]);
    this._view.destroy();
  }
  textChanged(newValue) {
    if (this._view != null) {
      this._view.setText(newValue);
    }
  }
}
