import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
import { Ui5Item } from '../item/item';
@customElement('ui5-view-settings-filter-item')
@inject(Element)

export class Ui5ViewSettingsFilterItem extends Ui5Item {
  _item = null;
  _container = null;

  @bindable() multiSelect = true;

  @bindable() selected = null;
  @bindable() itemPropertyChanged = this.defaultFunc;
  /* inherited from list item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;
  /* inherited from list item*/

  constructor(element) {
    super(element);
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);

  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'items') {
        this._item.addItem(child);
        return 'items';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'items') {
      this._item.removeItem(child);
    }

  }

  attached() {
    var props = {
      multiSelect: getBooleanFromAttributeValue(this.multiSelect),
      selected: getBooleanFromAttributeValue(this.selected),
      itemPropertyChanged: this.itemPropertyChanged,
    };
    super.fillProperties(props);
    this._item = new sap.m.ViewSettingsFilterItem(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

    this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  }
  detached() {
    if (this._container && this._container.removeChildByRelation)
      this._container.removeChildByRelation(this._item, this._relation);
  }
  selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(getBooleanFromAttributeValue(newValue));
    }
  }
  multiSelectChanged(newValue) {
    if (this._item !== null) {
      this._item.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  }
}
