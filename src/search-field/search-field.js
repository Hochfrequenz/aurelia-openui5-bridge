import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-search-field')
@inject(Element)
export class Ui5SearchField extends Ui5Control{
        _searchfield = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() visible = true;
@bindable() maxLength = 0;
@bindable() placeholder = null;
@bindable() showMagnifier = true;
@bindable() showRefreshButton = false;
@bindable() refreshButtonTooltip = null;
@bindable() showSearchButton = true;
@bindable() enableSuggestions = false;
@bindable() selectOnFocus = true;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() suggest = this.defaultFunc;
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
        @computedFrom('_searchfield')
        get UIElement() {
            return this._searchfield;
          }
        fillProperties(params){
               params.value = this.value;
params.width = this.width;
params.enabled = getBooleanFromAttributeValue(this.enabled);
params.visible = getBooleanFromAttributeValue(this.visible);
params.maxLength = this.maxLength?parseInt(this.maxLength):0;
params.placeholder = this.placeholder;
params.showMagnifier = getBooleanFromAttributeValue(this.showMagnifier);
params.showRefreshButton = getBooleanFromAttributeValue(this.showRefreshButton);
params.refreshButtonTooltip = this.refreshButtonTooltip;
params.showSearchButton = getBooleanFromAttributeValue(this.showSearchButton);
params.enableSuggestions = getBooleanFromAttributeValue(this.enableSuggestions);
params.selectOnFocus = getBooleanFromAttributeValue(this.selectOnFocus);
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._searchfield = new sap.m.SearchField(this.ui5Id, params);
        else
          this._searchfield = new sap.m.SearchField(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._searchfield.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._searchfield, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._searchfield, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._searchfield, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._searchfield.placeAt)
                                                                this._searchfield.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._searchfield.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._searchfield, this._relation);
                                                            }
         else{
                                                                this._searchfield.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'suggestionItems') { var _index = null; if (afterElement) _index = this._searchfield.indexOfSuggestionItem(afterElement); if (_index)this._searchfield.insertSuggestionItem(child, _index + 1); else this._searchfield.addSuggestionItem(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'suggestionItems') {  this._searchfield.removeSuggestionItem(child); }

                                                                            }
    valueChanged(newValue){if(this._searchfield!==null){ this._searchfield.setValue(newValue);}}
widthChanged(newValue){if(this._searchfield!==null){ this._searchfield.setWidth(newValue);}}
enabledChanged(newValue){if(this._searchfield!==null){ this._searchfield.setEnabled(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._searchfield!==null){ this._searchfield.setVisible(getBooleanFromAttributeValue(newValue));}}
maxLengthChanged(newValue){if(this._searchfield!==null){ this._searchfield.setMaxLength(newValue);}}
placeholderChanged(newValue){if(this._searchfield!==null){ this._searchfield.setPlaceholder(newValue);}}
showMagnifierChanged(newValue){if(this._searchfield!==null){ this._searchfield.setShowMagnifier(getBooleanFromAttributeValue(newValue));}}
showRefreshButtonChanged(newValue){if(this._searchfield!==null){ this._searchfield.setShowRefreshButton(getBooleanFromAttributeValue(newValue));}}
refreshButtonTooltipChanged(newValue){if(this._searchfield!==null){ this._searchfield.setRefreshButtonTooltip(newValue);}}
showSearchButtonChanged(newValue){if(this._searchfield!==null){ this._searchfield.setShowSearchButton(getBooleanFromAttributeValue(newValue));}}
enableSuggestionsChanged(newValue){if(this._searchfield!==null){ this._searchfield.setEnableSuggestions(getBooleanFromAttributeValue(newValue));}}
selectOnFocusChanged(newValue){if(this._searchfield!==null){ this._searchfield.setSelectOnFocus(getBooleanFromAttributeValue(newValue));}}
searchChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachSearch(newValue);}}
liveChangeChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachLiveChange(newValue);}}
suggestChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachSuggest(newValue);}}
busyChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._searchfield!==null){ this._searchfield.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._searchfield!==null){ this._searchfield.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._searchfield!==null){ this._searchfield.attachValidateFieldGroup(newValue);}}


                                                                                }