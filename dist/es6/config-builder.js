import { PLATFORM } from 'aurelia-pal';
/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  useScrollfirePatch: boolean = false;
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
  }

  usePage(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./page/page'));
    this.globalResources.push(PLATFORM.moduleName('./shell/shell'));
    return this;
  }
  useBar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./bar/bar'));
    this.globalResources.push(PLATFORM.moduleName('./overflow-toolbar/overflow-toolbar'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar-spacer/toolbar-spacer'));
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
  useTabs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tab-container/tab-container'));
    this.globalResources.push(PLATFORM.moduleName('./tab-container-item/tab-container-item'));
    this.globalResources.push(PLATFORM.moduleName('./icon-tab-bar/icon-tab-bar'));
    this.globalResources.push(PLATFORM.moduleName('./icon-tab-filter/icon-tab-filter'));
    
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

  withScrollfirePatch(): ConfigBuilder {
    this.useScrollfirePatch = true;
    return this;
  }
}
