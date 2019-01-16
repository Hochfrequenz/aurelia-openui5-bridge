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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() currentLocationText = null;
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
                                                  if(this.ui5Class)
           this._breadcrumbs.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._breadcrumbs.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._breadcrumbs.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._breadcrumbs, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._breadcrumbs, this.element, this.prevId);
        
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
                                                                 if(this._breadcrumbs)
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
                 if (elem.localName == 'links') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._breadcrumbs.insertLink(child, _index); else this._breadcrumbs.addLink(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._breadcrumbs.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._breadcrumbs.insertCustomData(child, _index); else this._breadcrumbs.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._breadcrumbs.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._breadcrumbs.insertDependent(child, _index); else this._breadcrumbs.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._breadcrumbs.insertDragDropConfig(child, _index); else this._breadcrumbs.addDragDropConfig(child, 0);  return elem.localName; }

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
if (relation == 'dragdropconfig') {  this._breadcrumbs.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    currentLocationTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.setCurrentLocationText(newValue);}}
blockedChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._breadcrumbs!==null){ this._breadcrumbs.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }