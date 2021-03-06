import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-tab-container')
@inject(Element)
export class Ui5TabContainer extends Ui5Control{
        _tabcontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() showAddNewButton = false;
@bindable() backgroundDesign = 'List';
@bindable() itemClose = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() addNewButtonPress = this.defaultFunc;
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
        @computedFrom('_tabcontainer')
        get UIElement() {
            return this._tabcontainer;
          }
        fillProperties(params){
                                        params.showAddNewButton = getBooleanFromAttributeValue(this.showAddNewButton);
params.backgroundDesign = this.backgroundDesign;
params.itemClose = this.itemClose==null ? this.defaultFunc: this.itemClose;
params.itemSelect = this.itemSelect==null ? this.defaultFunc: this.itemSelect;
params.addNewButtonPress = this.addNewButtonPress==null ? this.defaultFunc: this.addNewButtonPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tabcontainer = new sap.m.TabContainer(this.ui5Id, params);
                                              else
          this._tabcontainer = new sap.m.TabContainer(params);
                                                  if(this.ui5Class)
           this._tabcontainer.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._tabcontainer.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontainer.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._tabcontainer, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._tabcontainer, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tabcontainer.placeAt)
                                                                this._tabcontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tabcontainer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._tabcontainer)
                                                                this._parent.removeChildByRelation(this._tabcontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tabcontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontainer.insertItem(child, _index); else this._tabcontainer.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tabcontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontainer.insertCustomData(child, _index); else this._tabcontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tabcontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontainer.insertDependent(child, _index); else this._tabcontainer.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontainer.insertDragDropConfig(child, _index); else this._tabcontainer.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._tabcontainer.removeItem(child);}
if (relation == 'tooltip') {  this._tabcontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._tabcontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tabcontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tabcontainer.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._tabcontainer.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    showAddNewButtonChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.setShowAddNewButton(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.setBackgroundDesign(newValue);}}
itemCloseChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachItemClose(newValue);}}
itemSelectChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachItemSelect(newValue);}}
addNewButtonPressChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachAddNewButtonPress(newValue);}}
busyChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontainer!==null){ this._tabcontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }