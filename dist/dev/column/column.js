'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, Ui5Column;

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

            _export('Ui5Column', Ui5Column = (_dec = customElement('ui5-column'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = computedFrom('_column'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5Column, _Ui5Element);

                function Ui5Column(element) {
                    _classCallCheck(this, Ui5Column);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._column = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'width', _descriptor2, _this);

                    _initDefineProp(_this, 'hAlign', _descriptor3, _this);

                    _initDefineProp(_this, 'vAlign', _descriptor4, _this);

                    _initDefineProp(_this, 'styleClass', _descriptor5, _this);

                    _initDefineProp(_this, 'visible', _descriptor6, _this);

                    _initDefineProp(_this, 'minScreenWidth', _descriptor7, _this);

                    _initDefineProp(_this, 'demandPopin', _descriptor8, _this);

                    _initDefineProp(_this, 'popinHAlign', _descriptor9, _this);

                    _initDefineProp(_this, 'popinDisplay', _descriptor10, _this);

                    _initDefineProp(_this, 'mergeDuplicates', _descriptor11, _this);

                    _initDefineProp(_this, 'mergeFunctionName', _descriptor12, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Column.prototype.fillProperties = function fillProperties(params) {
                    params.width = this.width;
                    params.hAlign = this.hAlign;
                    params.vAlign = this.vAlign;
                    params.styleClass = this.styleClass;
                    params.visible = getBooleanFromAttributeValue(this.visible);
                    params.minScreenWidth = this.minScreenWidth;
                    params.demandPopin = getBooleanFromAttributeValue(this.demandPopin);
                    params.popinHAlign = this.popinHAlign;
                    params.popinDisplay = this.popinDisplay;
                    params.mergeDuplicates = getBooleanFromAttributeValue(this.mergeDuplicates);
                    params.mergeFunctionName = this.mergeFunctionName;
                };

                Ui5Column.prototype.defaultFunc = function defaultFunc() {};

                Ui5Column.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Element.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._column = new sap.m.Column(this.ui5Id, params);else this._column = new sap.m.Column(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._column.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._column, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._column, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._column, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._column.placeAt) this._column.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._column.sId });
                };

                Ui5Column.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._column, this._relation);
                    } else {
                        this._column.destroy();
                    }
                    _Ui5Element.prototype.detached.call(this);
                };

                Ui5Column.prototype.addChild = function addChild(child, elem, afterElement) {
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

                        if (elem.localName == 'header') {
                            this._column.setHeader(child);return elem.localName;
                        }
                        if (elem.localName == 'footer') {
                            this._column.setFooter(child);return elem.localName;
                        }
                    }
                };

                Ui5Column.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

                Ui5Column.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setWidth(newValue);
                    }
                };

                Ui5Column.prototype.hAlignChanged = function hAlignChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setHAlign(newValue);
                    }
                };

                Ui5Column.prototype.vAlignChanged = function vAlignChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setVAlign(newValue);
                    }
                };

                Ui5Column.prototype.styleClassChanged = function styleClassChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setStyleClass(newValue);
                    }
                };

                Ui5Column.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Column.prototype.minScreenWidthChanged = function minScreenWidthChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setMinScreenWidth(newValue);
                    }
                };

                Ui5Column.prototype.demandPopinChanged = function demandPopinChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Column.prototype.popinHAlignChanged = function popinHAlignChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setPopinHAlign(newValue);
                    }
                };

                Ui5Column.prototype.popinDisplayChanged = function popinDisplayChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setPopinDisplay(newValue);
                    }
                };

                Ui5Column.prototype.mergeDuplicatesChanged = function mergeDuplicatesChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Column.prototype.mergeFunctionNameChanged = function mergeFunctionNameChanged(newValue) {
                    if (this._column !== null) {
                        this._column.setMergeFunctionName(newValue);
                    }
                };

                _createClass(Ui5Column, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._column;
                    }
                }]);

                return Ui5Column;
            }(Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'hAlign', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Begin';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'vAlign', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'styleClass', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'minScreenWidth', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'demandPopin', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'popinHAlign', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Begin';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'popinDisplay', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Block';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'mergeDuplicates', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'mergeFunctionName', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 'getText';
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Column', Ui5Column);
        }
    };
});
//# sourceMappingURL=../dist/dev/column/column.js.map
