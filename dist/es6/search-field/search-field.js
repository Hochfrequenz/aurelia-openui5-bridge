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
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() value = null;
@bindable() width = null;
@bindable() enabled = true;
@bindable() visible = true;
@bindable() maxLength = 0;
@bindable() placeholder = null;
@bindable() showRefreshButton = false;
@bindable() refreshButtonTooltip = null;
@bindable() showSearchButton = true;
@bindable() enableSuggestions = false;
@bindable() search = this.defaultFunc;
@bindable() liveChange = this.defaultFunc;
@bindable() suggest = this.defaultFunc;
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
params.showRefreshButton = getBooleanFromAttributeValue(this.showRefreshButton);
params.refreshButtonTooltip = this.refreshButtonTooltip;
params.showSearchButton = getBooleanFromAttributeValue(this.showSearchButton);
params.enableSuggestions = getBooleanFromAttributeValue(this.enableSuggestions);
params.search = this.search==null ? this.defaultFunc: this.search;
params.liveChange = this.liveChange==null ? this.defaultFunc: this.liveChange;
params.suggest = this.suggest==null ? this.defaultFunc: this.suggest;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._searchfield = new sap.m.SearchField(this.ui5Id, params);
                                              else
          this._searchfield = new sap.m.SearchField(params);
                                                  if(this.ui5Class)
           this._searchfield.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._searchfield.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._searchfield.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._searchfield, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._searchfield, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._searchfield.placeAt)
                                                                this._searchfield.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        this._searchfield.attachLiveChange((event) => {  that.value = event.mParameters.newValue;; });

                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._searchfield.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._searchfield)
                                                                this._parent.removeChildByRelation(this._searchfield, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._searchfield.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'suggestionitems') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._searchfield.insertSuggestionItem(child, _index); else this._searchfield.addSuggestionItem(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._searchfield.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._searchfield.insertCustomData(child, _index); else this._searchfield.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._searchfield.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._searchfield.insertDependent(child, _index); else this._searchfield.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._searchfield.insertDragDropConfig(child, _index); else this._searchfield.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'suggestionitems') {  this._searchfield.removeSuggestionItem(child);}
if (relation == 'tooltip') {  this._searchfield.destroyTooltip(child); }
if (relation == 'customdata') {  this._searchfield.removeCustomData(child);}
if (relation == 'layoutdata') {  this._searchfield.destroyLayoutData(child); }
if (relation == 'dependents') {  this._searchfield.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._searchfield.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    valueChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setValue(newValue);}}
widthChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setWidth(newValue);}}
enabledChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setEnabled(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setVisible(getBooleanFromAttributeValue(newValue));}}
maxLengthChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setMaxLength(newValue);}}
placeholderChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setPlaceholder(newValue);}}
showRefreshButtonChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setShowRefreshButton(getBooleanFromAttributeValue(newValue));}}
refreshButtonTooltipChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setRefreshButtonTooltip(newValue);}}
showSearchButtonChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setShowSearchButton(getBooleanFromAttributeValue(newValue));}}
enableSuggestionsChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.setEnableSuggestions(getBooleanFromAttributeValue(newValue));}}
searchChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachSearch(newValue);}}
liveChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachLiveChange(newValue);}}
suggestChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachSuggest(newValue);}}
busyChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._searchfield!==null){ this._searchfield.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._searchfield!==null){ this._searchfield.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._searchfield!==null){ this._searchfield.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._searchfield!==null){ this._searchfield.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }