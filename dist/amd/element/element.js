define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Ui5Element = exports.Ui5Element = function () {
        function Ui5Element() {
            _classCallCheck(this, Ui5Element);

            this._customData = null;
        }

        Ui5Element.prototype.addChild = function addChild(child, elem) {
            var path = jQuery.makeArray($(elem).parentsUntil(this.element));
            for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    elem = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    elem = _i.value;
                }

                if (elem.localName == 'layout') {
                    this.UIElement.setLayoutData(child);
                    return elem.localName;
                }
            }
        };

        Ui5Element.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

        Ui5Element.prototype.getCustomData = function getCustomData(key) {
            if (this._customData) {
                return this._customData.getValue();
            } else return null;
        };

        Ui5Element.prototype.addCustomData = function addCustomData(key, value) {
            if (this.UIElement) {
                if (this._customData) this.UIElement.removeCustomData(this._customData);

                this._customData = new sap.ui.core.CustomData({
                    key: key,
                    value: value,
                    writeToDom: false
                });
                this.UIElement.addCustomData(_customData);
            } else {
                this._customData = new sap.ui.core.CustomData({
                    key: key,
                    value: value,
                    writeToDom: false
                });
            }
        };

        Ui5Element.prototype.removeCustomData = function removeCustomData() {
            if (this._customData) this.UIElement.removeCustomData(this._customData);
            this._customData = null;
        };

        Ui5Element.prototype.removeChild = function removeChild(child, elem) {};

        Ui5Element.prototype.attached = function attached() {};

        Ui5Element.prototype.detached = function detached() {
            this.removeCustomData();
        };

        Ui5Element.prototype.bind = function bind(param) {
            if (param && param.object) this.addCustomData('_model', param.object);
        };

        Ui5Element.prototype.unbind = function unbind() {};

        return Ui5Element;
    }();
});