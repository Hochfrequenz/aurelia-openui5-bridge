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
@bindable() spanLarge = null;
@bindable() spanMedium = null;
@bindable() spanSmall = null;
@bindable() indentLarge = null;
@bindable() indentMedium = null;
@bindable() indentSmall = null;
@bindable() visibleOnLarge = true;
@bindable() visibleOnMedium = true;
@bindable() visibleOnSmall = true;

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
params.spanLarge = this.spanLarge?parseInt(this.spanLarge):0;
params.spanMedium = this.spanMedium?parseInt(this.spanMedium):0;
params.spanSmall = this.spanSmall?parseInt(this.spanSmall):0;
params.indentLarge = this.indentLarge?parseInt(this.indentLarge):0;
params.indentMedium = this.indentMedium?parseInt(this.indentMedium):0;
params.indentSmall = this.indentSmall?parseInt(this.indentSmall):0;
params.visibleOnLarge = getBooleanFromAttributeValue(this.visibleOnLarge);
params.visibleOnMedium = getBooleanFromAttributeValue(this.visibleOnMedium);
params.visibleOnSmall = getBooleanFromAttributeValue(this.visibleOnSmall);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._griddata = new sap.ui.layout.GridData(this.ui5Id, params);
        else
          this._griddata = new sap.ui.layout.GridData(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._griddata.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._griddata, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._griddata, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._griddata, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._griddata, this._relation);
                                                            }
         else{
                                                                this._griddata.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                
                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    spanChanged(newValue){if(this._griddata!==null){ this._griddata.setSpan(newValue);}}
spanXLChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanXL(newValue);}}
spanLChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanL(newValue);}}
spanMChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanM(newValue);}}
spanSChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanS(newValue);}}
indentChanged(newValue){if(this._griddata!==null){ this._griddata.setIndent(newValue);}}
indentXLChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentXL(newValue);}}
indentLChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentL(newValue);}}
indentMChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentM(newValue);}}
indentSChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentS(newValue);}}
visibleXLChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleXL(getBooleanFromAttributeValue(newValue));}}
visibleLChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleL(getBooleanFromAttributeValue(newValue));}}
visibleMChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleM(getBooleanFromAttributeValue(newValue));}}
visibleSChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleS(getBooleanFromAttributeValue(newValue));}}
moveBackwardsChanged(newValue){if(this._griddata!==null){ this._griddata.setMoveBackwards(newValue);}}
moveForwardChanged(newValue){if(this._griddata!==null){ this._griddata.setMoveForward(newValue);}}
linebreakChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreak(getBooleanFromAttributeValue(newValue));}}
linebreakXLChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakXL(getBooleanFromAttributeValue(newValue));}}
linebreakLChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakL(getBooleanFromAttributeValue(newValue));}}
linebreakMChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakM(getBooleanFromAttributeValue(newValue));}}
linebreakSChanged(newValue){if(this._griddata!==null){ this._griddata.setLinebreakS(getBooleanFromAttributeValue(newValue));}}
spanLargeChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanLarge(newValue);}}
spanMediumChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanMedium(newValue);}}
spanSmallChanged(newValue){if(this._griddata!==null){ this._griddata.setSpanSmall(newValue);}}
indentLargeChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentLarge(newValue);}}
indentMediumChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentMedium(newValue);}}
indentSmallChanged(newValue){if(this._griddata!==null){ this._griddata.setIndentSmall(newValue);}}
visibleOnLargeChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleOnLarge(getBooleanFromAttributeValue(newValue));}}
visibleOnMediumChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleOnMedium(getBooleanFromAttributeValue(newValue));}}
visibleOnSmallChanged(newValue){if(this._griddata!==null){ this._griddata.setVisibleOnSmall(getBooleanFromAttributeValue(newValue));}}


                                                                                }