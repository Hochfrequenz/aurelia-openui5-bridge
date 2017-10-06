'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Ui5TabContainer;

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
      _export('Ui5TabContainer', Ui5TabContainer = (_dec = customElement('ui5-tab-container'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5TabContainer(element) {
          _classCallCheck(this, Ui5TabContainer);

          _initDefineProp(this, 'showAddNewButton', _descriptor, this);

          _initDefineProp(this, 'selectedItem', _descriptor2, this);

          _initDefineProp(this, 'itemClose', _descriptor3, this);

          _initDefineProp(this, 'itemSelect', _descriptor4, this);

          _initDefineProp(this, 'addNewButtonPress', _descriptor5, this);

          this._tab = null;
          this._parent = null;

          this.element = element;
        }

        Ui5TabContainer.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5TabContainer.prototype.addChild = function addChild(child, elem) {
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
              this._tab.addItem(child);
              return elem.localName;
            }
          }
        };

        Ui5TabContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation === 'content' && this._tab && child) {
            this._tab.removeItem(child);
          }
        };

        Ui5TabContainer.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._tab = new sap.m.TabContainer({
            showAddNewButton: getBooleanFromAttributeValue(this.showAddNewButton),
            itemClose: this.itemClose,
            itemSelect: this.itemSelect,
            addNewButtonPress: this.addNewButtonPress
          });

          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._parent.addChild(this._tab, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._tab.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5TabContainer.prototype.detached = function detached() {
          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent.removeChild(this._tab, this.element);
          } else {
            this._tab.destroy();
          }
        };

        Ui5TabContainer.prototype.showAddNewButtonChanged = function showAddNewButtonChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setShowAddNewButton(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5TabContainer;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showAddNewButton', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'selectedItem', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'itemClose', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'itemSelect', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'addNewButtonPress', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5TabContainer', Ui5TabContainer);
    }
  };
});
//# sourceMappingURL=../dist/dev/tab-container/tab-container.js.map
