import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Item} from '../item/item';
@customElement('ui5-segmented-button-item')
@inject(Element)
export class Ui5SegmentedButtonItem extends Ui5Item{
        _segmentedbuttonitem = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() icon = null;
@bindable() visible = true;
@bindable() width = null;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_segmentedbuttonitem')
        get UIElement() {
            return this._segmentedbuttonitem;
          }
        fillProperties(params){
                                        params.icon = this.icon;
params.visible = getBooleanFromAttributeValue(this.visible);
params.width = this.width;
params.press = this.press==null ? this.defaultFunc: this.press;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._segmentedbuttonitem = new sap.m.SegmentedButtonItem(this.ui5Id, params);
                                              else
          this._segmentedbuttonitem = new sap.m.SegmentedButtonItem(params);
                                                  if(this.ui5Class)
           this._segmentedbuttonitem.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._segmentedbuttonitem.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._segmentedbuttonitem.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._segmentedbuttonitem, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._segmentedbuttonitem.placeAt)
                                                                this._segmentedbuttonitem.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._segmentedbuttonitem.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._segmentedbuttonitem)
                                                                this._parent.removeChildByRelation(this._segmentedbuttonitem, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._segmentedbuttonitem.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._segmentedbuttonitem.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._segmentedbuttonitem.insertCustomData(child, _index); else this._segmentedbuttonitem.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._segmentedbuttonitem.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._segmentedbuttonitem.insertDependent(child, _index); else this._segmentedbuttonitem.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._segmentedbuttonitem.insertDragDropConfig(child, _index); else this._segmentedbuttonitem.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._segmentedbuttonitem.destroyTooltip(child); }
if (relation == 'customdata') {  this._segmentedbuttonitem.removeCustomData(child);}
if (relation == 'layoutdata') {  this._segmentedbuttonitem.destroyLayoutData(child); }
if (relation == 'dependents') {  this._segmentedbuttonitem.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._segmentedbuttonitem.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setIcon(newValue);}}
visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setVisible(getBooleanFromAttributeValue(newValue));}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setWidth(newValue);}}
pressChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachPress(newValue);}}
textChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setText(newValue);}}
enabledChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setTextDirection(newValue);}}
keyChanged(newValue){if(this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._segmentedbuttonitem!==null){ this._segmentedbuttonitem.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }