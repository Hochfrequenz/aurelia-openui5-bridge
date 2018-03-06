import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-dynamic-page-title')
@inject(Element)
export class Ui5DynamicPageTitle extends Ui5Control{
        _dynamicpagetitle = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() primaryArea = 'Begin';
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
        @computedFrom('_dynamicpagetitle')
        get UIElement() {
            return this._dynamicpagetitle;
          }
        fillProperties(params){
                                        params.primaryArea = this.primaryArea;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._dynamicpagetitle = new sap.f.DynamicPageTitle(this.ui5Id, params);
        else
          this._dynamicpagetitle = new sap.f.DynamicPageTitle(params);
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._dynamicpagetitle.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._dynamicpagetitle, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._dynamicpagetitle, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._dynamicpagetitle.placeAt)
                                                                this._dynamicpagetitle.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._dynamicpagetitle.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._dynamicpagetitle, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._dynamicpagetitle.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'heading') { this._dynamicpagetitle.setHeading(child); return elem.localName;}
if (elem.localName == 'snappedheading') { this._dynamicpagetitle.setSnappedHeading(child); return elem.localName;}
if (elem.localName == 'expandedheading') { this._dynamicpagetitle.setExpandedHeading(child); return elem.localName;}
if (elem.localName == 'actions') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfAction(afterElement); if (_index)this._dynamicpagetitle.insertAction(child, _index + 1); else this._dynamicpagetitle.addAction(child, 0);  return elem.localName; }
if (elem.localName == 'navigationactions') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfNavigationAction(afterElement); if (_index)this._dynamicpagetitle.insertNavigationAction(child, _index + 1); else this._dynamicpagetitle.addNavigationAction(child, 0);  return elem.localName; }
if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfContent(afterElement); if (_index)this._dynamicpagetitle.insertContent(child, _index + 1); else this._dynamicpagetitle.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'snappedcontent') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfSnappedContent(afterElement); if (_index)this._dynamicpagetitle.insertSnappedContent(child, _index + 1); else this._dynamicpagetitle.addSnappedContent(child, 0);  return elem.localName; }
if (elem.localName == 'expandedcontent') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfExpandedContent(afterElement); if (_index)this._dynamicpagetitle.insertExpandedContent(child, _index + 1); else this._dynamicpagetitle.addExpandedContent(child, 0);  return elem.localName; }
if (elem.localName == 'breadcrumbs') { this._dynamicpagetitle.setBreadcrumbs(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._dynamicpagetitle.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfCustomData(afterElement); if (_index)this._dynamicpagetitle.insertCustomData(child, _index + 1); else this._dynamicpagetitle.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._dynamicpagetitle.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = null; if (afterElement) _index = this._dynamicpagetitle.indexOfDependent(afterElement); if (_index)this._dynamicpagetitle.insertDependent(child, _index + 1); else this._dynamicpagetitle.addDependent(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'heading') {  this._dynamicpagetitle.destroyHeading(child); }
if (relation == 'snappedheading') {  this._dynamicpagetitle.destroySnappedHeading(child); }
if (relation == 'expandedheading') {  this._dynamicpagetitle.destroyExpandedHeading(child); }
if (relation == 'actions') {  this._dynamicpagetitle.removeAction(child);}
if (relation == 'navigationactions') {  this._dynamicpagetitle.removeNavigationAction(child);}
if (relation == 'content') {  this._dynamicpagetitle.removeContent(child);}
if (relation == 'snappedcontent') {  this._dynamicpagetitle.removeSnappedContent(child);}
if (relation == 'expandedcontent') {  this._dynamicpagetitle.removeExpandedContent(child);}
if (relation == 'breadcrumbs') {  this._dynamicpagetitle.destroyBreadcrumbs(child); }
if (relation == 'tooltip') {  this._dynamicpagetitle.destroyTooltip(child); }
if (relation == 'customdata') {  this._dynamicpagetitle.removeCustomData(child);}
if (relation == 'layoutdata') {  this._dynamicpagetitle.destroyLayoutData(child); }
if (relation == 'dependents') {  this._dynamicpagetitle.removeDependent(child);}

      }
      catch(err){}
                                                                            }
    primaryAreaChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setPrimaryArea(newValue);}}
busyChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._dynamicpagetitle!==null){ this._dynamicpagetitle.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }