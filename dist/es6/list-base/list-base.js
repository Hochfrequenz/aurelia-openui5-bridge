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
        @bindable() inset = false;
@bindable() headerText = null;
@bindable() headerDesign = 'Standard';
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
@bindable() select = this.defaultFunc;
@bindable() selectionChange = this.defaultFunc;
@bindable() delete = this.defaultFunc;
@bindable() swipe = this.defaultFunc;
@bindable() growingStarted = this.defaultFunc;
@bindable() growingFinished = this.defaultFunc;
@bindable() updateStarted = this.defaultFunc;
@bindable() updateFinished = this.defaultFunc;
@bindable() itemPress = this.defaultFunc;
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
        @computedFrom('_listbase')
        get UIElement() {
            return this._listbase;
          }
        fillProperties(params){
               params.inset = getBooleanFromAttributeValue(this.inset);
params.headerText = this.headerText;
params.headerDesign = this.headerDesign;
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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._listbase = new sap.m.ListBase(this.ui5Id, params);
        else
          this._listbase = new sap.m.ListBase(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listbase.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._listbase, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._listbase, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._listbase, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._listbase, this._relation);
                                                            }
         else{
                                                                this._listbase.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._listbase.indexOfItem(afterElement); if (_index)this._listbase.insertItem(child, _index + 1); else this._listbase.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'swipeContent') { this._listbase.setSwipeContent(child); return elem.localName;}
if (elem.localName == 'headerToolbar') { this._listbase.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infoToolbar') { this._listbase.setInfoToolbar(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._listbase.removeItem(child); }

                                                                            }
    insetChanged(newValue){if(this._listbase!==null){ this._listbase.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(this._listbase!==null){ this._listbase.setHeaderText(newValue);}}
headerDesignChanged(newValue){if(this._listbase!==null){ this._listbase.setHeaderDesign(newValue);}}
footerTextChanged(newValue){if(this._listbase!==null){ this._listbase.setFooterText(newValue);}}
modeChanged(newValue){if(this._listbase!==null){ this._listbase.setMode(newValue);}}
widthChanged(newValue){if(this._listbase!==null){ this._listbase.setWidth(newValue);}}
includeItemInSelectionChanged(newValue){if(this._listbase!==null){ this._listbase.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue));}}
showUnreadChanged(newValue){if(this._listbase!==null){ this._listbase.setShowUnread(getBooleanFromAttributeValue(newValue));}}
noDataTextChanged(newValue){if(this._listbase!==null){ this._listbase.setNoDataText(newValue);}}
showNoDataChanged(newValue){if(this._listbase!==null){ this._listbase.setShowNoData(getBooleanFromAttributeValue(newValue));}}
enableBusyIndicatorChanged(newValue){if(this._listbase!==null){ this._listbase.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));}}
modeAnimationOnChanged(newValue){if(this._listbase!==null){ this._listbase.setModeAnimationOn(getBooleanFromAttributeValue(newValue));}}
showSeparatorsChanged(newValue){if(this._listbase!==null){ this._listbase.setShowSeparators(newValue);}}
swipeDirectionChanged(newValue){if(this._listbase!==null){ this._listbase.setSwipeDirection(newValue);}}
growingChanged(newValue){if(this._listbase!==null){ this._listbase.setGrowing(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._listbase!==null){ this._listbase.setGrowingThreshold(newValue);}}
growingTriggerTextChanged(newValue){if(this._listbase!==null){ this._listbase.setGrowingTriggerText(newValue);}}
growingScrollToLoadChanged(newValue){if(this._listbase!==null){ this._listbase.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue));}}
growingDirectionChanged(newValue){if(this._listbase!==null){ this._listbase.setGrowingDirection(newValue);}}
rememberSelectionsChanged(newValue){if(this._listbase!==null){ this._listbase.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
keyboardModeChanged(newValue){if(this._listbase!==null){ this._listbase.setKeyboardMode(newValue);}}
selectChanged(newValue){if(this._listbase!==null){ this._listbase.attachSelect(newValue);}}
selectionChangeChanged(newValue){if(this._listbase!==null){ this._listbase.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(this._listbase!==null){ this._listbase.attachDelete(newValue);}}
swipeChanged(newValue){if(this._listbase!==null){ this._listbase.attachSwipe(newValue);}}
growingStartedChanged(newValue){if(this._listbase!==null){ this._listbase.attachGrowingStarted(newValue);}}
growingFinishedChanged(newValue){if(this._listbase!==null){ this._listbase.attachGrowingFinished(newValue);}}
updateStartedChanged(newValue){if(this._listbase!==null){ this._listbase.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(this._listbase!==null){ this._listbase.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(this._listbase!==null){ this._listbase.attachItemPress(newValue);}}
busyChanged(newValue){if(this._listbase!==null){ this._listbase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._listbase!==null){ this._listbase.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._listbase!==null){ this._listbase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._listbase!==null){ this._listbase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._listbase!==null){ this._listbase.attachValidateFieldGroup(newValue);}}


                                                                                }