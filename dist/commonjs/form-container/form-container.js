'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5FormContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

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

var Ui5FormContainer = exports.Ui5FormContainer = (_dec = (0, _aureliaTemplating.customElement)('ui5-form-container'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaFramework.computedFrom)('_formcontainer'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
    _inherits(Ui5FormContainer, _Ui5Element);

    function Ui5FormContainer(element) {
        _classCallCheck(this, Ui5FormContainer);

        var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

        _this._formcontainer = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'prevId', _descriptor2, _this);

        _initDefineProp(_this, 'expanded', _descriptor3, _this);

        _initDefineProp(_this, 'expandable', _descriptor4, _this);

        _initDefineProp(_this, 'visible', _descriptor5, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor6, _this);

        _initDefineProp(_this, 'validationError', _descriptor7, _this);

        _initDefineProp(_this, 'parseError', _descriptor8, _this);

        _initDefineProp(_this, 'formatError', _descriptor9, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor10, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5FormContainer.prototype.fillProperties = function fillProperties(params) {
        params.expanded = (0, _attributes.getBooleanFromAttributeValue)(this.expanded);
        params.expandable = (0, _attributes.getBooleanFromAttributeValue)(this.expandable);
        params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);

        _Ui5Element.prototype.fillProperties.call(this, params);
    };

    Ui5FormContainer.prototype.defaultFunc = function defaultFunc() {};

    Ui5FormContainer.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._formcontainer = new sap.ui.layout.form.FormContainer(this.ui5Id, params);else this._formcontainer = new sap.ui.layout.form.FormContainer(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._formcontainer.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._formcontainer, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._formcontainer, this.element, this.prevId);

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
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._formcontainer) this._parent.removeChildByRelation(this._formcontainer, this._relation);
                }
            } else {
                this._formcontainer.destroy();
            }
            _Ui5Element.prototype.detached.call(this);
        } catch (err) {}
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

            try {
                if (elem.localName == 'formelements') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._formcontainer.insertFormElement(child, _index);else this._formcontainer.addFormElement(child, 0);return elem.localName;
                }
                if (elem.localName == 'title-elem') {
                    this._formcontainer.setTitle(child);return elem.localName;
                }
                if (elem.localName == 'toolbar') {
                    this._formcontainer.setToolbar(child);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._formcontainer.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._formcontainer.insertCustomData(child, _index);else this._formcontainer.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._formcontainer.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._formcontainer.insertDependent(child, _index);else this._formcontainer.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5FormContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'formelements') {
                this._formcontainer.removeFormElement(child);
            }
            if (relation == 'title-elem') {
                this._formcontainer.destroyTitle(child);
            }
            if (relation == 'toolbar') {
                this._formcontainer.destroyToolbar(child);
            }
            if (relation == 'tooltip') {
                this._formcontainer.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._formcontainer.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._formcontainer.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._formcontainer.removeDependent(child);
            }
        } catch (err) {}
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

    Ui5FormContainer.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.attachValidationSuccess(newValue);
        }
    };

    Ui5FormContainer.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.attachValidationError(newValue);
        }
    };

    Ui5FormContainer.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.attachParseError(newValue);
        }
    };

    Ui5FormContainer.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.attachFormatError(newValue);
        }
    };

    Ui5FormContainer.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._formcontainer !== null) {
            this._formcontainer.attachModelContextChange(newValue);
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
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'expanded', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'expandable', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);