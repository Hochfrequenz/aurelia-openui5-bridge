import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-form')
@inject(Element)
export class Ui5Form extends Ui5Control{
        _form = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = null;
@bindable() editable = false;
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
        @computedFrom('_form')
        get UIElement() {
            return this._form;
          }
        fillProperties(params){
                                        params.width = this.width;
params.editable = getBooleanFromAttributeValue(this.editable);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._form = new sap.ui.layout.form.Form(this.ui5Id, params);
                                              else
          this._form = new sap.ui.layout.form.Form(params);
                                                  if(this.ui5Class)
           this._form.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._form.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._form.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._form, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._form, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._form.placeAt)
                                                                this._form.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._form.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._form)
                                                                this._parent.removeChildByRelation(this._form, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._form.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'formcontainers') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._form.insertFormContainer(child, _index); else this._form.addFormContainer(child, 0);  return elem.localName; }
if (elem.localName == 'title-elem') { this._form.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._form.setToolbar(child); return elem.localName;}
if (elem.localName == 'layout') { this._form.setLayout(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._form.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._form.insertCustomData(child, _index); else this._form.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._form.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._form.insertDependent(child, _index); else this._form.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._form.insertDragDropConfig(child, _index); else this._form.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'formcontainers') {  this._form.removeFormContainer(child);}
if (relation == 'title-elem') {  this._form.destroyTitle(child); }
if (relation == 'toolbar') {  this._form.destroyToolbar(child); }
if (relation == 'layout') {  this._form.destroyLayout(child); }
if (relation == 'tooltip') {  this._form.destroyTooltip(child); }
if (relation == 'customdata') {  this._form.removeCustomData(child);}
if (relation == 'layoutdata') {  this._form.destroyLayoutData(child); }
if (relation == 'dependents') {  this._form.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._form.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.setWidth(newValue);}}
editableChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.setEditable(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._form!==null){ this._form.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._form!==null){ this._form.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._form!==null){ this._form.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._form!==null){ this._form.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._form!==null){ this._form.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._form!==null){ this._form.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }