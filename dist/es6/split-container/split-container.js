import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-split-container')
@inject(Element)
export class Ui5SplitContainer {
  @bindable() defaultTransitionNameDetail = '';
  @bindable() defaultTransitionNameMaster = '';
  @bindable() mode = 'ShowHideMode';
  @bindable() masterButtonText = null;
  @bindable() backgroundColor = null;
  @bindable() backgroundImage = null;
  @bindable() backgroundRepeat = true;
  @bindable() backgroundOpacity = 1.0;
  @bindable() masterNavigate = this.defaultFunc;
  @bindable() afterMasterNavigate = this.defaultFunc;
  @bindable() masterButton = this.defaultFunc;
  @bindable() beforeMasterOpen = this.defaultFunc;
  @bindable() afterMasterOpen = this.defaultFunc;
  @bindable() beforeMasterClose = this.defaultFunc;
  @bindable() afterMasterClose = this.defaultFunc;
  @bindable() detailNavigate = this.defaultFunc;
  @bindable() afterDetailNavigate = this.defaultFunc;
  _container = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'master') {
        this._container.addMasterPage(child);
        return elem.localName;
      }
      if (elem.localName == 'detail') {
        this._container.addDetailPage(child);
        return elem.localName;
      }

    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'master' && this._container && child) {
      this._container.removeMasterPage(child);
    }
    else if (relation === 'detail' && this._container && child) {
      this._container.removeDetailPage(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var container = new sap.m.SplitContainer({
      defaultTransitionNameDetail: this.defaultTransitionNameDetail,
      defaultTransitionNameMaster: this.defaultTransitionNameMaster,
      mode: this.mode,
      masterButton: this.masterButton,
      backgroundImage: this.backgroundImage,
      backgroundRepeat: getBooleanFromAttributeValue(this.backgroundRepeat),
      backgroundOpacity: this.backgroundOpacity,
      masterNavigate: this.masterNavigate,
      afterMasterNavigate: this.afterMasterNavigate,
      masterButton: this.masterButton,
      beforeMasterOpen: this.beforeMasterOpen,
      afterMasterOpen: this.afterMasterOpen,
      beforeMasterClose: this.beforeMasterClose,
      afterMasterClose: this.afterMasterClose,
      detailNavigate: this.detailNavigate,
      afterDetailNavigate: this.afterDetailNavigate
    });
    this._container = container;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._container.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
    }
    else {
      this._container.destroy();
    }
  }
  defaultTransitionNameDetailChanged(newValue) {
    if (this._container !== null) {
      this._container.setDefaultTransitionNameDetail(newValue);
    }
  }
  defaultTransitionNameMasterChanged(newValue) {
    if (this._container !== null) {
      this._container.setDefaultTransitionNameMaster(newValue);
    }
  }
  modeChanged(newValue) {
    if (this._container !== null) {
      this._container.setMode(newValue);
    }
  }
  masterButtonTextChanged(newValue) {
    if (this._container !== null) {
      this._container.setMasterButtonText(newValue);
    }
  }
  backgroundColorChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundColor(newValue);
    }
  }
  backgroundImageChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundImage(newValue);
    }
  }
  backgroundOpacityChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundOpacity(newValue);
    }
  }
  backgroundRepeatChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundRepeat(getBooleanFromAttributeValue(newValue));
    }
  }

}
