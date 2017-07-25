'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ui5Element = exports.Ui5Element = function () {
    function Ui5Element() {
        _classCallCheck(this, Ui5Element);

        this._container = null;
    }

    Ui5Element.prototype.addChild = function addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'layout') {
            this.UIElement.setLayoutData(child);
        }
    };

    Ui5Element.prototype.removeChild = function removeChild(child, elem) {};

    Ui5Element.prototype.attached = function attached() {};

    return Ui5Element;
}();