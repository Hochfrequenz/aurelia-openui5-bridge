import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-toolbar-spacer')
@inject(Element)

export class Ui5ToolbarSpacer {
  _spacer = null;
  @bindable() width = null;
  constructor(element) {
    this.element = element;
  }

  attached() {


    this._spacer = new sap.m.ToolbarSpacer({
      width: this.width,
    });
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._spacer, this.element);
    }
  }
  widthChanged(newValue) {
    if (this._spacer !== null) {
      this._spacer.setWidth(newValue);
    }
  }

}
