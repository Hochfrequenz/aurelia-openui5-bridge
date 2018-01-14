import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-link')
@inject(Element)
export class Ui5Link extends Ui5Control{
        _link = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = '';
@bindable() enabled = true;
@bindable() target = null;
@bindable() width = null;
@bindable() href = null;
@bindable() wrapping = false;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() subtle = false;
@bindable() emphasized = false;
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
        @computedFrom('_link')
        get UIElement() {
            return this._link;
          }
        fillProperties(params){
               params.text = this.text;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.target = this.target;
params.width = this.width;
params.href = this.href;
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.subtle = getBooleanFromAttributeValue(this.subtle);
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._link = new sap.m.Link(this.ui5Id, params);
        else
          this._link = new sap.m.Link(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._link.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._link, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._link, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._link, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._link.placeAt)
                                                                this._link.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._link.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._link, this._relation);
                                                            }
         else{
                                                                this._link.destroy();
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
    textChanged(newValue){if(this._link!==null){ this._link.setText(newValue);}}
enabledChanged(newValue){if(this._link!==null){ this._link.setEnabled(getBooleanFromAttributeValue(newValue));}}
targetChanged(newValue){if(this._link!==null){ this._link.setTarget(newValue);}}
widthChanged(newValue){if(this._link!==null){ this._link.setWidth(newValue);}}
hrefChanged(newValue){if(this._link!==null){ this._link.setHref(newValue);}}
wrappingChanged(newValue){if(this._link!==null){ this._link.setWrapping(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._link!==null){ this._link.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._link!==null){ this._link.setTextDirection(newValue);}}
subtleChanged(newValue){if(this._link!==null){ this._link.setSubtle(getBooleanFromAttributeValue(newValue));}}
emphasizedChanged(newValue){if(this._link!==null){ this._link.setEmphasized(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._link!==null){ this._link.attachPress(newValue);}}
busyChanged(newValue){if(this._link!==null){ this._link.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._link!==null){ this._link.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._link!==null){ this._link.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._link!==null){ this._link.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._link!==null){ this._link.attachValidateFieldGroup(newValue);}}


                                                                                }