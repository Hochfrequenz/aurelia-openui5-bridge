import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-upload-collection-item')
@inject(Element)
export class Ui5UploadCollectionItem extends Ui5Element{
        _uploadcollectionitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() contributor = null;
@bindable() documentId = null;
@bindable() fileName = null;
@bindable() fileSize = null;
@bindable() mimeType = null;
@bindable() thumbnailUrl = null;
@bindable() uploadedDate = null;
@bindable() url = null;
@bindable() enableEdit = true;
@bindable() enableDelete = true;
@bindable() visibleEdit = true;
@bindable() visibleDelete = true;
@bindable() ariaLabelForPicture = null;
@bindable() selected = false;
@bindable() press = this.defaultFunc;
@bindable() deletePress = this.defaultFunc;

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_uploadcollectionitem')
        get UIElement() {
            return this._uploadcollectionitem;
          }
        fillProperties(params){
               params.contributor = this.contributor;
params.documentId = this.documentId;
params.fileName = this.fileName;
params.fileSize = this.fileSize;
params.mimeType = this.mimeType;
params.thumbnailUrl = this.thumbnailUrl;
params.uploadedDate = this.uploadedDate;
params.url = this.url;
params.enableEdit = getBooleanFromAttributeValue(this.enableEdit);
params.enableDelete = getBooleanFromAttributeValue(this.enableDelete);
params.visibleEdit = getBooleanFromAttributeValue(this.visibleEdit);
params.visibleDelete = getBooleanFromAttributeValue(this.visibleDelete);
params.ariaLabelForPicture = this.ariaLabelForPicture;
params.selected = getBooleanFromAttributeValue(this.selected);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._uploadcollectionitem = new sap.m.UploadCollectionItem(this.ui5Id, params);
        else
          this._uploadcollectionitem = new sap.m.UploadCollectionItem(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollectionitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._uploadcollectionitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._uploadcollectionitem.placeAt)
                                                                this._uploadcollectionitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._uploadcollectionitem.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollectionitem, this._relation);
                                                            }
         else{
                                                                this._uploadcollectionitem.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'attributes') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfAttribute(afterElement); if (_index)this._uploadcollectionitem.insertAttribute(child, _index + 1); else this._uploadcollectionitem.addAttribute(child, 0);  return elem.localName; }
if (elem.localName == 'statuses') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfStatus(afterElement); if (_index)this._uploadcollectionitem.insertStatus(child, _index + 1); else this._uploadcollectionitem.addStatus(child, 0);  return elem.localName; }
if (elem.localName == 'markers') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfMarker(afterElement); if (_index)this._uploadcollectionitem.insertMarker(child, _index + 1); else this._uploadcollectionitem.addMarker(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'attributes') {  this._uploadcollectionitem.removeAttribute(child); }
if (relation == 'statuses') {  this._uploadcollectionitem.removeStatus(child); }
if (relation == 'markers') {  this._uploadcollectionitem.removeMarker(child); }

                                                                            }
    contributorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setContributor(newValue);}}
documentIdChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setDocumentId(newValue);}}
fileNameChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setFileName(newValue);}}
fileSizeChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setFileSize(newValue);}}
mimeTypeChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setMimeType(newValue);}}
thumbnailUrlChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setThumbnailUrl(newValue);}}
uploadedDateChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setUploadedDate(newValue);}}
urlChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setUrl(newValue);}}
enableEditChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setEnableEdit(getBooleanFromAttributeValue(newValue));}}
enableDeleteChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setEnableDelete(getBooleanFromAttributeValue(newValue));}}
visibleEditChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setVisibleEdit(getBooleanFromAttributeValue(newValue));}}
visibleDeleteChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setVisibleDelete(getBooleanFromAttributeValue(newValue));}}
ariaLabelForPictureChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setAriaLabelForPicture(newValue);}}
selectedChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setSelected(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachPress(newValue);}}
deletePressChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachDeletePress(newValue);}}


                                                                                }