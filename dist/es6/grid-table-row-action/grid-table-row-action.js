import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-grid-table-row-action')
@inject(Element)
export class Ui5gridTableRowAction extends Ui5Control{
        _gridtablerowaction = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() visible = true;
/* inherited from sap.ui.core.Control*/
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
        @computedFrom('_gridtablerowaction')
        get UIElement() {
            return this._gridtablerowaction;
          }
        fillProperties(params){
                                        params.visible = getBooleanFromAttributeValue(this.visible);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._gridtablerowaction = new sap.ui.table.RowAction(this.ui5Id, params);
                                              else
          this._gridtablerowaction = new sap.ui.table.RowAction(params);
                                                  if(this.ui5Class)
           this._gridtablerowaction.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._gridtablerowaction.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._gridtablerowaction.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._gridtablerowaction, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._gridtablerowaction, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._gridtablerowaction.placeAt)
                                                                this._gridtablerowaction.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._gridtablerowaction.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._gridtablerowaction)
                                                                this._parent.removeChildByRelation(this._gridtablerowaction, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._gridtablerowaction.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowaction.insertItem(child, _index); else this._gridtablerowaction.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._gridtablerowaction.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowaction.insertCustomData(child, _index); else this._gridtablerowaction.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._gridtablerowaction.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowaction.insertDependent(child, _index); else this._gridtablerowaction.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowaction.insertDragDropConfig(child, _index); else this._gridtablerowaction.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._gridtablerowaction.removeItem(child);}
if (relation == 'tooltip') {  this._gridtablerowaction.destroyTooltip(child); }
if (relation == 'customdata') {  this._gridtablerowaction.removeCustomData(child);}
if (relation == 'layoutdata') {  this._gridtablerowaction.destroyLayoutData(child); }
if (relation == 'dependents') {  this._gridtablerowaction.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._gridtablerowaction.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.setVisible(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._gridtablerowaction!==null){ this._gridtablerowaction.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._gridtablerowaction!==null){ this._gridtablerowaction.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._gridtablerowaction!==null){ this._gridtablerowaction.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._gridtablerowaction!==null){ this._gridtablerowaction.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._gridtablerowaction!==null){ this._gridtablerowaction.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowaction!==null){ this._gridtablerowaction.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }