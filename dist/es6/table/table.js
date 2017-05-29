import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-table')
@inject(Element)
export class Ui5Table extends Ui5Control {
  @bindable() headerText = '';
  @bindable() showOverlay = false;
  /*inherited from Ui5Control */
  @bindable() busy = false;

  _table = null;
  constructor(element) {
    super(element);
    this.element = element;
  }
  get UIElement() {
        return this._table;
    }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'header-toolbar')
      { this._table.setHeaderToolbar(child); break; }
      if (elem.localName == 'info-toolbar')
      { this._table.setInfoToolbar(child); break; }
      if (elem.localName == 'item')
      { this._table.addItem(child); break; }
      if (elem.localName == 'column')
      { this._table.addColumn(child); break; }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'item')
      { this._table.removeItem(child); break; }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      headerText: this.headerText,
      showOverlay: getBooleanFromAttributeValue(this.showOverlay)
    };
    super.fillProperties(props);
    var table = new sap.m.Table(props);
    this._table = table;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._table, this.element);
    }
    else {
      this._table.destroy();
    }
  }
  headerTextChanged(newValue) {
    if (this._table !== null) {
      this._table.setHeaderText(newValue);
    }
  }
  showOverlayChanged(newValue) {
    if (this._table !== null) {
      this._table.setShowOverlay(newValue);
    }
  }
}
