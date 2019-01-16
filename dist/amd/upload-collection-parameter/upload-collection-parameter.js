define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _element) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5UploadCollectionParameter = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;

    var Ui5UploadCollectionParameter = exports.Ui5UploadCollectionParameter = (_dec = (0, _aureliaTemplating.customElement)('ui5-upload-collection-parameter'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaFramework.computedFrom)('_uploadcollectionparameter'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
        _inherits(Ui5UploadCollectionParameter, _Ui5Element);

        function Ui5UploadCollectionParameter(element) {
            _classCallCheck(this, Ui5UploadCollectionParameter);

            var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

            _this._uploadcollectionparameter = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

            _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

            _initDefineProp(_this, 'prevId', _descriptor4, _this);

            _initDefineProp(_this, 'name', _descriptor5, _this);

            _initDefineProp(_this, 'value', _descriptor6, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor7, _this);

            _initDefineProp(_this, 'validationError', _descriptor8, _this);

            _initDefineProp(_this, 'parseError', _descriptor9, _this);

            _initDefineProp(_this, 'formatError', _descriptor10, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor11, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5UploadCollectionParameter.prototype.fillProperties = function fillProperties(params) {
            params.name = this.name;
            params.value = this.value;

            _Ui5Element.prototype.fillProperties.call(this, params);
        };

        Ui5UploadCollectionParameter.prototype.defaultFunc = function defaultFunc() {};

        Ui5UploadCollectionParameter.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(this.ui5Id, params);else this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(params);
            if (this.ui5Class) this._uploadcollectionparameter.addStyleClass(this.ui5Class);
            if (this.ui5Tooltip) this._uploadcollectionparameter.setTooltip(this.ui5Tooltip);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._uploadcollectionparameter.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._uploadcollectionparameter.placeAt) this._uploadcollectionparameter.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._uploadcollectionparameter.sId });
        };

        Ui5UploadCollectionParameter.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._uploadcollectionparameter) this._parent.removeChildByRelation(this._uploadcollectionparameter, this._relation);
                    }
                } else {
                    this._uploadcollectionparameter.destroy();
                }
                _Ui5Element.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5UploadCollectionParameter.prototype.addChild = function addChild(child, elem, afterElement) {
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
                        this._uploadcollectionparameter.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionparameter.insertCustomData(child, _index);else this._uploadcollectionparameter.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._uploadcollectionparameter.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionparameter.insertDependent(child, _index);else this._uploadcollectionparameter.addDependent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'dragdropconfig') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionparameter.insertDragDropConfig(child, _index);else this._uploadcollectionparameter.addDragDropConfig(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5UploadCollectionParameter.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'tooltip') {
                    this._uploadcollectionparameter.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._uploadcollectionparameter.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._uploadcollectionparameter.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._uploadcollectionparameter.removeDependent(child);
                }
                if (relation == 'dragdropconfig') {
                    this._uploadcollectionparameter.removeDragDropConfig(child);
                }
            } catch (err) {}
        };

        Ui5UploadCollectionParameter.prototype.nameChanged = function nameChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.setName(newValue);
            }
        };

        Ui5UploadCollectionParameter.prototype.valueChanged = function valueChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.setValue(newValue);
            }
        };

        Ui5UploadCollectionParameter.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.attachValidationSuccess(newValue);
            }
        };

        Ui5UploadCollectionParameter.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.attachValidationError(newValue);
            }
        };

        Ui5UploadCollectionParameter.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.attachParseError(newValue);
            }
        };

        Ui5UploadCollectionParameter.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.attachFormatError(newValue);
            }
        };

        Ui5UploadCollectionParameter.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._uploadcollectionparameter !== null) {
                this._uploadcollectionparameter.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5UploadCollectionParameter, [{
            key: 'UIElement',
            get: function get() {
                return this._uploadcollectionparameter;
            }
        }]);

        return Ui5UploadCollectionParameter;
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
            return null;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});