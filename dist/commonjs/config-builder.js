'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConfigBuilder = exports.ConfigBuilder = function () {
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
    this.globalResources.push('./page/page');
    return this;
  };

  ConfigBuilder.prototype.useBar = function useBar() {
    this.globalResources.push('./bar/bar');
    return this;
  };

  ConfigBuilder.prototype.useContainer = function useContainer() {
    this.globalResources.push('./container/container');
    return this;
  };

  ConfigBuilder.prototype.useHtml = function useHtml() {
    this.globalResources.push('./html/html');
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push('./button/button');
    return this;
  };

  ConfigBuilder.prototype.useGrid = function useGrid() {
    this.globalResources.push('./grid/grid');
    return this;
  };

  ConfigBuilder.prototype.useWizard = function useWizard() {
    this.globalResources.push('./wizard/wizard');
    this.globalResources.push('./wizard-step/wizard-step');
    return this;
  };

  ConfigBuilder.prototype.useText = function useText() {
    this.globalResources.push('./text/text');
    return this;
  };

  ConfigBuilder.prototype.useTiles = function useTiles() {
    this.globalResources.push('./generic-tile/generic-tile');
    this.globalResources.push('./tile-container/tile-container');
    this.globalResources.push('./tile-content/tile-content');
    this.globalResources.push('./standard-tile/standard-tile');
    this.globalResources.push('./image-content/image-content');
    this.globalResources.push('./numeric-content/numeric-content');
    this.globalResources.push('./feed-content/feed-content');
    this.globalResources.push('./slide-tile/slide-tile');
    return this;
  };

  ConfigBuilder.prototype.useForm = function useForm() {
    this.globalResources.push('./simple-form/simple-form');
    return this;
  };

  ConfigBuilder.prototype.useLabel = function useLabel() {
    this.globalResources.push('./label/label');
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push('./input/input');
    return this;
  };

  ConfigBuilder.prototype.useTitle = function useTitle() {
    this.globalResources.push('./title/title');
    return this;
  };

  ConfigBuilder.prototype.useLayoutData = function useLayoutData() {
    this.globalResources.push('./grid-data/grid-data');
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
}();