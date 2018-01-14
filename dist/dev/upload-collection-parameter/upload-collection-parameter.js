'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, Ui5UploadCollectionParameter;

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

    return {
        setters: [function (_aureliaTemplating) {
            bindable = _aureliaTemplating.bindable;
            customElement = _aureliaTemplating.customElement;
            noView = _aureliaTemplating.noView;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_commonAttributeManager) {
            AttributeManager = _commonAttributeManager.AttributeManager;
        }, function (_commonAttributes) {
            getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
        }, function (_elementElement) {
            Ui5Element = _elementElement.Ui5Element;
        }],
        execute: function () {
            _createClass = function () {
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

            _export('Ui5UploadCollectionParameter', Ui5UploadCollectionParameter = (_dec = customElement('ui5-upload-collection-parameter'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = computedFrom('_uploadcollectionparameter'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5UploadCollectionParameter, _Ui5Element);

                function Ui5UploadCollectionParameter(element) {
                    _classCallCheck(this, Ui5UploadCollectionParameter);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._uploadcollectionparameter = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'name', _descriptor2, _this);

                    _initDefineProp(_this, 'value', _descriptor3, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5UploadCollectionParameter.prototype.fillProperties = function fillProperties(params) {
                    params.name = this.name;
                    params.value = this.value;
                };

                Ui5UploadCollectionParameter.prototype.defaultFunc = function defaultFunc() {};

                Ui5UploadCollectionParameter.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Element.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(this.ui5Id, params);else this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._uploadcollectionparameter.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element);
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
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._uploadcollectionparameter, this._relation);
                    } else {
                        this._uploadcollectionparameter.destroy();
                    }
                    _Ui5Element.prototype.detached.call(this);
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
                    }
                };

                Ui5UploadCollectionParameter.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

                Ui5UploadCollectionParameter.prototype.nameChanged = function nameChanged(newValue) {
                    if (this._uploadcollectionparameter !== null) {
                        this._uploadcollectionparameter.setName(newValue);
                    }
                };

                Ui5UploadCollectionParameter.prototype.valueChanged = function valueChanged(newValue) {
                    if (this._uploadcollectionparameter !== null) {
                        this._uploadcollectionparameter.setValue(newValue);
                    }
                };

                _createClass(Ui5UploadCollectionParameter, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._uploadcollectionparameter;
                    }
                }]);

                return Ui5UploadCollectionParameter;
            }(Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5UploadCollectionParameter', Ui5UploadCollectionParameter);
        }
    };
});
//# sourceMappingURL=../dist/dev/upload-collection-parameter/upload-collection-parameter.js.map
