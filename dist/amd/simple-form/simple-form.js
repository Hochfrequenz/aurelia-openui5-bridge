define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaFramework, _attributeManager, _attributes, _control) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5SimpleForm = undefined;

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

    var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39;

    var Ui5SimpleForm = exports.Ui5SimpleForm = (_dec = (0, _aureliaTemplating.customElement)('ui5-simple-form'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaFramework.computedFrom)('_simpleform'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5SimpleForm, _Ui5Control);

        function Ui5SimpleForm(element) {
            _classCallCheck(this, Ui5SimpleForm);

            var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

            _this._simpleform = null;
            _this._parent = null;
            _this._relation = null;

            _initDefineProp(_this, 'ui5Id', _descriptor, _this);

            _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

            _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

            _initDefineProp(_this, 'prevId', _descriptor4, _this);

            _initDefineProp(_this, 'maxContainerCols', _descriptor5, _this);

            _initDefineProp(_this, 'minWidth', _descriptor6, _this);

            _initDefineProp(_this, 'width', _descriptor7, _this);

            _initDefineProp(_this, 'editable', _descriptor8, _this);

            _initDefineProp(_this, 'labelMinWidth', _descriptor9, _this);

            _initDefineProp(_this, 'layout', _descriptor10, _this);

            _initDefineProp(_this, 'labelSpanXL', _descriptor11, _this);

            _initDefineProp(_this, 'labelSpanL', _descriptor12, _this);

            _initDefineProp(_this, 'labelSpanM', _descriptor13, _this);

            _initDefineProp(_this, 'labelSpanS', _descriptor14, _this);

            _initDefineProp(_this, 'adjustLabelSpan', _descriptor15, _this);

            _initDefineProp(_this, 'emptySpanXL', _descriptor16, _this);

            _initDefineProp(_this, 'emptySpanL', _descriptor17, _this);

            _initDefineProp(_this, 'emptySpanM', _descriptor18, _this);

            _initDefineProp(_this, 'emptySpanS', _descriptor19, _this);

            _initDefineProp(_this, 'columnsXL', _descriptor20, _this);

            _initDefineProp(_this, 'columnsL', _descriptor21, _this);

            _initDefineProp(_this, 'columnsM', _descriptor22, _this);

            _initDefineProp(_this, 'singleContainerFullSize', _descriptor23, _this);

            _initDefineProp(_this, 'breakpointXL', _descriptor24, _this);

            _initDefineProp(_this, 'breakpointL', _descriptor25, _this);

            _initDefineProp(_this, 'breakpointM', _descriptor26, _this);

            _initDefineProp(_this, 'backgroundDesign', _descriptor27, _this);

            _initDefineProp(_this, 'blocked', _descriptor28, _this);

            _initDefineProp(_this, 'busy', _descriptor29, _this);

            _initDefineProp(_this, 'busyIndicatorDelay', _descriptor30, _this);

            _initDefineProp(_this, 'busyIndicatorSize', _descriptor31, _this);

            _initDefineProp(_this, 'visible', _descriptor32, _this);

            _initDefineProp(_this, 'fieldGroupIds', _descriptor33, _this);

            _initDefineProp(_this, 'validateFieldGroup', _descriptor34, _this);

            _initDefineProp(_this, 'validationSuccess', _descriptor35, _this);

            _initDefineProp(_this, 'validationError', _descriptor36, _this);

            _initDefineProp(_this, 'parseError', _descriptor37, _this);

            _initDefineProp(_this, 'formatError', _descriptor38, _this);

            _initDefineProp(_this, 'modelContextChange', _descriptor39, _this);

            _this.element = element;
            _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
            return _this;
        }

        Ui5SimpleForm.prototype.fillProperties = function fillProperties(params) {
            params.maxContainerCols = this.maxContainerCols ? parseInt(this.maxContainerCols) : 0;
            params.minWidth = this.minWidth ? parseInt(this.minWidth) : 0;
            params.width = this.width;
            params.editable = (0, _attributes.getBooleanFromAttributeValue)(this.editable);
            params.labelMinWidth = this.labelMinWidth ? parseInt(this.labelMinWidth) : 0;
            params.layout = this.layout;
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
            params.backgroundDesign = this.backgroundDesign;

            _Ui5Control.prototype.fillProperties.call(this, params);
        };

        Ui5SimpleForm.prototype.defaultFunc = function defaultFunc() {};

        Ui5SimpleForm.prototype.attached = function attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
            if (this.ui5Id) this._simpleform = new sap.ui.layout.form.SimpleForm(this.ui5Id, params);else this._simpleform = new sap.ui.layout.form.SimpleForm(params);
            if (this.ui5Class) this._simpleform.addStyleClass(this.ui5Class);
            if (this.ui5Tooltip) this._simpleform.setTooltip(this.ui5Tooltip);

            if ($(this.element).closest("[ui5-container]").length > 0) {
                this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                if (!this._parent.UIElement || this._parent.UIElement.sId != this._simpleform.sId) {
                    var prevSibling = null;

                    this._relation = this._parent.addChild(this._simpleform, this.element, this.prevId);
                    this.attributeManager.addAttributes({ "ui5-container": '' });
                } else {
                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                    var prevSibling = null;
                    this._relation = this._parent.addChild(this._simpleform, this.element, this.prevId);

                    this.attributeManager.addAttributes({ "ui5-container": '' });
                }
            } else {
                if (this._simpleform.placeAt) this._simpleform.placeAt(this.element.parentElement);
                this.attributeManager.addAttributes({ "ui5-container": '' });
                this.attributeManager.addClasses("ui5-hide");
            }

            this.attributeManager.addAttributes({ "ui5-id": this._simpleform.sId });
        };

        Ui5SimpleForm.prototype.detached = function detached() {
            try {
                if ($(this.element).closest("[ui5-container]").length > 0) {
                    if (this._parent && this._relation) {
                        if (this._simpleform) this._parent.removeChildByRelation(this._simpleform, this._relation);
                    }
                } else {
                    this._simpleform.destroy();
                }
                _Ui5Control.prototype.detached.call(this);
            } catch (err) {}
        };

        Ui5SimpleForm.prototype.addChild = function addChild(child, elem, afterElement) {
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
                    if (elem.localName == 'content') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._simpleform.insertContent(child, _index);else this._simpleform.addContent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'title-elem') {
                        this._simpleform.setTitle(child);return elem.localName;
                    }
                    if (elem.localName == 'toolbar') {
                        this._simpleform.setToolbar(child);return elem.localName;
                    }
                    if (elem.localName == 'tooltip') {
                        this._simpleform.setTooltip(child);return elem.localName;
                    }
                    if (elem.localName == 'customdata') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._simpleform.insertCustomData(child, _index);else this._simpleform.addCustomData(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'layoutdata') {
                        this._simpleform.setLayoutData(child);return elem.localName;
                    }
                    if (elem.localName == 'dependents') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._simpleform.insertDependent(child, _index);else this._simpleform.addDependent(child, 0);return elem.localName;
                    }
                    if (elem.localName == 'dragdropconfig') {
                        var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._simpleform.insertDragDropConfig(child, _index);else this._simpleform.addDragDropConfig(child, 0);return elem.localName;
                    }
                } catch (err) {}
            }
        };

        Ui5SimpleForm.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
            try {
                if (relation == 'content') {
                    this._simpleform.removeContent(child);
                }
                if (relation == 'title-elem') {
                    this._simpleform.destroyTitle(child);
                }
                if (relation == 'toolbar') {
                    this._simpleform.destroyToolbar(child);
                }
                if (relation == 'tooltip') {
                    this._simpleform.destroyTooltip(child);
                }
                if (relation == 'customdata') {
                    this._simpleform.removeCustomData(child);
                }
                if (relation == 'layoutdata') {
                    this._simpleform.destroyLayoutData(child);
                }
                if (relation == 'dependents') {
                    this._simpleform.removeDependent(child);
                }
                if (relation == 'dragdropconfig') {
                    this._simpleform.removeDragDropConfig(child);
                }
            } catch (err) {}
        };

        Ui5SimpleForm.prototype.maxContainerColsChanged = function maxContainerColsChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setMaxContainerCols(newValue);
            }
        };

        Ui5SimpleForm.prototype.minWidthChanged = function minWidthChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setMinWidth(newValue);
            }
        };

        Ui5SimpleForm.prototype.widthChanged = function widthChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setWidth(newValue);
            }
        };

        Ui5SimpleForm.prototype.editableChanged = function editableChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setEditable((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5SimpleForm.prototype.labelMinWidthChanged = function labelMinWidthChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setLabelMinWidth(newValue);
            }
        };

        Ui5SimpleForm.prototype.layoutChanged = function layoutChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setLayout(newValue);
            }
        };

        Ui5SimpleForm.prototype.labelSpanXLChanged = function labelSpanXLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setLabelSpanXL(newValue);
            }
        };

        Ui5SimpleForm.prototype.labelSpanLChanged = function labelSpanLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setLabelSpanL(newValue);
            }
        };

        Ui5SimpleForm.prototype.labelSpanMChanged = function labelSpanMChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setLabelSpanM(newValue);
            }
        };

        Ui5SimpleForm.prototype.labelSpanSChanged = function labelSpanSChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setLabelSpanS(newValue);
            }
        };

        Ui5SimpleForm.prototype.adjustLabelSpanChanged = function adjustLabelSpanChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setAdjustLabelSpan((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5SimpleForm.prototype.emptySpanXLChanged = function emptySpanXLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setEmptySpanXL(newValue);
            }
        };

        Ui5SimpleForm.prototype.emptySpanLChanged = function emptySpanLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setEmptySpanL(newValue);
            }
        };

        Ui5SimpleForm.prototype.emptySpanMChanged = function emptySpanMChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setEmptySpanM(newValue);
            }
        };

        Ui5SimpleForm.prototype.emptySpanSChanged = function emptySpanSChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setEmptySpanS(newValue);
            }
        };

        Ui5SimpleForm.prototype.columnsXLChanged = function columnsXLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setColumnsXL(newValue);
            }
        };

        Ui5SimpleForm.prototype.columnsLChanged = function columnsLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setColumnsL(newValue);
            }
        };

        Ui5SimpleForm.prototype.columnsMChanged = function columnsMChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setColumnsM(newValue);
            }
        };

        Ui5SimpleForm.prototype.singleContainerFullSizeChanged = function singleContainerFullSizeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setSingleContainerFullSize((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5SimpleForm.prototype.breakpointXLChanged = function breakpointXLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setBreakpointXL(newValue);
            }
        };

        Ui5SimpleForm.prototype.breakpointLChanged = function breakpointLChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setBreakpointL(newValue);
            }
        };

        Ui5SimpleForm.prototype.breakpointMChanged = function breakpointMChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setBreakpointM(newValue);
            }
        };

        Ui5SimpleForm.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.setBackgroundDesign(newValue);
            }
        };

        Ui5SimpleForm.prototype.blockedChanged = function blockedChanged(newValue) {
            if (this._simpleform !== null) {
                this._simpleform.setBlocked((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5SimpleForm.prototype.busyChanged = function busyChanged(newValue) {
            if (this._simpleform !== null) {
                this._simpleform.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5SimpleForm.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
            if (this._simpleform !== null) {
                this._simpleform.setBusyIndicatorDelay(newValue);
            }
        };

        Ui5SimpleForm.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
            if (this._simpleform !== null) {
                this._simpleform.setBusyIndicatorSize(newValue);
            }
        };

        Ui5SimpleForm.prototype.visibleChanged = function visibleChanged(newValue) {
            if (this._simpleform !== null) {
                this._simpleform.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        Ui5SimpleForm.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
            if (this._simpleform !== null) {
                this._simpleform.setFieldGroupIds(newValue);
            }
        };

        Ui5SimpleForm.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.attachValidateFieldGroup(newValue);
            }
        };

        Ui5SimpleForm.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.attachValidationSuccess(newValue);
            }
        };

        Ui5SimpleForm.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.attachValidationError(newValue);
            }
        };

        Ui5SimpleForm.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.attachParseError(newValue);
            }
        };

        Ui5SimpleForm.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.attachFormatError(newValue);
            }
        };

        Ui5SimpleForm.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
            if (newValue != null && newValue != undefined && this._simpleform !== null) {
                this._simpleform.attachModelContextChange(newValue);
            }
        };

        _createClass(Ui5SimpleForm, [{
            key: 'UIElement',
            get: function get() {
                return this._simpleform;
            }
        }]);

        return Ui5SimpleForm;
    }(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
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
    }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maxContainerCols', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
            return 2;
        }
    }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'minWidth', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
            return null;
        }
    }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'labelMinWidth', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
            return 192;
        }
    }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'layout', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
            return 'ResponsiveLayout';
        }
    }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanXL', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanL', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
            return 4;
        }
    }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanM', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
            return 2;
        }
    }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanS', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
            return 12;
        }
    }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'adjustLabelSpan', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanXL', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanL', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanM', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanS', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
            return 0;
        }
    }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'columnsXL', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
            return -1;
        }
    }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'columnsL', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
            return 2;
        }
    }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'columnsM', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
            return 1;
        }
    }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'singleContainerFullSize', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointXL', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
            return 1440;
        }
    }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointL', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
            return 1024;
        }
    }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointM', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
            return 600;
        }
    }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
            return 'Translucent';
        }
    }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'blocked', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
            return false;
        }
    }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
            return 1000;
        }
    }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
            return 'Medium';
        }
    }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec30], {
        enumerable: true,
        initializer: function initializer() {
            return true;
        }
    }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec31], {
        enumerable: true,
        initializer: function initializer() {
            return '[]';
        }
    }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec32], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec33], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec34], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec35], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec36], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec37], {
        enumerable: true,
        initializer: function initializer() {
            return this.defaultFunc;
        }
    }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec38], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);
});