import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-segmented-button')
@inject(Element)
export class Ui5SegmentedButton extends Ui5Control{
        _segmentedbutton = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() enabled = true;
@bindable() selectedKey = '';
@bindable() select = this.defaultFunc;
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
        @computedFrom('_segmentedbutton')
        get UIElement() {
            return this._segmentedbutton;
          }
        fillProperties(params){
               params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.selectedKey = this.selectedKey;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._segmentedbutton = new sap.m.SegmentedButton(this.ui5Id, params);
        else
          this._segmentedbutton = new sap.m.SegmentedButton(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._segmentedbutton.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._segmentedbutton, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._segmentedbutton, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._segmentedbutton, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._segmentedbutton.placeAt)
                                                                this._segmentedbutton.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._segmentedbutton.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._segmentedbutton, this._relation);
                                                            }
         else{
                                                                this._segmentedbutton.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'buttons') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfButton(afterElement); if (_index)this._segmentedbutton.insertButton(child, _index + 1); else this._segmentedbutton.addButton(child, 0);  return elem.localName; }
if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._segmentedbutton.indexOfItem(afterElement); if (_index)this._segmentedbutton.insertItem(child, _index + 1); else this._segmentedbutton.addItem(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'buttons') {  this._segmentedbutton.removeButton(child); }
if (relation == 'items') {  this._segmentedbutton.removeItem(child); }

                                                                            }
    widthChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setWidth(newValue);}}
enabledChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setEnabled(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setSelectedKey(newValue);}}
selectChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachSelect(newValue);}}
busyChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._segmentedbutton!==null){ this._segmentedbutton.attachValidateFieldGroup(newValue);}}


                                                                                }