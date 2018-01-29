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
        @bindable() type = 'Error';
@bindable() title = '';
@bindable() subtitle = null;
@bindable() description = '';
@bindable() markupDescription = false;
@bindable() longtextUrl = null;
@bindable() counter = null;
@bindable() groupName = '';
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._messageitem, this.element);
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
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._messageitem.indexOfCustomData(afterElement); if (_index)this._messageitem.insertCustomData(child, _index + 1); else this._messageitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messageitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._messageitem.indexOfDependent(afterElement); if (_index)this._messageitem.insertDependent(child, _index + 1); else this._messageitem.addDependent(child, 0);  return elem.localName; }

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

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._messageitem!==null){ this._messageitem.setType(newValue);}}
titleChanged(newValue){if(this._messageitem!==null){ this._messageitem.setTitle(newValue);}}
subtitleChanged(newValue){if(this._messageitem!==null){ this._messageitem.setSubtitle(newValue);}}
descriptionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setDescription(newValue);}}
markupDescriptionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setMarkupDescription(getBooleanFromAttributeValue(newValue));}}
longtextUrlChanged(newValue){if(this._messageitem!==null){ this._messageitem.setLongtextUrl(newValue);}}
counterChanged(newValue){if(this._messageitem!==null){ this._messageitem.setCounter(newValue);}}
groupNameChanged(newValue){if(this._messageitem!==null){ this._messageitem.setGroupName(newValue);}}
textChanged(newValue){if(this._messageitem!==null){ this._messageitem.setText(newValue);}}
enabledChanged(newValue){if(this._messageitem!==null){ this._messageitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._messageitem!==null){ this._messageitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }