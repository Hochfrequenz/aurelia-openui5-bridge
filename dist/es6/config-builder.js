import { PLATFORM } from 'aurelia-pal';
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
