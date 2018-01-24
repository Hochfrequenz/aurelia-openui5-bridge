import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-form-element')
@inject(Element)
export class Ui5FormElement extends Ui5Element{
        _formelement = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() visible = true;
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
        @computedFrom('_formelement')
        get UIElement() {
            return this._formelement;
          }
        fillProperties(params){
                                        params.visible = getBooleanFromAttributeValue(this.visible);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._formelement = new sap.ui.layout.form.FormElement(this.ui5Id, params);
        else
          this._formelement = new sap.ui.layout.form.FormElement(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formelement.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formelement, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formelement, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formelement, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formelement.placeAt)
                                                                this._formelement.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formelement.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formelement, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._formelement.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'label') { this._formelement.setLabel(child); return elem.localName;}
if (elem.localName == 'fields') { var _index = null; if (afterElement) _index = this._formelement.indexOfField(afterElement); if (_index)this._formelement.insertField(child, _index + 1); else this._formelement.addField(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._formelement.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._formelement.indexOfCustomData(afterElement); if (_index)this._formelement.insertCustomData(child, _index + 1); else this._formelement.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._formelement.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._formelement.indexOfDependent(afterElement); if (_index)this._formelement.insertDependent(child, _index + 1); else this._formelement.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'label') {  this._formelement.destroyLabel(child); }
if (relation == 'fields') {  this._formelement.removeField(child);}
if (relation == 'tooltip') {  this._formelement.destroyTooltip(child); }
if (relation == 'customdata') {  this._formelement.removeCustomData(child);}
if (relation == 'layoutData') {  this._formelement.destroyLayoutData(child); }
if (relation == 'dependents') {  this._formelement.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    visibleChanged(newValue){if(this._formelement!==null){ this._formelement.setVisible(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._formelement!==null){ this._formelement.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._formelement!==null){ this._formelement.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._formelement!==null){ this._formelement.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._formelement!==null){ this._formelement.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._formelement!==null){ this._formelement.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }