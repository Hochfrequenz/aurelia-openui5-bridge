import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-text')
@inject(Element)
export class Ui5Text extends Ui5Control{
        _text = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = '';
@bindable() textDirection = 'Inherit';
@bindable() wrapping = true;
@bindable() textAlign = 'Begin';
@bindable() width = null;
@bindable() maxLines = null;
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
        @computedFrom('_text')
        get UIElement() {
            return this._text;
          }
        fillProperties(params){
               params.text = this.text;
params.textDirection = this.textDirection;
params.wrapping = getBooleanFromAttributeValue(this.wrapping);
params.textAlign = this.textAlign;
params.width = this.width;
params.maxLines = this.maxLines?parseInt(this.maxLines):0;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._text = new sap.m.Text(this.ui5Id, params);
        else
          this._text = new sap.m.Text(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._text.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._text, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._text, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._text, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._text.placeAt)
                                                                this._text.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._text.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._text, this._relation);
                                                            }
         else{
                                                                this._text.destroy();
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
    textChanged(newValue){if(this._text!==null){ this._text.setText(newValue);}}
textDirectionChanged(newValue){if(this._text!==null){ this._text.setTextDirection(newValue);}}
wrappingChanged(newValue){if(this._text!==null){ this._text.setWrapping(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._text!==null){ this._text.setTextAlign(newValue);}}
widthChanged(newValue){if(this._text!==null){ this._text.setWidth(newValue);}}
maxLinesChanged(newValue){if(this._text!==null){ this._text.setMaxLines(newValue);}}
busyChanged(newValue){if(this._text!==null){ this._text.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._text!==null){ this._text.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._text!==null){ this._text.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._text!==null){ this._text.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._text!==null){ this._text.attachValidateFieldGroup(newValue);}}


                                                                                }