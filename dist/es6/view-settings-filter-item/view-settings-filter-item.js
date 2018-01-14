import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5ViewSettingsItem} from '../view-settings-item/view-settings-item';
@customElement('ui5-view-settings-filter-item')
@inject(Element)
export class Ui5ViewSettingsFilterItem extends Ui5ViewSettingsItem{
        _viewsettingsfilteritem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() multiSelect = true;
@bindable() filterDetailItemsAggregationChange = this.defaultFunc;
/* inherited from sap.m.ViewSettingsItem*/
@bindable() selected = false;
@bindable() itemPropertyChanged = this.defaultFunc;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_viewsettingsfilteritem')
        get UIElement() {
            return this._viewsettingsfilteritem;
          }
        fillProperties(params){
               params.multiSelect = getBooleanFromAttributeValue(this.multiSelect);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(this.ui5Id, params);
        else
          this._viewsettingsfilteritem = new sap.m.ViewSettingsFilterItem(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._viewsettingsfilteritem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._viewsettingsfilteritem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._viewsettingsfilteritem.placeAt)
                                                                this._viewsettingsfilteritem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._viewsettingsfilteritem.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._viewsettingsfilteritem, this._relation);
                                                            }
         else{
                                                                this._viewsettingsfilteritem.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._viewsettingsfilteritem.indexOfItem(afterElement); if (_index)this._viewsettingsfilteritem.insertItem(child, _index + 1); else this._viewsettingsfilteritem.addItem(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._viewsettingsfilteritem.removeItem(child); }

                                                                            }
    multiSelectChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setMultiSelect(getBooleanFromAttributeValue(newValue));}}
filterDetailItemsAggregationChangeChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachFilterDetailItemsAggregationChange(newValue);}}
selectedChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setSelected(getBooleanFromAttributeValue(newValue));}}
/* inherited from sap.m.ViewSettingsItem*/
itemPropertyChangedChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.attachItemPropertyChanged(newValue);}}
textChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setText(newValue);}}
enabledChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._viewsettingsfilteritem!==null){ this._viewsettingsfilteritem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/


                                                                                }