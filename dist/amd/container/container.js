define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Container = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Ui5Container = exports.Ui5Container = (_dec = (0, _aureliaTemplating.customAttribute)('ui5-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function Ui5Container(element) {
      _classCallCheck(this, Ui5Container);

      this.element = element;
      this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    Ui5Container.prototype.attached = function attached() {};

    Ui5Container.prototype.detached = function detached() {};

    return Ui5Container;
  }()) || _class) || _class);
});