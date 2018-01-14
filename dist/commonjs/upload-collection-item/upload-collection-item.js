'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5UploadCollectionItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _element = require('../element/element');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Ui5UploadCollectionItem = exports.Ui5UploadCollectionItem = (_dec = (0, _aureliaTemplating.customElement)('ui5-upload-collection-item'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaFramework.computedFrom)('_uploadcollectionitem'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Element) {
    _inherits(Ui5UploadCollectionItem, _Ui5Element);

    function Ui5UploadCollectionItem(element) {
        _classCallCheck(this, Ui5UploadCollectionItem);

        var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, element));

        _this._uploadcollectionitem = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'contributor', _descriptor2, _this);

        _initDefineProp(_this, 'documentId', _descriptor3, _this);

        _initDefineProp(_this, 'fileName', _descriptor4, _this);

        _initDefineProp(_this, 'fileSize', _descriptor5, _this);

        _initDefineProp(_this, 'mimeType', _descriptor6, _this);

        _initDefineProp(_this, 'thumbnailUrl', _descriptor7, _this);

        _initDefineProp(_this, 'uploadedDate', _descriptor8, _this);

        _initDefineProp(_this, 'url', _descriptor9, _this);

        _initDefineProp(_this, 'enableEdit', _descriptor10, _this);

        _initDefineProp(_this, 'enableDelete', _descriptor11, _this);

        _initDefineProp(_this, 'visibleEdit', _descriptor12, _this);

        _initDefineProp(_this, 'visibleDelete', _descriptor13, _this);

        _initDefineProp(_this, 'ariaLabelForPicture', _descriptor14, _this);

        _initDefineProp(_this, 'selected', _descriptor15, _this);

        _initDefineProp(_this, 'press', _descriptor16, _this);

        _initDefineProp(_this, 'deletePress', _descriptor17, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5UploadCollectionItem.prototype.fillProperties = function fillProperties(params) {
        params.contributor = this.contributor;
        params.documentId = this.documentId;
        params.fileName = this.fileName;
        params.fileSize = this.fileSize;
        params.mimeType = this.mimeType;
        params.thumbnailUrl = this.thumbnailUrl;
        params.uploadedDate = this.uploadedDate;
        params.url = this.url;
        params.enableEdit = (0, _attributes.getBooleanFromAttributeValue)(this.enableEdit);
        params.enableDelete = (0, _attributes.getBooleanFromAttributeValue)(this.enableDelete);
        params.visibleEdit = (0, _attributes.getBooleanFromAttributeValue)(this.visibleEdit);
        params.visibleDelete = (0, _attributes.getBooleanFromAttributeValue)(this.visibleDelete);
        params.ariaLabelForPicture = this.ariaLabelForPicture;
        params.selected = (0, _attributes.getBooleanFromAttributeValue)(this.selected);
    };

    Ui5UploadCollectionItem.prototype.defaultFunc = function defaultFunc() {};

    Ui5UploadCollectionItem.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        _Ui5Element.prototype.fillProperties.call(this, params);
        if (this.ui5Id) this._uploadcollectionitem = new sap.m.UploadCollectionItem(this.ui5Id, params);else this._uploadcollectionitem = new sap.m.UploadCollectionItem(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._uploadcollectionitem.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._uploadcollectionitem, this.element);
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
        if (this._parent && this._relation) {
            this._parent.removeChildByRelation(this._uploadcollectionitem, this._relation);
        } else {
            this._uploadcollectionitem.destroy();
        }
        _Ui5Element.prototype.detached.call(this);
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

            if (elem.localName == 'attributes') {
                var _index = null;if (afterElement) _index = this._uploadcollectionitem.indexOfAttribute(afterElement);if (_index) this._uploadcollectionitem.insertAttribute(child, _index + 1);else this._uploadcollectionitem.addAttribute(child, 0);return elem.localName;
            }
            if (elem.localName == 'statuses') {
                var _index = null;if (afterElement) _index = this._uploadcollectionitem.indexOfStatus(afterElement);if (_index) this._uploadcollectionitem.insertStatus(child, _index + 1);else this._uploadcollectionitem.addStatus(child, 0);return elem.localName;
            }
            if (elem.localName == 'markers') {
                var _index = null;if (afterElement) _index = this._uploadcollectionitem.indexOfMarker(afterElement);if (_index) this._uploadcollectionitem.insertMarker(child, _index + 1);else this._uploadcollectionitem.addMarker(child, 0);return elem.localName;
            }
        }
    };

    Ui5UploadCollectionItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        if (relation == 'attributes') {
            this._uploadcollectionitem.removeAttribute(child);
        }
        if (relation == 'statuses') {
            this._uploadcollectionitem.removeStatus(child);
        }
        if (relation == 'markers') {
            this._uploadcollectionitem.removeMarker(child);
        }
    };

    Ui5UploadCollectionItem.prototype.contributorChanged = function contributorChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setContributor(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.documentIdChanged = function documentIdChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setDocumentId(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.fileNameChanged = function fileNameChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setFileName(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.fileSizeChanged = function fileSizeChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setFileSize(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setMimeType(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.thumbnailUrlChanged = function thumbnailUrlChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setThumbnailUrl(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.uploadedDateChanged = function uploadedDateChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setUploadedDate(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.urlChanged = function urlChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setUrl(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.enableEditChanged = function enableEditChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setEnableEdit((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollectionItem.prototype.enableDeleteChanged = function enableDeleteChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setEnableDelete((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollectionItem.prototype.visibleEditChanged = function visibleEditChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setVisibleEdit((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollectionItem.prototype.visibleDeleteChanged = function visibleDeleteChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setVisibleDelete((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollectionItem.prototype.ariaLabelForPictureChanged = function ariaLabelForPictureChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setAriaLabelForPicture(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.selectedChanged = function selectedChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.setSelected((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollectionItem.prototype.pressChanged = function pressChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.attachPress(newValue);
        }
    };

    Ui5UploadCollectionItem.prototype.deletePressChanged = function deletePressChanged(newValue) {
        if (this._uploadcollectionitem !== null) {
            this._uploadcollectionitem.attachDeletePress(newValue);
        }
    };

    _createClass(Ui5UploadCollectionItem, [{
        key: 'UIElement',
        get: function get() {
            return this._uploadcollectionitem;
        }
    }]);

    return Ui5UploadCollectionItem;
}(_element.Ui5Element), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'contributor', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'documentId', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'fileName', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'fileSize', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mimeType', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'thumbnailUrl', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'uploadedDate', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'url', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'enableEdit', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableDelete', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'visibleEdit', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'visibleDelete', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'ariaLabelForPicture', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'deletePress', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);