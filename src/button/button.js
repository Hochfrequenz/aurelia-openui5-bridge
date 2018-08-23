import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-button')
@inject(Element)
export class Ui5Button extends Ui5Control{
        _button = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() text = null;
@bindable() type = 'Default';
@bindable() width = null;
@bindable() enabled = true;
@bindable() icon = null;
@bindable() iconFirst = true;
@bindable() activeIcon = null;
@bindable() iconDensityAware = true;
@bindable() textDirection = 'Inherit';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_button')
        get UIElement() {
            return this._button;
          }
        fillProperties(params){
                                        params.text = this.text;
params.type = this.type;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.icon = this.icon;
params.iconFirst = getBooleanFromAttributeValue(this.iconFirst);
params.activeIcon = this.activeIcon;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.textDirection = this.textDirection;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._button = new sap.m.Button(this.ui5Id, params);
                                              else
          this._button = new sap.m.Button(params);
                                                  if(this.ui5Class)
           this._button.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._button.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._button.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._button, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._button, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._button.placeAt)
                                                                this._button.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._button.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._button)
                                                                this._parent.removeChildByRelation(this._button, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._button.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._button.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._button.insertCustomData(child, _index); else this._button.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._button.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._button.insertDependent(child, _index); else this._button.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._button.insertDragDropConfig(child, _index); else this._button.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._button.destroyTooltip(child); }
if (relation == 'customdata') {  this._button.removeCustomData(child);}
if (relation == 'layoutdata') {  this._button.destroyLayoutData(child); }
if (relation == 'dependents') {  this._button.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._button.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._button!==null){ this._button.setText(newValue);}}
typeChanged(newValue){if(this._button!==null){ this._button.setType(newValue);}}
widthChanged(newValue){if(this._button!==null){ this._button.setWidth(newValue);}}
enabledChanged(newValue){if(this._button!==null){ this._button.setEnabled(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._button!==null){ this._button.setIcon(newValue);}}
iconFirstChanged(newValue){if(this._button!==null){ this._button.setIconFirst(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._button!==null){ this._button.setActiveIcon(newValue);}}
iconDensityAwareChanged(newValue){if(this._button!==null){ this._button.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._button!==null){ this._button.setTextDirection(newValue);}}
pressChanged(newValue){if(this._button!==null){ this._button.attachPress(newValue);}}
blockedChanged(newValue){if(this._button!==null){ this._button.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._button!==null){ this._button.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._button!==null){ this._button.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._button!==null){ this._button.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._button!==null){ this._button.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._button!==null){ this._button.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._button!==null){ this._button.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._button!==null){ this._button.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._button!==null){ this._button.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._button!==null){ this._button.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._button!==null){ this._button.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._button!==null){ this._button.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }