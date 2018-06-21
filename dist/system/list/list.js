'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../list-base/list-base'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5ListBase, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, Ui5List;

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

            _export('Ui5List', Ui5List = (_dec = customElement('ui5-list'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec36 = bindable(), _dec37 = bindable(), _dec38 = bindable(), _dec39 = bindable(), _dec40 = bindable(), _dec41 = bindable(), _dec42 = computedFrom('_list'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListBase) {
                _inherits(Ui5List, _Ui5ListBase);

                function Ui5List(element) {
                    _classCallCheck(this, Ui5List);

                    var _this = _possibleConstructorReturn(this, _Ui5ListBase.call(this, element));

                    _this._list = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'backgroundDesign', _descriptor5, _this);

                    _initDefineProp(_this, 'inset', _descriptor6, _this);

                    _initDefineProp(_this, 'headerText', _descriptor7, _this);

                    _initDefineProp(_this, 'footerText', _descriptor8, _this);

                    _initDefineProp(_this, 'mode', _descriptor9, _this);

                    _initDefineProp(_this, 'width', _descriptor10, _this);

                    _initDefineProp(_this, 'includeItemInSelection', _descriptor11, _this);

                    _initDefineProp(_this, 'showUnread', _descriptor12, _this);

                    _initDefineProp(_this, 'noDataText', _descriptor13, _this);

                    _initDefineProp(_this, 'showNoData', _descriptor14, _this);

                    _initDefineProp(_this, 'enableBusyIndicator', _descriptor15, _this);

                    _initDefineProp(_this, 'modeAnimationOn', _descriptor16, _this);

                    _initDefineProp(_this, 'showSeparators', _descriptor17, _this);

                    _initDefineProp(_this, 'swipeDirection', _descriptor18, _this);

                    _initDefineProp(_this, 'growing', _descriptor19, _this);

                    _initDefineProp(_this, 'growingThreshold', _descriptor20, _this);

                    _initDefineProp(_this, 'growingTriggerText', _descriptor21, _this);

                    _initDefineProp(_this, 'growingScrollToLoad', _descriptor22, _this);

                    _initDefineProp(_this, 'growingDirection', _descriptor23, _this);

                    _initDefineProp(_this, 'rememberSelections', _descriptor24, _this);

                    _initDefineProp(_this, 'keyboardMode', _descriptor25, _this);

                    _initDefineProp(_this, 'selectionChange', _descriptor26, _this);

                    _initDefineProp(_this, 'delete', _descriptor27, _this);

                    _initDefineProp(_this, 'swipe', _descriptor28, _this);

                    _initDefineProp(_this, 'updateStarted', _descriptor29, _this);

                    _initDefineProp(_this, 'updateFinished', _descriptor30, _this);

                    _initDefineProp(_this, 'itemPress', _descriptor31, _this);

                    _initDefineProp(_this, 'beforeOpenContextMenu', _descriptor32, _this);

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

                Ui5List.prototype.fillProperties = function fillProperties(params) {
                    params.backgroundDesign = this.backgroundDesign;

                    _Ui5ListBase.prototype.fillProperties.call(this, params);
                };

                Ui5List.prototype.defaultFunc = function defaultFunc() {};

                Ui5List.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._list = new sap.m.List(this.ui5Id, params);else this._list = new sap.m.List(params);
                    if (this.ui5Class) this._list.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._list.setTooltip(this.ui5Tooltip);
                    if (this._list._oGrowingDelegate) {
                        this._list._oGrowingDelegate.updateItems = function (sChangeReason) {
                            this._onBeforePageLoaded(sChangeReason);this._onAfterPageLoaded(sChangeReason);
                        };
                    }
                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._list.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._list, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._list, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._list.placeAt) this._list.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._list.sId });
                };

                Ui5List.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._list) this._parent.removeChildByRelation(this._list, this._relation);
                            }
                        } else {
                            this._list.destroy();
                        }
                        _Ui5ListBase.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5List.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._list.insertColumn(child, _index);else this._list.addColumn(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'items') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._list.insertItem(child, _index);else this._list.addItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'swipecontent') {
                                this._list.setSwipeContent(child);return elem.localName;
                            }
                            if (elem.localName == 'headertoolbar') {
                                this._list.setHeaderToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'infotoolbar') {
                                this._list.setInfoToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._list.insertDragDropConfig(child, _index);else this._list.addDragDropConfig(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'contextmenu') {
                                this._list.setContextMenu(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._list.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._list.insertCustomData(child, _index);else this._list.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._list.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._list.insertDependent(child, _index);else this._list.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5List.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'columns') {
                            this._list.removeColumn(child);
                        }
                        if (relation == 'items') {
                            this._list.removeItem(child);
                        }
                        if (relation == 'swipecontent') {
                            this._list.destroySwipeContent(child);
                        }
                        if (relation == 'headertoolbar') {
                            this._list.destroyHeaderToolbar(child);
                        }
                        if (relation == 'infotoolbar') {
                            this._list.destroyInfoToolbar(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._list.removeDragDropConfig(child);
                        }
                        if (relation == 'contextmenu') {
                            this._list.destroyContextMenu(child);
                        }
                        if (relation == 'tooltip') {
                            this._list.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._list.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._list.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._list.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5List.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setBackgroundDesign(newValue);
                    }
                };

                Ui5List.prototype.insetChanged = function insetChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setInset(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.headerTextChanged = function headerTextChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setHeaderText(newValue);
                    }
                };

                Ui5List.prototype.footerTextChanged = function footerTextChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setFooterText(newValue);
                    }
                };

                Ui5List.prototype.modeChanged = function modeChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setMode(newValue);
                    }
                };

                Ui5List.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setWidth(newValue);
                    }
                };

                Ui5List.prototype.includeItemInSelectionChanged = function includeItemInSelectionChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setIncludeItemInSelection(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.showUnreadChanged = function showUnreadChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setShowUnread(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setNoDataText(newValue);
                    }
                };

                Ui5List.prototype.showNoDataChanged = function showNoDataChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setShowNoData(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.enableBusyIndicatorChanged = function enableBusyIndicatorChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.modeAnimationOnChanged = function modeAnimationOnChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setModeAnimationOn(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.showSeparatorsChanged = function showSeparatorsChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setShowSeparators(newValue);
                    }
                };

                Ui5List.prototype.swipeDirectionChanged = function swipeDirectionChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setSwipeDirection(newValue);
                    }
                };

                Ui5List.prototype.growingChanged = function growingChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setGrowing(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.growingThresholdChanged = function growingThresholdChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setGrowingThreshold(newValue);
                    }
                };

                Ui5List.prototype.growingTriggerTextChanged = function growingTriggerTextChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setGrowingTriggerText(newValue);
                    }
                };

                Ui5List.prototype.growingScrollToLoadChanged = function growingScrollToLoadChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setGrowingScrollToLoad(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.growingDirectionChanged = function growingDirectionChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setGrowingDirection(newValue);
                    }
                };

                Ui5List.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setRememberSelections(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.keyboardModeChanged = function keyboardModeChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setKeyboardMode(newValue);
                    }
                };

                Ui5List.prototype.selectionChangeChanged = function selectionChangeChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachSelectionChange(newValue);
                    }
                };

                Ui5List.prototype.deleteChanged = function deleteChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachDelete(newValue);
                    }
                };

                Ui5List.prototype.swipeChanged = function swipeChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachSwipe(newValue);
                    }
                };

                Ui5List.prototype.updateStartedChanged = function updateStartedChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachUpdateStarted(newValue);
                    }
                };

                Ui5List.prototype.updateFinishedChanged = function updateFinishedChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachUpdateFinished(newValue);
                    }
                };

                Ui5List.prototype.itemPressChanged = function itemPressChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachItemPress(newValue);
                    }
                };

                Ui5List.prototype.beforeOpenContextMenuChanged = function beforeOpenContextMenuChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachBeforeOpenContextMenu(newValue);
                    }
                };

                Ui5List.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5List.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5List.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5List.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._list !== null) {
                        this._list.setFieldGroupIds(newValue);
                    }
                };

                Ui5List.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5List.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachValidationSuccess(newValue);
                    }
                };

                Ui5List.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachValidationError(newValue);
                    }
                };

                Ui5List.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachParseError(newValue);
                    }
                };

                Ui5List.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachFormatError(newValue);
                    }
                };

                Ui5List.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._list !== null) {
                        this._list.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5List, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._list;
                    }
                }]);

                return Ui5List;
            }(Ui5ListBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Solid';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return '100%';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparators', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return 'All';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Both';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return 20;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Downwards';
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Navigation';
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'swipe', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'updateStarted', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'updateFinished', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'itemPress', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpenContextMenu', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec32], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec33], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec34], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec35], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec36], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec37], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec38], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec39], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec40], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec41], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec42], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5List', Ui5List);
        }
    };
});