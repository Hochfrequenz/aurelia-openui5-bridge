import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5TreeItemBase} from '../tree-item-base/tree-item-base';
@customElement('ui5-standard-tree-item')
@inject(Element)
export class Ui5StandardTreeItem extends Ui5TreeItemBase{
        _standardtreeitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable prevId = null;
        @bindable() title = '';
@bindable() icon = null;
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
        @computedFrom('_standardtreeitem')
        get UIElement() {
            return this._standardtreeitem;
          }
        fillProperties(params){
                                        params.title = this.title;
params.icon = this.icon;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._standardtreeitem = new sap.m.StandardTreeItem(this.ui5Id, params);
        else
          this._standardtreeitem = new sap.m.StandardTreeItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._standardtreeitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._standardtreeitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._standardtreeitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._standardtreeitem.placeAt)
                                                                this._standardtreeitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._standardtreeitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._standardtreeitem)
                                                                this._parent.removeChildByRelation(this._standardtreeitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._standardtreeitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._standardtreeitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardtreeitem.insertCustomData(child, _index); else this._standardtreeitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._standardtreeitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._standardtreeitem.insertDependent(child, _index); else this._standardtreeitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._standardtreeitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._standardtreeitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._standardtreeitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._standardtreeitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setTitle(newValue);}}
iconChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setIcon(newValue);}}
/* inherited from sap.m.TreeItemBase*/
typeChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setType(newValue);}}
visibleChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
unreadChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setUnread(getBooleanFromAttributeValue(newValue));}}
selectedChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setSelected(getBooleanFromAttributeValue(newValue));}}
counterChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setCounter(newValue);}}
highlightChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setHighlight(newValue);}}
/* inherited from sap.m.ListItemBase*/
pressChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachPress(newValue);}}
detailPressChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachDetailPress(newValue);}}
busyChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._standardtreeitem!==null){ this._standardtreeitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }