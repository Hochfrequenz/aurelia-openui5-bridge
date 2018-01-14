'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, Ui5Grid;

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

            _export('Ui5Grid', Ui5Grid = (_dec = customElement('ui5-grid'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = computedFrom('_grid'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Grid, _Ui5Control);

                function Ui5Grid(element) {
                    _classCallCheck(this, Ui5Grid);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._grid = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'width', _descriptor2, _this);

                    _initDefineProp(_this, 'vSpacing', _descriptor3, _this);

                    _initDefineProp(_this, 'hSpacing', _descriptor4, _this);

                    _initDefineProp(_this, 'position', _descriptor5, _this);

                    _initDefineProp(_this, 'defaultSpan', _descriptor6, _this);

                    _initDefineProp(_this, 'defaultIndent', _descriptor7, _this);

                    _initDefineProp(_this, 'containerQuery', _descriptor8, _this);

                    _initDefineProp(_this, 'busy', _descriptor9, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor10, _this);

                    _initDefineProp(_this, 'visible', _descriptor11, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor12, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor13, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Grid.prototype.fillProperties = function fillProperties(params) {
                    params.width = this.width;
                    params.vSpacing = this.vSpacing;
                    params.hSpacing = this.hSpacing;
                    params.position = this.position;
                    params.defaultSpan = this.defaultSpan;
                    params.defaultIndent = this.defaultIndent;
                    params.containerQuery = getBooleanFromAttributeValue(this.containerQuery);
                };

                Ui5Grid.prototype.defaultFunc = function defaultFunc() {};

                Ui5Grid.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._grid = new sap.ui.layout.Grid(this.ui5Id, params);else this._grid = new sap.ui.layout.Grid(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._grid.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._grid, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._grid, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._grid, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._grid.placeAt) this._grid.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._grid.sId });
                };

                Ui5Grid.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._grid, this._relation);
                    } else {
                        this._grid.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5Grid.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            var _index = null;if (afterElement) _index = this._grid.indexOfContent(afterElement);if (_index) this._grid.insertContent(child, _index + 1);else this._grid.addContent(child, 0);return elem.localName;
                        }
                    }
                };

                Ui5Grid.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    if (relation == 'content') {
                        this._grid.removeContent(child);
                    }
                };

                Ui5Grid.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setWidth(newValue);
                    }
                };

                Ui5Grid.prototype.vSpacingChanged = function vSpacingChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setVSpacing(newValue);
                    }
                };

                Ui5Grid.prototype.hSpacingChanged = function hSpacingChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setHSpacing(newValue);
                    }
                };

                Ui5Grid.prototype.positionChanged = function positionChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setPosition(newValue);
                    }
                };

                Ui5Grid.prototype.defaultSpanChanged = function defaultSpanChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setDefaultSpan(newValue);
                    }
                };

                Ui5Grid.prototype.defaultIndentChanged = function defaultIndentChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setDefaultIndent(newValue);
                    }
                };

                Ui5Grid.prototype.containerQueryChanged = function containerQueryChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setContainerQuery(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Grid.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Grid.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Grid.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Grid.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.setFieldGroupIds(newValue);
                    }
                };

                Ui5Grid.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._grid !== null) {
                        this._grid.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5Grid, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._grid;
                    }
                }]);

                return Ui5Grid;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '100%';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'vSpacing', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return 1;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'hSpacing', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 1;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'position', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Left';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'defaultSpan', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'XL3 L3 M6 S12';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'defaultIndent', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 'XL0 L0 M0 S0';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'containerQuery', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Grid', Ui5Grid);
        }
    };
});