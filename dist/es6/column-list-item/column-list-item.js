import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ListItemBase} from '../list-item-base/list-item-base';
@customElement('ui5-column-list-item')
@inject(Element)
export class Ui5ColumnListItem extends Ui5ListItemBase{
        _columnlistitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() vAlign = 'Inherit';
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
        @computedFrom('_columnlistitem')
        get UIElement() {
            return this._columnlistitem;
          }
        fillProperties(params){
               params.vAlign = this.vAlign;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._columnlistitem = new sap.m.ColumnListItem(this.ui5Id, params);
        else
          this._columnlistitem = new sap.m.ColumnListItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._columnlistitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._columnlistitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._columnlistitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._columnlistitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._columnlistitem.placeAt)
                                                                this._columnlistitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._columnlistitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._columnlistitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._columnlistitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'cells') { var _index = null; if (afterElement) _index = this._columnlistitem.indexOfCell(afterElement); if (_index)this._columnlistitem.insertCell(child, _index + 1); else this._columnlistitem.addCell(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._columnlistitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._columnlistitem.indexOfCustomData(afterElement); if (_index)this._columnlistitem.insertCustomData(child, _index + 1); else this._columnlistitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._columnlistitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._columnlistitem.indexOfDependent(afterElement); if (_index)this._columnlistitem.insertDependent(child, _index + 1); else this._columnlistitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'cells') {  this._columnlistitem.removeCell(child);}
if (relation == 'tooltip') {  this._columnlistitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._columnlistitem.removeCustomData(child);}
if (relation == 'layoutData') {  this._columnlistitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._columnlistitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    vAlignChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVAlign(newValue);}}
typeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setType(newValue);}}
visibleChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._columnlistitem!==null){ this._columnlistitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }