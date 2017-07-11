import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-standard-list-item')
@inject(Element)

export class Ui5StandardListItem {
  _item = null;
  _parent = null;
  _relation = null;
  @bindable() title = null;
  @bindable() icon = null;
  @bindable() description = null;
  @bindable() iconInset = true;
  @bindable() iconDensityAware = true;
  @bindable() activeIcon = null;
  @bindable() info = null;
  @bindable() infoState = 'None';
  @bindable() adaptTitleSize = true;
  @bindable() titleTextDirection = 'Inherit';
  @bindable() infoTextDirection = 'Inherit';


  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      title: this.title,
      icon: this.icon,
      iconInset: getBooleanFromAttributeValue(this.iconInset),
      iconDensityAware: getBooleanFromAttributeValue(this.iconDensityAware),
      activeIcon: this.activeIcon,
      info: this.info,
      infoState: this.infoState,
      adaptTitleSize: getBooleanFromAttributeValue(this.adaptTitleSize),
      titleTextDirection: this.titleTextDirection,
      infoTextDirection: this.infoTextDirection
    }
    this._item = new sap.m.StandardListItem(props);
    attributeManager.addAttributes({ "ui5-container": '' });
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }

  }
  titleChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitle(newValue);
    }
  }
  iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  }
  descriptionChanged(newValue) {
    if (this._item !== null) {
      this._item.setDescription(newValue);
    }
  }
  iconInsetChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconInset(getBooleanFromAttributeValue(newValue));
    }
  }
  iconDensityAwareChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconDensityAware(getBooleanFromAttributeValue(newValue));
    }
  }
  activeIconChanged(newValue) {
    if (this._item !== null) {
      this._item.setActiveIcon(newValue);
    }
  }
  infoChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfo(newValue);
    }
  }
  infoStateChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoState(newValue);
    }
  }
  adaptTitleSizeChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));
    }
  }
  titleTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitleTextDirection(newValue);
    }
  }
  infoTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoTextDirection(newValue);
    }
  }


}
