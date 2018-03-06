define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Bar = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

    var Ui5Bar = exports.Ui5Bar = (_dec = (0, _aureliaTemplating.customElement)('ui5-bar'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaFramework.computedFrom)('_bar'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5Bar, _Ui5Control);

        function Ui5Bar(element) {
            _classCallCheck(this, Ui5Bar);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._bar = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'design', _descriptor2, _this);

            _initDefineProp(_this, 'busy', _descriptor3, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor4, _this);

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor5, _this);

            _initDefineProp(_this, 'visible', _descriptor6, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor7, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor8, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor9, _this);

            _initDefineProp(_this, 'validationError', _descriptor10, _this);

            _initDefineProp(_this, 'parseError', _descriptor11, _this);

            _initDefineProp(_this, 'formatError', _descriptor12, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor13, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5Bar.prototype.fillProperties = function fillProperties(params) {
            params.design = this.design;

            _Ui5Control.prototype.fillProperties.call(this, params);
        };

        Ui5Bar.prototype.defaultFunc = function defaultFunc() {};

        Ui5Bar.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._bar = new sap.m.Bar(this.ui5Id, params);else this._bar = new sap.m.Bar(params);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._bar.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._bar, this.element);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._bar.placeAt) this._bar.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._bar.sId });
        };

        Ui5Bar.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._bar, this._relation);
                    }
                } else {
                    this._bar.destroy();
                }
                _Ui5Control.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5Bar.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'contentleft') {
                        var _index = null;if (afterElement) _index = this._bar.indexOfContentLeft(afterElement);if (_index) this._bar.insertContentLeft(child, _index + 1);else this._bar.addContentLeft(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'contentmiddle') {
                        var _index = null;if (afterElement) _index = this._bar.indexOfContentMiddle(afterElement);if (_index) this._bar.insertContentMiddle(child, _index + 1);else this._bar.addContentMiddle(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'contentright') {
                        var _index = null;if (afterElement) _index = this._bar.indexOfContentRight(afterElement);if (_index) this._bar.insertContentRight(child, _index + 1);else this._bar.addContentRight(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._bar.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = null;if (afterElement) _index = this._bar.indexOfCustomData(afterElement);if (_index) this._bar.insertCustomData(child, _index + 1);else this._bar.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._bar.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = null;if (afterElement) _index = this._bar.indexOfDependent(afterElement);if (_index) this._bar.insertDependent(child, _index + 1);else this._bar.addDependent(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5Bar.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'contentleft') {
                    this._bar.removeContentLeft(child);
                }
                if (relation == 'contentmiddle') {
                    this._bar.removeContentMiddle(child);
                }
                if (relation == 'contentright') {
                    this._bar.removeContentRight(child);
                }
                if (relation == 'tooltip') {
                    this._bar.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._bar.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._bar.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._bar.removeDependent(child);
                }
            } catch (err) {}
        };

        Ui5Bar.prototype.designChanged = function designChanged(newValue) {
            if (this._bar !== null) {
                this._bar.setDesign(newValue);
            }
        };

        Ui5Bar.prototype.busyChanged = function busyChanged(newValue) {
            if (this._bar !== null) {
                this._bar.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Bar.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._bar !== null) {
                this._bar.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5Bar.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._bar !== null) {
                this._bar.setBusyIndicatorSize(newValue);
            }
        };

        Ui5Bar.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._bar !== null) {
                this._bar.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Bar.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._bar !== null) {
                this._bar.setFieldGroupIds(newValue);
            }
        };

        Ui5Bar.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._bar !== null) {
                this._bar.attachValidateFieldGroup(newValue);
            }
        };

        Ui5Bar.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._bar !== null) {
                this._bar.attachValidationSuccess(newValue);
            }
        };

        Ui5Bar.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._bar !== null) {
                this._bar.attachValidationError(newValue);
            }
        };

        Ui5Bar.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._bar !== null) {
                this._bar.attachParseError(newValue);
            }
        };

        Ui5Bar.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._bar !== null) {
                this._bar.attachFormatError(newValue);
            }
        };

        Ui5Bar.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._bar !== null) {
                this._bar.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5Bar, [{
            key: 'UIElement',
            get: function get() {
                return this._bar;
            }
        }]);

        return Ui5Bar;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'design', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return 'Auto';
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
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});