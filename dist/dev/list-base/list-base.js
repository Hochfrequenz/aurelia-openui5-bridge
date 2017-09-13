'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, Ui5ListBase;

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
    }],
    execute: function () {
      _export('Ui5ListBase', Ui5ListBase = (_dec = inject(Element), _dec2 = bindable(), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5ListBase, _Ui5Control);

        Ui5ListBase.prototype.defaultFunc = function defaultFunc() {};

        function Ui5ListBase(elem) {
          _classCallCheck(this, Ui5ListBase);

          var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, elem));

          _initDefineProp(_this, 'inset', _descriptor, _this);

          _initDefineProp(_this, 'headerText', _descriptor2, _this);

          _initDefineProp(_this, 'headerDesign', _descriptor3, _this);

          _initDefineProp(_this, 'footerText', _descriptor4, _this);

          _initDefineProp(_this, 'mode', _descriptor5, _this);

          _initDefineProp(_this, 'width', _descriptor6, _this);

          _initDefineProp(_this, 'includeItemInSelection', _descriptor7, _this);

          _initDefineProp(_this, 'showUnread', _descriptor8, _this);

          _initDefineProp(_this, 'noDataText', _descriptor9, _this);

          _initDefineProp(_this, 'showNoData', _descriptor10, _this);

          _initDefineProp(_this, 'enableBusyIndicator', _descriptor11, _this);

          _initDefineProp(_this, 'modeAnimationOn', _descriptor12, _this);

          _initDefineProp(_this, 'showSeparator', _descriptor13, _this);

          _initDefineProp(_this, 'swipeDirection', _descriptor14, _this);

          _initDefineProp(_this, 'growing', _descriptor15, _this);

          _initDefineProp(_this, 'growingThreshold', _descriptor16, _this);

          _initDefineProp(_this, 'growingTriggerText', _descriptor17, _this);

          _initDefineProp(_this, 'growingScrollToLoad', _descriptor18, _this);

          _initDefineProp(_this, 'growingDirection', _descriptor19, _this);

          _initDefineProp(_this, 'rememberSelections', _descriptor20, _this);

          _initDefineProp(_this, 'keyboardMode', _descriptor21, _this);

          _initDefineProp(_this, 'delete', _descriptor22, _this);

          _initDefineProp(_this, 'itemPress', _descriptor23, _this);

          _initDefineProp(_this, 'selectionChange', _descriptor24, _this);

          _initDefineProp(_this, 'swipe', _descriptor25, _this);

          _initDefineProp(_this, 'updateFinished', _descriptor26, _this);

          _initDefineProp(_this, 'updateStarted', _descriptor27, _this);

          return _this;
        }

        Ui5ListBase.prototype.addChild = function addChild(child, elem) {
          _Ui5Control.prototype.addChild.call(this, child, elem);
        };

        Ui5ListBase.prototype.removeChild = function removeChild(child, elem) {
          _Ui5Control.prototype.removeChild.call(this, child, elem);
        };

        Ui5ListBase.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          _Ui5Control.prototype.removeChildByRelation.call(this, child, relation);
        };

        Ui5ListBase.prototype.attached = function attached() {
          _Ui5Control.prototype.attached.call(this);
        };

        Ui5ListBase.prototype.fillProperties = function fillProperties(propertyObject) {
          propertyObject.inset = getBooleanFromAttributeValue(this.inset), propertyObject.headerText = this.headerText, propertyObject.headerDesign = this.headerDesign, propertyObject.footerText = this.footerText, propertyObject.mode = this.mode, propertyObject.width = this.width, propertyObject.includeItemInSelection = getBooleanFromAttributeValue(this.includeItemInSelection), propertyObject.showUnread = getBooleanFromAttributeValue(this.showUnread), propertyObject.noDataText = this.noDataText;
          propertyObject.showNoData = getBooleanFromAttributeValue(this.showNoData), propertyObject.enableBusyIndicator = getBooleanFromAttributeValue(this.enableBusyIndicator), propertyObject.modeAnimationOn = getBooleanFromAttributeValue(this.modeAnimationOn), propertyObject.showSeparator = this.showSeparator, propertyObject.swipeDirection = this.swipeDirection, propertyObject.growing = getBooleanFromAttributeValue(this.growing), propertyObject.growingThreshold = +this.growingThreshold, propertyObject.growingTriggerText = this.growingTriggerText, propertyObject.growingScrollToLoad = getBooleanFromAttributeValue(this.growingScrollToLoad), propertyObject.growingDirection = this.growingDirection, propertyObject.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections), propertyObject.keyboardMode = this.keyboardMode, propertyObject.delete = this.delete, propertyObject.itemPress = this.itemPress, propertyObject.selectionChange = this.selectionChange, propertyObject.swipe = this.swipe, propertyObject.updateFinished = this.updateFinished, propertyObject.updateStarted = this.updateStarted;
        };

        Ui5ListBase.prototype.busyChanged = function busyChanged(newValue) {
          if (this.UIElement != null) {
            this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5ListBase;
      }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'inset', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'headerText', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'headerDesign', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 'Standard';
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'footerText', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'mode', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return '100%';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'includeItemInSelection', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'showUnread', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showNoData', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'enableBusyIndicator', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'modeAnimationOn', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'showSeparator', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return 'All';
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'swipeDirection', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return 'Both';
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'growing', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
          return 20;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'growingTriggerText', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'growingScrollToLoad', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'growingDirection', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
          return 'Downwards';
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'keyboardMode', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
          return 'Navigation';
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'delete', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'itemPress', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'selectionChange', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'swipe', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'updateFinished', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'updateStarted', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class));

      _export('Ui5ListBase', Ui5ListBase);
    }
  };
});
//# sourceMappingURL=../dist/dev/list-base/list-base.js.map
