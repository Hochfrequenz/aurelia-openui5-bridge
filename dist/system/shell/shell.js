'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, Ui5Shell;

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
      _export('Ui5Shell', Ui5Shell = (_dec = customElement('ui5-shell'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Shell(element) {
          _classCallCheck(this, Ui5Shell);

          _initDefineProp(this, 'title', _descriptor, this);

          _initDefineProp(this, 'appWidthLimited', _descriptor2, this);

          this._shell = null;

          this.element = element;
        }

        Ui5Shell.prototype.addChild = function addChild(child, elem) {
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
              this._shell.setApp(child);
              break;
            }
          }
        };

        Ui5Shell.prototype.removeChild = function removeChild(child, elem) {};

        Ui5Shell.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          var shell = new sap.m.Shell({
            title: this.title,
            appWidthLimited: getBooleanFromAttributeValue(this.appWidthLimited)

          });
          this._shell = shell;

          if ($(this.element).closest("[ui5-container]").length > 0) {
            $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._shell, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._shell.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5Shell.prototype.detached = function detached() {
          if ($(this.element).closest("[ui5-container]").length > 0) {
            $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.removeChild(this._shell, this.element);
          } else {
            this._shell.destroy();
          }
        };

        Ui5Shell.prototype.titleChanged = function titleChanged(newValue) {
          if (this._shell !== null) {
            this._shell.setTitle(newValue);
          }
        };

        Ui5Shell.prototype.appWidthLimitedChanged = function appWidthLimitedChanged(newValue) {
          if (this._shell !== null) {
            this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5Shell;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'appWidthLimited', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Shell', Ui5Shell);
    }
  };
});