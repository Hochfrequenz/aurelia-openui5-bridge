'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, Ui5Shell;

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

            _export('Ui5Shell', Ui5Shell = (_dec = customElement('ui5-shell'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = computedFrom('_shell'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Shell, _Ui5Control);

                function Ui5Shell(element) {
                    _classCallCheck(this, Ui5Shell);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._shell = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'title', _descriptor2, _this);

                    _initDefineProp(_this, 'logo', _descriptor3, _this);

                    _initDefineProp(_this, 'showLogout', _descriptor4, _this);

                    _initDefineProp(_this, 'headerRightText', _descriptor5, _this);

                    _initDefineProp(_this, 'appWidthLimited', _descriptor6, _this);

                    _initDefineProp(_this, 'backgroundColor', _descriptor7, _this);

                    _initDefineProp(_this, 'backgroundImage', _descriptor8, _this);

                    _initDefineProp(_this, 'backgroundRepeat', _descriptor9, _this);

                    _initDefineProp(_this, 'backgroundOpacity', _descriptor10, _this);

                    _initDefineProp(_this, 'homeIcon', _descriptor11, _this);

                    _initDefineProp(_this, 'titleLevel', _descriptor12, _this);

                    _initDefineProp(_this, 'logout', _descriptor13, _this);

                    _initDefineProp(_this, 'busy', _descriptor14, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor15, _this);

                    _initDefineProp(_this, 'visible', _descriptor16, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor17, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor18, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor19, _this);

                    _initDefineProp(_this, 'validationError', _descriptor20, _this);

                    _initDefineProp(_this, 'parseError', _descriptor21, _this);

                    _initDefineProp(_this, 'formatError', _descriptor22, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor23, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Shell.prototype.fillProperties = function fillProperties(params) {
                    params.title = this.title;
                    params.logo = this.logo;
                    params.showLogout = getBooleanFromAttributeValue(this.showLogout);
                    params.headerRightText = this.headerRightText;
                    params.appWidthLimited = getBooleanFromAttributeValue(this.appWidthLimited);
                    params.backgroundColor = this.backgroundColor;
                    params.backgroundImage = this.backgroundImage;
                    params.backgroundRepeat = getBooleanFromAttributeValue(this.backgroundRepeat);
                    params.backgroundOpacity = this.backgroundOpacity;
                    params.homeIcon = this.homeIcon;
                    params.titleLevel = this.titleLevel;
                    params.logout = this.logout == null ? this.defaultFunc : this.logout;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5Shell.prototype.defaultFunc = function defaultFunc() {};

                Ui5Shell.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._shell = new sap.m.Shell(this.ui5Id, params);else this._shell = new sap.m.Shell(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._shell.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._shell, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._shell, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._shell, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._shell.placeAt) this._shell.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._shell.sId });
                };

                Ui5Shell.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._shell, this._relation);
                            }
                        } else {
                            this._shell.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Shell.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                this._shell.setApp(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._shell.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._shell.indexOfCustomData(afterElement);if (_index) this._shell.insertCustomData(child, _index + 1);else this._shell.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._shell.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._shell.indexOfDependent(afterElement);if (_index) this._shell.insertDependent(child, _index + 1);else this._shell.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Shell.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'content') {
                            this._shell.destroyApp(child);
                        }
                        if (relation == 'tooltip') {
                            this._shell.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._shell.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._shell.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._shell.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Shell.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setTitle(newValue);
                    }
                };

                Ui5Shell.prototype.logoChanged = function logoChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setLogo(newValue);
                    }
                };

                Ui5Shell.prototype.showLogoutChanged = function showLogoutChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setShowLogout(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Shell.prototype.headerRightTextChanged = function headerRightTextChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setHeaderRightText(newValue);
                    }
                };

                Ui5Shell.prototype.appWidthLimitedChanged = function appWidthLimitedChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Shell.prototype.backgroundColorChanged = function backgroundColorChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setBackgroundColor(newValue);
                    }
                };

                Ui5Shell.prototype.backgroundImageChanged = function backgroundImageChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setBackgroundImage(newValue);
                    }
                };

                Ui5Shell.prototype.backgroundRepeatChanged = function backgroundRepeatChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setBackgroundRepeat(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Shell.prototype.backgroundOpacityChanged = function backgroundOpacityChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setBackgroundOpacity(newValue);
                    }
                };

                Ui5Shell.prototype.homeIconChanged = function homeIconChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setHomeIcon(newValue);
                    }
                };

                Ui5Shell.prototype.titleLevelChanged = function titleLevelChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setTitleLevel(newValue);
                    }
                };

                Ui5Shell.prototype.logoutChanged = function logoutChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachLogout(newValue);
                    }
                };

                Ui5Shell.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Shell.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Shell.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Shell.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.setFieldGroupIds(newValue);
                    }
                };

                Ui5Shell.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Shell.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachValidationSuccess(newValue);
                    }
                };

                Ui5Shell.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachValidationError(newValue);
                    }
                };

                Ui5Shell.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachParseError(newValue);
                    }
                };

                Ui5Shell.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachFormatError(newValue);
                    }
                };

                Ui5Shell.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._shell !== null) {
                        this._shell.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Shell, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._shell;
                    }
                }]);

                return Ui5Shell;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'logo', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showLogout', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'headerRightText', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'appWidthLimited', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundColor', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundImage', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundRepeat', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundOpacity', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 1;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'homeIcon', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'titleLevel', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 'H1';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'logout', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Shell', Ui5Shell);
        }
    };
});
//# sourceMappingURL=../dist/dev/shell/shell.js.map
