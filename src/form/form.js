import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-form')
@inject(Element)
export class Ui5Form {
  @bindable() ui5Id = null;
  @bindable() width = null;
  @bindable() editable = true;
  @bindable() title = null;
  _form = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_form')
  get UIElement() {
    return this._form;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'toolbar') {
        this._form.setToolbar(child);
        return elem.localName;
      }
      if (elem.localName == 'titleElement') {
        this._form.setTitle(child);
        return elem.localName;
      }
      if (elem.localName == 'layout') {
        this._form.setLayout(child);
        return elem.localName;
      }
      if (elem.localName == 'container') {
        this._form.addFormContainer(child);
        return elem.localName;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      editable: getBooleanFromAttributeValue(this.editable),
      width: this.width,
      title: this.title
    };
    if (this.ui5Id)
      this._form = new sap.ui.layout.form.Form(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.Form(params);
    this.element.removeAttribute('ui5-container');
    if ($(this.element).closest("[ui5-container]").length > 0) {
      var prevSibling = null;
      if(this.element.previousElementSibling)
        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._form, this.element, prevSibling);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'container' && this._form && child) {
      this._form.removeFormContainer(child);
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation)
      this._parent.removeChildByRelation(this._form, this._relation);
    var attributeManager = new AttributeManager(this.element);
    attributeManager.removeAttributes(["ui5-container"]);
    this._form.destroy();
  }
  editableChanged(newValue) {
    if (this._form !== null) {
      this._form.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }

  widthChanged(newValue) {
    if (this._form !== null) {
      this._form.setWidth(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }

}
