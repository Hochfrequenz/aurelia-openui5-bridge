import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-grid')
@inject(Element)
export class Ui5Grid extends Ui5Control{
        _grid = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() width = '100%';
@bindable() vSpacing = 1;
@bindable() hSpacing = 1;
@bindable() position = 'Left';
@bindable() defaultSpan = 'XL3 L3 M6 S12';
@bindable() defaultIndent = 'XL0 L0 M0 S0';
@bindable() containerQuery = false;
/* inherited from sap.ui.core.Control*/
@bindable() blocked = false;
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
        @computedFrom('_grid')
        get UIElement() {
            return this._grid;
          }
        fillProperties(params){
                                        params.width = this.width;
params.vSpacing = this.vSpacing;
params.hSpacing = this.hSpacing;
params.position = this.position;
params.defaultSpan = this.defaultSpan;
params.defaultIndent = this.defaultIndent;
params.containerQuery = getBooleanFromAttributeValue(this.containerQuery);
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._grid = new sap.ui.layout.Grid(this.ui5Id, params);
                                              else
          this._grid = new sap.ui.layout.Grid(params);
                                                  if(this.ui5Class)
           this._grid.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._grid.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._grid.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._grid, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._grid, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._grid.placeAt)
                                                                this._grid.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._grid.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._grid)
                                                                this._parent.removeChildByRelation(this._grid, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._grid.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._grid.insertContent(child, _index); else this._grid.addContent(child, 0);  return elem.localName; }
if (elem.localName == 'tooltip') { this._grid.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._grid.insertCustomData(child, _index); else this._grid.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._grid.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._grid.insertDependent(child, _index); else this._grid.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._grid.insertDragDropConfig(child, _index); else this._grid.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._grid.removeContent(child);}
if (relation == 'tooltip') {  this._grid.destroyTooltip(child); }
if (relation == 'customdata') {  this._grid.removeCustomData(child);}
if (relation == 'layoutdata') {  this._grid.destroyLayoutData(child); }
if (relation == 'dependents') {  this._grid.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._grid.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    widthChanged(newValue){if(this._grid!==null){ this._grid.setWidth(newValue);}}
vSpacingChanged(newValue){if(this._grid!==null){ this._grid.setVSpacing(newValue);}}
hSpacingChanged(newValue){if(this._grid!==null){ this._grid.setHSpacing(newValue);}}
positionChanged(newValue){if(this._grid!==null){ this._grid.setPosition(newValue);}}
defaultSpanChanged(newValue){if(this._grid!==null){ this._grid.setDefaultSpan(newValue);}}
defaultIndentChanged(newValue){if(this._grid!==null){ this._grid.setDefaultIndent(newValue);}}
containerQueryChanged(newValue){if(this._grid!==null){ this._grid.setContainerQuery(getBooleanFromAttributeValue(newValue));}}
blockedChanged(newValue){if(this._grid!==null){ this._grid.setBlocked(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._grid!==null){ this._grid.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._grid!==null){ this._grid.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._grid!==null){ this._grid.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._grid!==null){ this._grid.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._grid!==null){ this._grid.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._grid!==null){ this._grid.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(this._grid!==null){ this._grid.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(this._grid!==null){ this._grid.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(this._grid!==null){ this._grid.attachParseError(newValue);}}
formatErrorChanged(newValue){if(this._grid!==null){ this._grid.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(this._grid!==null){ this._grid.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }