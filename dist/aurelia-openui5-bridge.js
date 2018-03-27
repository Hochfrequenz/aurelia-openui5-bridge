import {PLATFORM} from 'aurelia-pal';
import {bindable,customElement,noView,customAttribute} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {computedFrom,Animator} from 'aurelia-framework';
import {Router} from 'aurelia-router';

export class ClickCounter {
  count = 0;

  increment() {
    this.count++;
  }
}

/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  //  useScrollfirePatch: boolean = false;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .usePage()
      .useBar()
      .useContainer()
      .useHtml()
      .useButton()
      .useTiles()
      .useGrid()
      .useText()
      .useWizard()
      .useForm()
      .useLabel()
      .useInput()
      .useDatePicker()
      .useTitle()
      .useLayoutData()
      .useSelect()
      .useTable()
      .useTabs()
      .useLayout()
      .useDynamicPage()
      .useLink()
      .useBreadcrumbs()
      .useSegmentedButton()
      .useDialog()
      .useList()
      .useIcon()
      .useActionSheet()
      .useTableSelectDialog()
      .useSelectDialog()
      .useUploadCollection()
      .useViewSettingsDialog()
      .useSplitContainer()
      .useMessageView()
      .useMaskInput()
      .useToggleButton()
      .useTree()
      .useMenu()
  }

  useLink(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./link/link'));
    return this;
  }
  usePage(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./page/page'));
    this.globalResources.push(PLATFORM.moduleName('./shell/shell'));
    this.globalResources.push(PLATFORM.moduleName('./custom-data/custom-data'));
    return this;
  }
  useBar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./bar/bar'));
    this.globalResources.push(PLATFORM.moduleName('./overflow-toolbar/overflow-toolbar'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar-spacer/toolbar-spacer'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar'));

    return this;
  }
  useContainer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./container/container'));
    return this;
  }
  useHtml(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./html/html'));
    return this;
  }
  useButton(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }
  useToggleButton(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./toggle-button/toggle-button'));
    return this;
  }
  useGrid(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./grid/grid'));
    return this;
  }
  useWizard(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./wizard/wizard'));
    this.globalResources.push(PLATFORM.moduleName('./wizard-step/wizard-step'));
    return this;
  }
  useText(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./text/text'));
    this.globalResources.push(PLATFORM.moduleName('./formatted-text/formatted-text'));
    return this;
  }

  useTiles(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./generic-tile/generic-tile'));
    this.globalResources.push(PLATFORM.moduleName('./tile-container/tile-container'));
    this.globalResources.push(PLATFORM.moduleName('./tile-content/tile-content'));
    this.globalResources.push(PLATFORM.moduleName('./standard-tile/standard-tile'));
    this.globalResources.push(PLATFORM.moduleName('./image-content/image-content'));
    this.globalResources.push(PLATFORM.moduleName('./numeric-content/numeric-content'));
    this.globalResources.push(PLATFORM.moduleName('./feed-content/feed-content'));
    this.globalResources.push(PLATFORM.moduleName('./slide-tile/slide-tile'));
    return this;
  }
  useForm(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./simple-form/simple-form'));
    this.globalResources.push(PLATFORM.moduleName('./form/form'));
    this.globalResources.push(PLATFORM.moduleName('./form-container/form-container'));
    this.globalResources.push(PLATFORM.moduleName('./form-element/form-element'));
    this.globalResources.push(PLATFORM.moduleName('./responsive-grid-layout/responsive-grid-layout'));
    return this;
  }
  useLabel(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./label/label'));
    return this;
  }
  useInput(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./input/input'));
    this.globalResources.push(PLATFORM.moduleName('./search-field/search-field'));

    return this;
  }
  useDatePicker(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./date-picker/date-picker'));
    this.globalResources.push(PLATFORM.moduleName('./date-time-picker/date-time-picker'));
    return this;
  }
  useTitle(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./title/title'));
    this.globalResources.push(PLATFORM.moduleName('./m-title/m-title'));
    return this;
  }
  useLayoutData(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./grid-data/grid-data'));
    return this;
  }
  useLayout(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./vertical-layout/vertical-layout'));
    return this;
  }
  useSelect(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./select/select'));
    this.globalResources.push(PLATFORM.moduleName('./list-item/list-item'));
    return this;
  }
  useTable(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./table/table'));
    this.globalResources.push(PLATFORM.moduleName('./column/column'));
    this.globalResources.push(PLATFORM.moduleName('./column-list-item/column-list-item'));
    this.globalResources.push(PLATFORM.moduleName('./object-identifier/object-identifier'));
    this.globalResources.push(PLATFORM.moduleName('./object-number/object-number'));
    return this;
  }
  useList(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./list/list'));
    this.globalResources.push(PLATFORM.moduleName('./standard-list-item/standard-list-item'));
    return this;
  }
  useTabs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tab-container/tab-container'));
    this.globalResources.push(PLATFORM.moduleName('./tab-container-item/tab-container-item'));
    this.globalResources.push(PLATFORM.moduleName('./icon-tab-bar/icon-tab-bar'));
    this.globalResources.push(PLATFORM.moduleName('./icon-tab-filter/icon-tab-filter'));

    return this;
  }
  useDynamicPage(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./dynamic-page/dynamic-page'));
    this.globalResources.push(PLATFORM.moduleName('./dynamic-page-header/dynamic-page-header'));
    this.globalResources.push(PLATFORM.moduleName('./dynamic-page-title/dynamic-page-title'));

    return this;
  }
  useBreadcrumbs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  }
  useSegmentedButton(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./segmented-button/segmented-button'));
    this.globalResources.push(PLATFORM.moduleName('./segmented-button-item/segmented-button-item'));
    return this;
  }
  useDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./dialog/dialog'));
    this.globalResources.push(PLATFORM.moduleName('./responsive-popover/responsive-popover'));
    
    return this;
  }
  useIcon(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./icon/icon'));
    return this;
  }
  useActionSheet(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./action-sheet/action-sheet'));
    return this;
  }
  useTableSelectDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./table-select-dialog/table-select-dialog'));
    return this;
  }
  useUploadCollection(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./upload-collection/upload-collection'));
    this.globalResources.push(PLATFORM.moduleName('./upload-collection-item/upload-collection-item'));
    this.globalResources.push(PLATFORM.moduleName('./upload-collection-parameter/upload-collection-parameter'));
    return this;
  }
  useViewSettingsDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./view-settings-item/view-settings-item'));
    this.globalResources.push(PLATFORM.moduleName('./view-settings-filter-item/view-settings-filter-item'));
    this.globalResources.push(PLATFORM.moduleName('./view-settings-dialog/view-settings-dialog'));
    return this;
  }
  useSelectDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./select-dialog/select-dialog'));
    return this;
  }
  useSplitContainer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./split-container/split-container'));
    return this;
  }
  useMessageView(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./message-view/message-view'));
    this.globalResources.push(PLATFORM.moduleName('./message-item/message-item'));
    return this;
  }
  useMaskInput(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./mask-input/mask-input'));
    this.globalResources.push(PLATFORM.moduleName('./mask-input-rule/mask-input-rule'));
    return this;
  }
  useTree(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tree/tree'));
    this.globalResources.push(PLATFORM.moduleName('./tree-item-base/tree-item-base'));
    this.globalResources.push(PLATFORM.moduleName('./standard-tree-item/standard-tree-item'));
    this.globalResources.push(PLATFORM.moduleName('./custom-tree-item/custom-tree-item'));
    return this;
  }
  useMenu(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./menu-item/menu-item'));
    this.globalResources.push(PLATFORM.moduleName('./menu/menu'));
    return this;
  }
  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  /*withScrollfirePatch(): ConfigBuilder {
    this.useScrollfirePatch = true;
    return this;
  }*/
}



function applyPolyfills() {
  polyfillElementClosest();
}

export function configure(aurelia, configCallback) {
  applyPolyfills();
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}



@customElement('ui5-action-sheet')
@inject(Element)
export class Ui5ActionSheet extends Ui5Control{
        _actionsheet = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() placement = 'Bottom';
@bindable() showCancelButton = true;
@bindable() cancelButtonText = null;
@bindable() title = null;
@bindable() beforeOpen = this.defaultFunc;
@bindable() afterOpen = this.defaultFunc;
@bindable() beforeClose = this.defaultFunc;
@bindable() afterClose = this.defaultFunc;
@bindable() cancelButtonPress = this.defaultFunc;
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
        @computedFrom('_actionsheet')
        get UIElement() {
            return this._actionsheet;
          }
        fillProperties(params){
                                        params.placement = this.placement;
params.showCancelButton = getBooleanFromAttributeValue(this.showCancelButton);
params.cancelButtonText = this.cancelButtonText;
params.title = this.title;
params.beforeOpen = this.beforeOpen==null ? this.defaultFunc: this.beforeOpen;
params.afterOpen = this.afterOpen==null ? this.defaultFunc: this.afterOpen;
params.beforeClose = this.beforeClose==null ? this.defaultFunc: this.beforeClose;
params.afterClose = this.afterClose==null ? this.defaultFunc: this.afterClose;
params.cancelButtonPress = this.cancelButtonPress==null ? this.defaultFunc: this.cancelButtonPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._actionsheet = new sap.m.ActionSheet(this.ui5Id, params);
        else
          this._actionsheet = new sap.m.ActionSheet(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._actionsheet.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._actionsheet, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._actionsheet.placeAt)
                                                                this._actionsheet.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._actionsheet.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._actionsheet, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._actionsheet.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfButton(afterElement); if (_index)this._actionsheet.insertButton(child, _index + 1); else this._actionsheet.addButton(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._actionsheet.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfCustomData(afterElement); if (_index)this._actionsheet.insertCustomData(child, _index + 1); else this._actionsheet.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._actionsheet.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._actionsheet.indexOfDependent(afterElement); if (_index)this._actionsheet.insertDependent(child, _index + 1); else this._actionsheet.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'buttons') {  this._actionsheet.removeButton(child);}
if (relation == 'tooltip') {  this._actionsheet.destroyTooltip(child); }
if (relation == 'customdata') {  this._actionsheet.removeCustomData(child);}
if (relation == 'layoutdata') {  this._actionsheet.destroyLayoutData(child); }
if (relation == 'dependents') {  this._actionsheet.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    placementChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setPlacement(newValue);}}
showCancelButtonChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setShowCancelButton(getBooleanFromAttributeValue(newValue));}}
cancelButtonTextChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setCancelButtonText(newValue);}}
titleChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setTitle(newValue);}}
beforeOpenChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachBeforeOpen(newValue);}}
afterOpenChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachAfterOpen(newValue);}}
beforeCloseChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachBeforeClose(newValue);}}
afterCloseChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachAfterClose(newValue);}}
cancelButtonPressChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachCancelButtonPress(newValue);}}
busyChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._actionsheet!==null){ this._actionsheet.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-bar')
@inject(Element)
export class Ui5Bar extends Ui5Control{
        _bar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() design = 'Auto';
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
        @computedFrom('_bar')
        get UIElement() {
            return this._bar;
          }
        fillProperties(params){
                                        params.design = this.design;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._bar = new sap.m.Bar(this.ui5Id, params);
        else
          this._bar = new sap.m.Bar(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._bar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._bar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._bar.placeAt)
                                                                this._bar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._bar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._bar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._bar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'contentleft') { var _index = null; if (afterElement) _index = this._bar.indexOfContentLeft(afterElement); if (_index)this._bar.insertContentLeft(child, _index + 1); else this._bar.addContentLeft(child, 0);  return elem.localName; }
if (elem.localName == 'contentmiddle') { var _index = null; if (afterElement) _index = this._bar.indexOfContentMiddle(afterElement); if (_index)this._bar.insertContentMiddle(child, _index + 1); else this._bar.addContentMiddle(child, 0);  return elem.localName; }
if (elem.localName == 'contentright') { var _index = null; if (afterElement) _index = this._bar.indexOfContentRight(afterElement); if (_index)this._bar.insertContentRight(child, _index + 1); else this._bar.addContentRight(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._bar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._bar.indexOfCustomData(afterElement); if (_index)this._bar.insertCustomData(child, _index + 1); else this._bar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._bar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._bar.indexOfDependent(afterElement); if (_index)this._bar.insertDependent(child, _index + 1); else this._bar.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'contentleft') {  this._bar.removeContentLeft(child);}
if (relation == 'contentmiddle') {  this._bar.removeContentMiddle(child);}
if (relation == 'contentright') {  this._bar.removeContentRight(child);}
if (relation == 'tooltip') {  this._bar.destroyTooltip(child); }
if (relation == 'customdata') {  this._bar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._bar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._bar.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    designChanged(newValue){if(this._bar!==null){ this._bar.setDesign(newValue);}}
busyChanged(newValue){if(this._bar!==null){ this._bar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._bar!==null){ this._bar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._bar!==null){ this._bar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._bar!==null){ this._bar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._bar!==null){ this._bar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._bar!==null){ this._bar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._bar!==null){ this._bar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._bar!==null){ this._bar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._bar!==null){ this._bar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._bar!==null){ this._bar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._bar!==null){ this._bar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-breadcrumbs')
@inject(Element)
export class Ui5Breadcrumbs extends Ui5Control{
        _breadcrumbs = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() currentLocationText = null;
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
        @computedFrom('_breadcrumbs')
        get UIElement() {
            return this._breadcrumbs;
          }
        fillProperties(params){
                                        params.currentLocationText = this.currentLocationText;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._breadcrumbs = new sap.m.Breadcrumbs(this.ui5Id, params);
        else
          this._breadcrumbs = new sap.m.Breadcrumbs(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._breadcrumbs.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._breadcrumbs, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._breadcrumbs, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._breadcrumbs, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._breadcrumbs.placeAt)
                                                                this._breadcrumbs.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._breadcrumbs.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._breadcrumbs, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._breadcrumbs.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'links') { var _index = null; if (afterElement) _index = this._breadcrumbs.indexOfLink(afterElement); if (_index)this._breadcrumbs.insertLink(child, _index + 1); else this._breadcrumbs.addLink(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._breadcrumbs.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._breadcrumbs.indexOfCustomData(afterElement); if (_index)this._breadcrumbs.insertCustomData(child, _index + 1); else this._breadcrumbs.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._breadcrumbs.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._breadcrumbs.indexOfDependent(afterElement); if (_index)this._breadcrumbs.insertDependent(child, _index + 1); else this._breadcrumbs.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'links') {  this._breadcrumbs.removeLink(child);}
if (relation == 'tooltip') {  this._breadcrumbs.destroyTooltip(child); }
if (relation == 'customdata') {  this._breadcrumbs.removeCustomData(child);}
if (relation == 'layoutdata') {  this._breadcrumbs.destroyLayoutData(child); }
if (relation == 'dependents') {  this._breadcrumbs.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    currentLocationTextChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setCurrentLocationText(newValue);}}
busyChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._breadcrumbs!==null){ this._breadcrumbs.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-button')
@inject(Element)
export class Ui5Button extends Ui5Control{
        _button = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = null;
@bindable() type = 'Default';
@bindable() width = null;
@bindable() enabled = true;
@bindable() icon = null;
@bindable() iconFirst = true;
@bindable() activeIcon = null;
@bindable() iconDensityAware = true;
@bindable() textDirection = 'Inherit';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_button')
        get UIElement() {
            return this._button;
          }
        fillProperties(params){
                                        params.text = this.text;
params.type = this.type;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.icon = this.icon;
params.iconFirst = getBooleanFromAttributeValue(this.iconFirst);
params.activeIcon = this.activeIcon;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.textDirection = this.textDirection;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._button = new sap.m.Button(this.ui5Id, params);
        else
          this._button = new sap.m.Button(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._button.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._button, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._button, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._button, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._button.placeAt)
                                                                this._button.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._button.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._button, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._button.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._button.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._button.indexOfCustomData(afterElement); if (_index)this._button.insertCustomData(child, _index + 1); else this._button.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._button.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._button.indexOfDependent(afterElement); if (_index)this._button.insertDependent(child, _index + 1); else this._button.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._button.destroyTooltip(child); }
if (relation == 'customdata') {  this._button.removeCustomData(child);}
if (relation == 'layoutdata') {  this._button.destroyLayoutData(child); }
if (relation == 'dependents') {  this._button.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._button!==null){ this._button.setText(newValue);}}
typeChanged(newValue){if(this._button!==null){ this._button.setType(newValue);}}
widthChanged(newValue){if(this._button!==null){ this._button.setWidth(newValue);}}
enabledChanged(newValue){if(this._button!==null){ this._button.setEnabled(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._button!==null){ this._button.setIcon(newValue);}}
iconFirstChanged(newValue){if(this._button!==null){ this._button.setIconFirst(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._button!==null){ this._button.setActiveIcon(newValue);}}
iconDensityAwareChanged(newValue){if(this._button!==null){ this._button.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._button!==null){ this._button.setTextDirection(newValue);}}
pressChanged(newValue){if(this._button!==null){ this._button.attachPress(newValue);}}
busyChanged(newValue){if(this._button!==null){ this._button.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._button!==null){ this._button.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._button!==null){ this._button.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._button!==null){ this._button.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._button!==null){ this._button.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._button!==null){ this._button.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._button!==null){ this._button.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._button!==null){ this._button.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._button!==null){ this._button.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._button!==null){ this._button.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._button!==null){ this._button.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-column')
@inject(Element)
export class Ui5Column extends Ui5Element{
        _column = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() hAlign = 'Begin';
@bindable() vAlign = 'Inherit';
@bindable() styleClass = null;
@bindable() visible = true;
@bindable() minScreenWidth = null;
@bindable() demandPopin = false;
@bindable() popinDisplay = 'Block';
@bindable() mergeDuplicates = false;
@bindable() mergeFunctionName = 'getText';
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
        @computedFrom('_column')
        get UIElement() {
            return this._column;
          }
        fillProperties(params){
                                        params.width = this.width;
params.hAlign = this.hAlign;
params.vAlign = this.vAlign;
params.styleClass = this.styleClass;
params.visible = getBooleanFromAttributeValue(this.visible);
params.minScreenWidth = this.minScreenWidth;
params.demandPopin = getBooleanFromAttributeValue(this.demandPopin);
params.popinDisplay = this.popinDisplay;
params.mergeDuplicates = getBooleanFromAttributeValue(this.mergeDuplicates);
params.mergeFunctionName = this.mergeFunctionName;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._column = new sap.m.Column(this.ui5Id, params);
        else
          this._column = new sap.m.Column(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._column.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._column, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._column, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._column, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._column.placeAt)
                                                                this._column.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._column.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._column, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._column.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'header') { this._column.setHeader(child); return elem.localName;}
if (elem.localName == 'footer') { this._column.setFooter(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._column.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._column.indexOfCustomData(afterElement); if (_index)this._column.insertCustomData(child, _index + 1); else this._column.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._column.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._column.indexOfDependent(afterElement); if (_index)this._column.insertDependent(child, _index + 1); else this._column.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'header') {  this._column.destroyHeader(child); }
if (relation == 'footer') {  this._column.destroyFooter(child); }
if (relation == 'tooltip') {  this._column.destroyTooltip(child); }
if (relation == 'customdata') {  this._column.removeCustomData(child);}
if (relation == 'layoutdata') {  this._column.destroyLayoutData(child); }
if (relation == 'dependents') {  this._column.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._column!==null){ this._column.setWidth(newValue);}}
hAlignChanged(newValue){if(this._column!==null){ this._column.setHAlign(newValue);}}
vAlignChanged(newValue){if(this._column!==null){ this._column.setVAlign(newValue);}}
styleClassChanged(newValue){if(this._column!==null){ this._column.setStyleClass(newValue);}}
visibleChanged(newValue){if(this._column!==null){ this._column.setVisible(getBooleanFromAttributeValue(newValue));}}
minScreenWidthChanged(newValue){if(this._column!==null){ this._column.setMinScreenWidth(newValue);}}
demandPopinChanged(newValue){if(this._column!==null){ this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));}}
popinDisplayChanged(newValue){if(this._column!==null){ this._column.setPopinDisplay(newValue);}}
mergeDuplicatesChanged(newValue){if(this._column!==null){ this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));}}
mergeFunctionNameChanged(newValue){if(this._column!==null){ this._column.setMergeFunctionName(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._column!==null){ this._column.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._column!==null){ this._column.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._column!==null){ this._column.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._column!==null){ this._column.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._column!==null){ this._column.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export class AttributeManager {
  _colorClasses = [
    'accent',
    'primary'
  ];
  addedClasses = [];
  addedAttributes = {};

  constructor(element) {
    this.element = element;
  }

  addAttributes(attrs) {
    let keys = Object.keys(attrs);
    keys.forEach(k => {
      if (!this.element.getAttribute(k)) {
        this.addedAttributes[k] = attrs[k];
        this.element.setAttribute(k, attrs[k]);
      } else if (this.element.getAttribute(k) !== attrs[k]) {
        this.element.setAttribute(k, attrs[k]);
      }
    });
  }

  removeAttributes(attrs) {
    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(a => {
      if (this.element.getAttribute(a) && !!this.addedAttributes[a]) {
        this.element.removeAttribute(a);
        this.addedAttributes[a] = null;
        delete this.addedAttributes[a];
      }
      else if(this.element.getAttribute(a)){
        this.element.removeAttribute(a);
      }
    });
  }

  addClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      let classListHasColor = this._colorClasses.filter(cc => this.element.classList.contains(cc)).length > 0;
      if (this._colorClasses.indexOf(c) > -1 && classListHasColor) {
        //
      } else {
        if (!this.element.classList.contains(c)) {
          this.addedClasses.push(c);
          this.element.classList.add(c);
        }
      }
    });
  }

  removeClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      if (this.element.classList.contains(c) && this.addedClasses.indexOf(c) > -1) {
        this.element.classList.remove(c);
        this.addedClasses.splice(this.addedClasses.indexOf(c), 1);
      }
    });
  }
}

export function getBooleanFromAttributeValue(value) {
  return (value === true || value === 'true');
}
export function showBusyIndicator(delay) {
    sap.ui.core.BusyIndicator.show(delay);
}
export function hideBusyIndicator() {
    sap.ui.core.BusyIndicator.hide();
}

export const constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

/**
* Fire DOM event on an element with the md-on prefix
* @param element The Element which the DOM event will be fired on
* @param name The Event's name, without md-on prefix
* @param data Addition data to attach to an event
*/
export function fireMaterializeEvent(element: Element, name: string, data? = {}) {
  return fireEvent(element, `${constants.eventPrefix}${name}`, data);
}


/**
* Initialize the plugin and respond with a promise
*/
export function ui5Initialize(debug) {
  if(debug)
    jQuery.sap.log.setLevel(jQuery.sap.log.Level.DEBUG);
  new Promise(resolve => sap.ui.getCore().attachInit(() => {
    new sap.m.BusyIndicator().placeAt("indicator");
    resolve();
  }));
}
export function ui5SetTheme(name, path) {
  sap.ui.getCore().applyTheme(name, path);
}
export function findUi5DialogElement(name){
  
 // jQuery.sap.log.warning(`querying [ui5-id="${name}"]`);
  return document.body.querySelector(`[ui5-id="${name}"]`); 
}
export function getUi5DialogElement(name) {
  try {
   // jQuery.sap.log.warning(`querying [ui5-id="${name}"]`);
    console.log(`querying [ui5-id="${name}"]`);
    return document.body.querySelector(`[ui5-id="${name}"]`).au.controller.viewModel.UIElement;
  }
  catch (exc) {
    //jQuery.sap.log.warning(exc);
    console.log(exc);
    return null;
  }
}

export function showMessageBox(vMessage,mOptions) {
    var oDialog, oMessageText, vMessageContent, oResult = null, that = this, aButtons = [], i,
							sIcon, sTitle, vActions, fnCallback, sDialogId, sClass,
							mDefaults = {
								initialFocus: null,
								textDirection: sap.ui.core.TextDirection.Inherit,
								verticalScrolling: true,
								horizontalScrolling: true,
								details: "",
								contentWidth: null
							};
                    var mIcons = {
							"INFORMATION": "sap-icon://message-information",
							"WARNING": "sap-icon://message-warning",
							"ERROR": "sap-icon://message-error",
							"SUCCESS": "sap-icon://message-success",
							"QUESTION": "sap-icon://question-mark"
						};
                    var mClasses = {
							"INFORMATION": "sapMMessageBoxInfo",
							"WARNING": "sapMMessageBoxWarning",
							"ERROR": "sapMMessageBoxError",
							"SUCCESS": "sapMMessageBoxSuccess",
							"QUESTION": "sapMMessageBoxQuestion",
							"STANDARD":  "sapMMessageBoxStandard"
						};
					if (mOptions && mOptions.hasOwnProperty("details")) {
						mDefaults.icon = "INFORMATION";
						mDefaults.actions = ["OK", "CANCEL"];
						mOptions = jQuery.extend({}, mDefaults, mOptions);
					}

					mOptions = jQuery.extend({}, mDefaults, mOptions);

					// normalize the vActions array
					if (typeof mOptions.actions !== "undefined" && !jQuery.isArray(mOptions.actions)) {
						mOptions.actions = [mOptions.actions];
					}
					if (!mOptions.actions || mOptions.actions.length === 0) {
						mOptions.actions = ["OK"];
					}

					/** creates a button for the given action */
					function button(sAction) {
						var sText;

						

						var oButton = new sap.m.Button({
							id: sap.ui.core.ElementMetadata.uid("mbox-btn-"),
							text: sText || sAction,
							press: function () {
								oResult = sAction;
								oDialog.close();
							}
						});
						return oButton;
					}

					for (i = 0; i < mOptions.actions.length; i++) {
						aButtons.push(button(mOptions.actions[i]));
					}

					function getInformationLayout(mOptions, oMessageText) {
						//Generate MessageBox Layout
						if (typeof mOptions.details == 'object') {
							//covers JSON case
							//Using stringify() with "tab" as space argument and escaping the JSON to prevent binding
							mOptions.details = "<pre>" + JSON.stringify(mOptions.details, null, '\t')
								.replace(/{/gi, "\\{") + "</pre>";
						}

						var oFT = new sap.m.FormattedText({
							htmlText: mOptions.details
						}).setVisible(false);

						var oShowLink = new sap.m.Link({
							text: sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("MSGBOX_LINK_TITLE"),
							press: function () {
								oFT.setVisible(true);
								this.setVisible(false);
								oDialog._setInitialFocus();
							}
						});

						oShowLink.addStyleClass("sapMMessageBoxLinkText");
						oFT.addStyleClass("sapMMessageBoxDetails");

						return new sap.m.VBox({
							items: [
								oMessageText,
								oShowLink,
								oFT
							]
						});
					}

					function onclose() {
						if (typeof mOptions.onClose === "function") {
							mOptions.onClose(oResult);
						}
						oDialog.detachAfterClose(onclose);
						oDialog.destroy();
					}

					function getInitialFocusControl() {
						var i = 0;
						var oInitialFocusControl = null;
						if (mOptions.initialFocus) {
							if (mOptions.initialFocus instanceof sap.ui.core.Control) {//covers sap.m.Control cases
								oInitialFocusControl = mOptions.initialFocus;
							}

							if (typeof mOptions.initialFocus === "string") {//covers string and MessageBox.Action cases
								for (i = 0; i < aButtons.length; i++) {
									{
										if (mOptions.initialFocus.toLowerCase() === aButtons[i].getText().toLowerCase()) {
											oInitialFocusControl = aButtons[i];
											break;
										}
									}
								}
							}
						}

						return oInitialFocusControl;
					}

					if (typeof (vMessage) === "string") {
						vMessageContent = new sap.m.Text({
								textDirection: mOptions.textDirection
							}).setText(vMessage).addStyleClass("sapMMsgBoxText");

						// If we have only text we need to keep a reference to it and add it to the aria-labelledby attribute of the dialog.
						oMessageText = vMessageContent;
					} else if (vMessage instanceof sap.ui.core.Control) {
						vMessageContent = vMessage.addStyleClass("sapMMsgBoxText");
					}

					// If we have additional details, we should wrap the content in a details layout.
					if (mOptions && mOptions.hasOwnProperty("details") && mOptions.details !== "") {
						vMessageContent = getInformationLayout(mOptions, vMessageContent);
					}

					function onOpen () {
						if (sap.ui.getCore().getConfiguration().getAccessibility()) {
							oDialog.$().attr("role", "alertdialog");
						}
					}

					oDialog = new sap.m.Dialog({
						id: mOptions.id,
						type: sap.m.DialogType.Message,
						title: mOptions.title,
						content: vMessageContent,
						icon: mIcons[mOptions.icon],
						initialFocus: getInitialFocusControl(),
						verticalScrolling: mOptions.verticalScrolling,
						horizontalScrolling: mOptions.horizontalScrolling,
						afterOpen: onOpen,
						afterClose: onclose,
						buttons: aButtons,
						ariaLabelledBy: oMessageText ? oMessageText.getId() : undefined,
						contentWidth: mOptions.contentWidth
					});

					if (mClasses[mOptions.icon]) {
						oDialog.addStyleClass(mClasses[mOptions.icon]);
					} else {
						oDialog.addStyleClass(mClasses.STANDARD);
					}

					if (mOptions.styleClass) {
						oDialog.addStyleClass(mOptions.styleClass);
					}

					oDialog.open();
}


// https://github.com/jonathantneal/closest/blob/master/closest.js
export function polyfillElementClosest() {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      let element = this;
      let elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      let index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      let element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }
      return null;
    };
  }
}

export class SmoothScroll {

    static defaultConfig = {
        duration: 400,
        easing: "ease-in"
    };

    static inject = [Animator, Router];
    constructor(animator, router) {
        this.animator = animator;
        this.router = router;
        var config = SmoothScroll.defaultConfig;
        if (config.duration) this.duration = config.duration;
        if (config.easing) this.easing = config.easing;
    }


    //    this.scrollTo(this.element.getAttribute("href"),{},document.body);

    /**
     * Scroll to an element or named anchor
     *
     * @param elementOrHash   element to scroll to or named anchor
     * @param options         animator options
     * @param container       the container element (defaults to document.body)
     *
     * @returns {Promise} resolved when scrolling is done
     */
    scrollTo(elementOrHash, options = {}, container = document.body) {

        var target = elementOrHash;
        var hash = null;
        //find target by id or name
        if (typeof elementOrHash === "string" && elementOrHash.indexOf("#") === 0) {
            hash = elementOrHash.slice(1, elementOrHash.length);
            if (hash) {
                //query main DOM element, get UIElement
                target = container.querySelector(`[data-sap-ui="${hash}"]`);
            } else {
                target = document.body;
            }

            /*if (history) {
                history.pushState(null, null, '#/' + this.router.currentInstruction.fragment + '/' + hash);
            } else {
                //fallback to location.hash
                var t = container.scrollTop;
                location.hash = hash;
                container.scrollTop = t;
            }*/

        }

        if (!target || typeof target === "string") return Promise.resolve();
        return this.animator.animate(target, "scroll",
            Object.assign({
                duration: this.duration,
                offset: SmoothScroll.getOffset(),
                easing: this.easing
            }, options)
        );

    }

    static getOffset() {
        return - document.querySelector(".sapUiBody").offsetTop;
    }

}
export function createJSONModel() {
  return new sap.ui.model.json.JSONModel();
}
export function assignModel(tree, model, templateBinding) {
  tree.setModel(model);
  tree.bindAggregation('items', '/', new sap.m.StandardTreeItem(templateBinding));
}
export function assignModelFromTemplate(tree, model, treeItem) {
  tree.setModel(model);
  tree.bindAggregation('items', '/', treeItem);
}

@customAttribute('ui5-container')
@inject(Element)
export class Ui5Container {
 
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
  
  }

  detached() {
    
  }

}

@customElement('ui5-custom-data')
@inject(Element)
export class Ui5CustomData extends Ui5Element{
        _customdata = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() key = null;
@bindable() value = null;
@bindable() writeToDom = false;
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
        @computedFrom('_customdata')
        get UIElement() {
            return this._customdata;
          }
        fillProperties(params){
                                        params.key = this.key;
params.value = this.value;
params.writeToDom = getBooleanFromAttributeValue(this.writeToDom);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._customdata = new sap.ui.core.CustomData(this.ui5Id, params);
        else
          this._customdata = new sap.ui.core.CustomData(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._customdata.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._customdata, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._customdata, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._customdata, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._customdata.placeAt)
                                                                this._customdata.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._customdata.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._customdata, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._customdata.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._customdata.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._customdata.indexOfCustomData(afterElement); if (_index)this._customdata.insertCustomData(child, _index + 1); else this._customdata.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._customdata.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._customdata.indexOfDependent(afterElement); if (_index)this._customdata.insertDependent(child, _index + 1); else this._customdata.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._customdata.destroyTooltip(child); }
if (relation == 'customdata') {  this._customdata.removeCustomData(child);}
if (relation == 'layoutdata') {  this._customdata.destroyLayoutData(child); }
if (relation == 'dependents') {  this._customdata.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    keyChanged(newValue){if(this._customdata!==null){ this._customdata.setKey(newValue);}}
valueChanged(newValue){if(this._customdata!==null){ this._customdata.setValue(newValue);}}
writeToDomChanged(newValue){if(this._customdata!==null){ this._customdata.setWriteToDom(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._customdata!==null){ this._customdata.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._customdata!==null){ this._customdata.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._customdata!==null){ this._customdata.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._customdata!==null){ this._customdata.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._customdata!==null){ this._customdata.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-control')
@inject(Element)
export class Ui5Control extends Ui5Element{
        _control = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_control')
        get UIElement() {
            return this._control;
          }
        fillProperties(params){
                                        params.busy = getBooleanFromAttributeValue(this.busy);
params.busyIndicatorDelay = this.busyIndicatorDelay?parseInt(this.busyIndicatorDelay):0;
params.busyIndicatorSize = this.busyIndicatorSize;
params.visible = getBooleanFromAttributeValue(this.visible);
params.fieldGroupIds = this.fieldGroupIds;
params.validateFieldGroup = this.validateFieldGroup==null ? this.defaultFunc: this.validateFieldGroup;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._control = new sap.ui.core.Control(this.ui5Id, params);
        else
          this._control = new sap.ui.core.Control(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._control.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._control, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._control, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._control, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._control.placeAt)
                                                                this._control.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._control.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._control, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._control.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._control.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._control.indexOfCustomData(afterElement); if (_index)this._control.insertCustomData(child, _index + 1); else this._control.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._control.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._control.indexOfDependent(afterElement); if (_index)this._control.insertDependent(child, _index + 1); else this._control.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._control.destroyTooltip(child); }
if (relation == 'customdata') {  this._control.removeCustomData(child);}
if (relation == 'layoutdata') {  this._control.destroyLayoutData(child); }
if (relation == 'dependents') {  this._control.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    busyChanged(newValue){if(this._control!==null){ this._control.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._control!==null){ this._control.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._control!==null){ this._control.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._control!==null){ this._control.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._control!==null){ this._control.setFieldGroupIds(newValue);}}
validateFieldGroupChanged(newValue){if(this._control!==null){ this._control.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._control!==null){ this._control.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._control!==null){ this._control.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._control!==null){ this._control.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._control!==null){ this._control.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._control!==null){ this._control.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-custom-tree-item')
@inject(Element)
export class Ui5CustomTreeItem extends Ui5TreeItemBase{
        _customtreeitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        /* inherited from sap.m.TreeItemBase*/
/* inherited from sap.m.ListItemBase*/
@bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_customtreeitem')
        get UIElement() {
            return this._customtreeitem;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._customtreeitem = new sap.m.CustomTreeItem(this.ui5Id, params);
        else
          this._customtreeitem = new sap.m.CustomTreeItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._customtreeitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._customtreeitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._customtreeitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._customtreeitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._customtreeitem.placeAt)
                                                                this._customtreeitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._customtreeitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._customtreeitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._customtreeitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._customtreeitem.indexOfContent(afterElement); if (_index)this._customtreeitem.insertContent(child, _index + 1); else this._customtreeitem.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._customtreeitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._customtreeitem.indexOfCustomData(afterElement); if (_index)this._customtreeitem.insertCustomData(child, _index + 1); else this._customtreeitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._customtreeitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._customtreeitem.indexOfDependent(afterElement); if (_index)this._customtreeitem.insertDependent(child, _index + 1); else this._customtreeitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._customtreeitem.removeContent(child);}
if (relation == 'tooltip') {  this._customtreeitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._customtreeitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._customtreeitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._customtreeitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.m.TreeItemBase*/
typeChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setType(newValue);}}
visibleChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-date-time-field')
@inject(Element)
export class Ui5DateTimeField extends Ui5InputBase{
        _datetimefield = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() displayFormat = null;
@bindable() valueFormat = null;
@bindable() dateValue = null;
/* inherited from sap.m.InputBase*/
@bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_datetimefield')
        get UIElement() {
            return this._datetimefield;
          }
        fillProperties(params){
                                        params.displayFormat = this.displayFormat;
params.valueFormat = this.valueFormat;
params.dateValue = this.dateValue;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._datetimefield = new sap.m.DateTimeField(this.ui5Id, params);
        else
          this._datetimefield = new sap.m.DateTimeField(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._datetimefield.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._datetimefield, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._datetimefield, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._datetimefield, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._datetimefield.placeAt)
                                                                this._datetimefield.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._datetimefield.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._datetimefield, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._datetimefield.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._datetimefield.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._datetimefield.indexOfCustomData(afterElement); if (_index)this._datetimefield.insertCustomData(child, _index + 1); else this._datetimefield.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._datetimefield.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._datetimefield.indexOfDependent(afterElement); if (_index)this._datetimefield.insertDependent(child, _index + 1); else this._datetimefield.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._datetimefield.destroyTooltip(child); }
if (relation == 'customdata') {  this._datetimefield.removeCustomData(child);}
if (relation == 'layoutdata') {  this._datetimefield.destroyLayoutData(child); }
if (relation == 'dependents') {  this._datetimefield.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    displayFormatChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setDisplayFormat(newValue);}}
valueFormatChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValueFormat(newValue);}}
dateValueChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setDateValue(newValue);}}
valueChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValue(newValue);}}
widthChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setWidth(newValue);}}
enabledChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValueState(newValue);}}
nameChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setName(newValue);}}
placeholderChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachChange(newValue);}}
busyChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._datetimefield!==null){ this._datetimefield.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-date-time-picker')
@inject(Element)
export class Ui5DateTimePicker extends Ui5DatePicker{
        _datetimepicker = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        /* inherited from sap.m.DatePicker*/
@bindable() displayFormatType = '';
@bindable() secondaryCalendarType = null;
@bindable() minDate = null;
@bindable() maxDate = null;
@bindable() navigate = this.defaultFunc;
/* inherited from sap.m.DateTimeField*/
@bindable() displayFormat = null;
@bindable() valueFormat = null;
@bindable() dateValue = null;
/* inherited from sap.m.InputBase*/
@bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_datetimepicker')
        get UIElement() {
            return this._datetimepicker;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._datetimepicker = new sap.m.DateTimePicker(this.ui5Id, params);
        else
          this._datetimepicker = new sap.m.DateTimePicker(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._datetimepicker.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._datetimepicker, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._datetimepicker, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._datetimepicker, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._datetimepicker.placeAt)
                                                                this._datetimepicker.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._datetimepicker.attachChange((event) => { that.value = event.mParameters.value;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._datetimepicker.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._datetimepicker, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._datetimepicker.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'specialdates') { var _index = null; if (afterElement) _index = this._datetimepicker.indexOfSpecialDate(afterElement); if (_index)this._datetimepicker.insertSpecialDate(child, _index + 1); else this._datetimepicker.addSpecialDate(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._datetimepicker.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._datetimepicker.indexOfCustomData(afterElement); if (_index)this._datetimepicker.insertCustomData(child, _index + 1); else this._datetimepicker.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._datetimepicker.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._datetimepicker.indexOfDependent(afterElement); if (_index)this._datetimepicker.insertDependent(child, _index + 1); else this._datetimepicker.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'specialdates') {  this._datetimepicker.removeSpecialDate(child);}
if (relation == 'tooltip') {  this._datetimepicker.destroyTooltip(child); }
if (relation == 'customdata') {  this._datetimepicker.removeCustomData(child);}
if (relation == 'layoutdata') {  this._datetimepicker.destroyLayoutData(child); }
if (relation == 'dependents') {  this._datetimepicker.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    displayFormatTypeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setDisplayFormatType(newValue);}}
secondaryCalendarTypeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setSecondaryCalendarType(newValue);}}
minDateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setMinDate(newValue);}}
maxDateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setMaxDate(newValue);}}
/* inherited from sap.m.DatePicker*/
navigateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachNavigate(newValue);}}
displayFormatChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setDisplayFormat(newValue);}}
valueFormatChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValueFormat(newValue);}}
dateValueChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setDateValue(newValue);}}
/* inherited from sap.m.DateTimeField*/
valueChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValue(newValue);}}
widthChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setWidth(newValue);}}
enabledChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValueState(newValue);}}
nameChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setName(newValue);}}
placeholderChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachChange(newValue);}}
busyChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._datetimepicker!==null){ this._datetimepicker.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
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
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
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
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._dialog.indexOfContent(afterElement); if (_index)this._dialog.insertContent(child, _index + 1); else this._dialog.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'subheader') { this._dialog.setSubHeader(child); return elem.localName;}
if (elem.localName == 'customheader') { this._dialog.setCustomHeader(child); return elem.localName;}
if (elem.localName == 'beginbutton') { this._dialog.setBeginButton(child); return elem.localName;}
if (elem.localName == 'endbutton') { this._dialog.setEndButton(child); return elem.localName;}
if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._dialog.indexOfButton(afterElement); if (_index)this._dialog.insertButton(child, _index + 1); else this._dialog.addButton(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._dialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._dialog.indexOfCustomData(afterElement); if (_index)this._dialog.insertCustomData(child, _index + 1); else this._dialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._dialog.indexOfDependent(afterElement); if (_index)this._dialog.insertDependent(child, _index + 1); else this._dialog.addDependent(child, 0);  return elem.localName; }

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
@customElement('ui5-dynamic-page')
@inject(Element)
export class Ui5DynamicPage extends Ui5Control{
        _dynamicpage = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() preserveHeaderStateOnScroll = false;
@bindable() headerExpanded = true;
@bindable() toggleHeaderOnTitleClick = true;
@bindable() showFooter = false;
@bindable() fitContent = false;
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
        @computedFrom('_dynamicpage')
        get UIElement() {
            return this._dynamicpage;
          }
        fillProperties(params){
                                        params.preserveHeaderStateOnScroll = getBooleanFromAttributeValue(this.preserveHeaderStateOnScroll);
params.headerExpanded = getBooleanFromAttributeValue(this.headerExpanded);
params.toggleHeaderOnTitleClick = getBooleanFromAttributeValue(this.toggleHeaderOnTitleClick);
params.showFooter = getBooleanFromAttributeValue(this.showFooter);
params.fitContent = getBooleanFromAttributeValue(this.fitContent);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._dynamicpage = new sap.f.DynamicPage(this.ui5Id, params);
        else
          this._dynamicpage = new sap.f.DynamicPage(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpage.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dynamicpage, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dynamicpage, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dynamicpage, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dynamicpage.placeAt)
                                                                this._dynamicpage.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dynamicpage.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._dynamicpage, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dynamicpage.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'title-elem') { this._dynamicpage.setTitle(child); return elem.localName;}
if (elem.localName == 'header') { this._dynamicpage.setHeader(child); return elem.localName;}
if (elem.localName == 'content') { this._dynamicpage.setContent(child); return elem.localName;}
if (elem.localName == 'footer') { this._dynamicpage.setFooter(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._dynamicpage.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._dynamicpage.indexOfCustomData(afterElement); if (_index)this._dynamicpage.insertCustomData(child, _index + 1); else this._dynamicpage.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpage.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._dynamicpage.indexOfDependent(afterElement); if (_index)this._dynamicpage.insertDependent(child, _index + 1); else this._dynamicpage.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'title-elem') {  this._dynamicpage.destroyTitle(child); }
if (relation == 'header') {  this._dynamicpage.destroyHeader(child); }
if (relation == 'content') {  this._dynamicpage.destroyContent(child); }
if (relation == 'footer') {  this._dynamicpage.destroyFooter(child); }
if (relation == 'tooltip') {  this._dynamicpage.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpage.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dynamicpage.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpage.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    preserveHeaderStateOnScrollChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setPreserveHeaderStateOnScroll(getBooleanFromAttributeValue(newValue));}}
headerExpandedChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setHeaderExpanded(getBooleanFromAttributeValue(newValue));}}
toggleHeaderOnTitleClickChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setToggleHeaderOnTitleClick(getBooleanFromAttributeValue(newValue));}}
showFooterChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setShowFooter(getBooleanFromAttributeValue(newValue));}}
fitContentChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setFitContent(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._dynamicpage!==null){ this._dynamicpage.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-dynamic-page-header')
@inject(Element)
export class Ui5DynamicPageHeader extends Ui5Control{
        _dynamicpageheader = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() pinnable = true;
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
        @computedFrom('_dynamicpageheader')
        get UIElement() {
            return this._dynamicpageheader;
          }
        fillProperties(params){
                                        params.pinnable = getBooleanFromAttributeValue(this.pinnable);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._dynamicpageheader = new sap.f.DynamicPageHeader(this.ui5Id, params);
        else
          this._dynamicpageheader = new sap.f.DynamicPageHeader(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpageheader.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dynamicpageheader, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dynamicpageheader, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dynamicpageheader, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dynamicpageheader.placeAt)
                                                                this._dynamicpageheader.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dynamicpageheader.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._dynamicpageheader, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dynamicpageheader.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._dynamicpageheader.indexOfContent(afterElement); if (_index)this._dynamicpageheader.insertContent(child, _index + 1); else this._dynamicpageheader.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._dynamicpageheader.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._dynamicpageheader.indexOfCustomData(afterElement); if (_index)this._dynamicpageheader.insertCustomData(child, _index + 1); else this._dynamicpageheader.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpageheader.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._dynamicpageheader.indexOfDependent(afterElement); if (_index)this._dynamicpageheader.insertDependent(child, _index + 1); else this._dynamicpageheader.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._dynamicpageheader.removeContent(child);}
if (relation == 'tooltip') {  this._dynamicpageheader.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpageheader.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dynamicpageheader.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpageheader.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    pinnableChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setPinnable(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._dynamicpageheader!==null){ this._dynamicpageheader.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-date-picker')
@inject(Element)
export class Ui5DatePicker extends Ui5DateTimeField{
        _datepicker = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() displayFormatType = '';
@bindable() secondaryCalendarType = null;
@bindable() minDate = null;
@bindable() maxDate = null;
@bindable() navigate = this.defaultFunc;
/* inherited from sap.m.DateTimeField*/
@bindable() displayFormat = null;
@bindable() valueFormat = null;
@bindable() dateValue = null;
/* inherited from sap.m.InputBase*/
@bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_datepicker')
        get UIElement() {
            return this._datepicker;
          }
        fillProperties(params){
                                        params.displayFormatType = this.displayFormatType;
params.secondaryCalendarType = this.secondaryCalendarType;
params.minDate = this.minDate;
params.maxDate = this.maxDate;
params.navigate = this.navigate==null ? this.defaultFunc: this.navigate;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._datepicker = new sap.m.DatePicker(this.ui5Id, params);
        else
          this._datepicker = new sap.m.DatePicker(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._datepicker.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._datepicker, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._datepicker, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._datepicker, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._datepicker.placeAt)
                                                                this._datepicker.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._datepicker.attachChange((event) => { that.value = event.mParameters.value;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._datepicker.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._datepicker, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._datepicker.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'specialdates') { var _index = null; if (afterElement) _index = this._datepicker.indexOfSpecialDate(afterElement); if (_index)this._datepicker.insertSpecialDate(child, _index + 1); else this._datepicker.addSpecialDate(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._datepicker.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._datepicker.indexOfCustomData(afterElement); if (_index)this._datepicker.insertCustomData(child, _index + 1); else this._datepicker.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._datepicker.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._datepicker.indexOfDependent(afterElement); if (_index)this._datepicker.insertDependent(child, _index + 1); else this._datepicker.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'specialdates') {  this._datepicker.removeSpecialDate(child);}
if (relation == 'tooltip') {  this._datepicker.destroyTooltip(child); }
if (relation == 'customdata') {  this._datepicker.removeCustomData(child);}
if (relation == 'layoutdata') {  this._datepicker.destroyLayoutData(child); }
if (relation == 'dependents') {  this._datepicker.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    displayFormatTypeChanged(newValue){if(this._datepicker!==null){ this._datepicker.setDisplayFormatType(newValue);}}
secondaryCalendarTypeChanged(newValue){if(this._datepicker!==null){ this._datepicker.setSecondaryCalendarType(newValue);}}
minDateChanged(newValue){if(this._datepicker!==null){ this._datepicker.setMinDate(newValue);}}
maxDateChanged(newValue){if(this._datepicker!==null){ this._datepicker.setMaxDate(newValue);}}
navigateChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachNavigate(newValue);}}
displayFormatChanged(newValue){if(this._datepicker!==null){ this._datepicker.setDisplayFormat(newValue);}}
valueFormatChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValueFormat(newValue);}}
dateValueChanged(newValue){if(this._datepicker!==null){ this._datepicker.setDateValue(newValue);}}
/* inherited from sap.m.DateTimeField*/
valueChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValue(newValue);}}
widthChanged(newValue){if(this._datepicker!==null){ this._datepicker.setWidth(newValue);}}
enabledChanged(newValue){if(this._datepicker!==null){ this._datepicker.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValueState(newValue);}}
nameChanged(newValue){if(this._datepicker!==null){ this._datepicker.setName(newValue);}}
placeholderChanged(newValue){if(this._datepicker!==null){ this._datepicker.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._datepicker!==null){ this._datepicker.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._datepicker!==null){ this._datepicker.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._datepicker!==null){ this._datepicker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._datepicker!==null){ this._datepicker.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._datepicker!==null){ this._datepicker.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._datepicker!==null){ this._datepicker.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachChange(newValue);}}
busyChanged(newValue){if(this._datepicker!==null){ this._datepicker.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._datepicker!==null){ this._datepicker.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._datepicker!==null){ this._datepicker.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._datepicker!==null){ this._datepicker.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._datepicker!==null){ this._datepicker.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._datepicker!==null){ this._datepicker.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-element')
@inject(Element)
export class Ui5Element extends Ui5ManagedObject{
        _element = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_element')
        get UIElement() {
            return this._element;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._element = new sap.ui.core.Element(this.ui5Id, params);
        else
          this._element = new sap.ui.core.Element(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._element.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._element, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._element, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._element, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._element.placeAt)
                                                                this._element.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._element.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._element, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._element.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._element.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._element.indexOfCustomData(afterElement); if (_index)this._element.insertCustomData(child, _index + 1); else this._element.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._element.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._element.indexOfDependent(afterElement); if (_index)this._element.insertDependent(child, _index + 1); else this._element.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._element.destroyTooltip(child); }
if (relation == 'customdata') {  this._element.removeCustomData(child);}
if (relation == 'layoutdata') {  this._element.destroyLayoutData(child); }
if (relation == 'dependents') {  this._element.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._element!==null){ this._element.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._element!==null){ this._element.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._element!==null){ this._element.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._element!==null){ this._element.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._element!==null){ this._element.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-event-provider')
@inject(Element)
export class Ui5EventProvider extends Ui5Object{
        _eventprovider = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        /* inherited from sap.ui.base.Object*/

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_eventprovider')
        get UIElement() {
            return this._eventprovider;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._eventprovider = new sap.ui.base.EventProvider(this.ui5Id, params);
        else
          this._eventprovider = new sap.ui.base.EventProvider(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._eventprovider.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._eventprovider, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._eventprovider, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._eventprovider, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._eventprovider.placeAt)
                                                                this._eventprovider.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._eventprovider.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._eventprovider, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._eventprovider.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 
           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               
      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-feed-content')
@inject(Element)
export class Ui5FeedContent extends Ui5Control{
        _feedcontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() contentText = null;
@bindable() subheader = null;
@bindable() value = null;
@bindable() valueColor = null;
@bindable() truncateValueTo = 4;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_feedcontent')
        get UIElement() {
            return this._feedcontent;
          }
        fillProperties(params){
                                        params.contentText = this.contentText;
params.subheader = this.subheader;
params.value = this.value;
params.valueColor = this.valueColor;
params.truncateValueTo = this.truncateValueTo?parseInt(this.truncateValueTo):0;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._feedcontent = new sap.m.FeedContent(this.ui5Id, params);
        else
          this._feedcontent = new sap.m.FeedContent(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._feedcontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._feedcontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._feedcontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._feedcontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._feedcontent.placeAt)
                                                                this._feedcontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._feedcontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._feedcontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._feedcontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._feedcontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._feedcontent.indexOfCustomData(afterElement); if (_index)this._feedcontent.insertCustomData(child, _index + 1); else this._feedcontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._feedcontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._feedcontent.indexOfDependent(afterElement); if (_index)this._feedcontent.insertDependent(child, _index + 1); else this._feedcontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._feedcontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._feedcontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._feedcontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._feedcontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    contentTextChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setContentText(newValue);}}
subheaderChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setSubheader(newValue);}}
valueChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setValue(newValue);}}
valueColorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setValueColor(newValue);}}
truncateValueToChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setTruncateValueTo(newValue);}}
pressChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachPress(newValue);}}
busyChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-form')
@inject(Element)
export class Ui5Form extends Ui5Control{
        _form = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() editable = false;
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
        @computedFrom('_form')
        get UIElement() {
            return this._form;
          }
        fillProperties(params){
                                        params.width = this.width;
params.editable = getBooleanFromAttributeValue(this.editable);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._form = new sap.ui.layout.form.Form(this.ui5Id, params);
        else
          this._form = new sap.ui.layout.form.Form(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._form.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._form, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._form, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._form, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._form.placeAt)
                                                                this._form.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._form.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._form, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._form.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'formcontainers') { var _index = null; if (afterElement) _index = this._form.indexOfFormContainer(afterElement); if (_index)this._form.insertFormContainer(child, _index + 1); else this._form.addFormContainer(child, 0);  return elem.localName; }
if (elem.localName == 'title-elem') { this._form.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._form.setToolbar(child); return elem.localName;}
if (elem.localName == 'layout') { this._form.setLayout(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._form.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._form.indexOfCustomData(afterElement); if (_index)this._form.insertCustomData(child, _index + 1); else this._form.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._form.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._form.indexOfDependent(afterElement); if (_index)this._form.insertDependent(child, _index + 1); else this._form.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'formcontainers') {  this._form.removeFormContainer(child);}
if (relation == 'title-elem') {  this._form.destroyTitle(child); }
if (relation == 'toolbar') {  this._form.destroyToolbar(child); }
if (relation == 'layout') {  this._form.destroyLayout(child); }
if (relation == 'tooltip') {  this._form.destroyTooltip(child); }
if (relation == 'customdata') {  this._form.removeCustomData(child);}
if (relation == 'layoutdata') {  this._form.destroyLayoutData(child); }
if (relation == 'dependents') {  this._form.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._form!==null){ this._form.setWidth(newValue);}}
editableChanged(newValue){if(this._form!==null){ this._form.setEditable(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._form!==null){ this._form.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._form!==null){ this._form.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._form!==null){ this._form.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._form!==null){ this._form.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._form!==null){ this._form.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._form!==null){ this._form.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._form!==null){ this._form.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._form!==null){ this._form.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._form!==null){ this._form.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._form!==null){ this._form.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._form!==null){ this._form.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-form-container')
@inject(Element)
export class Ui5FormContainer extends Ui5Element{
        _formcontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() expanded = true;
@bindable() expandable = false;
@bindable() visible = true;
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
        @computedFrom('_formcontainer')
        get UIElement() {
            return this._formcontainer;
          }
        fillProperties(params){
                                        params.expanded = getBooleanFromAttributeValue(this.expanded);
params.expandable = getBooleanFromAttributeValue(this.expandable);
params.visible = getBooleanFromAttributeValue(this.visible);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._formcontainer = new sap.ui.layout.form.FormContainer(this.ui5Id, params);
        else
          this._formcontainer = new sap.ui.layout.form.FormContainer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formcontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formcontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formcontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formcontainer.placeAt)
                                                                this._formcontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formcontainer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formcontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formcontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'formelements') { var _index = null; if (afterElement) _index = this._formcontainer.indexOfFormElement(afterElement); if (_index)this._formcontainer.insertFormElement(child, _index + 1); else this._formcontainer.addFormElement(child, 0);  return elem.localName; }
if (elem.localName == 'title-elem') { this._formcontainer.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._formcontainer.setToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._formcontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._formcontainer.indexOfCustomData(afterElement); if (_index)this._formcontainer.insertCustomData(child, _index + 1); else this._formcontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formcontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._formcontainer.indexOfDependent(afterElement); if (_index)this._formcontainer.insertDependent(child, _index + 1); else this._formcontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'formelements') {  this._formcontainer.removeFormElement(child);}
if (relation == 'title-elem') {  this._formcontainer.destroyTitle(child); }
if (relation == 'toolbar') {  this._formcontainer.destroyToolbar(child); }
if (relation == 'tooltip') {  this._formcontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._formcontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._formcontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formcontainer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    expandedChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.setExpanded(getBooleanFromAttributeValue(newValue));}}
expandableChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.setExpandable(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-form-layout')
@inject(Element)
export class Ui5FormLayout extends Ui5Control{
        _formlayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() backgroundDesign = 'Translucent';
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
        @computedFrom('_formlayout')
        get UIElement() {
            return this._formlayout;
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
          this._formlayout = new sap.ui.layout.form.FormLayout(this.ui5Id, params);
        else
          this._formlayout = new sap.ui.layout.form.FormLayout(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formlayout.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formlayout, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formlayout, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formlayout, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formlayout.placeAt)
                                                                this._formlayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formlayout.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formlayout, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formlayout.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._formlayout.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._formlayout.indexOfCustomData(afterElement); if (_index)this._formlayout.insertCustomData(child, _index + 1); else this._formlayout.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formlayout.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._formlayout.indexOfDependent(afterElement); if (_index)this._formlayout.insertDependent(child, _index + 1); else this._formlayout.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._formlayout.destroyTooltip(child); }
if (relation == 'customdata') {  this._formlayout.removeCustomData(child);}
if (relation == 'layoutdata') {  this._formlayout.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formlayout.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    backgroundDesignChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBackgroundDesign(newValue);}}
busyChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._formlayout!==null){ this._formlayout.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._formlayout!==null){ this._formlayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._formlayout!==null){ this._formlayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._formlayout!==null){ this._formlayout.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-formatted-text')
@inject(Element)
export class Ui5FormattedText extends Ui5Control{
        _formattedtext = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() htmlText = '';
@bindable() width = null;
@bindable() convertLinksToAnchorTags = 'None';
@bindable() convertedLinksDefaultTarget = '_blank';
@bindable() height = null;
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
        @computedFrom('_formattedtext')
        get UIElement() {
            return this._formattedtext;
          }
        fillProperties(params){
                                        params.htmlText = this.htmlText;
params.width = this.width;
params.convertLinksToAnchorTags = this.convertLinksToAnchorTags;
params.convertedLinksDefaultTarget = this.convertedLinksDefaultTarget;
params.height = this.height;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._formattedtext = new sap.m.FormattedText(this.ui5Id, params);
        else
          this._formattedtext = new sap.m.FormattedText(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formattedtext.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formattedtext, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formattedtext, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formattedtext, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formattedtext.placeAt)
                                                                this._formattedtext.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formattedtext.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formattedtext, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formattedtext.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._formattedtext.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._formattedtext.indexOfCustomData(afterElement); if (_index)this._formattedtext.insertCustomData(child, _index + 1); else this._formattedtext.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formattedtext.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._formattedtext.indexOfDependent(afterElement); if (_index)this._formattedtext.insertDependent(child, _index + 1); else this._formattedtext.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._formattedtext.destroyTooltip(child); }
if (relation == 'customdata') {  this._formattedtext.removeCustomData(child);}
if (relation == 'layoutdata') {  this._formattedtext.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formattedtext.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    htmlTextChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setHtmlText(newValue);}}
widthChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setWidth(newValue);}}
convertLinksToAnchorTagsChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setConvertLinksToAnchorTags(newValue);}}
convertedLinksDefaultTargetChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setConvertedLinksDefaultTarget(newValue);}}
heightChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setHeight(newValue);}}
busyChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._formattedtext!==null){ this._formattedtext.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-generic-tile')
@inject(Element)
export class Ui5GenericTile extends Ui5Control{
        _generictile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() mode = 'ContentMode';
@bindable() header = null;
@bindable() subheader = null;
@bindable() failedText = null;
@bindable() frameType = 'OneByOne';
@bindable() backgroundImage = null;
@bindable() headerImage = null;
@bindable() state = 'Loaded';
@bindable() imageDescription = null;
@bindable() scope = 'Display';
@bindable() ariaLabel = null;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_generictile')
        get UIElement() {
            return this._generictile;
          }
        fillProperties(params){
                                        params.mode = this.mode;
params.header = this.header;
params.subheader = this.subheader;
params.failedText = this.failedText;
params.frameType = this.frameType;
params.backgroundImage = this.backgroundImage;
params.headerImage = this.headerImage;
params.state = this.state;
params.imageDescription = this.imageDescription;
params.scope = this.scope;
params.ariaLabel = this.ariaLabel;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._generictile = new sap.m.GenericTile(this.ui5Id, params);
        else
          this._generictile = new sap.m.GenericTile(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._generictile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._generictile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._generictile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._generictile, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._generictile.placeAt)
                                                                this._generictile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._generictile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._generictile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._generictile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tilecontent') { var _index = null; if (afterElement) _index = this._generictile.indexOfTileContent(afterElement); if (_index)this._generictile.insertTileContent(child, _index + 1); else this._generictile.addTileContent(child, 0);  return elem.localName; }
if (elem.localName == 'icon') { this._generictile.setIcon(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._generictile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._generictile.indexOfCustomData(afterElement); if (_index)this._generictile.insertCustomData(child, _index + 1); else this._generictile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._generictile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._generictile.indexOfDependent(afterElement); if (_index)this._generictile.insertDependent(child, _index + 1); else this._generictile.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tilecontent') {  this._generictile.removeTileContent(child);}
if (relation == 'icon') {  this._generictile.destroyIcon(child); }
if (relation == 'tooltip') {  this._generictile.destroyTooltip(child); }
if (relation == 'customdata') {  this._generictile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._generictile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._generictile.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    modeChanged(newValue){if(this._generictile!==null){ this._generictile.setMode(newValue);}}
headerChanged(newValue){if(this._generictile!==null){ this._generictile.setHeader(newValue);}}
subheaderChanged(newValue){if(this._generictile!==null){ this._generictile.setSubheader(newValue);}}
failedTextChanged(newValue){if(this._generictile!==null){ this._generictile.setFailedText(newValue);}}
frameTypeChanged(newValue){if(this._generictile!==null){ this._generictile.setFrameType(newValue);}}
backgroundImageChanged(newValue){if(this._generictile!==null){ this._generictile.setBackgroundImage(newValue);}}
headerImageChanged(newValue){if(this._generictile!==null){ this._generictile.setHeaderImage(newValue);}}
stateChanged(newValue){if(this._generictile!==null){ this._generictile.setState(newValue);}}
imageDescriptionChanged(newValue){if(this._generictile!==null){ this._generictile.setImageDescription(newValue);}}
scopeChanged(newValue){if(this._generictile!==null){ this._generictile.setScope(newValue);}}
ariaLabelChanged(newValue){if(this._generictile!==null){ this._generictile.setAriaLabel(newValue);}}
pressChanged(newValue){if(this._generictile!==null){ this._generictile.attachPress(newValue);}}
busyChanged(newValue){if(this._generictile!==null){ this._generictile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._generictile!==null){ this._generictile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._generictile!==null){ this._generictile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._generictile!==null){ this._generictile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._generictile!==null){ this._generictile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._generictile!==null){ this._generictile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._generictile!==null){ this._generictile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._generictile!==null){ this._generictile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._generictile!==null){ this._generictile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._generictile!==null){ this._generictile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._generictile!==null){ this._generictile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-dynamic-page-title')
@inject(Element)
export class Ui5DynamicPageTitle extends Ui5Control{
        _dynamicpagetitle = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() primaryArea = 'Begin';
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
        @computedFrom('_dynamicpagetitle')
        get UIElement() {
            return this._dynamicpagetitle;
          }
        fillProperties(params){
                                        params.primaryArea = this.primaryArea;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._dynamicpagetitle = new sap.f.DynamicPageTitle(this.ui5Id, params);
        else
          this._dynamicpagetitle = new sap.f.DynamicPageTitle(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpagetitle.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dynamicpagetitle, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dynamicpagetitle.placeAt)
                                                                this._dynamicpagetitle.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dynamicpagetitle.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._dynamicpagetitle, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dynamicpagetitle.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'heading') { this._dynamicpagetitle.setHeading(child); return elem.localName;}
if (elem.localName == 'snappedheading') { this._dynamicpagetitle.setSnappedHeading(child); return elem.localName;}
if (elem.localName == 'expandedheading') { this._dynamicpagetitle.setExpandedHeading(child); return elem.localName;}
if (elem.localName == 'actions') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfAction(afterElement); if (_index)this._dynamicpagetitle.insertAction(child, _index + 1); else this._dynamicpagetitle.addAction(child, 0);  return elem.localName; }
if (elem.localName == 'navigationactions') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfNavigationAction(afterElement); if (_index)this._dynamicpagetitle.insertNavigationAction(child, _index + 1); else this._dynamicpagetitle.addNavigationAction(child, 0);  return elem.localName; }
if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfContent(afterElement); if (_index)this._dynamicpagetitle.insertContent(child, _index + 1); else this._dynamicpagetitle.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'snappedcontent') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfSnappedContent(afterElement); if (_index)this._dynamicpagetitle.insertSnappedContent(child, _index + 1); else this._dynamicpagetitle.addSnappedContent(child, 0);  return elem.localName; }
if (elem.localName == 'expandedcontent') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfExpandedContent(afterElement); if (_index)this._dynamicpagetitle.insertExpandedContent(child, _index + 1); else this._dynamicpagetitle.addExpandedContent(child, 0);  return elem.localName; }
if (elem.localName == 'breadcrumbs') { this._dynamicpagetitle.setBreadcrumbs(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._dynamicpagetitle.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfCustomData(afterElement); if (_index)this._dynamicpagetitle.insertCustomData(child, _index + 1); else this._dynamicpagetitle.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpagetitle.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfDependent(afterElement); if (_index)this._dynamicpagetitle.insertDependent(child, _index + 1); else this._dynamicpagetitle.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'heading') {  this._dynamicpagetitle.destroyHeading(child); }
if (relation == 'snappedheading') {  this._dynamicpagetitle.destroySnappedHeading(child); }
if (relation == 'expandedheading') {  this._dynamicpagetitle.destroyExpandedHeading(child); }
if (relation == 'actions') {  this._dynamicpagetitle.removeAction(child);}
if (relation == 'navigationactions') {  this._dynamicpagetitle.removeNavigationAction(child);}
if (relation == 'content') {  this._dynamicpagetitle.removeContent(child);}
if (relation == 'snappedcontent') {  this._dynamicpagetitle.removeSnappedContent(child);}
if (relation == 'expandedcontent') {  this._dynamicpagetitle.removeExpandedContent(child);}
if (relation == 'breadcrumbs') {  this._dynamicpagetitle.destroyBreadcrumbs(child); }
if (relation == 'tooltip') {  this._dynamicpagetitle.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpagetitle.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dynamicpagetitle.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpagetitle.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    primaryAreaChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setPrimaryArea(newValue);}}
busyChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-grid')
@inject(Element)
export class Ui5Grid extends Ui5Control{
        _grid = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = '100%';
@bindable() vSpacing = 1;
@bindable() hSpacing = 1;
@bindable() position = 'Left';
@bindable() defaultSpan = 'XL3 L3 M6 S12';
@bindable() defaultIndent = 'XL0 L0 M0 S0';
@bindable() containerQuery = false;
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
        @computedFrom('_grid')
        get UIElement() {
            return this._grid;
          }
        fillProperties(params){
                                        params.width = this.width;
params.vSpacing = this.vSpacing;
params.hSpacing = this.hSpacing;
params.position = this.position;
params.defaultSpan = this.defaultSpan;
params.defaultIndent = this.defaultIndent;
params.containerQuery = getBooleanFromAttributeValue(this.containerQuery);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._grid = new sap.ui.layout.Grid(this.ui5Id, params);
        else
          this._grid = new sap.ui.layout.Grid(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._grid.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._grid, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._grid, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._grid, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._grid.placeAt)
                                                                this._grid.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._grid.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._grid, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._grid.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._grid.indexOfContent(afterElement); if (_index)this._grid.insertContent(child, _index + 1); else this._grid.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._grid.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._grid.indexOfCustomData(afterElement); if (_index)this._grid.insertCustomData(child, _index + 1); else this._grid.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._grid.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._grid.indexOfDependent(afterElement); if (_index)this._grid.insertDependent(child, _index + 1); else this._grid.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._grid.removeContent(child);}
if (relation == 'tooltip') {  this._grid.destroyTooltip(child); }
if (relation == 'customdata') {  this._grid.removeCustomData(child);}
if (relation == 'layoutdata') {  this._grid.destroyLayoutData(child); }
if (relation == 'dependents') {  this._grid.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._grid!==null){ this._grid.setWidth(newValue);}}
vSpacingChanged(newValue){if(this._grid!==null){ this._grid.setVSpacing(newValue);}}
hSpacingChanged(newValue){if(this._grid!==null){ this._grid.setHSpacing(newValue);}}
positionChanged(newValue){if(this._grid!==null){ this._grid.setPosition(newValue);}}
defaultSpanChanged(newValue){if(this._grid!==null){ this._grid.setDefaultSpan(newValue);}}
defaultIndentChanged(newValue){if(this._grid!==null){ this._grid.setDefaultIndent(newValue);}}
containerQueryChanged(newValue){if(this._grid!==null){ this._grid.setContainerQuery(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._grid!==null){ this._grid.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._grid!==null){ this._grid.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._grid!==null){ this._grid.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._grid!==null){ this._grid.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._grid!==null){ this._grid.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._grid!==null){ this._grid.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._grid!==null){ this._grid.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._grid!==null){ this._grid.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._grid!==null){ this._grid.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._grid!==null){ this._grid.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._grid!==null){ this._grid.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-grid-data')
@inject(Element)
export class Ui5GridData extends Ui5LayoutData{
        _griddata = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() span = null;
@bindable() spanXL = null;
@bindable() spanL = null;
@bindable() spanM = null;
@bindable() spanS = null;
@bindable() indent = null;
@bindable() indentXL = null;
@bindable() indentL = null;
@bindable() indentM = null;
@bindable() indentS = null;
@bindable() visibleXL = true;
@bindable() visibleL = true;
@bindable() visibleM = true;
@bindable() visibleS = true;
@bindable() moveBackwards = null;
@bindable() moveForward = null;
@bindable() linebreak = false;
@bindable() linebreakXL = false;
@bindable() linebreakL = false;
@bindable() linebreakM = false;
@bindable() linebreakS = false;
/* inherited from sap.ui.core.LayoutData*/
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
        @computedFrom('_griddata')
        get UIElement() {
            return this._griddata;
          }
        fillProperties(params){
                                        params.span = this.span;
params.spanXL = this.spanXL?parseInt(this.spanXL):0;
params.spanL = this.spanL?parseInt(this.spanL):0;
params.spanM = this.spanM?parseInt(this.spanM):0;
params.spanS = this.spanS?parseInt(this.spanS):0;
params.indent = this.indent;
params.indentXL = this.indentXL?parseInt(this.indentXL):0;
params.indentL = this.indentL?parseInt(this.indentL):0;
params.indentM = this.indentM?parseInt(this.indentM):0;
params.indentS = this.indentS?parseInt(this.indentS):0;
params.visibleXL = getBooleanFromAttributeValue(this.visibleXL);
params.visibleL = getBooleanFromAttributeValue(this.visibleL);
params.visibleM = getBooleanFromAttributeValue(this.visibleM);
params.visibleS = getBooleanFromAttributeValue(this.visibleS);
params.moveBackwards = this.moveBackwards;
params.moveForward = this.moveForward;
params.linebreak = getBooleanFromAttributeValue(this.linebreak);
params.linebreakXL = getBooleanFromAttributeValue(this.linebreakXL);
params.linebreakL = getBooleanFromAttributeValue(this.linebreakL);
params.linebreakM = getBooleanFromAttributeValue(this.linebreakM);
params.linebreakS = getBooleanFromAttributeValue(this.linebreakS);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._griddata = new sap.ui.layout.GridData(this.ui5Id, params);
        else
          this._griddata = new sap.ui.layout.GridData(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._griddata.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._griddata, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._griddata, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._griddata, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._griddata.placeAt)
                                                                this._griddata.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._griddata.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._griddata, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._griddata.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._griddata.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._griddata.indexOfCustomData(afterElement); if (_index)this._griddata.insertCustomData(child, _index + 1); else this._griddata.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._griddata.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._griddata.indexOfDependent(afterElement); if (_index)this._griddata.insertDependent(child, _index + 1); else this._griddata.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._griddata.destroyTooltip(child); }
if (relation == 'customdata') {  this._griddata.removeCustomData(child);}
if (relation == 'layoutdata') {  this._griddata.destroyLayoutData(child); }
if (relation == 'dependents') {  this._griddata.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    spanChanged(newValue){if(this._griddata!==null){ this._griddata.setSpan(newValue);}}
spanXLChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanXL(newValue);}}
spanLChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanL(newValue);}}
spanMChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanM(newValue);}}
spanSChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanS(newValue);}}
indentChanged(newValue){if(this._griddata!==null){ this._griddata.setIndent(newValue);}}
indentXLChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentXL(newValue);}}
indentLChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentL(newValue);}}
indentMChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentM(newValue);}}
indentSChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentS(newValue);}}
visibleXLChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleXL(getBooleanFromAttributeValue(newValue));}}
visibleLChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleL(getBooleanFromAttributeValue(newValue));}}
visibleMChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleM(getBooleanFromAttributeValue(newValue));}}
visibleSChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleS(getBooleanFromAttributeValue(newValue));}}
moveBackwardsChanged(newValue){if(this._griddata!==null){ this._griddata.setMoveBackwards(newValue);}}
moveForwardChanged(newValue){if(this._griddata!==null){ this._griddata.setMoveForward(newValue);}}
linebreakChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreak(getBooleanFromAttributeValue(newValue));}}
linebreakXLChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakXL(getBooleanFromAttributeValue(newValue));}}
linebreakLChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakL(getBooleanFromAttributeValue(newValue));}}
linebreakMChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakM(getBooleanFromAttributeValue(newValue));}}
linebreakSChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakS(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.LayoutData*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._griddata!==null){ this._griddata.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._griddata!==null){ this._griddata.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._griddata!==null){ this._griddata.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._griddata!==null){ this._griddata.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._griddata!==null){ this._griddata.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-html')
@inject(Element)
export class Ui5Html extends Ui5Control{
        _html = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() content = null;
@bindable() preferDOM = true;
@bindable() sanitizeContent = false;
@bindable() visible = true;
@bindable() afterRendering = this.defaultFunc;
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
        @computedFrom('_html')
        get UIElement() {
            return this._html;
          }
        fillProperties(params){
                                        params.content = this.content;
params.preferDOM = getBooleanFromAttributeValue(this.preferDOM);
params.sanitizeContent = getBooleanFromAttributeValue(this.sanitizeContent);
params.visible = getBooleanFromAttributeValue(this.visible);
params.afterRendering = this.afterRendering==null ? this.defaultFunc: this.afterRendering;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._html = new sap.ui.core.HTML(this.ui5Id, params);
        else
          this._html = new sap.ui.core.HTML(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._html.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._html, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._html, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._html, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._html.placeAt)
                                                                this._html.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._html.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._html, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._html.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._html.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._html.indexOfCustomData(afterElement); if (_index)this._html.insertCustomData(child, _index + 1); else this._html.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._html.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._html.indexOfDependent(afterElement); if (_index)this._html.insertDependent(child, _index + 1); else this._html.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._html.destroyTooltip(child); }
if (relation == 'customdata') {  this._html.removeCustomData(child);}
if (relation == 'layoutdata') {  this._html.destroyLayoutData(child); }
if (relation == 'dependents') {  this._html.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    contentChanged(newValue){if(this._html!==null){ this._html.setContent(newValue);}}
preferDOMChanged(newValue){if(this._html!==null){ this._html.setPreferDOM(getBooleanFromAttributeValue(newValue));}}
sanitizeContentChanged(newValue){if(this._html!==null){ this._html.setSanitizeContent(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._html!==null){ this._html.setVisible(getBooleanFromAttributeValue(newValue));}}
afterRenderingChanged(newValue){if(this._html!==null){ this._html.attachAfterRendering(newValue);}}
busyChanged(newValue){if(this._html!==null){ this._html.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._html!==null){ this._html.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._html!==null){ this._html.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._html!==null){ this._html.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._html!==null){ this._html.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._html!==null){ this._html.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._html!==null){ this._html.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._html!==null){ this._html.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._html!==null){ this._html.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._html!==null){ this._html.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._html!==null){ this._html.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-icon')
@inject(Element)
export class Ui5Icon extends Ui5Control{
        _icon = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() src = null;
@bindable() size = null;
@bindable() color = null;
@bindable() hoverColor = null;
@bindable() activeColor = null;
@bindable() width = null;
@bindable() height = null;
@bindable() backgroundColor = null;
@bindable() hoverBackgroundColor = null;
@bindable() activeBackgroundColor = null;
@bindable() decorative = true;
@bindable() useIconTooltip = true;
@bindable() alt = null;
@bindable() noTabStop = false;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_icon')
        get UIElement() {
            return this._icon;
          }
        fillProperties(params){
                                        params.src = this.src;
params.size = this.size;
params.color = this.color;
params.hoverColor = this.hoverColor;
params.activeColor = this.activeColor;
params.width = this.width;
params.height = this.height;
params.backgroundColor = this.backgroundColor;
params.hoverBackgroundColor = this.hoverBackgroundColor;
params.activeBackgroundColor = this.activeBackgroundColor;
params.decorative = getBooleanFromAttributeValue(this.decorative);
params.useIconTooltip = getBooleanFromAttributeValue(this.useIconTooltip);
params.alt = this.alt;
params.noTabStop = getBooleanFromAttributeValue(this.noTabStop);
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._icon = new sap.ui.core.Icon(this.ui5Id, params);
        else
          this._icon = new sap.ui.core.Icon(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icon.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._icon, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._icon, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._icon, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icon.placeAt)
                                                                this._icon.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icon.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._icon, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._icon.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._icon.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._icon.indexOfCustomData(afterElement); if (_index)this._icon.insertCustomData(child, _index + 1); else this._icon.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._icon.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._icon.indexOfDependent(afterElement); if (_index)this._icon.insertDependent(child, _index + 1); else this._icon.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._icon.destroyTooltip(child); }
if (relation == 'customdata') {  this._icon.removeCustomData(child);}
if (relation == 'layoutdata') {  this._icon.destroyLayoutData(child); }
if (relation == 'dependents') {  this._icon.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    srcChanged(newValue){if(this._icon!==null){ this._icon.setSrc(newValue);}}
sizeChanged(newValue){if(this._icon!==null){ this._icon.setSize(newValue);}}
colorChanged(newValue){if(this._icon!==null){ this._icon.setColor(newValue);}}
hoverColorChanged(newValue){if(this._icon!==null){ this._icon.setHoverColor(newValue);}}
activeColorChanged(newValue){if(this._icon!==null){ this._icon.setActiveColor(newValue);}}
widthChanged(newValue){if(this._icon!==null){ this._icon.setWidth(newValue);}}
heightChanged(newValue){if(this._icon!==null){ this._icon.setHeight(newValue);}}
backgroundColorChanged(newValue){if(this._icon!==null){ this._icon.setBackgroundColor(newValue);}}
hoverBackgroundColorChanged(newValue){if(this._icon!==null){ this._icon.setHoverBackgroundColor(newValue);}}
activeBackgroundColorChanged(newValue){if(this._icon!==null){ this._icon.setActiveBackgroundColor(newValue);}}
decorativeChanged(newValue){if(this._icon!==null){ this._icon.setDecorative(getBooleanFromAttributeValue(newValue));}}
useIconTooltipChanged(newValue){if(this._icon!==null){ this._icon.setUseIconTooltip(getBooleanFromAttributeValue(newValue));}}
altChanged(newValue){if(this._icon!==null){ this._icon.setAlt(newValue);}}
noTabStopChanged(newValue){if(this._icon!==null){ this._icon.setNoTabStop(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._icon!==null){ this._icon.attachPress(newValue);}}
busyChanged(newValue){if(this._icon!==null){ this._icon.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._icon!==null){ this._icon.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._icon!==null){ this._icon.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._icon!==null){ this._icon.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._icon!==null){ this._icon.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._icon!==null){ this._icon.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._icon!==null){ this._icon.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._icon!==null){ this._icon.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._icon!==null){ this._icon.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._icon!==null){ this._icon.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._icon!==null){ this._icon.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-icon-tab-bar')
@inject(Element)
export class Ui5IconTabBar extends Ui5Control{
        _icontabbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() expandable = true;
@bindable() expanded = true;
@bindable() selectedKey = null;
@bindable() upperCase = false;
@bindable() stretchContentHeight = false;
@bindable() applyContentPadding = true;
@bindable() backgroundDesign = 'Solid';
@bindable() headerMode = 'Standard';
@bindable() showOverflowSelectList = false;
@bindable() headerBackgroundDesign = 'Solid';
@bindable() enableTabReordering = false;
@bindable() select = this.defaultFunc;
@bindable() expand = this.defaultFunc;
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
        @computedFrom('_icontabbar')
        get UIElement() {
            return this._icontabbar;
          }
        fillProperties(params){
                                        params.expandable = getBooleanFromAttributeValue(this.expandable);
params.expanded = getBooleanFromAttributeValue(this.expanded);
params.selectedKey = this.selectedKey;
params.upperCase = getBooleanFromAttributeValue(this.upperCase);
params.stretchContentHeight = getBooleanFromAttributeValue(this.stretchContentHeight);
params.applyContentPadding = getBooleanFromAttributeValue(this.applyContentPadding);
params.backgroundDesign = this.backgroundDesign;
params.headerMode = this.headerMode;
params.showOverflowSelectList = getBooleanFromAttributeValue(this.showOverflowSelectList);
params.headerBackgroundDesign = this.headerBackgroundDesign;
params.enableTabReordering = getBooleanFromAttributeValue(this.enableTabReordering);
params.select = this.select==null ? this.defaultFunc: this.select;
params.expand = this.expand==null ? this.defaultFunc: this.expand;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._icontabbar = new sap.m.IconTabBar(this.ui5Id, params);
        else
          this._icontabbar = new sap.m.IconTabBar(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icontabbar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._icontabbar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._icontabbar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._icontabbar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icontabbar.placeAt)
                                                                this._icontabbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._icontabbar.attachSelect((event) => { that.selectedKey = event.mParameters.key;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icontabbar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._icontabbar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._icontabbar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._icontabbar.indexOfItem(afterElement); if (_index)this._icontabbar.insertItem(child, _index + 1); else this._icontabbar.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._icontabbar.indexOfContent(afterElement); if (_index)this._icontabbar.insertContent(child, _index + 1); else this._icontabbar.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._icontabbar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._icontabbar.indexOfCustomData(afterElement); if (_index)this._icontabbar.insertCustomData(child, _index + 1); else this._icontabbar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._icontabbar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._icontabbar.indexOfDependent(afterElement); if (_index)this._icontabbar.insertDependent(child, _index + 1); else this._icontabbar.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._icontabbar.removeItem(child);}
if (relation == 'content') {  this._icontabbar.removeContent(child);}
if (relation == 'tooltip') {  this._icontabbar.destroyTooltip(child); }
if (relation == 'customdata') {  this._icontabbar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._icontabbar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._icontabbar.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    expandableChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setExpandable(getBooleanFromAttributeValue(newValue));}}
expandedChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setExpanded(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setSelectedKey(newValue);}}
upperCaseChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setUpperCase(getBooleanFromAttributeValue(newValue));}}
stretchContentHeightChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setStretchContentHeight(getBooleanFromAttributeValue(newValue));}}
applyContentPaddingChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setApplyContentPadding(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBackgroundDesign(newValue);}}
headerModeChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setHeaderMode(newValue);}}
showOverflowSelectListChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));}}
headerBackgroundDesignChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setHeaderBackgroundDesign(newValue);}}
enableTabReorderingChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setEnableTabReordering(getBooleanFromAttributeValue(newValue));}}
selectChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachSelect(newValue);}}
expandChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachExpand(newValue);}}
busyChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-icon-tab-filter')
@inject(Element)
export class Ui5IconTabFilter extends Ui5Item{
        _icontabfilter = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() count = '';
@bindable() showAll = false;
@bindable() icon = '';
@bindable() iconColor = 'Default';
@bindable() iconDensityAware = true;
@bindable() visible = true;
@bindable() design = 'Vertical';
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_icontabfilter')
        get UIElement() {
            return this._icontabfilter;
          }
        fillProperties(params){
                                        params.count = this.count;
params.showAll = getBooleanFromAttributeValue(this.showAll);
params.icon = this.icon;
params.iconColor = this.iconColor;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.visible = getBooleanFromAttributeValue(this.visible);
params.design = this.design;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._icontabfilter = new sap.m.IconTabFilter(this.ui5Id, params);
        else
          this._icontabfilter = new sap.m.IconTabFilter(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icontabfilter.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._icontabfilter, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._icontabfilter, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._icontabfilter, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icontabfilter.placeAt)
                                                                this._icontabfilter.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icontabfilter.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._icontabfilter, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._icontabfilter.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._icontabfilter.indexOfContent(afterElement); if (_index)this._icontabfilter.insertContent(child, _index + 1); else this._icontabfilter.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._icontabfilter.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._icontabfilter.indexOfCustomData(afterElement); if (_index)this._icontabfilter.insertCustomData(child, _index + 1); else this._icontabfilter.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._icontabfilter.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._icontabfilter.indexOfDependent(afterElement); if (_index)this._icontabfilter.insertDependent(child, _index + 1); else this._icontabfilter.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._icontabfilter.removeContent(child);}
if (relation == 'tooltip') {  this._icontabfilter.destroyTooltip(child); }
if (relation == 'customdata') {  this._icontabfilter.removeCustomData(child);}
if (relation == 'layoutdata') {  this._icontabfilter.destroyLayoutData(child); }
if (relation == 'dependents') {  this._icontabfilter.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    countChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setCount(newValue);}}
showAllChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setShowAll(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setIcon(newValue);}}
iconColorChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setIconColor(newValue);}}
iconDensityAwareChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setVisible(getBooleanFromAttributeValue(newValue));}}
designChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setDesign(newValue);}}
textChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setText(newValue);}}
enabledChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setTextDirection(newValue);}}
keyChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-image-content')
@inject(Element)
export class Ui5ImageContent extends Ui5Control{
        _imagecontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() src = null;
@bindable() description = null;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_imagecontent')
        get UIElement() {
            return this._imagecontent;
          }
        fillProperties(params){
                                        params.src = this.src;
params.description = this.description;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._imagecontent = new sap.m.ImageContent(this.ui5Id, params);
        else
          this._imagecontent = new sap.m.ImageContent(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._imagecontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._imagecontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._imagecontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._imagecontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._imagecontent.placeAt)
                                                                this._imagecontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._imagecontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._imagecontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._imagecontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._imagecontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._imagecontent.indexOfCustomData(afterElement); if (_index)this._imagecontent.insertCustomData(child, _index + 1); else this._imagecontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._imagecontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._imagecontent.indexOfDependent(afterElement); if (_index)this._imagecontent.insertDependent(child, _index + 1); else this._imagecontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._imagecontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._imagecontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._imagecontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._imagecontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    srcChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setSrc(newValue);}}
descriptionChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setDescription(newValue);}}
pressChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachPress(newValue);}}
busyChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._imagecontent!==null){ this._imagecontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-input')
@inject(Element)
export class Ui5Input extends Ui5InputBase{
        _input = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() type = 'Text';
@bindable() maxLength = 0;
@bindable() showValueHelp = false;
@bindable() showSuggestion = false;
@bindable() valueHelpOnly = false;
@bindable() filterSuggests = true;
@bindable() maxSuggestionWidth = null;
@bindable() startSuggestion = 1;
@bindable() showTableSuggestionValueHelp = true;
@bindable() description = null;
@bindable() fieldWidth = '50%';
@bindable() valueLiveUpdate = false;
@bindable() selectedKey = '';
@bindable() textFormatMode = 'Value';
@bindable() textFormatter = '';
@bindable() suggestionRowValidator = '';
@bindable() enableSuggestionsHighlighting = true;
@bindable() liveChange = this.defaultFunc;
@bindable() valueHelpRequest = this.defaultFunc;
@bindable() suggest = this.defaultFunc;
@bindable() suggestionItemSelected = this.defaultFunc;
@bindable() submit = this.defaultFunc;
/* inherited from sap.m.InputBase*/
@bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_input')
        get UIElement() {
            return this._input;
          }
        fillProperties(params){
                                        params.type = this.type;
params.maxLength = this.maxLength?parseInt(this.maxLength):0;
params.showValueHelp = getBooleanFromAttributeValue(this.showValueHelp);
params.showSuggestion = getBooleanFromAttributeValue(this.showSuggestion);
params.valueHelpOnly = getBooleanFromAttributeValue(this.valueHelpOnly);
params.filterSuggests = getBooleanFromAttributeValue(this.filterSuggests);
params.maxSuggestionWidth = this.maxSuggestionWidth;
params.startSuggestion = this.startSuggestion?parseInt(this.startSuggestion):0;
params.showTableSuggestionValueHelp = getBooleanFromAttributeValue(this.showTableSuggestionValueHelp);
params.description = this.description;
params.fieldWidth = this.fieldWidth;
params.valueLiveUpdate = getBooleanFromAttributeValue(this.valueLiveUpdate);
params.selectedKey = this.selectedKey;
params.textFormatMode = this.textFormatMode;
params.textFormatter = this.textFormatter;
params.suggestionRowValidator = this.suggestionRowValidator;
params.enableSuggestionsHighlighting = getBooleanFromAttributeValue(this.enableSuggestionsHighlighting);
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.valueHelpRequest = this.valueHelpRequest==null ? this.defaultFunc: this.valueHelpRequest;
params.suggest = this.suggest==null ? this.defaultFunc: this.suggest;
params.suggestionItemSelected = this.suggestionItemSelected==null ? this.defaultFunc: this.suggestionItemSelected;
params.submit = this.submit==null ? this.defaultFunc: this.submit;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._input = new sap.m.Input(this.ui5Id, params);
        else
          this._input = new sap.m.Input(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._input.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._input, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._input, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._input, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._input.placeAt)
                                                                this._input.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._input.attachChange((event) => { that.value = event.mParameters.value;; });
this._input.attachLiveChange((event) => { if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {that.value = event.mParameters.value;}; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._input.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._input, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._input.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'suggestionitems') { var _index = null; if (afterElement) _index = this._input.indexOfSuggestionItem(afterElement); if (_index)this._input.insertSuggestionItem(child, _index + 1); else this._input.addSuggestionItem(child, 0);  return elem.localName; }
if (elem.localName == 'suggestioncolumns') { var _index = null; if (afterElement) _index = this._input.indexOfSuggestionColumn(afterElement); if (_index)this._input.insertSuggestionColumn(child, _index + 1); else this._input.addSuggestionColumn(child, 0);  return elem.localName; }
if (elem.localName == 'suggestionrows') { var _index = null; if (afterElement) _index = this._input.indexOfSuggestionRow(afterElement); if (_index)this._input.insertSuggestionRow(child, _index + 1); else this._input.addSuggestionRow(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._input.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._input.indexOfCustomData(afterElement); if (_index)this._input.insertCustomData(child, _index + 1); else this._input.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._input.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._input.indexOfDependent(afterElement); if (_index)this._input.insertDependent(child, _index + 1); else this._input.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'suggestionitems') {  this._input.removeSuggestionItem(child);}
if (relation == 'suggestioncolumns') {  this._input.removeSuggestionColumn(child);}
if (relation == 'suggestionrows') {  this._input.removeSuggestionRow(child);}
if (relation == 'tooltip') {  this._input.destroyTooltip(child); }
if (relation == 'customdata') {  this._input.removeCustomData(child);}
if (relation == 'layoutdata') {  this._input.destroyLayoutData(child); }
if (relation == 'dependents') {  this._input.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._input!==null){ this._input.setType(newValue);}}
maxLengthChanged(newValue){if(this._input!==null){ this._input.setMaxLength(newValue);}}
showValueHelpChanged(newValue){if(this._input!==null){ this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));}}
showSuggestionChanged(newValue){if(this._input!==null){ this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));}}
valueHelpOnlyChanged(newValue){if(this._input!==null){ this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));}}
filterSuggestsChanged(newValue){if(this._input!==null){ this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));}}
maxSuggestionWidthChanged(newValue){if(this._input!==null){ this._input.setMaxSuggestionWidth(newValue);}}
startSuggestionChanged(newValue){if(this._input!==null){ this._input.setStartSuggestion(newValue);}}
showTableSuggestionValueHelpChanged(newValue){if(this._input!==null){ this._input.setShowTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));}}
descriptionChanged(newValue){if(this._input!==null){ this._input.setDescription(newValue);}}
fieldWidthChanged(newValue){if(this._input!==null){ this._input.setFieldWidth(newValue);}}
valueLiveUpdateChanged(newValue){if(this._input!==null){ this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(this._input!==null){ this._input.setSelectedKey(newValue);}}
textFormatModeChanged(newValue){if(this._input!==null){ this._input.setTextFormatMode(newValue);}}
textFormatterChanged(newValue){if(this._input!==null){ this._input.setTextFormatter(newValue);}}
suggestionRowValidatorChanged(newValue){if(this._input!==null){ this._input.setSuggestionRowValidator(newValue);}}
enableSuggestionsHighlightingChanged(newValue){if(this._input!==null){ this._input.setEnableSuggestionsHighlighting(getBooleanFromAttributeValue(newValue));}}
liveChangeChanged(newValue){if(this._input!==null){ this._input.attachLiveChange(newValue);}}
valueHelpRequestChanged(newValue){if(this._input!==null){ this._input.attachValueHelpRequest(newValue);}}
suggestChanged(newValue){if(this._input!==null){ this._input.attachSuggest(newValue);}}
suggestionItemSelectedChanged(newValue){if(this._input!==null){ this._input.attachSuggestionItemSelected(newValue);}}
submitChanged(newValue){if(this._input!==null){ this._input.attachSubmit(newValue);}}
valueChanged(newValue){if(this._input!==null){ this._input.setValue(newValue);}}
widthChanged(newValue){if(this._input!==null){ this._input.setWidth(newValue);}}
enabledChanged(newValue){if(this._input!==null){ this._input.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._input!==null){ this._input.setValueState(newValue);}}
nameChanged(newValue){if(this._input!==null){ this._input.setName(newValue);}}
placeholderChanged(newValue){if(this._input!==null){ this._input.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._input!==null){ this._input.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._input!==null){ this._input.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._input!==null){ this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._input!==null){ this._input.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._input!==null){ this._input.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._input!==null){ this._input.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._input!==null){ this._input.attachChange(newValue);}}
busyChanged(newValue){if(this._input!==null){ this._input.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._input!==null){ this._input.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._input!==null){ this._input.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._input!==null){ this._input.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._input!==null){ this._input.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._input!==null){ this._input.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._input!==null){ this._input.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._input!==null){ this._input.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._input!==null){ this._input.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._input!==null){ this._input.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._input!==null){ this._input.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-input-base')
@inject(Element)
export class Ui5InputBase extends Ui5Control{
        _inputbase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_inputbase')
        get UIElement() {
            return this._inputbase;
          }
        fillProperties(params){
                                        params.value = this.value;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.valueState = this.valueState;
params.name = this.name;
params.placeholder = this.placeholder;
params.editable = getBooleanFromAttributeValue(this.editable);
params.valueStateText = this.valueStateText;
params.showValueStateMessage = getBooleanFromAttributeValue(this.showValueStateMessage);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.required = getBooleanFromAttributeValue(this.required);
params.change = this.change==null ? this.defaultFunc: this.change;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._inputbase = new sap.m.InputBase(this.ui5Id, params);
        else
          this._inputbase = new sap.m.InputBase(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._inputbase.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._inputbase, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._inputbase, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._inputbase, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._inputbase.placeAt)
                                                                this._inputbase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._inputbase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._inputbase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._inputbase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._inputbase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._inputbase.indexOfCustomData(afterElement); if (_index)this._inputbase.insertCustomData(child, _index + 1); else this._inputbase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._inputbase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._inputbase.indexOfDependent(afterElement); if (_index)this._inputbase.insertDependent(child, _index + 1); else this._inputbase.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._inputbase.destroyTooltip(child); }
if (relation == 'customdata') {  this._inputbase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._inputbase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._inputbase.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    valueChanged(newValue){if(this._inputbase!==null){ this._inputbase.setValue(newValue);}}
widthChanged(newValue){if(this._inputbase!==null){ this._inputbase.setWidth(newValue);}}
enabledChanged(newValue){if(this._inputbase!==null){ this._inputbase.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._inputbase!==null){ this._inputbase.setValueState(newValue);}}
nameChanged(newValue){if(this._inputbase!==null){ this._inputbase.setName(newValue);}}
placeholderChanged(newValue){if(this._inputbase!==null){ this._inputbase.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._inputbase!==null){ this._inputbase.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._inputbase!==null){ this._inputbase.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._inputbase!==null){ this._inputbase.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._inputbase!==null){ this._inputbase.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._inputbase!==null){ this._inputbase.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._inputbase!==null){ this._inputbase.setRequired(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachChange(newValue);}}
busyChanged(newValue){if(this._inputbase!==null){ this._inputbase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._inputbase!==null){ this._inputbase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._inputbase!==null){ this._inputbase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._inputbase!==null){ this._inputbase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._inputbase!==null){ this._inputbase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._inputbase!==null){ this._inputbase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-item')
@inject(Element)
export class Ui5Item extends Ui5Element{
        _item = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_item')
        get UIElement() {
            return this._item;
          }
        fillProperties(params){
                                        params.text = this.text;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.textDirection = this.textDirection;
params.key = this.key;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._item = new sap.ui.core.Item(this.ui5Id, params);
        else
          this._item = new sap.ui.core.Item(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._item.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._item, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._item, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._item, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._item.placeAt)
                                                                this._item.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._item.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._item, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._item.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._item.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._item.indexOfCustomData(afterElement); if (_index)this._item.insertCustomData(child, _index + 1); else this._item.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._item.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._item.indexOfDependent(afterElement); if (_index)this._item.insertDependent(child, _index + 1); else this._item.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._item.destroyTooltip(child); }
if (relation == 'customdata') {  this._item.removeCustomData(child);}
if (relation == 'layoutdata') {  this._item.destroyLayoutData(child); }
if (relation == 'dependents') {  this._item.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._item!==null){ this._item.setText(newValue);}}
enabledChanged(newValue){if(this._item!==null){ this._item.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._item!==null){ this._item.setTextDirection(newValue);}}
keyChanged(newValue){if(this._item!==null){ this._item.setKey(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._item!==null){ this._item.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._item!==null){ this._item.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._item!==null){ this._item.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._item!==null){ this._item.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._item!==null){ this._item.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-label')
@inject(Element)
export class Ui5Label extends Ui5Control{
        _label = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() design = 'Standard';
@bindable() text = null;
@bindable() textAlign = 'Begin';
@bindable() textDirection = 'Inherit';
@bindable() width = '';
@bindable() required = false;
@bindable() displayOnly = false;
@bindable() wrapping = false;
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
        @computedFrom('_label')
        get UIElement() {
            return this._label;
          }
        fillProperties(params){
                                        params.design = this.design;
params.text = this.text;
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.width = this.width;
params.required = getBooleanFromAttributeValue(this.required);
params.displayOnly = getBooleanFromAttributeValue(this.displayOnly);
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._label = new sap.m.Label(this.ui5Id, params);
        else
          this._label = new sap.m.Label(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._label.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._label, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._label, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._label, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._label.placeAt)
                                                                this._label.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._label.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._label, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._label.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._label.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._label.indexOfCustomData(afterElement); if (_index)this._label.insertCustomData(child, _index + 1); else this._label.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._label.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._label.indexOfDependent(afterElement); if (_index)this._label.insertDependent(child, _index + 1); else this._label.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._label.destroyTooltip(child); }
if (relation == 'customdata') {  this._label.removeCustomData(child);}
if (relation == 'layoutdata') {  this._label.destroyLayoutData(child); }
if (relation == 'dependents') {  this._label.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    designChanged(newValue){if(this._label!==null){ this._label.setDesign(newValue);}}
textChanged(newValue){if(this._label!==null){ this._label.setText(newValue);}}
textAlignChanged(newValue){if(this._label!==null){ this._label.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._label!==null){ this._label.setTextDirection(newValue);}}
widthChanged(newValue){if(this._label!==null){ this._label.setWidth(newValue);}}
requiredChanged(newValue){if(this._label!==null){ this._label.setRequired(getBooleanFromAttributeValue(newValue));}}
displayOnlyChanged(newValue){if(this._label!==null){ this._label.setDisplayOnly(getBooleanFromAttributeValue(newValue));}}
wrappingChanged(newValue){if(this._label!==null){ this._label.setWrapping(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._label!==null){ this._label.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._label!==null){ this._label.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._label!==null){ this._label.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._label!==null){ this._label.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._label!==null){ this._label.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._label!==null){ this._label.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._label!==null){ this._label.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._label!==null){ this._label.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._label!==null){ this._label.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._label!==null){ this._label.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._label!==null){ this._label.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-layout-data')
@inject(Element)
export class Ui5LayoutData extends Ui5Element{
        _layoutdata = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_layoutdata')
        get UIElement() {
            return this._layoutdata;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._layoutdata = new sap.ui.core.LayoutData(this.ui5Id, params);
        else
          this._layoutdata = new sap.ui.core.LayoutData(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._layoutdata.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._layoutdata, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._layoutdata, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._layoutdata, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._layoutdata.placeAt)
                                                                this._layoutdata.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._layoutdata.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._layoutdata, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._layoutdata.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._layoutdata.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._layoutdata.indexOfCustomData(afterElement); if (_index)this._layoutdata.insertCustomData(child, _index + 1); else this._layoutdata.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._layoutdata.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._layoutdata.indexOfDependent(afterElement); if (_index)this._layoutdata.insertDependent(child, _index + 1); else this._layoutdata.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._layoutdata.destroyTooltip(child); }
if (relation == 'customdata') {  this._layoutdata.removeCustomData(child);}
if (relation == 'layoutdata') {  this._layoutdata.destroyLayoutData(child); }
if (relation == 'dependents') {  this._layoutdata.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-link')
@inject(Element)
export class Ui5Link extends Ui5Control{
        _link = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = '';
@bindable() enabled = true;
@bindable() target = null;
@bindable() width = null;
@bindable() href = null;
@bindable() wrapping = false;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() subtle = false;
@bindable() emphasized = false;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_link')
        get UIElement() {
            return this._link;
          }
        fillProperties(params){
                                        params.text = this.text;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.target = this.target;
params.width = this.width;
params.href = this.href;
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.subtle = getBooleanFromAttributeValue(this.subtle);
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._link = new sap.m.Link(this.ui5Id, params);
        else
          this._link = new sap.m.Link(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._link.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._link, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._link, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._link, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._link.placeAt)
                                                                this._link.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._link.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._link, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._link.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._link.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._link.indexOfCustomData(afterElement); if (_index)this._link.insertCustomData(child, _index + 1); else this._link.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._link.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._link.indexOfDependent(afterElement); if (_index)this._link.insertDependent(child, _index + 1); else this._link.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._link.destroyTooltip(child); }
if (relation == 'customdata') {  this._link.removeCustomData(child);}
if (relation == 'layoutdata') {  this._link.destroyLayoutData(child); }
if (relation == 'dependents') {  this._link.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._link!==null){ this._link.setText(newValue);}}
enabledChanged(newValue){if(this._link!==null){ this._link.setEnabled(getBooleanFromAttributeValue(newValue));}}
targetChanged(newValue){if(this._link!==null){ this._link.setTarget(newValue);}}
widthChanged(newValue){if(this._link!==null){ this._link.setWidth(newValue);}}
hrefChanged(newValue){if(this._link!==null){ this._link.setHref(newValue);}}
wrappingChanged(newValue){if(this._link!==null){ this._link.setWrapping(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._link!==null){ this._link.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._link!==null){ this._link.setTextDirection(newValue);}}
subtleChanged(newValue){if(this._link!==null){ this._link.setSubtle(getBooleanFromAttributeValue(newValue));}}
emphasizedChanged(newValue){if(this._link!==null){ this._link.setEmphasized(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._link!==null){ this._link.attachPress(newValue);}}
busyChanged(newValue){if(this._link!==null){ this._link.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._link!==null){ this._link.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._link!==null){ this._link.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._link!==null){ this._link.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._link!==null){ this._link.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._link!==null){ this._link.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._link!==null){ this._link.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._link!==null){ this._link.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._link!==null){ this._link.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._link!==null){ this._link.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._link!==null){ this._link.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
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
@customElement('ui5-list-base')
@inject(Element)
export class Ui5ListBase extends Ui5Control{
        _listbase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
params.selectionChange = this.selectionChange==null ? this.defaultFunc: this.selectionChange;
params.delete = this.delete==null ? this.defaultFunc: this.delete;
params.swipe = this.swipe==null ? this.defaultFunc: this.swipe;
params.updateStarted = this.updateStarted==null ? this.defaultFunc: this.updateStarted;
params.updateFinished = this.updateFinished==null ? this.defaultFunc: this.updateFinished;
params.itemPress = this.itemPress==null ? this.defaultFunc: this.itemPress;
            
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listbase.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._listbase, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
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
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._listbase.indexOfItem(afterElement); if (_index)this._listbase.insertItem(child, _index + 1); else this._listbase.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'swipecontent') { this._listbase.setSwipeContent(child); return elem.localName;}
if (elem.localName == 'headertoolbar') { this._listbase.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._listbase.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._listbase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._listbase.indexOfCustomData(afterElement); if (_index)this._listbase.insertCustomData(child, _index + 1); else this._listbase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._listbase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._listbase.indexOfDependent(afterElement); if (_index)this._listbase.insertDependent(child, _index + 1); else this._listbase.addDependent(child, 0);  return elem.localName; }

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
if (relation == 'tooltip') {  this._listbase.destroyTooltip(child); }
if (relation == 'customdata') {  this._listbase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._listbase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._listbase.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    insetChanged(newValue){if(this._listbase!==null){ this._listbase.setInset(getBooleanFromAttributeValue(newValue));}}
headerTextChanged(newValue){if(this._listbase!==null){ this._listbase.setHeaderText(newValue);}}
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
selectionChangeChanged(newValue){if(this._listbase!==null){ this._listbase.attachSelectionChange(newValue);}}
deleteChanged(newValue){if(this._listbase!==null){ this._listbase.attachDelete(newValue);}}
swipeChanged(newValue){if(this._listbase!==null){ this._listbase.attachSwipe(newValue);}}
updateStartedChanged(newValue){if(this._listbase!==null){ this._listbase.attachUpdateStarted(newValue);}}
updateFinishedChanged(newValue){if(this._listbase!==null){ this._listbase.attachUpdateFinished(newValue);}}
itemPressChanged(newValue){if(this._listbase!==null){ this._listbase.attachItemPress(newValue);}}
busyChanged(newValue){if(this._listbase!==null){ this._listbase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._listbase!==null){ this._listbase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._listbase!==null){ this._listbase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._listbase!==null){ this._listbase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._listbase!==null){ this._listbase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._listbase!==null){ this._listbase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._listbase!==null){ this._listbase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._listbase!==null){ this._listbase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._listbase!==null){ this._listbase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._listbase!==null){ this._listbase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._listbase!==null){ this._listbase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-list-item')
@inject(Element)
export class Ui5ListItem extends Ui5Item{
        _listitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() icon = null;
@bindable() additionalText = null;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_listitem')
        get UIElement() {
            return this._listitem;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.additionalText = this.additionalText;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._listitem = new sap.ui.core.ListItem(this.ui5Id, params);
        else
          this._listitem = new sap.ui.core.ListItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._listitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._listitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._listitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._listitem.placeAt)
                                                                this._listitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._listitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._listitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._listitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._listitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._listitem.indexOfCustomData(afterElement); if (_index)this._listitem.insertCustomData(child, _index + 1); else this._listitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._listitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._listitem.indexOfDependent(afterElement); if (_index)this._listitem.insertDependent(child, _index + 1); else this._listitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._listitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._listitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._listitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._listitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(this._listitem!==null){ this._listitem.setIcon(newValue);}}
additionalTextChanged(newValue){if(this._listitem!==null){ this._listitem.setAdditionalText(newValue);}}
textChanged(newValue){if(this._listitem!==null){ this._listitem.setText(newValue);}}
enabledChanged(newValue){if(this._listitem!==null){ this._listitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._listitem!==null){ this._listitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._listitem!==null){ this._listitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._listitem!==null){ this._listitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._listitem!==null){ this._listitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._listitem!==null){ this._listitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._listitem!==null){ this._listitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._listitem!==null){ this._listitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-column-list-item')
@inject(Element)
export class Ui5ColumnListItem extends Ui5ListItemBase{
        _columnlistitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() vAlign = 'Inherit';
/* inherited from sap.m.ListItemBase*/
@bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_columnlistitem')
        get UIElement() {
            return this._columnlistitem;
          }
        fillProperties(params){
                                        params.vAlign = this.vAlign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._columnlistitem = new sap.m.ColumnListItem(this.ui5Id, params);
        else
          this._columnlistitem = new sap.m.ColumnListItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._columnlistitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._columnlistitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._columnlistitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._columnlistitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._columnlistitem.placeAt)
                                                                this._columnlistitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._columnlistitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._columnlistitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._columnlistitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'cells') { var _index = null; if (afterElement) _index = this._columnlistitem.indexOfCell(afterElement); if (_index)this._columnlistitem.insertCell(child, _index + 1); else this._columnlistitem.addCell(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._columnlistitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._columnlistitem.indexOfCustomData(afterElement); if (_index)this._columnlistitem.insertCustomData(child, _index + 1); else this._columnlistitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._columnlistitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._columnlistitem.indexOfDependent(afterElement); if (_index)this._columnlistitem.insertDependent(child, _index + 1); else this._columnlistitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'cells') {  this._columnlistitem.removeCell(child);}
if (relation == 'tooltip') {  this._columnlistitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._columnlistitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._columnlistitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._columnlistitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    vAlignChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVAlign(newValue);}}
typeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setType(newValue);}}
visibleChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-list-item-base')
@inject(Element)
export class Ui5ListItemBase extends Ui5Control{
        _listitembase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_listitembase')
        get UIElement() {
            return this._listitembase;
          }
        fillProperties(params){
                                        params.type = this.type;
params.visible = getBooleanFromAttributeValue(this.visible);
params.unread = getBooleanFromAttributeValue(this.unread);
params.selected = getBooleanFromAttributeValue(this.selected);
params.counter = this.counter?parseInt(this.counter):0;
params.highlight = this.highlight;
params.press = this.press==null ? this.defaultFunc: this.press;
params.detailPress = this.detailPress==null ? this.defaultFunc: this.detailPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._listitembase = new sap.m.ListItemBase(this.ui5Id, params);
        else
          this._listitembase = new sap.m.ListItemBase(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listitembase.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._listitembase, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._listitembase, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._listitembase, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._listitembase.placeAt)
                                                                this._listitembase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._listitembase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._listitembase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._listitembase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._listitembase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._listitembase.indexOfCustomData(afterElement); if (_index)this._listitembase.insertCustomData(child, _index + 1); else this._listitembase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._listitembase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._listitembase.indexOfDependent(afterElement); if (_index)this._listitembase.insertDependent(child, _index + 1); else this._listitembase.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._listitembase.destroyTooltip(child); }
if (relation == 'customdata') {  this._listitembase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._listitembase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._listitembase.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._listitembase!==null){ this._listitembase.setType(newValue);}}
visibleChanged(newValue){if(this._listitembase!==null){ this._listitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._listitembase!==null){ this._listitembase.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._listitembase!==null){ this._listitembase.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._listitembase!==null){ this._listitembase.setCounter(newValue);}}
highlightChanged(newValue){if(this._listitembase!==null){ this._listitembase.setHighlight(newValue);}}
pressChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachPress(newValue);}}
detailPressChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._listitembase!==null){ this._listitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._listitembase!==null){ this._listitembase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-managed-object')
@inject(Element)
export class Ui5ManagedObject extends Ui5EventProvider{
        _managedobject = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_managedobject')
        get UIElement() {
            return this._managedobject;
          }
        fillProperties(params){
                                        params.validationSuccess = this.validationSuccess==null ? this.defaultFunc: this.validationSuccess;
params.validationError = this.validationError==null ? this.defaultFunc: this.validationError;
params.parseError = this.parseError==null ? this.defaultFunc: this.parseError;
params.formatError = this.formatError==null ? this.defaultFunc: this.formatError;
params.modelContextChange = this.modelContextChange==null ? this.defaultFunc: this.modelContextChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._managedobject = new sap.ui.base.ManagedObject(this.ui5Id, params);
        else
          this._managedobject = new sap.ui.base.ManagedObject(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._managedobject.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._managedobject, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._managedobject, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._managedobject, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._managedobject.placeAt)
                                                                this._managedobject.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._managedobject.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._managedobject, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._managedobject.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 
           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               
      }
      catch(err){}
                                                                            }
    validationSuccessChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._managedobject!==null){ this._managedobject.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-mask-input')
@inject(Element)
export class Ui5MaskInput extends Ui5InputBase{
        _maskinput = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() placeholderSymbol = '_';
@bindable() mask = null;
/* inherited from sap.m.InputBase*/
@bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() valueState = 'None';
@bindable() name = null;
@bindable() placeholder = null;
@bindable() editable = true;
@bindable() valueStateText = null;
@bindable() showValueStateMessage = true;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() required = false;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_maskinput')
        get UIElement() {
            return this._maskinput;
          }
        fillProperties(params){
                                        params.placeholderSymbol = this.placeholderSymbol;
params.mask = this.mask;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._maskinput = new sap.m.MaskInput(this.ui5Id, params);
        else
          this._maskinput = new sap.m.MaskInput(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._maskinput.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._maskinput, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._maskinput, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._maskinput, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._maskinput.placeAt)
                                                                this._maskinput.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._maskinput.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._maskinput, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._maskinput.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'rules') { var _index = null; if (afterElement) _index = this._maskinput.indexOfRule(afterElement); if (_index)this._maskinput.insertRule(child, _index + 1); else this._maskinput.addRule(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._maskinput.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._maskinput.indexOfCustomData(afterElement); if (_index)this._maskinput.insertCustomData(child, _index + 1); else this._maskinput.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._maskinput.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._maskinput.indexOfDependent(afterElement); if (_index)this._maskinput.insertDependent(child, _index + 1); else this._maskinput.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'rules') {  this._maskinput.removeRule(child);}
if (relation == 'tooltip') {  this._maskinput.destroyTooltip(child); }
if (relation == 'customdata') {  this._maskinput.removeCustomData(child);}
if (relation == 'layoutdata') {  this._maskinput.destroyLayoutData(child); }
if (relation == 'dependents') {  this._maskinput.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    placeholderSymbolChanged(newValue){if(this._maskinput!==null){ this._maskinput.setPlaceholderSymbol(newValue);}}
maskChanged(newValue){if(this._maskinput!==null){ this._maskinput.setMask(newValue);}}
valueChanged(newValue){if(this._maskinput!==null){ this._maskinput.setValue(newValue);}}
widthChanged(newValue){if(this._maskinput!==null){ this._maskinput.setWidth(newValue);}}
enabledChanged(newValue){if(this._maskinput!==null){ this._maskinput.setEnabled(getBooleanFromAttributeValue(newValue));}}
valueStateChanged(newValue){if(this._maskinput!==null){ this._maskinput.setValueState(newValue);}}
nameChanged(newValue){if(this._maskinput!==null){ this._maskinput.setName(newValue);}}
placeholderChanged(newValue){if(this._maskinput!==null){ this._maskinput.setPlaceholder(newValue);}}
editableChanged(newValue){if(this._maskinput!==null){ this._maskinput.setEditable(getBooleanFromAttributeValue(newValue));}}
valueStateTextChanged(newValue){if(this._maskinput!==null){ this._maskinput.setValueStateText(newValue);}}
showValueStateMessageChanged(newValue){if(this._maskinput!==null){ this._maskinput.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._maskinput!==null){ this._maskinput.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._maskinput!==null){ this._maskinput.setTextDirection(newValue);}}
requiredChanged(newValue){if(this._maskinput!==null){ this._maskinput.setRequired(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.InputBase*/
changeChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachChange(newValue);}}
busyChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._maskinput!==null){ this._maskinput.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._maskinput!==null){ this._maskinput.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._maskinput!==null){ this._maskinput.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._maskinput!==null){ this._maskinput.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-mask-input-rule')
@inject(Element)
export class Ui5MaskInputRule extends Ui5Element{
        _maskinputrule = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() maskFormatSymbol = '*';
@bindable() regex = '[a-zA-Z0-9]';
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
        @computedFrom('_maskinputrule')
        get UIElement() {
            return this._maskinputrule;
          }
        fillProperties(params){
                                        params.maskFormatSymbol = this.maskFormatSymbol;
params.regex = this.regex;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._maskinputrule = new sap.m.MaskInputRule(this.ui5Id, params);
        else
          this._maskinputrule = new sap.m.MaskInputRule(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._maskinputrule.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._maskinputrule, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._maskinputrule, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._maskinputrule, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._maskinputrule.placeAt)
                                                                this._maskinputrule.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._maskinputrule.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._maskinputrule, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._maskinputrule.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._maskinputrule.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._maskinputrule.indexOfCustomData(afterElement); if (_index)this._maskinputrule.insertCustomData(child, _index + 1); else this._maskinputrule.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._maskinputrule.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._maskinputrule.indexOfDependent(afterElement); if (_index)this._maskinputrule.insertDependent(child, _index + 1); else this._maskinputrule.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._maskinputrule.destroyTooltip(child); }
if (relation == 'customdata') {  this._maskinputrule.removeCustomData(child);}
if (relation == 'layoutdata') {  this._maskinputrule.destroyLayoutData(child); }
if (relation == 'dependents') {  this._maskinputrule.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    maskFormatSymbolChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.setMaskFormatSymbol(newValue);}}
regexChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.setRegex(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._maskinputrule!==null){ this._maskinputrule.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-menu')
@inject(Element)
export class Ui5Menu extends Ui5Control{
        _menu = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() itemSelected = this.defaultFunc;
@bindable() closed = this.defaultFunc;
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
        @computedFrom('_menu')
        get UIElement() {
            return this._menu;
          }
        fillProperties(params){
                                        params.title = this.title;
params.itemSelected = this.itemSelected==null ? this.defaultFunc: this.itemSelected;
params.closed = this.closed==null ? this.defaultFunc: this.closed;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._menu = new sap.m.Menu(this.ui5Id, params);
        else
          this._menu = new sap.m.Menu(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._menu.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._menu, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._menu, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._menu, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._menu.placeAt)
                                                                this._menu.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._menu.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._menu, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._menu.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._menu.indexOfItem(afterElement); if (_index)this._menu.insertItem(child, _index + 1); else this._menu.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._menu.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._menu.indexOfCustomData(afterElement); if (_index)this._menu.insertCustomData(child, _index + 1); else this._menu.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._menu.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._menu.indexOfDependent(afterElement); if (_index)this._menu.insertDependent(child, _index + 1); else this._menu.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._menu.removeItem(child);}
if (relation == 'tooltip') {  this._menu.destroyTooltip(child); }
if (relation == 'customdata') {  this._menu.removeCustomData(child);}
if (relation == 'layoutdata') {  this._menu.destroyLayoutData(child); }
if (relation == 'dependents') {  this._menu.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._menu!==null){ this._menu.setTitle(newValue);}}
itemSelectedChanged(newValue){if(this._menu!==null){ this._menu.attachItemSelected(newValue);}}
closedChanged(newValue){if(this._menu!==null){ this._menu.attachClosed(newValue);}}
busyChanged(newValue){if(this._menu!==null){ this._menu.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._menu!==null){ this._menu.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._menu!==null){ this._menu.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._menu!==null){ this._menu.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._menu!==null){ this._menu.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._menu!==null){ this._menu.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._menu!==null){ this._menu.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._menu!==null){ this._menu.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._menu!==null){ this._menu.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._menu!==null){ this._menu.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._menu!==null){ this._menu.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-menu-item')
@inject(Element)
export class Ui5MenuItem extends Ui5Item{
        _menuitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() icon = null;
@bindable() visible = true;
@bindable() startsSection = false;
@bindable() press = this.defaultFunc;
@bindable() propertyChanged = this.defaultFunc;
@bindable() aggregationChanged = this.defaultFunc;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_menuitem')
        get UIElement() {
            return this._menuitem;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.visible = getBooleanFromAttributeValue(this.visible);
params.startsSection = getBooleanFromAttributeValue(this.startsSection);
params.press = this.press==null ? this.defaultFunc: this.press;
params.propertyChanged = this.propertyChanged==null ? this.defaultFunc: this.propertyChanged;
params.aggregationChanged = this.aggregationChanged==null ? this.defaultFunc: this.aggregationChanged;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._menuitem = new sap.m.MenuItem(this.ui5Id, params);
        else
          this._menuitem = new sap.m.MenuItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._menuitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._menuitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._menuitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._menuitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._menuitem.placeAt)
                                                                this._menuitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._menuitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._menuitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._menuitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._menuitem.indexOfItem(afterElement); if (_index)this._menuitem.insertItem(child, _index + 1); else this._menuitem.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._menuitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._menuitem.indexOfCustomData(afterElement); if (_index)this._menuitem.insertCustomData(child, _index + 1); else this._menuitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._menuitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._menuitem.indexOfDependent(afterElement); if (_index)this._menuitem.insertDependent(child, _index + 1); else this._menuitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._menuitem.removeItem(child);}
if (relation == 'tooltip') {  this._menuitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._menuitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._menuitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._menuitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(this._menuitem!==null){ this._menuitem.setIcon(newValue);}}
visibleChanged(newValue){if(this._menuitem!==null){ this._menuitem.setVisible(getBooleanFromAttributeValue(newValue));}}
startsSectionChanged(newValue){if(this._menuitem!==null){ this._menuitem.setStartsSection(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachPress(newValue);}}
propertyChangedChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachPropertyChanged(newValue);}}
aggregationChangedChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachAggregationChanged(newValue);}}
textChanged(newValue){if(this._menuitem!==null){ this._menuitem.setText(newValue);}}
enabledChanged(newValue){if(this._menuitem!==null){ this._menuitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._menuitem!==null){ this._menuitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._menuitem!==null){ this._menuitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._menuitem!==null){ this._menuitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-message-item')
@inject(Element)
export class Ui5MessageItem extends Ui5Item{
        _messageitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() type = 'Error';
@bindable() title = '';
@bindable() subtitle = null;
@bindable() description = '';
@bindable() markupDescription = false;
@bindable() longtextUrl = null;
@bindable() counter = null;
@bindable() groupName = '';
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_messageitem')
        get UIElement() {
            return this._messageitem;
          }
        fillProperties(params){
                                        params.type = this.type;
params.title = this.title;
params.subtitle = this.subtitle;
params.description = this.description;
params.markupDescription = getBooleanFromAttributeValue(this.markupDescription);
params.longtextUrl = this.longtextUrl;
params.counter = this.counter?parseInt(this.counter):0;
params.groupName = this.groupName;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._messageitem = new sap.m.MessageItem(this.ui5Id, params);
        else
          this._messageitem = new sap.m.MessageItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._messageitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._messageitem.placeAt)
                                                                this._messageitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._messageitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._messageitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messageitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'link') { this._messageitem.setLink(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._messageitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._messageitem.indexOfCustomData(afterElement); if (_index)this._messageitem.insertCustomData(child, _index + 1); else this._messageitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messageitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._messageitem.indexOfDependent(afterElement); if (_index)this._messageitem.insertDependent(child, _index + 1); else this._messageitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'link') {  this._messageitem.destroyLink(child); }
if (relation == 'tooltip') {  this._messageitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._messageitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._messageitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._messageitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._messageitem!==null){ this._messageitem.setType(newValue);}}
titleChanged(newValue){if(this._messageitem!==null){ this._messageitem.setTitle(newValue);}}
subtitleChanged(newValue){if(this._messageitem!==null){ this._messageitem.setSubtitle(newValue);}}
descriptionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setDescription(newValue);}}
markupDescriptionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setMarkupDescription(getBooleanFromAttributeValue(newValue));}}
longtextUrlChanged(newValue){if(this._messageitem!==null){ this._messageitem.setLongtextUrl(newValue);}}
counterChanged(newValue){if(this._messageitem!==null){ this._messageitem.setCounter(newValue);}}
groupNameChanged(newValue){if(this._messageitem!==null){ this._messageitem.setGroupName(newValue);}}
textChanged(newValue){if(this._messageitem!==null){ this._messageitem.setText(newValue);}}
enabledChanged(newValue){if(this._messageitem!==null){ this._messageitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._messageitem!==null){ this._messageitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._messageitem!==null){ this._messageitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._messageitem!==null){ this._messageitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-message-strip')
@inject(Element)
export class Ui5MessageStrip extends Ui5Control{
        _messagestrip = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = '';
@bindable() type = 'Information';
@bindable() customIcon = '';
@bindable() showIcon = false;
@bindable() showCloseButton = false;
@bindable() enableFormattedText = false;
@bindable() close = this.defaultFunc;
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
        @computedFrom('_messagestrip')
        get UIElement() {
            return this._messagestrip;
          }
        fillProperties(params){
                                        params.text = this.text;
params.type = this.type;
params.customIcon = this.customIcon;
params.showIcon = getBooleanFromAttributeValue(this.showIcon);
params.showCloseButton = getBooleanFromAttributeValue(this.showCloseButton);
params.enableFormattedText = getBooleanFromAttributeValue(this.enableFormattedText);
params.close = this.close==null ? this.defaultFunc: this.close;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._messagestrip = new sap.m.MessageStrip(this.ui5Id, params);
        else
          this._messagestrip = new sap.m.MessageStrip(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messagestrip.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messagestrip, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._messagestrip, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._messagestrip, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._messagestrip.placeAt)
                                                                this._messagestrip.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._messagestrip.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._messagestrip, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messagestrip.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'link') { this._messagestrip.setLink(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._messagestrip.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._messagestrip.indexOfCustomData(afterElement); if (_index)this._messagestrip.insertCustomData(child, _index + 1); else this._messagestrip.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._messagestrip.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._messagestrip.indexOfDependent(afterElement); if (_index)this._messagestrip.insertDependent(child, _index + 1); else this._messagestrip.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'link') {  this._messagestrip.destroyLink(child); }
if (relation == 'tooltip') {  this._messagestrip.destroyTooltip(child); }
if (relation == 'customdata') {  this._messagestrip.removeCustomData(child);}
if (relation == 'layoutdata') {  this._messagestrip.destroyLayoutData(child); }
if (relation == 'dependents') {  this._messagestrip.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setText(newValue);}}
typeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setType(newValue);}}
customIconChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setCustomIcon(newValue);}}
showIconChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setShowIcon(getBooleanFromAttributeValue(newValue));}}
showCloseButtonChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setShowCloseButton(getBooleanFromAttributeValue(newValue));}}
enableFormattedTextChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setEnableFormattedText(getBooleanFromAttributeValue(newValue));}}
closeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachClose(newValue);}}
busyChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._messagestrip!==null){ this._messagestrip.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-message-view')
@inject(Element)
export class Ui5MessageView {
        _messageview = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() asyncDescriptionHandler = null;
@bindable() asyncURLHandler = null;
@bindable() groupItems = false;
@bindable() showDetailsPageHeader = true;
@bindable() afterOpen = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() listSelect = this.defaultFunc;
@bindable() longtextLoaded = this.defaultFunc;
@bindable() urlValidated = this.defaultFunc;

                constructor(element) {
                                        
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_messageview')
        get UIElement() {
            return this._messageview;
          }
        fillProperties(params){
                                        params.asyncDescriptionHandler = this.asyncDescriptionHandler;
params.asyncURLHandler = this.asyncURLHandler;
params.groupItems = getBooleanFromAttributeValue(this.groupItems);
params.showDetailsPageHeader = getBooleanFromAttributeValue(this.showDetailsPageHeader);
params.afterOpen = this.afterOpen==null ? this.defaultFunc: this.afterOpen;
params.itemSelect = this.itemSelect==null ? this.defaultFunc: this.itemSelect;
params.listSelect = this.listSelect==null ? this.defaultFunc: this.listSelect;
params.longtextLoaded = this.longtextLoaded==null ? this.defaultFunc: this.longtextLoaded;
params.urlValidated = this.urlValidated==null ? this.defaultFunc: this.urlValidated;
            
                                               
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._messageview = new sap.m.MessageView(this.ui5Id, params);
        else
          this._messageview = new sap.m.MessageView(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._messageview.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._messageview, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._messageview, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._messageview, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._messageview.placeAt)
                                                                this._messageview.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._messageview.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._messageview, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._messageview.destroy();
                                                            }
         
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._messageview.indexOfItem(afterElement); if (_index)this._messageview.insertItem(child, _index + 1); else this._messageview.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'headerbutton') { this._messageview.setHeaderButton(child); return elem.localName;}

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._messageview.removeItem(child);}
if (relation == 'headerbutton') {  this._messageview.destroyHeaderButton(child); }

      }
      catch(err){}
                                                                            }
    asyncDescriptionHandlerChanged(newValue){if(this._messageview!==null){ this._messageview.setAsyncDescriptionHandler(newValue);}}
asyncURLHandlerChanged(newValue){if(this._messageview!==null){ this._messageview.setAsyncURLHandler(newValue);}}
groupItemsChanged(newValue){if(this._messageview!==null){ this._messageview.setGroupItems(getBooleanFromAttributeValue(newValue));}}
showDetailsPageHeaderChanged(newValue){if(this._messageview!==null){ this._messageview.setShowDetailsPageHeader(getBooleanFromAttributeValue(newValue));}}
afterOpenChanged(newValue){if(this._messageview!==null){ this._messageview.attachAfterOpen(newValue);}}
itemSelectChanged(newValue){if(this._messageview!==null){ this._messageview.attachItemSelect(newValue);}}
listSelectChanged(newValue){if(this._messageview!==null){ this._messageview.attachListSelect(newValue);}}
longtextLoadedChanged(newValue){if(this._messageview!==null){ this._messageview.attachLongtextLoaded(newValue);}}
urlValidatedChanged(newValue){if(this._messageview!==null){ this._messageview.attachUrlValidated(newValue);}}


                                                                                }
@customElement('ui5-numeric-content')
@inject(Element)
export class Ui5NumericContent extends Ui5Control{
        _numericcontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() animateTextChange = true;
@bindable() formatterValue = false;
@bindable() icon = null;
@bindable() iconDescription = null;
@bindable() indicator = 'None';
@bindable() nullifyValue = true;
@bindable() scale = null;
@bindable() truncateValueTo = 4;
@bindable() value = null;
@bindable() valueColor = 'Neutral';
@bindable() width = null;
@bindable() withMargin = true;
@bindable() state = 'Loaded';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_numericcontent')
        get UIElement() {
            return this._numericcontent;
          }
        fillProperties(params){
                                        params.animateTextChange = getBooleanFromAttributeValue(this.animateTextChange);
params.formatterValue = getBooleanFromAttributeValue(this.formatterValue);
params.icon = this.icon;
params.iconDescription = this.iconDescription;
params.indicator = this.indicator;
params.nullifyValue = getBooleanFromAttributeValue(this.nullifyValue);
params.scale = this.scale;
params.truncateValueTo = this.truncateValueTo?parseInt(this.truncateValueTo):0;
params.value = this.value;
params.valueColor = this.valueColor;
params.width = this.width;
params.withMargin = getBooleanFromAttributeValue(this.withMargin);
params.state = this.state;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._numericcontent = new sap.m.NumericContent(this.ui5Id, params);
        else
          this._numericcontent = new sap.m.NumericContent(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._numericcontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._numericcontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._numericcontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._numericcontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._numericcontent.placeAt)
                                                                this._numericcontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._numericcontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._numericcontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._numericcontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._numericcontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._numericcontent.indexOfCustomData(afterElement); if (_index)this._numericcontent.insertCustomData(child, _index + 1); else this._numericcontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._numericcontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._numericcontent.indexOfDependent(afterElement); if (_index)this._numericcontent.insertDependent(child, _index + 1); else this._numericcontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._numericcontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._numericcontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._numericcontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._numericcontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    animateTextChangeChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setAnimateTextChange(getBooleanFromAttributeValue(newValue));}}
formatterValueChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setFormatterValue(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setIcon(newValue);}}
iconDescriptionChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setIconDescription(newValue);}}
indicatorChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setIndicator(newValue);}}
nullifyValueChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setNullifyValue(getBooleanFromAttributeValue(newValue));}}
scaleChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setScale(newValue);}}
truncateValueToChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setTruncateValueTo(newValue);}}
valueChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setValue(newValue);}}
valueColorChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setValueColor(newValue);}}
widthChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setWidth(newValue);}}
withMarginChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setWithMargin(getBooleanFromAttributeValue(newValue));}}
stateChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setState(newValue);}}
pressChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachPress(newValue);}}
busyChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._numericcontent!==null){ this._numericcontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-object')
@inject(Element)
export class Ui5Object {
        _object = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        
                constructor(element) {
                                        
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_object')
        get UIElement() {
            return this._object;
          }
        fillProperties(params){
                                                    
                                               
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._object = new sap.ui.base.Object(this.ui5Id, params);
        else
          this._object = new sap.ui.base.Object(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._object.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._object, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._object, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._object, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._object.placeAt)
                                                                this._object.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._object.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._object, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._object.destroy();
                                                            }
         
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 
           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               
      }
      catch(err){}
                                                                            }
    

                                                                                }
