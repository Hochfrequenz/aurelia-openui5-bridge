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
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;

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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._standardtile = new sap.m.StandardTile(this.ui5Id, params);
        else
          this._standardtile = new sap.m.StandardTile(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardtile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._standardtile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._standardtile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._standardtile, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._standardtile, this._relation);
                                                            }
         else{
                                                                this._standardtile.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                
                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
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
visibleChanged(newValue){if(this._standardtile!==null){ this._standardtile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardtile!==null){ this._standardtile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardtile!==null){ this._standardtile.attachValidateFieldGroup(newValue);}}


                                                                                }