'use strict';

System.register(['aurelia-templating', 'aurelia-dependency-injection', '../common/attributeManager', '../common/attributes'], function (_export, _context) {
  "use strict";

  var bindable, customElement, noView, inject, AttributeManager, getBooleanFromAttributeValue, _dec, _dec2, _class, Ui5TileContainer;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
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
      _export('Ui5TileContainer', Ui5TileContainer = (_dec = customElement('ui5-tile-container'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
        function Ui5TileContainer(element) {
          _classCallCheck(this, Ui5TileContainer);

          this._container = null;

          this.element = element;
        }

        Ui5TileContainer.prototype.addChild = function addChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          if (path[0].localName == 'tile') this._container.addTile(child);
        };

        Ui5TileContainer.prototype.removeChild = function removeChild(child, elem) {
          var path = $(elem).parentsUntil(this.element);
          if (path[0].localName == 'tile') this._container.removeTile(child);
        };

        Ui5TileContainer.prototype.attached = function attached() {
          this._container = new sap.m.TileContainer();
          $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
        };

        Ui5TileContainer.prototype.detached = function detached() {
          if ($(this.element).parents("[ui5-container]")[0]) {
            $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
          }
        };

        return Ui5TileContainer;
      }()) || _class) || _class));

      _export('Ui5TileContainer', Ui5TileContainer);
    }
  };
});