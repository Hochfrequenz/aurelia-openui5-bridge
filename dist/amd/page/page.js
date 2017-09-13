define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Page = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var Ui5Page = exports.Ui5Page = (_dec = (0, _aureliaTemplating.customElement)('ui5-page'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5Page(element) {
      _classCallCheck(this, Ui5Page);

      _initDefineProp(this, 'title', _descriptor, this);

      _initDefineProp(this, 'showHeader', _descriptor2, this);

      _initDefineProp(this, 'showFooter', _descriptor3, this);

      _initDefineProp(this, 'showNavButton', _descriptor4, this);

      _initDefineProp(this, 'navButtonPress', _descriptor5, this);

      this._page = null;
      this._relation = null;
      this._parent = null;

      this.element = element;
    }

    Ui5Page.prototype.defaultFunc = function defaultFunc() {};

    Ui5Page.prototype.addChild = function addChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
      for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        if (_isArray) {
          if (_i >= _iterator.length) break;
          elem = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          elem = _i.value;
        }

        if (elem.localName == 'header') {
          this._page.addHeaderContent(child);
          return elem.localName;
        }
        if (elem.localName == 'subheader') {
          this._page.setSubHeader(child);
          return elem.localName;
        }
        if (elem.localName == 'content') {
          this._page.addContent(child);
          return elem.localName;
        }
        if (elem.localName == 'footer') {
          this._page.setFooter(child);
          return elem.localName;
        }
      }
    };

    Ui5Page.prototype.removeChild = function removeChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
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
          this._page.removeHeaderContent(child);
          break;
        }
        if (elem.localName == 'subheader') {
          break;
        }
        if (elem.localName == 'content') {
          this._page.removeContent(child);
          break;
        }
        if (elem.localName == 'footer') {
          break;
        }
      }
    };

    Ui5Page.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
      if (relation == 'header') {
        this._page.removeHeaderContent(child);
      } else if (relation == 'content') {
        this._page.removeContent(child);
      }
    };

    Ui5Page.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      var page = new sap.m.Page({
        title: this.title,
        showHeader: (0, _attributes.getBooleanFromAttributeValue)(this.showHeader),
        showFooter: (0, _attributes.getBooleanFromAttributeValue)(this.showFooter),
        showNavButton: (0, _attributes.getBooleanFromAttributeValue)(this.showNavButton),
        navButtonPress: this.navButtonPress
      });
      this._page = page;

      if ($(this.element).parents("[ui5-container]").length > 0) {
        this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
        this._relation = this._parent.addChild(this._page, this.element);
        attributeManager.addAttributes({ "ui5-container": '' });
      } else {
        this._page.placeAt(this.element.parentElement);
        attributeManager.addAttributes({ "ui5-container": '' });
        attributeManager.addClasses("ui5-hide");
      }
    };

    Ui5Page.prototype.detached = function detached() {
      if ($(this.element).parents("[ui5-container]").length > 0) {
        if (this._parent && this._parent.removeChildByRelation) this._parent.removeChildByRelation(this._relation);else $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
      } else {
        this._page.destroy();
      }
    };

    Ui5Page.prototype.titleChanged = function titleChanged(newValue) {
      if (this._page !== null) {
        this._page.setTitle(newValue);
      }
    };

    Ui5Page.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
      if (this._page !== null) {
        this._page.setShowHeader((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Page.prototype.showFooterChanged = function showFooterChanged(newValue) {
      if (this._page !== null) {
        this._page.setShowFooter((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Page.prototype.showNavButtonChanged = function showNavButtonChanged(newValue) {
      if (this._page !== null) {
        this._page.setShowNavButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    return Ui5Page;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showNavButton', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'navButtonPress', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  })), _class2)) || _class) || _class);
});