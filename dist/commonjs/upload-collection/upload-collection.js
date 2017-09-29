'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ui5UploadCollection = undefined;

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

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

var Ui5UploadCollection = exports.Ui5UploadCollection = (_dec = (0, _aureliaTemplating.customElement)('ui5-upload-collection'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
  function Ui5UploadCollection(element) {
    _classCallCheck(this, Ui5UploadCollection);

    _initDefineProp(this, 'fileType', _descriptor, this);

    _initDefineProp(this, 'maximumFilenameLength', _descriptor2, this);

    _initDefineProp(this, 'maximumFileSize', _descriptor3, this);

    _initDefineProp(this, 'mimeType', _descriptor4, this);

    _initDefineProp(this, 'multiple', _descriptor5, this);

    _initDefineProp(this, 'noDataText', _descriptor6, this);

    _initDefineProp(this, 'noDataDescription', _descriptor7, this);

    _initDefineProp(this, 'sameFilenameAllowed', _descriptor8, this);

    _initDefineProp(this, 'showSeperators', _descriptor9, this);

    _initDefineProp(this, 'uploadEnabled', _descriptor10, this);

    _initDefineProp(this, 'uploadUrl', _descriptor11, this);

    _initDefineProp(this, 'instantUpload', _descriptor12, this);

    _initDefineProp(this, 'numberOfAttachmentsText', _descriptor13, this);

    _initDefineProp(this, 'mode', _descriptor14, this);

    _initDefineProp(this, 'uploadButtonVisible', _descriptor15, this);

    _initDefineProp(this, 'terminationEnabled', _descriptor16, this);

    _initDefineProp(this, 'change', _descriptor17, this);

    _initDefineProp(this, 'fileDeleted', _descriptor18, this);

    _initDefineProp(this, 'filenameLengthExceeded', _descriptor19, this);

    _initDefineProp(this, 'fileRenamed', _descriptor20, this);

    _initDefineProp(this, 'fileSizeExceeded', _descriptor21, this);

    _initDefineProp(this, 'typeMismatch', _descriptor22, this);

    _initDefineProp(this, 'uploadComplete', _descriptor23, this);

    _initDefineProp(this, 'uploadTerminated', _descriptor24, this);

    _initDefineProp(this, 'beforeUploadStarts', _descriptor25, this);

    _initDefineProp(this, 'selectionChange', _descriptor26, this);

    this._upload = null;
    this._parent = null;

    this.element = element;
  }

  Ui5UploadCollection.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5UploadCollection.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'items') {
        this._upload.addItem(child);
        return elem.localName;
      } else if (elem.localName == 'toolbar') {
        this._upload.setToolbar(child);
        return elem.localName;
      } else if (elem.localName == 'infotoolbar') {
        this._upload.setInfoToolbar(child);
        return elem.localName;
      } else if (elem.localName == 'parameter') {
        this._upload.addHeaderParameter(child);
        return elem.localName;
      }
    }
  };

  Ui5UploadCollection.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation === 'items' && this._upload) {
      this._upload.removeItem(child);
    } else if (relation === 'toolbar' && this._upload) {
      this._upload.setToolbar(null);
    } else if (relation === 'infotoolbar' && this._upload) {
      this._upload.setInfoToolbar(null);
    } else if (relation === 'parameter' && this._upload) {
      this._upload.removeHeaderParameter(null);
    }
  };

  Ui5UploadCollection.prototype.attached = function attached() {
    var attributeManager = new _attributeManager.AttributeManager(this.element);
    this._upload = new sap.m.UploadCollection({
      fileType: this.fileType,
      maximumFilenameLength: this.maximumFilenameLength,
      maximumFileSize: this.maximumFileSize,
      mimeType: this.mimeType,
      multiple: (0, _attributes.getBooleanFromAttributeValue)(this.multiple),
      noDataText: this.noDataText,
      noDataDescription: this.noDataDescription,
      sameFilenameAllowed: (0, _attributes.getBooleanFromAttributeValue)(this.sameFilenameAllowed),
      showSeperators: this.showSeperators,
      uploadEnabled: (0, _attributes.getBooleanFromAttributeValue)(this.uploadEnabled),
      uploadUrl: this.uploadUrl,
      instantUpload: (0, _attributes.getBooleanFromAttributeValue)(this.instantUpload),
      numberOfAttachmentsText: this.numberOfAttachmentsText,
      terminationEnabled: (0, _attributes.getBooleanFromAttributeValue)(this.terminationEnabled),
      change: this.change,
      fileDeleted: this.fileDeleted,
      filenameLengthExceeded: this.filenameLengthExceeded,
      fileSizeExceeded: this.fileSizeExceeded,
      typeMismatch: this.typeMismatch,
      uploadComplete: this.uploadComplete,
      uploadTerminated: this.uploadTerminated,
      beforeUploadStarts: this.beforeUploadStarts,
      selectionChange: this.selectionChange
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5UploadCollection.prototype.detached = function detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent.removeChild(this._upload, this.element);
    } else {
      this._upload.destroy();
    }
  };

  Ui5UploadCollection.prototype.fileTypeChanged = function fileTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileType(newValue);
    }
  };

  Ui5UploadCollection.prototype.maximumFilenameLengthChanged = function maximumFilenameLengthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMaximumFilenameLength(newValue);
    }
  };

  Ui5UploadCollection.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  };

  Ui5UploadCollection.prototype.multipleChanged = function multipleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMultiple((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5UploadCollection.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataText(newValue);
    }
  };

  Ui5UploadCollection.prototype.noDataDescriptionChanged = function noDataDescriptionChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataDescription(newValue);
    }
  };

  Ui5UploadCollection.prototype.sameFilenameAllowedChanged = function sameFilenameAllowedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSameFilenameAllowed((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5UploadCollection.prototype.showSeperatorsChanged = function showSeperatorsChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setshowSeperators((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5UploadCollection.prototype.uploadEnabledChanged = function uploadEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5UploadCollection.prototype.uploadUrlChanged = function uploadUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadUrl(newValue);
    }
  };

  Ui5UploadCollection.prototype.instantUploadChanged = function instantUploadChanged(newValue) {
    if (this._upload !== null) {}
  };

  Ui5UploadCollection.prototype.numberOfAttachmentsTextChanged = function numberOfAttachmentsTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNumberOfAttachmentsText(newValue);
    }
  };

  Ui5UploadCollection.prototype.modeChanged = function modeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMode(newValue);
    }
  };

  Ui5UploadCollection.prototype.uploadButtonVisibleChanged = function uploadButtonVisibleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadButtonVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  Ui5UploadCollection.prototype.terminationEnabledChanged = function terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setTerminationEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
    }
  };

  return Ui5UploadCollection;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'fileType', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'maximumFilenameLength', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'maximumFileSize', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'mimeType', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'multiple', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'noDataDescription', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'sameFilenameAllowed', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'showSeperators', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'uploadEnabled', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'uploadUrl', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return '../../../upload';
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'instantUpload', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'numberOfAttachmentsText', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'uploadButtonVisible', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'terminationEnabled', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'fileDeleted', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'filenameLengthExceeded', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'fileRenamed', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'fileSizeExceeded', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'typeMismatch', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'uploadComplete', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'uploadTerminated', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'beforeUploadStarts', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec28], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class2)) || _class) || _class);