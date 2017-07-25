define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Text = undefined;

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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var Ui5Text = exports.Ui5Text = (_dec = (0, _aureliaTemplating.customElement)('ui5-text'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaFramework.computedFrom)('_text'), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5Text(element) {
      _classCallCheck(this, Ui5Text);

      this._text = null;

      _initDefineProp(this, 'ui5Id', _descriptor, this);

      _initDefineProp(this, 'text', _descriptor2, this);

      _initDefineProp(this, 'wrapping', _descriptor3, this);

      _initDefineProp(this, 'textAlign', _descriptor4, this);

      _initDefineProp(this, 'maxLines', _descriptor5, this);

      this.element = element;
    }

    Ui5Text.prototype.attached = function attached() {
      var props = {
        text: this.text != null ? this.text : this.element.innerText.trim(),
        wrapping: (0, _attributes.getBooleanFromAttributeValue)(this.wrapping),
        textAlign: this.textAlign,
        maxLines: this.maxLines
      };
      if (this.ui5Id) this._text = new sap.m.Text(this.ui5Id, props);else this._text = new sap.m.Text(props);
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
    };

    Ui5Text.prototype.textChanged = function textChanged(newValue) {
      if (this._text != null) {
        this._text.setText(newValue);
      }
    };

    _createClass(Ui5Text, [{
      key: 'UIElement',
      get: function get() {
        return this._text;
      }
    }]);

    return Ui5Text;
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
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return "Begin";
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maxLines', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});