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
        @computedFrom('_list')
        get UIElement() {
            return this._list;
          }
        fillProperties(params){
               params.backgroundDesign = this.backgroundDesign;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._list = new sap.m.List(this.ui5Id, params);
        else
          this._list = new sap.m.List(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._list.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._list, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._list, this._relation);
                                                            }
         else{
                                                                this._list.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._list.indexOfColumn(afterElement); if (_index)this._list.insertColumn(child, _index + 1); else this._list.addColumn(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'columns') {  this._list.removeColumn(child); }

                                                                            }
    backgroundDesignChanged(newValue){if(this._list!==null){ this._list.setBackgroundDesign(newValue);}}
insetChanged(newValue){if(this._list!==null){ this._list.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(this._list!==null){ this._list.setHeaderText(newValue);}}
headerDesignChanged(newValue){if(this._list!==null){ this._list.setHeaderDesign(newValue);}}
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
selectChanged(newValue){if(this._list!==null){ this._list.attachSelect(newValue);}}
selectionChangeChanged(newValue){if(this._list!==null){ this._list.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(this._list!==null){ this._list.attachDelete(newValue);}}
swipeChanged(newValue){if(this._list!==null){ this._list.attachSwipe(newValue);}}
growingStartedChanged(newValue){if(this._list!==null){ this._list.attachGrowingStarted(newValue);}}
growingFinishedChanged(newValue){if(this._list!==null){ this._list.attachGrowingFinished(newValue);}}
updateStartedChanged(newValue){if(this._list!==null){ this._list.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(this._list!==null){ this._list.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(this._list!==null){ this._list.attachItemPress(newValue);}}
busyChanged(newValue){if(this._list!==null){ this._list.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._list!==null){ this._list.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._list!==null){ this._list.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._list!==null){ this._list.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._list!==null){ this._list.attachValidateFieldGroup(newValue);}}


                                                                                }