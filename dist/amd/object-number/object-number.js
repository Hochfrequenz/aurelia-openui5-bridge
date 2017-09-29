define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5ObjectNumber = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

  var Ui5ObjectNumber = exports.Ui5ObjectNumber = (_dec = (0, _aureliaTemplating.customElement)('ui5-object-number'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5ObjectNumber(element) {
      _classCallCheck(this, Ui5ObjectNumber);

      this._number = null;

      _initDefineProp(this, 'ui5Id', _descriptor, this);

      _initDefineProp(this, 'number', _descriptor2, this);

      _initDefineProp(this, 'numberUnit', _descriptor3, this);

      _initDefineProp(this, 'emphasized', _descriptor4, this);

      _initDefineProp(this, 'state', _descriptor5, this);

      _initDefineProp(this, 'unit', _descriptor6, this);

      _initDefineProp(this, 'textDirection', _descriptor7, this);

      _initDefineProp(this, 'textAlign', _descriptor8, this);

      this.element = element;
    }

    Ui5ObjectNumber.prototype.defaultFunc = function defaultFunc() {};

    Ui5ObjectNumber.prototype.attached = function attached() {

      this._number = new sap.m.ObjectNumber({
        number: this.number != null ? this.number : this.element.innerText.trim(),
        numberUnit: this.numberUnit,
        emphasized: (0, _attributes.getBooleanFromAttributeValue)(this.emphasized),
        state: this.state,
        unit: this.unit,
        textDirection: this.textDirection,
        textAlign: this.textAlign
      });
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._number, this.element);
    };

    Ui5ObjectNumber.prototype.numberChanged = function numberChanged(newValue) {
      if (this._number != null) {
        this._number.setNumber(newValue);
      }
    };

    Ui5ObjectNumber.prototype.numberUnitChanged = function numberUnitChanged(newValue) {
      if (this._number !== null) {
        this._number.setNumberUnit(newValue);
      }
    };

    Ui5ObjectNumber.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
      if (this._number !== null) {
        this._number.setEmphasized((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5ObjectNumber.prototype.stateChanged = function stateChanged(newValue) {
      if (this._number !== null) {
        this._number.setState(newValue);
      }
    };

    Ui5ObjectNumber.prototype.unitChanged = function unitChanged(newValue) {
      if (this._number !== null) {
        this._number.setUnit(newValue);
      }
    };

    Ui5ObjectNumber.prototype.textAlignChanged = function textAlignChanged(newValue) {
      if (this._number !== null) {
        this._number.setTextAlign(newValue);
      }
    };

    Ui5ObjectNumber.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
      if (this._number !== null) {
        this._number.setTextDirection(newValue);
      }
    };

    return Ui5ObjectNumber;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'number', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'numberUnit', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'unit', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return 'Inherit';
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return 'Begin';
    }
  })), _class2)) || _class) || _class);
});