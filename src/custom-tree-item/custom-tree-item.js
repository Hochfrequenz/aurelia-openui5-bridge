import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5TreeItemBase} from '../tree-item-base/tree-item-base';
@customElement('ui5-custom-tree-item')
@inject(Element)
export class Ui5CustomTreeItem extends Ui5TreeItemBase{
        _customtreeitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        /* inherited from sap.m.TreeItemBase*/
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
        @computedFrom('_customtreeitem')
        get UIElement() {
            return this._customtreeitem;
          }
        fillProperties(params){
                                                    
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._customtreeitem = new sap.m.CustomTreeItem(this.ui5Id, params);
        else
          this._customtreeitem = new sap.m.CustomTreeItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._customtreeitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._customtreeitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._customtreeitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._customtreeitem.placeAt)
                                                                this._customtreeitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._customtreeitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._customtreeitem)
                                                                this._parent.removeChildByRelation(this._customtreeitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._customtreeitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._customtreeitem.insertContent(child, _index); else this._customtreeitem.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._customtreeitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._customtreeitem.insertCustomData(child, _index); else this._customtreeitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._customtreeitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._customtreeitem.insertDependent(child, _index); else this._customtreeitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._customtreeitem.removeContent(child);}
if (relation == 'tooltip') {  this._customtreeitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._customtreeitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._customtreeitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._customtreeitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    /* inherited from sap.m.TreeItemBase*/
typeChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setType(newValue);}}
visibleChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._customtreeitem!==null){ this._customtreeitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }