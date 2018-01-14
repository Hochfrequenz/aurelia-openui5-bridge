import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-m-title')
@inject(Element)
export class Ui5mTitle extends Ui5Control{
        _mtitle = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() text = null;
@bindable() level = 'Auto';
@bindable() titleStyle = 'Auto';
@bindable() width = null;
@bindable() textAlign = 'Initial';
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
        @computedFrom('_mtitle')
        get UIElement() {
            return this._mtitle;
          }
        fillProperties(params){
               params.text = this.text;
params.level = this.level;
params.titleStyle = this.titleStyle;
params.width = this.width;
params.textAlign = this.textAlign;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._mtitle = new sap.m.Title(this.ui5Id, params);
        else
          this._mtitle = new sap.m.Title(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._mtitle.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._mtitle, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._mtitle, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._mtitle, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._mtitle.placeAt)
                                                                this._mtitle.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._mtitle.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._mtitle, this._relation);
                                                            }
         else{
                                                                this._mtitle.destroy();
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
    textChanged(newValue){if(this._mtitle!==null){ this._mtitle.setText(newValue);}}
levelChanged(newValue){if(this._mtitle!==null){ this._mtitle.setLevel(newValue);}}
titleStyleChanged(newValue){if(this._mtitle!==null){ this._mtitle.setTitleStyle(newValue);}}
widthChanged(newValue){if(this._mtitle!==null){ this._mtitle.setWidth(newValue);}}
textAlignChanged(newValue){if(this._mtitle!==null){ this._mtitle.setTextAlign(newValue);}}
busyChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._mtitle!==null){ this._mtitle.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._mtitle!==null){ this._mtitle.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._mtitle!==null){ this._mtitle.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._mtitle!==null){ this._mtitle.attachValidateFieldGroup(newValue);}}


                                                                                }