import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-wizard-step')
@inject(Element)
export class Ui5WizardStep extends Ui5Control{
        _wizardstep = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() title = '';
@bindable() icon = '';
@bindable() validated = true;
@bindable() optional = false;
@bindable() complete = this.defaultFunc;
@bindable() activate = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() blocked = false;
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
        @computedFrom('_wizardstep')
        get UIElement() {
            return this._wizardstep;
          }
        fillProperties(params){
                                        params.title = this.title;
params.icon = this.icon;
params.validated = getBooleanFromAttributeValue(this.validated);
params.optional = getBooleanFromAttributeValue(this.optional);
params.complete = this.complete==null ? this.defaultFunc: this.complete;
params.activate = this.activate==null ? this.defaultFunc: this.activate;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._wizardstep = new sap.m.WizardStep(this.ui5Id, params);
                                              else
          this._wizardstep = new sap.m.WizardStep(params);
                                                  if(this.ui5Class)
           this._wizardstep.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._wizardstep.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizardstep.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._wizardstep, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._wizardstep, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._wizardstep.placeAt)
                                                                this._wizardstep.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._wizardstep.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._wizardstep)
                                                                this._parent.removeChildByRelation(this._wizardstep, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._wizardstep.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizardstep.insertContent(child, _index); else this._wizardstep.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._wizardstep.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizardstep.insertCustomData(child, _index); else this._wizardstep.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._wizardstep.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizardstep.insertDependent(child, _index); else this._wizardstep.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizardstep.insertDragDropConfig(child, _index); else this._wizardstep.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._wizardstep.removeContent(child);}
if (relation == 'tooltip') {  this._wizardstep.destroyTooltip(child); }
if (relation == 'customdata') {  this._wizardstep.removeCustomData(child);}
if (relation == 'layoutdata') {  this._wizardstep.destroyLayoutData(child); }
if (relation == 'dependents') {  this._wizardstep.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._wizardstep.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setTitle(newValue);}}
iconChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setIcon(newValue);}}
validatedChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setValidated(getBooleanFromAttributeValue(newValue));}}
optionalChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setOptional(getBooleanFromAttributeValue(newValue));}}
completeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachComplete(newValue);}}
activateChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachActivate(newValue);}}
blockedChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }