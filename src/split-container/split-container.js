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
         @bindable prevId = null;
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
params.masterNavigate = this.masterNavigate==null ? this.defaultFunc: this.masterNavigate;
params.afterMasterNavigate = this.afterMasterNavigate==null ? this.defaultFunc: this.afterMasterNavigate;
params.masterButton = this.masterButton==null ? this.defaultFunc: this.masterButton;
params.beforeMasterOpen = this.beforeMasterOpen==null ? this.defaultFunc: this.beforeMasterOpen;
params.afterMasterOpen = this.afterMasterOpen==null ? this.defaultFunc: this.afterMasterOpen;
params.beforeMasterClose = this.beforeMasterClose==null ? this.defaultFunc: this.beforeMasterClose;
params.afterMasterClose = this.afterMasterClose==null ? this.defaultFunc: this.afterMasterClose;
params.detailNavigate = this.detailNavigate==null ? this.defaultFunc: this.detailNavigate;
params.afterDetailNavigate = this.afterDetailNavigate==null ? this.defaultFunc: this.afterDetailNavigate;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._splitcontainer = new sap.m.SplitContainer(this.ui5Id, params);
        else
          this._splitcontainer = new sap.m.SplitContainer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._splitcontainer.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._splitcontainer, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._splitcontainer, this.element, this.prevId);
        
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._splitcontainer)
                                                                this._parent.removeChildByRelation(this._splitcontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._splitcontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'masterpages') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitcontainer.insertMasterPage(child, _index); else this._splitcontainer.addMasterPage(child, 0);  return elem.localName; }
if (elem.localName == 'detailpages') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitcontainer.insertDetailPage(child, _index); else this._splitcontainer.addDetailPage(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._splitcontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitcontainer.insertCustomData(child, _index); else this._splitcontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._splitcontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitcontainer.insertDependent(child, _index); else this._splitcontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'masterpages') {  this._splitcontainer.removeMasterPage(child);}
if (relation == 'detailpages') {  this._splitcontainer.removeDetailPage(child);}
if (relation == 'tooltip') {  this._splitcontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._splitcontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._splitcontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._splitcontainer.removeDependent(child);}

      }
      catch(err){}
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
busyIndicatorSizeChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._splitcontainer!==null){ this._splitcontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }