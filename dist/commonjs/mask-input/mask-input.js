'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5MaskInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

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

var Ui5MaskInput = exports.Ui5MaskInput = (_dec = (0, _aureliaTemplating.customElement)('ui5-mask-input'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaFramework.computedFrom)('_maskinput'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5InputBase) {
    _inherits(Ui5MaskInput, _Ui5InputBase);

    function Ui5MaskInput(element) {
        _classCallCheck(this, Ui5MaskInput);

        var _this = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

        _this._maskinput = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'placeholderSymbol', _descriptor5, _this);

        _initDefineProp(_this, 'mask', _descriptor6, _this);

        _initDefineProp(_this, 'value', _descriptor7, _this);

        _initDefineProp(_this, 'width', _descriptor8, _this);

        _initDefineProp(_this, 'enabled', _descriptor9, _this);

        _initDefineProp(_this, 'valueState', _descriptor10, _this);

        _initDefineProp(_this, 'name', _descriptor11, _this);

        _initDefineProp(_this, 'placeholder', _descriptor12, _this);

        _initDefineProp(_this, 'editable', _descriptor13, _this);

        _initDefineProp(_this, 'valueStateText', _descriptor14, _this);

        _initDefineProp(_this, 'showValueStateMessage', _descriptor15, _this);

        _initDefineProp(_this, 'textAlign', _descriptor16, _this);

        _initDefineProp(_this, 'textDirection', _descriptor17, _this);

        _initDefineProp(_this, 'required', _descriptor18, _this);

        _initDefineProp(_this, 'change', _descriptor19, _this);

        _initDefineProp(_this, 'busy', _descriptor20, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor21, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor22, _this);

        _initDefineProp(_this, 'visible', _descriptor23, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor24, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor25, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor26, _this);

        _initDefineProp(_this, 'validationError', _descriptor27, _this);

        _initDefineProp(_this, 'parseError', _descriptor28, _this);

        _initDefineProp(_this, 'formatError', _descriptor29, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor30, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5MaskInput.prototype.fillProperties = function fillProperties(params) {
        params.placeholderSymbol = this.placeholderSymbol;
        params.mask = this.mask;

        _Ui5InputBase.prototype.fillProperties.call(this, params);
    };

    Ui5MaskInput.prototype.defaultFunc = function defaultFunc() {};

    Ui5MaskInput.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._maskinput = new sap.m.MaskInput(this.ui5Id, params);else this._maskinput = new sap.m.MaskInput(params);
        if (this.ui5Class) this._maskinput.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._maskinput.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._maskinput.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._maskinput, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._maskinput, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._maskinput.placeAt) this._maskinput.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._maskinput.sId });
    };

    Ui5MaskInput.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._maskinput) this._parent.removeChildByRelation(this._maskinput, this._relation);
                }
            } else {
                this._maskinput.destroy();
            }
            _Ui5InputBase.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5MaskInput.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'rules') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._maskinput.insertRule(child, _index);else this._maskinput.addRule(child, 0);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._maskinput.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._maskinput.insertCustomData(child, _index);else this._maskinput.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._maskinput.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._maskinput.insertDependent(child, _index);else this._maskinput.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5MaskInput.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'rules') {
                this._maskinput.removeRule(child);
            }
            if (relation == 'tooltip') {
                this._maskinput.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._maskinput.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._maskinput.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._maskinput.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5MaskInput.prototype.placeholderSymbolChanged = function placeholderSymbolChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setPlaceholderSymbol(newValue);
        }
    };

    Ui5MaskInput.prototype.maskChanged = function maskChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setMask(newValue);
        }
    };

    Ui5MaskInput.prototype.valueChanged = function valueChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setValue(newValue);
        }
    };

    Ui5MaskInput.prototype.widthChanged = function widthChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setWidth(newValue);
        }
    };

    Ui5MaskInput.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MaskInput.prototype.valueStateChanged = function valueStateChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setValueState(newValue);
        }
    };

    Ui5MaskInput.prototype.nameChanged = function nameChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setName(newValue);
        }
    };

    Ui5MaskInput.prototype.placeholderChanged = function placeholderChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setPlaceholder(newValue);
        }
    };

    Ui5MaskInput.prototype.editableChanged = function editableChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setEditable((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MaskInput.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setValueStateText(newValue);
        }
    };

    Ui5MaskInput.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setShowValueStateMessage((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MaskInput.prototype.textAlignChanged = function textAlignChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setTextAlign(newValue);
        }
    };

    Ui5MaskInput.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setTextDirection(newValue);
        }
    };

    Ui5MaskInput.prototype.requiredChanged = function requiredChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setRequired((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MaskInput.prototype.changeChanged = function changeChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachChange(newValue);
        }
    };

    Ui5MaskInput.prototype.busyChanged = function busyChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MaskInput.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5MaskInput.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setBusyIndicatorSize(newValue);
        }
    };

    Ui5MaskInput.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MaskInput.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.setFieldGroupIds(newValue);
        }
    };

    Ui5MaskInput.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachValidateFieldGroup(newValue);
        }
    };

    Ui5MaskInput.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachValidationSuccess(newValue);
        }
    };

    Ui5MaskInput.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachValidationError(newValue);
        }
    };

    Ui5MaskInput.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachParseError(newValue);
        }
    };

    Ui5MaskInput.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachFormatError(newValue);
        }
    };

    Ui5MaskInput.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._maskinput !== null) {
            this._maskinput.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5MaskInput, [{
        key: 'UIElement',
        get: function get() {
            return this._maskinput;
        }
    }]);

    return Ui5MaskInput;
}(_inputBase.Ui5InputBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'placeholderSymbol', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return '_';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mask', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return 'Initial';
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);