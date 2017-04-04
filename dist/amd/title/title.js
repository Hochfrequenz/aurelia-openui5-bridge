define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Title = undefined;

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

  var Ui5Title = exports.Ui5Title = (_dec = (0, _aureliaTemplating.customElement)('ui5-title'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5Title(element) {
      _classCallCheck(this, Ui5Title);

      this._title = null;

      _initDefineProp(this, 'text', _descriptor, this);

      _initDefineProp(this, 'icon', _descriptor2, this);

      _initDefineProp(this, 'level', _descriptor3, this);

      _initDefineProp(this, 'emphasized', _descriptor4, this);

      this.element = element;
    }

    Ui5Title.prototype.attached = function attached() {

      this._title = new sap.ui.core.Title({
        text: this.text,
        icon: this.icon,
        emphasized: (0, _attributes.getBooleanFromAttributeValue)(this.emphasized),
        level: this.level
      });
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
    };

    Ui5Title.prototype.textChanged = function textChanged(newValue) {
      if (this._title != null) {
        this._title.setText(newValue);
      }
    };

    Ui5Title.prototype.iconChanged = function iconChanged(newValue) {
      if (this._title != null) {
        this._title.setIcon(newValue);
      }
    };

    Ui5Title.prototype.levelChanged = function levelChanged(newValue) {
      if (this._title != null) {
        this._title.setLevel(newValue);
      }
    };

    Ui5Title.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
      if (this._title != null) {
        this._title.setEmphasized((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    return Ui5Title;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'level', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'Auto';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});