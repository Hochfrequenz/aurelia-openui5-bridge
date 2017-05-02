import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-overflow-toolbar')
@inject(Element)
export class Ui5OverflowToolbar {
  _bar = null;

  @bindable() width = null;
  @bindable() active = false;
  @bindable() enabled = true;
  @bindable() height = null;
  @bindable() design = null;
  @bindable() press = this.defaultFunc;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._bar.addContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._bar.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._bar = new sap.m.OverflowToolbar({
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      active: getBooleanFromAttributeValue(this.active),
      height: this.height,
      design: this.design,
      press: this.press
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._bar, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._bar.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._bar, this.element);
    }
    else {
      this._bar.destroy();
    }
  }
  widthChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  activeChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setActive(getBooleanFromAttributeValue(newValue));
    }
  }
  heightChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setHeight(newValue);
    }
  }
  designChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setDesign(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setPress(newValue);
    }
  }
}
