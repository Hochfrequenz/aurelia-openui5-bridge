import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-segmented-button')
@inject(Element)
export class Ui5SegmentedButton {
  @bindable() enabled = false;
  @bindable() width = null;
  @bindable() selectedKey = null;
  @bindable() select = this.defaultFunc;
  _button = null;
  defaultFunc() {

  }
  constructor(element) {
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }
  get UIElement() {
    return this._button;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item') {
        if (this._button.getItems().length == 0) // set key when first item is added
          this.selectedKey = child.mProperties.key;
        this._button.addItem(child);

        break;
      }
    }
  }

  attached() {
    this._button = new sap.m.SegmentedButton({
      enabled: !getBooleanFromAttributeValue(this.enabled),
      width: this.width,
      selectedKey: this.selectedKey,
      select: this.select
    });
    var that = this;
    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
      this.attributeManager.addAttributes({ "ui5-container": '' });
    }
    this._button.attachSelect((event) => {
      that.selectedKey = event.mParameters.key;
    });

  }
  detached() {

  }
  enableChanged(newValue) {
    if (this._button !== null) {
      this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    if (this._button !== null) {
      this._button.setWidth(newValue);
    }
  }
  selectedKeyChanged(newValue) {
    if (this._button !== null) {
      this._button.setSelectedKey(newValue);
    }
  }

}
