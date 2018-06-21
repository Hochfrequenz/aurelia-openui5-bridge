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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() backgroundDesign = 'Translucent';
@bindable() fixedLayout = true;
@bindable() showOverlay = false;
@bindable() alternateRowColors = false;
@bindable() popinLayout = 'Block';
@bindable() sticky = 'None';
@bindable() beforeOpenContextMenu = this.defaultFunc;
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
        @computedFrom('_table')
        get UIElement() {
            return this._table;
          }
        fillProperties(params){
                                        params.backgroundDesign = this.backgroundDesign;
params.fixedLayout = getBooleanFromAttributeValue(this.fixedLayout);
params.showOverlay = getBooleanFromAttributeValue(this.showOverlay);
params.alternateRowColors = getBooleanFromAttributeValue(this.alternateRowColors);
params.popinLayout = this.popinLayout;
params.sticky = this.sticky;
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
          this._table = new sap.m.Table(this.ui5Id, params);
                                              else
          this._table = new sap.m.Table(params);
                                                  if(this.ui5Class)
           this._table.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._table.setTooltip(this.ui5Tooltip);                                             
        if (this._table._oGrowingDelegate){this._table._oGrowingDelegate.updateItems = function(sChangeReason) { this._onBeforePageLoaded(sChangeReason);this._onAfterPageLoaded(sChangeReason); }; }
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._table.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._table, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._table, this.element, this.prevId);
        
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._table)
                                                                this._parent.removeChildByRelation(this._table, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._table.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'columns') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._table.insertColumn(child, _index); else this._table.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._table.insertItem(child, _index); else this._table.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'swipecontent') { this._table.setSwipeContent(child); return elem.localName;}
if (elem.localName == 'headertoolbar') { this._table.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._table.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._table.insertDragDropConfig(child, _index); else this._table.addDragDropConfig(child, 0);  return elem.localName; }
if (elem.localName == 'contextmenu') { this._table.setContextMenu(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._table.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._table.insertCustomData(child, _index); else this._table.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._table.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._table.insertDependent(child, _index); else this._table.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'columns') {  this._table.removeColumn(child);}
if (relation == 'items') {  this._table.removeItem(child);}
if (relation == 'swipecontent') {  this._table.destroySwipeContent(child); }
if (relation == 'headertoolbar') {  this._table.destroyHeaderToolbar(child); }
if (relation == 'infotoolbar') {  this._table.destroyInfoToolbar(child); }
if (relation == 'dragdropconfig') {  this._table.removeDragDropConfig(child);}
if (relation == 'contextmenu') {  this._table.destroyContextMenu(child); }
if (relation == 'tooltip') {  this._table.destroyTooltip(child); }
if (relation == 'customdata') {  this._table.removeCustomData(child);}
if (relation == 'layoutdata') {  this._table.destroyLayoutData(child); }
if (relation == 'dependents') {  this._table.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    backgroundDesignChanged(newValue){if(this._table!==null){ this._table.setBackgroundDesign(newValue);}}
fixedLayoutChanged(newValue){if(this._table!==null){ this._table.setFixedLayout(getBooleanFromAttributeValue(newValue));}}
showOverlayChanged(newValue){if(this._table!==null){ this._table.setShowOverlay(getBooleanFromAttributeValue(newValue));}}
alternateRowColorsChanged(newValue){if(this._table!==null){ this._table.setAlternateRowColors(getBooleanFromAttributeValue(newValue));}}
popinLayoutChanged(newValue){if(this._table!==null){ this._table.setPopinLayout(newValue);}}
stickyChanged(newValue){if(this._table!==null){ this._table.setSticky(newValue);}}
beforeOpenContextMenuChanged(newValue){if(this._table!==null){ this._table.attachBeforeOpenContextMenu(newValue);}}
insetChanged(newValue){if(this._table!==null){ this._table.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(this._table!==null){ this._table.setHeaderText(newValue);}}
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
selectionChangeChanged(newValue){if(this._table!==null){ this._table.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(this._table!==null){ this._table.attachDelete(newValue);}}
swipeChanged(newValue){if(this._table!==null){ this._table.attachSwipe(newValue);}}
updateStartedChanged(newValue){if(this._table!==null){ this._table.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(this._table!==null){ this._table.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(this._table!==null){ this._table.attachItemPress(newValue);}}
beforeOpenContextMenuChanged(newValue){if(this._table!==null){ this._table.attachBeforeOpenContextMenu(newValue);}}
busyChanged(newValue){if(this._table!==null){ this._table.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._table!==null){ this._table.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._table!==null){ this._table.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._table!==null){ this._table.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._table!==null){ this._table.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._table!==null){ this._table.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._table!==null){ this._table.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._table!==null){ this._table.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._table!==null){ this._table.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._table!==null){ this._table.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._table!==null){ this._table.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }