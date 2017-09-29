'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5Bar;

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
      _export('Ui5Bar', Ui5Bar = (_dec = customElement('ui5-bar'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
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
      }()) || _class) || _class));

      _export('Ui5Bar', Ui5Bar);
    }
  };
});
//# sourceMappingURL=../dist/dev/bar/bar.js.map
