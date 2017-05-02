'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5Control, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, Ui5ColumnListItem;

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
      _export('Ui5ColumnListItem', Ui5ColumnListItem = (_dec = customElement('ui5-column-list-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5ColumnListItem(element) {
          _classCallCheck(this, Ui5ColumnListItem);

          this._item = null;

          _initDefineProp(this, 'vAlign', _descriptor, this);

          this.element = element;
        }

        Ui5ColumnListItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5ColumnListItem.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);

          this._item = new sap.m.ColumnListItem({
            vAlign: this.vAlign
          });
          attributeManager.addAttributes({ "ui5-container": '' });
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
        };

        Ui5ColumnListItem.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'cell') {
              this._item.addCell(child);break;
            }
          }
        };

        Ui5ColumnListItem.prototype.vAlignChanged = function vAlignChanged(newValue) {
          if (this._item !== null) {
            this._item.setVAlign(newValue);
          }
        };

        return Ui5ColumnListItem;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'vAlign', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return 'Inherit';
        }
      })), _class2)) || _class) || _class));

      _export('Ui5ColumnListItem', Ui5ColumnListItem);
    }
  };
});
//# sourceMappingURL=../dist/dev/column-list-item/column-list-item.js.map
