import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-tile-content')
@inject(Element)
export class Ui5TileContent extends Ui5Control{
        _tilecontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() footer = null;
@bindable() footerColor = 'Neutral';
@bindable() size = 'Auto';
@bindable() unit = null;
@bindable() disabled = false;
@bindable() frameType = 'Auto';
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_tilecontent')
        get UIElement() {
            return this._tilecontent;
          }
        fillProperties(params){
               params.footer = this.footer;
params.footerColor = this.footerColor;
params.size = this.size;
params.unit = this.unit;
params.disabled = getBooleanFromAttributeValue(this.disabled);
params.frameType = this.frameType;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._tilecontent = new sap.m.TileContent(this.ui5Id, params);
        else
          this._tilecontent = new sap.m.TileContent(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tilecontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tilecontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tilecontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tilecontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tilecontent.placeAt)
                                                                this._tilecontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tilecontent.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tilecontent, this._relation);
                                                            }
         else{
                                                                this._tilecontent.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { this._tilecontent.setContent(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    footerChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFooter(newValue);}}
footerColorChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFooterColor(newValue);}}
sizeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setSize(newValue);}}
unitChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setUnit(newValue);}}
disabledChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setDisabled(getBooleanFromAttributeValue(newValue));}}
frameTypeChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFrameType(newValue);}}
busyChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tilecontent!==null){ this._tilecontent.attachValidateFieldGroup(newValue);}}


                                                                                }