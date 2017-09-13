import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';

@inject(Element)
export class Ui5ListItemBase extends Ui5Control {

  @bindable() visible = true;
  @bindable() type = 'Inactive';
  @bindable() unread = false;
  @bindable() selected = false;
  @bindable() counter = null;
  @bindable() highlight = 'None';

  @bindable() tap = this.defaultFunc;
  @bindable() detailTap = this.defaultFunc;
  @bindable() press = this.defaultFunc;
  @bindable() detailPress = this.defaultFunc;

  /*inherited from control*/

  defaultFunc() {

  }
  constructor(elem) {
    super(elem);
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  removeChild(child, elem) {
    super.removeChild(child, elem);
  }
  removeChildByRelation(child, relation) {
    super.removeChildByRelation(child, relation);
  }
  attached() {
    super.attached();
  }
  fillProperties(propertyObject) {
    super.fillProperties(propertyObject);
    propertyObject.visible = getBooleanFromAttributeValue(this.visible);
    propertyObject.type = this.type;
    propertyObject.unread = getBooleanFromAttributeValue(this.unread);
    propertyObject.selected = getBooleanFromAttributeValue(this.selected);
    propertyObject.counter = this.counter;
    propertyObject.highlight = this.highlight;
    propertyObject.tap = this.tap;
    propertyObject.detailTap = this.detailTap;
    propertyObject.press = this.press;
    propertyObject.detailPress = this.detailPress;
  }
  busyChanged(newValue) {
    if (this.UIElement != null) {
      this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
    }
  }
  bind(param) {
    super.bind(param);
  }
  unbind() {
    super.unbind();
  }

}
