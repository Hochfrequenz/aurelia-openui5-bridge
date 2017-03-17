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
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'step')
      this._step.addContent(child);
  }
  removeChild(child,elem)
  {
      var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'step')
      this._step.removeContent(child);
  }
  defaultFunc ()
  {

  }
  attached() {
    this._step = new sap.m.WizardStep({
      title: this.title,
      icon: this.icon,
      validated : getBooleanFromAttributeValue(this.validated),
      complete : this.complete,
      activate : this.activate
    });
    $(this.element).parents("ui5-wizard")[0].au.controller.viewModel.addChild(this._step,this.element);
  }
  detached() {
    $(this.element).parents("ui5-wizard")[0].au.controller.viewModel.removeChild(this._step,this.element);
  }
}
