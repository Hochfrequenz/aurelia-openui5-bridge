import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-wizard-step')
@inject(Element)
export class Ui5WizardStep {
  _step = null;
  @bindable nextStep = null;
  @bindable subsequentSteps = [];
  @bindable title = null;
  @bindable icon = null;
  @bindable validated = true;
  @bindable complete = this.defaultFunc;
  @bindable activate = this.defaultFunc;
  constructor(element) {
    this.element = element;
  }
  _parent = null;
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'step') {
        this._step.addContent(child);
        return elem.localName;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'step') {
        this._step.removeContent(child);
        break;
      }
    }
  }
  removeChildByRelation(child,relation){
    if (relation === 'step' && this._step && child) {
     this._step.removeContent(child);
   }
 }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._step = new sap.m.WizardStep({
      title: this.title,
      icon: this.icon,
      validated: getBooleanFromAttributeValue(this.validated),
      complete: this.complete,
      activate: this.activate
    });
    this._parent = this.element.closest("ui5-wizard").au.controller.viewModel;
    this._parent.addChild(this._step, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  }
  detached() {
    this._parent.removeChild(this._step, this.element);
  }
}
