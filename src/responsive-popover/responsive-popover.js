import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-responsive-popover')
@inject(Element)
export class Ui5ResponsivePopover {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() placement = 'Right';
  @bindable() icon = null;
  @bindable() title = null;
  @bindable() offsetX = null;
  @bindable() offsetY = null;
  @bindable() showArrow = true;
  @bindable() showHeader = true;
  @bindable() contentWidth = null;
  @bindable() contentHeight = null;
  @bindable() horizontalScrolling = true;
  @bindable() verticalScrolling = true;
  @bindable() showCloseButton = true;
  @bindable() resizable = false;
  @bindable() beforeOpen = this.defaultFunc;
  @bindable() afterOpen = this.defaultFunc;
  @bindable() beforeClose = this.defaultFunc;
  @bindable() afterClose = this.defaultFunc;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'subHeader') {
        this._dialog.setSubHeader(child);
        return 'subHeader';
      }
      if (elem.localName == 'customHeader') {
        this._dialog.setCustomHeader(child);
        return 'customHeader';
      }
      if (elem.localName == 'leftbutton') {
        this._dialog.setBeginButton(child);
        return 'leftButton';
      }
      if (elem.localName == 'rightbutton') {
        this._dialog.setEndButton(child);
        return 'rightButton';
      }
      if (elem.localName == 'content') {
        this._dialog.addContent(child);
        return 'content';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._dialog.removeContent(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      placement: this.placement,
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      showArrow : getBooleanFromAttributeValue(this.showArrow),
      showCloseButton: getBooleanFromAttributeValue(this.showCloseButton),
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      horizontalScrolling: getBooleanFromAttributeValue(this.horizontalScrolling),
      verticalScrolling: getBooleanFromAttributeValue(this.verticalScrolling),
      resizable: getBooleanFromAttributeValue(this.resizable),
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose
    };
    if (this.ui5Id)
      this._dialog = new sap.m.ResponsivePopover(this.ui5Id, props);
    else
      this._dialog = new sap.m.ResponsivePopover(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }
  placementChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setPlacement(newValue);
  }
  }
  offsetXChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setOffsetX(newValue);
  }
  }
  offsetYChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setOffsetY(newValue);
  }
  }
  showArrayChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setShowArray(getBooleanFromAttributeValue(newValue));
  }
  }
  showCloseButtonChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setShowCloseButton(getBooleanFromAttributeValue(newValue));
  }
  }
  iconChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setIcon(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  showHeaderChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  }
  contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  }
  contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  }
  horizontalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
    }
  }
  verticalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
    }
  }
  resizableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
    }
  }


}
