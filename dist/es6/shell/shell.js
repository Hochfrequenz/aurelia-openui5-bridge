import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-framework';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control} from '../control/control';
@customElement('ui5-shell')
@inject(Element)
export class Ui5Shell extends Ui5Control{
        _shell = null;
        _parent = null;
        _relation = null;
         @bindable ui5Id = null;
         @bindable ui5Class = null;
         @bindable ui5Tooltip = null;
         @bindable prevId = null;
        @bindable() title = null;
@bindable() logo = null;
@bindable() showLogout = true;
@bindable() headerRightText = null;
@bindable() appWidthLimited = true;
@bindable() backgroundColor = null;
@bindable() backgroundImage = null;
@bindable() backgroundRepeat = false;
@bindable() backgroundOpacity = 1;
@bindable() homeIcon = null;
@bindable() titleLevel = 'H1';
@bindable() logout = this.defaultFunc;
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
        @computedFrom('_shell')
        get UIElement() {
            return this._shell;
          }
        fillProperties(params){
                                        params.title = this.title;
params.logo = this.logo;
params.showLogout = getBooleanFromAttributeValue(this.showLogout);
params.headerRightText = this.headerRightText;
params.appWidthLimited = getBooleanFromAttributeValue(this.appWidthLimited);
params.backgroundColor = this.backgroundColor;
params.backgroundImage = this.backgroundImage;
params.backgroundRepeat = getBooleanFromAttributeValue(this.backgroundRepeat);
params.backgroundOpacity = this.backgroundOpacity;
params.homeIcon = this.homeIcon;
params.titleLevel = this.titleLevel;
params.logout = this.logout==null ? this.defaultFunc: this.logout;
            
                                            super.fillProperties(params);   
        }
        defaultFunc() {
                        }
                        attached() {
            var that = this;
            var params = {};
            this.fillProperties(params);
         if (this.ui5Id)
          this._shell = new sap.m.Shell(this.ui5Id, params);
                                              else
          this._shell = new sap.m.Shell(params);
                                                  if(this.ui5Class)
           this._shell.addStyleClass(this.ui5Class);
                                             if(this.ui5Tooltip)
           this._shell.setTooltip(this.ui5Tooltip);                                             
        
        if ($(this.element).closest("[ui5-container]").length > 0) {
                                            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
                                        if (!this._parent.UIElement || (this._parent.UIElement.sId != this._shell.sId)) {
        var prevSibling = null;
       
        this._relation = this._parent.addChild(this._shell, this.element, this.prevId);
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
      else {
                                                    this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                                                var prevSibling = null;
                                                       this._relation = this._parent.addChild(this._shell, this.element, this.prevId);
        
        this.attributeManager.addAttributes({"ui5-container": '' });
      }
    }
    else {
                                                            if(this._shell.placeAt)
                                                                this._shell.placeAt(this.element.parentElement);
                                                        this.attributeManager.addAttributes({"ui5-container": '' });
                                                        this.attributeManager.addClasses("ui5-hide");
    }
        
                                                        //<!container>
           
                                                        //</!container>
                                                        this.attributeManager.addAttributes({"ui5-id": this._shell.sId});
                                                                           
           
        }
    detached() {
        try{
          if ($(this.element).closest("[ui5-container]").length > 0) {
        if (this._parent && this._relation) {
                                                                 if(this._shell)
                                                                this._parent.removeChildByRelation(this._shell, this._relation);
                                                            }
                                                                                }
         else{
                                                                this._shell.destroy();
                                                            }
         super.detached();
          }
         catch(err){}
        }

    addChild(child, elem, afterElement) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
        try{
                 if (elem.localName == 'content') { this._shell.setApp(child); return elem.localName;}
if (elem.localName == 'tooltip') { this._shell.setTooltip(child); return elem.localName;}
if (elem.localName == 'customdata') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._shell.insertCustomData(child, _index); else this._shell.addCustomData(child, 0);  return elem.localName; }
if (elem.localName == 'layoutdata') { this._shell.setLayoutData(child); return elem.localName;}
if (elem.localName == 'dependents') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._shell.insertDependent(child, _index); else this._shell.addDependent(child, 0);  return elem.localName; }
if (elem.localName == 'dragdropconfig') { var _index = afterElement?Math.floor(afterElement+1):null; if (_index)this._shell.insertDragDropConfig(child, _index); else this._shell.addDragDropConfig(child, 0);  return elem.localName; }

           }
           catch(err){}
                                                                    }
      }
      removeChildByRelation(child, relation) {
      try{
               if (relation == 'content') {  this._shell.destroyApp(child); }
if (relation == 'tooltip') {  this._shell.destroyTooltip(child); }
if (relation == 'customdata') {  this._shell.removeCustomData(child);}
if (relation == 'layoutdata') {  this._shell.destroyLayoutData(child); }
if (relation == 'dependents') {  this._shell.removeDependent(child);}
if (relation == 'dragdropconfig') {  this._shell.removeDragDropConfig(child);}

      }
      catch(err){}
                                                                            }
    titleChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setTitle(newValue);}}
logoChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setLogo(newValue);}}
showLogoutChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setShowLogout(getBooleanFromAttributeValue(newValue));}}
headerRightTextChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setHeaderRightText(newValue);}}
appWidthLimitedChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));}}
backgroundColorChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setBackgroundColor(newValue);}}
backgroundImageChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setBackgroundImage(newValue);}}
backgroundRepeatChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setBackgroundRepeat(getBooleanFromAttributeValue(newValue));}}
backgroundOpacityChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setBackgroundOpacity(newValue);}}
homeIconChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setHomeIcon(newValue);}}
titleLevelChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.setTitleLevel(newValue);}}
logoutChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachLogout(newValue);}}
busyChanged(newValue){if(this._shell!==null){ this._shell.setBusy(getBooleanFromAttributeValue(newValue));}}
busyIndicatorDelayChanged(newValue){if(this._shell!==null){ this._shell.setBusyIndicatorDelay(newValue);}}
busyIndicatorSizeChanged(newValue){if(this._shell!==null){ this._shell.setBusyIndicatorSize(newValue);}}
visibleChanged(newValue){if(this._shell!==null){ this._shell.setVisible(getBooleanFromAttributeValue(newValue));}}
fieldGroupIdsChanged(newValue){if(this._shell!==null){ this._shell.setFieldGroupIds(newValue);}}
/* inherited from sap.ui.core.Control*/
validateFieldGroupChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachValidateFieldGroup(newValue);}}
/* inherited from sap.ui.core.Element*/
/* inherited from sap.ui.base.ManagedObject*/
validationSuccessChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachValidationSuccess(newValue);}}
validationErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachValidationError(newValue);}}
parseErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachParseError(newValue);}}
formatErrorChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachFormatError(newValue);}}
modelContextChangeChanged(newValue){if(newValue!=null && newValue!=undefined && this._shell!==null){ this._shell.attachModelContextChange(newValue);}}
/* inherited from sap.ui.base.EventProvider*/
/* inherited from sap.ui.base.Object*/


                                                                                }