@customElement('ui5-object-identifier')
@inject(Element)
export class Ui5ObjectIdentifier extends Ui5Control{
        _objectidentifier = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() text = null;
@bindable() visible = true;
@bindable() titleActive = false;
@bindable() textDirection = 'Inherit';
@bindable() titlePress = this.defaultFunc;
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
        @computedFrom('_objectidentifier')
        get UIElement() {
            return this._objectidentifier;
          }
        fillProperties(params){
                                        params.title = this.title;
params.text = this.text;
params.visible = getBooleanFromAttributeValue(this.visible);
params.titleActive = getBooleanFromAttributeValue(this.titleActive);
params.textDirection = this.textDirection;
params.titlePress = this.titlePress==null ? this.defaultFunc: this.titlePress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._objectidentifier = new sap.m.ObjectIdentifier(this.ui5Id, params);
        else
          this._objectidentifier = new sap.m.ObjectIdentifier(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._objectidentifier.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._objectidentifier, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._objectidentifier, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._objectidentifier, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._objectidentifier.placeAt)
                                                                this._objectidentifier.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._objectidentifier.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._objectidentifier, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._objectidentifier.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._objectidentifier.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._objectidentifier.indexOfCustomData(afterElement); if (_index)this._objectidentifier.insertCustomData(child, _index + 1); else this._objectidentifier.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._objectidentifier.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._objectidentifier.indexOfDependent(afterElement); if (_index)this._objectidentifier.insertDependent(child, _index + 1); else this._objectidentifier.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._objectidentifier.destroyTooltip(child); }
if (relation == 'customdata') {  this._objectidentifier.removeCustomData(child);}
if (relation == 'layoutdata') {  this._objectidentifier.destroyLayoutData(child); }
if (relation == 'dependents') {  this._objectidentifier.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setTitle(newValue);}}
textChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setText(newValue);}}
visibleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setVisible(getBooleanFromAttributeValue(newValue));}}
titleActiveChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setTitleActive(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setTextDirection(newValue);}}
titlePressChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachTitlePress(newValue);}}
busyChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-object-number')
@inject(Element)
export class Ui5ObjectNumber extends Ui5Control{
        _objectnumber = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() number = null;
@bindable() emphasized = true;
@bindable() state = 'None';
@bindable() unit = null;
@bindable() textDirection = 'Inherit';
@bindable() textAlign = 'Begin';
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
        @computedFrom('_objectnumber')
        get UIElement() {
            return this._objectnumber;
          }
        fillProperties(params){
                                        params.number = this.number;
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
params.state = this.state;
params.unit = this.unit;
params.textDirection = this.textDirection;
params.textAlign = this.textAlign;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._objectnumber = new sap.m.ObjectNumber(this.ui5Id, params);
        else
          this._objectnumber = new sap.m.ObjectNumber(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._objectnumber.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._objectnumber, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._objectnumber, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._objectnumber, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._objectnumber.placeAt)
                                                                this._objectnumber.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._objectnumber.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._objectnumber, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._objectnumber.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._objectnumber.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._objectnumber.indexOfCustomData(afterElement); if (_index)this._objectnumber.insertCustomData(child, _index + 1); else this._objectnumber.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._objectnumber.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._objectnumber.indexOfDependent(afterElement); if (_index)this._objectnumber.insertDependent(child, _index + 1); else this._objectnumber.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._objectnumber.destroyTooltip(child); }
if (relation == 'customdata') {  this._objectnumber.removeCustomData(child);}
if (relation == 'layoutdata') {  this._objectnumber.destroyLayoutData(child); }
if (relation == 'dependents') {  this._objectnumber.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    numberChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setNumber(newValue);}}
emphasizedChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setEmphasized(getBooleanFromAttributeValue(newValue));}}
stateChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setState(newValue);}}
unitChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setUnit(newValue);}}
textDirectionChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setTextDirection(newValue);}}
textAlignChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setTextAlign(newValue);}}
busyChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._objectnumber!==null){ this._objectnumber.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-overflow-toolbar')
@inject(Element)
export class Ui5OverflowToolbar extends Ui5Toolbar{
        _overflowtoolbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        /* inherited from sap.m.Toolbar*/
@bindable() width = null;
@bindable() active = false;
@bindable() enabled = true;
@bindable() height = '';
@bindable() design = 'Auto';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_overflowtoolbar')
        get UIElement() {
            return this._overflowtoolbar;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._overflowtoolbar = new sap.m.OverflowToolbar(this.ui5Id, params);
        else
          this._overflowtoolbar = new sap.m.OverflowToolbar(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._overflowtoolbar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._overflowtoolbar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._overflowtoolbar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._overflowtoolbar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._overflowtoolbar.placeAt)
                                                                this._overflowtoolbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._overflowtoolbar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._overflowtoolbar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._overflowtoolbar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._overflowtoolbar.indexOfContent(afterElement); if (_index)this._overflowtoolbar.insertContent(child, _index + 1); else this._overflowtoolbar.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._overflowtoolbar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._overflowtoolbar.indexOfCustomData(afterElement); if (_index)this._overflowtoolbar.insertCustomData(child, _index + 1); else this._overflowtoolbar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._overflowtoolbar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._overflowtoolbar.indexOfDependent(afterElement); if (_index)this._overflowtoolbar.insertDependent(child, _index + 1); else this._overflowtoolbar.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._overflowtoolbar.removeContent(child);}
if (relation == 'tooltip') {  this._overflowtoolbar.destroyTooltip(child); }
if (relation == 'customdata') {  this._overflowtoolbar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._overflowtoolbar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._overflowtoolbar.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setWidth(newValue);}}
activeChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setActive(getBooleanFromAttributeValue(newValue));}}
enabledChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setEnabled(getBooleanFromAttributeValue(newValue));}}
heightChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setHeight(newValue);}}
designChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setDesign(newValue);}}
/* inherited from sap.m.Toolbar*/
pressChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachPress(newValue);}}
busyChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._overflowtoolbar!==null){ this._overflowtoolbar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-page')
@inject(Element)
export class Ui5Page extends Ui5Control{
        _page = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() titleLevel = 'Auto';
@bindable() showNavButton = false;
@bindable() showHeader = true;
@bindable() showSubHeader = true;
@bindable() navButtonTooltip = null;
@bindable() enableScrolling = true;
@bindable() backgroundDesign = 'Standard';
@bindable() showFooter = true;
@bindable() contentOnlyBusy = false;
@bindable() floatingFooter = false;
@bindable() navButtonPress = this.defaultFunc;
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
        @computedFrom('_page')
        get UIElement() {
            return this._page;
          }
        fillProperties(params){
                                        params.title = this.title;
params.titleLevel = this.titleLevel;
params.showNavButton = getBooleanFromAttributeValue(this.showNavButton);
params.showHeader = getBooleanFromAttributeValue(this.showHeader);
params.showSubHeader = getBooleanFromAttributeValue(this.showSubHeader);
params.navButtonTooltip = this.navButtonTooltip;
params.enableScrolling = getBooleanFromAttributeValue(this.enableScrolling);
params.backgroundDesign = this.backgroundDesign;
params.showFooter = getBooleanFromAttributeValue(this.showFooter);
params.contentOnlyBusy = getBooleanFromAttributeValue(this.contentOnlyBusy);
params.floatingFooter = getBooleanFromAttributeValue(this.floatingFooter);
params.navButtonPress = this.navButtonPress==null ? this.defaultFunc: this.navButtonPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._page = new sap.m.Page(this.ui5Id, params);
        else
          this._page = new sap.m.Page(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._page.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._page, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._page, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._page, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._page.placeAt)
                                                                this._page.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._page.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._page, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._page.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._page.indexOfContent(afterElement); if (_index)this._page.insertContent(child, _index + 1); else this._page.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'customheader') { this._page.setCustomHeader(child); return elem.localName;}
if (elem.localName == 'footer') { this._page.setFooter(child); return elem.localName;}
if (elem.localName == 'subheader') { this._page.setSubHeader(child); return elem.localName;}
if (elem.localName == 'headercontent') { var _index = null; if (afterElement) _index = this._page.indexOfHeaderContent(afterElement); if (_index)this._page.insertHeaderContent(child, _index + 1); else this._page.addHeaderContent(child, 0);  return elem.localName; }
if (elem.localName == 'landmarkinfo') { this._page.setLandmarkInfo(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._page.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._page.indexOfCustomData(afterElement); if (_index)this._page.insertCustomData(child, _index + 1); else this._page.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._page.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._page.indexOfDependent(afterElement); if (_index)this._page.insertDependent(child, _index + 1); else this._page.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._page.removeContent(child);}
if (relation == 'customheader') {  this._page.destroyCustomHeader(child); }
if (relation == 'footer') {  this._page.destroyFooter(child); }
if (relation == 'subheader') {  this._page.destroySubHeader(child); }
if (relation == 'headercontent') {  this._page.removeHeaderContent(child);}
if (relation == 'landmarkinfo') {  this._page.destroyLandmarkInfo(child); }
if (relation == 'tooltip') {  this._page.destroyTooltip(child); }
if (relation == 'customdata') {  this._page.removeCustomData(child);}
if (relation == 'layoutdata') {  this._page.destroyLayoutData(child); }
if (relation == 'dependents') {  this._page.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._page!==null){ this._page.setTitle(newValue);}}
titleLevelChanged(newValue){if(this._page!==null){ this._page.setTitleLevel(newValue);}}
showNavButtonChanged(newValue){if(this._page!==null){ this._page.setShowNavButton(getBooleanFromAttributeValue(newValue));}}
showHeaderChanged(newValue){if(this._page!==null){ this._page.setShowHeader(getBooleanFromAttributeValue(newValue));}}
showSubHeaderChanged(newValue){if(this._page!==null){ this._page.setShowSubHeader(getBooleanFromAttributeValue(newValue));}}
navButtonTooltipChanged(newValue){if(this._page!==null){ this._page.setNavButtonTooltip(newValue);}}
enableScrollingChanged(newValue){if(this._page!==null){ this._page.setEnableScrolling(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(this._page!==null){ this._page.setBackgroundDesign(newValue);}}
showFooterChanged(newValue){if(this._page!==null){ this._page.setShowFooter(getBooleanFromAttributeValue(newValue));}}
contentOnlyBusyChanged(newValue){if(this._page!==null){ this._page.setContentOnlyBusy(getBooleanFromAttributeValue(newValue));}}
floatingFooterChanged(newValue){if(this._page!==null){ this._page.setFloatingFooter(getBooleanFromAttributeValue(newValue));}}
navButtonPressChanged(newValue){if(this._page!==null){ this._page.attachNavButtonPress(newValue);}}
busyChanged(newValue){if(this._page!==null){ this._page.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._page!==null){ this._page.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._page!==null){ this._page.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._page!==null){ this._page.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._page!==null){ this._page.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._page!==null){ this._page.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._page!==null){ this._page.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._page!==null){ this._page.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._page!==null){ this._page.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._page!==null){ this._page.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._page!==null){ this._page.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-responsive-grid-layout')
@inject(Element)
export class Ui5ResponsiveGridLayout extends Ui5FormLayout{
        _responsivegridlayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() labelSpanXL = -1;
@bindable() labelSpanL = 4;
@bindable() labelSpanM = 2;
@bindable() labelSpanS = 12;
@bindable() adjustLabelSpan = true;
@bindable() emptySpanXL = -1;
@bindable() emptySpanL = 0;
@bindable() emptySpanM = 0;
@bindable() emptySpanS = 0;
@bindable() columnsXL = -1;
@bindable() columnsL = 2;
@bindable() columnsM = 1;
@bindable() singleContainerFullSize = true;
@bindable() breakpointXL = 1440;
@bindable() breakpointL = 1024;
@bindable() breakpointM = 600;
/* inherited from sap.ui.layout.form.FormLayout*/
@bindable() backgroundDesign = 'Translucent';
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
        @computedFrom('_responsivegridlayout')
        get UIElement() {
            return this._responsivegridlayout;
          }
        fillProperties(params){
                                        params.labelSpanXL = this.labelSpanXL?parseInt(this.labelSpanXL):0;
params.labelSpanL = this.labelSpanL?parseInt(this.labelSpanL):0;
params.labelSpanM = this.labelSpanM?parseInt(this.labelSpanM):0;
params.labelSpanS = this.labelSpanS?parseInt(this.labelSpanS):0;
params.adjustLabelSpan = getBooleanFromAttributeValue(this.adjustLabelSpan);
params.emptySpanXL = this.emptySpanXL?parseInt(this.emptySpanXL):0;
params.emptySpanL = this.emptySpanL?parseInt(this.emptySpanL):0;
params.emptySpanM = this.emptySpanM?parseInt(this.emptySpanM):0;
params.emptySpanS = this.emptySpanS?parseInt(this.emptySpanS):0;
params.columnsXL = this.columnsXL?parseInt(this.columnsXL):0;
params.columnsL = this.columnsL?parseInt(this.columnsL):0;
params.columnsM = this.columnsM?parseInt(this.columnsM):0;
params.singleContainerFullSize = getBooleanFromAttributeValue(this.singleContainerFullSize);
params.breakpointXL = this.breakpointXL?parseInt(this.breakpointXL):0;
params.breakpointL = this.breakpointL?parseInt(this.breakpointL):0;
params.breakpointM = this.breakpointM?parseInt(this.breakpointM):0;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._responsivegridlayout = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);
        else
          this._responsivegridlayout = new sap.ui.layout.form.ResponsiveGridLayout(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._responsivegridlayout.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._responsivegridlayout, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._responsivegridlayout, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._responsivegridlayout, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._responsivegridlayout.placeAt)
                                                                this._responsivegridlayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._responsivegridlayout.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._responsivegridlayout, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._responsivegridlayout.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._responsivegridlayout.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._responsivegridlayout.indexOfCustomData(afterElement); if (_index)this._responsivegridlayout.insertCustomData(child, _index + 1); else this._responsivegridlayout.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._responsivegridlayout.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._responsivegridlayout.indexOfDependent(afterElement); if (_index)this._responsivegridlayout.insertDependent(child, _index + 1); else this._responsivegridlayout.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._responsivegridlayout.destroyTooltip(child); }
if (relation == 'customdata') {  this._responsivegridlayout.removeCustomData(child);}
if (relation == 'layoutdata') {  this._responsivegridlayout.destroyLayoutData(child); }
if (relation == 'dependents') {  this._responsivegridlayout.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    labelSpanXLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanXL(newValue);}}
labelSpanLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanL(newValue);}}
labelSpanMChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanM(newValue);}}
labelSpanSChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setLabelSpanS(newValue);}}
adjustLabelSpanChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setAdjustLabelSpan(getBooleanFromAttributeValue(newValue));}}
emptySpanXLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanXL(newValue);}}
emptySpanLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanL(newValue);}}
emptySpanMChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanM(newValue);}}
emptySpanSChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setEmptySpanS(newValue);}}
columnsXLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setColumnsXL(newValue);}}
columnsLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setColumnsL(newValue);}}
columnsMChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setColumnsM(newValue);}}
singleContainerFullSizeChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setSingleContainerFullSize(getBooleanFromAttributeValue(newValue));}}
breakpointXLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBreakpointXL(newValue);}}
breakpointLChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBreakpointL(newValue);}}
breakpointMChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBreakpointM(newValue);}}
backgroundDesignChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBackgroundDesign(newValue);}}
/* inherited from sap.ui.layout.form.FormLayout*/
busyChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._responsivegridlayout!==null){ this._responsivegridlayout.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-responsive-popover')
@inject(Element)
export class Ui5ResponsivePopover extends Ui5Control{
        _responsivepopover = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() placement = 'Right';
@bindable() showHeader = true;
@bindable() title = null;
@bindable() icon = null;
@bindable() modal = null;
@bindable() offsetX = null;
@bindable() offsetY = null;
@bindable() showArrow = true;
@bindable() contentWidth = null;
@bindable() contentHeight = null;
@bindable() horizontalScrolling = true;
@bindable() verticalScrolling = true;
@bindable() showCloseButton = true;
@bindable() resizable = false;
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
        @computedFrom('_responsivepopover')
        get UIElement() {
            return this._responsivepopover;
          }
        fillProperties(params){
                                        params.placement = this.placement;
params.showHeader = getBooleanFromAttributeValue(this.showHeader);
params.title = this.title;
params.icon = this.icon;
params.modal = getBooleanFromAttributeValue(this.modal);
params.offsetX = this.offsetX?parseInt(this.offsetX):0;
params.offsetY = this.offsetY?parseInt(this.offsetY):0;
params.showArrow = getBooleanFromAttributeValue(this.showArrow);
params.contentWidth = this.contentWidth;
params.contentHeight = this.contentHeight;
params.horizontalScrolling = getBooleanFromAttributeValue(this.horizontalScrolling);
params.verticalScrolling = getBooleanFromAttributeValue(this.verticalScrolling);
params.showCloseButton = getBooleanFromAttributeValue(this.showCloseButton);
params.resizable = getBooleanFromAttributeValue(this.resizable);
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
          this._responsivepopover = new sap.m.ResponsivePopover(this.ui5Id, params);
        else
          this._responsivepopover = new sap.m.ResponsivePopover(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._responsivepopover.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._responsivepopover, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._responsivepopover, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._responsivepopover, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._responsivepopover.placeAt)
                                                                this._responsivepopover.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._responsivepopover.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._responsivepopover, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._responsivepopover.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._responsivepopover.indexOfContent(afterElement); if (_index)this._responsivepopover.insertContent(child, _index + 1); else this._responsivepopover.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'customheader') { this._responsivepopover.setCustomHeader(child); return elem.localName;}
if (elem.localName == 'subheader') { this._responsivepopover.setSubHeader(child); return elem.localName;}
if (elem.localName == 'beginbutton') { this._responsivepopover.setBeginButton(child); return elem.localName;}
if (elem.localName == 'endbutton') { this._responsivepopover.setEndButton(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._responsivepopover.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._responsivepopover.indexOfCustomData(afterElement); if (_index)this._responsivepopover.insertCustomData(child, _index + 1); else this._responsivepopover.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._responsivepopover.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._responsivepopover.indexOfDependent(afterElement); if (_index)this._responsivepopover.insertDependent(child, _index + 1); else this._responsivepopover.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._responsivepopover.removeContent(child);}
if (relation == 'customheader') {  this._responsivepopover.destroyCustomHeader(child); }
if (relation == 'subheader') {  this._responsivepopover.destroySubHeader(child); }
if (relation == 'beginbutton') {  this._responsivepopover.destroyBeginButton(child); }
if (relation == 'endbutton') {  this._responsivepopover.destroyEndButton(child); }
if (relation == 'tooltip') {  this._responsivepopover.destroyTooltip(child); }
if (relation == 'customdata') {  this._responsivepopover.removeCustomData(child);}
if (relation == 'layoutdata') {  this._responsivepopover.destroyLayoutData(child); }
if (relation == 'dependents') {  this._responsivepopover.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    placementChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setPlacement(newValue);}}
showHeaderChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setShowHeader(getBooleanFromAttributeValue(newValue));}}
titleChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setTitle(newValue);}}
iconChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setIcon(newValue);}}
modalChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setModal(getBooleanFromAttributeValue(newValue));}}
offsetXChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setOffsetX(newValue);}}
offsetYChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setOffsetY(newValue);}}
showArrowChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setShowArrow(getBooleanFromAttributeValue(newValue));}}
contentWidthChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setContentWidth(newValue);}}
contentHeightChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setContentHeight(newValue);}}
horizontalScrollingChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));}}
verticalScrollingChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setVerticalScrolling(getBooleanFromAttributeValue(newValue));}}
showCloseButtonChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setShowCloseButton(getBooleanFromAttributeValue(newValue));}}
resizableChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setResizable(getBooleanFromAttributeValue(newValue));}}
beforeOpenChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachBeforeOpen(newValue);}}
afterOpenChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachAfterOpen(newValue);}}
beforeCloseChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachBeforeClose(newValue);}}
afterCloseChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachAfterClose(newValue);}}
busyChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._responsivepopover!==null){ this._responsivepopover.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-search-field')
@inject(Element)
export class Ui5SearchField extends Ui5Control{
        _searchfield = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() visible = true;
@bindable() maxLength = 0;
@bindable() placeholder = null;
@bindable() showRefreshButton = false;
@bindable() refreshButtonTooltip = null;
@bindable() showSearchButton = true;
@bindable() enableSuggestions = false;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() suggest = this.defaultFunc;
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
        @computedFrom('_searchfield')
        get UIElement() {
            return this._searchfield;
          }
        fillProperties(params){
                                        params.value = this.value;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.visible = getBooleanFromAttributeValue(this.visible);
params.maxLength = this.maxLength?parseInt(this.maxLength):0;
params.placeholder = this.placeholder;
params.showRefreshButton = getBooleanFromAttributeValue(this.showRefreshButton);
params.refreshButtonTooltip = this.refreshButtonTooltip;
params.showSearchButton = getBooleanFromAttributeValue(this.showSearchButton);
params.enableSuggestions = getBooleanFromAttributeValue(this.enableSuggestions);
params.search = this.search==null ? this.defaultFunc: this.search;
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.suggest = this.suggest==null ? this.defaultFunc: this.suggest;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._searchfield = new sap.m.SearchField(this.ui5Id, params);
        else
          this._searchfield = new sap.m.SearchField(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._searchfield.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._searchfield, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._searchfield, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._searchfield, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._searchfield.placeAt)
                                                                this._searchfield.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._searchfield.attachLiveChange((event) => {  that.value = event.mParameters.newValue;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._searchfield.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._searchfield, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._searchfield.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'suggestionitems') { var _index = null; if (afterElement) _index = this._searchfield.indexOfSuggestionItem(afterElement); if (_index)this._searchfield.insertSuggestionItem(child, _index + 1); else this._searchfield.addSuggestionItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._searchfield.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._searchfield.indexOfCustomData(afterElement); if (_index)this._searchfield.insertCustomData(child, _index + 1); else this._searchfield.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._searchfield.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._searchfield.indexOfDependent(afterElement); if (_index)this._searchfield.insertDependent(child, _index + 1); else this._searchfield.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'suggestionitems') {  this._searchfield.removeSuggestionItem(child);}
if (relation == 'tooltip') {  this._searchfield.destroyTooltip(child); }
if (relation == 'customdata') {  this._searchfield.removeCustomData(child);}
if (relation == 'layoutdata') {  this._searchfield.destroyLayoutData(child); }
if (relation == 'dependents') {  this._searchfield.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    valueChanged(newValue){if(this._searchfield!==null){ this._searchfield.setValue(newValue);}}
widthChanged(newValue){if(this._searchfield!==null){ this._searchfield.setWidth(newValue);}}
enabledChanged(newValue){if(this._searchfield!==null){ this._searchfield.setEnabled(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._searchfield!==null){ this._searchfield.setVisible(getBooleanFromAttributeValue(newValue));}}
maxLengthChanged(newValue){if(this._searchfield!==null){ this._searchfield.setMaxLength(newValue);}}
placeholderChanged(newValue){if(this._searchfield!==null){ this._searchfield.setPlaceholder(newValue);}}
showRefreshButtonChanged(newValue){if(this._searchfield!==null){ this._searchfield.setShowRefreshButton(getBooleanFromAttributeValue(newValue));}}
refreshButtonTooltipChanged(newValue){if(this._searchfield!==null){ this._searchfield.setRefreshButtonTooltip(newValue);}}
showSearchButtonChanged(newValue){if(this._searchfield!==null){ this._searchfield.setShowSearchButton(getBooleanFromAttributeValue(newValue));}}
enableSuggestionsChanged(newValue){if(this._searchfield!==null){ this._searchfield.setEnableSuggestions(getBooleanFromAttributeValue(newValue));}}
searchChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachSearch(newValue);}}
liveChangeChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachLiveChange(newValue);}}
suggestChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachSuggest(newValue);}}
busyChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._searchfield!==null){ this._searchfield.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._searchfield!==null){ this._searchfield.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-segmented-button')
@inject(Element)
export class Ui5SegmentedButton extends Ui5Control{
        _segmentedbutton = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() enabled = true;
@bindable() selectedKey = '';
@bindable() selectionChange = this.defaultFunc;
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
        @computedFrom('_segmentedbutton')
        get UIElement() {
            return this._segmentedbutton;
          }
        fillProperties(params){
                                        params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.selectedKey = this.selectedKey;
params.selectionChange = this.selectionChange==null ? this.defaultFunc: this.selectionChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._segmentedbutton = new sap.m.SegmentedButton(this.ui5Id, params);
        else
          this._segmentedbutton = new sap.m.SegmentedButton(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._segmentedbutton.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._segmentedbutton, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._segmentedbutton, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._segmentedbutton, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._segmentedbutton.placeAt)
                                                                this._segmentedbutton.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._segmentedbutton.attachSelect((event) => { that.selectedKey = event.mParameters.key;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._segmentedbutton.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._segmentedbutton, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._segmentedbutton.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfButton(afterElement); if (_index)this._segmentedbutton.insertButton(child, _index + 1); else this._segmentedbutton.addButton(child, 0);  return elem.localName; }
if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfItem(afterElement); if (_index)this._segmentedbutton.insertItem(child, _index + 1); else this._segmentedbutton.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._segmentedbutton.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfCustomData(afterElement); if (_index)this._segmentedbutton.insertCustomData(child, _index + 1); else this._segmentedbutton.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._segmentedbutton.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfDependent(afterElement); if (_index)this._segmentedbutton.insertDependent(child, _index + 1); else this._segmentedbutton.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'buttons') {  this._segmentedbutton.removeButton(child);}
if (relation == 'items') {  this._segmentedbutton.removeItem(child);}
if (relation == 'tooltip') {  this._segmentedbutton.destroyTooltip(child); }
if (relation == 'customdata') {  this._segmentedbutton.removeCustomData(child);}
if (relation == 'layoutdata') {  this._segmentedbutton.destroyLayoutData(child); }
if (relation == 'dependents') {  this._segmentedbutton.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setWidth(newValue);}}
enabledChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setEnabled(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setSelectedKey(newValue);}}
selectionChangeChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachSelectionChange(newValue);}}
busyChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-form-element')
@inject(Element)
export class Ui5FormElement extends Ui5Element{
        _formelement = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() visible = true;
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
        @computedFrom('_formelement')
        get UIElement() {
            return this._formelement;
          }
        fillProperties(params){
                                        params.visible = getBooleanFromAttributeValue(this.visible);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._formelement = new sap.ui.layout.form.FormElement(this.ui5Id, params);
        else
          this._formelement = new sap.ui.layout.form.FormElement(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formelement.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formelement, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formelement, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formelement, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formelement.placeAt)
                                                                this._formelement.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formelement.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formelement, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formelement.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'label') { this._formelement.setLabel(child); return elem.localName;}
if (elem.localName == 'fields') { var _index = null; if (afterElement) _index = this._formelement.indexOfField(afterElement); if (_index)this._formelement.insertField(child, _index + 1); else this._formelement.addField(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._formelement.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._formelement.indexOfCustomData(afterElement); if (_index)this._formelement.insertCustomData(child, _index + 1); else this._formelement.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formelement.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._formelement.indexOfDependent(afterElement); if (_index)this._formelement.insertDependent(child, _index + 1); else this._formelement.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'label') {  this._formelement.destroyLabel(child); }
if (relation == 'fields') {  this._formelement.removeField(child);}
if (relation == 'tooltip') {  this._formelement.destroyTooltip(child); }
if (relation == 'customdata') {  this._formelement.removeCustomData(child);}
if (relation == 'layoutdata') {  this._formelement.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formelement.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    visibleChanged(newValue){if(this._formelement!==null){ this._formelement.setVisible(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._formelement!==null){ this._formelement.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._formelement!==null){ this._formelement.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._formelement!==null){ this._formelement.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._formelement!==null){ this._formelement.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._formelement!==null){ this._formelement.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-segmented-button-item')
@inject(Element)
export class Ui5SegmentedButtonItem extends Ui5Item{
        _segmentedbuttonitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() icon = null;
@bindable() visible = true;
@bindable() width = null;
@bindable() press = this.defaultFunc;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_segmentedbuttonitem')
        get UIElement() {
            return this._segmentedbuttonitem;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.visible = getBooleanFromAttributeValue(this.visible);
params.width = this.width;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._segmentedbuttonitem = new sap.m.SegmentedButtonItem(this.ui5Id, params);
        else
          this._segmentedbuttonitem = new sap.m.SegmentedButtonItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._segmentedbuttonitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._segmentedbuttonitem.placeAt)
                                                                this._segmentedbuttonitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._segmentedbuttonitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._segmentedbuttonitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._segmentedbuttonitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._segmentedbuttonitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._segmentedbuttonitem.indexOfCustomData(afterElement); if (_index)this._segmentedbuttonitem.insertCustomData(child, _index + 1); else this._segmentedbuttonitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._segmentedbuttonitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._segmentedbuttonitem.indexOfDependent(afterElement); if (_index)this._segmentedbuttonitem.insertDependent(child, _index + 1); else this._segmentedbuttonitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._segmentedbuttonitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._segmentedbuttonitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._segmentedbuttonitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._segmentedbuttonitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setIcon(newValue);}}
visibleChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setVisible(getBooleanFromAttributeValue(newValue));}}
widthChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setWidth(newValue);}}
pressChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachPress(newValue);}}
textChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setText(newValue);}}
enabledChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-select-dialog')
@inject(Element)
export class Ui5SelectDialog extends Ui5Control{
        _selectdialog = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() noDataText = null;
@bindable() multiSelect = false;
@bindable() growingThreshold = null;
@bindable() contentWidth = null;
@bindable() rememberSelections = false;
@bindable() contentHeight = null;
@bindable() confirm = this.defaultFunc;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() cancel = this.defaultFunc;
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
        @computedFrom('_selectdialog')
        get UIElement() {
            return this._selectdialog;
          }
        fillProperties(params){
                                        params.title = this.title;
params.noDataText = this.noDataText;
params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
params.growingThreshold = this.growingThreshold?parseInt(this.growingThreshold):0;
params.contentWidth = this.contentWidth;
params.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections);
params.contentHeight = this.contentHeight;
params.confirm = this.confirm==null ? this.defaultFunc: this.confirm;
params.search = this.search==null ? this.defaultFunc: this.search;
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.cancel = this.cancel==null ? this.defaultFunc: this.cancel;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._selectdialog = new sap.m.SelectDialog(this.ui5Id, params);
        else
          this._selectdialog = new sap.m.SelectDialog(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._selectdialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._selectdialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._selectdialog, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._selectdialog, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._selectdialog.placeAt)
                                                                this._selectdialog.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._selectdialog.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._selectdialog, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._selectdialog.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._selectdialog.indexOfItem(afterElement); if (_index)this._selectdialog.insertItem(child, _index + 1); else this._selectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._selectdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._selectdialog.indexOfCustomData(afterElement); if (_index)this._selectdialog.insertCustomData(child, _index + 1); else this._selectdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._selectdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._selectdialog.indexOfDependent(afterElement); if (_index)this._selectdialog.insertDependent(child, _index + 1); else this._selectdialog.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._selectdialog.removeItem(child);}
if (relation == 'tooltip') {  this._selectdialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._selectdialog.removeCustomData(child);}
if (relation == 'layoutdata') {  this._selectdialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._selectdialog.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setTitle(newValue);}}
noDataTextChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setNoDataText(newValue);}}
multiSelectChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setGrowingThreshold(newValue);}}
contentWidthChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setContentWidth(newValue);}}
rememberSelectionsChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
contentHeightChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setContentHeight(newValue);}}
confirmChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachConfirm(newValue);}}
searchChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachSearch(newValue);}}
liveChangeChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachLiveChange(newValue);}}
cancelChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachCancel(newValue);}}
busyChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._selectdialog!==null){ this._selectdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-select')
@inject(Element)
export class Ui5Select extends Ui5Control{
        _select = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() name = '';
@bindable() enabled = true;
@bindable() width = 'auto';
@bindable() maxWidth = '100%';
@bindable() selectedKey = '';
@bindable() selectedItemId = '';
@bindable() icon = '';
@bindable() type = 'Default';
@bindable() autoAdjustWidth = false;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() valueState = 'None';
@bindable() valueStateText = '';
@bindable() showSecondaryValues = false;
@bindable() forceSelection = true;
@bindable() change = this.defaultFunc;
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
        @computedFrom('_select')
        get UIElement() {
            return this._select;
          }
        fillProperties(params){
                                        params.name = this.name;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.width = this.width;
params.maxWidth = this.maxWidth;
params.selectedKey = this.selectedKey;
params.selectedItemId = this.selectedItemId;
params.icon = this.icon;
params.type = this.type;
params.autoAdjustWidth = getBooleanFromAttributeValue(this.autoAdjustWidth);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.valueState = this.valueState;
params.valueStateText = this.valueStateText;
params.showSecondaryValues = getBooleanFromAttributeValue(this.showSecondaryValues);
params.forceSelection = getBooleanFromAttributeValue(this.forceSelection);
params.change = this.change==null ? this.defaultFunc: this.change;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._select = new sap.m.Select(this.ui5Id, params);
        else
          this._select = new sap.m.Select(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._select.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._select, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._select, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._select, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._select.placeAt)
                                                                this._select.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._select.attachChange((event) => { that.selectedItem = event.mParameters.selectedItem;   if (event.mParameters.selectedItem)  that.selectedKey = event.mParameters.selectedItem.mProperties.key;  else    that.selectedKey = null;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._select.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._select, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._select.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._select.indexOfItem(afterElement); if (_index)this._select.insertItem(child, _index + 1); else this._select.addItem(child, 0);  var oldVal = this.selectedKey; this.selectedKey = null; this.selectedKey = oldVal; return elem.localName; }
if (elem.localName == 'tooltip') { this._select.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._select.indexOfCustomData(afterElement); if (_index)this._select.insertCustomData(child, _index + 1); else this._select.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._select.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._select.indexOfDependent(afterElement); if (_index)this._select.insertDependent(child, _index + 1); else this._select.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._select.removeItem(child);  var oldVal = this.selectedKey; this.selectedKey = null; this.selectedKey = oldVal;}
if (relation == 'tooltip') {  this._select.destroyTooltip(child); }
if (relation == 'customdata') {  this._select.removeCustomData(child);}
if (relation == 'layoutdata') {  this._select.destroyLayoutData(child); }
if (relation == 'dependents') {  this._select.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    nameChanged(newValue){if(this._select!==null){ this._select.setName(newValue);}}
enabledChanged(newValue){if(this._select!==null){ this._select.setEnabled(getBooleanFromAttributeValue(newValue));}}
widthChanged(newValue){if(this._select!==null){ this._select.setWidth(newValue);}}
maxWidthChanged(newValue){if(this._select!==null){ this._select.setMaxWidth(newValue);}}
selectedKeyChanged(newValue){if(this._select!==null){ this._select.setSelectedKey(newValue);}}
selectedItemIdChanged(newValue){if(this._select!==null){ this._select.setSelectedItemId(newValue);}}
iconChanged(newValue){if(this._select!==null){ this._select.setIcon(newValue);}}
typeChanged(newValue){if(this._select!==null){ this._select.setType(newValue);}}
autoAdjustWidthChanged(newValue){if(this._select!==null){ this._select.setAutoAdjustWidth(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._select!==null){ this._select.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._select!==null){ this._select.setTextDirection(newValue);}}
valueStateChanged(newValue){if(this._select!==null){ this._select.setValueState(newValue);}}
valueStateTextChanged(newValue){if(this._select!==null){ this._select.setValueStateText(newValue);}}
showSecondaryValuesChanged(newValue){if(this._select!==null){ this._select.setShowSecondaryValues(getBooleanFromAttributeValue(newValue));}}
forceSelectionChanged(newValue){if(this._select!==null){ this._select.setForceSelection(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(this._select!==null){ this._select.attachChange(newValue);}}
busyChanged(newValue){if(this._select!==null){ this._select.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._select!==null){ this._select.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._select!==null){ this._select.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._select!==null){ this._select.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._select!==null){ this._select.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._select!==null){ this._select.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._select!==null){ this._select.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._select!==null){ this._select.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._select!==null){ this._select.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._select!==null){ this._select.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._select!==null){ this._select.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-shell')
@inject(Element)
export class Ui5Shell extends Ui5Control{
        _shell = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() logo = null;
@bindable() showLogout = true;
@bindable() headerRightText = null;
@bindable() appWidthLimited = true;
@bindable() backgroundColor = null;
@bindable() backgroundImage = null;
@bindable() backgroundRepeat = false;
@bindable() backgroundOpacity = 1;
@bindable() homeIcon = null;
@bindable() titleLevel = 'H1';
@bindable() logout = this.defaultFunc;
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
        @computedFrom('_shell')
        get UIElement() {
            return this._shell;
          }
        fillProperties(params){
                                        params.title = this.title;
params.logo = this.logo;
params.showLogout = getBooleanFromAttributeValue(this.showLogout);
params.headerRightText = this.headerRightText;
params.appWidthLimited = getBooleanFromAttributeValue(this.appWidthLimited);
params.backgroundColor = this.backgroundColor;
params.backgroundImage = this.backgroundImage;
params.backgroundRepeat = getBooleanFromAttributeValue(this.backgroundRepeat);
params.backgroundOpacity = this.backgroundOpacity;
params.homeIcon = this.homeIcon;
params.titleLevel = this.titleLevel;
params.logout = this.logout==null ? this.defaultFunc: this.logout;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._shell = new sap.m.Shell(this.ui5Id, params);
        else
          this._shell = new sap.m.Shell(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._shell.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._shell, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._shell, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._shell, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._shell.placeAt)
                                                                this._shell.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._shell.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._shell, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._shell.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { this._shell.setApp(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._shell.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._shell.indexOfCustomData(afterElement); if (_index)this._shell.insertCustomData(child, _index + 1); else this._shell.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._shell.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._shell.indexOfDependent(afterElement); if (_index)this._shell.insertDependent(child, _index + 1); else this._shell.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._shell.destroyApp(child); }
if (relation == 'tooltip') {  this._shell.destroyTooltip(child); }
if (relation == 'customdata') {  this._shell.removeCustomData(child);}
if (relation == 'layoutdata') {  this._shell.destroyLayoutData(child); }
if (relation == 'dependents') {  this._shell.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._shell!==null){ this._shell.setTitle(newValue);}}
logoChanged(newValue){if(this._shell!==null){ this._shell.setLogo(newValue);}}
showLogoutChanged(newValue){if(this._shell!==null){ this._shell.setShowLogout(getBooleanFromAttributeValue(newValue));}}
headerRightTextChanged(newValue){if(this._shell!==null){ this._shell.setHeaderRightText(newValue);}}
appWidthLimitedChanged(newValue){if(this._shell!==null){ this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));}}
backgroundColorChanged(newValue){if(this._shell!==null){ this._shell.setBackgroundColor(newValue);}}
backgroundImageChanged(newValue){if(this._shell!==null){ this._shell.setBackgroundImage(newValue);}}
backgroundRepeatChanged(newValue){if(this._shell!==null){ this._shell.setBackgroundRepeat(getBooleanFromAttributeValue(newValue));}}
backgroundOpacityChanged(newValue){if(this._shell!==null){ this._shell.setBackgroundOpacity(newValue);}}
homeIconChanged(newValue){if(this._shell!==null){ this._shell.setHomeIcon(newValue);}}
titleLevelChanged(newValue){if(this._shell!==null){ this._shell.setTitleLevel(newValue);}}
logoutChanged(newValue){if(this._shell!==null){ this._shell.attachLogout(newValue);}}
busyChanged(newValue){if(this._shell!==null){ this._shell.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._shell!==null){ this._shell.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._shell!==null){ this._shell.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._shell!==null){ this._shell.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._shell!==null){ this._shell.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._shell!==null){ this._shell.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._shell!==null){ this._shell.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._shell!==null){ this._shell.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._shell!==null){ this._shell.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._shell!==null){ this._shell.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._shell!==null){ this._shell.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-simple-form')
@inject(Element)
export class Ui5SimpleForm extends Ui5Control{
        _simpleform = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() maxContainerCols = 2;
@bindable() minWidth = -1;
@bindable() width = null;
@bindable() editable = null;
@bindable() labelMinWidth = 192;
@bindable() layout = 'ResponsiveLayout';
@bindable() labelSpanXL = -1;
@bindable() labelSpanL = 4;
@bindable() labelSpanM = 2;
@bindable() labelSpanS = 12;
@bindable() adjustLabelSpan = true;
@bindable() emptySpanXL = -1;
@bindable() emptySpanL = 0;
@bindable() emptySpanM = 0;
@bindable() emptySpanS = 0;
@bindable() columnsXL = -1;
@bindable() columnsL = 2;
@bindable() columnsM = 1;
@bindable() singleContainerFullSize = true;
@bindable() breakpointXL = 1440;
@bindable() breakpointL = 1024;
@bindable() breakpointM = 600;
@bindable() backgroundDesign = 'Translucent';
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
        @computedFrom('_simpleform')
        get UIElement() {
            return this._simpleform;
          }
        fillProperties(params){
                                        params.maxContainerCols = this.maxContainerCols?parseInt(this.maxContainerCols):0;
params.minWidth = this.minWidth?parseInt(this.minWidth):0;
params.width = this.width;
params.editable = getBooleanFromAttributeValue(this.editable);
params.labelMinWidth = this.labelMinWidth?parseInt(this.labelMinWidth):0;
params.layout = this.layout;
params.labelSpanXL = this.labelSpanXL?parseInt(this.labelSpanXL):0;
params.labelSpanL = this.labelSpanL?parseInt(this.labelSpanL):0;
params.labelSpanM = this.labelSpanM?parseInt(this.labelSpanM):0;
params.labelSpanS = this.labelSpanS?parseInt(this.labelSpanS):0;
params.adjustLabelSpan = getBooleanFromAttributeValue(this.adjustLabelSpan);
params.emptySpanXL = this.emptySpanXL?parseInt(this.emptySpanXL):0;
params.emptySpanL = this.emptySpanL?parseInt(this.emptySpanL):0;
params.emptySpanM = this.emptySpanM?parseInt(this.emptySpanM):0;
params.emptySpanS = this.emptySpanS?parseInt(this.emptySpanS):0;
params.columnsXL = this.columnsXL?parseInt(this.columnsXL):0;
params.columnsL = this.columnsL?parseInt(this.columnsL):0;
params.columnsM = this.columnsM?parseInt(this.columnsM):0;
params.singleContainerFullSize = getBooleanFromAttributeValue(this.singleContainerFullSize);
params.breakpointXL = this.breakpointXL?parseInt(this.breakpointXL):0;
params.breakpointL = this.breakpointL?parseInt(this.breakpointL):0;
params.breakpointM = this.breakpointM?parseInt(this.breakpointM):0;
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
          this._simpleform = new sap.ui.layout.form.SimpleForm(this.ui5Id, params);
        else
          this._simpleform = new sap.ui.layout.form.SimpleForm(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._simpleform.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._simpleform, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._simpleform, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._simpleform, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._simpleform.placeAt)
                                                                this._simpleform.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._simpleform.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._simpleform, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._simpleform.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._simpleform.indexOfContent(afterElement); if (_index)this._simpleform.insertContent(child, _index + 1); else this._simpleform.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'title-elem') { this._simpleform.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._simpleform.setToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._simpleform.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._simpleform.indexOfCustomData(afterElement); if (_index)this._simpleform.insertCustomData(child, _index + 1); else this._simpleform.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._simpleform.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._simpleform.indexOfDependent(afterElement); if (_index)this._simpleform.insertDependent(child, _index + 1); else this._simpleform.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._simpleform.removeContent(child);}
if (relation == 'title-elem') {  this._simpleform.destroyTitle(child); }
if (relation == 'toolbar') {  this._simpleform.destroyToolbar(child); }
if (relation == 'tooltip') {  this._simpleform.destroyTooltip(child); }
if (relation == 'customdata') {  this._simpleform.removeCustomData(child);}
if (relation == 'layoutdata') {  this._simpleform.destroyLayoutData(child); }
if (relation == 'dependents') {  this._simpleform.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    maxContainerColsChanged(newValue){if(this._simpleform!==null){ this._simpleform.setMaxContainerCols(newValue);}}
minWidthChanged(newValue){if(this._simpleform!==null){ this._simpleform.setMinWidth(newValue);}}
widthChanged(newValue){if(this._simpleform!==null){ this._simpleform.setWidth(newValue);}}
editableChanged(newValue){if(this._simpleform!==null){ this._simpleform.setEditable(getBooleanFromAttributeValue(newValue));}}
labelMinWidthChanged(newValue){if(this._simpleform!==null){ this._simpleform.setLabelMinWidth(newValue);}}
layoutChanged(newValue){if(this._simpleform!==null){ this._simpleform.setLayout(newValue);}}
labelSpanXLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setLabelSpanXL(newValue);}}
labelSpanLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setLabelSpanL(newValue);}}
labelSpanMChanged(newValue){if(this._simpleform!==null){ this._simpleform.setLabelSpanM(newValue);}}
labelSpanSChanged(newValue){if(this._simpleform!==null){ this._simpleform.setLabelSpanS(newValue);}}
adjustLabelSpanChanged(newValue){if(this._simpleform!==null){ this._simpleform.setAdjustLabelSpan(getBooleanFromAttributeValue(newValue));}}
emptySpanXLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setEmptySpanXL(newValue);}}
emptySpanLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setEmptySpanL(newValue);}}
emptySpanMChanged(newValue){if(this._simpleform!==null){ this._simpleform.setEmptySpanM(newValue);}}
emptySpanSChanged(newValue){if(this._simpleform!==null){ this._simpleform.setEmptySpanS(newValue);}}
columnsXLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setColumnsXL(newValue);}}
columnsLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setColumnsL(newValue);}}
columnsMChanged(newValue){if(this._simpleform!==null){ this._simpleform.setColumnsM(newValue);}}
singleContainerFullSizeChanged(newValue){if(this._simpleform!==null){ this._simpleform.setSingleContainerFullSize(getBooleanFromAttributeValue(newValue));}}
breakpointXLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBreakpointXL(newValue);}}
breakpointLChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBreakpointL(newValue);}}
breakpointMChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBreakpointM(newValue);}}
backgroundDesignChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBackgroundDesign(newValue);}}
busyChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._simpleform!==null){ this._simpleform.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._simpleform!==null){ this._simpleform.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._simpleform!==null){ this._simpleform.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._simpleform!==null){ this._simpleform.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._simpleform!==null){ this._simpleform.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._simpleform!==null){ this._simpleform.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._simpleform!==null){ this._simpleform.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._simpleform!==null){ this._simpleform.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._simpleform!==null){ this._simpleform.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-slide-tile')
@inject(Element)
export class Ui5SlideTile extends Ui5Control{
        _slidetile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() displayTime = 5000;
@bindable() transitionTime = 500;
@bindable() scope = 'Display';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_slidetile')
        get UIElement() {
            return this._slidetile;
          }
        fillProperties(params){
                                        params.displayTime = this.displayTime?parseInt(this.displayTime):0;
params.transitionTime = this.transitionTime?parseInt(this.transitionTime):0;
params.scope = this.scope;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._slidetile = new sap.m.SlideTile(this.ui5Id, params);
        else
          this._slidetile = new sap.m.SlideTile(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._slidetile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._slidetile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._slidetile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._slidetile, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._slidetile.placeAt)
                                                                this._slidetile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._slidetile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._slidetile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._slidetile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tiles') { var _index = null; if (afterElement) _index = this._slidetile.indexOfTile(afterElement); if (_index)this._slidetile.insertTile(child, _index + 1); else this._slidetile.addTile(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._slidetile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._slidetile.indexOfCustomData(afterElement); if (_index)this._slidetile.insertCustomData(child, _index + 1); else this._slidetile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._slidetile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._slidetile.indexOfDependent(afterElement); if (_index)this._slidetile.insertDependent(child, _index + 1); else this._slidetile.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tiles') {  this._slidetile.removeTile(child);}
if (relation == 'tooltip') {  this._slidetile.destroyTooltip(child); }
if (relation == 'customdata') {  this._slidetile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._slidetile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._slidetile.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    displayTimeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setDisplayTime(newValue);}}
transitionTimeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setTransitionTime(newValue);}}
scopeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setScope(newValue);}}
pressChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachPress(newValue);}}
busyChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._slidetile!==null){ this._slidetile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._slidetile!==null){ this._slidetile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
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
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._splitcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
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
                 if (elem.localName == 'masterpages') { var _index = null; if (afterElement) _index = this._splitcontainer.indexOfMasterPage(afterElement); if (_index)this._splitcontainer.insertMasterPage(child, _index + 1); else this._splitcontainer.addMasterPage(child, 0);  return elem.localName; }
if (elem.localName == 'detailpages') { var _index = null; if (afterElement) _index = this._splitcontainer.indexOfDetailPage(afterElement); if (_index)this._splitcontainer.insertDetailPage(child, _index + 1); else this._splitcontainer.addDetailPage(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._splitcontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._splitcontainer.indexOfCustomData(afterElement); if (_index)this._splitcontainer.insertCustomData(child, _index + 1); else this._splitcontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._splitcontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._splitcontainer.indexOfDependent(afterElement); if (_index)this._splitcontainer.insertDependent(child, _index + 1); else this._splitcontainer.addDependent(child, 0);  return elem.localName; }

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
@customElement('ui5-standard-list-item')
@inject(Element)
export class Ui5StandardListItem extends Ui5ListItemBase{
        _standardlistitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() description = null;
@bindable() icon = null;
@bindable() iconInset = true;
@bindable() iconDensityAware = true;
@bindable() activeIcon = null;
@bindable() info = null;
@bindable() infoState = 'None';
@bindable() adaptTitleSize = true;
@bindable() titleTextDirection = 'Inherit';
@bindable() infoTextDirection = 'Inherit';
/* inherited from sap.m.ListItemBase*/
@bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_standardlistitem')
        get UIElement() {
            return this._standardlistitem;
          }
        fillProperties(params){
                                        params.title = this.title;
params.description = this.description;
params.icon = this.icon;
params.iconInset = getBooleanFromAttributeValue(this.iconInset);
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.activeIcon = this.activeIcon;
params.info = this.info;
params.infoState = this.infoState;
params.adaptTitleSize = getBooleanFromAttributeValue(this.adaptTitleSize);
params.titleTextDirection = this.titleTextDirection;
params.infoTextDirection = this.infoTextDirection;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._standardlistitem = new sap.m.StandardListItem(this.ui5Id, params);
        else
          this._standardlistitem = new sap.m.StandardListItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardlistitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._standardlistitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._standardlistitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._standardlistitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._standardlistitem.placeAt)
                                                                this._standardlistitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._standardlistitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._standardlistitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._standardlistitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._standardlistitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._standardlistitem.indexOfCustomData(afterElement); if (_index)this._standardlistitem.insertCustomData(child, _index + 1); else this._standardlistitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardlistitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._standardlistitem.indexOfDependent(afterElement); if (_index)this._standardlistitem.insertDependent(child, _index + 1); else this._standardlistitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardlistitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardlistitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._standardlistitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardlistitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setTitle(newValue);}}
descriptionChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setDescription(newValue);}}
iconChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setIcon(newValue);}}
iconInsetChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setIconInset(getBooleanFromAttributeValue(newValue));}}
iconDensityAwareChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setActiveIcon(newValue);}}
infoChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setInfo(newValue);}}
infoStateChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setInfoState(newValue);}}
adaptTitleSizeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));}}
titleTextDirectionChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setTitleTextDirection(newValue);}}
infoTextDirectionChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setInfoTextDirection(newValue);}}
typeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setType(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-standard-tile')
@inject(Element)
export class Ui5StandardTile extends Ui5Tile{
        _standardtile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() info = null;
@bindable() icon = null;
@bindable() activeIcon = null;
@bindable() number = null;
@bindable() numberUnit = null;
@bindable() infoState = 'None';
@bindable() type = 'None';
@bindable() iconDensityAware = true;
/* inherited from sap.m.Tile*/
@bindable() removable = true;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_standardtile')
        get UIElement() {
            return this._standardtile;
          }
        fillProperties(params){
                                        params.title = this.title;
params.info = this.info;
params.icon = this.icon;
params.activeIcon = this.activeIcon;
params.number = this.number;
params.numberUnit = this.numberUnit;
params.infoState = this.infoState;
params.type = this.type;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._standardtile = new sap.m.StandardTile(this.ui5Id, params);
        else
          this._standardtile = new sap.m.StandardTile(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardtile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._standardtile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._standardtile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._standardtile, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._standardtile.placeAt)
                                                                this._standardtile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._standardtile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._standardtile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._standardtile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._standardtile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._standardtile.indexOfCustomData(afterElement); if (_index)this._standardtile.insertCustomData(child, _index + 1); else this._standardtile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardtile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._standardtile.indexOfDependent(afterElement); if (_index)this._standardtile.insertDependent(child, _index + 1); else this._standardtile.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardtile.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardtile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._standardtile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardtile.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._standardtile!==null){ this._standardtile.setTitle(newValue);}}
infoChanged(newValue){if(this._standardtile!==null){ this._standardtile.setInfo(newValue);}}
iconChanged(newValue){if(this._standardtile!==null){ this._standardtile.setIcon(newValue);}}
activeIconChanged(newValue){if(this._standardtile!==null){ this._standardtile.setActiveIcon(newValue);}}
numberChanged(newValue){if(this._standardtile!==null){ this._standardtile.setNumber(newValue);}}
numberUnitChanged(newValue){if(this._standardtile!==null){ this._standardtile.setNumberUnit(newValue);}}
infoStateChanged(newValue){if(this._standardtile!==null){ this._standardtile.setInfoState(newValue);}}
typeChanged(newValue){if(this._standardtile!==null){ this._standardtile.setType(newValue);}}
iconDensityAwareChanged(newValue){if(this._standardtile!==null){ this._standardtile.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
removableChanged(newValue){if(this._standardtile!==null){ this._standardtile.setRemovable(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.Tile*/
pressChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachPress(newValue);}}
busyChanged(newValue){if(this._standardtile!==null){ this._standardtile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardtile!==null){ this._standardtile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._standardtile!==null){ this._standardtile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._standardtile!==null){ this._standardtile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardtile!==null){ this._standardtile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-standard-tree-item')
@inject(Element)
export class Ui5StandardTreeItem extends Ui5TreeItemBase{
        _standardtreeitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = '';
@bindable() icon = null;
/* inherited from sap.m.TreeItemBase*/
/* inherited from sap.m.ListItemBase*/
@bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_standardtreeitem')
        get UIElement() {
            return this._standardtreeitem;
          }
        fillProperties(params){
                                        params.title = this.title;
params.icon = this.icon;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._standardtreeitem = new sap.m.StandardTreeItem(this.ui5Id, params);
        else
          this._standardtreeitem = new sap.m.StandardTreeItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardtreeitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._standardtreeitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._standardtreeitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._standardtreeitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._standardtreeitem.placeAt)
                                                                this._standardtreeitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._standardtreeitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._standardtreeitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._standardtreeitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._standardtreeitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._standardtreeitem.indexOfCustomData(afterElement); if (_index)this._standardtreeitem.insertCustomData(child, _index + 1); else this._standardtreeitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardtreeitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._standardtreeitem.indexOfDependent(afterElement); if (_index)this._standardtreeitem.insertDependent(child, _index + 1); else this._standardtreeitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardtreeitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardtreeitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._standardtreeitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardtreeitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setTitle(newValue);}}
iconChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setIcon(newValue);}}
/* inherited from sap.m.TreeItemBase*/
typeChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setType(newValue);}}
visibleChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-switch')
@inject(Element)
export class Ui5Switch extends Ui5Control{
        _switch = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() state = false;
@bindable() customTextOn = '';
@bindable() customTextOff = '';
@bindable() enabled = true;
@bindable() name = '';
@bindable() type = 'Default';
@bindable() change = this.defaultFunc;
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
        @computedFrom('_switch')
        get UIElement() {
            return this._switch;
          }
        fillProperties(params){
                                        params.state = getBooleanFromAttributeValue(this.state);
params.customTextOn = this.customTextOn;
params.customTextOff = this.customTextOff;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.name = this.name;
params.type = this.type;
params.change = this.change==null ? this.defaultFunc: this.change;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._switch = new sap.m.Switch(this.ui5Id, params);
        else
          this._switch = new sap.m.Switch(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._switch.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._switch, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._switch, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._switch, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._switch.placeAt)
                                                                this._switch.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._switch.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._switch, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._switch.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._switch.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._switch.indexOfCustomData(afterElement); if (_index)this._switch.insertCustomData(child, _index + 1); else this._switch.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._switch.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._switch.indexOfDependent(afterElement); if (_index)this._switch.insertDependent(child, _index + 1); else this._switch.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._switch.destroyTooltip(child); }
if (relation == 'customdata') {  this._switch.removeCustomData(child);}
if (relation == 'layoutdata') {  this._switch.destroyLayoutData(child); }
if (relation == 'dependents') {  this._switch.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    stateChanged(newValue){if(this._switch!==null){ this._switch.setState(getBooleanFromAttributeValue(newValue));}}
customTextOnChanged(newValue){if(this._switch!==null){ this._switch.setCustomTextOn(newValue);}}
customTextOffChanged(newValue){if(this._switch!==null){ this._switch.setCustomTextOff(newValue);}}
enabledChanged(newValue){if(this._switch!==null){ this._switch.setEnabled(getBooleanFromAttributeValue(newValue));}}
nameChanged(newValue){if(this._switch!==null){ this._switch.setName(newValue);}}
typeChanged(newValue){if(this._switch!==null){ this._switch.setType(newValue);}}
changeChanged(newValue){if(this._switch!==null){ this._switch.attachChange(newValue);}}
busyChanged(newValue){if(this._switch!==null){ this._switch.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._switch!==null){ this._switch.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._switch!==null){ this._switch.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._switch!==null){ this._switch.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._switch!==null){ this._switch.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._switch!==null){ this._switch.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._switch!==null){ this._switch.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._switch!==null){ this._switch.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._switch!==null){ this._switch.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._switch!==null){ this._switch.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._switch!==null){ this._switch.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tab-container-item')
@inject(Element)
export class Ui5TabContainerItem extends Ui5Element{
        _tabcontaineritem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() name = '';
@bindable() key = null;
@bindable() modified = false;
@bindable() itemPropertyChanged = this.defaultFunc;
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
        @computedFrom('_tabcontaineritem')
        get UIElement() {
            return this._tabcontaineritem;
          }
        fillProperties(params){
                                        params.name = this.name;
params.key = this.key;
params.modified = getBooleanFromAttributeValue(this.modified);
params.itemPropertyChanged = this.itemPropertyChanged==null ? this.defaultFunc: this.itemPropertyChanged;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tabcontaineritem = new sap.m.TabContainerItem(this.ui5Id, params);
        else
          this._tabcontaineritem = new sap.m.TabContainerItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontaineritem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tabcontaineritem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tabcontaineritem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tabcontaineritem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tabcontaineritem.placeAt)
                                                                this._tabcontaineritem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tabcontaineritem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tabcontaineritem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tabcontaineritem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._tabcontaineritem.indexOfContent(afterElement); if (_index)this._tabcontaineritem.insertContent(child, _index + 1); else this._tabcontaineritem.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tabcontaineritem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tabcontaineritem.indexOfCustomData(afterElement); if (_index)this._tabcontaineritem.insertCustomData(child, _index + 1); else this._tabcontaineritem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tabcontaineritem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tabcontaineritem.indexOfDependent(afterElement); if (_index)this._tabcontaineritem.insertDependent(child, _index + 1); else this._tabcontaineritem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._tabcontaineritem.removeContent(child);}
if (relation == 'tooltip') {  this._tabcontaineritem.destroyTooltip(child); }
if (relation == 'customdata') {  this._tabcontaineritem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tabcontaineritem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tabcontaineritem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    nameChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.setName(newValue);}}
keyChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.setKey(newValue);}}
modifiedChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.setModified(getBooleanFromAttributeValue(newValue));}}
itemPropertyChangedChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachItemPropertyChanged(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
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
@bindable() alternateRowColors = false;
@bindable() popinLayout = 'Block';
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
        if (this._table._oGrowingDelegate){this._table._oGrowingDelegate.updateItems = function(sChangeReason) { this._onBeforePageLoaded(sChangeReason);this._onAfterPageLoaded(sChangeReason); }; }
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._table.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._table, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
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
                 if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._table.indexOfColumn(afterElement); if (_index)this._table.insertColumn(child, _index + 1); else this._table.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._table.indexOfItem(afterElement); if (_index)this._table.insertItem(child, _index + 1); else this._table.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'swipecontent') { this._table.setSwipeContent(child); return elem.localName;}
if (elem.localName == 'headertoolbar') { this._table.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._table.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._table.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._table.indexOfCustomData(afterElement); if (_index)this._table.insertCustomData(child, _index + 1); else this._table.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._table.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._table.indexOfDependent(afterElement); if (_index)this._table.insertDependent(child, _index + 1); else this._table.addDependent(child, 0);  return elem.localName; }

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
@customElement('ui5-table-select-dialog')
@inject(Element)
export class Ui5TableSelectDialog extends Ui5Control{
        _tableselectdialog = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() noDataText = null;
@bindable() multiSelect = false;
@bindable() growingThreshold = null;
@bindable() contentWidth = null;
@bindable() rememberSelections = false;
@bindable() contentHeight = null;
@bindable() confirm = this.defaultFunc;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() cancel = this.defaultFunc;
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
        @computedFrom('_tableselectdialog')
        get UIElement() {
            return this._tableselectdialog;
          }
        fillProperties(params){
                                        params.title = this.title;
params.noDataText = this.noDataText;
params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
params.growingThreshold = this.growingThreshold?parseInt(this.growingThreshold):0;
params.contentWidth = this.contentWidth;
params.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections);
params.contentHeight = this.contentHeight;
params.confirm = this.confirm==null ? this.defaultFunc: this.confirm;
params.search = this.search==null ? this.defaultFunc: this.search;
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.cancel = this.cancel==null ? this.defaultFunc: this.cancel;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tableselectdialog = new sap.m.TableSelectDialog(this.ui5Id, params);
        else
          this._tableselectdialog = new sap.m.TableSelectDialog(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tableselectdialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tableselectdialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tableselectdialog, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tableselectdialog, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tableselectdialog.placeAt)
                                                                this._tableselectdialog.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tableselectdialog.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tableselectdialog, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tableselectdialog.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfItem(afterElement); if (_index)this._tableselectdialog.insertItem(child, _index + 1); else this._tableselectdialog.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'columns') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfColumn(afterElement); if (_index)this._tableselectdialog.insertColumn(child, _index + 1); else this._tableselectdialog.addColumn(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tableselectdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfCustomData(afterElement); if (_index)this._tableselectdialog.insertCustomData(child, _index + 1); else this._tableselectdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tableselectdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tableselectdialog.indexOfDependent(afterElement); if (_index)this._tableselectdialog.insertDependent(child, _index + 1); else this._tableselectdialog.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._tableselectdialog.removeItem(child);}
