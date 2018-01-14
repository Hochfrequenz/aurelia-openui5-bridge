import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListBase} from '../list-base/list-base';
@customElement('ui5-table')
@inject(Element)
export class Ui5Table extends Ui5ListBase{
        _table = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() backgroundDesign = 'Translucent';
@bindable() fixedLayout = true;
@bindable() showOverlay = false;
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
        @computedFrom('_table')
        get UIElement() {
            return this._table;
          }
        fillProperties(params){
               params.backgroundDesign = this.backgroundDesign;
params.fixedLayout = getBooleanFromAttributeValue(this.fixedLayout);
params.showOverlay = getBooleanFromAttributeValue(this.showOverlay);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._table = new sap.m.Table(this.ui5Id, params);
        else
          this._table = new sap.m.Table(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._table.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._table, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._table, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._table, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._table.placeAt)
                                                                this._table.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._table.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._table, this._relation);
                                                            }
         else{
                                                                this._table.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._table.indexOfColumn(afterElement); if (_index)this._table.insertColumn(child, _index + 1); else this._table.addColumn(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'columns') {  this._table.removeColumn(child); }

                                                                            }
    backgroundDesignChanged(newValue){if(this._table!==null){ this._table.setBackgroundDesign(newValue);}}
fixedLayoutChanged(newValue){if(this._table!==null){ this._table.setFixedLayout(getBooleanFromAttributeValue(newValue));}}
showOverlayChanged(newValue){if(this._table!==null){ this._table.setShowOverlay(getBooleanFromAttributeValue(newValue));}}
insetChanged(newValue){if(this._table!==null){ this._table.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(this._table!==null){ this._table.setHeaderText(newValue);}}
headerDesignChanged(newValue){if(this._table!==null){ this._table.setHeaderDesign(newValue);}}
footerTextChanged(newValue){if(this._table!==null){ this._table.setFooterText(newValue);}}
modeChanged(newValue){if(this._table!==null){ this._table.setMode(newValue);}}
widthChanged(newValue){if(this._table!==null){ this._table.setWidth(newValue);}}
includeItemInSelectionChanged(newValue){if(this._table!==null){ this._table.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue));}}
showUnreadChanged(newValue){if(this._table!==null){ this._table.setShowUnread(getBooleanFromAttributeValue(newValue));}}
noDataTextChanged(newValue){if(this._table!==null){ this._table.setNoDataText(newValue);}}
showNoDataChanged(newValue){if(this._table!==null){ this._table.setShowNoData(getBooleanFromAttributeValue(newValue));}}
enableBusyIndicatorChanged(newValue){if(this._table!==null){ this._table.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));}}
modeAnimationOnChanged(newValue){if(this._table!==null){ this._table.setModeAnimationOn(getBooleanFromAttributeValue(newValue));}}
showSeparatorsChanged(newValue){if(this._table!==null){ this._table.setShowSeparators(newValue);}}
swipeDirectionChanged(newValue){if(this._table!==null){ this._table.setSwipeDirection(newValue);}}
growingChanged(newValue){if(this._table!==null){ this._table.setGrowing(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._table!==null){ this._table.setGrowingThreshold(newValue);}}
growingTriggerTextChanged(newValue){if(this._table!==null){ this._table.setGrowingTriggerText(newValue);}}
growingScrollToLoadChanged(newValue){if(this._table!==null){ this._table.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue));}}
growingDirectionChanged(newValue){if(this._table!==null){ this._table.setGrowingDirection(newValue);}}
rememberSelectionsChanged(newValue){if(this._table!==null){ this._table.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
keyboardModeChanged(newValue){if(this._table!==null){ this._table.setKeyboardMode(newValue);}}
/* inherited from sap.m.ListBase*/
selectChanged(newValue){if(this._table!==null){ this._table.attachSelect(newValue);}}
selectionChangeChanged(newValue){if(this._table!==null){ this._table.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(this._table!==null){ this._table.attachDelete(newValue);}}
swipeChanged(newValue){if(this._table!==null){ this._table.attachSwipe(newValue);}}
growingStartedChanged(newValue){if(this._table!==null){ this._table.attachGrowingStarted(newValue);}}
growingFinishedChanged(newValue){if(this._table!==null){ this._table.attachGrowingFinished(newValue);}}
updateStartedChanged(newValue){if(this._table!==null){ this._table.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(this._table!==null){ this._table.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(this._table!==null){ this._table.attachItemPress(newValue);}}
busyChanged(newValue){if(this._table!==null){ this._table.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._table!==null){ this._table.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._table!==null){ this._table.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._table!==null){ this._table.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._table!==null){ this._table.attachValidateFieldGroup(newValue);}}


                                                                                }