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
@bindable() cancelButtonTap = this.defaultFunc;
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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._actionsheet = new sap.m.ActionSheet(this.ui5Id, params);
        else
          this._actionsheet = new sap.m.ActionSheet(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._actionsheet.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._actionsheet, this._relation);
                                                            }
         else{
                                                                this._actionsheet.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfButton(afterElement); if (_index)this._actionsheet.insertButton(child, _index + 1); else this._actionsheet.addButton(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'buttons') {  this._actionsheet.removeButton(child); }

                                                                            }
    placementChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setPlacement(newValue);}}
showCancelButtonChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setShowCancelButton(getBooleanFromAttributeValue(newValue));}}
cancelButtonTextChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setCancelButtonText(newValue);}}
titleChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setTitle(newValue);}}
cancelButtonTapChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachCancelButtonTap(newValue);}}
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


                                                                                }