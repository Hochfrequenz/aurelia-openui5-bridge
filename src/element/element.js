import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ManagedObject} from '../managed-object/managed-object';
@customElement('ui5-element')
@inject(Element)
export class Ui5Element extends Ui5ManagedObject{
        _element = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_element')
        get UIElement() {
            return this._element;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._element = new sap.ui.core.Element(this.ui5Id, params);
        else
          this._element = new sap.ui.core.Element(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._element.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._element, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._element, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._element, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._element.placeAt)
                                                                this._element.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._element.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._element, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._element.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._element.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._element.indexOfCustomData(afterElement); if (_index)this._element.insertCustomData(child, _index + 1); else this._element.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._element.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._element.indexOfDependent(afterElement); if (_index)this._element.insertDependent(child, _index + 1); else this._element.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._element.destroyTooltip(child); }
if (relation == 'customdata') {  this._element.removeCustomData(child);}
if (relation == 'layoutdata') {  this._element.destroyLayoutData(child); }
if (relation == 'dependents') {  this._element.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._element!==null){ this._element.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._element!==null){ this._element.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._element!==null){ this._element.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._element!==null){ this._element.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._element!==null){ this._element.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }