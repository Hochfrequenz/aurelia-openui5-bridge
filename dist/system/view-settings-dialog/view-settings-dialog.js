'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, Ui5ViewSettingsDialog;

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

      _export('Ui5ViewSettingsDialog', Ui5ViewSettingsDialog = (_dec = customElement('ui5-view-settings-dialog'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5ViewSettingsDialog(element) {
          _classCallCheck(this, Ui5ViewSettingsDialog);

          this._dialog = null;
          this._parent = null;

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'title', _descriptor2, this);

          _initDefineProp(this, 'sortDescending', _descriptor3, this);

          _initDefineProp(this, 'groupDescending', _descriptor4, this);

          _initDefineProp(this, 'confirm', _descriptor5, this);

          _initDefineProp(this, 'cancel', _descriptor6, this);

          _initDefineProp(this, 'resetFilters', _descriptor7, this);

          _initDefineProp(this, 'filterDetailPageOpened', _descriptor8, this);

          this.element = element;
          this.attributeManager = new AttributeManager(this.element);
        }

        Ui5ViewSettingsDialog.prototype.defaultFunc = function defaultFunc(event) {};

        Ui5ViewSettingsDialog.prototype.addChild = function addChild(child, elem) {
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

            if (elem.localName == 'sortitems') {
              this._dialog.addSortItem(child);
              return 'sortItems';
            }
            if (elem.localName == 'groupitems') {
              this._dialog.addGroupItem(child);
              return 'groupItems';
            }
            if (elem.localName == 'filteritems') {
              this._dialog.addFilterItem(child);
              return 'filterItems';
            }
            if (elem.localName == 'presetfilteritems') {
              this._dialog.addPresetFilterItem(child);
              return 'presetFilterItems';
            }
            if (elem.localName == 'customtabs') {
              this._dialog.addCustomTab(child);
              return 'customTabs';
            }
          }
        };

        Ui5ViewSettingsDialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation == 'sortItems') {} else if (relation == 'groupItems') {
            this._dialog.removeGroupItem(child);
          } else if (relation == 'filterItems') {
            this._dialog.removeFilterItem(child);
          } else if (relation == 'presetFilterItems') {
            this._dialog.removePresetFilterItem(child);
          } else if (relation == 'customTabs') {
            this._dialog.removeCustomTab(child);
          }
        };

        Ui5ViewSettingsDialog.prototype.removeChild = function removeChild(child, elem) {};

        Ui5ViewSettingsDialog.prototype.attached = function attached() {
          var props = {
            icon: this.icon,
            title: this.title,
            sortDescending: getBooleanFromAttributeValue(this.sortDescending),
            groupDescending: getBooleanFromAttributeValue(this.groupDescending),
            confirm: this.confirm,
            cancel: this.cancel,
            beforeClose: this.beforeClose,
            filterDetailPageOpened: this.filterDetailPageOpened
          };
          if (this.ui5Id) this._dialog = new sap.m.ViewSettingsDialog(this.ui5Id, props);else this._dialog = new sap.m.ViewSettingsDialog(props);
          this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
          this.attributeManager.addAttributes({ "ui5-layout": '' });
          this.attributeManager.addAttributes({ "ui5-container": '' });
        };

        Ui5ViewSettingsDialog.prototype.detached = function detached() {};

        Ui5ViewSettingsDialog.prototype.titleChanged = function titleChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setTitle(newValue);
          }
        };

        Ui5ViewSettingsDialog.prototype.sortDescendingChanged = function sortDescendingChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setSortDescending(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5ViewSettingsDialog.prototype.groupDescendingChanged = function groupDescendingChanged(newValue) {
          if (this._dialog !== null) {
            this._dialog.setGroupDescending(getBooleanFromAttributeValue(newValue));
          }
        };

        _createClass(Ui5ViewSettingsDialog, [{
          key: 'UIElement',
          get: function get() {
            return this._dialog;
          }
        }]);

        return Ui5ViewSettingsDialog;
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'sortDescending', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'groupDescending', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'confirm', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'cancel', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'resetFilters', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'filterDetailPageOpened', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5ViewSettingsDialog', Ui5ViewSettingsDialog);
    }
  };
});