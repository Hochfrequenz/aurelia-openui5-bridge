import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-tab-container')
@inject(Element)
export class Ui5TabContainer extends Ui5Control{
        _tabcontainer = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() showAddNewButton = false;
@bindable() itemClose = this.defaultFunc;
@bindable() itemSelect = this.defaultFunc;
@bindable() addNewButtonPress = this.defaultFunc;
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
        @computedFrom('_tabcontainer')
        get UIElement() {
            return this._tabcontainer;
          }
        fillProperties(params){
               params.showAddNewButton = getBooleanFromAttributeValue(this.showAddNewButton);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._tabcontainer = new sap.m.TabContainer(this.ui5Id, params);
        else
          this._tabcontainer = new sap.m.TabContainer(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._tabcontainer.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._tabcontainer, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._tabcontainer, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._tabcontainer.placeAt)
                                                                this._tabcontainer.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._tabcontainer.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._tabcontainer, this._relation);
                                                            }
         else{
                                                                this._tabcontainer.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._tabcontainer.indexOfItem(afterElement); if (_index)this._tabcontainer.insertItem(child, _index + 1); else this._tabcontainer.addItem(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._tabcontainer.removeItem(child); }

                                                                            }
    showAddNewButtonChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setShowAddNewButton(getBooleanFromAttributeValue(newValue));}}
itemCloseChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachItemClose(newValue);}}
itemSelectChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachItemSelect(newValue);}}
addNewButtonPressChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachAddNewButtonPress(newValue);}}
busyChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._tabcontainer!==null){ this._tabcontainer.attachValidateFieldGroup(newValue);}}


                                                                                }