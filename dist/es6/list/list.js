import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
import { Ui5ListBase } from '../list-base/list-base';
@customElement('ui5-list')
@inject(Element)
export class Ui5List extends Ui5ListBase {
  @bindable() backgroundDesign = 'Solid';
  /*inherited from list-base*/
  @bindable() inset = false;
  @bindable() headerText = null;
  /*@bindable() headerDesign = 'Standard'; //deprecated */
  @bindable() footerText = null;
  @bindable() mode = 'None';
  @bindable() width = '100%';
  @bindable() includeItemInSelection = false;
  @bindable() showUnread = false;
  @bindable() noDataText = null;
  @bindable() showNoData = true;
  @bindable() enableBusyIndicator = true;
  @bindable() modeAnimationOn = true;
  @bindable() showSeparator = 'All';
  @bindable() swipeDirection = 'Both';
  @bindable() growing = false;
  @bindable() growingThreshold = 20;
  @bindable() growingTriggerText = null;
  @bindable() growingScrollToLoad = false;
  @bindable() growingDirection = 'Downwards';
  @bindable() rememberSelections = true;
  @bindable() keyboardMode = 'Navigation';

  @bindable() delete = this.defaultFunc;
  @bindable() itemPress = this.defaultFunc;
  @bindable() selectionChange = this.defaultFunc;
  @bindable() swipe = this.defaultFunc;
  @bindable() updateFinished = this.defaultFunc;
  @bindable() updateStarted = this.defaultFunc;
  /*inherited from Ui5Control */
  @bindable() busy = false;

  _list = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    super(element);
    this.element = element;
  }
  get UIElement() {
    return this._list;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {

      if (elem.localName == 'item')
      { this._list.addItem(child); return elem.localName; }

    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._list.removeItem(child);
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item')
      { this._list.removeItem(child); break; }
    }

  }
  resetLimit() {
    this._list._oGrowingDelegate.reset();
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      backgroundDesign: this.backgroundDesign,
    };
    super.fillProperties(props);
    var list = new sap.m.List(props);
    this._list = list;
    this._list._oGrowingDelegate.updateItems = function (sChangeReason) {
      this._onBeforePageLoaded(sChangeReason);
      this._onAfterPageLoaded(sChangeReason);
    };
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._list, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._list.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._list, this._relation);
    }
    else {
      this._list.destroy();
    }
  }

  backgroundDesignChanged(newValue) {
    if (this._list !== null) {
      this._list.setBackgroundDesign(newValue);
    }
  }
  selectionChangeChanged(newValue) {
    if (this._list !== null) {
      this._list.attachSelectionChange(newValue);
    }
  }

}
