import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-feed-content')
@inject(Element)
export class Ui5FeedContent extends Ui5Control{
        _feedcontent = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() contentText = null;
@bindable() subheader = null;
@bindable() value = null;
@bindable() valueColor = null;
@bindable() truncateValueTo = 4;
@bindable() press = this.defaultFunc;
/* inherited from sap.ui.core.Control*/
@bindable() busy = false;
@bindable() busyIndicatorDelay = 1000;
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
        @computedFrom('_feedcontent')
        get UIElement() {
            return this._feedcontent;
          }
        fillProperties(params){
               params.contentText = this.contentText;
params.subheader = this.subheader;
params.value = this.value;
params.valueColor = this.valueColor;
params.truncateValueTo = this.truncateValueTo?parseInt(this.truncateValueTo):0;
params.press = this.press==null ? this.defaultFunc: this.press;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._feedcontent = new sap.m.FeedContent(this.ui5Id, params);
        else
          this._feedcontent = new sap.m.FeedContent(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._feedcontent.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._feedcontent, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._feedcontent, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._feedcontent, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._feedcontent.placeAt)
                                                                this._feedcontent.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._feedcontent.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._feedcontent, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._feedcontent.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._feedcontent.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._feedcontent.indexOfCustomData(afterElement); if (_index)this._feedcontent.insertCustomData(child, _index + 1); else this._feedcontent.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._feedcontent.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._feedcontent.indexOfDependent(afterElement); if (_index)this._feedcontent.insertDependent(child, _index + 1); else this._feedcontent.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._feedcontent.destroyTooltip(child); }
if (relation == 'customdata') {  this._feedcontent.removeCustomData(child);}
if (relation == 'layoutData') {  this._feedcontent.destroyLayoutData(child); }
if (relation == 'dependents') {  this._feedcontent.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    contentTextChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setContentText(newValue);}}
subheaderChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setSubheader(newValue);}}
valueChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setValue(newValue);}}
valueColorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setValueColor(newValue);}}
truncateValueToChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setTruncateValueTo(newValue);}}
pressChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachPress(newValue);}}
busyChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._feedcontent!==null){ this._feedcontent.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }