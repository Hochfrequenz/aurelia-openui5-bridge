'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5FormElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor;

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

var Ui5FormElement = exports.Ui5FormElement = (_dec = (0, _aureliaTemplating.customElement)('ui5-form-element'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaFramework.computedFrom)('_form'), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5FormElement(element) {
    _classCallCheck(this, Ui5FormElement);

    _initDefineProp(this, 'ui5Id', _descriptor, this);

    this._form = null;
    this._parent = null;
    this._relation = null;

    this.element = element;
  }

  Ui5FormElement.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'label') {
        this._form.setLabel(child);
        return elem.localName;
      }
      if (elem.localName == 'field') {
        this._form.addField(child);
        return elem.localName;
      }
    }
  };

  Ui5FormElement.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    try {
      if (relation === 'field' && this._form && child) {
        this._form.removeField(child);
      }
    } catch (error) {}
  };

  Ui5FormElement.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var params = {};
    if (this.uiId5) this._form = new sap.ui.layout.form.FormElement(this.ui5Id, params);else this._form = new sap.ui.layout.form.FormElement(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      if (!this._parent.UIElement || this._parent.UIElement.sId != this._form.sId) {
        var prevSibling = null;
        if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._form, this.element, prevSibling);
        attributeManager.addAttributes({ "ui5-container": '' });
      } else {
        this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
        var prevSibling = null;
        if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._form, this.element, prevSibling);
        this._relation = this._parent.addChild(this._form, this.element);
        attributeManager.addAttributes({ "ui5-container": '' });
      }
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5FormElement.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) this._parent.removeChildByRelation(this._form, this._relation);
  };

  Ui5FormElement.prototype.titleChanged = function titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  };

  _createClass(Ui5FormElement, [{
    key: 'UIElement',
    get: function get() {
      return this._form;
    }
  }]);

  return Ui5FormElement;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);