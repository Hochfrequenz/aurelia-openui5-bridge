'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, Ui5FileUploader;

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
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('Ui5FileUploader', Ui5FileUploader = (_dec = customElement('ui5-file-uploader'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5FileUploader(element) {
          _classCallCheck(this, Ui5FileUploader);

          _initDefineProp(this, 'fileType', _descriptor, this);

          _initDefineProp(this, 'maximumFilenameLength', _descriptor2, this);

          _initDefineProp(this, 'maximumFileSize', _descriptor3, this);

          _initDefineProp(this, 'mimeType', _descriptor4, this);

          _initDefineProp(this, 'multiple', _descriptor5, this);

          _initDefineProp(this, 'value', _descriptor6, this);

          _initDefineProp(this, 'name', _descriptor7, this);

          _initDefineProp(this, 'sameFilenameAllowed', _descriptor8, this);

          _initDefineProp(this, 'showSeperators', _descriptor9, this);

          _initDefineProp(this, 'uploadOnChange', _descriptor10, this);

          _initDefineProp(this, 'uploadUrl', _descriptor11, this);

          _initDefineProp(this, 'enabled', _descriptor12, this);

          _initDefineProp(this, 'width', _descriptor13, this);

          _initDefineProp(this, 'valueState', _descriptor14, this);

          _initDefineProp(this, 'buttonOnly', _descriptor15, this);

          _initDefineProp(this, 'useMultipart', _descriptor16, this);

          _initDefineProp(this, 'buttonText', _descriptor17, this);

          _initDefineProp(this, 'sendXHR', _descriptor18, this);

          _initDefineProp(this, 'placeholder', _descriptor19, this);

          _initDefineProp(this, 'style', _descriptor20, this);

          _initDefineProp(this, 'icon', _descriptor21, this);

          _initDefineProp(this, 'iconHovered', _descriptor22, this);

          _initDefineProp(this, 'iconSelected', _descriptor23, this);

          _initDefineProp(this, 'iconFirst', _descriptor24, this);

          _initDefineProp(this, 'iconOnly', _descriptor25, this);

          _initDefineProp(this, 'change', _descriptor26, this);

          _initDefineProp(this, 'filenameLengthExceeded', _descriptor27, this);

          _initDefineProp(this, 'fileSizeExceeded', _descriptor28, this);

          _initDefineProp(this, 'fileAllowed', _descriptor29, this);

          _initDefineProp(this, 'uploadComplete', _descriptor30, this);

          _initDefineProp(this, 'uploadAborted', _descriptor31, this);

          _initDefineProp(this, 'uploadStart', _descriptor32, this);

          _initDefineProp(this, 'uploadProgress', _descriptor33, this);

          this._upload = null;
          this._parent = null;

          this.element = element;
        }

        Ui5FileUploader.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5FileUploader.prototype.addChild = function addChild(child, elem) {
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

        Ui5FileUploader.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
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

        Ui5FileUploader.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._upload = new sap.m.UploadCollection({
            fileType: this.fileType,
            maximumFilenameLength: this.maximumFilenameLength,
            maximumFileSize: this.maximumFileSize,
            mimeType: this.mimeType,
            multiple: getBooleanFromAttributeValue(this.multiple),
            value: this.value,
            name: this.name,
            sameFilenameAllowed: getBooleanFromAttributeValue(this.sameFilenameAllowed),
            showSeperators: this.showSeperators,
            uploadOnChange: getBooleanFromAttributeValue(this.uploadOnChange),
            uploadUrl: this.uploadUrl,
            enabled: getBooleanFromAttributeValue(this.enabled),
            width: this.width,
            useMultipart: getBooleanFromAttributeValue(this.useMultipart),
            change: this.change,
            fileDeleted: this.fileDeleted,
            filenameLengthExceeded: this.filenameLengthExceeded,
            fileSizeExceeded: this.fileSizeExceeded,
            fileAllowed: this.fileAllowed,
            uploadComplete: this.uploadComplete,
            uploadAborted: this.uploadAborted,
            uploadStart: this.uploadStart,
            uploadProgress: this.uploadProgress
          });

          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller;
            this._parent.addChild(this._upload, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._upload.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5FileUploader.prototype.detached = function detached() {
          if (this._parent) {
            this._parent.removeChild(this._upload, this.element);
          } else {
            this._upload.destroy();
          }
        };

        Ui5FileUploader.prototype.fileTypeChanged = function fileTypeChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setFileType(newValue);
          }
        };

        Ui5FileUploader.prototype.maximumFilenameLengthChanged = function maximumFilenameLengthChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setMaximumFilenameLength(newValue);
          }
        };

        Ui5FileUploader.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setMimeType(newValue);
          }
        };

        Ui5FileUploader.prototype.multipleChanged = function multipleChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setMultiple(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5FileUploader.prototype.valueChanged = function valueChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setvalue(newValue);
          }
        };

        Ui5FileUploader.prototype.nameChanged = function nameChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setname(newValue);
          }
        };

        Ui5FileUploader.prototype.sameFilenameAllowedChanged = function sameFilenameAllowedChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5FileUploader.prototype.showSeperatorsChanged = function showSeperatorsChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setshowSeperators(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5FileUploader.prototype.uploadOnChangeChanged = function uploadOnChangeChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setuploadOnChange(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5FileUploader.prototype.uploadUrlChanged = function uploadUrlChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setUploadUrl(newValue);
          }
        };

        Ui5FileUploader.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._upload !== null) {}
        };

        Ui5FileUploader.prototype.widthChanged = function widthChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setwidth(newValue);
          }
        };

        Ui5FileUploader.prototype.valueStateChanged = function valueStateChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setvalueState(newValue);
          }
        };

        Ui5FileUploader.prototype.buttonOnlyChanged = function buttonOnlyChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setbuttonOnly(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5FileUploader.prototype.useMultipartChanged = function useMultipartChanged(newValue) {
          if (this._upload !== null) {
            this._upload.setuseMultipart(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5FileUploader;
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec9], {
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
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'uploadOnChange', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'uploadUrl', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return '../../../upload';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'buttonOnly', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'useMultipart', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'buttonText', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'sendXHR', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'style', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'iconHovered', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'iconSelected', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'iconFirst', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'iconOnly', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'filenameLengthExceeded', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'fileSizeExceeded', [_dec30], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'fileAllowed', [_dec31], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'uploadComplete', [_dec32], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'uploadAborted', [_dec33], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'uploadStart', [_dec34], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'uploadProgress', [_dec35], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5FileUploader', Ui5FileUploader);
    }
  };
});
//# sourceMappingURL=../dist/dev/file-uploader/file-uploader.js.map
