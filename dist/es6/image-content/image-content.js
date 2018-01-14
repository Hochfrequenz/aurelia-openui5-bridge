import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-image-content')
@inject(Element)
export class Ui5ImageContent extends Ui5Control{
        _imagecontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() src = null;
@bindable() description = null;
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
        @computedFrom('_imagecontent')
        get UIElement() {
            return this._imagecontent;
          }
        fillProperties(params){
               params.src = this.src;
params.description = this.description;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._imagecontent = new sap.m.ImageContent(this.ui5Id, params);
        else
          this._imagecontent = new sap.m.ImageContent(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._imagecontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._imagecontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._imagecontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._imagecontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._imagecontent.placeAt)
                                                                this._imagecontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._imagecontent.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._imagecontent, this._relation);
                                                            }
         else{
                                                                this._imagecontent.destroy();
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
    srcChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setSrc(newValue);}}
descriptionChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setDescription(newValue);}}
pressChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachPress(newValue);}}
busyChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidateFieldGroup(newValue);}}


                                                                                }