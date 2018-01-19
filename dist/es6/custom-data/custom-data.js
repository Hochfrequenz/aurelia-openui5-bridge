import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-custom-data')
@inject(Element)
export class Ui5CustomData extends Ui5Element{
        _customdata = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() key = null;
@bindable() value = null;
@bindable() writeToDom = false;
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
        @computedFrom('_customdata')
        get UIElement() {
            return this._customdata;
          }
        fillProperties(params){
               params.key = this.key;
params.value = this.value;
params.writeToDom = getBooleanFromAttributeValue(this.writeToDom);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._customdata = new sap.ui.core.CustomData(this.ui5Id, params);
        else
          this._customdata = new sap.ui.core.CustomData(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._customdata.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._customdata, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._customdata, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._customdata, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._customdata.placeAt)
                                                                this._customdata.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._customdata.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._customdata, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._customdata.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._customdata.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._customdata.indexOfCustomData(afterElement); if (_index)this._customdata.insertCustomData(child, _index + 1); else this._customdata.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._customdata.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._customdata.indexOfDependent(afterElement); if (_index)this._customdata.insertDependent(child, _index + 1); else this._customdata.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._customdata.destroyTooltip(child); }
if (relation == 'customdata') {  this._customdata.removeCustomData(child);}
if (relation == 'layoutData') {  this._customdata.destroyLayoutData(child); }
if (relation == 'dependents') {  this._customdata.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    keyChanged(newValue){if(this._customdata!==null){ this._customdata.setKey(newValue);}}
valueChanged(newValue){if(this._customdata!==null){ this._customdata.setValue(newValue);}}
writeToDomChanged(newValue){if(this._customdata!==null){ this._customdata.setWriteToDom(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._customdata!==null){ this._customdata.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._customdata!==null){ this._customdata.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._customdata!==null){ this._customdata.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._customdata!==null){ this._customdata.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._customdata!==null){ this._customdata.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }