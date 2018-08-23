import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-title')
@inject(Element)
export class Ui5Title extends Ui5Element{
        _title = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() text = null;
@bindable() icon = null;
@bindable() level = 'Auto';
@bindable() emphasized = false;
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
        @computedFrom('_title')
        get UIElement() {
            return this._title;
          }
        fillProperties(params){
                                        params.text = this.text;
params.icon = this.icon;
params.level = this.level;
params.emphasized = getBooleanFromAttributeValue(this.emphasized);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._title = new sap.ui.core.Title(this.ui5Id, params);
                                              else
          this._title = new sap.ui.core.Title(params);
                                                  if(this.ui5Class)
           this._title.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._title.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._title.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._title, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._title, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._title.placeAt)
                                                                this._title.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._title.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._title)
                                                                this._parent.removeChildByRelation(this._title, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._title.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._title.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._title.insertCustomData(child, _index); else this._title.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._title.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._title.insertDependent(child, _index); else this._title.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._title.insertDragDropConfig(child, _index); else this._title.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._title.destroyTooltip(child); }
if (relation == 'customdata') {  this._title.removeCustomData(child);}
if (relation == 'layoutdata') {  this._title.destroyLayoutData(child); }
if (relation == 'dependents') {  this._title.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._title.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    textChanged(newValue){if(this._title!==null){ this._title.setText(newValue);}}
iconChanged(newValue){if(this._title!==null){ this._title.setIcon(newValue);}}
levelChanged(newValue){if(this._title!==null){ this._title.setLevel(newValue);}}
emphasizedChanged(newValue){if(this._title!==null){ this._title.setEmphasized(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._title!==null){ this._title.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._title!==null){ this._title.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._title!==null){ this._title.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._title!==null){ this._title.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._title!==null){ this._title.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }