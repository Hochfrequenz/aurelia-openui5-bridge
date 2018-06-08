import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Object} from '../object/object';
@customElement('ui5-event-provider')
@inject(Element)
export class Ui5EventProvider extends Ui5Object{
        _eventprovider = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        /* inherited from sap.ui.base.Object*/

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_eventprovider')
        get UIElement() {
            return this._eventprovider;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._eventprovider = new sap.ui.base.EventProvider(this.ui5Id, params);
        else
          this._eventprovider = new sap.ui.base.EventProvider(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._eventprovider.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._eventprovider, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._eventprovider, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._eventprovider.placeAt)
                                                                this._eventprovider.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._eventprovider.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._eventprovider)
                                                                this._parent.removeChildByRelation(this._eventprovider, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._eventprovider.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 
           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               
      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.base.Object*/


                                                                                }