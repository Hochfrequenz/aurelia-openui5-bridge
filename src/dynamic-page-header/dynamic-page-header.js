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
        @bindable() pinnable = true;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpageheader.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dynamicpageheader, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dynamicpageheader, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dynamicpageheader, this.element);
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
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._dynamicpageheader.indexOfContent(afterElement); if (_index)this._dynamicpageheader.insertContent(child, _index + 1); else this._dynamicpageheader.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._dynamicpageheader.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._dynamicpageheader.indexOfCustomData(afterElement); if (_index)this._dynamicpageheader.insertCustomData(child, _index + 1); else this._dynamicpageheader.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpageheader.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._dynamicpageheader.indexOfDependent(afterElement); if (_index)this._dynamicpageheader.insertDependent(child, _index + 1); else this._dynamicpageheader.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._dynamicpageheader.removeContent(child);}
if (relation == 'tooltip') {  this._dynamicpageheader.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpageheader.removeCustomData(child);}
if (relation == 'layoutData') {  this._dynamicpageheader.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpageheader.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    pinnableChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setPinnable(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusyIndicatorDelay(newValue);}}
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