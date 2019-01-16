'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, Ui5gridTableColumn;

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
        }, function (_elementElement) {
            Ui5Element = _elementElement.Ui5Element;
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

            _export('Ui5gridTableColumn', Ui5gridTableColumn = (_dec = customElement('ui5-grid-table-column'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = computedFrom('_gridtablecolumn'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5gridTableColumn, _Ui5Element);

                function Ui5gridTableColumn(element) {
                    _classCallCheck(this, Ui5gridTableColumn);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._gridtablecolumn = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'width', _descriptor5, _this);

                    _initDefineProp(_this, 'minWidth', _descriptor6, _this);

                    _initDefineProp(_this, 'resizable', _descriptor7, _this);

                    _initDefineProp(_this, 'hAlign', _descriptor8, _this);

                    _initDefineProp(_this, 'sorted', _descriptor9, _this);

                    _initDefineProp(_this, 'sortOrder', _descriptor10, _this);

                    _initDefineProp(_this, 'sortProperty', _descriptor11, _this);

                    _initDefineProp(_this, 'filtered', _descriptor12, _this);

                    _initDefineProp(_this, 'filterProperty', _descriptor13, _this);

                    _initDefineProp(_this, 'filterValue', _descriptor14, _this);

                    _initDefineProp(_this, 'filterOperator', _descriptor15, _this);

                    _initDefineProp(_this, 'defaultFilterOperator', _descriptor16, _this);

                    _initDefineProp(_this, 'filterType', _descriptor17, _this);

                    _initDefineProp(_this, 'grouped', _descriptor18, _this);

                    _initDefineProp(_this, 'visible', _descriptor19, _this);

                    _initDefineProp(_this, 'name', _descriptor20, _this);

                    _initDefineProp(_this, 'showFilterMenuEntry', _descriptor21, _this);

                    _initDefineProp(_this, 'showSortMenuEntry', _descriptor22, _this);

                    _initDefineProp(_this, 'headerSpan', _descriptor23, _this);

                    _initDefineProp(_this, 'autoResizable', _descriptor24, _this);

                    _initDefineProp(_this, 'columnMenuOpen', _descriptor25, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor26, _this);

                    _initDefineProp(_this, 'validationError', _descriptor27, _this);

                    _initDefineProp(_this, 'parseError', _descriptor28, _this);

                    _initDefineProp(_this, 'formatError', _descriptor29, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor30, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5gridTableColumn.prototype.fillProperties = function fillProperties(params) {
                    params.width = this.width;
                    params.minWidth = this.minWidth ? parseInt(this.minWidth) : 0;
                    params.resizable = getBooleanFromAttributeValue(this.resizable);
                    params.hAlign = this.hAlign;
                    params.sorted = getBooleanFromAttributeValue(this.sorted);
                    params.sortOrder = this.sortOrder;
                    params.sortProperty = this.sortProperty;
                    params.filtered = getBooleanFromAttributeValue(this.filtered);
                    params.filterProperty = this.filterProperty;
                    params.filterValue = this.filterValue;
                    params.filterOperator = this.filterOperator;
                    params.defaultFilterOperator = this.defaultFilterOperator;
                    params.filterType = this.filterType;
                    params.grouped = getBooleanFromAttributeValue(this.grouped);
                    params.visible = getBooleanFromAttributeValue(this.visible);
                    params.name = this.name;
                    params.showFilterMenuEntry = getBooleanFromAttributeValue(this.showFilterMenuEntry);
                    params.showSortMenuEntry = getBooleanFromAttributeValue(this.showSortMenuEntry);
                    params.headerSpan = this.headerSpan;
                    params.autoResizable = getBooleanFromAttributeValue(this.autoResizable);
                    params.columnMenuOpen = this.columnMenuOpen == null ? this.defaultFunc : this.columnMenuOpen;

                    _Ui5Element.prototype.fillProperties.call(this, params);
                };

                Ui5gridTableColumn.prototype.defaultFunc = function defaultFunc() {};

                Ui5gridTableColumn.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._gridtablecolumn = new sap.ui.table.Column(this.ui5Id, params);else this._gridtablecolumn = new sap.ui.table.Column(params);
                    if (this.ui5Class) this._gridtablecolumn.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._gridtablecolumn.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._gridtablecolumn.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._gridtablecolumn, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._gridtablecolumn, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._gridtablecolumn.placeAt) this._gridtablecolumn.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._gridtablecolumn.sId });
                };

                Ui5gridTableColumn.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._gridtablecolumn) this._parent.removeChildByRelation(this._gridtablecolumn, this._relation);
                            }
                        } else {
                            this._gridtablecolumn.destroy();
                        }
                        _Ui5Element.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5gridTableColumn.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'label') {
                                this._gridtablecolumn.setLabel(child);return elem.localName;
                            }
                            if (elem.localName == 'multilabels') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtablecolumn.insertMultiLabel(child, _index);else this._gridtablecolumn.addMultiLabel(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'template') {
                                this._gridtablecolumn.setTemplate(child);return elem.localName;
                            }
                            if (elem.localName == 'menu') {
                                this._gridtablecolumn.setMenu(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._gridtablecolumn.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtablecolumn.insertCustomData(child, _index);else this._gridtablecolumn.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._gridtablecolumn.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtablecolumn.insertDependent(child, _index);else this._gridtablecolumn.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtablecolumn.insertDragDropConfig(child, _index);else this._gridtablecolumn.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5gridTableColumn.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'label') {
                            this._gridtablecolumn.destroyLabel(child);
                        }
                        if (relation == 'multilabels') {
                            this._gridtablecolumn.removeMultiLabel(child);
                        }
                        if (relation == 'template') {
                            this._gridtablecolumn.destroyTemplate(child);
                        }
                        if (relation == 'menu') {
                            this._gridtablecolumn.destroyMenu(child);
                        }
                        if (relation == 'tooltip') {
                            this._gridtablecolumn.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._gridtablecolumn.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._gridtablecolumn.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._gridtablecolumn.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._gridtablecolumn.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5gridTableColumn.prototype.widthChanged = function widthChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setWidth(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.minWidthChanged = function minWidthChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setMinWidth(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.resizableChanged = function resizableChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setResizable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.hAlignChanged = function hAlignChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setHAlign(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.sortedChanged = function sortedChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setSorted(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.sortOrderChanged = function sortOrderChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setSortOrder(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.sortPropertyChanged = function sortPropertyChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setSortProperty(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.filteredChanged = function filteredChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setFiltered(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.filterPropertyChanged = function filterPropertyChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setFilterProperty(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.filterValueChanged = function filterValueChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setFilterValue(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.filterOperatorChanged = function filterOperatorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setFilterOperator(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.defaultFilterOperatorChanged = function defaultFilterOperatorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setDefaultFilterOperator(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.filterTypeChanged = function filterTypeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setFilterType(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.groupedChanged = function groupedChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setGrouped(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.nameChanged = function nameChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setName(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.showFilterMenuEntryChanged = function showFilterMenuEntryChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setShowFilterMenuEntry(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.showSortMenuEntryChanged = function showSortMenuEntryChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setShowSortMenuEntry(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.headerSpanChanged = function headerSpanChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setHeaderSpan(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.autoResizableChanged = function autoResizableChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.setAutoResizable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTableColumn.prototype.columnMenuOpenChanged = function columnMenuOpenChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.attachColumnMenuOpen(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.attachValidationSuccess(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.attachValidationError(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.attachParseError(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.attachFormatError(newValue);
                    }
                };

                Ui5gridTableColumn.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._gridtablecolumn !== null) {
                        this._gridtablecolumn.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5gridTableColumn, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._gridtablecolumn;
                    }
                }]);

                return Ui5gridTableColumn;
            }(Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'minWidth', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'resizable', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'hAlign', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Begin';
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'sorted', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'sortOrder', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Ascending';
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'sortProperty', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'filtered', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'filterProperty', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'filterValue', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'filterOperator', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'defaultFilterOperator', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'filterType', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'grouped', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'showFilterMenuEntry', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'showSortMenuEntry', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'headerSpan', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return '1';
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'autoResizable', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'columnMenuOpen', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5gridTableColumn', Ui5gridTableColumn);
        }
    };
});
//# sourceMappingURL=../dist/dev/grid-table-column/grid-table-column.js.map
