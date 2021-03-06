define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Link = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;

    var Ui5Link = exports.Ui5Link = (_dec = (0, _aureliaTemplating.customElement)('ui5-link'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaFramework.computedFrom)('_link'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5Link, _Ui5Control);

        function Ui5Link(element) {
            _classCallCheck(this, Ui5Link);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._link = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

            _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

            _initDefineProp(_this, 'prevId', _descriptor4, _this);

            _initDefineProp(_this, 'text', _descriptor5, _this);

            _initDefineProp(_this, 'enabled', _descriptor6, _this);

            _initDefineProp(_this, 'target', _descriptor7, _this);

            _initDefineProp(_this, 'width', _descriptor8, _this);

            _initDefineProp(_this, 'href', _descriptor9, _this);

            _initDefineProp(_this, 'validateUrl', _descriptor10, _this);

            _initDefineProp(_this, 'wrapping', _descriptor11, _this);

            _initDefineProp(_this, 'textAlign', _descriptor12, _this);

            _initDefineProp(_this, 'textDirection', _descriptor13, _this);

            _initDefineProp(_this, 'subtle', _descriptor14, _this);

            _initDefineProp(_this, 'emphasized', _descriptor15, _this);

            _initDefineProp(_this, 'press', _descriptor16, _this);

            _initDefineProp(_this, 'busy', _descriptor17, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor18, _this);

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor19, _this);

            _initDefineProp(_this, 'visible', _descriptor20, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor21, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor22, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor23, _this);

            _initDefineProp(_this, 'validationError', _descriptor24, _this);

            _initDefineProp(_this, 'parseError', _descriptor25, _this);

            _initDefineProp(_this, 'formatError', _descriptor26, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor27, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5Link.prototype.fillProperties = function fillProperties(params) {
            params.text = this.text;
            params.enabled = (0, _attributes.getBooleanFromAttributeValue)(this.enabled);
            params.target = this.target;
            params.width = this.width;
            params.href = this.href;
            params.validateUrl = (0, _attributes.getBooleanFromAttributeValue)(this.validateUrl);
            params.wrapping = (0, _attributes.getBooleanFromAttributeValue)(this.wrapping);
            params.textAlign = this.textAlign;
            params.textDirection = this.textDirection;
            params.subtle = (0, _attributes.getBooleanFromAttributeValue)(this.subtle);
            params.emphasized = (0, _attributes.getBooleanFromAttributeValue)(this.emphasized);
            params.press = this.press == null ? this.defaultFunc : this.press;

            _Ui5Control.prototype.fillProperties.call(this, params);
        };

        Ui5Link.prototype.defaultFunc = function defaultFunc() {};

        Ui5Link.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._link = new sap.m.Link(this.ui5Id, params);else this._link = new sap.m.Link(params);
            if (this.ui5Class) this._link.addStyleClass(this.ui5Class);
            if (this.ui5Tooltip) this._link.setTooltip(this.ui5Tooltip);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._link.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._link, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._link, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._link.placeAt) this._link.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._link.sId });
        };

        Ui5Link.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._link) this._parent.removeChildByRelation(this._link, this._relation);
                    }
                } else {
                    this._link.destroy();
                }
                _Ui5Control.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5Link.prototype.addChild = function addChild(child, elem, afterElement) {
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
                        this._link.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._link.insertCustomData(child, _index);else this._link.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._link.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._link.insertDependent(child, _index);else this._link.addDependent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'dragdropconfig') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._link.insertDragDropConfig(child, _index);else this._link.addDragDropConfig(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5Link.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'tooltip') {
                    this._link.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._link.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._link.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._link.removeDependent(child);
                }
                if (relation == 'dragdropconfig') {
                    this._link.removeDragDropConfig(child);
                }
            } catch (err) {}
        };

        Ui5Link.prototype.textChanged = function textChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setText(newValue);
            }
        };

        Ui5Link.prototype.enabledChanged = function enabledChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.targetChanged = function targetChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setTarget(newValue);
            }
        };

        Ui5Link.prototype.widthChanged = function widthChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setWidth(newValue);
            }
        };

        Ui5Link.prototype.hrefChanged = function hrefChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setHref(newValue);
            }
        };

        Ui5Link.prototype.validateUrlChanged = function validateUrlChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setValidateUrl((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.wrappingChanged = function wrappingChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setWrapping((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.textAlignChanged = function textAlignChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setTextAlign(newValue);
            }
        };

        Ui5Link.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setTextDirection(newValue);
            }
        };

        Ui5Link.prototype.subtleChanged = function subtleChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setSubtle((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.setEmphasized((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.pressChanged = function pressChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachPress(newValue);
            }
        };

        Ui5Link.prototype.busyChanged = function busyChanged(newValue) {
            if (this._link !== null) {
                this._link.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._link !== null) {
                this._link.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5Link.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._link !== null) {
                this._link.setBusyIndicatorSize(newValue);
            }
        };

        Ui5Link.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._link !== null) {
                this._link.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Link.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._link !== null) {
                this._link.setFieldGroupIds(newValue);
            }
        };

        Ui5Link.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachValidateFieldGroup(newValue);
            }
        };

        Ui5Link.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachValidationSuccess(newValue);
            }
        };

        Ui5Link.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachValidationError(newValue);
            }
        };

        Ui5Link.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachParseError(newValue);
            }
        };

        Ui5Link.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachFormatError(newValue);
            }
        };

        Ui5Link.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._link !== null) {
                this._link.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5Link, [{
            key: 'UIElement',
            get: function get() {
                return this._link;
            }
        }]);

        return Ui5Link;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'target', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'href', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'validateUrl', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 'Initial';
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return 'Inherit';
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'subtle', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});