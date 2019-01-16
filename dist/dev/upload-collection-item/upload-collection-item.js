'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-framework', '../common/attributeManager', '../common/attributes', '../element/element'], function (_export, _context) {
    "use strict";

    var bindable, customElement, noView, inject, computedFrom, AttributeManager, getBooleanFromAttributeValue, Ui5Element, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, Ui5UploadCollectionItem;

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

            _export('Ui5UploadCollectionItem', Ui5UploadCollectionItem = (_dec = customElement('ui5-upload-collection-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = computedFrom('_uploadcollectionitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
                _inherits(Ui5UploadCollectionItem, _Ui5Element);

                function Ui5UploadCollectionItem(element) {
                    _classCallCheck(this, Ui5UploadCollectionItem);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

                    _this._uploadcollectionitem = null;
                    _this._parent = null;
                    _this._relation = null;

                    _initDefineProp(_this, 'ui5Id', _descriptor, _this);

                    _initDefineProp(_this, 'ui5Class', _descriptor2, _this);

                    _initDefineProp(_this, 'ui5Tooltip', _descriptor3, _this);

                    _initDefineProp(_this, 'prevId', _descriptor4, _this);

                    _initDefineProp(_this, 'documentId', _descriptor5, _this);

                    _initDefineProp(_this, 'fileName', _descriptor6, _this);

                    _initDefineProp(_this, 'mimeType', _descriptor7, _this);

                    _initDefineProp(_this, 'thumbnailUrl', _descriptor8, _this);

                    _initDefineProp(_this, 'url', _descriptor9, _this);

                    _initDefineProp(_this, 'enableEdit', _descriptor10, _this);

                    _initDefineProp(_this, 'enableDelete', _descriptor11, _this);

                    _initDefineProp(_this, 'visibleEdit', _descriptor12, _this);

                    _initDefineProp(_this, 'visibleDelete', _descriptor13, _this);

                    _initDefineProp(_this, 'ariaLabelForPicture', _descriptor14, _this);

                    _initDefineProp(_this, 'selected', _descriptor15, _this);

                    _initDefineProp(_this, 'press', _descriptor16, _this);

                    _initDefineProp(_this, 'deletePress', _descriptor17, _this);

                    _initDefineProp(_this, 'validationSuccess', _descriptor18, _this);

                    _initDefineProp(_this, 'validationError', _descriptor19, _this);

                    _initDefineProp(_this, 'parseError', _descriptor20, _this);

                    _initDefineProp(_this, 'formatError', _descriptor21, _this);

                    _initDefineProp(_this, 'modelContextChange', _descriptor22, _this);

                    _this.element = element;
                    _this.attributeManager = new AttributeManager(_this.element);
                    return _this;
                }

                Ui5UploadCollectionItem.prototype.fillProperties = function fillProperties(params) {
                    params.documentId = this.documentId;
                    params.fileName = this.fileName;
                    params.mimeType = this.mimeType;
                    params.thumbnailUrl = this.thumbnailUrl;
                    params.url = this.url;
                    params.enableEdit = getBooleanFromAttributeValue(this.enableEdit);
                    params.enableDelete = getBooleanFromAttributeValue(this.enableDelete);
                    params.visibleEdit = getBooleanFromAttributeValue(this.visibleEdit);
                    params.visibleDelete = getBooleanFromAttributeValue(this.visibleDelete);
                    params.ariaLabelForPicture = this.ariaLabelForPicture;
                    params.selected = getBooleanFromAttributeValue(this.selected);
                    params.press = this.press == null ? this.defaultFunc : this.press;
                    params.deletePress = this.deletePress == null ? this.defaultFunc : this.deletePress;

                    _Ui5Element.prototype.fillProperties.call(this, params);
                };

                Ui5UploadCollectionItem.prototype.defaultFunc = function defaultFunc() {};

                Ui5UploadCollectionItem.prototype.attached = function attached() {
                    var that = this;
                    var params = {};
                    this.fillProperties(params);
                    if (this.ui5Id) this._uploadcollectionitem = new sap.m.UploadCollectionItem(this.ui5Id, params);else this._uploadcollectionitem = new sap.m.UploadCollectionItem(params);
                    if (this.ui5Class) this._uploadcollectionitem.addStyleClass(this.ui5Class);
                    if (this.ui5Tooltip) this._uploadcollectionitem.setTooltip(this.ui5Tooltip);

                    if ($(this.element).closest("[ui5-container]").length > 0) {
                        this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                        if (!this._parent.UIElement || this._parent.UIElement.sId != this._uploadcollectionitem.sId) {
                            var prevSibling = null;

                            this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, this.prevId);
                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        } else {
                            this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                            var prevSibling = null;
                            this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, this.prevId);

                            this.attributeManager.addAttributes({ "ui5-container": '' });
                        }
                    } else {
                        if (this._uploadcollectionitem.placeAt) this._uploadcollectionitem.placeAt(this.element.parentElement);
                        this.attributeManager.addAttributes({ "ui5-container": '' });
                        this.attributeManager.addClasses("ui5-hide");
                    }

                    this.attributeManager.addAttributes({ "ui5-id": this._uploadcollectionitem.sId });
                };

                Ui5UploadCollectionItem.prototype.detached = function detached() {
                    try {
                        if ($(this.element).closest("[ui5-container]").length > 0) {
                            if (this._parent && this._relation) {
                                if (this._uploadcollectionitem) this._parent.removeChildByRelation(this._uploadcollectionitem, this._relation);
                            }
                        } else {
                            this._uploadcollectionitem.destroy();
                        }
                        _Ui5Element.prototype.detached.call(this);
                    } catch (err) {}
                };

                Ui5UploadCollectionItem.prototype.addChild = function addChild(child, elem, afterElement) {
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
                            if (elem.localName == 'attributes') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionitem.insertAttribute(child, _index);else this._uploadcollectionitem.addAttribute(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'statuses') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionitem.insertStatus(child, _index);else this._uploadcollectionitem.addStatus(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'markers') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionitem.insertMarker(child, _index);else this._uploadcollectionitem.addMarker(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'tooltip') {
                                this._uploadcollectionitem.setTooltip(child);return elem.localName;
                            }
                            if (elem.localName == 'customdata') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionitem.insertCustomData(child, _index);else this._uploadcollectionitem.addCustomData(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'layoutdata') {
                                this._uploadcollectionitem.setLayoutData(child);return elem.localName;
                            }
                            if (elem.localName == 'dependents') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionitem.insertDependent(child, _index);else this._uploadcollectionitem.addDependent(child, 0);return elem.localName;
                            }
                            if (elem.localName == 'dragdropconfig') {
                                var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollectionitem.insertDragDropConfig(child, _index);else this._uploadcollectionitem.addDragDropConfig(child, 0);return elem.localName;
                            }
                        } catch (err) {}
                    }
                };

                Ui5UploadCollectionItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
                    try {
                        if (relation == 'attributes') {
                            this._uploadcollectionitem.removeAttribute(child);
                        }
                        if (relation == 'statuses') {
                            this._uploadcollectionitem.removeStatus(child);
                        }
                        if (relation == 'markers') {
                            this._uploadcollectionitem.removeMarker(child);
                        }
                        if (relation == 'tooltip') {
                            this._uploadcollectionitem.destroyTooltip(child);
                        }
                        if (relation == 'customdata') {
                            this._uploadcollectionitem.removeCustomData(child);
                        }
                        if (relation == 'layoutdata') {
                            this._uploadcollectionitem.destroyLayoutData(child);
                        }
                        if (relation == 'dependents') {
                            this._uploadcollectionitem.removeDependent(child);
                        }
                        if (relation == 'dragdropconfig') {
                            this._uploadcollectionitem.removeDragDropConfig(child);
                        }
                    } catch (err) {}
                };

                Ui5UploadCollectionItem.prototype.documentIdChanged = function documentIdChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setDocumentId(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.fileNameChanged = function fileNameChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setFileName(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setMimeType(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.thumbnailUrlChanged = function thumbnailUrlChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setThumbnailUrl(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.urlChanged = function urlChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setUrl(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.enableEditChanged = function enableEditChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setEnableEdit(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5UploadCollectionItem.prototype.enableDeleteChanged = function enableDeleteChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setEnableDelete(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5UploadCollectionItem.prototype.visibleEditChanged = function visibleEditChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setVisibleEdit(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5UploadCollectionItem.prototype.visibleDeleteChanged = function visibleDeleteChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setVisibleDelete(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5UploadCollectionItem.prototype.ariaLabelForPictureChanged = function ariaLabelForPictureChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setAriaLabelForPicture(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.selectedChanged = function selectedChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.setSelected(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5UploadCollectionItem.prototype.pressChanged = function pressChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachPress(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.deletePressChanged = function deletePressChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachDeletePress(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachValidationSuccess(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachValidationError(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachParseError(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachFormatError(newValue);
                    }
                };

                Ui5UploadCollectionItem.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
                    if (newValue != null && newValue != undefined && this._uploadcollectionitem !== null) {
                        this._uploadcollectionitem.attachModelContextChange(newValue);
                    }
                };

                _createClass(Ui5UploadCollectionItem, [{
                    key: 'UIElement',
                    get: function get() {
                        return this._uploadcollectionitem;
                    }
                }]);

                return Ui5UploadCollectionItem;
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
            }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'documentId', [_dec3], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'fileName', [_dec4], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'mimeType', [_dec5], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'thumbnailUrl', [_dec6], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'url', [_dec7], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'enableEdit', [_dec8], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableDelete', [_dec9], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'visibleEdit', [_dec10], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'visibleDelete', [_dec11], {
                enumerable: true,
                initializer: function initializer() {
                    return true;
                }
            }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'ariaLabelForPicture', [_dec12], {
                enumerable: true,
                initializer: function initializer() {
                    return null;
                }
            }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec13], {
                enumerable: true,
                initializer: function initializer() {
                    return false;
                }
            }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec14], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'deletePress', [_dec15], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec16], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec17], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec18], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec19], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec20], {
                enumerable: true,
                initializer: function initializer() {
                    return this.defaultFunc;
                }
            }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

            _export('Ui5UploadCollectionItem', Ui5UploadCollectionItem);
        }
    };
});
//# sourceMappingURL=../dist/dev/upload-collection-item/upload-collection-item.js.map
