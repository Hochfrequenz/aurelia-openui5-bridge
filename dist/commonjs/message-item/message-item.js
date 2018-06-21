'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5MessageItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21;

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

var Ui5MessageItem = exports.Ui5MessageItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-message-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaFramework.computedFrom)('_messageitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
    _inherits(Ui5MessageItem, _Ui5Item);

    function Ui5MessageItem(element) {
        _classCallCheck(this, Ui5MessageItem);

        var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

        _this._messageitem = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

        _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

        _initDefineProp(_this, 'prevId', _descriptor4, _this);

        _initDefineProp(_this, 'type', _descriptor5, _this);

        _initDefineProp(_this, 'title', _descriptor6, _this);

        _initDefineProp(_this, 'subtitle', _descriptor7, _this);

        _initDefineProp(_this, 'description', _descriptor8, _this);

        _initDefineProp(_this, 'markupDescription', _descriptor9, _this);

        _initDefineProp(_this, 'longtextUrl', _descriptor10, _this);

        _initDefineProp(_this, 'counter', _descriptor11, _this);

        _initDefineProp(_this, 'groupName', _descriptor12, _this);

        _initDefineProp(_this, 'text', _descriptor13, _this);

        _initDefineProp(_this, 'enabled', _descriptor14, _this);

        _initDefineProp(_this, 'textDirection', _descriptor15, _this);

        _initDefineProp(_this, 'key', _descriptor16, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor17, _this);

        _initDefineProp(_this, 'validationError', _descriptor18, _this);

        _initDefineProp(_this, 'parseError', _descriptor19, _this);

        _initDefineProp(_this, 'formatError', _descriptor20, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor21, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5MessageItem.prototype.fillProperties = function fillProperties(params) {
        params.type = this.type;
        params.title = this.title;
        params.subtitle = this.subtitle;
        params.description = this.description;
        params.markupDescription = (0, _attributes.getBooleanFromAttributeValue)(this.markupDescription);
        params.longtextUrl = this.longtextUrl;
        params.counter = this.counter ? parseInt(this.counter) : 0;
        params.groupName = this.groupName;

        _Ui5Item.prototype.fillProperties.call(this, params);
    };

    Ui5MessageItem.prototype.defaultFunc = function defaultFunc() {};

    Ui5MessageItem.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._messageitem = new sap.m.MessageItem(this.ui5Id, params);else this._messageitem = new sap.m.MessageItem(params);
        if (this.ui5Class) this._messageitem.addStyleClass(this.ui5Class);
        if (this.ui5Tooltip) this._messageitem.setTooltip(this.ui5Tooltip);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._messageitem.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._messageitem, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._messageitem, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._messageitem.placeAt) this._messageitem.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._messageitem.sId });
    };

    Ui5MessageItem.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._messageitem) this._parent.removeChildByRelation(this._messageitem, this._relation);
                }
            } else {
                this._messageitem.destroy();
            }
            _Ui5Item.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5MessageItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'link') {
                    this._messageitem.setLink(child);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._messageitem.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._messageitem.insertCustomData(child, _index);else this._messageitem.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._messageitem.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._messageitem.insertDependent(child, _index);else this._messageitem.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5MessageItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'link') {
                this._messageitem.destroyLink(child);
            }
            if (relation == 'tooltip') {
                this._messageitem.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._messageitem.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._messageitem.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._messageitem.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5MessageItem.prototype.typeChanged = function typeChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setType(newValue);
        }
    };

    Ui5MessageItem.prototype.titleChanged = function titleChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setTitle(newValue);
        }
    };

    Ui5MessageItem.prototype.subtitleChanged = function subtitleChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setSubtitle(newValue);
        }
    };

    Ui5MessageItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setDescription(newValue);
        }
    };

    Ui5MessageItem.prototype.markupDescriptionChanged = function markupDescriptionChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setMarkupDescription((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MessageItem.prototype.longtextUrlChanged = function longtextUrlChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setLongtextUrl(newValue);
        }
    };

    Ui5MessageItem.prototype.counterChanged = function counterChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setCounter(newValue);
        }
    };

    Ui5MessageItem.prototype.groupNameChanged = function groupNameChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setGroupName(newValue);
        }
    };

    Ui5MessageItem.prototype.textChanged = function textChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setText(newValue);
        }
    };

    Ui5MessageItem.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MessageItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setTextDirection(newValue);
        }
    };

    Ui5MessageItem.prototype.keyChanged = function keyChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.setKey(newValue);
        }
    };

    Ui5MessageItem.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.attachValidationSuccess(newValue);
        }
    };

    Ui5MessageItem.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.attachValidationError(newValue);
        }
    };

    Ui5MessageItem.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.attachParseError(newValue);
        }
    };

    Ui5MessageItem.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.attachFormatError(newValue);
        }
    };

    Ui5MessageItem.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._messageitem !== null) {
            this._messageitem.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5MessageItem, [{
        key: 'UIElement',
        get: function get() {
            return this._messageitem;
        }
    }]);

    return Ui5MessageItem;
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return 'Error';
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'subtitle', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'markupDescription', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'longtextUrl', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'groupName', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return '';
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return 'Inherit';
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec20], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);