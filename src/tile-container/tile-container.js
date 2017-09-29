import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-tile-container')
@inject(Element)
export class Ui5TileContainer {
  _container = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'tile')
      this._container.addTile(child);
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'tile')
      this._container.removeTile(child);
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._container = new sap.m.TileContainer();
    this._parent = this.element.closest("[ui5-container]").au.controller.viewModel;
    this._parent.addChild(this._container, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._container, this.element);
    }
  }
}
