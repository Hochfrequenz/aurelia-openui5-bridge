define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Item = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Ui5Item = exports.Ui5Item = (_dec = (0, _aureliaTemplating.customElement)('ui5-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
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

    Ui5Item.prototype.fillProperties = function fillProperties(propertyObject) {
      propertyObject.text = this.text;
      propertyObject.key = this.key;
      propertyObject.textDirection = this.textDirection;
      propertyObject.enabled = this.enabled;
    };

    Ui5Item.prototype.keyChanged = function keyChanged(newValue) {
      if (this._item !== null) {
        this._item.setKey(newValue);
      }
    };

    Ui5Item.prototype.enabledChanged = function enabledChanged(newValue) {
      if (this._item !== null) {
        this._item.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
  })), _class2)) || _class) || _class);
});