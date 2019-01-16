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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() removable = true;
@bindable() press = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() blocked = false;
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() busyIndicatorSize = 'Medium';
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
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tile = new sap.m.Tile(this.ui5Id, params);
                                              else
          this._tile = new sap.m.Tile(params);
                                                  if(this.ui5Class)
           this._tile.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._tile.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tile.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._tile, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._tile, this.element, this.prevId);
        
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
                                                                 if(this._tile)
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
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tile.insertCustomData(child, _index); else this._tile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tile.insertDependent(child, _index); else this._tile.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tile.insertDragDropConfig(child, _index); else this._tile.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._tile.destroyTooltip(child); }
if (relation == 'customdata') {  this._tile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tile.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._tile.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    removableChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.setRemovable(getBooleanFromAttributeValue(newValue));}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachPress(newValue);}}
blockedChanged(newValue){if(this._tile!==null){ this._tile.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._tile!==null){ this._tile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tile!==null){ this._tile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._tile!==null){ this._tile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._tile!==null){ this._tile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tile!==null){ this._tile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._tile!==null){ this._tile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }