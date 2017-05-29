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
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_form')
  get UIElement() {
    return this._form;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'toolbar') {
        this._form.setToolbar(child);
        break;
      }
      if (elem.localName == 'titleElement') {
        this._form.setTitle(child);
        break;
      }
      if (elem.localName == 'layout') {
        this._form.setLayout(child);
        break;
      }
      if (elem.localName == 'container') {
        this._form.addFormContainer(child);
        break;
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

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
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
