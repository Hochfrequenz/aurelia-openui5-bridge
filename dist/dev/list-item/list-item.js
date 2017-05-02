'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, Ui5ListItem;

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
    }, function (_controlControl) {
      Ui5Control = _controlControl.Ui5Control;
    }],
    execute: function () {
      _export('Ui5ListItem', Ui5ListItem = (_dec = customElement('ui5-list-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5ListItem(element) {
          _classCallCheck(this, Ui5ListItem);

          this._item = null;

          _initDefineProp(this, 'icon', _descriptor, this);

          _initDefineProp(this, 'additionalText', _descriptor2, this);

          _initDefineProp(this, 'key', _descriptor3, this);

          _initDefineProp(this, 'enabled', _descriptor4, this);

          _initDefineProp(this, 'text', _descriptor5, this);

          _initDefineProp(this, 'textDirection', _descriptor6, this);

          this.element = element;
        }

        Ui5ListItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5ListItem.prototype.attached = function attached() {
          this._item = new sap.ui.core.ListItem({
            text: this.text,
            icon: this.icon,
            enabled: getBooleanFromAttributeValue(this.enabled),
            additionalText: this.additionalText,
            textDirection: this.textDirection,
            key: this.key
          });
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
        };

        Ui5ListItem.prototype.addChild = function addChild(child, elem) {};

        Ui5ListItem.prototype.iconChanged = function iconChanged(newValue) {
          if (this._item !== null) {
            this._item.setIcon(newValue);
          }
        };

        Ui5ListItem.prototype.additionalTextChanged = function additionalTextChanged(newValue) {
          if (this._item !== null) {
            this._item.setAdditionalText(newValue);
          }
        };

        Ui5ListItem.prototype.keyChanged = function keyChanged(newValue) {
          if (this._item !== null) {
            this._item.setKey(newValue);
          }
        };

        Ui5ListItem.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._item !== null) {
            this._item.setEnabled(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5ListItem.prototype.textChanged = function textChanged(newValue) {
          if (this._item !== null) {
            this._item.setText(newValue);
          }
        };

        Ui5ListItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
          if (this._item !== null) {
            this._item.setTextDirection(newValue);
          }
        };

        return Ui5ListItem;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'additionalText', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5ListItem', Ui5ListItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/list-item/list-item.js.map
