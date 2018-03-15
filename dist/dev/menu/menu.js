'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, Ui5Menu;

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

            _export('Ui5Menu', Ui5Menu = (_dec = customElement('ui5-menu'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = computedFrom('_menu'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Menu, _Ui5Control);

                function Ui5Menu(element) {
                    _classCallCheck(this, Ui5Menu);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._menu = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'title', _descriptor2, _this);

                    _initDefineProp(_this, 'itemSelected', _descriptor3, _this);

                    _initDefineProp(_this, 'closed', _descriptor4, _this);

                    _initDefineProp(_this, 'busy', _descriptor5, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor6, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor7, _this);

                    _initDefineProp(_this, 'visible', _descriptor8, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor9, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor10, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor11, _this);

                    _initDefineProp(_this, 'validationError', _descriptor12, _this);

                    _initDefineProp(_this, 'parseError', _descriptor13, _this);

                    _initDefineProp(_this, 'formatError', _descriptor14, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor15, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Menu.prototype.fillProperties = function fillProperties(params) {
                    params.title = this.title;
                    params.itemSelected = this.itemSelected == null ? this.defaultFunc : this.itemSelected;
                    params.closed = this.closed == null ? this.defaultFunc : this.closed;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5Menu.prototype.defaultFunc = function defaultFunc() {};

                Ui5Menu.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._menu = new sap.m.Menu(this.ui5Id, params);else this._menu = new sap.m.Menu(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._menu.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._menu, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._menu, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._menu, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._menu.placeAt) this._menu.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._menu.sId });
                };

                Ui5Menu.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._menu, this._relation);
                            }
                        } else {
                            this._menu.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Menu.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'items') {
                                var _index = null;if (afterElement) _index = this._menu.indexOfItem(afterElement);if (_index) this._menu.insertItem(child, _index + 1);else this._menu.addItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._menu.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._menu.indexOfCustomData(afterElement);if (_index) this._menu.insertCustomData(child, _index + 1);else this._menu.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._menu.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._menu.indexOfDependent(afterElement);if (_index) this._menu.insertDependent(child, _index + 1);else this._menu.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Menu.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'items') {
                            this._menu.removeItem(child);
                        }
                        if (relation == 'tooltip') {
                            this._menu.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._menu.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._menu.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._menu.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Menu.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.setTitle(newValue);
                    }
                };

                Ui5Menu.prototype.itemSelectedChanged = function itemSelectedChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachItemSelected(newValue);
                    }
                };

                Ui5Menu.prototype.closedChanged = function closedChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachClosed(newValue);
                    }
                };

                Ui5Menu.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Menu.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Menu.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5Menu.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Menu.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.setFieldGroupIds(newValue);
                    }
                };

                Ui5Menu.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Menu.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachValidationSuccess(newValue);
                    }
                };

                Ui5Menu.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachValidationError(newValue);
                    }
                };

                Ui5Menu.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachParseError(newValue);
                    }
                };

                Ui5Menu.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachFormatError(newValue);
                    }
                };

                Ui5Menu.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._menu !== null) {
                        this._menu.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Menu, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._menu;
                    }
                }]);

                return Ui5Menu;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelected', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'closed', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
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
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Menu', Ui5Menu);
        }
    };
});
//# sourceMappingURL=../dist/dev/menu/menu.js.map
