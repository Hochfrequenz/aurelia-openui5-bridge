'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5Grid = undefined;

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

var Ui5Grid = exports.Ui5Grid = (_dec = (0, _aureliaTemplating.customElement)('ui5-grid'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5Grid(element) {
        _classCallCheck(this, Ui5Grid);

        this._grid = null;

        _initDefineProp(this, 'defaultSpan', _descriptor, this);

        this.element = element;
    }

    Ui5Grid.prototype.addChild = function addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            if (_isArray) {
                if (_i >= _iterator.length) break;
                elem = _iterator[_i++];
            } else {
                _i = _iterator.next();
                if (_i.done) break;
                elem = _i.value;
            }

            if (elem.localName == 'content') {
                this._grid.addContent(child);
                break;
            }
        }
    };

    Ui5Grid.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        if (relation == 'content') {
            this._grid.removeContent(child);
        }
    };

    Ui5Grid.prototype.removeChild = function removeChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content') this._grid.removeContent(child);
    };

    Ui5Grid.prototype.defaultPress = function defaultPress() {};

    Ui5Grid.prototype.attached = function attached() {
        var attributeManager = new _attributeManager.AttributeManager(this.element);

        this._grid = new sap.ui.layout.Grid({
            defaultSpan: this.defaultSpan
        });
        if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._grid, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
        }
    };

    Ui5Grid.prototype.detached = function detached() {
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._grid, this.element);
    };

    Ui5Grid.prototype.defaultSpanChanged = function defaultSpanChanged(newValue) {
        if (this._grid != null) {
            this._grid.setDefaultSpan(newValue);
        }
    };

    return Ui5Grid;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'defaultSpan', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
})), _class2)) || _class) || _class);