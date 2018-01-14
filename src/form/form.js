import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-form')
@inject(Element)
export class Ui5Form extends Ui5Control{
        _form = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() width = null;
@bindable() editable = false;
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
        @computedFrom('_form')
        get UIElement() {
            return this._form;
          }
        fillProperties(params){
               params.width = this.width;
params.editable = getBooleanFromAttributeValue(this.editable);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._form = new sap.ui.layout.form.Form(this.ui5Id, params);
        else
          this._form = new sap.ui.layout.form.Form(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._form.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._form, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._form, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._form, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._form.placeAt)
                                                                this._form.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._form.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._form, this._relation);
                                                            }
         else{
                                                                this._form.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'formContainers') { var _index = null; if (afterElement) _index = this._form.indexOfFormContainer(afterElement); if (_index)this._form.insertFormContainer(child, _index + 1); else this._form.addFormContainer(child, 0);  return elem.localName; }
if (elem.localName == 'title') { this._form.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._form.setToolbar(child); return elem.localName;}
if (elem.localName == 'layout') { this._form.setLayout(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'formContainers') {  this._form.removeFormContainer(child); }

                                                                            }
    widthChanged(newValue){if(this._form!==null){ this._form.setWidth(newValue);}}
editableChanged(newValue){if(this._form!==null){ this._form.setEditable(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._form!==null){ this._form.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._form!==null){ this._form.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._form!==null){ this._form.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._form!==null){ this._form.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._form!==null){ this._form.attachValidateFieldGroup(newValue);}}


                                                                                }