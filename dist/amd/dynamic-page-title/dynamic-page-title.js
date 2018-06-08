define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5DynamicPageTitle = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15;

    var Ui5DynamicPageTitle = exports.Ui5DynamicPageTitle = (_dec = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-title'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaFramework.computedFrom)('_dynamicpagetitle'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5DynamicPageTitle, _Ui5Control);

        function Ui5DynamicPageTitle(element) {
            _classCallCheck(this, Ui5DynamicPageTitle);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._dynamicpagetitle = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'prevId', _descriptor2, _this);

            _initDefineProp(_this, 'areaShrinkRatio', _descriptor3, _this);

            _initDefineProp(_this, 'stateChange', _descriptor4, _this);

            _initDefineProp(_this, 'busy', _descriptor5, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor6, _this);

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor7, _this);

            _initDefineProp(_this, 'visible', _descriptor8, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor9, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor10, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor11, _this);

            _initDefineProp(_this, 'validationError', _descriptor12, _this);

            _initDefineProp(_this, 'parseError', _descriptor13, _this);

            _initDefineProp(_this, 'formatError', _descriptor14, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor15, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5DynamicPageTitle.prototype.fillProperties = function fillProperties(params) {
            params.areaShrinkRatio = this.areaShrinkRatio;
            params.stateChange = this.stateChange == null ? this.defaultFunc : this.stateChange;

            _Ui5Control.prototype.fillProperties.call(this, params);
        };

        Ui5DynamicPageTitle.prototype.defaultFunc = function defaultFunc() {};

        Ui5DynamicPageTitle.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._dynamicpagetitle = new sap.f.DynamicPageTitle(this.ui5Id, params);else this._dynamicpagetitle = new sap.f.DynamicPageTitle(params);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._dynamicpagetitle.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._dynamicpagetitle.placeAt) this._dynamicpagetitle.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._dynamicpagetitle.sId });
        };

        Ui5DynamicPageTitle.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._dynamicpagetitle) this._parent.removeChildByRelation(this._dynamicpagetitle, this._relation);
                    }
                } else {
                    this._dynamicpagetitle.destroy();
                }
                _Ui5Control.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5DynamicPageTitle.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'heading') {
                        this._dynamicpagetitle.setHeading(child);return elem.localName;
                    }
                    if (elem.localName == 'snappedheading') {
                        this._dynamicpagetitle.setSnappedHeading(child);return elem.localName;
                    }
                    if (elem.localName == 'expandedheading') {
                        this._dynamicpagetitle.setExpandedHeading(child);return elem.localName;
                    }
                    if (elem.localName == 'actions') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertAction(child, _index);else this._dynamicpagetitle.addAction(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'navigationactions') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertNavigationAction(child, _index);else this._dynamicpagetitle.addNavigationAction(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'content') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertContent(child, _index);else this._dynamicpagetitle.addContent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'snappedcontent') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertSnappedContent(child, _index);else this._dynamicpagetitle.addSnappedContent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'expandedcontent') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertExpandedContent(child, _index);else this._dynamicpagetitle.addExpandedContent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'breadcrumbs') {
                        this._dynamicpagetitle.setBreadcrumbs(child);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._dynamicpagetitle.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertCustomData(child, _index);else this._dynamicpagetitle.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._dynamicpagetitle.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._dynamicpagetitle.insertDependent(child, _index);else this._dynamicpagetitle.addDependent(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5DynamicPageTitle.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'heading') {
                    this._dynamicpagetitle.destroyHeading(child);
                }
                if (relation == 'snappedheading') {
                    this._dynamicpagetitle.destroySnappedHeading(child);
                }
                if (relation == 'expandedheading') {
                    this._dynamicpagetitle.destroyExpandedHeading(child);
                }
                if (relation == 'actions') {
                    this._dynamicpagetitle.removeAction(child);
                }
                if (relation == 'navigationactions') {
                    this._dynamicpagetitle.removeNavigationAction(child);
                }
                if (relation == 'content') {
                    this._dynamicpagetitle.removeContent(child);
                }
                if (relation == 'snappedcontent') {
                    this._dynamicpagetitle.removeSnappedContent(child);
                }
                if (relation == 'expandedcontent') {
                    this._dynamicpagetitle.removeExpandedContent(child);
                }
                if (relation == 'breadcrumbs') {
                    this._dynamicpagetitle.destroyBreadcrumbs(child);
                }
                if (relation == 'tooltip') {
                    this._dynamicpagetitle.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._dynamicpagetitle.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._dynamicpagetitle.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._dynamicpagetitle.removeDependent(child);
                }
            } catch (err) {}
        };

        Ui5DynamicPageTitle.prototype.areaShrinkRatioChanged = function areaShrinkRatioChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.setAreaShrinkRatio(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.stateChangeChanged = function stateChangeChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachStateChange(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.busyChanged = function busyChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPageTitle.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.setBusyIndicatorSize(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DynamicPageTitle.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.setFieldGroupIds(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachValidateFieldGroup(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachValidationSuccess(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachValidationError(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachParseError(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachFormatError(newValue);
            }
        };

        Ui5DynamicPageTitle.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._dynamicpagetitle !== null) {
                this._dynamicpagetitle.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5DynamicPageTitle, [{
            key: 'UIElement',
            get: function get() {
                return this._dynamicpagetitle;
            }
        }]);

        return Ui5DynamicPageTitle;
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
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'areaShrinkRatio', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return '1:1.6:1.6';
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'stateChange', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});