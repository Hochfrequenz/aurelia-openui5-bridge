define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../element/element'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _element) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5FormattedText = undefined;

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var Ui5FormattedText = exports.Ui5FormattedText = (_dec = (0, _aureliaTemplating.customElement)('ui5-formatted-text'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
    _inherits(Ui5FormattedText, _Ui5Element);

    function Ui5FormattedText(element) {
      _classCallCheck(this, Ui5FormattedText);

      var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

      _this._text = null;

      _initDefineProp(_this, 'htmlText', _descriptor, _this);

      _initDefineProp(_this, 'width', _descriptor2, _this);

      _initDefineProp(_this, 'height', _descriptor3, _this);

      _initDefineProp(_this, 'convertLinksToAnchorTags', _descriptor4, _this);

      _initDefineProp(_this, 'convertedLinksDefaultTarget', _descriptor5, _this);

      _this.element = element;
      return _this;
    }

    Ui5FormattedText.prototype.addChild = function addChild(child, elem) {
      _Ui5Element.prototype.addChild.call(this, child, elem);
    };

    Ui5FormattedText.prototype.attached = function attached() {

      this._text = new sap.m.FormattedText({
        htmlText: this.htmlText != null ? this.htmlText : this.element.innerHtml.trim(),
        width: this.width,
        height: this.height,
        convertedLinksDefaultTarget: this.convertedLinksDefaultTarget,
        convertLinksToAnchorTags: this.convertLinksToAnchorTags
      });
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
    };

    Ui5FormattedText.prototype.htmlTextChanged = function htmlTextChanged(newValue) {
      if (this._text != null) {
        this._text.setHtmlText(newValue);
      }
    };

    Ui5FormattedText.prototype.widthChanged = function widthChanged(newValue) {
      if (this._text !== null) {
        this._text.setWidth(newValue);
      }
    };

    Ui5FormattedText.prototype.heightChanged = function heightChanged(newValue) {
      if (this._text !== null) {
        this._text.setHeight(newValue);
      }
    };

    Ui5FormattedText.prototype.convertedLinksDefaultTargetChanged = function convertedLinksDefaultTargetChanged(newValue) {
      if (this._text !== null) {
        this._text.setConvertedLinksDefaultTarget(newValue);
      }
    };

    Ui5FormattedText.prototype.convertLinksToAnchorTagsChanged = function convertLinksToAnchorTagsChanged(newValue) {
      if (this._text !== null) {
        this._text.setConvertLinksToAnchorTags(newValue);
      }
    };

    _createClass(Ui5FormattedText, [{
      key: 'UIElement',
      get: function get() {
        return this._text;
      }
    }]);

    return Ui5FormattedText;
  }(_element.Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'htmlText', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'convertLinksToAnchorTags', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 'None';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'convertedLinksDefaultTarget', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return '_blank';
    }
  })), _class2)) || _class) || _class);
});