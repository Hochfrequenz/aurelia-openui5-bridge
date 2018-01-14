import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-html')
@inject(Element)
export class Ui5Html extends Ui5Control{
        _html = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() content = null;
@bindable() preferDOM = true;
@bindable() sanitizeContent = false;
@bindable() visible = true;
@bindable() afterRendering = this.defaultFunc;
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
        @computedFrom('_html')
        get UIElement() {
            return this._html;
          }
        fillProperties(params){
               params.content = this.content;
params.preferDOM = getBooleanFromAttributeValue(this.preferDOM);
params.sanitizeContent = getBooleanFromAttributeValue(this.sanitizeContent);
params.visible = getBooleanFromAttributeValue(this.visible);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._html = new sap.ui.core.HTML(this.ui5Id, params);
        else
          this._html = new sap.ui.core.HTML(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._html.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._html, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._html, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._html, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._html.placeAt)
                                                                this._html.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._html.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._html, this._relation);
                                                            }
         else{
                                                                this._html.destroy();
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
    contentChanged(newValue){if(this._html!==null){ this._html.setContent(newValue);}}
preferDOMChanged(newValue){if(this._html!==null){ this._html.setPreferDOM(getBooleanFromAttributeValue(newValue));}}
sanitizeContentChanged(newValue){if(this._html!==null){ this._html.setSanitizeContent(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._html!==null){ this._html.setVisible(getBooleanFromAttributeValue(newValue));}}
afterRenderingChanged(newValue){if(this._html!==null){ this._html.attachAfterRendering(newValue);}}
busyChanged(newValue){if(this._html!==null){ this._html.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._html!==null){ this._html.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._html!==null){ this._html.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._html!==null){ this._html.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._html!==null){ this._html.attachValidateFieldGroup(newValue);}}


                                                                                }