
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
      
  }

  usePage(): ConfigBuilder {
    this.globalResources.push('./page/page');
    return this;
  }
   useBar(): ConfigBuilder {
    this.globalResources.push('./bar/bar');
    return this;
  }
  useContainer(): ConfigBuilder {
    this.globalResources.push('./container/container');
    return this;
  }
   useHtml(): ConfigBuilder {
    this.globalResources.push('./html/html');
    return this;
  }
  useButton(): ConfigBuilder {
    this.globalResources.push('./button/button');
    return this;
  }
  useTiles(): ConfigBuilder {
    this.globalResources.push('./generic-tile/generic-tile');
    this.globalResources.push('./tile-container/tile-container');
    this.globalResources.push('./tile-content/tile-content');
    this.globalResources.push('./standard-tile/standard-tile');
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
