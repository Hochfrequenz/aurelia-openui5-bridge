define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5DynamicPage = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18;

    var Ui5DynamicPage = exports.Ui5DynamicPage = (_dec = (0, _aureliaTemplating.customElement)('ui5-dynamic-page'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaFramework.computedFrom)('_dynamicpage'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5DynamicPage, _Ui5Control);

        function Ui5DynamicPage(element) {
            _classCallCheck(this, Ui5DynamicPage);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._dynamicpage = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'prevId', _descriptor2, _this);

            _initDefineProp(_this, 'preserveHeaderStateOnScroll', _descriptor3, _this);

            _initDefineProp(_this, 'headerExpanded', _descriptor4, _this);

            _initDefineProp(_this, 'toggleHeaderOnTitleClick', _descriptor5, _this);

            _initDefineProp(_this, 'showFooter', _descriptor6, _this);

            _initDefineProp(_this, 'fitContent', _descriptor7, _this);

            _initDefineProp(_this, 'busy', _descriptor8, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor9, _this);

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor10, _this);

            _initDefineProp(_this, 'visible', _descriptor11, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor12, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor13, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor14, _this);

            _initDefineProp(_this, 'validationError', _descriptor15, _this);

            _initDefineProp(_this, 'parseError', _descriptor16, _this);

            _initDefineProp(_this, 'formatError', _descriptor17, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor18, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5DynamicPage.prototype.fillProperties = function fillProperties(params) {
            params.preserveHeaderStateOnScroll = (0, _attributes.getBooleanFromAttributeValue)(this.preserveHeaderStateOnScroll);
            params.headerExpanded = (0, _attributes.getBooleanFromAttributeValue)(this.headerExpanded);
            params.toggleHeaderOnTitleClick = (0, _attributes.getBooleanFromAttributeValue)(this.toggleHeaderOnTitleClick);
            params.showFooter = (0, _attributes.getBooleanFromAttributeValue)(this.showFooter);
            params.fitContent = (0, _attributes.getBooleanFromAttributeValue)(this.fitContent);

            _Ui5Control.prototype.fillProperties.call(this, params);
        };

        Ui5DynamicPage.prototype.defaultFunc = function defaultFunc() {};

        Ui5DynamicPage.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._dynamicpage = new sap.f.DynamicPage(this.ui5Id, params);else this._dynamicpage = new sap.f.DynamicPage(params);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._dynamicpage.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._dynamicpage, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._dynamicpage, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._dynamicpage.placeAt) this._dynamicpage.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._dynamicpage.sId });
        };

        Ui5DynamicPage.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._dynamicpage) this._parent.removeChildByRelation(this._dynamicpage, this._relation);
                    }
                } else {
                    this._dynamicpage.destroy();
                }
                _Ui5Control.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5DynamicPage.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'title-elem') {
                        this._dynamicpage.setTitle(child);return elem.localName;
                    }
                    if (elem.localName == 'header') {
                        this._dynamicpage.setHeader(child);return elem.localName;
                    }
                    if (elem.localName == 'content') {
                        this._dynamicpage.setContent(child);return elem.localName;
                    }
                    if (elem.localName == 'footer') {
                        this._dynamicpage.setFooter(child);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._dynamicpage.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpage.insertCustomData(child, _index);else this._dynamicpage.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._dynamicpage.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpage.insertDependent(child, _index);else this._dynamicpage.addDependent(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5DynamicPage.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'title-elem') {
                    this._dynamicpage.destroyTitle(child);
                }
                if (relation == 'header') {
                    this._dynamicpage.destroyHeader(child);
                }
                if (relation == 'content') {
                    this._dynamicpage.destroyContent(child);
                }
                if (relation == 'footer') {
                    this._dynamicpage.destroyFooter(child);
                }
                if (relation == 'tooltip') {
                    this._dynamicpage.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._dynamicpage.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._dynamicpage.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._dynamicpage.removeDependent(child);
                }
            } catch (err) {}
        };

        Ui5DynamicPage.prototype.preserveHeaderStateOnScrollChanged = function preserveHeaderStateOnScrollChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setPreserveHeaderStateOnScroll((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.headerExpandedChanged = function headerExpandedChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setHeaderExpanded((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.toggleHeaderOnTitleClickChanged = function toggleHeaderOnTitleClickChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setToggleHeaderOnTitleClick((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.showFooterChanged = function showFooterChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setShowFooter((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.fitContentChanged = function fitContentChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setFitContent((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.busyChanged = function busyChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5DynamicPage.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setBusyIndicatorSize(newValue);
            }
        };

        Ui5DynamicPage.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPage.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.setFieldGroupIds(newValue);
            }
        };

        Ui5DynamicPage.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.attachValidateFieldGroup(newValue);
            }
        };

        Ui5DynamicPage.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.attachValidationSuccess(newValue);
            }
        };

        Ui5DynamicPage.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.attachValidationError(newValue);
            }
        };

        Ui5DynamicPage.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.attachParseError(newValue);
            }
        };

        Ui5DynamicPage.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.attachFormatError(newValue);
            }
        };

        Ui5DynamicPage.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._dynamicpage !== null) {
                this._dynamicpage.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5DynamicPage, [{
            key: 'UIElement',
            get: function get() {
                return this._dynamicpage;
            }
        }]);

        return Ui5DynamicPage;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'preserveHeaderStateOnScroll', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'headerExpanded', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'toggleHeaderOnTitleClick', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'fitContent', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});