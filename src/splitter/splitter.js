import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-splitter')
@inject(Element)
export class Ui5Splitter extends Ui5Control{
        _splitter = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() orientation = 'Horizontal';
@bindable() width = '100%';
@bindable() height = '100%';
@bindable() resize = this.defaultFunc;
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
        @computedFrom('_splitter')
        get UIElement() {
            return this._splitter;
          }
        fillProperties(params){
                                        params.orientation = this.orientation;
params.width = this.width;
params.height = this.height;
params.resize = this.resize==null ? this.defaultFunc: this.resize;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._splitter = new sap.ui.layout.Splitter(this.ui5Id, params);
                                              else
          this._splitter = new sap.ui.layout.Splitter(params);
                                                  if(this.ui5Class)
           this._splitter.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._splitter.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._splitter.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._splitter, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._splitter, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._splitter.placeAt)
                                                                this._splitter.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._splitter.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._splitter)
                                                                this._parent.removeChildByRelation(this._splitter, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._splitter.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'contentareas') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitter.insertContentArea(child, _index); else this._splitter.addContentArea(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._splitter.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitter.insertCustomData(child, _index); else this._splitter.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._splitter.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitter.insertDependent(child, _index); else this._splitter.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitter.insertDragDropConfig(child, _index); else this._splitter.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'contentareas') {  this._splitter.removeContentArea(child);}
if (relation == 'tooltip') {  this._splitter.destroyTooltip(child); }
if (relation == 'customdata') {  this._splitter.removeCustomData(child);}
if (relation == 'layoutdata') {  this._splitter.destroyLayoutData(child); }
if (relation == 'dependents') {  this._splitter.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._splitter.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    orientationChanged(newValue){if(this._splitter!==null){ this._splitter.setOrientation(newValue);}}
widthChanged(newValue){if(this._splitter!==null){ this._splitter.setWidth(newValue);}}
heightChanged(newValue){if(this._splitter!==null){ this._splitter.setHeight(newValue);}}
resizeChanged(newValue){if(this._splitter!==null){ this._splitter.attachResize(newValue);}}
blockedChanged(newValue){if(this._splitter!==null){ this._splitter.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._splitter!==null){ this._splitter.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._splitter!==null){ this._splitter.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._splitter!==null){ this._splitter.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._splitter!==null){ this._splitter.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._splitter!==null){ this._splitter.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._splitter!==null){ this._splitter.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._splitter!==null){ this._splitter.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._splitter!==null){ this._splitter.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._splitter!==null){ this._splitter.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._splitter!==null){ this._splitter.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._splitter!==null){ this._splitter.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }