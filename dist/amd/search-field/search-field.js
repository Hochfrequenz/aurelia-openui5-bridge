define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5SearchField = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

  var Ui5SearchField = exports.Ui5SearchField = (_dec = (0, _aureliaTemplating.customElement)('ui5-search-field'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5SearchField, _Ui5Control);

    Ui5SearchField.prototype.addChild = function addChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
      _Ui5Control.prototype.addChild.call(this, child, elem);
      for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        if (_isArray) {
          if (_i >= _iterator.length) break;
          elem = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          elem = _i.value;
        }

        if (elem.localName == 'suggestion-item') {
          this._field.addSuggestionItem(child);
          break;
        }
      }
    };

    function Ui5SearchField(element) {
      _classCallCheck(this, Ui5SearchField);

      var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

      _this._field = null;

      _initDefineProp(_this, 'value', _descriptor, _this);

      _initDefineProp(_this, 'width', _descriptor2, _this);

      _initDefineProp(_this, 'enabled', _descriptor3, _this);

      _initDefineProp(_this, 'visible', _descriptor4, _this);

      _initDefineProp(_this, 'maxLength', _descriptor5, _this);

      _initDefineProp(_this, 'placeholder', _descriptor6, _this);

      _initDefineProp(_this, 'showMagnifier', _descriptor7, _this);

      _initDefineProp(_this, 'showRefreshButton', _descriptor8, _this);

      _initDefineProp(_this, 'refreshButtonTooltip', _descriptor9, _this);

      _initDefineProp(_this, 'showSearchButton', _descriptor10, _this);

      _initDefineProp(_this, 'enableSuggestions', _descriptor11, _this);

      _initDefineProp(_this, 'selectOnFocus', _descriptor12, _this);

      _initDefineProp(_this, 'liveChange', _descriptor13, _this);

      _initDefineProp(_this, 'suggest', _descriptor14, _this);

      _initDefineProp(_this, 'search', _descriptor15, _this);

      _this.element = element;
      return _this;
    }

    Ui5SearchField.prototype.defaultFunc = function defaultFunc() {};

    Ui5SearchField.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      var params = {
        maxLength: this.maxLength,
        enableSuggestions: (0, _attributes.getBooleanFromAttributeValue)(this.enableSuggestions),
        liveChange: this.liveChange,
        suggest: this.suggest,
        search: this.search,
        value: this.value,
        width: this.width,
        enabled: (0, _attributes.getBooleanFromAttributeValue)(this.enabled),
        placeholder: this.placeholder,
        showMagnifier: (0, _attributes.getBooleanFromAttributeValue)(this.showMagnifier),
        showRefreshButton: (0, _attributes.getBooleanFromAttributeValue)(this.showRefreshButton),
        refreshButtonTooltip: this.refreshButtonTooltip,
        showSearchButton: (0, _attributes.getBooleanFromAttributeValue)(this.showSearchButton),
        selectOnFocus: (0, _attributes.getBooleanFromAttributeValue)(this.selectOnFocus)
      };
      if (this.ui5Id) this._field = new sap.m.SearchField(this.ui5Id, params);else this._field = new sap.m.SearchField(params);
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._field, this.element);
      attributeManager.addAttributes({ "ui5-layout": '' });
      attributeManager.addAttributes({ "ui5-container": '' });
      var that = this;
      this._field.attachLiveChange(function (event) {
        that.value = event.mParameters.newValue;
      });
      this._field.addEventDelegate(this.element);
      _Ui5Control.prototype.attached.call(this);
    };

    Ui5SearchField.prototype.valueChanged = function valueChanged(newValue) {
      if (this._field !== null) {
        this._field.setValue(newValue);
      }
    };

    Ui5SearchField.prototype.widthChanged = function widthChanged(newValue) {
      if (this._field !== null) {
        this._field.setWidth(newValue);
      }
    };

    Ui5SearchField.prototype.enabledChanged = function enabledChanged(newValue) {
      if (this._field !== null) {
        this._field.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5SearchField.prototype.visibleChanged = function visibleChanged(newValue) {
      if (this._field !== null) {
        this._field.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5SearchField.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
      if (this._field !== null) {
        this._field.setMaxLength(newValue);
      }
    };

    Ui5SearchField.prototype.placeholderChanged = function placeholderChanged(newValue) {
      if (this._field !== null) {
        this._field.setPlaceholder(newValue);
      }
    };

    Ui5SearchField.prototype.showMagnifierChanged = function showMagnifierChanged(newValue) {
      if (this._field !== null) {
        this._field.setShowMagnifier((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5SearchField.prototype.showRefreshButtonChanged = function showRefreshButtonChanged(newValue) {
      if (this._field !== null) {
        this._field.setShowRefreshButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5SearchField.prototype.refreshButtonTooltipChanged = function refreshButtonTooltipChanged(newValue) {
      if (this._field !== null) {
        this._field.setRefreshButtonTooltip(newValue);
      }
    };

    Ui5SearchField.prototype.showSearchButtonChanged = function showSearchButtonChanged(newValue) {
      if (this._field !== null) {
        this._field.setShowSearchButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5SearchField.prototype.enableSuggestionsChanged = function enableSuggestionsChanged(newValue) {
      if (this._field !== null) {
        this._field.setEnableSuggestions((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5SearchField.prototype.selectOnFocusChanged = function selectOnFocusChanged(newValue) {
      if (this._field !== null) {
        this._field.setSelectOnFocus((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    return Ui5SearchField;
  }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maxLength', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return 0;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'showMagnifier', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showRefreshButton', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'refreshButtonTooltip', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showSearchButton', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableSuggestions', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'selectOnFocus', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'liveChange', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'suggest', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'search', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
      return this.defaultFunc;
    }
  })), _class2)) || _class) || _class);
});