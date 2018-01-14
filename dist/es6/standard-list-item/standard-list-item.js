import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListItemBase} from '../list-item-base/list-item-base';
@customElement('ui5-standard-list-item')
@inject(Element)
export class Ui5StandardListItem extends Ui5ListItemBase{
        _standardlistitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() title = null;
@bindable() description = null;
@bindable() icon = null;
@bindable() iconInset = true;
@bindable() iconDensityAware = true;
@bindable() activeIcon = null;
@bindable() info = null;
@bindable() infoState = 'None';
@bindable() adaptTitleSize = true;
@bindable() titleTextDirection = 'Inherit';
@bindable() infoTextDirection = 'Inherit';
/* inherited from sap.m.ListItemBase*/
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
        @computedFrom('_standardlistitem')
        get UIElement() {
            return this._standardlistitem;
          }
        fillProperties(params){
               params.title = this.title;
params.description = this.description;
params.icon = this.icon;
params.iconInset = getBooleanFromAttributeValue(this.iconInset);
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.activeIcon = this.activeIcon;
params.info = this.info;
params.infoState = this.infoState;
params.adaptTitleSize = getBooleanFromAttributeValue(this.adaptTitleSize);
params.titleTextDirection = this.titleTextDirection;
params.infoTextDirection = this.infoTextDirection;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._standardlistitem = new sap.m.StandardListItem(this.ui5Id, params);
        else
          this._standardlistitem = new sap.m.StandardListItem(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardlistitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._standardlistitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._standardlistitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._standardlistitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._standardlistitem.placeAt)
                                                                this._standardlistitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._standardlistitem.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._standardlistitem, this._relation);
                                                            }
         else{
                                                                this._standardlistitem.destroy();
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
    titleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setTitle(newValue);}}
descriptionChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setDescription(newValue);}}
iconChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setIcon(newValue);}}
iconInsetChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setIconInset(getBooleanFromAttributeValue(newValue));}}
iconDensityAwareChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setActiveIcon(newValue);}}
infoChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setInfo(newValue);}}
infoStateChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setInfoState(newValue);}}
adaptTitleSizeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));}}
titleTextDirectionChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setTitleTextDirection(newValue);}}
infoTextDirectionChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setInfoTextDirection(newValue);}}
typeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setType(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
tapChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachTap(newValue);}}
detailTapChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachDetailTap(newValue);}}
pressChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidateFieldGroup(newValue);}}


                                                                                }