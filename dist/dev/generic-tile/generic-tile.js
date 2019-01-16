'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, Ui5GenericTile;

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

            _export('Ui5GenericTile', Ui5GenericTile = (_dec = customElement('ui5-generic-tile'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = computedFrom('_generictile'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5GenericTile, _Ui5Control);

                function Ui5GenericTile(element) {
                    _classCallCheck(this, Ui5GenericTile);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._generictile = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'mode', _descriptor5, _this);

                    _initDefineProp(_this, 'header', _descriptor6, _this);

                    _initDefineProp(_this, 'subheader', _descriptor7, _this);

                    _initDefineProp(_this, 'failedText', _descriptor8, _this);

                    _initDefineProp(_this, 'frameType', _descriptor9, _this);

                    _initDefineProp(_this, 'backgroundImage', _descriptor10, _this);

                    _initDefineProp(_this, 'headerImage', _descriptor11, _this);

                    _initDefineProp(_this, 'state', _descriptor12, _this);

                    _initDefineProp(_this, 'imageDescription', _descriptor13, _this);

                    _initDefineProp(_this, 'scope', _descriptor14, _this);

                    _initDefineProp(_this, 'sizeBehavior', _descriptor15, _this);

                    _initDefineProp(_this, 'ariaLabel', _descriptor16, _this);

                    _initDefineProp(_this, 'wrappingType', _descriptor17, _this);

                    _initDefineProp(_this, 'press', _descriptor18, _this);

                    _initDefineProp(_this, 'blocked', _descriptor19, _this);

                    _initDefineProp(_this, 'busy', _descriptor20, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor21, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor22, _this);

                    _initDefineProp(_this, 'visible', _descriptor23, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor24, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor25, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor26, _this);

                    _initDefineProp(_this, 'validationError', _descriptor27, _this);

                    _initDefineProp(_this, 'parseError', _descriptor28, _this);

                    _initDefineProp(_this, 'formatError', _descriptor29, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor30, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5GenericTile.prototype.fillProperties = function fillProperties(params) {
                    params.mode = this.mode;
                    params.header = this.header;
                    params.subheader = this.subheader;
                    params.failedText = this.failedText;
                    params.frameType = this.frameType;
                    params.backgroundImage = this.backgroundImage;
                    params.headerImage = this.headerImage;
                    params.state = this.state;
                    params.imageDescription = this.imageDescription;
                    params.scope = this.scope;
                    params.sizeBehavior = this.sizeBehavior;
                    params.ariaLabel = this.ariaLabel;
                    params.wrappingType = this.wrappingType;
                    params.press = this.press == null ? this.defaultFunc : this.press;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5GenericTile.prototype.defaultFunc = function defaultFunc() {};

                Ui5GenericTile.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._generictile = new sap.m.GenericTile(this.ui5Id, params);else this._generictile = new sap.m.GenericTile(params);
                    if (this.ui5Class) this._generictile.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._generictile.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._generictile.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._generictile, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._generictile, this.element, this.prevId);

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
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._generictile) this._parent.removeChildByRelation(this._generictile, this._relation);
                            }
                        } else {
                            this._generictile.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
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

                        try {
                            if (elem.localName == 'tilecontent') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._generictile.insertTileContent(child, _index);else this._generictile.addTileContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'icon') {
                                this._generictile.setIcon(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._generictile.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._generictile.insertCustomData(child, _index);else this._generictile.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._generictile.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._generictile.insertDependent(child, _index);else this._generictile.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._generictile.insertDragDropConfig(child, _index);else this._generictile.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5GenericTile.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'tilecontent') {
                            this._generictile.removeTileContent(child);
                        }
                        if (relation == 'icon') {
                            this._generictile.destroyIcon(child);
                        }
                        if (relation == 'tooltip') {
                            this._generictile.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._generictile.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._generictile.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._generictile.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._generictile.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5GenericTile.prototype.modeChanged = function modeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setMode(newValue);
                    }
                };

                Ui5GenericTile.prototype.headerChanged = function headerChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setHeader(newValue);
                    }
                };

                Ui5GenericTile.prototype.subheaderChanged = function subheaderChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setSubheader(newValue);
                    }
                };

                Ui5GenericTile.prototype.failedTextChanged = function failedTextChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setFailedText(newValue);
                    }
                };

                Ui5GenericTile.prototype.frameTypeChanged = function frameTypeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setFrameType(newValue);
                    }
                };

                Ui5GenericTile.prototype.backgroundImageChanged = function backgroundImageChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setBackgroundImage(newValue);
                    }
                };

                Ui5GenericTile.prototype.headerImageChanged = function headerImageChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setHeaderImage(newValue);
                    }
                };

                Ui5GenericTile.prototype.stateChanged = function stateChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setState(newValue);
                    }
                };

                Ui5GenericTile.prototype.imageDescriptionChanged = function imageDescriptionChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setImageDescription(newValue);
                    }
                };

                Ui5GenericTile.prototype.scopeChanged = function scopeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setScope(newValue);
                    }
                };

                Ui5GenericTile.prototype.sizeBehaviorChanged = function sizeBehaviorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setSizeBehavior(newValue);
                    }
                };

                Ui5GenericTile.prototype.ariaLabelChanged = function ariaLabelChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setAriaLabel(newValue);
                    }
                };

                Ui5GenericTile.prototype.wrappingTypeChanged = function wrappingTypeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.setWrappingType(newValue);
                    }
                };

                Ui5GenericTile.prototype.pressChanged = function pressChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachPress(newValue);
                    }
                };

                Ui5GenericTile.prototype.blockedChanged = function blockedChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setBlocked(getBooleanFromAttributeValue(newValue));
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

                Ui5GenericTile.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._generictile !== null) {
                        this._generictile.setBusyIndicatorSize(newValue);
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
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5GenericTile.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachValidationSuccess(newValue);
                    }
                };

                Ui5GenericTile.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachValidationError(newValue);
                    }
                };

                Ui5GenericTile.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachParseError(newValue);
                    }
                };

                Ui5GenericTile.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachFormatError(newValue);
                    }
                };

                Ui5GenericTile.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._generictile !== null) {
                        this._generictile.attachModelContextChange(newValue);
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
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'ContentMode';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'subheader', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'failedText', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'frameType', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'OneByOne';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundImage', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'headerImage', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Loaded';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'imageDescription', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'scope', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Display';
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'sizeBehavior', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Responsive';
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'ariaLabel', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'wrappingType', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Normal';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5GenericTile', Ui5GenericTile);
        }
    };
});
//# sourceMappingURL=../dist/dev/generic-tile/generic-tile.js.map
