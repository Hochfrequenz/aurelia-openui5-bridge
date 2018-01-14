define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Wizard = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

    var Ui5Wizard = exports.Ui5Wizard = (_dec = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaFramework.computedFrom)('_wizard'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5Wizard, _Ui5Control);

        function Ui5Wizard(element) {
            _classCallCheck(this, Ui5Wizard);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._wizard = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'width', _descriptor2, _this);

            _initDefineProp(_this, 'height', _descriptor3, _this);

            _initDefineProp(_this, 'showNextButton', _descriptor4, _this);

            _initDefineProp(_this, 'finishButtonText', _descriptor5, _this);

            _initDefineProp(_this, 'enableBranching', _descriptor6, _this);

            _initDefineProp(_this, 'stepActivate', _descriptor7, _this);

            _initDefineProp(_this, 'complete', _descriptor8, _this);

            _initDefineProp(_this, 'busy', _descriptor9, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor10, _this);

            _initDefineProp(_this, 'visible', _descriptor11, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor12, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor13, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5Wizard.prototype.fillProperties = function fillProperties(params) {
            params.width = this.width;
            params.height = this.height;
            params.showNextButton = (0, _attributes.getBooleanFromAttributeValue)(this.showNextButton);
            params.finishButtonText = this.finishButtonText;
            params.enableBranching = (0, _attributes.getBooleanFromAttributeValue)(this.enableBranching);
        };

        Ui5Wizard.prototype.defaultFunc = function defaultFunc() {};

        Ui5Wizard.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            _Ui5Control.prototype.fillProperties.call(this, params);
            if (this.ui5Id) this._wizard = new sap.m.Wizard(this.ui5Id, params);else this._wizard = new sap.m.Wizard(params);
            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._wizard.sId) {
                    var prevSibling = null;
                    if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._wizard, this.element, prevSibling);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    if (this.element.previousElementSibling) {
                        prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                        this._relation = this._parent.addChild(this._wizard, this.element, prevSibling);
                    } else this._relation = this._parent.addChild(this._wizard, this.element);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._wizard.placeAt) this._wizard.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._wizard.sId });
        };

        Ui5Wizard.prototype.detached = function detached() {
            if (this._parent && this._relation) {
                this._parent.removeChildByRelation(this._wizard, this._relation);
            } else {
                this._wizard.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        };

        Ui5Wizard.prototype.addChild = function addChild(child, elem, afterElement) {
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

                if (elem.localName == 'steps') {
                    var _index = null;if (afterElement) _index = this._wizard.indexOfStep(afterElement);if (_index) this._wizard.insertStep(child, _index + 1);else this._wizard.addStep(child, 0);return elem.localName;
                }
            }
        };

        Ui5Wizard.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            if (relation == 'steps') {
                this._wizard.removeStep(child);
            }
        };

        Ui5Wizard.prototype.widthChanged = function widthChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setWidth(newValue);
            }
        };

        Ui5Wizard.prototype.heightChanged = function heightChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setHeight(newValue);
            }
        };

        Ui5Wizard.prototype.showNextButtonChanged = function showNextButtonChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setShowNextButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Wizard.prototype.finishButtonTextChanged = function finishButtonTextChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setFinishButtonText(newValue);
            }
        };

        Ui5Wizard.prototype.enableBranchingChanged = function enableBranchingChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setEnableBranching((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Wizard.prototype.stepActivateChanged = function stepActivateChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.attachStepActivate(newValue);
            }
        };

        Ui5Wizard.prototype.completeChanged = function completeChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.attachComplete(newValue);
            }
        };

        Ui5Wizard.prototype.busyChanged = function busyChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Wizard.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5Wizard.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5Wizard.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.setFieldGroupIds(newValue);
            }
        };

        Ui5Wizard.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (this._wizard !== null) {
                this._wizard.attachValidateFieldGroup(newValue);
            }
        };

        _createClass(Ui5Wizard, [{
            key: 'UIElement',
            get: function get() {
                return this._wizard;
            }
        }]);

        return Ui5Wizard;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return 'auto';
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return '100%';
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showNextButton', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'finishButtonText', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return 'Review';
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'enableBranching', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'stepActivate', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'complete', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});