import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-toolbar-spacer')
@inject(Element)
export class Ui5ToolbarSpacer extends Ui5Control{
        _toolbarspacer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = '';
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
        @computedFrom('_toolbarspacer')
        get UIElement() {
            return this._toolbarspacer;
          }
        fillProperties(params){
                                        params.width = this.width;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._toolbarspacer = new sap.m.ToolbarSpacer(this.ui5Id, params);
                                              else
          this._toolbarspacer = new sap.m.ToolbarSpacer(params);
                                                  if(this.ui5Class)
           this._toolbarspacer.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._toolbarspacer.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._toolbarspacer.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._toolbarspacer, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._toolbarspacer, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._toolbarspacer.placeAt)
                                                                this._toolbarspacer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._toolbarspacer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._toolbarspacer)
                                                                this._parent.removeChildByRelation(this._toolbarspacer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._toolbarspacer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._toolbarspacer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._toolbarspacer.insertCustomData(child, _index); else this._toolbarspacer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._toolbarspacer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._toolbarspacer.insertDependent(child, _index); else this._toolbarspacer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._toolbarspacer.destroyTooltip(child); }
if (relation == 'customdata') {  this._toolbarspacer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._toolbarspacer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._toolbarspacer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setWidth(newValue);}}
busyChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }