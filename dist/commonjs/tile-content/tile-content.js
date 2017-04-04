'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5TileContent = undefined;

var _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2;

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

var Ui5TileContent = exports.Ui5TileContent = (_dec = (0, _aureliaTemplating.customElement)('ui5-tile-content'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5TileContent(element) {
        _classCallCheck(this, Ui5TileContent);

        this._content = null;

        _initDefineProp(this, 'footer', _descriptor, this);

        _initDefineProp(this, 'unit', _descriptor2, this);

        this.element = element;
    }

    Ui5TileContent.prototype.addChild = function addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content') this._content.setContent(child);
    };

    Ui5TileContent.prototype.removeChild = function removeChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content') this._content.destroyContent(child);
    };

    Ui5TileContent.prototype.attached = function attached() {
        this._content = new sap.m.TileContent({
            footer: this.footer,
            unit: this.unit
        });
        $(this.element).parents("ui5-generic-tile")[0].au.controller.viewModel.addChild(this._content, this.element);
    };

    Ui5TileContent.prototype.detached = function detached() {
        $(this.element).parents("ui5-generic-tile")[0].au.controller.viewModel.removeChild(this._content, this.element);
    };

    Ui5TileContent.prototype.footerChanged = function footerChanged(newValue) {
        if (this._content != null) {
            this._content.setFooter(newValue);
        }
    };

    Ui5TileContent.prototype.unitChanged = function unitChanged(newValue) {
        if (this._content != null) {
            this._content.setUnit(newValue);
        }
    };

    return Ui5TileContent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'footer', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'unit', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class) || _class);