import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-slide-tile')
@inject(Element)
export class Ui5SlideTile {
  _container = null;
  @bindable() displayTime = 5000;
  @bindable() transitionTime = 500;
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
    this._container = new sap.m.SlideTile({
      displayTime: this.displayTime,
      transitionTime: this.transitionTime
    });
    this._container.addStyleClass('sapUiTinyMarginTop');
    this._container.addStyleClass('sapUiTinyMarginBegin');

    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
  }
  detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
  }
  displayTimeChanged(newValue) {
    if (this._container != null) {
      this._container.setDisplayTime(newValue);
    }
  }
  transitionTimeChanged(newValue) {
    if (this._container != null) {
      this._container.setTransitionTime(newValue);
    }
  }
}
