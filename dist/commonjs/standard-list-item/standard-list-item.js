'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5StandardListItem = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _control = require('../control/control');

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

var Ui5StandardListItem = exports.Ui5StandardListItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-standard-list-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5StandardListItem(element) {
    _classCallCheck(this, Ui5StandardListItem);

    this._item = null;
    this._parent = null;
    this._relation = null;

    _initDefineProp(this, 'title', _descriptor, this);

    _initDefineProp(this, 'icon', _descriptor2, this);

    _initDefineProp(this, 'description', _descriptor3, this);

    _initDefineProp(this, 'iconInset', _descriptor4, this);

    _initDefineProp(this, 'iconDensityAware', _descriptor5, this);

    _initDefineProp(this, 'activeIcon', _descriptor6, this);

    _initDefineProp(this, 'info', _descriptor7, this);

    _initDefineProp(this, 'infoState', _descriptor8, this);

    _initDefineProp(this, 'adaptTitleSize', _descriptor9, this);

    _initDefineProp(this, 'titleTextDirection', _descriptor10, this);

    _initDefineProp(this, 'infoTextDirection', _descriptor11, this);

    this.element = element;
  }

  Ui5StandardListItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5StandardListItem.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var props = {
      title: this.title,
      icon: this.icon,
      iconInset: (0, _attributes.getBooleanFromAttributeValue)(this.iconInset),
      iconDensityAware: (0, _attributes.getBooleanFromAttributeValue)(this.iconDensityAware),
      activeIcon: this.activeIcon,
      info: this.info,
      infoState: this.infoState,
      adaptTitleSize: (0, _attributes.getBooleanFromAttributeValue)(this.adaptTitleSize),
      titleTextDirection: this.titleTextDirection,
      infoTextDirection: this.infoTextDirection
    };
    this._item = new sap.m.StandardListItem(props);
    attributeManager.addAttributes({ "ui5-container": '' });
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
  };

  Ui5StandardListItem.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }
  };

  Ui5StandardListItem.prototype.titleChanged = function titleChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitle(newValue);
    }
  };

  Ui5StandardListItem.prototype.iconChanged = function iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  };

  Ui5StandardListItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
    if (this._item !== null) {
      this._item.setDescription(newValue);
    }
  };

  Ui5StandardListItem.prototype.iconInsetChanged = function iconInsetChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconInset((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5StandardListItem.prototype.iconDensityAwareChanged = function iconDensityAwareChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconDensityAware((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5StandardListItem.prototype.activeIconChanged = function activeIconChanged(newValue) {
    if (this._item !== null) {
      this._item.setActiveIcon(newValue);
    }
  };

  Ui5StandardListItem.prototype.infoChanged = function infoChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfo(newValue);
    }
  };

  Ui5StandardListItem.prototype.infoStateChanged = function infoStateChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoState(newValue);
    }
  };

  Ui5StandardListItem.prototype.adaptTitleSizeChanged = function adaptTitleSizeChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdaptTitleSize((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5StandardListItem.prototype.titleTextDirectionChanged = function titleTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitleTextDirection(newValue);
    }
  };

  Ui5StandardListItem.prototype.infoTextDirectionChanged = function infoTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoTextDirection(newValue);
    }
  };

  return Ui5StandardListItem;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'iconInset', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'iconDensityAware', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'activeIcon', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'info', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'infoState', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'adaptTitleSize', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'titleTextDirection', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'infoTextDirection', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
})), _class2)) || _class) || _class);