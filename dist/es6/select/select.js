import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-select')
@inject(Element)
export class Ui5Select extends Ui5Control{
        _select = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() name = '';
@bindable() enabled = true;
@bindable() editable = true;
@bindable() width = 'auto';
@bindable() maxWidth = '100%';
@bindable() selectedKey = '';
@bindable() selectedItemId = '';
@bindable() icon = '';
@bindable() type = 'Default';
@bindable() autoAdjustWidth = false;
@bindable() textAlign = 'Initial';
@bindable() textDirection = 'Inherit';
@bindable() valueState = 'None';
@bindable() valueStateText = '';
@bindable() showSecondaryValues = false;
@bindable() forceSelection = true;
@bindable() wrapItemsText = false;
@bindable() change = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
@bindable() busyIndicatorSize = 'Medium';
@bindable() visible = true;
@bindable() fieldGroupIds = '[]';
@bindable() validateFieldGroup = this.defaultFunc;
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
        @computedFrom('_select')
        get UIElement() {
            return this._select;
          }
        fillProperties(params){
                                        params.name = this.name;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.editable = getBooleanFromAttributeValue(this.editable);
params.width = this.width;
params.maxWidth = this.maxWidth;
params.selectedKey = this.selectedKey;
params.selectedItemId = this.selectedItemId;
params.icon = this.icon;
params.type = this.type;
params.autoAdjustWidth = getBooleanFromAttributeValue(this.autoAdjustWidth);
params.textAlign = this.textAlign;
params.textDirection = this.textDirection;
params.valueState = this.valueState;
params.valueStateText = this.valueStateText;
params.showSecondaryValues = getBooleanFromAttributeValue(this.showSecondaryValues);
params.forceSelection = getBooleanFromAttributeValue(this.forceSelection);
params.wrapItemsText = getBooleanFromAttributeValue(this.wrapItemsText);
params.change = this.change==null ? this.defaultFunc: this.change;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._select = new sap.m.Select(this.ui5Id, params);
                                              else
          this._select = new sap.m.Select(params);
                                                  if(this.ui5Class)
           this._select.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._select.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._select.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._select, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._select, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._select.placeAt)
                                                                this._select.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._select.attachChange((event) => { that.selectedItem = event.mParameters.selectedItem;   if (event.mParameters.selectedItem)  that.selectedKey = event.mParameters.selectedItem.mProperties.key;  else    that.selectedKey = null;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._select.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._select)
                                                                this._parent.removeChildByRelation(this._select, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._select.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'items') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._select.insertItem(child, _index); else this._select.addItem(child, 0);  var oldVal = this.selectedKey; this.selectedKey = null; this.selectedKey = oldVal; return elem.localName; }
if (elem.localName == 'tooltip') { this._select.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._select.insertCustomData(child, _index); else this._select.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._select.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._select.insertDependent(child, _index); else this._select.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._select.insertDragDropConfig(child, _index); else this._select.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'items') {  this._select.removeItem(child);  var oldVal = this.selectedKey; this.selectedKey = null; this.selectedKey = oldVal;}
if (relation == 'tooltip') {  this._select.destroyTooltip(child); }
if (relation == 'customdata') {  this._select.removeCustomData(child);}
if (relation == 'layoutdata') {  this._select.destroyLayoutData(child); }
if (relation == 'dependents') {  this._select.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._select.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    nameChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setName(newValue);}}
enabledChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setEnabled(getBooleanFromAttributeValue(newValue));}}
editableChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setEditable(getBooleanFromAttributeValue(newValue));}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setWidth(newValue);}}
maxWidthChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setMaxWidth(newValue);}}
selectedKeyChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setSelectedKey(newValue);}}
selectedItemIdChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setSelectedItemId(newValue);}}
iconChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setIcon(newValue);}}
typeChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setType(newValue);}}
autoAdjustWidthChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setAutoAdjustWidth(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setTextDirection(newValue);}}
valueStateChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setValueState(newValue);}}
valueStateTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setValueStateText(newValue);}}
showSecondaryValuesChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setShowSecondaryValues(getBooleanFromAttributeValue(newValue));}}
forceSelectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setForceSelection(getBooleanFromAttributeValue(newValue));}}
wrapItemsTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.setWrapItemsText(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachChange(newValue);}}
busyChanged(newValue){if(this._select!==null){ this._select.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._select!==null){ this._select.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._select!==null){ this._select.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._select!==null){ this._select.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._select!==null){ this._select.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._select!==null){ this._select.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }