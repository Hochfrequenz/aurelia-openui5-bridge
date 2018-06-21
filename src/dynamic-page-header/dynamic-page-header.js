import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-dynamic-page-header')
@inject(Element)
export class Ui5DynamicPageHeader extends Ui5Control{
        _dynamicpageheader = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() pinnable = true;
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
        @computedFrom('_dynamicpageheader')
        get UIElement() {
            return this._dynamicpageheader;
          }
        fillProperties(params){
                                        params.pinnable = getBooleanFromAttributeValue(this.pinnable);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._dynamicpageheader = new sap.f.DynamicPageHeader(this.ui5Id, params);
                                              else
          this._dynamicpageheader = new sap.f.DynamicPageHeader(params);
                                                  if(this.ui5Class)
           this._dynamicpageheader.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._dynamicpageheader.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpageheader.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._dynamicpageheader, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._dynamicpageheader, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dynamicpageheader.placeAt)
                                                                this._dynamicpageheader.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dynamicpageheader.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._dynamicpageheader)
                                                                this._parent.removeChildByRelation(this._dynamicpageheader, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dynamicpageheader.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dynamicpageheader.insertContent(child, _index); else this._dynamicpageheader.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._dynamicpageheader.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dynamicpageheader.insertCustomData(child, _index); else this._dynamicpageheader.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpageheader.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dynamicpageheader.insertDependent(child, _index); else this._dynamicpageheader.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._dynamicpageheader.removeContent(child);}
if (relation == 'tooltip') {  this._dynamicpageheader.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpageheader.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dynamicpageheader.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpageheader.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    pinnableChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setPinnable(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }