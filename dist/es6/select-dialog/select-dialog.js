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
        @computedFrom('_selectdialog')
        get UIElement() {
            return this._selectdialog;
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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._selectdialog = new sap.m.SelectDialog(this.ui5Id, params);
        else
          this._selectdialog = new sap.m.SelectDialog(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._selectdialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._selectdialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._selectdialog, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._selectdialog, this.element);
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
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._selectdialog.indexOfItem(afterElement); if (_index)this._selectdialog.insertItem(child, _index + 1); else this._selectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._selectdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._selectdialog.indexOfCustomData(afterElement); if (_index)this._selectdialog.insertCustomData(child, _index + 1); else this._selectdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._selectdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._selectdialog.indexOfDependent(afterElement); if (_index)this._selectdialog.insertDependent(child, _index + 1); else this._selectdialog.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._selectdialog.removeItem(child);}
if (relation == 'tooltip') {  this._selectdialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._selectdialog.removeCustomData(child);}
if (relation == 'layoutData') {  this._selectdialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._selectdialog.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setTitle(newValue);}}
noDataTextChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setNoDataText(newValue);}}
multiSelectChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setGrowingThreshold(newValue);}}
contentWidthChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setContentWidth(newValue);}}
rememberSelectionsChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
contentHeightChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setContentHeight(newValue);}}
confirmChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachConfirm(newValue);}}
searchChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachSearch(newValue);}}
liveChangeChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachLiveChange(newValue);}}
cancelChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachCancel(newValue);}}
busyChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }