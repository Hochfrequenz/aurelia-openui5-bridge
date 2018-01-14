import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item} from '../item/item';
@customElement('ui5-icon-tab-filter')
@inject(Element)
export class Ui5IconTabFilter extends Ui5Item{
        _icontabfilter = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() count = '';
@bindable() showAll = false;
@bindable() icon = '';
@bindable() iconColor = 'Default';
@bindable() iconDensityAware = true;
@bindable() visible = true;
@bindable() design = 'Vertical';
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
        @computedFrom('_icontabfilter')
        get UIElement() {
            return this._icontabfilter;
          }
        fillProperties(params){
               params.count = this.count;
params.showAll = getBooleanFromAttributeValue(this.showAll);
params.icon = this.icon;
params.iconColor = this.iconColor;
params.iconDensityAware = getBooleanFromAttributeValue(this.iconDensityAware);
params.visible = getBooleanFromAttributeValue(this.visible);
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
          this._icontabfilter = new sap.m.IconTabFilter(this.ui5Id, params);
        else
          this._icontabfilter = new sap.m.IconTabFilter(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icontabfilter.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._icontabfilter, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._icontabfilter, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._icontabfilter, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icontabfilter.placeAt)
                                                                this._icontabfilter.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icontabfilter.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._icontabfilter, this._relation);
                                                            }
         else{
                                                                this._icontabfilter.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._icontabfilter.indexOfContent(afterElement); if (_index)this._icontabfilter.insertContent(child, _index + 1); else this._icontabfilter.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._icontabfilter.removeContent(child); }

                                                                            }
    countChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setCount(newValue);}}
showAllChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setShowAll(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setIcon(newValue);}}
iconColorChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setIconColor(newValue);}}
iconDensityAwareChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setVisible(getBooleanFromAttributeValue(newValue));}}
designChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setDesign(newValue);}}
textChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setText(newValue);}}
enabledChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setTextDirection(newValue);}}
keyChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/


                                                                                }