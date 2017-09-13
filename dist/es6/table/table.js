import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
import { Ui5ListBase } from '../list-base/list-base';
@customElement('ui5-table')
@inject(Element)
export class Ui5Table extends Ui5ListBase {

  @bindable() showOverlay = false;
  @bindable() fixedLayout = true;

  /*inherited from list-base*/
  @bindable() inset = true;
  @bindable() headerText = null;
  @bindable() headerDesign = 'Standard';
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

  _table = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    super(element);
    this.element = element;
  }
  get UIElement() {
    return this._table;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'header-toolbar')
      { this._table.setHeaderToolbar(child); return elem.localName; }
      if (elem.localName == 'info-toolbar')
      { this._table.setInfoToolbar(child); return elem.localName; }
      if (elem.localName == 'item')
      { this._table.addItem(child); return elem.localName; }
      if (elem.localName == 'column')
      { this._table.addColumn(child); return elem.localName; }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._table.removeItem(child);
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'item')
      { this._table.removeItem(child); break; }
    }
  }
  resetLimit() {
    this._table._oGrowingDelegate.reset();
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      showOverlay: getBooleanFromAttributeValue(this.showOverlay),
      fixedLayout: getBooleanFromAttributeValue(this.fixedLayout)
    };
    super.fillProperties(props);
    var table = new sap.m.Table(props);
    this._table = table;
    if (this._table._oGrowingDelegate) {
      this._table._oGrowingDelegate.updateItems = function (sChangeReason) {
        this._onBeforePageLoaded(sChangeReason);
        this._onAfterPageLoaded(sChangeReason);
      };
    }
    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._table, this._relation);
    }
    else {
      this._table.destroy();
    }
  }
  fixedLayoutChanged(newValue) {
    if (this._table !== null) {
      this._table.setFixedLayout(getBooleanFromAttributeValue(newValue));
    }
  }
  headerTextChanged(newValue) {
    if (this._table !== null) {
      this._table.setHeaderText(newValue);
    }
  }
  showOverlayChanged(newValue) {
    if (this._table !== null) {
      this._table.setShowOverlay(newValue);
    }
  }
}
