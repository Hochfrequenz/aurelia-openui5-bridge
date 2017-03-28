import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-simple-form')
@inject(Element)
export class Ui5SimpleForm {
  @bindable() ui5Id = null;
  @bindable() title = '';
  @bindable() maxContainerCols = 2;
  @bindable() minWidth = -1;
  @bindable() width = null;
  @bindable() editable = true;
  @bindable() labelMinWidth = 192;
  @bindable() layout = 'ResponsiveLayout';
  @bindable() backgroundDesign = 'Translucent';
  @bindable() labelSpanXL = -1;
  @bindable() labelSpanL = 4;
  @bindable() labelSpanM = 2;
  @bindable() labelSpanS = 12;
  @bindable() adjustLabelSpan = true;
  @bindable() emptySpanXL = -1;
  @bindable() emptySpanL = 0;
  @bindable() emptySpanM = 0;
  @bindable() emptySpanS = 0;
  @bindable() singleContainerFullSize = false;
  @bindable() breakpointXL = 1440;
  @bindable() breakpointL = 1024;
  @bindable() breakpointM = 600;

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
    this._form = new sap.ui.layout.form.SimpleForm(this.ui5Id, {
      title: this.title,
      editable: getBooleanFromAttributeValue(this.editable),
      maxContainerCols: parseInt(this.maxContainerCols),
      minWidth: parseInt(this.minWidth),
      width: this.width,
      labelMinWidth: parseInt(this.labelMinWidth),
      layout: this.layout,
      backgroundDesign: this.backgroundDesign,
      labelSpanXL: parseInt(this.labelSpanXL),
      labelSpanL: parseInt(this.labelSpanL),
      labelSpanM: parseInt(this.labelSpanM),
      labelSpanS: parseInt(this.labelSpanS),
      adjustLabelSpan: getBooleanFromAttributeValue(this.adjustLabelSpan),
      emptySpanXL: parseInt(this.emptySpanXL),
      emptySpanL: parseInt(this.emptySpanL),
      emptySpanM: parseInt(this.emptySpanM),
      emptySpanS: parseInt(this.emptySpanS),
      singleContainerFullSize: getBooleanFromAttributeValue(this.singleContainerFullSize),
      breakpointXL: parseInt(this.breakpointXL),
      breakpointL: parseInt(this.breakpointL),
      breakpointM: parseInt(this.breakpointM),

    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
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
