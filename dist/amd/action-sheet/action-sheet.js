define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5ActionSheet = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

    var Ui5ActionSheet = exports.Ui5ActionSheet = (_dec = (0, _aureliaTemplating.customElement)('ui5-action-sheet'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaFramework.computedFrom)('_actionsheet'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5ActionSheet, _Ui5Control);

        function Ui5ActionSheet(element) {
            _classCallCheck(this, Ui5ActionSheet);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._actionsheet = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'placement', _descriptor2, _this);

            _initDefineProp(_this, 'showCancelButton', _descriptor3, _this);

            _initDefineProp(_this, 'cancelButtonText', _descriptor4, _this);

            _initDefineProp(_this, 'title', _descriptor5, _this);

            _initDefineProp(_this, 'cancelButtonTap', _descriptor6, _this);

            _initDefineProp(_this, 'beforeOpen', _descriptor7, _this);

            _initDefineProp(_this, 'afterOpen', _descriptor8, _this);

            _initDefineProp(_this, 'beforeClose', _descriptor9, _this);

            _initDefineProp(_this, 'afterClose', _descriptor10, _this);

            _initDefineProp(_this, 'cancelButtonPress', _descriptor11, _this);

            _initDefineProp(_this, 'busy', _descriptor12, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor13, _this);

            _initDefineProp(_this, 'visible', _descriptor14, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor15, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor16, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5ActionSheet.prototype.fillProperties = function fillProperties(params) {
            params.placement = this.placement;
            params.showCancelButton = (0, _attributes.getBooleanFromAttributeValue)(this.showCancelButton);
            params.cancelButtonText = this.cancelButtonText;
            params.title = this.title;
        };

        Ui5ActionSheet.prototype.defaultFunc = function defaultFunc() {};

        Ui5ActionSheet.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            _Ui5Control.prototype.fillProperties.call(this, params);
            if (this.ui5Id) this._actionsheet = new sap.m.ActionSheet(this.ui5Id, params);else this._actionsheet = new sap.m.ActionSheet(params);
            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._actionsheet.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._actionsheet, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._actionsheet, this.element);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._actionsheet.placeAt) this._actionsheet.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._actionsheet.sId });
        };

        Ui5ActionSheet.prototype.detached = function detached() {
            if (this._parent && this._relation) {
                this._parent.removeChildByRelation(this._actionsheet, this._relation);
            } else {
                this._actionsheet.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        };

        Ui5ActionSheet.prototype.addChild = function addChild(child, elem, afterElement) {
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

                if (elem.localName == 'buttons') {
                    var _index = null;if (afterElement) _index = this._actionsheet.indexOfButton(afterElement);if (_index) this._actionsheet.insertButton(child, _index + 1);else this._actionsheet.addButton(child, 0);return elem.localName;
                }
            }
        };

        Ui5ActionSheet.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            if (relation == 'buttons') {
                this._actionsheet.removeButton(child);
            }
        };

        Ui5ActionSheet.prototype.placementChanged = function placementChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setPlacement(newValue);
            }
        };

        Ui5ActionSheet.prototype.showCancelButtonChanged = function showCancelButtonChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setShowCancelButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ActionSheet.prototype.cancelButtonTextChanged = function cancelButtonTextChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setCancelButtonText(newValue);
            }
        };

        Ui5ActionSheet.prototype.titleChanged = function titleChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setTitle(newValue);
            }
        };

        Ui5ActionSheet.prototype.cancelButtonTapChanged = function cancelButtonTapChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachCancelButtonTap(newValue);
            }
        };

        Ui5ActionSheet.prototype.beforeOpenChanged = function beforeOpenChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachBeforeOpen(newValue);
            }
        };

        Ui5ActionSheet.prototype.afterOpenChanged = function afterOpenChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachAfterOpen(newValue);
            }
        };

        Ui5ActionSheet.prototype.beforeCloseChanged = function beforeCloseChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachBeforeClose(newValue);
            }
        };

        Ui5ActionSheet.prototype.afterCloseChanged = function afterCloseChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachAfterClose(newValue);
            }
        };

        Ui5ActionSheet.prototype.cancelButtonPressChanged = function cancelButtonPressChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachCancelButtonPress(newValue);
            }
        };

        Ui5ActionSheet.prototype.busyChanged = function busyChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ActionSheet.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5ActionSheet.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ActionSheet.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.setFieldGroupIds(newValue);
            }
        };

        Ui5ActionSheet.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._actionsheet !== null) {
                this._actionsheet.attachValidateFieldGroup(newValue);
            }
        };

        _createClass(Ui5ActionSheet, [{
            key: 'UIElement',
            get: function get() {
                return this._actionsheet;
            }
        }]);

        return Ui5ActionSheet;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'placement', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return 'Bottom';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showCancelButton', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'cancelButtonText', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'cancelButtonTap', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpen', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'beforeClose', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'afterClose', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'cancelButtonPress', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});