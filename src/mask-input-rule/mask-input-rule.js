import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-mask-input-rule')
@inject(Element)
export class Ui5MaskInputRule extends Ui5Element{
        _maskinputrule = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() maskFormatSymbol = '*';
@bindable() regex = '[a-zA-Z0-9]';
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
        @computedFrom('_maskinputrule')
        get UIElement() {
            return this._maskinputrule;
          }
        fillProperties(params){
                                        params.maskFormatSymbol = this.maskFormatSymbol;
params.regex = this.regex;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._maskinputrule = new sap.m.MaskInputRule(this.ui5Id, params);
                                              else
          this._maskinputrule = new sap.m.MaskInputRule(params);
                                                  if(this.ui5Class)
           this._maskinputrule.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._maskinputrule.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._maskinputrule.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._maskinputrule, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._maskinputrule, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._maskinputrule.placeAt)
                                                                this._maskinputrule.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._maskinputrule.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._maskinputrule)
                                                                this._parent.removeChildByRelation(this._maskinputrule, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._maskinputrule.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._maskinputrule.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinputrule.insertCustomData(child, _index); else this._maskinputrule.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._maskinputrule.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinputrule.insertDependent(child, _index); else this._maskinputrule.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._maskinputrule.insertDragDropConfig(child, _index); else this._maskinputrule.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._maskinputrule.destroyTooltip(child); }
if (relation == 'customdata') {  this._maskinputrule.removeCustomData(child);}
if (relation == 'layoutdata') {  this._maskinputrule.destroyLayoutData(child); }
if (relation == 'dependents') {  this._maskinputrule.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._maskinputrule.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    maskFormatSymbolChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.setMaskFormatSymbol(newValue);}}
regexChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.setRegex(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._maskinputrule!==null){ this._maskinputrule.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }