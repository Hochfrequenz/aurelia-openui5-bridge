import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-simple-form')
@inject(Element)
export class Ui5SimpleForm {
  @bindable() id = null;
  @bindable() title = '';
  @bindable() maxContainerCols = 2;
  @bindable() minWidth = -1;
  @bindable() width = null;
  @bindable() editable = true;
  @bindable() labelMinWidth = null;
  @bindable() layout = 'ResponsiveLayout';
  @bindable() backgroundDesign = 'Translucent';
  _form = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'toolbar')
      this._form.setToolbar(child);
    if (path[0].localName == 'content')
      this._form.addContent(child);
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._form = new sap.ui.layout.form.SimpleForm(this.id,{
      title: this.title,
      editable: getBooleanFromAttributeValue(this.editable),
      maxContainerCols: this.maxContainerCols,
      minWidth: this.minWidth,
      width: this.width,
      labelMinWidth: this.labelMinWidth,
      layout: this.layout,
      backgroundDesign: this.backgroundDesign

    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes("ui5-container");
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }
  maxContainerColsChanged(newValue) {
    if (this._form !== null) {
      this._form.setMaxContainerCols(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._form !== null) {
      this._form.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  minWidthChanged(newValue) {
    if (this._form !== null) {
      this._form.setMinWidth(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._form !== null) {
      this._form.setWidth(newValue);
    }
  }
  labelMinWidthChanged(newValue) {
    if (this._form !== null) {
      this._form.setLabelMinWidth(newValue);
    }
  }
  layoutChanged(newValue) {
    if (this._form !== null) {
      this._form.setLayout(newValue);
    }
  }
  backgroundDesignChanged(newValue) {
    if (this._form !== null) {
      this._form.setBackgroundDesign(newValue);
    }
  }

}
