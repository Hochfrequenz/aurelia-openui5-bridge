'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, Ui5Dialog;

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

            _export('Ui5Dialog', Ui5Dialog = (_dec = customElement('ui5-dialog'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = computedFrom('_dialog'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Dialog, _Ui5Control);

                function Ui5Dialog(element) {
                    _classCallCheck(this, Ui5Dialog);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._dialog = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'icon', _descriptor5, _this);

                    _initDefineProp(_this, 'title', _descriptor6, _this);

                    _initDefineProp(_this, 'showHeader', _descriptor7, _this);

                    _initDefineProp(_this, 'type', _descriptor8, _this);

                    _initDefineProp(_this, 'state', _descriptor9, _this);

                    _initDefineProp(_this, 'stretch', _descriptor10, _this);

                    _initDefineProp(_this, 'contentWidth', _descriptor11, _this);

                    _initDefineProp(_this, 'contentHeight', _descriptor12, _this);

                    _initDefineProp(_this, 'horizontalScrolling', _descriptor13, _this);

                    _initDefineProp(_this, 'verticalScrolling', _descriptor14, _this);

                    _initDefineProp(_this, 'resizable', _descriptor15, _this);

                    _initDefineProp(_this, 'draggable', _descriptor16, _this);

                    _initDefineProp(_this, 'escapeHandler', _descriptor17, _this);

                    _initDefineProp(_this, 'closeOnNavigation', _descriptor18, _this);

                    _initDefineProp(_this, 'titleAlignment', _descriptor19, _this);

                    _initDefineProp(_this, 'beforeOpen', _descriptor20, _this);

                    _initDefineProp(_this, 'afterOpen', _descriptor21, _this);

                    _initDefineProp(_this, 'beforeClose', _descriptor22, _this);

                    _initDefineProp(_this, 'afterClose', _descriptor23, _this);

                    _initDefineProp(_this, 'busy', _descriptor24, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor25, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor26, _this);

                    _initDefineProp(_this, 'visible', _descriptor27, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor28, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor29, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor30, _this);

                    _initDefineProp(_this, 'validationError', _descriptor31, _this);

                    _initDefineProp(_this, 'parseError', _descriptor32, _this);

                    _initDefineProp(_this, 'formatError', _descriptor33, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor34, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Dialog.prototype.fillProperties = function fillProperties(params) {
                    params.icon = this.icon;
                    params.title = this.title;
                    params.showHeader = getBooleanFromAttributeValue(this.showHeader);
                    params.type = this.type;
                    params.state = this.state;
                    params.stretch = getBooleanFromAttributeValue(this.stretch);
                    params.contentWidth = this.contentWidth;
                    params.contentHeight = this.contentHeight;
                    params.horizontalScrolling = getBooleanFromAttributeValue(this.horizontalScrolling);
                    params.verticalScrolling = getBooleanFromAttributeValue(this.verticalScrolling);
                    params.resizable = getBooleanFromAttributeValue(this.resizable);
                    params.draggable = getBooleanFromAttributeValue(this.draggable);
                    params.escapeHandler = this.escapeHandler;
                    params.closeOnNavigation = getBooleanFromAttributeValue(this.closeOnNavigation);
                    params.titleAlignment = this.titleAlignment;
                    params.beforeOpen = this.beforeOpen == null ? this.defaultFunc : this.beforeOpen;
                    params.afterOpen = this.afterOpen == null ? this.defaultFunc : this.afterOpen;
                    params.beforeClose = this.beforeClose == null ? this.defaultFunc : this.beforeClose;
                    params.afterClose = this.afterClose == null ? this.defaultFunc : this.afterClose;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5Dialog.prototype.defaultFunc = function defaultFunc() {};

                Ui5Dialog.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._dialog = new sap.m.Dialog(this.ui5Id, params);else this._dialog = new sap.m.Dialog(params);
                    if (this.ui5Class) this._dialog.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._dialog.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._dialog.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._dialog, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._dialog, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._dialog.placeAt) this._dialog.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._dialog.sId });
                };

                Ui5Dialog.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._dialog) this._parent.removeChildByRelation(this._dialog, this._relation);
                            }
                        } else {
                            this._dialog.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Dialog.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dialog.insertContent(child, _index);else this._dialog.addContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'subheader') {
                                this._dialog.setSubHeader(child);return elem.localName;
                            }
                            if (elem.localName == 'customheader') {
                                this._dialog.setCustomHeader(child);return elem.localName;
                            }
                            if (elem.localName == 'beginbutton') {
                                this._dialog.setBeginButton(child);return elem.localName;
                            }
                            if (elem.localName == 'endbutton') {
                                this._dialog.setEndButton(child);return elem.localName;
                            }
                            if (elem.localName == 'buttons') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dialog.insertButton(child, _index);else this._dialog.addButton(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._dialog.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dialog.insertCustomData(child, _index);else this._dialog.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._dialog.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dialog.insertDependent(child, _index);else this._dialog.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dialog.insertDragDropConfig(child, _index);else this._dialog.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Dialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'content') {
                            this._dialog.removeContent(child);
                        }
                        if (relation == 'subheader') {
                            this._dialog.destroySubHeader(child);
                        }
                        if (relation == 'customheader') {
                            this._dialog.destroyCustomHeader(child);
                        }
                        if (relation == 'beginbutton') {
                            this._dialog.destroyBeginButton(child);
                        }
                        if (relation == 'endbutton') {
                            this._dialog.destroyEndButton(child);
                        }
                        if (relation == 'buttons') {
                            this._dialog.removeButton(child);
                        }
                        if (relation == 'tooltip') {
                            this._dialog.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._dialog.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._dialog.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._dialog.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._dialog.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5Dialog.prototype.iconChanged = function iconChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setIcon(newValue);
                    }
                };

                Ui5Dialog.prototype.titleChanged = function titleChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setTitle(newValue);
                    }
                };

                Ui5Dialog.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.typeChanged = function typeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setType(newValue);
                    }
                };

                Ui5Dialog.prototype.stateChanged = function stateChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setState(newValue);
                    }
                };

                Ui5Dialog.prototype.stretchChanged = function stretchChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setStretch(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setContentWidth(newValue);
                    }
                };

                Ui5Dialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setContentHeight(newValue);
                    }
                };

                Ui5Dialog.prototype.horizontalScrollingChanged = function horizontalScrollingChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.verticalScrollingChanged = function verticalScrollingChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.resizableChanged = function resizableChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.draggableChanged = function draggableChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setDraggable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.escapeHandlerChanged = function escapeHandlerChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setEscapeHandler(newValue);
                    }
                };

                Ui5Dialog.prototype.closeOnNavigationChanged = function closeOnNavigationChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setCloseOnNavigation(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.titleAlignmentChanged = function titleAlignmentChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.setTitleAlignment(newValue);
                    }
                };

                Ui5Dialog.prototype.beforeOpenChanged = function beforeOpenChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachBeforeOpen(newValue);
                    }
                };

                Ui5Dialog.prototype.afterOpenChanged = function afterOpenChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachAfterOpen(newValue);
                    }
                };

                Ui5Dialog.prototype.beforeCloseChanged = function beforeCloseChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachBeforeClose(newValue);
                    }
                };

                Ui5Dialog.prototype.afterCloseChanged = function afterCloseChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachAfterClose(newValue);
                    }
                };

                Ui5Dialog.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._dialog !== null) {
                        this._dialog.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._dialog !== null) {
                        this._dialog.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Dialog.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._dialog !== null) {
                        this._dialog.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5Dialog.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._dialog !== null) {
                        this._dialog.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Dialog.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._dialog !== null) {
                        this._dialog.setFieldGroupIds(newValue);
                    }
                };

                Ui5Dialog.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Dialog.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachValidationSuccess(newValue);
                    }
                };

                Ui5Dialog.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachValidationError(newValue);
                    }
                };

                Ui5Dialog.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachParseError(newValue);
                    }
                };

                Ui5Dialog.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachFormatError(newValue);
                    }
                };

                Ui5Dialog.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._dialog !== null) {
                        this._dialog.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Dialog, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._dialog;
                    }
                }]);

                return Ui5Dialog;
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Standard';
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'stretch', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'contentWidth', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'contentHeight', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'horizontalScrolling', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'verticalScrolling', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'resizable', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'draggable', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'escapeHandler', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'closeOnNavigation', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'titleAlignment', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Auto';
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpen', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'beforeClose', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'afterClose', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec32], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec33], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Dialog', Ui5Dialog);
        }
    };
});
//# sourceMappingURL=../dist/dev/dialog/dialog.js.map
