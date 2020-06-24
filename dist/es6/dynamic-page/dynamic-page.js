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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() preserveHeaderStateOnScroll = false;
@bindable() headerExpanded = true;
@bindable() toggleHeaderOnTitleClick = true;
@bindable() showFooter = false;
@bindable() backgroundDesign = 'Standard';
@bindable() fitContent = false;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() busyIndicatorSize = 'Medium';
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
@bindable() validationSuccess = this.defaultFunc;
@bindable() validationError = this.defaultFunc;
@bindable() parseError = this.defaultFunc;
@bindable() formatError = this.defaultFunc;
@bindable() modelContextChange = this.defaultFunc;
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/

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
params.backgroundDesign = this.backgroundDesign;
params.fitContent = getBooleanFromAttributeValue(this.fitContent);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._dynamicpage = new sap.f.DynamicPage(this.ui5Id, params);
                                              else
          this._dynamicpage = new sap.f.DynamicPage(params);
                                                  if(this.ui5Class)
           this._dynamicpage.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._dynamicpage.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpage.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._dynamicpage, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._dynamicpage, this.element, this.prevId);
        
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._dynamicpage)
                                                                this._parent.removeChildByRelation(this._dynamicpage, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dynamicpage.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'title-elem') { this._dynamicpage.setTitle(child); return elem.localName;}
if (elem.localName == 'header') { this._dynamicpage.setHeader(child); return elem.localName;}
if (elem.localName == 'content') { this._dynamicpage.setContent(child); return elem.localName;}
if (elem.localName == 'footer') { this._dynamicpage.setFooter(child); return elem.localName;}
if (elem.localName == 'landmarkinfo') { this._dynamicpage.setLandmarkInfo(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._dynamicpage.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dynamicpage.insertCustomData(child, _index); else this._dynamicpage.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpage.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dynamicpage.insertDependent(child, _index); else this._dynamicpage.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dynamicpage.insertDragDropConfig(child, _index); else this._dynamicpage.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'title-elem') {  this._dynamicpage.destroyTitle(child); }
if (relation == 'header') {  this._dynamicpage.destroyHeader(child); }
if (relation == 'content') {  this._dynamicpage.destroyContent(child); }
if (relation == 'footer') {  this._dynamicpage.destroyFooter(child); }
if (relation == 'landmarkinfo') {  this._dynamicpage.destroyLandmarkInfo(child); }
if (relation == 'tooltip') {  this._dynamicpage.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpage.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dynamicpage.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpage.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._dynamicpage.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    preserveHeaderStateOnScrollChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.setPreserveHeaderStateOnScroll(getBooleanFromAttributeValue(newValue));}}
headerExpandedChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.setHeaderExpanded(getBooleanFromAttributeValue(newValue));}}
toggleHeaderOnTitleClickChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.setToggleHeaderOnTitleClick(getBooleanFromAttributeValue(newValue));}}
showFooterChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.setShowFooter(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.setBackgroundDesign(newValue);}}
fitContentChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.setFitContent(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._dynamicpage!==null){ this._dynamicpage.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }