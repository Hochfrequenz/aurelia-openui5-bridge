import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-grid')
@inject(Element)
export class Ui5Grid {
  _grid = null;
  _parent = null;
  @bindable() width = '100%';
  @bindable() vSpacing = 1;
  @bindable() hSpacing = 1;
  @bindable() position = 'Left';
  @bindable() defaultSpan = 'XL3 L3 M6 S12';
  @bindable() defaultIdent = 'XL0 L0 M0 S0';
  @bindable() containerQuery = false;
  constructor(element) {
    this.element = element;
  }
  get UIElement() {
    return this._grid;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._grid.addContent(child);
        break;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._grid.removeContent(child);
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'content')
      this._grid.removeContent(child);
  }
  defaultPress() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);

    this._grid = new sap.ui.layout.Grid(
      {
        defaultSpan: this.defaultSpan,
        width: this.width,
        vSpacing: this.vSpacing,
        hSpacing: this.hSpacing,
        position: this.position,
        defaultIdent: this.defaultIdent,
        containerQuery: getBooleanFromAttributeValue(this.containerQuery)
      }
    );
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._grid, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
  }
  detached() {
    this._parent.removeChild(this._grid, this.element);
  }
  defaultSpanChanged(newValue) {
    if (this._grid != null) {
      this._grid.setDefaultSpan(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._grid !== null) {
      this._grid.setWidth(newValue);
    }
  }
  vSpacingChanged(newValue) {
    if (this._grid !== null) {
      this._grid.setVSpacing(newValue);
    }
  }
  hSpacingChanged(newValue) {
    if (this._grid !== null) {
      this._grid.setHSpacing(newValue);
    }
  }
  positionChanged(newValue) {
    if (this._grid !== null) {
      this._grid.setPosition(newValue);
    }
  }
  defaultIdentChanged(newValue) {
    if (this._grid !== null) {
      this._grid.setDefaultIdent(newValue);
    }
  }
  containerQueryChanged(newValue) {
    if (this._grid !== null) {
      this._grid.setContainerQuery(getBooleanFromAttributeValue(newValue));
    }
  }

}
