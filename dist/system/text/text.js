'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Ui5Text;

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
      _export('Ui5Text', Ui5Text = (_dec = customElement('ui5-text'), _dec2 = inject(Element), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Text(element) {
          _classCallCheck(this, Ui5Text);

          this._text = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'text', _descriptor2, this);

          _initDefineProp(this, 'wrapping', _descriptor3, this);

          _initDefineProp(this, 'textAlign', _descriptor4, this);

          _initDefineProp(this, 'maxLines', _descriptor5, this);

          this.element = element;
        }

        Ui5Text.prototype.attached = function attached() {

          this._text = new sap.m.Text({
            text: this.text != null ? this.text : this.element.innerText.trim(),
            wrapping: getBooleanFromAttributeValue(this.wrapping),
            textAlign: this.textAlign,
            maxLines: this.maxLines
          });
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
        };

        Ui5Text.prototype.textChanged = function textChanged(newValue) {
          if (this._text != null) {
            this._text.setText(newValue);
          }
        };

        return Ui5Text;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'text', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'wrapping', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return "Begin";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'maxLines', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Text', Ui5Text);
    }
  };
});