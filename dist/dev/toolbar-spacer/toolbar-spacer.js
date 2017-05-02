'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, Ui5ToolbarSpacer;

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
      _export('Ui5ToolbarSpacer', Ui5ToolbarSpacer = (_dec = customElement('ui5-toolbar-spacer'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5ToolbarSpacer(element) {
          _classCallCheck(this, Ui5ToolbarSpacer);

          this._spacer = null;

          _initDefineProp(this, 'width', _descriptor, this);

          this.element = element;
        }

        Ui5ToolbarSpacer.prototype.attached = function attached() {

          this._spacer = new sap.m.ToolbarSpacer({
            widtht: this.width
          });
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._spacer, this.element);
        };

        Ui5ToolbarSpacer.prototype.widthChanged = function widthChanged(newValue) {
          if (this._spacer !== null) {
            this._spacer.setWidth(newValue);
          }
        };

        return Ui5ToolbarSpacer;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5ToolbarSpacer', Ui5ToolbarSpacer);
    }
  };
});
//# sourceMappingURL=../dist/dev/toolbar-spacer/toolbar-spacer.js.map
