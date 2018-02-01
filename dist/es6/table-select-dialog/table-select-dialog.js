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
        @bindable() title = null;
@bindable() noDataText = null;
@bindable() multiSelect = false;
@bindable() growingThreshold = null;
@bindable() contentWidth = null;
@bindable() rememberSelections = false;
@bindable() contentHeight = null;
@bindable() confirm = this.defaultFunc;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() cancel = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
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
params.growingThreshold = this.growingThreshold?parseInt(this.growingThreshold):0;
params.contentWidth = this.contentWidth;
params.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections);
params.contentHeight = this.contentHeight;
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tableselectdialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tableselectdialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tableselectdialog, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tableselectdialog, this.element);
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
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfItem(afterElement); if (_index)this._tableselectdialog.insertItem(child, _index + 1); else this._tableselectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfColumn(afterElement); if (_index)this._tableselectdialog.insertColumn(child, _index + 1); else this._tableselectdialog.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tableselectdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfCustomData(afterElement); if (_index)this._tableselectdialog.insertCustomData(child, _index + 1); else this._tableselectdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tableselectdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfDependent(afterElement); if (_index)this._tableselectdialog.insertDependent(child, _index + 1); else this._tableselectdialog.addDependent(child, 0);  return elem.localName; }

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

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setTitle(newValue);}}
noDataTextChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setNoDataText(newValue);}}
multiSelectChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setGrowingThreshold(newValue);}}
contentWidthChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setContentWidth(newValue);}}
rememberSelectionsChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
contentHeightChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setContentHeight(newValue);}}
confirmChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachConfirm(newValue);}}
searchChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachSearch(newValue);}}
liveChangeChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachLiveChange(newValue);}}
cancelChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachCancel(newValue);}}
busyChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }