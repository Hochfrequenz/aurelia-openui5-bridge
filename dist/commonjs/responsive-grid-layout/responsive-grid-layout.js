'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5ResponsiveGridLayout = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;

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

var Ui5ResponsiveGridLayout = exports.Ui5ResponsiveGridLayout = (_dec = (0, _aureliaTemplating.customElement)('ui5-responsive-grid-layout'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5ResponsiveGridLayout(element) {
    _classCallCheck(this, Ui5ResponsiveGridLayout);

    _initDefineProp(this, 'ui5Id', _descriptor, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor2, this);

    _initDefineProp(this, 'labelSpanL', _descriptor3, this);

    _initDefineProp(this, 'labelSpanM', _descriptor4, this);

    _initDefineProp(this, 'labelSpanS', _descriptor5, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor6, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor7, this);

    _initDefineProp(this, 'emptySpanL', _descriptor8, this);

    _initDefineProp(this, 'emptySpanM', _descriptor9, this);

    _initDefineProp(this, 'emptySpanS', _descriptor10, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor11, this);

    _initDefineProp(this, 'breakpointXL', _descriptor12, this);

    _initDefineProp(this, 'breakpointL', _descriptor13, this);

    _initDefineProp(this, 'breakpointM', _descriptor14, this);

    this._form = null;

    this.element = element;
  }

  Ui5ResponsiveGridLayout.prototype.addChild = function addChild(child, elem) {};

  Ui5ResponsiveGridLayout.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var params = {

      labelSpanXL: parseInt(this.labelSpanXL),
      labelSpanL: parseInt(this.labelSpanL),
      labelSpanM: parseInt(this.labelSpanM),
      labelSpanS: parseInt(this.labelSpanS),
      adjustLabelSpan: (0, _attributes.getBooleanFromAttributeValue)(this.adjustLabelSpan),
      emptySpanXL: parseInt(this.emptySpanXL),
      emptySpanL: parseInt(this.emptySpanL),
      emptySpanM: parseInt(this.emptySpanM),
      emptySpanS: parseInt(this.emptySpanS),
      singleContainerFullSize: (0, _attributes.getBooleanFromAttributeValue)(this.singleContainerFullSize),
      breakpointXL: parseInt(this.breakpointXL),
      breakpointL: parseInt(this.breakpointL),
      breakpointM: parseInt(this.breakpointM)

    };
    if (this.uiId5) this._form = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);else this._form = new sap.ui.layout.form.ResponsiveGridLayout(params);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  return Ui5ResponsiveGridLayout;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanXL', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanL', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanM', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanS', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'adjustLabelSpan', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanXL', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanL', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanM', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanS', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'singleContainerFullSize', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointXL', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointL', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointM', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class2)) || _class) || _class);