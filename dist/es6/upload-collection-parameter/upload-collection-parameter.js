import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-upload-collection-parameter')
@inject(Element)
export class Ui5UploadCollectionParameter extends Ui5Element{
        _uploadcollectionparameter = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() name = null;
@bindable() value = null;
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
        @computedFrom('_uploadcollectionparameter')
        get UIElement() {
            return this._uploadcollectionparameter;
          }
        fillProperties(params){
                                        params.name = this.name;
params.value = this.value;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(this.ui5Id, params);
        else
          this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollectionparameter.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._uploadcollectionparameter.placeAt)
                                                                this._uploadcollectionparameter.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._uploadcollectionparameter.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollectionparameter, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._uploadcollectionparameter.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._uploadcollectionparameter.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._uploadcollectionparameter.indexOfCustomData(afterElement); if (_index)this._uploadcollectionparameter.insertCustomData(child, _index + 1); else this._uploadcollectionparameter.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._uploadcollectionparameter.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._uploadcollectionparameter.indexOfDependent(afterElement); if (_index)this._uploadcollectionparameter.insertDependent(child, _index + 1); else this._uploadcollectionparameter.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._uploadcollectionparameter.destroyTooltip(child); }
if (relation == 'customdata') {  this._uploadcollectionparameter.removeCustomData(child);}
if (relation == 'layoutData') {  this._uploadcollectionparameter.destroyLayoutData(child); }
if (relation == 'dependents') {  this._uploadcollectionparameter.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    nameChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.setName(newValue);}}
valueChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.setValue(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }