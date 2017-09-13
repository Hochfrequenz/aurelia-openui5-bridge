export class Ui5Element {
    addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        for (elem of path) {
            if (elem.localName == 'layout') {
                this.UIElement.setLayoutData(child);
                return elem.localName;
            }
        }

    }
    removeChildByRelation(child, relation) {

    }
    _customData = null;
    getCustomData(key) {
        if (this._customData) {
            return this._customData.getValue();
        }
        else
            return null;
    }
    addCustomData(key, value) {
        if (this.UIElement) {
            if (this._customData)
                this.UIElement.removeCustomData(this._customData);

            this._customData = new sap.ui.core.CustomData({
                key: key,
                value: value,
                writeToDom: false
            });
            this.UIElement.addCustomData(_customData);
        }
        else{
            //cache custom data and apply later
            this._customData = new sap.ui.core.CustomData({
                key: key,
                value: value,
                writeToDom: false
            });
        }
    }
    removeCustomData() {
        if (this._customData)
            this.UIElement.removeCustomData(this._customData);
        this._customData = null;
    }
    removeChild(child, elem) {
    }
    attached() {

    }
    detached() {
        this.removeCustomData();
    }
    bind(param){
        if(param && param.object)
            this.addCustomData('_model',param.object);
    }
    unbind(){

    }
}