import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-split-pane')
@inject(Element)
export class Ui5SplitPane extends Ui5Element{
        _splitpane = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() demandPane = true;
@bindable() requiredParentWidth = 800;
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
        @computedFrom('_splitpane')
        get UIElement() {
            return this._splitpane;
          }
        fillProperties(params){
                                        params.demandPane = getBooleanFromAttributeValue(this.demandPane);
params.requiredParentWidth = this.requiredParentWidth?parseInt(this.requiredParentWidth):0;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._splitpane = new sap.ui.layout.SplitPane(this.ui5Id, params);
                                              else
          this._splitpane = new sap.ui.layout.SplitPane(params);
                                                  if(this.ui5Class)
           this._splitpane.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._splitpane.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._splitpane.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._splitpane, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._splitpane, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._splitpane.placeAt)
                                                                this._splitpane.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._splitpane.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._splitpane)
                                                                this._parent.removeChildByRelation(this._splitpane, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._splitpane.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { this._splitpane.setContent(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._splitpane.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitpane.insertCustomData(child, _index); else this._splitpane.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._splitpane.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitpane.insertDependent(child, _index); else this._splitpane.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._splitpane.insertDragDropConfig(child, _index); else this._splitpane.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._splitpane.destroyContent(child); }
if (relation == 'tooltip') {  this._splitpane.destroyTooltip(child); }
if (relation == 'customdata') {  this._splitpane.removeCustomData(child);}
if (relation == 'layoutdata') {  this._splitpane.destroyLayoutData(child); }
if (relation == 'dependents') {  this._splitpane.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._splitpane.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    demandPaneChanged(newValue){if(this._splitpane!==null){ this._splitpane.setDemandPane(getBooleanFromAttributeValue(newValue));}}
requiredParentWidthChanged(newValue){if(this._splitpane!==null){ this._splitpane.setRequiredParentWidth(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._splitpane!==null){ this._splitpane.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._splitpane!==null){ this._splitpane.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._splitpane!==null){ this._splitpane.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._splitpane!==null){ this._splitpane.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._splitpane!==null){ this._splitpane.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }