'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5List = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28;

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

var Ui5List = exports.Ui5List = (_dec = (0, _aureliaTemplating.customElement)('ui5-list'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListBase) {
  _inherits(Ui5List, _Ui5ListBase);

  function Ui5List(element) {
    _classCallCheck(this, Ui5List);

    var _this = _possibleConstructorReturn(this, _Ui5ListBase.call(this, element));

    _initDefineProp(_this, 'backgroundDesign', _descriptor, _this);

    _initDefineProp(_this, 'inset', _descriptor2, _this);

    _initDefineProp(_this, 'headerText', _descriptor3, _this);

    _initDefineProp(_this, 'footerText', _descriptor4, _this);

    _initDefineProp(_this, 'mode', _descriptor5, _this);

    _initDefineProp(_this, 'width', _descriptor6, _this);

    _initDefineProp(_this, 'includeItemInSelection', _descriptor7, _this);

    _initDefineProp(_this, 'showUnread', _descriptor8, _this);

    _initDefineProp(_this, 'noDataText', _descriptor9, _this);

    _initDefineProp(_this, 'showNoData', _descriptor10, _this);

    _initDefineProp(_this, 'enableBusyIndicator', _descriptor11, _this);

    _initDefineProp(_this, 'modeAnimationOn', _descriptor12, _this);

    _initDefineProp(_this, 'showSeparator', _descriptor13, _this);

    _initDefineProp(_this, 'swipeDirection', _descriptor14, _this);

    _initDefineProp(_this, 'growing', _descriptor15, _this);

    _initDefineProp(_this, 'growingThreshold', _descriptor16, _this);

    _initDefineProp(_this, 'growingTriggerText', _descriptor17, _this);

    _initDefineProp(_this, 'growingScrollToLoad', _descriptor18, _this);

    _initDefineProp(_this, 'growingDirection', _descriptor19, _this);

    _initDefineProp(_this, 'rememberSelections', _descriptor20, _this);

    _initDefineProp(_this, 'keyboardMode', _descriptor21, _this);

    _initDefineProp(_this, 'delete', _descriptor22, _this);

    _initDefineProp(_this, 'itemPress', _descriptor23, _this);

    _initDefineProp(_this, 'selectionChange', _descriptor24, _this);

    _initDefineProp(_this, 'swipe', _descriptor25, _this);

    _initDefineProp(_this, 'updateFinished', _descriptor26, _this);

    _initDefineProp(_this, 'updateStarted', _descriptor27, _this);

    _initDefineProp(_this, 'busy', _descriptor28, _this);

    _this._list = null;
    _this._parent = null;
    _this._relation = null;

    _this.element = element;
    return _this;
  }

  Ui5List.prototype.defaultFunc = function defaultFunc() {};

  Ui5List.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._list.addItem(child);return elem.localName;
      }
    }
  };

  Ui5List.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._list.removeItem(child);
    }
  };

  Ui5List.prototype.removeChild = function removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
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
        this._list.removeItem(child);break;
      }
    }
  };

  Ui5List.prototype.resetLimit = function resetLimit() {
    this._list._oGrowingDelegate.reset();
  };

  Ui5List.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var props = {
      backgroundDesign: this.backgroundDesign
    };
    _Ui5ListBase.prototype.fillProperties.call(this, props);
    var list = new sap.m.List(props);
    this._list = list;
    this._list._oGrowingDelegate.updateItems = function (sChangeReason) {
      this._onBeforePageLoaded(sChangeReason);
      this._onAfterPageLoaded(sChangeReason);
    };
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._list, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._list.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5List.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._list, this._relation);
    } else {
      this._list.destroy();
    }
  };

  Ui5List.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
    if (this._list !== null) {
      this._list.setBackgroundDesign(newValue);
    }
  };

  Ui5List.prototype.selectionChangeChanged = function selectionChangeChanged(newValue) {
    if (this._list !== null) {
      this._list.attachSelectionChange(newValue);
    }
  };

  _createClass(Ui5List, [{
    key: 'UIElement',
    get: function get() {
      return this._list;
    }
  }]);

  return Ui5List;
}(_listBase.Ui5ListBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparator', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return 'Both';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return 'Downwards';
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return 'Navigation';
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'itemPress', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'swipe', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'updateFinished', [_dec28], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'updateStarted', [_dec29], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec30], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class2)) || _class) || _class);