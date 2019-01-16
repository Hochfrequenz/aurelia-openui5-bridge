import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-responsive-splitter')
@inject(Element)
export class Ui5ResponsiveSplitter extends Ui5Control{
        _responsivesplitter = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = '100%';
@bindable() height = '100%';
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
        @computedFrom('_responsivesplitter')
        get UIElement() {
            return this._responsivesplitter;
          }
        fillProperties(params){
                                        params.width = this.width;
params.height = this.height;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._responsivesplitter = new sap.ui.layout.ResponsiveSplitter(this.ui5Id, params);
                                              else
          this._responsivesplitter = new sap.ui.layout.ResponsiveSplitter(params);
                                                  if(this.ui5Class)
           this._responsivesplitter.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._responsivesplitter.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._responsivesplitter.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._responsivesplitter, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._responsivesplitter, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._responsivesplitter.placeAt)
                                                                this._responsivesplitter.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._responsivesplitter.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._responsivesplitter)
                                                                this._parent.removeChildByRelation(this._responsivesplitter, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._responsivesplitter.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'rootpanecontainer') { this._responsivesplitter.setRootPaneContainer(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._responsivesplitter.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivesplitter.insertCustomData(child, _index); else this._responsivesplitter.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._responsivesplitter.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivesplitter.insertDependent(child, _index); else this._responsivesplitter.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._responsivesplitter.insertDragDropConfig(child, _index); else this._responsivesplitter.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'rootpanecontainer') {  this._responsivesplitter.destroyRootPaneContainer(child); }
if (relation == 'tooltip') {  this._responsivesplitter.destroyTooltip(child); }
if (relation == 'customdata') {  this._responsivesplitter.removeCustomData(child);}
if (relation == 'layoutdata') {  this._responsivesplitter.destroyLayoutData(child); }
if (relation == 'dependents') {  this._responsivesplitter.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._responsivesplitter.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.setWidth(newValue);}}
heightChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.setHeight(newValue);}}
blockedChanged(newValue){if(this._responsivesplitter!==null){ this._responsivesplitter.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._responsivesplitter!==null){ this._responsivesplitter.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._responsivesplitter!==null){ this._responsivesplitter.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._responsivesplitter!==null){ this._responsivesplitter.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._responsivesplitter!==null){ this._responsivesplitter.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._responsivesplitter!==null){ this._responsivesplitter.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._responsivesplitter!==null){ this._responsivesplitter.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }