define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../form-layout/form-layout'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _formLayout) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5ResponsiveGridLayout = undefined;

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

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;

    var Ui5ResponsiveGridLayout = exports.Ui5ResponsiveGridLayout = (_dec = (0, _aureliaTemplating.customElement)('ui5-responsive-grid-layout'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaFramework.computedFrom)('_responsivegridlayout'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5FormLayout) {
        _inherits(Ui5ResponsiveGridLayout, _Ui5FormLayout);

        function Ui5ResponsiveGridLayout(element) {
            _classCallCheck(this, Ui5ResponsiveGridLayout);

            var _this = _possibleConstructorReturn(this, _Ui5FormLayout.call(this, element));

            _this._responsivegridlayout = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'labelSpanXL', _descriptor2, _this);

            _initDefineProp(_this, 'labelSpanL', _descriptor3, _this);

            _initDefineProp(_this, 'labelSpanM', _descriptor4, _this);

            _initDefineProp(_this, 'labelSpanS', _descriptor5, _this);

            _initDefineProp(_this, 'adjustLabelSpan', _descriptor6, _this);

            _initDefineProp(_this, 'emptySpanXL', _descriptor7, _this);

            _initDefineProp(_this, 'emptySpanL', _descriptor8, _this);

            _initDefineProp(_this, 'emptySpanM', _descriptor9, _this);

            _initDefineProp(_this, 'emptySpanS', _descriptor10, _this);

            _initDefineProp(_this, 'columnsXL', _descriptor11, _this);

            _initDefineProp(_this, 'columnsL', _descriptor12, _this);

            _initDefineProp(_this, 'columnsM', _descriptor13, _this);

            _initDefineProp(_this, 'singleContainerFullSize', _descriptor14, _this);

            _initDefineProp(_this, 'breakpointXL', _descriptor15, _this);

            _initDefineProp(_this, 'breakpointL', _descriptor16, _this);

            _initDefineProp(_this, 'breakpointM', _descriptor17, _this);

            _initDefineProp(_this, 'backgroundDesign', _descriptor18, _this);

            _initDefineProp(_this, 'busy', _descriptor19, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor20, _this);

            _initDefineProp(_this, 'visible', _descriptor21, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor22, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor23, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5ResponsiveGridLayout.prototype.fillProperties = function fillProperties(params) {
            params.labelSpanXL = this.labelSpanXL ? parseInt(this.labelSpanXL) : 0;
            params.labelSpanL = this.labelSpanL ? parseInt(this.labelSpanL) : 0;
            params.labelSpanM = this.labelSpanM ? parseInt(this.labelSpanM) : 0;
            params.labelSpanS = this.labelSpanS ? parseInt(this.labelSpanS) : 0;
            params.adjustLabelSpan = (0, _attributes.getBooleanFromAttributeValue)(this.adjustLabelSpan);
            params.emptySpanXL = this.emptySpanXL ? parseInt(this.emptySpanXL) : 0;
            params.emptySpanL = this.emptySpanL ? parseInt(this.emptySpanL) : 0;
            params.emptySpanM = this.emptySpanM ? parseInt(this.emptySpanM) : 0;
            params.emptySpanS = this.emptySpanS ? parseInt(this.emptySpanS) : 0;
            params.columnsXL = this.columnsXL ? parseInt(this.columnsXL) : 0;
            params.columnsL = this.columnsL ? parseInt(this.columnsL) : 0;
            params.columnsM = this.columnsM ? parseInt(this.columnsM) : 0;
            params.singleContainerFullSize = (0, _attributes.getBooleanFromAttributeValue)(this.singleContainerFullSize);
            params.breakpointXL = this.breakpointXL ? parseInt(this.breakpointXL) : 0;
            params.breakpointL = this.breakpointL ? parseInt(this.breakpointL) : 0;
            params.breakpointM = this.breakpointM ? parseInt(this.breakpointM) : 0;
        };

        Ui5ResponsiveGridLayout.prototype.defaultFunc = function defaultFunc() {};

        Ui5ResponsiveGridLayout.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            _Ui5FormLayout.prototype.fillProperties.call(this, params);
            if (this.ui5Id) this._responsivegridlayout = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);else this._responsivegridlayout = new sap.ui.layout.form.ResponsiveGridLayout(params);
            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._responsivegridlayout.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._responsivegridlayout, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._responsivegridlayout, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._responsivegridlayout, this.element);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._responsivegridlayout.placeAt) this._responsivegridlayout.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._responsivegridlayout.sId });
        };

        Ui5ResponsiveGridLayout.prototype.detached = function detached() {
            if (this._parent && this._relation) {
                this._parent.removeChildByRelation(this._responsivegridlayout, this._relation);
            } else {
                this._responsivegridlayout.destroy();
            }
            _Ui5FormLayout.prototype.detached.call(this);
        };

        Ui5ResponsiveGridLayout.prototype.addChild = function addChild(child, elem, afterElement) {
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
            }
        };

        Ui5ResponsiveGridLayout.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

        Ui5ResponsiveGridLayout.prototype.labelSpanXLChanged = function labelSpanXLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setLabelSpanXL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.labelSpanLChanged = function labelSpanLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setLabelSpanL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.labelSpanMChanged = function labelSpanMChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setLabelSpanM(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.labelSpanSChanged = function labelSpanSChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setLabelSpanS(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.adjustLabelSpanChanged = function adjustLabelSpanChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setAdjustLabelSpan((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ResponsiveGridLayout.prototype.emptySpanXLChanged = function emptySpanXLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setEmptySpanXL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.emptySpanLChanged = function emptySpanLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setEmptySpanL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.emptySpanMChanged = function emptySpanMChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setEmptySpanM(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.emptySpanSChanged = function emptySpanSChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setEmptySpanS(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.columnsXLChanged = function columnsXLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setColumnsXL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.columnsLChanged = function columnsLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setColumnsL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.columnsMChanged = function columnsMChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setColumnsM(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.singleContainerFullSizeChanged = function singleContainerFullSizeChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setSingleContainerFullSize((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ResponsiveGridLayout.prototype.breakpointXLChanged = function breakpointXLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setBreakpointXL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.breakpointLChanged = function breakpointLChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setBreakpointL(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.breakpointMChanged = function breakpointMChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setBreakpointM(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setBackgroundDesign(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.busyChanged = function busyChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ResponsiveGridLayout.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5ResponsiveGridLayout.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.setFieldGroupIds(newValue);
            }
        };

        Ui5ResponsiveGridLayout.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._responsivegridlayout !== null) {
                this._responsivegridlayout.attachValidateFieldGroup(newValue);
            }
        };

        _createClass(Ui5ResponsiveGridLayout, [{
            key: 'UIElement',
            get: function get() {
                return this._responsivegridlayout;
            }
        }]);

        return Ui5ResponsiveGridLayout;
    }(_formLayout.Ui5FormLayout), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanXL', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanL', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return 4;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanM', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return 2;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanS', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return 12;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'adjustLabelSpan', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanXL', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanL', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanM', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanS', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'columnsXL', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'columnsL', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return 2;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'columnsM', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return 1;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'singleContainerFullSize', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointXL', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return 1440;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointL', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 1024;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointM', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return 600;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return 'Translucent';
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec25], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});