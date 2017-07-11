import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { computedFrom } from 'aurelia-framework';
@customElement('ui5-icon')
@inject(Element)

export class Ui5Icon {
  _icon = null;
  @bindable() ui5Id = null;
  @bindable() src = null;
  @bindable() size = null;
  @bindable() color = null;
  @bindable() hoverColor = null;
  @bindable() activeColor = null;
  @bindable() width = null;
  @bindable() height = null;
  @bindable() backgroundColor = null;
  @bindable() hoverBackgroundColor = null;
  @bindable() activeBackgroundColor = null;
  @bindable() decorative = true;
  @bindable() useIconTooltip = true;
  @bindable() alt = null;
  @bindable() noTabStop = false;
  @bindable() press = this.defaultFunc;
  defaultFunc(){
    
  }
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_icon')
  get UIElement() {
    return this._icon;
  }
  attached() {
    var props = {
      src: this.src,
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor,
      activeColor: this.activeColor,
      width: this.width,
      height: this.height,
      backgroundColor: this.backgroundColor,
      activeBackgroundColor: this.activeBackgroundColor,
      decorative: getBooleanFromAttributeValue(this.decorative),
      useIconTooltip: getBooleanFromAttributeValue(this.useIconTooltip),
      alt: this.alt,
      noTabStop: getBooleanFromAttributeValue(this.noTabStop),
      press: this.press
    };
    if (this.ui5Id)
      this._icon = new sap.ui.core.Icon(this.ui5Id, props);
    else
      this._icon = new sap.ui.core.Icon(props);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._icon, this.element);
  }
  srcChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setSrc(newValue);
    }
  }
  sizeChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setSize(newValue);
    }
  }
  colorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setColor(newValue);
    }
  }
  hoverColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHoverColor(newValue);
    }
  }
  activeColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setActiveColor(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setWidth(newValue);
    }
  }
  heightChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHeight(newValue);
    }
  }
  backgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setBackgroundColor(newValue);
    }
  }
  hoverBackgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHoverBackgroundColor(newValue);
    }
  }
  activeBackgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setActiveBackgroundColor(newValue);
    }
  }
  decorativeChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setDecorative(getBooleanFromAttributeValue(newValue));
    }
  }
  useIconTooltipChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setUseIconTooltip(getBooleanFromAttributeValue(newValue));
    }
  }
  altChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setAlt(newValue);
    }
  }
  noTabStopChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setNoTabStop(getBooleanFromAttributeValue(newValue));
    }
  }

}
