'use strict';

System.register(['../element/element', '../common/attributes'], function (_export, _context) {
    "use strict";

    var Ui5Element, getBooleanFromAttributeValue, Ui5Control;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_elementElement) {
            Ui5Element = _elementElement.Ui5Element;
        }, function (_commonAttributes) {
            getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
        }],
        execute: function () {
            _export('Ui5Control', Ui5Control = function (_Ui5Element) {
                _inherits(Ui5Control, _Ui5Element);

                function Ui5Control(elem) {
                    _classCallCheck(this, Ui5Control);

                    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, elem));

                    _this.busy = false;
                    return _this;
                }

                Ui5Control.prototype.addChild = function addChild(child, elem) {
                    _Ui5Element.prototype.addChild.call(this, child, elem);
                };

                Ui5Control.prototype.removeChild = function removeChild(child, elem) {
                    _Ui5Element.prototype.removeChild.call(this, child, elem);
                };

                Ui5Control.prototype.attached = function attached() {
                    _Ui5Element.prototype.attached.call(this);
                };

                Ui5Control.prototype.fillProperties = function fillProperties(propertyObject) {
                    propertyObject.busy = this.busy;
                };

                Ui5Control.prototype.busyChanged = function busyChanged(newValue) {
                    if (this.UIElement != null) {
                        this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
                    }
                };

                Ui5Control.prototype.bind = function bind(param) {
                    _Ui5Element.prototype.bind.call(this, param);
                };

                Ui5Control.prototype.unbind = function unbind() {
                    _Ui5Element.prototype.unbind.call(this);
                };

                return Ui5Control;
            }(Ui5Element));

            _export('Ui5Control', Ui5Control);
        }
    };
});