define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../view-settings-item/view-settings-item'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _viewSettingsItem) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5ViewSettingsFilterItem = undefined;

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

    var Ui5ViewSettingsFilterItem = exports.Ui5ViewSettingsFilterItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-view-settings-filter-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaFramework.computedFrom)('_viewsettingsfilteritem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ViewSettingsItem) {
        _inherits(Ui5ViewSettingsFilterItem, _Ui5ViewSettingsItem);

        function Ui5ViewSettingsFilterItem(element) {
            _classCallCheck(this, Ui5ViewSettingsFilterItem);

            var _this = _possibleConstructorReturn(this, _Ui5ViewSettingsItem.call(this, element));

            _this._viewsettingsfilteritem = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'prevId', _descriptor2, _this);

            _initDefineProp(_this, 'multiSelect', _descriptor3, _this);

            _initDefineProp(_this, 'filterDetailItemsAggregationChange', _descriptor4, _this);

            _initDefineProp(_this, 'selected', _descriptor5, _this);

            _initDefineProp(_this, 'itemPropertyChanged', _descriptor6, _this);

            _initDefineProp(_this, 'text', _descriptor7, _this);

            _initDefineProp(_this, 'enabled', _descriptor8, _this);

            _initDefineProp(_this, 'textDirection', _descriptor9, _this);

            _initDefineProp(_this, 'key', _descriptor10, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor11, _this);

            _initDefineProp(_this, 'validationError', _descriptor12, _this);

            _initDefineProp(_this, 'parseError', _descriptor13, _this);

            _initDefineProp(_this, 'formatError', _descriptor14, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor15, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5ViewSettingsFilterItem.prototype.fillProperties = function fillProperties(params) {
            params.multiSelect = (0, _attributes.getBooleanFromAttributeValue)(this.multiSelect);
            params.filterDetailItemsAggregationChange = this.filterDetailItemsAggregationChange == null ? this.defaultFunc : this.filterDetailItemsAggregationChange;

            _Ui5ViewSettingsItem.prototype.fillProperties.call(this, params);
        };

        Ui5ViewSettingsFilterItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5ViewSettingsFilterItem.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(this.ui5Id, params);else this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(params);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._viewsettingsfilteritem.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._viewsettingsfilteritem.placeAt) this._viewsettingsfilteritem.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._viewsettingsfilteritem.sId });
        };

        Ui5ViewSettingsFilterItem.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._viewsettingsfilteritem) this._parent.removeChildByRelation(this._viewsettingsfilteritem, this._relation);
                    }
                } else {
                    this._viewsettingsfilteritem.destroy();
                }
                _Ui5ViewSettingsItem.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5ViewSettingsFilterItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsfilteritem.insertItem(child, _index);else this._viewsettingsfilteritem.addItem(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._viewsettingsfilteritem.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsfilteritem.insertCustomData(child, _index);else this._viewsettingsfilteritem.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._viewsettingsfilteritem.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsfilteritem.insertDependent(child, _index);else this._viewsettingsfilteritem.addDependent(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5ViewSettingsFilterItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'items') {
                    this._viewsettingsfilteritem.removeItem(child);
                }
                if (relation == 'tooltip') {
                    this._viewsettingsfilteritem.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._viewsettingsfilteritem.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._viewsettingsfilteritem.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._viewsettingsfilteritem.removeDependent(child);
                }
            } catch (err) {}
        };

        Ui5ViewSettingsFilterItem.prototype.multiSelectChanged = function multiSelectChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.setMultiSelect((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ViewSettingsFilterItem.prototype.filterDetailItemsAggregationChangeChanged = function filterDetailItemsAggregationChangeChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachFilterDetailItemsAggregationChange(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.selectedChanged = function selectedChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.setSelected((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ViewSettingsFilterItem.prototype.itemPropertyChangedChanged = function itemPropertyChangedChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachItemPropertyChanged(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.textChanged = function textChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.setText(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.enabledChanged = function enabledChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ViewSettingsFilterItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.setTextDirection(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.keyChanged = function keyChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.setKey(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachValidationSuccess(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachValidationError(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachParseError(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachFormatError(newValue);
            }
        };

        Ui5ViewSettingsFilterItem.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._viewsettingsfilteritem !== null) {
                this._viewsettingsfilteritem.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5ViewSettingsFilterItem, [{
            key: 'UIElement',
            get: function get() {
                return this._viewsettingsfilteritem;
            }
        }]);

        return Ui5ViewSettingsFilterItem;
    }(_viewSettingsItem.Ui5ViewSettingsItem), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'multiSelect', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'filterDetailItemsAggregationChange', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return 'Inherit';
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return null;
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