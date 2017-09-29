define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Html = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _dec2, _class;

  var Ui5Html = exports.Ui5Html = (_dec = (0, _aureliaTemplating.customElement)('ui5-html'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class = _dec2(_class = function () {
    function Ui5Html(element) {
      _classCallCheck(this, Ui5Html);

      this._html = null;

      this.element = element;
    }

    Ui5Html.prototype.attached = function attached() {

      this._html = new sap.ui.core.HTML();
      this._html.setContent(this.content.innerHTML);
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._html, this.element);
    };

    return Ui5Html;
  }()) || _class) || _class);
});