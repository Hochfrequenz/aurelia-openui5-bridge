import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-tile-container')
@inject(Element)
export class Ui5TileContainer extends Ui5Control{
        _tilecontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = '100%';
@bindable() height = '100%';
@bindable() editable = null;
@bindable() allowAdd = null;
@bindable() tileMove = this.defaultFunc;
@bindable() tileDelete = this.defaultFunc;
@bindable() tileAdd = this.defaultFunc;
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
        @computedFrom('_tilecontainer')
        get UIElement() {
            return this._tilecontainer;
          }
        fillProperties(params){
                                        params.width = this.width;
params.height = this.height;
params.editable = getBooleanFromAttributeValue(this.editable);
params.allowAdd = getBooleanFromAttributeValue(this.allowAdd);
params.tileMove = this.tileMove==null ? this.defaultFunc: this.tileMove;
params.tileDelete = this.tileDelete==null ? this.defaultFunc: this.tileDelete;
params.tileAdd = this.tileAdd==null ? this.defaultFunc: this.tileAdd;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tilecontainer = new sap.m.TileContainer(this.ui5Id, params);
        else
          this._tilecontainer = new sap.m.TileContainer(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tilecontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tilecontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tilecontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tilecontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tilecontainer.placeAt)
                                                                this._tilecontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tilecontainer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tilecontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tilecontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tiles') { var _index = null; if (afterElement) _index = this._tilecontainer.indexOfTile(afterElement); if (_index)this._tilecontainer.insertTile(child, _index + 1); else this._tilecontainer.addTile(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tilecontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._tilecontainer.indexOfCustomData(afterElement); if (_index)this._tilecontainer.insertCustomData(child, _index + 1); else this._tilecontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tilecontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._tilecontainer.indexOfDependent(afterElement); if (_index)this._tilecontainer.insertDependent(child, _index + 1); else this._tilecontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tiles') {  this._tilecontainer.removeTile(child);}
if (relation == 'tooltip') {  this._tilecontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._tilecontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tilecontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tilecontainer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setWidth(newValue);}}
heightChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setHeight(newValue);}}
editableChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setEditable(getBooleanFromAttributeValue(newValue));}}
allowAddChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setAllowAdd(getBooleanFromAttributeValue(newValue));}}
tileMoveChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachTileMove(newValue);}}
tileDeleteChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachTileDelete(newValue);}}
tileAddChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachTileAdd(newValue);}}
busyChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._tilecontainer!==null){ this._tilecontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }