import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-link')
@inject(Element)
export class Ui5Link extends Ui5Control{
        _link = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() text = '';
@bindable() enabled = true;
@bindable() target = null;
@bindable() width = null;
@bindable() href = null;
@bindable() validateUrl = false;
@bindable() wrapping = false;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() subtle = false;
@bindable() emphasized = false;
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
        @computedFrom('_link')
        get UIElement() {
            return this._link;
          }
        fillProperties(params){
                                        params.text = this.text;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.target = this.target;
params.width = this.width;
params.href = this.href;
params.validateUrl = getBooleanFromAttributeValue(this.validateUrl);
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.subtle = getBooleanFromAttributeValue(this.subtle);
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
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
          this._link = new sap.m.Link(this.ui5Id, params);
                                              else
          this._link = new sap.m.Link(params);
                                                  if(this.ui5Class)
           this._link.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._link.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._link.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._link, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._link, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._link.placeAt)
                                                                this._link.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._link.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._link)
                                                                this._parent.removeChildByRelation(this._link, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._link.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._link.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._link.insertCustomData(child, _index); else this._link.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._link.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._link.insertDependent(child, _index); else this._link.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._link.destroyTooltip(child); }
if (relation == 'customdata') {  this._link.removeCustomData(child);}
if (relation == 'layoutdata') {  this._link.destroyLayoutData(child); }
if (relation == 'dependents') {  this._link.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._link!==null){ this._link.setText(newValue);}}
enabledChanged(newValue){if(this._link!==null){ this._link.setEnabled(getBooleanFromAttributeValue(newValue));}}
targetChanged(newValue){if(this._link!==null){ this._link.setTarget(newValue);}}
widthChanged(newValue){if(this._link!==null){ this._link.setWidth(newValue);}}
hrefChanged(newValue){if(this._link!==null){ this._link.setHref(newValue);}}
validateUrlChanged(newValue){if(this._link!==null){ this._link.setValidateUrl(getBooleanFromAttributeValue(newValue));}}
wrappingChanged(newValue){if(this._link!==null){ this._link.setWrapping(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._link!==null){ this._link.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._link!==null){ this._link.setTextDirection(newValue);}}
subtleChanged(newValue){if(this._link!==null){ this._link.setSubtle(getBooleanFromAttributeValue(newValue));}}
emphasizedChanged(newValue){if(this._link!==null){ this._link.setEmphasized(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._link!==null){ this._link.attachPress(newValue);}}
busyChanged(newValue){if(this._link!==null){ this._link.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._link!==null){ this._link.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._link!==null){ this._link.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._link!==null){ this._link.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._link!==null){ this._link.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._link!==null){ this._link.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._link!==null){ this._link.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._link!==null){ this._link.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._link!==null){ this._link.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._link!==null){ this._link.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._link!==null){ this._link.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }