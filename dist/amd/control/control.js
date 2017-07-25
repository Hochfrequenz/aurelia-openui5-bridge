define(['exports', '../element/element', '../common/attributes'], function (exports, _element, _attributes) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Ui5Control = undefined;

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

    var Ui5Control = exports.Ui5Control = function (_Ui5Element) {
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
                this.UIElement.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
            }
        };

        return Ui5Control;
    }(_element.Ui5Element);
});