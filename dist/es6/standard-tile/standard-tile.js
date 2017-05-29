import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';
@customElement('ui5-standard-tile')
@inject(Element)
export class Ui5StandardTile extends Ui5Control {
    _tile = null;
    @bindable() type = null;
    @bindable() title = null;
    @bindable() number = null;
    @bindable() info = null;
    @bindable() infoState = null;
    @bindable() numberUnit = null;
    @bindable() icon = null;
    @bindable() press = null;

    /* from Control*/
    @bindable() busy = false;

    get UIElement() {
        return this._tile;
    }
    constructor(element) {
        super(element);
        this.element = element;
    }
    defaultPress() {

    }
    attached() {
        var props = {
            type: this.type,
            title: this.title,
            number: this.number,
            info: this.info,
            infoState: this.infoState,
            numberUnit: this.numberUnit,
            icon: this.icon,
            press: this.press != null ? this.press : this.defaultPress
        };
        super.fillProperties(props);
        this._tile = new sap.m.StandardTile(props);
        $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.addChild(this._tile, this.element);
    }
    detached() {
        $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.removeChild(this._tile, this.element);
    }
    typeChanged(newValue) {
        if (this._tile != null) {
            this._tile.setType(newValue);
        }
    }
    titleChanged(newValue) {
        if (this._tile != null) {
            this._tile.setTitle(newValue);
        }
    }
    numberChanged(newValue) {
        if (this._tile != null) {
            this._tile.setNumber(newValue);
        }
    }
    numberUnitChanged(newValue) {
        if (this._tile != null) {
            this._tile.setNumberUnit(newValue);
        }
    }
    infoChanged(newValue) {
        if (this._tile != null) {
            this._tile.setInfo(newValue);
        }
    }
    infoStateChanged(newValue) {
        if (this._tile != null) {
            this._tile.setInfoState(newValue);
        }
    }
    iconChanged(newValue) {
        if (this._tile != null) {
            this._tile.setIcon(newValue);
        }
    }
    pressChanged(newValue) {
        if (this._tile !== null) {
            this._tile.attachPress(newValue);
        }
    }
    busyChanged(newValue) {
        if (this._tile !== null) {
            this._tile.setBusy(getBooleanFromAttributeValue(newValue));
        }
    }
}
