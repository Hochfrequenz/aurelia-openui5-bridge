define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ui5Initialize = ui5Initialize;
  exports.ui5SetTheme = ui5SetTheme;
  exports.findUi5DialogElement = findUi5DialogElement;
  exports.getUi5DialogElement = getUi5DialogElement;
  function ui5Initialize(debug) {
    if (debug) jQuery.sap.log.setLevel(jQuery.sap.log.Level.DEBUG);
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
    return document.body.querySelector("[ui5-id=\"" + name + "\"]");
  }
  function getUi5DialogElement(name) {
    try {
      console.log("querying [ui5-id=\"" + name + "\"]");
      return document.body.querySelector("[ui5-id=\"" + name + "\"]").au.controller.viewModel.UIElement;
    } catch (exc) {
      console.log(exc);
      return null;
    }
  }
});