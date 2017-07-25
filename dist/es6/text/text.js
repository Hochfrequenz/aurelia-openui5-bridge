import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-text')
@inject(Element)

export class Ui5Text {
  _text = null;
  @bindable ui5Id = null;
  @bindable text = null;
  @bindable wrapping = true;
  @bindable textAlign = "Begin";
  @bindable maxLines = null;
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_text')
  get UIElement() {
    return this._text;
  }
  attached() {
    var props = {
      text: this.text != null ? this.text : this.element.innerText.trim(),
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    };
    if(this.ui5Id)
      this._text = new sap.m.Text(this.ui5Id,props);
    else
      this._text = new sap.m.Text(props);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  }
}