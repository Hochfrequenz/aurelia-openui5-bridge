'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, Ui5Tile;

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

            _export('Ui5Tile', Ui5Tile = (_dec = customElement('ui5-tile'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = computedFrom('_tile'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Tile, _Ui5Control);

                function Ui5Tile(element) {
                    _classCallCheck(this, Ui5Tile);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._tile = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'removable', _descriptor2, _this);

                    _initDefineProp(_this, 'press', _descriptor3, _this);

                    _initDefineProp(_this, 'busy', _descriptor4, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor5, _this);

                    _initDefineProp(_this, 'visible', _descriptor6, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor7, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor8, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Tile.prototype.fillProperties = function fillProperties(params) {
                    params.removable = getBooleanFromAttributeValue(this.removable);
                };

                Ui5Tile.prototype.defaultFunc = function defaultFunc() {};

                Ui5Tile.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._tile = new sap.m.Tile(this.ui5Id, params);else this._tile = new sap.m.Tile(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._tile.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._tile, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._tile, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._tile, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._tile.placeAt) this._tile.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._tile.sId });
                };

                Ui5Tile.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._tile, this._relation);
                    } else {
                        this._tile.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5Tile.prototype.addChild = function addChild(child, elem, afterElement) {
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

                Ui5Tile.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

                Ui5Tile.prototype.removableChanged = function removableChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.setRemovable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Tile.prototype.pressChanged = function pressChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.attachPress(newValue);
                    }
                };

                Ui5Tile.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Tile.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Tile.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Tile.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.setFieldGroupIds(newValue);
                    }
                };

                Ui5Tile.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5Tile, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._tile;
                    }
                }]);

                return Ui5Tile;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'removable', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Tile', Ui5Tile);
        }
    };
});
//# sourceMappingURL=../dist/dev/tile/tile.js.map
