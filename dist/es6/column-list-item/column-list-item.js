import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-column-list-item')
@inject(Element)

export class Ui5ColumnListItem {
  _item = null;

  @bindable() vAlign = 'Inherit';
 

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    
    this._item = new sap.m.ColumnListItem({
      vAlign: this.vAlign,
    });
    attributeManager.addAttributes({ "ui5-container": '' });      
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
  }
  addChild(child, elem) {
     var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'cell')
      { this._item.addCell(child); break; }
    }
  }
  vAlignChanged(newValue) {
    if (this._item !== null) {
      this._item.setVAlign(newValue);
    }
  }


}
