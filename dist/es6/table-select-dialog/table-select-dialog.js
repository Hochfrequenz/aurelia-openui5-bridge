import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-table-select-dialog')
@inject(Element)
export class Ui5TableSelectDialog extends Ui5Control{
        _tableselectdialog = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() title = null;
@bindable() noDataText = null;
@bindable() multiSelect = false;
@bindable() growing = true;
@bindable() growingThreshold = null;
@bindable() contentWidth = null;
@bindable() rememberSelections = false;
@bindable() contentHeight = null;
@bindable() showClearButton = false;
@bindable() confirmButtonText = null;
@bindable() draggable = false;
@bindable() resizable = false;
@bindable() titleAlignment = 'Auto';
@bindable() confirm = this.defaultFunc;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() cancel = this.defaultFunc;
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
        @computedFrom('_tableselectdialog')
        get UIElement() {
            return this._tableselectdialog;
          }
        fillProperties(params){
                                        params.title = this.title;
params.noDataText = this.noDataText;
params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
params.growing = getBooleanFromAttributeValue(this.growing);
params.growingThreshold = this.growingThreshold?parseInt(this.growingThreshold):0;
params.contentWidth = this.contentWidth;
params.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections);
params.contentHeight = this.contentHeight;
params.showClearButton = getBooleanFromAttributeValue(this.showClearButton);
params.confirmButtonText = this.confirmButtonText;
params.draggable = getBooleanFromAttributeValue(this.draggable);
params.resizable = getBooleanFromAttributeValue(this.resizable);
params.titleAlignment = this.titleAlignment;
params.confirm = this.confirm==null ? this.defaultFunc: this.confirm;
params.search = this.search==null ? this.defaultFunc: this.search;
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.cancel = this.cancel==null ? this.defaultFunc: this.cancel;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tableselectdialog = new sap.m.TableSelectDialog(this.ui5Id, params);
                                              else
          this._tableselectdialog = new sap.m.TableSelectDialog(params);
                                                  if(this.ui5Class)
           this._tableselectdialog.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._tableselectdialog.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tableselectdialog.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._tableselectdialog, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._tableselectdialog, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tableselectdialog.placeAt)
                                                                this._tableselectdialog.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tableselectdialog.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._tableselectdialog)
                                                                this._parent.removeChildByRelation(this._tableselectdialog, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tableselectdialog.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tableselectdialog.insertItem(child, _index); else this._tableselectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'columns') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tableselectdialog.insertColumn(child, _index); else this._tableselectdialog.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tableselectdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tableselectdialog.insertCustomData(child, _index); else this._tableselectdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tableselectdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tableselectdialog.insertDependent(child, _index); else this._tableselectdialog.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tableselectdialog.insertDragDropConfig(child, _index); else this._tableselectdialog.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._tableselectdialog.removeItem(child);}
if (relation == 'columns') {  this._tableselectdialog.removeColumn(child);}
if (relation == 'tooltip') {  this._tableselectdialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._tableselectdialog.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tableselectdialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tableselectdialog.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._tableselectdialog.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setTitle(newValue);}}
noDataTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setNoDataText(newValue);}}
multiSelectChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
growingChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setGrowing(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setGrowingThreshold(newValue);}}
contentWidthChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setContentWidth(newValue);}}
rememberSelectionsChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
contentHeightChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setContentHeight(newValue);}}
showClearButtonChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setShowClearButton(getBooleanFromAttributeValue(newValue));}}
confirmButtonTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setConfirmButtonText(newValue);}}
draggableChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setDraggable(getBooleanFromAttributeValue(newValue));}}
resizableChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setResizable(getBooleanFromAttributeValue(newValue));}}
titleAlignmentChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.setTitleAlignment(newValue);}}
confirmChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachConfirm(newValue);}}
searchChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachSearch(newValue);}}
liveChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachLiveChange(newValue);}}
cancelChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachCancel(newValue);}}
busyChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._tableselectdialog!==null){ this._tableselectdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }