'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, Ui5StandardTile;

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

            _export('Ui5StandardTile', Ui5StandardTile = (_dec = customElement('ui5-standard-tile'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5StandardTile, _Ui5Control);

                _createClass(Ui5StandardTile, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._tile;
                    }
                }]);

                function Ui5StandardTile(element) {
                    _classCallCheck(this, Ui5StandardTile);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._tile = null;

                    _initDefineProp(_this, 'type', _descriptor, _this);

                    _initDefineProp(_this, 'title', _descriptor2, _this);

                    _initDefineProp(_this, 'number', _descriptor3, _this);

                    _initDefineProp(_this, 'info', _descriptor4, _this);

                    _initDefineProp(_this, 'infoState', _descriptor5, _this);

                    _initDefineProp(_this, 'numberUnit', _descriptor6, _this);

                    _initDefineProp(_this, 'icon', _descriptor7, _this);

                    _initDefineProp(_this, 'press', _descriptor8, _this);

                    _initDefineProp(_this, 'busy', _descriptor9, _this);

                    _this.element = element;
                    return _this;
                }

                Ui5StandardTile.prototype.defaultPress = function defaultPress() {};

                Ui5StandardTile.prototype.attached = function attached() {
                    var props = {
                        type: this.type,
                        title: this.title,
                        number: this.number,
                        info: this.info,
                        infoState: this.infoState,
                        numberUnit: this.numberUnit,
                        icon: this.icon,
                        press: this.press != null ? this.press : this.defaultPress
                    };
                    _Ui5Control.prototype.fillProperties.call(this, props);
                    this._tile = new sap.m.StandardTile(props);
                    $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.addChild(this._tile, this.element);
                };

                Ui5StandardTile.prototype.detached = function detached() {
                    $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.removeChild(this._tile, this.element);
                };

                Ui5StandardTile.prototype.typeChanged = function typeChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setType(newValue);
                    }
                };

                Ui5StandardTile.prototype.titleChanged = function titleChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setTitle(newValue);
                    }
                };

                Ui5StandardTile.prototype.numberChanged = function numberChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setNumber(newValue);
                    }
                };

                Ui5StandardTile.prototype.numberUnitChanged = function numberUnitChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setNumberUnit(newValue);
                    }
                };

                Ui5StandardTile.prototype.infoChanged = function infoChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setInfo(newValue);
                    }
                };

                Ui5StandardTile.prototype.infoStateChanged = function infoStateChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setInfoState(newValue);
                    }
                };

                Ui5StandardTile.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._tile != null) {
                        this._tile.setIcon(newValue);
                    }
                };

                Ui5StandardTile.prototype.pressChanged = function pressChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.attachPress(newValue);
                    }
                };

                Ui5StandardTile.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._tile !== null) {
                        this._tile.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                return Ui5StandardTile;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'number', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'info', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'infoState', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'numberUnit', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            })), _class2)) || _class) || _class));

            _export('Ui5StandardTile', Ui5StandardTile);
        }
    };
});