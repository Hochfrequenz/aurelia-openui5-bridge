import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-responsive-grid-layout')
@inject(Element)
export class Ui5ResponsiveGridLayout {
  @bindable() ui5Id = null;

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
   
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
     
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

    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.ResponsiveGridLayout(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
 

}
