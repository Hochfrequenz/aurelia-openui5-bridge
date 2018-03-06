define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Shell = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24;

    var Ui5Shell = exports.Ui5Shell = (_dec = (0, _aureliaTemplating.customElement)('ui5-shell'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaFramework.computedFrom)('_shell'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
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

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor16, _this);

            _initDefineProp(_this, 'visible', _descriptor17, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor18, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor19, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor20, _this);

            _initDefineProp(_this, 'validationError', _descriptor21, _this);

            _initDefineProp(_this, 'parseError', _descriptor22, _this);

            _initDefineProp(_this, 'formatError', _descriptor23, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor24, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5Shell.prototype.fillProperties = function fillProperties(params) {
            params.title = this.title;
            params.logo = this.logo;
            params.showLogout = (0, _attributes.getBooleanFromAttributeValue)(this.showLogout);
            params.headerRightText = this.headerRightText;
            params.appWidthLimited = (0, _attributes.getBooleanFromAttributeValue)(this.appWidthLimited);
            params.backgroundColor = this.backgroundColor;
            params.backgroundImage = this.backgroundImage;
            params.backgroundRepeat = (0, _attributes.getBooleanFromAttributeValue)(this.backgroundRepeat);
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
                this._shell.setShowLogout((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Shell.prototype.headerRightTextChanged = function headerRightTextChanged(newValue) {
            if (this._shell !== null) {
                this._shell.setHeaderRightText(newValue);
            }
        };

        Ui5Shell.prototype.appWidthLimitedChanged = function appWidthLimitedChanged(newValue) {
            if (this._shell !== null) {
                this._shell.setAppWidthLimited((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
                this._shell.setBackgroundRepeat((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
                this._shell.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Shell.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._shell !== null) {
                this._shell.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5Shell.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._shell !== null) {
                this._shell.setBusyIndicatorSize(newValue);
            }
        };

        Ui5Shell.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._shell !== null) {
                this._shell.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});