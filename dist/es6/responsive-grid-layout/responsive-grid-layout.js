import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5FormLayout} from '../form-layout/form-layout';
@customElement('ui5-responsive-grid-layout')
@inject(Element)
export class Ui5ResponsiveGridLayout extends Ui5FormLayout{
        _responsivegridlayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() labelSpanXL = -1;
@bindable() labelSpanL = 4;
@bindable() labelSpanM = 2;
@bindable() labelSpanS = 12;
@bindable() adjustLabelSpan = true;
@bindable() emptySpanXL = -1;
@bindable() emptySpanL = 0;
@bindable() emptySpanM = 0;
@bindable() emptySpanS = 0;
@bindable() columnsXL = -1;
@bindable() columnsL = 2;
@bindable() columnsM = 1;
@bindable() singleContainerFullSize = true;
@bindable() breakpointXL = 1440;
@bindable() breakpointL = 1024;
@bindable() breakpointM = 600;
/* inherited from sap.ui.layout.form.FormLayout*/
@bindable() backgroundDesign = 'Translucent';
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
        @computedFrom('_responsivegridlayout')
        get UIElement() {
            return this._responsivegridlayout;
          }
        fillProperties(params){
                                        params.labelSpanXL = this.labelSpanXL?parseInt(this.labelSpanXL):0;
params.labelSpanL = this.labelSpanL?parseInt(this.labelSpanL):0;
params.labelSpanM = this.labelSpanM?parseInt(this.labelSpanM):0;
params.labelSpanS = this.labelSpanS?parseInt(this.labelSpanS):0;
params.adjustLabelSpan = getBooleanFromAttributeValue(this.adjustLabelSpan);
params.emptySpanXL = this.emptySpanXL?parseInt(this.emptySpanXL):0;
params.emptySpanL = this.emptySpanL?parseInt(this.emptySpanL):0;
params.emptySpanM = this.emptySpanM?parseInt(this.emptySpanM):0;
params.emptySpanS = this.emptySpanS?parseInt(this.emptySpanS):0;
params.columnsXL = this.columnsXL?parseInt(this.columnsXL):0;
params.columnsL = this.columnsL?parseInt(this.columnsL):0;
params.columnsM = this.columnsM?parseInt(this.columnsM):0;
params.singleContainerFullSize = getBooleanFromAttributeValue(this.singleContainerFullSize);
params.breakpointXL = this.breakpointXL?parseInt(this.breakpointXL):0;
params.breakpointL = this.breakpointL?parseInt(this.breakpointL):0;
params.breakpointM = this.breakpointM?parseInt(this.breakpointM):0;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._responsivegridlayout = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);
                                              else
          this._responsivegridlayout = new sap.ui.layout.form.ResponsiveGridLayout(params);
                                                  if(this.ui5Class)
           this._responsivegridlayout.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._responsivegridlayout.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._responsivegridlayout.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._responsivegridlayout, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._responsivegridlayout, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._responsivegridlayout.placeAt)
                                                                this._responsivegridlayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._responsivegridlayout.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._responsivegridlayout)
                                                                this._parent.removeChildByRelation(this._responsivegridlayout, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._responsivegridlayout.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._responsivegridlayout.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivegridlayout.insertCustomData(child, _index); else this._responsivegridlayout.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._responsivegridlayout.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivegridlayout.insertDependent(child, _index); else this._responsivegridlayout.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivegridlayout.insertDragDropConfig(child, _index); else this._responsivegridlayout.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._responsivegridlayout.destroyTooltip(child); }
if (relation == 'customdata') {  this._responsivegridlayout.removeCustomData(child);}
if (relation == 'layoutdata') {  this._responsivegridlayout.destroyLayoutData(child); }
if (relation == 'dependents') {  this._responsivegridlayout.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._responsivegridlayout.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    labelSpanXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanXL(newValue);}}
labelSpanLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanL(newValue);}}
labelSpanMChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanM(newValue);}}
labelSpanSChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanS(newValue);}}
adjustLabelSpanChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setAdjustLabelSpan(getBooleanFromAttributeValue(newValue));}}
emptySpanXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanXL(newValue);}}
emptySpanLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanL(newValue);}}
emptySpanMChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanM(newValue);}}
emptySpanSChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanS(newValue);}}
columnsXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setColumnsXL(newValue);}}
columnsLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setColumnsL(newValue);}}
columnsMChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setColumnsM(newValue);}}
singleContainerFullSizeChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setSingleContainerFullSize(getBooleanFromAttributeValue(newValue));}}
breakpointXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setBreakpointXL(newValue);}}
breakpointLChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setBreakpointL(newValue);}}
breakpointMChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.setBreakpointM(newValue);}}
backgroundDesignChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBackgroundDesign(newValue);}}
/* inherited from sap.ui.layout.form.FormLayout*/
busyChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivegridlayout!==null){ this._responsivegridlayout.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }