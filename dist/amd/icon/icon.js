define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Icon = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

  var Ui5Icon = exports.Ui5Icon = (_dec = (0, _aureliaTemplating.customElement)('ui5-icon'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaFramework.computedFrom)('_icon'), _dec(_class = _dec2(_class = (_class2 = function () {
    Ui5Icon.prototype.defaultFunc = function defaultFunc() {};

    function Ui5Icon(element) {
      _classCallCheck(this, Ui5Icon);

      this._icon = null;

      _initDefineProp(this, 'ui5Id', _descriptor, this);

      _initDefineProp(this, 'src', _descriptor2, this);

      _initDefineProp(this, 'size', _descriptor3, this);

      _initDefineProp(this, 'color', _descriptor4, this);

      _initDefineProp(this, 'hoverColor', _descriptor5, this);

      _initDefineProp(this, 'activeColor', _descriptor6, this);

      _initDefineProp(this, 'width', _descriptor7, this);

      _initDefineProp(this, 'height', _descriptor8, this);

      _initDefineProp(this, 'backgroundColor', _descriptor9, this);

      _initDefineProp(this, 'hoverBackgroundColor', _descriptor10, this);

      _initDefineProp(this, 'activeBackgroundColor', _descriptor11, this);

      _initDefineProp(this, 'decorative', _descriptor12, this);

      _initDefineProp(this, 'useIconTooltip', _descriptor13, this);

      _initDefineProp(this, 'alt', _descriptor14, this);

      _initDefineProp(this, 'noTabStop', _descriptor15, this);

      _initDefineProp(this, 'press', _descriptor16, this);

      _initDefineProp(this, 'tooltip', _descriptor17, this);

      this.element = element;
    }

    Ui5Icon.prototype.attached = function attached() {
      var props = {
        src: this.src,
        size: this.size,
        color: this.color,
        hoverColor: this.hoverColor,
        activeColor: this.activeColor,
        width: this.width,
        height: this.height,
        backgroundColor: this.backgroundColor,
        activeBackgroundColor: this.activeBackgroundColor,
        decorative: (0, _attributes.getBooleanFromAttributeValue)(this.decorative),
        useIconTooltip: (0, _attributes.getBooleanFromAttributeValue)(this.useIconTooltip),
        alt: this.alt,
        noTabStop: (0, _attributes.getBooleanFromAttributeValue)(this.noTabStop),
        press: this.press,
        tooltip: this.tooltip
      };
      if (this.ui5Id) this._icon = new sap.ui.core.Icon(this.ui5Id, props);else this._icon = new sap.ui.core.Icon(props);
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._icon, this.element);
    };

    Ui5Icon.prototype.srcChanged = function srcChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setSrc(newValue);
      }
    };

    Ui5Icon.prototype.sizeChanged = function sizeChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setSize(newValue);
      }
    };

    Ui5Icon.prototype.colorChanged = function colorChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setColor(newValue);
      }
    };

    Ui5Icon.prototype.hoverColorChanged = function hoverColorChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setHoverColor(newValue);
      }
    };

    Ui5Icon.prototype.activeColorChanged = function activeColorChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setActiveColor(newValue);
      }
    };

    Ui5Icon.prototype.widthChanged = function widthChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setWidth(newValue);
      }
    };

    Ui5Icon.prototype.heightChanged = function heightChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setHeight(newValue);
      }
    };

    Ui5Icon.prototype.backgroundColorChanged = function backgroundColorChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setBackgroundColor(newValue);
      }
    };

    Ui5Icon.prototype.hoverBackgroundColorChanged = function hoverBackgroundColorChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setHoverBackgroundColor(newValue);
      }
    };

    Ui5Icon.prototype.activeBackgroundColorChanged = function activeBackgroundColorChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setActiveBackgroundColor(newValue);
      }
    };

    Ui5Icon.prototype.decorativeChanged = function decorativeChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setDecorative((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Icon.prototype.useIconTooltipChanged = function useIconTooltipChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setUseIconTooltip((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Icon.prototype.altChanged = function altChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setAlt(newValue);
      }
    };

    Ui5Icon.prototype.noTabStopChanged = function noTabStopChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setNoTabStop((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Icon.prototype.tooltipChanged = function tooltipChanged(newValue) {
      if (this._icon !== null) {
        this._icon.setTooltip(newValue);
      }
    };

    _createClass(Ui5Icon, [{
      key: 'UIElement',
      get: function get() {
        return this._icon;
      }
    }]);

    return Ui5Icon;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'src', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'color', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'hoverColor', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'activeColor', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundColor', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'hoverBackgroundColor', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'activeBackgroundColor', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'decorative', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'useIconTooltip', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'alt', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'noTabStop', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'tooltip', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});