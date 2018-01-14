'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Ui5TabContainerItem;

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

            _export('Ui5TabContainerItem', Ui5TabContainerItem = (_dec = customElement('ui5-tab-container-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = computedFrom('_tabcontaineritem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5TabContainerItem, _Ui5Element);

                function Ui5TabContainerItem(element) {
                    _classCallCheck(this, Ui5TabContainerItem);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._tabcontaineritem = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'name', _descriptor2, _this);

                    _initDefineProp(_this, 'key', _descriptor3, _this);

                    _initDefineProp(_this, 'modified', _descriptor4, _this);

                    _initDefineProp(_this, 'itemPropertyChanged', _descriptor5, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5TabContainerItem.prototype.fillProperties = function fillProperties(params) {
                    params.name = this.name;
                    params.key = this.key;
                    params.modified = getBooleanFromAttributeValue(this.modified);
                };

                Ui5TabContainerItem.prototype.defaultFunc = function defaultFunc() {};

                Ui5TabContainerItem.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Element.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._tabcontaineritem = new sap.m.TabContainerItem(this.ui5Id, params);else this._tabcontaineritem = new sap.m.TabContainerItem(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._tabcontaineritem.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._tabcontaineritem, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._tabcontaineritem, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._tabcontaineritem, this.element);
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
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._tabcontaineritem, this._relation);
                    } else {
                        this._tabcontaineritem.destroy();
                    }
                    _Ui5Element.prototype.detached.call(this);
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

                        if (elem.localName == 'content') {
                            var _index = null;if (afterElement) _index = this._tabcontaineritem.indexOfContent(afterElement);if (_index) this._tabcontaineritem.insertContent(child, _index + 1);else this._tabcontaineritem.addContent(child, 0);return elem.localName;
                        }
                    }
                };

                Ui5TabContainerItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    if (relation == 'content') {
                        this._tabcontaineritem.removeContent(child);
                    }
                };

                Ui5TabContainerItem.prototype.nameChanged = function nameChanged(newValue) {
                    if (this._tabcontaineritem !== null) {
                        this._tabcontaineritem.setName(newValue);
                    }
                };

                Ui5TabContainerItem.prototype.keyChanged = function keyChanged(newValue) {
                    if (this._tabcontaineritem !== null) {
                        this._tabcontaineritem.setKey(newValue);
                    }
                };

                Ui5TabContainerItem.prototype.modifiedChanged = function modifiedChanged(newValue) {
                    if (this._tabcontaineritem !== null) {
                        this._tabcontaineritem.setModified(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5TabContainerItem.prototype.itemPropertyChangedChanged = function itemPropertyChangedChanged(newValue) {
                    if (this._tabcontaineritem !== null) {
                        this._tabcontaineritem.attachItemPropertyChanged(newValue);
                    }
                };

                _createClass(Ui5TabContainerItem, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._tabcontaineritem;
                    }
                }]);

                return Ui5TabContainerItem;
            }(Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'modified', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5TabContainerItem', Ui5TabContainerItem);
        }
    };
});