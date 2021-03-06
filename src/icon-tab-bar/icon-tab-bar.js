import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-icon-tab-bar')
@inject(Element)
export class Ui5IconTabBar extends Ui5Control{
        _icontabbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() expandable = true;
@bindable() expanded = true;
@bindable() selectedKey = null;
@bindable() upperCase = false;
@bindable() stretchContentHeight = false;
@bindable() applyContentPadding = true;
@bindable() backgroundDesign = 'Solid';
@bindable() headerMode = 'Standard';
@bindable() showOverflowSelectList = false;
@bindable() headerBackgroundDesign = 'Solid';
@bindable() enableTabReordering = false;
@bindable() tabDensityMode = 'Cozy';
@bindable() select = this.defaultFunc;
@bindable() expand = this.defaultFunc;
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
        @computedFrom('_icontabbar')
        get UIElement() {
            return this._icontabbar;
          }
        fillProperties(params){
                                        params.expandable = getBooleanFromAttributeValue(this.expandable);
params.expanded = getBooleanFromAttributeValue(this.expanded);
params.selectedKey = this.selectedKey;
params.upperCase = getBooleanFromAttributeValue(this.upperCase);
params.stretchContentHeight = getBooleanFromAttributeValue(this.stretchContentHeight);
params.applyContentPadding = getBooleanFromAttributeValue(this.applyContentPadding);
params.backgroundDesign = this.backgroundDesign;
params.headerMode = this.headerMode;
params.showOverflowSelectList = getBooleanFromAttributeValue(this.showOverflowSelectList);
params.headerBackgroundDesign = this.headerBackgroundDesign;
params.enableTabReordering = getBooleanFromAttributeValue(this.enableTabReordering);
params.tabDensityMode = this.tabDensityMode;
params.select = this.select==null ? this.defaultFunc: this.select;
params.expand = this.expand==null ? this.defaultFunc: this.expand;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._icontabbar = new sap.m.IconTabBar(this.ui5Id, params);
                                              else
          this._icontabbar = new sap.m.IconTabBar(params);
                                                  if(this.ui5Class)
           this._icontabbar.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._icontabbar.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icontabbar.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._icontabbar, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._icontabbar, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icontabbar.placeAt)
                                                                this._icontabbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._icontabbar.attachSelect((event) => { that.selectedKey = event.mParameters.key;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icontabbar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._icontabbar)
                                                                this._parent.removeChildByRelation(this._icontabbar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._icontabbar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabbar.insertItem(child, _index); else this._icontabbar.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabbar.insertContent(child, _index); else this._icontabbar.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._icontabbar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabbar.insertCustomData(child, _index); else this._icontabbar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._icontabbar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabbar.insertDependent(child, _index); else this._icontabbar.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabbar.insertDragDropConfig(child, _index); else this._icontabbar.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._icontabbar.removeItem(child);}
if (relation == 'content') {  this._icontabbar.removeContent(child);}
if (relation == 'tooltip') {  this._icontabbar.destroyTooltip(child); }
if (relation == 'customdata') {  this._icontabbar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._icontabbar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._icontabbar.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._icontabbar.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    expandableChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setExpandable(getBooleanFromAttributeValue(newValue));}}
expandedChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setExpanded(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setSelectedKey(newValue);}}
upperCaseChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setUpperCase(getBooleanFromAttributeValue(newValue));}}
stretchContentHeightChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setStretchContentHeight(getBooleanFromAttributeValue(newValue));}}
applyContentPaddingChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setApplyContentPadding(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setBackgroundDesign(newValue);}}
headerModeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setHeaderMode(newValue);}}
showOverflowSelectListChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));}}
headerBackgroundDesignChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setHeaderBackgroundDesign(newValue);}}
enableTabReorderingChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setEnableTabReordering(getBooleanFromAttributeValue(newValue));}}
tabDensityModeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.setTabDensityMode(newValue);}}
selectChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachSelect(newValue);}}
expandChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachExpand(newValue);}}
busyChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabbar!==null){ this._icontabbar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }