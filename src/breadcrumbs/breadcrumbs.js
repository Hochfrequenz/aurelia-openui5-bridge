import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-breadcrumbs')
@inject(Element)
export class Ui5Breadcrumbs extends Ui5Control{
        _breadcrumbs = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() currentLocationText = null;
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
        @computedFrom('_breadcrumbs')
        get UIElement() {
            return this._breadcrumbs;
          }
        fillProperties(params){
                                        params.currentLocationText = this.currentLocationText;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._breadcrumbs = new sap.m.Breadcrumbs(this.ui5Id, params);
        else
          this._breadcrumbs = new sap.m.Breadcrumbs(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._breadcrumbs.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._breadcrumbs, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._breadcrumbs, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._breadcrumbs, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._breadcrumbs.placeAt)
                                                                this._breadcrumbs.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._breadcrumbs.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._breadcrumbs, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._breadcrumbs.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'links') { var _index = null; if (afterElement) _index = this._breadcrumbs.indexOfLink(afterElement); if (_index)this._breadcrumbs.insertLink(child, _index + 1); else this._breadcrumbs.addLink(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._breadcrumbs.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._breadcrumbs.indexOfCustomData(afterElement); if (_index)this._breadcrumbs.insertCustomData(child, _index + 1); else this._breadcrumbs.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._breadcrumbs.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._breadcrumbs.indexOfDependent(afterElement); if (_index)this._breadcrumbs.insertDependent(child, _index + 1); else this._breadcrumbs.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'links') {  this._breadcrumbs.removeLink(child);}
if (relation == 'tooltip') {  this._breadcrumbs.destroyTooltip(child); }
if (relation == 'customdata') {  this._breadcrumbs.removeCustomData(child);}
if (relation == 'layoutdata') {  this._breadcrumbs.destroyLayoutData(child); }
if (relation == 'dependents') {  this._breadcrumbs.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    currentLocationTextChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setCurrentLocationText(newValue);}}
busyChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }