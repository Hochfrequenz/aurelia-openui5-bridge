import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-grid-table-row-setting')
@inject(Element)
export class Ui5gridTableRowSetting extends Ui5Element{
        _gridtablerowsetting = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() highlight = 'None';
@bindable() highlightText = '';
@bindable() navigated = false;
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
        @computedFrom('_gridtablerowsetting')
        get UIElement() {
            return this._gridtablerowsetting;
          }
        fillProperties(params){
                                        params.highlight = this.highlight;
params.highlightText = this.highlightText;
params.navigated = getBooleanFromAttributeValue(this.navigated);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._gridtablerowsetting = new sap.ui.table.RowSettings(this.ui5Id, params);
                                              else
          this._gridtablerowsetting = new sap.ui.table.RowSettings(params);
                                                  if(this.ui5Class)
           this._gridtablerowsetting.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._gridtablerowsetting.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._gridtablerowsetting.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._gridtablerowsetting, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._gridtablerowsetting, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._gridtablerowsetting.placeAt)
                                                                this._gridtablerowsetting.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._gridtablerowsetting.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._gridtablerowsetting)
                                                                this._parent.removeChildByRelation(this._gridtablerowsetting, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._gridtablerowsetting.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._gridtablerowsetting.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowsetting.insertCustomData(child, _index); else this._gridtablerowsetting.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._gridtablerowsetting.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowsetting.insertDependent(child, _index); else this._gridtablerowsetting.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablerowsetting.insertDragDropConfig(child, _index); else this._gridtablerowsetting.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._gridtablerowsetting.destroyTooltip(child); }
if (relation == 'customdata') {  this._gridtablerowsetting.removeCustomData(child);}
if (relation == 'layoutdata') {  this._gridtablerowsetting.destroyLayoutData(child); }
if (relation == 'dependents') {  this._gridtablerowsetting.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._gridtablerowsetting.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    highlightChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.setHighlight(newValue);}}
highlightTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.setHighlightText(newValue);}}
navigatedChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.setNavigated(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._gridtablerowsetting!==null){ this._gridtablerowsetting.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }