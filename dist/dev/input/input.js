'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../input-base/input-base'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5InputBase, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, Ui5Input;

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
        }, function (_inputBaseInputBase) {
            Ui5InputBase = _inputBaseInputBase.Ui5InputBase;
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

            _export('Ui5Input', Ui5Input = (_dec = customElement('ui5-input'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec36 = bindable(), _dec37 = bindable(), _dec38 = bindable(), _dec39 = bindable(), _dec40 = bindable(), _dec41 = bindable(), _dec42 = bindable(), _dec43 = bindable(), _dec44 = bindable(), _dec45 = bindable(), _dec46 = bindable(), _dec47 = bindable(), _dec48 = computedFrom('_input'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5InputBase) {
                _inherits(Ui5Input, _Ui5InputBase);

                function Ui5Input(element) {
                    _classCallCheck(this, Ui5Input);

                    var _this = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

                    _this._input = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'type', _descriptor2, _this);

                    _initDefineProp(_this, 'maxLength', _descriptor3, _this);

                    _initDefineProp(_this, 'showValueHelp', _descriptor4, _this);

                    _initDefineProp(_this, 'showSuggestion', _descriptor5, _this);

                    _initDefineProp(_this, 'valueHelpOnly', _descriptor6, _this);

                    _initDefineProp(_this, 'filterSuggests', _descriptor7, _this);

                    _initDefineProp(_this, 'maxSuggestionWidth', _descriptor8, _this);

                    _initDefineProp(_this, 'startSuggestion', _descriptor9, _this);

                    _initDefineProp(_this, 'showTableSuggestionValueHelp', _descriptor10, _this);

                    _initDefineProp(_this, 'description', _descriptor11, _this);

                    _initDefineProp(_this, 'fieldWidth', _descriptor12, _this);

                    _initDefineProp(_this, 'valueLiveUpdate', _descriptor13, _this);

                    _initDefineProp(_this, 'selectedKey', _descriptor14, _this);

                    _initDefineProp(_this, 'textFormatMode', _descriptor15, _this);

                    _initDefineProp(_this, 'textFormatter', _descriptor16, _this);

                    _initDefineProp(_this, 'suggestionRowValidator', _descriptor17, _this);

                    _initDefineProp(_this, 'enableSuggestionsHighlighting', _descriptor18, _this);

                    _initDefineProp(_this, 'liveChange', _descriptor19, _this);

                    _initDefineProp(_this, 'valueHelpRequest', _descriptor20, _this);

                    _initDefineProp(_this, 'suggest', _descriptor21, _this);

                    _initDefineProp(_this, 'suggestionItemSelected', _descriptor22, _this);

                    _initDefineProp(_this, 'submit', _descriptor23, _this);

                    _initDefineProp(_this, 'value', _descriptor24, _this);

                    _initDefineProp(_this, 'width', _descriptor25, _this);

                    _initDefineProp(_this, 'enabled', _descriptor26, _this);

                    _initDefineProp(_this, 'valueState', _descriptor27, _this);

                    _initDefineProp(_this, 'name', _descriptor28, _this);

                    _initDefineProp(_this, 'placeholder', _descriptor29, _this);

                    _initDefineProp(_this, 'editable', _descriptor30, _this);

                    _initDefineProp(_this, 'valueStateText', _descriptor31, _this);

                    _initDefineProp(_this, 'showValueStateMessage', _descriptor32, _this);

                    _initDefineProp(_this, 'textAlign', _descriptor33, _this);

                    _initDefineProp(_this, 'textDirection', _descriptor34, _this);

                    _initDefineProp(_this, 'required', _descriptor35, _this);

                    _initDefineProp(_this, 'change', _descriptor36, _this);

                    _initDefineProp(_this, 'busy', _descriptor37, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor38, _this);

                    _initDefineProp(_this, 'visible', _descriptor39, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor40, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor41, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor42, _this);

                    _initDefineProp(_this, 'validationError', _descriptor43, _this);

                    _initDefineProp(_this, 'parseError', _descriptor44, _this);

                    _initDefineProp(_this, 'formatError', _descriptor45, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor46, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Input.prototype.fillProperties = function fillProperties(params) {
                    params.type = this.type;
                    params.maxLength = this.maxLength ? parseInt(this.maxLength) : 0;
                    params.showValueHelp = getBooleanFromAttributeValue(this.showValueHelp);
                    params.showSuggestion = getBooleanFromAttributeValue(this.showSuggestion);
                    params.valueHelpOnly = getBooleanFromAttributeValue(this.valueHelpOnly);
                    params.filterSuggests = getBooleanFromAttributeValue(this.filterSuggests);
                    params.maxSuggestionWidth = this.maxSuggestionWidth;
                    params.startSuggestion = this.startSuggestion ? parseInt(this.startSuggestion) : 0;
                    params.showTableSuggestionValueHelp = getBooleanFromAttributeValue(this.showTableSuggestionValueHelp);
                    params.description = this.description;
                    params.fieldWidth = this.fieldWidth;
                    params.valueLiveUpdate = getBooleanFromAttributeValue(this.valueLiveUpdate);
                    params.selectedKey = this.selectedKey;
                    params.textFormatMode = this.textFormatMode;
                    params.textFormatter = this.textFormatter;
                    params.suggestionRowValidator = this.suggestionRowValidator;
                    params.enableSuggestionsHighlighting = getBooleanFromAttributeValue(this.enableSuggestionsHighlighting);
                    params.liveChange = this.liveChange == null ? this.defaultFunc : this.liveChange;
                    params.valueHelpRequest = this.valueHelpRequest == null ? this.defaultFunc : this.valueHelpRequest;
                    params.suggest = this.suggest == null ? this.defaultFunc : this.suggest;
                    params.suggestionItemSelected = this.suggestionItemSelected == null ? this.defaultFunc : this.suggestionItemSelected;
                    params.submit = this.submit == null ? this.defaultFunc : this.submit;
                };

                Ui5Input.prototype.defaultFunc = function defaultFunc() {};

                Ui5Input.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    _Ui5InputBase.prototype.fillProperties.call(this, params);
                    if (this.ui5Id) this._input = new sap.m.Input(this.ui5Id, params);else this._input = new sap.m.Input(params);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._input.sId) {
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                            this._relation = this._parent.addChild(this._input, this.element, prevSibling);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                this._relation = this._parent.addChild(this._input, this.element, prevSibling);
                            } else this._relation = this._parent.addChild(this._input, this.element);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._input.placeAt) this._input.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }
                    this._input.attachChange(function (event) {
                        that.value = event.mParameters.value;;
                    });
                    this._input.attachLiveChange(function (event) {
                        if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {
                            that.value = event.mParameters.value;
                        };
                    });

                    this.attributeManager.addAttributes({ "ui5-id": this._input.sId });
                };

                Ui5Input.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                this._parent.removeChildByRelation(this._input, this._relation);
                            }
                        } else {
                            this._input.destroy();
                        }
                        _Ui5InputBase.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Input.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'suggestionitems') {
                                var _index = null;if (afterElement) _index = this._input.indexOfSuggestionItem(afterElement);if (_index) this._input.insertSuggestionItem(child, _index + 1);else this._input.addSuggestionItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'suggestioncolumns') {
                                var _index = null;if (afterElement) _index = this._input.indexOfSuggestionColumn(afterElement);if (_index) this._input.insertSuggestionColumn(child, _index + 1);else this._input.addSuggestionColumn(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'suggestionrows') {
                                var _index = null;if (afterElement) _index = this._input.indexOfSuggestionRow(afterElement);if (_index) this._input.insertSuggestionRow(child, _index + 1);else this._input.addSuggestionRow(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._input.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = null;if (afterElement) _index = this._input.indexOfCustomData(afterElement);if (_index) this._input.insertCustomData(child, _index + 1);else this._input.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._input.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = null;if (afterElement) _index = this._input.indexOfDependent(afterElement);if (_index) this._input.insertDependent(child, _index + 1);else this._input.addDependent(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Input.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'suggestionitems') {
                            this._input.removeSuggestionItem(child);
                        }
                        if (relation == 'suggestioncolumns') {
                            this._input.removeSuggestionColumn(child);
                        }
                        if (relation == 'suggestionrows') {
                            this._input.removeSuggestionRow(child);
                        }
                        if (relation == 'tooltip') {
                            this._input.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._input.removeCustomData(child);
                        }
                        if (relation == 'layoutData') {
                            this._input.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._input.removeDependent(child);
                        }
                    } catch (err) {}
                };

                Ui5Input.prototype.typeChanged = function typeChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setType(newValue);
                    }
                };

                Ui5Input.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setMaxLength(newValue);
                    }
                };

                Ui5Input.prototype.showValueHelpChanged = function showValueHelpChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.showSuggestionChanged = function showSuggestionChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.valueHelpOnlyChanged = function valueHelpOnlyChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.filterSuggestsChanged = function filterSuggestsChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.maxSuggestionWidthChanged = function maxSuggestionWidthChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setMaxSuggestionWidth(newValue);
                    }
                };

                Ui5Input.prototype.startSuggestionChanged = function startSuggestionChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setStartSuggestion(newValue);
                    }
                };

                Ui5Input.prototype.showTableSuggestionValueHelpChanged = function showTableSuggestionValueHelpChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setShowTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.descriptionChanged = function descriptionChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setDescription(newValue);
                    }
                };

                Ui5Input.prototype.fieldWidthChanged = function fieldWidthChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setFieldWidth(newValue);
                    }
                };

                Ui5Input.prototype.valueLiveUpdateChanged = function valueLiveUpdateChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setSelectedKey(newValue);
                    }
                };

                Ui5Input.prototype.textFormatModeChanged = function textFormatModeChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setTextFormatMode(newValue);
                    }
                };

                Ui5Input.prototype.textFormatterChanged = function textFormatterChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setTextFormatter(newValue);
                    }
                };

                Ui5Input.prototype.suggestionRowValidatorChanged = function suggestionRowValidatorChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setSuggestionRowValidator(newValue);
                    }
                };

                Ui5Input.prototype.enableSuggestionsHighlightingChanged = function enableSuggestionsHighlightingChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setEnableSuggestionsHighlighting(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.liveChangeChanged = function liveChangeChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachLiveChange(newValue);
                    }
                };

                Ui5Input.prototype.valueHelpRequestChanged = function valueHelpRequestChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachValueHelpRequest(newValue);
                    }
                };

                Ui5Input.prototype.suggestChanged = function suggestChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachSuggest(newValue);
                    }
                };

                Ui5Input.prototype.suggestionItemSelectedChanged = function suggestionItemSelectedChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachSuggestionItemSelected(newValue);
                    }
                };

                Ui5Input.prototype.submitChanged = function submitChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachSubmit(newValue);
                    }
                };

                Ui5Input.prototype.valueChanged = function valueChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setValue(newValue);
                    }
                };

                Ui5Input.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setWidth(newValue);
                    }
                };

                Ui5Input.prototype.enabledChanged = function enabledChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setEnabled(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.valueStateChanged = function valueStateChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setValueState(newValue);
                    }
                };

                Ui5Input.prototype.nameChanged = function nameChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setName(newValue);
                    }
                };

                Ui5Input.prototype.placeholderChanged = function placeholderChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setPlaceholder(newValue);
                    }
                };

                Ui5Input.prototype.editableChanged = function editableChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setEditable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setValueStateText(newValue);
                    }
                };

                Ui5Input.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.textAlignChanged = function textAlignChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setTextAlign(newValue);
                    }
                };

                Ui5Input.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setTextDirection(newValue);
                    }
                };

                Ui5Input.prototype.requiredChanged = function requiredChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setRequired(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.changeChanged = function changeChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachChange(newValue);
                    }
                };

                Ui5Input.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Input.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Input.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._input !== null) {
                        this._input.setFieldGroupIds(newValue);
                    }
                };

                Ui5Input.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Input.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachValidationSuccess(newValue);
                    }
                };

                Ui5Input.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachValidationError(newValue);
                    }
                };

                Ui5Input.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachParseError(newValue);
                    }
                };

                Ui5Input.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachFormatError(newValue);
                    }
                };

                Ui5Input.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._input !== null) {
                        this._input.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Input, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._input;
                    }
                }]);

                return Ui5Input;
            }(Ui5InputBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Text';
                }
            }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'maxLength', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showValueHelp', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'showSuggestion', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'valueHelpOnly', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'filterSuggests', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'maxSuggestionWidth', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'startSuggestion', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 1;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showTableSuggestionValueHelp', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'fieldWidth', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return '50%';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'valueLiveUpdate', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'selectedKey', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'textFormatMode', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Value';
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'textFormatter', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionRowValidator', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'enableSuggestionsHighlighting', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'liveChange', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'valueHelpRequest', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'suggest', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionItemSelected', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'submit', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return 'None';
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec32], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec33], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec34], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Initial';
                }
            }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec35], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Inherit';
                }
            }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec36], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec37], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec38], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec39], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec40], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec41], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec42], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec43], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec44], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec45], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec46], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec47], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec48], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Input', Ui5Input);
        }
    };
});
//# sourceMappingURL=../dist/dev/input/input.js.map
