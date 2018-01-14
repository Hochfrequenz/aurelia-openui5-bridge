define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../item/item'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _item) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5ViewSettingsItem = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;

    var Ui5ViewSettingsItem = exports.Ui5ViewSettingsItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-view-settings-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaFramework.computedFrom)('_viewsettingsitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
        _inherits(Ui5ViewSettingsItem, _Ui5Item);

        function Ui5ViewSettingsItem(element) {
            _classCallCheck(this, Ui5ViewSettingsItem);

            var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

            _this._viewsettingsitem = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'selected', _descriptor2, _this);

            _initDefineProp(_this, 'itemPropertyChanged', _descriptor3, _this);

            _initDefineProp(_this, 'text', _descriptor4, _this);

            _initDefineProp(_this, 'enabled', _descriptor5, _this);

            _initDefineProp(_this, 'textDirection', _descriptor6, _this);

            _initDefineProp(_this, 'key', _descriptor7, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5ViewSettingsItem.prototype.fillProperties = function fillProperties(params) {
            params.selected = (0, _attributes.getBooleanFromAttributeValue)(this.selected);
        };

        Ui5ViewSettingsItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5ViewSettingsItem.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            _Ui5Item.prototype.fillProperties.call(this, params);
            if (this.ui5Id) this._viewsettingsitem = new sap.m.ViewSettingsItem(this.ui5Id, params);else this._viewsettingsitem = new sap.m.ViewSettingsItem(params);
            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._viewsettingsitem.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._viewsettingsitem, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._viewsettingsitem, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._viewsettingsitem, this.element);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._viewsettingsitem.placeAt) this._viewsettingsitem.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._viewsettingsitem.sId });
        };

        Ui5ViewSettingsItem.prototype.detached = function detached() {
            if (this._parent && this._relation) {
                this._parent.removeChildByRelation(this._viewsettingsitem, this._relation);
            } else {
                this._viewsettingsitem.destroy();
            }
            _Ui5Item.prototype.detached.call(this);
        };

        Ui5ViewSettingsItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
            }
        };

        Ui5ViewSettingsItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

        Ui5ViewSettingsItem.prototype.selectedChanged = function selectedChanged(newValue) {
            if (this._viewsettingsitem !== null) {
                this._viewsettingsitem.setSelected((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ViewSettingsItem.prototype.itemPropertyChangedChanged = function itemPropertyChangedChanged(newValue) {
            if (this._viewsettingsitem !== null) {
                this._viewsettingsitem.attachItemPropertyChanged(newValue);
            }
        };

        Ui5ViewSettingsItem.prototype.textChanged = function textChanged(newValue) {
            if (this._viewsettingsitem !== null) {
                this._viewsettingsitem.setText(newValue);
            }
        };

        Ui5ViewSettingsItem.prototype.enabledChanged = function enabledChanged(newValue) {
            if (this._viewsettingsitem !== null) {
                this._viewsettingsitem.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ViewSettingsItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
            if (this._viewsettingsitem !== null) {
                this._viewsettingsitem.setTextDirection(newValue);
            }
        };

        Ui5ViewSettingsItem.prototype.keyChanged = function keyChanged(newValue) {
            if (this._viewsettingsitem !== null) {
                this._viewsettingsitem.setKey(newValue);
            }
        };

        _createClass(Ui5ViewSettingsItem, [{
            key: 'UIElement',
            get: function get() {
                return this._viewsettingsitem;
            }
        }]);

        return Ui5ViewSettingsItem;
    }(_item.Ui5Item), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return 'Inherit';
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});