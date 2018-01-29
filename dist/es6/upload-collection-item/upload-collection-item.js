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
        @bindable() documentId = null;
@bindable() fileName = null;
@bindable() mimeType = null;
@bindable() thumbnailUrl = null;
@bindable() url = null;
@bindable() enableEdit = true;
@bindable() enableDelete = true;
@bindable() visibleEdit = true;
@bindable() visibleDelete = true;
@bindable() ariaLabelForPicture = null;
@bindable() selected = false;
@bindable() press = this.defaultFunc;
@bindable() deletePress = this.defaultFunc;
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
@bindable() validationSuccess = this.defaultFunc;
@bindable() validationError = this.defaultFunc;
@bindable() parseError = this.defaultFunc;
@bindable() formatError = this.defaultFunc;
@bindable() modelContextChange = this.defaultFunc;
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/

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
params.press = this.press==null ? this.defaultFunc: this.press;
params.deletePress = this.deletePress==null ? this.defaultFunc: this.deletePress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._uploadcollectionitem = new sap.m.UploadCollectionItem(this.ui5Id, params);
        else
          this._uploadcollectionitem = new sap.m.UploadCollectionItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollectionitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollectionitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollectionitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._uploadcollectionitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'attributes') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfAttribute(afterElement); if (_index)this._uploadcollectionitem.insertAttribute(child, _index + 1); else this._uploadcollectionitem.addAttribute(child, 0);  return elem.localName; }
if (elem.localName == 'statuses') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfStatus(afterElement); if (_index)this._uploadcollectionitem.insertStatus(child, _index + 1); else this._uploadcollectionitem.addStatus(child, 0);  return elem.localName; }
if (elem.localName == 'markers') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfMarker(afterElement); if (_index)this._uploadcollectionitem.insertMarker(child, _index + 1); else this._uploadcollectionitem.addMarker(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._uploadcollectionitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfCustomData(afterElement); if (_index)this._uploadcollectionitem.insertCustomData(child, _index + 1); else this._uploadcollectionitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._uploadcollectionitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._uploadcollectionitem.indexOfDependent(afterElement); if (_index)this._uploadcollectionitem.insertDependent(child, _index + 1); else this._uploadcollectionitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'attributes') {  this._uploadcollectionitem.removeAttribute(child);}
if (relation == 'statuses') {  this._uploadcollectionitem.removeStatus(child);}
if (relation == 'markers') {  this._uploadcollectionitem.removeMarker(child);}
if (relation == 'tooltip') {  this._uploadcollectionitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._uploadcollectionitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._uploadcollectionitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._uploadcollectionitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    documentIdChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setDocumentId(newValue);}}
fileNameChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setFileName(newValue);}}
mimeTypeChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setMimeType(newValue);}}
thumbnailUrlChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setThumbnailUrl(newValue);}}
urlChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setUrl(newValue);}}
enableEditChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setEnableEdit(getBooleanFromAttributeValue(newValue));}}
enableDeleteChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setEnableDelete(getBooleanFromAttributeValue(newValue));}}
visibleEditChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setVisibleEdit(getBooleanFromAttributeValue(newValue));}}
visibleDeleteChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setVisibleDelete(getBooleanFromAttributeValue(newValue));}}
ariaLabelForPictureChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setAriaLabelForPicture(newValue);}}
selectedChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.setSelected(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachPress(newValue);}}
deletePressChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachDeletePress(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._uploadcollectionitem!==null){ this._uploadcollectionitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }