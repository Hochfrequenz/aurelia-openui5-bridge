define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ui5Initialize = ui5Initialize;
  exports.ui5SetTheme = ui5SetTheme;
  exports.findUi5DialogElement = findUi5DialogElement;
  exports.getUi5DialogElement = getUi5DialogElement;
  function ui5Initialize() {
    new Promise(function (resolve) {
      return sap.ui.getCore().attachInit(function () {
        new sap.m.BusyIndicator().placeAt("indicator");
        resolve();
      });
    });
  }
  function ui5SetTheme(name, path) {
    sap.ui.getCore().applyTheme(name, path);
  }
  function findUi5DialogElement(name) {
    return document.body.querySelector("[ui5-dialog-id=\"" + name + "\"");
  }
  function getUi5DialogElement(name) {
    try {
      return document.body.querySelector("[ui5-dialog-id=\"" + name + "\"").au.controller.viewModel.UIElement;
    } catch (exc) {
      return null;
    }
  }
});