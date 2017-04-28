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
          this.useScrollfirePatch = false;
          this.globalResources = [];
        }

        ConfigBuilder.prototype.useAll = function useAll() {
          return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useTitle().useLayoutData();
        };

        ConfigBuilder.prototype.usePage = function usePage() {
          this.globalResources.push(PLATFORM.moduleName('./page/page'));
          this.globalResources.push(PLATFORM.moduleName('./shell/shell'));
          return this;
        };

        ConfigBuilder.prototype.useBar = function useBar() {
          this.globalResources.push(PLATFORM.moduleName('./bar/bar'));
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
          return this;
        };

        ConfigBuilder.prototype.useTitle = function useTitle() {
          this.globalResources.push(PLATFORM.moduleName('./title/title'));
          return this;
        };

        ConfigBuilder.prototype.useLayoutData = function useLayoutData() {
          this.globalResources.push(PLATFORM.moduleName('./grid-data/grid-data'));
          return this;
        };

        ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
          this.useGlobalResources = false;
          return this;
        };

        ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
          this.useScrollfirePatch = true;
          return this;
        };

        return ConfigBuilder;
      }());

      _export('ConfigBuilder', ConfigBuilder);
    }
  };
});
//# sourceMappingURL=dist/dev/config-builder.js.map
