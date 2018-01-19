define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Select = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;

    var Ui5Select = exports.Ui5Select = (_dec = (0, _aureliaTemplating.customElement)('ui5-select'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaFramework.computedFrom)('_select'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5Select, _Ui5Control);

        function Ui5Select(element) {
            _classCallCheck(this, Ui5Select);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._select = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'name', _descriptor2, _this);

            _initDefineProp(_this, 'enabled', _descriptor3, _this);

            _initDefineProp(_this, 'width', _descriptor4, _this);

            _initDefineProp(_this, 'maxWidth', _descriptor5, _this);

            _initDefineProp(_this, 'selectedKey', _descriptor6, _this);

            _initDefineProp(_this, 'selectedItemId', _descriptor7, _this);

            _initDefineProp(_this, 'icon', _descriptor8, _this);

            _initDefineProp(_this, 'type', _descriptor9, _this);

            _initDefineProp(_this, 'autoAdjustWidth', _descriptor10, _this);

            _initDefineProp(_this, 'textAlign', _descriptor11, _this);

            _initDefineProp(_this, 'textDirection', _descriptor12, _this);

            _initDefineProp(_this, 'valueState', _descriptor13, _this);

            _initDefineProp(_this, 'valueStateText', _descriptor14, _this);

            _initDefineProp(_this, 'showSecondaryValues', _descriptor15, _this);

            _initDefineProp(_this, 'forceSelection', _descriptor16, _this);

            _initDefineProp(_this, 'change', _descriptor17, _this);

            _initDefineProp(_this, 'busy', _descriptor18, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor19, _this);

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

        Ui5Select.prototype.fillProperties = function fillProperties(params) {
            params.name = this.name;
            params.enabled = (0, _attributes.getBooleanFromAttributeValue)(this.enabled);
            params.width = this.width;
            params.maxWidth = this.maxWidth;
            params.selectedKey = this.selectedKey;
            params.selectedItemId = this.selectedItemId;
            params.icon = this.icon;
            params.type = this.type;
            params.autoAdjustWidth = (0, _attributes.getBooleanFromAttributeValue)(this.autoAdjustWidth);
            params.textAlign = this.textAlign;
            params.textDirection = this.textDirection;
            params.valueState = this.valueState;
            params.valueStateText = this.valueStateText;
            params.showSecondaryValues = (0, _attributes.getBooleanFromAttributeValue)(this.showSecondaryValues);
            params.forceSelection = (0, _attributes.getBooleanFromAttributeValue)(this.forceSelection);
            params.change = this.change == null ? this.defaultFunc : this.change;
        };

        Ui5Select.prototype.defaultFunc = function defaultFunc() {};

        Ui5Select.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            _Ui5Control.prototype.fillProperties.call(this, params);
            if (this.ui5Id) this._select = new sap.m.Select(this.ui5Id, params);else this._select = new sap.m.Select(params);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._select.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._select, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._select, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._select, this.element);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._select.placeAt) this._select.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }
            this._select.attachChange(function (event) {
                that.selectedItem = event.mParameters.selectedItem;if (event.mParameters.selectedItem) that.selectedKey = event.mParameters.selectedItem.mProperties.key;else that.selectedKey = null;;
            });

            this.attributeManager.addAttributes({ "ui5-id": this._select.sId });
        };

        Ui5Select.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._select, this._relation);
                    }
                } else {
                    this._select.destroy();
                }
                _Ui5Control.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5Select.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'items') {
                        var _index = null;if (afterElement) _index = this._select.indexOfItem(afterElement);if (_index) this._select.insertItem(child, _index + 1);else this._select.addItem(child, 0);var oldVal = this.selectedKey;this.selectedKey = null;this.selectedKey = oldVal;return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._select.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = null;if (afterElement) _index = this._select.indexOfCustomData(afterElement);if (_index) this._select.insertCustomData(child, _index + 1);else this._select.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._select.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = null;if (afterElement) _index = this._select.indexOfDependent(afterElement);if (_index) this._select.insertDependent(child, _index + 1);else this._select.addDependent(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5Select.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'items') {
                    this._select.removeItem(child);var oldVal = this.selectedKey;this.selectedKey = null;this.selectedKey = oldVal;
                }
                if (relation == 'tooltip') {
                    this._select.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._select.removeCustomData(child);
                }
                if (relation == 'layoutData') {
                    this._select.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._select.removeDependent(child);
                }
            } catch (err) {}
        };

        Ui5Select.prototype.nameChanged = function nameChanged(newValue) {
            if (this._select !== null) {
                this._select.setName(newValue);
            }
        };

        Ui5Select.prototype.enabledChanged = function enabledChanged(newValue) {
            if (this._select !== null) {
                this._select.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Select.prototype.widthChanged = function widthChanged(newValue) {
            if (this._select !== null) {
                this._select.setWidth(newValue);
            }
        };

        Ui5Select.prototype.maxWidthChanged = function maxWidthChanged(newValue) {
            if (this._select !== null) {
                this._select.setMaxWidth(newValue);
            }
        };

        Ui5Select.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
            if (this._select !== null) {
                this._select.setSelectedKey(newValue);
            }
        };

        Ui5Select.prototype.selectedItemIdChanged = function selectedItemIdChanged(newValue) {
            if (this._select !== null) {
                this._select.setSelectedItemId(newValue);
            }
        };

        Ui5Select.prototype.iconChanged = function iconChanged(newValue) {
            if (this._select !== null) {
                this._select.setIcon(newValue);
            }
        };

        Ui5Select.prototype.typeChanged = function typeChanged(newValue) {
            if (this._select !== null) {
                this._select.setType(newValue);
            }
        };

        Ui5Select.prototype.autoAdjustWidthChanged = function autoAdjustWidthChanged(newValue) {
            if (this._select !== null) {
                this._select.setAutoAdjustWidth((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Select.prototype.textAlignChanged = function textAlignChanged(newValue) {
            if (this._select !== null) {
                this._select.setTextAlign(newValue);
            }
        };

        Ui5Select.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
            if (this._select !== null) {
                this._select.setTextDirection(newValue);
            }
        };

        Ui5Select.prototype.valueStateChanged = function valueStateChanged(newValue) {
            if (this._select !== null) {
                this._select.setValueState(newValue);
            }
        };

        Ui5Select.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
            if (this._select !== null) {
                this._select.setValueStateText(newValue);
            }
        };

        Ui5Select.prototype.showSecondaryValuesChanged = function showSecondaryValuesChanged(newValue) {
            if (this._select !== null) {
                this._select.setShowSecondaryValues((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Select.prototype.forceSelectionChanged = function forceSelectionChanged(newValue) {
            if (this._select !== null) {
                this._select.setForceSelection((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Select.prototype.changeChanged = function changeChanged(newValue) {
            if (this._select !== null) {
                this._select.attachChange(newValue);
            }
        };

        Ui5Select.prototype.busyChanged = function busyChanged(newValue) {
            if (this._select !== null) {
                this._select.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Select.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._select !== null) {
                this._select.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5Select.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._select !== null) {
                this._select.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Select.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._select !== null) {
                this._select.setFieldGroupIds(newValue);
            }
        };

        Ui5Select.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._select !== null) {
                this._select.attachValidateFieldGroup(newValue);
            }
        };

        Ui5Select.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._select !== null) {
                this._select.attachValidationSuccess(newValue);
            }
        };

        Ui5Select.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._select !== null) {
                this._select.attachValidationError(newValue);
            }
        };

        Ui5Select.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._select !== null) {
                this._select.attachParseError(newValue);
            }
        };

        Ui5Select.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._select !== null) {
                this._select.attachFormatError(newValue);
            }
        };

        Ui5Select.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._select !== null) {
                this._select.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5Select, [{
            key: 'UIElement',
            get: function get() {
                return this._select;
            }
        }]);

        return Ui5Select;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return 'auto';
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maxWidth', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return '100%';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'selectedKey', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'selectedItemId', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 'Default';
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'autoAdjustWidth', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return 'Initial';
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return 'Inherit';
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return 'None';
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'showSecondaryValues', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'forceSelection', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});