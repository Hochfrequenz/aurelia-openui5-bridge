'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, Ui5MTitle;

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
      _export('Ui5MTitle', Ui5MTitle = (_dec = customElement('ui5-m-title'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5MTitle(element) {
          _classCallCheck(this, Ui5MTitle);

          this._title = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'text', _descriptor2, this);

          _initDefineProp(this, 'level', _descriptor3, this);

          this.element = element;
        }

        Ui5MTitle.prototype.attached = function attached() {
          var props = {
            text: this.text,
            level: this.level
          };
          if (this.ui5Id) this._title = new sap.m.Title(this.ui5Id, props);else this._title = new sap.m.Title(props);
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
        };

        Ui5MTitle.prototype.textChanged = function textChanged(newValue) {
          if (this._title != null) {
            this._title.setText(newValue);
          }
        };

        Ui5MTitle.prototype.levelChanged = function levelChanged(newValue) {
          if (this._title != null) {
            this._title.setLevel(newValue);
          }
        };

        return Ui5MTitle;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'level', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 'Auto';
        }
      })), _class2)) || _class) || _class));

      _export('Ui5MTitle', Ui5MTitle);
    }
  };
});
//# sourceMappingURL=../dist/dev/m-title/m-title.js.map
