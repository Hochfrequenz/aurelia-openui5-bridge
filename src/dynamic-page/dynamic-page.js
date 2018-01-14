import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-dynamic-page')
@inject(Element)
export class Ui5DynamicPage extends Ui5Control{
        _dynamicpage = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() preserveHeaderStateOnScroll = false;
@bindable() headerExpanded = true;
@bindable() toggleHeaderOnTitleClick = true;
@bindable() showFooter = false;
@bindable() fitContent = false;
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
        @computedFrom('_dynamicpage')
        get UIElement() {
            return this._dynamicpage;
          }
        fillProperties(params){
               params.preserveHeaderStateOnScroll = getBooleanFromAttributeValue(this.preserveHeaderStateOnScroll);
params.headerExpanded = getBooleanFromAttributeValue(this.headerExpanded);
params.toggleHeaderOnTitleClick = getBooleanFromAttributeValue(this.toggleHeaderOnTitleClick);
params.showFooter = getBooleanFromAttributeValue(this.showFooter);
params.fitContent = getBooleanFromAttributeValue(this.fitContent);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._dynamicpage = new sap.f.DynamicPage(this.ui5Id, params);
        else
          this._dynamicpage = new sap.f.DynamicPage(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpage.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dynamicpage, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dynamicpage, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dynamicpage, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dynamicpage.placeAt)
                                                                this._dynamicpage.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dynamicpage.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._dynamicpage, this._relation);
                                                            }
         else{
                                                                this._dynamicpage.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'title') { this._dynamicpage.setTitle(child); return elem.localName;}
if (elem.localName == 'header') { this._dynamicpage.setHeader(child); return elem.localName;}
if (elem.localName == 'content') { this._dynamicpage.setContent(child); return elem.localName;}
if (elem.localName == 'footer') { this._dynamicpage.setFooter(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    preserveHeaderStateOnScrollChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setPreserveHeaderStateOnScroll(getBooleanFromAttributeValue(newValue));}}
headerExpandedChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setHeaderExpanded(getBooleanFromAttributeValue(newValue));}}
toggleHeaderOnTitleClickChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setToggleHeaderOnTitleClick(getBooleanFromAttributeValue(newValue));}}
showFooterChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setShowFooter(getBooleanFromAttributeValue(newValue));}}
fitContentChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setFitContent(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachValidateFieldGroup(newValue);}}


                                                                                }