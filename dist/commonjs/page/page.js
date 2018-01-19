'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5Page = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;

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

var Ui5Page = exports.Ui5Page = (_dec = (0, _aureliaTemplating.customElement)('ui5-page'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaFramework.computedFrom)('_page'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5Page, _Ui5Control);

    function Ui5Page(element) {
        _classCallCheck(this, Ui5Page);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._page = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'title', _descriptor2, _this);

        _initDefineProp(_this, 'titleLevel', _descriptor3, _this);

        _initDefineProp(_this, 'showNavButton', _descriptor4, _this);

        _initDefineProp(_this, 'showHeader', _descriptor5, _this);

        _initDefineProp(_this, 'showSubHeader', _descriptor6, _this);

        _initDefineProp(_this, 'navButtonTooltip', _descriptor7, _this);

        _initDefineProp(_this, 'enableScrolling', _descriptor8, _this);

        _initDefineProp(_this, 'backgroundDesign', _descriptor9, _this);

        _initDefineProp(_this, 'showFooter', _descriptor10, _this);

        _initDefineProp(_this, 'contentOnlyBusy', _descriptor11, _this);

        _initDefineProp(_this, 'floatingFooter', _descriptor12, _this);

        _initDefineProp(_this, 'navButtonPress', _descriptor13, _this);

        _initDefineProp(_this, 'busy', _descriptor14, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor15, _this);

        _initDefineProp(_this, 'visible', _descriptor16, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor17, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor18, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor19, _this);

        _initDefineProp(_this, 'validationError', _descriptor20, _this);

        _initDefineProp(_this, 'parseError', _descriptor21, _this);

        _initDefineProp(_this, 'formatError', _descriptor22, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor23, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5Page.prototype.fillProperties = function fillProperties(params) {
        params.title = this.title;
        params.titleLevel = this.titleLevel;
        params.showNavButton = (0, _attributes.getBooleanFromAttributeValue)(this.showNavButton);
        params.showHeader = (0, _attributes.getBooleanFromAttributeValue)(this.showHeader);
        params.showSubHeader = (0, _attributes.getBooleanFromAttributeValue)(this.showSubHeader);
        params.navButtonTooltip = this.navButtonTooltip;
        params.enableScrolling = (0, _attributes.getBooleanFromAttributeValue)(this.enableScrolling);
        params.backgroundDesign = this.backgroundDesign;
        params.showFooter = (0, _attributes.getBooleanFromAttributeValue)(this.showFooter);
        params.contentOnlyBusy = (0, _attributes.getBooleanFromAttributeValue)(this.contentOnlyBusy);
        params.floatingFooter = (0, _attributes.getBooleanFromAttributeValue)(this.floatingFooter);
        params.navButtonPress = this.navButtonPress == null ? this.defaultFunc : this.navButtonPress;
    };

    Ui5Page.prototype.defaultFunc = function defaultFunc() {};

    Ui5Page.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        _Ui5Control.prototype.fillProperties.call(this, params);
        if (this.ui5Id) this._page = new sap.m.Page(this.ui5Id, params);else this._page = new sap.m.Page(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._page.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._page, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._page, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._page, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._page.placeAt) this._page.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._page.sId });
    };

    Ui5Page.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    this._parent.removeChildByRelation(this._page, this._relation);
                }
            } else {
                this._page.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5Page.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    var _index = null;if (afterElement) _index = this._page.indexOfContent(afterElement);if (_index) this._page.insertContent(child, _index + 1);else this._page.addContent(child, 0);return elem.localName;
                }
                if (elem.localName == 'customheader') {
                    this._page.setCustomHeader(child);return elem.localName;
                }
                if (elem.localName == 'footer') {
                    this._page.setFooter(child);return elem.localName;
                }
                if (elem.localName == 'subheader') {
                    this._page.setSubHeader(child);return elem.localName;
                }
                if (elem.localName == 'headercontent') {
                    var _index = null;if (afterElement) _index = this._page.indexOfHeaderContent(afterElement);if (_index) this._page.insertHeaderContent(child, _index + 1);else this._page.addHeaderContent(child, 0);return elem.localName;
                }
                if (elem.localName == 'landmarkinfo') {
                    this._page.setLandmarkInfo(child);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._page.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = null;if (afterElement) _index = this._page.indexOfCustomData(afterElement);if (_index) this._page.insertCustomData(child, _index + 1);else this._page.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._page.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = null;if (afterElement) _index = this._page.indexOfDependent(afterElement);if (_index) this._page.insertDependent(child, _index + 1);else this._page.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5Page.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'content') {
                this._page.removeContent(child);
            }
            if (relation == 'customHeader') {
                this._page.destroyCustomHeader(child);
            }
            if (relation == 'footer') {
                this._page.destroyFooter(child);
            }
            if (relation == 'subHeader') {
                this._page.destroySubHeader(child);
            }
            if (relation == 'headercontent') {
                this._page.removeHeaderContent(child);
            }
            if (relation == 'landmarkInfo') {
                this._page.destroyLandmarkInfo(child);
            }
            if (relation == 'tooltip') {
                this._page.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._page.removeCustomData(child);
            }
            if (relation == 'layoutData') {
                this._page.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._page.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5Page.prototype.titleChanged = function titleChanged(newValue) {
        if (this._page !== null) {
            this._page.setTitle(newValue);
        }
    };

    Ui5Page.prototype.titleLevelChanged = function titleLevelChanged(newValue) {
        if (this._page !== null) {
            this._page.setTitleLevel(newValue);
        }
    };

    Ui5Page.prototype.showNavButtonChanged = function showNavButtonChanged(newValue) {
        if (this._page !== null) {
            this._page.setShowNavButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
        if (this._page !== null) {
            this._page.setShowHeader((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.showSubHeaderChanged = function showSubHeaderChanged(newValue) {
        if (this._page !== null) {
            this._page.setShowSubHeader((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.navButtonTooltipChanged = function navButtonTooltipChanged(newValue) {
        if (this._page !== null) {
            this._page.setNavButtonTooltip(newValue);
        }
    };

    Ui5Page.prototype.enableScrollingChanged = function enableScrollingChanged(newValue) {
        if (this._page !== null) {
            this._page.setEnableScrolling((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
        if (this._page !== null) {
            this._page.setBackgroundDesign(newValue);
        }
    };

    Ui5Page.prototype.showFooterChanged = function showFooterChanged(newValue) {
        if (this._page !== null) {
            this._page.setShowFooter((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.contentOnlyBusyChanged = function contentOnlyBusyChanged(newValue) {
        if (this._page !== null) {
            this._page.setContentOnlyBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.floatingFooterChanged = function floatingFooterChanged(newValue) {
        if (this._page !== null) {
            this._page.setFloatingFooter((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.navButtonPressChanged = function navButtonPressChanged(newValue) {
        if (this._page !== null) {
            this._page.attachNavButtonPress(newValue);
        }
    };

    Ui5Page.prototype.busyChanged = function busyChanged(newValue) {
        if (this._page !== null) {
            this._page.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._page !== null) {
            this._page.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5Page.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._page !== null) {
            this._page.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Page.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._page !== null) {
            this._page.setFieldGroupIds(newValue);
        }
    };

    Ui5Page.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._page !== null) {
            this._page.attachValidateFieldGroup(newValue);
        }
    };

    Ui5Page.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._page !== null) {
            this._page.attachValidationSuccess(newValue);
        }
    };

    Ui5Page.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._page !== null) {
            this._page.attachValidationError(newValue);
        }
    };

    Ui5Page.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._page !== null) {
            this._page.attachParseError(newValue);
        }
    };

    Ui5Page.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._page !== null) {
            this._page.attachFormatError(newValue);
        }
    };

    Ui5Page.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._page !== null) {
            this._page.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5Page, [{
        key: 'UIElement',
        get: function get() {
            return this._page;
        }
    }]);

    return Ui5Page;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'titleLevel', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return 'Auto';
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showNavButton', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'showSubHeader', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'navButtonTooltip', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'enableScrolling', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return 'Standard';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'contentOnlyBusy', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'floatingFooter', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'navButtonPress', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);