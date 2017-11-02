define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5MessageView = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

  var Ui5MessageView = exports.Ui5MessageView = (_dec = (0, _aureliaTemplating.customElement)('ui5-message-view'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaFramework.computedFrom)('_view'), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5MessageView(element) {
      _classCallCheck(this, Ui5MessageView);

      this._view = null;
      this._parent = null;
      this._relation = null;

      _initDefineProp(this, 'ui5Id', _descriptor, this);

      _initDefineProp(this, 'asyncDescriptionHandler', _descriptor2, this);

      _initDefineProp(this, 'asyncURLHandler', _descriptor3, this);

      _initDefineProp(this, 'groupItems', _descriptor4, this);

      this.element = element;
    }

    Ui5MessageView.prototype.defaultFunc = function defaultFunc() {};

    Ui5MessageView.prototype.addChild = function addChild(child, elem) {
      var path = jQuery.makeArray($(elem).parentsUntil(this.element));
      for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        if (_isArray) {
          if (_i >= _iterator.length) break;
          elem = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          elem = _i.value;
        }

        if (elem.localName == 'items') {
          this._view.addItem(child);
          return elem.localName;
        }
      }
    };

    Ui5MessageView.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
      if (relation === 'items' && this._view && child) {
        this._view.removeItem(child);
      }
    };

    Ui5MessageView.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      this._view = new sap.m.MessageView({
        asyncDescriptionHandler: this.asyncDescriptionHandler,
        asyncURLHandler: this.asyncURLHandler,
        groupItems: (0, _attributes.getBooleanFromAttributeValue)(this.groupItems)
      });
      this.element.removeAttribute('ui5-container');
      if ($(this.element).closest("[ui5-container]").length > 0) {
        var prevSibling = null;
        if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
        this._relation = this._parent.addChild(this._view, this.element, prevSibling);
        attributeManager.addAttributes({ "ui5-container": '' });
      } else {
        this._view.placeAt(this.element.parentElement);
        attributeManager.addClasses("ui5-hide");
      }
    };

    Ui5MessageView.prototype.detached = function detached() {
      if (this._parent && this._parent.removeChildByRelation) this._parent.removeChildByRelation(this._view, this._relation);
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      attributeManager.removeAttributes(["ui5-container"]);
      this._view.destroy();
    };

    Ui5MessageView.prototype.textChanged = function textChanged(newValue) {
      if (this._view != null) {
        this._view.setText(newValue);
      }
    };

    _createClass(Ui5MessageView, [{
      key: 'UIElement',
      get: function get() {
        return this._view;
      }
    }]);

    return Ui5MessageView;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'asyncDescriptionHandler', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'asyncURLHandler', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'groupItems', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});