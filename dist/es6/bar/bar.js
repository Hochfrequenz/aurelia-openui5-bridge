import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-bar')
@inject(Element)
export class Ui5Bar extends Ui5Control{
        _bar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() enableFlexBox = false;
@bindable() translucent = false;
@bindable() design = 'Auto';
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
        @computedFrom('_bar')
        get UIElement() {
            return this._bar;
          }
        fillProperties(params){
               params.enableFlexBox = getBooleanFromAttributeValue(this.enableFlexBox);
params.translucent = getBooleanFromAttributeValue(this.translucent);
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
          this._bar = new sap.m.Bar(this.ui5Id, params);
        else
          this._bar = new sap.m.Bar(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._bar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._bar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._bar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._bar.placeAt)
                                                                this._bar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._bar.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._bar, this._relation);
                                                            }
         else{
                                                                this._bar.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'contentLeft') { var _index = null; if (afterElement) _index = this._bar.indexOfContentLeft(afterElement); if (_index)this._bar.insertContentLeft(child, _index + 1); else this._bar.addContentLeft(child, 0);  return elem.localName; }
if (elem.localName == 'contentMiddle') { var _index = null; if (afterElement) _index = this._bar.indexOfContentMiddle(afterElement); if (_index)this._bar.insertContentMiddle(child, _index + 1); else this._bar.addContentMiddle(child, 0);  return elem.localName; }
if (elem.localName == 'contentRight') { var _index = null; if (afterElement) _index = this._bar.indexOfContentRight(afterElement); if (_index)this._bar.insertContentRight(child, _index + 1); else this._bar.addContentRight(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'contentLeft') {  this._bar.removeContentLeft(child); }
if (relation == 'contentMiddle') {  this._bar.removeContentMiddle(child); }
if (relation == 'contentRight') {  this._bar.removeContentRight(child); }

                                                                            }
    enableFlexBoxChanged(newValue){if(this._bar!==null){ this._bar.setEnableFlexBox(getBooleanFromAttributeValue(newValue));}}
translucentChanged(newValue){if(this._bar!==null){ this._bar.setTranslucent(getBooleanFromAttributeValue(newValue));}}
designChanged(newValue){if(this._bar!==null){ this._bar.setDesign(newValue);}}
busyChanged(newValue){if(this._bar!==null){ this._bar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._bar!==null){ this._bar.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._bar!==null){ this._bar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._bar!==null){ this._bar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._bar!==null){ this._bar.attachValidateFieldGroup(newValue);}}


                                                                                }