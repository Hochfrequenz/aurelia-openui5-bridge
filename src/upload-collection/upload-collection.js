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
         @bindable prevId = null;
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
@bindable() busyIndicatorSize = 'Medium';
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;
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
params.change = this.change==null ? this.defaultFunc: this.change;
params.fileDeleted = this.fileDeleted==null ? this.defaultFunc: this.fileDeleted;
params.filenameLengthExceed = this.filenameLengthExceed==null ? this.defaultFunc: this.filenameLengthExceed;
params.fileRenamed = this.fileRenamed==null ? this.defaultFunc: this.fileRenamed;
params.fileSizeExceed = this.fileSizeExceed==null ? this.defaultFunc: this.fileSizeExceed;
params.typeMissmatch = this.typeMissmatch==null ? this.defaultFunc: this.typeMissmatch;
params.uploadComplete = this.uploadComplete==null ? this.defaultFunc: this.uploadComplete;
params.uploadTerminated = this.uploadTerminated==null ? this.defaultFunc: this.uploadTerminated;
params.beforeUploadStarts = this.beforeUploadStarts==null ? this.defaultFunc: this.beforeUploadStarts;
params.selectionChange = this.selectionChange==null ? this.defaultFunc: this.selectionChange;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._uploadcollection = new sap.m.UploadCollection(this.ui5Id, params);
        else
          this._uploadcollection = new sap.m.UploadCollection(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollection.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._uploadcollection, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._uploadcollection, this.element, this.prevId);
        
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._uploadcollection)
                                                                this._parent.removeChildByRelation(this._uploadcollection, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._uploadcollection.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._uploadcollection.insertItem(child, _index); else this._uploadcollection.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'headerparameters') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._uploadcollection.insertHeaderParameter(child, _index); else this._uploadcollection.addHeaderParameter(child, 0);  return elem.localName; }
if (elem.localName == 'parameters') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._uploadcollection.insertParameter(child, _index); else this._uploadcollection.addParameter(child, 0);  return elem.localName; }
if (elem.localName == 'toolbar') { this._uploadcollection.setToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._uploadcollection.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._uploadcollection.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._uploadcollection.insertCustomData(child, _index); else this._uploadcollection.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._uploadcollection.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._uploadcollection.insertDependent(child, _index); else this._uploadcollection.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._uploadcollection.removeItem(child);}
if (relation == 'headerparameters') {  this._uploadcollection.removeHeaderParameter(child);}
if (relation == 'parameters') {  this._uploadcollection.removeParameter(child);}
if (relation == 'toolbar') {  this._uploadcollection.destroyToolbar(child); }
if (relation == 'infotoolbar') {  this._uploadcollection.destroyInfoToolbar(child); }
if (relation == 'tooltip') {  this._uploadcollection.destroyTooltip(child); }
if (relation == 'customdata') {  this._uploadcollection.removeCustomData(child);}
if (relation == 'layoutdata') {  this._uploadcollection.destroyLayoutData(child); }
if (relation == 'dependents') {  this._uploadcollection.removeDependent(child);}

      }
      catch(err){}
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
busyIndicatorSizeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._uploadcollection!==null){ this._uploadcollection.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }