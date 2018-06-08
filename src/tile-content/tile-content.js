import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-tile-content')
@inject(Element)
export class Ui5TileContent extends Ui5Control{
        _tilecontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        @bindable() footer = null;
@bindable() footerColor = 'Neutral';
@bindable() unit = null;
@bindable() disabled = false;
@bindable() frameType = 'Auto';
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
        @computedFrom('_tilecontent')
        get UIElement() {
            return this._tilecontent;
          }
        fillProperties(params){
                                        params.footer = this.footer;
params.footerColor = this.footerColor;
params.unit = this.unit;
params.disabled = getBooleanFromAttributeValue(this.disabled);
params.frameType = this.frameType;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tilecontent = new sap.m.TileContent(this.ui5Id, params);
        else
          this._tilecontent = new sap.m.TileContent(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tilecontent.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._tilecontent, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._tilecontent, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tilecontent.placeAt)
                                                                this._tilecontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tilecontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._tilecontent)
                                                                this._parent.removeChildByRelation(this._tilecontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tilecontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { this._tilecontent.setContent(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._tilecontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tilecontent.insertCustomData(child, _index); else this._tilecontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tilecontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tilecontent.insertDependent(child, _index); else this._tilecontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._tilecontent.destroyContent(child); }
if (relation == 'tooltip') {  this._tilecontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._tilecontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tilecontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tilecontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    footerChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFooter(newValue);}}
footerColorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFooterColor(newValue);}}
unitChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setUnit(newValue);}}
disabledChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setDisabled(getBooleanFromAttributeValue(newValue));}}
frameTypeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFrameType(newValue);}}
busyChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }