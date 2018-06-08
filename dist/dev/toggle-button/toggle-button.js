'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../button/button'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Button, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, Ui5ToggleButton;

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
        }, function (_buttonButton) {
            Ui5Button = _buttonButton.Ui5Button;
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

            _export('Ui5ToggleButton', Ui5ToggleButton = (_dec = customElement('ui5-toggle-button'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = computedFrom('_togglebutton'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Button) {
                _inherits(Ui5ToggleButton, _Ui5Button);

                function Ui5ToggleButton(element) {
                    _classCallCheck(this, Ui5ToggleButton);

                    var _this = _possibleConstructorReturn(this, _Ui5Button.call(this, element));

                    _this._togglebutton = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'prevId', _descriptor2, _this);

                    _initDefineProp(_this, 'pressed', _descriptor3, _this);

                    _initDefineProp(_this, 'text', _descriptor4, _this);

                    _initDefineProp(_this, 'type', _descriptor5, _this);

                    _initDefineProp(_this, 'width', _descriptor6, _this);

                    _initDefineProp(_this, 'enabled', _descriptor7, _this);

                    _initDefineProp(_this, 'icon', _descriptor8, _this);

                    _initDefineProp(_this, 'iconFirst', _descriptor9, _this);

                    _initDefineProp(_this, 'activeIcon', _descriptor10, _this);

                    _initDefineProp(_this, 'iconDensityAware', _descriptor11, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor12, _this);

                    _initDefineProp(_this, 'press', _descriptor13, _this);

                    _initDefineProp(_this, 'busy', _descriptor14, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor15, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor16, _this);

                    _initDefineProp(_this, 'visible', _descriptor17, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor18, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor19, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor20, _this);

                    _initDefineProp(_this, 'validationError', _descriptor21, _this);

                    _initDefineProp(_this, 'parseError', _descriptor22, _this);

                    _initDefineProp(_this, 'formatError', _descriptor23, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor24, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5ToggleButton.prototype.fillProperties = function fillProperties(params) {
                    params.pressed = getBooleanFromAttributeValue(this.pressed);

                    _Ui5Button.prototype.fillProperties.call(this, params);
                };

                Ui5ToggleButton.prototype.defaultFunc = function defaultFunc() {};

                Ui5ToggleButton.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._togglebutton = new sap.m.ToggleButton(this.ui5Id, params);else this._togglebutton = new sap.m.ToggleButton(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._togglebutton.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._togglebutton, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._togglebutton, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._togglebutton.placeAt) this._togglebutton.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._togglebutton.sId });
                };

                Ui5ToggleButton.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._togglebutton) this._parent.removeChildByRelation(this._togglebutton, this._relation);
                            }
                        } else {
                            this._togglebutton.destroy();
                        }
                        _Ui5Button.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5ToggleButton.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._togglebutton.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._togglebutton.insertCustomData(child, _index);else this._togglebutton.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._togglebutton.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._togglebutton.insertDependent(child, _index);else this._togglebutton.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5ToggleButton.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._togglebutton.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._togglebutton.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._togglebutton.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._togglebutton.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5ToggleButton.prototype.pressedChanged = function pressedChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setPressed(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ToggleButton.prototype.textChanged = function textChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setText(newValue);
                    }
                };

                Ui5ToggleButton.prototype.typeChanged = function typeChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setType(newValue);
                    }
                };

                Ui5ToggleButton.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setWidth(newValue);
                    }
                };

                Ui5ToggleButton.prototype.enabledChanged = function enabledChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setEnabled(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ToggleButton.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setIcon(newValue);
                    }
                };

                Ui5ToggleButton.prototype.iconFirstChanged = function iconFirstChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setIconFirst(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ToggleButton.prototype.activeIconChanged = function activeIconChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setActiveIcon(newValue);
                    }
                };

                Ui5ToggleButton.prototype.iconDensityAwareChanged = function iconDensityAwareChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setIconDensityAware(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ToggleButton.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setTextDirection(newValue);
                    }
                };

                Ui5ToggleButton.prototype.pressChanged = function pressChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachPress(newValue);
                    }
                };

                Ui5ToggleButton.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ToggleButton.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5ToggleButton.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5ToggleButton.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ToggleButton.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.setFieldGroupIds(newValue);
                    }
                };

                Ui5ToggleButton.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5ToggleButton.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachValidationSuccess(newValue);
                    }
                };

                Ui5ToggleButton.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachValidationError(newValue);
                    }
                };

                Ui5ToggleButton.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachParseError(newValue);
                    }
                };

                Ui5ToggleButton.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachFormatError(newValue);
                    }
                };

                Ui5ToggleButton.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._togglebutton !== null) {
                        this._togglebutton.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5ToggleButton, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._togglebutton;
                    }
                }]);

                return Ui5ToggleButton;
            }(Ui5Button), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'pressed', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Default';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'iconFirst', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'activeIcon', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'iconDensityAware', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5ToggleButton', Ui5ToggleButton);
        }
    };
});
//# sourceMappingURL=../dist/dev/toggle-button/toggle-button.js.map
