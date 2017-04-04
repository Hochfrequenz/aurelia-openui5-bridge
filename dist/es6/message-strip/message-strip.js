import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-message-strip')
@inject(Element)

export class Ui5MessageStrip {
  _text = null;
  @bindable ui5Id = null;
  @bindable text = null;
  @bindable wrapping = true;
  @bindable textAlign = "Begin";
  @bindable maxLines = null;
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._text = new sap.m.Text({
      text: this.text,
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  }
}
