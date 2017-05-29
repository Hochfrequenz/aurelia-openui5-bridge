'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes', '../input-base/input-base'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, Ui5InputBase, _createClass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, Ui5Input;

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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
    }, function (_inputBaseInputBase) {
      Ui5InputBase = _inputBaseInputBase.Ui5InputBase;
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

      _export('Ui5Input', Ui5Input = (_dec = customElement('ui5-input'), _dec2 = inject(Element), _dec3 = bindable(), _dec4 = bindable(), _dec5 = bindable(), _dec6 = bindable(), _dec7 = bindable(), _dec8 = bindable(), _dec9 = bindable(), _dec10 = bindable(), _dec11 = bindable(), _dec12 = bindable(), _dec13 = bindable(), _dec14 = bindable(), _dec15 = bindable(), _dec16 = bindable(), _dec17 = bindable(), _dec18 = bindable(), _dec19 = bindable(), _dec20 = bindable(), _dec21 = bindable(), _dec22 = bindable(), _dec23 = bindable(), _dec24 = bindable(), _dec25 = bindable(), _dec26 = bindable(), _dec27 = bindable(), _dec28 = bindable(), _dec29 = bindable(), _dec30 = bindable(), _dec31 = bindable(), _dec32 = bindable(), _dec33 = bindable(), _dec34 = bindable(), _dec35 = bindable(), _dec36 = bindable(), _dec37 = bindable(), _dec38 = bindable(), _dec39 = bindable(), _dec40 = bindable(), _dec41 = bindable(), _dec42 = bindable(), _dec43 = bindable(), _dec(_class = _dec2(_class = (_class2 = function (_Ui5InputBase) {
        _inherits(Ui5Input, _Ui5InputBase);

        Ui5Input.prototype.addChild = function addChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          _Ui5InputBase.prototype.addChild.call(this, child, elem);
          for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            if (_isArray) {
              if (_i >= _iterator.length) break;
              elem = _iterator[_i++];
            } else {
              _i = _iterator.next();
              if (_i.done) break;
              elem = _i.value;
            }

            if (elem.localName == 'suggestion-item') {
              this._input.addSuggestionItem(child);
              return elem.localName;
            } else if (elem.localName == 'suggestion-row') {
              this._input.addSuggestionRow(child);
              return elem.localName;
            }
          }
        };

        Ui5Input.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
          if (relation == 'suggestion-item') {
            this._input.removeSuggestionItem(child);
          } else if (relation == 'suggestion-row') {
            this._input.removeSuggestionRow(child);
          }
        };

        Ui5Input.prototype.removeChild = function removeChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          _Ui5InputBase.prototype.removeChild.call(this, child, elem);
          for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              elem = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              elem = _i2.value;
            }

            if (elem.localName == 'suggestion-item') {
              this._input.removeSuggestionItem(child);
              break;
            } else if (elem.localName == 'suggestion-row') {
              this._input.removeSuggestionRow(child);
              break;
            }
          }
        };

        _createClass(Ui5Input, [{
          key: 'UIElement',
          get: function get() {
            return this._input;
          }
        }]);

        function Ui5Input(element) {
          _classCallCheck(this, Ui5Input);

          var _this = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

          _this._input = null;

          _initDefineProp(_this, 'ui5Id', _descriptor, _this);

          _initDefineProp(_this, 'type', _descriptor2, _this);

          _initDefineProp(_this, 'maxLength', _descriptor3, _this);

          _initDefineProp(_this, 'dateFormat', _descriptor4, _this);

          _initDefineProp(_this, 'showValueHelp', _descriptor5, _this);

          _initDefineProp(_this, 'showSuggestion', _descriptor6, _this);

          _initDefineProp(_this, 'valueHelpOnly', _descriptor7, _this);

          _initDefineProp(_this, 'filterSuggests', _descriptor8, _this);

          _initDefineProp(_this, 'maxSuggestionWidth', _descriptor9, _this);

          _initDefineProp(_this, 'showTableSuggestionValueHelp', _descriptor10, _this);

          _initDefineProp(_this, 'description', _descriptor11, _this);

          _initDefineProp(_this, 'fieldWidth', _descriptor12, _this);

          _initDefineProp(_this, 'valueLiveUpdate', _descriptor13, _this);

          _initDefineProp(_this, 'selectedKey', _descriptor14, _this);

          _initDefineProp(_this, 'textFormatMode', _descriptor15, _this);

          _initDefineProp(_this, 'textFormatter', _descriptor16, _this);

          _initDefineProp(_this, 'suggestionRowValidator', _descriptor17, _this);

          _initDefineProp(_this, 'suggestionItems', _descriptor18, _this);

          _initDefineProp(_this, 'suggestionColumns', _descriptor19, _this);

          _initDefineProp(_this, 'suggestionRows', _descriptor20, _this);

          _initDefineProp(_this, 'selectedItem', _descriptor21, _this);

          _initDefineProp(_this, 'selectedRow', _descriptor22, _this);

          _initDefineProp(_this, 'liveChange', _descriptor23, _this);

          _initDefineProp(_this, 'valueHelpRequest', _descriptor24, _this);

          _initDefineProp(_this, 'suggest', _descriptor25, _this);

          _initDefineProp(_this, 'suggestionItemSelected', _descriptor26, _this);

          _initDefineProp(_this, 'submit', _descriptor27, _this);

          _initDefineProp(_this, 'value', _descriptor28, _this);

          _initDefineProp(_this, 'width', _descriptor29, _this);

          _initDefineProp(_this, 'enabled', _descriptor30, _this);

          _initDefineProp(_this, 'valueState', _descriptor31, _this);

          _initDefineProp(_this, 'name', _descriptor32, _this);

          _initDefineProp(_this, 'placeholder', _descriptor33, _this);

          _initDefineProp(_this, 'editable', _descriptor34, _this);

          _initDefineProp(_this, 'valueStateText', _descriptor35, _this);

          _initDefineProp(_this, 'showValueStateMessage', _descriptor36, _this);

          _initDefineProp(_this, 'textAlign', _descriptor37, _this);

          _initDefineProp(_this, 'textDirection', _descriptor38, _this);

          _initDefineProp(_this, 'required', _descriptor39, _this);

          _initDefineProp(_this, 'change', _descriptor40, _this);

          _initDefineProp(_this, 'busy', _descriptor41, _this);

          _this.element = element;
          return _this;
        }

        Ui5Input.prototype.defaultFunc = function defaultFunc() {};

        Ui5Input.prototype.attached = function attached() {
          var attributeManager = new AttributeManager(this.element);
          var params = {
            type: this.type,
            maxLength: this.maxLength,
            dateFormat: this.dateFormat,
            showValueHelp: getBooleanFromAttributeValue(this.showValueHelp),
            showSuggestion: getBooleanFromAttributeValue(this.showSuggestion),
            valueHelpOnly: getBooleanFromAttributeValue(this.valueHelpOnly),
            filterSuggests: getBooleanFromAttributeValue(this.filterSuggests),
            maxSuggestionWidth: this.maxSuggestionWidth,
            showTableSuggestionValueHelp: getBooleanFromAttributeValue(this.showTableSuggestionValueHelp),
            description: this.description,
            fieldWidth: this.fieldWidth,
            valueLiveUpdate: getBooleanFromAttributeValue(this.valueLiveUpdate),
            selectedKey: this.selectedKey,
            textFormatMode: this.textFormatMode,
            suggestionRowValidator: this.suggestionRowValidator,
            suggestionItems: this.suggestionItems,
            suggestionColumns: this.suggestionColumns,
            suggestionRows: this.suggestionRows,
            selectedItem: this.selectedItem,
            selectedRow: this.selectedRow,
            liveChange: this.liveChange,
            suggest: this.suggest,
            valueHelpRequest: this.valueHelpRequest,
            suggestionItemSelected: this.suggestionItemSelected,
            submit: this.submit,
            value: this.value,
            width: this.width,
            enabled: getBooleanFromAttributeValue(this.enabled),
            valueState: this.valueState,
            name: this.value,
            placeholder: this.placeholder,
            editable: getBooleanFromAttributeValue(this.editable),
            valueStateText: this.valueStateText,
            showValueStateMessage: getBooleanFromAttributeValue(this.showValueStateMessage),
            textAlign: this.textAlign,
            textDirection: this.textDirection,
            required: getBooleanFromAttributeValue(this.required),
            change: this.change
          };
          if (this.ui5Id) this._input = new sap.m.Input(this.ui5Id, params);else this._input = new sap.m.Input(params);
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._input, this.element);
          attributeManager.addAttributes({ "ui5-layout": '' });
          attributeManager.addAttributes({ "ui5-container": '' });
          var that = this;
          this._input.attachChange(function (event) {
            that.value = event.mParameters.value;
          });
          this._input.attachLiveChange(function (event) {
            if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {
              that.value = event.mParameters.value;
            }
          });
          this._input.addEventDelegate(this.element);
          _Ui5InputBase.prototype.attached.call(this);
        };

        Ui5Input.prototype.typeChanged = function typeChanged(newValue) {
          if (this._input !== null) {
            this._input.setType(newValue);
          }
        };

        Ui5Input.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
          if (this._input !== null) {
            this._input.setMaxLength(newValue);
          }
        };

        Ui5Input.prototype.dateFormatChanged = function dateFormatChanged(newValue) {
          if (this._input !== null) {
            this._input.setDateFormat(newValue);
          }
        };

        Ui5Input.prototype.showValueHelpChanged = function showValueHelpChanged(newValue) {
          if (this._input !== null) {
            this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.showSuggestionChanged = function showSuggestionChanged(newValue) {
          if (this._input !== null) {
            this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.valueHelpOnlyChanged = function valueHelpOnlyChanged(newValue) {
          if (this._input !== null) {
            this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.filterSuggestsChanged = function filterSuggestsChanged(newValue) {
          if (this._input !== null) {
            this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.maxSuggestionWidthChanged = function maxSuggestionWidthChanged(newValue) {
          if (this._input !== null) {
            this._input.setMaxSuggestionWidth(newValue);
          }
        };

        Ui5Input.prototype.showTableSuggestionValueHelpChanged = function showTableSuggestionValueHelpChanged(newValue) {
          if (this._input !== null) {
            this._input.setTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.descriptionChanged = function descriptionChanged(newValue) {
          if (this._input !== null) {
            this._input.setDescription(newValue);
          }
        };

        Ui5Input.prototype.fieldWidthChanged = function fieldWidthChanged(newValue) {
          if (this._input !== null) {
            this._input.setFieldWidth(newValue);
          }
        };

        Ui5Input.prototype.valueLiveUpdateChanged = function valueLiveUpdateChanged(newValue) {
          if (this._input !== null) {
            this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
          if (this._input !== null) {
            this._input.setSelectedKey(newValue);
          }
        };

        Ui5Input.prototype.textFormatModeChanged = function textFormatModeChanged(newValue) {
          if (this._input !== null) {
            this._input.setTextFormatMode(newValue);
          }
        };

        Ui5Input.prototype.textFormatterChanged = function textFormatterChanged(newValue) {
          if (this._input !== null) {
            this._input.setTextFormatter(newValue);
          }
        };

        Ui5Input.prototype.suggestionRowValidatorChanged = function suggestionRowValidatorChanged(newValue) {
          if (this._input !== null) {
            this._input.setSuggestionsRowValidator(newValue);
          }
        };

        Ui5Input.prototype.suggestionItemsChanged = function suggestionItemsChanged(newValue) {
          if (this._input !== null) {
            this._input.setSuggestionsItems(newValue);
          }
        };

        Ui5Input.prototype.suggestionColumnsChanged = function suggestionColumnsChanged(newValue) {
          if (this._input !== null) {
            this._input.setSuggestionsRowValidator(newValue);
          }
        };

        Ui5Input.prototype.suggestionRowsChanged = function suggestionRowsChanged(newValue) {
          if (this._input !== null) {
            this._input.setSuggestionsRowValidator(newValue);
          }
        };

        Ui5Input.prototype.selectedItemChanged = function selectedItemChanged(newValue) {
          if (this._input !== null) {
            this._input.setSelectedItem(newValue);
          }
        };

        Ui5Input.prototype.selectedRowChanged = function selectedRowChanged(newValue) {
          if (this._input !== null) {
            this._input.setSelectedRow(newValue);
          }
        };

        Ui5Input.prototype.liveChangeChanged = function liveChangeChanged(newValue) {
          if (this._input !== null) {
            this._input.attachLiveChange(newValue);
          }
        };

        Ui5Input.prototype.valueHelpRequestChanged = function valueHelpRequestChanged(newValue) {
          if (this._input !== null) {
            this._input.attachValueHelpRequest(newValue);
          }
        };

        Ui5Input.prototype.suggestChanged = function suggestChanged(newValue) {
          if (this._input !== null) {
            this._input.attachSuggest(newValue);
          }
        };

        Ui5Input.prototype.suggestionItemSelectedChanged = function suggestionItemSelectedChanged(newValue) {
          if (this._input !== null) {
            this._input.attachSuggestionItemSelected(newValue);
          }
        };

        Ui5Input.prototype.submitChanged = function submitChanged(newValue) {
          if (this._input !== null) {
            this._input.attachSubmit(newValue);
          }
        };

        Ui5Input.prototype.valueChanged = function valueChanged(newValue) {
          if (this._input !== null) {
            this._input.setValue(newValue);
          }
        };

        Ui5Input.prototype.widthChanged = function widthChanged(newValue) {
          if (this._input !== null) {
            this._input.setWidth(newValue);
          }
        };

        Ui5Input.prototype.enabledChanged = function enabledChanged(newValue) {
          if (this._input !== null) {
            this._input.setEnabled(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.valueStateChanged = function valueStateChanged(newValue) {
          if (this._input !== null) {
            this._input.setValueState(newValue);
          }
        };

        Ui5Input.prototype.nameChanged = function nameChanged(newValue) {
          if (this._input !== null) {
            this._input.setName(newValue);
          }
        };

        Ui5Input.prototype.placeholderChanged = function placeholderChanged(newValue) {
          if (this._input !== null) {
            this._input.setPlaceholder(newValue);
          }
        };

        Ui5Input.prototype.editableChanged = function editableChanged(newValue) {
          if (this._input !== null) {
            this._input.setEditable(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
          if (this._input !== null) {
            this._input.setValueStateText(newValue);
          }
        };

        Ui5Input.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
          if (this._input !== null) {
            this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.textAlignChanged = function textAlignChanged(newValue) {
          if (this._input !== null) {
            this._input.setTextAlign(newValue);
          }
        };

        Ui5Input.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
          if (this._input !== null) {
            this._input.setTextDirection(newValue);
          }
        };

        Ui5Input.prototype.requiredChanged = function requiredChanged(newValue) {
          if (this._input !== null) {
            this._input.setRequired(getBooleanFromAttributeValue(newValue));
          }
        };

        Ui5Input.prototype.changeChanged = function changeChanged(newValue) {
          if (this._input !== null) {
            this._input.attachChange(newValue);
          }
        };

        Ui5Input.prototype.busyChanged = function busyChanged(newValue) {
          if (this._input !== null) {
            this._input.setBusy(getBooleanFromAttributeValue(newValue));
          }
        };

        return Ui5Input;
      }(Ui5InputBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'ui5Id', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'type', [_dec4], {
        enumerable: true,
        initializer: function initializer() {
          return 'Text';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'maxLength', [_dec5], {
        enumerable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'dateFormat', [_dec6], {
        enumerable: true,
        initializer: function initializer() {
          return 'YYYY-MM-DD';
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'showValueHelp', [_dec7], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, 'showSuggestion', [_dec8], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, 'valueHelpOnly', [_dec9], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, 'filterSuggests', [_dec10], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, 'maxSuggestionWidth', [_dec11], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, 'showTableSuggestionValueHelp', [_dec12], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec13], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, 'fieldWidth', [_dec14], {
        enumerable: true,
        initializer: function initializer() {
          return '50%';
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, 'valueLiveUpdate', [_dec15], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, 'selectedKey', [_dec16], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, 'textFormatMode', [_dec17], {
        enumerable: true,
        initializer: function initializer() {
          return 'Value';
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, 'textFormatter', [_dec18], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionRowValidator', [_dec19], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionItems', [_dec20], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionColumns', [_dec21], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionRows', [_dec22], {
        enumerable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, 'selectedItem', [_dec23], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, 'selectedRow', [_dec24], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, 'liveChange', [_dec25], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, 'valueHelpRequest', [_dec26], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, 'suggest', [_dec27], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, 'suggestionItemSelected', [_dec28], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, 'submit', [_dec29], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec30], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, 'width', [_dec31], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, 'enabled', [_dec32], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, 'valueState', [_dec33], {
        enumerable: true,
        initializer: function initializer() {
          return 'None';
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, 'name', [_dec34], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, 'placeholder', [_dec35], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, 'editable', [_dec36], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, 'valueStateText', [_dec37], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, 'showValueStateMessage', [_dec38], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, 'textAlign', [_dec39], {
        enumerable: true,
        initializer: function initializer() {
          return 'Initial';
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, 'textDirection', [_dec40], {
        enumerable: true,
        initializer: function initializer() {
          return 'Inherit';
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, 'required', [_dec41], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, 'change', [_dec42], {
        enumerable: true,
        initializer: function initializer() {
          return this.defaultFunc;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, 'busy', [_dec43], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class) || _class));

      _export('Ui5Input', Ui5Input);
    }
  };
});
//# sourceMappingURL=../dist/dev/input/input.js.map
