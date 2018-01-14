define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../list-base/list-base'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _listBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5List = undefined;

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

    var _createClass = function () {
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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37;

    var Ui5List = exports.Ui5List = (_dec = (0, _aureliaTemplating.customElement)('ui5-list'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaFramework.computedFrom)('_list'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListBase) {
        _inherits(Ui5List, _Ui5ListBase);

        function Ui5List(element) {
            _classCallCheck(this, Ui5List);

            var _this = _possibleConstructorReturn(this, _Ui5ListBase.call(this, element));

            _this._list = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'backgroundDesign', _descriptor2, _this);

            _initDefineProp(_this, 'inset', _descriptor3, _this);

            _initDefineProp(_this, 'headerText', _descriptor4, _this);

            _initDefineProp(_this, 'headerDesign', _descriptor5, _this);

            _initDefineProp(_this, 'footerText', _descriptor6, _this);

            _initDefineProp(_this, 'mode', _descriptor7, _this);

            _initDefineProp(_this, 'width', _descriptor8, _this);

            _initDefineProp(_this, 'includeItemInSelection', _descriptor9, _this);

            _initDefineProp(_this, 'showUnread', _descriptor10, _this);

            _initDefineProp(_this, 'noDataText', _descriptor11, _this);

            _initDefineProp(_this, 'showNoData', _descriptor12, _this);

            _initDefineProp(_this, 'enableBusyIndicator', _descriptor13, _this);

            _initDefineProp(_this, 'modeAnimationOn', _descriptor14, _this);

            _initDefineProp(_this, 'showSeparators', _descriptor15, _this);

            _initDefineProp(_this, 'swipeDirection', _descriptor16, _this);

            _initDefineProp(_this, 'growing', _descriptor17, _this);

            _initDefineProp(_this, 'growingThreshold', _descriptor18, _this);

            _initDefineProp(_this, 'growingTriggerText', _descriptor19, _this);

            _initDefineProp(_this, 'growingScrollToLoad', _descriptor20, _this);

            _initDefineProp(_this, 'growingDirection', _descriptor21, _this);

            _initDefineProp(_this, 'rememberSelections', _descriptor22, _this);

            _initDefineProp(_this, 'keyboardMode', _descriptor23, _this);

            _initDefineProp(_this, 'select', _descriptor24, _this);

            _initDefineProp(_this, 'selectionChange', _descriptor25, _this);

            _initDefineProp(_this, 'delete', _descriptor26, _this);

            _initDefineProp(_this, 'swipe', _descriptor27, _this);

            _initDefineProp(_this, 'growingStarted', _descriptor28, _this);

            _initDefineProp(_this, 'growingFinished', _descriptor29, _this);

            _initDefineProp(_this, 'updateStarted', _descriptor30, _this);

            _initDefineProp(_this, 'updateFinished', _descriptor31, _this);

            _initDefineProp(_this, 'itemPress', _descriptor32, _this);

            _initDefineProp(_this, 'busy', _descriptor33, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor34, _this);

            _initDefineProp(_this, 'visible', _descriptor35, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor36, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor37, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5List.prototype.fillProperties = function fillProperties(params) {
            params.backgroundDesign = this.backgroundDesign;
        };

        Ui5List.prototype.defaultFunc = function defaultFunc() {};

        Ui5List.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            _Ui5ListBase.prototype.fillProperties.call(this, params);
            if (this.ui5Id) this._list = new sap.m.List(this.ui5Id, params);else this._list = new sap.m.List(params);
            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._list.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._list, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._list, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._list, this.element);
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
            if (this._parent && this._relation) {
                this._parent.removeChildByRelation(this._list, this._relation);
            } else {
                this._list.destroy();
            }
            _Ui5ListBase.prototype.detached.call(this);
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

                if (elem.localName == 'columns') {
                    var _index = null;if (afterElement) _index = this._list.indexOfColumn(afterElement);if (_index) this._list.insertColumn(child, _index + 1);else this._list.addColumn(child, 0);return elem.localName;
                }
            }
        };

        Ui5List.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            if (relation == 'columns') {
                this._list.removeColumn(child);
            }
        };

        Ui5List.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
            if (this._list !== null) {
                this._list.setBackgroundDesign(newValue);
            }
        };

        Ui5List.prototype.insetChanged = function insetChanged(newValue) {
            if (this._list !== null) {
                this._list.setInset((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.headerTextChanged = function headerTextChanged(newValue) {
            if (this._list !== null) {
                this._list.setHeaderText(newValue);
            }
        };

        Ui5List.prototype.headerDesignChanged = function headerDesignChanged(newValue) {
            if (this._list !== null) {
                this._list.setHeaderDesign(newValue);
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
                this._list.setIncludeItemInSelection((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.showUnreadChanged = function showUnreadChanged(newValue) {
            if (this._list !== null) {
                this._list.setShowUnread((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
            if (this._list !== null) {
                this._list.setNoDataText(newValue);
            }
        };

        Ui5List.prototype.showNoDataChanged = function showNoDataChanged(newValue) {
            if (this._list !== null) {
                this._list.setShowNoData((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.enableBusyIndicatorChanged = function enableBusyIndicatorChanged(newValue) {
            if (this._list !== null) {
                this._list.setEnableBusyIndicator((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.modeAnimationOnChanged = function modeAnimationOnChanged(newValue) {
            if (this._list !== null) {
                this._list.setModeAnimationOn((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
                this._list.setGrowing((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
                this._list.setGrowingScrollToLoad((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.growingDirectionChanged = function growingDirectionChanged(newValue) {
            if (this._list !== null) {
                this._list.setGrowingDirection(newValue);
            }
        };

        Ui5List.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
            if (this._list !== null) {
                this._list.setRememberSelections((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.keyboardModeChanged = function keyboardModeChanged(newValue) {
            if (this._list !== null) {
                this._list.setKeyboardMode(newValue);
            }
        };

        Ui5List.prototype.selectChanged = function selectChanged(newValue) {
            if (this._list !== null) {
                this._list.attachSelect(newValue);
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

        Ui5List.prototype.growingStartedChanged = function growingStartedChanged(newValue) {
            if (this._list !== null) {
                this._list.attachGrowingStarted(newValue);
            }
        };

        Ui5List.prototype.growingFinishedChanged = function growingFinishedChanged(newValue) {
            if (this._list !== null) {
                this._list.attachGrowingFinished(newValue);
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

        Ui5List.prototype.busyChanged = function busyChanged(newValue) {
            if (this._list !== null) {
                this._list.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5List.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._list !== null) {
                this._list.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5List.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._list !== null) {
                this._list.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
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

        _createClass(Ui5List, [{
            key: 'UIElement',
            get: function get() {
                return this._list;
            }
        }]);

        return Ui5List;
    }(_listBase.Ui5ListBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return 'Solid';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'headerDesign', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return 'Standard';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return 'None';
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return '100%';
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparators', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return 'All';
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 'Both';
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return 20;
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return 'Downwards';
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return 'Navigation';
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'select', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'swipe', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'growingStarted', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'growingFinished', [_dec30], {
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
    }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec36], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec37], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec38], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec39], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});