import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-input-base')
@inject(Element)
export class Ui5InputBase extends Ui5Control{
        _inputbase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
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
        @computedFrom('_inputbase')
        get UIElement() {
            return this._inputbase;
          }
        fillProperties(params){
                                        params.value = this.value;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.valueState = this.valueState;
params.name = this.name;
params.placeholder = this.placeholder;
params.editable = getBooleanFromAttributeValue(this.editable);
params.valueStateText = this.valueStateText;
params.showValueStateMessage = getBooleanFromAttributeValue(this.showValueStateMessage);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.required = getBooleanFromAttributeValue(this.required);
params.change = this.change==null ? this.defaultFunc: this.change;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._inputbase = new sap.m.InputBase(this.ui5Id, params);
                                              else
          this._inputbase = new sap.m.InputBase(params);
                                                  if(this.ui5Class)
           this._inputbase.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._inputbase.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._inputbase.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._inputbase, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._inputbase, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._inputbase.placeAt)
                                                                this._inputbase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._inputbase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._inputbase)
                                                                this._parent.removeChildByRelation(this._inputbase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._inputbase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._inputbase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._inputbase.insertCustomData(child, _index); else this._inputbase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._inputbase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._inputbase.insertDependent(child, _index); else this._inputbase.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._inputbase.insertDragDropConfig(child, _index); else this._inputbase.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._inputbase.destroyTooltip(child); }
if (relation == 'customdata') {  this._inputbase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._inputbase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._inputbase.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._inputbase.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    valueChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setValue(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setWidth(newValue);}}
enabledChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setValueState(newValue);}}
nameChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setName(newValue);}}
placeholderChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setPlaceholder(newValue);}}
editableChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setTextDirection(newValue);}}
requiredChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.setRequired(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachChange(newValue);}}
busyChanged(newValue){if(this._inputbase!==null){ this._inputbase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._inputbase!==null){ this._inputbase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._inputbase!==null){ this._inputbase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._inputbase!==null){ this._inputbase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._inputbase!==null){ this._inputbase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._inputbase!==null){ this._inputbase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }