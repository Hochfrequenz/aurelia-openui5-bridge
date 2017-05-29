import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-tile-container')
@inject(Element)
export class Ui5TileContainer {
  _container = null;

  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'tile')
      this._container.addTile(child);
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'tile')
      this._container.removeTile(child);
  }
  attached() {
    this._container = new sap.m.TileContainer();
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
  }
  detached() {
    if ($(this.element).parents("[ui5-container]")[0]) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
    }
  }
}
