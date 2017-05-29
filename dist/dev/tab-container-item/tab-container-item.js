'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, computedFrom, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Ui5TabContainerItem;

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

      _export('Ui5TabContainerItem', Ui5TabContainerItem = (_dec = customElement('ui5-tab-container-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = computedFrom('_tab'), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5TabContainerItem(element) {
          _classCallCheck(this, Ui5TabContainerItem);

          _initDefineProp(this, 'name', _descriptor, this);

          _initDefineProp(this, 'key', _descriptor2, this);

          _initDefineProp(this, 'modified', _descriptor3, this);

          _initDefineProp(this, 'itemPropertyChanged', _descriptor4, this);

          this._tab = null;

          this.element = element;
        }

        Ui5TabContainerItem.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5TabContainerItem.prototype.addChild = function addChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
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
              this._tab.addContent(child);
              break;
            }
          }
        };

        Ui5TabContainerItem.prototype.removeChild = function removeChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
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
              this._tab.removeContent(child);
              break;
            }
          }
        };

        Ui5TabContainerItem.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._tab = new sap.m.TabContainerItem({
            name: this.name,
            key: this.key,
            modified: getBooleanFromAttributeValue(this.modified),
            itemPropertyChanged: this.itemPropertyChanged
          });

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._tab.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5TabContainerItem.prototype.detached = function detached() {
          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
          } else {
            this._tab.destroy();
          }
        };

        Ui5TabContainerItem.prototype.keyChanged = function keyChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setKey(newValue);
          }
        };

        Ui5TabContainerItem.prototype.nameChanged = function nameChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setName(newValue);
          }
        };

        Ui5TabContainerItem.prototype.modifiedChanged = function modifiedChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setModified(getBooleanFromAttributeValue(newValue));
          }
        };

        _createClass(Ui5TabContainerItem, [{
          key: 'UIElement',
          get: function get() {
            return this._tab;
          }
        }]);

        return Ui5TabContainerItem;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'key', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'modified', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemPropertyChanged', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

      _export('Ui5TabContainerItem', Ui5TabContainerItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/tab-container-item/tab-container-item.js.map
