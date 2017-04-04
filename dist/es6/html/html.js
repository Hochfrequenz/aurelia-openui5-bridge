import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-html')
@inject(Element)

export class Ui5Html {
   _html = null;

  constructor(element) {
    this.element = element;
  }

  attached() {

    this._html = new sap.ui.core.HTML(); 
    this._html.setContent(this.content.innerHTML);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._html,this.element);  
  }
}
