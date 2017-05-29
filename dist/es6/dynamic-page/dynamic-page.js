import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { TaskQueue } from 'aurelia-framework';
import { computedFrom } from 'aurelia-framework';

@customElement('ui5-dynamic-page')
@inject(Element,TaskQueue)
export class Ui5DynamicPage {
  @bindable() preserveHeaderStateOnScroll = false;
  @bindable() headerExpanded = true;
  @bindable() toggleHeaderOnTitleClick = true;
  @bindable() showFooter = false;
  @bindable() fitContent = true;
  _page = null;
  _taskQueue = null;
  constructor(element,queue) {
    this.element = element;
    this._taskQueue = queue;
  }
  defaultFunc() {

  }
  @computedFrom('_page')
  get UIElement() {
    return this._page;
  }

  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'heading') {
        this._page.setHeader(child);

        break;
      }
      if (elem.localName == 'pagetitle') {
        this._page.setTitle(child);
        //reset header expanded flag as the title is required to do so
        var _self = this;
        _self._taskQueue.queueTask(function () {
          _self._page.setHeaderExpanded(getBooleanFromAttributeValue(_self.headerExpanded));
        });
        break;
      }
      if (elem.localName == 'content') {
        this._page.setContent(child);

        break;
      }
      if (elem.localName == 'footer') {
        this._page.setFooter(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'header') {
        //header is removed automatically
        break;
      }

      if (elem.localName == 'content') {
        // content is removed automatically
        break;
      }
      if (elem.localName == 'footer') {
        //footer is removed automatically
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.f.DynamicPage({
      preserveHeaderStateOnScroll: getBooleanFromAttributeValue(this.preserveHeaderStateOnScroll),
      headerExpanded: getBooleanFromAttributeValue(this.headerExpanded),
      toggleHeaderOnTitleClick: getBooleanFromAttributeValue(this.toggleHeaderOnTitleClick),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      fitContent: getBooleanFromAttributeValue(this.fitContent)
    });
    this._page = page;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._page, this.element);
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
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
    }
    else {
      this._page.destroy();
    }
  }


  showFooterChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
    }
  }
  preserveHeaderStateOnScrollChanged(newValue) {
    if (this._page !== null) {
      this._page.setPreserveHeaderStateOnScroll(getBooleanFromAttributeValue(newValue));
    }
  }
  headerExpandedChanged(newValue) {
    if (this._page !== null) {
      this._page.setHeaderExpanded(getBooleanFromAttributeValue(newValue));
    }
  }
  toggleHeaderOnTitleClickChanged(newValue) {
    if (this._page !== null) {
      this._page.setToggleHeaderOnTitleClick(getBooleanFromAttributeValue(newValue));
    }
  }
  fitContentChanged(newValue) {
    if (this._page !== null) {
      this._page.setFitContent(getBooleanFromAttributeValue(newValue));
    }
  }
}
