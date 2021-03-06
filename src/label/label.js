import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-label')
@inject(Element)
export class Ui5Label extends Ui5Control{
        _label = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() design = 'Standard';
@bindable() text = null;
@bindable() textAlign = 'Begin';
@bindable() textDirection = 'Inherit';
@bindable() width = '';
@bindable() required = false;
@bindable() displayOnly = false;
@bindable() wrapping = false;
@bindable() wrappingType = 'Normal';
@bindable() vAlign = 'Inherit';
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
        @computedFrom('_label')
        get UIElement() {
            return this._label;
          }
        fillProperties(params){
                                        params.design = this.design;
params.text = this.text;
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.width = this.width;
params.required = getBooleanFromAttributeValue(this.required);
params.displayOnly = getBooleanFromAttributeValue(this.displayOnly);
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.wrappingType = this.wrappingType;
params.vAlign = this.vAlign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._label = new sap.m.Label(this.ui5Id, params);
                                              else
          this._label = new sap.m.Label(params);
                                                  if(this.ui5Class)
           this._label.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._label.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._label.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._label, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._label, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._label.placeAt)
                                                                this._label.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._label.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._label)
                                                                this._parent.removeChildByRelation(this._label, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._label.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._label.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._label.insertCustomData(child, _index); else this._label.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._label.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._label.insertDependent(child, _index); else this._label.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._label.insertDragDropConfig(child, _index); else this._label.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._label.destroyTooltip(child); }
if (relation == 'customdata') {  this._label.removeCustomData(child);}
if (relation == 'layoutdata') {  this._label.destroyLayoutData(child); }
if (relation == 'dependents') {  this._label.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._label.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    designChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setDesign(newValue);}}
textChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setText(newValue);}}
textAlignChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setTextDirection(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setWidth(newValue);}}
requiredChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setRequired(getBooleanFromAttributeValue(newValue));}}
displayOnlyChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setDisplayOnly(getBooleanFromAttributeValue(newValue));}}
wrappingChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setWrapping(getBooleanFromAttributeValue(newValue));}}
wrappingTypeChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setWrappingType(newValue);}}
vAlignChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.setVAlign(newValue);}}
busyChanged(newValue){if(this._label!==null){ this._label.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._label!==null){ this._label.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._label!==null){ this._label.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._label!==null){ this._label.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._label!==null){ this._label.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._label!==null){ this._label.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }