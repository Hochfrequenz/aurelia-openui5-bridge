import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item} from '../item/item';
@customElement('ui5-message-item')
@inject(Element)
export class Ui5MessageItem extends Ui5Item{
        _messageitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() type = 'Error';
@bindable() title = '';
@bindable() subtitle = null;
@bindable() description = '';
@bindable() markupDescription = false;
@bindable() longtextUrl = null;
@bindable() counter = null;
@bindable() groupName = '';
@bindable() activeTitle = false;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_messageitem')
        get UIElement() {
            return this._messageitem;
          }
        fillProperties(params){
                                        params.type = this.type;
params.title = this.title;
params.subtitle = this.subtitle;
params.description = this.description;
params.markupDescription = getBooleanFromAttributeValue(this.markupDescription);
params.longtextUrl = this.longtextUrl;
params.counter = this.counter?parseInt(this.counter):0;
params.groupName = this.groupName;
params.activeTitle = getBooleanFromAttributeValue(this.activeTitle);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._messageitem = new sap.m.MessageItem(this.ui5Id, params);
                                              else
          this._messageitem = new sap.m.MessageItem(params);
                                                  if(this.ui5Class)
           this._messageitem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._messageitem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._messageitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._messageitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._messageitem.placeAt)
                                                                this._messageitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._messageitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._messageitem)
                                                                this._parent.removeChildByRelation(this._messageitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messageitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'link') { this._messageitem.setLink(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._messageitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageitem.insertCustomData(child, _index); else this._messageitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messageitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageitem.insertDependent(child, _index); else this._messageitem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._messageitem.insertDragDropConfig(child, _index); else this._messageitem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'link') {  this._messageitem.destroyLink(child); }
if (relation == 'tooltip') {  this._messageitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._messageitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._messageitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._messageitem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._messageitem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setType(newValue);}}
titleChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setTitle(newValue);}}
subtitleChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setSubtitle(newValue);}}
descriptionChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setDescription(newValue);}}
markupDescriptionChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setMarkupDescription(getBooleanFromAttributeValue(newValue));}}
longtextUrlChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setLongtextUrl(newValue);}}
counterChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setCounter(newValue);}}
groupNameChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setGroupName(newValue);}}
activeTitleChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.setActiveTitle(getBooleanFromAttributeValue(newValue));}}
textChanged(newValue){if(this._messageitem!==null){ this._messageitem.setText(newValue);}}
enabledChanged(newValue){if(this._messageitem!==null){ this._messageitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._messageitem!==null){ this._messageitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._messageitem!==null){ this._messageitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }