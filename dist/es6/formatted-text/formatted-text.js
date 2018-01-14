import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-formatted-text')
@inject(Element)
export class Ui5FormattedText extends Ui5Control{
        _formattedtext = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() htmlText = '';
@bindable() width = null;
@bindable() convertLinksToAnchorTags = 'None';
@bindable() convertedLinksDefaultTarget = '_blank';
@bindable() height = null;
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
        @computedFrom('_formattedtext')
        get UIElement() {
            return this._formattedtext;
          }
        fillProperties(params){
               params.htmlText = this.htmlText;
params.width = this.width;
params.convertLinksToAnchorTags = this.convertLinksToAnchorTags;
params.convertedLinksDefaultTarget = this.convertedLinksDefaultTarget;
params.height = this.height;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._formattedtext = new sap.m.FormattedText(this.ui5Id, params);
        else
          this._formattedtext = new sap.m.FormattedText(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formattedtext.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formattedtext, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formattedtext, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formattedtext, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formattedtext.placeAt)
                                                                this._formattedtext.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formattedtext.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formattedtext, this._relation);
                                                            }
         else{
                                                                this._formattedtext.destroy();
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
    htmlTextChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setHtmlText(newValue);}}
widthChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setWidth(newValue);}}
convertLinksToAnchorTagsChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setConvertLinksToAnchorTags(newValue);}}
convertedLinksDefaultTargetChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setConvertedLinksDefaultTarget(newValue);}}
heightChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setHeight(newValue);}}
busyChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachValidateFieldGroup(newValue);}}


                                                                                }