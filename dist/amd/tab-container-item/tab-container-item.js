define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _element) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5TabContainerItem = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16;

    var Ui5TabContainerItem = exports.Ui5TabContainerItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-tab-container-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaFramework.computedFrom)('_tabcontaineritem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
        _inherits(Ui5TabContainerItem, _Ui5Element);

        function Ui5TabContainerItem(element) {
            _classCallCheck(this, Ui5TabContainerItem);

            var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

            _this._tabcontaineritem = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

            _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

            _initDefineProp(_this, 'prevId', _descriptor4, _this);

            _initDefineProp(_this, 'name', _descriptor5, _this);

            _initDefineProp(_this, 'additionalText', _descriptor6, _this);

            _initDefineProp(_this, 'icon', _descriptor7, _this);

            _initDefineProp(_this, 'iconTooltip', _descriptor8, _this);

            _initDefineProp(_this, 'key', _descriptor9, _this);

            _initDefineProp(_this, 'modified', _descriptor10, _this);

            _initDefineProp(_this, 'itemPropertyChanged', _descriptor11, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor12, _this);

            _initDefineProp(_this, 'validationError', _descriptor13, _this);

            _initDefineProp(_this, 'parseError', _descriptor14, _this);

            _initDefineProp(_this, 'formatError', _descriptor15, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor16, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5TabContainerItem.prototype.fillProperties = function fillProperties(params) {
            params.name = this.name;
            params.additionalText = this.additionalText;
            params.icon = this.icon;
            params.iconTooltip = this.iconTooltip;
            params.key = this.key;
            params.modified = (0, _attributes.getBooleanFromAttributeValue)(this.modified);
            params.itemPropertyChanged = this.itemPropertyChanged == null ? this.defaultFunc : this.itemPropertyChanged;

            _Ui5Element.prototype.fillProperties.call(this, params);
        };

        Ui5TabContainerItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5TabContainerItem.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._tabcontaineritem = new sap.m.TabContainerItem(this.ui5Id, params);else this._tabcontaineritem = new sap.m.TabContainerItem(params);
            if (this.ui5Class) this._tabcontaineritem.addStyleClass(this.ui5Class);
            if (this.ui5Tooltip) this._tabcontaineritem.setTooltip(this.ui5Tooltip);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._tabcontaineritem.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._tabcontaineritem, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._tabcontaineritem, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._tabcontaineritem.placeAt) this._tabcontaineritem.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._tabcontaineritem.sId });
        };

        Ui5TabContainerItem.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._tabcontaineritem) this._parent.removeChildByRelation(this._tabcontaineritem, this._relation);
                    }
                } else {
                    this._tabcontaineritem.destroy();
                }
                _Ui5Element.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5TabContainerItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._tabcontaineritem.insertContent(child, _index);else this._tabcontaineritem.addContent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._tabcontaineritem.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._tabcontaineritem.insertCustomData(child, _index);else this._tabcontaineritem.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._tabcontaineritem.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._tabcontaineritem.insertDependent(child, _index);else this._tabcontaineritem.addDependent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'dragdropconfig') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._tabcontaineritem.insertDragDropConfig(child, _index);else this._tabcontaineritem.addDragDropConfig(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5TabContainerItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'content') {
                    this._tabcontaineritem.removeContent(child);
                }
                if (relation == 'tooltip') {
                    this._tabcontaineritem.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._tabcontaineritem.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._tabcontaineritem.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._tabcontaineritem.removeDependent(child);
                }
                if (relation == 'dragdropconfig') {
                    this._tabcontaineritem.removeDragDropConfig(child);
                }
            } catch (err) {}
        };

        Ui5TabContainerItem.prototype.nameChanged = function nameChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.setName(newValue);
            }
        };

        Ui5TabContainerItem.prototype.additionalTextChanged = function additionalTextChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.setAdditionalText(newValue);
            }
        };

        Ui5TabContainerItem.prototype.iconChanged = function iconChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.setIcon(newValue);
            }
        };

        Ui5TabContainerItem.prototype.iconTooltipChanged = function iconTooltipChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.setIconTooltip(newValue);
            }
        };

        Ui5TabContainerItem.prototype.keyChanged = function keyChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.setKey(newValue);
            }
        };

        Ui5TabContainerItem.prototype.modifiedChanged = function modifiedChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.setModified((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5TabContainerItem.prototype.itemPropertyChangedChanged = function itemPropertyChangedChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.attachItemPropertyChanged(newValue);
            }
        };

        Ui5TabContainerItem.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.attachValidationSuccess(newValue);
            }
        };

        Ui5TabContainerItem.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.attachValidationError(newValue);
            }
        };

        Ui5TabContainerItem.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.attachParseError(newValue);
            }
        };

        Ui5TabContainerItem.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.attachFormatError(newValue);
            }
        };

        Ui5TabContainerItem.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._tabcontaineritem !== null) {
                this._tabcontaineritem.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5TabContainerItem, [{
            key: 'UIElement',
            get: function get() {
                return this._tabcontaineritem;
            }
        }]);

        return Ui5TabContainerItem;
    }(_element.Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'additionalText', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return '';
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'iconTooltip', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'modified', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});