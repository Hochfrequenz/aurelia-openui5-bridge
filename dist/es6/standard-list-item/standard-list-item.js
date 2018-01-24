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
@bindable() press = this.defaultFunc;
@bindable() detailPress = this.defaultFunc;
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
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardlistitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._standardlistitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
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
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._standardlistitem.indexOfCustomData(afterElement); if (_index)this._standardlistitem.insertCustomData(child, _index + 1); else this._standardlistitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardlistitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._standardlistitem.indexOfDependent(afterElement); if (_index)this._standardlistitem.insertDependent(child, _index + 1); else this._standardlistitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardlistitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardlistitem.removeCustomData(child);}
if (relation == 'layoutData') {  this._standardlistitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardlistitem.removeDependent(child);}

      }
      catch(err){}
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
pressChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._standardlistitem!==null){ this._standardlistitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }