define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control', '../item/item'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _control, _item) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5ViewSettingsFilterItem = undefined;

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

  var Ui5ViewSettingsFilterItem = exports.Ui5ViewSettingsFilterItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-view-settings-filter-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
    _inherits(Ui5ViewSettingsFilterItem, _Ui5Item);

    function Ui5ViewSettingsFilterItem(element) {
      _classCallCheck(this, Ui5ViewSettingsFilterItem);

      var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

      _this._item = null;
      _this._container = null;

      _initDefineProp(_this, 'multiSelect', _descriptor, _this);

      _initDefineProp(_this, 'selected', _descriptor2, _this);

      _initDefineProp(_this, 'itemPropertyChanged', _descriptor3, _this);

      _initDefineProp(_this, 'key', _descriptor4, _this);

      _initDefineProp(_this, 'enabled', _descriptor5, _this);

      _initDefineProp(_this, 'text', _descriptor6, _this);

      _initDefineProp(_this, 'textDirection', _descriptor7, _this);

      _this.element = element;
      _this.attributeManager = new _attributeManager.AttributeManager(_this.element);

      return _this;
    }

    Ui5ViewSettingsFilterItem.prototype.defaultFunc = function defaultFunc() {};

    Ui5ViewSettingsFilterItem.prototype.addChild = function addChild(child, elem) {
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

        if (elem.localName == 'items') {
          this._item.addItem(child);
          return 'items';
        }
      }
    };

    Ui5ViewSettingsFilterItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
      if (relation == 'items') {
        this._item.removeItem(child);
      }
    };

    Ui5ViewSettingsFilterItem.prototype.attached = function attached() {
      var props = {
        multiSelect: (0, _attributes.getBooleanFromAttributeValue)(this.multiSelect),
        selected: (0, _attributes.getBooleanFromAttributeValue)(this.selected),
        itemPropertyChanged: this.itemPropertyChanged
      };
      _Ui5Item.prototype.fillProperties.call(this, props);
      this._item = new sap.m.ViewSettingsFilterItem(props);
      this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
      this.attributeManager.addAttributes({ "ui5-layout": '' });
      this.attributeManager.addAttributes({ "ui5-container": '' });

      this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._container.addChild(this._item, this.element);
    };

    Ui5ViewSettingsFilterItem.prototype.detached = function detached() {
      if (this._container && this._container.removeChildByRelation) this._container.removeChildByRelation(this._item, this._relation);
    };

    Ui5ViewSettingsFilterItem.prototype.selectedChanged = function selectedChanged(newValue) {
      if (this._item !== null) {
        this._item.setSelected((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5ViewSettingsFilterItem.prototype.multiSelectChanged = function multiSelectChanged(newValue) {
      if (this._item !== null) {
        this._item.setMultiSelect((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    return Ui5ViewSettingsFilterItem;
  }(_item.Ui5Item), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'multiSelect', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  })), _class2)) || _class) || _class);
});