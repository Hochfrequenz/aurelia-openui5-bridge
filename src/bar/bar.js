import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-bar')
@inject(Element)
export class Ui5Bar {
   _bar = null;

  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'content-left')
      this._bar.addContentLeft(child);
    if (path[0].localName == 'content-middle')
      this._bar.addContentMiddle(child);
    if (path[0].localName == 'content-right')
      this._bar.addContentRight(child);
  }
  attached() {

    this._bar = new sap.m.Bar();
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._bar,this.element);

  }
}
