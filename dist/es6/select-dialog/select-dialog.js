import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-select-dialog')
@inject(Element)
export class Ui5SelectDialog extends Ui5Control{
        _selectdialog = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() title = null;
@bindable() noDataText = null;
@bindable() multiSelect = false;
@bindable() growingThreshold = null;
@bindable() growing = true;
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
        @computedFrom('_selectdialog')
        get UIElement() {
            return this._selectdialog;
          }
        fillProperties(params){
                                        params.title = this.title;
params.noDataText = this.noDataText;
params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
params.growingThreshold = this.growingThreshold?parseInt(this.growingThreshold):0;
params.growing = getBooleanFromAttributeValue(this.growing);
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
          this._selectdialog = new sap.m.SelectDialog(this.ui5Id, params);
                                              else
          this._selectdialog = new sap.m.SelectDialog(params);
                                                  if(this.ui5Class)
           this._selectdialog.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._selectdialog.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._selectdialog.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._selectdialog, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._selectdialog, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._selectdialog.placeAt)
                                                                this._selectdialog.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._selectdialog.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._selectdialog)
                                                                this._parent.removeChildByRelation(this._selectdialog, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._selectdialog.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._selectdialog.insertItem(child, _index); else this._selectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._selectdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._selectdialog.insertCustomData(child, _index); else this._selectdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._selectdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._selectdialog.insertDependent(child, _index); else this._selectdialog.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._selectdialog.insertDragDropConfig(child, _index); else this._selectdialog.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._selectdialog.removeItem(child);}
if (relation == 'tooltip') {  this._selectdialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._selectdialog.removeCustomData(child);}
if (relation == 'layoutdata') {  this._selectdialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._selectdialog.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._selectdialog.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setTitle(newValue);}}
noDataTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setNoDataText(newValue);}}
multiSelectChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setGrowingThreshold(newValue);}}
growingChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setGrowing(getBooleanFromAttributeValue(newValue));}}
contentWidthChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setContentWidth(newValue);}}
rememberSelectionsChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
contentHeightChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setContentHeight(newValue);}}
showClearButtonChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setShowClearButton(getBooleanFromAttributeValue(newValue));}}
confirmButtonTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setConfirmButtonText(newValue);}}
draggableChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setDraggable(getBooleanFromAttributeValue(newValue));}}
resizableChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setResizable(getBooleanFromAttributeValue(newValue));}}
titleAlignmentChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.setTitleAlignment(newValue);}}
confirmChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachConfirm(newValue);}}
searchChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachSearch(newValue);}}
liveChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachLiveChange(newValue);}}
cancelChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachCancel(newValue);}}
busyChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._selectdialog!==null){ this._selectdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }