import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-column-list-item')
@inject(Element)

export class Ui5ColumnListItem {
  _item = null;
  _parent = null;
  _relation = null;



  @bindable() vAlign = 'Inherit';
  @bindable() selected = false;

  constructor(element) {
    this.element = element;
  }
  get UIElement() {
    return this._item;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);

    this._item = new sap.m.ColumnListItem({
      vAlign: this.vAlign,
      selected: getBooleanFromAttributeValue(this.selected)
    });
    attributeManager.addAttributes({ "ui5-container": '' });
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }

  }
  bind(bindingContext, overrideContext){
    console.log("bind called"+bindingContext+overrideContext);
  }
  unbind(){
    console.log('unbind called ');
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
  selectedChanged(newValue) {
  if (this._item !== null) {
  this._item.setSelected(newValue);
  }
  }


}
