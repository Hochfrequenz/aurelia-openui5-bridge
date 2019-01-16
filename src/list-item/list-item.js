import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item} from '../item/item';
@customElement('ui5-list-item')
@inject(Element)
export class Ui5ListItem extends Ui5Item{
        _listitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() icon = null;
@bindable() additionalText = null;
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
        @computedFrom('_listitem')
        get UIElement() {
            return this._listitem;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.additionalText = this.additionalText;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._listitem = new sap.ui.core.ListItem(this.ui5Id, params);
                                              else
          this._listitem = new sap.ui.core.ListItem(params);
                                                  if(this.ui5Class)
           this._listitem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._listitem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._listitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._listitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._listitem.placeAt)
                                                                this._listitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._listitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._listitem)
                                                                this._parent.removeChildByRelation(this._listitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._listitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._listitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listitem.insertCustomData(child, _index); else this._listitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._listitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listitem.insertDependent(child, _index); else this._listitem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listitem.insertDragDropConfig(child, _index); else this._listitem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._listitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._listitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._listitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._listitem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._listitem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.setIcon(newValue);}}
additionalTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.setAdditionalText(newValue);}}
textChanged(newValue){if(this._listitem!==null){ this._listitem.setText(newValue);}}
enabledChanged(newValue){if(this._listitem!==null){ this._listitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._listitem!==null){ this._listitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._listitem!==null){ this._listitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitem!==null){ this._listitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }