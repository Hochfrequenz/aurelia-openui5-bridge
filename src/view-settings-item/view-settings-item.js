import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item} from '../item/item';
@customElement('ui5-view-settings-item')
@inject(Element)
export class Ui5ViewSettingsItem extends Ui5Item{
        _viewsettingsitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() selected = false;
@bindable() itemPropertyChanged = this.defaultFunc;
/* inherited from sap.ui.core.Item*/
@bindable() text = '';
@bindable() enabled = true;
@bindable() textDirection = 'Inherit';
@bindable() key = null;
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
@bindable() validationSuccess = this.defaultFunc;
@bindable() validationError = this.defaultFunc;
@bindable() parseError = this.defaultFunc;
@bindable() formatError = this.defaultFunc;
@bindable() modelContextChange = this.defaultFunc;
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/

                constructor(element) {
                    super(element);                    
                this.element = element;
            this.attributeManager = new AttributeManager(this.element);
        }
        @computedFrom('_viewsettingsitem')
        get UIElement() {
            return this._viewsettingsitem;
          }
        fillProperties(params){
               params.selected = getBooleanFromAttributeValue(this.selected);
params.itemPropertyChanged = this.itemPropertyChanged==null ? this.defaultFunc: this.itemPropertyChanged;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._viewsettingsitem = new sap.m.ViewSettingsItem(this.ui5Id, params);
        else
          this._viewsettingsitem = new sap.m.ViewSettingsItem(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._viewsettingsitem.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._viewsettingsitem, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._viewsettingsitem, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._viewsettingsitem, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._viewsettingsitem.placeAt)
                                                                this._viewsettingsitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._viewsettingsitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._viewsettingsitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._viewsettingsitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._viewsettingsitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._viewsettingsitem.indexOfCustomData(afterElement); if (_index)this._viewsettingsitem.insertCustomData(child, _index + 1); else this._viewsettingsitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._viewsettingsitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._viewsettingsitem.indexOfDependent(afterElement); if (_index)this._viewsettingsitem.insertDependent(child, _index + 1); else this._viewsettingsitem.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._viewsettingsitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._viewsettingsitem.removeCustomData(child);}
if (relation == 'layoutData') {  this._viewsettingsitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._viewsettingsitem.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    selectedChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setSelected(getBooleanFromAttributeValue(newValue));}}
itemPropertyChangedChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachItemPropertyChanged(newValue);}}
textChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setText(newValue);}}
enabledChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._viewsettingsitem!==null){ this._viewsettingsitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }