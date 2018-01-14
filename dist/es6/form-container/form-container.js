import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-form-container')
@inject(Element)
export class Ui5FormContainer extends Ui5Element{
        _formcontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() expanded = true;
@bindable() expandable = false;
@bindable() visible = true;

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_formcontainer')
        get UIElement() {
            return this._formcontainer;
          }
        fillProperties(params){
               params.expanded = getBooleanFromAttributeValue(this.expanded);
params.expandable = getBooleanFromAttributeValue(this.expandable);
params.visible = getBooleanFromAttributeValue(this.visible);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._formcontainer = new sap.ui.layout.form.FormContainer(this.ui5Id, params);
        else
          this._formcontainer = new sap.ui.layout.form.FormContainer(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._formcontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._formcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._formcontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._formcontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._formcontainer.placeAt)
                                                                this._formcontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._formcontainer.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._formcontainer, this._relation);
                                                            }
         else{
                                                                this._formcontainer.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'formElements') { var _index = null; if (afterElement) _index = this._formcontainer.indexOfFormElement(afterElement); if (_index)this._formcontainer.insertFormElement(child, _index + 1); else this._formcontainer.addFormElement(child, 0);  return elem.localName; }
if (elem.localName == 'title') { this._formcontainer.setTitle(child); return elem.localName;}
if (elem.localName == 'toolbar') { this._formcontainer.setToolbar(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'formElements') {  this._formcontainer.removeFormElement(child); }

                                                                            }
    expandedChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.setExpanded(getBooleanFromAttributeValue(newValue));}}
expandableChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.setExpandable(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._formcontainer!==null){ this._formcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}


                                                                                }