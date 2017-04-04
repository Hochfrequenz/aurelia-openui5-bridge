'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5StandardTile = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

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

var Ui5StandardTile = exports.Ui5StandardTile = (_dec = (0, _aureliaTemplating.customElement)('ui5-standard-tile'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5StandardTile(element) {
        _classCallCheck(this, Ui5StandardTile);

        this._tile = null;

        _initDefineProp(this, 'type', _descriptor, this);

        _initDefineProp(this, 'title', _descriptor2, this);

        _initDefineProp(this, 'number', _descriptor3, this);

        _initDefineProp(this, 'info', _descriptor4, this);

        _initDefineProp(this, 'infoState', _descriptor5, this);

        _initDefineProp(this, 'numberUnit', _descriptor6, this);

        _initDefineProp(this, 'icon', _descriptor7, this);

        _initDefineProp(this, 'press', _descriptor8, this);

        this.element = element;
    }

    Ui5StandardTile.prototype.defaultPress = function defaultPress() {};

    Ui5StandardTile.prototype.attached = function attached() {
        this._tile = new sap.m.StandardTile({
            type: this.type,
            title: this.title,
            number: this.number,
            info: this.info,
            infoState: this.infoState,
            numberUnit: this.numberUnit,
            icon: this.icon,
            press: this.press != null ? this.press : this.defaultPress
        });
        $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.addChild(this._tile, this.element);
    };

    Ui5StandardTile.prototype.detached = function detached() {
        $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.removeChild(this._tile, this.element);
    };

    Ui5StandardTile.prototype.typeChanged = function typeChanged(newValue) {
        if (this._tile != null) {
            this._tile.setType(newValue);
        }
    };

    Ui5StandardTile.prototype.titleChanged = function titleChanged(newValue) {
        if (this._tile != null) {
            this._tile.setTitle(newValue);
        }
    };

    Ui5StandardTile.prototype.numberChanged = function numberChanged(newValue) {
        if (this._tile != null) {
            this._tile.setNumber(newValue);
        }
    };

    Ui5StandardTile.prototype.numberUnitChanged = function numberUnitChanged(newValue) {
        if (this._tile != null) {
            this._tile.setNumberUnit(newValue);
        }
    };

    Ui5StandardTile.prototype.infoChanged = function infoChanged(newValue) {
        if (this._tile != null) {
            this._tile.setInfo(newValue);
        }
    };

    Ui5StandardTile.prototype.infoStateChanged = function infoStateChanged(newValue) {
        if (this._tile != null) {
            this._tile.setInfoState(newValue);
        }
    };

    Ui5StandardTile.prototype.iconChanged = function iconChanged(newValue) {
        if (this._tile != null) {
            this._tile.setIcon(newValue);
        }
    };

    Ui5StandardTile.prototype.pressChanged = function pressChanged(newValue) {
        if (this._tile !== null) {
            this._tile.attachPress(newValue);
        }
    };

    return Ui5StandardTile;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'number', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'info', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'infoState', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'numberUnit', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class) || _class);