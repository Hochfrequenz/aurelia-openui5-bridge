define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5IconTabFilter = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Ui5IconTabFilter = exports.Ui5IconTabFilter = (_dec = (0, _aureliaTemplating.customElement)('ui5-icon-tab-filter'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5IconTabFilter(element) {
      _classCallCheck(this, Ui5IconTabFilter);

      this._tab = null;
      this._parent = null;

      _initDefineProp(this, 'text', _descriptor, this);

      _initDefineProp(this, 'tabKey', _descriptor2, this);

      _initDefineProp(this, 'design', _descriptor3, this);

      this.element = element;
    }

    Ui5IconTabFilter.prototype.defaultFunc = function defaultFunc(event) {};

    Ui5IconTabFilter.prototype.addChild = function addChild(child, elem) {
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

        if (elem.localName == 'content') {
          this._tab.addContent(child);
          break;
        }
      }
    };

    Ui5IconTabFilter.prototype.removeChild = function removeChild(child, elem) {
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

        if (elem.localName == 'content') {
          this._tab.removeContent(child);
          break;
        }
      }
    };

    Ui5IconTabFilter.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      this._tab = new sap.m.IconTabFilter({
        text: this.text,
        key: this.tabKey,
        design: this.design
      });

      if ($(this.element).closest("[ui5-container]").length > 0) {
        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
        this._parent.addChild(this._tab, this.element);
        attributeManager.addAttributes({ "ui5-container": '' });
      } else {
        this._tab.placeAt(this.element.parentElement);
        attributeManager.addAttributes({ "ui5-container": '' });
        attributeManager.addClasses("ui5-hide");
      }
    };

    Ui5IconTabFilter.prototype.detached = function detached() {
      if (this._parent) {
        this._parent.removeChild(this._tab, this.element);
      } else {
        this._tab.destroy();
      }
    };

    Ui5IconTabFilter.prototype.tabKeyChanged = function tabKeyChanged(newValue) {
      if (this._tab !== null) {
        this._tab.setKey(newValue);
      }
    };

    Ui5IconTabFilter.prototype.textChanged = function textChanged(newValue) {
      if (this._tab !== null) {
        this._tab.setText(newValue);
      }
    };

    Ui5IconTabFilter.prototype.designChanged = function designChanged(newValue) {
      if (this._tab !== null) {
        this._tab.setDesign(newValue);
      }
    };

    return Ui5IconTabFilter;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'tabKey', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'design', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'Vertical';
    }
  })), _class2)) || _class) || _class);
});