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
        @bindable() name = '';
@bindable() enabled = true;
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
@bindable() change = this.defaultFunc;
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
        @computedFrom('_select')
        get UIElement() {
            return this._select;
          }
        fillProperties(params){
               params.name = this.name;
params.enabled = getBooleanFromAttributeValue(this.enabled);
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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._select = new sap.m.Select(this.ui5Id, params);
        else
          this._select = new sap.m.Select(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._select.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._select, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._select, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._select, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._select.placeAt)
                                                                this._select.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._select.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._select, this._relation);
                                                            }
         else{
                                                                this._select.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._select.indexOfItem(afterElement); if (_index)this._select.insertItem(child, _index + 1); else this._select.addItem(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._select.removeItem(child); }

                                                                            }
    nameChanged(newValue){if(this._select!==null){ this._select.setName(newValue);}}
enabledChanged(newValue){if(this._select!==null){ this._select.setEnabled(getBooleanFromAttributeValue(newValue));}}
widthChanged(newValue){if(this._select!==null){ this._select.setWidth(newValue);}}
maxWidthChanged(newValue){if(this._select!==null){ this._select.setMaxWidth(newValue);}}
selectedKeyChanged(newValue){if(this._select!==null){ this._select.setSelectedKey(newValue);}}
selectedItemIdChanged(newValue){if(this._select!==null){ this._select.setSelectedItemId(newValue);}}
iconChanged(newValue){if(this._select!==null){ this._select.setIcon(newValue);}}
typeChanged(newValue){if(this._select!==null){ this._select.setType(newValue);}}
autoAdjustWidthChanged(newValue){if(this._select!==null){ this._select.setAutoAdjustWidth(getBooleanFromAttributeValue(newValue));}}
textAlignChanged(newValue){if(this._select!==null){ this._select.setTextAlign(newValue);}}
textDirectionChanged(newValue){if(this._select!==null){ this._select.setTextDirection(newValue);}}
valueStateChanged(newValue){if(this._select!==null){ this._select.setValueState(newValue);}}
valueStateTextChanged(newValue){if(this._select!==null){ this._select.setValueStateText(newValue);}}
showSecondaryValuesChanged(newValue){if(this._select!==null){ this._select.setShowSecondaryValues(getBooleanFromAttributeValue(newValue));}}
forceSelectionChanged(newValue){if(this._select!==null){ this._select.setForceSelection(getBooleanFromAttributeValue(newValue));}}
changeChanged(newValue){if(this._select!==null){ this._select.attachChange(newValue);}}
busyChanged(newValue){if(this._select!==null){ this._select.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._select!==null){ this._select.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._select!==null){ this._select.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._select!==null){ this._select.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._select!==null){ this._select.attachValidateFieldGroup(newValue);}}


                                                                                }