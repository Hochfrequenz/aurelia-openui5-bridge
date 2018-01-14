'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../item/item'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Item, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, Ui5MessageItem;

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
        }, function (_itemItem) {
            Ui5Item = _itemItem.Ui5Item;
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

            _export('Ui5MessageItem', Ui5MessageItem = (_dec = customElement('ui5-message-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = computedFrom('_messageitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
                _inherits(Ui5MessageItem, _Ui5Item);

                function Ui5MessageItem(element) {
                    _classCallCheck(this, Ui5MessageItem);

                    var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

                    _this._messageitem = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'type', _descriptor2, _this);

                    _initDefineProp(_this, 'title', _descriptor3, _this);

                    _initDefineProp(_this, 'subtitle', _descriptor4, _this);

                    _initDefineProp(_this, 'description', _descriptor5, _this);

                    _initDefineProp(_this, 'markupDescription', _descriptor6, _this);

                    _initDefineProp(_this, 'longtextUrl', _descriptor7, _this);

                    _initDefineProp(_this, 'counter', _descriptor8, _this);

                    _initDefineProp(_this, 'groupName', _descriptor9, _this);

                    _initDefineProp(_this, 'text', _descriptor10, _this);

                    _initDefineProp(_this, 'enabled', _descriptor11, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor12, _this);

                    _initDefineProp(_this, 'key', _descriptor13, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5MessageItem.prototype.fillProperties = function fillProperties(params) {
                    params.type = this.type;
                    params.title = this.title;
                    params.subtitle = this.subtitle;
                    params.description = this.description;
                    params.markupDescription = getBooleanFromAttributeValue(this.markupDescription);
                    params.longtextUrl = this.longtextUrl;
                    params.counter = this.counter ? parseInt(this.counter) : 0;
                    params.groupName = this.groupName;
                };

                Ui5MessageItem.prototype.defaultFunc = function defaultFunc() {};

                Ui5MessageItem.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Item.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._messageitem = new sap.m.MessageItem(this.ui5Id, params);else this._messageitem = new sap.m.MessageItem(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._messageitem.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._messageitem, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._messageitem, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._messageitem.placeAt) this._messageitem.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._messageitem.sId });
                };

                Ui5MessageItem.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._messageitem, this._relation);
                    } else {
                        this._messageitem.destroy();
                    }
                    _Ui5Item.prototype.detached.call(this);
                };

                Ui5MessageItem.prototype.addChild = function addChild(child, elem, afterElement) {
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

                        if (elem.localName == 'link') {
                            this._messageitem.setLink(child);return elem.localName;
                        }
                    }
                };

                Ui5MessageItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

                Ui5MessageItem.prototype.typeChanged = function typeChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setType(newValue);
                    }
                };

                Ui5MessageItem.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setTitle(newValue);
                    }
                };

                Ui5MessageItem.prototype.subtitleChanged = function subtitleChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setSubtitle(newValue);
                    }
                };

                Ui5MessageItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setDescription(newValue);
                    }
                };

                Ui5MessageItem.prototype.markupDescriptionChanged = function markupDescriptionChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setMarkupDescription(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5MessageItem.prototype.longtextUrlChanged = function longtextUrlChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setLongtextUrl(newValue);
                    }
                };

                Ui5MessageItem.prototype.counterChanged = function counterChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setCounter(newValue);
                    }
                };

                Ui5MessageItem.prototype.groupNameChanged = function groupNameChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setGroupName(newValue);
                    }
                };

                Ui5MessageItem.prototype.textChanged = function textChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setText(newValue);
                    }
                };

                Ui5MessageItem.prototype.enabledChanged = function enabledChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setEnabled(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5MessageItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setTextDirection(newValue);
                    }
                };

                Ui5MessageItem.prototype.keyChanged = function keyChanged(newValue) {
                    if (this._messageitem !== null) {
                        this._messageitem.setKey(newValue);
                    }
                };

                _createClass(Ui5MessageItem, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._messageitem;
                    }
                }]);

                return Ui5MessageItem;
            }(Ui5Item), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Error';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'subtitle', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'markupDescription', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'longtextUrl', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'groupName', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5MessageItem', Ui5MessageItem);
        }
    };
});