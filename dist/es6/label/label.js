import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-label')
@inject(Element)
export class Ui5Label extends Ui5Control{
        _label = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() design = 'Standard';
@bindable() text = null;
@bindable() textAlign = 'Begin';
@bindable() textDirection = 'Inherit';
@bindable() width = '';
@bindable() required = false;
@bindable() displayOnly = false;
@bindable() wrapping = false;
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
        @computedFrom('_label')
        get UIElement() {
            return this._label;
          }
        fillProperties(params){
               params.design = this.design;
params.text = this.text;
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.width = this.width;
params.required = getBooleanFromAttributeValue(this.required);
params.displayOnly = getBooleanFromAttributeValue(this.displayOnly);
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._label = new sap.m.Label(this.ui5Id, params);
        else
          this._label = new sap.m.Label(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._label.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._label, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._label, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._label, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._label.placeAt)
                                                                this._label.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._label.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._label, this._relation);
                                                            }
         else{
                                                                this._label.destroy();
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
    designChanged(newValue){if(this._label!==null){ this._label.setDesign(newValue);}}
textChanged(newValue){if(this._label!==null){ this._label.setText(newValue);}}
textAlignChanged(newValue){if(this._label!==null){ this._label.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._label!==null){ this._label.setTextDirection(newValue);}}
widthChanged(newValue){if(this._label!==null){ this._label.setWidth(newValue);}}
requiredChanged(newValue){if(this._label!==null){ this._label.setRequired(getBooleanFromAttributeValue(newValue));}}
displayOnlyChanged(newValue){if(this._label!==null){ this._label.setDisplayOnly(getBooleanFromAttributeValue(newValue));}}
wrappingChanged(newValue){if(this._label!==null){ this._label.setWrapping(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._label!==null){ this._label.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._label!==null){ this._label.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._label!==null){ this._label.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._label!==null){ this._label.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._label!==null){ this._label.attachValidateFieldGroup(newValue);}}


                                                                                }