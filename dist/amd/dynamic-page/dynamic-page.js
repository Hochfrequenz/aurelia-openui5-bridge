define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5DynamicPage = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var Ui5DynamicPage = exports.Ui5DynamicPage = (_dec = (0, _aureliaTemplating.customElement)('ui5-dynamic-page'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaFramework.TaskQueue), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaFramework.computedFrom)('_page'), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5DynamicPage(element, queue) {
      _classCallCheck(this, Ui5DynamicPage);

      _initDefineProp(this, 'preserveHeaderStateOnScroll', _descriptor, this);

      _initDefineProp(this, 'headerExpanded', _descriptor2, this);

      _initDefineProp(this, 'toggleHeaderOnTitleClick', _descriptor3, this);

      _initDefineProp(this, 'showFooter', _descriptor4, this);

      _initDefineProp(this, 'fitContent', _descriptor5, this);

      this._page = null;
      this._parent = null;
      this._taskQueue = null;

      this.element = element;
      this._taskQueue = queue;
    }

    Ui5DynamicPage.prototype.defaultFunc = function defaultFunc() {};

    Ui5DynamicPage.prototype.addChild = function addChild(child, elem) {
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

        if (elem.localName == 'heading') {
          this._page.setHeader(child);

          break;
        }
        if (elem.localName == 'pagetitle') {
          this._page.setTitle(child);

          var _self = this;
          _self._taskQueue.queueTask(function () {
            _self._page.setHeaderExpanded((0, _attributes.getBooleanFromAttributeValue)(_self.headerExpanded));
          });
          break;
        }
        if (elem.localName == 'content') {
          this._page.setContent(child);

          break;
        }
        if (elem.localName == 'footer') {
          this._page.setFooter(child);
          break;
        }
      }
    };

    Ui5DynamicPage.prototype.removeChild = function removeChild(child, elem) {
      var path = jQuery.makeArray($(elem).parentsUntil(this.element));
      for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          elem = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          elem = _i2.value;
        }

        if (elem.localName == 'header') {
          break;
        }

        if (elem.localName == 'content') {
          break;
        }
        if (elem.localName == 'footer') {
          break;
        }
      }
    };

    Ui5DynamicPage.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      var page = new sap.f.DynamicPage({
        preserveHeaderStateOnScroll: (0, _attributes.getBooleanFromAttributeValue)(this.preserveHeaderStateOnScroll),
        headerExpanded: (0, _attributes.getBooleanFromAttributeValue)(this.headerExpanded),
        toggleHeaderOnTitleClick: (0, _attributes.getBooleanFromAttributeValue)(this.toggleHeaderOnTitleClick),
        showFooter: (0, _attributes.getBooleanFromAttributeValue)(this.showFooter),
        fitContent: (0, _attributes.getBooleanFromAttributeValue)(this.fitContent)
      });
      this._page = page;

      if ($(this.element).closest("[ui5-container]").length > 0) {
        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
        this._parent.addChild(this._page, this.element);
        attributeManager.addAttributes({ "ui5-container": '' });
      } else {
        this._page.placeAt(this.element.parentElement);
        attributeManager.addAttributes({ "ui5-container": '' });
        attributeManager.addClasses("ui5-hide");
      }
    };

    Ui5DynamicPage.prototype.detached = function detached() {
      if (this._parent) {
        this._parent.removeChild(this._page, this.element);
      } else {
        this._page.destroy();
      }
    };

    Ui5DynamicPage.prototype.showFooterChanged = function showFooterChanged(newValue) {
      if (this._page !== null) {
        this._page.setShowFooter((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5DynamicPage.prototype.preserveHeaderStateOnScrollChanged = function preserveHeaderStateOnScrollChanged(newValue) {
      if (this._page !== null) {
        this._page.setPreserveHeaderStateOnScroll((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5DynamicPage.prototype.headerExpandedChanged = function headerExpandedChanged(newValue) {
      if (this._page !== null) {
        this._page.setHeaderExpanded((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5DynamicPage.prototype.toggleHeaderOnTitleClickChanged = function toggleHeaderOnTitleClickChanged(newValue) {
      if (this._page !== null) {
        this._page.setToggleHeaderOnTitleClick((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5DynamicPage.prototype.fitContentChanged = function fitContentChanged(newValue) {
      if (this._page !== null) {
        this._page.setFitContent((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    _createClass(Ui5DynamicPage, [{
      key: 'UIElement',
      get: function get() {
        return this._page;
      }
    }]);

    return Ui5DynamicPage;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'preserveHeaderStateOnScroll', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'headerExpanded', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'toggleHeaderOnTitleClick', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'fitContent', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});