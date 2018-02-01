'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5TabContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

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

var Ui5TabContainer = exports.Ui5TabContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-tab-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaFramework.computedFrom)('_tabcontainer'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5TabContainer, _Ui5Control);

    function Ui5TabContainer(element) {
        _classCallCheck(this, Ui5TabContainer);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._tabcontainer = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'showAddNewButton', _descriptor2, _this);

        _initDefineProp(_this, 'itemClose', _descriptor3, _this);

        _initDefineProp(_this, 'itemSelect', _descriptor4, _this);

        _initDefineProp(_this, 'addNewButtonPress', _descriptor5, _this);

        _initDefineProp(_this, 'busy', _descriptor6, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor7, _this);

        _initDefineProp(_this, 'visible', _descriptor8, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor9, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor10, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor11, _this);

        _initDefineProp(_this, 'validationError', _descriptor12, _this);

        _initDefineProp(_this, 'parseError', _descriptor13, _this);

        _initDefineProp(_this, 'formatError', _descriptor14, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor15, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5TabContainer.prototype.fillProperties = function fillProperties(params) {
        params.showAddNewButton = (0, _attributes.getBooleanFromAttributeValue)(this.showAddNewButton);
        params.itemClose = this.itemClose == null ? this.defaultFunc : this.itemClose;
        params.itemSelect = this.itemSelect == null ? this.defaultFunc : this.itemSelect;
        params.addNewButtonPress = this.addNewButtonPress == null ? this.defaultFunc : this.addNewButtonPress;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5TabContainer.prototype.defaultFunc = function defaultFunc() {};

    Ui5TabContainer.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._tabcontainer = new sap.m.TabContainer(this.ui5Id, params);else this._tabcontainer = new sap.m.TabContainer(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._tabcontainer.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._tabcontainer, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._tabcontainer.placeAt) this._tabcontainer.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._tabcontainer.sId });
    };

    Ui5TabContainer.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    this._parent.removeChildByRelation(this._tabcontainer, this._relation);
                }
            } else {
                this._tabcontainer.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5TabContainer.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'items') {
                    var _index = null;if (afterElement) _index = this._tabcontainer.indexOfItem(afterElement);if (_index) this._tabcontainer.insertItem(child, _index + 1);else this._tabcontainer.addItem(child, 0);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._tabcontainer.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = null;if (afterElement) _index = this._tabcontainer.indexOfCustomData(afterElement);if (_index) this._tabcontainer.insertCustomData(child, _index + 1);else this._tabcontainer.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._tabcontainer.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = null;if (afterElement) _index = this._tabcontainer.indexOfDependent(afterElement);if (_index) this._tabcontainer.insertDependent(child, _index + 1);else this._tabcontainer.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5TabContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'items') {
                this._tabcontainer.removeItem(child);
            }
            if (relation == 'tooltip') {
                this._tabcontainer.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._tabcontainer.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._tabcontainer.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._tabcontainer.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5TabContainer.prototype.showAddNewButtonChanged = function showAddNewButtonChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.setShowAddNewButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TabContainer.prototype.itemCloseChanged = function itemCloseChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachItemClose(newValue);
        }
    };

    Ui5TabContainer.prototype.itemSelectChanged = function itemSelectChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachItemSelect(newValue);
        }
    };

    Ui5TabContainer.prototype.addNewButtonPressChanged = function addNewButtonPressChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachAddNewButtonPress(newValue);
        }
    };

    Ui5TabContainer.prototype.busyChanged = function busyChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TabContainer.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5TabContainer.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5TabContainer.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.setFieldGroupIds(newValue);
        }
    };

    Ui5TabContainer.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachValidateFieldGroup(newValue);
        }
    };

    Ui5TabContainer.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachValidationSuccess(newValue);
        }
    };

    Ui5TabContainer.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachValidationError(newValue);
        }
    };

    Ui5TabContainer.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachParseError(newValue);
        }
    };

    Ui5TabContainer.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachFormatError(newValue);
        }
    };

    Ui5TabContainer.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._tabcontainer !== null) {
            this._tabcontainer.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5TabContainer, [{
        key: 'UIElement',
        get: function get() {
            return this._tabcontainer;
        }
    }]);

    return Ui5TabContainer;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showAddNewButton', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemClose', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelect', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'addNewButtonPress', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);