'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, Ui5ResponsivePopover;

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

            _export('Ui5ResponsivePopover', Ui5ResponsivePopover = (_dec = customElement('ui5-responsive-popover'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = computedFrom('_responsivepopover'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5ResponsivePopover, _Ui5Control);

                function Ui5ResponsivePopover(element) {
                    _classCallCheck(this, Ui5ResponsivePopover);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._responsivepopover = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'prevId', _descriptor2, _this);

                    _initDefineProp(_this, 'placement', _descriptor3, _this);

                    _initDefineProp(_this, 'showHeader', _descriptor4, _this);

                    _initDefineProp(_this, 'title', _descriptor5, _this);

                    _initDefineProp(_this, 'icon', _descriptor6, _this);

                    _initDefineProp(_this, 'modal', _descriptor7, _this);

                    _initDefineProp(_this, 'offsetX', _descriptor8, _this);

                    _initDefineProp(_this, 'offsetY', _descriptor9, _this);

                    _initDefineProp(_this, 'showArrow', _descriptor10, _this);

                    _initDefineProp(_this, 'contentWidth', _descriptor11, _this);

                    _initDefineProp(_this, 'contentHeight', _descriptor12, _this);

                    _initDefineProp(_this, 'horizontalScrolling', _descriptor13, _this);

                    _initDefineProp(_this, 'verticalScrolling', _descriptor14, _this);

                    _initDefineProp(_this, 'showCloseButton', _descriptor15, _this);

                    _initDefineProp(_this, 'resizable', _descriptor16, _this);

                    _initDefineProp(_this, 'beforeOpen', _descriptor17, _this);

                    _initDefineProp(_this, 'afterOpen', _descriptor18, _this);

                    _initDefineProp(_this, 'beforeClose', _descriptor19, _this);

                    _initDefineProp(_this, 'afterClose', _descriptor20, _this);

                    _initDefineProp(_this, 'busy', _descriptor21, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor22, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor23, _this);

                    _initDefineProp(_this, 'visible', _descriptor24, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor25, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor26, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor27, _this);

                    _initDefineProp(_this, 'validationError', _descriptor28, _this);

                    _initDefineProp(_this, 'parseError', _descriptor29, _this);

                    _initDefineProp(_this, 'formatError', _descriptor30, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor31, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5ResponsivePopover.prototype.fillProperties = function fillProperties(params) {
                    params.placement = this.placement;
                    params.showHeader = getBooleanFromAttributeValue(this.showHeader);
                    params.title = this.title;
                    params.icon = this.icon;
                    params.modal = getBooleanFromAttributeValue(this.modal);
                    params.offsetX = this.offsetX ? parseInt(this.offsetX) : 0;
                    params.offsetY = this.offsetY ? parseInt(this.offsetY) : 0;
                    params.showArrow = getBooleanFromAttributeValue(this.showArrow);
                    params.contentWidth = this.contentWidth;
                    params.contentHeight = this.contentHeight;
                    params.horizontalScrolling = getBooleanFromAttributeValue(this.horizontalScrolling);
                    params.verticalScrolling = getBooleanFromAttributeValue(this.verticalScrolling);
                    params.showCloseButton = getBooleanFromAttributeValue(this.showCloseButton);
                    params.resizable = getBooleanFromAttributeValue(this.resizable);
                    params.beforeOpen = this.beforeOpen == null ? this.defaultFunc : this.beforeOpen;
                    params.afterOpen = this.afterOpen == null ? this.defaultFunc : this.afterOpen;
                    params.beforeClose = this.beforeClose == null ? this.defaultFunc : this.beforeClose;
                    params.afterClose = this.afterClose == null ? this.defaultFunc : this.afterClose;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5ResponsivePopover.prototype.defaultFunc = function defaultFunc() {};

                Ui5ResponsivePopover.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._responsivepopover = new sap.m.ResponsivePopover(this.ui5Id, params);else this._responsivepopover = new sap.m.ResponsivePopover(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._responsivepopover.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._responsivepopover, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._responsivepopover, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._responsivepopover.placeAt) this._responsivepopover.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._responsivepopover.sId });
                };

                Ui5ResponsivePopover.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._responsivepopover) this._parent.removeChildByRelation(this._responsivepopover, this._relation);
                            }
                        } else {
                            this._responsivepopover.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5ResponsivePopover.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._responsivepopover.insertContent(child, _index);else this._responsivepopover.addContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'customheader') {
                                this._responsivepopover.setCustomHeader(child);return elem.localName;
                            }
                            if (elem.localName == 'subheader') {
                                this._responsivepopover.setSubHeader(child);return elem.localName;
                            }
                            if (elem.localName == 'beginbutton') {
                                this._responsivepopover.setBeginButton(child);return elem.localName;
                            }
                            if (elem.localName == 'endbutton') {
                                this._responsivepopover.setEndButton(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._responsivepopover.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._responsivepopover.insertCustomData(child, _index);else this._responsivepopover.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._responsivepopover.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._responsivepopover.insertDependent(child, _index);else this._responsivepopover.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5ResponsivePopover.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'content') {
                            this._responsivepopover.removeContent(child);
                        }
                        if (relation == 'customheader') {
                            this._responsivepopover.destroyCustomHeader(child);
                        }
                        if (relation == 'subheader') {
                            this._responsivepopover.destroySubHeader(child);
                        }
                        if (relation == 'beginbutton') {
                            this._responsivepopover.destroyBeginButton(child);
                        }
                        if (relation == 'endbutton') {
                            this._responsivepopover.destroyEndButton(child);
                        }
                        if (relation == 'tooltip') {
                            this._responsivepopover.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._responsivepopover.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._responsivepopover.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._responsivepopover.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5ResponsivePopover.prototype.placementChanged = function placementChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setPlacement(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setShowHeader(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setTitle(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setIcon(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.modalChanged = function modalChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setModal(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.offsetXChanged = function offsetXChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setOffsetX(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.offsetYChanged = function offsetYChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setOffsetY(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.showArrowChanged = function showArrowChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setShowArrow(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setContentWidth(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setContentHeight(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.horizontalScrollingChanged = function horizontalScrollingChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.verticalScrollingChanged = function verticalScrollingChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.showCloseButtonChanged = function showCloseButtonChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setShowCloseButton(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.resizableChanged = function resizableChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setResizable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.beforeOpenChanged = function beforeOpenChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachBeforeOpen(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.afterOpenChanged = function afterOpenChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachAfterOpen(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.beforeCloseChanged = function beforeCloseChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachBeforeClose(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.afterCloseChanged = function afterCloseChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachAfterClose(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ResponsivePopover.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.setFieldGroupIds(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachValidationSuccess(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachValidationError(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachParseError(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachFormatError(newValue);
                    }
                };

                Ui5ResponsivePopover.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._responsivepopover !== null) {
                        this._responsivepopover.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5ResponsivePopover, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._responsivepopover;
                    }
                }]);

                return Ui5ResponsivePopover;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'placement', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Right';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'modal', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'offsetX', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'offsetY', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showArrow', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'contentWidth', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'contentHeight', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'horizontalScrolling', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'verticalScrolling', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'showCloseButton', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'resizable', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpen', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'beforeClose', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'afterClose', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec32], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5ResponsivePopover', Ui5ResponsivePopover);
        }
    };
});
//# sourceMappingURL=../dist/dev/responsive-popover/responsive-popover.js.map
