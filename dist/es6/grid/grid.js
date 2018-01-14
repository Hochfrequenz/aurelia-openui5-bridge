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
        @bindable() width = '100%';
@bindable() vSpacing = 1;
@bindable() hSpacing = 1;
@bindable() position = 'Left';
@bindable() defaultSpan = 'XL3 L3 M6 S12';
@bindable() defaultIndent = 'XL0 L0 M0 S0';
@bindable() containerQuery = false;
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
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._grid = new sap.ui.layout.Grid(this.ui5Id, params);
        else
          this._grid = new sap.ui.layout.Grid(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._grid.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._grid, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._grid, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._grid, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._grid, this._relation);
                                                            }
         else{
                                                                this._grid.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'content') { var _index = null; if (afterElement) _index = this._grid.indexOfContent(afterElement); if (_index)this._grid.insertContent(child, _index + 1); else this._grid.addContent(child, 0);  return elem.localName; }

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'content') {  this._grid.removeContent(child); }

                                                                            }
    widthChanged(newValue){if(this._grid!==null){ this._grid.setWidth(newValue);}}
vSpacingChanged(newValue){if(this._grid!==null){ this._grid.setVSpacing(newValue);}}
hSpacingChanged(newValue){if(this._grid!==null){ this._grid.setHSpacing(newValue);}}
positionChanged(newValue){if(this._grid!==null){ this._grid.setPosition(newValue);}}
defaultSpanChanged(newValue){if(this._grid!==null){ this._grid.setDefaultSpan(newValue);}}
defaultIndentChanged(newValue){if(this._grid!==null){ this._grid.setDefaultIndent(newValue);}}
containerQueryChanged(newValue){if(this._grid!==null){ this._grid.setContainerQuery(getBooleanFromAttributeValue(newValue));}}
busyChanged(newValue){if(this._grid!==null){ this._grid.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._grid!==null){ this._grid.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._grid!==null){ this._grid.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._grid!==null){ this._grid.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._grid!==null){ this._grid.attachValidateFieldGroup(newValue);}}


                                                                                }