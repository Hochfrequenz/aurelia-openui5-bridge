import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-tile')
@inject(Element)
export class Ui5Tile extends Ui5Control{
        _tile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() removable = true;
@bindable() press = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;
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
        @computedFrom('_tile')
        get UIElement() {
            return this._tile;
          }
        fillProperties(params){
               params.removable = getBooleanFromAttributeValue(this.removable);
params.press = this.press==null ? this.defaultFunc: this.press;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._tile = new sap.m.Tile(this.ui5Id, params);
        else
          this._tile = new sap.m.Tile(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tile, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tile.placeAt)
                                                                this._tile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._tile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tile.indexOfCustomData(afterElement); if (_index)this._tile.insertCustomData(child, _index + 1); else this._tile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tile.indexOfDependent(afterElement); if (_index)this._tile.insertDependent(child, _index + 1); else this._tile.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._tile.destroyTooltip(child); }
if (relation == 'customdata') {  this._tile.removeCustomData(child);}
if (relation == 'layoutData') {  this._tile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tile.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    removableChanged(newValue){if(this._tile!==null){ this._tile.setRemovable(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(this._tile!==null){ this._tile.attachPress(newValue);}}
busyChanged(newValue){if(this._tile!==null){ this._tile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tile!==null){ this._tile.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._tile!==null){ this._tile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tile!==null){ this._tile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tile!==null){ this._tile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tile!==null){ this._tile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tile!==null){ this._tile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tile!==null){ this._tile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tile!==null){ this._tile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tile!==null){ this._tile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }