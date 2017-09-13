import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-file-uploader')
@inject(Element)
export class Ui5FileUploader {
  @bindable() fileType = [];
  @bindable() maximumFilenameLength = null;
  @bindable() maximumFileSize = null;
  @bindable() mimeType = [];
  @bindable() multiple = false;
  @bindable() value = null;
  @bindable() name = null;
  @bindable() sameFilenameAllowed = false;
  @bindable() showSeperators = 'All';
  @bindable() uploadOnChange = true;
  @bindable() uploadUrl = '../../../upload';
  @bindable() enabled = true;
  @bindable() width = null;
  @bindable() valueState = 'None';
  @bindable() buttonOnly = false;
  @bindable() useMultipart = true;
  @bindable() buttonText = null;
  @bindable() sendXHR = false;
  @bindable() placeholder = null;
  @bindable() style = null;
  @bindable() icon = null;
  @bindable() iconHovered = null;
  @bindable() iconSelected = null;
  @bindable() iconFirst = true;
  @bindable() iconOnly = false;

  @bindable() change = this.defaultFunc;
  @bindable() filenameLengthExceeded = this.defaultFunc;
  @bindable() fileSizeExceeded = this.defaultFunc;
  @bindable() fileAllowed = this.defaultFunc;
  @bindable() uploadComplete = this.defaultFunc;
  @bindable() uploadAborted = this.defaultFunc;
  @bindable() uploadStart = this.defaultFunc;
  @bindable() uploadProgress = this.defaultFunc;
  _upload = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'items') {
        this._upload.addItem(child);
        return elem.localName;
      }
      else if (elem.localName == 'toolbar') {
        this._upload.setToolbar(child);
        return elem.localName;
      }
      else if (elem.localName == 'infotoolbar') {
        this._upload.setInfoToolbar(child);
        return elem.localName;
      }
      else if (elem.localName == 'parameter') {
        this._upload.addHeaderParameter(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'items' && this._upload) {
      this._upload.removeItem(child);
    }
    else if (relation === 'toolbar' && this._upload) {
      this._upload.setToolbar(null);
    }
    else if (relation === 'infotoolbar' && this._upload) {
      this._upload.setInfoToolbar(null);
    }
    else if (relation === 'parameter' && this._upload) {
      this._upload.removeHeaderParameter(null);
    }
  }
  attached() {
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

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewvalueStatel.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewvalueStatel.removeChild(this._upload, this.element);
    }
    else {
      this._upload.destroy();
    }
  }
  fileTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileType(newValue);
    }
  }
  maximumFilenameLengthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMaximumFilenameLength(newValue);
    }
  }
  mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  }
  multipleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMultiple(getBooleanFromAttributeValue(newValue));
    }
  }
  valueChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setvalue(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setname(newValue);
    }
  }
  sameFilenameAllowedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));
    }
  }
  showSeperatorsChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setshowSeperators(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadOnChangeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setuploadOnChange(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadUrl(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._upload !== null) {
      //not supported by OpenUI5 (yet)
      //this._upload.setenabled(getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setwidth(newValue);
    }
  }
  valueStateChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setvalueState(newValue);
    }
  }
  buttonOnlyChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setbuttonOnly(getBooleanFromAttributeValue(newValue));
    }
  }
  useMultipartChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setuseMultipart(getBooleanFromAttributeValue(newValue));
    }
  }

  /*TODO: Add change bindings for event handlers */
}
