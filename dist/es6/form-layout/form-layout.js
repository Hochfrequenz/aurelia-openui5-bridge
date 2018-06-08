import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-form-layout')
@inject(Element)
export class Ui5FormLayout extends Ui5Control{
        _formlayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        @bindable() backgroundDesign = 'Translucent';
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() busyIndicatorSize = 'Medium';
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;
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
        @computedFrom('_formlayout')
        get UIElement() {
            return this._formlayout;
          }
        fillProperties(params){
                                        params.backgroundDesign = this.backgroundDesign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._formlayout = new sap.ui.layout.form.FormLayout(this.ui5Id, params);
        else
          this._formlayout = new sap.ui.layout.form.FormLayout(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formlayout.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._formlayout, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._formlayout, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formlayout.placeAt)
                                                                this._formlayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formlayout.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._formlayout)
                                                                this._parent.removeChildByRelation(this._formlayout, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formlayout.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._formlayout.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._formlayout.insertCustomData(child, _index); else this._formlayout.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formlayout.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._formlayout.insertDependent(child, _index); else this._formlayout.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._formlayout.destroyTooltip(child); }
if (relation == 'customdata') {  this._formlayout.removeCustomData(child);}
if (relation == 'layoutdata') {  this._formlayout.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formlayout.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    backgroundDesignChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBackgroundDesign(newValue);}}
busyChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._formlayout!==null){ this._formlayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._formlayout!==null){ this._formlayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }