'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, Ui5Title;

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

            _export('Ui5Title', Ui5Title = (_dec = customElement('ui5-title'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = computedFrom('_title'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5Title, _Ui5Element);

                function Ui5Title(element) {
                    _classCallCheck(this, Ui5Title);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._title = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'prevId', _descriptor2, _this);

                    _initDefineProp(_this, 'text', _descriptor3, _this);

                    _initDefineProp(_this, 'icon', _descriptor4, _this);

                    _initDefineProp(_this, 'level', _descriptor5, _this);

                    _initDefineProp(_this, 'emphasized', _descriptor6, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor7, _this);

                    _initDefineProp(_this, 'validationError', _descriptor8, _this);

                    _initDefineProp(_this, 'parseError', _descriptor9, _this);

                    _initDefineProp(_this, 'formatError', _descriptor10, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor11, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Title.prototype.fillProperties = function fillProperties(params) {
                    params.text = this.text;
                    params.icon = this.icon;
                    params.level = this.level;
                    params.emphasized = getBooleanFromAttributeValue(this.emphasized);

                    _Ui5Element.prototype.fillProperties.call(this, params);
                };

                Ui5Title.prototype.defaultFunc = function defaultFunc() {};

                Ui5Title.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._title = new sap.ui.core.Title(this.ui5Id, params);else this._title = new sap.ui.core.Title(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._title.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._title, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._title, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._title.placeAt) this._title.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._title.sId });
                };

                Ui5Title.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._title) this._parent.removeChildByRelation(this._title, this._relation);
                            }
                        } else {
                            this._title.destroy();
                        }
                        _Ui5Element.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Title.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._title.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._title.insertCustomData(child, _index);else this._title.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._title.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._title.insertDependent(child, _index);else this._title.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Title.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._title.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._title.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._title.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._title.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Title.prototype.textChanged = function textChanged(newValue) {
                    if (this._title !== null) {
                        this._title.setText(newValue);
                    }
                };

                Ui5Title.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._title !== null) {
                        this._title.setIcon(newValue);
                    }
                };

                Ui5Title.prototype.levelChanged = function levelChanged(newValue) {
                    if (this._title !== null) {
                        this._title.setLevel(newValue);
                    }
                };

                Ui5Title.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
                    if (this._title !== null) {
                        this._title.setEmphasized(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Title.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._title !== null) {
                        this._title.attachValidationSuccess(newValue);
                    }
                };

                Ui5Title.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._title !== null) {
                        this._title.attachValidationError(newValue);
                    }
                };

                Ui5Title.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._title !== null) {
                        this._title.attachParseError(newValue);
                    }
                };

                Ui5Title.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._title !== null) {
                        this._title.attachFormatError(newValue);
                    }
                };

                Ui5Title.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._title !== null) {
                        this._title.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Title, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._title;
                    }
                }]);

                return Ui5Title;
            }(Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'level', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Auto';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Title', Ui5Title);
        }
    };
});