'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Ui5SegmentedButton;

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

      _export('Ui5SegmentedButton', Ui5SegmentedButton = (_dec = customElement('ui5-segmented-button'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        Ui5SegmentedButton.prototype.defaultFunc = function defaultFunc() {};

        function Ui5SegmentedButton(element) {
          _classCallCheck(this, Ui5SegmentedButton);

          _initDefineProp(this, 'enabled', _descriptor, this);

          _initDefineProp(this, 'width', _descriptor2, this);

          _initDefineProp(this, 'selectedKey', _descriptor3, this);

          _initDefineProp(this, 'select', _descriptor4, this);

          this._button = null;

          this.attributeManager = new AttributeManager(element);
          this.element = element;
        }

        Ui5SegmentedButton.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'item') {
              if (this._button.getItems().length == 0) this.selectedKey = child.mProperties.key;
              this._button.addItem(child);

              break;
            }
          }
        };

        Ui5SegmentedButton.prototype.attached = function attached() {
          this._button = new sap.m.SegmentedButton({
            enabled: !getBooleanFromAttributeValue(this.enabled),
            width: this.width,
            selectedKey: this.selectedKey,
            select: this.select
          });
          var that = this;
          if ($(this.element).closest("[ui5-container]").length > 0) {
            $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
            this.attributeManager.addAttributes({ "ui5-container": '' });
          }
          this._button.attachSelect(function (event) {
            that.selectedKey = event.mParameters.key;
          });
        };

        Ui5SegmentedButton.prototype.detached = function detached() {};

        Ui5SegmentedButton.prototype.enableChanged = function enableChanged(newValue) {
          if (this._button !== null) {
            this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5SegmentedButton.prototype.widthChanged = function widthChanged(newValue) {
          if (this._button !== null) {
            this._button.setWidth(newValue);
          }
        };

        Ui5SegmentedButton.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
          if (this._button !== null) {
            this._button.setSelectedKey(newValue);
          }
        };

        _createClass(Ui5SegmentedButton, [{
          key: 'UIElement',
          get: function get() {
            return this._button;
          }
        }]);

        return Ui5SegmentedButton;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'selectedKey', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'select', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5SegmentedButton', Ui5SegmentedButton);
    }
  };
});
//# sourceMappingURL=../dist/dev/segmented-button/segmented-button.js.map
