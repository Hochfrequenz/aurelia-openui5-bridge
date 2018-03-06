import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListBase} from '../list-base/list-base';
@customElement('ui5-list')
@inject(Element)
export class Ui5List extends Ui5ListBase{
        _list = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() backgroundDesign = 'Solid';
/* inherited from sap.m.ListBase*/
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
@bindable() selectionChange = this.defaultFunc;
@bindable() delete = this.defaultFunc;
@bindable() swipe = this.defaultFunc;
@bindable() updateStarted = this.defaultFunc;
@bindable() updateFinished = this.defaultFunc;
@bindable() itemPress = this.defaultFunc;
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
        @computedFrom('_list')
        get UIElement() {
            return this._list;
          }
        fillProperties(params){
                                        params.backgroundDesign = this.backgroundDesign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._list = new sap.m.List(this.ui5Id, params);
        else
          this._list = new sap.m.List(params);
        if (this._list._oGrowingDelegate){this._list._oGrowingDelegate.updateItems = function(sChangeReason) { this._onBeforePageLoaded(sChangeReason);this._onAfterPageLoaded(sChangeReason); }; }
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._list.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._list, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._list, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._list, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._list.placeAt)
                                                                this._list.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._list.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._list, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._list.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._list.indexOfColumn(afterElement); if (_index)this._list.insertColumn(child, _index + 1); else this._list.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._list.indexOfItem(afterElement); if (_index)this._list.insertItem(child, _index + 1); else this._list.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'swipecontent') { this._list.setSwipeContent(child); return elem.localName;}
if (elem.localName == 'headertoolbar') { this._list.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._list.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._list.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._list.indexOfCustomData(afterElement); if (_index)this._list.insertCustomData(child, _index + 1); else this._list.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._list.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._list.indexOfDependent(afterElement); if (_index)this._list.insertDependent(child, _index + 1); else this._list.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'columns') {  this._list.removeColumn(child);}
if (relation == 'items') {  this._list.removeItem(child);}
if (relation == 'swipecontent') {  this._list.destroySwipeContent(child); }
if (relation == 'headertoolbar') {  this._list.destroyHeaderToolbar(child); }
if (relation == 'infotoolbar') {  this._list.destroyInfoToolbar(child); }
if (relation == 'tooltip') {  this._list.destroyTooltip(child); }
if (relation == 'customdata') {  this._list.removeCustomData(child);}
if (relation == 'layoutdata') {  this._list.destroyLayoutData(child); }
if (relation == 'dependents') {  this._list.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    backgroundDesignChanged(newValue){if(this._list!==null){ this._list.setBackgroundDesign(newValue);}}
insetChanged(newValue){if(this._list!==null){ this._list.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(this._list!==null){ this._list.setHeaderText(newValue);}}
footerTextChanged(newValue){if(this._list!==null){ this._list.setFooterText(newValue);}}
modeChanged(newValue){if(this._list!==null){ this._list.setMode(newValue);}}
widthChanged(newValue){if(this._list!==null){ this._list.setWidth(newValue);}}
includeItemInSelectionChanged(newValue){if(this._list!==null){ this._list.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue));}}
showUnreadChanged(newValue){if(this._list!==null){ this._list.setShowUnread(getBooleanFromAttributeValue(newValue));}}
noDataTextChanged(newValue){if(this._list!==null){ this._list.setNoDataText(newValue);}}
showNoDataChanged(newValue){if(this._list!==null){ this._list.setShowNoData(getBooleanFromAttributeValue(newValue));}}
enableBusyIndicatorChanged(newValue){if(this._list!==null){ this._list.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));}}
modeAnimationOnChanged(newValue){if(this._list!==null){ this._list.setModeAnimationOn(getBooleanFromAttributeValue(newValue));}}
showSeparatorsChanged(newValue){if(this._list!==null){ this._list.setShowSeparators(newValue);}}
swipeDirectionChanged(newValue){if(this._list!==null){ this._list.setSwipeDirection(newValue);}}
growingChanged(newValue){if(this._list!==null){ this._list.setGrowing(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._list!==null){ this._list.setGrowingThreshold(newValue);}}
growingTriggerTextChanged(newValue){if(this._list!==null){ this._list.setGrowingTriggerText(newValue);}}
growingScrollToLoadChanged(newValue){if(this._list!==null){ this._list.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue));}}
growingDirectionChanged(newValue){if(this._list!==null){ this._list.setGrowingDirection(newValue);}}
rememberSelectionsChanged(newValue){if(this._list!==null){ this._list.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
keyboardModeChanged(newValue){if(this._list!==null){ this._list.setKeyboardMode(newValue);}}
/* inherited from sap.m.ListBase*/
selectionChangeChanged(newValue){if(this._list!==null){ this._list.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(this._list!==null){ this._list.attachDelete(newValue);}}
swipeChanged(newValue){if(this._list!==null){ this._list.attachSwipe(newValue);}}
updateStartedChanged(newValue){if(this._list!==null){ this._list.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(this._list!==null){ this._list.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(this._list!==null){ this._list.attachItemPress(newValue);}}
busyChanged(newValue){if(this._list!==null){ this._list.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._list!==null){ this._list.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._list!==null){ this._list.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._list!==null){ this._list.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._list!==null){ this._list.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._list!==null){ this._list.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._list!==null){ this._list.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._list!==null){ this._list.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._list!==null){ this._list.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._list!==null){ this._list.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._list!==null){ this._list.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }