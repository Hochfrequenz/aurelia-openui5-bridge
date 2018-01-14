'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5FormContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

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

var Ui5FormContainer = exports.Ui5FormContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-form-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaFramework.computedFrom)('_formcontainer'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
    _inherits(Ui5FormContainer, _Ui5Element);

    function Ui5FormContainer(element) {
        _classCallCheck(this, Ui5FormContainer);

        var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

        _this._formcontainer = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'expanded', _descriptor2, _this);

        _initDefineProp(_this, 'expandable', _descriptor3, _this);

        _initDefineProp(_this, 'visible', _descriptor4, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5FormContainer.prototype.fillProperties = function fillProperties(params) {
        params.expanded = (0, _attributes.getBooleanFromAttributeValue)(this.expanded);
        params.expandable = (0, _attributes.getBooleanFromAttributeValue)(this.expandable);
        params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
    };

    Ui5FormContainer.prototype.defaultFunc = function defaultFunc() {};

    Ui5FormContainer.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        _Ui5Element.prototype.fillProperties.call(this, params);
        if (this.ui5Id) this._formcontainer = new sap.ui.layout.form.FormContainer(this.ui5Id, params);else this._formcontainer = new sap.ui.layout.form.FormContainer(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._formcontainer.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._formcontainer, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._formcontainer, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._formcontainer, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._formcontainer.placeAt) this._formcontainer.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._formcontainer.sId });
    };

    Ui5FormContainer.prototype.detached = function detached() {
        if (this._parent && this._relation) {
            this._parent.removeChildByRelation(this._formcontainer, this._relation);
        } else {
            this._formcontainer.destroy();
        }
        _Ui5Element.prototype.detached.call(this);
    };

    Ui5FormContainer.prototype.addChild = function addChild(child, elem, afterElement) {
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

            if (elem.localName == 'formElements') {
                var _index = null;if (afterElement) _index = this._formcontainer.indexOfFormElement(afterElement);if (_index) this._formcontainer.insertFormElement(child, _index + 1);else this._formcontainer.addFormElement(child, 0);return elem.localName;
            }
            if (elem.localName == 'title') {
                this._formcontainer.setTitle(child);return elem.localName;
            }
            if (elem.localName == 'toolbar') {
                this._formcontainer.setToolbar(child);return elem.localName;
            }
        }
    };

    Ui5FormContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        if (relation == 'formElements') {
            this._formcontainer.removeFormElement(child);
        }
    };

    Ui5FormContainer.prototype.expandedChanged = function expandedChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.setExpanded((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5FormContainer.prototype.expandableChanged = function expandableChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.setExpandable((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5FormContainer.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    _createClass(Ui5FormContainer, [{
        key: 'UIElement',
        get: function get() {
            return this._formcontainer;
        }
    }]);

    return Ui5FormContainer;
}(_element.Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'expanded', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'expandable', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);