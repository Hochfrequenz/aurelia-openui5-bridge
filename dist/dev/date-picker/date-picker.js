'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../date-time-field/date-time-field'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5DateTimeField, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, Ui5DatePicker;

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

    return {
        setters: [function (_aureliaTemplating) {
            bindable = _aureliaTemplating.bindable;
            customElement = _aureliaTemplating.customElement;
            noView = _aureliaTemplating.noView;
        }, function (_aureliaDependencyInjection) {
            inject = _aureliaDependencyInjection.inject;
        }, function (_aureliaFramework) {
            computedFrom = _aureliaFramework.computedFrom;
        }, function (_commonAttributeManager) {
            AttributeManager = _commonAttributeManager.AttributeManager;
        }, function (_commonAttributes) {
            getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
        }, function (_dateTimeFieldDateTimeField) {
            Ui5DateTimeField = _dateTimeFieldDateTimeField.Ui5DateTimeField;
        }],
        execute: function () {
            _createClass = function () {
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

            _export('Ui5DatePicker', Ui5DatePicker = (_dec = customElement('ui5-date-picker'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec36 = bindable(), _dec37 = computedFrom('_datepicker'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5DateTimeField) {
                _inherits(Ui5DatePicker, _Ui5DateTimeField);

                function Ui5DatePicker(element) {
                    _classCallCheck(this, Ui5DatePicker);

                    var _this = _possibleConstructorReturn(this, _Ui5DateTimeField.call(this, element));

                    _this._datepicker = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'displayFormatType', _descriptor5, _this);

                    _initDefineProp(_this, 'secondaryCalendarType', _descriptor6, _this);

                    _initDefineProp(_this, 'minDate', _descriptor7, _this);

                    _initDefineProp(_this, 'maxDate', _descriptor8, _this);

                    _initDefineProp(_this, 'showFooter', _descriptor9, _this);

                    _initDefineProp(_this, 'navigate', _descriptor10, _this);

                    _initDefineProp(_this, 'displayFormat', _descriptor11, _this);

                    _initDefineProp(_this, 'valueFormat', _descriptor12, _this);

                    _initDefineProp(_this, 'dateValue', _descriptor13, _this);

                    _initDefineProp(_this, 'initialFocusedDateValue', _descriptor14, _this);

                    _initDefineProp(_this, 'value', _descriptor15, _this);

                    _initDefineProp(_this, 'width', _descriptor16, _this);

                    _initDefineProp(_this, 'enabled', _descriptor17, _this);

                    _initDefineProp(_this, 'valueState', _descriptor18, _this);

                    _initDefineProp(_this, 'name', _descriptor19, _this);

                    _initDefineProp(_this, 'placeholder', _descriptor20, _this);

                    _initDefineProp(_this, 'editable', _descriptor21, _this);

                    _initDefineProp(_this, 'valueStateText', _descriptor22, _this);

                    _initDefineProp(_this, 'showValueStateMessage', _descriptor23, _this);

                    _initDefineProp(_this, 'textAlign', _descriptor24, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor25, _this);

                    _initDefineProp(_this, 'required', _descriptor26, _this);

                    _initDefineProp(_this, 'change', _descriptor27, _this);

                    _initDefineProp(_this, 'busy', _descriptor28, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor29, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor30, _this);

                    _initDefineProp(_this, 'visible', _descriptor31, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor32, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor33, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor34, _this);

                    _initDefineProp(_this, 'validationError', _descriptor35, _this);

                    _initDefineProp(_this, 'parseError', _descriptor36, _this);

                    _initDefineProp(_this, 'formatError', _descriptor37, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor38, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5DatePicker.prototype.fillProperties = function fillProperties(params) {
                    params.displayFormatType = this.displayFormatType;
                    params.secondaryCalendarType = this.secondaryCalendarType;
                    params.minDate = this.minDate;
                    params.maxDate = this.maxDate;
                    params.showFooter = getBooleanFromAttributeValue(this.showFooter);
                    params.navigate = this.navigate == null ? this.defaultFunc : this.navigate;

                    _Ui5DateTimeField.prototype.fillProperties.call(this, params);
                };

                Ui5DatePicker.prototype.defaultFunc = function defaultFunc() {};

                Ui5DatePicker.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._datepicker = new sap.m.DatePicker(this.ui5Id, params);else this._datepicker = new sap.m.DatePicker(params);
                    if (this.ui5Class) this._datepicker.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._datepicker.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._datepicker.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._datepicker, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._datepicker, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._datepicker.placeAt) this._datepicker.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }
                    this._datepicker.attachChange(function (event) {
                        that.value = event.mParameters.value;;
                    });

                    this.attributeManager.addAttributes({ "ui5-id": this._datepicker.sId });
                };

                Ui5DatePicker.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._datepicker) this._parent.removeChildByRelation(this._datepicker, this._relation);
                            }
                        } else {
                            this._datepicker.destroy();
                        }
                        _Ui5DateTimeField.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5DatePicker.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'specialdates') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datepicker.insertSpecialDate(child, _index);else this._datepicker.addSpecialDate(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._datepicker.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datepicker.insertCustomData(child, _index);else this._datepicker.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._datepicker.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datepicker.insertDependent(child, _index);else this._datepicker.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._datepicker.insertDragDropConfig(child, _index);else this._datepicker.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5DatePicker.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'specialdates') {
                            this._datepicker.removeSpecialDate(child);
                        }
                        if (relation == 'tooltip') {
                            this._datepicker.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._datepicker.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._datepicker.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._datepicker.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._datepicker.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5DatePicker.prototype.displayFormatTypeChanged = function displayFormatTypeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.setDisplayFormatType(newValue);
                    }
                };

                Ui5DatePicker.prototype.secondaryCalendarTypeChanged = function secondaryCalendarTypeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.setSecondaryCalendarType(newValue);
                    }
                };

                Ui5DatePicker.prototype.minDateChanged = function minDateChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.setMinDate(newValue);
                    }
                };

                Ui5DatePicker.prototype.maxDateChanged = function maxDateChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.setMaxDate(newValue);
                    }
                };

                Ui5DatePicker.prototype.showFooterChanged = function showFooterChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.setShowFooter(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.navigateChanged = function navigateChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachNavigate(newValue);
                    }
                };

                Ui5DatePicker.prototype.displayFormatChanged = function displayFormatChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setDisplayFormat(newValue);
                    }
                };

                Ui5DatePicker.prototype.valueFormatChanged = function valueFormatChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setValueFormat(newValue);
                    }
                };

                Ui5DatePicker.prototype.dateValueChanged = function dateValueChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setDateValue(newValue);
                    }
                };

                Ui5DatePicker.prototype.initialFocusedDateValueChanged = function initialFocusedDateValueChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setInitialFocusedDateValue(newValue);
                    }
                };

                Ui5DatePicker.prototype.valueChanged = function valueChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setValue(newValue);
                    }
                };

                Ui5DatePicker.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setWidth(newValue);
                    }
                };

                Ui5DatePicker.prototype.enabledChanged = function enabledChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setEnabled(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.valueStateChanged = function valueStateChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setValueState(newValue);
                    }
                };

                Ui5DatePicker.prototype.nameChanged = function nameChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setName(newValue);
                    }
                };

                Ui5DatePicker.prototype.placeholderChanged = function placeholderChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setPlaceholder(newValue);
                    }
                };

                Ui5DatePicker.prototype.editableChanged = function editableChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setEditable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setValueStateText(newValue);
                    }
                };

                Ui5DatePicker.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.textAlignChanged = function textAlignChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setTextAlign(newValue);
                    }
                };

                Ui5DatePicker.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setTextDirection(newValue);
                    }
                };

                Ui5DatePicker.prototype.requiredChanged = function requiredChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setRequired(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.changeChanged = function changeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachChange(newValue);
                    }
                };

                Ui5DatePicker.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5DatePicker.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5DatePicker.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5DatePicker.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._datepicker !== null) {
                        this._datepicker.setFieldGroupIds(newValue);
                    }
                };

                Ui5DatePicker.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5DatePicker.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachValidationSuccess(newValue);
                    }
                };

                Ui5DatePicker.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachValidationError(newValue);
                    }
                };

                Ui5DatePicker.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachParseError(newValue);
                    }
                };

                Ui5DatePicker.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachFormatError(newValue);
                    }
                };

                Ui5DatePicker.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._datepicker !== null) {
                        this._datepicker.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5DatePicker, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._datepicker;
                    }
                }]);

                return Ui5DatePicker;
            }(Ui5DateTimeField), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Class', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'ui5Tooltip', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormatType', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'secondaryCalendarType', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'minDate', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'maxDate', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'navigate', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'displayFormat', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'valueFormat', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'dateValue', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'initialFocusedDateValue', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Initial';
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec32], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec33], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec34], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec35], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec36], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec37], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5DatePicker', Ui5DatePicker);
        }
    };
});
//# sourceMappingURL=../dist/dev/date-picker/date-picker.js.map
