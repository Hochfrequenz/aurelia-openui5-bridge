'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, Ui5FormElement;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
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
      _export('Ui5FormElement', Ui5FormElement = (_dec = customElement('ui5-form-element'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5FormElement(element) {
          _classCallCheck(this, Ui5FormElement);

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          this._form = null;

          this.element = element;
        }

        Ui5FormElement.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'label') {
              this._form.setLabel(child);
              break;
            }
            if (elem.localName == 'field') {
              this._form.addField(child);
              break;
            }
          }
        };

        Ui5FormElement.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          var params = {};
          if (this.uiId5) this._form = new sap.ui.layout.form.FormElement(this.ui5Id, params);else this._form = new sap.ui.layout.form.FormElement(params);

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._form.placeAt(this.element.parentElement);
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5FormElement.prototype.titleChanged = function titleChanged(newValue) {
          if (this._form !== null) {
            this._form.setTitle(newValue);
          }
        };

        return Ui5FormElement;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5FormElement', Ui5FormElement);
    }
  };
});
//# sourceMappingURL=../dist/dev/form-element/form-element.js.map
