'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Ui5FormattedText;

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
      _export('Ui5FormattedText', Ui5FormattedText = (_dec = customElement('ui5-formatted-text'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5FormattedText(element) {
          _classCallCheck(this, Ui5FormattedText);

          this._text = null;

          _initDefineProp(this, 'htmlText', _descriptor, this);

          _initDefineProp(this, 'width', _descriptor2, this);

          _initDefineProp(this, 'height', _descriptor3, this);

          _initDefineProp(this, 'convertLinksToAnchorTags', _descriptor4, this);

          _initDefineProp(this, 'convertedLinksDefaultTarget', _descriptor5, this);

          this.element = element;
        }

        Ui5FormattedText.prototype.attached = function attached() {

          this._text = new sap.m.FormattedText({
            htmlText: this.htmlText != null ? this.htmlText : this.element.innerHtml.trim(),
            width: this.width,
            height: this.height,
            convertedLinksDefaultTarget: this.convertedLinksDefaultTarget,
            convertLinksToAnchorTags: this.convertLinksToAnchorTags
          });
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
        };

        Ui5FormattedText.prototype.htmlTextChanged = function htmlTextChanged(newValue) {
          if (this._text != null) {
            this._text.setHtmlText(newValue);
          }
        };

        Ui5FormattedText.prototype.widthChanged = function widthChanged(newValue) {
          if (this._text !== null) {
            this._text.setWidth(newValue);
          }
        };

        Ui5FormattedText.prototype.heightChanged = function heightChanged(newValue) {
          if (this._text !== null) {
            this._text.setHeight(newValue);
          }
        };

        Ui5FormattedText.prototype.convertedLinksDefaultTargetChanged = function convertedLinksDefaultTargetChanged(newValue) {
          if (this._text !== null) {
            this._text.setConvertedLinksDefaultTarget(newValue);
          }
        };

        Ui5FormattedText.prototype.convertLinksToAnchorTagsChanged = function convertLinksToAnchorTagsChanged(newValue) {
          if (this._text !== null) {
            this._text.setConvertLinksToAnchorTags(newValue);
          }
        };

        return Ui5FormattedText;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'htmlText', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'convertLinksToAnchorTags', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'convertedLinksDefaultTarget', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return '_blank';
        }
      })), _class2)) || _class) || _class));

      _export('Ui5FormattedText', Ui5FormattedText);
    }
  };
});
//# sourceMappingURL=../dist/dev/formatted-text/formatted-text.js.map
