'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, Ui5Link;

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
      _export('Ui5Link', Ui5Link = (_dec = customElement('ui5-link'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Link(element) {
          _classCallCheck(this, Ui5Link);

          _initDefineProp(this, 'enabled', _descriptor, this);

          _initDefineProp(this, 'subtle', _descriptor2, this);

          _initDefineProp(this, 'emphasized', _descriptor3, this);

          _initDefineProp(this, 'text', _descriptor4, this);

          _initDefineProp(this, 'press', _descriptor5, this);

          _initDefineProp(this, 'target', _descriptor6, this);

          _initDefineProp(this, 'href', _descriptor7, this);

          this._link = null;

          this.attributeManager = new AttributeManager(element);
          this.element = element;
        }

        Ui5Link.prototype.attached = function attached() {
          this._link = new sap.m.Link({
            text: this.text,
            target: this.target,
            href: this.href,
            subtle: getBooleanFromAttributeValue(this.subtle),
            emphasized: getBooleanFromAttributeValue(this.emphasized),
            enabled: getBooleanFromAttributeValue(this.enabled),
            press: this.press != null ? this.press : this.defaultPress
          });

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._link, this.element);
          }
        };

        Ui5Link.prototype.defaultPress = function defaultPress() {};

        Ui5Link.prototype.detached = function detached() {};

        Ui5Link.prototype.hrefChanged = function hrefChanged(newValue) {
          if (this._link !== null) {
            this._link.setHref(newValue);
          }
        };

        Ui5Link.prototype.typeChanged = function typeChanged(newValue) {
          if (this._link !== null) {
            this._link.setType(newValue);
          }
        };

        Ui5Link.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._link !== null) {
            this._link.setEnabled(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Link.prototype.targetChanged = function targetChanged(newValue) {
          if (this._link !== null) {
            this._link.setTarget(newValue);
          }
        };

        Ui5Link.prototype.textChanged = function textChanged(newValue) {
          if (this._link !== null) {
            this._link.setText(newValue);
          }
        };

        Ui5Link.prototype.pressChanged = function pressChanged(newValue) {
          if (this._link !== null) {
            if (newValue == null) newValue = this.defaultPress;
            this._link.attachPress(newValue);
          }
        };

        return Ui5Link;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'subtle', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultPress;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'target', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'href', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Link', Ui5Link);
    }
  };
});