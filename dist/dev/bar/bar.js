'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, Ui5Bar;

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

            _export('Ui5Bar', Ui5Bar = (_dec = customElement('ui5-bar'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = computedFrom('_bar'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Bar, _Ui5Control);

                function Ui5Bar(element) {
                    _classCallCheck(this, Ui5Bar);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._bar = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'enableFlexBox', _descriptor2, _this);

                    _initDefineProp(_this, 'translucent', _descriptor3, _this);

                    _initDefineProp(_this, 'design', _descriptor4, _this);

                    _initDefineProp(_this, 'busy', _descriptor5, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor6, _this);

                    _initDefineProp(_this, 'visible', _descriptor7, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor8, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor9, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Bar.prototype.fillProperties = function fillProperties(params) {
                    params.enableFlexBox = getBooleanFromAttributeValue(this.enableFlexBox);
                    params.translucent = getBooleanFromAttributeValue(this.translucent);
                    params.design = this.design;
                };

                Ui5Bar.prototype.defaultFunc = function defaultFunc() {};

                Ui5Bar.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._bar = new sap.m.Bar(this.ui5Id, params);else this._bar = new sap.m.Bar(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._bar.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._bar, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._bar.placeAt) this._bar.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._bar.sId });
                };

                Ui5Bar.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._bar, this._relation);
                    } else {
                        this._bar.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5Bar.prototype.addChild = function addChild(child, elem, afterElement) {
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

                        if (elem.localName == 'contentLeft') {
                            var _index = null;if (afterElement) _index = this._bar.indexOfContentLeft(afterElement);if (_index) this._bar.insertContentLeft(child, _index + 1);else this._bar.addContentLeft(child, 0);return elem.localName;
                        }
                        if (elem.localName == 'contentMiddle') {
                            var _index = null;if (afterElement) _index = this._bar.indexOfContentMiddle(afterElement);if (_index) this._bar.insertContentMiddle(child, _index + 1);else this._bar.addContentMiddle(child, 0);return elem.localName;
                        }
                        if (elem.localName == 'contentRight') {
                            var _index = null;if (afterElement) _index = this._bar.indexOfContentRight(afterElement);if (_index) this._bar.insertContentRight(child, _index + 1);else this._bar.addContentRight(child, 0);return elem.localName;
                        }
                    }
                };

                Ui5Bar.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    if (relation == 'contentLeft') {
                        this._bar.removeContentLeft(child);
                    }
                    if (relation == 'contentMiddle') {
                        this._bar.removeContentMiddle(child);
                    }
                    if (relation == 'contentRight') {
                        this._bar.removeContentRight(child);
                    }
                };

                Ui5Bar.prototype.enableFlexBoxChanged = function enableFlexBoxChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setEnableFlexBox(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Bar.prototype.translucentChanged = function translucentChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setTranslucent(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Bar.prototype.designChanged = function designChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setDesign(newValue);
                    }
                };

                Ui5Bar.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Bar.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Bar.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Bar.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.setFieldGroupIds(newValue);
                    }
                };

                Ui5Bar.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._bar !== null) {
                        this._bar.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5Bar, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._bar;
                    }
                }]);

                return Ui5Bar;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'enableFlexBox', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'translucent', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'design', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Auto';
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Bar', Ui5Bar);
        }
    };
});
//# sourceMappingURL=../dist/dev/bar/bar.js.map
