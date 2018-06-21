'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, Ui5NumericContent;

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

            _export('Ui5NumericContent', Ui5NumericContent = (_dec = customElement('ui5-numeric-content'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = computedFrom('_numericcontent'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5NumericContent, _Ui5Control);

                function Ui5NumericContent(element) {
                    _classCallCheck(this, Ui5NumericContent);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._numericcontent = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'animateTextChange', _descriptor5, _this);

                    _initDefineProp(_this, 'formatterValue', _descriptor6, _this);

                    _initDefineProp(_this, 'icon', _descriptor7, _this);

                    _initDefineProp(_this, 'iconDescription', _descriptor8, _this);

                    _initDefineProp(_this, 'indicator', _descriptor9, _this);

                    _initDefineProp(_this, 'nullifyValue', _descriptor10, _this);

                    _initDefineProp(_this, 'scale', _descriptor11, _this);

                    _initDefineProp(_this, 'truncateValueTo', _descriptor12, _this);

                    _initDefineProp(_this, 'value', _descriptor13, _this);

                    _initDefineProp(_this, 'valueColor', _descriptor14, _this);

                    _initDefineProp(_this, 'width', _descriptor15, _this);

                    _initDefineProp(_this, 'withMargin', _descriptor16, _this);

                    _initDefineProp(_this, 'state', _descriptor17, _this);

                    _initDefineProp(_this, 'press', _descriptor18, _this);

                    _initDefineProp(_this, 'busy', _descriptor19, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor20, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor21, _this);

                    _initDefineProp(_this, 'visible', _descriptor22, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor23, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor24, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor25, _this);

                    _initDefineProp(_this, 'validationError', _descriptor26, _this);

                    _initDefineProp(_this, 'parseError', _descriptor27, _this);

                    _initDefineProp(_this, 'formatError', _descriptor28, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor29, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5NumericContent.prototype.fillProperties = function fillProperties(params) {
                    params.animateTextChange = getBooleanFromAttributeValue(this.animateTextChange);
                    params.formatterValue = getBooleanFromAttributeValue(this.formatterValue);
                    params.icon = this.icon;
                    params.iconDescription = this.iconDescription;
                    params.indicator = this.indicator;
                    params.nullifyValue = getBooleanFromAttributeValue(this.nullifyValue);
                    params.scale = this.scale;
                    params.truncateValueTo = this.truncateValueTo ? parseInt(this.truncateValueTo) : 0;
                    params.value = this.value;
                    params.valueColor = this.valueColor;
                    params.width = this.width;
                    params.withMargin = getBooleanFromAttributeValue(this.withMargin);
                    params.state = this.state;
                    params.press = this.press == null ? this.defaultFunc : this.press;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5NumericContent.prototype.defaultFunc = function defaultFunc() {};

                Ui5NumericContent.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._numericcontent = new sap.m.NumericContent(this.ui5Id, params);else this._numericcontent = new sap.m.NumericContent(params);
                    if (this.ui5Class) this._numericcontent.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._numericcontent.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._numericcontent.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._numericcontent, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._numericcontent, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._numericcontent.placeAt) this._numericcontent.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._numericcontent.sId });
                };

                Ui5NumericContent.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._numericcontent) this._parent.removeChildByRelation(this._numericcontent, this._relation);
                            }
                        } else {
                            this._numericcontent.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5NumericContent.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._numericcontent.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._numericcontent.insertCustomData(child, _index);else this._numericcontent.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._numericcontent.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._numericcontent.insertDependent(child, _index);else this._numericcontent.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5NumericContent.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._numericcontent.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._numericcontent.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._numericcontent.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._numericcontent.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5NumericContent.prototype.animateTextChangeChanged = function animateTextChangeChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setAnimateTextChange(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5NumericContent.prototype.formatterValueChanged = function formatterValueChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setFormatterValue(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5NumericContent.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setIcon(newValue);
                    }
                };

                Ui5NumericContent.prototype.iconDescriptionChanged = function iconDescriptionChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setIconDescription(newValue);
                    }
                };

                Ui5NumericContent.prototype.indicatorChanged = function indicatorChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setIndicator(newValue);
                    }
                };

                Ui5NumericContent.prototype.nullifyValueChanged = function nullifyValueChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setNullifyValue(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5NumericContent.prototype.scaleChanged = function scaleChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setScale(newValue);
                    }
                };

                Ui5NumericContent.prototype.truncateValueToChanged = function truncateValueToChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setTruncateValueTo(newValue);
                    }
                };

                Ui5NumericContent.prototype.valueChanged = function valueChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setValue(newValue);
                    }
                };

                Ui5NumericContent.prototype.valueColorChanged = function valueColorChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setValueColor(newValue);
                    }
                };

                Ui5NumericContent.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setWidth(newValue);
                    }
                };

                Ui5NumericContent.prototype.withMarginChanged = function withMarginChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setWithMargin(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5NumericContent.prototype.stateChanged = function stateChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setState(newValue);
                    }
                };

                Ui5NumericContent.prototype.pressChanged = function pressChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachPress(newValue);
                    }
                };

                Ui5NumericContent.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5NumericContent.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5NumericContent.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5NumericContent.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5NumericContent.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.setFieldGroupIds(newValue);
                    }
                };

                Ui5NumericContent.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5NumericContent.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachValidationSuccess(newValue);
                    }
                };

                Ui5NumericContent.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachValidationError(newValue);
                    }
                };

                Ui5NumericContent.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachParseError(newValue);
                    }
                };

                Ui5NumericContent.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachFormatError(newValue);
                    }
                };

                Ui5NumericContent.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._numericcontent !== null) {
                        this._numericcontent.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5NumericContent, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._numericcontent;
                    }
                }]);

                return Ui5NumericContent;
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'animateTextChange', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'formatterValue', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'iconDescription', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'indicator', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'nullifyValue', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'scale', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'truncateValueTo', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 4;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'valueColor', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Neutral';
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'withMargin', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Loaded';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec28], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5NumericContent', Ui5NumericContent);
        }
    };
});