if (relation == 'columns') {  this._tableselectdialog.removeColumn(child);}
if (relation == 'tooltip') {  this._tableselectdialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._tableselectdialog.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tableselectdialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tableselectdialog.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setTitle(newValue);}}
noDataTextChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setNoDataText(newValue);}}
multiSelectChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
growingThresholdChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setGrowingThreshold(newValue);}}
contentWidthChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setContentWidth(newValue);}}
rememberSelectionsChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setRememberSelections(getBooleanFromAttributeValue(newValue));}}
contentHeightChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setContentHeight(newValue);}}
confirmChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachConfirm(newValue);}}
searchChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachSearch(newValue);}}
liveChangeChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachLiveChange(newValue);}}
cancelChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachCancel(newValue);}}
busyChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tableselectdialog!==null){ this._tableselectdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-text')
@inject(Element)
export class Ui5Text extends Ui5Control{
        _text = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = '';
@bindable() textDirection = 'Inherit';
@bindable() wrapping = true;
@bindable() textAlign = 'Begin';
@bindable() width = null;
@bindable() maxLines = null;
@bindable() renderWhitespace = false;
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
        @computedFrom('_text')
        get UIElement() {
            return this._text;
          }
        fillProperties(params){
                                        params.text = (this.text != null && this.text.length>0) ? this.text : this.element.getElementsByTagName("customData")[0].innerText.trim();
params.textDirection = this.textDirection;
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.textAlign = this.textAlign;
params.width = this.width;
params.maxLines = this.maxLines?parseInt(this.maxLines):0;
params.renderWhitespace = getBooleanFromAttributeValue(this.renderWhitespace);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._text = new sap.m.Text(this.ui5Id, params);
        else
          this._text = new sap.m.Text(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._text.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._text, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._text, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._text, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._text.placeAt)
                                                                this._text.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._text.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._text, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._text.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._text.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._text.indexOfCustomData(afterElement); if (_index)this._text.insertCustomData(child, _index + 1); else this._text.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._text.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._text.indexOfDependent(afterElement); if (_index)this._text.insertDependent(child, _index + 1); else this._text.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._text.destroyTooltip(child); }
if (relation == 'customdata') {  this._text.removeCustomData(child);}
if (relation == 'layoutdata') {  this._text.destroyLayoutData(child); }
if (relation == 'dependents') {  this._text.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._text!==null){ this._text.setText(newValue);}}
textDirectionChanged(newValue){if(this._text!==null){ this._text.setTextDirection(newValue);}}
wrappingChanged(newValue){if(this._text!==null){ this._text.setWrapping(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._text!==null){ this._text.setTextAlign(newValue);}}
widthChanged(newValue){if(this._text!==null){ this._text.setWidth(newValue);}}
maxLinesChanged(newValue){if(this._text!==null){ this._text.setMaxLines(newValue);}}
renderWhitespaceChanged(newValue){if(this._text!==null){ this._text.setRenderWhitespace(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._text!==null){ this._text.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._text!==null){ this._text.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._text!==null){ this._text.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._text!==null){ this._text.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._text!==null){ this._text.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._text!==null){ this._text.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._text!==null){ this._text.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._text!==null){ this._text.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._text!==null){ this._text.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._text!==null){ this._text.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._text!==null){ this._text.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tile')
@inject(Element)
export class Ui5Tile extends Ui5Control{
        _tile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() removable = true;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_tile')
        get UIElement() {
            return this._tile;
          }
        fillProperties(params){
                                        params.removable = getBooleanFromAttributeValue(this.removable);
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tile = new sap.m.Tile(this.ui5Id, params);
        else
          this._tile = new sap.m.Tile(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tile, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tile.placeAt)
                                                                this._tile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._tile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tile.indexOfCustomData(afterElement); if (_index)this._tile.insertCustomData(child, _index + 1); else this._tile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tile.indexOfDependent(afterElement); if (_index)this._tile.insertDependent(child, _index + 1); else this._tile.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._tile.destroyTooltip(child); }
if (relation == 'customdata') {  this._tile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tile.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    removableChanged(newValue){if(this._tile!==null){ this._tile.setRemovable(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._tile!==null){ this._tile.attachPress(newValue);}}
busyChanged(newValue){if(this._tile!==null){ this._tile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tile!==null){ this._tile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tile!==null){ this._tile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tile!==null){ this._tile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tile!==null){ this._tile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tile!==null){ this._tile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tile!==null){ this._tile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tile!==null){ this._tile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tile!==null){ this._tile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tile!==null){ this._tile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tile!==null){ this._tile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tile-container')
@inject(Element)
export class Ui5TileContainer extends Ui5Control{
        _tilecontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = '100%';
@bindable() height = '100%';
@bindable() editable = null;
@bindable() allowAdd = null;
@bindable() tileMove = this.defaultFunc;
@bindable() tileDelete = this.defaultFunc;
@bindable() tileAdd = this.defaultFunc;
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
        @computedFrom('_tilecontainer')
        get UIElement() {
            return this._tilecontainer;
          }
        fillProperties(params){
                                        params.width = this.width;
params.height = this.height;
params.editable = getBooleanFromAttributeValue(this.editable);
params.allowAdd = getBooleanFromAttributeValue(this.allowAdd);
params.tileMove = this.tileMove==null ? this.defaultFunc: this.tileMove;
params.tileDelete = this.tileDelete==null ? this.defaultFunc: this.tileDelete;
params.tileAdd = this.tileAdd==null ? this.defaultFunc: this.tileAdd;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tilecontainer = new sap.m.TileContainer(this.ui5Id, params);
        else
          this._tilecontainer = new sap.m.TileContainer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tilecontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tilecontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tilecontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tilecontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tilecontainer.placeAt)
                                                                this._tilecontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tilecontainer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tilecontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tilecontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tiles') { var _index = null; if (afterElement) _index = this._tilecontainer.indexOfTile(afterElement); if (_index)this._tilecontainer.insertTile(child, _index + 1); else this._tilecontainer.addTile(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tilecontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tilecontainer.indexOfCustomData(afterElement); if (_index)this._tilecontainer.insertCustomData(child, _index + 1); else this._tilecontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tilecontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tilecontainer.indexOfDependent(afterElement); if (_index)this._tilecontainer.insertDependent(child, _index + 1); else this._tilecontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tiles') {  this._tilecontainer.removeTile(child);}
if (relation == 'tooltip') {  this._tilecontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._tilecontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tilecontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tilecontainer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setWidth(newValue);}}
heightChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setHeight(newValue);}}
editableChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setEditable(getBooleanFromAttributeValue(newValue));}}
allowAddChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setAllowAdd(getBooleanFromAttributeValue(newValue));}}
tileMoveChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachTileMove(newValue);}}
tileDeleteChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachTileDelete(newValue);}}
tileAddChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachTileAdd(newValue);}}
busyChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tile-content')
@inject(Element)
export class Ui5TileContent extends Ui5Control{
        _tilecontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() footer = null;
@bindable() footerColor = 'Neutral';
@bindable() unit = null;
@bindable() disabled = false;
@bindable() frameType = 'Auto';
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
        @computedFrom('_tilecontent')
        get UIElement() {
            return this._tilecontent;
          }
        fillProperties(params){
                                        params.footer = this.footer;
params.footerColor = this.footerColor;
params.unit = this.unit;
params.disabled = getBooleanFromAttributeValue(this.disabled);
params.frameType = this.frameType;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tilecontent = new sap.m.TileContent(this.ui5Id, params);
        else
          this._tilecontent = new sap.m.TileContent(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tilecontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tilecontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tilecontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tilecontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tilecontent.placeAt)
                                                                this._tilecontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tilecontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tilecontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tilecontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { this._tilecontent.setContent(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._tilecontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tilecontent.indexOfCustomData(afterElement); if (_index)this._tilecontent.insertCustomData(child, _index + 1); else this._tilecontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tilecontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tilecontent.indexOfDependent(afterElement); if (_index)this._tilecontent.insertDependent(child, _index + 1); else this._tilecontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._tilecontent.destroyContent(child); }
if (relation == 'tooltip') {  this._tilecontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._tilecontent.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tilecontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tilecontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    footerChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFooter(newValue);}}
footerColorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFooterColor(newValue);}}
unitChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setUnit(newValue);}}
disabledChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setDisabled(getBooleanFromAttributeValue(newValue));}}
frameTypeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFrameType(newValue);}}
busyChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-title')
@inject(Element)
export class Ui5Title extends Ui5Element{
        _title = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = null;
@bindable() icon = null;
@bindable() level = 'Auto';
@bindable() emphasized = false;
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
        @computedFrom('_title')
        get UIElement() {
            return this._title;
          }
        fillProperties(params){
                                        params.text = this.text;
params.icon = this.icon;
params.level = this.level;
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._title = new sap.ui.core.Title(this.ui5Id, params);
        else
          this._title = new sap.ui.core.Title(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._title.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._title, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._title, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._title, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._title.placeAt)
                                                                this._title.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._title.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._title, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._title.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._title.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._title.indexOfCustomData(afterElement); if (_index)this._title.insertCustomData(child, _index + 1); else this._title.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._title.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._title.indexOfDependent(afterElement); if (_index)this._title.insertDependent(child, _index + 1); else this._title.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._title.destroyTooltip(child); }
if (relation == 'customdata') {  this._title.removeCustomData(child);}
if (relation == 'layoutdata') {  this._title.destroyLayoutData(child); }
if (relation == 'dependents') {  this._title.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._title!==null){ this._title.setText(newValue);}}
iconChanged(newValue){if(this._title!==null){ this._title.setIcon(newValue);}}
levelChanged(newValue){if(this._title!==null){ this._title.setLevel(newValue);}}
emphasizedChanged(newValue){if(this._title!==null){ this._title.setEmphasized(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._title!==null){ this._title.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._title!==null){ this._title.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._title!==null){ this._title.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._title!==null){ this._title.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._title!==null){ this._title.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
export class Ui5ToastService {
  show(message, displayLength, ) {
    return new Promise((resolve, reject) => {
      sap.m.MessageToast.show(message,{
        duration: displayLength,
        onClose: () => {
          resolve();
        }
      });
    });
  }
}

@customElement('ui5-toggle-button')
@inject(Element)
export class Ui5ToggleButton extends Ui5Button{
        _togglebutton = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() pressed = false;
/* inherited from sap.m.Button*/
@bindable() text = null;
@bindable() type = 'Default';
@bindable() width = null;
@bindable() enabled = true;
@bindable() icon = null;
@bindable() iconFirst = true;
@bindable() activeIcon = null;
@bindable() iconDensityAware = true;
@bindable() textDirection = 'Inherit';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_togglebutton')
        get UIElement() {
            return this._togglebutton;
          }
        fillProperties(params){
                                        params.pressed = getBooleanFromAttributeValue(this.pressed);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._togglebutton = new sap.m.ToggleButton(this.ui5Id, params);
        else
          this._togglebutton = new sap.m.ToggleButton(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._togglebutton.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._togglebutton, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._togglebutton, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._togglebutton, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._togglebutton.placeAt)
                                                                this._togglebutton.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._togglebutton.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._togglebutton, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._togglebutton.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._togglebutton.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._togglebutton.indexOfCustomData(afterElement); if (_index)this._togglebutton.insertCustomData(child, _index + 1); else this._togglebutton.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._togglebutton.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._togglebutton.indexOfDependent(afterElement); if (_index)this._togglebutton.insertDependent(child, _index + 1); else this._togglebutton.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._togglebutton.destroyTooltip(child); }
if (relation == 'customdata') {  this._togglebutton.removeCustomData(child);}
if (relation == 'layoutdata') {  this._togglebutton.destroyLayoutData(child); }
if (relation == 'dependents') {  this._togglebutton.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    pressedChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setPressed(getBooleanFromAttributeValue(newValue));}}
textChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setText(newValue);}}
typeChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setType(newValue);}}
widthChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setWidth(newValue);}}
enabledChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setEnabled(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setIcon(newValue);}}
iconFirstChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setIconFirst(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setActiveIcon(newValue);}}
iconDensityAwareChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setTextDirection(newValue);}}
/* inherited from sap.m.Button*/
pressChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachPress(newValue);}}
busyChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._togglebutton!==null){ this._togglebutton.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-toolbar')
@inject(Element)
export class Ui5Toolbar extends Ui5Control{
        _toolbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() active = false;
@bindable() enabled = true;
@bindable() height = '';
@bindable() design = 'Auto';
@bindable() press = this.defaultFunc;
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
        @computedFrom('_toolbar')
        get UIElement() {
            return this._toolbar;
          }
        fillProperties(params){
                                        params.width = this.width;
params.active = getBooleanFromAttributeValue(this.active);
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.height = this.height;
params.design = this.design;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._toolbar = new sap.m.Toolbar(this.ui5Id, params);
        else
          this._toolbar = new sap.m.Toolbar(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._toolbar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._toolbar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._toolbar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._toolbar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._toolbar.placeAt)
                                                                this._toolbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._toolbar.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._toolbar, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._toolbar.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._toolbar.indexOfContent(afterElement); if (_index)this._toolbar.insertContent(child, _index + 1); else this._toolbar.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._toolbar.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._toolbar.indexOfCustomData(afterElement); if (_index)this._toolbar.insertCustomData(child, _index + 1); else this._toolbar.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._toolbar.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._toolbar.indexOfDependent(afterElement); if (_index)this._toolbar.insertDependent(child, _index + 1); else this._toolbar.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._toolbar.removeContent(child);}
if (relation == 'tooltip') {  this._toolbar.destroyTooltip(child); }
if (relation == 'customdata') {  this._toolbar.removeCustomData(child);}
if (relation == 'layoutdata') {  this._toolbar.destroyLayoutData(child); }
if (relation == 'dependents') {  this._toolbar.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._toolbar!==null){ this._toolbar.setWidth(newValue);}}
activeChanged(newValue){if(this._toolbar!==null){ this._toolbar.setActive(getBooleanFromAttributeValue(newValue));}}
enabledChanged(newValue){if(this._toolbar!==null){ this._toolbar.setEnabled(getBooleanFromAttributeValue(newValue));}}
heightChanged(newValue){if(this._toolbar!==null){ this._toolbar.setHeight(newValue);}}
designChanged(newValue){if(this._toolbar!==null){ this._toolbar.setDesign(newValue);}}
pressChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachPress(newValue);}}
busyChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._toolbar!==null){ this._toolbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._toolbar!==null){ this._toolbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-toolbar-spacer')
@inject(Element)
export class Ui5ToolbarSpacer extends Ui5Control{
        _toolbarspacer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = '';
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
        @computedFrom('_toolbarspacer')
        get UIElement() {
            return this._toolbarspacer;
          }
        fillProperties(params){
                                        params.width = this.width;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._toolbarspacer = new sap.m.ToolbarSpacer(this.ui5Id, params);
        else
          this._toolbarspacer = new sap.m.ToolbarSpacer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._toolbarspacer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._toolbarspacer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._toolbarspacer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._toolbarspacer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._toolbarspacer.placeAt)
                                                                this._toolbarspacer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._toolbarspacer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._toolbarspacer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._toolbarspacer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._toolbarspacer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._toolbarspacer.indexOfCustomData(afterElement); if (_index)this._toolbarspacer.insertCustomData(child, _index + 1); else this._toolbarspacer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._toolbarspacer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._toolbarspacer.indexOfDependent(afterElement); if (_index)this._toolbarspacer.insertDependent(child, _index + 1); else this._toolbarspacer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._toolbarspacer.destroyTooltip(child); }
if (relation == 'customdata') {  this._toolbarspacer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._toolbarspacer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._toolbarspacer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setWidth(newValue);}}
busyChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._toolbarspacer!==null){ this._toolbarspacer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tree-item-base')
@inject(Element)
export class Ui5TreeItemBase extends Ui5ListItemBase{
        _treeitembase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        /* inherited from sap.m.ListItemBase*/
@bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_treeitembase')
        get UIElement() {
            return this._treeitembase;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._treeitembase = new sap.m.TreeItemBase(this.ui5Id, params);
        else
          this._treeitembase = new sap.m.TreeItemBase(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._treeitembase.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._treeitembase, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._treeitembase, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._treeitembase, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._treeitembase.placeAt)
                                                                this._treeitembase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._treeitembase.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._treeitembase, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._treeitembase.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._treeitembase.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._treeitembase.indexOfCustomData(afterElement); if (_index)this._treeitembase.insertCustomData(child, _index + 1); else this._treeitembase.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._treeitembase.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._treeitembase.indexOfDependent(afterElement); if (_index)this._treeitembase.insertDependent(child, _index + 1); else this._treeitembase.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._treeitembase.destroyTooltip(child); }
if (relation == 'customdata') {  this._treeitembase.removeCustomData(child);}
if (relation == 'layoutdata') {  this._treeitembase.destroyLayoutData(child); }
if (relation == 'dependents') {  this._treeitembase.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    typeChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setType(newValue);}}
visibleChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setCounter(newValue);}}
highlightChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachPress(newValue);}}
detailPressChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._treeitembase!==null){ this._treeitembase.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-upload-collection')
@inject(Element)
export class Ui5UploadCollection extends Ui5Control{
        _uploadcollection = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() fileType = null;
@bindable() maximumFilenameLength = null;
@bindable() maximumFileSize = null;
@bindable() mimeType = null;
@bindable() multiple = false;
@bindable() noDataText = null;
@bindable() noDataDescription = null;
@bindable() sameFilenameAllowed = false;
@bindable() showSeparators = 'All';
@bindable() uploadEnabled = true;
@bindable() uploadUrl = '../../../upload';
@bindable() instantUpload = true;
@bindable() numberOfAttachmentsText = null;
@bindable() mode = 'None';
@bindable() uploadButtonInvisible = false;
@bindable() terminationEnabled = true;
@bindable() change = this.defaultFunc;
@bindable() fileDeleted = this.defaultFunc;
@bindable() filenameLengthExceed = this.defaultFunc;
@bindable() fileRenamed = this.defaultFunc;
@bindable() fileSizeExceed = this.defaultFunc;
@bindable() typeMissmatch = this.defaultFunc;
@bindable() uploadComplete = this.defaultFunc;
@bindable() uploadTerminated = this.defaultFunc;
@bindable() beforeUploadStarts = this.defaultFunc;
@bindable() selectionChange = this.defaultFunc;
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
        @computedFrom('_uploadcollection')
        get UIElement() {
            return this._uploadcollection;
          }
        fillProperties(params){
                                        params.fileType = this.fileType;
params.maximumFilenameLength = this.maximumFilenameLength?parseInt(this.maximumFilenameLength):0;
params.maximumFileSize = this.maximumFileSize;
params.mimeType = this.mimeType;
params.multiple = getBooleanFromAttributeValue(this.multiple);
params.noDataText = this.noDataText;
params.noDataDescription = this.noDataDescription;
params.sameFilenameAllowed = getBooleanFromAttributeValue(this.sameFilenameAllowed);
params.showSeparators = this.showSeparators;
params.uploadEnabled = getBooleanFromAttributeValue(this.uploadEnabled);
params.uploadUrl = this.uploadUrl;
params.instantUpload = getBooleanFromAttributeValue(this.instantUpload);
params.numberOfAttachmentsText = this.numberOfAttachmentsText;
params.mode = this.mode;
params.uploadButtonInvisible = getBooleanFromAttributeValue(this.uploadButtonInvisible);
params.terminationEnabled = getBooleanFromAttributeValue(this.terminationEnabled);
params.change = this.change==null ? this.defaultFunc: this.change;
params.fileDeleted = this.fileDeleted==null ? this.defaultFunc: this.fileDeleted;
params.filenameLengthExceed = this.filenameLengthExceed==null ? this.defaultFunc: this.filenameLengthExceed;
params.fileRenamed = this.fileRenamed==null ? this.defaultFunc: this.fileRenamed;
params.fileSizeExceed = this.fileSizeExceed==null ? this.defaultFunc: this.fileSizeExceed;
params.typeMissmatch = this.typeMissmatch==null ? this.defaultFunc: this.typeMissmatch;
params.uploadComplete = this.uploadComplete==null ? this.defaultFunc: this.uploadComplete;
params.uploadTerminated = this.uploadTerminated==null ? this.defaultFunc: this.uploadTerminated;
params.beforeUploadStarts = this.beforeUploadStarts==null ? this.defaultFunc: this.beforeUploadStarts;
params.selectionChange = this.selectionChange==null ? this.defaultFunc: this.selectionChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._uploadcollection = new sap.m.UploadCollection(this.ui5Id, params);
        else
          this._uploadcollection = new sap.m.UploadCollection(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollection.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollection, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._uploadcollection, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._uploadcollection, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._uploadcollection.placeAt)
                                                                this._uploadcollection.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._uploadcollection.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollection, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._uploadcollection.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfItem(afterElement); if (_index)this._uploadcollection.insertItem(child, _index + 1); else this._uploadcollection.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'headerparameters') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfHeaderParameter(afterElement); if (_index)this._uploadcollection.insertHeaderParameter(child, _index + 1); else this._uploadcollection.addHeaderParameter(child, 0);  return elem.localName; }
if (elem.localName == 'parameters') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfParameter(afterElement); if (_index)this._uploadcollection.insertParameter(child, _index + 1); else this._uploadcollection.addParameter(child, 0);  return elem.localName; }
if (elem.localName == 'toolbar') { this._uploadcollection.setToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._uploadcollection.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._uploadcollection.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfCustomData(afterElement); if (_index)this._uploadcollection.insertCustomData(child, _index + 1); else this._uploadcollection.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._uploadcollection.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfDependent(afterElement); if (_index)this._uploadcollection.insertDependent(child, _index + 1); else this._uploadcollection.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._uploadcollection.removeItem(child);}
if (relation == 'headerparameters') {  this._uploadcollection.removeHeaderParameter(child);}
if (relation == 'parameters') {  this._uploadcollection.removeParameter(child);}
if (relation == 'toolbar') {  this._uploadcollection.destroyToolbar(child); }
if (relation == 'infotoolbar') {  this._uploadcollection.destroyInfoToolbar(child); }
if (relation == 'tooltip') {  this._uploadcollection.destroyTooltip(child); }
if (relation == 'customdata') {  this._uploadcollection.removeCustomData(child);}
if (relation == 'layoutdata') {  this._uploadcollection.destroyLayoutData(child); }
if (relation == 'dependents') {  this._uploadcollection.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    fileTypeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setFileType(newValue);}}
maximumFilenameLengthChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMaximumFilenameLength(newValue);}}
maximumFileSizeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMaximumFileSize(newValue);}}
mimeTypeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMimeType(newValue);}}
multipleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMultiple(getBooleanFromAttributeValue(newValue));}}
noDataTextChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setNoDataText(newValue);}}
noDataDescriptionChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setNoDataDescription(newValue);}}
sameFilenameAllowedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));}}
showSeparatorsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setShowSeparators(newValue);}}
uploadEnabledChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setUploadEnabled(getBooleanFromAttributeValue(newValue));}}
uploadUrlChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setUploadUrl(newValue);}}
instantUploadChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setInstantUpload(getBooleanFromAttributeValue(newValue));}}
numberOfAttachmentsTextChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setNumberOfAttachmentsText(newValue);}}
modeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMode(newValue);}}
uploadButtonInvisibleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setUploadButtonInvisible(getBooleanFromAttributeValue(newValue));}}
terminationEnabledChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setTerminationEnabled(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachChange(newValue);}}
fileDeletedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFileDeleted(newValue);}}
filenameLengthExceedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFilenameLengthExceed(newValue);}}
fileRenamedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFileRenamed(newValue);}}
fileSizeExceedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFileSizeExceed(newValue);}}
typeMissmatchChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachTypeMissmatch(newValue);}}
uploadCompleteChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachUploadComplete(newValue);}}
uploadTerminatedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachUploadTerminated(newValue);}}
beforeUploadStartsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachBeforeUploadStarts(newValue);}}
selectionChangeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachSelectionChange(newValue);}}
busyChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-upload-collection-item')
@inject(Element)
export class Ui5UploadCollectionItem extends Ui5Element{
        _uploadcollectionitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() documentId = null;
@bindable() fileName = null;
@bindable() mimeType = null;
@bindable() thumbnailUrl = null;
@bindable() url = null;
@bindable() enableEdit = true;
@bindable() enableDelete = true;
@bindable() visibleEdit = true;
@bindable() visibleDelete = true;
@bindable() ariaLabelForPicture = null;
@bindable() selected = false;
@bindable() press = this.defaultFunc;
@bindable() deletePress = this.defaultFunc;
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
        @computedFrom('_uploadcollectionitem')
        get UIElement() {
            return this._uploadcollectionitem;
          }
        fillProperties(params){
                                        params.documentId = this.documentId;
params.fileName = this.fileName;
params.mimeType = this.mimeType;
params.thumbnailUrl = this.thumbnailUrl;
params.url = this.url;
params.enableEdit = getBooleanFromAttributeValue(this.enableEdit);
params.enableDelete = getBooleanFromAttributeValue(this.enableDelete);
params.visibleEdit = getBooleanFromAttributeValue(this.visibleEdit);
params.visibleDelete = getBooleanFromAttributeValue(this.visibleDelete);
params.ariaLabelForPicture = this.ariaLabelForPicture;
params.selected = getBooleanFromAttributeValue(this.selected);
params.press = this.press==null ? this.defaultFunc: this.press;
params.deletePress = this.deletePress==null ? this.defaultFunc: this.deletePress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._uploadcollectionitem = new sap.m.UploadCollectionItem(this.ui5Id, params);
        else
          this._uploadcollectionitem = new sap.m.UploadCollectionItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollectionitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._uploadcollectionitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._uploadcollectionitem.placeAt)
                                                                this._uploadcollectionitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._uploadcollectionitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollectionitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._uploadcollectionitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'attributes') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfAttribute(afterElement); if (_index)this._uploadcollectionitem.insertAttribute(child, _index + 1); else this._uploadcollectionitem.addAttribute(child, 0);  return elem.localName; }
