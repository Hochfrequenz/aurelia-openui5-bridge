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
        @bindable() title = '';
@bindable() icon = '';
@bindable() validated = true;
@bindable() complete = this.defaultFunc;
@bindable() activate = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizardstep.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._wizardstep, this.element);
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
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfContent(afterElement); if (_index)this._wizardstep.insertContent(child, _index + 1); else this._wizardstep.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._wizardstep.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfCustomData(afterElement); if (_index)this._wizardstep.insertCustomData(child, _index + 1); else this._wizardstep.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._wizardstep.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfDependent(afterElement); if (_index)this._wizardstep.insertDependent(child, _index + 1); else this._wizardstep.addDependent(child, 0);  return elem.localName; }

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

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setTitle(newValue);}}
iconChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setIcon(newValue);}}
validatedChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setValidated(getBooleanFromAttributeValue(newValue));}}
completeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachComplete(newValue);}}
activateChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachActivate(newValue);}}
busyChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusyIndicatorDelay(newValue);}}
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