import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-numeric-content')
@inject(Element)
export class Ui5NumericContent extends Ui5Control{
        _numericcontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() animateTextChange = true;
@bindable() formatterValue = false;
@bindable() icon = null;
@bindable() iconDescription = null;
@bindable() indicator = 'None';
@bindable() nullifyValue = true;
@bindable() scale = null;
@bindable() truncateValueTo = 4;
@bindable() value = null;
@bindable() valueColor = 'Neutral';
@bindable() width = null;
@bindable() withMargin = true;
@bindable() state = 'Loaded';
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
        @computedFrom('_numericcontent')
        get UIElement() {
            return this._numericcontent;
          }
        fillProperties(params){
                                        params.animateTextChange = getBooleanFromAttributeValue(this.animateTextChange);
params.formatterValue = getBooleanFromAttributeValue(this.formatterValue);
params.icon = this.icon;
params.iconDescription = this.iconDescription;
params.indicator = this.indicator;
params.nullifyValue = getBooleanFromAttributeValue(this.nullifyValue);
params.scale = this.scale;
params.truncateValueTo = this.truncateValueTo?parseInt(this.truncateValueTo):0;
params.value = this.value;
params.valueColor = this.valueColor;
params.width = this.width;
params.withMargin = getBooleanFromAttributeValue(this.withMargin);
params.state = this.state;
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
          this._numericcontent = new sap.m.NumericContent(this.ui5Id, params);
                                              else
          this._numericcontent = new sap.m.NumericContent(params);
                                                  if(this.ui5Class)
           this._numericcontent.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._numericcontent.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._numericcontent.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._numericcontent, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._numericcontent, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._numericcontent.placeAt)
                                                                this._numericcontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._numericcontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._numericcontent)
                                                                this._parent.removeChildByRelation(this._numericcontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._numericcontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._numericcontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._numericcontent.insertCustomData(child, _index); else this._numericcontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._numericcontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._numericcontent.insertDependent(child, _index); else this._numericcontent.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._numericcontent.insertDragDropConfig(child, _index); else this._numericcontent.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._numericcontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._numericcontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._numericcontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._numericcontent.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._numericcontent.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    animateTextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setAnimateTextChange(getBooleanFromAttributeValue(newValue));}}
formatterValueChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setFormatterValue(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setIcon(newValue);}}
iconDescriptionChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setIconDescription(newValue);}}
indicatorChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setIndicator(newValue);}}
nullifyValueChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setNullifyValue(getBooleanFromAttributeValue(newValue));}}
scaleChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setScale(newValue);}}
truncateValueToChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setTruncateValueTo(newValue);}}
valueChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setValue(newValue);}}
valueColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setValueColor(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setWidth(newValue);}}
withMarginChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setWithMargin(getBooleanFromAttributeValue(newValue));}}
stateChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.setState(newValue);}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachPress(newValue);}}
blockedChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._numericcontent!==null){ this._numericcontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }