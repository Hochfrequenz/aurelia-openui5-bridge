import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ViewSettingsItem} from '../view-settings-item/view-settings-item';
@customElement('ui5-view-settings-filter-item')
@inject(Element)
export class Ui5ViewSettingsFilterItem extends Ui5ViewSettingsItem{
        _viewsettingsfilteritem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() multiSelect = true;
@bindable() filterDetailItemsAggregationChange = this.defaultFunc;
/* inherited from sap.m.ViewSettingsItem*/
@bindable() selected = false;
@bindable() itemPropertyChanged = this.defaultFunc;
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
        @computedFrom('_viewsettingsfilteritem')
        get UIElement() {
            return this._viewsettingsfilteritem;
          }
        fillProperties(params){
                                        params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
params.filterDetailItemsAggregationChange = this.filterDetailItemsAggregationChange==null ? this.defaultFunc: this.filterDetailItemsAggregationChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(this.ui5Id, params);
                                              else
          this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(params);
                                                  if(this.ui5Class)
           this._viewsettingsfilteritem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._viewsettingsfilteritem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._viewsettingsfilteritem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._viewsettingsfilteritem.placeAt)
                                                                this._viewsettingsfilteritem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._viewsettingsfilteritem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._viewsettingsfilteritem)
                                                                this._parent.removeChildByRelation(this._viewsettingsfilteritem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._viewsettingsfilteritem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._viewsettingsfilteritem.insertItem(child, _index); else this._viewsettingsfilteritem.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._viewsettingsfilteritem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._viewsettingsfilteritem.insertCustomData(child, _index); else this._viewsettingsfilteritem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._viewsettingsfilteritem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._viewsettingsfilteritem.insertDependent(child, _index); else this._viewsettingsfilteritem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._viewsettingsfilteritem.insertDragDropConfig(child, _index); else this._viewsettingsfilteritem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._viewsettingsfilteritem.removeItem(child);}
if (relation == 'tooltip') {  this._viewsettingsfilteritem.destroyTooltip(child); }
if (relation == 'customdata') {  this._viewsettingsfilteritem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._viewsettingsfilteritem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._viewsettingsfilteritem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._viewsettingsfilteritem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    multiSelectChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
filterDetailItemsAggregationChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachFilterDetailItemsAggregationChange(newValue);}}
selectedChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setSelected(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.ViewSettingsItem*/
itemPropertyChangedChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachItemPropertyChanged(newValue);}}
textChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setText(newValue);}}
enabledChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }