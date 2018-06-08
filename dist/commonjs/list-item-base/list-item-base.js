'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5ListItemBase = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

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

var Ui5ListItemBase = exports.Ui5ListItemBase = (_dec = (0, _aureliaTemplating.customElement)('ui5-list-item-base'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaFramework.computedFrom)('_listitembase'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5ListItemBase, _Ui5Control);

    function Ui5ListItemBase(element) {
        _classCallCheck(this, Ui5ListItemBase);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._listitembase = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'prevId', _descriptor2, _this);

        _initDefineProp(_this, 'type', _descriptor3, _this);

        _initDefineProp(_this, 'visible', _descriptor4, _this);

        _initDefineProp(_this, 'unread', _descriptor5, _this);

        _initDefineProp(_this, 'selected', _descriptor6, _this);

        _initDefineProp(_this, 'counter', _descriptor7, _this);

        _initDefineProp(_this, 'highlight', _descriptor8, _this);

        _initDefineProp(_this, 'press', _descriptor9, _this);

        _initDefineProp(_this, 'detailPress', _descriptor10, _this);

        _initDefineProp(_this, 'busy', _descriptor11, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor12, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor13, _this);

        _initDefineProp(_this, 'visible', _descriptor14, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor15, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor16, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor17, _this);

        _initDefineProp(_this, 'validationError', _descriptor18, _this);

        _initDefineProp(_this, 'parseError', _descriptor19, _this);

        _initDefineProp(_this, 'formatError', _descriptor20, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor21, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5ListItemBase.prototype.fillProperties = function fillProperties(params) {
        params.type = this.type;
        params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
        params.unread = (0, _attributes.getBooleanFromAttributeValue)(this.unread);
        params.selected = (0, _attributes.getBooleanFromAttributeValue)(this.selected);
        params.counter = this.counter ? parseInt(this.counter) : 0;
        params.highlight = this.highlight;
        params.press = this.press == null ? this.defaultFunc : this.press;
        params.detailPress = this.detailPress == null ? this.defaultFunc : this.detailPress;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5ListItemBase.prototype.defaultFunc = function defaultFunc() {};

    Ui5ListItemBase.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._listitembase = new sap.m.ListItemBase(this.ui5Id, params);else this._listitembase = new sap.m.ListItemBase(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._listitembase.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._listitembase, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._listitembase, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._listitembase.placeAt) this._listitembase.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._listitembase.sId });
    };

    Ui5ListItemBase.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._listitembase) this._parent.removeChildByRelation(this._listitembase, this._relation);
                }
            } else {
                this._listitembase.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5ListItemBase.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    this._listitembase.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._listitembase.insertCustomData(child, _index);else this._listitembase.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._listitembase.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._listitembase.insertDependent(child, _index);else this._listitembase.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5ListItemBase.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._listitembase.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._listitembase.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._listitembase.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._listitembase.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5ListItemBase.prototype.typeChanged = function typeChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setType(newValue);
        }
    };

    Ui5ListItemBase.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ListItemBase.prototype.unreadChanged = function unreadChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setUnread((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ListItemBase.prototype.selectedChanged = function selectedChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setSelected((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ListItemBase.prototype.counterChanged = function counterChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setCounter(newValue);
        }
    };

    Ui5ListItemBase.prototype.highlightChanged = function highlightChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setHighlight(newValue);
        }
    };

    Ui5ListItemBase.prototype.pressChanged = function pressChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachPress(newValue);
        }
    };

    Ui5ListItemBase.prototype.detailPressChanged = function detailPressChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachDetailPress(newValue);
        }
    };

    Ui5ListItemBase.prototype.busyChanged = function busyChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ListItemBase.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5ListItemBase.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setBusyIndicatorSize(newValue);
        }
    };

    Ui5ListItemBase.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5ListItemBase.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.setFieldGroupIds(newValue);
        }
    };

    Ui5ListItemBase.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachValidateFieldGroup(newValue);
        }
    };

    Ui5ListItemBase.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachValidationSuccess(newValue);
        }
    };

    Ui5ListItemBase.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachValidationError(newValue);
        }
    };

    Ui5ListItemBase.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachParseError(newValue);
        }
    };

    Ui5ListItemBase.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachFormatError(newValue);
        }
    };

    Ui5ListItemBase.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._listitembase !== null) {
            this._listitembase.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5ListItemBase, [{
        key: 'UIElement',
        get: function get() {
            return this._listitembase;
        }
    }]);

    return Ui5ListItemBase;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inactive';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'unread', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'highlight', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'detailPress', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec22], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);