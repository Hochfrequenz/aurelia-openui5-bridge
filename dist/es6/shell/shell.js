import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-shell')
@inject(Element)
export class Ui5Shell {
  @bindable() title = '';
  @bindable() appWidthLimited = true;
  _shell = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._shell.setApp(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var shell = new sap.m.Shell({
      title: this.title,
      appWidthLimited: getBooleanFromAttributeValue(this.appWidthLimited),

    });
    this._shell = shell;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._shell, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._shell.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._shell, this.element);
    }
    else {
      this._shell.destroy();
    }
  }
  titleChanged(newValue) {
    if (this._shell !== null) {
      this._shell.setTitle(newValue);
    }
  }
  appWidthLimitedChanged(newValue) {
    if (this._shell !== null) {
      this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));
    }
  }

}
