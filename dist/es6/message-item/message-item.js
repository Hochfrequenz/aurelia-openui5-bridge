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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._messageitem = new sap.m.MessageItem(this.ui5Id, params);
        else
          this._messageitem = new sap.m.MessageItem(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._messageitem, this._relation);
                                                            }
         else{
                                                                this._messageitem.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'link') { this._messageitem.setLink(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
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


                                                                                }