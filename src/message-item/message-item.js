import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-message-item')
@inject(Element)

export class Ui5MessageItem {
  _item = null;
  _parent = null;
  _relation = null;
  @bindable() ui5Id = null;
  @bindable() type = 'Error';
  @bindable() title = null;
  @bindable() subtitle = null;
  @bindable() description = null;
  @bindable() markupDescription = false;
  @bindable() longtextUrl = null;
  @bindable() counter = 0;
  @bindable() groupName = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  @computedFrom('_item')
  get UIElement() {
    return this._item;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'links') {
        this._item.setLink(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'links' && this._item && child) {
      this._item.setLink(null);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._item = new sap.m.MessageItem({
      type: this.type,
      title: this.title,
      subtitle: this.subtitle,
      description: this.description,
      markupDescription: getBooleanFromAttributeValue(this.markupDescription),
      longtextUrl: this.longtextUrl,
      counter: this.counter,
      groupName: this.groupName
    });
    this.element.removeAttribute('ui5-container');
    if ($(this.element).closest("[ui5-container]").length > 0) {
      var prevSibling = null;
      if (this.element.previousElementSibling)
        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._item, this.element, prevSibling);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._item.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation)
      this._parent.removeChildByRelation(this._item, this._relation);
    var attributeManager = new AttributeManager(this.element);
    attributeManager.removeAttributes(["ui5-container"]);
    this._item.destroy();
  }
  typeChanged(newValue) {
    if (this._item !== null) {
      this._item.setType(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitle(newValue);
    }
  }
  subtitleChanged(newValue) {
    if (this._item !== null) {
      this._item.setSubtitle(newValue);
    }
  }
  descriptionChanged(newValue) {
    if (this._item !== null) {
      this._item.setDescription(newValue);
    }
  }
  markupDescriptionChanged(newValue) {
    if (this._item !== null) {
      this._item.setMarkupDescription(getBooleanFromAttributeValue(newValue));
    }
  }
  longtextUrlChanged(newValue) {
    if (this._item !== null) {
      this._item.setLongtextUrl(newValue);
    }
  }
  counterChanged(newValue) {
    if (this._item !== null) {
      this._item.setCounter(newValue);
    }
  }
  groupNameChanged(newValue) {
    if (this._item !== null) {
      this._item.setGroupName(newValue);
    }
  }
}
