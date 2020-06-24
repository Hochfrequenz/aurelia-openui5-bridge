'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, Ui5Panel;

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

            _export('Ui5Panel', Ui5Panel = (_dec = customElement('ui5-panel'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = computedFrom('_panel'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
                _inherits(Ui5Panel, _Ui5Control);

                function Ui5Panel(element) {
                    _classCallCheck(this, Ui5Panel);

                    var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

                    _this._panel = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'headerText', _descriptor5, _this);

                    _initDefineProp(_this, 'width', _descriptor6, _this);

                    _initDefineProp(_this, 'height', _descriptor7, _this);

                    _initDefineProp(_this, 'expandable', _descriptor8, _this);

                    _initDefineProp(_this, 'expanded', _descriptor9, _this);

                    _initDefineProp(_this, 'expandAnimation', _descriptor10, _this);

                    _initDefineProp(_this, 'backgroundDesign', _descriptor11, _this);

                    _initDefineProp(_this, 'accessibleRole', _descriptor12, _this);

                    _initDefineProp(_this, 'expand', _descriptor13, _this);

                    _initDefineProp(_this, 'busy', _descriptor14, _this);

                    _initDefineProp(_this, 'busyIndicatorDelay', _descriptor15, _this);

                    _initDefineProp(_this, 'busyIndicatorSize', _descriptor16, _this);

                    _initDefineProp(_this, 'visible', _descriptor17, _this);

                    _initDefineProp(_this, 'fieldGroupIds', _descriptor18, _this);

                    _initDefineProp(_this, 'validateFieldGroup', _descriptor19, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor20, _this);

                    _initDefineProp(_this, 'validationError', _descriptor21, _this);

                    _initDefineProp(_this, 'parseError', _descriptor22, _this);

                    _initDefineProp(_this, 'formatError', _descriptor23, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor24, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5Panel.prototype.fillProperties = function fillProperties(params) {
                    params.headerText = this.headerText;
                    params.width = this.width;
                    params.height = this.height;
                    params.expandable = getBooleanFromAttributeValue(this.expandable);
                    params.expanded = getBooleanFromAttributeValue(this.expanded);
                    params.expandAnimation = getBooleanFromAttributeValue(this.expandAnimation);
                    params.backgroundDesign = this.backgroundDesign;
                    params.accessibleRole = this.accessibleRole;
                    params.expand = this.expand == null ? this.defaultFunc : this.expand;

                    _Ui5Control.prototype.fillProperties.call(this, params);
                };

                Ui5Panel.prototype.defaultFunc = function defaultFunc() {};

                Ui5Panel.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._panel = new sap.m.Panel(this.ui5Id, params);else this._panel = new sap.m.Panel(params);
                    if (this.ui5Class) this._panel.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._panel.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._panel.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._panel, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._panel, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._panel.placeAt) this._panel.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._panel.sId });
                };

                Ui5Panel.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._panel) this._parent.removeChildByRelation(this._panel, this._relation);
                            }
                        } else {
                            this._panel.destroy();
                        }
                        _Ui5Control.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5Panel.prototype.addChild = function addChild(child, elem, afterElement) {
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
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._panel.insertContent(child, _index);else this._panel.addContent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'headertoolbar') {
                                this._panel.setHeaderToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'infotoolbar') {
                                this._panel.setInfoToolbar(child);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._panel.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._panel.insertCustomData(child, _index);else this._panel.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._panel.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._panel.insertDependent(child, _index);else this._panel.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._panel.insertDragDropConfig(child, _index);else this._panel.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5Panel.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'content') {
                            this._panel.removeContent(child);
                        }
                        if (relation == 'headertoolbar') {
                            this._panel.destroyHeaderToolbar(child);
                        }
                        if (relation == 'infotoolbar') {
                            this._panel.destroyInfoToolbar(child);
                        }
                        if (relation == 'tooltip') {
                            this._panel.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._panel.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._panel.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._panel.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._panel.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5Panel.prototype.headerTextChanged = function headerTextChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setHeaderText(newValue);
                    }
                };

                Ui5Panel.prototype.widthChanged = function widthChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setWidth(newValue);
                    }
                };

                Ui5Panel.prototype.heightChanged = function heightChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setHeight(newValue);
                    }
                };

                Ui5Panel.prototype.expandableChanged = function expandableChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setExpandable(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Panel.prototype.expandedChanged = function expandedChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setExpanded(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Panel.prototype.expandAnimationChanged = function expandAnimationChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setExpandAnimation(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Panel.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setBackgroundDesign(newValue);
                    }
                };

                Ui5Panel.prototype.accessibleRoleChanged = function accessibleRoleChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.setAccessibleRole(newValue);
                    }
                };

                Ui5Panel.prototype.expandChanged = function expandChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachExpand(newValue);
                    }
                };

                Ui5Panel.prototype.busyChanged = function busyChanged(newValue) {
                    if (this._panel !== null) {
                        this._panel.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Panel.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
                    if (this._panel !== null) {
                        this._panel.setBusyIndicatorDelay(newValue);
                    }
                };

                Ui5Panel.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
                    if (this._panel !== null) {
                        this._panel.setBusyIndicatorSize(newValue);
                    }
                };

                Ui5Panel.prototype.visibleChanged = function visibleChanged(newValue) {
                    if (this._panel !== null) {
                        this._panel.setVisible(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Panel.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
                    if (this._panel !== null) {
                        this._panel.setFieldGroupIds(newValue);
                    }
                };

                Ui5Panel.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachValidateFieldGroup(newValue);
                    }
                };

                Ui5Panel.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachValidationSuccess(newValue);
                    }
                };

                Ui5Panel.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachValidationError(newValue);
                    }
                };

                Ui5Panel.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachParseError(newValue);
                    }
                };

                Ui5Panel.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachFormatError(newValue);
                    }
                };

                Ui5Panel.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._panel !== null) {
                        this._panel.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5Panel, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._panel;
                    }
                }]);

                return Ui5Panel;
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return '';
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return '100%';
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return 'auto';
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'expandable', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'expanded', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'expandAnimation', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Translucent';
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'accessibleRole', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Form';
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'expand', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return 1000;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return 'Medium';
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return '[]';
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec21], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec22], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec23], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5Panel', Ui5Panel);
        }
    };
});