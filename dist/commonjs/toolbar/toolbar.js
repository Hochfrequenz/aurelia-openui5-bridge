'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5Toolbar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;

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

var Ui5Toolbar = exports.Ui5Toolbar = (_dec = (0, _aureliaTemplating.customElement)('ui5-toolbar'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaFramework.computedFrom)('_toolbar'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5Toolbar, _Ui5Control);

    function Ui5Toolbar(element) {
        _classCallCheck(this, Ui5Toolbar);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._toolbar = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'width', _descriptor5, _this);

        _initDefineProp(_this, 'active', _descriptor6, _this);

        _initDefineProp(_this, 'enabled', _descriptor7, _this);

        _initDefineProp(_this, 'height', _descriptor8, _this);

        _initDefineProp(_this, 'design', _descriptor9, _this);

        _initDefineProp(_this, 'style', _descriptor10, _this);

        _initDefineProp(_this, 'press', _descriptor11, _this);

        _initDefineProp(_this, 'busy', _descriptor12, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor13, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor14, _this);

        _initDefineProp(_this, 'visible', _descriptor15, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor16, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor17, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor18, _this);

        _initDefineProp(_this, 'validationError', _descriptor19, _this);

        _initDefineProp(_this, 'parseError', _descriptor20, _this);

        _initDefineProp(_this, 'formatError', _descriptor21, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor22, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5Toolbar.prototype.fillProperties = function fillProperties(params) {
        params.width = this.width;
        params.active = (0, _attributes.getBooleanFromAttributeValue)(this.active);
        params.enabled = (0, _attributes.getBooleanFromAttributeValue)(this.enabled);
        params.height = this.height;
        params.design = this.design;
        params.style = this.style;
        params.press = this.press == null ? this.defaultFunc : this.press;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5Toolbar.prototype.defaultFunc = function defaultFunc() {};

    Ui5Toolbar.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._toolbar = new sap.m.Toolbar(this.ui5Id, params);else this._toolbar = new sap.m.Toolbar(params);
        if (this.ui5Class) this._toolbar.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._toolbar.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._toolbar.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._toolbar, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._toolbar, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._toolbar.placeAt) this._toolbar.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._toolbar.sId });
    };

    Ui5Toolbar.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._toolbar) this._parent.removeChildByRelation(this._toolbar, this._relation);
                }
            } else {
                this._toolbar.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5Toolbar.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'content') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbar.insertContent(child, _index);else this._toolbar.addContent(child, 0);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._toolbar.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbar.insertCustomData(child, _index);else this._toolbar.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._toolbar.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbar.insertDependent(child, _index);else this._toolbar.addDependent(child, 0);return elem.localName;
                }
                if (elem.localName == 'dragdropconfig') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._toolbar.insertDragDropConfig(child, _index);else this._toolbar.addDragDropConfig(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5Toolbar.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'content') {
                this._toolbar.removeContent(child);
            }
            if (relation == 'tooltip') {
                this._toolbar.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._toolbar.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._toolbar.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._toolbar.removeDependent(child);
            }
            if (relation == 'dragdropconfig') {
                this._toolbar.removeDragDropConfig(child);
            }
        } catch (err) {}
    };

    Ui5Toolbar.prototype.widthChanged = function widthChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.setWidth(newValue);
        }
    };

    Ui5Toolbar.prototype.activeChanged = function activeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.setActive((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Toolbar.prototype.enabledChanged = function enabledChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Toolbar.prototype.heightChanged = function heightChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.setHeight(newValue);
        }
    };

    Ui5Toolbar.prototype.designChanged = function designChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.setDesign(newValue);
        }
    };

    Ui5Toolbar.prototype.styleChanged = function styleChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.setStyle(newValue);
        }
    };

    Ui5Toolbar.prototype.pressChanged = function pressChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachPress(newValue);
        }
    };

    Ui5Toolbar.prototype.busyChanged = function busyChanged(newValue) {
        if (this._toolbar !== null) {
            this._toolbar.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Toolbar.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._toolbar !== null) {
            this._toolbar.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5Toolbar.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._toolbar !== null) {
            this._toolbar.setBusyIndicatorSize(newValue);
        }
    };

    Ui5Toolbar.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._toolbar !== null) {
            this._toolbar.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Toolbar.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._toolbar !== null) {
            this._toolbar.setFieldGroupIds(newValue);
        }
    };

    Ui5Toolbar.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachValidateFieldGroup(newValue);
        }
    };

    Ui5Toolbar.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachValidationSuccess(newValue);
        }
    };

    Ui5Toolbar.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachValidationError(newValue);
        }
    };

    Ui5Toolbar.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachParseError(newValue);
        }
    };

    Ui5Toolbar.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachFormatError(newValue);
        }
    };

    Ui5Toolbar.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._toolbar !== null) {
            this._toolbar.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5Toolbar, [{
        key: 'UIElement',
        get: function get() {
            return this._toolbar;
        }
    }]);

    return Ui5Toolbar;
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
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'active', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'design', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return 'Auto';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'style', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return 'Standard';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);