import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListItemBase} from '../list-item-base/list-item-base';
@customElement('ui5-column-list-item')
@inject(Element)
export class Ui5ColumnListItem extends Ui5ListItemBase{
        _columnlistitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() vAlign = 'Inherit';
/* inherited from sap.m.ListItemBase*/
@bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() highlightText = '';
@bindable() navigated = false;
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_columnlistitem')
        get UIElement() {
            return this._columnlistitem;
          }
        fillProperties(params){
                                        params.vAlign = this.vAlign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._columnlistitem = new sap.m.ColumnListItem(this.ui5Id, params);
                                              else
          this._columnlistitem = new sap.m.ColumnListItem(params);
                                                  if(this.ui5Class)
           this._columnlistitem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._columnlistitem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._columnlistitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._columnlistitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._columnlistitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._columnlistitem.placeAt)
                                                                this._columnlistitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._columnlistitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._columnlistitem)
                                                                this._parent.removeChildByRelation(this._columnlistitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._columnlistitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'cells') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._columnlistitem.insertCell(child, _index); else this._columnlistitem.addCell(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._columnlistitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._columnlistitem.insertCustomData(child, _index); else this._columnlistitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._columnlistitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._columnlistitem.insertDependent(child, _index); else this._columnlistitem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._columnlistitem.insertDragDropConfig(child, _index); else this._columnlistitem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'cells') {  this._columnlistitem.removeCell(child);}
if (relation == 'tooltip') {  this._columnlistitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._columnlistitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._columnlistitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._columnlistitem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._columnlistitem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    vAlignChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.setVAlign(newValue);}}
typeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setType(newValue);}}
visibleChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setHighlight(newValue);}}
highlightTextChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setHighlightText(newValue);}}
navigatedChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setNavigated(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._columnlistitem!==null){ this._columnlistitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }