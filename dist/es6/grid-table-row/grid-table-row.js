import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-grid-table-row')
@inject(Element)
export class Ui5gridTableRow extends Ui5Element{
        _gridtablerow = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
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
        @computedFrom('_gridtablerow')
        get UIElement() {
            return this._gridtablerow;
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
          this._gridtablerow = new sap.ui.table.Row(this.ui5Id, params);
                                              else
          this._gridtablerow = new sap.ui.table.Row(params);
                                                  if(this.ui5Class)
           this._gridtablerow.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._gridtablerow.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._gridtablerow.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._gridtablerow, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._gridtablerow, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._gridtablerow.placeAt)
                                                                this._gridtablerow.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._gridtablerow.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._gridtablerow)
                                                                this._parent.removeChildByRelation(this._gridtablerow, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._gridtablerow.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'cells') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerow.insertCell(child, _index); else this._gridtablerow.addCell(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._gridtablerow.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerow.insertCustomData(child, _index); else this._gridtablerow.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._gridtablerow.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerow.insertDependent(child, _index); else this._gridtablerow.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerow.insertDragDropConfig(child, _index); else this._gridtablerow.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'cells') {  this._gridtablerow.removeCell(child);}
if (relation == 'tooltip') {  this._gridtablerow.destroyTooltip(child); }
if (relation == 'customdata') {  this._gridtablerow.removeCustomData(child);}
if (relation == 'layoutdata') {  this._gridtablerow.destroyLayoutData(child); }
if (relation == 'dependents') {  this._gridtablerow.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._gridtablerow.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._gridtablerow!==null){ this._gridtablerow.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._gridtablerow!==null){ this._gridtablerow.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._gridtablerow!==null){ this._gridtablerow.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._gridtablerow!==null){ this._gridtablerow.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._gridtablerow!==null){ this._gridtablerow.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }