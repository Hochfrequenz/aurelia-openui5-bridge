define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Table = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

  var Ui5Table = exports.Ui5Table = (_dec = (0, _aureliaTemplating.customElement)('ui5-table'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5Table, _Ui5Control);

    function Ui5Table(element) {
      _classCallCheck(this, Ui5Table);

      var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

      _initDefineProp(_this, 'headerText', _descriptor, _this);

      _initDefineProp(_this, 'showOverlay', _descriptor2, _this);

      _initDefineProp(_this, 'busy', _descriptor3, _this);

      _this._table = null;

      _this.element = element;
      return _this;
    }

    Ui5Table.prototype.addChild = function addChild(child, elem) {
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

        if (elem.localName == 'header-toolbar') {
          this._table.setHeaderToolbar(child);break;
        }
        if (elem.localName == 'info-toolbar') {
          this._table.setInfoToolbar(child);break;
        }
        if (elem.localName == 'item') {
          this._table.addItem(child);break;
        }
        if (elem.localName == 'column') {
          this._table.addColumn(child);break;
        }
      }
    };

    Ui5Table.prototype.removeChild = function removeChild(child, elem) {
      var path = $(elem).parentsUntil(this.element);
      for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          elem = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          elem = _i2.value;
        }

        if (elem.localName == 'item') {
          this._table.removeItem(child);break;
        }
      }
    };

    Ui5Table.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      var props = {
        headerText: this.headerText,
        showOverlay: (0, _attributes.getBooleanFromAttributeValue)(this.showOverlay)
      };
      _Ui5Control.prototype.fillProperties.call(this, props);
      var table = new sap.m.Table(props);
      this._table = table;

      if ($(this.element).parents("[ui5-container]").length > 0) {
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._table, this.element);
        attributeManager.addAttributes({ "ui5-container": '' });
      } else {
        this._table.placeAt(this.element.parentElement);
        attributeManager.addAttributes({ "ui5-container": '' });
        attributeManager.addClasses("ui5-hide");
      }
    };

    Ui5Table.prototype.detached = function detached() {
      if ($(this.element).parents("[ui5-container]").length > 0) {
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._table, this.element);
      } else {
        this._table.destroy();
      }
    };

    Ui5Table.prototype.headerTextChanged = function headerTextChanged(newValue) {
      if (this._table !== null) {
        this._table.setHeaderText(newValue);
      }
    };

    Ui5Table.prototype.showOverlayChanged = function showOverlayChanged(newValue) {
      if (this._table !== null) {
        this._table.setShowOverlay(newValue);
      }
    };

    _createClass(Ui5Table, [{
      key: 'UIElement',
      get: function get() {
        return this._table;
      }
    }]);

    return Ui5Table;
  }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return '';
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showOverlay', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class) || _class);
});