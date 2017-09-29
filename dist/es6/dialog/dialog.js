import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-dialog')
@inject(Element)
export class Ui5Dialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() icon = null;
  @bindable() title = null;
  @bindable() showHeader = true;
  @bindable() type = 'Standard';
  @bindable() state = 'None';
  @bindable() stretchOnPhone = false;
  @bindable() stretch = false;
  @bindable() contentWidth = null;
  @bindable() contentHeight = null;
  @bindable() horizontalScrolling = true;
  @bindable() verticalScrolling = true;
  @bindable() resizable = false;
  @bindable() draggable = false;
  @bindable() escapeHandler = null;
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
      if (elem.localName == 'buttons') {
        this._dialog.addButton(child);
        return 'buttons';
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
    else if (relation == 'buttons') {
      this._dialog.removeButton(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      type: this.type,
      state: this.state,
      stretchOnPhone: getBooleanFromAttributeValue(this.stretchOnPhone),
      stretch: getBooleanFromAttributeValue(this.stretch),
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      horizontalScrolling: getBooleanFromAttributeValue(this.horizontalScrolling),
      verticalScrolling: getBooleanFromAttributeValue(this.verticalScrolling),
      resizable: getBooleanFromAttributeValue(this.resizable),
      draggable: getBooleanFromAttributeValue(this.draggable),
      escapeHandler: this.escapeHandler,
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose
    };
    if (this.ui5Id)
      this._dialog = new sap.m.Dialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.Dialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

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
  typeChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setType(newValue);
    }
  }
  stateChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setState(newValue);
    }
  }
  stretchOnPhoneChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setStretchOnPhone(getBooleanFromAttributeValue(newValue));
    }
  }
  stretchChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setStretch(getBooleanFromAttributeValue(newValue));
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
  draggableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setDraggable(newValue);
    }
  }
  escapeHandlerChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setEscapeHandler(newValue);
    }
  }


}
