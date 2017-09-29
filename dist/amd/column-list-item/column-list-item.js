define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5ColumnListItem = undefined;

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

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var Ui5ColumnListItem = exports.Ui5ColumnListItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-column-list-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5ColumnListItem(element) {
      _classCallCheck(this, Ui5ColumnListItem);

      this._item = null;
      this._parent = null;
      this._relation = null;

      _initDefineProp(this, 'vAlign', _descriptor, this);

      _initDefineProp(this, 'selected', _descriptor2, this);

      this.element = element;
    }

    Ui5ColumnListItem.prototype.defaultFunc = function defaultFunc() {};

    Ui5ColumnListItem.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);

      this._item = new sap.m.ColumnListItem({
        vAlign: this.vAlign,
        selected: (0, _attributes.getBooleanFromAttributeValue)(this.selected)
      });

      this._parent = this.element.closest("[ui5-container]").au.controller.viewModel;
      this._relation = this._parent.addChild(this._item, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    };

    Ui5ColumnListItem.prototype.detached = function detached() {
      if (this._parent && this._parent.removeChildByRelation) {
        this._parent.removeChildByRelation(this._item, this._relation);
      }
    };

    Ui5ColumnListItem.prototype.bind = function bind(bindingContext, overrideContext) {
      console.log("bind called" + bindingContext + overrideContext);
    };

    Ui5ColumnListItem.prototype.unbind = function unbind() {
      console.log('unbind called ');
    };

    Ui5ColumnListItem.prototype.addChild = function addChild(child, elem) {
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

        if (elem.localName == 'cell') {
          this._item.addCell(child);break;
        }
      }
    };

    Ui5ColumnListItem.prototype.vAlignChanged = function vAlignChanged(newValue) {
      if (this._item !== null) {
        this._item.setVAlign(newValue);
      }
    };

    Ui5ColumnListItem.prototype.selectedChanged = function selectedChanged(newValue) {
      if (this._item !== null) {
        this._item.setSelected(newValue);
      }
    };

    _createClass(Ui5ColumnListItem, [{
      key: 'UIElement',
      get: function get() {
        return this._item;
      }
    }]);

    return Ui5ColumnListItem;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'vAlign', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return 'Inherit';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});