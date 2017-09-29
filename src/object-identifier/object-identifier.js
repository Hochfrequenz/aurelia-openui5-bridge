import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-object-identifier')
@inject(Element)

export class Ui5ObjectIdentifier {
  _text = null;
  @bindable ui5Id = null;
  @bindable text = null;
  @bindable() title = null;
  @bindable() visible = true;
  @bindable() titleActive = false;
  @bindable() textDirection = 'Inherit';
  @bindable() titlePress = this.defaultFunc;

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {

    this._text = new sap.m.ObjectIdentifier({
      text: this.text != null ? this.text : this.element.innerText.trim(),
      title : this.title,
      visible: getBooleanFromAttributeValue(this.visible),
      titleActive: getBooleanFromAttributeValue(this.titleActive),
      textDirection: this.textDirection,
      titlePress: this.titlePress
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._text !== null) {
      this._text.setTitle(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._text !== null) {
      this._text.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  titleActiveChanged(newValue) {
    if (this._text !== null) {
      this._text.setTitleActive(getBooleanFromAttributeValue(newValue));
    }
  }
  textDirectionChanged(newValue) {
    if (this._text !== null) {
      this._text.setTextDirection(newValue);
    }
  }
}
