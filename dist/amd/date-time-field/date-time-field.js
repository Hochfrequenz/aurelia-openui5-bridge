define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../input-base/input-base'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _inputBase) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5DateTimeField = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32;

    var Ui5DateTimeField = exports.Ui5DateTimeField = (_dec = (0, _aureliaTemplating.customElement)('ui5-date-time-field'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaFramework.computedFrom)('_datetimefield'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5InputBase) {
        _inherits(Ui5DateTimeField, _Ui5InputBase);

        function Ui5DateTimeField(element) {
            _classCallCheck(this, Ui5DateTimeField);

            var _this = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

            _this._datetimefield = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

            _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

            _initDefineProp(_this, 'prevId', _descriptor4, _this);

            _initDefineProp(_this, 'displayFormat', _descriptor5, _this);

            _initDefineProp(_this, 'valueFormat', _descriptor6, _this);

            _initDefineProp(_this, 'dateValue', _descriptor7, _this);

            _initDefineProp(_this, 'initialFocusedDateValue', _descriptor8, _this);

            _initDefineProp(_this, 'value', _descriptor9, _this);

            _initDefineProp(_this, 'width', _descriptor10, _this);

            _initDefineProp(_this, 'enabled', _descriptor11, _this);

            _initDefineProp(_this, 'valueState', _descriptor12, _this);

            _initDefineProp(_this, 'name', _descriptor13, _this);

            _initDefineProp(_this, 'placeholder', _descriptor14, _this);

            _initDefineProp(_this, 'editable', _descriptor15, _this);

            _initDefineProp(_this, 'valueStateText', _descriptor16, _this);

            _initDefineProp(_this, 'showValueStateMessage', _descriptor17, _this);

            _initDefineProp(_this, 'textAlign', _descriptor18, _this);

            _initDefineProp(_this, 'textDirection', _descriptor19, _this);

            _initDefineProp(_this, 'required', _descriptor20, _this);

            _initDefineProp(_this, 'change', _descriptor21, _this);

            _initDefineProp(_this, 'busy', _descriptor22, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor23, _this);

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor24, _this);

            _initDefineProp(_this, 'visible', _descriptor25, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor26, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor27, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor28, _this);

            _initDefineProp(_this, 'validationError', _descriptor29, _this);

            _initDefineProp(_this, 'parseError', _descriptor30, _this);

            _initDefineProp(_this, 'formatError', _descriptor31, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor32, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5DateTimeField.prototype.fillProperties = function fillProperties(params) {
            params.displayFormat = this.displayFormat;
            params.valueFormat = this.valueFormat;
            params.dateValue = this.dateValue;
            params.initialFocusedDateValue = this.initialFocusedDateValue;

            _Ui5InputBase.prototype.fillProperties.call(this, params);
        };

        Ui5DateTimeField.prototype.defaultFunc = function defaultFunc() {};

        Ui5DateTimeField.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._datetimefield = new sap.m.DateTimeField(this.ui5Id, params);else this._datetimefield = new sap.m.DateTimeField(params);
            if (this.ui5Class) this._datetimefield.addStyleClass(this.ui5Class);
            if (this.ui5Tooltip) this._datetimefield.setTooltip(this.ui5Tooltip);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._datetimefield.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._datetimefield, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._datetimefield, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._datetimefield.placeAt) this._datetimefield.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._datetimefield.sId });
        };

        Ui5DateTimeField.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._datetimefield) this._parent.removeChildByRelation(this._datetimefield, this._relation);
                    }
                } else {
                    this._datetimefield.destroy();
                }
                _Ui5InputBase.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5DateTimeField.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'tooltip') {
                        this._datetimefield.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimefield.insertCustomData(child, _index);else this._datetimefield.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._datetimefield.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimefield.insertDependent(child, _index);else this._datetimefield.addDependent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'dragdropconfig') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datetimefield.insertDragDropConfig(child, _index);else this._datetimefield.addDragDropConfig(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5DateTimeField.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'tooltip') {
                    this._datetimefield.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._datetimefield.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._datetimefield.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._datetimefield.removeDependent(child);
                }
                if (relation == 'dragdropconfig') {
                    this._datetimefield.removeDragDropConfig(child);
                }
            } catch (err) {}
        };

        Ui5DateTimeField.prototype.displayFormatChanged = function displayFormatChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.setDisplayFormat(newValue);
            }
        };

        Ui5DateTimeField.prototype.valueFormatChanged = function valueFormatChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.setValueFormat(newValue);
            }
        };

        Ui5DateTimeField.prototype.dateValueChanged = function dateValueChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.setDateValue(newValue);
            }
        };

        Ui5DateTimeField.prototype.initialFocusedDateValueChanged = function initialFocusedDateValueChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.setInitialFocusedDateValue(newValue);
            }
        };

        Ui5DateTimeField.prototype.valueChanged = function valueChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setValue(newValue);
            }
        };

        Ui5DateTimeField.prototype.widthChanged = function widthChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setWidth(newValue);
            }
        };

        Ui5DateTimeField.prototype.enabledChanged = function enabledChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DateTimeField.prototype.valueStateChanged = function valueStateChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setValueState(newValue);
            }
        };

        Ui5DateTimeField.prototype.nameChanged = function nameChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setName(newValue);
            }
        };

        Ui5DateTimeField.prototype.placeholderChanged = function placeholderChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setPlaceholder(newValue);
            }
        };

        Ui5DateTimeField.prototype.editableChanged = function editableChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setEditable((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DateTimeField.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setValueStateText(newValue);
            }
        };

        Ui5DateTimeField.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setShowValueStateMessage((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DateTimeField.prototype.textAlignChanged = function textAlignChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setTextAlign(newValue);
            }
        };

        Ui5DateTimeField.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setTextDirection(newValue);
            }
        };

        Ui5DateTimeField.prototype.requiredChanged = function requiredChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setRequired((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DateTimeField.prototype.changeChanged = function changeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachChange(newValue);
            }
        };

        Ui5DateTimeField.prototype.busyChanged = function busyChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DateTimeField.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5DateTimeField.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setBusyIndicatorSize(newValue);
            }
        };

        Ui5DateTimeField.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5DateTimeField.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._datetimefield !== null) {
                this._datetimefield.setFieldGroupIds(newValue);
            }
        };

        Ui5DateTimeField.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachValidateFieldGroup(newValue);
            }
        };

        Ui5DateTimeField.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachValidationSuccess(newValue);
            }
        };

        Ui5DateTimeField.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachValidationError(newValue);
            }
        };

        Ui5DateTimeField.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachParseError(newValue);
            }
        };

        Ui5DateTimeField.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachFormatError(newValue);
            }
        };

        Ui5DateTimeField.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._datetimefield !== null) {
                this._datetimefield.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5DateTimeField, [{
            key: 'UIElement',
            get: function get() {
                return this._datetimefield;
            }
        }]);

        return Ui5DateTimeField;
    }(_inputBase.Ui5InputBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormat', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'valueFormat', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'dateValue', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'initialFocusedDateValue', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 'None';
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return 'Initial';
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 'Inherit';
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec30], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec31], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});