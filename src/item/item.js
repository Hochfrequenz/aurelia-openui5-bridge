import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-item')
@inject(Element)
export class Ui5Item extends Ui5Element{
        _item = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
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
        @computedFrom('_item')
        get UIElement() {
            return this._item;
          }
        fillProperties(params){
                                        params.text = this.text;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.textDirection = this.textDirection;
params.key = this.key;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._item = new sap.ui.core.Item(this.ui5Id, params);
                                              else
          this._item = new sap.ui.core.Item(params);
                                                  if(this.ui5Class)
           this._item.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._item.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._item.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._item, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._item, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._item.placeAt)
                                                                this._item.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._item.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._item)
                                                                this._parent.removeChildByRelation(this._item, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._item.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._item.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._item.insertCustomData(child, _index); else this._item.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._item.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._item.insertDependent(child, _index); else this._item.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._item.insertDragDropConfig(child, _index); else this._item.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._item.destroyTooltip(child); }
if (relation == 'customdata') {  this._item.removeCustomData(child);}
if (relation == 'layoutdata') {  this._item.destroyLayoutData(child); }
if (relation == 'dependents') {  this._item.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._item.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.setText(newValue);}}
enabledChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.setTextDirection(newValue);}}
keyChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.setKey(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._item!==null){ this._item.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }