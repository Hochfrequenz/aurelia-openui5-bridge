'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5VerticalLayout;

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
      _export('Ui5VerticalLayout', Ui5VerticalLayout = (_dec = customElement('ui5-vertical-layout'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function Ui5VerticalLayout(element) {
          _classCallCheck(this, Ui5VerticalLayout);

          this._layout = null;

          this.element = element;
        }

        Ui5VerticalLayout.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5VerticalLayout.prototype.addChild = function addChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            if (_isArray) {
              if (_i >= _iterator.length) break;
              elem = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              elem = _i.value;
            }

            if (elem.localName == 'content') {
              this._layout.addContent(child);
              break;
            }
          }
        };

        Ui5VerticalLayout.prototype.removeChild = function removeChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              elem = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              elem = _i2.value;
            }

            if (elem.localName == 'content') {
              this._layout.removeContent(child);
              break;
            }
          }
        };

        Ui5VerticalLayout.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._layout = new sap.ui.layout.VerticalLayout({});

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._layout, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._layout.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5VerticalLayout.prototype.detached = function detached() {
          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._layout, this.element);
          } else {
            this._layout.destroy();
          }
        };

        return Ui5VerticalLayout;
      }()) || _class) || _class));

      _export('Ui5VerticalLayout', Ui5VerticalLayout);
    }
  };
});
//# sourceMappingURL=../dist/dev/vertical-layout/vertical-layout.js.map
