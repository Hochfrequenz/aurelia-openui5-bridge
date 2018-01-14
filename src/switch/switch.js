import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-switch')
@inject(Element)
export class Ui5Switch extends Ui5Control{
        _switch = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() state = false;
@bindable() customTextOn = '';
@bindable() customTextOff = '';
@bindable() enabled = true;
@bindable() name = '';
@bindable() type = 'Default';
@bindable() change = this.defaultFunc;
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
        @computedFrom('_switch')
        get UIElement() {
            return this._switch;
          }
        fillProperties(params){
               params.state = getBooleanFromAttributeValue(this.state);
params.customTextOn = this.customTextOn;
params.customTextOff = this.customTextOff;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.name = this.name;
params.type = this.type;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._switch = new sap.m.Switch(this.ui5Id, params);
        else
          this._switch = new sap.m.Switch(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._switch.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._switch, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._switch, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._switch, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._switch.placeAt)
                                                                this._switch.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._switch.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._switch, this._relation);
                                                            }
         else{
                                                                this._switch.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                
                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    stateChanged(newValue){if(this._switch!==null){ this._switch.setState(getBooleanFromAttributeValue(newValue));}}
customTextOnChanged(newValue){if(this._switch!==null){ this._switch.setCustomTextOn(newValue);}}
customTextOffChanged(newValue){if(this._switch!==null){ this._switch.setCustomTextOff(newValue);}}
enabledChanged(newValue){if(this._switch!==null){ this._switch.setEnabled(getBooleanFromAttributeValue(newValue));}}
nameChanged(newValue){if(this._switch!==null){ this._switch.setName(newValue);}}
typeChanged(newValue){if(this._switch!==null){ this._switch.setType(newValue);}}
changeChanged(newValue){if(this._switch!==null){ this._switch.attachChange(newValue);}}
busyChanged(newValue){if(this._switch!==null){ this._switch.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._switch!==null){ this._switch.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._switch!==null){ this._switch.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._switch!==null){ this._switch.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._switch!==null){ this._switch.attachValidateFieldGroup(newValue);}}


                                                                                }