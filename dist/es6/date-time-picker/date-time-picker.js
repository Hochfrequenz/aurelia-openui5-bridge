import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5DatePicker} from '../date-picker/date-picker';
@customElement('ui5-date-time-picker')
@inject(Element)
export class Ui5DateTimePicker extends Ui5DatePicker{
        _datetimepicker = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() minutesStep = 1;
@bindable() secondsStep = 1;
/* inherited from sap.m.DatePicker*/
@bindable() displayFormatType = '';
@bindable() secondaryCalendarType = null;
@bindable() minDate = null;
@bindable() maxDate = null;
@bindable() navigate = this.defaultFunc;
/* inherited from sap.m.DateTimeField*/
@bindable() displayFormat = null;
@bindable() valueFormat = null;
@bindable() dateValue = null;
@bindable() initialFocusedDateValue = null;
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
@bindable() blocked = false;
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
        @computedFrom('_datetimepicker')
        get UIElement() {
            return this._datetimepicker;
          }
        fillProperties(params){
                                        params.minutesStep = this.minutesStep?parseInt(this.minutesStep):0;
params.secondsStep = this.secondsStep?parseInt(this.secondsStep):0;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._datetimepicker = new sap.m.DateTimePicker(this.ui5Id, params);
                                              else
          this._datetimepicker = new sap.m.DateTimePicker(params);
                                                  if(this.ui5Class)
           this._datetimepicker.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._datetimepicker.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._datetimepicker.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._datetimepicker, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._datetimepicker, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._datetimepicker.placeAt)
                                                                this._datetimepicker.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._datetimepicker.attachChange((event) => { that.value = event.mParameters.value;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._datetimepicker.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._datetimepicker)
                                                                this._parent.removeChildByRelation(this._datetimepicker, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._datetimepicker.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'specialdates') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datetimepicker.insertSpecialDate(child, _index); else this._datetimepicker.addSpecialDate(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._datetimepicker.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datetimepicker.insertCustomData(child, _index); else this._datetimepicker.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._datetimepicker.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datetimepicker.insertDependent(child, _index); else this._datetimepicker.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datetimepicker.insertDragDropConfig(child, _index); else this._datetimepicker.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'specialdates') {  this._datetimepicker.removeSpecialDate(child);}
if (relation == 'tooltip') {  this._datetimepicker.destroyTooltip(child); }
if (relation == 'customdata') {  this._datetimepicker.removeCustomData(child);}
if (relation == 'layoutdata') {  this._datetimepicker.destroyLayoutData(child); }
if (relation == 'dependents') {  this._datetimepicker.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._datetimepicker.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    minutesStepChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setMinutesStep(newValue);}}
secondsStepChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setSecondsStep(newValue);}}
displayFormatTypeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setDisplayFormatType(newValue);}}
secondaryCalendarTypeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setSecondaryCalendarType(newValue);}}
minDateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setMinDate(newValue);}}
maxDateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setMaxDate(newValue);}}
/* inherited from sap.m.DatePicker*/
navigateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachNavigate(newValue);}}
displayFormatChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setDisplayFormat(newValue);}}
valueFormatChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValueFormat(newValue);}}
dateValueChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setDateValue(newValue);}}
initialFocusedDateValueChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setInitialFocusedDateValue(newValue);}}
/* inherited from sap.m.DateTimeField*/
valueChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValue(newValue);}}
widthChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setWidth(newValue);}}
enabledChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValueState(newValue);}}
nameChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setName(newValue);}}
placeholderChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachChange(newValue);}}
blockedChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }