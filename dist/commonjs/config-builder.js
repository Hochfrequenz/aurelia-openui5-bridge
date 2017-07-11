'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigBuilder = undefined;

var _aureliaPal = require('aurelia-pal');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigBuilder = exports.ConfigBuilder = function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this.useGlobalResources = true;
    this.globalResources = [];
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useDatePicker().useTitle().useLayoutData().useSelect().useTable().useTabs().useLayout().useDynamicPage().useLink().useBreadcrumbs().useSegmentedButton().useDialog().useList().useIcon().useActionSheet().useTableSelectDialog().useUploadCollection().useViewSettingsDialog();
  };

  ConfigBuilder.prototype.useLink = function useLink() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./link/link'));
    return this;
  };

  ConfigBuilder.prototype.usePage = function usePage() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./page/page'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./shell/shell'));
    return this;
  };

  ConfigBuilder.prototype.useBar = function useBar() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./bar/bar'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./overflow-toolbar/overflow-toolbar'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./toolbar-spacer/toolbar-spacer'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));

    return this;
  };

  ConfigBuilder.prototype.useContainer = function useContainer() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./container/container'));
    return this;
  };

  ConfigBuilder.prototype.useHtml = function useHtml() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./html/html'));
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
    return this;
  };

  ConfigBuilder.prototype.useGrid = function useGrid() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid'));
    return this;
  };

  ConfigBuilder.prototype.useWizard = function useWizard() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./wizard/wizard'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./wizard-step/wizard-step'));
    return this;
  };

  ConfigBuilder.prototype.useText = function useText() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./text/text'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./formatted-text/formatted-text'));
    return this;
  };

  ConfigBuilder.prototype.useTiles = function useTiles() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./generic-tile/generic-tile'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tile-container/tile-container'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tile-content/tile-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./standard-tile/standard-tile'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./image-content/image-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./numeric-content/numeric-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./feed-content/feed-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./slide-tile/slide-tile'));
    return this;
  };

  ConfigBuilder.prototype.useForm = function useForm() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./simple-form/simple-form'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./form/form'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./form-container/form-container'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./form-element/form-element'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./responsive-grid-layout/responsive-grid-layout'));
    return this;
  };

  ConfigBuilder.prototype.useLabel = function useLabel() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./label/label'));
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./search-field/search-field'));

    return this;
  };

  ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./date-picker/date-picker'));
    return this;
  };

  ConfigBuilder.prototype.useTitle = function useTitle() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./title/title'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./m-title/m-title'));
    return this;
  };

  ConfigBuilder.prototype.useLayoutData = function useLayoutData() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./grid-data/grid-data'));
    return this;
  };

  ConfigBuilder.prototype.useLayout = function useLayout() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./vertical-layout/vertical-layout'));
    return this;
  };

  ConfigBuilder.prototype.useSelect = function useSelect() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./select/select'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./list-item/list-item'));
    return this;
  };

  ConfigBuilder.prototype.useTable = function useTable() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./table/table'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./column/column'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./column-list-item/column-list-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./object-identifier/object-identifier'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./object-number/object-number'));
    return this;
  };

  ConfigBuilder.prototype.useList = function useList() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./list/list'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./standard-list-item/standard-list-item'));
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tab-container/tab-container'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tab-container-item/tab-container-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./icon-tab-bar/icon-tab-bar'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./icon-tab-filter/icon-tab-filter'));

    return this;
  };

  ConfigBuilder.prototype.useDynamicPage = function useDynamicPage() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dynamic-page/dynamic-page'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dynamic-page-header/dynamic-page-header'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dynamic-page-title/dynamic-page-title'));

    return this;
  };

  ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  };

  ConfigBuilder.prototype.useSegmentedButton = function useSegmentedButton() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./segmented-button/segmented-button'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./segmented-button-item/segmented-button-item'));
    return this;
  };

  ConfigBuilder.prototype.useDialog = function useDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dialog/dialog'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./responsive-popover/responsive-popover'));

    return this;
  };

  ConfigBuilder.prototype.useIcon = function useIcon() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./icon/icon'));
    return this;
  };

  ConfigBuilder.prototype.useActionSheet = function useActionSheet() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./action-sheet/action-sheet'));
    return this;
  };

  ConfigBuilder.prototype.useTableSelectDialog = function useTableSelectDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./table-select-dialog/table-select-dialog'));
    return this;
  };

  ConfigBuilder.prototype.useUploadCollection = function useUploadCollection() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./upload-collection/upload-collection'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./upload-collection-item/upload-collection-item'));
    return this;
  };

  ConfigBuilder.prototype.useViewSettingsDialog = function useViewSettingsDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./view-settings-item/view-settings-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./view-settings-filter-item/view-settings-filter-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./view-settings-dialog/view-settings-dialog'));
    return this;
  };

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  return ConfigBuilder;
}();