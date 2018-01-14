import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-upload-collection')
@inject(Element)
export class Ui5UploadCollection extends Ui5Control{
        _uploadcollection = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() fileType = null;
@bindable() maximumFilenameLength = null;
@bindable() maximumFileSize = null;
@bindable() mimeType = null;
@bindable() multiple = false;
@bindable() noDataText = null;
@bindable() noDataDescription = null;
@bindable() sameFilenameAllowed = false;
@bindable() showSeparators = 'All';
@bindable() uploadEnabled = true;
@bindable() uploadUrl = '../../../upload';
@bindable() instantUpload = true;
@bindable() numberOfAttachmentsText = null;
@bindable() mode = 'None';
@bindable() uploadButtonInvisible = false;
@bindable() terminationEnabled = true;
@bindable() change = this.defaultFunc;
@bindable() fileDeleted = this.defaultFunc;
@bindable() filenameLengthExceed = this.defaultFunc;
@bindable() fileRenamed = this.defaultFunc;
@bindable() fileSizeExceed = this.defaultFunc;
@bindable() typeMissmatch = this.defaultFunc;
@bindable() uploadComplete = this.defaultFunc;
@bindable() uploadTerminated = this.defaultFunc;
@bindable() beforeUploadStarts = this.defaultFunc;
@bindable() selectionChange = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_uploadcollection')
        get UIElement() {
            return this._uploadcollection;
          }
        fillProperties(params){
               params.fileType = this.fileType;
params.maximumFilenameLength = this.maximumFilenameLength?parseInt(this.maximumFilenameLength):0;
params.maximumFileSize = this.maximumFileSize;
params.mimeType = this.mimeType;
params.multiple = getBooleanFromAttributeValue(this.multiple);
params.noDataText = this.noDataText;
params.noDataDescription = this.noDataDescription;
params.sameFilenameAllowed = getBooleanFromAttributeValue(this.sameFilenameAllowed);
params.showSeparators = this.showSeparators;
params.uploadEnabled = getBooleanFromAttributeValue(this.uploadEnabled);
params.uploadUrl = this.uploadUrl;
params.instantUpload = getBooleanFromAttributeValue(this.instantUpload);
params.numberOfAttachmentsText = this.numberOfAttachmentsText;
params.mode = this.mode;
params.uploadButtonInvisible = getBooleanFromAttributeValue(this.uploadButtonInvisible);
params.terminationEnabled = getBooleanFromAttributeValue(this.terminationEnabled);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._uploadcollection = new sap.m.UploadCollection(this.ui5Id, params);
        else
          this._uploadcollection = new sap.m.UploadCollection(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollection.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollection, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._uploadcollection, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._uploadcollection, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._uploadcollection.placeAt)
                                                                this._uploadcollection.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._uploadcollection.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollection, this._relation);
                                                            }
         else{
                                                                this._uploadcollection.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfItem(afterElement); if (_index)this._uploadcollection.insertItem(child, _index + 1); else this._uploadcollection.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'headerParameters') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfHeaderParameter(afterElement); if (_index)this._uploadcollection.insertHeaderParameter(child, _index + 1); else this._uploadcollection.addHeaderParameter(child, 0);  return elem.localName; }
if (elem.localName == 'parameters') { var _index = null; if (afterElement) _index = this._uploadcollection.indexOfParameter(afterElement); if (_index)this._uploadcollection.insertParameter(child, _index + 1); else this._uploadcollection.addParameter(child, 0);  return elem.localName; }
if (elem.localName == 'toolbar') { this._uploadcollection.setToolbar(child); return elem.localName;}
if (elem.localName == 'infoToolbar') { this._uploadcollection.setInfoToolbar(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._uploadcollection.removeItem(child); }
if (relation == 'headerParameters') {  this._uploadcollection.removeHeaderParameter(child); }
if (relation == 'parameters') {  this._uploadcollection.removeParameter(child); }

                                                                            }
    fileTypeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setFileType(newValue);}}
maximumFilenameLengthChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMaximumFilenameLength(newValue);}}
maximumFileSizeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMaximumFileSize(newValue);}}
mimeTypeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMimeType(newValue);}}
multipleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMultiple(getBooleanFromAttributeValue(newValue));}}
noDataTextChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setNoDataText(newValue);}}
noDataDescriptionChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setNoDataDescription(newValue);}}
sameFilenameAllowedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));}}
showSeparatorsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setShowSeparators(newValue);}}
uploadEnabledChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setUploadEnabled(getBooleanFromAttributeValue(newValue));}}
uploadUrlChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setUploadUrl(newValue);}}
instantUploadChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setInstantUpload(getBooleanFromAttributeValue(newValue));}}
numberOfAttachmentsTextChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setNumberOfAttachmentsText(newValue);}}
modeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setMode(newValue);}}
uploadButtonInvisibleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setUploadButtonInvisible(getBooleanFromAttributeValue(newValue));}}
terminationEnabledChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setTerminationEnabled(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachChange(newValue);}}
fileDeletedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFileDeleted(newValue);}}
filenameLengthExceedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFilenameLengthExceed(newValue);}}
fileRenamedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFileRenamed(newValue);}}
fileSizeExceedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFileSizeExceed(newValue);}}
typeMissmatchChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachTypeMissmatch(newValue);}}
uploadCompleteChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachUploadComplete(newValue);}}
uploadTerminatedChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachUploadTerminated(newValue);}}
beforeUploadStartsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachBeforeUploadStarts(newValue);}}
selectionChangeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachSelectionChange(newValue);}}
busyChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidateFieldGroup(newValue);}}


                                                                                }