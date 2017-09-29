define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Bar = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Ui5Bar = exports.Ui5Bar = (_dec = (0, _aureliaTemplating.customElement)('ui5-bar'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function Ui5Bar(element) {
      _classCallCheck(this, Ui5Bar);

      this._bar = null;

      this.element = element;
    }

    Ui5Bar.prototype.addChild = function addChild(child, elem) {
      var path = jQuery.makeArray($(elem).parentsUntil(this.element));
      if (path[0].localName == 'content-left') this._bar.addContentLeft(child);
      if (path[0].localName == 'content-middle') this._bar.addContentMiddle(child);
      if (path[0].localName == 'content-right') this._bar.addContentRight(child);
    };

    Ui5Bar.prototype.attached = function attached() {

      this._bar = new sap.m.Bar();
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._bar, this.element);
    };

    return Ui5Bar;
  }()) || _class) || _class);
});