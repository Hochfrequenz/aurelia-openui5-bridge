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
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messagestrip, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._messagestrip, this._relation);
                                                            }
         else{
                                                                this._messagestrip.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'link') { this._messagestrip.setLink(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
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


                                                                                }