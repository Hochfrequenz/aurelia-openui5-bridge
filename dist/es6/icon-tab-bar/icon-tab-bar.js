import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-icon-tab-bar')
@inject(Element)
export class Ui5IconTabBar extends Ui5Control{
        _icontabbar = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() showSelection = true;
@bindable() expandable = true;
@bindable() expanded = true;
@bindable() selectedKey = null;
@bindable() upperCase = false;
@bindable() stretchContentHeight = false;
@bindable() applyContentPadding = true;
@bindable() backgroundDesign = 'Solid';
@bindable() headerMode = 'Standard';
@bindable() showOverflowSelectList = false;
@bindable() headerBackgroundDesign = 'Solid';
@bindable() enableTabReordering = false;
@bindable() select = this.defaultFunc;
@bindable() expand = this.defaultFunc;
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
        @computedFrom('_icontabbar')
        get UIElement() {
            return this._icontabbar;
          }
        fillProperties(params){
               params.showSelection = getBooleanFromAttributeValue(this.showSelection);
params.expandable = getBooleanFromAttributeValue(this.expandable);
params.expanded = getBooleanFromAttributeValue(this.expanded);
params.selectedKey = this.selectedKey;
params.upperCase = getBooleanFromAttributeValue(this.upperCase);
params.stretchContentHeight = getBooleanFromAttributeValue(this.stretchContentHeight);
params.applyContentPadding = getBooleanFromAttributeValue(this.applyContentPadding);
params.backgroundDesign = this.backgroundDesign;
params.headerMode = this.headerMode;
params.showOverflowSelectList = getBooleanFromAttributeValue(this.showOverflowSelectList);
params.headerBackgroundDesign = this.headerBackgroundDesign;
params.enableTabReordering = getBooleanFromAttributeValue(this.enableTabReordering);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._icontabbar = new sap.m.IconTabBar(this.ui5Id, params);
        else
          this._icontabbar = new sap.m.IconTabBar(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._icontabbar.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._icontabbar, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._icontabbar, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._icontabbar, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._icontabbar.placeAt)
                                                                this._icontabbar.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._icontabbar.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._icontabbar, this._relation);
                                                            }
         else{
                                                                this._icontabbar.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'items') { var _index = null; if (afterElement) _index = this._icontabbar.indexOfItem(afterElement); if (_index)this._icontabbar.insertItem(child, _index + 1); else this._icontabbar.addItem(child, 0);  return elem.localName; }
if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._icontabbar.indexOfContent(afterElement); if (_index)this._icontabbar.insertContent(child, _index + 1); else this._icontabbar.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'items') {  this._icontabbar.removeItem(child); }
if (relation == 'content') {  this._icontabbar.removeContent(child); }

                                                                            }
    showSelectionChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setShowSelection(getBooleanFromAttributeValue(newValue));}}
expandableChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setExpandable(getBooleanFromAttributeValue(newValue));}}
expandedChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setExpanded(getBooleanFromAttributeValue(newValue));}}
selectedKeyChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setSelectedKey(newValue);}}
upperCaseChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setUpperCase(getBooleanFromAttributeValue(newValue));}}
stretchContentHeightChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setStretchContentHeight(getBooleanFromAttributeValue(newValue));}}
applyContentPaddingChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setApplyContentPadding(getBooleanFromAttributeValue(newValue));}}
backgroundDesignChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBackgroundDesign(newValue);}}
headerModeChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setHeaderMode(newValue);}}
showOverflowSelectListChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));}}
headerBackgroundDesignChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setHeaderBackgroundDesign(newValue);}}
enableTabReorderingChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setEnableTabReordering(getBooleanFromAttributeValue(newValue));}}
selectChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachSelect(newValue);}}
expandChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachExpand(newValue);}}
busyChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._icontabbar!==null){ this._icontabbar.attachValidateFieldGroup(newValue);}}


                                                                                }