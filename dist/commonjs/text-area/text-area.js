'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5TextArea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38;

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

var Ui5TextArea = exports.Ui5TextArea = (_dec = (0, _aureliaTemplating.customElement)('ui5-text-area'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaFramework.computedFrom)('_textarea'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5InputBase) {
    _inherits(Ui5TextArea, _Ui5InputBase);

    function Ui5TextArea(element) {
        _classCallCheck(this, Ui5TextArea);

        var _this = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

        _this._textarea = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'rows', _descriptor5, _this);

        _initDefineProp(_this, 'cols', _descriptor6, _this);

        _initDefineProp(_this, 'height', _descriptor7, _this);

        _initDefineProp(_this, 'maxLength', _descriptor8, _this);

        _initDefineProp(_this, 'showExceededText', _descriptor9, _this);

        _initDefineProp(_this, 'wrapping', _descriptor10, _this);

        _initDefineProp(_this, 'valueLiveUpdate', _descriptor11, _this);

        _initDefineProp(_this, 'growing', _descriptor12, _this);

        _initDefineProp(_this, 'growingMaxLines', _descriptor13, _this);

        _initDefineProp(_this, 'liveChange', _descriptor14, _this);

        _initDefineProp(_this, 'value', _descriptor15, _this);

        _initDefineProp(_this, 'width', _descriptor16, _this);

        _initDefineProp(_this, 'enabled', _descriptor17, _this);

        _initDefineProp(_this, 'valueState', _descriptor18, _this);

        _initDefineProp(_this, 'name', _descriptor19, _this);

        _initDefineProp(_this, 'placeholder', _descriptor20, _this);

        _initDefineProp(_this, 'editable', _descriptor21, _this);

        _initDefineProp(_this, 'valueStateText', _descriptor22, _this);

        _initDefineProp(_this, 'showValueStateMessage', _descriptor23, _this);

        _initDefineProp(_this, 'textAlign', _descriptor24, _this);

        _initDefineProp(_this, 'textDirection', _descriptor25, _this);

        _initDefineProp(_this, 'required', _descriptor26, _this);

        _initDefineProp(_this, 'change', _descriptor27, _this);

        _initDefineProp(_this, 'busy', _descriptor28, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor29, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor30, _this);

        _initDefineProp(_this, 'visible', _descriptor31, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor32, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor33, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor34, _this);

        _initDefineProp(_this, 'validationError', _descriptor35, _this);

        _initDefineProp(_this, 'parseError', _descriptor36, _this);

        _initDefineProp(_this, 'formatError', _descriptor37, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor38, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5TextArea.prototype.fillProperties = function fillProperties(params) {
        params.rows = this.rows ? parseInt(this.rows) : 0;
        params.cols = this.cols ? parseInt(this.cols) : 0;
        params.height = this.height;
        params.maxLength = this.maxLength ? parseInt(this.maxLength) : 0;
        params.showExceededText = (0, _attributes.getBooleanFromAttributeValue)(this.showExceededText);
        params.wrapping = this.wrapping;
        params.valueLiveUpdate = (0, _attributes.getBooleanFromAttributeValue)(this.valueLiveUpdate);
        params.growing = (0, _attributes.getBooleanFromAttributeValue)(this.growing);
        params.growingMaxLines = this.growingMaxLines ? parseInt(this.growingMaxLines) : 0;
        params.liveChange = this.liveChange == null ? this.defaultFunc : this.liveChange;

        _Ui5InputBase.prototype.fillProperties.call(this, params);
    };

    Ui5TextArea.prototype.defaultFunc = function defaultFunc() {};

    Ui5TextArea.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._textarea = new sap.m.TextArea(this.ui5Id, params);else this._textarea = new sap.m.TextArea(params);
        if (this.ui5Class) this._textarea.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._textarea.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._textarea.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._textarea, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._textarea, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._textarea.placeAt) this._textarea.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }
        this._textarea.attachChange(function (event) {
            that.value = event.mParameters.value;;
        });
        this._textarea.attachLiveChange(function (event) {
            if ((0, _attributes.getBooleanFromAttributeValue)(that.valueLiveUpdate)) {
                that.value = event.mParameters.value;
            };
        });

        this.attributeManager.addAttributes({ "ui5-id": this._textarea.sId });
    };

    Ui5TextArea.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._textarea) this._parent.removeChildByRelation(this._textarea, this._relation);
                }
            } else {
                this._textarea.destroy();
            }
            _Ui5InputBase.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5TextArea.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'tooltip') {
                    this._textarea.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._textarea.insertCustomData(child, _index);else this._textarea.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._textarea.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._textarea.insertDependent(child, _index);else this._textarea.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5TextArea.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._textarea.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._textarea.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._textarea.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._textarea.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5TextArea.prototype.rowsChanged = function rowsChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setRows(newValue);
        }
    };

    Ui5TextArea.prototype.colsChanged = function colsChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setCols(newValue);
        }
    };

    Ui5TextArea.prototype.heightChanged = function heightChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setHeight(newValue);
        }
    };

    Ui5TextArea.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setMaxLength(newValue);
        }
    };

    Ui5TextArea.prototype.showExceededTextChanged = function showExceededTextChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setShowExceededText((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.wrappingChanged = function wrappingChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setWrapping(newValue);
        }
    };

    Ui5TextArea.prototype.valueLiveUpdateChanged = function valueLiveUpdateChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setValueLiveUpdate((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.growingChanged = function growingChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setGrowing((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.growingMaxLinesChanged = function growingMaxLinesChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setGrowingMaxLines(newValue);
        }
    };

    Ui5TextArea.prototype.liveChangeChanged = function liveChangeChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachLiveChange(newValue);
        }
    };

    Ui5TextArea.prototype.valueChanged = function valueChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setValue(newValue);
        }
    };

    Ui5TextArea.prototype.widthChanged = function widthChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setWidth(newValue);
        }
    };

    Ui5TextArea.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.valueStateChanged = function valueStateChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setValueState(newValue);
        }
    };

    Ui5TextArea.prototype.nameChanged = function nameChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setName(newValue);
        }
    };

    Ui5TextArea.prototype.placeholderChanged = function placeholderChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setPlaceholder(newValue);
        }
    };

    Ui5TextArea.prototype.editableChanged = function editableChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setEditable((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setValueStateText(newValue);
        }
    };

    Ui5TextArea.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setShowValueStateMessage((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.textAlignChanged = function textAlignChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setTextAlign(newValue);
        }
    };

    Ui5TextArea.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setTextDirection(newValue);
        }
    };

    Ui5TextArea.prototype.requiredChanged = function requiredChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setRequired((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.changeChanged = function changeChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachChange(newValue);
        }
    };

    Ui5TextArea.prototype.busyChanged = function busyChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5TextArea.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setBusyIndicatorSize(newValue);
        }
    };

    Ui5TextArea.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TextArea.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.setFieldGroupIds(newValue);
        }
    };

    Ui5TextArea.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachValidateFieldGroup(newValue);
        }
    };

    Ui5TextArea.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachValidationSuccess(newValue);
        }
    };

    Ui5TextArea.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachValidationError(newValue);
        }
    };

    Ui5TextArea.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachParseError(newValue);
        }
    };

    Ui5TextArea.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachFormatError(newValue);
        }
    };

    Ui5TextArea.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._textarea !== null) {
            this._textarea.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5TextArea, [{
        key: 'UIElement',
        get: function get() {
            return this._textarea;
        }
    }]);

    return Ui5TextArea;
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'rows', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 2;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'cols', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 20;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'maxLength', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'showExceededText', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'valueLiveUpdate', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'growingMaxLines', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'liveChange', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return 'Initial';
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec29], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec30], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec31], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec32], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec33], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec34], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec35], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec36], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec37], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);