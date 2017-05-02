'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5Table = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

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

var Ui5Table = exports.Ui5Table = (_dec = (0, _aureliaTemplating.customElement)('ui5-table'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5Table(element) {
    _classCallCheck(this, Ui5Table);

    _initDefineProp(this, 'headerText', _descriptor, this);

    this._table = null;

    this.element = element;
  }

  Ui5Table.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'header-toolbar') {
        this._table.setHeaderToolbar(child);break;
      }
      if (elem.localName == 'info-toolbar') {
        this._table.setInfoToolbar(child);break;
      }
      if (elem.localName == 'item') {
        this._table.addItem(child);break;
      }
      if (elem.localName == 'column') {
        this._table.addColumn(child);break;
      }
    }
  };

  Ui5Table.prototype.removeChild = function removeChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._table.removeItem(child);break;
      }
    }
  };

  Ui5Table.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var table = new sap.m.Table({
      headerText: this.headerText
    });
    this._table = table;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Table.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._table, this.element);
    } else {
      this._table.destroy();
    }
  };

  Ui5Table.prototype.headerTextChanged = function headerTextChanged(newValue) {
    if (this._table !== null) {
      this._table.setHeaderText(newValue);
    }
  };

  return Ui5Table;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class2)) || _class) || _class);