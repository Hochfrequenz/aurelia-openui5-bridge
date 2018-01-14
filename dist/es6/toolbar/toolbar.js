import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-toolbar')
@inject(Element)
export class Ui5Toolbar extends Ui5Control{
        _toolbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() active = false;
@bindable() enabled = true;
@bindable() height = '';
@bindable() design = 'Auto';
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
        @computedFrom('_toolbar')
        get UIElement() {
            return this._toolbar;
          }
        fillProperties(params){
               params.width = this.width;
params.active = getBooleanFromAttributeValue(this.active);
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.height = this.height;
params.design = this.design;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._toolbar = new sap.m.Toolbar(this.ui5Id, params);
        else
          this._toolbar = new sap.m.Toolbar(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._toolbar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._toolbar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._toolbar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._toolbar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._toolbar.placeAt)
                                                                this._toolbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._toolbar.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._toolbar, this._relation);
                                                            }
         else{
                                                                this._toolbar.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._toolbar.indexOfContent(afterElement); if (_index)this._toolbar.insertContent(child, _index + 1); else this._toolbar.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._toolbar.removeContent(child); }

                                                                            }
    widthChanged(newValue){if(this._toolbar!==null){ this._toolbar.setWidth(newValue);}}
activeChanged(newValue){if(this._toolbar!==null){ this._toolbar.setActive(getBooleanFromAttributeValue(newValue));}}
enabledChanged(newValue){if(this._toolbar!==null){ this._toolbar.setEnabled(getBooleanFromAttributeValue(newValue));}}
heightChanged(newValue){if(this._toolbar!==null){ this._toolbar.setHeight(newValue);}}
designChanged(newValue){if(this._toolbar!==null){ this._toolbar.setDesign(newValue);}}
pressChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachPress(newValue);}}
busyChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._toolbar!==null){ this._toolbar.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._toolbar!==null){ this._toolbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._toolbar!==null){ this._toolbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._toolbar!==null){ this._toolbar.attachValidateFieldGroup(newValue);}}


                                                                                }