import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
import { Ui5Item } from '../item/item';
@customElement('ui5-segmented-button-item')
@inject(Element)
export class Ui5SegmentedButtonItem extends Ui5Item {
  _item = null;

  @bindable() icon = null;
  @bindable() visible = true;
  @bindable() width = null;
  @bindable() press = this.defaultFunc;

  /*from Ui5Item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;


  constructor(element) {
    super(element);
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  defaultFunc() {

  }
  attached() {
    var props = {
      width: this.width,
      icon: this.icon,
      visible: getBooleanFromAttributeValue(this.visible),
      press: this.press != null ? this.press : this.defaultPress
    };
    super.fillProperties(props);
    this._item = new sap.m.SegmentedButtonItem(props);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
    }
  }

  addChild(child, elem) {
  }
  removeChild(child, elem) {
  }
  iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._item !== null) {
      this._item.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    this._item.setWidth(newValue);
  }

}
