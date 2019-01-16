import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-formatted-text')
@inject(Element)
export class Ui5FormattedText extends Ui5Control{
        _formattedtext = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() htmlText = '';
@bindable() width = null;
@bindable() convertLinksToAnchorTags = 'None';
@bindable() convertedLinksDefaultTarget = '_blank';
@bindable() height = null;
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
        @computedFrom('_formattedtext')
        get UIElement() {
            return this._formattedtext;
          }
        fillProperties(params){
                                        params.htmlText = this.htmlText;
params.width = this.width;
params.convertLinksToAnchorTags = this.convertLinksToAnchorTags;
params.convertedLinksDefaultTarget = this.convertedLinksDefaultTarget;
params.height = this.height;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._formattedtext = new sap.m.FormattedText(this.ui5Id, params);
                                              else
          this._formattedtext = new sap.m.FormattedText(params);
                                                  if(this.ui5Class)
           this._formattedtext.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._formattedtext.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formattedtext.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._formattedtext, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._formattedtext, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formattedtext.placeAt)
                                                                this._formattedtext.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formattedtext.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._formattedtext)
                                                                this._parent.removeChildByRelation(this._formattedtext, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formattedtext.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._formattedtext.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._formattedtext.insertCustomData(child, _index); else this._formattedtext.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formattedtext.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._formattedtext.insertDependent(child, _index); else this._formattedtext.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._formattedtext.insertDragDropConfig(child, _index); else this._formattedtext.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._formattedtext.destroyTooltip(child); }
if (relation == 'customdata') {  this._formattedtext.removeCustomData(child);}
if (relation == 'layoutdata') {  this._formattedtext.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formattedtext.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._formattedtext.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    htmlTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.setHtmlText(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.setWidth(newValue);}}
convertLinksToAnchorTagsChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.setConvertLinksToAnchorTags(newValue);}}
convertedLinksDefaultTargetChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.setConvertedLinksDefaultTarget(newValue);}}
heightChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.setHeight(newValue);}}
blockedChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._formattedtext!==null){ this._formattedtext.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }