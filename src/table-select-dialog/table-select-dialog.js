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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._tableselectdialog = new sap.m.TableSelectDialog(this.ui5Id, params);
        else
          this._tableselectdialog = new sap.m.TableSelectDialog(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tableselectdialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tableselectdialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tableselectdialog, this._relation);
                                                            }
         else{
                                                                this._tableselectdialog.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfItem(afterElement); if (_index)this._tableselectdialog.insertItem(child, _index + 1); else this._tableselectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfColumn(afterElement); if (_index)this._tableselectdialog.insertColumn(child, _index + 1); else this._tableselectdialog.addColumn(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._tableselectdialog.removeItem(child); }
if (relation == 'columns') {  this._tableselectdialog.removeColumn(child); }

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


                                                                                }