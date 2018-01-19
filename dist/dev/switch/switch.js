'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, Ui5Switch;

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

            _export('Ui5Switch', Ui5Switch = (_dec = customElement('ui5-switch'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = computedFrom('_switch'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Switch, _Ui5Control);

                function Ui5Switch(element) {
                    _classCallCheck(this, Ui5Switch);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._switch = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'state', _descriptor2, _this);

                    _initDefineProp(_this, 'customTextOn', _descriptor3, _this);

                    _initDefineProp(_this, 'customTextOff', _descriptor4, _this);

                    _initDefineProp(_this, 'enabled', _descriptor5, _this);

                    _initDefineProp(_this, 'name', _descriptor6, _this);

                    _initDefineProp(_this, 'type', _descriptor7, _this);

                    _initDefineProp(_this, 'change', _descriptor8, _this);

                    _initDefineProp(_this, 'busy', _descriptor9, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor10, _this);

                    _initDefineProp(_this, 'visible', _descriptor11, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor12, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor13, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor14, _this);

                    _initDefineProp(_this, 'validationError', _descriptor15, _this);

                    _initDefineProp(_this, 'parseError', _descriptor16, _this);

                    _initDefineProp(_this, 'formatError', _descriptor17, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor18, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Switch.prototype.fillProperties = function fillProperties(params) {
                    params.state = getBooleanFromAttributeValue(this.state);
                    params.customTextOn = this.customTextOn;
                    params.customTextOff = this.customTextOff;
                    params.enabled = getBooleanFromAttributeValue(this.enabled);
                    params.name = this.name;
                    params.type = this.type;
                    params.change = this.change == null ? this.defaultFunc : this.change;
                };

                Ui5Switch.prototype.defaultFunc = function defaultFunc() {};

                Ui5Switch.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._switch = new sap.m.Switch(this.ui5Id, params);else this._switch = new sap.m.Switch(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._switch.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._switch, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._switch, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._switch, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._switch.placeAt) this._switch.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._switch.sId });
                };

                Ui5Switch.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._switch, this._relation);
                            }
                        } else {
                            this._switch.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Switch.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._switch.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._switch.indexOfCustomData(afterElement);if (_index) this._switch.insertCustomData(child, _index + 1);else this._switch.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._switch.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._switch.indexOfDependent(afterElement);if (_index) this._switch.insertDependent(child, _index + 1);else this._switch.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Switch.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._switch.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._switch.removeCustomData(child);
                        }
                        if (relation == 'layoutData') {
                            this._switch.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._switch.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Switch.prototype.stateChanged = function stateChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setState(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Switch.prototype.customTextOnChanged = function customTextOnChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setCustomTextOn(newValue);
                    }
                };

                Ui5Switch.prototype.customTextOffChanged = function customTextOffChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setCustomTextOff(newValue);
                    }
                };

                Ui5Switch.prototype.enabledChanged = function enabledChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setEnabled(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Switch.prototype.nameChanged = function nameChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setName(newValue);
                    }
                };

                Ui5Switch.prototype.typeChanged = function typeChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setType(newValue);
                    }
                };

                Ui5Switch.prototype.changeChanged = function changeChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachChange(newValue);
                    }
                };

                Ui5Switch.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Switch.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Switch.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Switch.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.setFieldGroupIds(newValue);
                    }
                };

                Ui5Switch.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Switch.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachValidationSuccess(newValue);
                    }
                };

                Ui5Switch.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachValidationError(newValue);
                    }
                };

                Ui5Switch.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachParseError(newValue);
                    }
                };

                Ui5Switch.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachFormatError(newValue);
                    }
                };

                Ui5Switch.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._switch !== null) {
                        this._switch.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Switch, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._switch;
                    }
                }]);

                return Ui5Switch;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'customTextOn', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'customTextOff', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Default';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Switch', Ui5Switch);
        }
    };
});
//# sourceMappingURL=../dist/dev/switch/switch.js.map
