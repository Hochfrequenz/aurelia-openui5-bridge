'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5SplitContainer = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

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

var Ui5SplitContainer = exports.Ui5SplitContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-split-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5SplitContainer(element) {
    _classCallCheck(this, Ui5SplitContainer);

    _initDefineProp(this, 'defaultTransitionNameDetail', _descriptor, this);

    _initDefineProp(this, 'defaultTransitionNameMaster', _descriptor2, this);

    _initDefineProp(this, 'mode', _descriptor3, this);

    _initDefineProp(this, 'masterButtonText', _descriptor4, this);

    _initDefineProp(this, 'backgroundColor', _descriptor5, this);

    _initDefineProp(this, 'backgroundImage', _descriptor6, this);

    _initDefineProp(this, 'backgroundRepeat', _descriptor7, this);

    _initDefineProp(this, 'backgroundOpacity', _descriptor8, this);

    _initDefineProp(this, 'masterNavigate', _descriptor9, this);

    _initDefineProp(this, 'afterMasterNavigate', _descriptor10, this);

    _initDefineProp(this, 'masterButton', _descriptor11, this);

    _initDefineProp(this, 'beforeMasterOpen', _descriptor12, this);

    _initDefineProp(this, 'afterMasterOpen', _descriptor13, this);

    _initDefineProp(this, 'beforeMasterClose', _descriptor14, this);

    _initDefineProp(this, 'afterMasterClose', _descriptor15, this);

    _initDefineProp(this, 'detailNavigate', _descriptor16, this);

    _initDefineProp(this, 'afterDetailNavigate', _descriptor17, this);

    this._container = null;
    this._parent = null;

    this.element = element;
  }

  Ui5SplitContainer.prototype.defaultFunc = function defaultFunc() {};

  Ui5SplitContainer.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'master') {
        this._container.addMasterPage(child);
        return elem.localName;
      }
      if (elem.localName == 'detail') {
        this._container.addDetailPage(child);
        return elem.localName;
      }
    }
  };

  Ui5SplitContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation === 'master' && this._container && child) {
      this._container.removeMasterPage(child);
    } else if (relation === 'detail' && this._container && child) {
      this._container.removeDetailPage(child);
    }
  };

  Ui5SplitContainer.prototype.attached = function attached() {
    var _ref;

    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var container = new sap.m.SplitContainer((_ref = {
      defaultTransitionNameDetail: this.defaultTransitionNameDetail,
      defaultTransitionNameMaster: this.defaultTransitionNameMaster,
      mode: this.mode,
      masterButton: this.masterButton,
      backgroundImage: this.backgroundImage,
      backgroundRepeat: (0, _attributes.getBooleanFromAttributeValue)(this.backgroundRepeat),
      backgroundOpacity: this.backgroundOpacity,
      masterNavigate: this.masterNavigate,
      afterMasterNavigate: this.afterMasterNavigate
    }, _ref['masterButton'] = this.masterButton, _ref.beforeMasterOpen = this.beforeMasterOpen, _ref.afterMasterOpen = this.afterMasterOpen, _ref.beforeMasterClose = this.beforeMasterClose, _ref.afterMasterClose = this.afterMasterClose, _ref.detailNavigate = this.detailNavigate, _ref.afterDetailNavigate = this.afterDetailNavigate, _ref));
    this._container = container;

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._container, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._container.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5SplitContainer.prototype.detached = function detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent.removeChild(this._container, this.element);
    } else {
      this._container.destroy();
    }
  };

  Ui5SplitContainer.prototype.defaultTransitionNameDetailChanged = function defaultTransitionNameDetailChanged(newValue) {
    if (this._container !== null) {
      this._container.setDefaultTransitionNameDetail(newValue);
    }
  };

  Ui5SplitContainer.prototype.defaultTransitionNameMasterChanged = function defaultTransitionNameMasterChanged(newValue) {
    if (this._container !== null) {
      this._container.setDefaultTransitionNameMaster(newValue);
    }
  };

  Ui5SplitContainer.prototype.modeChanged = function modeChanged(newValue) {
    if (this._container !== null) {
      this._container.setMode(newValue);
    }
  };

  Ui5SplitContainer.prototype.masterButtonTextChanged = function masterButtonTextChanged(newValue) {
    if (this._container !== null) {
      this._container.setMasterButtonText(newValue);
    }
  };

  Ui5SplitContainer.prototype.backgroundColorChanged = function backgroundColorChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundColor(newValue);
    }
  };

  Ui5SplitContainer.prototype.backgroundImageChanged = function backgroundImageChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundImage(newValue);
    }
  };

  Ui5SplitContainer.prototype.backgroundOpacityChanged = function backgroundOpacityChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundOpacity(newValue);
    }
  };

  Ui5SplitContainer.prototype.backgroundRepeatChanged = function backgroundRepeatChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundRepeat((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  return Ui5SplitContainer;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'defaultTransitionNameDetail', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'defaultTransitionNameMaster', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return 'ShowHideMode';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'masterButtonText', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundColor', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundImage', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundRepeat', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundOpacity', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return 1.0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'masterNavigate', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'afterMasterNavigate', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'masterButton', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'beforeMasterOpen', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'afterMasterOpen', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'beforeMasterClose', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'afterMasterClose', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'detailNavigate', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'afterDetailNavigate', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class2)) || _class) || _class);