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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(this.ui5Id, params);
        else
          this._uploadcollectionparameter = new sap.m.UploadCollectionParameter(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._uploadcollectionparameter.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._uploadcollectionparameter, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._uploadcollectionparameter, this._relation);
                                                            }
         else{
                                                                this._uploadcollectionparameter.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                
                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    nameChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.setName(newValue);}}
valueChanged(newValue){if(this._uploadcollectionparameter!==null){ this._uploadcollectionparameter.setValue(newValue);}}


                                                                                }