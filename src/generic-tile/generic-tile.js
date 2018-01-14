import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-generic-tile')
@inject(Element)
export class Ui5GenericTile extends Ui5Control{
        _generictile = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
        @bindable() mode = 'ContentMode';
@bindable() header = null;
@bindable() subheader = null;
@bindable() failedText = null;
@bindable() size = 'Auto';
@bindable() frameType = 'OneByOne';
@bindable() backgroundImage = null;
@bindable() headerImage = null;
@bindable() state = 'Loaded';
@bindable() imageDescription = null;
@bindable() scope = 'Display';
@bindable() ariaLabel = null;
@bindable() press = this.defaultFunc;
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
        @computedFrom('_generictile')
        get UIElement() {
            return this._generictile;
          }
        fillProperties(params){
               params.mode = this.mode;
params.header = this.header;
params.subheader = this.subheader;
params.failedText = this.failedText;
params.size = this.size;
params.frameType = this.frameType;
params.backgroundImage = this.backgroundImage;
params.headerImage = this.headerImage;
params.state = this.state;
params.imageDescription = this.imageDescription;
params.scope = this.scope;
params.ariaLabel = this.ariaLabel;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._generictile = new sap.m.GenericTile(this.ui5Id, params);
        else
          this._generictile = new sap.m.GenericTile(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._generictile.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._generictile, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._generictile, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._generictile, this.element);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._generictile.placeAt)
                                                                this._generictile.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._generictile.sId});
                                                                           
           
        }
    detached() {
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._generictile, this._relation);
                                                            }
         else{
                                                                this._generictile.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                if (elem.localName == 'tileContent') { var _index = null; if (afterElement) _index = this._generictile.indexOfTileContent(afterElement); if (_index)this._generictile.insertTileContent(child, _index + 1); else this._generictile.addTileContent(child, 0);  return elem.localName; }
if (elem.localName == 'icon') { this._generictile.setIcon(child); return elem.localName;}

                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        if (relation == 'tileContent') {  this._generictile.removeTileContent(child); }

                                                                            }
    modeChanged(newValue){if(this._generictile!==null){ this._generictile.setMode(newValue);}}
headerChanged(newValue){if(this._generictile!==null){ this._generictile.setHeader(newValue);}}
subheaderChanged(newValue){if(this._generictile!==null){ this._generictile.setSubheader(newValue);}}
failedTextChanged(newValue){if(this._generictile!==null){ this._generictile.setFailedText(newValue);}}
sizeChanged(newValue){if(this._generictile!==null){ this._generictile.setSize(newValue);}}
frameTypeChanged(newValue){if(this._generictile!==null){ this._generictile.setFrameType(newValue);}}
backgroundImageChanged(newValue){if(this._generictile!==null){ this._generictile.setBackgroundImage(newValue);}}
headerImageChanged(newValue){if(this._generictile!==null){ this._generictile.setHeaderImage(newValue);}}
stateChanged(newValue){if(this._generictile!==null){ this._generictile.setState(newValue);}}
imageDescriptionChanged(newValue){if(this._generictile!==null){ this._generictile.setImageDescription(newValue);}}
scopeChanged(newValue){if(this._generictile!==null){ this._generictile.setScope(newValue);}}
ariaLabelChanged(newValue){if(this._generictile!==null){ this._generictile.setAriaLabel(newValue);}}
pressChanged(newValue){if(this._generictile!==null){ this._generictile.attachPress(newValue);}}
busyChanged(newValue){if(this._generictile!==null){ this._generictile.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._generictile!==null){ this._generictile.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._generictile!==null){ this._generictile.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._generictile!==null){ this._generictile.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._generictile!==null){ this._generictile.attachValidateFieldGroup(newValue);}}


                                                                                }