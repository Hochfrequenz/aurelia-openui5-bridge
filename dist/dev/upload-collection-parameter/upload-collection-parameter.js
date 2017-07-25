'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2, _descriptor, _descriptor2, Ui5UploadCollectionParameter;

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

      _export('Ui5UploadCollectionParameter', Ui5UploadCollectionParameter = (_dec = customElement('ui5-upload-collection-parameter'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5UploadCollectionParameter(element) {
          _classCallCheck(this, Ui5UploadCollectionParameter);

          _initDefineProp(this, 'name', _descriptor, this);

          _initDefineProp(this, 'value', _descriptor2, this);

          this._parameter = null;
          this._parent = null;
          this._relation = null;

          this.element = element;
        }

        Ui5UploadCollectionParameter.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5UploadCollectionParameter.prototype.addChild = function addChild(child, elem) {};

        Ui5UploadCollectionParameter.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

        Ui5UploadCollectionParameter.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._parameter = new sap.m.UploadCollectionParameter({
            name: this.name,
            value: this.value
          });

          if ($(this.element).parents("[ui5-container]").length > 0) {
            this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
            this.relation = this._parent.addChild(this._parameter, this.element);
          }
        };

        Ui5UploadCollectionParameter.prototype.detached = function detached() {
          if (this._parent && this._parameter.removeChildByRelation) {
            this._parent.removeChildByRelation(this._parameter, this.relation);
          }
        };

        Ui5UploadCollectionParameter.prototype.nameChanged = function nameChanged(newValue) {
          if (this._parameter !== null) {
            this._parameter.setName(newValue);
          }
        };

        Ui5UploadCollectionParameter.prototype.valueChanged = function valueChanged(newValue) {
          if (this._parameter !== null) {
            this._parameter.setValue(newValue);
          }
        };

        _createClass(Ui5UploadCollectionParameter, [{
          key: 'UIElement',
          get: function get() {
            return this._parameter;
          }
        }]);

        return Ui5UploadCollectionParameter;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5UploadCollectionParameter', Ui5UploadCollectionParameter);
    }
  };
});
//# sourceMappingURL=../dist/dev/upload-collection-parameter/upload-collection-parameter.js.map
