import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-column')
@inject(Element)

export class Ui5Column {
  _column = null;
  @bindable() ui5Id = null;
  @bindable() width;
  @bindable() hAlign = 'Begin';
  @bindable() vAlign = 'Inherit';
  @bindable() styleClass = null;
  @bindable() visible = true;
  @bindable() minScreenWidth = null;
  @bindable() demandPopin = false;
  @bindable() popinHAlign = null;
  @bindable() popinDisplay = null;
  @bindable() mergeDuplicates = false;
  @bindable() mergeFunctionName = 'getText';
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      width: this.width,
      hAlign: this.hAlign,
      vAlign: this.vAlign,
      styleClass: this.styleClass,
      visible: getBooleanFromAttributeValue(this.visible),
      minScreenWidth: this.minScreenWidth,
      demandPopin: getBooleanFromAttributeValue(this.demandPopin),
      popinDisplay: this.popinDisplay,
      popinHAlign: this.popinHAlign,
      mergeDuplicates: getBooleanFromAttributeValue(this.mergeDuplicates),
      mergeFunctionName: this.mergeFunctionName
    };
    if (this.ui5Id)
      this._column = new sap.m.Column(this.ui5Id, params);
    else
      this._column = new sap.m.Column(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._column, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'header')
      { this._column.setHeader(child); break; }
      if (elem.localName == 'footer')
      { this._column.setFooter(child); break; }
      if (elem.localName == 'content')
      { this._column.addDependent(child); break; }
    }
  }
  widthChanged(newValue) {
    if (this._column !== null) {
      this._column.setWidth(newValue);
    }
  }
  hAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setHAlign(newValue);
    }
  }
  vAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setVAlign(newValue);
    }
  }
  styleClassChanged(newValue) {
    if (this._column !== null) {
      this._column.setStyleClass(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._column !== null) {
      this._column.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  minScreenWidthChanged(newValue) {
    if (this._column !== null) {
      this._column.setMinScreenWidth(newValue);
    }
  }

  demandPopinChanged(newValue) {
    if (this._column !== null) {
      this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));
    }
  }
  popinDisplayChanged(newValue) {
    if (this._column !== null) {
      this._column.setPopinDisplay(newValue);
    }
  }
  popinHAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setPopinHAlign(newValue);
    }
  }
  mergeDuplicatesChanged(newValue) {
    if (this._column !== null) {
      this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));
    }
  }
  mergeFunctionNameChanged(newValue) {
    if (this._column !== null) {
      this._column.setMergeFunctionName(newValue);
    }
  }

}
