import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-split-container')
@inject(Element)
export class Ui5SplitContainer extends Ui5Control{
        _splitcontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() defaultTransitionNameDetail = 'slide';
@bindable() defaultTransitionNameMaster = 'slide';
@bindable() mode = 'ShowHideMode';
@bindable() masterButtonText = null;
@bindable() masterButtonTooltip = null;
@bindable() backgroundColor = null;
@bindable() backgroundImage = null;
@bindable() backgroundRepeat = false;
@bindable() backgroundOpacity = 1;
@bindable() masterNavigate = this.defaultFunc;
@bindable() afterMasterNavigate = this.defaultFunc;
@bindable() masterButton = this.defaultFunc;
@bindable() beforeMasterOpen = this.defaultFunc;
@bindable() afterMasterOpen = this.defaultFunc;
@bindable() beforeMasterClose = this.defaultFunc;
@bindable() afterMasterClose = this.defaultFunc;
@bindable() detailNavigate = this.defaultFunc;
@bindable() afterDetailNavigate = this.defaultFunc;
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
        @computedFrom('_splitcontainer')
        get UIElement() {
            return this._splitcontainer;
          }
        fillProperties(params){
               params.defaultTransitionNameDetail = this.defaultTransitionNameDetail;
params.defaultTransitionNameMaster = this.defaultTransitionNameMaster;
params.mode = this.mode;
params.masterButtonText = this.masterButtonText;
params.masterButtonTooltip = this.masterButtonTooltip;
params.backgroundColor = this.backgroundColor;
params.backgroundImage = this.backgroundImage;
params.backgroundRepeat = getBooleanFromAttributeValue(this.backgroundRepeat);
params.backgroundOpacity = this.backgroundOpacity;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._splitcontainer = new sap.m.SplitContainer(this.ui5Id, params);
        else
          this._splitcontainer = new sap.m.SplitContainer(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._splitcontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._splitcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._splitcontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._splitcontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._splitcontainer.placeAt)
                                                                this._splitcontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._splitcontainer.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._splitcontainer, this._relation);
                                                            }
         else{
                                                                this._splitcontainer.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'masterPages') { var _index = null; if (afterElement) _index = this._splitcontainer.indexOfMasterPage(afterElement); if (_index)this._splitcontainer.insertMasterPage(child, _index + 1); else this._splitcontainer.addMasterPage(child, 0);  return elem.localName; }
if (elem.localName == 'detailPages') { var _index = null; if (afterElement) _index = this._splitcontainer.indexOfDetailPage(afterElement); if (_index)this._splitcontainer.insertDetailPage(child, _index + 1); else this._splitcontainer.addDetailPage(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'masterPages') {  this._splitcontainer.removeMasterPage(child); }
if (relation == 'detailPages') {  this._splitcontainer.removeDetailPage(child); }

                                                                            }
    defaultTransitionNameDetailChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setDefaultTransitionNameDetail(newValue);}}
defaultTransitionNameMasterChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setDefaultTransitionNameMaster(newValue);}}
modeChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setMode(newValue);}}
masterButtonTextChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setMasterButtonText(newValue);}}
masterButtonTooltipChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setMasterButtonTooltip(newValue);}}
backgroundColorChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBackgroundColor(newValue);}}
backgroundImageChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBackgroundImage(newValue);}}
backgroundRepeatChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBackgroundRepeat(getBooleanFromAttributeValue(newValue));}}
backgroundOpacityChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBackgroundOpacity(newValue);}}
masterNavigateChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachMasterNavigate(newValue);}}
afterMasterNavigateChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachAfterMasterNavigate(newValue);}}
masterButtonChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachMasterButton(newValue);}}
beforeMasterOpenChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachBeforeMasterOpen(newValue);}}
afterMasterOpenChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachAfterMasterOpen(newValue);}}
beforeMasterCloseChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachBeforeMasterClose(newValue);}}
afterMasterCloseChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachAfterMasterClose(newValue);}}
detailNavigateChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachDetailNavigate(newValue);}}
afterDetailNavigateChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachAfterDetailNavigate(newValue);}}
busyChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachValidateFieldGroup(newValue);}}


                                                                                }