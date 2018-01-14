'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5Table = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _listBase = require('../list-base/list-base');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Ui5Table = exports.Ui5Table = (_dec = (0, _aureliaTemplating.customElement)('ui5-table'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaTemplating.bindable)(), _dec40 = (0, _aureliaTemplating.bindable)(), _dec41 = (0, _aureliaFramework.computedFrom)('_table'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListBase) {
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

        _initDefineProp(_this, 'inset', _descriptor5, _this);

        _initDefineProp(_this, 'headerText', _descriptor6, _this);

        _initDefineProp(_this, 'headerDesign', _descriptor7, _this);

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

        _initDefineProp(_this, 'select', _descriptor26, _this);

        _initDefineProp(_this, 'selectionChange', _descriptor27, _this);

        _initDefineProp(_this, 'delete', _descriptor28, _this);

        _initDefineProp(_this, 'swipe', _descriptor29, _this);

        _initDefineProp(_this, 'growingStarted', _descriptor30, _this);

        _initDefineProp(_this, 'growingFinished', _descriptor31, _this);

        _initDefineProp(_this, 'updateStarted', _descriptor32, _this);

        _initDefineProp(_this, 'updateFinished', _descriptor33, _this);

        _initDefineProp(_this, 'itemPress', _descriptor34, _this);

        _initDefineProp(_this, 'busy', _descriptor35, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor36, _this);

        _initDefineProp(_this, 'visible', _descriptor37, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor38, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor39, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5Table.prototype.fillProperties = function fillProperties(params) {
        params.backgroundDesign = this.backgroundDesign;
        params.fixedLayout = (0, _attributes.getBooleanFromAttributeValue)(this.fixedLayout);
        params.showOverlay = (0, _attributes.getBooleanFromAttributeValue)(this.showOverlay);
    };

    Ui5Table.prototype.defaultFunc = function defaultFunc() {};

    Ui5Table.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        _Ui5ListBase.prototype.fillProperties.call(this, params);
        if (this.ui5Id) this._table = new sap.m.Table(this.ui5Id, params);else this._table = new sap.m.Table(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._table.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._table, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
            this._parent.removeChildByRelation(this._table, this._relation);
        } else {
            this._table.destroy();
        }
        _Ui5ListBase.prototype.detached.call(this);
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

            if (elem.localName == 'columns') {
                var _index = null;if (afterElement) _index = this._table.indexOfColumn(afterElement);if (_index) this._table.insertColumn(child, _index + 1);else this._table.addColumn(child, 0);return elem.localName;
            }
        }
    };

    Ui5Table.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        if (relation == 'columns') {
            this._table.removeColumn(child);
        }
    };

    Ui5Table.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
        if (this._table !== null) {
            this._table.setBackgroundDesign(newValue);
        }
    };

    Ui5Table.prototype.fixedLayoutChanged = function fixedLayoutChanged(newValue) {
        if (this._table !== null) {
            this._table.setFixedLayout((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.showOverlayChanged = function showOverlayChanged(newValue) {
        if (this._table !== null) {
            this._table.setShowOverlay((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.insetChanged = function insetChanged(newValue) {
        if (this._table !== null) {
            this._table.setInset((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.headerTextChanged = function headerTextChanged(newValue) {
        if (this._table !== null) {
            this._table.setHeaderText(newValue);
        }
    };

    Ui5Table.prototype.headerDesignChanged = function headerDesignChanged(newValue) {
        if (this._table !== null) {
            this._table.setHeaderDesign(newValue);
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
            this._table.setIncludeItemInSelection((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.showUnreadChanged = function showUnreadChanged(newValue) {
        if (this._table !== null) {
            this._table.setShowUnread((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
        if (this._table !== null) {
            this._table.setNoDataText(newValue);
        }
    };

    Ui5Table.prototype.showNoDataChanged = function showNoDataChanged(newValue) {
        if (this._table !== null) {
            this._table.setShowNoData((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.enableBusyIndicatorChanged = function enableBusyIndicatorChanged(newValue) {
        if (this._table !== null) {
            this._table.setEnableBusyIndicator((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.modeAnimationOnChanged = function modeAnimationOnChanged(newValue) {
        if (this._table !== null) {
            this._table.setModeAnimationOn((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
            this._table.setGrowing((0, _attributes.getBooleanFromAttributeValue)(newValue));
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
            this._table.setGrowingScrollToLoad((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.growingDirectionChanged = function growingDirectionChanged(newValue) {
        if (this._table !== null) {
            this._table.setGrowingDirection(newValue);
        }
    };

    Ui5Table.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
        if (this._table !== null) {
            this._table.setRememberSelections((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.keyboardModeChanged = function keyboardModeChanged(newValue) {
        if (this._table !== null) {
            this._table.setKeyboardMode(newValue);
        }
    };

    Ui5Table.prototype.selectChanged = function selectChanged(newValue) {
        if (this._table !== null) {
            this._table.attachSelect(newValue);
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

    Ui5Table.prototype.growingStartedChanged = function growingStartedChanged(newValue) {
        if (this._table !== null) {
            this._table.attachGrowingStarted(newValue);
        }
    };

    Ui5Table.prototype.growingFinishedChanged = function growingFinishedChanged(newValue) {
        if (this._table !== null) {
            this._table.attachGrowingFinished(newValue);
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
            this._table.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5Table.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._table !== null) {
            this._table.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5Table.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._table !== null) {
            this._table.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
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

    _createClass(Ui5Table, [{
        key: 'UIElement',
        get: function get() {
            return this._table;
        }
    }]);

    return Ui5Table;
}(_listBase.Ui5ListBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'headerDesign', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return 'Standard';
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return '100%';
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparators', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return 'All';
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return 'Both';
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return 20;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return 'Downwards';
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return 'Navigation';
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'select', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
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
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'growingStarted', [_dec31], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'growingFinished', [_dec32], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'updateStarted', [_dec33], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'updateFinished', [_dec34], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'itemPress', [_dec35], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec36], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec37], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec38], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec39], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec40], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec41], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);