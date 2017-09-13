'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5ListItemBase = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

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

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Ui5ListItemBase = exports.Ui5ListItemBase = (_dec = (0, _aureliaDependencyInjection.inject)(Element), _dec2 = (0, _aureliaTemplating.bindable)(), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec(_class = (_class2 = function (_Ui5Control) {
  _inherits(Ui5ListItemBase, _Ui5Control);

  Ui5ListItemBase.prototype.defaultFunc = function defaultFunc() {};

  function Ui5ListItemBase(elem) {
    _classCallCheck(this, Ui5ListItemBase);

    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, elem));

    _initDefineProp(_this, 'visible', _descriptor, _this);

    _initDefineProp(_this, 'type', _descriptor2, _this);

    _initDefineProp(_this, 'unread', _descriptor3, _this);

    _initDefineProp(_this, 'selected', _descriptor4, _this);

    _initDefineProp(_this, 'counter', _descriptor5, _this);

    _initDefineProp(_this, 'highlight', _descriptor6, _this);

    _initDefineProp(_this, 'tap', _descriptor7, _this);

    _initDefineProp(_this, 'detailTap', _descriptor8, _this);

    _initDefineProp(_this, 'press', _descriptor9, _this);

    _initDefineProp(_this, 'detailPress', _descriptor10, _this);

    return _this;
  }

  Ui5ListItemBase.prototype.addChild = function addChild(child, elem) {
    _Ui5Control.prototype.addChild.call(this, child, elem);
  };

  Ui5ListItemBase.prototype.removeChild = function removeChild(child, elem) {
    _Ui5Control.prototype.removeChild.call(this, child, elem);
  };

  Ui5ListItemBase.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    _Ui5Control.prototype.removeChildByRelation.call(this, child, relation);
  };

  Ui5ListItemBase.prototype.attached = function attached() {
    _Ui5Control.prototype.attached.call(this);
  };

  Ui5ListItemBase.prototype.fillProperties = function fillProperties(propertyObject) {
    _Ui5Control.prototype.fillProperties.call(this, propertyObject);
    propertyObject.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
    propertyObject.type = this.type;
    propertyObject.unread = (0, _attributes.getBooleanFromAttributeValue)(this.unread);
    propertyObject.selected = (0, _attributes.getBooleanFromAttributeValue)(this.selected);
    propertyObject.counter = this.counter;
    propertyObject.highlight = this.highlight;
    propertyObject.tap = this.tap;
    propertyObject.detailTap = this.detailTap;
    propertyObject.press = this.press;
    propertyObject.detailPress = this.detailPress;
  };

  Ui5ListItemBase.prototype.busyChanged = function busyChanged(newValue) {
    if (this.UIElement != null) {
      this.UIElement.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5ListItemBase.prototype.bind = function bind(param) {
    _Ui5Control.prototype.bind.call(this, param);
  };

  Ui5ListItemBase.prototype.unbind = function unbind() {
    _Ui5Control.prototype.unbind.call(this);
  };

  return Ui5ListItemBase;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec2], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inactive';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'unread', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'highlight', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'tap', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'detailTap', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'detailPress', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class2)) || _class);