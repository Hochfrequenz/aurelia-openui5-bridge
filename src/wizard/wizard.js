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
        @bindable() width = 'auto';
@bindable() height = '100%';
@bindable() showNextButton = true;
@bindable() finishButtonText = 'Review';
@bindable() enableBranching = false;
@bindable() stepActivate = this.defaultFunc;
@bindable() complete = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;

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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._wizard = new sap.m.Wizard(this.ui5Id, params);
        else
          this._wizard = new sap.m.Wizard(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizard.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._wizard, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._wizard, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._wizard, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._wizard.placeAt)
                                                                this._wizard.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._wizard.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._wizard, this._relation);
                                                            }
         else{
                                                                this._wizard.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'steps') { var _index = null; if (afterElement) _index = this._wizard.indexOfStep(afterElement); if (_index)this._wizard.insertStep(child, _index + 1); else this._wizard.addStep(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'steps') {  this._wizard.removeStep(child); }

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
visibleChanged(newValue){if(this._wizard!==null){ this._wizard.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._wizard!==null){ this._wizard.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidateFieldGroup(newValue);}}


                                                                                }