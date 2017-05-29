define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5DynamicPageHeader = undefined;

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

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

    var Ui5DynamicPageHeader = exports.Ui5DynamicPageHeader = (_dec = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-header'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5DynamicPageHeader(element) {
            _classCallCheck(this, Ui5DynamicPageHeader);

            this._header = null;

            _initDefineProp(this, 'pinnable', _descriptor, this);

            this.element = element;
        }

        Ui5DynamicPageHeader.prototype.addChild = function addChild(child, elem) {
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
                    this._header.addContent(child);
                }
            }
        };

        Ui5DynamicPageHeader.prototype.removeChild = function removeChild(child, elem) {
            var path = $(elem).parentsUntil(this.element);
            for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                if (_isArray2) {
                    if (_i2 >= _iterator2.length) break;
                    elem = _iterator2[_i2++];
                } else {
                    _i2 = _iterator2.next();
                    if (_i2.done) break;
                    elem = _i2.value;
                }

                if (elem.localName == 'content') {
                    this._header.removeContent(child);
                }
            }
        };

        Ui5DynamicPageHeader.prototype.defaultPress = function defaultPress() {};

        Ui5DynamicPageHeader.prototype.attached = function attached() {
            var attributeManager = new _attributeManager.AttributeManager(this.element);

            this._header = new sap.f.DynamicPageHeader({
                pinnable: (0, _attributes.getBooleanFromAttributeValue)(this.pinnable)
            });
            if ($(this.element).parents("[ui5-container]").length > 0) {
                $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._header, this.element);
                attributeManager.addAttributes({ "ui5-container": '' });
            }
        };

        Ui5DynamicPageHeader.prototype.detached = function detached() {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._header, this.element);
        };

        Ui5DynamicPageHeader.prototype.pinnableChanged = function pinnableChanged(newValue) {
            if (this._header !== null) {
                this._header.setPinnable((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        return Ui5DynamicPageHeader;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'pinnable', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    })), _class2)) || _class) || _class);
});