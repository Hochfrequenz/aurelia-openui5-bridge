'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5Control = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _element = require('../element/element');

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

var Ui5Control = exports.Ui5Control = (_dec = (0, _aureliaTemplating.customElement)('ui5-control'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaFramework.computedFrom)('_control'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
    _inherits(Ui5Control, _Ui5Element);

    function Ui5Control(element) {
        _classCallCheck(this, Ui5Control);

        var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

        _this._control = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'busy', _descriptor2, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor3, _this);

        _initDefineProp(_this, 'visible', _descriptor4, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor5, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor6, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor7, _this);

        _initDefineProp(_this, 'validationError', _descriptor8, _this);

        _initDefineProp(_this, 'parseError', _descriptor9, _this);

        _initDefineProp(_this, 'formatError', _descriptor10, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor11, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5Control.prototype.fillProperties = function fillProperties(params) {
        params.busy = (0, _attributes.getBooleanFromAttributeValue)(this.busy);
        params.busyIndicatorDelay = this.busyIndicatorDelay ? parseInt(this.busyIndicatorDelay) : 0;
        params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
        params.fieldGroupIds = this.fieldGroupIds;
        params.validateFieldGroup = this.validateFieldGroup == null ? this.defaultFunc : this.validateFieldGroup;

        _Ui5Element.prototype.fillProperties.call(this, params);
    };

    Ui5Control.prototype.defaultFunc = function defaultFunc() {};

    Ui5Control.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._control = new sap.ui.core.Control(this.ui5Id, params);else this._control = new sap.ui.core.Control(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._control.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._control, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._control, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._control, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._control.placeAt) this._control.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._control.sId });
    };

    Ui5Control.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    this._parent.removeChildByRelation(this._control, this._relation);
                }
            } else {
                this._control.destroy();
            }
            _Ui5Element.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5Control.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    this._control.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = null;if (afterElement) _index = this._control.indexOfCustomData(afterElement);if (_index) this._control.insertCustomData(child, _index + 1);else this._control.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._control.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = null;if (afterElement) _index = this._control.indexOfDependent(afterElement);if (_index) this._control.insertDependent(child, _index + 1);else this._control.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5Control.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._control.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._control.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._control.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._control.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5Control.prototype.busyChanged = function busyChanged(newValue) {
        if (this._control !== null) {
            this._control.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Control.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._control !== null) {
            this._control.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5Control.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._control !== null) {
            this._control.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Control.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._control !== null) {
            this._control.setFieldGroupIds(newValue);
        }
    };

    Ui5Control.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._control !== null) {
            this._control.attachValidateFieldGroup(newValue);
        }
    };

    Ui5Control.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._control !== null) {
            this._control.attachValidationSuccess(newValue);
        }
    };

    Ui5Control.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._control !== null) {
            this._control.attachValidationError(newValue);
        }
    };

    Ui5Control.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._control !== null) {
            this._control.attachParseError(newValue);
        }
    };

    Ui5Control.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._control !== null) {
            this._control.attachFormatError(newValue);
        }
    };

    Ui5Control.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._control !== null) {
            this._control.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5Control, [{
        key: 'UIElement',
        get: function get() {
            return this._control;
        }
    }]);

    return Ui5Control;
}(_element.Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);