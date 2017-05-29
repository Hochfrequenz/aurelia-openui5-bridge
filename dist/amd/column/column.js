define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../control/control'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _attributeManager, _attributes, _control) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Ui5Column = undefined;

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

  var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

  var Ui5Column = exports.Ui5Column = (_dec = (0, _aureliaTemplating.customElement)('ui5-column'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec(_class = _dec2(_class = (_class2 = function () {
    function Ui5Column(element) {
      _classCallCheck(this, Ui5Column);

      this._column = null;

      _initDefineProp(this, 'ui5Id', _descriptor, this);

      _initDefineProp(this, 'width', _descriptor2, this);

      _initDefineProp(this, 'hAlign', _descriptor3, this);

      _initDefineProp(this, 'vAlign', _descriptor4, this);

      _initDefineProp(this, 'styleClass', _descriptor5, this);

      _initDefineProp(this, 'visible', _descriptor6, this);

      _initDefineProp(this, 'minScreenWidth', _descriptor7, this);

      _initDefineProp(this, 'demandPopin', _descriptor8, this);

      _initDefineProp(this, 'popinHAlign', _descriptor9, this);

      _initDefineProp(this, 'popinDisplay', _descriptor10, this);

      _initDefineProp(this, 'mergeDuplicates', _descriptor11, this);

      _initDefineProp(this, 'mergeFunctionName', _descriptor12, this);

      this.element = element;
    }

    Ui5Column.prototype.defaultFunc = function defaultFunc() {};

    Ui5Column.prototype.attached = function attached() {
      var attributeManager = new _attributeManager.AttributeManager(this.element);
      var params = {
        width: this.width,
        hAlign: this.hAlign,
        vAlign: this.vAlign,
        styleClass: this.styleClass,
        visible: (0, _attributes.getBooleanFromAttributeValue)(this.visible),
        minScreenWidth: this.minScreenWidth,
        demandPopin: (0, _attributes.getBooleanFromAttributeValue)(this.demandPopin),
        popinDisplay: this.popinDisplay,
        popinHAlign: this.popinHAlign,
        mergeDuplicates: (0, _attributes.getBooleanFromAttributeValue)(this.mergeDuplicates),
        mergeFunctionName: this.mergeFunctionName
      };
      if (this.ui5Id) this._column = new sap.m.Column(this.ui5Id, params);else this._column = new sap.m.Column(params);
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._column, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    };

    Ui5Column.prototype.addChild = function addChild(child, elem) {
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

        if (elem.localName == 'header') {
          this._column.setHeader(child);break;
        }
        if (elem.localName == 'footer') {
          this._column.setFooter(child);break;
        }
        if (elem.localName == 'content') {
          this._column.addDependent(child);break;
        }
      }
    };

    Ui5Column.prototype.widthChanged = function widthChanged(newValue) {
      if (this._column !== null) {
        this._column.setWidth(newValue);
      }
    };

    Ui5Column.prototype.hAlignChanged = function hAlignChanged(newValue) {
      if (this._column !== null) {
        this._column.setHAlign(newValue);
      }
    };

    Ui5Column.prototype.vAlignChanged = function vAlignChanged(newValue) {
      if (this._column !== null) {
        this._column.setVAlign(newValue);
      }
    };

    Ui5Column.prototype.styleClassChanged = function styleClassChanged(newValue) {
      if (this._column !== null) {
        this._column.setStyleClass(newValue);
      }
    };

    Ui5Column.prototype.visibleChanged = function visibleChanged(newValue) {
      if (this._column !== null) {
        this._column.setVisible((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Column.prototype.minScreenWidthChanged = function minScreenWidthChanged(newValue) {
      if (this._column !== null) {
        this._column.setMinScreenWidth(newValue);
      }
    };

    Ui5Column.prototype.demandPopinChanged = function demandPopinChanged(newValue) {
      if (this._column !== null) {
        this._column.setDemandPopin((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Column.prototype.popinDisplayChanged = function popinDisplayChanged(newValue) {
      if (this._column !== null) {
        this._column.setPopinDisplay(newValue);
      }
    };

    Ui5Column.prototype.popinHAlignChanged = function popinHAlignChanged(newValue) {
      if (this._column !== null) {
        this._column.setPopinHAlign(newValue);
      }
    };

    Ui5Column.prototype.mergeDuplicatesChanged = function mergeDuplicatesChanged(newValue) {
      if (this._column !== null) {
        this._column.setMergeDuplicates((0, _attributes.getBooleanFromAttributeValue)(newValue));
      }
    };

    Ui5Column.prototype.mergeFunctionNameChanged = function mergeFunctionNameChanged(newValue) {
      if (this._column !== null) {
        this._column.setMergeFunctionName(newValue);
      }
    };

    return Ui5Column;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec4], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'hAlign', [_dec5], {
    enumerable: true,
    initializer: function initializer() {
      return 'Begin';
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'vAlign', [_dec6], {
    enumerable: true,
    initializer: function initializer() {
      return 'Inherit';
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'styleClass', [_dec7], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'visible', [_dec8], {
    enumerable: true,
    initializer: function initializer() {
      return true;
    }
  }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'minScreenWidth', [_dec9], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'demandPopin', [_dec10], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'popinHAlign', [_dec11], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'popinDisplay', [_dec12], {
    enumerable: true,
    initializer: function initializer() {
      return null;
    }
  }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'mergeDuplicates', [_dec13], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'mergeFunctionName', [_dec14], {
    enumerable: true,
    initializer: function initializer() {
      return 'getText';
    }
  })), _class2)) || _class) || _class);
});