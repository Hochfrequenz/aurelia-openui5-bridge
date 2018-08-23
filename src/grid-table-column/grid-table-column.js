import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-grid-table-column')
@inject(Element)
export class Ui5gridTableColumn extends Ui5Element{
        _gridtablecolumn = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = null;
@bindable() minWidth = 0;
@bindable() resizable = true;
@bindable() hAlign = 'Begin';
@bindable() sorted = false;
@bindable() sortOrder = 'Ascending';
@bindable() sortProperty = null;
@bindable() filtered = false;
@bindable() filterProperty = null;
@bindable() filterValue = null;
@bindable() filterOperator = null;
@bindable() defaultFilterOperator = null;
@bindable() filterType = null;
@bindable() grouped = false;
@bindable() visible = true;
@bindable() name = null;
@bindable() showFilterMenuEntry = true;
@bindable() showSortMenuEntry = true;
@bindable() headerSpan = '1';
@bindable() autoResizable = false;
@bindable() columnMenuOpen = this.defaultFunc;
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
        @computedFrom('_gridtablecolumn')
        get UIElement() {
            return this._gridtablecolumn;
          }
        fillProperties(params){
                                        params.width = this.width;
params.minWidth = this.minWidth?parseInt(this.minWidth):0;
params.resizable = getBooleanFromAttributeValue(this.resizable);
params.hAlign = this.hAlign;
params.sorted = getBooleanFromAttributeValue(this.sorted);
params.sortOrder = this.sortOrder;
params.sortProperty = this.sortProperty;
params.filtered = getBooleanFromAttributeValue(this.filtered);
params.filterProperty = this.filterProperty;
params.filterValue = this.filterValue;
params.filterOperator = this.filterOperator;
params.defaultFilterOperator = this.defaultFilterOperator;
params.filterType = this.filterType;
params.grouped = getBooleanFromAttributeValue(this.grouped);
params.visible = getBooleanFromAttributeValue(this.visible);
params.name = this.name;
params.showFilterMenuEntry = getBooleanFromAttributeValue(this.showFilterMenuEntry);
params.showSortMenuEntry = getBooleanFromAttributeValue(this.showSortMenuEntry);
params.headerSpan = this.headerSpan;
params.autoResizable = getBooleanFromAttributeValue(this.autoResizable);
params.columnMenuOpen = this.columnMenuOpen==null ? this.defaultFunc: this.columnMenuOpen;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._gridtablecolumn = new sap.ui.table.Column(this.ui5Id, params);
                                              else
          this._gridtablecolumn = new sap.ui.table.Column(params);
                                                  if(this.ui5Class)
           this._gridtablecolumn.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._gridtablecolumn.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._gridtablecolumn.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._gridtablecolumn, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._gridtablecolumn, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._gridtablecolumn.placeAt)
                                                                this._gridtablecolumn.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._gridtablecolumn.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._gridtablecolumn)
                                                                this._parent.removeChildByRelation(this._gridtablecolumn, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._gridtablecolumn.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'label') { this._gridtablecolumn.setLabel(child); return elem.localName;}
if (elem.localName == 'multilabels') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablecolumn.insertMultiLabel(child, _index); else this._gridtablecolumn.addMultiLabel(child, 0);  return elem.localName; }
if (elem.localName == 'template') { this._gridtablecolumn.setTemplate(child); return elem.localName;}
if (elem.localName == 'menu') { this._gridtablecolumn.setMenu(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._gridtablecolumn.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablecolumn.insertCustomData(child, _index); else this._gridtablecolumn.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._gridtablecolumn.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablecolumn.insertDependent(child, _index); else this._gridtablecolumn.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._gridtablecolumn.insertDragDropConfig(child, _index); else this._gridtablecolumn.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'label') {  this._gridtablecolumn.destroyLabel(child); }
if (relation == 'multilabels') {  this._gridtablecolumn.removeMultiLabel(child);}
if (relation == 'template') {  this._gridtablecolumn.destroyTemplate(child); }
if (relation == 'menu') {  this._gridtablecolumn.destroyMenu(child); }
if (relation == 'tooltip') {  this._gridtablecolumn.destroyTooltip(child); }
if (relation == 'customdata') {  this._gridtablecolumn.removeCustomData(child);}
if (relation == 'layoutdata') {  this._gridtablecolumn.destroyLayoutData(child); }
if (relation == 'dependents') {  this._gridtablecolumn.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._gridtablecolumn.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setWidth(newValue);}}
minWidthChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setMinWidth(newValue);}}
resizableChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setResizable(getBooleanFromAttributeValue(newValue));}}
hAlignChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setHAlign(newValue);}}
sortedChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setSorted(getBooleanFromAttributeValue(newValue));}}
sortOrderChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setSortOrder(newValue);}}
sortPropertyChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setSortProperty(newValue);}}
filteredChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setFiltered(getBooleanFromAttributeValue(newValue));}}
filterPropertyChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setFilterProperty(newValue);}}
filterValueChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setFilterValue(newValue);}}
filterOperatorChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setFilterOperator(newValue);}}
defaultFilterOperatorChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setDefaultFilterOperator(newValue);}}
filterTypeChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setFilterType(newValue);}}
groupedChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setGrouped(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setVisible(getBooleanFromAttributeValue(newValue));}}
nameChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setName(newValue);}}
showFilterMenuEntryChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setShowFilterMenuEntry(getBooleanFromAttributeValue(newValue));}}
showSortMenuEntryChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setShowSortMenuEntry(getBooleanFromAttributeValue(newValue));}}
headerSpanChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setHeaderSpan(newValue);}}
autoResizableChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.setAutoResizable(getBooleanFromAttributeValue(newValue));}}
columnMenuOpenChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.attachColumnMenuOpen(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._gridtablecolumn!==null){ this._gridtablecolumn.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }