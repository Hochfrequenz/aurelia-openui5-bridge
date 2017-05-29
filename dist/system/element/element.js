'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var Ui5Element;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _export('Ui5Element', Ui5Element = function () {
                function Ui5Element() {
                    _classCallCheck(this, Ui5Element);

                    this._container = null;
                }

                Ui5Element.prototype.addChild = function addChild(child, elem) {
                    var path = $(elem).parentsUntil(this.element);
                    if (path[0].localName == 'layout') {
                        this._input.setLayoutData(child);
                    }
                };

                Ui5Element.prototype.removeChild = function removeChild(child, elem) {};

                Ui5Element.prototype.attached = function attached() {};

                return Ui5Element;
            }());

            _export('Ui5Element', Ui5Element);
        }
    };
});