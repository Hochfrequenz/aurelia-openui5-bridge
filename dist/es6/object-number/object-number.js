import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-object-number')
@inject(Element)
export class Ui5ObjectNumber extends Ui5Control{
        _objectnumber = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() number = null;
@bindable() emphasized = true;
@bindable() state = 'None';
@bindable() unit = null;
@bindable() textDirection = 'Inherit';
@bindable() textAlign = 'Begin';
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
        @computedFrom('_objectnumber')
        get UIElement() {
            return this._objectnumber;
          }
        fillProperties(params){
                                        params.number = this.number;
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
params.state = this.state;
params.unit = this.unit;
params.textDirection = this.textDirection;
params.textAlign = this.textAlign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._objectnumber = new sap.m.ObjectNumber(this.ui5Id, params);
                                              else
          this._objectnumber = new sap.m.ObjectNumber(params);
                                                  if(this.ui5Class)
           this._objectnumber.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._objectnumber.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._objectnumber.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._objectnumber, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._objectnumber, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._objectnumber.placeAt)
                                                                this._objectnumber.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._objectnumber.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._objectnumber)
                                                                this._parent.removeChildByRelation(this._objectnumber, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._objectnumber.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._objectnumber.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._objectnumber.insertCustomData(child, _index); else this._objectnumber.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._objectnumber.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._objectnumber.insertDependent(child, _index); else this._objectnumber.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._objectnumber.destroyTooltip(child); }
if (relation == 'customdata') {  this._objectnumber.removeCustomData(child);}
if (relation == 'layoutdata') {  this._objectnumber.destroyLayoutData(child); }
if (relation == 'dependents') {  this._objectnumber.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    numberChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setNumber(newValue);}}
emphasizedChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setEmphasized(getBooleanFromAttributeValue(newValue));}}
stateChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setState(newValue);}}
unitChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setUnit(newValue);}}
textDirectionChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setTextDirection(newValue);}}
textAlignChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setTextAlign(newValue);}}
busyChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }