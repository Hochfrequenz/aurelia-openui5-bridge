'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

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

var Ui5Button = exports.Ui5Button = (_dec = (0, _aureliaTemplating.customElement)('ui5-button'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaFramework.computedFrom)('_button'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5Button, _Ui5Control);

    function Ui5Button(element) {
        _classCallCheck(this, Ui5Button);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._button = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'text', _descriptor2, _this);

        _initDefineProp(_this, 'type', _descriptor3, _this);

        _initDefineProp(_this, 'width', _descriptor4, _this);

        _initDefineProp(_this, 'enabled', _descriptor5, _this);

        _initDefineProp(_this, 'icon', _descriptor6, _this);

        _initDefineProp(_this, 'iconFirst', _descriptor7, _this);

        _initDefineProp(_this, 'activeIcon', _descriptor8, _this);

        _initDefineProp(_this, 'iconDensityAware', _descriptor9, _this);

        _initDefineProp(_this, 'textDirection', _descriptor10, _this);

        _initDefineProp(_this, 'tap', _descriptor11, _this);

        _initDefineProp(_this, 'press', _descriptor12, _this);

        _initDefineProp(_this, 'busy', _descriptor13, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor14, _this);

        _initDefineProp(_this, 'visible', _descriptor15, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor16, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor17, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5Button.prototype.fillProperties = function fillProperties(params) {
        params.text = this.text;
        params.type = this.type;
        params.width = this.width;
        params.enabled = (0, _attributes.getBooleanFromAttributeValue)(this.enabled);
        params.icon = this.icon;
        params.iconFirst = (0, _attributes.getBooleanFromAttributeValue)(this.iconFirst);
        params.activeIcon = this.activeIcon;
        params.iconDensityAware = (0, _attributes.getBooleanFromAttributeValue)(this.iconDensityAware);
        params.textDirection = this.textDirection;
    };

    Ui5Button.prototype.defaultFunc = function defaultFunc() {};

    Ui5Button.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        _Ui5Control.prototype.fillProperties.call(this, params);
        if (this.ui5Id) this._button = new sap.m.Button(this.ui5Id, params);else this._button = new sap.m.Button(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._button.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._button, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._button, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._button, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._button.placeAt) this._button.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._button.sId });
    };

    Ui5Button.prototype.detached = function detached() {
        if (this._parent && this._relation) {
            this._parent.removeChildByRelation(this._button, this._relation);
        } else {
            this._button.destroy();
        }
        _Ui5Control.prototype.detached.call(this);
    };

    Ui5Button.prototype.addChild = function addChild(child, elem, afterElement) {
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
        }
    };

    Ui5Button.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

    Ui5Button.prototype.textChanged = function textChanged(newValue) {
        if (this._button !== null) {
            this._button.setText(newValue);
        }
    };

    Ui5Button.prototype.typeChanged = function typeChanged(newValue) {
        if (this._button !== null) {
            this._button.setType(newValue);
        }
    };

    Ui5Button.prototype.widthChanged = function widthChanged(newValue) {
        if (this._button !== null) {
            this._button.setWidth(newValue);
        }
    };

    Ui5Button.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._button !== null) {
            this._button.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Button.prototype.iconChanged = function iconChanged(newValue) {
        if (this._button !== null) {
            this._button.setIcon(newValue);
        }
    };

    Ui5Button.prototype.iconFirstChanged = function iconFirstChanged(newValue) {
        if (this._button !== null) {
            this._button.setIconFirst((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Button.prototype.activeIconChanged = function activeIconChanged(newValue) {
        if (this._button !== null) {
            this._button.setActiveIcon(newValue);
        }
    };

    Ui5Button.prototype.iconDensityAwareChanged = function iconDensityAwareChanged(newValue) {
        if (this._button !== null) {
            this._button.setIconDensityAware((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Button.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
        if (this._button !== null) {
            this._button.setTextDirection(newValue);
        }
    };

    Ui5Button.prototype.tapChanged = function tapChanged(newValue) {
        if (this._button !== null) {
            this._button.attachTap(newValue);
        }
    };

    Ui5Button.prototype.pressChanged = function pressChanged(newValue) {
        if (this._button !== null) {
            this._button.attachPress(newValue);
        }
    };

    Ui5Button.prototype.busyChanged = function busyChanged(newValue) {
        if (this._button !== null) {
            this._button.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Button.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._button !== null) {
            this._button.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5Button.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._button !== null) {
            this._button.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Button.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._button !== null) {
            this._button.setFieldGroupIds(newValue);
        }
    };

    Ui5Button.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._button !== null) {
            this._button.attachValidateFieldGroup(newValue);
        }
    };

    _createClass(Ui5Button, [{
        key: 'UIElement',
        get: function get() {
            return this._button;
        }
    }]);

    return Ui5Button;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 'Default';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'iconFirst', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'activeIcon', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'iconDensityAware', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'tap', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);