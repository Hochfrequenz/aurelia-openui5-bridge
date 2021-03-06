import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5LayoutData} from '../layout-data/layout-data';
@customElement('ui5-grid-data')
@inject(Element)
export class Ui5GridData extends Ui5LayoutData{
        _griddata = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() span = null;
@bindable() spanXL = null;
@bindable() spanL = null;
@bindable() spanM = null;
@bindable() spanS = null;
@bindable() indent = null;
@bindable() indentXL = null;
@bindable() indentL = null;
@bindable() indentM = null;
@bindable() indentS = null;
@bindable() visibleXL = true;
@bindable() visibleL = true;
@bindable() visibleM = true;
@bindable() visibleS = true;
@bindable() moveBackwards = null;
@bindable() moveForward = null;
@bindable() linebreak = false;
@bindable() linebreakXL = false;
@bindable() linebreakL = false;
@bindable() linebreakM = false;
@bindable() linebreakS = false;
/* inherited from sap.ui.core.LayoutData*/
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
        @computedFrom('_griddata')
        get UIElement() {
            return this._griddata;
          }
        fillProperties(params){
                                        params.span = this.span;
params.spanXL = this.spanXL?parseInt(this.spanXL):0;
params.spanL = this.spanL?parseInt(this.spanL):0;
params.spanM = this.spanM?parseInt(this.spanM):0;
params.spanS = this.spanS?parseInt(this.spanS):0;
params.indent = this.indent;
params.indentXL = this.indentXL?parseInt(this.indentXL):0;
params.indentL = this.indentL?parseInt(this.indentL):0;
params.indentM = this.indentM?parseInt(this.indentM):0;
params.indentS = this.indentS?parseInt(this.indentS):0;
params.visibleXL = getBooleanFromAttributeValue(this.visibleXL);
params.visibleL = getBooleanFromAttributeValue(this.visibleL);
params.visibleM = getBooleanFromAttributeValue(this.visibleM);
params.visibleS = getBooleanFromAttributeValue(this.visibleS);
params.moveBackwards = this.moveBackwards;
params.moveForward = this.moveForward;
params.linebreak = getBooleanFromAttributeValue(this.linebreak);
params.linebreakXL = getBooleanFromAttributeValue(this.linebreakXL);
params.linebreakL = getBooleanFromAttributeValue(this.linebreakL);
params.linebreakM = getBooleanFromAttributeValue(this.linebreakM);
params.linebreakS = getBooleanFromAttributeValue(this.linebreakS);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._griddata = new sap.ui.layout.GridData(this.ui5Id, params);
                                              else
          this._griddata = new sap.ui.layout.GridData(params);
                                                  if(this.ui5Class)
           this._griddata.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._griddata.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._griddata.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._griddata, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._griddata, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._griddata.placeAt)
                                                                this._griddata.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._griddata.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._griddata)
                                                                this._parent.removeChildByRelation(this._griddata, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._griddata.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._griddata.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._griddata.insertCustomData(child, _index); else this._griddata.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._griddata.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._griddata.insertDependent(child, _index); else this._griddata.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._griddata.insertDragDropConfig(child, _index); else this._griddata.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._griddata.destroyTooltip(child); }
if (relation == 'customdata') {  this._griddata.removeCustomData(child);}
if (relation == 'layoutdata') {  this._griddata.destroyLayoutData(child); }
if (relation == 'dependents') {  this._griddata.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._griddata.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    spanChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setSpan(newValue);}}
spanXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setSpanXL(newValue);}}
spanLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setSpanL(newValue);}}
spanMChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setSpanM(newValue);}}
spanSChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setSpanS(newValue);}}
indentChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setIndent(newValue);}}
indentXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setIndentXL(newValue);}}
indentLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setIndentL(newValue);}}
indentMChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setIndentM(newValue);}}
indentSChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setIndentS(newValue);}}
visibleXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setVisibleXL(getBooleanFromAttributeValue(newValue));}}
visibleLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setVisibleL(getBooleanFromAttributeValue(newValue));}}
visibleMChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setVisibleM(getBooleanFromAttributeValue(newValue));}}
visibleSChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setVisibleS(getBooleanFromAttributeValue(newValue));}}
moveBackwardsChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setMoveBackwards(newValue);}}
moveForwardChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setMoveForward(newValue);}}
linebreakChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setLinebreak(getBooleanFromAttributeValue(newValue));}}
linebreakXLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setLinebreakXL(getBooleanFromAttributeValue(newValue));}}
linebreakLChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setLinebreakL(getBooleanFromAttributeValue(newValue));}}
linebreakMChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setLinebreakM(getBooleanFromAttributeValue(newValue));}}
linebreakSChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.setLinebreakS(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.ui.core.LayoutData*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._griddata!==null){ this._griddata.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }