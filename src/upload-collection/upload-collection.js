import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-upload-collection')
@inject(Element)
export class Ui5UploadCollection {
  @bindable() fileType = [];
  @bindable() maximumFilenameLength = null;
  @bindable() maximumFileSize = null;
  @bindable() mimeType = [];
  @bindable() multiple = false;
  @bindable() noDataText = null;
  @bindable() noDataDescription = null;
  @bindable() sameFilenameAllowed = false;
  @bindable() showSeperators = 'All';
  @bindable() uploadEnabled = true;
  @bindable() uploadUrl = '../../../upload';
  @bindable() instantUpload = true;
  @bindable() numberOfAttachmentsText = null;
  @bindable() mode = 'None';
  @bindable() uploadButtonVisible = false;
  @bindable() terminationEnabled = true;

  @bindable() change = this.defaultFunc;
  @bindable() fileDeleted = this.defaultFunc;
  @bindable() filenameLengthExceeded = this.defaultFunc;
  @bindable() fileRenamed = this.defaultFunc;
  @bindable() fileSizeExceeded = this.defaultFunc;
  @bindable() typeMismatch = this.defaultFunc;
  @bindable() uploadComplete = this.defaultFunc;
  @bindable() uploadTerminated = this.defaultFunc;
  @bindable() beforeUploadStarts = this.defaultFunc;
  @bindable() selectionChange = this.defaultFunc;
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
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._upload = new sap.m.UploadCollection({
      fileType: this.fileType,
      maximumFilenameLength: this.maximumFilenameLength,
      maximumFileSize: this.maximumFileSize,
      mimeType: this.mimeType,
      multiple: getBooleanFromAttributeValue(this.multiple),
      noDataText: this.noDataText,
      noDataDescription: this.noDataDescription,
      sameFilenameAllowed: getBooleanFromAttributeValue(this.sameFilenameAllowed),
      showSeperators: this.showSeperators,
      uploadEnabled: getBooleanFromAttributeValue(this.uploadEnabled),
      uploadUrl: this.uploadUrl,
      instantUpload: getBooleanFromAttributeValue(this.instantUpload),
      numberOfAttachmentsText: this.numberOfAttachmentsText,
      terminationEnabled: getBooleanFromAttributeValue(this.terminationEnabled),
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

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._upload, this.element);
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
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._upload, this.element);
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
  noDataTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataText(newValue);
    }
  }
  noDataDescriptionChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataDescription(newValue);
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
  uploadEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadUrl(newValue);
    }
  }
  instantUploadChanged(newValue) {
    if (this._upload !== null) {
      //not supported by OpenUI5 (yet)
      //this._upload.setInstantUpload(getBooleanFromAttributeValue(newValue));
    }
  }
  numberOfAttachmentsTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNumberOfAttachmentsText(newValue);
    }
  }
  modeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMode(newValue);
    }
  }
  uploadButtonVisibleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadButtonVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setTerminationEnabled(getBooleanFromAttributeValue(newValue));
    }
  }

  /*TODO: Add change bindings for event handlers */
}
