import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-pane-container')
@inject(Element)
export class Ui5PaneContainer extends Ui5Element{
        _panecontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() orientation = 'Horizontal';
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
        @computedFrom('_panecontainer')
        get UIElement() {
            return this._panecontainer;
          }
        fillProperties(params){
                                        params.orientation = this.orientation;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._panecontainer = new sap.ui.layout.PaneContainer(this.ui5Id, params);
                                              else
          this._panecontainer = new sap.ui.layout.PaneContainer(params);
                                                  if(this.ui5Class)
           this._panecontainer.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._panecontainer.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._panecontainer.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._panecontainer, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._panecontainer, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._panecontainer.placeAt)
                                                                this._panecontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._panecontainer.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._panecontainer)
                                                                this._parent.removeChildByRelation(this._panecontainer, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._panecontainer.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'panes') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panecontainer.insertPane(child, _index); else this._panecontainer.addPane(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._panecontainer.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panecontainer.insertCustomData(child, _index); else this._panecontainer.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._panecontainer.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._panecontainer.insertDependent(child, _index); else this._panecontainer.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'panes') {  this._panecontainer.removePane(child);}
if (relation == 'tooltip') {  this._panecontainer.destroyTooltip(child); }
if (relation == 'customdata') {  this._panecontainer.removeCustomData(child);}
if (relation == 'layoutdata') {  this._panecontainer.destroyLayoutData(child); }
if (relation == 'dependents') {  this._panecontainer.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    orientationChanged(newValue){if(this._panecontainer!==null){ this._panecontainer.setOrientation(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._panecontainer!==null){ this._panecontainer.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._panecontainer!==null){ this._panecontainer.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._panecontainer!==null){ this._panecontainer.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._panecontainer!==null){ this._panecontainer.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._panecontainer!==null){ this._panecontainer.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }