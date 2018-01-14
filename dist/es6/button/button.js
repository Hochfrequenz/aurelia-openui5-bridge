import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-button')
@inject(Element)
export class Ui5Button extends Ui5Control{
        _button = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = null;
@bindable() type = 'Default';
@bindable() width = null;
@bindable() enabled = true;
@bindable() icon = null;
@bindable() iconFirst = true;
@bindable() activeIcon = null;
@bindable() iconDensityAware = true;
@bindable() textDirection = 'Inherit';
@bindable() tap = this.defaultFunc;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_button')
        get UIElement() {
            return this._button;
          }
        fillProperties(params){
               params.text = this.text;
params.type = this.type;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.icon = this.icon;
params.iconFirst = getBooleanFromAttributeValue(this.iconFirst);
params.activeIcon = this.activeIcon;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.textDirection = this.textDirection;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._button = new sap.m.Button(this.ui5Id, params);
        else
          this._button = new sap.m.Button(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._button.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._button, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._button, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._button, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._button.placeAt)
                                                                this._button.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._button.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._button, this._relation);
                                                            }
         else{
                                                                this._button.destroy();
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
    textChanged(newValue){if(this._button!==null){ this._button.setText(newValue);}}
typeChanged(newValue){if(this._button!==null){ this._button.setType(newValue);}}
widthChanged(newValue){if(this._button!==null){ this._button.setWidth(newValue);}}
enabledChanged(newValue){if(this._button!==null){ this._button.setEnabled(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._button!==null){ this._button.setIcon(newValue);}}
iconFirstChanged(newValue){if(this._button!==null){ this._button.setIconFirst(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._button!==null){ this._button.setActiveIcon(newValue);}}
iconDensityAwareChanged(newValue){if(this._button!==null){ this._button.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._button!==null){ this._button.setTextDirection(newValue);}}
tapChanged(newValue){if(this._button!==null){ this._button.attachTap(newValue);}}
pressChanged(newValue){if(this._button!==null){ this._button.attachPress(newValue);}}
busyChanged(newValue){if(this._button!==null){ this._button.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._button!==null){ this._button.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._button!==null){ this._button.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._button!==null){ this._button.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._button!==null){ this._button.attachValidateFieldGroup(newValue);}}


                                                                                }