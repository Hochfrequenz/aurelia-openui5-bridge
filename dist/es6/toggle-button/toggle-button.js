import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Button} from '../button/button';
@customElement('ui5-toggle-button')
@inject(Element)
export class Ui5ToggleButton extends Ui5Button{
        _togglebutton = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() pressed = false;
@bindable() press = this.defaultFunc;
/* inherited from sap.m.Button*/
@bindable() text = '';
@bindable() type = 'Default';
@bindable() width = null;
@bindable() enabled = true;
@bindable() icon = '';
@bindable() iconFirst = true;
@bindable() activeIcon = null;
@bindable() iconDensityAware = true;
@bindable() textDirection = 'Inherit';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_togglebutton')
        get UIElement() {
            return this._togglebutton;
          }
        fillProperties(params){
                                        params.pressed = getBooleanFromAttributeValue(this.pressed);
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
          this._togglebutton = new sap.m.ToggleButton(this.ui5Id, params);
                                              else
          this._togglebutton = new sap.m.ToggleButton(params);
                                                  if(this.ui5Class)
           this._togglebutton.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._togglebutton.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._togglebutton.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._togglebutton, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._togglebutton, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._togglebutton.placeAt)
                                                                this._togglebutton.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._togglebutton.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._togglebutton)
                                                                this._parent.removeChildByRelation(this._togglebutton, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._togglebutton.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._togglebutton.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._togglebutton.insertCustomData(child, _index); else this._togglebutton.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._togglebutton.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._togglebutton.insertDependent(child, _index); else this._togglebutton.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._togglebutton.insertDragDropConfig(child, _index); else this._togglebutton.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._togglebutton.destroyTooltip(child); }
if (relation == 'customdata') {  this._togglebutton.removeCustomData(child);}
if (relation == 'layoutdata') {  this._togglebutton.destroyLayoutData(child); }
if (relation == 'dependents') {  this._togglebutton.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._togglebutton.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    pressedChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.setPressed(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachPress(newValue);}}
textChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setText(newValue);}}
typeChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setType(newValue);}}
widthChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setWidth(newValue);}}
enabledChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setEnabled(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setIcon(newValue);}}
iconFirstChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setIconFirst(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setActiveIcon(newValue);}}
iconDensityAwareChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setTextDirection(newValue);}}
/* inherited from sap.m.Button*/
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachPress(newValue);}}
busyChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._togglebutton!==null){ this._togglebutton.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }