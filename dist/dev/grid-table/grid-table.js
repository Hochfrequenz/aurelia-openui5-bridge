'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, Ui5gridTable;

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

            _export('Ui5gridTable', Ui5gridTable = (_dec = customElement('ui5-grid-table'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec36 = bindable(), _dec37 = bindable(), _dec38 = bindable(), _dec39 = bindable(), _dec40 = bindable(), _dec41 = bindable(), _dec42 = bindable(), _dec43 = bindable(), _dec44 = bindable(), _dec45 = bindable(), _dec46 = bindable(), _dec47 = bindable(), _dec48 = bindable(), _dec49 = bindable(), _dec50 = bindable(), _dec51 = bindable(), _dec52 = bindable(), _dec53 = bindable(), _dec54 = bindable(), _dec55 = bindable(), _dec56 = bindable(), _dec57 = computedFrom('_gridtable'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5gridTable, _Ui5Control);

                function Ui5gridTable(element) {
                    _classCallCheck(this, Ui5gridTable);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._gridtable = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'width', _descriptor5, _this);

                    _initDefineProp(_this, 'rowHeight', _descriptor6, _this);

                    _initDefineProp(_this, 'columnHeaderHeight', _descriptor7, _this);

                    _initDefineProp(_this, 'columnHeaderVisible', _descriptor8, _this);

                    _initDefineProp(_this, 'visibleRowCount', _descriptor9, _this);

                    _initDefineProp(_this, 'firstVisibleRow', _descriptor10, _this);

                    _initDefineProp(_this, 'selectionMode', _descriptor11, _this);

                    _initDefineProp(_this, 'selectionBehavior', _descriptor12, _this);

                    _initDefineProp(_this, 'selectedIndex', _descriptor13, _this);

                    _initDefineProp(_this, 'editable', _descriptor14, _this);

                    _initDefineProp(_this, 'threshold', _descriptor15, _this);

                    _initDefineProp(_this, 'enableColumnReordering', _descriptor16, _this);

                    _initDefineProp(_this, 'enableGrouping', _descriptor17, _this);

                    _initDefineProp(_this, 'showColumnVisibilityMenu', _descriptor18, _this);

                    _initDefineProp(_this, 'showNoData', _descriptor19, _this);

                    _initDefineProp(_this, 'visibleRowCountMode', _descriptor20, _this);

                    _initDefineProp(_this, 'minAutoRowCount', _descriptor21, _this);

                    _initDefineProp(_this, 'fixedColumnCount', _descriptor22, _this);

                    _initDefineProp(_this, 'fixedRowCount', _descriptor23, _this);

                    _initDefineProp(_this, 'fixedBottomRowCount', _descriptor24, _this);

                    _initDefineProp(_this, 'enableColumnFreeze', _descriptor25, _this);

                    _initDefineProp(_this, 'enableCellFilter', _descriptor26, _this);

                    _initDefineProp(_this, 'showOverlay', _descriptor27, _this);

                    _initDefineProp(_this, 'enableSelectAll', _descriptor28, _this);

                    _initDefineProp(_this, 'enableCustomFilter', _descriptor29, _this);

                    _initDefineProp(_this, 'enableBusyIndicator', _descriptor30, _this);

                    _initDefineProp(_this, 'rowActionCount', _descriptor31, _this);

                    _initDefineProp(_this, 'alternateRowColors', _descriptor32, _this);

                    _initDefineProp(_this, 'rowSelectionChange', _descriptor33, _this);

                    _initDefineProp(_this, 'columnSelect', _descriptor34, _this);

                    _initDefineProp(_this, 'columnResize', _descriptor35, _this);

                    _initDefineProp(_this, 'columnMove', _descriptor36, _this);

                    _initDefineProp(_this, 'sort', _descriptor37, _this);

                    _initDefineProp(_this, 'filter', _descriptor38, _this);

                    _initDefineProp(_this, 'group', _descriptor39, _this);

                    _initDefineProp(_this, 'columnVisibility', _descriptor40, _this);

                    _initDefineProp(_this, 'cellClick', _descriptor41, _this);

                    _initDefineProp(_this, 'beforeOpenContextMenu', _descriptor42, _this);

                    _initDefineProp(_this, 'columnFreeze', _descriptor43, _this);

                    _initDefineProp(_this, 'customFilter', _descriptor44, _this);

                    _initDefineProp(_this, 'firstVisibleRowChanged', _descriptor45, _this);

                    _initDefineProp(_this, 'busyStateChanged', _descriptor46, _this);

                    _initDefineProp(_this, 'blocked', _descriptor47, _this);

                    _initDefineProp(_this, 'busy', _descriptor48, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor49, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor50, _this);

                    _initDefineProp(_this, 'visible', _descriptor51, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor52, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor53, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor54, _this);

                    _initDefineProp(_this, 'validationError', _descriptor55, _this);

                    _initDefineProp(_this, 'parseError', _descriptor56, _this);

                    _initDefineProp(_this, 'formatError', _descriptor57, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor58, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5gridTable.prototype.fillProperties = function fillProperties(params) {
                    params.width = this.width;
                    params.rowHeight = this.rowHeight ? parseInt(this.rowHeight) : 0;
                    params.columnHeaderHeight = this.columnHeaderHeight ? parseInt(this.columnHeaderHeight) : 0;
                    params.columnHeaderVisible = getBooleanFromAttributeValue(this.columnHeaderVisible);
                    params.visibleRowCount = this.visibleRowCount ? parseInt(this.visibleRowCount) : 0;
                    params.firstVisibleRow = this.firstVisibleRow ? parseInt(this.firstVisibleRow) : 0;
                    params.selectionMode = this.selectionMode;
                    params.selectionBehavior = this.selectionBehavior;
                    params.selectedIndex = this.selectedIndex ? parseInt(this.selectedIndex) : 0;
                    params.editable = getBooleanFromAttributeValue(this.editable);
                    params.threshold = this.threshold ? parseInt(this.threshold) : 0;
                    params.enableColumnReordering = getBooleanFromAttributeValue(this.enableColumnReordering);
                    params.enableGrouping = getBooleanFromAttributeValue(this.enableGrouping);
                    params.showColumnVisibilityMenu = getBooleanFromAttributeValue(this.showColumnVisibilityMenu);
                    params.showNoData = getBooleanFromAttributeValue(this.showNoData);
                    params.visibleRowCountMode = this.visibleRowCountMode;
                    params.minAutoRowCount = this.minAutoRowCount ? parseInt(this.minAutoRowCount) : 0;
                    params.fixedColumnCount = this.fixedColumnCount ? parseInt(this.fixedColumnCount) : 0;
                    params.fixedRowCount = this.fixedRowCount ? parseInt(this.fixedRowCount) : 0;
                    params.fixedBottomRowCount = this.fixedBottomRowCount ? parseInt(this.fixedBottomRowCount) : 0;
                    params.enableColumnFreeze = getBooleanFromAttributeValue(this.enableColumnFreeze);
                    params.enableCellFilter = getBooleanFromAttributeValue(this.enableCellFilter);
                    params.showOverlay = getBooleanFromAttributeValue(this.showOverlay);
                    params.enableSelectAll = getBooleanFromAttributeValue(this.enableSelectAll);
                    params.enableCustomFilter = getBooleanFromAttributeValue(this.enableCustomFilter);
                    params.enableBusyIndicator = getBooleanFromAttributeValue(this.enableBusyIndicator);
                    params.rowActionCount = this.rowActionCount ? parseInt(this.rowActionCount) : 0;
                    params.alternateRowColors = getBooleanFromAttributeValue(this.alternateRowColors);
                    params.rowSelectionChange = this.rowSelectionChange == null ? this.defaultFunc : this.rowSelectionChange;
                    params.columnSelect = this.columnSelect == null ? this.defaultFunc : this.columnSelect;
                    params.columnResize = this.columnResize == null ? this.defaultFunc : this.columnResize;
                    params.columnMove = this.columnMove == null ? this.defaultFunc : this.columnMove;
                    params.sort = this.sort == null ? this.defaultFunc : this.sort;
                    params.filter = this.filter == null ? this.defaultFunc : this.filter;
                    params.group = this.group == null ? this.defaultFunc : this.group;
                    params.columnVisibility = this.columnVisibility == null ? this.defaultFunc : this.columnVisibility;
                    params.cellClick = this.cellClick == null ? this.defaultFunc : this.cellClick;
                    params.beforeOpenContextMenu = this.beforeOpenContextMenu == null ? this.defaultFunc : this.beforeOpenContextMenu;
                    params.columnFreeze = this.columnFreeze == null ? this.defaultFunc : this.columnFreeze;
                    params.customFilter = this.customFilter == null ? this.defaultFunc : this.customFilter;
                    params.firstVisibleRowChanged = this.firstVisibleRowChanged == null ? this.defaultFunc : this.firstVisibleRowChanged;
                    params.busyStateChanged = this.busyStateChanged == null ? this.defaultFunc : this.busyStateChanged;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5gridTable.prototype.defaultFunc = function defaultFunc() {};

                Ui5gridTable.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._gridtable = new sap.ui.table.Table(this.ui5Id, params);else this._gridtable = new sap.ui.table.Table(params);
                    if (this.ui5Class) this._gridtable.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._gridtable.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._gridtable.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._gridtable, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._gridtable, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._gridtable.placeAt) this._gridtable.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._gridtable.sId });
                };

                Ui5gridTable.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._gridtable) this._parent.removeChildByRelation(this._gridtable, this._relation);
                            }
                        } else {
                            this._gridtable.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5gridTable.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'title-elem') {
                                this._gridtable.setTitle(child);return elem.localName;
                            }
                            if (elem.localName == 'footer') {
                                this._gridtable.setFooter(child);return elem.localName;
                            }
                            if (elem.localName == 'toolbar') {
                                this._gridtable.setToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'extension') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtable.insertExtension(child, _index);else this._gridtable.addExtension(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'columns') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtable.insertColumn(child, _index);else this._gridtable.addColumn(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'rows') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtable.insertRow(child, _index);else this._gridtable.addRow(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'nodata') {
                                this._gridtable.setNoData(child);return elem.localName;
                            }
                            if (elem.localName == 'rowactiontemplate') {
                                this._gridtable.setRowActionTemplate(child);return elem.localName;
                            }
                            if (elem.localName == 'rowsettingstemplate') {
                                this._gridtable.setRowSettingsTemplate(child);return elem.localName;
                            }
                            if (elem.localName == 'contextmenu') {
                                this._gridtable.setContextMenu(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._gridtable.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtable.insertCustomData(child, _index);else this._gridtable.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._gridtable.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtable.insertDependent(child, _index);else this._gridtable.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._gridtable.insertDragDropConfig(child, _index);else this._gridtable.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5gridTable.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'title-elem') {
                            this._gridtable.destroyTitle(child);
                        }
                        if (relation == 'footer') {
                            this._gridtable.destroyFooter(child);
                        }
                        if (relation == 'toolbar') {
                            this._gridtable.destroyToolbar(child);
                        }
                        if (relation == 'extension') {
                            this._gridtable.removeExtension(child);
                        }
                        if (relation == 'columns') {
                            this._gridtable.removeColumn(child);
                        }
                        if (relation == 'rows') {
                            this._gridtable.removeRow(child);
                        }
                        if (relation == 'nodata') {
                            this._gridtable.destroyNoData(child);
                        }
                        if (relation == 'rowactiontemplate') {
                            this._gridtable.destroyRowActionTemplate(child);
                        }
                        if (relation == 'rowsettingstemplate') {
                            this._gridtable.destroyRowSettingsTemplate(child);
                        }
                        if (relation == 'contextmenu') {
                            this._gridtable.destroyContextMenu(child);
                        }
                        if (relation == 'tooltip') {
                            this._gridtable.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._gridtable.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._gridtable.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._gridtable.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._gridtable.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5gridTable.prototype.widthChanged = function widthChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setWidth(newValue);
                    }
                };

                Ui5gridTable.prototype.rowHeightChanged = function rowHeightChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setRowHeight(newValue);
                    }
                };

                Ui5gridTable.prototype.columnHeaderHeightChanged = function columnHeaderHeightChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setColumnHeaderHeight(newValue);
                    }
                };

                Ui5gridTable.prototype.columnHeaderVisibleChanged = function columnHeaderVisibleChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setColumnHeaderVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.visibleRowCountChanged = function visibleRowCountChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setVisibleRowCount(newValue);
                    }
                };

                Ui5gridTable.prototype.firstVisibleRowChanged = function firstVisibleRowChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setFirstVisibleRow(newValue);
                    }
                };

                Ui5gridTable.prototype.selectionModeChanged = function selectionModeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setSelectionMode(newValue);
                    }
                };

                Ui5gridTable.prototype.selectionBehaviorChanged = function selectionBehaviorChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setSelectionBehavior(newValue);
                    }
                };

                Ui5gridTable.prototype.selectedIndexChanged = function selectedIndexChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setSelectedIndex(newValue);
                    }
                };

                Ui5gridTable.prototype.editableChanged = function editableChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEditable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.thresholdChanged = function thresholdChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setThreshold(newValue);
                    }
                };

                Ui5gridTable.prototype.enableColumnReorderingChanged = function enableColumnReorderingChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableColumnReordering(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.enableGroupingChanged = function enableGroupingChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableGrouping(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.showColumnVisibilityMenuChanged = function showColumnVisibilityMenuChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setShowColumnVisibilityMenu(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.showNoDataChanged = function showNoDataChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setShowNoData(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.visibleRowCountModeChanged = function visibleRowCountModeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setVisibleRowCountMode(newValue);
                    }
                };

                Ui5gridTable.prototype.minAutoRowCountChanged = function minAutoRowCountChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setMinAutoRowCount(newValue);
                    }
                };

                Ui5gridTable.prototype.fixedColumnCountChanged = function fixedColumnCountChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setFixedColumnCount(newValue);
                    }
                };

                Ui5gridTable.prototype.fixedRowCountChanged = function fixedRowCountChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setFixedRowCount(newValue);
                    }
                };

                Ui5gridTable.prototype.fixedBottomRowCountChanged = function fixedBottomRowCountChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setFixedBottomRowCount(newValue);
                    }
                };

                Ui5gridTable.prototype.enableColumnFreezeChanged = function enableColumnFreezeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableColumnFreeze(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.enableCellFilterChanged = function enableCellFilterChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableCellFilter(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.showOverlayChanged = function showOverlayChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setShowOverlay(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.enableSelectAllChanged = function enableSelectAllChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableSelectAll(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.enableCustomFilterChanged = function enableCustomFilterChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableCustomFilter(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.enableBusyIndicatorChanged = function enableBusyIndicatorChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setEnableBusyIndicator(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.rowActionCountChanged = function rowActionCountChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setRowActionCount(newValue);
                    }
                };

                Ui5gridTable.prototype.alternateRowColorsChanged = function alternateRowColorsChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setAlternateRowColors(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.rowSelectionChangeChanged = function rowSelectionChangeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachRowSelectionChange(newValue);
                    }
                };

                Ui5gridTable.prototype.columnSelectChanged = function columnSelectChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachColumnSelect(newValue);
                    }
                };

                Ui5gridTable.prototype.columnResizeChanged = function columnResizeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachColumnResize(newValue);
                    }
                };

                Ui5gridTable.prototype.columnMoveChanged = function columnMoveChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachColumnMove(newValue);
                    }
                };

                Ui5gridTable.prototype.sortChanged = function sortChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachSort(newValue);
                    }
                };

                Ui5gridTable.prototype.filterChanged = function filterChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachFilter(newValue);
                    }
                };

                Ui5gridTable.prototype.groupChanged = function groupChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachGroup(newValue);
                    }
                };

                Ui5gridTable.prototype.columnVisibilityChanged = function columnVisibilityChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachColumnVisibility(newValue);
                    }
                };

                Ui5gridTable.prototype.cellClickChanged = function cellClickChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachCellClick(newValue);
                    }
                };

                Ui5gridTable.prototype.beforeOpenContextMenuChanged = function beforeOpenContextMenuChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachBeforeOpenContextMenu(newValue);
                    }
                };

                Ui5gridTable.prototype.columnFreezeChanged = function columnFreezeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachColumnFreeze(newValue);
                    }
                };

                Ui5gridTable.prototype.customFilterChanged = function customFilterChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachCustomFilter(newValue);
                    }
                };

                Ui5gridTable.prototype.firstVisibleRowChangedChanged = function firstVisibleRowChangedChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachFirstVisibleRowChanged(newValue);
                    }
                };

                Ui5gridTable.prototype.busyStateChangedChanged = function busyStateChangedChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachBusyStateChanged(newValue);
                    }
                };

                Ui5gridTable.prototype.blockedChanged = function blockedChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setBlocked(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5gridTable.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5gridTable.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5gridTable.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.setFieldGroupIds(newValue);
                    }
                };

                Ui5gridTable.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5gridTable.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachValidationSuccess(newValue);
                    }
                };

                Ui5gridTable.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachValidationError(newValue);
                    }
                };

                Ui5gridTable.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachParseError(newValue);
                    }
                };

                Ui5gridTable.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachFormatError(newValue);
                    }
                };

                Ui5gridTable.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (this._gridtable !== null) {
                        this._gridtable.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5gridTable, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._gridtable;
                    }
                }]);

                return Ui5gridTable;
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return 'auto';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'rowHeight', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'columnHeaderHeight', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'columnHeaderVisible', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'visibleRowCount', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return 10;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'firstVisibleRow', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'selectionMode', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return 'MultiToggle';
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'selectionBehavior', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'RowSelector';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'selectedIndex', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return -1;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'threshold', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 100;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'enableColumnReordering', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'enableGrouping', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'showColumnVisibilityMenu', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'visibleRowCountMode', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Fixed';
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'minAutoRowCount', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return 5;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'fixedColumnCount', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'fixedRowCount', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'fixedBottomRowCount', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'enableColumnFreeze', [_dec23], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'enableCellFilter', [_dec24], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'showOverlay', [_dec25], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'enableSelectAll', [_dec26], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'enableCustomFilter', [_dec27], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec28], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'rowActionCount', [_dec29], {
                enumerable: true,
                initializer: function initializer() {
                    return 0;
                }
            }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'alternateRowColors', [_dec30], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'rowSelectionChange', [_dec31], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'columnSelect', [_dec32], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'columnResize', [_dec33], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'columnMove', [_dec34], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'sort', [_dec35], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'filter', [_dec36], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'group', [_dec37], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, 'columnVisibility', [_dec38], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, 'cellClick', [_dec39], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpenContextMenu', [_dec40], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, 'columnFreeze', [_dec41], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, 'customFilter', [_dec42], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor45 = _applyDecoratedDescriptor(_class2.prototype, 'firstVisibleRowChanged', [_dec43], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor46 = _applyDecoratedDescriptor(_class2.prototype, 'busyStateChanged', [_dec44], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor47 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec45], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor48 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec46], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor49 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec47], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor50 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec48], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor51 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec49], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor52 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec50], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor53 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec51], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor54 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec52], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor55 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec53], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor56 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec54], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor57 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec55], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor58 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec56], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec57], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5gridTable', Ui5gridTable);
        }
    };
});
//# sourceMappingURL=../dist/dev/grid-table/grid-table.js.map
