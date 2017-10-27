'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, computedFrom, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, Ui5Wizard;

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

      _export('Ui5Wizard', Ui5Wizard = (_dec = customElement('ui5-wizard'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = computedFrom('_wizard'), _dec(_class = _dec2(_class = (_class2 = function () {
        Ui5Wizard.prototype.defaultFunc = function defaultFunc() {};

        _createClass(Ui5Wizard, [{
          key: 'UIElement',
          get: function get() {
            return this._wizard;
          }
        }]);

        function Ui5Wizard(element) {
          _classCallCheck(this, Ui5Wizard);

          this._wizard = null;
          this._parent = null;

          _initDefineProp(this, 'width', _descriptor, this);

          _initDefineProp(this, 'height', _descriptor2, this);

          _initDefineProp(this, 'showNextButton', _descriptor3, this);

          _initDefineProp(this, 'finishButtonText', _descriptor4, this);

          _initDefineProp(this, 'enableBranching', _descriptor5, this);

          _initDefineProp(this, 'stepActivate', _descriptor6, this);

          _initDefineProp(this, 'complete', _descriptor7, this);

          _initDefineProp(this, 'lastStep', _descriptor8, this);

          this.element = element;
        }

        Ui5Wizard.prototype.addChild = function addChild(child, elem) {
          var path = jQuery.makeArray($(elem).parentsUntil(this.element));
          if (path[0].localName == 'wizard') this._wizard.addStep(child);
        };

        Ui5Wizard.prototype.removeChild = function removeChild(child, elem) {
          var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        };

        Ui5Wizard.prototype.attached = function attached() {
          var params = {
            width: this.width,
            height: this.height,
            showNextButton: getBooleanFromAttributeValue(this.showNextButton),
            finishButtonText: this.finishButtonText,
            enableBranching: getBooleanFromAttributeValue(this.enableBranching),
            stepActivate: this.stepActivate,
            complete: this.complete
          };
          var that = this;
          this._wizard = new sap.m.Wizard(params);
          this._wizard.attachStepActivate(function (event) {
            that.lastStep = event.mParameters.index == that._wizard.getSteps().length;
          });
          if (that._wizard.getSteps().length === 1) that.lastStep = true;
          this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
          this._parent.addChild(this._wizard, this.element);
        };

        Ui5Wizard.prototype.detached = function detached() {
          this._parent.removeChild(this._wizard, this.element);
        };

        Ui5Wizard.prototype.widthChanged = function widthChanged(newValue) {
          if (this._wizard !== null) {
            this._wizard.setWidth(newValue);
          }
        };

        Ui5Wizard.prototype.heightChanged = function heightChanged(newValue) {
          if (this._wizard !== null) {
            this._wizard.setHeight(newValue);
          }
        };

        Ui5Wizard.prototype.showNextButtonChanged = function showNextButtonChanged(newValue) {
          if (this._wizard !== null) {
            this._wizard.setShowNextButton(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Wizard.prototype.finishButtonTextChanged = function finishButtonTextChanged(newValue) {
          if (this._wizard !== null) {
            this._wizard.setFinishButtonText(newValue);
          }
        };

        Ui5Wizard.prototype.enableBranchingChanged = function enableBranchingChanged(newValue) {
          if (this._wizard !== null) {
            this._wizard.setEnableBranching(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5Wizard;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return 'auto';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'height', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return '100%';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'showNextButton', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'finishButtonText', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return "fortfahren";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'enableBranching', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'stepActivate', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'complete', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'lastStep', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, 'UIElement', [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, 'UIElement'), _class2.prototype)), _class2)) || _class) || _class));

      _export('Ui5Wizard', Ui5Wizard);
    }
  };
});
//# sourceMappingURL=../dist/dev/wizard/wizard.js.map
