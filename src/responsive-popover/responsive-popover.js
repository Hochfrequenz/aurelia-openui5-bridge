import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-responsive-popover')
@inject(Element)
export class Ui5ResponsivePopover extends Ui5Control{
        _responsivepopover = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() placement = 'Right';
@bindable() showHeader = true;
@bindable() title = null;
@bindable() icon = null;
@bindable() modal = null;
@bindable() offsetX = null;
@bindable() offsetY = null;
@bindable() showArrow = true;
@bindable() contentWidth = null;
@bindable() contentHeight = null;
@bindable() horizontalScrolling = true;
@bindable() verticalScrolling = true;
@bindable() showCloseButton = true;
@bindable() resizable = false;
@bindable() beforeOpen = this.defaultFunc;
@bindable() afterOpen = this.defaultFunc;
@bindable() beforeClose = this.defaultFunc;
@bindable() afterClose = this.defaultFunc;
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
        @computedFrom('_responsivepopover')
        get UIElement() {
            return this._responsivepopover;
          }
        fillProperties(params){
                                        params.placement = this.placement;
params.showHeader = getBooleanFromAttributeValue(this.showHeader);
params.title = this.title;
params.icon = this.icon;
params.modal = getBooleanFromAttributeValue(this.modal);
params.offsetX = this.offsetX?parseInt(this.offsetX):0;
params.offsetY = this.offsetY?parseInt(this.offsetY):0;
params.showArrow = getBooleanFromAttributeValue(this.showArrow);
params.contentWidth = this.contentWidth;
params.contentHeight = this.contentHeight;
params.horizontalScrolling = getBooleanFromAttributeValue(this.horizontalScrolling);
params.verticalScrolling = getBooleanFromAttributeValue(this.verticalScrolling);
params.showCloseButton = getBooleanFromAttributeValue(this.showCloseButton);
params.resizable = getBooleanFromAttributeValue(this.resizable);
params.beforeOpen = this.beforeOpen==null ? this.defaultFunc: this.beforeOpen;
params.afterOpen = this.afterOpen==null ? this.defaultFunc: this.afterOpen;
params.beforeClose = this.beforeClose==null ? this.defaultFunc: this.beforeClose;
params.afterClose = this.afterClose==null ? this.defaultFunc: this.afterClose;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._responsivepopover = new sap.m.ResponsivePopover(this.ui5Id, params);
                                              else
          this._responsivepopover = new sap.m.ResponsivePopover(params);
                                                  if(this.ui5Class)
           this._responsivepopover.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._responsivepopover.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._responsivepopover.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._responsivepopover, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._responsivepopover, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._responsivepopover.placeAt)
                                                                this._responsivepopover.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._responsivepopover.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._responsivepopover)
                                                                this._parent.removeChildByRelation(this._responsivepopover, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._responsivepopover.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivepopover.insertContent(child, _index); else this._responsivepopover.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'customheader') { this._responsivepopover.setCustomHeader(child); return elem.localName;}
if (elem.localName == 'subheader') { this._responsivepopover.setSubHeader(child); return elem.localName;}
if (elem.localName == 'beginbutton') { this._responsivepopover.setBeginButton(child); return elem.localName;}
if (elem.localName == 'endbutton') { this._responsivepopover.setEndButton(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._responsivepopover.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivepopover.insertCustomData(child, _index); else this._responsivepopover.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._responsivepopover.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivepopover.insertDependent(child, _index); else this._responsivepopover.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._responsivepopover.removeContent(child);}
if (relation == 'customheader') {  this._responsivepopover.destroyCustomHeader(child); }
if (relation == 'subheader') {  this._responsivepopover.destroySubHeader(child); }
if (relation == 'beginbutton') {  this._responsivepopover.destroyBeginButton(child); }
if (relation == 'endbutton') {  this._responsivepopover.destroyEndButton(child); }
if (relation == 'tooltip') {  this._responsivepopover.destroyTooltip(child); }
if (relation == 'customdata') {  this._responsivepopover.removeCustomData(child);}
if (relation == 'layoutdata') {  this._responsivepopover.destroyLayoutData(child); }
if (relation == 'dependents') {  this._responsivepopover.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    placementChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setPlacement(newValue);}}
showHeaderChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setShowHeader(getBooleanFromAttributeValue(newValue));}}
titleChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setTitle(newValue);}}
iconChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setIcon(newValue);}}
modalChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setModal(getBooleanFromAttributeValue(newValue));}}
offsetXChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setOffsetX(newValue);}}
offsetYChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setOffsetY(newValue);}}
showArrowChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setShowArrow(getBooleanFromAttributeValue(newValue));}}
contentWidthChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setContentWidth(newValue);}}
contentHeightChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setContentHeight(newValue);}}
horizontalScrollingChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));}}
verticalScrollingChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setVerticalScrolling(getBooleanFromAttributeValue(newValue));}}
showCloseButtonChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setShowCloseButton(getBooleanFromAttributeValue(newValue));}}
resizableChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setResizable(getBooleanFromAttributeValue(newValue));}}
beforeOpenChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachBeforeOpen(newValue);}}
afterOpenChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachAfterOpen(newValue);}}
beforeCloseChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachBeforeClose(newValue);}}
afterCloseChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachAfterClose(newValue);}}
busyChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }