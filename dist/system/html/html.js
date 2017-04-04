'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5Html;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
      noView = _aureliaTemplating.noView;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('Ui5Html', Ui5Html = (_dec = customElement('ui5-html'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function Ui5Html(element) {
          _classCallCheck(this, Ui5Html);

          this._html = null;

          this.element = element;
        }

        Ui5Html.prototype.attached = function attached() {

          this._html = new sap.ui.core.HTML();
          this._html.setContent(this.content.innerHTML);
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._html, this.element);
        };

        return Ui5Html;
      }()) || _class) || _class));

      _export('Ui5Html', Ui5Html);
    }
  };
});