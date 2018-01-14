import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Element} from '../element/element';
@customElement('ui5-tab-container-item')
@inject(Element)
export class Ui5TabContainerItem extends Ui5Element{
        _tabcontaineritem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() name = '';
@bindable() key = null;
@bindable() modified = false;
@bindable() itemPropertyChanged = this.defaultFunc;

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_tabcontaineritem')
        get UIElement() {
            return this._tabcontaineritem;
          }
        fillProperties(params){
               params.name = this.name;
params.key = this.key;
params.modified = getBooleanFromAttributeValue(this.modified);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._tabcontaineritem = new sap.m.TabContainerItem(this.ui5Id, params);
        else
          this._tabcontaineritem = new sap.m.TabContainerItem(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontaineritem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tabcontaineritem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tabcontaineritem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tabcontaineritem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tabcontaineritem.placeAt)
                                                                this._tabcontaineritem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tabcontaineritem.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tabcontaineritem, this._relation);
                                                            }
         else{
                                                                this._tabcontaineritem.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._tabcontaineritem.indexOfContent(afterElement); if (_index)this._tabcontaineritem.insertContent(child, _index + 1); else this._tabcontaineritem.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._tabcontaineritem.removeContent(child); }

                                                                            }
    nameChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.setName(newValue);}}
keyChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.setKey(newValue);}}
modifiedChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.setModified(getBooleanFromAttributeValue(newValue));}}
itemPropertyChangedChanged(newValue){if(this._tabcontaineritem!==null){ this._tabcontaineritem.attachItemPropertyChanged(newValue);}}


                                                                                }