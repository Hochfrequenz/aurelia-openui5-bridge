import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ManagedObject} from '../managed-object/managed-object';
@customElement('ui5-element')
@inject(Element)
export class Ui5Element extends Ui5ManagedObject{
        _element = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        
                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_element')
        get UIElement() {
            return this._element;
          }
        fillProperties(params){
                           
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._element = new sap.ui.core.Element(this.ui5Id, params);
        else
          this._element = new sap.ui.core.Element(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._element.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._element, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._element, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._element, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._element.placeAt)
                                                                this._element.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._element.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._element, this._relation);
                                                            }
         else{
                                                                this._element.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'tooltip') { this._element.setTooltip(child); return elem.localName;}
if (elem.localName == 'customData') { var _index = null; if (afterElement) _index = this._element.indexOfCustomData(afterElement); if (_index)this._element.insertCustomData(child, _index + 1); else this._element.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutData') { this._element.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._element.indexOfDependent(afterElement); if (_index)this._element.insertDependent(child, _index + 1); else this._element.addDependent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'customData') {  this._element.removeCustomData(child); }
if (relation == 'dependents') {  this._element.removeDependent(child); }

                                                                            }
    

                                                                                }