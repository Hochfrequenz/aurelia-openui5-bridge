define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ui5Initialize = ui5Initialize;
  exports.ui5SetTheme = ui5SetTheme;
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
});