'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _control = require('../control/control');

var _listBase = require('../list-base/list-base');

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

var Ui5Table = exports.Ui5Table = (_dec = (0, _aureliaTemplating.customElement)('ui5-table'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListBase) {
  _inherits(Ui5Table, _Ui5ListBase);

  function Ui5Table(element) {
    _classCallCheck(this, Ui5Table);

    var _this = _possibleConstructorReturn(this, _Ui5ListBase.call(this, element));

    _initDefineProp(_this, 'showOverlay', _descriptor, _this);

    _initDefineProp(_this, 'fixedLayout', _descriptor2, _this);

    _initDefineProp(_this, 'inset', _descriptor3, _this);

    _initDefineProp(_this, 'headerText', _descriptor4, _this);

    _initDefineProp(_this, 'headerDesign', _descriptor5, _this);

    _initDefineProp(_this, 'footerText', _descriptor6, _this);

    _initDefineProp(_this, 'mode', _descriptor7, _this);

    _initDefineProp(_this, 'width', _descriptor8, _this);

    _initDefineProp(_this, 'includeItemInSelection', _descriptor9, _this);

    _initDefineProp(_this, 'showUnread', _descriptor10, _this);

    _initDefineProp(_this, 'noDataText', _descriptor11, _this);

    _initDefineProp(_this, 'showNoData', _descriptor12, _this);

    _initDefineProp(_this, 'enableBusyIndicator', _descriptor13, _this);

    _initDefineProp(_this, 'modeAnimationOn', _descriptor14, _this);

    _initDefineProp(_this, 'showSeparator', _descriptor15, _this);

    _initDefineProp(_this, 'swipeDirection', _descriptor16, _this);

    _initDefineProp(_this, 'growing', _descriptor17, _this);

    _initDefineProp(_this, 'growingThreshold', _descriptor18, _this);

    _initDefineProp(_this, 'growingTriggerText', _descriptor19, _this);

    _initDefineProp(_this, 'growingScrollToLoad', _descriptor20, _this);

    _initDefineProp(_this, 'growingDirection', _descriptor21, _this);

    _initDefineProp(_this, 'rememberSelections', _descriptor22, _this);

    _initDefineProp(_this, 'keyboardMode', _descriptor23, _this);

    _initDefineProp(_this, 'delete', _descriptor24, _this);

    _initDefineProp(_this, 'itemPress', _descriptor25, _this);

    _initDefineProp(_this, 'selectionChange', _descriptor26, _this);

    _initDefineProp(_this, 'swipe', _descriptor27, _this);

    _initDefineProp(_this, 'updateFinished', _descriptor28, _this);

    _initDefineProp(_this, 'updateStarted', _descriptor29, _this);

    _initDefineProp(_this, 'busy', _descriptor30, _this);

    _this._table = null;
    _this._parent = null;
    _this._relation = null;

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
        this._table.setHeaderToolbar(child);return elem.localName;
      }
      if (elem.localName == 'info-toolbar') {
        this._table.setInfoToolbar(child);return elem.localName;
      }
      if (elem.localName == 'item') {
        this._table.addItem(child);return elem.localName;
      }
      if (elem.localName == 'column') {
        this._table.addColumn(child);return elem.localName;
      }
    }
  };

  Ui5Table.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._table.removeItem(child);
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

  Ui5Table.prototype.resetLimit = function resetLimit() {
    this._table._oGrowingDelegate.reset();
  };

  Ui5Table.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var props = {
      showOverlay: (0, _attributes.getBooleanFromAttributeValue)(this.showOverlay),
      fixedLayout: (0, _attributes.getBooleanFromAttributeValue)(this.fixedLayout)
    };
    _Ui5ListBase.prototype.fillProperties.call(this, props);
    var table = new sap.m.Table(props);
    this._table = table;
    if (this._table._oGrowingDelegate) {
      this._table._oGrowingDelegate.updateItems = function (sChangeReason) {
        this._onBeforePageLoaded(sChangeReason);
        this._onAfterPageLoaded(sChangeReason);
      };
    }
    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Table.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._table, this._relation);
    } else {
      this._table.destroy();
    }
  };

  Ui5Table.prototype.fixedLayoutChanged = function fixedLayoutChanged(newValue) {
    if (this._table !== null) {
      this._table.setFixedLayout((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
}(_listBase.Ui5ListBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showOverlay', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fixedLayout', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'headerDesign', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparator', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return 'Both';
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return 'Downwards';
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return 'Navigation';
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'itemPress', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec28], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'swipe', [_dec29], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'updateFinished', [_dec30], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'updateStarted', [_dec31], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec32], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);