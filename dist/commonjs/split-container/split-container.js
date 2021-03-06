'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5SplitContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;

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

var Ui5SplitContainer = exports.Ui5SplitContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-split-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaFramework.computedFrom)('_splitcontainer'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5SplitContainer, _Ui5Control);

    function Ui5SplitContainer(element) {
        _classCallCheck(this, Ui5SplitContainer);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._splitcontainer = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'defaultTransitionNameDetail', _descriptor5, _this);

        _initDefineProp(_this, 'defaultTransitionNameMaster', _descriptor6, _this);

        _initDefineProp(_this, 'mode', _descriptor7, _this);

        _initDefineProp(_this, 'masterButtonText', _descriptor8, _this);

        _initDefineProp(_this, 'masterButtonTooltip', _descriptor9, _this);

        _initDefineProp(_this, 'backgroundColor', _descriptor10, _this);

        _initDefineProp(_this, 'backgroundImage', _descriptor11, _this);

        _initDefineProp(_this, 'backgroundRepeat', _descriptor12, _this);

        _initDefineProp(_this, 'backgroundOpacity', _descriptor13, _this);

        _initDefineProp(_this, 'masterNavigate', _descriptor14, _this);

        _initDefineProp(_this, 'afterMasterNavigate', _descriptor15, _this);

        _initDefineProp(_this, 'masterButton', _descriptor16, _this);

        _initDefineProp(_this, 'beforeMasterOpen', _descriptor17, _this);

        _initDefineProp(_this, 'afterMasterOpen', _descriptor18, _this);

        _initDefineProp(_this, 'beforeMasterClose', _descriptor19, _this);

        _initDefineProp(_this, 'afterMasterClose', _descriptor20, _this);

        _initDefineProp(_this, 'detailNavigate', _descriptor21, _this);

        _initDefineProp(_this, 'afterDetailNavigate', _descriptor22, _this);

        _initDefineProp(_this, 'busy', _descriptor23, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor24, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor25, _this);

        _initDefineProp(_this, 'visible', _descriptor26, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor27, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor28, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor29, _this);

        _initDefineProp(_this, 'validationError', _descriptor30, _this);

        _initDefineProp(_this, 'parseError', _descriptor31, _this);

        _initDefineProp(_this, 'formatError', _descriptor32, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor33, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5SplitContainer.prototype.fillProperties = function fillProperties(params) {
        params.defaultTransitionNameDetail = this.defaultTransitionNameDetail;
        params.defaultTransitionNameMaster = this.defaultTransitionNameMaster;
        params.mode = this.mode;
        params.masterButtonText = this.masterButtonText;
        params.masterButtonTooltip = this.masterButtonTooltip;
        params.backgroundColor = this.backgroundColor;
        params.backgroundImage = this.backgroundImage;
        params.backgroundRepeat = (0, _attributes.getBooleanFromAttributeValue)(this.backgroundRepeat);
        params.backgroundOpacity = this.backgroundOpacity;
        params.masterNavigate = this.masterNavigate == null ? this.defaultFunc : this.masterNavigate;
        params.afterMasterNavigate = this.afterMasterNavigate == null ? this.defaultFunc : this.afterMasterNavigate;
        params.masterButton = this.masterButton == null ? this.defaultFunc : this.masterButton;
        params.beforeMasterOpen = this.beforeMasterOpen == null ? this.defaultFunc : this.beforeMasterOpen;
        params.afterMasterOpen = this.afterMasterOpen == null ? this.defaultFunc : this.afterMasterOpen;
        params.beforeMasterClose = this.beforeMasterClose == null ? this.defaultFunc : this.beforeMasterClose;
        params.afterMasterClose = this.afterMasterClose == null ? this.defaultFunc : this.afterMasterClose;
        params.detailNavigate = this.detailNavigate == null ? this.defaultFunc : this.detailNavigate;
        params.afterDetailNavigate = this.afterDetailNavigate == null ? this.defaultFunc : this.afterDetailNavigate;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5SplitContainer.prototype.defaultFunc = function defaultFunc() {};

    Ui5SplitContainer.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._splitcontainer = new sap.m.SplitContainer(this.ui5Id, params);else this._splitcontainer = new sap.m.SplitContainer(params);
        if (this.ui5Class) this._splitcontainer.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._splitcontainer.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._splitcontainer.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._splitcontainer, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._splitcontainer, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._splitcontainer.placeAt) this._splitcontainer.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._splitcontainer.sId });
    };

    Ui5SplitContainer.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._splitcontainer) this._parent.removeChildByRelation(this._splitcontainer, this._relation);
                }
            } else {
                this._splitcontainer.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5SplitContainer.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'masterpages') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._splitcontainer.insertMasterPage(child, _index);else this._splitcontainer.addMasterPage(child, 0);return elem.localName;
                }
                if (elem.localName == 'detailpages') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._splitcontainer.insertDetailPage(child, _index);else this._splitcontainer.addDetailPage(child, 0);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._splitcontainer.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._splitcontainer.insertCustomData(child, _index);else this._splitcontainer.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._splitcontainer.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._splitcontainer.insertDependent(child, _index);else this._splitcontainer.addDependent(child, 0);return elem.localName;
                }
                if (elem.localName == 'dragdropconfig') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._splitcontainer.insertDragDropConfig(child, _index);else this._splitcontainer.addDragDropConfig(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5SplitContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'masterpages') {
                this._splitcontainer.removeMasterPage(child);
            }
            if (relation == 'detailpages') {
                this._splitcontainer.removeDetailPage(child);
            }
            if (relation == 'tooltip') {
                this._splitcontainer.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._splitcontainer.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._splitcontainer.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._splitcontainer.removeDependent(child);
            }
            if (relation == 'dragdropconfig') {
                this._splitcontainer.removeDragDropConfig(child);
            }
        } catch (err) {}
    };

    Ui5SplitContainer.prototype.defaultTransitionNameDetailChanged = function defaultTransitionNameDetailChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setDefaultTransitionNameDetail(newValue);
        }
    };

    Ui5SplitContainer.prototype.defaultTransitionNameMasterChanged = function defaultTransitionNameMasterChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setDefaultTransitionNameMaster(newValue);
        }
    };

    Ui5SplitContainer.prototype.modeChanged = function modeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setMode(newValue);
        }
    };

    Ui5SplitContainer.prototype.masterButtonTextChanged = function masterButtonTextChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setMasterButtonText(newValue);
        }
    };

    Ui5SplitContainer.prototype.masterButtonTooltipChanged = function masterButtonTooltipChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setMasterButtonTooltip(newValue);
        }
    };

    Ui5SplitContainer.prototype.backgroundColorChanged = function backgroundColorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setBackgroundColor(newValue);
        }
    };

    Ui5SplitContainer.prototype.backgroundImageChanged = function backgroundImageChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setBackgroundImage(newValue);
        }
    };

    Ui5SplitContainer.prototype.backgroundRepeatChanged = function backgroundRepeatChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setBackgroundRepeat((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SplitContainer.prototype.backgroundOpacityChanged = function backgroundOpacityChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.setBackgroundOpacity(newValue);
        }
    };

    Ui5SplitContainer.prototype.masterNavigateChanged = function masterNavigateChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachMasterNavigate(newValue);
        }
    };

    Ui5SplitContainer.prototype.afterMasterNavigateChanged = function afterMasterNavigateChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachAfterMasterNavigate(newValue);
        }
    };

    Ui5SplitContainer.prototype.masterButtonChanged = function masterButtonChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachMasterButton(newValue);
        }
    };

    Ui5SplitContainer.prototype.beforeMasterOpenChanged = function beforeMasterOpenChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachBeforeMasterOpen(newValue);
        }
    };

    Ui5SplitContainer.prototype.afterMasterOpenChanged = function afterMasterOpenChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachAfterMasterOpen(newValue);
        }
    };

    Ui5SplitContainer.prototype.beforeMasterCloseChanged = function beforeMasterCloseChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachBeforeMasterClose(newValue);
        }
    };

    Ui5SplitContainer.prototype.afterMasterCloseChanged = function afterMasterCloseChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachAfterMasterClose(newValue);
        }
    };

    Ui5SplitContainer.prototype.detailNavigateChanged = function detailNavigateChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachDetailNavigate(newValue);
        }
    };

    Ui5SplitContainer.prototype.afterDetailNavigateChanged = function afterDetailNavigateChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachAfterDetailNavigate(newValue);
        }
    };

    Ui5SplitContainer.prototype.busyChanged = function busyChanged(newValue) {
        if (this._splitcontainer !== null) {
            this._splitcontainer.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SplitContainer.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._splitcontainer !== null) {
            this._splitcontainer.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5SplitContainer.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._splitcontainer !== null) {
            this._splitcontainer.setBusyIndicatorSize(newValue);
        }
    };

    Ui5SplitContainer.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._splitcontainer !== null) {
            this._splitcontainer.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SplitContainer.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._splitcontainer !== null) {
            this._splitcontainer.setFieldGroupIds(newValue);
        }
    };

    Ui5SplitContainer.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachValidateFieldGroup(newValue);
        }
    };

    Ui5SplitContainer.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachValidationSuccess(newValue);
        }
    };

    Ui5SplitContainer.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachValidationError(newValue);
        }
    };

    Ui5SplitContainer.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachParseError(newValue);
        }
    };

    Ui5SplitContainer.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachFormatError(newValue);
        }
    };

    Ui5SplitContainer.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._splitcontainer !== null) {
            this._splitcontainer.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5SplitContainer, [{
        key: 'UIElement',
        get: function get() {
            return this._splitcontainer;
        }
    }]);

    return Ui5SplitContainer;
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'defaultTransitionNameDetail', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 'slide';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'defaultTransitionNameMaster', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 'slide';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return 'ShowHideMode';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'masterButtonText', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'masterButtonTooltip', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundColor', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundImage', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundRepeat', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundOpacity', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return 1;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'masterNavigate', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'afterMasterNavigate', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'masterButton', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'beforeMasterOpen', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'afterMasterOpen', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'beforeMasterClose', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'afterMasterClose', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'detailNavigate', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'afterDetailNavigate', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec29], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec30], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec31], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);