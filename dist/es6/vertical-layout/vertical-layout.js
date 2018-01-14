import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-vertical-layout')
@inject(Element)
export class Ui5VerticalLayout extends Ui5Control{
        _verticallayout = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() enabled = true;
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
        @computedFrom('_verticallayout')
        get UIElement() {
            return this._verticallayout;
          }
        fillProperties(params){
               params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._verticallayout = new sap.ui.layout.VerticalLayout(this.ui5Id, params);
        else
          this._verticallayout = new sap.ui.layout.VerticalLayout(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._verticallayout.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._verticallayout, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._verticallayout, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._verticallayout, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._verticallayout.placeAt)
                                                                this._verticallayout.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._verticallayout.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._verticallayout, this._relation);
                                                            }
         else{
                                                                this._verticallayout.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._verticallayout.indexOfContent(afterElement); if (_index)this._verticallayout.insertContent(child, _index + 1); else this._verticallayout.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._verticallayout.removeContent(child); }

                                                                            }
    widthChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setWidth(newValue);}}
enabledChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setEnabled(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._verticallayout!==null){ this._verticallayout.attachValidateFieldGroup(newValue);}}


                                                                                }