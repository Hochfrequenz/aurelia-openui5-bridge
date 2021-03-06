import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-tab-container-item')
@inject(Element)
export class Ui5TabContainerItem extends Ui5Element{
        _tabcontaineritem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() name = '';
@bindable() additionalText = '';
@bindable() icon = null;
@bindable() iconTooltip = null;
@bindable() key = null;
@bindable() modified = false;
@bindable() itemPropertyChanged = this.defaultFunc;
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
        @computedFrom('_tabcontaineritem')
        get UIElement() {
            return this._tabcontaineritem;
          }
        fillProperties(params){
                                        params.name = this.name;
params.additionalText = this.additionalText;
params.icon = this.icon;
params.iconTooltip = this.iconTooltip;
params.key = this.key;
params.modified = getBooleanFromAttributeValue(this.modified);
params.itemPropertyChanged = this.itemPropertyChanged==null ? this.defaultFunc: this.itemPropertyChanged;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._tabcontaineritem = new sap.m.TabContainerItem(this.ui5Id, params);
                                              else
          this._tabcontaineritem = new sap.m.TabContainerItem(params);
                                                  if(this.ui5Class)
           this._tabcontaineritem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._tabcontaineritem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontaineritem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._tabcontaineritem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._tabcontaineritem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tabcontaineritem.placeAt)
                                                                this._tabcontaineritem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tabcontaineritem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._tabcontaineritem)
                                                                this._parent.removeChildByRelation(this._tabcontaineritem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._tabcontaineritem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontaineritem.insertContent(child, _index); else this._tabcontaineritem.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._tabcontaineritem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontaineritem.insertCustomData(child, _index); else this._tabcontaineritem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._tabcontaineritem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontaineritem.insertDependent(child, _index); else this._tabcontaineritem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._tabcontaineritem.insertDragDropConfig(child, _index); else this._tabcontaineritem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._tabcontaineritem.removeContent(child);}
if (relation == 'tooltip') {  this._tabcontaineritem.destroyTooltip(child); }
if (relation == 'customdata') {  this._tabcontaineritem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._tabcontaineritem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._tabcontaineritem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._tabcontaineritem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    nameChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.setName(newValue);}}
additionalTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.setAdditionalText(newValue);}}
iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.setIcon(newValue);}}
iconTooltipChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.setIconTooltip(newValue);}}
keyChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.setKey(newValue);}}
modifiedChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.setModified(getBooleanFromAttributeValue(newValue));}}
itemPropertyChangedChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.attachItemPropertyChanged(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._tabcontaineritem!==null){ this._tabcontaineritem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }