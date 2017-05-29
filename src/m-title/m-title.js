import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-m-title')
@inject(Element)

export class Ui5MTitle {
  _title = null;
  @bindable() ui5Id = null;
  @bindable() text = null;
  @bindable() level = 'Auto';
  constructor(element) {
    this.element = element;
  }

  attached() {
    var props = {
      text: this.text,
      level: this.level,
    }; 
    if(this.ui5Id)
      this._title = new sap.m.Title(this.ui5Id,props);
    else
      this._title = new sap.m.Title(props);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  }
  textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  }
   levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  }
}