if (elem.localName == 'statuses') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfStatus(afterElement); if (_index)this._uploadcollectionitem.insertStatus(child, _index + 1); else this._uploadcollectionitem.addStatus(child, 0);  return elem.localName; }
if (elem.localName == 'markers') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfMarker(afterElement); if (_index)this._uploadcollectionitem.insertMarker(child, _index + 1); else this._uploadcollectionitem.addMarker(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._uploadcollectionitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfCustomData(afterElement); if (_index)this._uploadcollectionitem.insertCustomData(child, _index + 1); else this._uploadcollectionitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._uploadcollectionitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfDependent(afterElement); if (_index)this._uploadcollectionitem.insertDependent(child, _index + 1); else this._uploadcollectionitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'attributes') {  this._uploadcollectionitem.removeAttribute(child);}
if (relation == 'statuses') {  this._uploadcollectionitem.removeStatus(child);}
if (relation == 'markers') {  this._uploadcollectionitem.removeMarker(child);}
if (relation == 'tooltip') {  this._uploadcollectionitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._uploadcollectionitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._uploadcollectionitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._uploadcollectionitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    documentIdChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setDocumentId(newValue);}}
fileNameChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setFileName(newValue);}}
mimeTypeChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setMimeType(newValue);}}
thumbnailUrlChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setThumbnailUrl(newValue);}}
urlChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setUrl(newValue);}}
enableEditChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setEnableEdit(getBooleanFromAttributeValue(newValue));}}
enableDeleteChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setEnableDelete(getBooleanFromAttributeValue(newValue));}}
visibleEditChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setVisibleEdit(getBooleanFromAttributeValue(newValue));}}
visibleDeleteChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setVisibleDelete(getBooleanFromAttributeValue(newValue));}}
ariaLabelForPictureChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setAriaLabelForPicture(newValue);}}
selectedChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setSelected(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachPress(newValue);}}
deletePressChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachDeletePress(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-upload-collection-parameter')
@inject(Element)
export class Ui5UploadCollectionParameter extends Ui5Element{
        _uploadcollectionparameter = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() name = null;
@bindable() value = null;
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
        @computedFrom('_uploadcollectionparameter')
        get UIElement() {
            return this._uploadcollectionparameter;
          }
        fillProperties(params){
                                        params.name = this.name;
params.value = this.value;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(this.ui5Id, params);
        else
          this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollectionparameter.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._uploadcollectionparameter.placeAt)
                                                                this._uploadcollectionparameter.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._uploadcollectionparameter.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollectionparameter, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._uploadcollectionparameter.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._uploadcollectionparameter.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._uploadcollectionparameter.indexOfCustomData(afterElement); if (_index)this._uploadcollectionparameter.insertCustomData(child, _index + 1); else this._uploadcollectionparameter.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._uploadcollectionparameter.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._uploadcollectionparameter.indexOfDependent(afterElement); if (_index)this._uploadcollectionparameter.insertDependent(child, _index + 1); else this._uploadcollectionparameter.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._uploadcollectionparameter.destroyTooltip(child); }
if (relation == 'customdata') {  this._uploadcollectionparameter.removeCustomData(child);}
if (relation == 'layoutdata') {  this._uploadcollectionparameter.destroyLayoutData(child); }
if (relation == 'dependents') {  this._uploadcollectionparameter.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    nameChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.setName(newValue);}}
valueChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.setValue(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-vertical-layout')
@inject(Element)
export class Ui5VerticalLayout extends Ui5Control{
        _verticallayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() enabled = true;
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
        @computedFrom('_verticallayout')
        get UIElement() {
            return this._verticallayout;
          }
        fillProperties(params){
                                        params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._verticallayout = new sap.ui.layout.VerticalLayout(this.ui5Id, params);
        else
          this._verticallayout = new sap.ui.layout.VerticalLayout(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._verticallayout.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._verticallayout, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._verticallayout, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._verticallayout, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._verticallayout.placeAt)
                                                                this._verticallayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._verticallayout.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._verticallayout, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._verticallayout.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._verticallayout.indexOfContent(afterElement); if (_index)this._verticallayout.insertContent(child, _index + 1); else this._verticallayout.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._verticallayout.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._verticallayout.indexOfCustomData(afterElement); if (_index)this._verticallayout.insertCustomData(child, _index + 1); else this._verticallayout.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._verticallayout.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._verticallayout.indexOfDependent(afterElement); if (_index)this._verticallayout.insertDependent(child, _index + 1); else this._verticallayout.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._verticallayout.removeContent(child);}
if (relation == 'tooltip') {  this._verticallayout.destroyTooltip(child); }
if (relation == 'customdata') {  this._verticallayout.removeCustomData(child);}
if (relation == 'layoutdata') {  this._verticallayout.destroyLayoutData(child); }
if (relation == 'dependents') {  this._verticallayout.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setWidth(newValue);}}
enabledChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setEnabled(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-view-settings-dialog')
@inject(Element)
export class Ui5ViewSettingsDialog extends Ui5Control{
        _viewsettingsdialog = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() sortDescending = false;
@bindable() groupDescending = false;
@bindable() filterSearchOperator = 'StartsWith';
@bindable() confirm = this.defaultFunc;
@bindable() cancel = this.defaultFunc;
@bindable() resetFilters = this.defaultFunc;
@bindable() filterDetailPageOpened = this.defaultFunc;
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
        @computedFrom('_viewsettingsdialog')
        get UIElement() {
            return this._viewsettingsdialog;
          }
        fillProperties(params){
                                        params.title = this.title;
params.sortDescending = getBooleanFromAttributeValue(this.sortDescending);
params.groupDescending = getBooleanFromAttributeValue(this.groupDescending);
params.filterSearchOperator = this.filterSearchOperator;
params.confirm = this.confirm==null ? this.defaultFunc: this.confirm;
params.cancel = this.cancel==null ? this.defaultFunc: this.cancel;
params.resetFilters = this.resetFilters==null ? this.defaultFunc: this.resetFilters;
params.filterDetailPageOpened = this.filterDetailPageOpened==null ? this.defaultFunc: this.filterDetailPageOpened;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._viewsettingsdialog = new sap.m.ViewSettingsDialog(this.ui5Id, params);
        else
          this._viewsettingsdialog = new sap.m.ViewSettingsDialog(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._viewsettingsdialog.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._viewsettingsdialog, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._viewsettingsdialog, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._viewsettingsdialog, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._viewsettingsdialog.placeAt)
                                                                this._viewsettingsdialog.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._viewsettingsdialog.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._viewsettingsdialog, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._viewsettingsdialog.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'sortitems') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfSortItem(afterElement); if (_index)this._viewsettingsdialog.insertSortItem(child, _index + 1); else this._viewsettingsdialog.addSortItem(child, 0);  return elem.localName; }
if (elem.localName == 'groupitems') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfGroupItem(afterElement); if (_index)this._viewsettingsdialog.insertGroupItem(child, _index + 1); else this._viewsettingsdialog.addGroupItem(child, 0);  return elem.localName; }
if (elem.localName == 'filteritems') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfFilterItem(afterElement); if (_index)this._viewsettingsdialog.insertFilterItem(child, _index + 1); else this._viewsettingsdialog.addFilterItem(child, 0);  return elem.localName; }
if (elem.localName == 'presetfilteritems') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfPresetFilterItem(afterElement); if (_index)this._viewsettingsdialog.insertPresetFilterItem(child, _index + 1); else this._viewsettingsdialog.addPresetFilterItem(child, 0);  return elem.localName; }
if (elem.localName == 'customtabs') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfCustomTab(afterElement); if (_index)this._viewsettingsdialog.insertCustomTab(child, _index + 1); else this._viewsettingsdialog.addCustomTab(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._viewsettingsdialog.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfCustomData(afterElement); if (_index)this._viewsettingsdialog.insertCustomData(child, _index + 1); else this._viewsettingsdialog.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._viewsettingsdialog.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._viewsettingsdialog.indexOfDependent(afterElement); if (_index)this._viewsettingsdialog.insertDependent(child, _index + 1); else this._viewsettingsdialog.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'sortitems') {  this._viewsettingsdialog.removeSortItem(child);}
if (relation == 'groupitems') {  this._viewsettingsdialog.removeGroupItem(child);}
if (relation == 'filteritems') {  this._viewsettingsdialog.removeFilterItem(child);}
if (relation == 'presetfilteritems') {  this._viewsettingsdialog.removePresetFilterItem(child);}
if (relation == 'customtabs') {  this._viewsettingsdialog.removeCustomTab(child);}
if (relation == 'tooltip') {  this._viewsettingsdialog.destroyTooltip(child); }
if (relation == 'customdata') {  this._viewsettingsdialog.removeCustomData(child);}
if (relation == 'layoutdata') {  this._viewsettingsdialog.destroyLayoutData(child); }
if (relation == 'dependents') {  this._viewsettingsdialog.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setTitle(newValue);}}
sortDescendingChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setSortDescending(getBooleanFromAttributeValue(newValue));}}
groupDescendingChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setGroupDescending(getBooleanFromAttributeValue(newValue));}}
filterSearchOperatorChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setFilterSearchOperator(newValue);}}
confirmChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachConfirm(newValue);}}
cancelChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachCancel(newValue);}}
resetFiltersChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachResetFilters(newValue);}}
filterDetailPageOpenedChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachFilterDetailPageOpened(newValue);}}
busyChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._viewsettingsdialog!==null){ this._viewsettingsdialog.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-view-settings-filter-item')
@inject(Element)
export class Ui5ViewSettingsFilterItem extends Ui5ViewSettingsItem{
        _viewsettingsfilteritem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() multiSelect = true;
@bindable() filterDetailItemsAggregationChange = this.defaultFunc;
/* inherited from sap.m.ViewSettingsItem*/
@bindable() selected = false;
@bindable() itemPropertyChanged = this.defaultFunc;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_viewsettingsfilteritem')
        get UIElement() {
            return this._viewsettingsfilteritem;
          }
        fillProperties(params){
                                        params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
params.filterDetailItemsAggregationChange = this.filterDetailItemsAggregationChange==null ? this.defaultFunc: this.filterDetailItemsAggregationChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(this.ui5Id, params);
        else
          this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._viewsettingsfilteritem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._viewsettingsfilteritem.placeAt)
                                                                this._viewsettingsfilteritem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._viewsettingsfilteritem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._viewsettingsfilteritem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._viewsettingsfilteritem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._viewsettingsfilteritem.indexOfItem(afterElement); if (_index)this._viewsettingsfilteritem.insertItem(child, _index + 1); else this._viewsettingsfilteritem.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._viewsettingsfilteritem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._viewsettingsfilteritem.indexOfCustomData(afterElement); if (_index)this._viewsettingsfilteritem.insertCustomData(child, _index + 1); else this._viewsettingsfilteritem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._viewsettingsfilteritem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._viewsettingsfilteritem.indexOfDependent(afterElement); if (_index)this._viewsettingsfilteritem.insertDependent(child, _index + 1); else this._viewsettingsfilteritem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._viewsettingsfilteritem.removeItem(child);}
if (relation == 'tooltip') {  this._viewsettingsfilteritem.destroyTooltip(child); }
if (relation == 'customdata') {  this._viewsettingsfilteritem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._viewsettingsfilteritem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._viewsettingsfilteritem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    multiSelectChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
filterDetailItemsAggregationChangeChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachFilterDetailItemsAggregationChange(newValue);}}
selectedChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setSelected(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.ViewSettingsItem*/
itemPropertyChangedChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachItemPropertyChanged(newValue);}}
textChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setText(newValue);}}
enabledChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-wizard')
@inject(Element)
export class Ui5Wizard extends Ui5Control{
        _wizard = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = 'auto';
@bindable() height = '100%';
@bindable() showNextButton = true;
@bindable() finishButtonText = 'Review';
@bindable() enableBranching = false;
@bindable() lastStep = false;
@bindable() stepActivate = this.defaultFunc;
@bindable() complete = this.defaultFunc;
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
        @computedFrom('_wizard')
        get UIElement() {
            return this._wizard;
          }
        fillProperties(params){
                                        params.width = this.width;
params.height = this.height;
params.showNextButton = getBooleanFromAttributeValue(this.showNextButton);
params.finishButtonText = this.finishButtonText;
params.enableBranching = getBooleanFromAttributeValue(this.enableBranching);
params.stepActivate = this.stepActivate==null ? this.defaultFunc: this.stepActivate;
params.complete = this.complete==null ? this.defaultFunc: this.complete;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._wizard = new sap.m.Wizard(this.ui5Id, params);
        else
          this._wizard = new sap.m.Wizard(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizard.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._wizard, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._wizard, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._wizard, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._wizard.placeAt)
                                                                this._wizard.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._wizard.attachStepActivate((event) => { that.lastStep = event.mParameters.index == that._wizard.getSteps().length;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._wizard.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._wizard, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._wizard.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'steps') { var _index = null; if (afterElement) _index = this._wizard.indexOfStep(afterElement); if (_index)this._wizard.addStep(child, _index + 1); else this._wizard.addStep(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._wizard.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._wizard.indexOfCustomData(afterElement); if (_index)this._wizard.addCustomData(child, _index + 1); else this._wizard.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._wizard.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._wizard.indexOfDependent(afterElement); if (_index)this._wizard.addDependent(child, _index + 1); else this._wizard.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'steps') {  this._wizard.removeStep(child);}
if (relation == 'tooltip') {  this._wizard.destroyTooltip(child); }
if (relation == 'customdata') {  this._wizard.removeCustomData(child);}
if (relation == 'layoutdata') {  this._wizard.destroyLayoutData(child); }
if (relation == 'dependents') {  this._wizard.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._wizard!==null){ this._wizard.setWidth(newValue);}}
heightChanged(newValue){if(this._wizard!==null){ this._wizard.setHeight(newValue);}}
showNextButtonChanged(newValue){if(this._wizard!==null){ this._wizard.setShowNextButton(getBooleanFromAttributeValue(newValue));}}
finishButtonTextChanged(newValue){if(this._wizard!==null){ this._wizard.setFinishButtonText(newValue);}}
enableBranchingChanged(newValue){if(this._wizard!==null){ this._wizard.setEnableBranching(getBooleanFromAttributeValue(newValue));}}
stepActivateChanged(newValue){if(this._wizard!==null){ this._wizard.attachStepActivate(newValue);}}
completeChanged(newValue){if(this._wizard!==null){ this._wizard.attachComplete(newValue);}}
busyChanged(newValue){if(this._wizard!==null){ this._wizard.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._wizard!==null){ this._wizard.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._wizard!==null){ this._wizard.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._wizard!==null){ this._wizard.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._wizard!==null){ this._wizard.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._wizard!==null){ this._wizard.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._wizard!==null){ this._wizard.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._wizard!==null){ this._wizard.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._wizard!==null){ this._wizard.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-wizard-step')
@inject(Element)
export class Ui5WizardStep extends Ui5Control{
        _wizardstep = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = '';
@bindable() icon = '';
@bindable() validated = true;
@bindable() complete = this.defaultFunc;
@bindable() activate = this.defaultFunc;
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
        @computedFrom('_wizardstep')
        get UIElement() {
            return this._wizardstep;
          }
        fillProperties(params){
                                        params.title = this.title;
params.icon = this.icon;
params.validated = getBooleanFromAttributeValue(this.validated);
params.complete = this.complete==null ? this.defaultFunc: this.complete;
params.activate = this.activate==null ? this.defaultFunc: this.activate;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._wizardstep = new sap.m.WizardStep(this.ui5Id, params);
        else
          this._wizardstep = new sap.m.WizardStep(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._wizardstep.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._wizardstep, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._wizardstep.placeAt)
                                                                this._wizardstep.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._wizardstep.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._wizardstep, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._wizardstep.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfContent(afterElement); if (_index)this._wizardstep.insertContent(child, _index + 1); else this._wizardstep.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._wizardstep.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfCustomData(afterElement); if (_index)this._wizardstep.insertCustomData(child, _index + 1); else this._wizardstep.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._wizardstep.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._wizardstep.indexOfDependent(afterElement); if (_index)this._wizardstep.insertDependent(child, _index + 1); else this._wizardstep.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._wizardstep.removeContent(child);}
if (relation == 'tooltip') {  this._wizardstep.destroyTooltip(child); }
if (relation == 'customdata') {  this._wizardstep.removeCustomData(child);}
if (relation == 'layoutdata') {  this._wizardstep.destroyLayoutData(child); }
if (relation == 'dependents') {  this._wizardstep.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setTitle(newValue);}}
iconChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setIcon(newValue);}}
validatedChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setValidated(getBooleanFromAttributeValue(newValue));}}
completeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachComplete(newValue);}}
activateChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachActivate(newValue);}}
busyChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._wizardstep!==null){ this._wizardstep.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-view-settings-item')
@inject(Element)
export class Ui5ViewSettingsItem extends Ui5Item{
        _viewsettingsitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() selected = false;
@bindable() itemPropertyChanged = this.defaultFunc;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_viewsettingsitem')
        get UIElement() {
            return this._viewsettingsitem;
          }
        fillProperties(params){
                                        params.selected = getBooleanFromAttributeValue(this.selected);
params.itemPropertyChanged = this.itemPropertyChanged==null ? this.defaultFunc: this.itemPropertyChanged;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._viewsettingsitem = new sap.m.ViewSettingsItem(this.ui5Id, params);
        else
          this._viewsettingsitem = new sap.m.ViewSettingsItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._viewsettingsitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._viewsettingsitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._viewsettingsitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._viewsettingsitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._viewsettingsitem.placeAt)
                                                                this._viewsettingsitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._viewsettingsitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._viewsettingsitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._viewsettingsitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._viewsettingsitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._viewsettingsitem.indexOfCustomData(afterElement); if (_index)this._viewsettingsitem.insertCustomData(child, _index + 1); else this._viewsettingsitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._viewsettingsitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._viewsettingsitem.indexOfDependent(afterElement); if (_index)this._viewsettingsitem.insertDependent(child, _index + 1); else this._viewsettingsitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._viewsettingsitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._viewsettingsitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._viewsettingsitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._viewsettingsitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    selectedChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setSelected(getBooleanFromAttributeValue(newValue));}}
itemPropertyChangedChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachItemPropertyChanged(newValue);}}
textChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setText(newValue);}}
enabledChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-m-title')
@inject(Element)
export class Ui5mTitle extends Ui5Control{
        _mtitle = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = null;
@bindable() level = 'Auto';
@bindable() titleStyle = 'Auto';
@bindable() width = null;
@bindable() textAlign = 'Initial';
@bindable() wrapping = false;
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
        @computedFrom('_mtitle')
        get UIElement() {
            return this._mtitle;
          }
        fillProperties(params){
                                        params.text = this.text;
params.level = this.level;
params.titleStyle = this.titleStyle;
params.width = this.width;
params.textAlign = this.textAlign;
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._mtitle = new sap.m.Title(this.ui5Id, params);
        else
          this._mtitle = new sap.m.Title(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._mtitle.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._mtitle, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._mtitle, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._mtitle, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._mtitle.placeAt)
                                                                this._mtitle.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._mtitle.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._mtitle, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._mtitle.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._mtitle.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._mtitle.indexOfCustomData(afterElement); if (_index)this._mtitle.insertCustomData(child, _index + 1); else this._mtitle.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._mtitle.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._mtitle.indexOfDependent(afterElement); if (_index)this._mtitle.insertDependent(child, _index + 1); else this._mtitle.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._mtitle.destroyTooltip(child); }
if (relation == 'customdata') {  this._mtitle.removeCustomData(child);}
if (relation == 'layoutdata') {  this._mtitle.destroyLayoutData(child); }
if (relation == 'dependents') {  this._mtitle.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._mtitle!==null){ this._mtitle.setText(newValue);}}
levelChanged(newValue){if(this._mtitle!==null){ this._mtitle.setLevel(newValue);}}
titleStyleChanged(newValue){if(this._mtitle!==null){ this._mtitle.setTitleStyle(newValue);}}
widthChanged(newValue){if(this._mtitle!==null){ this._mtitle.setWidth(newValue);}}
textAlignChanged(newValue){if(this._mtitle!==null){ this._mtitle.setTextAlign(newValue);}}
wrappingChanged(newValue){if(this._mtitle!==null){ this._mtitle.setWrapping(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._mtitle!==null){ this._mtitle.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._mtitle!==null){ this._mtitle.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tab-container')
@inject(Element)
export class Ui5TabContainer extends Ui5Control{
        _tabcontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() showAddNewButton = false;
@bindable() itemClose = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() addNewButtonPress = this.defaultFunc;
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
        @computedFrom('_tabcontainer')
        get UIElement() {
            return this._tabcontainer;
          }
        fillProperties(params){
                                        params.showAddNewButton = getBooleanFromAttributeValue(this.showAddNewButton);
params.itemClose = this.itemClose==null ? this.defaultFunc: this.itemClose;
params.itemSelect = this.itemSelect==null ? this.defaultFunc: this.itemSelect;
params.addNewButtonPress = this.addNewButtonPress==null ? this.defaultFunc: this.addNewButtonPress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tabcontainer = new sap.m.TabContainer(this.ui5Id, params);
        else
          this._tabcontainer = new sap.m.TabContainer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tabcontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tabcontainer.placeAt)
                                                                this._tabcontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tabcontainer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tabcontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tabcontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfItem(afterElement); if (_index)this._tabcontainer.insertItem(child, _index + 1); else this._tabcontainer.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tabcontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfCustomData(afterElement); if (_index)this._tabcontainer.insertCustomData(child, _index + 1); else this._tabcontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tabcontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfDependent(afterElement); if (_index)this._tabcontainer.insertDependent(child, _index + 1); else this._tabcontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._tabcontainer.removeItem(child);}
if (relation == 'tooltip') {  this._tabcontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._tabcontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tabcontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tabcontainer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    showAddNewButtonChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setShowAddNewButton(getBooleanFromAttributeValue(newValue));}}
itemCloseChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachItemClose(newValue);}}
itemSelectChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachItemSelect(newValue);}}
addNewButtonPressChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachAddNewButtonPress(newValue);}}
busyChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }
@customElement('ui5-tree')
@inject(Element)
export class Ui5Tree extends Ui5ListBase {
  _tree = null;
  _parent = null;
  _relation = null;
  @bindable ui5Id = null;
  @bindable() toggleOpenState = this.defaultFunc;
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
  @computedFrom('_tree')
  get UIElement() {
    return this._tree;
  }
  fillProperties(params) {
    params.toggleOpenState = this.toggleOpenState == null ? this.defaultFunc : this.toggleOpenState;

    super.fillProperties(params);
  }
  defaultFunc() {
  }
  attached() {
    var that = this;
    var params = {};
    this.fillProperties(params);
    if (this.ui5Id)
      this._tree = new sap.m.Tree(this.ui5Id, params);
    else
      this._tree = new sap.m.Tree(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tree.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tree, this.element, prevSibling);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
      else {
        this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
          this._relation = this._parent.addChild(this._tree, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tree, this.element);
        this.attributeManager.addAttributes({ "ui5-container": '' });
      }
    }
    else {
      if (this._tree.placeAt)
        this._tree.placeAt(this.element.parentElement);
      this.attributeManager.addAttributes({ "ui5-container": '' });
      this.attributeManager.addClasses("ui5-hide");
    }

    //<!container>

    //</!container>
    this.attributeManager.addAttributes({ "ui5-id": this._tree.sId });


  }
  detached() {
    try {
      if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
          this._parent.removeChildByRelation(this._tree, this._relation);
        }
      }
      else {
        this._tree.destroy();
      }
      super.detached();
    }
    catch (err) { }
  }

  addChild(child, elem, afterElement) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      try {
        if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tree.indexOfItem(afterElement); if (_index) this._tree.insertItem(child, _index + 1); else this._tree.addItem(child, 0); return elem.localName; }
        if (elem.localName == 'swipecontent') { this._tree.setSwipeContent(child); return elem.localName; }
        if (elem.localName == 'headertoolbar') { this._tree.setHeaderToolbar(child); return elem.localName; }
        if (elem.localName == 'infotoolbar') { this._tree.setInfoToolbar(child); return elem.localName; }
        if (elem.localName == 'tooltip') { this._tree.setTooltip(child); return elem.localName; }
        if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tree.indexOfCustomData(afterElement); if (_index) this._tree.insertCustomData(child, _index + 1); else this._tree.addCustomData(child, 0); return elem.localName; }
        if (elem.localName == 'layoutdata') { this._tree.setLayoutData(child); return elem.localName; }
        if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tree.indexOfDependent(afterElement); if (_index) this._tree.insertDependent(child, _index + 1); else this._tree.addDependent(child, 0); return elem.localName; }

      }
      catch (err) { }
    }
  }
  removeChildByRelation(child, relation) {
    try {
      if (relation == 'items') { this._tree.removeItem(child); }
      if (relation == 'swipecontent') { this._tree.destroySwipeContent(child); }
      if (relation == 'headertoolbar') { this._tree.destroyHeaderToolbar(child); }
      if (relation == 'infotoolbar') { this._tree.destroyInfoToolbar(child); }
      if (relation == 'tooltip') { this._tree.destroyTooltip(child); }
      if (relation == 'customdata') { this._tree.removeCustomData(child); }
      if (relation == 'layoutdata') { this._tree.destroyLayoutData(child); }
      if (relation == 'dependents') { this._tree.removeDependent(child); }

    }
    catch (err) { }
  }
  toggleOpenStateChanged(newValue) { if (this._tree !== null) { this._tree.attachToggleOpenState(newValue); } }
  insetChanged(newValue) { if (this._tree !== null) { this._tree.setInset(getBooleanFromAttributeValue(newValue)); } }
  headerTextChanged(newValue) { if (this._tree !== null) { this._tree.setHeaderText(newValue); } }
  footerTextChanged(newValue) { if (this._tree !== null) { this._tree.setFooterText(newValue); } }
  modeChanged(newValue) { if (this._tree !== null) { this._tree.setMode(newValue); } }
  widthChanged(newValue) { if (this._tree !== null) { this._tree.setWidth(newValue); } }
  includeItemInSelectionChanged(newValue) { if (this._tree !== null) { this._tree.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue)); } }
  showUnreadChanged(newValue) { if (this._tree !== null) { this._tree.setShowUnread(getBooleanFromAttributeValue(newValue)); } }
  noDataTextChanged(newValue) { if (this._tree !== null) { this._tree.setNoDataText(newValue); } }
  showNoDataChanged(newValue) { if (this._tree !== null) { this._tree.setShowNoData(getBooleanFromAttributeValue(newValue)); } }
  enableBusyIndicatorChanged(newValue) { if (this._tree !== null) { this._tree.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue)); } }
  modeAnimationOnChanged(newValue) { if (this._tree !== null) { this._tree.setModeAnimationOn(getBooleanFromAttributeValue(newValue)); } }
  showSeparatorsChanged(newValue) { if (this._tree !== null) { this._tree.setShowSeparators(newValue); } }
  swipeDirectionChanged(newValue) { if (this._tree !== null) { this._tree.setSwipeDirection(newValue); } }
  growingChanged(newValue) { if (this._tree !== null) { this._tree.setGrowing(getBooleanFromAttributeValue(newValue)); } }
  growingThresholdChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingThreshold(newValue); } }
  growingTriggerTextChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingTriggerText(newValue); } }
  growingScrollToLoadChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue)); } }
  growingDirectionChanged(newValue) { if (this._tree !== null) { this._tree.setGrowingDirection(newValue); } }
  rememberSelectionsChanged(newValue) { if (this._tree !== null) { this._tree.setRememberSelections(getBooleanFromAttributeValue(newValue)); } }
  keyboardModeChanged(newValue) { if (this._tree !== null) { this._tree.setKeyboardMode(newValue); } }
  /* inherited from sap.m.ListBase*/
  selectionChangeChanged(newValue) { if (this._tree !== null) { this._tree.attachSelectionChange(newValue); } }
  deleteChanged(newValue) { if (this._tree !== null) { this._tree.attachDelete(newValue); } }
  swipeChanged(newValue) { if (this._tree !== null) { this._tree.attachSwipe(newValue); } }
  updateStartedChanged(newValue) { if (this._tree !== null) { this._tree.attachUpdateStarted(newValue); } }
  updateFinishedChanged(newValue) { if (this._tree !== null) { this._tree.attachUpdateFinished(newValue); } }
  itemPressChanged(newValue) { if (this._tree !== null) { this._tree.attachItemPress(newValue); } }
  busyChanged(newValue) { if (this._tree !== null) { this._tree.setBusy(getBooleanFromAttributeValue(newValue)); } }
  busyIndicatorDelayChanged(newValue) { if (this._tree !== null) { this._tree.setBusyIndicatorDelay(newValue); } }
  busyIndicatorSizeChanged(newValue) { if (this._tree !== null) { this._tree.setBusyIndicatorSize(newValue); } }
  visibleChanged(newValue) { if (this._tree !== null) { this._tree.setVisible(getBooleanFromAttributeValue(newValue)); } }
  fieldGroupIdsChanged(newValue) { if (this._tree !== null) { this._tree.setFieldGroupIds(newValue); } }
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue) { if (this._tree !== null) { this._tree.attachValidateFieldGroup(newValue); } }
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue) { if (this._tree !== null) { this._tree.attachValidationSuccess(newValue); } }
  validationErrorChanged(newValue) { if (this._tree !== null) { this._tree.attachValidationError(newValue); } }
  parseErrorChanged(newValue) { if (this._tree !== null) { this._tree.attachParseError(newValue); } }
  formatErrorChanged(newValue) { if (this._tree !== null) { this._tree.attachFormatError(newValue); } }
  modelContextChangeChanged(newValue) { if (this._tree !== null) { this._tree.attachModelContextChange(newValue); } }
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/


}
