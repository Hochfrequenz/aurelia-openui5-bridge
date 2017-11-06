'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, computedFrom, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, Ui5OverflowToolbar;

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

      _export('Ui5OverflowToolbar', Ui5OverflowToolbar = (_dec = customElement('ui5-overflow-toolbar'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = computedFrom('_bar'), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5OverflowToolbar(element) {
          _classCallCheck(this, Ui5OverflowToolbar);

          this._bar = null;
          this._parent = null;
          this._relation = null;

          _initDefineProp(this, 'width', _descriptor, this);

          _initDefineProp(this, 'active', _descriptor2, this);

          _initDefineProp(this, 'enabled', _descriptor3, this);

          _initDefineProp(this, 'height', _descriptor4, this);

          _initDefineProp(this, 'design', _descriptor5, this);

          _initDefineProp(this, 'press', _descriptor6, this);

          this.element = element;
        }

        Ui5OverflowToolbar.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5OverflowToolbar.prototype.addChild = function addChild(child, elem) {
          var path = jQuery.makeArray($(elem).parentsUntil(this.element));
          for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            if (_isArray) {
              if (_i >= _iterator.length) break;
              elem = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              elem = _i.value;
            }

            if (elem.localName == 'content') {
              this._bar.addContent(child);
              return elem.localName;
            }
          }
        };

        Ui5OverflowToolbar.prototype.removeChild = function removeChild(child, elem) {
          var path = jQuery.makeArray($(elem).parentsUntil(this.element));
          for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              elem = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              elem = _i2.value;
            }

            if (elem.localName == 'content') {
              this._bar.removeContent(child);
              break;
            }
          }
        };

        Ui5OverflowToolbar.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation === 'content' && this._bar && child) {
            this._bar.removeContent(child);
          }
        };

        Ui5OverflowToolbar.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._bar = new sap.m.OverflowToolbar({
            width: this.width,
            enabled: getBooleanFromAttributeValue(this.enabled),
            active: getBooleanFromAttributeValue(this.active),
            height: this.height,
            design: this.design,
            press: this.press
          });

          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._relation = this._parent.addChild(this._bar, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._bar.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5OverflowToolbar.prototype.detached = function detached() {
          if (this._parent) {
            this._parent.removeChildByRelation(this._bar, this._relation);
          } else {
            this._bar.destroy();
          }
        };

        Ui5OverflowToolbar.prototype.widthChanged = function widthChanged(newValue) {
          if (this._bar !== null) {
            this._bar.setWidth(newValue);
          }
        };

        Ui5OverflowToolbar.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._bar !== null) {
            this._bar.setEnabled(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5OverflowToolbar.prototype.activeChanged = function activeChanged(newValue) {
          if (this._bar !== null) {
            this._bar.setActive(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5OverflowToolbar.prototype.heightChanged = function heightChanged(newValue) {
          if (this._bar !== null) {
            this._bar.setHeight(newValue);
          }
        };

        Ui5OverflowToolbar.prototype.designChanged = function designChanged(newValue) {
          if (this._bar !== null) {
            this._bar.setDesign(newValue);
          }
        };

        Ui5OverflowToolbar.prototype.pressChanged = function pressChanged(newValue) {
          if (this._bar !== null) {
            this._bar.setPress(newValue);
          }
        };

        _createClass(Ui5OverflowToolbar, [{
          key: 'UIElement',
          get: function get() {
            return this._bar;
          }
        }]);

        return Ui5OverflowToolbar;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'active', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'design', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'press', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

      _export('Ui5OverflowToolbar', Ui5OverflowToolbar);
    }
  };
});