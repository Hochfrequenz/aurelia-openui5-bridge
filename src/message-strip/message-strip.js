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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._messagestrip = new sap.m.MessageStrip(this.ui5Id, params);
        else
          this._messagestrip = new sap.m.MessageStrip(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messagestrip.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messagestrip, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._messagestrip, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._messagestrip, this.element);
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
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._messagestrip.indexOfCustomData(afterElement); if (_index)this._messagestrip.insertCustomData(child, _index + 1); else this._messagestrip.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messagestrip.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._messagestrip.indexOfDependent(afterElement); if (_index)this._messagestrip.insertDependent(child, _index + 1); else this._messagestrip.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'link') {  this._messagestrip.destroyLink(child); }
if (relation == 'tooltip') {  this._messagestrip.destroyTooltip(child); }
if (relation == 'customdata') {  this._messagestrip.removeCustomData(child);}
if (relation == 'layoutData') {  this._messagestrip.destroyLayoutData(child); }
if (relation == 'dependents') {  this._messagestrip.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setText(newValue);}}
typeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setType(newValue);}}
customIconChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setCustomIcon(newValue);}}
showIconChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setShowIcon(getBooleanFromAttributeValue(newValue));}}
showCloseButtonChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setShowCloseButton(getBooleanFromAttributeValue(newValue));}}
enableFormattedTextChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setEnableFormattedText(getBooleanFromAttributeValue(newValue));}}
closeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachClose(newValue);}}
busyChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }