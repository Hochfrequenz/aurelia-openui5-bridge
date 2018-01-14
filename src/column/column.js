import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-column')
@inject(Element)
export class Ui5Column extends Ui5Element{
        _column = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() hAlign = 'Begin';
@bindable() vAlign = 'Inherit';
@bindable() styleClass = null;
@bindable() visible = true;
@bindable() minScreenWidth = null;
@bindable() demandPopin = false;
@bindable() popinHAlign = 'Begin';
@bindable() popinDisplay = 'Block';
@bindable() mergeDuplicates = false;
@bindable() mergeFunctionName = 'getText';

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_column')
        get UIElement() {
            return this._column;
          }
        fillProperties(params){
               params.width = this.width;
params.hAlign = this.hAlign;
params.vAlign = this.vAlign;
params.styleClass = this.styleClass;
params.visible = getBooleanFromAttributeValue(this.visible);
params.minScreenWidth = this.minScreenWidth;
params.demandPopin = getBooleanFromAttributeValue(this.demandPopin);
params.popinHAlign = this.popinHAlign;
params.popinDisplay = this.popinDisplay;
params.mergeDuplicates = getBooleanFromAttributeValue(this.mergeDuplicates);
params.mergeFunctionName = this.mergeFunctionName;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._column = new sap.m.Column(this.ui5Id, params);
        else
          this._column = new sap.m.Column(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._column.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._column, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._column, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._column, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._column.placeAt)
                                                                this._column.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._column.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._column, this._relation);
                                                            }
         else{
                                                                this._column.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'header') { this._column.setHeader(child); return elem.localName;}
if (elem.localName == 'footer') { this._column.setFooter(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    widthChanged(newValue){if(this._column!==null){ this._column.setWidth(newValue);}}
hAlignChanged(newValue){if(this._column!==null){ this._column.setHAlign(newValue);}}
vAlignChanged(newValue){if(this._column!==null){ this._column.setVAlign(newValue);}}
styleClassChanged(newValue){if(this._column!==null){ this._column.setStyleClass(newValue);}}
visibleChanged(newValue){if(this._column!==null){ this._column.setVisible(getBooleanFromAttributeValue(newValue));}}
minScreenWidthChanged(newValue){if(this._column!==null){ this._column.setMinScreenWidth(newValue);}}
demandPopinChanged(newValue){if(this._column!==null){ this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));}}
popinHAlignChanged(newValue){if(this._column!==null){ this._column.setPopinHAlign(newValue);}}
popinDisplayChanged(newValue){if(this._column!==null){ this._column.setPopinDisplay(newValue);}}
mergeDuplicatesChanged(newValue){if(this._column!==null){ this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));}}
mergeFunctionNameChanged(newValue){if(this._column!==null){ this._column.setMergeFunctionName(newValue);}}


                                                                                }