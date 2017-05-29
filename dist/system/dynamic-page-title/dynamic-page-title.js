'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5DynamicPageTitle;

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
      _export('Ui5DynamicPageTitle', Ui5DynamicPageTitle = (_dec = customElement('ui5-dynamic-page-title'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function Ui5DynamicPageTitle(element) {
          _classCallCheck(this, Ui5DynamicPageTitle);

          this._title = null;

          this.element = element;
        }

        Ui5DynamicPageTitle.prototype.defaultFunc = function defaultFunc() {};

        Ui5DynamicPageTitle.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'heading') {
              this._title.setHeading(child);
              break;
            }
            if (elem.localName == 'actions') {
              this._title.addAction(child);
              break;
            }
            if (elem.localName == 'snapped') {
              this._title.addSnappedContent(child);
              break;
            }
            if (elem.localName == 'expanded') {
              this._title.addExpandedContent(child);
              break;
            }
          }
        };

        Ui5DynamicPageTitle.prototype.removeChild = function removeChild(child, elem) {
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

            if (elem.localName == 'heading') {
              break;
            }
            if (elem.localName == 'actions') {
              this._title.removeAction(child);
              break;
            }
            if (elem.localName == 'snapped') {
              this._title.removeSnappedContent(child);
              break;
            }
            if (elem.localName == 'expanded') {
              this._title.removeExpandedContent(child);
              break;
            }
          }
        };

        Ui5DynamicPageTitle.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._title = new sap.f.DynamicPageTitle({});

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          }
        };

        Ui5DynamicPageTitle.prototype.detached = function detached() {
          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._title, this.element);
          } else {
            this._title.destroy();
          }
        };

        return Ui5DynamicPageTitle;
      }()) || _class) || _class));

      _export('Ui5DynamicPageTitle', Ui5DynamicPageTitle);
    }
  };
});