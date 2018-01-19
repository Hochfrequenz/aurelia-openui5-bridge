'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, Ui5WizardStep;

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

            _export('Ui5WizardStep', Ui5WizardStep = (_dec = customElement('ui5-wizard-step'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = computedFrom('_wizardstep'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5WizardStep, _Ui5Control);

                function Ui5WizardStep(element) {
                    _classCallCheck(this, Ui5WizardStep);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._wizardstep = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'title', _descriptor2, _this);

                    _initDefineProp(_this, 'icon', _descriptor3, _this);

                    _initDefineProp(_this, 'validated', _descriptor4, _this);

                    _initDefineProp(_this, 'complete', _descriptor5, _this);

                    _initDefineProp(_this, 'activate', _descriptor6, _this);

                    _initDefineProp(_this, 'busy', _descriptor7, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor8, _this);

                    _initDefineProp(_this, 'visible', _descriptor9, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor10, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor11, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor12, _this);

                    _initDefineProp(_this, 'validationError', _descriptor13, _this);

                    _initDefineProp(_this, 'parseError', _descriptor14, _this);

                    _initDefineProp(_this, 'formatError', _descriptor15, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor16, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5WizardStep.prototype.fillProperties = function fillProperties(params) {
                    params.title = this.title;
                    params.icon = this.icon;
                    params.validated = getBooleanFromAttributeValue(this.validated);
                    params.complete = this.complete == null ? this.defaultFunc : this.complete;
                    params.activate = this.activate == null ? this.defaultFunc : this.activate;
                };

                Ui5WizardStep.prototype.defaultFunc = function defaultFunc() {};

                Ui5WizardStep.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._wizardstep = new sap.m.WizardStep(this.ui5Id, params);else this._wizardstep = new sap.m.WizardStep(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._wizardstep.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._wizardstep, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._wizardstep, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._wizardstep.placeAt) this._wizardstep.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._wizardstep.sId });
                };

                Ui5WizardStep.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._wizardstep, this._relation);
                            }
                        } else {
                            this._wizardstep.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5WizardStep.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'content') {
                                var _index = null;if (afterElement) _index = this._wizardstep.indexOfContent(afterElement);if (_index) this._wizardstep.insertContent(child, _index + 1);else this._wizardstep.addContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._wizardstep.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._wizardstep.indexOfCustomData(afterElement);if (_index) this._wizardstep.insertCustomData(child, _index + 1);else this._wizardstep.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._wizardstep.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._wizardstep.indexOfDependent(afterElement);if (_index) this._wizardstep.insertDependent(child, _index + 1);else this._wizardstep.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5WizardStep.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'content') {
                            this._wizardstep.removeContent(child);
                        }
                        if (relation == 'tooltip') {
                            this._wizardstep.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._wizardstep.removeCustomData(child);
                        }
                        if (relation == 'layoutData') {
                            this._wizardstep.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._wizardstep.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5WizardStep.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setTitle(newValue);
                    }
                };

                Ui5WizardStep.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setIcon(newValue);
                    }
                };

                Ui5WizardStep.prototype.validatedChanged = function validatedChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setValidated(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5WizardStep.prototype.completeChanged = function completeChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachComplete(newValue);
                    }
                };

                Ui5WizardStep.prototype.activateChanged = function activateChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachActivate(newValue);
                    }
                };

                Ui5WizardStep.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5WizardStep.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5WizardStep.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5WizardStep.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.setFieldGroupIds(newValue);
                    }
                };

                Ui5WizardStep.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5WizardStep.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachValidationSuccess(newValue);
                    }
                };

                Ui5WizardStep.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachValidationError(newValue);
                    }
                };

                Ui5WizardStep.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachParseError(newValue);
                    }
                };

                Ui5WizardStep.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachFormatError(newValue);
                    }
                };

                Ui5WizardStep.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._wizardstep !== null) {
                        this._wizardstep.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5WizardStep, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._wizardstep;
                    }
                }]);

                return Ui5WizardStep;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'validated', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'complete', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'activate', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5WizardStep', Ui5WizardStep);
        }
    };
});
//# sourceMappingURL=../dist/dev/wizard-step/wizard-step.js.map
