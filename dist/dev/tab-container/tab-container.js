'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, Ui5TabContainer;

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

            _export('Ui5TabContainer', Ui5TabContainer = (_dec = customElement('ui5-tab-container'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = computedFrom('_tabcontainer'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5TabContainer, _Ui5Control);

                function Ui5TabContainer(element) {
                    _classCallCheck(this, Ui5TabContainer);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._tabcontainer = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'showAddNewButton', _descriptor2, _this);

                    _initDefineProp(_this, 'itemClose', _descriptor3, _this);

                    _initDefineProp(_this, 'itemSelect', _descriptor4, _this);

                    _initDefineProp(_this, 'addNewButtonPress', _descriptor5, _this);

                    _initDefineProp(_this, 'busy', _descriptor6, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor7, _this);

                    _initDefineProp(_this, 'visible', _descriptor8, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor9, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor10, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5TabContainer.prototype.fillProperties = function fillProperties(params) {
                    params.showAddNewButton = getBooleanFromAttributeValue(this.showAddNewButton);
                };

                Ui5TabContainer.prototype.defaultFunc = function defaultFunc() {};

                Ui5TabContainer.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._tabcontainer = new sap.m.TabContainer(this.ui5Id, params);else this._tabcontainer = new sap.m.TabContainer(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._tabcontainer.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._tabcontainer, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._tabcontainer.placeAt) this._tabcontainer.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._tabcontainer.sId });
                };

                Ui5TabContainer.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._tabcontainer, this._relation);
                    } else {
                        this._tabcontainer.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5TabContainer.prototype.addChild = function addChild(child, elem, afterElement) {
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

                        if (elem.localName == 'items') {
                            var _index = null;if (afterElement) _index = this._tabcontainer.indexOfItem(afterElement);if (_index) this._tabcontainer.insertItem(child, _index + 1);else this._tabcontainer.addItem(child, 0);return elem.localName;
                        }
                    }
                };

                Ui5TabContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    if (relation == 'items') {
                        this._tabcontainer.removeItem(child);
                    }
                };

                Ui5TabContainer.prototype.showAddNewButtonChanged = function showAddNewButtonChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.setShowAddNewButton(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5TabContainer.prototype.itemCloseChanged = function itemCloseChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.attachItemClose(newValue);
                    }
                };

                Ui5TabContainer.prototype.itemSelectChanged = function itemSelectChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.attachItemSelect(newValue);
                    }
                };

                Ui5TabContainer.prototype.addNewButtonPressChanged = function addNewButtonPressChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.attachAddNewButtonPress(newValue);
                    }
                };

                Ui5TabContainer.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5TabContainer.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5TabContainer.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5TabContainer.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.setFieldGroupIds(newValue);
                    }
                };

                Ui5TabContainer.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._tabcontainer !== null) {
                        this._tabcontainer.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5TabContainer, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._tabcontainer;
                    }
                }]);

                return Ui5TabContainer;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showAddNewButton', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemClose', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelect', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'addNewButtonPress', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
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
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5TabContainer', Ui5TabContainer);
        }
    };
});
//# sourceMappingURL=../dist/dev/tab-container/tab-container.js.map
