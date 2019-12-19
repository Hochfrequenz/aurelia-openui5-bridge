import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListItemBase} from '../list-item-base/list-item-base';
@customElement('ui5-tree-item-base')
@inject(Element)
export class Ui5TreeItemBase extends Ui5ListItemBase{
        _treeitembase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
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
        @computedFrom('_treeitembase')
        get UIElement() {
            return this._treeitembase;
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
          this._treeitembase = new sap.m.TreeItemBase(this.ui5Id, params);
                                              else
          this._treeitembase = new sap.m.TreeItemBase(params);
                                                  if(this.ui5Class)
           this._treeitembase.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._treeitembase.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._treeitembase.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._treeitembase, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._treeitembase, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._treeitembase.placeAt)
                                                                this._treeitembase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._treeitembase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._treeitembase)
                                                                this._parent.removeChildByRelation(this._treeitembase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._treeitembase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._treeitembase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._treeitembase.insertCustomData(child, _index); else this._treeitembase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._treeitembase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._treeitembase.insertDependent(child, _index); else this._treeitembase.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._treeitembase.insertDragDropConfig(child, _index); else this._treeitembase.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._treeitembase.destroyTooltip(child); }
if (relation == 'customdata') {  this._treeitembase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._treeitembase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._treeitembase.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._treeitembase.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setType(newValue);}}
visibleChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setCounter(newValue);}}
highlightChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setHighlight(newValue);}}
highlightTextChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setHighlightText(newValue);}}
navigatedChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setNavigated(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachPress(newValue);}}
detailPressChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._treeitembase!==null){ this._treeitembase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }