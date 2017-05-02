'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, Ui5IconTabBar;

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
      _export('Ui5IconTabBar', Ui5IconTabBar = (_dec = customElement('ui5-icon-tab-bar'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5IconTabBar(element) {
          _classCallCheck(this, Ui5IconTabBar);

          this._tab = null;

          _initDefineProp(this, 'showSelection', _descriptor, this);

          _initDefineProp(this, 'expandable', _descriptor2, this);

          _initDefineProp(this, 'expanded', _descriptor3, this);

          _initDefineProp(this, 'selectedKey', _descriptor4, this);

          _initDefineProp(this, 'upperCase', _descriptor5, this);

          _initDefineProp(this, 'stretchContentHeight', _descriptor6, this);

          _initDefineProp(this, 'applyContentPadding', _descriptor7, this);

          _initDefineProp(this, 'backgroundDesign', _descriptor8, this);

          _initDefineProp(this, 'headerMode', _descriptor9, this);

          _initDefineProp(this, 'showOverflowSelectList', _descriptor10, this);

          _initDefineProp(this, 'headerBackgroundDesign', _descriptor11, this);

          _initDefineProp(this, 'enableTabReordering', _descriptor12, this);

          this.element = element;
        }

        Ui5IconTabBar.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5IconTabBar.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'content') {
              this._tab.addItem(child);
              break;
            }
          }
        };

        Ui5IconTabBar.prototype.removeChild = function removeChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              elem = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              elem = _i2.value;
            }

            if (elem.localName == 'content') {
              this._tab.removeItem(child);
              break;
            }
          }
        };

        Ui5IconTabBar.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          this._tab = new sap.m.IconTabBar({
            showSelection: getBooleanFromAttributeValue(this.showSelection),
            expandable: getBooleanFromAttributeValue(this.expandable),
            expanded: getBooleanFromAttributeValue(this.expanded),
            selectedKey: this.selectedKey,
            upperCase: getBooleanFromAttributeValue(this.upperCase),
            stretchContentHeight: getBooleanFromAttributeValue(this.stretchContentHeight),
            applyContentPadding: getBooleanFromAttributeValue(this.applyContentPadding),
            backgroundDesign: this.backgroundDesign,
            headerMode: this.headerMode,
            showOverflowSelectList: getBooleanFromAttributeValue(this.showOverflowSelectList),
            headerBackgroundDesign: this.headerBackgroundDesign,
            enableTabReordering: getBooleanFromAttributeValue(this.enableTabReordering)
          });

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._tab.placeAt(this.element.parentElement);
            attributeManager.addAttributes({ "ui5-container": '' });
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5IconTabBar.prototype.detached = function detached() {
          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
          } else {
            this._tab.destroy();
          }
        };

        Ui5IconTabBar.prototype.showSelectionChanged = function showSelectionChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setShowSelection(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.expandableChanged = function expandableChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setExpandable(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.expandedChanged = function expandedChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setExpanded(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setSelectedKey(newValue);
          }
        };

        Ui5IconTabBar.prototype.upperCaseChanged = function upperCaseChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setUpperCase(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.stretchContentHeightChanged = function stretchContentHeightChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setStretchContentHeight(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.applyContentPaddingChanged = function applyContentPaddingChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setApplyContentPadding(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setBackgroundDesign(newValue);
          }
        };

        Ui5IconTabBar.prototype.headerModeChanged = function headerModeChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setHeaderMode(newValue);
          }
        };

        Ui5IconTabBar.prototype.showOverflowSelectListChanged = function showOverflowSelectListChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5IconTabBar.prototype.headerBackgroundDesignChanged = function headerBackgroundDesignChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setHeaderBackgroundDesign(newValue);
          }
        };

        Ui5IconTabBar.prototype.enableTabReorderingChanged = function enableTabReorderingChanged(newValue) {
          if (this._tab !== null) {
            this._tab.setEnableTabReordering(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5IconTabBar;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'showSelection', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'expandable', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'expanded', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'selectedKey', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'upperCase', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'stretchContentHeight', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'applyContentPadding', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 'Solid';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'headerMode', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return 'Standard';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showOverflowSelectList', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'headerBackgroundDesign', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return 'Solid';
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'enableTabReordering', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5IconTabBar', Ui5IconTabBar);
    }
  };
});
//# sourceMappingURL=../dist/dev/icon-tab-bar/icon-tab-bar.js.map
