'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, Ui5StandardListItem;

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
      _export('Ui5StandardListItem', Ui5StandardListItem = (_dec = customElement('ui5-standard-list-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5StandardListItem(element) {
          _classCallCheck(this, Ui5StandardListItem);

          this._item = null;
          this._parent = null;
          this._relation = null;

          _initDefineProp(this, 'title', _descriptor, this);

          _initDefineProp(this, 'icon', _descriptor2, this);

          _initDefineProp(this, 'description', _descriptor3, this);

          _initDefineProp(this, 'iconInset', _descriptor4, this);

          _initDefineProp(this, 'iconDensityAware', _descriptor5, this);

          _initDefineProp(this, 'activeIcon', _descriptor6, this);

          _initDefineProp(this, 'info', _descriptor7, this);

          _initDefineProp(this, 'infoState', _descriptor8, this);

          _initDefineProp(this, 'adaptTitleSize', _descriptor9, this);

          _initDefineProp(this, 'titleTextDirection', _descriptor10, this);

          _initDefineProp(this, 'infoTextDirection', _descriptor11, this);

          this.element = element;
        }

        Ui5StandardListItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5StandardListItem.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          var props = {
            title: this.title,
            icon: this.icon,
            iconInset: getBooleanFromAttributeValue(this.iconInset),
            iconDensityAware: getBooleanFromAttributeValue(this.iconDensityAware),
            activeIcon: this.activeIcon,
            info: this.info,
            infoState: this.infoState,
            adaptTitleSize: getBooleanFromAttributeValue(this.adaptTitleSize),
            titleTextDirection: this.titleTextDirection,
            infoTextDirection: this.infoTextDirection
          };
          this._item = new sap.m.StandardListItem(props);
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
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
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
      })), _class2)) || _class) || _class));

      _export('Ui5StandardListItem', Ui5StandardListItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/standard-list-item/standard-list-item.js.map
