'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5UploadCollection = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _control = require('../control/control');

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

var Ui5UploadCollection = exports.Ui5UploadCollection = (_dec = (0, _aureliaTemplating.customElement)('ui5-upload-collection'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaTemplating.bindable)(), _dec40 = (0, _aureliaFramework.computedFrom)('_uploadcollection'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5UploadCollection, _Ui5Control);

    function Ui5UploadCollection(element) {
        _classCallCheck(this, Ui5UploadCollection);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._uploadcollection = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'prevId', _descriptor2, _this);

        _initDefineProp(_this, 'fileType', _descriptor3, _this);

        _initDefineProp(_this, 'maximumFilenameLength', _descriptor4, _this);

        _initDefineProp(_this, 'maximumFileSize', _descriptor5, _this);

        _initDefineProp(_this, 'mimeType', _descriptor6, _this);

        _initDefineProp(_this, 'multiple', _descriptor7, _this);

        _initDefineProp(_this, 'noDataText', _descriptor8, _this);

        _initDefineProp(_this, 'noDataDescription', _descriptor9, _this);

        _initDefineProp(_this, 'sameFilenameAllowed', _descriptor10, _this);

        _initDefineProp(_this, 'showSeparators', _descriptor11, _this);

        _initDefineProp(_this, 'uploadEnabled', _descriptor12, _this);

        _initDefineProp(_this, 'uploadUrl', _descriptor13, _this);

        _initDefineProp(_this, 'instantUpload', _descriptor14, _this);

        _initDefineProp(_this, 'numberOfAttachmentsText', _descriptor15, _this);

        _initDefineProp(_this, 'mode', _descriptor16, _this);

        _initDefineProp(_this, 'uploadButtonInvisible', _descriptor17, _this);

        _initDefineProp(_this, 'terminationEnabled', _descriptor18, _this);

        _initDefineProp(_this, 'change', _descriptor19, _this);

        _initDefineProp(_this, 'fileDeleted', _descriptor20, _this);

        _initDefineProp(_this, 'filenameLengthExceed', _descriptor21, _this);

        _initDefineProp(_this, 'fileRenamed', _descriptor22, _this);

        _initDefineProp(_this, 'fileSizeExceed', _descriptor23, _this);

        _initDefineProp(_this, 'typeMissmatch', _descriptor24, _this);

        _initDefineProp(_this, 'uploadComplete', _descriptor25, _this);

        _initDefineProp(_this, 'uploadTerminated', _descriptor26, _this);

        _initDefineProp(_this, 'beforeUploadStarts', _descriptor27, _this);

        _initDefineProp(_this, 'selectionChange', _descriptor28, _this);

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

    Ui5UploadCollection.prototype.fillProperties = function fillProperties(params) {
        params.fileType = this.fileType;
        params.maximumFilenameLength = this.maximumFilenameLength ? parseInt(this.maximumFilenameLength) : 0;
        params.maximumFileSize = this.maximumFileSize;
        params.mimeType = this.mimeType;
        params.multiple = (0, _attributes.getBooleanFromAttributeValue)(this.multiple);
        params.noDataText = this.noDataText;
        params.noDataDescription = this.noDataDescription;
        params.sameFilenameAllowed = (0, _attributes.getBooleanFromAttributeValue)(this.sameFilenameAllowed);
        params.showSeparators = this.showSeparators;
        params.uploadEnabled = (0, _attributes.getBooleanFromAttributeValue)(this.uploadEnabled);
        params.uploadUrl = this.uploadUrl;
        params.instantUpload = (0, _attributes.getBooleanFromAttributeValue)(this.instantUpload);
        params.numberOfAttachmentsText = this.numberOfAttachmentsText;
        params.mode = this.mode;
        params.uploadButtonInvisible = (0, _attributes.getBooleanFromAttributeValue)(this.uploadButtonInvisible);
        params.terminationEnabled = (0, _attributes.getBooleanFromAttributeValue)(this.terminationEnabled);
        params.change = this.change == null ? this.defaultFunc : this.change;
        params.fileDeleted = this.fileDeleted == null ? this.defaultFunc : this.fileDeleted;
        params.filenameLengthExceed = this.filenameLengthExceed == null ? this.defaultFunc : this.filenameLengthExceed;
        params.fileRenamed = this.fileRenamed == null ? this.defaultFunc : this.fileRenamed;
        params.fileSizeExceed = this.fileSizeExceed == null ? this.defaultFunc : this.fileSizeExceed;
        params.typeMissmatch = this.typeMissmatch == null ? this.defaultFunc : this.typeMissmatch;
        params.uploadComplete = this.uploadComplete == null ? this.defaultFunc : this.uploadComplete;
        params.uploadTerminated = this.uploadTerminated == null ? this.defaultFunc : this.uploadTerminated;
        params.beforeUploadStarts = this.beforeUploadStarts == null ? this.defaultFunc : this.beforeUploadStarts;
        params.selectionChange = this.selectionChange == null ? this.defaultFunc : this.selectionChange;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5UploadCollection.prototype.defaultFunc = function defaultFunc() {};

    Ui5UploadCollection.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._uploadcollection = new sap.m.UploadCollection(this.ui5Id, params);else this._uploadcollection = new sap.m.UploadCollection(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._uploadcollection.sId) {
                var prevSibling = null;

                this._relation = this._parent.addChild(this._uploadcollection, this.element, this.prevId);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                this._relation = this._parent.addChild(this._uploadcollection, this.element, this.prevId);

                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._uploadcollection.placeAt) this._uploadcollection.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._uploadcollection.sId });
    };

    Ui5UploadCollection.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    if (this._uploadcollection) this._parent.removeChildByRelation(this._uploadcollection, this._relation);
                }
            } else {
                this._uploadcollection.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5UploadCollection.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'items') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollection.insertItem(child, _index);else this._uploadcollection.addItem(child, 0);return elem.localName;
                }
                if (elem.localName == 'headerparameters') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollection.insertHeaderParameter(child, _index);else this._uploadcollection.addHeaderParameter(child, 0);return elem.localName;
                }
                if (elem.localName == 'parameters') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollection.insertParameter(child, _index);else this._uploadcollection.addParameter(child, 0);return elem.localName;
                }
                if (elem.localName == 'toolbar') {
                    this._uploadcollection.setToolbar(child);return elem.localName;
                }
                if (elem.localName == 'infotoolbar') {
                    this._uploadcollection.setInfoToolbar(child);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._uploadcollection.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollection.insertCustomData(child, _index);else this._uploadcollection.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._uploadcollection.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = afterElement ? Math.floor(afterElement + 1) : null;if (_index) this._uploadcollection.insertDependent(child, _index);else this._uploadcollection.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5UploadCollection.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'items') {
                this._uploadcollection.removeItem(child);
            }
            if (relation == 'headerparameters') {
                this._uploadcollection.removeHeaderParameter(child);
            }
            if (relation == 'parameters') {
                this._uploadcollection.removeParameter(child);
            }
            if (relation == 'toolbar') {
                this._uploadcollection.destroyToolbar(child);
            }
            if (relation == 'infotoolbar') {
                this._uploadcollection.destroyInfoToolbar(child);
            }
            if (relation == 'tooltip') {
                this._uploadcollection.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._uploadcollection.removeCustomData(child);
            }
            if (relation == 'layoutdata') {
                this._uploadcollection.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._uploadcollection.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5UploadCollection.prototype.fileTypeChanged = function fileTypeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setFileType(newValue);
        }
    };

    Ui5UploadCollection.prototype.maximumFilenameLengthChanged = function maximumFilenameLengthChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setMaximumFilenameLength(newValue);
        }
    };

    Ui5UploadCollection.prototype.maximumFileSizeChanged = function maximumFileSizeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setMaximumFileSize(newValue);
        }
    };

    Ui5UploadCollection.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setMimeType(newValue);
        }
    };

    Ui5UploadCollection.prototype.multipleChanged = function multipleChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setMultiple((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setNoDataText(newValue);
        }
    };

    Ui5UploadCollection.prototype.noDataDescriptionChanged = function noDataDescriptionChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setNoDataDescription(newValue);
        }
    };

    Ui5UploadCollection.prototype.sameFilenameAllowedChanged = function sameFilenameAllowedChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setSameFilenameAllowed((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.showSeparatorsChanged = function showSeparatorsChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setShowSeparators(newValue);
        }
    };

    Ui5UploadCollection.prototype.uploadEnabledChanged = function uploadEnabledChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setUploadEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.uploadUrlChanged = function uploadUrlChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setUploadUrl(newValue);
        }
    };

    Ui5UploadCollection.prototype.instantUploadChanged = function instantUploadChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setInstantUpload((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.numberOfAttachmentsTextChanged = function numberOfAttachmentsTextChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setNumberOfAttachmentsText(newValue);
        }
    };

    Ui5UploadCollection.prototype.modeChanged = function modeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setMode(newValue);
        }
    };

    Ui5UploadCollection.prototype.uploadButtonInvisibleChanged = function uploadButtonInvisibleChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setUploadButtonInvisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.terminationEnabledChanged = function terminationEnabledChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setTerminationEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.changeChanged = function changeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachChange(newValue);
        }
    };

    Ui5UploadCollection.prototype.fileDeletedChanged = function fileDeletedChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachFileDeleted(newValue);
        }
    };

    Ui5UploadCollection.prototype.filenameLengthExceedChanged = function filenameLengthExceedChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachFilenameLengthExceed(newValue);
        }
    };

    Ui5UploadCollection.prototype.fileRenamedChanged = function fileRenamedChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachFileRenamed(newValue);
        }
    };

    Ui5UploadCollection.prototype.fileSizeExceedChanged = function fileSizeExceedChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachFileSizeExceed(newValue);
        }
    };

    Ui5UploadCollection.prototype.typeMissmatchChanged = function typeMissmatchChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachTypeMissmatch(newValue);
        }
    };

    Ui5UploadCollection.prototype.uploadCompleteChanged = function uploadCompleteChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachUploadComplete(newValue);
        }
    };

    Ui5UploadCollection.prototype.uploadTerminatedChanged = function uploadTerminatedChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachUploadTerminated(newValue);
        }
    };

    Ui5UploadCollection.prototype.beforeUploadStartsChanged = function beforeUploadStartsChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachBeforeUploadStarts(newValue);
        }
    };

    Ui5UploadCollection.prototype.selectionChangeChanged = function selectionChangeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachSelectionChange(newValue);
        }
    };

    Ui5UploadCollection.prototype.busyChanged = function busyChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5UploadCollection.prototype.busyIndicatorSizeChanged = function busyIndicatorSizeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setBusyIndicatorSize(newValue);
        }
    };

    Ui5UploadCollection.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5UploadCollection.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.setFieldGroupIds(newValue);
        }
    };

    Ui5UploadCollection.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachValidateFieldGroup(newValue);
        }
    };

    Ui5UploadCollection.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachValidationSuccess(newValue);
        }
    };

    Ui5UploadCollection.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachValidationError(newValue);
        }
    };

    Ui5UploadCollection.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachParseError(newValue);
        }
    };

    Ui5UploadCollection.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachFormatError(newValue);
        }
    };

    Ui5UploadCollection.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._uploadcollection !== null) {
            this._uploadcollection.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5UploadCollection, [{
        key: 'UIElement',
        get: function get() {
            return this._uploadcollection;
        }
    }]);

    return Ui5UploadCollection;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'prevId', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'fileType', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'maximumFilenameLength', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maximumFileSize', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'mimeType', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'noDataDescription', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'sameFilenameAllowed', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparators', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return 'All';
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'uploadEnabled', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'uploadUrl', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return '../../../upload';
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'instantUpload', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'numberOfAttachmentsText', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return 'None';
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'uploadButtonInvisible', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'terminationEnabled', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'fileDeleted', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'filenameLengthExceed', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'fileRenamed', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'fileSizeExceed', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'typeMissmatch', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'uploadComplete', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'uploadTerminated', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'beforeUploadStarts', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec29], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec30], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorSize', [_dec31], {
    enumerable: true,
    initializer: function initializer() {
        return 'Medium';
    }
}), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec32], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec33], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec34], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec35], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec36], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec37], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec38], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec39], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec40], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);