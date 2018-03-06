'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../list-base/list-base'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5ListBase, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, Ui5Table;

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
        }, function (_listBaseListBase) {
            Ui5ListBase = _listBaseListBase.Ui5ListBase;
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

            _export('Ui5Table', Ui5Table = (_dec = customElement('ui5-table'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec36 = bindable(), _dec37 = bindable(), _dec38 = bindable(), _dec39 = bindable(), _dec40 = bindable(), _dec41 = bindable(), _dec42 = bindable(), _dec43 = bindable(), _dec44 = bindable(), _dec45 = computedFrom('_table'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListBase) {
                _inherits(Ui5Table, _Ui5ListBase);

                function Ui5Table(element) {
                    _classCallCheck(this, Ui5Table);

                    var _this = _possibleConstructorReturn(this, _Ui5ListBase.call(this, element));

                    _this._table = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'backgroundDesign', _descriptor2, _this);

                    _initDefineProp(_this, 'fixedLayout', _descriptor3, _this);

                    _initDefineProp(_this, 'showOverlay', _descriptor4, _this);

                    _initDefineProp(_this, 'alternateRowColors', _descriptor5, _this);

                    _initDefineProp(_this, 'popinLayout', _descriptor6, _this);

                    _initDefineProp(_this, 'inset', _descriptor7, _this);

                    _initDefineProp(_this, 'headerText', _descriptor8, _this);

                    _initDefineProp(_this, 'footerText', _descriptor9, _this);

                    _initDefineProp(_this, 'mode', _descriptor10, _this);

                    _initDefineProp(_this, 'width', _descriptor11, _this);

                    _initDefineProp(_this, 'includeItemInSelection', _descriptor12, _this);

                    _initDefineProp(_this, 'showUnread', _descriptor13, _this);

                    _initDefineProp(_this, 'noDataText', _descriptor14, _this);

                    _initDefineProp(_this, 'showNoData', _descriptor15, _this);

                    _initDefineProp(_this, 'enableBusyIndicator', _descriptor16, _this);

                    _initDefineProp(_this, 'modeAnimationOn', _descriptor17, _this);

                    _initDefineProp(_this, 'showSeparators', _descriptor18, _this);

                    _initDefineProp(_this, 'swipeDirection', _descriptor19, _this);

                    _initDefineProp(_this, 'growing', _descriptor20, _this);

                    _initDefineProp(_this, 'growingThreshold', _descriptor21, _this);

                    _initDefineProp(_this, 'growingTriggerText', _descriptor22, _this);

                    _initDefineProp(_this, 'growingScrollToLoad', _descriptor23, _this);

                    _initDefineProp(_this, 'growingDirection', _descriptor24, _this);

                    _initDefineProp(_this, 'rememberSelections', _descriptor25, _this);

                    _initDefineProp(_this, 'keyboardMode', _descriptor26, _this);

                    _initDefineProp(_this, 'selectionChange', _descriptor27, _this);

                    _initDefineProp(_this, 'delete', _descriptor28, _this);

                    _initDefineProp(_this, 'swipe', _descriptor29, _this);

                    _initDefineProp(_this, 'updateStarted', _descriptor30, _this);

                    _initDefineProp(_this, 'updateFinished', _descriptor31, _this);

                    _initDefineProp(_this, 'itemPress', _descriptor32, _this);

                    _initDefineProp(_this, 'busy', _descriptor33, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor34, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor35, _this);

                    _initDefineProp(_this, 'visible', _descriptor36, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor37, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor38, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor39, _this);

                    _initDefineProp(_this, 'validationError', _descriptor40, _this);

                    _initDefineProp(_this, 'parseError', _descriptor41, _this);

                    _initDefineProp(_this, 'formatError', _descriptor42, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor43, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Table.prototype.fillProperties = function fillProperties(params) {
                    params.backgroundDesign = this.backgroundDesign;
                    params.fixedLayout = getBooleanFromAttributeValue(this.fixedLayout);
                    params.showOverlay = getBooleanFromAttributeValue(this.showOverlay);
                    params.alternateRowColors = getBooleanFromAttributeValue(this.alternateRowColors);
                    params.popinLayout = this.popinLayout;

                    _Ui5ListBase.prototype.fillProperties.call(this, params);
                };

                Ui5Table.prototype.defaultFunc = function defaultFunc() {};

                Ui5Table.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._table = new sap.m.Table(this.ui5Id, params);else this._table = new sap.m.Table(params);
                    if (this._table._oGrowingDelegate) {
                        this._table._oGrowingDelegate.updateItems = function (sChangeReason) {
                            this._onBeforePageLoaded(sChangeReason);this._onAfterPageLoaded(sChangeReason);
                        };
                    }
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._table.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._table, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._table, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._table, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._table.placeAt) this._table.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._table.sId });
                };

                Ui5Table.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._table, this._relation);
                            }
                        } else {
                            this._table.destroy();
                        }
                        _Ui5ListBase.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Table.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'columns') {
                                var _index = null;if (afterElement) _index = this._table.indexOfColumn(afterElement);if (_index) this._table.insertColumn(child, _index + 1);else this._table.addColumn(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'items') {
                                var _index = null;if (afterElement) _index = this._table.indexOfItem(afterElement);if (_index) this._table.insertItem(child, _index + 1);else this._table.addItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'swipecontent') {
                                this._table.setSwipeContent(child);return elem.localName;
                            }
                            if (elem.localName == 'headertoolbar') {
                                this._table.setHeaderToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'infotoolbar') {
                                this._table.setInfoToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._table.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._table.indexOfCustomData(afterElement);if (_index) this._table.insertCustomData(child, _index + 1);else this._table.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._table.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._table.indexOfDependent(afterElement);if (_index) this._table.insertDependent(child, _index + 1);else this._table.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Table.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'columns') {
                            this._table.removeColumn(child);
                        }
                        if (relation == 'items') {
                            this._table.removeItem(child);
                        }
                        if (relation == 'swipecontent') {
                            this._table.destroySwipeContent(child);
                        }
                        if (relation == 'headertoolbar') {
                            this._table.destroyHeaderToolbar(child);
                        }
                        if (relation == 'infotoolbar') {
                            this._table.destroyInfoToolbar(child);
                        }
                        if (relation == 'tooltip') {
                            this._table.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._table.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._table.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._table.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Table.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setBackgroundDesign(newValue);
                    }
                };

                Ui5Table.prototype.fixedLayoutChanged = function fixedLayoutChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setFixedLayout(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.showOverlayChanged = function showOverlayChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setShowOverlay(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.alternateRowColorsChanged = function alternateRowColorsChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setAlternateRowColors(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.popinLayoutChanged = function popinLayoutChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setPopinLayout(newValue);
                    }
                };

                Ui5Table.prototype.insetChanged = function insetChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setInset(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.headerTextChanged = function headerTextChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setHeaderText(newValue);
                    }
                };

                Ui5Table.prototype.footerTextChanged = function footerTextChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setFooterText(newValue);
                    }
                };

                Ui5Table.prototype.modeChanged = function modeChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setMode(newValue);
                    }
                };

                Ui5Table.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setWidth(newValue);
                    }
                };

                Ui5Table.prototype.includeItemInSelectionChanged = function includeItemInSelectionChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.showUnreadChanged = function showUnreadChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setShowUnread(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setNoDataText(newValue);
                    }
                };

                Ui5Table.prototype.showNoDataChanged = function showNoDataChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setShowNoData(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.enableBusyIndicatorChanged = function enableBusyIndicatorChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.modeAnimationOnChanged = function modeAnimationOnChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setModeAnimationOn(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.showSeparatorsChanged = function showSeparatorsChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setShowSeparators(newValue);
                    }
                };

                Ui5Table.prototype.swipeDirectionChanged = function swipeDirectionChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setSwipeDirection(newValue);
                    }
                };

                Ui5Table.prototype.growingChanged = function growingChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setGrowing(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.growingThresholdChanged = function growingThresholdChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setGrowingThreshold(newValue);
                    }
                };

                Ui5Table.prototype.growingTriggerTextChanged = function growingTriggerTextChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setGrowingTriggerText(newValue);
                    }
                };

                Ui5Table.prototype.growingScrollToLoadChanged = function growingScrollToLoadChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.growingDirectionChanged = function growingDirectionChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setGrowingDirection(newValue);
                    }
                };

                Ui5Table.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setRememberSelections(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.keyboardModeChanged = function keyboardModeChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setKeyboardMode(newValue);
                    }
                };

                Ui5Table.prototype.selectionChangeChanged = function selectionChangeChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachSelectionChange(newValue);
                    }
                };

                Ui5Table.prototype.deleteChanged = function deleteChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachDelete(newValue);
                    }
                };

                Ui5Table.prototype.swipeChanged = function swipeChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachSwipe(newValue);
                    }
                };

                Ui5Table.prototype.updateStartedChanged = function updateStartedChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachUpdateStarted(newValue);
                    }
                };

                Ui5Table.prototype.updateFinishedChanged = function updateFinishedChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachUpdateFinished(newValue);
                    }
                };

                Ui5Table.prototype.itemPressChanged = function itemPressChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachItemPress(newValue);
                    }
                };

                Ui5Table.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Table.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5Table.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Table.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._table !== null) {
                        this._table.setFieldGroupIds(newValue);
                    }
                };

                Ui5Table.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Table.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachValidationSuccess(newValue);
                    }
                };

                Ui5Table.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachValidationError(newValue);
                    }
                };

                Ui5Table.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachParseError(newValue);
                    }
                };

                Ui5Table.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachFormatError(newValue);
                    }
                };

                Ui5Table.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._table !== null) {
                        this._table.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Table, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._table;
                    }
                }]);

                return Ui5Table;
            }(Ui5ListBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Translucent';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'fixedLayout', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showOverlay', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'alternateRowColors', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'popinLayout', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Block';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return '100%';
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparators', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return 'All';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Both';
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return 20;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Downwards';
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Navigation';
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'swipe', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'updateStarted', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'updateFinished', [_dec32], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'itemPress', [_dec33], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec34], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec35], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec36], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec37], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec38], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec39], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec40], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec41], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec42], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec43], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec44], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec45], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Table', Ui5Table);
        }
    };
});