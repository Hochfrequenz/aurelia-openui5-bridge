import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Tile} from '../tile/tile';
@customElement('ui5-standard-tile')
@inject(Element)
export class Ui5StandardTile extends Ui5Tile{
        _standardtile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        @bindable() title = null;
@bindable() info = null;
@bindable() icon = null;
@bindable() activeIcon = null;
@bindable() number = null;
@bindable() numberUnit = null;
@bindable() infoState = 'None';
@bindable() type = 'None';
@bindable() iconDensityAware = true;
/* inherited from sap.m.Tile*/
@bindable() removable = true;
@bindable() press = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
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
        @computedFrom('_standardtile')
        get UIElement() {
            return this._standardtile;
          }
        fillProperties(params){
                                        params.title = this.title;
params.info = this.info;
params.icon = this.icon;
params.activeIcon = this.activeIcon;
params.number = this.number;
params.numberUnit = this.numberUnit;
params.infoState = this.infoState;
params.type = this.type;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._standardtile = new sap.m.StandardTile(this.ui5Id, params);
        else
          this._standardtile = new sap.m.StandardTile(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardtile.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._standardtile, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._standardtile, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._standardtile.placeAt)
                                                                this._standardtile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._standardtile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._standardtile)
                                                                this._parent.removeChildByRelation(this._standardtile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._standardtile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._standardtile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardtile.insertCustomData(child, _index); else this._standardtile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardtile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardtile.insertDependent(child, _index); else this._standardtile.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardtile.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardtile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._standardtile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardtile.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._standardtile!==null){ this._standardtile.setTitle(newValue);}}
infoChanged(newValue){if(this._standardtile!==null){ this._standardtile.setInfo(newValue);}}
iconChanged(newValue){if(this._standardtile!==null){ this._standardtile.setIcon(newValue);}}
activeIconChanged(newValue){if(this._standardtile!==null){ this._standardtile.setActiveIcon(newValue);}}
numberChanged(newValue){if(this._standardtile!==null){ this._standardtile.setNumber(newValue);}}
numberUnitChanged(newValue){if(this._standardtile!==null){ this._standardtile.setNumberUnit(newValue);}}
infoStateChanged(newValue){if(this._standardtile!==null){ this._standardtile.setInfoState(newValue);}}
typeChanged(newValue){if(this._standardtile!==null){ this._standardtile.setType(newValue);}}
iconDensityAwareChanged(newValue){if(this._standardtile!==null){ this._standardtile.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
removableChanged(newValue){if(this._standardtile!==null){ this._standardtile.setRemovable(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.Tile*/
pressChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachPress(newValue);}}
busyChanged(newValue){if(this._standardtile!==null){ this._standardtile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardtile!==null){ this._standardtile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._standardtile!==null){ this._standardtile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._standardtile!==null){ this._standardtile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardtile!==null){ this._standardtile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }