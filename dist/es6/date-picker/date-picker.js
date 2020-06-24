import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5DateTimeField} from '../date-time-field/date-time-field';
@customElement('ui5-date-picker')
@inject(Element)
export class Ui5DatePicker extends Ui5DateTimeField{
        _datepicker = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() displayFormatType = '';
@bindable() secondaryCalendarType = null;
@bindable() minDate = null;
@bindable() maxDate = null;
@bindable() showFooter = false;
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
        @computedFrom('_datepicker')
        get UIElement() {
            return this._datepicker;
          }
        fillProperties(params){
                                        params.displayFormatType = this.displayFormatType;
params.secondaryCalendarType = this.secondaryCalendarType;
params.minDate = this.minDate;
params.maxDate = this.maxDate;
params.showFooter = getBooleanFromAttributeValue(this.showFooter);
params.navigate = this.navigate==null ? this.defaultFunc: this.navigate;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._datepicker = new sap.m.DatePicker(this.ui5Id, params);
                                              else
          this._datepicker = new sap.m.DatePicker(params);
                                                  if(this.ui5Class)
           this._datepicker.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._datepicker.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._datepicker.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._datepicker, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._datepicker, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._datepicker.placeAt)
                                                                this._datepicker.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._datepicker.attachChange((event) => { that.value = event.mParameters.value;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._datepicker.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._datepicker)
                                                                this._parent.removeChildByRelation(this._datepicker, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._datepicker.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'specialdates') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datepicker.insertSpecialDate(child, _index); else this._datepicker.addSpecialDate(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._datepicker.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datepicker.insertCustomData(child, _index); else this._datepicker.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._datepicker.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datepicker.insertDependent(child, _index); else this._datepicker.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._datepicker.insertDragDropConfig(child, _index); else this._datepicker.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'specialdates') {  this._datepicker.removeSpecialDate(child);}
if (relation == 'tooltip') {  this._datepicker.destroyTooltip(child); }
if (relation == 'customdata') {  this._datepicker.removeCustomData(child);}
if (relation == 'layoutdata') {  this._datepicker.destroyLayoutData(child); }
if (relation == 'dependents') {  this._datepicker.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._datepicker.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    displayFormatTypeChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.setDisplayFormatType(newValue);}}
secondaryCalendarTypeChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.setSecondaryCalendarType(newValue);}}
minDateChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.setMinDate(newValue);}}
maxDateChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.setMaxDate(newValue);}}
showFooterChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.setShowFooter(getBooleanFromAttributeValue(newValue));}}
navigateChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachNavigate(newValue);}}
displayFormatChanged(newValue){if(this._datepicker!==null){ this._datepicker.setDisplayFormat(newValue);}}
valueFormatChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValueFormat(newValue);}}
dateValueChanged(newValue){if(this._datepicker!==null){ this._datepicker.setDateValue(newValue);}}
initialFocusedDateValueChanged(newValue){if(this._datepicker!==null){ this._datepicker.setInitialFocusedDateValue(newValue);}}
/* inherited from sap.m.DateTimeField*/
valueChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValue(newValue);}}
widthChanged(newValue){if(this._datepicker!==null){ this._datepicker.setWidth(newValue);}}
enabledChanged(newValue){if(this._datepicker!==null){ this._datepicker.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValueState(newValue);}}
nameChanged(newValue){if(this._datepicker!==null){ this._datepicker.setName(newValue);}}
placeholderChanged(newValue){if(this._datepicker!==null){ this._datepicker.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._datepicker!==null){ this._datepicker.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._datepicker!==null){ this._datepicker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._datepicker!==null){ this._datepicker.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._datepicker!==null){ this._datepicker.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._datepicker!==null){ this._datepicker.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachChange(newValue);}}
busyChanged(newValue){if(this._datepicker!==null){ this._datepicker.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._datepicker!==null){ this._datepicker.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._datepicker!==null){ this._datepicker.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._datepicker!==null){ this._datepicker.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._datepicker!==null){ this._datepicker.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._datepicker!==null){ this._datepicker.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }