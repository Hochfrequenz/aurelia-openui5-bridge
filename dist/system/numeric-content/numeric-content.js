'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Ui5NumericContent;

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

    return {
        setters: [function (_aureliaTemplating) {
            bindable = _aureliaTemplating.bindable;
            customElement = _aureliaTemplating.customElement;
            noView = _aureliaTemplating.noView;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_commonAttributeManager) {
            AttributeManager = _commonAttributeManager.AttributeManager;
        }, function (_commonAttributes) {
            getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
        }],
        execute: function () {
            _export('Ui5NumericContent', Ui5NumericContent = (_dec = customElement('ui5-numeric-content'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
                function Ui5NumericContent(element) {
                    _classCallCheck(this, Ui5NumericContent);

                    this._content = null;

                    _initDefineProp(this, 'icon', _descriptor, this);

                    _initDefineProp(this, 'value', _descriptor2, this);

                    _initDefineProp(this, 'indicator', _descriptor3, this);

                    _initDefineProp(this, 'scale', _descriptor4, this);

                    _initDefineProp(this, 'valueColor', _descriptor5, this);

                    this.element = element;
                }

                Ui5NumericContent.prototype.attached = function attached() {
                    this._content = new sap.m.NumericContent({
                        icon: this.icon,
                        value: this.value,
                        indicator: this.indicator,
                        scale: this.scale,
                        valueColor: this.valueColor
                    });
                    $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
                };

                Ui5NumericContent.prototype.detached = function detached() {
                    $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
                };

                Ui5NumericContent.prototype.iconChanged = function iconChanged(newValue) {
                    if (this._content != null) {
                        this._content.setIcon(newValue);
                    }
                };

                Ui5NumericContent.prototype.valueChanged = function valueChanged(newValue) {
                    if (this._content != null) {
                        this._content.setValue(newValue);
                    }
                };

                Ui5NumericContent.prototype.indicatorChanged = function indicatorChanged(newValue) {
                    if (this._content != null) {
                        this._content.setIndicator(newValue);
                    }
                };

                Ui5NumericContent.prototype.scaleChanged = function scaleChanged(newValue) {
                    if (this._content != null) {
                        this._content.setScale(newValue);
                    }
                };

                Ui5NumericContent.prototype.valueColorChanged = function valueColorChanged(newValue) {
                    if (this._content != null) {
                        this._content.setValueColor(newValue);
                    }
                };

                return Ui5NumericContent;
            }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'indicator', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'scale', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'valueColor', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            })), _class2)) || _class) || _class));

            _export('Ui5NumericContent', Ui5NumericContent);
        }
    };
});