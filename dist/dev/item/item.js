'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Ui5Item;

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
    }, function (_controlControl) {
      Ui5Control = _controlControl.Ui5Control;
    }],
    execute: function () {
      _export('Ui5Item', Ui5Item = (_dec = customElement('ui5-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Item(element) {
          _classCallCheck(this, Ui5Item);

          this._item = null;

          _initDefineProp(this, 'key', _descriptor, this);

          _initDefineProp(this, 'enabled', _descriptor2, this);

          _initDefineProp(this, 'text', _descriptor3, this);

          _initDefineProp(this, 'textDirection', _descriptor4, this);

          this.element = element;
        }

        Ui5Item.prototype.defaultFunc = function defaultFunc() {};

        Ui5Item.prototype.attached = function attached() {};

        Ui5Item.prototype.addChild = function addChild(child, elem) {};

        Ui5Item.prototype.keyChanged = function keyChanged(newValue) {
          if (this._item !== null) {
            this._item.setKey(newValue);
          }
        };

        Ui5Item.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._item !== null) {
            this._item.setEnabled(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Item.prototype.textChanged = function textChanged(newValue) {
          if (this._item !== null) {
            this._item.setText(newValue);
          }
        };

        Ui5Item.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
          if (this._item !== null) {
            this._item.setTextDirection(newValue);
          }
        };

        return Ui5Item;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Item', Ui5Item);
    }
  };
});
//# sourceMappingURL=../dist/dev/item/item.js.map
