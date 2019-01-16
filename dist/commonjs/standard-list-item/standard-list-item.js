'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5StandardListItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _listItemBase = require('../list-item-base/list-item-base');

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

var Ui5StandardListItem = exports.Ui5StandardListItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-standard-list-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaFramework.computedFrom)('_standardlistitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListItemBase) {
    _inherits(Ui5StandardListItem, _Ui5ListItemBase);

    function Ui5StandardListItem(element) {
        _classCallCheck(this, Ui5StandardListItem);

        var _this = _possibleConstructorReturn(this, _Ui5ListItemBase.call(this, element));

        _this._standardlistitem = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'title', _descriptor5, _this);

        _initDefineProp(_this, 'description', _descriptor6, _this);

        _initDefineProp(_this, 'icon', _descriptor7, _this);

        _initDefineProp(_this, 'iconInset', _descriptor8, _this);

        _initDefineProp(_this, 'iconDensityAware', _descriptor9, _this);

        _initDefineProp(_this, 'activeIcon', _descriptor10, _this);

        _initDefineProp(_this, 'info', _descriptor11, _this);

        _initDefineProp(_this, 'infoState', _descriptor12, _this);

        _initDefineProp(_this, 'adaptTitleSize', _descriptor13, _this);

        _initDefineProp(_this, 'titleTextDirection', _descriptor14, _this);

        _initDefineProp(_this, 'infoTextDirection', _descriptor15, _this);

        _initDefineProp(_this, 'type', _descriptor16, _this);

        _initDefineProp(_this, 'visible', _descriptor17, _this);

        _initDefineProp(_this, 'unread', _descriptor18, _this);

        _initDefineProp(_this, 'selected', _descriptor19, _this);

        _initDefineProp(_this, 'counter', _descriptor20, _this);

        _initDefineProp(_this, 'highlight', _descriptor21, _this);

        _initDefineProp(_this, 'press', _descriptor22, _this);

        _initDefineProp(_this, 'detailPress', _descriptor23, _this);

        _initDefineProp(_this, 'blocked', _descriptor24, _this);

        _initDefineProp(_this, 'busy', _descriptor25, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor26, _this);

        _initDefineProp(_this, 'busyIndicatorSize', _descriptor27, _this);

        _initDefineProp(_this, 'visible', _descriptor28, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor29, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor30, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor31, _this);

        _initDefineProp(_this, 'validationError', _descriptor32, _this);

        _initDefineProp(_this, 'parseError', _descriptor33, _this);

        _initDefineProp(_this, 'formatError', _descriptor34, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor35, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5StandardListItem.prototype.fillProperties = function fillProperties(params) {
        params.title = this.title;
        params.description = this.description;
        params.icon = this.icon;
        params.iconInset = (0, _attributes.getBooleanFromAttributeValue)(this.iconInset);
        params.iconDensityAware = (0, _attributes.getBooleanFromAttributeValue)(this.iconDensityAware);
        params.activeIcon = this.activeIcon;
        params.info = this.info;
        params.infoState = this.infoState;
        params.adaptTitleSize = (0, _attributes.getBooleanFromAttributeValue)(this.adaptTitleSize);
        params.titleTextDirection = this.titleTextDirection;
        params.infoTextDirection = this.infoTextDirection;

        _Ui5ListItemBase.prototype.fillProperties.call(this, params);
    };

    Ui5StandardListItem.prototype.defaultFunc = function defaultFunc() {};

    Ui5StandardListItem.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._standardlistitem = new sap.m.StandardListItem(this.ui5Id, params);else this._standardlistitem = new sap.m.StandardListItem(params);
        if (this.ui5Class) this._standardlistitem.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._standardlistitem.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._standardlistitem.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._standardlistitem, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._standardlistitem, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._standardlistitem.placeAt) this._standardlistitem.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._standardlistitem.sId });
    };

    Ui5StandardListItem.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._standardlistitem) this._parent.removeChildByRelation(this._standardlistitem, this._relation);
                }
            } else {
                this._standardlistitem.destroy();
            }
            _Ui5ListItemBase.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5StandardListItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'tooltip') {
                    this._standardlistitem.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._standardlistitem.insertCustomData(child, _index);else this._standardlistitem.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._standardlistitem.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._standardlistitem.insertDependent(child, _index);else this._standardlistitem.addDependent(child, 0);return elem.localName;
                }
                if (elem.localName == 'dragdropconfig') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._standardlistitem.insertDragDropConfig(child, _index);else this._standardlistitem.addDragDropConfig(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5StandardListItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._standardlistitem.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._standardlistitem.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._standardlistitem.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._standardlistitem.removeDependent(child);
            }
            if (relation == 'dragdropconfig') {
                this._standardlistitem.removeDragDropConfig(child);
            }
        } catch (err) {}
    };

    Ui5StandardListItem.prototype.titleChanged = function titleChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setTitle(newValue);
        }
    };

    Ui5StandardListItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setDescription(newValue);
        }
    };

    Ui5StandardListItem.prototype.iconChanged = function iconChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setIcon(newValue);
        }
    };

    Ui5StandardListItem.prototype.iconInsetChanged = function iconInsetChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setIconInset((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.iconDensityAwareChanged = function iconDensityAwareChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setIconDensityAware((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.activeIconChanged = function activeIconChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setActiveIcon(newValue);
        }
    };

    Ui5StandardListItem.prototype.infoChanged = function infoChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setInfo(newValue);
        }
    };

    Ui5StandardListItem.prototype.infoStateChanged = function infoStateChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setInfoState(newValue);
        }
    };

    Ui5StandardListItem.prototype.adaptTitleSizeChanged = function adaptTitleSizeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setAdaptTitleSize((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.titleTextDirectionChanged = function titleTextDirectionChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setTitleTextDirection(newValue);
        }
    };

    Ui5StandardListItem.prototype.infoTextDirectionChanged = function infoTextDirectionChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.setInfoTextDirection(newValue);
        }
    };

    Ui5StandardListItem.prototype.typeChanged = function typeChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setType(newValue);
        }
    };

    Ui5StandardListItem.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.unreadChanged = function unreadChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setUnread((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.selectedChanged = function selectedChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setSelected((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.counterChanged = function counterChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setCounter(newValue);
        }
    };

    Ui5StandardListItem.prototype.highlightChanged = function highlightChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setHighlight(newValue);
        }
    };

    Ui5StandardListItem.prototype.pressChanged = function pressChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachPress(newValue);
        }
    };

    Ui5StandardListItem.prototype.detailPressChanged = function detailPressChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachDetailPress(newValue);
        }
    };

    Ui5StandardListItem.prototype.blockedChanged = function blockedChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setBlocked((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.busyChanged = function busyChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5StandardListItem.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setBusyIndicatorSize(newValue);
        }
    };

    Ui5StandardListItem.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5StandardListItem.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._standardlistitem !== null) {
            this._standardlistitem.setFieldGroupIds(newValue);
        }
    };

    Ui5StandardListItem.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachValidateFieldGroup(newValue);
        }
    };

    Ui5StandardListItem.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachValidationSuccess(newValue);
        }
    };

    Ui5StandardListItem.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachValidationError(newValue);
        }
    };

    Ui5StandardListItem.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachParseError(newValue);
        }
    };

    Ui5StandardListItem.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachFormatError(newValue);
        }
    };

    Ui5StandardListItem.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (newValue != null && newValue != undefined && this._standardlistitem !== null) {
            this._standardlistitem.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5StandardListItem, [{
        key: 'UIElement',
        get: function get() {
            return this._standardlistitem;
        }
    }]);

    return Ui5StandardListItem;
}(_listItemBase.Ui5ListItemBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'iconInset', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'iconDensityAware', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'activeIcon', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'info', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'infoState', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'adaptTitleSize', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'titleTextDirection', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'infoTextDirection', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inactive';
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'unread', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'highlight', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'detailPress', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec29], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec30], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec31], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec32], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec33], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec34], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);