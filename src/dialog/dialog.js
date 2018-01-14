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
        @bindable() icon = null;
@bindable() title = null;
@bindable() showHeader = true;
@bindable() type = 'Standard';
@bindable() state = 'None';
@bindable() stretchOnPhone = false;
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
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;

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
params.stretchOnPhone = getBooleanFromAttributeValue(this.stretchOnPhone);
params.stretch = getBooleanFromAttributeValue(this.stretch);
params.contentWidth = this.contentWidth;
params.contentHeight = this.contentHeight;
params.horizontalScrolling = getBooleanFromAttributeValue(this.horizontalScrolling);
params.verticalScrolling = getBooleanFromAttributeValue(this.verticalScrolling);
params.resizable = getBooleanFromAttributeValue(this.resizable);
params.draggable = getBooleanFromAttributeValue(this.draggable);
params.escapeHandler = this.escapeHandler;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._dialog = new sap.m.Dialog(this.ui5Id, params);
        else
          this._dialog = new sap.m.Dialog(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dialog, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dialog, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._dialog, this._relation);
                                                            }
         else{
                                                                this._dialog.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._dialog.indexOfContent(afterElement); if (_index)this._dialog.insertContent(child, _index + 1); else this._dialog.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'subHeader') { this._dialog.setSubHeader(child); return elem.localName;}
if (elem.localName == 'customHeader') { this._dialog.setCustomHeader(child); return elem.localName;}
if (elem.localName == 'beginButton') { this._dialog.setBeginButton(child); return elem.localName;}
if (elem.localName == 'endButton') { this._dialog.setEndButton(child); return elem.localName;}
if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._dialog.indexOfButton(afterElement); if (_index)this._dialog.insertButton(child, _index + 1); else this._dialog.addButton(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._dialog.removeContent(child); }
if (relation == 'buttons') {  this._dialog.removeButton(child); }

                                                                            }
    iconChanged(newValue){if(this._dialog!==null){ this._dialog.setIcon(newValue);}}
titleChanged(newValue){if(this._dialog!==null){ this._dialog.setTitle(newValue);}}
showHeaderChanged(newValue){if(this._dialog!==null){ this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));}}
typeChanged(newValue){if(this._dialog!==null){ this._dialog.setType(newValue);}}
stateChanged(newValue){if(this._dialog!==null){ this._dialog.setState(newValue);}}
stretchOnPhoneChanged(newValue){if(this._dialog!==null){ this._dialog.setStretchOnPhone(getBooleanFromAttributeValue(newValue));}}
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
visibleChanged(newValue){if(this._dialog!==null){ this._dialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dialog!==null){ this._dialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dialog!==null){ this._dialog.attachValidateFieldGroup(newValue);}}


                                                                                }