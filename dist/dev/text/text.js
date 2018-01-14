'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, Ui5Text;

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

            _export('Ui5Text', Ui5Text = (_dec = customElement('ui5-text'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = computedFrom('_text'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Text, _Ui5Control);

                function Ui5Text(element) {
                    _classCallCheck(this, Ui5Text);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._text = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'text', _descriptor2, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor3, _this);

                    _initDefineProp(_this, 'wrapping', _descriptor4, _this);

                    _initDefineProp(_this, 'textAlign', _descriptor5, _this);

                    _initDefineProp(_this, 'width', _descriptor6, _this);

                    _initDefineProp(_this, 'maxLines', _descriptor7, _this);

                    _initDefineProp(_this, 'busy', _descriptor8, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor9, _this);

                    _initDefineProp(_this, 'visible', _descriptor10, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor11, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor12, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Text.prototype.fillProperties = function fillProperties(params) {
                    params.text = this.text;
                    params.textDirection = this.textDirection;
                    params.wrapping = getBooleanFromAttributeValue(this.wrapping);
                    params.textAlign = this.textAlign;
                    params.width = this.width;
                    params.maxLines = this.maxLines ? parseInt(this.maxLines) : 0;
                };

                Ui5Text.prototype.defaultFunc = function defaultFunc() {};

                Ui5Text.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._text = new sap.m.Text(this.ui5Id, params);else this._text = new sap.m.Text(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._text.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._text, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._text, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._text, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._text.placeAt) this._text.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._text.sId });
                };

                Ui5Text.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._text, this._relation);
                    } else {
                        this._text.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5Text.prototype.addChild = function addChild(child, elem, afterElement) {
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

                Ui5Text.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

                Ui5Text.prototype.textChanged = function textChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setText(newValue);
                    }
                };

                Ui5Text.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setTextDirection(newValue);
                    }
                };

                Ui5Text.prototype.wrappingChanged = function wrappingChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setWrapping(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Text.prototype.textAlignChanged = function textAlignChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setTextAlign(newValue);
                    }
                };

                Ui5Text.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setWidth(newValue);
                    }
                };

                Ui5Text.prototype.maxLinesChanged = function maxLinesChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setMaxLines(newValue);
                    }
                };

                Ui5Text.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Text.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Text.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Text.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._text !== null) {
                        this._text.setFieldGroupIds(newValue);
                    }
                };

                Ui5Text.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._text !== null) {
                        this._text.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5Text, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._text;
                    }
                }]);

                return Ui5Text;
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
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Begin';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'maxLines', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec14], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Text', Ui5Text);
        }
    };
});
//# sourceMappingURL=../dist/dev/text/text.js.map
