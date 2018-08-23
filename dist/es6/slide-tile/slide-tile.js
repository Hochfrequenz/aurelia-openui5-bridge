import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-slide-tile')
@inject(Element)
export class Ui5SlideTile extends Ui5Control{
        _slidetile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() displayTime = 5000;
@bindable() transitionTime = 500;
@bindable() scope = 'Display';
@bindable() sizeBehavior = 'Responsive';
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
        @computedFrom('_slidetile')
        get UIElement() {
            return this._slidetile;
          }
        fillProperties(params){
                                        params.displayTime = this.displayTime?parseInt(this.displayTime):0;
params.transitionTime = this.transitionTime?parseInt(this.transitionTime):0;
params.scope = this.scope;
params.sizeBehavior = this.sizeBehavior;
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
          this._slidetile = new sap.m.SlideTile(this.ui5Id, params);
                                              else
          this._slidetile = new sap.m.SlideTile(params);
                                                  if(this.ui5Class)
           this._slidetile.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._slidetile.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._slidetile.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._slidetile, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._slidetile, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._slidetile.placeAt)
                                                                this._slidetile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._slidetile.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._slidetile)
                                                                this._parent.removeChildByRelation(this._slidetile, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._slidetile.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tiles') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._slidetile.insertTile(child, _index); else this._slidetile.addTile(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._slidetile.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._slidetile.insertCustomData(child, _index); else this._slidetile.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._slidetile.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._slidetile.insertDependent(child, _index); else this._slidetile.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._slidetile.insertDragDropConfig(child, _index); else this._slidetile.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tiles') {  this._slidetile.removeTile(child);}
if (relation == 'tooltip') {  this._slidetile.destroyTooltip(child); }
if (relation == 'customdata') {  this._slidetile.removeCustomData(child);}
if (relation == 'layoutdata') {  this._slidetile.destroyLayoutData(child); }
if (relation == 'dependents') {  this._slidetile.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._slidetile.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    displayTimeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setDisplayTime(newValue);}}
transitionTimeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setTransitionTime(newValue);}}
scopeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setScope(newValue);}}
sizeBehaviorChanged(newValue){if(this._slidetile!==null){ this._slidetile.setSizeBehavior(newValue);}}
pressChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachPress(newValue);}}
blockedChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._slidetile!==null){ this._slidetile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._slidetile!==null){ this._slidetile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }