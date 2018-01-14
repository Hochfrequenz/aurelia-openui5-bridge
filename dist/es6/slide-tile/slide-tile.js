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
        @bindable() displayTime = 5000;
@bindable() transitionTime = 500;
@bindable() scope = 'Display';
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
        @computedFrom('_slidetile')
        get UIElement() {
            return this._slidetile;
          }
        fillProperties(params){
               params.displayTime = this.displayTime?parseInt(this.displayTime):0;
params.transitionTime = this.transitionTime?parseInt(this.transitionTime):0;
params.scope = this.scope;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._slidetile = new sap.m.SlideTile(this.ui5Id, params);
        else
          this._slidetile = new sap.m.SlideTile(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._slidetile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._slidetile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._slidetile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._slidetile, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._slidetile, this._relation);
                                                            }
         else{
                                                                this._slidetile.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'tiles') { var _index = null; if (afterElement) _index = this._slidetile.indexOfTile(afterElement); if (_index)this._slidetile.insertTile(child, _index + 1); else this._slidetile.addTile(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'tiles') {  this._slidetile.removeTile(child); }

                                                                            }
    displayTimeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setDisplayTime(newValue);}}
transitionTimeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setTransitionTime(newValue);}}
scopeChanged(newValue){if(this._slidetile!==null){ this._slidetile.setScope(newValue);}}
pressChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachPress(newValue);}}
busyChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._slidetile!==null){ this._slidetile.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._slidetile!==null){ this._slidetile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._slidetile!==null){ this._slidetile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._slidetile!==null){ this._slidetile.attachValidateFieldGroup(newValue);}}


                                                                                }