import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-simple-form')
@inject(Element)
export class Ui5SimpleForm extends Ui5Control{
        _simpleform = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() maxContainerCols = 2;
@bindable() minWidth = -1;
@bindable() width = null;
@bindable() editable = null;
@bindable() labelMinWidth = 192;
@bindable() layout = 'ResponsiveLayout';
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
@bindable() backgroundDesign = 'Translucent';
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
        @computedFrom('_simpleform')
        get UIElement() {
            return this._simpleform;
          }
        fillProperties(params){
                                        params.maxContainerCols = this.maxContainerCols?parseInt(this.maxContainerCols):0;
params.minWidth = this.minWidth?parseInt(this.minWidth):0;
params.width = this.width;
params.editable = getBooleanFromAttributeValue(this.editable);
params.labelMinWidth = this.labelMinWidth?parseInt(this.labelMinWidth):0;
params.layout = this.layout;
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
params.backgroundDesign = this.backgroundDesign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._simpleform = new sap.ui.layout.form.SimpleForm(this.ui5Id, params);
                                              else
          this._simpleform = new sap.ui.layout.form.SimpleForm(params);
                                                  if(this.ui5Class)
           this._simpleform.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._simpleform.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._simpleform.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._simpleform, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._simpleform, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._simpleform.placeAt)
                                                                this._simpleform.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._simpleform.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._simpleform)
                                                                this._parent.removeChildByRelation(this._simpleform, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._simpleform.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._simpleform.insertContent(child, _index); else this._simpleform.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'title-elem') { this._simpleform.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._simpleform.setToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._simpleform.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._simpleform.insertCustomData(child, _index); else this._simpleform.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._simpleform.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._simpleform.insertDependent(child, _index); else this._simpleform.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._simpleform.insertDragDropConfig(child, _index); else this._simpleform.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._simpleform.removeContent(child);}
if (relation == 'title-elem') {  this._simpleform.destroyTitle(child); }
if (relation == 'toolbar') {  this._simpleform.destroyToolbar(child); }
if (relation == 'tooltip') {  this._simpleform.destroyTooltip(child); }
if (relation == 'customdata') {  this._simpleform.removeCustomData(child);}
if (relation == 'layoutdata') {  this._simpleform.destroyLayoutData(child); }
if (relation == 'dependents') {  this._simpleform.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._simpleform.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    maxContainerColsChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setMaxContainerCols(newValue);}}
minWidthChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setMinWidth(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setWidth(newValue);}}
editableChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setEditable(getBooleanFromAttributeValue(newValue));}}
labelMinWidthChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setLabelMinWidth(newValue);}}
layoutChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setLayout(newValue);}}
labelSpanXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setLabelSpanXL(newValue);}}
labelSpanLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setLabelSpanL(newValue);}}
labelSpanMChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setLabelSpanM(newValue);}}
labelSpanSChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setLabelSpanS(newValue);}}
adjustLabelSpanChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setAdjustLabelSpan(getBooleanFromAttributeValue(newValue));}}
emptySpanXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setEmptySpanXL(newValue);}}
emptySpanLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setEmptySpanL(newValue);}}
emptySpanMChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setEmptySpanM(newValue);}}
emptySpanSChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setEmptySpanS(newValue);}}
columnsXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setColumnsXL(newValue);}}
columnsLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setColumnsL(newValue);}}
columnsMChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setColumnsM(newValue);}}
singleContainerFullSizeChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setSingleContainerFullSize(getBooleanFromAttributeValue(newValue));}}
breakpointXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setBreakpointXL(newValue);}}
breakpointLChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setBreakpointL(newValue);}}
breakpointMChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setBreakpointM(newValue);}}
backgroundDesignChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.setBackgroundDesign(newValue);}}
blockedChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._simpleform!==null){ this._simpleform.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._simpleform!==null){ this._simpleform.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._simpleform!==null){ this._simpleform.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }