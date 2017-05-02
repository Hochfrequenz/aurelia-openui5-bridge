'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5DatePicker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _inputBase = require('../input-base/input-base');

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

var Ui5DatePicker = exports.Ui5DatePicker = (_dec = (0, _aureliaTemplating.customElement)('ui5-date-picker'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5InputBase) {
  _inherits(Ui5DatePicker, _Ui5InputBase);

  Ui5DatePicker.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5InputBase.prototype.addChild.call(this, child, elem);
  };

  _createClass(Ui5DatePicker, [{
    key: 'UIElement',
    get: function get() {
      return this._picker;
    }
  }]);

  function Ui5DatePicker(element) {
    _classCallCheck(this, Ui5DatePicker);

    var _this = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

    _this._picker = null;

    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

    _initDefineProp(_this, 'displayFormat', _descriptor2, _this);

    _initDefineProp(_this, 'valueFormat', _descriptor3, _this);

    _initDefineProp(_this, 'dateValue', _descriptor4, _this);

    _initDefineProp(_this, 'displayFormatType', _descriptor5, _this);

    _initDefineProp(_this, 'secondaryCalendarType', _descriptor6, _this);

    _initDefineProp(_this, 'minDate', _descriptor7, _this);

    _initDefineProp(_this, 'maxDate', _descriptor8, _this);

    _initDefineProp(_this, 'specialDates', _descriptor9, _this);

    _initDefineProp(_this, 'value', _descriptor10, _this);

    _initDefineProp(_this, 'width', _descriptor11, _this);

    _initDefineProp(_this, 'enabled', _descriptor12, _this);

    _initDefineProp(_this, 'valueState', _descriptor13, _this);

    _initDefineProp(_this, 'name', _descriptor14, _this);

    _initDefineProp(_this, 'placeholder', _descriptor15, _this);

    _initDefineProp(_this, 'editable', _descriptor16, _this);

    _initDefineProp(_this, 'valueStateText', _descriptor17, _this);

    _initDefineProp(_this, 'showValueStateMessage', _descriptor18, _this);

    _initDefineProp(_this, 'textAlign', _descriptor19, _this);

    _initDefineProp(_this, 'textDirection', _descriptor20, _this);

    _initDefineProp(_this, 'required', _descriptor21, _this);

    _initDefineProp(_this, 'change', _descriptor22, _this);

    _this.element = element;
    return _this;
  }

  Ui5DatePicker.prototype.defaultFunc = function defaultFunc() {};

  Ui5DatePicker.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    var params = {
      displayFormat: this.displayFormat,
      valueFormat: this.valueFormat,
      dateValue: this.dateValue,
      displayFormatType: this.displayFormatType,
      secondaryCalendarType: this.secondaryCalendarType,
      minDate: this.minDate,
      maxDate: this.maxDate,
      specialDates: this.specialDates,

      value: this.value,
      width: this.width,
      enabled: (0, _attributes.getBooleanFromAttributeValue)(this.enabled),
      valueState: this.valueState,
      name: this.value,
      placeholder: this.placeholder,
      editable: (0, _attributes.getBooleanFromAttributeValue)(this.editable),
      valueStateText: this.valueStateText,
      showValueStateMessage: (0, _attributes.getBooleanFromAttributeValue)(this.showValueStateMessage),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      required: (0, _attributes.getBooleanFromAttributeValue)(this.required),
      change: this.change
    };
    if (this.ui5Id) this._picker = new sap.m.DatePicker(this.ui5Id, params);else this._picker = new sap.m.DatePicker(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._picker, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    var that = this;
    this._picker.attachChange(function (event) {
      that.value = event.mParameters.value;
    });

    this._picker.addEventDelegate(this.element);
    _Ui5InputBase.prototype.attached.call(this);
  };

  Ui5DatePicker.prototype.displayFormatChanged = function displayFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormat(newValue);
    }
  };

  Ui5DatePicker.prototype.valueFormatChanged = function valueFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueFormat(newValue);
    }
  };

  Ui5DatePicker.prototype.dateValueChanged = function dateValueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDateValue(newValue);
    }
  };

  Ui5DatePicker.prototype.displayFormatTypeChanged = function displayFormatTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormatType(newValue);
    }
  };

  Ui5DatePicker.prototype.secondaryCalendarTypeChanged = function secondaryCalendarTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setSecondaryCalendarType(newValue);
    }
  };

  Ui5DatePicker.prototype.minDateChanged = function minDateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setMinDate(newValue);
    }
  };

  Ui5DatePicker.prototype.specialDatesChanged = function specialDatesChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setSpecialDates(newValue);
    }
  };

  return Ui5DatePicker;
}(_inputBase.Ui5InputBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormat', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'valueFormat', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'dateValue', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormatType', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secondaryCalendarType', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return 'Gregorian';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'minDate', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'maxDate', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'specialDates', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class2)) || _class) || _class);