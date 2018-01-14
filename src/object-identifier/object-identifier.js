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
        @bindable() title = null;
@bindable() text = null;
@bindable() badgeNotes = null;
@bindable() badgePeople = null;
@bindable() badgeAttachments = null;
@bindable() visible = true;
@bindable() titleActive = false;
@bindable() textDirection = 'Inherit';
@bindable() titlePress = this.defaultFunc;
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
        @computedFrom('_objectidentifier')
        get UIElement() {
            return this._objectidentifier;
          }
        fillProperties(params){
               params.title = this.title;
params.text = this.text;
params.badgeNotes = getBooleanFromAttributeValue(this.badgeNotes);
params.badgePeople = getBooleanFromAttributeValue(this.badgePeople);
params.badgeAttachments = getBooleanFromAttributeValue(this.badgeAttachments);
params.visible = getBooleanFromAttributeValue(this.visible);
params.titleActive = getBooleanFromAttributeValue(this.titleActive);
params.textDirection = this.textDirection;
            
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
                                         super.fillProperties(params);   
         if (this.ui5Id)
          this._objectidentifier = new sap.m.ObjectIdentifier(this.ui5Id, params);
        else
          this._objectidentifier = new sap.m.ObjectIdentifier(params);
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._objectidentifier.sId)) {
        var prevSibling = null;
        if (this.element.previousElementSibling)
          prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
        this._relation = this._parent.addChild(this._objectidentifier, this.element, prevSibling);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
        if (this.element.previousElementSibling) {
                                                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                                                this._relation = this._parent.addChild(this._objectidentifier, this.element, prevSibling);
        }
        else
          this._relation = this._parent.addChild(this._objectidentifier, this.element);
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
        if (this._parent && this._relation) {
                                                                this._parent.removeChildByRelation(this._objectidentifier, this._relation);
                                                            }
         else{
                                                                this._objectidentifier.destroy();
                                                            }
         super.detached();
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
                                                                
                                                                    }
      }
      removeChildByRelation(child, relation) {
                                                                        
                                                                            }
    titleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setTitle(newValue);}}
textChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setText(newValue);}}
badgeNotesChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBadgeNotes(getBooleanFromAttributeValue(newValue));}}
badgePeopleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBadgePeople(getBooleanFromAttributeValue(newValue));}}
badgeAttachmentsChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBadgeAttachments(getBooleanFromAttributeValue(newValue));}}
visibleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setVisible(getBooleanFromAttributeValue(newValue));}}
titleActiveChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setTitleActive(getBooleanFromAttributeValue(newValue));}}
textDirectionChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setTextDirection(newValue);}}
titlePressChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachTitlePress(newValue);}}
busyChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setBusyIndicatorDelay(newValue);}}
visibleChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(this._objectidentifier!==null){ this._objectidentifier.attachValidateFieldGroup(newValue);}}


                                                                                }