'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, Ui5Page;

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

            _export('Ui5Page', Ui5Page = (_dec = customElement('ui5-page'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = computedFrom('_page'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Page, _Ui5Control);

                function Ui5Page(element) {
                    _classCallCheck(this, Ui5Page);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._page = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'title', _descriptor5, _this);

                    _initDefineProp(_this, 'titleLevel', _descriptor6, _this);

                    _initDefineProp(_this, 'showNavButton', _descriptor7, _this);

                    _initDefineProp(_this, 'showHeader', _descriptor8, _this);

                    _initDefineProp(_this, 'showSubHeader', _descriptor9, _this);

                    _initDefineProp(_this, 'navButtonTooltip', _descriptor10, _this);

                    _initDefineProp(_this, 'enableScrolling', _descriptor11, _this);

                    _initDefineProp(_this, 'backgroundDesign', _descriptor12, _this);

                    _initDefineProp(_this, 'showFooter', _descriptor13, _this);

                    _initDefineProp(_this, 'contentOnlyBusy', _descriptor14, _this);

                    _initDefineProp(_this, 'floatingFooter', _descriptor15, _this);

                    _initDefineProp(_this, 'navButtonPress', _descriptor16, _this);

                    _initDefineProp(_this, 'blocked', _descriptor17, _this);

                    _initDefineProp(_this, 'busy', _descriptor18, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor19, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor20, _this);

                    _initDefineProp(_this, 'visible', _descriptor21, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor22, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor23, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor24, _this);

                    _initDefineProp(_this, 'validationError', _descriptor25, _this);

                    _initDefineProp(_this, 'parseError', _descriptor26, _this);

                    _initDefineProp(_this, 'formatError', _descriptor27, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor28, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Page.prototype.fillProperties = function fillProperties(params) {
                    params.title = this.title;
                    params.titleLevel = this.titleLevel;
                    params.showNavButton = getBooleanFromAttributeValue(this.showNavButton);
                    params.showHeader = getBooleanFromAttributeValue(this.showHeader);
                    params.showSubHeader = getBooleanFromAttributeValue(this.showSubHeader);
                    params.navButtonTooltip = this.navButtonTooltip;
                    params.enableScrolling = getBooleanFromAttributeValue(this.enableScrolling);
                    params.backgroundDesign = this.backgroundDesign;
                    params.showFooter = getBooleanFromAttributeValue(this.showFooter);
                    params.contentOnlyBusy = getBooleanFromAttributeValue(this.contentOnlyBusy);
                    params.floatingFooter = getBooleanFromAttributeValue(this.floatingFooter);
                    params.navButtonPress = this.navButtonPress == null ? this.defaultFunc : this.navButtonPress;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5Page.prototype.defaultFunc = function defaultFunc() {};

                Ui5Page.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._page = new sap.m.Page(this.ui5Id, params);else this._page = new sap.m.Page(params);
                    if (this.ui5Class) this._page.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._page.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._page.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._page, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._page, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._page.placeAt) this._page.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._page.sId });
                };

                Ui5Page.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._page) this._parent.removeChildByRelation(this._page, this._relation);
                            }
                        } else {
                            this._page.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Page.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._page.insertContent(child, _index);else this._page.addContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'customheader') {
                                this._page.setCustomHeader(child);return elem.localName;
                            }
                            if (elem.localName == 'footer') {
                                this._page.setFooter(child);return elem.localName;
                            }
                            if (elem.localName == 'subheader') {
                                this._page.setSubHeader(child);return elem.localName;
                            }
                            if (elem.localName == 'headercontent') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._page.insertHeaderContent(child, _index);else this._page.addHeaderContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'landmarkinfo') {
                                this._page.setLandmarkInfo(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._page.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._page.insertCustomData(child, _index);else this._page.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._page.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._page.insertDependent(child, _index);else this._page.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._page.insertDragDropConfig(child, _index);else this._page.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Page.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'content') {
                            this._page.removeContent(child);
                        }
                        if (relation == 'customheader') {
                            this._page.destroyCustomHeader(child);
                        }
                        if (relation == 'footer') {
                            this._page.destroyFooter(child);
                        }
                        if (relation == 'subheader') {
                            this._page.destroySubHeader(child);
                        }
                        if (relation == 'headercontent') {
                            this._page.removeHeaderContent(child);
                        }
                        if (relation == 'landmarkinfo') {
                            this._page.destroyLandmarkInfo(child);
                        }
                        if (relation == 'tooltip') {
                            this._page.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._page.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._page.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._page.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._page.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5Page.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setTitle(newValue);
                    }
                };

                Ui5Page.prototype.titleLevelChanged = function titleLevelChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setTitleLevel(newValue);
                    }
                };

                Ui5Page.prototype.showNavButtonChanged = function showNavButtonChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setShowNavButton(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setShowHeader(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.showSubHeaderChanged = function showSubHeaderChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setShowSubHeader(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.navButtonTooltipChanged = function navButtonTooltipChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setNavButtonTooltip(newValue);
                    }
                };

                Ui5Page.prototype.enableScrollingChanged = function enableScrollingChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setEnableScrolling(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setBackgroundDesign(newValue);
                    }
                };

                Ui5Page.prototype.showFooterChanged = function showFooterChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.contentOnlyBusyChanged = function contentOnlyBusyChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setContentOnlyBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.floatingFooterChanged = function floatingFooterChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setFloatingFooter(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.navButtonPressChanged = function navButtonPressChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachNavButtonPress(newValue);
                    }
                };

                Ui5Page.prototype.blockedChanged = function blockedChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setBlocked(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Page.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5Page.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Page.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._page !== null) {
                        this._page.setFieldGroupIds(newValue);
                    }
                };

                Ui5Page.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Page.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachValidationSuccess(newValue);
                    }
                };

                Ui5Page.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachValidationError(newValue);
                    }
                };

                Ui5Page.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachParseError(newValue);
                    }
                };

                Ui5Page.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachFormatError(newValue);
                    }
                };

                Ui5Page.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._page !== null) {
                        this._page.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Page, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._page;
                    }
                }]);

                return Ui5Page;
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'titleLevel', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Auto';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'showNavButton', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'showSubHeader', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'navButtonTooltip', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableScrolling', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Standard';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'contentOnlyBusy', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'floatingFooter', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'navButtonPress', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Page', Ui5Page);
        }
    };
});
//# sourceMappingURL=../dist/dev/page/page.js.map
