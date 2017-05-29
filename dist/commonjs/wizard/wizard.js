'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5Wizard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _aureliaFramework = require('aurelia-framework');

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

var Ui5Wizard = exports.Ui5Wizard = (_dec = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaFramework.computedFrom)('_wizard'), _dec(_class = _dec2(_class = (_class2 = function () {
  Ui5Wizard.prototype.defaultFunc = function defaultFunc() {};

  _createClass(Ui5Wizard, [{
    key: 'UIElement',
    get: function get() {
      return this._wizard;
    }
  }]);

  function Ui5Wizard(element) {
    _classCallCheck(this, Ui5Wizard);

    this._wizard = null;

    _initDefineProp(this, 'width', _descriptor, this);

    _initDefineProp(this, 'height', _descriptor2, this);

    _initDefineProp(this, 'showNextButton', _descriptor3, this);

    _initDefineProp(this, 'finishButtonText', _descriptor4, this);

    _initDefineProp(this, 'enableBranching', _descriptor5, this);

    _initDefineProp(this, 'stepActivate', _descriptor6, this);

    _initDefineProp(this, 'complete', _descriptor7, this);

    this.element = element;
  }

  Ui5Wizard.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'wizard') this._wizard.addStep(child);
  };

  Ui5Wizard.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
  };

  Ui5Wizard.prototype.attached = function attached() {
    var params = {
      width: this.width,
      height: this.height,
      showNextButton: (0, _attributes.getBooleanFromAttributeValue)(this.showNextButton),
      finishButtonText: this.finishButtonText,
      enableBranching: (0, _attributes.getBooleanFromAttributeValue)(this.enableBranching),
      stepActivate: this.stepActivate,
      complete: this.complete
    };
    this._wizard = new sap.m.Wizard(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
  };

  Ui5Wizard.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
  };

  Ui5Wizard.prototype.widthChanged = function widthChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setWidth(newValue);
    }
  };

  Ui5Wizard.prototype.heightChanged = function heightChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setHeight(newValue);
    }
  };

  Ui5Wizard.prototype.showNextButtonChanged = function showNextButtonChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setShowNextButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5Wizard.prototype.finishButtonTextChanged = function finishButtonTextChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setFinishButtonText(newValue);
    }
  };

  Ui5Wizard.prototype.enableBranchingChanged = function enableBranchingChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setEnableBranching((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  return Ui5Wizard;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return 'auto';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showNextButton', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'finishButtonText', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return "fortfahren";
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'enableBranching', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'stepActivate', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'complete', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);