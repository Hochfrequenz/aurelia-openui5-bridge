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
        @bindable() src = null;
@bindable() description = null;
@bindable() press = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._imagecontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._imagecontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._imagecontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._imagecontent, this.element);
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
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._imagecontent.indexOfCustomData(afterElement); if (_index)this._imagecontent.insertCustomData(child, _index + 1); else this._imagecontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._imagecontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._imagecontent.indexOfDependent(afterElement); if (_index)this._imagecontent.insertDependent(child, _index + 1); else this._imagecontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._imagecontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._imagecontent.removeCustomData(child);}
if (relation == 'layoutData') {  this._imagecontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._imagecontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    srcChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setSrc(newValue);}}
descriptionChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setDescription(newValue);}}
pressChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachPress(newValue);}}
busyChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }