import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-upload-collection-item')
@inject(Element)
export class Ui5UploadCollectionItem {
  @bindable() contributor = null;
  @bindable() documentId = null;
  @bindable() fileName = null;
  @bindable() fileSize = null;
  @bindable() enableEdit = true;
  @bindable() mimeType = null;
  @bindable() thumbnailUrl = null;
  @bindable() enableDelete = true;
  @bindable() uploadedDate = null;
  @bindable() visibleEdit = true;
  @bindable() url = null;
  @bindable() visibleDelete = true;
  @bindable() ariaLabelForPicture = null;
  @bindable() selected = false;

  _upload = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'attributes') {
        this._upload.addAttribute(child);
        return elem.localName;
      }
      else if (elem.localName == 'statuses') {
        this._upload.addStatus(child);
        return elem.localName;
      }
      else if (elem.localName == 'markers') {
        this._upload.addMarker(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'attributes' && this._upload) {
      this._upload.removeAttribute(child);
    }
    else if (relation === 'statuses' && this._upload) {
      this._upload.removeStatus(null);
    }
    else if (relation === 'markers' && this._upload) {
      this._upload.removeMarker(null);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._upload = new sap.m.UploadCollectionItem({
      contributor: this.contributor,
      documentId: this.documentId,
      fileName: this.fileName,
      fileSize: this.fileSize,
      mimeType: this.mimeType,
      thumbnailUrl: this.thumbnailUrl,
      enableDelete: getBooleanFromAttributeValue(this.enableDelete),
      uploadedDate: this.uploadedDate,
      visibleEdit: getBooleanFromAttributeValue(this.visibleEdit),
      url: this.url,
      visibleDelete: getBooleanFromAttributeValue(this.visibleDelete),
      ariaLabelForPicture: this.ariaLabelForPicture,
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
  contributorChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setContributor(newValue);
    }
  }
  documentIdChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setDocumentId(newValue);
    }
  }
  fileSizeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileSize(newValue);
    }
  }
  mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  }
  thumbnailUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setThumbnailUrl(newValue);
    }
  }
  enableDeleteChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setEnableDelete(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadedDateChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadedDate(getBooleanFromAttributeValue(newValue));
    }
  }
  visibleEditChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setVisibleEdit(getBooleanFromAttributeValue(newValue));
    }
  }
  urlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUrl(newValue);
    }
  }
  visibleDeleteChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setVisibleDelete(getBooleanFromAttributeValue(newValue));
    }
  }
  ariaLabelForPictureChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setAriaLabelForPicture(newValue);
    }
  }
  selectedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSelected(getBooleanFromAttributeValue(newValue));
    }
  }
  terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setterminationEnabled(getBooleanFromAttributeValue(newValue));
    }
  }

  /*TODO: Add change bindings for event handlers */
}
