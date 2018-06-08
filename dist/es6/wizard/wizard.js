import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-wizard')
@inject(Element)
export class Ui5Wizard extends Ui5Control{
        _wizard = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        @bindable() width = 'auto';
@bindable() height = '100%';
@bindable() showNextButton = true;
@bindable() finishButtonText = 'Review';
@bindable() enableBranching = false;
@bindable() lastStep = false;
@bindable() stepActivate = this.defaultFunc;
@bindable() complete = this.defaultFunc;
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
        @computedFrom('_wizard')
        get UIElement() {
            return this._wizard;
          }
        fillProperties(params){
                                        params.width = this.width;
params.height = this.height;
params.showNextButton = getBooleanFromAttributeValue(this.showNextButton);
params.finishButtonText = this.finishButtonText;
params.enableBranching = getBooleanFromAttributeValue(this.enableBranching);
params.stepActivate = this.stepActivate==null ? this.defaultFunc: this.stepActivate;
params.complete = this.complete==null ? this.defaultFunc: this.complete;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._wizard = new sap.m.Wizard(this.ui5Id, params);
        else
          this._wizard = new sap.m.Wizard(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizard.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._wizard, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._wizard, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._wizard.placeAt)
                                                                this._wizard.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._wizard.attachStepActivate((event) => { that.lastStep = event.mParameters.index == that._wizard.getSteps().length;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._wizard.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._wizard)
                                                                this._parent.removeChildByRelation(this._wizard, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._wizard.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'steps') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizard.addStep(child, _index); else this._wizard.addStep(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._wizard.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizard.addCustomData(child, _index); else this._wizard.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._wizard.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._wizard.addDependent(child, _index); else this._wizard.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'steps') {  this._wizard.removeStep(child);}
if (relation == 'tooltip') {  this._wizard.destroyTooltip(child); }
if (relation == 'customdata') {  this._wizard.removeCustomData(child);}
if (relation == 'layoutdata') {  this._wizard.destroyLayoutData(child); }
if (relation == 'dependents') {  this._wizard.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._wizard!==null){ this._wizard.setWidth(newValue);}}
heightChanged(newValue){if(this._wizard!==null){ this._wizard.setHeight(newValue);}}
showNextButtonChanged(newValue){if(this._wizard!==null){ this._wizard.setShowNextButton(getBooleanFromAttributeValue(newValue));}}
finishButtonTextChanged(newValue){if(this._wizard!==null){ this._wizard.setFinishButtonText(newValue);}}
enableBranchingChanged(newValue){if(this._wizard!==null){ this._wizard.setEnableBranching(getBooleanFromAttributeValue(newValue));}}
stepActivateChanged(newValue){if(this._wizard!==null){ this._wizard.attachStepActivate(newValue);}}
completeChanged(newValue){if(this._wizard!==null){ this._wizard.attachComplete(newValue);}}
busyChanged(newValue){if(this._wizard!==null){ this._wizard.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._wizard!==null){ this._wizard.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._wizard!==null){ this._wizard.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._wizard!==null){ this._wizard.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._wizard!==null){ this._wizard.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._wizard!==null){ this._wizard.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._wizard!==null){ this._wizard.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._wizard!==null){ this._wizard.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }