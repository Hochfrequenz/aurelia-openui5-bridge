'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, Ui5Html;

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
        }, function (_controlControl) {
            Ui5Control = _controlControl.Ui5Control;
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

            _export('Ui5Html', Ui5Html = (_dec = customElement('ui5-html'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = computedFrom('_html'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Html, _Ui5Control);

                function Ui5Html(element) {
                    _classCallCheck(this, Ui5Html);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._html = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'content', _descriptor5, _this);

                    _initDefineProp(_this, 'preferDOM', _descriptor6, _this);

                    _initDefineProp(_this, 'sanitizeContent', _descriptor7, _this);

                    _initDefineProp(_this, 'visible', _descriptor8, _this);

                    _initDefineProp(_this, 'afterRendering', _descriptor9, _this);

                    _initDefineProp(_this, 'blocked', _descriptor10, _this);

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
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Html.prototype.fillProperties = function fillProperties(params) {
                    params.content = this.content;
                    params.preferDOM = getBooleanFromAttributeValue(this.preferDOM);
                    params.sanitizeContent = getBooleanFromAttributeValue(this.sanitizeContent);
                    params.visible = getBooleanFromAttributeValue(this.visible);
                    params.afterRendering = this.afterRendering == null ? this.defaultFunc : this.afterRendering;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5Html.prototype.defaultFunc = function defaultFunc() {};

                Ui5Html.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._html = new sap.ui.core.HTML(this.ui5Id, params);else this._html = new sap.ui.core.HTML(params);
                    if (this.ui5Class) this._html.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._html.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._html.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._html, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._html, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._html.placeAt) this._html.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._html.sId });
                };

                Ui5Html.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._html) this._parent.removeChildByRelation(this._html, this._relation);
                            }
                        } else {
                            this._html.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Html.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._html.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._html.insertCustomData(child, _index);else this._html.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._html.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._html.insertDependent(child, _index);else this._html.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._html.insertDragDropConfig(child, _index);else this._html.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Html.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._html.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._html.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._html.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._html.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._html.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5Html.prototype.contentChanged = function contentChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setContent(newValue);
                    }
                };

                Ui5Html.prototype.preferDOMChanged = function preferDOMChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setPreferDOM(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Html.prototype.sanitizeContentChanged = function sanitizeContentChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setSanitizeContent(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Html.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Html.prototype.afterRenderingChanged = function afterRenderingChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachAfterRendering(newValue);
                    }
                };

                Ui5Html.prototype.blockedChanged = function blockedChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setBlocked(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Html.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Html.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Html.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5Html.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Html.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._html !== null) {
                        this._html.setFieldGroupIds(newValue);
                    }
                };

                Ui5Html.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Html.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachValidationSuccess(newValue);
                    }
                };

                Ui5Html.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachValidationError(newValue);
                    }
                };

                Ui5Html.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachParseError(newValue);
                    }
                };

                Ui5Html.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachFormatError(newValue);
                    }
                };

                Ui5Html.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._html !== null) {
                        this._html.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Html, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._html;
                    }
                }]);

                return Ui5Html;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'content', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'preferDOM', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'sanitizeContent', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'afterRendering', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Html', Ui5Html);
        }
    };
});