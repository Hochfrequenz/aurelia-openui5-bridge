import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-control')
@inject(Element)
export class Ui5Control extends Ui5Element{
        _control = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_control')
        get UIElement() {
            return this._control;
          }
        fillProperties(params){
                                        params.busy = getBooleanFromAttributeValue(this.busy);
params.busyIndicatorDelay = this.busyIndicatorDelay?parseInt(this.busyIndicatorDelay):0;
params.busyIndicatorSize = this.busyIndicatorSize;
params.visible = getBooleanFromAttributeValue(this.visible);
params.fieldGroupIds = this.fieldGroupIds;
params.validateFieldGroup = this.validateFieldGroup==null ? this.defaultFunc: this.validateFieldGroup;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._control = new sap.ui.core.Control(this.ui5Id, params);
        else
          this._control = new sap.ui.core.Control(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._control.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._control, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._control, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._control, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._control.placeAt)
                                                                this._control.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._control.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._control, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._control.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._control.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._control.indexOfCustomData(afterElement); if (_index)this._control.insertCustomData(child, _index + 1); else this._control.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._control.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._control.indexOfDependent(afterElement); if (_index)this._control.insertDependent(child, _index + 1); else this._control.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._control.destroyTooltip(child); }
if (relation == 'customdata') {  this._control.removeCustomData(child);}
if (relation == 'layoutdata') {  this._control.destroyLayoutData(child); }
if (relation == 'dependents') {  this._control.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    busyChanged(newValue){if(this._control!==null){ this._control.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._control!==null){ this._control.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._control!==null){ this._control.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._control!==null){ this._control.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._control!==null){ this._control.setFieldGroupIds(newValue);}}
validateFieldGroupChanged(newValue){if(this._control!==null){ this._control.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._control!==null){ this._control.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._control!==null){ this._control.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._control!==null){ this._control.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._control!==null){ this._control.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._control!==null){ this._control.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }