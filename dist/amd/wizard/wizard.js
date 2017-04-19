define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Wizard = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Ui5Wizard = exports.Ui5Wizard = (_dec = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function Ui5Wizard(element) {
      _classCallCheck(this, Ui5Wizard);

      this._wizard = null;

      this.element = element;
    }

    Ui5Wizard.prototype.addChild = function addChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
      if (path[0].localName == 'wizard') this._wizard.addStep(child);
    };

    Ui5Wizard.prototype.removeChild = function removeChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
    };

    Ui5Wizard.prototype.attached = function attached() {
      this._wizard = new sap.m.Wizard();
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
    };

    Ui5Wizard.prototype.detached = function detached() {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
    };

    return Ui5Wizard;
  }()) || _class) || _class);
});