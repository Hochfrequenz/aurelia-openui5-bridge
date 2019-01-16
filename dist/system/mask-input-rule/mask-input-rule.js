'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, Ui5MaskInputRule;

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

    return {
        setters: [function (_aureliaTemplating) {
            bindable = _aureliaTemplating.bindable;
            customElement = _aureliaTemplating.customElement;
            noView = _aureliaTemplating.noView;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_commonAttributeManager) {
            AttributeManager = _commonAttributeManager.AttributeManager;
        }, function (_commonAttributes) {
            getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
        }, function (_elementElement) {
            Ui5Element = _elementElement.Ui5Element;
        }],
        execute: function () {
            _createClass = function () {
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

            _export('Ui5MaskInputRule', Ui5MaskInputRule = (_dec = customElement('ui5-mask-input-rule'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = computedFrom('_maskinputrule'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5MaskInputRule, _Ui5Element);

                function Ui5MaskInputRule(element) {
                    _classCallCheck(this, Ui5MaskInputRule);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._maskinputrule = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'maskFormatSymbol', _descriptor5, _this);

                    _initDefineProp(_this, 'regex', _descriptor6, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor7, _this);

                    _initDefineProp(_this, 'validationError', _descriptor8, _this);

                    _initDefineProp(_this, 'parseError', _descriptor9, _this);

                    _initDefineProp(_this, 'formatError', _descriptor10, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor11, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5MaskInputRule.prototype.fillProperties = function fillProperties(params) {
                    params.maskFormatSymbol = this.maskFormatSymbol;
                    params.regex = this.regex;

                    _Ui5Element.prototype.fillProperties.call(this, params);
                };

                Ui5MaskInputRule.prototype.defaultFunc = function defaultFunc() {};

                Ui5MaskInputRule.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._maskinputrule = new sap.m.MaskInputRule(this.ui5Id, params);else this._maskinputrule = new sap.m.MaskInputRule(params);
                    if (this.ui5Class) this._maskinputrule.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._maskinputrule.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._maskinputrule.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._maskinputrule, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._maskinputrule, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._maskinputrule.placeAt) this._maskinputrule.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._maskinputrule.sId });
                };

                Ui5MaskInputRule.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._maskinputrule) this._parent.removeChildByRelation(this._maskinputrule, this._relation);
                            }
                        } else {
                            this._maskinputrule.destroy();
                        }
                        _Ui5Element.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5MaskInputRule.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._maskinputrule.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._maskinputrule.insertCustomData(child, _index);else this._maskinputrule.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._maskinputrule.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._maskinputrule.insertDependent(child, _index);else this._maskinputrule.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._maskinputrule.insertDragDropConfig(child, _index);else this._maskinputrule.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5MaskInputRule.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._maskinputrule.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._maskinputrule.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._maskinputrule.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._maskinputrule.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._maskinputrule.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5MaskInputRule.prototype.maskFormatSymbolChanged = function maskFormatSymbolChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.setMaskFormatSymbol(newValue);
                    }
                };

                Ui5MaskInputRule.prototype.regexChanged = function regexChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.setRegex(newValue);
                    }
                };

                Ui5MaskInputRule.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.attachValidationSuccess(newValue);
                    }
                };

                Ui5MaskInputRule.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.attachValidationError(newValue);
                    }
                };

                Ui5MaskInputRule.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.attachParseError(newValue);
                    }
                };

                Ui5MaskInputRule.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.attachFormatError(newValue);
                    }
                };

                Ui5MaskInputRule.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._maskinputrule !== null) {
                        this._maskinputrule.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5MaskInputRule, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._maskinputrule;
                    }
                }]);

                return Ui5MaskInputRule;
            }(Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maskFormatSymbol', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '*';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'regex', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return '[a-zA-Z0-9]';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5MaskInputRule', Ui5MaskInputRule);
        }
    };
});