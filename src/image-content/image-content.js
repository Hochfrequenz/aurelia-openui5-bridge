import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-image-content')
@inject(Element)
export class Ui5ImageContent extends Ui5Control{
        _imagecontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() src = null;
@bindable() description = null;
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
        @computedFrom('_imagecontent')
        get UIElement() {
            return this._imagecontent;
          }
        fillProperties(params){
                                        params.src = this.src;
params.description = this.description;
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
          this._imagecontent = new sap.m.ImageContent(this.ui5Id, params);
                                              else
          this._imagecontent = new sap.m.ImageContent(params);
                                                  if(this.ui5Class)
           this._imagecontent.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._imagecontent.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._imagecontent.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._imagecontent, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._imagecontent, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._imagecontent.placeAt)
                                                                this._imagecontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._imagecontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._imagecontent)
                                                                this._parent.removeChildByRelation(this._imagecontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._imagecontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._imagecontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._imagecontent.insertCustomData(child, _index); else this._imagecontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._imagecontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._imagecontent.insertDependent(child, _index); else this._imagecontent.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._imagecontent.insertDragDropConfig(child, _index); else this._imagecontent.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._imagecontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._imagecontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._imagecontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._imagecontent.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._imagecontent.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    srcChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.setSrc(newValue);}}
descriptionChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.setDescription(newValue);}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachPress(newValue);}}
blockedChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._imagecontent!==null){ this._imagecontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }