import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-message-strip')
@inject(Element)
export class Ui5MessageStrip extends Ui5Control{
        _messagestrip = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() text = '';
@bindable() type = 'Information';
@bindable() customIcon = '';
@bindable() showIcon = false;
@bindable() showCloseButton = false;
@bindable() enableFormattedText = false;
@bindable() close = this.defaultFunc;
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
        @computedFrom('_messagestrip')
        get UIElement() {
            return this._messagestrip;
          }
        fillProperties(params){
                                        params.text = this.text;
params.type = this.type;
params.customIcon = this.customIcon;
params.showIcon = getBooleanFromAttributeValue(this.showIcon);
params.showCloseButton = getBooleanFromAttributeValue(this.showCloseButton);
params.enableFormattedText = getBooleanFromAttributeValue(this.enableFormattedText);
params.close = this.close==null ? this.defaultFunc: this.close;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._messagestrip = new sap.m.MessageStrip(this.ui5Id, params);
                                              else
          this._messagestrip = new sap.m.MessageStrip(params);
                                                  if(this.ui5Class)
           this._messagestrip.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._messagestrip.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messagestrip.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._messagestrip, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._messagestrip, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._messagestrip.placeAt)
                                                                this._messagestrip.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._messagestrip.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._messagestrip)
                                                                this._parent.removeChildByRelation(this._messagestrip, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messagestrip.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'link') { this._messagestrip.setLink(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._messagestrip.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messagestrip.insertCustomData(child, _index); else this._messagestrip.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messagestrip.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messagestrip.insertDependent(child, _index); else this._messagestrip.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messagestrip.insertDragDropConfig(child, _index); else this._messagestrip.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'link') {  this._messagestrip.destroyLink(child); }
if (relation == 'tooltip') {  this._messagestrip.destroyTooltip(child); }
if (relation == 'customdata') {  this._messagestrip.removeCustomData(child);}
if (relation == 'layoutdata') {  this._messagestrip.destroyLayoutData(child); }
if (relation == 'dependents') {  this._messagestrip.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._messagestrip.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.setText(newValue);}}
typeChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.setType(newValue);}}
customIconChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.setCustomIcon(newValue);}}
showIconChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.setShowIcon(getBooleanFromAttributeValue(newValue));}}
showCloseButtonChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.setShowCloseButton(getBooleanFromAttributeValue(newValue));}}
enableFormattedTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.setEnableFormattedText(getBooleanFromAttributeValue(newValue));}}
closeChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachClose(newValue);}}
busyChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._messagestrip!==null){ this._messagestrip.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }