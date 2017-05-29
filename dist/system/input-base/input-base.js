'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, Ui5InputBase;

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
      _export('Ui5InputBase', Ui5InputBase = (_dec = customElement('ui5-input-base'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5Control) {
        _inherits(Ui5InputBase, _Ui5Control);

        function Ui5InputBase(element) {
          _classCallCheck(this, Ui5InputBase);

          var _this = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

          _this._picker = null;

          _initDefineProp(_this, 'value', _descriptor, _this);

          _initDefineProp(_this, 'width', _descriptor2, _this);

          _initDefineProp(_this, 'enabled', _descriptor3, _this);

          _initDefineProp(_this, 'valueState', _descriptor4, _this);

          _initDefineProp(_this, 'name', _descriptor5, _this);

          _initDefineProp(_this, 'placeholder', _descriptor6, _this);

          _initDefineProp(_this, 'editable', _descriptor7, _this);

          _initDefineProp(_this, 'valueStateText', _descriptor8, _this);

          _initDefineProp(_this, 'showValueStateMessage', _descriptor9, _this);

          _initDefineProp(_this, 'textAlign', _descriptor10, _this);

          _initDefineProp(_this, 'textDirection', _descriptor11, _this);

          _initDefineProp(_this, 'required', _descriptor12, _this);

          _initDefineProp(_this, 'change', _descriptor13, _this);

          _this.element = element;
          return _this;
        }

        Ui5InputBase.prototype.defaultFunc = function defaultFunc() {};

        Ui5InputBase.prototype.attached = function attached() {
          _Ui5Control.prototype.attached.call(this);
        };

        Ui5InputBase.prototype.addChild = function addChild(child, elem) {
          _Ui5Control.prototype.addChild.call(this, child, elem);
        };

        Ui5InputBase.prototype.removeChild = function removeChild(child, elem) {
          _Ui5Control.prototype.removeChild.call(this, child, elem);
        };

        Ui5InputBase.prototype.valueChanged = function valueChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setValue(newValue);
          }
        };

        Ui5InputBase.prototype.widthChanged = function widthChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setWidth(newValue);
          }
        };

        Ui5InputBase.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setEnabled(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5InputBase.prototype.valueStateChanged = function valueStateChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setValueState(newValue);
          }
        };

        Ui5InputBase.prototype.nameChanged = function nameChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setName(newValue);
          }
        };

        Ui5InputBase.prototype.placeholderChanged = function placeholderChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setPlaceholder(newValue);
          }
        };

        Ui5InputBase.prototype.editableChanged = function editableChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setEditable(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5InputBase.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setValueStateText(newValue);
          }
        };

        Ui5InputBase.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5InputBase.prototype.textAlignChanged = function textAlignChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setTextAlign(newValue);
          }
        };

        Ui5InputBase.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setTextDirection(newValue);
          }
        };

        Ui5InputBase.prototype.requiredChanged = function requiredChanged(newValue) {
          if (this._picker !== null) {
            this._picker.setRequired(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5InputBase.prototype.changeChanged = function changeChanged(newValue) {
          if (this._picker !== null) {
            this._picker.attachChange(newValue);
          }
        };

        return Ui5InputBase;
      }(Ui5Control), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return 'Initial';
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return 'Inherit';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5InputBase', Ui5InputBase);
    }
  };
});