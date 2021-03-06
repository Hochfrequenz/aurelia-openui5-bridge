import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-html')
@inject(Element)
export class Ui5Html extends Ui5Control{
        _html = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() content = null;
@bindable() preferDOM = true;
@bindable() sanitizeContent = false;
@bindable() visible = true;
@bindable() afterRendering = this.defaultFunc;
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
        @computedFrom('_html')
        get UIElement() {
            return this._html;
          }
        fillProperties(params){
                                        params.content = this.content;
params.preferDOM = getBooleanFromAttributeValue(this.preferDOM);
params.sanitizeContent = getBooleanFromAttributeValue(this.sanitizeContent);
params.visible = getBooleanFromAttributeValue(this.visible);
params.afterRendering = this.afterRendering==null ? this.defaultFunc: this.afterRendering;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._html = new sap.ui.core.HTML(this.ui5Id, params);
                                              else
          this._html = new sap.ui.core.HTML(params);
                                                  if(this.ui5Class)
           this._html.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._html.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._html.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._html, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._html, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._html.placeAt)
                                                                this._html.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._html.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._html)
                                                                this._parent.removeChildByRelation(this._html, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._html.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._html.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._html.insertCustomData(child, _index); else this._html.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._html.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._html.insertDependent(child, _index); else this._html.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._html.insertDragDropConfig(child, _index); else this._html.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._html.destroyTooltip(child); }
if (relation == 'customdata') {  this._html.removeCustomData(child);}
if (relation == 'layoutdata') {  this._html.destroyLayoutData(child); }
if (relation == 'dependents') {  this._html.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._html.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    contentChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.setContent(newValue);}}
preferDOMChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.setPreferDOM(getBooleanFromAttributeValue(newValue));}}
sanitizeContentChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.setSanitizeContent(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.setVisible(getBooleanFromAttributeValue(newValue));}}
afterRenderingChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachAfterRendering(newValue);}}
busyChanged(newValue){if(this._html!==null){ this._html.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._html!==null){ this._html.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._html!==null){ this._html.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._html!==null){ this._html.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._html!==null){ this._html.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._html!==null){ this._html.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }