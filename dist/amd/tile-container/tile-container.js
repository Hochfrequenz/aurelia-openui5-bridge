define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5TileContainer = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Ui5TileContainer = exports.Ui5TileContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-tile-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function Ui5TileContainer(element) {
      _classCallCheck(this, Ui5TileContainer);

      this._container = null;

      this.element = element;
    }

    Ui5TileContainer.prototype.addChild = function addChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
      if (path[0].localName == 'tile') this._container.addTile(child);
    };

    Ui5TileContainer.prototype.removeChild = function removeChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
      if (path[0].localName == 'tile') this._container.removeTile(child);
    };

    Ui5TileContainer.prototype.attached = function attached() {
      this._container = new sap.m.TileContainer();
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
    };

    Ui5TileContainer.prototype.detached = function detached() {
      if ($(this.element).parents("[ui5-container]")[0]) {
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
      }
    };

    return Ui5TileContainer;
  }()) || _class) || _class);
});