import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-bar')
@inject(Element)
export class Ui5Bar extends Ui5Control{
        _bar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() design = 'Auto';
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
        @computedFrom('_bar')
        get UIElement() {
            return this._bar;
          }
        fillProperties(params){
                                        params.design = this.design;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._bar = new sap.m.Bar(this.ui5Id, params);
                                              else
          this._bar = new sap.m.Bar(params);
                                                  if(this.ui5Class)
           this._bar.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._bar.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._bar.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._bar, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._bar, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._bar.placeAt)
                                                                this._bar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._bar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._bar)
                                                                this._parent.removeChildByRelation(this._bar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._bar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'contentleft') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._bar.insertContentLeft(child, _index); else this._bar.addContentLeft(child, 0);  return elem.localName; }
if (elem.localName == 'contentmiddle') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._bar.insertContentMiddle(child, _index); else this._bar.addContentMiddle(child, 0);  return elem.localName; }
if (elem.localName == 'contentright') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._bar.insertContentRight(child, _index); else this._bar.addContentRight(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._bar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._bar.insertCustomData(child, _index); else this._bar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._bar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._bar.insertDependent(child, _index); else this._bar.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._bar.insertDragDropConfig(child, _index); else this._bar.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'contentleft') {  this._bar.removeContentLeft(child);}
if (relation == 'contentmiddle') {  this._bar.removeContentMiddle(child);}
if (relation == 'contentright') {  this._bar.removeContentRight(child);}
if (relation == 'tooltip') {  this._bar.destroyTooltip(child); }
if (relation == 'customdata') {  this._bar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._bar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._bar.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._bar.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    designChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.setDesign(newValue);}}
blockedChanged(newValue){if(this._bar!==null){ this._bar.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._bar!==null){ this._bar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._bar!==null){ this._bar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._bar!==null){ this._bar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._bar!==null){ this._bar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._bar!==null){ this._bar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._bar!==null){ this._bar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }