'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5MessageView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

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

var Ui5MessageView = exports.Ui5MessageView = (_dec = (0, _aureliaTemplating.customElement)('ui5-message-view'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaFramework.computedFrom)('_messageview'), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5MessageView(element) {
        _classCallCheck(this, Ui5MessageView);

        this._messageview = null;
        this._parent = null;
        this._relation = null;

        _initDefineProp(this, 'ui5Id', _descriptor, this);

        _initDefineProp(this, 'asyncDescriptionHandler', _descriptor2, this);

        _initDefineProp(this, 'asyncURLHandler', _descriptor3, this);

        _initDefineProp(this, 'groupItems', _descriptor4, this);

        _initDefineProp(this, 'afterOpen', _descriptor5, this);

        _initDefineProp(this, 'itemSelect', _descriptor6, this);

        _initDefineProp(this, 'listSelect', _descriptor7, this);

        _initDefineProp(this, 'longtextLoaded', _descriptor8, this);

        _initDefineProp(this, 'urlValidated', _descriptor9, this);

        this.element = element;
        this.attributeManager = new _attributeManager.AttributeManager(this.element);
    }

    Ui5MessageView.prototype.fillProperties = function fillProperties(params) {
        params.asyncDescriptionHandler = this.asyncDescriptionHandler;
        params.asyncURLHandler = this.asyncURLHandler;
        params.groupItems = (0, _attributes.getBooleanFromAttributeValue)(this.groupItems);
        params.afterOpen = this.afterOpen == null ? this.defaultFunc : this.afterOpen;
        params.itemSelect = this.itemSelect == null ? this.defaultFunc : this.itemSelect;
        params.listSelect = this.listSelect == null ? this.defaultFunc : this.listSelect;
        params.longtextLoaded = this.longtextLoaded == null ? this.defaultFunc : this.longtextLoaded;
        params.urlValidated = this.urlValidated == null ? this.defaultFunc : this.urlValidated;
    };

    Ui5MessageView.prototype.defaultFunc = function defaultFunc() {};

    Ui5MessageView.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);

        if (this.ui5Id) this._messageview = new sap.m.MessageView(this.ui5Id, params);else this._messageview = new sap.m.MessageView(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._messageview.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._messageview, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._messageview, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._messageview, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._messageview.placeAt) this._messageview.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._messageview.sId });
    };

    Ui5MessageView.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    this._parent.removeChildByRelation(this._messageview, this._relation);
                }
            } else {
                this._messageview.destroy();
            }
        } catch (err) {}
    };

    Ui5MessageView.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    var _index = null;if (afterElement) _index = this._messageview.indexOfItem(afterElement);if (_index) this._messageview.insertItem(child, _index + 1);else this._messageview.addItem(child, 0);return elem.localName;
                }
                if (elem.localName == 'headerbutton') {
                    this._messageview.setHeaderButton(child);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5MessageView.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'items') {
                this._messageview.removeItem(child);
            }
            if (relation == 'headerButton') {
                this._messageview.destroyHeaderButton(child);
            }
        } catch (err) {}
    };

    Ui5MessageView.prototype.asyncDescriptionHandlerChanged = function asyncDescriptionHandlerChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.setAsyncDescriptionHandler(newValue);
        }
    };

    Ui5MessageView.prototype.asyncURLHandlerChanged = function asyncURLHandlerChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.setAsyncURLHandler(newValue);
        }
    };

    Ui5MessageView.prototype.groupItemsChanged = function groupItemsChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.setGroupItems((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5MessageView.prototype.afterOpenChanged = function afterOpenChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.attachAfterOpen(newValue);
        }
    };

    Ui5MessageView.prototype.itemSelectChanged = function itemSelectChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.attachItemSelect(newValue);
        }
    };

    Ui5MessageView.prototype.listSelectChanged = function listSelectChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.attachListSelect(newValue);
        }
    };

    Ui5MessageView.prototype.longtextLoadedChanged = function longtextLoadedChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.attachLongtextLoaded(newValue);
        }
    };

    Ui5MessageView.prototype.urlValidatedChanged = function urlValidatedChanged(newValue) {
        if (this._messageview !== null) {
            this._messageview.attachUrlValidated(newValue);
        }
    };

    _createClass(Ui5MessageView, [{
        key: 'UIElement',
        get: function get() {
            return this._messageview;
        }
    }]);

    return Ui5MessageView;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'asyncDescriptionHandler', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'asyncURLHandler', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'groupItems', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelect', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'listSelect', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'longtextLoaded', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'urlValidated', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);