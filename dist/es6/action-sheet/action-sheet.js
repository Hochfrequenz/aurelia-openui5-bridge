import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-action-sheet')
@inject(Element)
export class Ui5ActionSheet {
  _sheet = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() placement = 'Bottom';
  @bindable() title = null;
  @bindable() showCancelButton = true;
  @bindable() cancelButtonText = null;
  @bindable() beforeOpen = this.defaultFunc;
  @bindable() afterOpen = this.defaultFunc;
  @bindable() beforeClose = this.defaultFunc;
  @bindable() afterClose = this.defaultFunc;
  /*@bindable() cancelButtonTap = this.defaultFunc; //deprecated */
  @bindable() cancelButtonPress = this.defaultFunc;


  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._sheet;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'buttons') {
        this._sheet.addButton(child);
        return 'buttons';
      }
     
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'buttons') {
      this._sheet.removeButton(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      title: this.title,
      showCancelButton: getBooleanFromAttributeValue(this.showCancelButton),
      cancelButtonText: this.cancelButtonText,
      placement: this.placement,
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose,
      cancelButtonPress: this.cancelButtonPress,
     // cancelButtonTap:this.cancelButtonTap
    };
    if (this.ui5Id)
      this._sheet = new sap.m.ActionSheet(this.ui5Id, props);
    else
      this._sheet = new sap.m.ActionSheet(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }

  placementChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setPlacement(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setTitle(newValue);
    }
  }
  showCancelButtonChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setShowCancelButton(getBooleanFromAttributeValue(newValue));
    }
  }
  cancelButtonTextChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setCancelButtonText(newValue);
    }
  }
  


}
