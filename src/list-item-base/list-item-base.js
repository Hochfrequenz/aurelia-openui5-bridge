import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-list-item-base')
@inject(Element)
export class Ui5ListItemBase extends Ui5Control{
        _listitembase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() blocked = false;
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
        @computedFrom('_listitembase')
        get UIElement() {
            return this._listitembase;
          }
        fillProperties(params){
                                        params.type = this.type;
params.visible = getBooleanFromAttributeValue(this.visible);
params.unread = getBooleanFromAttributeValue(this.unread);
params.selected = getBooleanFromAttributeValue(this.selected);
params.counter = this.counter?parseInt(this.counter):0;
params.highlight = this.highlight;
params.press = this.press==null ? this.defaultFunc: this.press;
params.detailPress = this.detailPress==null ? this.defaultFunc: this.detailPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._listitembase = new sap.m.ListItemBase(this.ui5Id, params);
                                              else
          this._listitembase = new sap.m.ListItemBase(params);
                                                  if(this.ui5Class)
           this._listitembase.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._listitembase.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listitembase.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._listitembase, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._listitembase, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._listitembase.placeAt)
                                                                this._listitembase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._listitembase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._listitembase)
                                                                this._parent.removeChildByRelation(this._listitembase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._listitembase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._listitembase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listitembase.insertCustomData(child, _index); else this._listitembase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._listitembase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listitembase.insertDependent(child, _index); else this._listitembase.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listitembase.insertDragDropConfig(child, _index); else this._listitembase.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._listitembase.destroyTooltip(child); }
if (relation == 'customdata') {  this._listitembase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._listitembase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._listitembase.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._listitembase.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.setType(newValue);}}
visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.setCounter(newValue);}}
highlightChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.setHighlight(newValue);}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachPress(newValue);}}
detailPressChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachDetailPress(newValue);}}
blockedChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._listitembase!==null){ this._listitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._listitembase!==null){ this._listitembase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listitembase!==null){ this._listitembase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }