define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5ObjectIdentifier = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  var Ui5ObjectIdentifier = exports.Ui5ObjectIdentifier = (_dec = (0, _aureliaTemplating.customElement)('ui5-object-identifier'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5ObjectIdentifier(element) {
      _classCallCheck(this, Ui5ObjectIdentifier);

      this._text = null;

      _initDefineProp(this, 'ui5Id', _descriptor, this);

      _initDefineProp(this, 'text', _descriptor2, this);

      _initDefineProp(this, 'title', _descriptor3, this);

      _initDefineProp(this, 'visible', _descriptor4, this);

      _initDefineProp(this, 'titleActive', _descriptor5, this);

      _initDefineProp(this, 'textDirection', _descriptor6, this);

      _initDefineProp(this, 'titlePress', _descriptor7, this);

      this.element = element;
    }

    Ui5ObjectIdentifier.prototype.defaultFunc = function defaultFunc() {};

    Ui5ObjectIdentifier.prototype.attached = function attached() {

      this._text = new sap.m.ObjectIdentifier({
        text: this.text != null ? this.text : this.element.innerText.trim(),
        title: this.title,
        visible: (0, _attributes.getBooleanFromAttributeValue)(this.visible),
        titleActive: (0, _attributes.getBooleanFromAttributeValue)(this.titleActive),
        textDirection: this.textDirection,
        titlePress: this.titlePress
      });
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
    };

    Ui5ObjectIdentifier.prototype.textChanged = function textChanged(newValue) {
      if (this._text != null) {
        this._text.setText(newValue);
      }
    };

    Ui5ObjectIdentifier.prototype.titleChanged = function titleChanged(newValue) {
      if (this._text !== null) {
        this._text.setTitle(newValue);
      }
    };

    Ui5ObjectIdentifier.prototype.visibleChanged = function visibleChanged(newValue) {
      if (this._text !== null) {
        this._text.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5ObjectIdentifier.prototype.titleActiveChanged = function titleActiveChanged(newValue) {
      if (this._text !== null) {
        this._text.setTitleActive((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5ObjectIdentifier.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
      if (this._text !== null) {
        this._text.setTextDirection(newValue);
      }
    };

    return Ui5ObjectIdentifier;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'titleActive', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 'Inherit';
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'titlePress', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  })), _class2)) || _class) || _class);
});