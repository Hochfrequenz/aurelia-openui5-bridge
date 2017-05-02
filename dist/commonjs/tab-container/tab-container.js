'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5TabContainer = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var Ui5TabContainer = exports.Ui5TabContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-tab-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5TabContainer(element) {
    _classCallCheck(this, Ui5TabContainer);

    _initDefineProp(this, 'showAddNewButton', _descriptor, this);

    _initDefineProp(this, 'selectedItem', _descriptor2, this);

    _initDefineProp(this, 'itemClose', _descriptor3, this);

    _initDefineProp(this, 'itemSelect', _descriptor4, this);

    _initDefineProp(this, 'addNewButtonPress', _descriptor5, this);

    this._tab = null;

    this.element = element;
  }

  Ui5TabContainer.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TabContainer.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'content') {
        this._tab.addItem(child);
        break;
      }
    }
  };

  Ui5TabContainer.prototype.removeChild = function removeChild(child, elem) {
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

      if (elem.localName == 'content') {
        this._tab.removeItem(child);
        break;
      }
    }
  };

  Ui5TabContainer.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    this._tab = new sap.m.TabContainer({
      showAddNewButton: (0, _attributes.getBooleanFromAttributeValue)(this.showAddNewButton),
      itemClose: this.itemClose,
      itemSelect: this.itemSelect,
      addNewButtonPress: this.addNewButtonPress
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5TabContainer.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    } else {
      this._tab.destroy();
    }
  };

  Ui5TabContainer.prototype.showAddNewButtonChanged = function showAddNewButtonChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowAddNewButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  return Ui5TabContainer;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showAddNewButton', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selectedItem', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemClose', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelect', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'addNewButtonPress', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class2)) || _class) || _class);