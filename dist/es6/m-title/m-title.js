import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-m-title')
@inject(Element)
export class Ui5mTitle extends Ui5Control{
        _mtitle = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() text = null;
@bindable() level = 'Auto';
@bindable() titleStyle = 'Auto';
@bindable() width = null;
@bindable() textAlign = 'Initial';
@bindable() wrapping = false;
@bindable() wrappingType = 'Normal';
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
        @computedFrom('_mtitle')
        get UIElement() {
            return this._mtitle;
          }
        fillProperties(params){
                                        params.text = this.text;
params.level = this.level;
params.titleStyle = this.titleStyle;
params.width = this.width;
params.textAlign = this.textAlign;
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.wrappingType = this.wrappingType;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._mtitle = new sap.m.Title(this.ui5Id, params);
                                              else
          this._mtitle = new sap.m.Title(params);
                                                  if(this.ui5Class)
           this._mtitle.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._mtitle.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._mtitle.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._mtitle, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._mtitle, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._mtitle.placeAt)
                                                                this._mtitle.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._mtitle.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._mtitle)
                                                                this._parent.removeChildByRelation(this._mtitle, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._mtitle.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._mtitle.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._mtitle.insertCustomData(child, _index); else this._mtitle.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._mtitle.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._mtitle.insertDependent(child, _index); else this._mtitle.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._mtitle.insertDragDropConfig(child, _index); else this._mtitle.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._mtitle.destroyTooltip(child); }
if (relation == 'customdata') {  this._mtitle.removeCustomData(child);}
if (relation == 'layoutdata') {  this._mtitle.destroyLayoutData(child); }
if (relation == 'dependents') {  this._mtitle.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._mtitle.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setText(newValue);}}
levelChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setLevel(newValue);}}
titleStyleChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setTitleStyle(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setWidth(newValue);}}
textAlignChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setTextAlign(newValue);}}
wrappingChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setWrapping(getBooleanFromAttributeValue(newValue));}}
wrappingTypeChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.setWrappingType(newValue);}}
busyChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._mtitle!==null){ this._mtitle.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._mtitle!==null){ this._mtitle.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._mtitle!==null){ this._mtitle.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }