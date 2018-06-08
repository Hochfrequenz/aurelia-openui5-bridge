import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-dialog')
@inject(Element)
export class Ui5Dialog extends Ui5Control{
        _dialog = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        @bindable() icon = null;
@bindable() title = null;
@bindable() showHeader = true;
@bindable() type = 'Standard';
@bindable() state = 'None';
@bindable() stretch = false;
@bindable() contentWidth = null;
@bindable() contentHeight = null;
@bindable() horizontalScrolling = true;
@bindable() verticalScrolling = true;
@bindable() resizable = false;
@bindable() draggable = false;
@bindable() escapeHandler = null;
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
        @computedFrom('_dialog')
        get UIElement() {
            return this._dialog;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.title = this.title;
params.showHeader = getBooleanFromAttributeValue(this.showHeader);
params.type = this.type;
params.state = this.state;
params.stretch = getBooleanFromAttributeValue(this.stretch);
params.contentWidth = this.contentWidth;
params.contentHeight = this.contentHeight;
params.horizontalScrolling = getBooleanFromAttributeValue(this.horizontalScrolling);
params.verticalScrolling = getBooleanFromAttributeValue(this.verticalScrolling);
params.resizable = getBooleanFromAttributeValue(this.resizable);
params.draggable = getBooleanFromAttributeValue(this.draggable);
params.escapeHandler = this.escapeHandler;
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
          this._dialog = new sap.m.Dialog(this.ui5Id, params);
        else
          this._dialog = new sap.m.Dialog(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dialog.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._dialog, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._dialog, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dialog.placeAt)
                                                                this._dialog.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dialog.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._dialog)
                                                                this._parent.removeChildByRelation(this._dialog, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dialog.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dialog.insertContent(child, _index); else this._dialog.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'subheader') { this._dialog.setSubHeader(child); return elem.localName;}
if (elem.localName == 'customheader') { this._dialog.setCustomHeader(child); return elem.localName;}
if (elem.localName == 'beginbutton') { this._dialog.setBeginButton(child); return elem.localName;}
if (elem.localName == 'endbutton') { this._dialog.setEndButton(child); return elem.localName;}
if (elem.localName == 'buttons') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dialog.insertButton(child, _index); else this._dialog.addButton(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._dialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dialog.insertCustomData(child, _index); else this._dialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._dialog.insertDependent(child, _index); else this._dialog.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._dialog.removeContent(child);}
if (relation == 'subheader') {  this._dialog.destroySubHeader(child); }
if (relation == 'customheader') {  this._dialog.destroyCustomHeader(child); }
if (relation == 'beginbutton') {  this._dialog.destroyBeginButton(child); }
if (relation == 'endbutton') {  this._dialog.destroyEndButton(child); }
if (relation == 'buttons') {  this._dialog.removeButton(child);}
if (relation == 'tooltip') {  this._dialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._dialog.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dialog.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(this._dialog!==null){ this._dialog.setIcon(newValue);}}
titleChanged(newValue){if(this._dialog!==null){ this._dialog.setTitle(newValue);}}
showHeaderChanged(newValue){if(this._dialog!==null){ this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));}}
typeChanged(newValue){if(this._dialog!==null){ this._dialog.setType(newValue);}}
stateChanged(newValue){if(this._dialog!==null){ this._dialog.setState(newValue);}}
stretchChanged(newValue){if(this._dialog!==null){ this._dialog.setStretch(getBooleanFromAttributeValue(newValue));}}
contentWidthChanged(newValue){if(this._dialog!==null){ this._dialog.setContentWidth(newValue);}}
contentHeightChanged(newValue){if(this._dialog!==null){ this._dialog.setContentHeight(newValue);}}
horizontalScrollingChanged(newValue){if(this._dialog!==null){ this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));}}
verticalScrollingChanged(newValue){if(this._dialog!==null){ this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));}}
resizableChanged(newValue){if(this._dialog!==null){ this._dialog.setResizable(getBooleanFromAttributeValue(newValue));}}
draggableChanged(newValue){if(this._dialog!==null){ this._dialog.setDraggable(getBooleanFromAttributeValue(newValue));}}
escapeHandlerChanged(newValue){if(this._dialog!==null){ this._dialog.setEscapeHandler(newValue);}}
beforeOpenChanged(newValue){if(this._dialog!==null){ this._dialog.attachBeforeOpen(newValue);}}
afterOpenChanged(newValue){if(this._dialog!==null){ this._dialog.attachAfterOpen(newValue);}}
beforeCloseChanged(newValue){if(this._dialog!==null){ this._dialog.attachBeforeClose(newValue);}}
afterCloseChanged(newValue){if(this._dialog!==null){ this._dialog.attachAfterClose(newValue);}}
busyChanged(newValue){if(this._dialog!==null){ this._dialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dialog!==null){ this._dialog.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dialog!==null){ this._dialog.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dialog!==null){ this._dialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dialog!==null){ this._dialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dialog!==null){ this._dialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._dialog!==null){ this._dialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._dialog!==null){ this._dialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._dialog!==null){ this._dialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._dialog!==null){ this._dialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._dialog!==null){ this._dialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }