'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, Ui5ObjectNumber;

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

            _export('Ui5ObjectNumber', Ui5ObjectNumber = (_dec = customElement('ui5-object-number'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = computedFrom('_objectnumber'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5ObjectNumber, _Ui5Control);

                function Ui5ObjectNumber(element) {
                    _classCallCheck(this, Ui5ObjectNumber);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._objectnumber = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'number', _descriptor2, _this);

                    _initDefineProp(_this, 'emphasized', _descriptor3, _this);

                    _initDefineProp(_this, 'state', _descriptor4, _this);

                    _initDefineProp(_this, 'unit', _descriptor5, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor6, _this);

                    _initDefineProp(_this, 'textAlign', _descriptor7, _this);

                    _initDefineProp(_this, 'busy', _descriptor8, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor9, _this);

                    _initDefineProp(_this, 'visible', _descriptor10, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor11, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor12, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor13, _this);

                    _initDefineProp(_this, 'validationError', _descriptor14, _this);

                    _initDefineProp(_this, 'parseError', _descriptor15, _this);

                    _initDefineProp(_this, 'formatError', _descriptor16, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor17, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5ObjectNumber.prototype.fillProperties = function fillProperties(params) {
                    params.number = this.number;
                    params.emphasized = getBooleanFromAttributeValue(this.emphasized);
                    params.state = this.state;
                    params.unit = this.unit;
                    params.textDirection = this.textDirection;
                    params.textAlign = this.textAlign;
                };

                Ui5ObjectNumber.prototype.defaultFunc = function defaultFunc() {};

                Ui5ObjectNumber.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._objectnumber = new sap.m.ObjectNumber(this.ui5Id, params);else this._objectnumber = new sap.m.ObjectNumber(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._objectnumber.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._objectnumber, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._objectnumber, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._objectnumber, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._objectnumber.placeAt) this._objectnumber.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._objectnumber.sId });
                };

                Ui5ObjectNumber.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._objectnumber, this._relation);
                            }
                        } else {
                            this._objectnumber.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5ObjectNumber.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._objectnumber.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._objectnumber.indexOfCustomData(afterElement);if (_index) this._objectnumber.insertCustomData(child, _index + 1);else this._objectnumber.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._objectnumber.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._objectnumber.indexOfDependent(afterElement);if (_index) this._objectnumber.insertDependent(child, _index + 1);else this._objectnumber.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5ObjectNumber.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._objectnumber.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._objectnumber.removeCustomData(child);
                        }
                        if (relation == 'layoutData') {
                            this._objectnumber.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._objectnumber.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5ObjectNumber.prototype.numberChanged = function numberChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setNumber(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setEmphasized(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ObjectNumber.prototype.stateChanged = function stateChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setState(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.unitChanged = function unitChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setUnit(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setTextDirection(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.textAlignChanged = function textAlignChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setTextAlign(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ObjectNumber.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ObjectNumber.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.setFieldGroupIds(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.attachValidationSuccess(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.attachValidationError(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.attachParseError(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.attachFormatError(newValue);
                    }
                };

                Ui5ObjectNumber.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._objectnumber !== null) {
                        this._objectnumber.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5ObjectNumber, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._objectnumber;
                    }
                }]);

                return Ui5ObjectNumber;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'number', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'unit', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Begin';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5ObjectNumber', Ui5ObjectNumber);
        }
    };
});