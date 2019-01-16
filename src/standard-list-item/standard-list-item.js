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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
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
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._standardlistitem = new sap.m.StandardListItem(this.ui5Id, params);
                                              else
          this._standardlistitem = new sap.m.StandardListItem(params);
                                                  if(this.ui5Class)
           this._standardlistitem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._standardlistitem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardlistitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._standardlistitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._standardlistitem, this.element, this.prevId);
        
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._standardlistitem)
                                                                this._parent.removeChildByRelation(this._standardlistitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._standardlistitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._standardlistitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardlistitem.insertCustomData(child, _index); else this._standardlistitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardlistitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardlistitem.insertDependent(child, _index); else this._standardlistitem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardlistitem.insertDragDropConfig(child, _index); else this._standardlistitem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardlistitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardlistitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._standardlistitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardlistitem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._standardlistitem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setTitle(newValue);}}
descriptionChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setDescription(newValue);}}
iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setIcon(newValue);}}
iconInsetChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setIconInset(getBooleanFromAttributeValue(newValue));}}
iconDensityAwareChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
activeIconChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setActiveIcon(newValue);}}
infoChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setInfo(newValue);}}
infoStateChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setInfoState(newValue);}}
adaptTitleSizeChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));}}
titleTextDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setTitleTextDirection(newValue);}}
infoTextDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.setInfoTextDirection(newValue);}}
typeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setType(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachDetailPress(newValue);}}
blockedChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._standardlistitem!==null){ this._standardlistitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }