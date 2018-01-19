'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, Ui5Label;

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

            _export('Ui5Label', Ui5Label = (_dec = customElement('ui5-label'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = computedFrom('_label'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Label, _Ui5Control);

                function Ui5Label(element) {
                    _classCallCheck(this, Ui5Label);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._label = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'design', _descriptor2, _this);

                    _initDefineProp(_this, 'text', _descriptor3, _this);

                    _initDefineProp(_this, 'textAlign', _descriptor4, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor5, _this);

                    _initDefineProp(_this, 'width', _descriptor6, _this);

                    _initDefineProp(_this, 'required', _descriptor7, _this);

                    _initDefineProp(_this, 'displayOnly', _descriptor8, _this);

                    _initDefineProp(_this, 'wrapping', _descriptor9, _this);

                    _initDefineProp(_this, 'busy', _descriptor10, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor11, _this);

                    _initDefineProp(_this, 'visible', _descriptor12, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor13, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor14, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor15, _this);

                    _initDefineProp(_this, 'validationError', _descriptor16, _this);

                    _initDefineProp(_this, 'parseError', _descriptor17, _this);

                    _initDefineProp(_this, 'formatError', _descriptor18, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor19, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Label.prototype.fillProperties = function fillProperties(params) {
                    params.design = this.design;
                    params.text = this.text;
                    params.textAlign = this.textAlign;
                    params.textDirection = this.textDirection;
                    params.width = this.width;
                    params.required = getBooleanFromAttributeValue(this.required);
                    params.displayOnly = getBooleanFromAttributeValue(this.displayOnly);
                    params.wrapping = getBooleanFromAttributeValue(this.wrapping);
                };

                Ui5Label.prototype.defaultFunc = function defaultFunc() {};

                Ui5Label.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._label = new sap.m.Label(this.ui5Id, params);else this._label = new sap.m.Label(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._label.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._label, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._label, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._label, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._label.placeAt) this._label.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._label.sId });
                };

                Ui5Label.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._label, this._relation);
                            }
                        } else {
                            this._label.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Label.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._label.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._label.indexOfCustomData(afterElement);if (_index) this._label.insertCustomData(child, _index + 1);else this._label.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._label.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._label.indexOfDependent(afterElement);if (_index) this._label.insertDependent(child, _index + 1);else this._label.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Label.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tooltip') {
                            this._label.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._label.removeCustomData(child);
                        }
                        if (relation == 'layoutData') {
                            this._label.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._label.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Label.prototype.designChanged = function designChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setDesign(newValue);
                    }
                };

                Ui5Label.prototype.textChanged = function textChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setText(newValue);
                    }
                };

                Ui5Label.prototype.textAlignChanged = function textAlignChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setTextAlign(newValue);
                    }
                };

                Ui5Label.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setTextDirection(newValue);
                    }
                };

                Ui5Label.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setWidth(newValue);
                    }
                };

                Ui5Label.prototype.requiredChanged = function requiredChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setRequired(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Label.prototype.displayOnlyChanged = function displayOnlyChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setDisplayOnly(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Label.prototype.wrappingChanged = function wrappingChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setWrapping(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Label.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Label.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Label.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Label.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._label !== null) {
                        this._label.setFieldGroupIds(newValue);
                    }
                };

                Ui5Label.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._label !== null) {
                        this._label.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Label.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._label !== null) {
                        this._label.attachValidationSuccess(newValue);
                    }
                };

                Ui5Label.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._label !== null) {
                        this._label.attachValidationError(newValue);
                    }
                };

                Ui5Label.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._label !== null) {
                        this._label.attachParseError(newValue);
                    }
                };

                Ui5Label.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._label !== null) {
                        this._label.attachFormatError(newValue);
                    }
                };

                Ui5Label.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._label !== null) {
                        this._label.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Label, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._label;
                    }
                }]);

                return Ui5Label;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'design', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Standard';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Begin';
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'displayOnly', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Label', Ui5Label);
        }
    };
});