'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control', '../item/item'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, Ui5Item, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, Ui5SegmentedButtonItem;

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
      _export('Ui5SegmentedButtonItem', Ui5SegmentedButtonItem = (_dec = customElement('ui5-segmented-button-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Item) {
        _inherits(Ui5SegmentedButtonItem, _Ui5Item);

        function Ui5SegmentedButtonItem(element) {
          _classCallCheck(this, Ui5SegmentedButtonItem);

          var _this = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

          _this._item = null;

          _initDefineProp(_this, 'icon', _descriptor, _this);

          _initDefineProp(_this, 'visible', _descriptor2, _this);

          _initDefineProp(_this, 'width', _descriptor3, _this);

          _initDefineProp(_this, 'press', _descriptor4, _this);

          _initDefineProp(_this, 'key', _descriptor5, _this);

          _initDefineProp(_this, 'enabled', _descriptor6, _this);

          _initDefineProp(_this, 'text', _descriptor7, _this);

          _initDefineProp(_this, 'textDirection', _descriptor8, _this);

          _this.attributeManager = new AttributeManager(element);
          _this.element = element;
          return _this;
        }

        Ui5SegmentedButtonItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5SegmentedButtonItem.prototype.attached = function attached() {
          var props = {
            width: this.width,
            icon: this.icon,
            visible: getBooleanFromAttributeValue(this.visible),
            press: this.press != null ? this.press : this.defaultPress
          };
          _Ui5Item.prototype.fillProperties.call(this, props);
          this._item = new sap.m.SegmentedButtonItem(props);

          if ($(this.element).closest("[ui5-container]").length > 0) {
            $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
          }
        };

        Ui5SegmentedButtonItem.prototype.addChild = function addChild(child, elem) {};

        Ui5SegmentedButtonItem.prototype.removeChild = function removeChild(child, elem) {};

        Ui5SegmentedButtonItem.prototype.iconChanged = function iconChanged(newValue) {
          if (this._item !== null) {
            this._item.setIcon(newValue);
          }
        };

        Ui5SegmentedButtonItem.prototype.visibleChanged = function visibleChanged(newValue) {
          if (this._item !== null) {
            this._item.setVisible(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5SegmentedButtonItem.prototype.widthChanged = function widthChanged(newValue) {
          this._item.setWidth(newValue);
        };

        return Ui5SegmentedButtonItem;
      }(Ui5Item), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'text', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5SegmentedButtonItem', Ui5SegmentedButtonItem);
    }
  };
});