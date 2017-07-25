import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-upload-collection-parameter')
@inject(Element)
export class Ui5UploadCollectionParameter {
  @bindable() name = null;
  @bindable() value = null;

  _parameter = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.element = element;
  }
  get UIElement() {
    return this._parameter;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
  }
  removeChildByRelation(child, relation) {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._parameter = new sap.m.UploadCollectionParameter({
      name: this.name,
      value: this.value,
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this.relation = this._parent.addChild(this._parameter, this.element);
    }
    
  }
  detached() {
    if (this._parent && this._parameter.removeChildByRelation) {
      this._parent.removeChildByRelation(this._parameter, this.relation);
    }
    
  }
  nameChanged(newValue) {
    if (this._parameter !== null) {
      this._parameter.setName(newValue);
    }
  }
  valueChanged(newValue) {
    if (this._parameter !== null) {
      this._parameter.setValue(newValue);
    }
  }
  
}
