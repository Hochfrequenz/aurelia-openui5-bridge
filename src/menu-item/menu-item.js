import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item } from '../item/item';
@customElement('ui5-menu-item')
@inject(Element)
export class Ui5MenuItem extends Ui5Item {
  _menuitem = null;
  _parent = null;
  _relation = null;
  @bindable ui5Id = null;
  @bindable() icon = null;
  @bindable() visible = true;
  @bindable() startsSection = false;
  @bindable() press = this.defaultFunc;
  @bindable() propertyChanged = this.defaultFunc;
  @bindable() aggregationChanged = this.defaultFunc;
  /* inherited from sap.ui.core.Item*/
  @bindable() text = '';
  @bindable() enabled = true;
  @bindable() textDirection = 'Inherit';
  @bindable() key = null;
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
  @computedFrom('_menuitem')
  get UIElement() {
    return this._menuitem;
  }
  fillProperties(params) {
    params.icon = this.icon;
    params.visible = getBooleanFromAttributeValue(this.visible);
    params.startsSection = getBooleanFromAttributeValue(this.startsSection);
    params.press = this.press == null ? this.defaultFunc : this.press;
    params.propertyChanged = this.propertyChanged == null ? this.defaultFunc : this.propertyChanged;
    params.aggregationChanged = this.aggregationChanged == null ? this.defaultFunc : this.aggregationChanged;

    super.fillProperties(params);
  }
  defaultFunc() {
  }
  attached() {
    var that = this;
    var params = {};
    this.fillProperties(params);
    if (this.ui5Id)
      this._menuitem = new sap.m.MenuItem(this.ui5Id, params);
    else
      this._menuitem = new sap.m.MenuItem(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      if (!this._parent.UIElement || (this._parent.UIElement.sId != this._menuitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._menuitem, this.element, prevSibling);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
      else {
        this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
          this._relation = this._parent.addChild(this._menuitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._menuitem, this.element);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
    }
    else {
      if (this._menuitem.placeAt)
        this._menuitem.placeAt(this.element.parentElement);
      this.attributeManager.addAttributes({ "ui5-container": '' });
      this.attributeManager.addClasses("ui5-hide");
    }

    //<!container>

    //</!container>
    this.attributeManager.addAttributes({ "ui5-id": this._menuitem.sId });


  }
  detached() {
    try {
      if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
          this._parent.removeChildByRelation(this._menuitem, this._relation);
        }
      }
      else {
        this._menuitem.destroy();
      }
      super.detached();
    }
    catch (err) { }
  }

  addChild(child, elem, afterElement) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      try {
        if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._menuitem.indexOfItem(afterElement); if (_index) this._menuitem.insertItem(child, _index + 1); else this._menuitem.addItem(child, 0); return elem.localName; }
        if (elem.localName == 'tooltip') { this._menuitem.setTooltip(child); return elem.localName; }
        if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._menuitem.indexOfCustomData(afterElement); if (_index) this._menuitem.insertCustomData(child, _index + 1); else this._menuitem.addCustomData(child, 0); return elem.localName; }
        if (elem.localName == 'layoutdata') { this._menuitem.setLayoutData(child); return elem.localName; }
        if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._menuitem.indexOfDependent(afterElement); if (_index) this._menuitem.insertDependent(child, _index + 1); else this._menuitem.addDependent(child, 0); return elem.localName; }

      }
      catch (err) { }
    }
  }
  removeChildByRelation(child, relation) {
    try {
      if (relation == 'items') { this._menuitem.removeItem(child); }
      if (relation == 'tooltip') { this._menuitem.destroyTooltip(child); }
      if (relation == 'customdata') { this._menuitem.removeCustomData(child); }
      if (relation == 'layoutdata') { this._menuitem.destroyLayoutData(child); }
      if (relation == 'dependents') { this._menuitem.removeDependent(child); }

    }
    catch (err) { }
  }
  iconChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setIcon(newValue); } }
  visibleChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setVisible(getBooleanFromAttributeValue(newValue)); } }
  startsSectionChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setStartsSection(getBooleanFromAttributeValue(newValue)); } }
  pressChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachPress(newValue); } }
  propertyChangedChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachPropertyChanged(newValue); } }
  aggregationChangedChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachAggregationChanged(newValue); } }
  textChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setText(newValue); } }
  enabledChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setEnabled(getBooleanFromAttributeValue(newValue)); } }
  textDirectionChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setTextDirection(newValue); } }
  keyChanged(newValue) { if (this._menuitem !== null) { this._menuitem.setKey(newValue); } }
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachValidationSuccess(newValue); } }
  validationErrorChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachValidationError(newValue); } }
  parseErrorChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachParseError(newValue); } }
  formatErrorChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachFormatError(newValue); } }
  modelContextChangeChanged(newValue) { if (this._menuitem !== null) { this._menuitem.attachModelContextChange(newValue); } }
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/


}
