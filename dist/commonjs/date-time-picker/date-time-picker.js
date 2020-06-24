'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5DateTimePicker = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _datePicker = require('../date-picker/date-picker');

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

var Ui5DateTimePicker = exports.Ui5DateTimePicker = (_dec = (0, _aureliaTemplating.customElement)('ui5-date-time-picker'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaFramework.computedFrom)('_datetimepicker'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5DatePicker) {
    _inherits(Ui5DateTimePicker, _Ui5DatePicker);

    function Ui5DateTimePicker(element) {
        _classCallCheck(this, Ui5DateTimePicker);

        var _this = _possibleConstructorReturn(this, _Ui5DatePicker.call(this, element));

        _this._datetimepicker = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'minutesStep', _descriptor5, _this);

        _initDefineProp(_this, 'secondsStep', _descriptor6, _this);

        _initDefineProp(_this, 'displayFormatType', _descriptor7, _this);

        _initDefineProp(_this, 'secondaryCalendarType', _descriptor8, _this);

        _initDefineProp(_this, 'minDate', _descriptor9, _this);

        _initDefineProp(_this, 'maxDate', _descriptor10, _this);

        _initDefineProp(_this, 'showFooter', _descriptor11, _this);

        _initDefineProp(_this, 'navigate', _descriptor12, _this);

        _initDefineProp(_this, 'displayFormat', _descriptor13, _this);

        _initDefineProp(_this, 'valueFormat', _descriptor14, _this);

        _initDefineProp(_this, 'dateValue', _descriptor15, _this);

        _initDefineProp(_this, 'initialFocusedDateValue', _descriptor16, _this);

        _initDefineProp(_this, 'value', _descriptor17, _this);

        _initDefineProp(_this, 'width', _descriptor18, _this);

        _initDefineProp(_this, 'enabled', _descriptor19, _this);

        _initDefineProp(_this, 'valueState', _descriptor20, _this);

        _initDefineProp(_this, 'name', _descriptor21, _this);

        _initDefineProp(_this, 'placeholder', _descriptor22, _this);

        _initDefineProp(_this, 'editable', _descriptor23, _this);

        _initDefineProp(_this, 'valueStateText', _descriptor24, _this);

        _initDefineProp(_this, 'showValueStateMessage', _descriptor25, _this);

        _initDefineProp(_this, 'textAlign', _descriptor26, _this);

        _initDefineProp(_this, 'textDirection', _descriptor27, _this);

        _initDefineProp(_this, 'required', _descriptor28, _this);

        _initDefineProp(_this, 'change', _descriptor29, _this);

        _initDefineProp(_this, 'busy', _descriptor30, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor31, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor32, _this);

        _initDefineProp(_this, 'visible', _descriptor33, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor34, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor35, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor36, _this);

        _initDefineProp(_this, 'validationError', _descriptor37, _this);

        _initDefineProp(_this, 'parseError', _descriptor38, _this);

        _initDefineProp(_this, 'formatError', _descriptor39, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor40, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5DateTimePicker.prototype.fillProperties = function fillProperties(params) {
        params.minutesStep = this.minutesStep ? parseInt(this.minutesStep) : 0;
        params.secondsStep = this.secondsStep ? parseInt(this.secondsStep) : 0;

        _Ui5DatePicker.prototype.fillProperties.call(this, params);
    };

    Ui5DateTimePicker.prototype.defaultFunc = function defaultFunc() {};

    Ui5DateTimePicker.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._datetimepicker = new sap.m.DateTimePicker(this.ui5Id, params);else this._datetimepicker = new sap.m.DateTimePicker(params);
        if (this.ui5Class) this._datetimepicker.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._datetimepicker.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._datetimepicker.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._datetimepicker, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._datetimepicker, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._datetimepicker.placeAt) this._datetimepicker.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }
        this._datetimepicker.attachChange(function (event) {
            that.value = event.mParameters.value;;
        });

        this.attributeManager.addAttributes({ "ui5-id": this._datetimepicker.sId });
    };

    Ui5DateTimePicker.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._datetimepicker) this._parent.removeChildByRelation(this._datetimepicker, this._relation);
                }
            } else {
                this._datetimepicker.destroy();
            }
            _Ui5DatePicker.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5DateTimePicker.prototype.addChild = function addChild(child, elem, afterElement) {
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

            try {
                if (elem.localName == 'specialdates') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimepicker.insertSpecialDate(child, _index);else this._datetimepicker.addSpecialDate(child, 0);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._datetimepicker.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimepicker.insertCustomData(child, _index);else this._datetimepicker.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._datetimepicker.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimepicker.insertDependent(child, _index);else this._datetimepicker.addDependent(child, 0);return elem.localName;
                }
                if (elem.localName == 'dragdropconfig') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimepicker.insertDragDropConfig(child, _index);else this._datetimepicker.addDragDropConfig(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5DateTimePicker.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'specialdates') {
                this._datetimepicker.removeSpecialDate(child);
            }
            if (relation == 'tooltip') {
                this._datetimepicker.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._datetimepicker.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._datetimepicker.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._datetimepicker.removeDependent(child);
            }
            if (relation == 'dragdropconfig') {
                this._datetimepicker.removeDragDropConfig(child);
            }
        } catch (err) {}
    };

    Ui5DateTimePicker.prototype.minutesStepChanged = function minutesStepChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.setMinutesStep(newValue);
        }
    };

    Ui5DateTimePicker.prototype.secondsStepChanged = function secondsStepChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.setSecondsStep(newValue);
        }
    };

    Ui5DateTimePicker.prototype.displayFormatTypeChanged = function displayFormatTypeChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setDisplayFormatType(newValue);
        }
    };

    Ui5DateTimePicker.prototype.secondaryCalendarTypeChanged = function secondaryCalendarTypeChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setSecondaryCalendarType(newValue);
        }
    };

    Ui5DateTimePicker.prototype.minDateChanged = function minDateChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setMinDate(newValue);
        }
    };

    Ui5DateTimePicker.prototype.maxDateChanged = function maxDateChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setMaxDate(newValue);
        }
    };

    Ui5DateTimePicker.prototype.showFooterChanged = function showFooterChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setShowFooter((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.navigateChanged = function navigateChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachNavigate(newValue);
        }
    };

    Ui5DateTimePicker.prototype.displayFormatChanged = function displayFormatChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setDisplayFormat(newValue);
        }
    };

    Ui5DateTimePicker.prototype.valueFormatChanged = function valueFormatChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setValueFormat(newValue);
        }
    };

    Ui5DateTimePicker.prototype.dateValueChanged = function dateValueChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setDateValue(newValue);
        }
    };

    Ui5DateTimePicker.prototype.initialFocusedDateValueChanged = function initialFocusedDateValueChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setInitialFocusedDateValue(newValue);
        }
    };

    Ui5DateTimePicker.prototype.valueChanged = function valueChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setValue(newValue);
        }
    };

    Ui5DateTimePicker.prototype.widthChanged = function widthChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setWidth(newValue);
        }
    };

    Ui5DateTimePicker.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.valueStateChanged = function valueStateChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setValueState(newValue);
        }
    };

    Ui5DateTimePicker.prototype.nameChanged = function nameChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setName(newValue);
        }
    };

    Ui5DateTimePicker.prototype.placeholderChanged = function placeholderChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setPlaceholder(newValue);
        }
    };

    Ui5DateTimePicker.prototype.editableChanged = function editableChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setEditable((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setValueStateText(newValue);
        }
    };

    Ui5DateTimePicker.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setShowValueStateMessage((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.textAlignChanged = function textAlignChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setTextAlign(newValue);
        }
    };

    Ui5DateTimePicker.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setTextDirection(newValue);
        }
    };

    Ui5DateTimePicker.prototype.requiredChanged = function requiredChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setRequired((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.changeChanged = function changeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachChange(newValue);
        }
    };

    Ui5DateTimePicker.prototype.busyChanged = function busyChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5DateTimePicker.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setBusyIndicatorSize(newValue);
        }
    };

    Ui5DateTimePicker.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DateTimePicker.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._datetimepicker !== null) {
            this._datetimepicker.setFieldGroupIds(newValue);
        }
    };

    Ui5DateTimePicker.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachValidateFieldGroup(newValue);
        }
    };

    Ui5DateTimePicker.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachValidationSuccess(newValue);
        }
    };

    Ui5DateTimePicker.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachValidationError(newValue);
        }
    };

    Ui5DateTimePicker.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachParseError(newValue);
        }
    };

    Ui5DateTimePicker.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachFormatError(newValue);
        }
    };

    Ui5DateTimePicker.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._datetimepicker !== null) {
            this._datetimepicker.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5DateTimePicker, [{
        key: 'UIElement',
        get: function get() {
            return this._datetimepicker;
        }
    }]);

    return Ui5DateTimePicker;
}(_datePicker.Ui5DatePicker), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'minutesStep', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 1;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secondsStep', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 1;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormatType', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'secondaryCalendarType', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'minDate', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'maxDate', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'navigate', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormat', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'valueFormat', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'dateValue', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'initialFocusedDateValue', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return 'Initial';
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec29], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec30], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec31], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec32], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec33], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec34], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec35], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec36], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec37], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec38], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec39], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);