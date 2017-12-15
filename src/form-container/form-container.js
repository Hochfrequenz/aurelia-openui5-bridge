import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-form-container')
@inject(Element)
export class Ui5FormContainer {
  @bindable() ui5Id = null;
  @bindable() title = null;
  //TODO: expanded, visible, expandable
  _form = null;
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_form')
  get UIElement() {
    return this._form;
  }
  addChild(child, elem, afterElement) {
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
      if (elem.localName == 'element') {
        var _index = null;
        if (afterElement)
          _index = this._form.indexOfFormElement(afterElement);
        if (_index)
          this._form.insertFormElement(child, _index + 1);
        else
          this._form.addFormElement(child,0);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'element') {
      this._form.removeFormElement(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      title: this.title,
    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.FormContainer(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.FormContainer(params);
    this.element.removeAttribute('ui5-container');
    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }


}
