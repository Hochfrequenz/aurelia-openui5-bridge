import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-feed-content')
@inject(Element)
export class Ui5FeedContent extends Ui5Control{
        _feedcontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() size = 'Auto';
@bindable() contentText = null;
@bindable() subheader = null;
@bindable() value = null;
@bindable() valueColor = null;
@bindable() truncateValueTo = 4;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_feedcontent')
        get UIElement() {
            return this._feedcontent;
          }
        fillProperties(params){
               params.size = this.size;
params.contentText = this.contentText;
params.subheader = this.subheader;
params.value = this.value;
params.valueColor = this.valueColor;
params.truncateValueTo = this.truncateValueTo?parseInt(this.truncateValueTo):0;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._feedcontent = new sap.m.FeedContent(this.ui5Id, params);
        else
          this._feedcontent = new sap.m.FeedContent(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._feedcontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._feedcontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._feedcontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._feedcontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._feedcontent.placeAt)
                                                                this._feedcontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._feedcontent.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._feedcontent, this._relation);
                                                            }
         else{
                                                                this._feedcontent.destroy();
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
    sizeChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setSize(newValue);}}
contentTextChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setContentText(newValue);}}
subheaderChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setSubheader(newValue);}}
valueChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setValue(newValue);}}
valueColorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setValueColor(newValue);}}
truncateValueToChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setTruncateValueTo(newValue);}}
pressChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachPress(newValue);}}
busyChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidateFieldGroup(newValue);}}


                                                                                }