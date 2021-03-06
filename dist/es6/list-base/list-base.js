import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-list-base')
@inject(Element)
export class Ui5ListBase extends Ui5Control{
        _listbase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() inset = false;
@bindable() headerText = null;
@bindable() footerText = null;
@bindable() mode = 'None';
@bindable() width = '100%';
@bindable() includeItemInSelection = false;
@bindable() showUnread = false;
@bindable() noDataText = null;
@bindable() showNoData = true;
@bindable() enableBusyIndicator = true;
@bindable() modeAnimationOn = true;
@bindable() showSeparators = 'All';
@bindable() swipeDirection = 'Both';
@bindable() growing = false;
@bindable() growingThreshold = 20;
@bindable() growingTriggerText = null;
@bindable() growingScrollToLoad = false;
@bindable() growingDirection = 'Downwards';
@bindable() rememberSelections = true;
@bindable() keyboardMode = 'Navigation';
@bindable() sticky = null;
@bindable() selectionChange = this.defaultFunc;
@bindable() delete = this.defaultFunc;
@bindable() swipe = this.defaultFunc;
@bindable() updateStarted = this.defaultFunc;
@bindable() updateFinished = this.defaultFunc;
@bindable() itemPress = this.defaultFunc;
@bindable() beforeOpenContextMenu = this.defaultFunc;
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
        @computedFrom('_listbase')
        get UIElement() {
            return this._listbase;
          }
        fillProperties(params){
                                        params.inset = getBooleanFromAttributeValue(this.inset);
params.headerText = this.headerText;
params.footerText = this.footerText;
params.mode = this.mode;
params.width = this.width;
params.includeItemInSelection = getBooleanFromAttributeValue(this.includeItemInSelection);
params.showUnread = getBooleanFromAttributeValue(this.showUnread);
params.noDataText = this.noDataText;
params.showNoData = getBooleanFromAttributeValue(this.showNoData);
params.enableBusyIndicator = getBooleanFromAttributeValue(this.enableBusyIndicator);
params.modeAnimationOn = getBooleanFromAttributeValue(this.modeAnimationOn);
params.showSeparators = this.showSeparators;
params.swipeDirection = this.swipeDirection;
params.growing = getBooleanFromAttributeValue(this.growing);
params.growingThreshold = this.growingThreshold?parseInt(this.growingThreshold):0;
params.growingTriggerText = this.growingTriggerText;
params.growingScrollToLoad = getBooleanFromAttributeValue(this.growingScrollToLoad);
params.growingDirection = this.growingDirection;
params.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections);
params.keyboardMode = this.keyboardMode;
params.sticky = this.sticky;
params.selectionChange = this.selectionChange==null ? this.defaultFunc: this.selectionChange;
params.delete = this.delete==null ? this.defaultFunc: this.delete;
params.swipe = this.swipe==null ? this.defaultFunc: this.swipe;
params.updateStarted = this.updateStarted==null ? this.defaultFunc: this.updateStarted;
params.updateFinished = this.updateFinished==null ? this.defaultFunc: this.updateFinished;
params.itemPress = this.itemPress==null ? this.defaultFunc: this.itemPress;
params.beforeOpenContextMenu = this.beforeOpenContextMenu==null ? this.defaultFunc: this.beforeOpenContextMenu;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._listbase = new sap.m.ListBase(this.ui5Id, params);
                                              else
          this._listbase = new sap.m.ListBase(params);
                                                  if(this.ui5Class)
           this._listbase.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._listbase.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listbase.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._listbase, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._listbase, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._listbase.placeAt)
                                                                this._listbase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._listbase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._listbase)
                                                                this._parent.removeChildByRelation(this._listbase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._listbase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listbase.insertItem(child, _index); else this._listbase.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'swipecontent') { this._listbase.setSwipeContent(child); return elem.localName;}
if (elem.localName == 'headertoolbar') { this._listbase.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._listbase.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'contextmenu') { this._listbase.setContextMenu(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._listbase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listbase.insertCustomData(child, _index); else this._listbase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._listbase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listbase.insertDependent(child, _index); else this._listbase.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._listbase.insertDragDropConfig(child, _index); else this._listbase.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._listbase.removeItem(child);}
if (relation == 'swipecontent') {  this._listbase.destroySwipeContent(child); }
if (relation == 'headertoolbar') {  this._listbase.destroyHeaderToolbar(child); }
if (relation == 'infotoolbar') {  this._listbase.destroyInfoToolbar(child); }
if (relation == 'contextmenu') {  this._listbase.destroyContextMenu(child); }
if (relation == 'tooltip') {  this._listbase.destroyTooltip(child); }
if (relation == 'customdata') {  this._listbase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._listbase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._listbase.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._listbase.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    insetChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setHeaderText(newValue);}}
footerTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setFooterText(newValue);}}
modeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setMode(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setWidth(newValue);}}
includeItemInSelectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue));}}
showUnreadChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setShowUnread(getBooleanFromAttributeValue(newValue));}}
noDataTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setNoDataText(newValue);}}
showNoDataChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setShowNoData(getBooleanFromAttributeValue(newValue));}}
enableBusyIndicatorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));}}
modeAnimationOnChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setModeAnimationOn(getBooleanFromAttributeValue(newValue));}}
showSeparatorsChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setShowSeparators(newValue);}}
swipeDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setSwipeDirection(newValue);}}
growingChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setGrowing(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setGrowingThreshold(newValue);}}
growingTriggerTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setGrowingTriggerText(newValue);}}
growingScrollToLoadChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue));}}
growingDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setGrowingDirection(newValue);}}
rememberSelectionsChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
keyboardModeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setKeyboardMode(newValue);}}
stickyChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.setSticky(newValue);}}
selectionChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachDelete(newValue);}}
swipeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachSwipe(newValue);}}
updateStartedChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachItemPress(newValue);}}
beforeOpenContextMenuChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachBeforeOpenContextMenu(newValue);}}
busyChanged(newValue){if(this._listbase!==null){ this._listbase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._listbase!==null){ this._listbase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._listbase!==null){ this._listbase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._listbase!==null){ this._listbase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._listbase!==null){ this._listbase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._listbase!==null){ this._listbase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }