'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, Ui5TableSelectDialog;

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

      _export('Ui5TableSelectDialog', Ui5TableSelectDialog = (_dec = customElement('ui5-table-select-dialog'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5TableSelectDialog(element) {
          _classCallCheck(this, Ui5TableSelectDialog);

          this._dialog = null;
          this._parent = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'title', _descriptor2, this);

          _initDefineProp(this, 'contentHeight', _descriptor3, this);

          _initDefineProp(this, 'noDataText', _descriptor4, this);

          _initDefineProp(this, 'multiSelect', _descriptor5, this);

          _initDefineProp(this, 'growingThreshold', _descriptor6, this);

          _initDefineProp(this, 'contentWidth', _descriptor7, this);

          _initDefineProp(this, 'rememberSelections', _descriptor8, this);

          _initDefineProp(this, 'confirm', _descriptor9, this);

          _initDefineProp(this, 'search', _descriptor10, this);

          _initDefineProp(this, 'liveChange', _descriptor11, this);

          _initDefineProp(this, 'cancel', _descriptor12, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        Ui5TableSelectDialog.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5TableSelectDialog.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'item') {
              this._dialog.addItem(child);return elem.localName;
            }
            if (elem.localName == 'column') {
              this._dialog.addColumn(child);return elem.localName;
            }
          }
        };

        Ui5TableSelectDialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation == 'item') {
            try {
              this._dialog.removeItem(child);
            } catch (exc) {}
          } else if (relation == 'column') {
            try {
              this._dialog.removeColumn(child);
            } catch (exc) {}
          }
        };

        Ui5TableSelectDialog.prototype.removeChild = function removeChild(child, elem) {};

        Ui5TableSelectDialog.prototype.attached = function attached() {
          var props = {
            icon: this.icon,
            title: this.title,
            contentWidth: this.contentWidth,
            contentHeight: this.contentHeight,
            multiSelect: getBooleanFromAttributeValue(this.multiSelect),
            noDataText: this.noDataText,
            growingThreshold: this.growingThreshold,
            rememberSelections: getBooleanFromAttributeValue(this.rememberSelections),
            confirm: this.confirm,
            search: this.search,
            liveChange: this.liveChange,
            cancel: this.cancel
          };
          if (this.ui5Id) this._dialog = new sap.m.TableSelectDialog(this.ui5Id, props);else this._dialog = new sap.m.TableSelectDialog(props);
          this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
          this.attributeManager.addAttributes({ "ui5-layout": '' });
          this.attributeManager.addAttributes({ "ui5-container": '' });
        };

        Ui5TableSelectDialog.prototype.detached = function detached() {};

        Ui5TableSelectDialog.prototype.titleChanged = function titleChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setTitle(newValue);
          }
        };

        Ui5TableSelectDialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setContentHeight(newValue);
          }
        };

        Ui5TableSelectDialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setContentWidth(newValue);
          }
        };

        Ui5TableSelectDialog.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setNoDataText(newValue);
          }
        };

        Ui5TableSelectDialog.prototype.multiSelectChanged = function multiSelectChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setMultiSelect(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5TableSelectDialog.prototype.growingThresholdChanged = function growingThresholdChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setGrowingThreshold(newValue);
          }
        };

        Ui5TableSelectDialog.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setRememberSelections(getBooleanFromAttributeValue(newValue));
          }
        };

        _createClass(Ui5TableSelectDialog, [{
          key: 'UIElement',
          get: function get() {
            return this._dialog;
          }
        }]);

        return Ui5TableSelectDialog;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'contentHeight', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'noDataText', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'multiSelect', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'growingThreshold', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'contentWidth', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'rememberSelections', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'confirm', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'search', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'liveChange', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'cancel', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5TableSelectDialog', Ui5TableSelectDialog);
    }
  };
});
//# sourceMappingURL=../dist/dev/table-select-dialog/table-select-dialog.js.map
