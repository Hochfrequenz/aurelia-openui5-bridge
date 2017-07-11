import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
import { Ui5Item } from '../item/item';
@customElement('ui5-view-settings-item')
@inject(Element)

export class Ui5ViewSettingsItem extends Ui5Item {
  _item = null;
  _container = null;

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
  }
  defaultFunc() {

  }
  attached() {
    var props = {
      selected: getBooleanFromAttributeValue(this.selected),
      itemPropertyChanged: this.itemPropertyChanged,
    };
    super.fillProperties(props);
    this._item = new sap.m.ViewSettingsItem(props);
    this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  }
  detached() {
    if (this._container && this._container.removeChildByRelation)
      this._container.removeChildByRelation(this._item, this._relation);
  }
  addChild(child, elem) {
  }
  selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(getBooleanFromAttributeValue(newValue));
    }
  }
}
