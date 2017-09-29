import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element } from '../element/element';
@customElement('ui5-formatted-text')
@inject(Element)

export class Ui5FormattedText extends Ui5Element {
  _text = null;
  @bindable() htmlText = null;
  @bindable() width = null;
  @bindable() height = null;
  @bindable() convertLinksToAnchorTags = 'None';
  @bindable() convertedLinksDefaultTarget = '_blank';
  constructor(element) {
    super(element);
    this.element = element;
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  get UIElement() {
    return this._text;
  }
  attached() {

    this._text = new sap.m.FormattedText({
      htmlText: this.htmlText != null ? this.htmlText : this.element.innerHtml.trim(),
      width: this.width,
      height: this.height,
      convertedLinksDefaultTarget: this.convertedLinksDefaultTarget,
      convertLinksToAnchorTags: this.convertLinksToAnchorTags
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  htmlTextChanged(newValue) {
    if (this._text != null) {
      this._text.setHtmlText(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._text !== null) {
      this._text.setWidth(newValue);
    }
  }
  heightChanged(newValue) {
    if (this._text !== null) {
      this._text.setHeight(newValue);
    }
  }
  convertedLinksDefaultTargetChanged(newValue) {
    if (this._text !== null) {
      this._text.setConvertedLinksDefaultTarget(newValue);
    }
  }
  convertLinksToAnchorTagsChanged(newValue) {
    if (this._text !== null) {
      this._text.setConvertLinksToAnchorTags(newValue);
    }
  }
}
