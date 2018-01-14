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
        @bindable() backgroundDesign = 'Translucent';
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
        @computedFrom('_formlayout')
        get UIElement() {
            return this._formlayout;
          }
        fillProperties(params){
               params.backgroundDesign = this.backgroundDesign;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._formlayout = new sap.ui.layout.form.FormLayout(this.ui5Id, params);
        else
          this._formlayout = new sap.ui.layout.form.FormLayout(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formlayout.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formlayout, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formlayout, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formlayout, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formlayout, this._relation);
                                                            }
         else{
                                                                this._formlayout.destroy();
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
    backgroundDesignChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBackgroundDesign(newValue);}}
busyChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._formlayout!==null){ this._formlayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._formlayout!==null){ this._formlayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidateFieldGroup(newValue);}}


                                                                                }