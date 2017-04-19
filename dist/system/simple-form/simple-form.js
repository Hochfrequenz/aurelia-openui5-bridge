'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, Ui5SimpleForm;

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
      _export('Ui5SimpleForm', Ui5SimpleForm = (_dec = customElement('ui5-simple-form'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec(_class = _dec2(_class = (_class2 = function () {
        function Ui5SimpleForm(element) {
          _classCallCheck(this, Ui5SimpleForm);

          _initDefineProp(this, 'ui5Id', _descriptor, this);

          _initDefineProp(this, 'title', _descriptor2, this);

          _initDefineProp(this, 'maxContainerCols', _descriptor3, this);

          _initDefineProp(this, 'minWidth', _descriptor4, this);

          _initDefineProp(this, 'width', _descriptor5, this);

          _initDefineProp(this, 'editable', _descriptor6, this);

          _initDefineProp(this, 'labelMinWidth', _descriptor7, this);

          _initDefineProp(this, 'layout', _descriptor8, this);

          _initDefineProp(this, 'backgroundDesign', _descriptor9, this);

          _initDefineProp(this, 'labelSpanXL', _descriptor10, this);

          _initDefineProp(this, 'labelSpanL', _descriptor11, this);

          _initDefineProp(this, 'labelSpanM', _descriptor12, this);

          _initDefineProp(this, 'labelSpanS', _descriptor13, this);

          _initDefineProp(this, 'adjustLabelSpan', _descriptor14, this);

          _initDefineProp(this, 'emptySpanXL', _descriptor15, this);

          _initDefineProp(this, 'emptySpanL', _descriptor16, this);

          _initDefineProp(this, 'emptySpanM', _descriptor17, this);

          _initDefineProp(this, 'emptySpanS', _descriptor18, this);

          _initDefineProp(this, 'singleContainerFullSize', _descriptor19, this);

          _initDefineProp(this, 'breakpointXL', _descriptor20, this);

          _initDefineProp(this, 'breakpointL', _descriptor21, this);

          _initDefineProp(this, 'breakpointM', _descriptor22, this);

          this._form = null;

          this.element = element;
        }

        Ui5SimpleForm.prototype.addChild = function addChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          if (path[0].localName == 'toolbar') this._form.setToolbar(child);
          if (path[0].localName == 'content') this._form.addContent(child);
        };

        Ui5SimpleForm.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          if (this.ui5Id == null) this.ui5Id = 'ui5simple_form_' + $(this.element)[0].attributes['au-target-id'].value;
          this._form = new sap.ui.layout.form.SimpleForm(this.ui5Id, {
            title: this.title,
            editable: getBooleanFromAttributeValue(this.editable),
            maxContainerCols: parseInt(this.maxContainerCols),
            minWidth: parseInt(this.minWidth),
            width: this.width,
            labelMinWidth: parseInt(this.labelMinWidth),
            layout: this.layout,
            backgroundDesign: this.backgroundDesign,
            labelSpanXL: parseInt(this.labelSpanXL),
            labelSpanL: parseInt(this.labelSpanL),
            labelSpanM: parseInt(this.labelSpanM),
            labelSpanS: parseInt(this.labelSpanS),
            adjustLabelSpan: getBooleanFromAttributeValue(this.adjustLabelSpan),
            emptySpanXL: parseInt(this.emptySpanXL),
            emptySpanL: parseInt(this.emptySpanL),
            emptySpanM: parseInt(this.emptySpanM),
            emptySpanS: parseInt(this.emptySpanS),
            singleContainerFullSize: getBooleanFromAttributeValue(this.singleContainerFullSize),
            breakpointXL: parseInt(this.breakpointXL),
            breakpointL: parseInt(this.breakpointL),
            breakpointM: parseInt(this.breakpointM)

          });

          if ($(this.element).parents("[ui5-container]").length > 0) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
          } else {
            this._form.placeAt(this.element.parentElement);
            attributeManager.addClasses("ui5-hide");
          }
        };

        Ui5SimpleForm.prototype.titleChanged = function titleChanged(newValue) {
          if (this._form !== null) {
            this._form.setTitle(newValue);
          }
        };

        Ui5SimpleForm.prototype.maxContainerColsChanged = function maxContainerColsChanged(newValue) {
          if (this._form !== null) {
            this._form.setMaxContainerCols(newValue);
          }
        };

        Ui5SimpleForm.prototype.editableChanged = function editableChanged(newValue) {
          if (this._form !== null) {
            this._form.setEditable(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5SimpleForm.prototype.minWidthChanged = function minWidthChanged(newValue) {
          if (this._form !== null) {
            this._form.setMinWidth(newValue);
          }
        };

        Ui5SimpleForm.prototype.widthChanged = function widthChanged(newValue) {
          if (this._form !== null) {
            this._form.setWidth(newValue);
          }
        };

        Ui5SimpleForm.prototype.labelMinWidthChanged = function labelMinWidthChanged(newValue) {
          if (this._form !== null) {
            this._form.setLabelMinWidth(newValue);
          }
        };

        Ui5SimpleForm.prototype.layoutChanged = function layoutChanged(newValue) {
          if (this._form !== null) {
            this._form.setLayout(newValue);
          }
        };

        Ui5SimpleForm.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
          if (this._form !== null) {
            this._form.setBackgroundDesign(newValue);
          }
        };

        return Ui5SimpleForm;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'title', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'maxContainerCols', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'minWidth', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'labelMinWidth', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return 192;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'layout', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return 'ResponsiveLayout';
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'backgroundDesign', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return 'Translucent';
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanXL', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanL', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return 4;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanM', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'labelSpanS', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return 12;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'adjustLabelSpan', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanXL', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
          return -1;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanL', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanM', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'emptySpanS', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'singleContainerFullSize', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointXL', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
          return 1440;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointL', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
          return 1024;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'breakpointM', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
          return 600;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5SimpleForm', Ui5SimpleForm);
    }
  };
});