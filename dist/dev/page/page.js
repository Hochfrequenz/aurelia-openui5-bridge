'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, Ui5Page;

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
      _export('Ui5Page', Ui5Page = (_dec = customElement('ui5-page'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Page(element) {
          _classCallCheck(this, Ui5Page);

          _initDefineProp(this, 'title', _descriptor, this);

          _initDefineProp(this, 'showHeader', _descriptor2, this);

          _initDefineProp(this, 'showFooter', _descriptor3, this);

          _initDefineProp(this, 'showNavButton', _descriptor4, this);

          this._page = null;

          this.element = element;
        }

        Ui5Page.prototype.addChild = function addChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          if (path[0].localName == 'subheader') this._page.setSubHeader(child);
          if (path[0].localName == 'content') this._page.addContent(child);
          if (path[0].localName == 'footer') this._page.setFooter(child);
        };

        Ui5Page.prototype.removeChild = function removeChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          if (path[0].localName == 'subheader') this._page.setSubHeader(child);
          if (path[0].localName == 'content') this._page.removeContent(child);
          if (path[0].localName == 'footer') this._page.setFooter(child);
        };

        Ui5Page.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          var page = new sap.m.Page({
            title: this.title,
            showHeader: getBooleanFromAttributeValue(this.showHeader),
            showFooter: getBooleanFromAttributeValue(this.showFooter),
            showNavButton: getBooleanFromAttributeValue(this.showNavButton)
          });
          this._page = page;

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._page, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._page.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5Page.prototype.detached = function detached() {
          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
          } else {
            this._page.destroy();
          }
        };

        Ui5Page.prototype.titleChanged = function titleChanged(newValue) {
          if (this._page !== null) {
            this._page.setTitle(newValue);
          }
        };

        Ui5Page.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
          if (this._page !== null) {
            this._page.setShowHeader(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Page.prototype.showFooterChanged = function showFooterChanged(newValue) {
          if (this._page !== null) {
            this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Page.prototype.showNavButtonChanged = function showNavButtonChanged(newValue) {
          if (this._page !== null) {
            this._page.setShowNavButton(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5Page;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showFooter', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showNavButton', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Page', Ui5Page);
    }
  };
});
//# sourceMappingURL=../dist/dev/page/page.js.map
