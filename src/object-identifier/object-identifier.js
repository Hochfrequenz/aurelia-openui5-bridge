import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-object-identifier')
@inject(Element)
export class Ui5ObjectIdentifier extends Ui5Control{
        _objectidentifier = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() title = null;
@bindable() text = null;
@bindable() visible = true;
@bindable() titleActive = false;
@bindable() textDirection = 'Inherit';
@bindable() titlePress = this.defaultFunc;
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
        @computedFrom('_objectidentifier')
        get UIElement() {
            return this._objectidentifier;
          }
        fillProperties(params){
                                        params.title = this.title;
params.text = this.text;
params.visible = getBooleanFromAttributeValue(this.visible);
params.titleActive = getBooleanFromAttributeValue(this.titleActive);
params.textDirection = this.textDirection;
params.titlePress = this.titlePress==null ? this.defaultFunc: this.titlePress;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._objectidentifier = new sap.m.ObjectIdentifier(this.ui5Id, params);
                                              else
          this._objectidentifier = new sap.m.ObjectIdentifier(params);
                                                  if(this.ui5Class)
           this._objectidentifier.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._objectidentifier.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._objectidentifier.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._objectidentifier, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._objectidentifier, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._objectidentifier.placeAt)
                                                                this._objectidentifier.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._objectidentifier.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._objectidentifier)
                                                                this._parent.removeChildByRelation(this._objectidentifier, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._objectidentifier.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'tooltip') { this._objectidentifier.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._objectidentifier.insertCustomData(child, _index); else this._objectidentifier.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._objectidentifier.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._objectidentifier.insertDependent(child, _index); else this._objectidentifier.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._objectidentifier.insertDragDropConfig(child, _index); else this._objectidentifier.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'tooltip') {  this._objectidentifier.destroyTooltip(child); }
if (relation == 'customdata') {  this._objectidentifier.removeCustomData(child);}
if (relation == 'layoutdata') {  this._objectidentifier.destroyLayoutData(child); }
if (relation == 'dependents') {  this._objectidentifier.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._objectidentifier.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.setTitle(newValue);}}
textChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.setText(newValue);}}
visibleChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.setVisible(getBooleanFromAttributeValue(newValue));}}
titleActiveChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.setTitleActive(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.setTextDirection(newValue);}}
titlePressChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachTitlePress(newValue);}}
busyChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._objectidentifier!==null){ this._objectidentifier.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }