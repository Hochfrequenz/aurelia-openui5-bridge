import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-toolbar-spacer')
@inject(Element)
export class Ui5ToolbarSpacer extends Ui5Control{
        _toolbarspacer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = '';
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
        @computedFrom('_toolbarspacer')
        get UIElement() {
            return this._toolbarspacer;
          }
        fillProperties(params){
               params.width = this.width;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._toolbarspacer = new sap.m.ToolbarSpacer(this.ui5Id, params);
        else
          this._toolbarspacer = new sap.m.ToolbarSpacer(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._toolbarspacer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._toolbarspacer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._toolbarspacer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._toolbarspacer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._toolbarspacer.placeAt)
                                                                this._toolbarspacer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._toolbarspacer.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._toolbarspacer, this._relation);
                                                            }
         else{
                                                                this._toolbarspacer.destroy();
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
    widthChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setWidth(newValue);}}
busyChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidateFieldGroup(newValue);}}


                                                                                }