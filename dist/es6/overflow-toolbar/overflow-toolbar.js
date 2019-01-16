import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Toolbar} from '../toolbar/toolbar';
@customElement('ui5-overflow-toolbar')
@inject(Element)
export class Ui5OverflowToolbar extends Ui5Toolbar{
        _overflowtoolbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        /* inherited from sap.m.Toolbar*/
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
        @computedFrom('_overflowtoolbar')
        get UIElement() {
            return this._overflowtoolbar;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._overflowtoolbar = new sap.m.OverflowToolbar(this.ui5Id, params);
                                              else
          this._overflowtoolbar = new sap.m.OverflowToolbar(params);
                                                  if(this.ui5Class)
           this._overflowtoolbar.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._overflowtoolbar.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._overflowtoolbar.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._overflowtoolbar, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._overflowtoolbar, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._overflowtoolbar.placeAt)
                                                                this._overflowtoolbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._overflowtoolbar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._overflowtoolbar)
                                                                this._parent.removeChildByRelation(this._overflowtoolbar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._overflowtoolbar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._overflowtoolbar.insertContent(child, _index); else this._overflowtoolbar.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._overflowtoolbar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._overflowtoolbar.insertCustomData(child, _index); else this._overflowtoolbar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._overflowtoolbar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._overflowtoolbar.insertDependent(child, _index); else this._overflowtoolbar.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._overflowtoolbar.insertDragDropConfig(child, _index); else this._overflowtoolbar.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._overflowtoolbar.removeContent(child);}
if (relation == 'tooltip') {  this._overflowtoolbar.destroyTooltip(child); }
if (relation == 'customdata') {  this._overflowtoolbar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._overflowtoolbar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._overflowtoolbar.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._overflowtoolbar.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setWidth(newValue);}}
activeChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setActive(getBooleanFromAttributeValue(newValue));}}
enabledChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setEnabled(getBooleanFromAttributeValue(newValue));}}
heightChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setHeight(newValue);}}
designChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setDesign(newValue);}}
styleChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setStyle(newValue);}}
/* inherited from sap.m.Toolbar*/
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachPress(newValue);}}
blockedChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._overflowtoolbar!==null){ this._overflowtoolbar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }