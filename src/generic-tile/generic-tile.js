import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-generic-tile')
@inject(Element)
export class Ui5GenericTile {
    _tile = null;
    @bindable() mode = "content";
    @bindable() header = null;
    @bindable() subheader = null;
    @bindable() press = null;
    @bindable() frameType = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content')
            this._tile.addTileContent(child);
    }
    removeChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'content')
            this._tile.removeTileContent(child);
    }
    defaultPress() {

    }
    attached() {
        this._tile = new sap.m.GenericTile(
            {
                header: this.header,
                subheader: this.subheader,
                press: this.press != null ? this.press : this.defaultPress,
                frameType : this.frameType
            }
        );
        this._tile.addStyleClass('sapUiTinyMarginTop');
        this._tile.addStyleClass('sapUiTinyMarginBegin');
        
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tile, this.element);
    }
    detached() {
        $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tile, this.element);
    }
    headerChanged(newValue) {
        if (this._tile != null) {
            this._tile.setHeader(newValue);
        }
    }
    subheaderChanged(newValue) {
        if (this._tile != null) {
            this._tile.setSubheader(newValue);
        }
    }
    pressChanged(newValue) {
        if (this._tile !== null) {
            this._tile.attachPress(newValue);
        }
    }
    frameTypeChanged(newValue) {
        if (this._tile !== null) {
            this._tile.setFrameType(newValue);
        }
    }
}
