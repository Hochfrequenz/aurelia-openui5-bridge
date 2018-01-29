import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-column')
@inject(Element)
export class Ui5Column extends Ui5Element{
        _column = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() hAlign = 'Begin';
@bindable() vAlign = 'Inherit';
@bindable() styleClass = null;
@bindable() visible = true;
@bindable() minScreenWidth = null;
@bindable() demandPopin = false;
@bindable() popinDisplay = 'Block';
@bindable() mergeDuplicates = false;
@bindable() mergeFunctionName = 'getText';
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
        @computedFrom('_column')
        get UIElement() {
            return this._column;
          }
        fillProperties(params){
                                        params.width = this.width;
params.hAlign = this.hAlign;
params.vAlign = this.vAlign;
params.styleClass = this.styleClass;
params.visible = getBooleanFromAttributeValue(this.visible);
params.minScreenWidth = this.minScreenWidth;
params.demandPopin = getBooleanFromAttributeValue(this.demandPopin);
params.popinDisplay = this.popinDisplay;
params.mergeDuplicates = getBooleanFromAttributeValue(this.mergeDuplicates);
params.mergeFunctionName = this.mergeFunctionName;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._column = new sap.m.Column(this.ui5Id, params);
        else
          this._column = new sap.m.Column(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._column.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._column, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._column, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._column, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._column.placeAt)
                                                                this._column.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._column.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._column, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._column.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'header') { this._column.setHeader(child); return elem.localName;}
if (elem.localName == 'footer') { this._column.setFooter(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._column.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._column.indexOfCustomData(afterElement); if (_index)this._column.insertCustomData(child, _index + 1); else this._column.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._column.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._column.indexOfDependent(afterElement); if (_index)this._column.insertDependent(child, _index + 1); else this._column.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'header') {  this._column.destroyHeader(child); }
if (relation == 'footer') {  this._column.destroyFooter(child); }
if (relation == 'tooltip') {  this._column.destroyTooltip(child); }
if (relation == 'customdata') {  this._column.removeCustomData(child);}
if (relation == 'layoutdata') {  this._column.destroyLayoutData(child); }
if (relation == 'dependents') {  this._column.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._column!==null){ this._column.setWidth(newValue);}}
hAlignChanged(newValue){if(this._column!==null){ this._column.setHAlign(newValue);}}
vAlignChanged(newValue){if(this._column!==null){ this._column.setVAlign(newValue);}}
styleClassChanged(newValue){if(this._column!==null){ this._column.setStyleClass(newValue);}}
visibleChanged(newValue){if(this._column!==null){ this._column.setVisible(getBooleanFromAttributeValue(newValue));}}
minScreenWidthChanged(newValue){if(this._column!==null){ this._column.setMinScreenWidth(newValue);}}
demandPopinChanged(newValue){if(this._column!==null){ this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));}}
popinDisplayChanged(newValue){if(this._column!==null){ this._column.setPopinDisplay(newValue);}}
mergeDuplicatesChanged(newValue){if(this._column!==null){ this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));}}
mergeFunctionNameChanged(newValue){if(this._column!==null){ this._column.setMergeFunctionName(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._column!==null){ this._column.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._column!==null){ this._column.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._column!==null){ this._column.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._column!==null){ this._column.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._column!==null){ this._column.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }