'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ui5SearchField = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaFramework = require('aurelia-framework');

var _attributeManager = require('../common/attributeManager');

var _attributes = require('../common/attributes');

var _control = require('../control/control');

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

var Ui5SearchField = exports.Ui5SearchField = (_dec = (0, _aureliaTemplating.customElement)('ui5-search-field'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaFramework.computedFrom)('_searchfield'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
    _inherits(Ui5SearchField, _Ui5Control);

    function Ui5SearchField(element) {
        _classCallCheck(this, Ui5SearchField);

        var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

        _this._searchfield = null;
        _this._parent = null;
        _this._relation = null;

        _initDefineProp(_this, 'ui5Id', _descriptor, _this);

        _initDefineProp(_this, 'value', _descriptor2, _this);

        _initDefineProp(_this, 'width', _descriptor3, _this);

        _initDefineProp(_this, 'enabled', _descriptor4, _this);

        _initDefineProp(_this, 'visible', _descriptor5, _this);

        _initDefineProp(_this, 'maxLength', _descriptor6, _this);

        _initDefineProp(_this, 'placeholder', _descriptor7, _this);

        _initDefineProp(_this, 'showRefreshButton', _descriptor8, _this);

        _initDefineProp(_this, 'refreshButtonTooltip', _descriptor9, _this);

        _initDefineProp(_this, 'showSearchButton', _descriptor10, _this);

        _initDefineProp(_this, 'enableSuggestions', _descriptor11, _this);

        _initDefineProp(_this, 'search', _descriptor12, _this);

        _initDefineProp(_this, 'liveChange', _descriptor13, _this);

        _initDefineProp(_this, 'suggest', _descriptor14, _this);

        _initDefineProp(_this, 'busy', _descriptor15, _this);

        _initDefineProp(_this, 'busyIndicatorDelay', _descriptor16, _this);

        _initDefineProp(_this, 'visible', _descriptor17, _this);

        _initDefineProp(_this, 'fieldGroupIds', _descriptor18, _this);

        _initDefineProp(_this, 'validateFieldGroup', _descriptor19, _this);

        _initDefineProp(_this, 'validationSuccess', _descriptor20, _this);

        _initDefineProp(_this, 'validationError', _descriptor21, _this);

        _initDefineProp(_this, 'parseError', _descriptor22, _this);

        _initDefineProp(_this, 'formatError', _descriptor23, _this);

        _initDefineProp(_this, 'modelContextChange', _descriptor24, _this);

        _this.element = element;
        _this.attributeManager = new _attributeManager.AttributeManager(_this.element);
        return _this;
    }

    Ui5SearchField.prototype.fillProperties = function fillProperties(params) {
        params.value = this.value;
        params.width = this.width;
        params.enabled = (0, _attributes.getBooleanFromAttributeValue)(this.enabled);
        params.visible = (0, _attributes.getBooleanFromAttributeValue)(this.visible);
        params.maxLength = this.maxLength ? parseInt(this.maxLength) : 0;
        params.placeholder = this.placeholder;
        params.showRefreshButton = (0, _attributes.getBooleanFromAttributeValue)(this.showRefreshButton);
        params.refreshButtonTooltip = this.refreshButtonTooltip;
        params.showSearchButton = (0, _attributes.getBooleanFromAttributeValue)(this.showSearchButton);
        params.enableSuggestions = (0, _attributes.getBooleanFromAttributeValue)(this.enableSuggestions);
        params.search = this.search == null ? this.defaultFunc : this.search;
        params.liveChange = this.liveChange == null ? this.defaultFunc : this.liveChange;
        params.suggest = this.suggest == null ? this.defaultFunc : this.suggest;

        _Ui5Control.prototype.fillProperties.call(this, params);
    };

    Ui5SearchField.prototype.defaultFunc = function defaultFunc() {};

    Ui5SearchField.prototype.attached = function attached() {
        var that = this;
        var params = {};
        this.fillProperties(params);
        if (this.ui5Id) this._searchfield = new sap.m.SearchField(this.ui5Id, params);else this._searchfield = new sap.m.SearchField(params);

        if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            if (!this._parent.UIElement || this._parent.UIElement.sId != this._searchfield.sId) {
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                this._relation = this._parent.addChild(this._searchfield, this.element, prevSibling);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            } else {
                this._parent = $(this.element.parentElement).closest("[ui5-container]")[0].au.controller.viewModel;
                var prevSibling = null;
                if (this.element.previousElementSibling && this.element.previousElementSibling.au) {
                    prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
                    this._relation = this._parent.addChild(this._searchfield, this.element, prevSibling);
                } else this._relation = this._parent.addChild(this._searchfield, this.element);
                this.attributeManager.addAttributes({ "ui5-container": '' });
            }
        } else {
            if (this._searchfield.placeAt) this._searchfield.placeAt(this.element.parentElement);
            this.attributeManager.addAttributes({ "ui5-container": '' });
            this.attributeManager.addClasses("ui5-hide");
        }
        this._searchfield.attachLiveChange(function (event) {
            that.value = event.mParameters.newValue;;
        });

        this.attributeManager.addAttributes({ "ui5-id": this._searchfield.sId });
    };

    Ui5SearchField.prototype.detached = function detached() {
        try {
            if ($(this.element).closest("[ui5-container]").length > 0) {
                if (this._parent && this._relation) {
                    this._parent.removeChildByRelation(this._searchfield, this._relation);
                }
            } else {
                this._searchfield.destroy();
            }
            _Ui5Control.prototype.detached.call(this);
        } catch (err) {}
    };

    Ui5SearchField.prototype.addChild = function addChild(child, elem, afterElement) {
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
                if (elem.localName == 'suggestionitems') {
                    var _index = null;if (afterElement) _index = this._searchfield.indexOfSuggestionItem(afterElement);if (_index) this._searchfield.insertSuggestionItem(child, _index + 1);else this._searchfield.addSuggestionItem(child, 0);return elem.localName;
                }
                if (elem.localName == 'tooltip') {
                    this._searchfield.setTooltip(child);return elem.localName;
                }
                if (elem.localName == 'customdata') {
                    var _index = null;if (afterElement) _index = this._searchfield.indexOfCustomData(afterElement);if (_index) this._searchfield.insertCustomData(child, _index + 1);else this._searchfield.addCustomData(child, 0);return elem.localName;
                }
                if (elem.localName == 'layoutdata') {
                    this._searchfield.setLayoutData(child);return elem.localName;
                }
                if (elem.localName == 'dependents') {
                    var _index = null;if (afterElement) _index = this._searchfield.indexOfDependent(afterElement);if (_index) this._searchfield.insertDependent(child, _index + 1);else this._searchfield.addDependent(child, 0);return elem.localName;
                }
            } catch (err) {}
        }
    };

    Ui5SearchField.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
        try {
            if (relation == 'suggestionitems') {
                this._searchfield.removeSuggestionItem(child);
            }
            if (relation == 'tooltip') {
                this._searchfield.destroyTooltip(child);
            }
            if (relation == 'customdata') {
                this._searchfield.removeCustomData(child);
            }
            if (relation == 'layoutData') {
                this._searchfield.destroyLayoutData(child);
            }
            if (relation == 'dependents') {
                this._searchfield.removeDependent(child);
            }
        } catch (err) {}
    };

    Ui5SearchField.prototype.valueChanged = function valueChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setValue(newValue);
        }
    };

    Ui5SearchField.prototype.widthChanged = function widthChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setWidth(newValue);
        }
    };

    Ui5SearchField.prototype.enabledChanged = function enabledChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setEnabled((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setMaxLength(newValue);
        }
    };

    Ui5SearchField.prototype.placeholderChanged = function placeholderChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setPlaceholder(newValue);
        }
    };

    Ui5SearchField.prototype.showRefreshButtonChanged = function showRefreshButtonChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setShowRefreshButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.refreshButtonTooltipChanged = function refreshButtonTooltipChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setRefreshButtonTooltip(newValue);
        }
    };

    Ui5SearchField.prototype.showSearchButtonChanged = function showSearchButtonChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setShowSearchButton((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.enableSuggestionsChanged = function enableSuggestionsChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setEnableSuggestions((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.searchChanged = function searchChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachSearch(newValue);
        }
    };

    Ui5SearchField.prototype.liveChangeChanged = function liveChangeChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachLiveChange(newValue);
        }
    };

    Ui5SearchField.prototype.suggestChanged = function suggestChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachSuggest(newValue);
        }
    };

    Ui5SearchField.prototype.busyChanged = function busyChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setBusy((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.busyIndicatorDelayChanged = function busyIndicatorDelayChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setBusyIndicatorDelay(newValue);
        }
    };

    Ui5SearchField.prototype.visibleChanged = function visibleChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
        }
    };

    Ui5SearchField.prototype.fieldGroupIdsChanged = function fieldGroupIdsChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.setFieldGroupIds(newValue);
        }
    };

    Ui5SearchField.prototype.validateFieldGroupChanged = function validateFieldGroupChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachValidateFieldGroup(newValue);
        }
    };

    Ui5SearchField.prototype.validationSuccessChanged = function validationSuccessChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachValidationSuccess(newValue);
        }
    };

    Ui5SearchField.prototype.validationErrorChanged = function validationErrorChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachValidationError(newValue);
        }
    };

    Ui5SearchField.prototype.parseErrorChanged = function parseErrorChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachParseError(newValue);
        }
    };

    Ui5SearchField.prototype.formatErrorChanged = function formatErrorChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachFormatError(newValue);
        }
    };

    Ui5SearchField.prototype.modelContextChangeChanged = function modelContextChangeChanged(newValue) {
        if (this._searchfield !== null) {
            this._searchfield.attachModelContextChange(newValue);
        }
    };

    _createClass(Ui5SearchField, [{
        key: 'UIElement',
        get: function get() {
            return this._searchfield;
        }
    }]);

    return Ui5SearchField;
}(_control.Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'maxLength', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return 0;
    }
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showRefreshButton', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'refreshButtonTooltip', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
        return null;
    }
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showSearchButton', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableSuggestions', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'search', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'liveChange', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'suggest', [_dec15], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec16], {
    enumerable: true,
    initializer: function initializer() {
        return false;
    }
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'busyIndicatorDelay', [_dec17], {
    enumerable: true,
    initializer: function initializer() {
        return 1000;
    }
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec18], {
    enumerable: true,
    initializer: function initializer() {
        return true;
    }
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'fieldGroupIds', [_dec19], {
    enumerable: true,
    initializer: function initializer() {
        return '[]';
    }
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'validateFieldGroup', [_dec20], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'validationSuccess', [_dec21], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'validationError', [_dec22], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'parseError', [_dec23], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'formatError', [_dec24], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'modelContextChange', [_dec25], {
    enumerable: true,
    initializer: function initializer() {
        return this.defaultFunc;
    }
}), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec26], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class);