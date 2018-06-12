'use strict';

System.register(['aurelia-pal'], function (_export, _context) {
  "use strict";

  var PLATFORM, ConfigBuilder;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }],
    execute: function () {
      _export('ConfigBuilder', ConfigBuilder = function () {
        function ConfigBuilder() {
          _classCallCheck(this, ConfigBuilder);

          this.useGlobalResources = true;
          this.globalResources = [];
        }

        ConfigBuilder.prototype.useAll = function useAll() {
          return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useDatePicker().useTitle().useLayoutData().useSelect().useTable().useTabs().useLayout().useDynamicPage().useLink().useBreadcrumbs().useSegmentedButton().useDialog().useList().useIcon().useActionSheet().useTableSelectDialog().useSelectDialog().useUploadCollection().useViewSettingsDialog().useSplitContainer().useMessageView().useMaskInput().useToggleButton().useTree().useMenu().useSplitter().usePanel();
        };

        ConfigBuilder.prototype.useLink = function useLink() {
          this.globalResources.push(PLATFORM.moduleName('./link/link'));
          return this;
        };

        ConfigBuilder.prototype.usePage = function usePage() {
          this.globalResources.push(PLATFORM.moduleName('./page/page'));
          this.globalResources.push(PLATFORM.moduleName('./shell/shell'));
          this.globalResources.push(PLATFORM.moduleName('./custom-data/custom-data'));
          return this;
        };

        ConfigBuilder.prototype.useBar = function useBar() {
          this.globalResources.push(PLATFORM.moduleName('./bar/bar'));
          this.globalResources.push(PLATFORM.moduleName('./overflow-toolbar/overflow-toolbar'));
          this.globalResources.push(PLATFORM.moduleName('./toolbar-spacer/toolbar-spacer'));
          this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar'));

          return this;
        };

        ConfigBuilder.prototype.useContainer = function useContainer() {
          this.globalResources.push(PLATFORM.moduleName('./container/container'));
          return this;
        };

        ConfigBuilder.prototype.useHtml = function useHtml() {
          this.globalResources.push(PLATFORM.moduleName('./html/html'));
          return this;
        };

        ConfigBuilder.prototype.useButton = function useButton() {
          this.globalResources.push(PLATFORM.moduleName('./button/button'));
          return this;
        };

        ConfigBuilder.prototype.useToggleButton = function useToggleButton() {
          this.globalResources.push(PLATFORM.moduleName('./toggle-button/toggle-button'));
          return this;
        };

        ConfigBuilder.prototype.useGrid = function useGrid() {
          this.globalResources.push(PLATFORM.moduleName('./grid/grid'));
          return this;
        };

        ConfigBuilder.prototype.useWizard = function useWizard() {
          this.globalResources.push(PLATFORM.moduleName('./wizard/wizard'));
          this.globalResources.push(PLATFORM.moduleName('./wizard-step/wizard-step'));
          return this;
        };

        ConfigBuilder.prototype.useText = function useText() {
          this.globalResources.push(PLATFORM.moduleName('./text/text'));
          this.globalResources.push(PLATFORM.moduleName('./formatted-text/formatted-text'));
          return this;
        };

        ConfigBuilder.prototype.useTiles = function useTiles() {
          this.globalResources.push(PLATFORM.moduleName('./generic-tile/generic-tile'));
          this.globalResources.push(PLATFORM.moduleName('./tile-container/tile-container'));
          this.globalResources.push(PLATFORM.moduleName('./tile-content/tile-content'));
          this.globalResources.push(PLATFORM.moduleName('./standard-tile/standard-tile'));
          this.globalResources.push(PLATFORM.moduleName('./image-content/image-content'));
          this.globalResources.push(PLATFORM.moduleName('./numeric-content/numeric-content'));
          this.globalResources.push(PLATFORM.moduleName('./feed-content/feed-content'));
          this.globalResources.push(PLATFORM.moduleName('./slide-tile/slide-tile'));
          return this;
        };

        ConfigBuilder.prototype.useForm = function useForm() {
          this.globalResources.push(PLATFORM.moduleName('./simple-form/simple-form'));
          this.globalResources.push(PLATFORM.moduleName('./form/form'));
          this.globalResources.push(PLATFORM.moduleName('./form-container/form-container'));
          this.globalResources.push(PLATFORM.moduleName('./form-element/form-element'));
          this.globalResources.push(PLATFORM.moduleName('./responsive-grid-layout/responsive-grid-layout'));
          return this;
        };

        ConfigBuilder.prototype.useLabel = function useLabel() {
          this.globalResources.push(PLATFORM.moduleName('./label/label'));
          return this;
        };

        ConfigBuilder.prototype.useInput = function useInput() {
          this.globalResources.push(PLATFORM.moduleName('./input/input'));
          this.globalResources.push(PLATFORM.moduleName('./search-field/search-field'));
          this.globalResources.push(PLATFORM.moduleName('./suggestion-item/suggestion-item'));

          return this;
        };

        ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
          this.globalResources.push(PLATFORM.moduleName('./date-picker/date-picker'));
          this.globalResources.push(PLATFORM.moduleName('./date-time-picker/date-time-picker'));
          return this;
        };

        ConfigBuilder.prototype.useTitle = function useTitle() {
          this.globalResources.push(PLATFORM.moduleName('./title/title'));
          this.globalResources.push(PLATFORM.moduleName('./m-title/m-title'));
          return this;
        };

        ConfigBuilder.prototype.useLayoutData = function useLayoutData() {
          this.globalResources.push(PLATFORM.moduleName('./grid-data/grid-data'));
          return this;
        };

        ConfigBuilder.prototype.useLayout = function useLayout() {
          this.globalResources.push(PLATFORM.moduleName('./vertical-layout/vertical-layout'));
          return this;
        };

        ConfigBuilder.prototype.useSelect = function useSelect() {
          this.globalResources.push(PLATFORM.moduleName('./select/select'));
          this.globalResources.push(PLATFORM.moduleName('./list-item/list-item'));
          return this;
        };

        ConfigBuilder.prototype.useTable = function useTable() {
          this.globalResources.push(PLATFORM.moduleName('./table/table'));
          this.globalResources.push(PLATFORM.moduleName('./column/column'));
          this.globalResources.push(PLATFORM.moduleName('./column-list-item/column-list-item'));
          this.globalResources.push(PLATFORM.moduleName('./object-identifier/object-identifier'));
          this.globalResources.push(PLATFORM.moduleName('./object-number/object-number'));
          return this;
        };

        ConfigBuilder.prototype.useList = function useList() {
          this.globalResources.push(PLATFORM.moduleName('./list/list'));
          this.globalResources.push(PLATFORM.moduleName('./standard-list-item/standard-list-item'));
          return this;
        };

        ConfigBuilder.prototype.useTabs = function useTabs() {
          this.globalResources.push(PLATFORM.moduleName('./tab-container/tab-container'));
          this.globalResources.push(PLATFORM.moduleName('./tab-container-item/tab-container-item'));
          this.globalResources.push(PLATFORM.moduleName('./icon-tab-bar/icon-tab-bar'));
          this.globalResources.push(PLATFORM.moduleName('./icon-tab-filter/icon-tab-filter'));

          return this;
        };

        ConfigBuilder.prototype.useDynamicPage = function useDynamicPage() {
          this.globalResources.push(PLATFORM.moduleName('./dynamic-page/dynamic-page'));
          this.globalResources.push(PLATFORM.moduleName('./dynamic-page-header/dynamic-page-header'));
          this.globalResources.push(PLATFORM.moduleName('./dynamic-page-title/dynamic-page-title'));

          return this;
        };

        ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
          this.globalResources.push(PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
          return this;
        };

        ConfigBuilder.prototype.useSegmentedButton = function useSegmentedButton() {
          this.globalResources.push(PLATFORM.moduleName('./segmented-button/segmented-button'));
          this.globalResources.push(PLATFORM.moduleName('./segmented-button-item/segmented-button-item'));
          return this;
        };

        ConfigBuilder.prototype.useDialog = function useDialog() {
          this.globalResources.push(PLATFORM.moduleName('./dialog/dialog'));
          this.globalResources.push(PLATFORM.moduleName('./responsive-popover/responsive-popover'));

          return this;
        };

        ConfigBuilder.prototype.useIcon = function useIcon() {
          this.globalResources.push(PLATFORM.moduleName('./icon/icon'));
          return this;
        };

        ConfigBuilder.prototype.useActionSheet = function useActionSheet() {
          this.globalResources.push(PLATFORM.moduleName('./action-sheet/action-sheet'));
          return this;
        };

        ConfigBuilder.prototype.useTableSelectDialog = function useTableSelectDialog() {
          this.globalResources.push(PLATFORM.moduleName('./table-select-dialog/table-select-dialog'));
          return this;
        };

        ConfigBuilder.prototype.useUploadCollection = function useUploadCollection() {
          this.globalResources.push(PLATFORM.moduleName('./upload-collection/upload-collection'));
          this.globalResources.push(PLATFORM.moduleName('./upload-collection-item/upload-collection-item'));
          this.globalResources.push(PLATFORM.moduleName('./upload-collection-parameter/upload-collection-parameter'));
          return this;
        };

        ConfigBuilder.prototype.useViewSettingsDialog = function useViewSettingsDialog() {
          this.globalResources.push(PLATFORM.moduleName('./view-settings-item/view-settings-item'));
          this.globalResources.push(PLATFORM.moduleName('./view-settings-filter-item/view-settings-filter-item'));
          this.globalResources.push(PLATFORM.moduleName('./view-settings-dialog/view-settings-dialog'));
          return this;
        };

        ConfigBuilder.prototype.useSelectDialog = function useSelectDialog() {
          this.globalResources.push(PLATFORM.moduleName('./select-dialog/select-dialog'));
          return this;
        };

        ConfigBuilder.prototype.useSplitContainer = function useSplitContainer() {
          this.globalResources.push(PLATFORM.moduleName('./split-container/split-container'));
          return this;
        };

        ConfigBuilder.prototype.useMessageView = function useMessageView() {
          this.globalResources.push(PLATFORM.moduleName('./message-view/message-view'));
          this.globalResources.push(PLATFORM.moduleName('./message-item/message-item'));
          return this;
        };

        ConfigBuilder.prototype.useMaskInput = function useMaskInput() {
          this.globalResources.push(PLATFORM.moduleName('./mask-input/mask-input'));
          this.globalResources.push(PLATFORM.moduleName('./mask-input-rule/mask-input-rule'));
          return this;
        };

        ConfigBuilder.prototype.useTree = function useTree() {
          this.globalResources.push(PLATFORM.moduleName('./tree/tree'));
          this.globalResources.push(PLATFORM.moduleName('./tree-item-base/tree-item-base'));
          this.globalResources.push(PLATFORM.moduleName('./standard-tree-item/standard-tree-item'));
          this.globalResources.push(PLATFORM.moduleName('./custom-tree-item/custom-tree-item'));
          return this;
        };

        ConfigBuilder.prototype.useMenu = function useMenu() {
          this.globalResources.push(PLATFORM.moduleName('./menu-item/menu-item'));
          this.globalResources.push(PLATFORM.moduleName('./menu/menu'));
          return this;
        };

        ConfigBuilder.prototype.useSplitter = function useSplitter() {
          this.globalResources.push(PLATFORM.moduleName('./splitter/splitter'));
          this.globalResources.push(PLATFORM.moduleName('./responsive-splitter/responsive-splitter'));
          this.globalResources.push(PLATFORM.moduleName('./pane-container/pane-container'));
          this.globalResources.push(PLATFORM.moduleName('./split-pane/split-pane'));
          return this;
        };

        ConfigBuilder.prototype.usePanel = function usePanel() {
          this.globalResources.push(PLATFORM.moduleName('./panel/panel'));
          return this;
        };

        ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        return ConfigBuilder;
      }());

      _export('ConfigBuilder', ConfigBuilder);
    }
  };
});