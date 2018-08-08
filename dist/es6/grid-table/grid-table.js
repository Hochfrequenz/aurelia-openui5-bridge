import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-grid-table')
@inject(Element)
export class Ui5gridTable extends Ui5Control{
        _gridtable = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = 'auto';
@bindable() rowHeight = null;
@bindable() columnHeaderHeight = null;
@bindable() columnHeaderVisible = true;
@bindable() visibleRowCount = 10;
@bindable() firstVisibleRow = 0;
@bindable() selectionMode = 'MultiToggle';
@bindable() selectionBehavior = 'RowSelector';
@bindable() selectedIndex = -1;
@bindable() editable = true;
@bindable() threshold = 100;
@bindable() enableColumnReordering = true;
@bindable() enableGrouping = false;
@bindable() showColumnVisibilityMenu = false;
@bindable() showNoData = true;
@bindable() visibleRowCountMode = 'Fixed';
@bindable() minAutoRowCount = 5;
@bindable() fixedColumnCount = 0;
@bindable() fixedRowCount = 0;
@bindable() fixedBottomRowCount = 0;
@bindable() enableColumnFreeze = false;
@bindable() enableCellFilter = false;
@bindable() showOverlay = false;
@bindable() enableSelectAll = true;
@bindable() enableCustomFilter = false;
@bindable() enableBusyIndicator = false;
@bindable() rowActionCount = 0;
@bindable() alternateRowColors = false;
@bindable() rowSelectionChange = this.defaultFunc;
@bindable() columnSelect = this.defaultFunc;
@bindable() columnResize = this.defaultFunc;
@bindable() columnMove = this.defaultFunc;
@bindable() sort = this.defaultFunc;
@bindable() filter = this.defaultFunc;
@bindable() group = this.defaultFunc;
@bindable() columnVisibility = this.defaultFunc;
@bindable() cellClick = this.defaultFunc;
@bindable() beforeOpenContextMenu = this.defaultFunc;
@bindable() columnFreeze = this.defaultFunc;
@bindable() customFilter = this.defaultFunc;
@bindable() firstVisibleRowChanged = this.defaultFunc;
@bindable() busyStateChanged = this.defaultFunc;
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
        @computedFrom('_gridtable')
        get UIElement() {
            return this._gridtable;
          }
        fillProperties(params){
                                        params.width = this.width;
params.rowHeight = this.rowHeight?parseInt(this.rowHeight):0;
params.columnHeaderHeight = this.columnHeaderHeight?parseInt(this.columnHeaderHeight):0;
params.columnHeaderVisible = getBooleanFromAttributeValue(this.columnHeaderVisible);
params.visibleRowCount = this.visibleRowCount?parseInt(this.visibleRowCount):0;
params.firstVisibleRow = this.firstVisibleRow?parseInt(this.firstVisibleRow):0;
params.selectionMode = this.selectionMode;
params.selectionBehavior = this.selectionBehavior;
params.selectedIndex = this.selectedIndex?parseInt(this.selectedIndex):0;
params.editable = getBooleanFromAttributeValue(this.editable);
params.threshold = this.threshold?parseInt(this.threshold):0;
params.enableColumnReordering = getBooleanFromAttributeValue(this.enableColumnReordering);
params.enableGrouping = getBooleanFromAttributeValue(this.enableGrouping);
params.showColumnVisibilityMenu = getBooleanFromAttributeValue(this.showColumnVisibilityMenu);
params.showNoData = getBooleanFromAttributeValue(this.showNoData);
params.visibleRowCountMode = this.visibleRowCountMode;
params.minAutoRowCount = this.minAutoRowCount?parseInt(this.minAutoRowCount):0;
params.fixedColumnCount = this.fixedColumnCount?parseInt(this.fixedColumnCount):0;
params.fixedRowCount = this.fixedRowCount?parseInt(this.fixedRowCount):0;
params.fixedBottomRowCount = this.fixedBottomRowCount?parseInt(this.fixedBottomRowCount):0;
params.enableColumnFreeze = getBooleanFromAttributeValue(this.enableColumnFreeze);
params.enableCellFilter = getBooleanFromAttributeValue(this.enableCellFilter);
params.showOverlay = getBooleanFromAttributeValue(this.showOverlay);
params.enableSelectAll = getBooleanFromAttributeValue(this.enableSelectAll);
params.enableCustomFilter = getBooleanFromAttributeValue(this.enableCustomFilter);
params.enableBusyIndicator = getBooleanFromAttributeValue(this.enableBusyIndicator);
params.rowActionCount = this.rowActionCount?parseInt(this.rowActionCount):0;
params.alternateRowColors = getBooleanFromAttributeValue(this.alternateRowColors);
params.rowSelectionChange = this.rowSelectionChange==null ? this.defaultFunc: this.rowSelectionChange;
params.columnSelect = this.columnSelect==null ? this.defaultFunc: this.columnSelect;
params.columnResize = this.columnResize==null ? this.defaultFunc: this.columnResize;
params.columnMove = this.columnMove==null ? this.defaultFunc: this.columnMove;
params.sort = this.sort==null ? this.defaultFunc: this.sort;
params.filter = this.filter==null ? this.defaultFunc: this.filter;
params.group = this.group==null ? this.defaultFunc: this.group;
params.columnVisibility = this.columnVisibility==null ? this.defaultFunc: this.columnVisibility;
params.cellClick = this.cellClick==null ? this.defaultFunc: this.cellClick;
params.beforeOpenContextMenu = this.beforeOpenContextMenu==null ? this.defaultFunc: this.beforeOpenContextMenu;
params.columnFreeze = this.columnFreeze==null ? this.defaultFunc: this.columnFreeze;
params.customFilter = this.customFilter==null ? this.defaultFunc: this.customFilter;
params.firstVisibleRowChanged = this.firstVisibleRowChanged==null ? this.defaultFunc: this.firstVisibleRowChanged;
params.busyStateChanged = this.busyStateChanged==null ? this.defaultFunc: this.busyStateChanged;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._gridtable = new sap.ui.table.Table(this.ui5Id, params);
                                              else
          this._gridtable = new sap.ui.table.Table(params);
                                                  if(this.ui5Class)
           this._gridtable.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._gridtable.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._gridtable.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._gridtable, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._gridtable, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._gridtable.placeAt)
                                                                this._gridtable.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._gridtable.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._gridtable)
                                                                this._parent.removeChildByRelation(this._gridtable, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._gridtable.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'title-elem') { this._gridtable.setTitle(child); return elem.localName;}
if (elem.localName == 'footer') { this._gridtable.setFooter(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._gridtable.setToolbar(child); return elem.localName;}
if (elem.localName == 'extension') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtable.insertExtension(child, _index); else this._gridtable.addExtension(child, 0);  return elem.localName; }
if (elem.localName == 'columns') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtable.insertColumn(child, _index); else this._gridtable.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'rows') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtable.insertRow(child, _index); else this._gridtable.addRow(child, 0);  return elem.localName; }
if (elem.localName == 'nodata') { this._gridtable.setNoData(child); return elem.localName;}
if (elem.localName == 'rowactiontemplate') { this._gridtable.setRowActionTemplate(child); return elem.localName;}
if (elem.localName == 'rowsettingstemplate') { this._gridtable.setRowSettingsTemplate(child); return elem.localName;}
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtable.insertDragDropConfig(child, _index); else this._gridtable.addDragDropConfig(child, 0);  return elem.localName; }
if (elem.localName == 'contextmenu') { this._gridtable.setContextMenu(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._gridtable.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtable.insertCustomData(child, _index); else this._gridtable.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._gridtable.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtable.insertDependent(child, _index); else this._gridtable.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'title-elem') {  this._gridtable.destroyTitle(child); }
if (relation == 'footer') {  this._gridtable.destroyFooter(child); }
if (relation == 'toolbar') {  this._gridtable.destroyToolbar(child); }
if (relation == 'extension') {  this._gridtable.removeExtension(child);}
if (relation == 'columns') {  this._gridtable.removeColumn(child);}
if (relation == 'rows') {  this._gridtable.removeRow(child);}
if (relation == 'nodata') {  this._gridtable.destroyNoData(child); }
if (relation == 'rowactiontemplate') {  this._gridtable.destroyRowActionTemplate(child); }
if (relation == 'rowsettingstemplate') {  this._gridtable.destroyRowSettingsTemplate(child); }
if (relation == 'dragdropconfig') {  this._gridtable.removeDragDropConfig(child);}
if (relation == 'contextmenu') {  this._gridtable.destroyContextMenu(child); }
if (relation == 'tooltip') {  this._gridtable.destroyTooltip(child); }
if (relation == 'customdata') {  this._gridtable.removeCustomData(child);}
if (relation == 'layoutdata') {  this._gridtable.destroyLayoutData(child); }
if (relation == 'dependents') {  this._gridtable.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._gridtable!==null){ this._gridtable.setWidth(newValue);}}
rowHeightChanged(newValue){if(this._gridtable!==null){ this._gridtable.setRowHeight(newValue);}}
columnHeaderHeightChanged(newValue){if(this._gridtable!==null){ this._gridtable.setColumnHeaderHeight(newValue);}}
columnHeaderVisibleChanged(newValue){if(this._gridtable!==null){ this._gridtable.setColumnHeaderVisible(getBooleanFromAttributeValue(newValue));}}
visibleRowCountChanged(newValue){if(this._gridtable!==null){ this._gridtable.setVisibleRowCount(newValue);}}
firstVisibleRowChanged(newValue){if(this._gridtable!==null){ this._gridtable.setFirstVisibleRow(newValue);}}
selectionModeChanged(newValue){if(this._gridtable!==null){ this._gridtable.setSelectionMode(newValue);}}
selectionBehaviorChanged(newValue){if(this._gridtable!==null){ this._gridtable.setSelectionBehavior(newValue);}}
selectedIndexChanged(newValue){if(this._gridtable!==null){ this._gridtable.setSelectedIndex(newValue);}}
editableChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEditable(getBooleanFromAttributeValue(newValue));}}
thresholdChanged(newValue){if(this._gridtable!==null){ this._gridtable.setThreshold(newValue);}}
enableColumnReorderingChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableColumnReordering(getBooleanFromAttributeValue(newValue));}}
enableGroupingChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableGrouping(getBooleanFromAttributeValue(newValue));}}
showColumnVisibilityMenuChanged(newValue){if(this._gridtable!==null){ this._gridtable.setShowColumnVisibilityMenu(getBooleanFromAttributeValue(newValue));}}
showNoDataChanged(newValue){if(this._gridtable!==null){ this._gridtable.setShowNoData(getBooleanFromAttributeValue(newValue));}}
visibleRowCountModeChanged(newValue){if(this._gridtable!==null){ this._gridtable.setVisibleRowCountMode(newValue);}}
minAutoRowCountChanged(newValue){if(this._gridtable!==null){ this._gridtable.setMinAutoRowCount(newValue);}}
fixedColumnCountChanged(newValue){if(this._gridtable!==null){ this._gridtable.setFixedColumnCount(newValue);}}
fixedRowCountChanged(newValue){if(this._gridtable!==null){ this._gridtable.setFixedRowCount(newValue);}}
fixedBottomRowCountChanged(newValue){if(this._gridtable!==null){ this._gridtable.setFixedBottomRowCount(newValue);}}
enableColumnFreezeChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableColumnFreeze(getBooleanFromAttributeValue(newValue));}}
enableCellFilterChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableCellFilter(getBooleanFromAttributeValue(newValue));}}
showOverlayChanged(newValue){if(this._gridtable!==null){ this._gridtable.setShowOverlay(getBooleanFromAttributeValue(newValue));}}
enableSelectAllChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableSelectAll(getBooleanFromAttributeValue(newValue));}}
enableCustomFilterChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableCustomFilter(getBooleanFromAttributeValue(newValue));}}
enableBusyIndicatorChanged(newValue){if(this._gridtable!==null){ this._gridtable.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));}}
rowActionCountChanged(newValue){if(this._gridtable!==null){ this._gridtable.setRowActionCount(newValue);}}
alternateRowColorsChanged(newValue){if(this._gridtable!==null){ this._gridtable.setAlternateRowColors(getBooleanFromAttributeValue(newValue));}}
rowSelectionChangeChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachRowSelectionChange(newValue);}}
columnSelectChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachColumnSelect(newValue);}}
columnResizeChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachColumnResize(newValue);}}
columnMoveChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachColumnMove(newValue);}}
sortChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachSort(newValue);}}
filterChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachFilter(newValue);}}
groupChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachGroup(newValue);}}
columnVisibilityChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachColumnVisibility(newValue);}}
cellClickChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachCellClick(newValue);}}
beforeOpenContextMenuChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachBeforeOpenContextMenu(newValue);}}
columnFreezeChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachColumnFreeze(newValue);}}
customFilterChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachCustomFilter(newValue);}}
firstVisibleRowChangedChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachFirstVisibleRowChanged(newValue);}}
busyStateChangedChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachBusyStateChanged(newValue);}}
busyChanged(newValue){if(this._gridtable!==null){ this._gridtable.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._gridtable!==null){ this._gridtable.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._gridtable!==null){ this._gridtable.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._gridtable!==null){ this._gridtable.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._gridtable!==null){ this._gridtable.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._gridtable!==null){ this._gridtable.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }