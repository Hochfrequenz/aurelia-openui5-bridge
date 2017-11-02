'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, computedFrom, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, Ui5MessageItem;

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
    }, function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
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

      _export('Ui5MessageItem', Ui5MessageItem = (_dec = customElement('ui5-message-item'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = computedFrom('_item'), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5MessageItem(element) {
          _classCallCheck(this, Ui5MessageItem);

          this._item = null;
          this._parent = null;
          this._relation = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'type', _descriptor2, this);

          _initDefineProp(this, 'title', _descriptor3, this);

          _initDefineProp(this, 'subtitle', _descriptor4, this);

          _initDefineProp(this, 'description', _descriptor5, this);

          _initDefineProp(this, 'markupDescription', _descriptor6, this);

          _initDefineProp(this, 'longtextUrl', _descriptor7, this);

          _initDefineProp(this, 'counter', _descriptor8, this);

          _initDefineProp(this, 'groupName', _descriptor9, this);

          this.element = element;
        }

        Ui5MessageItem.prototype.defaultFunc = function defaultFunc() {};

        Ui5MessageItem.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'links') {
              this._item.setLink(child);
              return elem.localName;
            }
          }
        };

        Ui5MessageItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation === 'links' && this._item && child) {
            this._item.setLink(null);
          }
        };

        Ui5MessageItem.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._item = new sap.m.MessageItem({
            type: this.type,
            title: this.title,
            subtitle: this.subtitle,
            description: this.description,
            markupDescription: getBooleanFromAttributeValue(this.markupDescription),
            longtextUrl: this.longtextUrl,
            counter: this.counter,
            groupName: this.groupName
          });
          this.element.removeAttribute('ui5-container');
          if ($(this.element).closest("[ui5-container]").length > 0) {
            var prevSibling = null;
            if (this.element.previousElementSibling) prevSibling = this.element.previousElementSibling.au.controller.viewModel.UIElement;
            this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._relation = this._parent.addChild(this._item, this.element, prevSibling);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._item.placeAt(this.element.parentElement);
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5MessageItem.prototype.detached = function detached() {
          if (this._parent && this._parent.removeChildByRelation) this._parent.removeChildByRelation(this._item, this._relation);
          var attributeManager = new AttributeManager(this.element);
          attributeManager.removeAttributes(["ui5-container"]);
          this._item.destroy();
        };

        Ui5MessageItem.prototype.typeChanged = function typeChanged(newValue) {
          if (this._item !== null) {
            this._item.setType(newValue);
          }
        };

        Ui5MessageItem.prototype.titleChanged = function titleChanged(newValue) {
          if (this._item !== null) {
            this._item.setTitle(newValue);
          }
        };

        Ui5MessageItem.prototype.subtitleChanged = function subtitleChanged(newValue) {
          if (this._item !== null) {
            this._item.setSubtitle(newValue);
          }
        };

        Ui5MessageItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
          if (this._item !== null) {
            this._item.setDescription(newValue);
          }
        };

        Ui5MessageItem.prototype.markupDescriptionChanged = function markupDescriptionChanged(newValue) {
          if (this._item !== null) {
            this._item.setMarkupDescription(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5MessageItem.prototype.longtextUrlChanged = function longtextUrlChanged(newValue) {
          if (this._item !== null) {
            this._item.setLongtextUrl(newValue);
          }
        };

        Ui5MessageItem.prototype.counterChanged = function counterChanged(newValue) {
          if (this._item !== null) {
            this._item.setCounter(newValue);
          }
        };

        Ui5MessageItem.prototype.groupNameChanged = function groupNameChanged(newValue) {
          if (this._item !== null) {
            this._item.setGroupName(newValue);
          }
        };

        _createClass(Ui5MessageItem, [{
          key: 'UIElement',
          get: function get() {
            return this._item;
          }
        }]);

        return Ui5MessageItem;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 'Error';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'subtitle', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'markupDescription', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'longtextUrl', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'counter', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'groupName', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

      _export('Ui5MessageItem', Ui5MessageItem);
    }
  };
});