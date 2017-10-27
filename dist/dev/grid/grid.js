'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, Ui5Grid;

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

      _export('Ui5Grid', Ui5Grid = (_dec = customElement('ui5-grid'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Grid(element) {
          _classCallCheck(this, Ui5Grid);

          this._grid = null;
          this._parent = null;

          _initDefineProp(this, 'width', _descriptor, this);

          _initDefineProp(this, 'vSpacing', _descriptor2, this);

          _initDefineProp(this, 'hSpacing', _descriptor3, this);

          _initDefineProp(this, 'position', _descriptor4, this);

          _initDefineProp(this, 'defaultSpan', _descriptor5, this);

          _initDefineProp(this, 'defaultIdent', _descriptor6, this);

          _initDefineProp(this, 'containerQuery', _descriptor7, this);

          this.element = element;
        }

        Ui5Grid.prototype.addChild = function addChild(child, elem) {
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
              this._grid.addContent(child);
              break;
            }
          }
        };

        Ui5Grid.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation == 'content') {
            this._grid.removeContent(child);
          }
        };

        Ui5Grid.prototype.removeChild = function removeChild(child, elem) {
          var path = jQuery.makeArray($(elem).parentsUntil(this.element));
          if (path[0].localName == 'content') this._grid.removeContent(child);
        };

        Ui5Grid.prototype.defaultPress = function defaultPress() {};

        Ui5Grid.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);

          this._grid = new sap.ui.layout.Grid({
            defaultSpan: this.defaultSpan,
            width: this.width,
            vSpacing: this.vSpacing,
            hSpacing: this.hSpacing,
            position: this.position,
            defaultIdent: this.defaultIdent,
            containerQuery: getBooleanFromAttributeValue(this.containerQuery)
          });
          if ($(this.element).closest("[ui5-container]").length > 0) {
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._parent.addChild(this._grid, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          }
        };

        Ui5Grid.prototype.detached = function detached() {
          this._parent.removeChild(this._grid, this.element);
        };

        Ui5Grid.prototype.defaultSpanChanged = function defaultSpanChanged(newValue) {
          if (this._grid != null) {
            this._grid.setDefaultSpan(newValue);
          }
        };

        Ui5Grid.prototype.widthChanged = function widthChanged(newValue) {
          if (this._grid !== null) {
            this._grid.setWidth(newValue);
          }
        };

        Ui5Grid.prototype.vSpacingChanged = function vSpacingChanged(newValue) {
          if (this._grid !== null) {
            this._grid.setVSpacing(newValue);
          }
        };

        Ui5Grid.prototype.hSpacingChanged = function hSpacingChanged(newValue) {
          if (this._grid !== null) {
            this._grid.setHSpacing(newValue);
          }
        };

        Ui5Grid.prototype.positionChanged = function positionChanged(newValue) {
          if (this._grid !== null) {
            this._grid.setPosition(newValue);
          }
        };

        Ui5Grid.prototype.defaultIdentChanged = function defaultIdentChanged(newValue) {
          if (this._grid !== null) {
            this._grid.setDefaultIdent(newValue);
          }
        };

        Ui5Grid.prototype.containerQueryChanged = function containerQueryChanged(newValue) {
          if (this._grid !== null) {
            this._grid.setContainerQuery(getBooleanFromAttributeValue(newValue));
          }
        };

        _createClass(Ui5Grid, [{
          key: 'UIElement',
          get: function get() {
            return this._grid;
          }
        }]);

        return Ui5Grid;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return '100%';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'vSpacing', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'hSpacing', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'position', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'Left';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'defaultSpan', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 'XL3 L3 M6 S12';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'defaultIdent', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return 'XL0 L0 M0 S0';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'containerQuery', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Grid', Ui5Grid);
    }
  };
});
//# sourceMappingURL=../dist/dev/grid/grid.js.map
