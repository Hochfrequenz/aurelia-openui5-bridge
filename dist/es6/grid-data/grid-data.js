import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-grid-data')
@inject(Element)

export class Ui5GridData {
   _gridData = null;
   @bindable() id = null;
   @bindable() span = null;
  
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._gridData = new sap.ui.layout.GridData({
      span : this.span,
    
    }); 
    $(this.element).parents("[ui5-layout]")[0].au.controller.viewModel.addChild(this._gridData,this.element);  
  }
   spanChanged(newValue) {
    if (this._gridData !== null) {
      this._gridData.setSpan(newValue);
    }
  }
  
}
