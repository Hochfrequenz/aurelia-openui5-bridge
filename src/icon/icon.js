import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-icon')
@inject(Element)
export class Ui5Icon extends Ui5Control{
        _icon = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() src = null;
@bindable() size = null;
@bindable() color = null;
@bindable() hoverColor = null;
@bindable() activeColor = null;
@bindable() width = null;
@bindable() height = null;
@bindable() backgroundColor = null;
@bindable() hoverBackgroundColor = null;
@bindable() activeBackgroundColor = null;
@bindable() decorative = true;
@bindable() useIconTooltip = true;
@bindable() alt = null;
@bindable() noTabStop = false;
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
        @computedFrom('_icon')
        get UIElement() {
            return this._icon;
          }
        fillProperties(params){
                                        params.src = this.src;
params.size = this.size;
params.color = this.color;
params.hoverColor = this.hoverColor;
params.activeColor = this.activeColor;
params.width = this.width;
params.height = this.height;
params.backgroundColor = this.backgroundColor;
params.hoverBackgroundColor = this.hoverBackgroundColor;
params.activeBackgroundColor = this.activeBackgroundColor;
params.decorative = getBooleanFromAttributeValue(this.decorative);
params.useIconTooltip = getBooleanFromAttributeValue(this.useIconTooltip);
params.alt = this.alt;
params.noTabStop = getBooleanFromAttributeValue(this.noTabStop);
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
          this._icon = new sap.ui.core.Icon(this.ui5Id, params);
                                              else
          this._icon = new sap.ui.core.Icon(params);
                                                  if(this.ui5Class)
           this._icon.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._icon.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icon.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._icon, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._icon, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icon.placeAt)
                                                                this._icon.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icon.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._icon)
                                                                this._parent.removeChildByRelation(this._icon, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._icon.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._icon.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icon.insertCustomData(child, _index); else this._icon.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._icon.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icon.insertDependent(child, _index); else this._icon.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icon.insertDragDropConfig(child, _index); else this._icon.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._icon.destroyTooltip(child); }
if (relation == 'customdata') {  this._icon.removeCustomData(child);}
if (relation == 'layoutdata') {  this._icon.destroyLayoutData(child); }
if (relation == 'dependents') {  this._icon.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._icon.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    srcChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setSrc(newValue);}}
sizeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setSize(newValue);}}
colorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setColor(newValue);}}
hoverColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setHoverColor(newValue);}}
activeColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setActiveColor(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setWidth(newValue);}}
heightChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setHeight(newValue);}}
backgroundColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setBackgroundColor(newValue);}}
hoverBackgroundColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setHoverBackgroundColor(newValue);}}
activeBackgroundColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setActiveBackgroundColor(newValue);}}
decorativeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setDecorative(getBooleanFromAttributeValue(newValue));}}
useIconTooltipChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setUseIconTooltip(getBooleanFromAttributeValue(newValue));}}
altChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setAlt(newValue);}}
noTabStopChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.setNoTabStop(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachPress(newValue);}}
busyChanged(newValue){if(this._icon!==null){ this._icon.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._icon!==null){ this._icon.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._icon!==null){ this._icon.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._icon!==null){ this._icon.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._icon!==null){ this._icon.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icon!==null){ this._icon.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }