import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-breadcrumbs')
@inject(Element)

export class Ui5BreadCrumbs {
  _crumbs = null;
  @bindable() ui5Id = null;
  @bindable() currentLocationText = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      currentLocationText: this.currentLocationText
    };
    if (this.ui5Id)
      this._crumbs = new sap.m.Breadcrumbs(this.ui5Id, params);
    else
      this._crumbs = new sap.m.Breadcrumbs(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._crumbs, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'links')
      { this._crumbs.addLink(child); break; }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'links')
      { this._crumbs.removeLink(child); break; }
    }
  }


}
