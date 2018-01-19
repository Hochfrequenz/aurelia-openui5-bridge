import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase} from '../input-base/input-base';
@customElement('ui5-input')
@inject(Element)
export class Ui5Input extends Ui5InputBase{
        _input = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() type = 'Text';
@bindable() maxLength = 0;
@bindable() showValueHelp = false;
@bindable() showSuggestion = false;
@bindable() valueHelpOnly = false;
@bindable() filterSuggests = true;
@bindable() maxSuggestionWidth = null;
@bindable() startSuggestion = 1;
@bindable() showTableSuggestionValueHelp = true;
@bindable() description = null;
@bindable() fieldWidth = '50%';
@bindable() valueLiveUpdate = false;
@bindable() selectedKey = '';
@bindable() textFormatMode = 'Value';
@bindable() textFormatter = '';
@bindable() suggestionRowValidator = '';
@bindable() enableSuggestionsHighlighting = true;
@bindable() liveChange = this.defaultFunc;
@bindable() valueHelpRequest = this.defaultFunc;
@bindable() suggest = this.defaultFunc;
@bindable() suggestionItemSelected = this.defaultFunc;
@bindable() submit = this.defaultFunc;
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
        @computedFrom('_input')
        get UIElement() {
            return this._input;
          }
        fillProperties(params){
               params.type = this.type;
params.maxLength = this.maxLength?parseInt(this.maxLength):0;
params.showValueHelp = getBooleanFromAttributeValue(this.showValueHelp);
params.showSuggestion = getBooleanFromAttributeValue(this.showSuggestion);
params.valueHelpOnly = getBooleanFromAttributeValue(this.valueHelpOnly);
params.filterSuggests = getBooleanFromAttributeValue(this.filterSuggests);
params.maxSuggestionWidth = this.maxSuggestionWidth;
params.startSuggestion = this.startSuggestion?parseInt(this.startSuggestion):0;
params.showTableSuggestionValueHelp = getBooleanFromAttributeValue(this.showTableSuggestionValueHelp);
params.description = this.description;
params.fieldWidth = this.fieldWidth;
params.valueLiveUpdate = getBooleanFromAttributeValue(this.valueLiveUpdate);
params.selectedKey = this.selectedKey;
params.textFormatMode = this.textFormatMode;
params.textFormatter = this.textFormatter;
params.suggestionRowValidator = this.suggestionRowValidator;
params.enableSuggestionsHighlighting = getBooleanFromAttributeValue(this.enableSuggestionsHighlighting);
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.valueHelpRequest = this.valueHelpRequest==null ? this.defaultFunc: this.valueHelpRequest;
params.suggest = this.suggest==null ? this.defaultFunc: this.suggest;
params.suggestionItemSelected = this.suggestionItemSelected==null ? this.defaultFunc: this.suggestionItemSelected;
params.submit = this.submit==null ? this.defaultFunc: this.submit;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._input = new sap.m.Input(this.ui5Id, params);
        else
          this._input = new sap.m.Input(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._input.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._input, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._input, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._input, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._input.placeAt)
                                                                this._input.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._input.attachChange((event) => { that.value = event.mParameters.value;; });
this._input.attachLiveChange((event) => { if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {that.value = event.mParameters.value;}; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._input.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._input, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._input.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'suggestionitems') { var _index = null; if (afterElement) _index = this._input.indexOfSuggestionItem(afterElement); if (_index)this._input.insertSuggestionItem(child, _index + 1); else this._input.addSuggestionItem(child, 0);  return elem.localName; }
if (elem.localName == 'suggestioncolumns') { var _index = null; if (afterElement) _index = this._input.indexOfSuggestionColumn(afterElement); if (_index)this._input.insertSuggestionColumn(child, _index + 1); else this._input.addSuggestionColumn(child, 0);  return elem.localName; }
if (elem.localName == 'suggestionrows') { var _index = null; if (afterElement) _index = this._input.indexOfSuggestionRow(afterElement); if (_index)this._input.insertSuggestionRow(child, _index + 1); else this._input.addSuggestionRow(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._input.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._input.indexOfCustomData(afterElement); if (_index)this._input.insertCustomData(child, _index + 1); else this._input.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._input.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._input.indexOfDependent(afterElement); if (_index)this._input.insertDependent(child, _index + 1); else this._input.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'suggestionitems') {  this._input.removeSuggestionItem(child);}
if (relation == 'suggestioncolumns') {  this._input.removeSuggestionColumn(child);}
if (relation == 'suggestionrows') {  this._input.removeSuggestionRow(child);}
if (relation == 'tooltip') {  this._input.destroyTooltip(child); }
if (relation == 'customdata') {  this._input.removeCustomData(child);}
if (relation == 'layoutData') {  this._input.destroyLayoutData(child); }
if (relation == 'dependents') {  this._input.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._input!==null){ this._input.setType(newValue);}}
maxLengthChanged(newValue){if(this._input!==null){ this._input.setMaxLength(newValue);}}
showValueHelpChanged(newValue){if(this._input!==null){ this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));}}
showSuggestionChanged(newValue){if(this._input!==null){ this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));}}
valueHelpOnlyChanged(newValue){if(this._input!==null){ this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));}}
filterSuggestsChanged(newValue){if(this._input!==null){ this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));}}
maxSuggestionWidthChanged(newValue){if(this._input!==null){ this._input.setMaxSuggestionWidth(newValue);}}
startSuggestionChanged(newValue){if(this._input!==null){ this._input.setStartSuggestion(newValue);}}
showTableSuggestionValueHelpChanged(newValue){if(this._input!==null){ this._input.setShowTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));}}
descriptionChanged(newValue){if(this._input!==null){ this._input.setDescription(newValue);}}
fieldWidthChanged(newValue){if(this._input!==null){ this._input.setFieldWidth(newValue);}}
valueLiveUpdateChanged(newValue){if(this._input!==null){ this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(this._input!==null){ this._input.setSelectedKey(newValue);}}
textFormatModeChanged(newValue){if(this._input!==null){ this._input.setTextFormatMode(newValue);}}
textFormatterChanged(newValue){if(this._input!==null){ this._input.setTextFormatter(newValue);}}
suggestionRowValidatorChanged(newValue){if(this._input!==null){ this._input.setSuggestionRowValidator(newValue);}}
enableSuggestionsHighlightingChanged(newValue){if(this._input!==null){ this._input.setEnableSuggestionsHighlighting(getBooleanFromAttributeValue(newValue));}}
liveChangeChanged(newValue){if(this._input!==null){ this._input.attachLiveChange(newValue);}}
valueHelpRequestChanged(newValue){if(this._input!==null){ this._input.attachValueHelpRequest(newValue);}}
suggestChanged(newValue){if(this._input!==null){ this._input.attachSuggest(newValue);}}
suggestionItemSelectedChanged(newValue){if(this._input!==null){ this._input.attachSuggestionItemSelected(newValue);}}
submitChanged(newValue){if(this._input!==null){ this._input.attachSubmit(newValue);}}
valueChanged(newValue){if(this._input!==null){ this._input.setValue(newValue);}}
widthChanged(newValue){if(this._input!==null){ this._input.setWidth(newValue);}}
enabledChanged(newValue){if(this._input!==null){ this._input.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._input!==null){ this._input.setValueState(newValue);}}
nameChanged(newValue){if(this._input!==null){ this._input.setName(newValue);}}
placeholderChanged(newValue){if(this._input!==null){ this._input.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._input!==null){ this._input.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._input!==null){ this._input.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._input!==null){ this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._input!==null){ this._input.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._input!==null){ this._input.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._input!==null){ this._input.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._input!==null){ this._input.attachChange(newValue);}}
busyChanged(newValue){if(this._input!==null){ this._input.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._input!==null){ this._input.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._input!==null){ this._input.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._input!==null){ this._input.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._input!==null){ this._input.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._input!==null){ this._input.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._input!==null){ this._input.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._input!==null){ this._input.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._input!==null){ this._input.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._input!==null){ this._input.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }