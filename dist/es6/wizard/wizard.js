import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-wizard')
@inject(Element)
export class Ui5Wizard {
  _wizard = null;
  @bindable() width = 'auto';
  @bindable() height = '100%';
  @bindable() showNextButton = true;
  @bindable() finishButtonText = "fortfahren";
  @bindable() enableBranching = false;
  @bindable() stepActivate = this.defaultFunc;
  @bindable() complete = this.defaultFunc;

  defaultFunc() {

  }
  @computedFrom('_wizard')
  get UIElement() {
    return this._wizard;
  }
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'wizard')
      this._wizard.addStep(child);
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    //FIXME: Dynamic step removal is not supported by openui5 yet, will be removed with the wizard itself
    //if (path[0].localName == 'wizard')
    // this._wizard.removeStep(child);
  }
  attached() {
    var params = {
      width: this.width,
      height: this.height,
      showNextButton: getBooleanFromAttributeValue(this.showNextButton),
      finishButtonText: this.finishButtonText,
      enableBranching: getBooleanFromAttributeValue(this.enableBranching),
      stepActivate: this.stepActivate,
      complete: this.complete
    };
    this._wizard = new sap.m.Wizard(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
  }
  detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
  }
  widthChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setWidth(newValue);
    }
  }
  heightChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setHeight(newValue);
    }
  }
  showNextButtonChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setShowNextButton(getBooleanFromAttributeValue(newValue));
    }
  }
  finishButtonTextChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setFinishButtonText(newValue);
    }
  }
  enableBranchingChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setEnableBranching(getBooleanFromAttributeValue(newValue));
    }
  }
}
