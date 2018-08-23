import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-toolbar')
@inject(Element)
export class Ui5Toolbar extends Ui5Control{
        _toolbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = null;
@bindable() active = false;
@bindable() enabled = true;
@bindable() height = '';
@bindable() design = 'Auto';
@bindable() style = 'Standard';
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
        @computedFrom('_toolbar')
        get UIElement() {
            return this._toolbar;
          }
        fillProperties(params){
                                        params.width = this.width;
params.active = getBooleanFromAttributeValue(this.active);
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.height = this.height;
params.design = this.design;
params.style = this.style;
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
          this._toolbar = new sap.m.Toolbar(this.ui5Id, params);
                                              else
          this._toolbar = new sap.m.Toolbar(params);
                                                  if(this.ui5Class)
           this._toolbar.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._toolbar.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._toolbar.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._toolbar, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._toolbar, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._toolbar.placeAt)
                                                                this._toolbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._toolbar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._toolbar)
                                                                this._parent.removeChildByRelation(this._toolbar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._toolbar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._toolbar.insertContent(child, _index); else this._toolbar.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._toolbar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._toolbar.insertCustomData(child, _index); else this._toolbar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._toolbar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._toolbar.insertDependent(child, _index); else this._toolbar.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._toolbar.insertDragDropConfig(child, _index); else this._toolbar.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._toolbar.removeContent(child);}
if (relation == 'tooltip') {  this._toolbar.destroyTooltip(child); }
if (relation == 'customdata') {  this._toolbar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._toolbar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._toolbar.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._toolbar.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._toolbar!==null){ this._toolbar.setWidth(newValue);}}
activeChanged(newValue){if(this._toolbar!==null){ this._toolbar.setActive(getBooleanFromAttributeValue(newValue));}}
enabledChanged(newValue){if(this._toolbar!==null){ this._toolbar.setEnabled(getBooleanFromAttributeValue(newValue));}}
heightChanged(newValue){if(this._toolbar!==null){ this._toolbar.setHeight(newValue);}}
designChanged(newValue){if(this._toolbar!==null){ this._toolbar.setDesign(newValue);}}
styleChanged(newValue){if(this._toolbar!==null){ this._toolbar.setStyle(newValue);}}
pressChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachPress(newValue);}}
blockedChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._toolbar!==null){ this._toolbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._toolbar!==null){ this._toolbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }