import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-vertical-layout')
@inject(Element)
export class Ui5VerticalLayout extends Ui5Control{
        _verticallayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = null;
@bindable() enabled = true;
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
        @computedFrom('_verticallayout')
        get UIElement() {
            return this._verticallayout;
          }
        fillProperties(params){
                                        params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._verticallayout = new sap.ui.layout.VerticalLayout(this.ui5Id, params);
                                              else
          this._verticallayout = new sap.ui.layout.VerticalLayout(params);
                                                  if(this.ui5Class)
           this._verticallayout.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._verticallayout.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._verticallayout.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._verticallayout, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._verticallayout, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._verticallayout.placeAt)
                                                                this._verticallayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._verticallayout.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._verticallayout)
                                                                this._parent.removeChildByRelation(this._verticallayout, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._verticallayout.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._verticallayout.insertContent(child, _index); else this._verticallayout.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._verticallayout.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._verticallayout.insertCustomData(child, _index); else this._verticallayout.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._verticallayout.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._verticallayout.insertDependent(child, _index); else this._verticallayout.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._verticallayout.removeContent(child);}
if (relation == 'tooltip') {  this._verticallayout.destroyTooltip(child); }
if (relation == 'customdata') {  this._verticallayout.removeCustomData(child);}
if (relation == 'layoutdata') {  this._verticallayout.destroyLayoutData(child); }
if (relation == 'dependents') {  this._verticallayout.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setWidth(newValue);}}
enabledChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setEnabled(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }