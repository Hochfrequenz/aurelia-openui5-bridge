'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control', '../item/item'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, Ui5Item, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, Ui5ViewSettingsItem;

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
    }, function (_itemItem) {
      Ui5Item = _itemItem.Ui5Item;
    }],
    execute: function () {
      _export('Ui5ViewSettingsItem', Ui5ViewSettingsItem = (_dec = customElement('ui5-view-settings-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
        _inherits(Ui5ViewSettingsItem, _Ui5Item);

        function Ui5ViewSettingsItem(element) {
          _classCallCheck(this, Ui5ViewSettingsItem);

          var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

          _this._item = null;
          _this._container = null;

          _initDefineProp(_this, 'selected', _descriptor, _this);

          _initDefineProp(_this, 'itemPropertyChanged', _descriptor2, _this);

          _initDefineProp(_this, 'key', _descriptor3, _this);

          _initDefineProp(_this, 'enabled', _descriptor4, _this);

          _initDefineProp(_this, 'text', _descriptor5, _this);

          _initDefineProp(_this, 'textDirection', _descriptor6, _this);

          _this.element = element;
          return _this;
        }

        Ui5ViewSettingsItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5ViewSettingsItem.prototype.attached = function attached() {
          var props = {
            selected: getBooleanFromAttributeValue(this.selected),
            itemPropertyChanged: this.itemPropertyChanged
          };
          _Ui5Item.prototype.fillProperties.call(this, props);
          this._item = new sap.m.ViewSettingsItem(props);
          this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
          this._relation = this._container.addChild(this._item, this.element);
        };

        Ui5ViewSettingsItem.prototype.detached = function detached() {
          if (this._container && this._container.removeChildByRelation) this._container.removeChildByRelation(this._item, this._relation);
        };

        Ui5ViewSettingsItem.prototype.addChild = function addChild(child, elem) {};

        Ui5ViewSettingsItem.prototype.selectedChanged = function selectedChanged(newValue) {
          if (this._item !== null) {
            this._item.setSelected(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5ViewSettingsItem;
      }(Ui5Item), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
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

      _export('Ui5ViewSettingsItem', Ui5ViewSettingsItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/view-settings-item/view-settings-item.js.map