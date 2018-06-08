'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, Ui5IconTabBar;

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

            _export('Ui5IconTabBar', Ui5IconTabBar = (_dec = customElement('ui5-icon-tab-bar'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = computedFrom('_icontabbar'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5IconTabBar, _Ui5Control);

                function Ui5IconTabBar(element) {
                    _classCallCheck(this, Ui5IconTabBar);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._icontabbar = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'prevId', _descriptor2, _this);

                    _initDefineProp(_this, 'expandable', _descriptor3, _this);

                    _initDefineProp(_this, 'expanded', _descriptor4, _this);

                    _initDefineProp(_this, 'selectedKey', _descriptor5, _this);

                    _initDefineProp(_this, 'upperCase', _descriptor6, _this);

                    _initDefineProp(_this, 'stretchContentHeight', _descriptor7, _this);

                    _initDefineProp(_this, 'applyContentPadding', _descriptor8, _this);

                    _initDefineProp(_this, 'backgroundDesign', _descriptor9, _this);

                    _initDefineProp(_this, 'headerMode', _descriptor10, _this);

                    _initDefineProp(_this, 'showOverflowSelectList', _descriptor11, _this);

                    _initDefineProp(_this, 'headerBackgroundDesign', _descriptor12, _this);

                    _initDefineProp(_this, 'enableTabReordering', _descriptor13, _this);

                    _initDefineProp(_this, 'select', _descriptor14, _this);

                    _initDefineProp(_this, 'expand', _descriptor15, _this);

                    _initDefineProp(_this, 'busy', _descriptor16, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor17, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor18, _this);

                    _initDefineProp(_this, 'visible', _descriptor19, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor20, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor21, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor22, _this);

                    _initDefineProp(_this, 'validationError', _descriptor23, _this);

                    _initDefineProp(_this, 'parseError', _descriptor24, _this);

                    _initDefineProp(_this, 'formatError', _descriptor25, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor26, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5IconTabBar.prototype.fillProperties = function fillProperties(params) {
                    params.expandable = getBooleanFromAttributeValue(this.expandable);
                    params.expanded = getBooleanFromAttributeValue(this.expanded);
                    params.selectedKey = this.selectedKey;
                    params.upperCase = getBooleanFromAttributeValue(this.upperCase);
                    params.stretchContentHeight = getBooleanFromAttributeValue(this.stretchContentHeight);
                    params.applyContentPadding = getBooleanFromAttributeValue(this.applyContentPadding);
                    params.backgroundDesign = this.backgroundDesign;
                    params.headerMode = this.headerMode;
                    params.showOverflowSelectList = getBooleanFromAttributeValue(this.showOverflowSelectList);
                    params.headerBackgroundDesign = this.headerBackgroundDesign;
                    params.enableTabReordering = getBooleanFromAttributeValue(this.enableTabReordering);
                    params.select = this.select == null ? this.defaultFunc : this.select;
                    params.expand = this.expand == null ? this.defaultFunc : this.expand;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5IconTabBar.prototype.defaultFunc = function defaultFunc() {};

                Ui5IconTabBar.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._icontabbar = new sap.m.IconTabBar(this.ui5Id, params);else this._icontabbar = new sap.m.IconTabBar(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._icontabbar.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._icontabbar, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._icontabbar, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._icontabbar.placeAt) this._icontabbar.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }
                    this._icontabbar.attachSelect(function (event) {
                        that.selectedKey = event.mParameters.key;;
                    });

                    this.attributeManager.addAttributes({ "ui5-id": this._icontabbar.sId });
                };

                Ui5IconTabBar.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._icontabbar) this._parent.removeChildByRelation(this._icontabbar, this._relation);
                            }
                        } else {
                            this._icontabbar.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5IconTabBar.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._icontabbar.insertItem(child, _index);else this._icontabbar.addItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'content') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._icontabbar.insertContent(child, _index);else this._icontabbar.addContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._icontabbar.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._icontabbar.insertCustomData(child, _index);else this._icontabbar.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._icontabbar.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._icontabbar.insertDependent(child, _index);else this._icontabbar.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5IconTabBar.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'items') {
                            this._icontabbar.removeItem(child);
                        }
                        if (relation == 'content') {
                            this._icontabbar.removeContent(child);
                        }
                        if (relation == 'tooltip') {
                            this._icontabbar.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._icontabbar.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._icontabbar.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._icontabbar.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5IconTabBar.prototype.expandableChanged = function expandableChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setExpandable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.expandedChanged = function expandedChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setExpanded(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setSelectedKey(newValue);
                    }
                };

                Ui5IconTabBar.prototype.upperCaseChanged = function upperCaseChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setUpperCase(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.stretchContentHeightChanged = function stretchContentHeightChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setStretchContentHeight(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.applyContentPaddingChanged = function applyContentPaddingChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setApplyContentPadding(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setBackgroundDesign(newValue);
                    }
                };

                Ui5IconTabBar.prototype.headerModeChanged = function headerModeChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setHeaderMode(newValue);
                    }
                };

                Ui5IconTabBar.prototype.showOverflowSelectListChanged = function showOverflowSelectListChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.headerBackgroundDesignChanged = function headerBackgroundDesignChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setHeaderBackgroundDesign(newValue);
                    }
                };

                Ui5IconTabBar.prototype.enableTabReorderingChanged = function enableTabReorderingChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setEnableTabReordering(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.selectChanged = function selectChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachSelect(newValue);
                    }
                };

                Ui5IconTabBar.prototype.expandChanged = function expandChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachExpand(newValue);
                    }
                };

                Ui5IconTabBar.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5IconTabBar.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5IconTabBar.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5IconTabBar.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.setFieldGroupIds(newValue);
                    }
                };

                Ui5IconTabBar.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5IconTabBar.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachValidationSuccess(newValue);
                    }
                };

                Ui5IconTabBar.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachValidationError(newValue);
                    }
                };

                Ui5IconTabBar.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachParseError(newValue);
                    }
                };

                Ui5IconTabBar.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachFormatError(newValue);
                    }
                };

                Ui5IconTabBar.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._icontabbar !== null) {
                        this._icontabbar.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5IconTabBar, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._icontabbar;
                    }
                }]);

                return Ui5IconTabBar;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'expandable', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'expanded', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'selectedKey', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'upperCase', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'stretchContentHeight', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'applyContentPadding', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Solid';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'headerMode', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Standard';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'showOverflowSelectList', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'headerBackgroundDesign', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Solid';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'enableTabReordering', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'select', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'expand', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec27], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5IconTabBar', Ui5IconTabBar);
        }
    };
});