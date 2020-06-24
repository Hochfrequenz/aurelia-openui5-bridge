import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase} from '../input-base/input-base';
@customElement('ui5-text-area')
@inject(Element)
export class Ui5TextArea extends Ui5InputBase{
        _textarea = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() rows = 2;
@bindable() cols = 20;
@bindable() height = null;
@bindable() maxLength = 0;
@bindable() showExceededText = false;
@bindable() wrapping = 'None';
@bindable() valueLiveUpdate = false;
@bindable() growing = false;
@bindable() growingMaxLines = 0;
@bindable() liveChange = this.defaultFunc;
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
        @computedFrom('_textarea')
        get UIElement() {
            return this._textarea;
          }
        fillProperties(params){
                                        params.rows = this.rows?parseInt(this.rows):0;
params.cols = this.cols?parseInt(this.cols):0;
params.height = this.height;
params.maxLength = this.maxLength?parseInt(this.maxLength):0;
params.showExceededText = getBooleanFromAttributeValue(this.showExceededText);
params.wrapping = this.wrapping;
params.valueLiveUpdate = getBooleanFromAttributeValue(this.valueLiveUpdate);
params.growing = getBooleanFromAttributeValue(this.growing);
params.growingMaxLines = this.growingMaxLines?parseInt(this.growingMaxLines):0;
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._textarea = new sap.m.TextArea(this.ui5Id, params);
                                              else
          this._textarea = new sap.m.TextArea(params);
                                                  if(this.ui5Class)
           this._textarea.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._textarea.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._textarea.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._textarea, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._textarea, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._textarea.placeAt)
                                                                this._textarea.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._textarea.attachChange((event) => { that.value = event.mParameters.value;; });
this._textarea.attachLiveChange((event) => { if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {that.value = event.mParameters.value;}; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._textarea.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._textarea)
                                                                this._parent.removeChildByRelation(this._textarea, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._textarea.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._textarea.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._textarea.insertCustomData(child, _index); else this._textarea.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._textarea.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._textarea.insertDependent(child, _index); else this._textarea.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._textarea.insertDragDropConfig(child, _index); else this._textarea.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._textarea.destroyTooltip(child); }
if (relation == 'customdata') {  this._textarea.removeCustomData(child);}
if (relation == 'layoutdata') {  this._textarea.destroyLayoutData(child); }
if (relation == 'dependents') {  this._textarea.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._textarea.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    rowsChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setRows(newValue);}}
colsChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setCols(newValue);}}
heightChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setHeight(newValue);}}
maxLengthChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setMaxLength(newValue);}}
showExceededTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setShowExceededText(getBooleanFromAttributeValue(newValue));}}
wrappingChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setWrapping(newValue);}}
valueLiveUpdateChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));}}
growingChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setGrowing(getBooleanFromAttributeValue(newValue));}}
growingMaxLinesChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.setGrowingMaxLines(newValue);}}
liveChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachLiveChange(newValue);}}
valueChanged(newValue){if(this._textarea!==null){ this._textarea.setValue(newValue);}}
widthChanged(newValue){if(this._textarea!==null){ this._textarea.setWidth(newValue);}}
enabledChanged(newValue){if(this._textarea!==null){ this._textarea.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._textarea!==null){ this._textarea.setValueState(newValue);}}
nameChanged(newValue){if(this._textarea!==null){ this._textarea.setName(newValue);}}
placeholderChanged(newValue){if(this._textarea!==null){ this._textarea.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._textarea!==null){ this._textarea.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._textarea!==null){ this._textarea.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._textarea!==null){ this._textarea.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._textarea!==null){ this._textarea.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._textarea!==null){ this._textarea.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._textarea!==null){ this._textarea.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachChange(newValue);}}
busyChanged(newValue){if(this._textarea!==null){ this._textarea.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._textarea!==null){ this._textarea.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._textarea!==null){ this._textarea.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._textarea!==null){ this._textarea.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._textarea!==null){ this._textarea.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._textarea!==null){ this._textarea.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }