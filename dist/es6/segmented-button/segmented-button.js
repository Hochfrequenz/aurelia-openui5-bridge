import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-segmented-button')
@inject(Element)
export class Ui5SegmentedButton extends Ui5Control {
  _segmentedbutton = null;
  _parent = null;
  _relation = null;
  @bindable ui5Id = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() selectedKey = '';
  @bindable() selectionChange = this.defaultFunc;
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
  @computedFrom('_segmentedbutton')
  get UIElement() {
    return this._segmentedbutton;
  }
  fillProperties(params) {
    params.width = this.width;
    params.enabled = getBooleanFromAttributeValue(this.enabled);
    params.selectedKey = this.selectedKey;
    params.selectionChange = this.selectionChange == null ? this.defaultFunc : this.selectionChange;

    super.fillProperties(params);
  }
  defaultFunc() {
  }
  attached() {
    var that = this;
    var params = {};
    this.fillProperties(params);
    if (this.ui5Id)
      this._segmentedbutton = new sap.m.SegmentedButton(this.ui5Id, params);
    else
      this._segmentedbutton = new sap.m.SegmentedButton(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      if (!this._parent.UIElement || (this._parent.UIElement.sId != this._segmentedbutton.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._segmentedbutton, this.element, prevSibling);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
      else {
        this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
          this._relation = this._parent.addChild(this._segmentedbutton, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._segmentedbutton, this.element);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
    }
    else {
      if (this._segmentedbutton.placeAt)
        this._segmentedbutton.placeAt(this.element.parentElement);
      this.attributeManager.addAttributes({ "ui5-container": '' });
      this.attributeManager.addClasses("ui5-hide");
    }
    this._segmentedbutton.attachSelect((event) => { that.selectedKey = event.mParameters.key;; });

    //<!container>

    //</!container>
    this.attributeManager.addAttributes({ "ui5-id": this._segmentedbutton.sId });


  }
  detached() {
    try {
      if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
          this._parent.removeChildByRelation(this._segmentedbutton, this._relation);
        }
      }
      else {
        this._segmentedbutton.destroy();
      }
      super.detached();
    }
    catch (err) { }
  }

  addChild(child, elem, afterElement) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      try {
        if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfButton(afterElement); if (_index) this._segmentedbutton.insertButton(child, _index + 1); else this._segmentedbutton.addButton(child, 0); return elem.localName; }
        if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfItem(afterElement); if (_index) this._segmentedbutton.insertItem(child, _index + 1); else this._segmentedbutton.addItem(child, 0); return elem.localName; }
        if (elem.localName == 'tooltip') { this._segmentedbutton.setTooltip(child); return elem.localName; }
        if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfCustomData(afterElement); if (_index) this._segmentedbutton.insertCustomData(child, _index + 1); else this._segmentedbutton.addCustomData(child, 0); return elem.localName; }
        if (elem.localName == 'layoutdata') { this._segmentedbutton.setLayoutData(child); return elem.localName; }
        if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfDependent(afterElement); if (_index) this._segmentedbutton.insertDependent(child, _index + 1); else this._segmentedbutton.addDependent(child, 0); return elem.localName; }

      }
      catch (err) { }
    }
  }
  removeChildByRelation(child, relation) {
    try {
      if (relation == 'buttons') { this._segmentedbutton.removeButton(child); }
      if (relation == 'items') { this._segmentedbutton.removeItem(child); }
      if (relation == 'tooltip') { this._segmentedbutton.destroyTooltip(child); }
      if (relation == 'customdata') { this._segmentedbutton.removeCustomData(child); }
      if (relation == 'layoutdata') { this._segmentedbutton.destroyLayoutData(child); }
      if (relation == 'dependents') { this._segmentedbutton.removeDependent(child); }

    }
    catch (err) { }
  }
  widthChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setWidth(newValue); } }
  enabledChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setEnabled(getBooleanFromAttributeValue(newValue)); } }
  selectedKeyChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setSelectedKey(newValue); } }
  selectionChangeChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachSelectionChange(newValue); } }
  busyChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setBusy(getBooleanFromAttributeValue(newValue)); } }
  busyIndicatorDelayChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setBusyIndicatorDelay(newValue); } }
  busyIndicatorSizeChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setBusyIndicatorSize(newValue); } }
  visibleChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setVisible(getBooleanFromAttributeValue(newValue)); } }
  fieldGroupIdsChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.setFieldGroupIds(newValue); } }
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachValidateFieldGroup(newValue); } }
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachValidationSuccess(newValue); } }
  validationErrorChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachValidationError(newValue); } }
  parseErrorChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachParseError(newValue); } }
  formatErrorChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachFormatError(newValue); } }
  modelContextChangeChanged(newValue) { if (this._segmentedbutton !== null) { this._segmentedbutton.attachModelContextChange(newValue); } }
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/


}
