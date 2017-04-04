import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-title')
@inject(Element)

export class Ui5Title {
  _title = null;
  @bindable() text = null;
  @bindable() icon = null;
  @bindable() level = 'Auto';
  @bindable() emphasized = false;
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._title = new sap.ui.core.Title({
      text: this.text,
      icon: this.icon,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      level: this.level,
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  }
  textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  }
  iconChanged(newValue) {
    if (this._title != null) {
      this._title.setIcon(newValue);
    }
  }
   levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  }
   emphasizedChanged(newValue) {
    if (this._title != null) {
      this._title.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  }
}
