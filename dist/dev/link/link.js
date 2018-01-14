'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, Ui5Link;

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
        }, function (_controlControl) {
            Ui5Control = _controlControl.Ui5Control;
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

            _export('Ui5Link', Ui5Link = (_dec = customElement('ui5-link'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = computedFrom('_link'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Link, _Ui5Control);

                function Ui5Link(element) {
                    _classCallCheck(this, Ui5Link);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._link = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'text', _descriptor2, _this);

                    _initDefineProp(_this, 'enabled', _descriptor3, _this);

                    _initDefineProp(_this, 'target', _descriptor4, _this);

                    _initDefineProp(_this, 'width', _descriptor5, _this);

                    _initDefineProp(_this, 'href', _descriptor6, _this);

                    _initDefineProp(_this, 'wrapping', _descriptor7, _this);

                    _initDefineProp(_this, 'textAlign', _descriptor8, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor9, _this);

                    _initDefineProp(_this, 'subtle', _descriptor10, _this);

                    _initDefineProp(_this, 'emphasized', _descriptor11, _this);

                    _initDefineProp(_this, 'press', _descriptor12, _this);

                    _initDefineProp(_this, 'busy', _descriptor13, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor14, _this);

                    _initDefineProp(_this, 'visible', _descriptor15, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor16, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor17, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Link.prototype.fillProperties = function fillProperties(params) {
                    params.text = this.text;
                    params.enabled = getBooleanFromAttributeValue(this.enabled);
                    params.target = this.target;
                    params.width = this.width;
                    params.href = this.href;
                    params.wrapping = getBooleanFromAttributeValue(this.wrapping);
                    params.textAlign = this.textAlign;
                    params.textDirection = this.textDirection;
                    params.subtle = getBooleanFromAttributeValue(this.subtle);
                    params.emphasized = getBooleanFromAttributeValue(this.emphasized);
                };

                Ui5Link.prototype.defaultFunc = function defaultFunc() {};

                Ui5Link.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._link = new sap.m.Link(this.ui5Id, params);else this._link = new sap.m.Link(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._link.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._link, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._link, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._link, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._link.placeAt) this._link.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._link.sId });
                };

                Ui5Link.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._link, this._relation);
                    } else {
                        this._link.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5Link.prototype.addChild = function addChild(child, elem, afterElement) {
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

                Ui5Link.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

                Ui5Link.prototype.textChanged = function textChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setText(newValue);
                    }
                };

                Ui5Link.prototype.enabledChanged = function enabledChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setEnabled(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Link.prototype.targetChanged = function targetChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setTarget(newValue);
                    }
                };

                Ui5Link.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setWidth(newValue);
                    }
                };

                Ui5Link.prototype.hrefChanged = function hrefChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setHref(newValue);
                    }
                };

                Ui5Link.prototype.wrappingChanged = function wrappingChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setWrapping(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Link.prototype.textAlignChanged = function textAlignChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setTextAlign(newValue);
                    }
                };

                Ui5Link.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setTextDirection(newValue);
                    }
                };

                Ui5Link.prototype.subtleChanged = function subtleChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setSubtle(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Link.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setEmphasized(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Link.prototype.pressChanged = function pressChanged(newValue) {
                    if (this._link !== null) {
                        this._link.attachPress(newValue);
                    }
                };

                Ui5Link.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Link.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Link.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Link.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._link !== null) {
                        this._link.setFieldGroupIds(newValue);
                    }
                };

                Ui5Link.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._link !== null) {
                        this._link.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5Link, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._link;
                    }
                }]);

                return Ui5Link;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'target', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'href', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Initial';
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'subtle', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'emphasized', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Link', Ui5Link);
        }
    };
});
//# sourceMappingURL=../dist/dev/link/link.js.map
