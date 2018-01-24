import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5EventProvider} from '../event-provider/event-provider';
@customElement('ui5-managed-object')
@inject(Element)
export class Ui5ManagedObject extends Ui5EventProvider{
        _managedobject = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_managedobject')
        get UIElement() {
            return this._managedobject;
          }
        fillProperties(params){
                                        params.validationSuccess = this.validationSuccess==null ? this.defaultFunc: this.validationSuccess;
params.validationError = this.validationError==null ? this.defaultFunc: this.validationError;
params.parseError = this.parseError==null ? this.defaultFunc: this.parseError;
params.formatError = this.formatError==null ? this.defaultFunc: this.formatError;
params.modelContextChange = this.modelContextChange==null ? this.defaultFunc: this.modelContextChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._managedobject = new sap.ui.base.ManagedObject(this.ui5Id, params);
        else
          this._managedobject = new sap.ui.base.ManagedObject(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._managedobject.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._managedobject, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._managedobject, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._managedobject, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._managedobject.placeAt)
                                                                this._managedobject.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._managedobject.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._managedobject, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._managedobject.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 
           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               
      }
      catch(err){}
                                                                            }
    validationSuccessChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }