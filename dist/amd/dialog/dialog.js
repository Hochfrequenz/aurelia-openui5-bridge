define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Dialog = undefined;

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

    var _createClass = function () {
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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29;

    var Ui5Dialog = exports.Ui5Dialog = (_dec = (0, _aureliaTemplating.customElement)('ui5-dialog'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaFramework.computedFrom)('_dialog'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5Dialog, _Ui5Control);

        function Ui5Dialog(element) {
            _classCallCheck(this, Ui5Dialog);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._dialog = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'icon', _descriptor2, _this);

            _initDefineProp(_this, 'title', _descriptor3, _this);

            _initDefineProp(_this, 'showHeader', _descriptor4, _this);

            _initDefineProp(_this, 'type', _descriptor5, _this);

            _initDefineProp(_this, 'state', _descriptor6, _this);

            _initDefineProp(_this, 'stretch', _descriptor7, _this);

            _initDefineProp(_this, 'contentWidth', _descriptor8, _this);

            _initDefineProp(_this, 'contentHeight', _descriptor9, _this);

            _initDefineProp(_this, 'horizontalScrolling', _descriptor10, _this);

            _initDefineProp(_this, 'verticalScrolling', _descriptor11, _this);

            _initDefineProp(_this, 'resizable', _descriptor12, _this);

            _initDefineProp(_this, 'draggable', _descriptor13, _this);

            _initDefineProp(_this, 'escapeHandler', _descriptor14, _this);

            _initDefineProp(_this, 'beforeOpen', _descriptor15, _this);

            _initDefineProp(_this, 'afterOpen', _descriptor16, _this);

            _initDefineProp(_this, 'beforeClose', _descriptor17, _this);

            _initDefineProp(_this, 'afterClose', _descriptor18, _this);

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
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5Dialog.prototype.fillProperties = function fillProperties(params) {
            params.icon = this.icon;
            params.title = this.title;
            params.showHeader = (0, _attributes.getBooleanFromAttributeValue)(this.showHeader);
            params.type = this.type;
            params.state = this.state;
            params.stretch = (0, _attributes.getBooleanFromAttributeValue)(this.stretch);
            params.contentWidth = this.contentWidth;
            params.contentHeight = this.contentHeight;
            params.horizontalScrolling = (0, _attributes.getBooleanFromAttributeValue)(this.horizontalScrolling);
            params.verticalScrolling = (0, _attributes.getBooleanFromAttributeValue)(this.verticalScrolling);
            params.resizable = (0, _attributes.getBooleanFromAttributeValue)(this.resizable);
            params.draggable = (0, _attributes.getBooleanFromAttributeValue)(this.draggable);
            params.escapeHandler = this.escapeHandler;
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

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._dialog.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._dialog, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._dialog, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._dialog, this.element);
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
                        this._parent.removeChildByRelation(this._dialog, this._relation);
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
                        var _index = null;if (afterElement) _index = this._dialog.indexOfContent(afterElement);if (_index) this._dialog.insertContent(child, _index + 1);else this._dialog.addContent(child, 0);return elem.localName;
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
                        var _index = null;if (afterElement) _index = this._dialog.indexOfButton(afterElement);if (_index) this._dialog.insertButton(child, _index + 1);else this._dialog.addButton(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._dialog.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = null;if (afterElement) _index = this._dialog.indexOfCustomData(afterElement);if (_index) this._dialog.insertCustomData(child, _index + 1);else this._dialog.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._dialog.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = null;if (afterElement) _index = this._dialog.indexOfDependent(afterElement);if (_index) this._dialog.insertDependent(child, _index + 1);else this._dialog.addDependent(child, 0);return elem.localName;
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
            } catch (err) {}
        };

        Ui5Dialog.prototype.iconChanged = function iconChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setIcon(newValue);
            }
        };

        Ui5Dialog.prototype.titleChanged = function titleChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setTitle(newValue);
            }
        };

        Ui5Dialog.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setShowHeader((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.typeChanged = function typeChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setType(newValue);
            }
        };

        Ui5Dialog.prototype.stateChanged = function stateChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setState(newValue);
            }
        };

        Ui5Dialog.prototype.stretchChanged = function stretchChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setStretch((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setContentWidth(newValue);
            }
        };

        Ui5Dialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setContentHeight(newValue);
            }
        };

        Ui5Dialog.prototype.horizontalScrollingChanged = function horizontalScrollingChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setHorizontalScrolling((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.verticalScrollingChanged = function verticalScrollingChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setVerticalScrolling((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.resizableChanged = function resizableChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setResizable((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.draggableChanged = function draggableChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setDraggable((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.escapeHandlerChanged = function escapeHandlerChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setEscapeHandler(newValue);
            }
        };

        Ui5Dialog.prototype.beforeOpenChanged = function beforeOpenChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachBeforeOpen(newValue);
            }
        };

        Ui5Dialog.prototype.afterOpenChanged = function afterOpenChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachAfterOpen(newValue);
            }
        };

        Ui5Dialog.prototype.beforeCloseChanged = function beforeCloseChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachBeforeClose(newValue);
            }
        };

        Ui5Dialog.prototype.afterCloseChanged = function afterCloseChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachAfterClose(newValue);
            }
        };

        Ui5Dialog.prototype.busyChanged = function busyChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
                this._dialog.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Dialog.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.setFieldGroupIds(newValue);
            }
        };

        Ui5Dialog.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachValidateFieldGroup(newValue);
            }
        };

        Ui5Dialog.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachValidationSuccess(newValue);
            }
        };

        Ui5Dialog.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachValidationError(newValue);
            }
        };

        Ui5Dialog.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachParseError(newValue);
            }
        };

        Ui5Dialog.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._dialog !== null) {
                this._dialog.attachFormatError(newValue);
            }
        };

        Ui5Dialog.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._dialog !== null) {
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
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return 'Standard';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return 'None';
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'stretch', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'contentWidth', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'contentHeight', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'horizontalScrolling', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'verticalScrolling', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'resizable', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'draggable', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'escapeHandler', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpen', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'beforeClose', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'afterClose', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec30], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec31], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});