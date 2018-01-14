'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, Ui5GenericTile;

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

            _export('Ui5GenericTile', Ui5GenericTile = (_dec = customElement('ui5-generic-tile'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = computedFrom('_generictile'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5GenericTile, _Ui5Control);

                function Ui5GenericTile(element) {
                    _classCallCheck(this, Ui5GenericTile);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._generictile = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'mode', _descriptor2, _this);

                    _initDefineProp(_this, 'header', _descriptor3, _this);

                    _initDefineProp(_this, 'subheader', _descriptor4, _this);

                    _initDefineProp(_this, 'failedText', _descriptor5, _this);

                    _initDefineProp(_this, 'size', _descriptor6, _this);

                    _initDefineProp(_this, 'frameType', _descriptor7, _this);

                    _initDefineProp(_this, 'backgroundImage', _descriptor8, _this);

                    _initDefineProp(_this, 'headerImage', _descriptor9, _this);

                    _initDefineProp(_this, 'state', _descriptor10, _this);

                    _initDefineProp(_this, 'imageDescription', _descriptor11, _this);

                    _initDefineProp(_this, 'scope', _descriptor12, _this);

                    _initDefineProp(_this, 'ariaLabel', _descriptor13, _this);

                    _initDefineProp(_this, 'press', _descriptor14, _this);

                    _initDefineProp(_this, 'busy', _descriptor15, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor16, _this);

                    _initDefineProp(_this, 'visible', _descriptor17, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor18, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor19, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5GenericTile.prototype.fillProperties = function fillProperties(params) {
                    params.mode = this.mode;
                    params.header = this.header;
                    params.subheader = this.subheader;
                    params.failedText = this.failedText;
                    params.size = this.size;
                    params.frameType = this.frameType;
                    params.backgroundImage = this.backgroundImage;
                    params.headerImage = this.headerImage;
                    params.state = this.state;
                    params.imageDescription = this.imageDescription;
                    params.scope = this.scope;
                    params.ariaLabel = this.ariaLabel;
                };

                Ui5GenericTile.prototype.defaultFunc = function defaultFunc() {};

                Ui5GenericTile.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5Control.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._generictile = new sap.m.GenericTile(this.ui5Id, params);else this._generictile = new sap.m.GenericTile(params);
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._generictile.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._generictile, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._generictile, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._generictile, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._generictile.placeAt) this._generictile.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._generictile.sId });
                };

                Ui5GenericTile.prototype.detached = function detached() {
                    if (this._parent && this._relation) {
                        this._parent.removeChildByRelation(this._generictile, this._relation);
                    } else {
                        this._generictile.destroy();
                    }
                    _Ui5Control.prototype.detached.call(this);
                };

                Ui5GenericTile.prototype.addChild = function addChild(child, elem, afterElement) {
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

                        if (elem.localName == 'tileContent') {
                            var _index = null;if (afterElement) _index = this._generictile.indexOfTileContent(afterElement);if (_index) this._generictile.insertTileContent(child, _index + 1);else this._generictile.addTileContent(child, 0);return elem.localName;
                        }
                        if (elem.localName == 'icon') {
                            this._generictile.setIcon(child);return elem.localName;
                        }
                    }
                };

                Ui5GenericTile.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    if (relation == 'tileContent') {
                        this._generictile.removeTileContent(child);
                    }
                };

                Ui5GenericTile.prototype.modeChanged = function modeChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setMode(newValue);
                    }
                };

                Ui5GenericTile.prototype.headerChanged = function headerChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setHeader(newValue);
                    }
                };

                Ui5GenericTile.prototype.subheaderChanged = function subheaderChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setSubheader(newValue);
                    }
                };

                Ui5GenericTile.prototype.failedTextChanged = function failedTextChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setFailedText(newValue);
                    }
                };

                Ui5GenericTile.prototype.sizeChanged = function sizeChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setSize(newValue);
                    }
                };

                Ui5GenericTile.prototype.frameTypeChanged = function frameTypeChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setFrameType(newValue);
                    }
                };

                Ui5GenericTile.prototype.backgroundImageChanged = function backgroundImageChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setBackgroundImage(newValue);
                    }
                };

                Ui5GenericTile.prototype.headerImageChanged = function headerImageChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setHeaderImage(newValue);
                    }
                };

                Ui5GenericTile.prototype.stateChanged = function stateChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setState(newValue);
                    }
                };

                Ui5GenericTile.prototype.imageDescriptionChanged = function imageDescriptionChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setImageDescription(newValue);
                    }
                };

                Ui5GenericTile.prototype.scopeChanged = function scopeChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setScope(newValue);
                    }
                };

                Ui5GenericTile.prototype.ariaLabelChanged = function ariaLabelChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setAriaLabel(newValue);
                    }
                };

                Ui5GenericTile.prototype.pressChanged = function pressChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.attachPress(newValue);
                    }
                };

                Ui5GenericTile.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5GenericTile.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5GenericTile.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5GenericTile.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setFieldGroupIds(newValue);
                    }
                };

                Ui5GenericTile.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.attachValidateFieldGroup(newValue);
                    }
                };

                _createClass(Ui5GenericTile, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._generictile;
                    }
                }]);

                return Ui5GenericTile;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'ContentMode';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'subheader', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'failedText', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'size', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Auto';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'frameType', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 'OneByOne';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundImage', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'headerImage', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Loaded';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'imageDescription', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'scope', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Display';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'ariaLabel', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5GenericTile', Ui5GenericTile);
        }
    };
});