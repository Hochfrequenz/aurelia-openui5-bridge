import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item} from '../item/item';
@customElement('ui5-suggestion-item')
@inject(Element)
export class Ui5SuggestionItem extends Ui5Item{
        _suggestionitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() icon = '';
@bindable() description = '';
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
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
        @computedFrom('_suggestionitem')
        get UIElement() {
            return this._suggestionitem;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.description = this.description;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._suggestionitem = new sap.m.SuggestionItem(this.ui5Id, params);
                                              else
          this._suggestionitem = new sap.m.SuggestionItem(params);
                                                  if(this.ui5Class)
           this._suggestionitem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._suggestionitem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._suggestionitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._suggestionitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._suggestionitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._suggestionitem.placeAt)
                                                                this._suggestionitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._suggestionitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._suggestionitem)
                                                                this._parent.removeChildByRelation(this._suggestionitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._suggestionitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._suggestionitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._suggestionitem.insertCustomData(child, _index); else this._suggestionitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._suggestionitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._suggestionitem.insertDependent(child, _index); else this._suggestionitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._suggestionitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._suggestionitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._suggestionitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._suggestionitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.setIcon(newValue);}}
descriptionChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.setDescription(newValue);}}
textChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.setText(newValue);}}
enabledChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._suggestionitem!==null){ this._suggestionitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }