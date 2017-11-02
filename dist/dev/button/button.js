'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, Ui5Button;

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
      _export('Ui5Button', Ui5Button = (_dec = customElement('ui5-button'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Button(element) {
          _classCallCheck(this, Ui5Button);

          _initDefineProp(this, 'disabled', _descriptor, this);

          _initDefineProp(this, 'floating', _descriptor2, this);

          _initDefineProp(this, 'large', _descriptor3, this);

          _initDefineProp(this, 'text', _descriptor4, this);

          _initDefineProp(this, 'press', _descriptor5, this);

          _initDefineProp(this, 'icon', _descriptor6, this);

          _initDefineProp(this, 'type', _descriptor7, this);

          _initDefineProp(this, 'visible', _descriptor8, this);

          _initDefineProp(this, 'tooltip', _descriptor9, this);

          _initDefineProp(this, 'busy', _descriptor10, this);

          _initDefineProp(this, 'busyIndicatorDelay', _descriptor11, this);

          this._button = null;
          this._parent = null;
          this._relation = null;

          this.attributeManager = new AttributeManager(element);
          this.element = element;
        }

        Ui5Button.prototype.attached = function attached() {
          this._button = new sap.m.Button({
            text: this.text,
            type: this.type,
            icon: this.icon,
            enabled: !getBooleanFromAttributeValue(this.disabled),
            visible: getBooleanFromAttributeValue(this.visible),
            tooltip: this.tooltip,
            press: this.press != null ? this.press : this.defaultPress,
            busy: getBooleanFromAttributeValue(this.busy),
            busyIndicatorDelay: this.busyIndicatorDelay
          });

          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._relation = this._parent.addChild(this._button, this.element);
          }
        };

        Ui5Button.prototype.defaultPress = function defaultPress() {};

        Ui5Button.prototype.detached = function detached() {
          if (this._parent && this._parent.removeChildByRelation) {
            this._parent.removeChildByRelation(this._button, this._relation);
          }
        };

        Ui5Button.prototype.typeChanged = function typeChanged(newValue) {
          if (this._button !== null) {
            this._button.setType(newValue);
          }
        };

        Ui5Button.prototype.disabledChanged = function disabledChanged(newValue) {
          if (this._button !== null) {
            this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Button.prototype.iconChanged = function iconChanged(newValue) {
          if (this._button !== null) {
            this._button.setIcon(newValue);
          }
        };

        Ui5Button.prototype.textChanged = function textChanged(newValue) {
          if (this._button !== null) {
            this._button.setText(newValue);
          }
        };

        Ui5Button.prototype.visibleChanged = function visibleChanged(newValue) {
          if (this._button !== null) {
            this._button.setVisible(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Button.prototype.tooltipChanged = function tooltipChanged(newValue) {
          if (this._button !== null) {
            this._button.setTooltip(newValue);
          }
        };

        Ui5Button.prototype.pressChanged = function pressChanged(newValue) {
          if (this._button !== null) {
            this._button.attachPress(newValue);
          }
        };

        Ui5Button.prototype.busyChanged = function busyChanged(newValue) {
          if (this._button !== null) {
            this._button.setBusy(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Button.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
          if (this._button !== null) {
            this._button.setBusyIndicatorDelay(newValue);
          }
        };

        return Ui5Button;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'floating', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'large', [_dec5], {
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
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return 'Default';
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'tooltip', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return 1000;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Button', Ui5Button);
    }
  };
});
//# sourceMappingURL=../dist/dev/button/button.js.map
