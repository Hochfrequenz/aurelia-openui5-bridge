'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, Ui5Dialog;

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

      _export('Ui5Dialog', Ui5Dialog = (_dec = customElement('ui5-dialog'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5Dialog(element) {
          _classCallCheck(this, Ui5Dialog);

          this._dialog = null;
          this._parent = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'icon', _descriptor2, this);

          _initDefineProp(this, 'title', _descriptor3, this);

          _initDefineProp(this, 'showHeader', _descriptor4, this);

          _initDefineProp(this, 'type', _descriptor5, this);

          _initDefineProp(this, 'state', _descriptor6, this);

          _initDefineProp(this, 'stretchOnPhone', _descriptor7, this);

          _initDefineProp(this, 'stretch', _descriptor8, this);

          _initDefineProp(this, 'contentWidth', _descriptor9, this);

          _initDefineProp(this, 'contentHeight', _descriptor10, this);

          _initDefineProp(this, 'horizontalScrolling', _descriptor11, this);

          _initDefineProp(this, 'verticalScrolling', _descriptor12, this);

          _initDefineProp(this, 'resizable', _descriptor13, this);

          _initDefineProp(this, 'draggable', _descriptor14, this);

          _initDefineProp(this, 'escapeHandler', _descriptor15, this);

          _initDefineProp(this, 'beforeOpen', _descriptor16, this);

          _initDefineProp(this, 'afterOpen', _descriptor17, this);

          _initDefineProp(this, 'beforeClose', _descriptor18, this);

          _initDefineProp(this, 'afterClose', _descriptor19, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        Ui5Dialog.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5Dialog.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'subHeader') {
              this._dialog.setSubHeader(child);
              return 'subHeader';
            }
            if (elem.localName == 'customHeader') {
              this._dialog.setCustomHeader(child);
              return 'customHeader';
            }
            if (elem.localName == 'buttons') {
              this._dialog.addButton(child);
              return 'buttons';
            }
            if (elem.localName == 'content') {
              this._dialog.addContent(child);
              return 'content';
            }
          }
        };

        Ui5Dialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation == 'content') {
            this._dialog.removeContent(child);
          } else if (relation == 'buttons') {
            this._dialog.removeButton(child);
          }
        };

        Ui5Dialog.prototype.removeChild = function removeChild(child, elem) {};

        Ui5Dialog.prototype.attached = function attached() {
          var props = {
            icon: this.icon,
            title: this.title,
            showHeader: getBooleanFromAttributeValue(this.showHeader),
            type: this.type,
            state: this.state,
            stretchOnPhone: getBooleanFromAttributeValue(this.stretchOnPhone),
            stretch: getBooleanFromAttributeValue(this.stretch),
            contentWidth: this.contentWidth,
            contentHeight: this.contentHeight,
            horizontalScrolling: getBooleanFromAttributeValue(this.horizontalScrolling),
            verticalScrolling: getBooleanFromAttributeValue(this.verticalScrolling),
            resizable: getBooleanFromAttributeValue(this.resizable),
            draggable: getBooleanFromAttributeValue(this.draggable),
            escapeHandler: this.escapeHandler,
            beforeOpen: this.beforeOpen,
            afterOpen: this.afterOpen,
            beforeClose: this.beforeClose,
            afterClose: this.afterClose
          };
          if (this.ui5Id) this._dialog = new sap.m.Dialog(this.ui5Id, props);else this._dialog = new sap.m.Dialog(props);
          this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
          this.attributeManager.addAttributes({ "ui5-layout": '' });
          this.attributeManager.addAttributes({ "ui5-container": '' });
        };

        Ui5Dialog.prototype.detached = function detached() {};

        Ui5Dialog.prototype.iconChanged = function iconChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setIcon(newValue);
          }
        };

        Ui5Dialog.prototype.titleChanged = function titleChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setTitle(newValue);
          }
        };

        Ui5Dialog.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Dialog.prototype.typeChanged = function typeChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setType(newValue);
          }
        };

        Ui5Dialog.prototype.stateChanged = function stateChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setState(newValue);
          }
        };

        Ui5Dialog.prototype.stretchOnPhoneChanged = function stretchOnPhoneChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setStretchOnPhone(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Dialog.prototype.stretchChanged = function stretchChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setStretch(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Dialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setContentHeight(newValue);
          }
        };

        Ui5Dialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setContentWidth(newValue);
          }
        };

        Ui5Dialog.prototype.horizontalScrollingChanged = function horizontalScrollingChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Dialog.prototype.verticalScrollingChanged = function verticalScrollingChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Dialog.prototype.resizableChanged = function resizableChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Dialog.prototype.draggableChanged = function draggableChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setDraggable(newValue);
          }
        };

        Ui5Dialog.prototype.escapeHandlerChanged = function escapeHandlerChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setEscapeHandler(newValue);
          }
        };

        _createClass(Ui5Dialog, [{
          key: 'UIElement',
          get: function get() {
            return this._dialog;
          }
        }]);

        return Ui5Dialog;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'showHeader', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return 'Standard';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'state', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'stretchOnPhone', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'stretch', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'contentWidth', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'contentHeight', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'horizontalScrolling', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'verticalScrolling', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'resizable', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'draggable', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'escapeHandler', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'beforeOpen', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'afterOpen', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'beforeClose', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'afterClose', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Dialog', Ui5Dialog);
    }
  };
});