import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-layout-data')
@inject(Element)
export class Ui5LayoutData extends Ui5Element{
        _layoutdata = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
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
        @computedFrom('_layoutdata')
        get UIElement() {
            return this._layoutdata;
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
          this._layoutdata = new sap.ui.core.LayoutData(this.ui5Id, params);
        else
          this._layoutdata = new sap.ui.core.LayoutData(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._layoutdata.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._layoutdata, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._layoutdata, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._layoutdata, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._layoutdata.placeAt)
                                                                this._layoutdata.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._layoutdata.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._layoutdata, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._layoutdata.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._layoutdata.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._layoutdata.indexOfCustomData(afterElement); if (_index)this._layoutdata.insertCustomData(child, _index + 1); else this._layoutdata.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._layoutdata.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._layoutdata.indexOfDependent(afterElement); if (_index)this._layoutdata.insertDependent(child, _index + 1); else this._layoutdata.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._layoutdata.destroyTooltip(child); }
if (relation == 'customdata') {  this._layoutdata.removeCustomData(child);}
if (relation == 'layoutdata') {  this._layoutdata.destroyLayoutData(child); }
if (relation == 'dependents') {  this._layoutdata.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._layoutdata!==null){ this._layoutdata.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }