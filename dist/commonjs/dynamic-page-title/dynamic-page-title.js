'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5DynamicPageTitle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

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

var Ui5DynamicPageTitle = exports.Ui5DynamicPageTitle = (_dec = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-title'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaFramework.computedFrom)('_dynamicpagetitle'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5DynamicPageTitle, _Ui5Control);

    function Ui5DynamicPageTitle(element) {
        _classCallCheck(this, Ui5DynamicPageTitle);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._dynamicpagetitle = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'primaryArea', _descriptor2, _this);

        _initDefineProp(_this, 'busy', _descriptor3, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor4, _this);

        _initDefineProp(_this, 'visible', _descriptor5, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor6, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor7, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5DynamicPageTitle.prototype.fillProperties = function fillProperties(params) {
        params.primaryArea = this.primaryArea;
    };

    Ui5DynamicPageTitle.prototype.defaultFunc = function defaultFunc() {};

    Ui5DynamicPageTitle.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        _Ui5Control.prototype.fillProperties.call(this, params);
        if (this.ui5Id) this._dynamicpagetitle = new sap.f.DynamicPageTitle(this.ui5Id, params);else this._dynamicpagetitle = new sap.f.DynamicPageTitle(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._dynamicpagetitle.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._dynamicpagetitle, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._dynamicpagetitle.placeAt) this._dynamicpagetitle.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._dynamicpagetitle.sId });
    };

    Ui5DynamicPageTitle.prototype.detached = function detached() {
        if (this._parent && this._relation) {
            this._parent.removeChildByRelation(this._dynamicpagetitle, this._relation);
        } else {
            this._dynamicpagetitle.destroy();
        }
        _Ui5Control.prototype.detached.call(this);
    };

    Ui5DynamicPageTitle.prototype.addChild = function addChild(child, elem, afterElement) {
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

            if (elem.localName == 'heading') {
                this._dynamicpagetitle.setHeading(child);return elem.localName;
            }
            if (elem.localName == 'actions') {
                var _index = null;if (afterElement) _index = this._dynamicpagetitle.indexOfAction(afterElement);if (_index) this._dynamicpagetitle.insertAction(child, _index + 1);else this._dynamicpagetitle.addAction(child, 0);return elem.localName;
            }
            if (elem.localName == 'content') {
                var _index = null;if (afterElement) _index = this._dynamicpagetitle.indexOfContent(afterElement);if (_index) this._dynamicpagetitle.insertContent(child, _index + 1);else this._dynamicpagetitle.addContent(child, 0);return elem.localName;
            }
            if (elem.localName == 'snappedContent') {
                var _index = null;if (afterElement) _index = this._dynamicpagetitle.indexOfSnappedContent(afterElement);if (_index) this._dynamicpagetitle.insertSnappedContent(child, _index + 1);else this._dynamicpagetitle.addSnappedContent(child, 0);return elem.localName;
            }
            if (elem.localName == 'expandedContent') {
                var _index = null;if (afterElement) _index = this._dynamicpagetitle.indexOfExpandedContent(afterElement);if (_index) this._dynamicpagetitle.insertExpandedContent(child, _index + 1);else this._dynamicpagetitle.addExpandedContent(child, 0);return elem.localName;
            }
        }
    };

    Ui5DynamicPageTitle.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        if (relation == 'actions') {
            this._dynamicpagetitle.removeAction(child);
        }
        if (relation == 'content') {
            this._dynamicpagetitle.removeContent(child);
        }
        if (relation == 'snappedContent') {
            this._dynamicpagetitle.removeSnappedContent(child);
        }
        if (relation == 'expandedContent') {
            this._dynamicpagetitle.removeExpandedContent(child);
        }
    };

    Ui5DynamicPageTitle.prototype.primaryAreaChanged = function primaryAreaChanged(newValue) {
        if (this._dynamicpagetitle !== null) {
            this._dynamicpagetitle.setPrimaryArea(newValue);
        }
    };

    Ui5DynamicPageTitle.prototype.busyChanged = function busyChanged(newValue) {
        if (this._dynamicpagetitle !== null) {
            this._dynamicpagetitle.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DynamicPageTitle.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._dynamicpagetitle !== null) {
            this._dynamicpagetitle.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5DynamicPageTitle.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._dynamicpagetitle !== null) {
            this._dynamicpagetitle.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5DynamicPageTitle.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._dynamicpagetitle !== null) {
            this._dynamicpagetitle.setFieldGroupIds(newValue);
        }
    };

    Ui5DynamicPageTitle.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._dynamicpagetitle !== null) {
            this._dynamicpagetitle.attachValidateFieldGroup(newValue);
        }
    };

    _createClass(Ui5DynamicPageTitle, [{
        key: 'UIElement',
        get: function get() {
            return this._dynamicpagetitle;
        }
    }]);

    return Ui5DynamicPageTitle;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'primaryArea', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 'Begin';
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);