import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-form-element')
@inject(Element)
export class Ui5FormElement {
  @bindable() ui5Id = null;
  //TODO: expanded, visible, expandable
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
      if (elem.localName == 'label') {
        this._form.setLabel(child);
        return elem.localName;
      }
      if (elem.localName == 'field') {
        this._form.addField(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    try {
      if (relation === 'field' && this._form && child) {
        this._form.removeField(child);
      }
    }
    catch (error) {

    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.FormElement(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.FormElement(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      if (!this._parent.UIElement || (this._parent.UIElement.sId != this._form.sId)) {
        var prevSibling = null;
        if(this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._form, this.element,prevSibling);
        attributeManager.addAttributes({ "ui5-container": '' });
      }
      else{
        this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
        var prevSibling = null;
        if(this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._form, this.element,prevSibling);
        this._relation = this._parent.addChild(this._form, this.element);
        attributeManager.addAttributes({ "ui5-container": '' });
      }
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation)
      this._parent.removeChildByRelation(this._form, this._relation);
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }


}
