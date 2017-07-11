'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5ActionSheet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

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

var Ui5ActionSheet = exports.Ui5ActionSheet = (_dec = (0, _aureliaTemplating.customElement)('ui5-action-sheet'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5ActionSheet(element) {
    _classCallCheck(this, Ui5ActionSheet);

    this._sheet = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor, this);

    _initDefineProp(this, 'placement', _descriptor2, this);

    _initDefineProp(this, 'title', _descriptor3, this);

    _initDefineProp(this, 'showCancelButton', _descriptor4, this);

    _initDefineProp(this, 'cancelButtonText', _descriptor5, this);

    _initDefineProp(this, 'beforeOpen', _descriptor6, this);

    _initDefineProp(this, 'afterOpen', _descriptor7, this);

    _initDefineProp(this, 'beforeClose', _descriptor8, this);

    _initDefineProp(this, 'afterClose', _descriptor9, this);

    _initDefineProp(this, 'cancelButtonTap', _descriptor10, this);

    _initDefineProp(this, 'cancelButtonPress', _descriptor11, this);

    this.element = element;
    this.attributeManager = new _attributeManager.AttributeManager(this.element);
  }

  Ui5ActionSheet.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5ActionSheet.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'buttons') {
        this._sheet.addButton(child);
        return 'buttons';
      }
    }
  };

  Ui5ActionSheet.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'buttons') {
      this._sheet.removeButton(child);
    }
  };

  Ui5ActionSheet.prototype.removeChild = function removeChild(child, elem) {};

  Ui5ActionSheet.prototype.attached = function attached() {
    var props = {
      title: this.title,
      showCancelButton: (0, _attributes.getBooleanFromAttributeValue)(this.showCancelButton),
      cancelButtonText: this.cancelButtonText,
      placement: this.placement,
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose,
      cancelButtonPress: this.cancelButtonPress,
      cancelButtonTap: this.cancelButtonTap
    };
    if (this.ui5Id) this._sheet = new sap.m.ActionSheet(this.ui5Id, props);else this._sheet = new sap.m.ActionSheet(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5ActionSheet.prototype.detached = function detached() {};

  Ui5ActionSheet.prototype.placementChanged = function placementChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setPlacement(newValue);
    }
  };

  Ui5ActionSheet.prototype.titleChanged = function titleChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setTitle(newValue);
    }
  };

  Ui5ActionSheet.prototype.showCancelButtonChanged = function showCancelButtonChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setShowCancelButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5ActionSheet.prototype.cancelButtonTextChanged = function cancelButtonTextChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setCancelButtonText(newValue);
    }
  };

  _createClass(Ui5ActionSheet, [{
    key: 'UIElement',
    get: function get() {
      return this._sheet;
    }
  }]);

  return Ui5ActionSheet;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'placement', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return 'Bottom';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showCancelButton', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'cancelButtonText', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpen', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'beforeClose', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'afterClose', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'cancelButtonTap', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'cancelButtonPress', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class2)) || _class) || _class);