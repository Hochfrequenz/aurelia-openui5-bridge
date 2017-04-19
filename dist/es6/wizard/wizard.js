import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-wizard')
@inject(Element)
export class Ui5Wizard {
   _wizard = null;

  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'wizard')
      this._wizard.addStep(child);
  }
  removeChild(child,elem)
  {
      var path = $(elem).parentsUntil(this.element);
    //FIXME: Dynamic step removal is not supported by openui5 yet, will be removed with the wizard itself
    //if (path[0].localName == 'wizard')
     // this._wizard.removeStep(child);
  }
  attached() {
    this._wizard = new sap.m.Wizard();
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard,this.element);
  }
  detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard,this.element);
  }
}
