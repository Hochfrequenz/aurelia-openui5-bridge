'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, Ui5ViewSettingsDialog;

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
        }, function (_controlControl) {
            Ui5Control = _controlControl.Ui5Control;
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

            _export('Ui5ViewSettingsDialog', Ui5ViewSettingsDialog = (_dec = customElement('ui5-view-settings-dialog'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = computedFrom('_viewsettingsdialog'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5ViewSettingsDialog, _Ui5Control);

                function Ui5ViewSettingsDialog(element) {
                    _classCallCheck(this, Ui5ViewSettingsDialog);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._viewsettingsdialog = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'title', _descriptor5, _this);

                    _initDefineProp(_this, 'sortDescending', _descriptor6, _this);

                    _initDefineProp(_this, 'groupDescending', _descriptor7, _this);

                    _initDefineProp(_this, 'filterSearchOperator', _descriptor8, _this);

                    _initDefineProp(_this, 'titleAlignment', _descriptor9, _this);

                    _initDefineProp(_this, 'confirm', _descriptor10, _this);

                    _initDefineProp(_this, 'cancel', _descriptor11, _this);

                    _initDefineProp(_this, 'resetFilters', _descriptor12, _this);

                    _initDefineProp(_this, 'reset', _descriptor13, _this);

                    _initDefineProp(_this, 'filterDetailPageOpened', _descriptor14, _this);

                    _initDefineProp(_this, 'busy', _descriptor15, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor16, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor17, _this);

                    _initDefineProp(_this, 'visible', _descriptor18, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor19, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor20, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor21, _this);

                    _initDefineProp(_this, 'validationError', _descriptor22, _this);

                    _initDefineProp(_this, 'parseError', _descriptor23, _this);

                    _initDefineProp(_this, 'formatError', _descriptor24, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor25, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5ViewSettingsDialog.prototype.fillProperties = function fillProperties(params) {
                    params.title = this.title;
                    params.sortDescending = getBooleanFromAttributeValue(this.sortDescending);
                    params.groupDescending = getBooleanFromAttributeValue(this.groupDescending);
                    params.filterSearchOperator = this.filterSearchOperator;
                    params.titleAlignment = this.titleAlignment;
                    params.confirm = this.confirm == null ? this.defaultFunc : this.confirm;
                    params.cancel = this.cancel == null ? this.defaultFunc : this.cancel;
                    params.resetFilters = this.resetFilters == null ? this.defaultFunc : this.resetFilters;
                    params.reset = this.reset == null ? this.defaultFunc : this.reset;
                    params.filterDetailPageOpened = this.filterDetailPageOpened == null ? this.defaultFunc : this.filterDetailPageOpened;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5ViewSettingsDialog.prototype.defaultFunc = function defaultFunc() {};

                Ui5ViewSettingsDialog.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._viewsettingsdialog = new sap.m.ViewSettingsDialog(this.ui5Id, params);else this._viewsettingsdialog = new sap.m.ViewSettingsDialog(params);
                    if (this.ui5Class) this._viewsettingsdialog.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._viewsettingsdialog.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._viewsettingsdialog.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._viewsettingsdialog, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._viewsettingsdialog, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._viewsettingsdialog.placeAt) this._viewsettingsdialog.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._viewsettingsdialog.sId });
                };

                Ui5ViewSettingsDialog.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._viewsettingsdialog) this._parent.removeChildByRelation(this._viewsettingsdialog, this._relation);
                            }
                        } else {
                            this._viewsettingsdialog.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5ViewSettingsDialog.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'sortitems') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertSortItem(child, _index);else this._viewsettingsdialog.addSortItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'groupitems') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertGroupItem(child, _index);else this._viewsettingsdialog.addGroupItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'filteritems') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertFilterItem(child, _index);else this._viewsettingsdialog.addFilterItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'presetfilteritems') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertPresetFilterItem(child, _index);else this._viewsettingsdialog.addPresetFilterItem(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'customtabs') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertCustomTab(child, _index);else this._viewsettingsdialog.addCustomTab(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._viewsettingsdialog.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertCustomData(child, _index);else this._viewsettingsdialog.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._viewsettingsdialog.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertDependent(child, _index);else this._viewsettingsdialog.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._viewsettingsdialog.insertDragDropConfig(child, _index);else this._viewsettingsdialog.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5ViewSettingsDialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'sortitems') {
                            this._viewsettingsdialog.removeSortItem(child);
                        }
                        if (relation == 'groupitems') {
                            this._viewsettingsdialog.removeGroupItem(child);
                        }
                        if (relation == 'filteritems') {
                            this._viewsettingsdialog.removeFilterItem(child);
                        }
                        if (relation == 'presetfilteritems') {
                            this._viewsettingsdialog.removePresetFilterItem(child);
                        }
                        if (relation == 'customtabs') {
                            this._viewsettingsdialog.removeCustomTab(child);
                        }
                        if (relation == 'tooltip') {
                            this._viewsettingsdialog.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._viewsettingsdialog.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._viewsettingsdialog.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._viewsettingsdialog.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._viewsettingsdialog.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5ViewSettingsDialog.prototype.titleChanged = function titleChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setTitle(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.sortDescendingChanged = function sortDescendingChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setSortDescending(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ViewSettingsDialog.prototype.groupDescendingChanged = function groupDescendingChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setGroupDescending(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ViewSettingsDialog.prototype.filterSearchOperatorChanged = function filterSearchOperatorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setFilterSearchOperator(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.titleAlignmentChanged = function titleAlignmentChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setTitleAlignment(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.confirmChanged = function confirmChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachConfirm(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.cancelChanged = function cancelChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachCancel(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.resetFiltersChanged = function resetFiltersChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachResetFilters(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.resetChanged = function resetChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachReset(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.filterDetailPageOpenedChanged = function filterDetailPageOpenedChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachFilterDetailPageOpened(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ViewSettingsDialog.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5ViewSettingsDialog.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.setFieldGroupIds(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachValidationSuccess(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachValidationError(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachParseError(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachFormatError(newValue);
                    }
                };

                Ui5ViewSettingsDialog.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._viewsettingsdialog !== null) {
                        this._viewsettingsdialog.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5ViewSettingsDialog, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._viewsettingsdialog;
                    }
                }]);

                return Ui5ViewSettingsDialog;
            }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'sortDescending', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'groupDescending', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'filterSearchOperator', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 'StartsWith';
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'titleAlignment', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Auto';
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'confirm', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'cancel', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'resetFilters', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'reset', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'filterDetailPageOpened', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5ViewSettingsDialog', Ui5ViewSettingsDialog);
        }
    };
});