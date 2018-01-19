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
        @bindable() showAddNewButton = false;
@bindable() itemClose = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() addNewButtonPress = this.defaultFunc;
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
        @computedFrom('_tabcontainer')
        get UIElement() {
            return this._tabcontainer;
          }
        fillProperties(params){
               params.showAddNewButton = getBooleanFromAttributeValue(this.showAddNewButton);
params.itemClose = this.itemClose==null ? this.defaultFunc: this.itemClose;
params.itemSelect = this.itemSelect==null ? this.defaultFunc: this.itemSelect;
params.addNewButtonPress = this.addNewButtonPress==null ? this.defaultFunc: this.addNewButtonPress;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._tabcontainer = new sap.m.TabContainer(this.ui5Id, params);
        else
          this._tabcontainer = new sap.m.TabContainer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tabcontainer, this.element);
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
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfItem(afterElement); if (_index)this._tabcontainer.insertItem(child, _index + 1); else this._tabcontainer.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tabcontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfCustomData(afterElement); if (_index)this._tabcontainer.insertCustomData(child, _index + 1); else this._tabcontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tabcontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfDependent(afterElement); if (_index)this._tabcontainer.insertDependent(child, _index + 1); else this._tabcontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._tabcontainer.removeItem(child);}
if (relation == 'tooltip') {  this._tabcontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._tabcontainer.removeCustomData(child);}
if (relation == 'layoutData') {  this._tabcontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tabcontainer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    showAddNewButtonChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setShowAddNewButton(getBooleanFromAttributeValue(newValue));}}
itemCloseChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachItemClose(newValue);}}
itemSelectChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachItemSelect(newValue);}}
addNewButtonPressChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachAddNewButtonPress(newValue);}}
busyChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }