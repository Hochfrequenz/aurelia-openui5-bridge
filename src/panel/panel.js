import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-panel')
@inject(Element)
export class Ui5Panel extends Ui5Control{
        _panel = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() headerText = '';
@bindable() width = '100%';
@bindable() height = 'auto';
@bindable() expandable = false;
@bindable() expanded = false;
@bindable() expandAnimation = true;
@bindable() backgroundDesign = 'Translucent';
@bindable() accessibleRole = 'Form';
@bindable() expand = this.defaultFunc;
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
        @computedFrom('_panel')
        get UIElement() {
            return this._panel;
          }
        fillProperties(params){
                                        params.headerText = this.headerText;
params.width = this.width;
params.height = this.height;
params.expandable = getBooleanFromAttributeValue(this.expandable);
params.expanded = getBooleanFromAttributeValue(this.expanded);
params.expandAnimation = getBooleanFromAttributeValue(this.expandAnimation);
params.backgroundDesign = this.backgroundDesign;
params.accessibleRole = this.accessibleRole;
params.expand = this.expand==null ? this.defaultFunc: this.expand;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._panel = new sap.m.Panel(this.ui5Id, params);
                                              else
          this._panel = new sap.m.Panel(params);
                                                  if(this.ui5Class)
           this._panel.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._panel.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._panel.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._panel, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._panel, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._panel.placeAt)
                                                                this._panel.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._panel.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._panel)
                                                                this._parent.removeChildByRelation(this._panel, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._panel.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panel.insertContent(child, _index); else this._panel.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'headertoolbar') { this._panel.setHeaderToolbar(child); return elem.localName;}
if (elem.localName == 'infotoolbar') { this._panel.setInfoToolbar(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._panel.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panel.insertCustomData(child, _index); else this._panel.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._panel.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panel.insertDependent(child, _index); else this._panel.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panel.insertDragDropConfig(child, _index); else this._panel.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._panel.removeContent(child);}
if (relation == 'headertoolbar') {  this._panel.destroyHeaderToolbar(child); }
if (relation == 'infotoolbar') {  this._panel.destroyInfoToolbar(child); }
if (relation == 'tooltip') {  this._panel.destroyTooltip(child); }
if (relation == 'customdata') {  this._panel.removeCustomData(child);}
if (relation == 'layoutdata') {  this._panel.destroyLayoutData(child); }
if (relation == 'dependents') {  this._panel.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._panel.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    headerTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setHeaderText(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setWidth(newValue);}}
heightChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setHeight(newValue);}}
expandableChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setExpandable(getBooleanFromAttributeValue(newValue));}}
expandedChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setExpanded(getBooleanFromAttributeValue(newValue));}}
expandAnimationChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setExpandAnimation(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setBackgroundDesign(newValue);}}
accessibleRoleChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.setAccessibleRole(newValue);}}
expandChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachExpand(newValue);}}
busyChanged(newValue){if(this._panel!==null){ this._panel.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._panel!==null){ this._panel.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._panel!==null){ this._panel.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._panel!==null){ this._panel.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._panel!==null){ this._panel.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._panel!==null){ this._panel.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }