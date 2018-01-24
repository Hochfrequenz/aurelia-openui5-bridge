import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-message-view')
@inject(Element)
export class Ui5MessageView {
        _messageview = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() asyncDescriptionHandler = null;
@bindable() asyncURLHandler = null;
@bindable() groupItems = false;
@bindable() afterOpen = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() listSelect = this.defaultFunc;
@bindable() longtextLoaded = this.defaultFunc;
@bindable() urlValidated = this.defaultFunc;

                constructor(element) {
                                        
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
params.afterOpen = this.afterOpen==null ? this.defaultFunc: this.afterOpen;
params.itemSelect = this.itemSelect==null ? this.defaultFunc: this.itemSelect;
params.listSelect = this.listSelect==null ? this.defaultFunc: this.listSelect;
params.longtextLoaded = this.longtextLoaded==null ? this.defaultFunc: this.longtextLoaded;
params.urlValidated = this.urlValidated==null ? this.defaultFunc: this.urlValidated;
            
                                               
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageview.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messageview, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._messageview, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._messageview, this.element);
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
                                                                this._parent.removeChildByRelation(this._messageview, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messageview.destroy();
                                                            }
         
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._messageview.indexOfItem(afterElement); if (_index)this._messageview.insertItem(child, _index + 1); else this._messageview.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'headerbutton') { this._messageview.setHeaderButton(child); return elem.localName;}

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._messageview.removeItem(child);}
if (relation == 'headerButton') {  this._messageview.destroyHeaderButton(child); }

      }
      catch(err){}
                                                                            }
    asyncDescriptionHandlerChanged(newValue){if(this._messageview!==null){ this._messageview.setAsyncDescriptionHandler(newValue);}}
asyncURLHandlerChanged(newValue){if(this._messageview!==null){ this._messageview.setAsyncURLHandler(newValue);}}
groupItemsChanged(newValue){if(this._messageview!==null){ this._messageview.setGroupItems(getBooleanFromAttributeValue(newValue));}}
afterOpenChanged(newValue){if(this._messageview!==null){ this._messageview.attachAfterOpen(newValue);}}
itemSelectChanged(newValue){if(this._messageview!==null){ this._messageview.attachItemSelect(newValue);}}
listSelectChanged(newValue){if(this._messageview!==null){ this._messageview.attachListSelect(newValue);}}
longtextLoadedChanged(newValue){if(this._messageview!==null){ this._messageview.attachLongtextLoaded(newValue);}}
urlValidatedChanged(newValue){if(this._messageview!==null){ this._messageview.attachUrlValidated(newValue);}}


                                                                                }