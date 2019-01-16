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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
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
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._icontabfilter = new sap.m.IconTabFilter(this.ui5Id, params);
                                              else
          this._icontabfilter = new sap.m.IconTabFilter(params);
                                                  if(this.ui5Class)
           this._icontabfilter.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._icontabfilter.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icontabfilter.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._icontabfilter, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._icontabfilter, this.element, this.prevId);
        
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
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._icontabfilter)
                                                                this._parent.removeChildByRelation(this._icontabfilter, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._icontabfilter.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabfilter.insertContent(child, _index); else this._icontabfilter.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._icontabfilter.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabfilter.insertCustomData(child, _index); else this._icontabfilter.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._icontabfilter.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabfilter.insertDependent(child, _index); else this._icontabfilter.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._icontabfilter.insertDragDropConfig(child, _index); else this._icontabfilter.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._icontabfilter.removeContent(child);}
if (relation == 'tooltip') {  this._icontabfilter.destroyTooltip(child); }
if (relation == 'customdata') {  this._icontabfilter.removeCustomData(child);}
if (relation == 'layoutdata') {  this._icontabfilter.destroyLayoutData(child); }
if (relation == 'dependents') {  this._icontabfilter.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._icontabfilter.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    countChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setCount(newValue);}}
showAllChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setShowAll(getBooleanFromAttributeValue(newValue));}}
iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setIcon(newValue);}}
iconColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setIconColor(newValue);}}
iconDensityAwareChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setIconDensityAware(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setVisible(getBooleanFromAttributeValue(newValue));}}
designChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.setDesign(newValue);}}
textChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setText(newValue);}}
enabledChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setEnabled(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setTextDirection(newValue);}}
keyChanged(newValue){if(this._icontabfilter!==null){ this._icontabfilter.setKey(newValue);}}
/* inherited from sap.ui.core.Item*/
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._icontabfilter!==null){ this._icontabfilter.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }