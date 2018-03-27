import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListBase } from '../list-base/list-base';
@customElement('ui5-tree')
@inject(Element)
export class Ui5Tree extends Ui5ListBase {
  _tree = null;
  _parent = null;
  _relation = null;
  @bindable ui5Id = null;
  @bindable() toggleOpenState = this.defaultFunc;
  /* inherited from sap.m.ListBase*/
  @bindable() inset = false;
  @bindable() headerText = null;
  @bindable() footerText = null;
  @bindable() mode = 'None';
  @bindable() width = '100%';
  @bindable() includeItemInSelection = false;
  @bindable() showUnread = false;
  @bindable() noDataText = null;
  @bindable() showNoData = true;
  @bindable() enableBusyIndicator = true;
  @bindable() modeAnimationOn = true;
  @bindable() showSeparators = 'All';
  @bindable() swipeDirection = 'Both';
  @bindable() growing = false;
  @bindable() growingThreshold = 20;
  @bindable() growingTriggerText = null;
  @bindable() growingScrollToLoad = false;
  @bindable() growingDirection = 'Downwards';
  @bindable() rememberSelections = true;
  @bindable() keyboardMode = 'Navigation';
  @bindable() selectionChange = this.defaultFunc;
  @bindable() delete = this.defaultFunc;
  @bindable() swipe = this.defaultFunc;
  @bindable() updateStarted = this.defaultFunc;
  @bindable() updateFinished = this.defaultFunc;
  @bindable() itemPress = this.defaultFunc;
  /* inherited from sap.ui.core.Control*/
  @bindable() busy = false;
  @bindable() busyIndicatorDelay = 1000;
  @bindable() busyIndicatorSize = 'Medium';
  @bindable() visible = true;
  @bindable() fieldGroupIds = '[]';
  @bindable() validateFieldGroup = this.defaultFunc;
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  @bindable() validationSuccess = this.defaultFunc;
  @bindable() validationError = this.defaultFunc;
  @bindable() parseError = this.defaultFunc;
  @bindable() formatError = this.defaultFunc;
  @bindable() modelContextChange = this.defaultFunc;
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/

  constructor(element) {
    super(element);
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  @computedFrom('_tree')
  get UIElement() {
    return this._tree;
  }
  fillProperties(params) {
    params.toggleOpenState = this.toggleOpenState == null ? this.defaultFunc : this.toggleOpenState;

    super.fillProperties(params);
  }
  defaultFunc() {
  }
  attached() {
    var that = this;
    var params = {};
    this.fillProperties(params);
    if (this.ui5Id)
      this._tree = new sap.m.Tree(this.ui5Id, params);
    else
      this._tree = new sap.m.Tree(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tree.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tree, this.element, prevSibling);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
      else {
        this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
          this._relation = this._parent.addChild(this._tree, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tree, this.element);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
    }
    else {
      if (this._tree.placeAt)
        this._tree.placeAt(this.element.parentElement);
      this.attributeManager.addAttributes({ "ui5-container": '' });
      this.attributeManager.addClasses("ui5-hide");
    }

    //<!container>

    //</!container>
    this.attributeManager.addAttributes({ "ui5-id": this._tree.sId });


  }
  detached() {
    try {
      if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
          this._parent.removeChildByRelation(this._tree, this._relation);
        }
      }
      else {
        this._tree.destroy();
      }
      super.detached();
    }
    catch (err) { }
  }

  addChild(child, elem, afterElement) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      try {
        if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tree.indexOfItem(afterElement); if (_index) this._tree.insertItem(child, _index + 1); else this._tree.addItem(child, 0); return elem.localName; }
        if (elem.localName == 'swipecontent') { this._tree.setSwipeContent(child); return elem.localName; }
        if (elem.localName == 'headertoolbar') { this._tree.setHeaderToolbar(child); return elem.localName; }
        if (elem.localName == 'infotoolbar') { this._tree.setInfoToolbar(child); return elem.localName; }
        if (elem.localName == 'tooltip') { this._tree.setTooltip(child); return elem.localName; }
        if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tree.indexOfCustomData(afterElement); if (_index) this._tree.insertCustomData(child, _index + 1); else this._tree.addCustomData(child, 0); return elem.localName; }
        if (elem.localName == 'layoutdata') { this._tree.setLayoutData(child); return elem.localName; }
        if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tree.indexOfDependent(afterElement); if (_index) this._tree.insertDependent(child, _index + 1); else this._tree.addDependent(child, 0); return elem.localName; }

      }
      catch (err) { }
    }
  }
  removeChildByRelation(child, relation) {
    try {
      if (relation == 'items') { this._tree.removeItem(child); }
      if (relation == 'swipecontent') { this._tree.destroySwipeContent(child); }
      if (relation == 'headertoolbar') { this._tree.destroyHeaderToolbar(child); }
      if (relation == 'infotoolbar') { this._tree.destroyInfoToolbar(child); }
      if (relation == 'tooltip') { this._tree.destroyTooltip(child); }
      if (relation == 'customdata') { this._tree.removeCustomData(child); }
      if (relation == 'layoutdata') { this._tree.destroyLayoutData(child); }
      if (relation == 'dependents') { this._tree.removeDependent(child); }

    }
    catch (err) { }
  }
  toggleOpenStateChanged(newValue) { if (this._tree !== null) { this._tree.attachToggleOpenState(newValue); } }
  insetChanged(newValue) { if (this._tree !== null) { this._tree.setInset(getBooleanFromAttributeValue(newValue)); } }
  headerTextChanged(newValue) { if (this._tree !== null) { this._tree.setHeaderText(newValue); } }
  footerTextChanged(newValue) { if (this._tree !== null) { this._tree.setFooterText(newValue); } }
  modeChanged(newValue) { if (this._tree !== null) { this._tree.setMode(newValue); } }
  widthChanged(newValue) { if (this._tree !== null) { this._tree.setWidth(newValue); } }
  includeItemInSelectionChanged(newValue) { if (this._tree !== null) { this._tree.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue)); } }
  showUnreadChanged(newValue) { if (this._tree !== null) { this._tree.setShowUnread(getBooleanFromAttributeValue(newValue)); } }
  noDataTextChanged(newValue) { if (this._tree !== null) { this._tree.setNoDataText(newValue); } }
  showNoDataChanged(newValue) { if (this._tree !== null) { this._tree.setShowNoData(getBooleanFromAttributeValue(newValue)); } }
  enableBusyIndicatorChanged(newValue) { if (this._tree !== null) { this._tree.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue)); } }
  modeAnimationOnChanged(newValue) { if (this._tree !== null) { this._tree.setModeAnimationOn(getBooleanFromAttributeValue(newValue)); } }
  showSeparatorsChanged(newValue) { if (this._tree !== null) { this._tree.setShowSeparators(newValue); } }
  swipeDirectionChanged(newValue) { if (this._tree !== null) { this._tree.setSwipeDirection(newValue); } }
  growingChanged(newValue) { if (this._tree !== null) { this._tree.setGrowing(getBooleanFromAttributeValue(newValue)); } }
  growingThresholdChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingThreshold(newValue); } }
  growingTriggerTextChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingTriggerText(newValue); } }
  growingScrollToLoadChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue)); } }
  growingDirectionChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingDirection(newValue); } }
  rememberSelectionsChanged(newValue) { if (this._tree !== null) { this._tree.setRememberSelections(getBooleanFromAttributeValue(newValue)); } }
  keyboardModeChanged(newValue) { if (this._tree !== null) { this._tree.setKeyboardMode(newValue); } }
  /* inherited from sap.m.ListBase*/
  selectionChangeChanged(newValue) { if (this._tree !== null) { this._tree.attachSelectionChange(newValue); } }
  deleteChanged(newValue) { if (this._tree !== null) { this._tree.attachDelete(newValue); } }
  swipeChanged(newValue) { if (this._tree !== null) { this._tree.attachSwipe(newValue); } }
  updateStartedChanged(newValue) { if (this._tree !== null) { this._tree.attachUpdateStarted(newValue); } }
  updateFinishedChanged(newValue) { if (this._tree !== null) { this._tree.attachUpdateFinished(newValue); } }
  itemPressChanged(newValue) { if (this._tree !== null) { this._tree.attachItemPress(newValue); } }
  busyChanged(newValue) { if (this._tree !== null) { this._tree.setBusy(getBooleanFromAttributeValue(newValue)); } }
  busyIndicatorDelayChanged(newValue) { if (this._tree !== null) { this._tree.setBusyIndicatorDelay(newValue); } }
  busyIndicatorSizeChanged(newValue) { if (this._tree !== null) { this._tree.setBusyIndicatorSize(newValue); } }
  visibleChanged(newValue) { if (this._tree !== null) { this._tree.setVisible(getBooleanFromAttributeValue(newValue)); } }
  fieldGroupIdsChanged(newValue) { if (this._tree !== null) { this._tree.setFieldGroupIds(newValue); } }
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue) { if (this._tree !== null) { this._tree.attachValidateFieldGroup(newValue); } }
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue) { if (this._tree !== null) { this._tree.attachValidationSuccess(newValue); } }
  validationErrorChanged(newValue) { if (this._tree !== null) { this._tree.attachValidationError(newValue); } }
  parseErrorChanged(newValue) { if (this._tree !== null) { this._tree.attachParseError(newValue); } }
  formatErrorChanged(newValue) { if (this._tree !== null) { this._tree.attachFormatError(newValue); } }
  modelContextChangeChanged(newValue) { if (this._tree !== null) { this._tree.attachModelContextChange(newValue); } }
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/


}
