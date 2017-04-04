'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5Wizard;

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
      _export('Ui5Wizard', Ui5Wizard = (_dec = customElement('ui5-wizard'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
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
          if (path[0].localName == 'wizard') this._wizard.removeStep(child);
        };

        Ui5Wizard.prototype.attached = function attached() {
          this._wizard = new sap.m.Wizard();
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
        };

        Ui5Wizard.prototype.detached = function detached() {
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
        };

        return Ui5Wizard;
      }()) || _class) || _class));

      _export('Ui5Wizard', Ui5Wizard);
    }
  };
});
//# sourceMappingURL=../dist/dev/wizard/wizard.js.map
