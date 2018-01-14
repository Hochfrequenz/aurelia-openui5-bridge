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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._wizardstep = new sap.m.WizardStep(this.ui5Id, params);
        else
          this._wizardstep = new sap.m.WizardStep(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizardstep.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._wizardstep, this._relation);
                                                            }
         else{
                                                                this._wizardstep.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfContent(afterElement); if (_index)this._wizardstep.insertContent(child, _index + 1); else this._wizardstep.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._wizardstep.removeContent(child); }

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


                                                                                }