import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-page')
@inject(Element)
export class Ui5Page {
  @bindable() title = '';
  @bindable() busy = false;
  @bindable() busyIndicatorDelay = 1000;
  @bindable() showHeader = true;
  @bindable() showFooter = true;
  @bindable() showNavButton = false;
  @bindable() navButtonPress = this.defaultFunc;
  _page = null;
  _relation = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'header') {
        this._page.addHeaderContent(child);
        return elem.localName;
      }
      if (elem.localName == 'subheader') {
        this._page.setSubHeader(child);
        return elem.localName;
      }
      if (elem.localName == 'content') {
        this._page.addContent(child);
        return elem.localName;
      }
      if (elem.localName == 'footer') {
        this._page.setFooter(child);
        return elem.localName;
      }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'header') {
        this._page.removeHeaderContent(child);
        break;
      }
      if (elem.localName == 'subheader') {
        //subheader is removed automatically
        break;
      }
      if (elem.localName == 'content') {
        this._page.removeContent(child);
        break;
      }
      if (elem.localName == 'footer') {
        //footer is removed automatically
        break;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'header') {
      this._page.removeHeaderContent(child);
    }
    else if (relation == 'content') {
      this._page.removeContent(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.m.Page({
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      showNavButton: getBooleanFromAttributeValue(this.showNavButton),
      navButtonPress: this.navButtonPress,
      busy: getBooleanFromAttributeValue(this.busy),
      busyIndicatorDelay: this.busyIndicatorDelay
    });
    this._page = page;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._page, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._page.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      if (this._parent && this._parent.removeChildByRelation)
        this._parent.removeChildByRelation(this._relation);
      else
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
    }
    else {
      this._page.destroy();
    }
  }
  titleChanged(newValue) {
    if (this._page !== null) {
      this._page.setTitle(newValue);
    }
  }
  showHeaderChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  }
  showFooterChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
    }
  }
  showNavButtonChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowNavButton(getBooleanFromAttributeValue(newValue));
    }
  }
  busyChanged(newValue) {
    if (this._page !== null) {
      this._page.setBusy(getBooleanFromAttributeValue(newValue));
    }
  }
  busyIndicatorDelayChanged(newValue) {
    if (this._page !== null) {
      this._page.setBusyIndicatorDelay(newValue);
    }
  }
}
