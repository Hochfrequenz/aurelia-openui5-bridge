'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5ImageContent = undefined;

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

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

var Ui5ImageContent = exports.Ui5ImageContent = (_dec = (0, _aureliaTemplating.customElement)('ui5-image-content'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5ImageContent(element) {
        _classCallCheck(this, Ui5ImageContent);

        this._content = null;

        _initDefineProp(this, 'src', _descriptor, this);

        this.element = element;
    }

    Ui5ImageContent.prototype.attached = function attached() {
        this._content = new sap.m.ImageContent({
            src: this.src
        });
        $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    };

    Ui5ImageContent.prototype.detached = function detached() {
        $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    };

    Ui5ImageContent.prototype.srcChanged = function srcChanged(newValue) {
        if (this._content != null) {
            this._content.setSrc(newValue);
        }
    };

    return Ui5ImageContent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'src', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class) || _class);