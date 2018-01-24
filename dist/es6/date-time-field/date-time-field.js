import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase} from '../input-base/input-base';
@customElement('ui5-date-time-field')
@inject(Element)
export class Ui5DateTimeField extends Ui5InputBase{
        _datetimefield = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() displayFormat = null;
@bindable() valueFormat = null;
@bindable() dateValue = null;
/* inherited from sap.m.InputBase*/
@bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_datetimefield')
        get UIElement() {
            return this._datetimefield;
          }
        fillProperties(params){
                                        params.displayFormat = this.displayFormat;
params.valueFormat = this.valueFormat;
params.dateValue = this.dateValue;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._datetimefield = new sap.m.DateTimeField(this.ui5Id, params);
        else
          this._datetimefield = new sap.m.DateTimeField(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._datetimefield.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._datetimefield, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._datetimefield, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._datetimefield, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._datetimefield.placeAt)
                                                                this._datetimefield.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._datetimefield.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._datetimefield, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._datetimefield.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._datetimefield.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._datetimefield.indexOfCustomData(afterElement); if (_index)this._datetimefield.insertCustomData(child, _index + 1); else this._datetimefield.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._datetimefield.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._datetimefield.indexOfDependent(afterElement); if (_index)this._datetimefield.insertDependent(child, _index + 1); else this._datetimefield.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._datetimefield.destroyTooltip(child); }
if (relation == 'customdata') {  this._datetimefield.removeCustomData(child);}
if (relation == 'layoutData') {  this._datetimefield.destroyLayoutData(child); }
if (relation == 'dependents') {  this._datetimefield.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    displayFormatChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setDisplayFormat(newValue);}}
valueFormatChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValueFormat(newValue);}}
dateValueChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setDateValue(newValue);}}
valueChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValue(newValue);}}
widthChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setWidth(newValue);}}
enabledChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValueState(newValue);}}
nameChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setName(newValue);}}
placeholderChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachChange(newValue);}}
busyChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }