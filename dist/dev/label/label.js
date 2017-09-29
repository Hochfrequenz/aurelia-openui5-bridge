'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, Ui5Label;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      customElement = _aureliaTemplating.customElement;
      noView = _aureliaTemplating.noView;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_commonAttributeManager) {
      AttributeManager = _commonAttributeManager.AttributeManager;
    }, function (_commonAttributes) {
      getBooleanFromAttributeValue = _commonAttributes.getBooleanFromAttributeValue;
    }],
    execute: function () {
      _export('Ui5Label', Ui5Label = (_dec = customElement('ui5-label'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Label(element) {
          _classCallCheck(this, Ui5Label);

          this._label = null;
          this._parent = null;
          this._relation = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'labelFor', _descriptor2, this);

          _initDefineProp(this, 'text', _descriptor3, this);

          _initDefineProp(this, 'required', _descriptor4, this);

          _initDefineProp(this, 'textAlign', _descriptor5, this);

          _initDefineProp(this, 'textDirection', _descriptor6, this);

          _initDefineProp(this, 'tooltip', _descriptor7, this);

          this.element = element;
        }

        Ui5Label.prototype.attached = function attached() {

          this._label = new sap.m.Label({
            text: this.text,
            labelFor: this.labelFor,
            required: getBooleanFromAttributeValue(this.required),
            textAlign: this.textAlign,
            textDirection: this.textDirection,
            tooltip: this.tooltip
          });
          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._relation = this._parent.addChild(this._label, this.element);
          }
        };

        Ui5Label.prototype.detached = function detached() {
          if (this._parent && this._parent.removeChildByRelation) {
            this._parent.removeChildByRelation(this._label, this._relation);
          }
        };

        Ui5Label.prototype.textChanged = function textChanged(newValue) {
          if (this._label !== null) {
            this._label.setText(newValue);
          }
        };

        Ui5Label.prototype.labelForChanged = function labelForChanged(newValue) {
          if (this._label !== null) {
            this._label.setLabelFor(newValue);
          }
        };

        Ui5Label.prototype.requiredChanged = function requiredChanged(newValue) {
          if (this._label !== null) {
            this._label.setRequired(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Label.prototype.textAlignChanged = function textAlignChanged(newValue) {
          if (this._label !== null) {
            this._label.setTextAlign(newValue);
          }
        };

        Ui5Label.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
          if (this._label !== null) {
            this._label.setTextDirection(newValue);
          }
        };

        Ui5Label.prototype.tooltipChanged = function tooltipChanged(newValue) {
          if (this._label !== null) {
            this._label.setTooltip(newValue);
          }
        };

        return Ui5Label;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'labelFor', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return "Begin";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'tooltip', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Label', Ui5Label);
    }
  };
});
//# sourceMappingURL=../dist/dev/label/label.js.map
