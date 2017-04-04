'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customAttribute, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5Container;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customAttribute = _aureliaTemplating.customAttribute;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('Ui5Container', Ui5Container = (_dec = customAttribute('ui5-container'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function Ui5Container(element) {
          _classCallCheck(this, Ui5Container);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        Ui5Container.prototype.attached = function attached() {};

        Ui5Container.prototype.detached = function detached() {};

        return Ui5Container;
      }()) || _class) || _class));

      _export('Ui5Container', Ui5Container);
    }
  };
});
//# sourceMappingURL=../dist/dev/container/container.js.map
