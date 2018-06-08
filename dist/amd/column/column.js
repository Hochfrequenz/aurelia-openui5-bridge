define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _element) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Column = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

    var Ui5Column = exports.Ui5Column = (_dec = (0, _aureliaTemplating.customElement)('ui5-column'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaFramework.computedFrom)('_column'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
        _inherits(Ui5Column, _Ui5Element);

        function Ui5Column(element) {
            _classCallCheck(this, Ui5Column);

            var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

            _this._column = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'prevId', _descriptor2, _this);

            _initDefineProp(_this, 'width', _descriptor3, _this);

            _initDefineProp(_this, 'hAlign', _descriptor4, _this);

            _initDefineProp(_this, 'vAlign', _descriptor5, _this);

            _initDefineProp(_this, 'styleClass', _descriptor6, _this);

            _initDefineProp(_this, 'visible', _descriptor7, _this);

            _initDefineProp(_this, 'minScreenWidth', _descriptor8, _this);

            _initDefineProp(_this, 'demandPopin', _descriptor9, _this);

            _initDefineProp(_this, 'popinDisplay', _descriptor10, _this);

            _initDefineProp(_this, 'mergeDuplicates', _descriptor11, _this);

            _initDefineProp(_this, 'mergeFunctionName', _descriptor12, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor13, _this);

            _initDefineProp(_this, 'validationError', _descriptor14, _this);

            _initDefineProp(_this, 'parseError', _descriptor15, _this);

            _initDefineProp(_this, 'formatError', _descriptor16, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor17, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5Column.prototype.fillProperties = function fillProperties(params) {
            params.width = this.width;
            params.hAlign = this.hAlign;
            params.vAlign = this.vAlign;
            params.styleClass = this.styleClass;
            params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
            params.minScreenWidth = this.minScreenWidth;
            params.demandPopin = (0, _attributes.getBooleanFromAttributeValue)(this.demandPopin);
            params.popinDisplay = this.popinDisplay;
            params.mergeDuplicates = (0, _attributes.getBooleanFromAttributeValue)(this.mergeDuplicates);
            params.mergeFunctionName = this.mergeFunctionName;

            _Ui5Element.prototype.fillProperties.call(this, params);
        };

        Ui5Column.prototype.defaultFunc = function defaultFunc() {};

        Ui5Column.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._column = new sap.m.Column(this.ui5Id, params);else this._column = new sap.m.Column(params);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._column.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._column, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._column, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._column.placeAt) this._column.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._column.sId });
        };

        Ui5Column.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._column) this._parent.removeChildByRelation(this._column, this._relation);
                    }
                } else {
                    this._column.destroy();
                }
                _Ui5Element.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5Column.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'header') {
                        this._column.setHeader(child);return elem.localName;
                    }
                    if (elem.localName == 'footer') {
                        this._column.setFooter(child);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._column.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._column.insertCustomData(child, _index);else this._column.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._column.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._column.insertDependent(child, _index);else this._column.addDependent(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5Column.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'header') {
                    this._column.destroyHeader(child);
                }
                if (relation == 'footer') {
                    this._column.destroyFooter(child);
                }
                if (relation == 'tooltip') {
                    this._column.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._column.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._column.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._column.removeDependent(child);
                }
            } catch (err) {}
        };

        Ui5Column.prototype.widthChanged = function widthChanged(newValue) {
            if (this._column !== null) {
                this._column.setWidth(newValue);
            }
        };

        Ui5Column.prototype.hAlignChanged = function hAlignChanged(newValue) {
            if (this._column !== null) {
                this._column.setHAlign(newValue);
            }
        };

        Ui5Column.prototype.vAlignChanged = function vAlignChanged(newValue) {
            if (this._column !== null) {
                this._column.setVAlign(newValue);
            }
        };

        Ui5Column.prototype.styleClassChanged = function styleClassChanged(newValue) {
            if (this._column !== null) {
                this._column.setStyleClass(newValue);
            }
        };

        Ui5Column.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._column !== null) {
                this._column.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Column.prototype.minScreenWidthChanged = function minScreenWidthChanged(newValue) {
            if (this._column !== null) {
                this._column.setMinScreenWidth(newValue);
            }
        };

        Ui5Column.prototype.demandPopinChanged = function demandPopinChanged(newValue) {
            if (this._column !== null) {
                this._column.setDemandPopin((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Column.prototype.popinDisplayChanged = function popinDisplayChanged(newValue) {
            if (this._column !== null) {
                this._column.setPopinDisplay(newValue);
            }
        };

        Ui5Column.prototype.mergeDuplicatesChanged = function mergeDuplicatesChanged(newValue) {
            if (this._column !== null) {
                this._column.setMergeDuplicates((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Column.prototype.mergeFunctionNameChanged = function mergeFunctionNameChanged(newValue) {
            if (this._column !== null) {
                this._column.setMergeFunctionName(newValue);
            }
        };

        Ui5Column.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (this._column !== null) {
                this._column.attachValidationSuccess(newValue);
            }
        };

        Ui5Column.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (this._column !== null) {
                this._column.attachValidationError(newValue);
            }
        };

        Ui5Column.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (this._column !== null) {
                this._column.attachParseError(newValue);
            }
        };

        Ui5Column.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (this._column !== null) {
                this._column.attachFormatError(newValue);
            }
        };

        Ui5Column.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (this._column !== null) {
                this._column.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5Column, [{
            key: 'UIElement',
            get: function get() {
                return this._column;
            }
        }]);

        return Ui5Column;
    }(_element.Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'hAlign', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return 'Begin';
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'vAlign', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return 'Inherit';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'styleClass', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'minScreenWidth', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'demandPopin', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'popinDisplay', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 'Block';
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'mergeDuplicates', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'mergeFunctionName', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return 'getText';
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec18], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});