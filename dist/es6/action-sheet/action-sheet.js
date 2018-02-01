import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-action-sheet')
@inject(Element)
export class Ui5ActionSheet extends Ui5Control{
        _actionsheet = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() placement = 'Bottom';
@bindable() showCancelButton = true;
@bindable() cancelButtonText = null;
@bindable() title = null;
@bindable() beforeOpen = this.defaultFunc;
@bindable() afterOpen = this.defaultFunc;
@bindable() beforeClose = this.defaultFunc;
@bindable() afterClose = this.defaultFunc;
@bindable() cancelButtonPress = this.defaultFunc;
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
        @computedFrom('_actionsheet')
        get UIElement() {
            return this._actionsheet;
          }
        fillProperties(params){
                                        params.placement = this.placement;
params.showCancelButton = getBooleanFromAttributeValue(this.showCancelButton);
params.cancelButtonText = this.cancelButtonText;
params.title = this.title;
params.beforeOpen = this.beforeOpen==null ? this.defaultFunc: this.beforeOpen;
params.afterOpen = this.afterOpen==null ? this.defaultFunc: this.afterOpen;
params.beforeClose = this.beforeClose==null ? this.defaultFunc: this.beforeClose;
params.afterClose = this.afterClose==null ? this.defaultFunc: this.afterClose;
params.cancelButtonPress = this.cancelButtonPress==null ? this.defaultFunc: this.cancelButtonPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._actionsheet = new sap.m.ActionSheet(this.ui5Id, params);
        else
          this._actionsheet = new sap.m.ActionSheet(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._actionsheet.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._actionsheet, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._actionsheet.placeAt)
                                                                this._actionsheet.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._actionsheet.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._actionsheet, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._actionsheet.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfButton(afterElement); if (_index)this._actionsheet.insertButton(child, _index + 1); else this._actionsheet.addButton(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._actionsheet.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfCustomData(afterElement); if (_index)this._actionsheet.insertCustomData(child, _index + 1); else this._actionsheet.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._actionsheet.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfDependent(afterElement); if (_index)this._actionsheet.insertDependent(child, _index + 1); else this._actionsheet.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'buttons') {  this._actionsheet.removeButton(child);}
if (relation == 'tooltip') {  this._actionsheet.destroyTooltip(child); }
if (relation == 'customdata') {  this._actionsheet.removeCustomData(child);}
if (relation == 'layoutdata') {  this._actionsheet.destroyLayoutData(child); }
if (relation == 'dependents') {  this._actionsheet.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    placementChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setPlacement(newValue);}}
showCancelButtonChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setShowCancelButton(getBooleanFromAttributeValue(newValue));}}
cancelButtonTextChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setCancelButtonText(newValue);}}
titleChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setTitle(newValue);}}
beforeOpenChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachBeforeOpen(newValue);}}
afterOpenChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachAfterOpen(newValue);}}
beforeCloseChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachBeforeClose(newValue);}}
afterCloseChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachAfterClose(newValue);}}
cancelButtonPressChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachCancelButtonPress(newValue);}}
busyChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }