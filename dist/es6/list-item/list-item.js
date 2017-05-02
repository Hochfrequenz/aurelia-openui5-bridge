import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-list-item')
@inject(Element)

export class Ui5ListItem {
  _item = null;

  @bindable() icon = null;
  @bindable() additionalText = null;
  /* inherited from list item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;
  /* inherited from list item*/

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    this._item = new sap.ui.core.ListItem({
      text: this.text,
      icon: this.icon,
      enabled: getBooleanFromAttributeValue(this.enabled),
      additionalText: this.additionalText,
      textDirection: this.textDirection,
      key: this.key
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
  }
  addChild(child, elem) {
  }
  iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  }
  additionalTextChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdditionalText(newValue);
    }
  }
   keyChanged(newValue) {
     if (this._item !== null) {
       this._item.setKey(newValue);
     }
   }
   enabledChanged(newValue) {
     if (this._item !== null) {
       this._item.setEnabled(getBooleanFromAttributeValue(newValue));
     }
   }
   textChanged(newValue) {
     if (this._item !== null) {
       this._item.setText(newValue);
     }
   }
   textDirectionChanged(newValue) {
     if (this._item !== null) {
       this._item.setTextDirection(newValue);
     }
   }

}
