import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
import { Ui5ListItemBase } from '../list-item-base/list-item-base';
import { computedFrom } from 'aurelia-framework';

@customElement('ui5-standard-list-item')
@inject(Element)

export class Ui5StandardListItem extends Ui5ListItemBase {
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
  /*inherited from list-item-base*/
  @bindable() visible = true;
  @bindable() type = 'Inactive';
  @bindable() unread = false;
  @bindable() selected = false;
  @bindable() counter = null;
  @bindable() highlight = 'None';

  @bindable() tap = this.defaultFunc;
  @bindable() detailTap = this.defaultFunc;
  @bindable() press = this.defaultFunc;
  @bindable() detailPress = this.defaultFunc;

  @computedFrom('_item')
  get UIElement() {
    return this._item;
  }
  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      title: this.title,
      icon: this.icon,
      description: this.description,
      iconInset: getBooleanFromAttributeValue(this.iconInset),
      iconDensityAware: getBooleanFromAttributeValue(this.iconDensityAware),
      activeIcon: this.activeIcon,
      info: this.info,
      infoState: this.infoState,
      adaptTitleSize: getBooleanFromAttributeValue(this.adaptTitleSize),
      titleTextDirection: this.titleTextDirection,
      infoTextDirection: this.infoTextDirection
    }
    super.fillProperties(props);
    this._item = new sap.m.StandardListItem(props);

    if (this._customData)
      this._item.addCustomData(this._customData);

    
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
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
