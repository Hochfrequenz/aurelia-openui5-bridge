import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5InputBase} from '../input-base/input-base';
@customElement('ui5-mask-input')
@inject(Element)
export class Ui5MaskInput extends Ui5InputBase{
        _maskinput = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() placeholderSymbol = '_';
@bindable() mask = null;
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
        @computedFrom('_maskinput')
        get UIElement() {
            return this._maskinput;
          }
        fillProperties(params){
                                        params.placeholderSymbol = this.placeholderSymbol;
params.mask = this.mask;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._maskinput = new sap.m.MaskInput(this.ui5Id, params);
                                              else
          this._maskinput = new sap.m.MaskInput(params);
                                                  if(this.ui5Class)
           this._maskinput.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._maskinput.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._maskinput.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._maskinput, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._maskinput, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._maskinput.placeAt)
                                                                this._maskinput.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._maskinput.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._maskinput)
                                                                this._parent.removeChildByRelation(this._maskinput, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._maskinput.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'rules') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinput.insertRule(child, _index); else this._maskinput.addRule(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._maskinput.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinput.insertCustomData(child, _index); else this._maskinput.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._maskinput.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinput.insertDependent(child, _index); else this._maskinput.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinput.insertDragDropConfig(child, _index); else this._maskinput.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'rules') {  this._maskinput.removeRule(child);}
if (relation == 'tooltip') {  this._maskinput.destroyTooltip(child); }
if (relation == 'customdata') {  this._maskinput.removeCustomData(child);}
if (relation == 'layoutdata') {  this._maskinput.destroyLayoutData(child); }
if (relation == 'dependents') {  this._maskinput.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._maskinput.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    placeholderSymbolChanged(newValue){if(this._maskinput!==null){ this._maskinput.setPlaceholderSymbol(newValue);}}
maskChanged(newValue){if(this._maskinput!==null){ this._maskinput.setMask(newValue);}}
valueChanged(newValue){if(this._maskinput!==null){ this._maskinput.setValue(newValue);}}
widthChanged(newValue){if(this._maskinput!==null){ this._maskinput.setWidth(newValue);}}
enabledChanged(newValue){if(this._maskinput!==null){ this._maskinput.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._maskinput!==null){ this._maskinput.setValueState(newValue);}}
nameChanged(newValue){if(this._maskinput!==null){ this._maskinput.setName(newValue);}}
placeholderChanged(newValue){if(this._maskinput!==null){ this._maskinput.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._maskinput!==null){ this._maskinput.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._maskinput!==null){ this._maskinput.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._maskinput!==null){ this._maskinput.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._maskinput!==null){ this._maskinput.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._maskinput!==null){ this._maskinput.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._maskinput!==null){ this._maskinput.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachChange(newValue);}}
blockedChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._maskinput!==null){ this._maskinput.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._maskinput!==null){ this._maskinput.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }