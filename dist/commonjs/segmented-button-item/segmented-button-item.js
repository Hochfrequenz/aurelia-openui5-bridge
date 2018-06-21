'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5SegmentedButtonItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _item = require('../item/item');

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

var Ui5SegmentedButtonItem = exports.Ui5SegmentedButtonItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-segmented-button-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaFramework.computedFrom)('_segmentedbuttonitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
    _inherits(Ui5SegmentedButtonItem, _Ui5Item);

    function Ui5SegmentedButtonItem(element) {
        _classCallCheck(this, Ui5SegmentedButtonItem);

        var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

        _this._segmentedbuttonitem = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'icon', _descriptor5, _this);

        _initDefineProp(_this, 'visible', _descriptor6, _this);

        _initDefineProp(_this, 'width', _descriptor7, _this);

        _initDefineProp(_this, 'press', _descriptor8, _this);

        _initDefineProp(_this, 'text', _descriptor9, _this);

        _initDefineProp(_this, 'enabled', _descriptor10, _this);

        _initDefineProp(_this, 'textDirection', _descriptor11, _this);

        _initDefineProp(_this, 'key', _descriptor12, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor13, _this);

        _initDefineProp(_this, 'validationError', _descriptor14, _this);

        _initDefineProp(_this, 'parseError', _descriptor15, _this);

        _initDefineProp(_this, 'formatError', _descriptor16, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor17, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5SegmentedButtonItem.prototype.fillProperties = function fillProperties(params) {
        params.icon = this.icon;
        params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
        params.width = this.width;
        params.press = this.press == null ? this.defaultFunc : this.press;

        _Ui5Item.prototype.fillProperties.call(this, params);
    };

    Ui5SegmentedButtonItem.prototype.defaultFunc = function defaultFunc() {};

    Ui5SegmentedButtonItem.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._segmentedbuttonitem = new sap.m.SegmentedButtonItem(this.ui5Id, params);else this._segmentedbuttonitem = new sap.m.SegmentedButtonItem(params);
        if (this.ui5Class) this._segmentedbuttonitem.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._segmentedbuttonitem.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._segmentedbuttonitem.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._segmentedbuttonitem.placeAt) this._segmentedbuttonitem.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._segmentedbuttonitem.sId });
    };

    Ui5SegmentedButtonItem.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._segmentedbuttonitem) this._parent.removeChildByRelation(this._segmentedbuttonitem, this._relation);
                }
            } else {
                this._segmentedbuttonitem.destroy();
            }
            _Ui5Item.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5SegmentedButtonItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    this._segmentedbuttonitem.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._segmentedbuttonitem.insertCustomData(child, _index);else this._segmentedbuttonitem.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._segmentedbuttonitem.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._segmentedbuttonitem.insertDependent(child, _index);else this._segmentedbuttonitem.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5SegmentedButtonItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._segmentedbuttonitem.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._segmentedbuttonitem.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._segmentedbuttonitem.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._segmentedbuttonitem.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5SegmentedButtonItem.prototype.iconChanged = function iconChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setIcon(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SegmentedButtonItem.prototype.widthChanged = function widthChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setWidth(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.pressChanged = function pressChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.attachPress(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.textChanged = function textChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setText(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SegmentedButtonItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setTextDirection(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.keyChanged = function keyChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.setKey(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.attachValidationSuccess(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.attachValidationError(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.attachParseError(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.attachFormatError(newValue);
        }
    };

    Ui5SegmentedButtonItem.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._segmentedbuttonitem !== null) {
            this._segmentedbuttonitem.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5SegmentedButtonItem, [{
        key: 'UIElement',
        get: function get() {
            return this._segmentedbuttonitem;
        }
    }]);

    return Ui5SegmentedButtonItem;
}(_item.Ui5Item), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec16], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);