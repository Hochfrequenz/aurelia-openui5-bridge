'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control', '../list-item-base/list-item-base', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, Ui5ListItemBase, computedFrom, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, Ui5StandardListItem;

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
    }, function (_listItemBaseListItemBase) {
      Ui5ListItemBase = _listItemBaseListItemBase.Ui5ListItemBase;
    }, function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('Ui5StandardListItem', Ui5StandardListItem = (_dec = customElement('ui5-standard-list-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = computedFrom('_item'), _dec(_class = _dec2(_class = (_class2 = function (_Ui5ListItemBase) {
        _inherits(Ui5StandardListItem, _Ui5ListItemBase);

        _createClass(Ui5StandardListItem, [{
          key: 'UIElement',
          get: function get() {
            return this._item;
          }
        }]);

        function Ui5StandardListItem(element) {
          _classCallCheck(this, Ui5StandardListItem);

          var _this = _possibleConstructorReturn(this, _Ui5ListItemBase.call(this, element));

          _this._item = null;
          _this._parent = null;
          _this._relation = null;

          _initDefineProp(_this, 'title', _descriptor, _this);

          _initDefineProp(_this, 'icon', _descriptor2, _this);

          _initDefineProp(_this, 'description', _descriptor3, _this);

          _initDefineProp(_this, 'iconInset', _descriptor4, _this);

          _initDefineProp(_this, 'iconDensityAware', _descriptor5, _this);

          _initDefineProp(_this, 'activeIcon', _descriptor6, _this);

          _initDefineProp(_this, 'info', _descriptor7, _this);

          _initDefineProp(_this, 'infoState', _descriptor8, _this);

          _initDefineProp(_this, 'adaptTitleSize', _descriptor9, _this);

          _initDefineProp(_this, 'titleTextDirection', _descriptor10, _this);

          _initDefineProp(_this, 'infoTextDirection', _descriptor11, _this);

          _initDefineProp(_this, 'visible', _descriptor12, _this);

          _initDefineProp(_this, 'type', _descriptor13, _this);

          _initDefineProp(_this, 'unread', _descriptor14, _this);

          _initDefineProp(_this, 'selected', _descriptor15, _this);

          _initDefineProp(_this, 'counter', _descriptor16, _this);

          _initDefineProp(_this, 'highlight', _descriptor17, _this);

          _initDefineProp(_this, 'tap', _descriptor18, _this);

          _initDefineProp(_this, 'detailTap', _descriptor19, _this);

          _initDefineProp(_this, 'press', _descriptor20, _this);

          _initDefineProp(_this, 'detailPress', _descriptor21, _this);

          _this.element = element;
          return _this;
        }

        Ui5StandardListItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5StandardListItem.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          var props = {
            title: this.title,
            icon: this.icon,
            description: this.description,
            iconInset: getBooleanFromAttributeValue(this.iconInset),
            iconDensityAware: getBooleanFromAttributeValue(this.iconDensityAware),
            activeIcon: this.activeIcon,
            info: this.info,
            infoState: this.infoState,
            adaptTitleSize: getBooleanFromAttributeValue(this.adaptTitleSize),
            titleTextDirection: this.titleTextDirection,
            infoTextDirection: this.infoTextDirection
          };
          _Ui5ListItemBase.prototype.fillProperties.call(this, props);
          this._item = new sap.m.StandardListItem(props);

          if (this._customData) this._item.addCustomData(this._customData);

          attributeManager.addAttributes({ "ui5-container": '' });
          this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
          this._relation = this._parent.addChild(this._item, this.element);
        };

        Ui5StandardListItem.prototype.detached = function detached() {
          if (this._parent && this._parent.removeChildByRelation) {
            this._parent.removeChildByRelation(this._item, this._relation);
          }
        };

        Ui5StandardListItem.prototype.titleChanged = function titleChanged(newValue) {
          if (this._item !== null) {
            this._item.setTitle(newValue);
          }
        };

        Ui5StandardListItem.prototype.iconChanged = function iconChanged(newValue) {
          if (this._item !== null) {
            this._item.setIcon(newValue);
          }
        };

        Ui5StandardListItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
          if (this._item !== null) {
            this._item.setDescription(newValue);
          }
        };

        Ui5StandardListItem.prototype.iconInsetChanged = function iconInsetChanged(newValue) {
          if (this._item !== null) {
            this._item.setIconInset(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5StandardListItem.prototype.iconDensityAwareChanged = function iconDensityAwareChanged(newValue) {
          if (this._item !== null) {
            this._item.setIconDensityAware(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5StandardListItem.prototype.activeIconChanged = function activeIconChanged(newValue) {
          if (this._item !== null) {
            this._item.setActiveIcon(newValue);
          }
        };

        Ui5StandardListItem.prototype.infoChanged = function infoChanged(newValue) {
          if (this._item !== null) {
            this._item.setInfo(newValue);
          }
        };

        Ui5StandardListItem.prototype.infoStateChanged = function infoStateChanged(newValue) {
          if (this._item !== null) {
            this._item.setInfoState(newValue);
          }
        };

        Ui5StandardListItem.prototype.adaptTitleSizeChanged = function adaptTitleSizeChanged(newValue) {
          if (this._item !== null) {
            this._item.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5StandardListItem.prototype.titleTextDirectionChanged = function titleTextDirectionChanged(newValue) {
          if (this._item !== null) {
            this._item.setTitleTextDirection(newValue);
          }
        };

        Ui5StandardListItem.prototype.infoTextDirectionChanged = function infoTextDirectionChanged(newValue) {
          if (this._item !== null) {
            this._item.setInfoTextDirection(newValue);
          }
        };

        return Ui5StandardListItem;
      }(Ui5ListItemBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'iconInset', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'iconDensityAware', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'activeIcon', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'info', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'infoState', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'adaptTitleSize', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'titleTextDirection', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return 'Inherit';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'infoTextDirection', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return 'Inherit';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return 'Inactive';
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'unread', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'selected', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'highlight', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'tap', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'detailTap', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'detailPress', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec24], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

      _export('Ui5StandardListItem', Ui5StandardListItem);
    }
  };
});