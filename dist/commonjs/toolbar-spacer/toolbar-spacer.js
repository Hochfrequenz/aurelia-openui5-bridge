'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5ToolbarSpacer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _control = require('../control/control');

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

var Ui5ToolbarSpacer = exports.Ui5ToolbarSpacer = (_dec = (0, _aureliaTemplating.customElement)('ui5-toolbar-spacer'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaFramework.computedFrom)('_toolbarspacer'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5ToolbarSpacer, _Ui5Control);

    function Ui5ToolbarSpacer(element) {
        _classCallCheck(this, Ui5ToolbarSpacer);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._toolbarspacer = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'width', _descriptor5, _this);

        _initDefineProp(_this, 'blocked', _descriptor6, _this);

        _initDefineProp(_this, 'busy', _descriptor7, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor8, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor9, _this);

        _initDefineProp(_this, 'visible', _descriptor10, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor11, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor12, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor13, _this);

        _initDefineProp(_this, 'validationError', _descriptor14, _this);

        _initDefineProp(_this, 'parseError', _descriptor15, _this);

        _initDefineProp(_this, 'formatError', _descriptor16, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor17, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5ToolbarSpacer.prototype.fillProperties = function fillProperties(params) {
        params.width = this.width;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5ToolbarSpacer.prototype.defaultFunc = function defaultFunc() {};

    Ui5ToolbarSpacer.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._toolbarspacer = new sap.m.ToolbarSpacer(this.ui5Id, params);else this._toolbarspacer = new sap.m.ToolbarSpacer(params);
        if (this.ui5Class) this._toolbarspacer.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._toolbarspacer.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._toolbarspacer.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._toolbarspacer, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._toolbarspacer, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._toolbarspacer.placeAt) this._toolbarspacer.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._toolbarspacer.sId });
    };

    Ui5ToolbarSpacer.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._toolbarspacer) this._parent.removeChildByRelation(this._toolbarspacer, this._relation);
                }
            } else {
                this._toolbarspacer.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5ToolbarSpacer.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    this._toolbarspacer.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbarspacer.insertCustomData(child, _index);else this._toolbarspacer.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._toolbarspacer.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbarspacer.insertDependent(child, _index);else this._toolbarspacer.addDependent(child, 0);return elem.localName;
                }
                if (elem.localName == 'dragdropconfig') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbarspacer.insertDragDropConfig(child, _index);else this._toolbarspacer.addDragDropConfig(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5ToolbarSpacer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._toolbarspacer.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._toolbarspacer.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._toolbarspacer.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._toolbarspacer.removeDependent(child);
            }
            if (relation == 'dragdropconfig') {
                this._toolbarspacer.removeDragDropConfig(child);
            }
        } catch (err) {}
    };

    Ui5ToolbarSpacer.prototype.widthChanged = function widthChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.setWidth(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.blockedChanged = function blockedChanged(newValue) {
        if (this._toolbarspacer !== null) {
            this._toolbarspacer.setBlocked((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ToolbarSpacer.prototype.busyChanged = function busyChanged(newValue) {
        if (this._toolbarspacer !== null) {
            this._toolbarspacer.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ToolbarSpacer.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._toolbarspacer !== null) {
            this._toolbarspacer.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._toolbarspacer !== null) {
            this._toolbarspacer.setBusyIndicatorSize(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._toolbarspacer !== null) {
            this._toolbarspacer.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ToolbarSpacer.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._toolbarspacer !== null) {
            this._toolbarspacer.setFieldGroupIds(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.attachValidateFieldGroup(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.attachValidationSuccess(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.attachValidationError(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.attachParseError(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.attachFormatError(newValue);
        }
    };

    Ui5ToolbarSpacer.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbarspacer !== null) {
            this._toolbarspacer.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5ToolbarSpacer, [{
        key: 'UIElement',
        get: function get() {
            return this._toolbarspacer;
        }
    }]);

    return Ui5ToolbarSpacer;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);