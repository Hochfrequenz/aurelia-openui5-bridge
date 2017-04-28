import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-form-element')
@inject(Element)
export class Ui5FormElement {
  @bindable() ui5Id = null;
  //TODO: expanded, visible, expandable
  _form = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'label')
      {
        this._form.setLabel(child);
        break;
      }
      if (elem.localName == 'field')
      {
        this._form.addField(child);
        break;
      }
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

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
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
