import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-list-item-base')
@inject(Element)
export class Ui5ListItemBase extends Ui5Control{
        _listitembase = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() type = 'Inactive';
@bindable() visible = true;
@bindable() unread = false;
@bindable() selected = false;
@bindable() counter = null;
@bindable() highlight = 'None';
@bindable() tap = this.defaultFunc;
@bindable() detailTap = this.defaultFunc;
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        @computedFrom('_listitembase')
        get UIElement() {
            return this._listitembase;
          }
        fillProperties(params){
               params.type = this.type;
params.visible = getBooleanFromAttributeValue(this.visible);
params.unread = getBooleanFromAttributeValue(this.unread);
params.selected = getBooleanFromAttributeValue(this.selected);
params.counter = this.counter?parseInt(this.counter):0;
params.highlight = this.highlight;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._listitembase = new sap.m.ListItemBase(this.ui5Id, params);
        else
          this._listitembase = new sap.m.ListItemBase(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._listitembase.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._listitembase, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._listitembase, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._listitembase, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._listitembase.placeAt)
                                                                this._listitembase.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._listitembase.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._listitembase, this._relation);
                                                            }
         else{
                                                                this._listitembase.destroy();
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
    typeChanged(newValue){if(this._listitembase!==null){ this._listitembase.setType(newValue);}}
visibleChanged(newValue){if(this._listitembase!==null){ this._listitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._listitembase!==null){ this._listitembase.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._listitembase!==null){ this._listitembase.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._listitembase!==null){ this._listitembase.setCounter(newValue);}}
highlightChanged(newValue){if(this._listitembase!==null){ this._listitembase.setHighlight(newValue);}}
tapChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachTap(newValue);}}
detailTapChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachDetailTap(newValue);}}
pressChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachPress(newValue);}}
detailPressChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._listitembase!==null){ this._listitembase.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._listitembase!==null){ this._listitembase.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._listitembase!==null){ this._listitembase.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._listitembase!==null){ this._listitembase.attachValidateFieldGroup(newValue);}}


                                                                                }