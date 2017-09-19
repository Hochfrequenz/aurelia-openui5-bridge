define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Button = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

  var Ui5Button = exports.Ui5Button = (_dec = (0, _aureliaTemplating.customElement)('ui5-button'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
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

      this._button = null;
      this._parent = null;
      this._relation = null;

      this.attributeManager = new _attributeManager.AttributeManager(element);
      this.element = element;
    }

    Ui5Button.prototype.attached = function attached() {
      this._button = new sap.m.Button({
        text: this.text,
        type: this.type,
        icon: this.icon,
        enabled: !(0, _attributes.getBooleanFromAttributeValue)(this.disabled),
        visible: (0, _attributes.getBooleanFromAttributeValue)(this.visible),
        tooltip: this.tooltip,
        press: this.press != null ? this.press : this.defaultPress
      });

      if ($(this.element).parents("[ui5-container]").length > 0) {
        this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
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
        this._button.setEnabled(!(0, _attributes.getBooleanFromAttributeValue)(newValue));
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
        this._button.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
  })), _class2)) || _class) || _class);
});