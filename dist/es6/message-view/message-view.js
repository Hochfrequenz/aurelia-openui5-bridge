import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-message-view')
@inject(Element)
export class Ui5MessageView extends Ui5Control{
        _messageview = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() asyncDescriptionHandler = null;
@bindable() asyncURLHandler = null;
@bindable() groupItems = false;
@bindable() showDetailsPageHeader = true;
@bindable() afterOpen = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() listSelect = this.defaultFunc;
@bindable() longtextLoaded = this.defaultFunc;
@bindable() urlValidated = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() blocked = false;
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
        @computedFrom('_messageview')
        get UIElement() {
            return this._messageview;
          }
        fillProperties(params){
                                        params.asyncDescriptionHandler = this.asyncDescriptionHandler;
params.asyncURLHandler = this.asyncURLHandler;
params.groupItems = getBooleanFromAttributeValue(this.groupItems);
params.showDetailsPageHeader = getBooleanFromAttributeValue(this.showDetailsPageHeader);
params.afterOpen = this.afterOpen==null ? this.defaultFunc: this.afterOpen;
params.itemSelect = this.itemSelect==null ? this.defaultFunc: this.itemSelect;
params.listSelect = this.listSelect==null ? this.defaultFunc: this.listSelect;
params.longtextLoaded = this.longtextLoaded==null ? this.defaultFunc: this.longtextLoaded;
params.urlValidated = this.urlValidated==null ? this.defaultFunc: this.urlValidated;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._messageview = new sap.m.MessageView(this.ui5Id, params);
                                              else
          this._messageview = new sap.m.MessageView(params);
                                                  if(this.ui5Class)
           this._messageview.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._messageview.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageview.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._messageview, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._messageview, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._messageview.placeAt)
                                                                this._messageview.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._messageview.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._messageview)
                                                                this._parent.removeChildByRelation(this._messageview, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messageview.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageview.insertItem(child, _index); else this._messageview.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'headerbutton') { this._messageview.setHeaderButton(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._messageview.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageview.insertCustomData(child, _index); else this._messageview.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messageview.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageview.insertDependent(child, _index); else this._messageview.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageview.insertDragDropConfig(child, _index); else this._messageview.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._messageview.removeItem(child);}
if (relation == 'headerbutton') {  this._messageview.destroyHeaderButton(child); }
if (relation == 'tooltip') {  this._messageview.destroyTooltip(child); }
if (relation == 'customdata') {  this._messageview.removeCustomData(child);}
if (relation == 'layoutdata') {  this._messageview.destroyLayoutData(child); }
if (relation == 'dependents') {  this._messageview.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._messageview.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    asyncDescriptionHandlerChanged(newValue){if(this._messageview!==null){ this._messageview.setAsyncDescriptionHandler(newValue);}}
asyncURLHandlerChanged(newValue){if(this._messageview!==null){ this._messageview.setAsyncURLHandler(newValue);}}
groupItemsChanged(newValue){if(this._messageview!==null){ this._messageview.setGroupItems(getBooleanFromAttributeValue(newValue));}}
showDetailsPageHeaderChanged(newValue){if(this._messageview!==null){ this._messageview.setShowDetailsPageHeader(getBooleanFromAttributeValue(newValue));}}
afterOpenChanged(newValue){if(this._messageview!==null){ this._messageview.attachAfterOpen(newValue);}}
itemSelectChanged(newValue){if(this._messageview!==null){ this._messageview.attachItemSelect(newValue);}}
listSelectChanged(newValue){if(this._messageview!==null){ this._messageview.attachListSelect(newValue);}}
longtextLoadedChanged(newValue){if(this._messageview!==null){ this._messageview.attachLongtextLoaded(newValue);}}
urlValidatedChanged(newValue){if(this._messageview!==null){ this._messageview.attachUrlValidated(newValue);}}
blockedChanged(newValue){if(this._messageview!==null){ this._messageview.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._messageview!==null){ this._messageview.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._messageview!==null){ this._messageview.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._messageview!==null){ this._messageview.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._messageview!==null){ this._messageview.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._messageview!==null){ this._messageview.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._messageview!==null){ this._messageview.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._messageview!==null){ this._messageview.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._messageview!==null){ this._messageview.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._messageview!==null){ this._messageview.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._messageview!==null){ this._messageview.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._messageview!==null){ this._messageview.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }