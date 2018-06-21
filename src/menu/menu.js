import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-menu')
@inject(Element)
export class Ui5Menu extends Ui5Control{
        _menu = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() title = null;
@bindable() itemSelected = this.defaultFunc;
@bindable() closed = this.defaultFunc;
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
        @computedFrom('_menu')
        get UIElement() {
            return this._menu;
          }
        fillProperties(params){
                                        params.title = this.title;
params.itemSelected = this.itemSelected==null ? this.defaultFunc: this.itemSelected;
params.closed = this.closed==null ? this.defaultFunc: this.closed;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._menu = new sap.m.Menu(this.ui5Id, params);
                                              else
          this._menu = new sap.m.Menu(params);
                                                  if(this.ui5Class)
           this._menu.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._menu.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._menu.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._menu, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._menu, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._menu.placeAt)
                                                                this._menu.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._menu.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._menu)
                                                                this._parent.removeChildByRelation(this._menu, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._menu.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._menu.insertItem(child, _index); else this._menu.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._menu.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._menu.insertCustomData(child, _index); else this._menu.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._menu.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._menu.insertDependent(child, _index); else this._menu.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._menu.removeItem(child);}
if (relation == 'tooltip') {  this._menu.destroyTooltip(child); }
if (relation == 'customdata') {  this._menu.removeCustomData(child);}
if (relation == 'layoutdata') {  this._menu.destroyLayoutData(child); }
if (relation == 'dependents') {  this._menu.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(this._menu!==null){ this._menu.setTitle(newValue);}}
itemSelectedChanged(newValue){if(this._menu!==null){ this._menu.attachItemSelected(newValue);}}
closedChanged(newValue){if(this._menu!==null){ this._menu.attachClosed(newValue);}}
busyChanged(newValue){if(this._menu!==null){ this._menu.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._menu!==null){ this._menu.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._menu!==null){ this._menu.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._menu!==null){ this._menu.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._menu!==null){ this._menu.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._menu!==null){ this._menu.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._menu!==null){ this._menu.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._menu!==null){ this._menu.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._menu!==null){ this._menu.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._menu!==null){ this._menu.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._menu!==null){ this._menu.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }