'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5GridData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _layoutData = require('../layout-data/layout-data');

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Ui5GridData = exports.Ui5GridData = (_dec = (0, _aureliaTemplating.customElement)('ui5-grid-data'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaFramework.computedFrom)('_griddata'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5LayoutData) {
    _inherits(Ui5GridData, _Ui5LayoutData);

    function Ui5GridData(element) {
        _classCallCheck(this, Ui5GridData);

        var _this = _possibleConstructorReturn(this, _Ui5LayoutData.call(this, element));

        _this._griddata = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'span', _descriptor2, _this);

        _initDefineProp(_this, 'spanXL', _descriptor3, _this);

        _initDefineProp(_this, 'spanL', _descriptor4, _this);

        _initDefineProp(_this, 'spanM', _descriptor5, _this);

        _initDefineProp(_this, 'spanS', _descriptor6, _this);

        _initDefineProp(_this, 'indent', _descriptor7, _this);

        _initDefineProp(_this, 'indentXL', _descriptor8, _this);

        _initDefineProp(_this, 'indentL', _descriptor9, _this);

        _initDefineProp(_this, 'indentM', _descriptor10, _this);

        _initDefineProp(_this, 'indentS', _descriptor11, _this);

        _initDefineProp(_this, 'visibleXL', _descriptor12, _this);

        _initDefineProp(_this, 'visibleL', _descriptor13, _this);

        _initDefineProp(_this, 'visibleM', _descriptor14, _this);

        _initDefineProp(_this, 'visibleS', _descriptor15, _this);

        _initDefineProp(_this, 'moveBackwards', _descriptor16, _this);

        _initDefineProp(_this, 'moveForward', _descriptor17, _this);

        _initDefineProp(_this, 'linebreak', _descriptor18, _this);

        _initDefineProp(_this, 'linebreakXL', _descriptor19, _this);

        _initDefineProp(_this, 'linebreakL', _descriptor20, _this);

        _initDefineProp(_this, 'linebreakM', _descriptor21, _this);

        _initDefineProp(_this, 'linebreakS', _descriptor22, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor23, _this);

        _initDefineProp(_this, 'validationError', _descriptor24, _this);

        _initDefineProp(_this, 'parseError', _descriptor25, _this);

        _initDefineProp(_this, 'formatError', _descriptor26, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor27, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5GridData.prototype.fillProperties = function fillProperties(params) {
        params.span = this.span;
        params.spanXL = this.spanXL ? parseInt(this.spanXL) : 0;
        params.spanL = this.spanL ? parseInt(this.spanL) : 0;
        params.spanM = this.spanM ? parseInt(this.spanM) : 0;
        params.spanS = this.spanS ? parseInt(this.spanS) : 0;
        params.indent = this.indent;
        params.indentXL = this.indentXL ? parseInt(this.indentXL) : 0;
        params.indentL = this.indentL ? parseInt(this.indentL) : 0;
        params.indentM = this.indentM ? parseInt(this.indentM) : 0;
        params.indentS = this.indentS ? parseInt(this.indentS) : 0;
        params.visibleXL = (0, _attributes.getBooleanFromAttributeValue)(this.visibleXL);
        params.visibleL = (0, _attributes.getBooleanFromAttributeValue)(this.visibleL);
        params.visibleM = (0, _attributes.getBooleanFromAttributeValue)(this.visibleM);
        params.visibleS = (0, _attributes.getBooleanFromAttributeValue)(this.visibleS);
        params.moveBackwards = this.moveBackwards;
        params.moveForward = this.moveForward;
        params.linebreak = (0, _attributes.getBooleanFromAttributeValue)(this.linebreak);
        params.linebreakXL = (0, _attributes.getBooleanFromAttributeValue)(this.linebreakXL);
        params.linebreakL = (0, _attributes.getBooleanFromAttributeValue)(this.linebreakL);
        params.linebreakM = (0, _attributes.getBooleanFromAttributeValue)(this.linebreakM);
        params.linebreakS = (0, _attributes.getBooleanFromAttributeValue)(this.linebreakS);

        _Ui5LayoutData.prototype.fillProperties.call(this, params);
    };

    Ui5GridData.prototype.defaultFunc = function defaultFunc() {};

    Ui5GridData.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._griddata = new sap.ui.layout.GridData(this.ui5Id, params);else this._griddata = new sap.ui.layout.GridData(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._griddata.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._griddata, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._griddata, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._griddata, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._griddata.placeAt) this._griddata.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }

        this.attributeManager.addAttributes({ "ui5-id": this._griddata.sId });
    };

    Ui5GridData.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    this._parent.removeChildByRelation(this._griddata, this._relation);
                }
            } else {
                this._griddata.destroy();
            }
            _Ui5LayoutData.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5GridData.prototype.addChild = function addChild(child, elem, afterElement) {
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

            try {
                if (elem.localName == 'tooltip') {
                    this._griddata.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = null;if (afterElement) _index = this._griddata.indexOfCustomData(afterElement);if (_index) this._griddata.insertCustomData(child, _index + 1);else this._griddata.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._griddata.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = null;if (afterElement) _index = this._griddata.indexOfDependent(afterElement);if (_index) this._griddata.insertDependent(child, _index + 1);else this._griddata.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5GridData.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'tooltip') {
                this._griddata.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._griddata.removeCustomData(child);
            }
            if (relation == 'layoutData') {
                this._griddata.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._griddata.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5GridData.prototype.spanChanged = function spanChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setSpan(newValue);
        }
    };

    Ui5GridData.prototype.spanXLChanged = function spanXLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setSpanXL(newValue);
        }
    };

    Ui5GridData.prototype.spanLChanged = function spanLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setSpanL(newValue);
        }
    };

    Ui5GridData.prototype.spanMChanged = function spanMChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setSpanM(newValue);
        }
    };

    Ui5GridData.prototype.spanSChanged = function spanSChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setSpanS(newValue);
        }
    };

    Ui5GridData.prototype.indentChanged = function indentChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setIndent(newValue);
        }
    };

    Ui5GridData.prototype.indentXLChanged = function indentXLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setIndentXL(newValue);
        }
    };

    Ui5GridData.prototype.indentLChanged = function indentLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setIndentL(newValue);
        }
    };

    Ui5GridData.prototype.indentMChanged = function indentMChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setIndentM(newValue);
        }
    };

    Ui5GridData.prototype.indentSChanged = function indentSChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setIndentS(newValue);
        }
    };

    Ui5GridData.prototype.visibleXLChanged = function visibleXLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setVisibleXL((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.visibleLChanged = function visibleLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setVisibleL((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.visibleMChanged = function visibleMChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setVisibleM((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.visibleSChanged = function visibleSChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setVisibleS((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.moveBackwardsChanged = function moveBackwardsChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setMoveBackwards(newValue);
        }
    };

    Ui5GridData.prototype.moveForwardChanged = function moveForwardChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setMoveForward(newValue);
        }
    };

    Ui5GridData.prototype.linebreakChanged = function linebreakChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setLinebreak((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.linebreakXLChanged = function linebreakXLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setLinebreakXL((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.linebreakLChanged = function linebreakLChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setLinebreakL((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.linebreakMChanged = function linebreakMChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setLinebreakM((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.linebreakSChanged = function linebreakSChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.setLinebreakS((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5GridData.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.attachValidationSuccess(newValue);
        }
    };

    Ui5GridData.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.attachValidationError(newValue);
        }
    };

    Ui5GridData.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.attachParseError(newValue);
        }
    };

    Ui5GridData.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.attachFormatError(newValue);
        }
    };

    Ui5GridData.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._griddata !== null) {
            this._griddata.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5GridData, [{
        key: 'UIElement',
        get: function get() {
            return this._griddata;
        }
    }]);

    return Ui5GridData;
}(_layoutData.Ui5LayoutData), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'span', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'spanXL', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'spanL', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'spanM', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'spanS', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'indent', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'indentXL', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'indentL', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'indentM', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'indentS', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'visibleXL', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'visibleL', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'visibleM', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'visibleS', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'moveBackwards', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'moveForward', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'linebreak', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'linebreakXL', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'linebreakL', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'linebreakM', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'linebreakS', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec26], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec27], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec28], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec29], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);