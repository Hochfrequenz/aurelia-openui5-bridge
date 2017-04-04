define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5GenericTile = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

    var Ui5GenericTile = exports.Ui5GenericTile = (_dec = (0, _aureliaTemplating.customElement)('ui5-generic-tile'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5GenericTile(element) {
            _classCallCheck(this, Ui5GenericTile);

            this._tile = null;

            _initDefineProp(this, 'mode', _descriptor, this);

            _initDefineProp(this, 'header', _descriptor2, this);

            _initDefineProp(this, 'subheader', _descriptor3, this);

            _initDefineProp(this, 'press', _descriptor4, this);

            _initDefineProp(this, 'frameType', _descriptor5, this);

            this.element = element;
        }

        Ui5GenericTile.prototype.addChild = function addChild(child, elem) {
            var path = $(elem).parentsUntil(this.element);
            if (path[0].localName == 'content') this._tile.addTileContent(child);
        };

        Ui5GenericTile.prototype.removeChild = function removeChild(child, elem) {
            var path = $(elem).parentsUntil(this.element);
            if (path[0].localName == 'content') this._tile.removeTileContent(child);
        };

        Ui5GenericTile.prototype.defaultPress = function defaultPress() {};

        Ui5GenericTile.prototype.attached = function attached() {
            this._tile = new sap.m.GenericTile({
                header: this.header,
                subheader: this.subheader,
                press: this.press != null ? this.press : this.defaultPress,
                frameType: this.frameType
            });
            this._tile.addStyleClass('sapUiTinyMarginTop');
            this._tile.addStyleClass('sapUiTinyMarginBegin');

            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tile, this.element);
        };

        Ui5GenericTile.prototype.detached = function detached() {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tile, this.element);
        };

        Ui5GenericTile.prototype.headerChanged = function headerChanged(newValue) {
            if (this._tile != null) {
                this._tile.setHeader(newValue);
            }
        };

        Ui5GenericTile.prototype.subheaderChanged = function subheaderChanged(newValue) {
            if (this._tile != null) {
                this._tile.setSubheader(newValue);
            }
        };

        Ui5GenericTile.prototype.pressChanged = function pressChanged(newValue) {
            if (this._tile !== null) {
                this._tile.attachPress(newValue);
            }
        };

        Ui5GenericTile.prototype.frameTypeChanged = function frameTypeChanged(newValue) {
            if (this._tile !== null) {
                this._tile.setFrameType(newValue);
            }
        };

        return Ui5GenericTile;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return "content";
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'header', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'subheader', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'frameType', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    })), _class2)) || _class) || _class);
});