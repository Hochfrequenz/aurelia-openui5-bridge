"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function ui5Initialize() {
    new Promise(function (resolve) {
      return sap.ui.getCore().attachInit(function () {
        new sap.m.BusyIndicator().placeAt("indicator");
        resolve();
      });
    });
  }

  _export("ui5Initialize", ui5Initialize);

  function ui5SetTheme(name, path) {
    sap.ui.getCore().applyTheme(name, path);
  }

  _export("ui5SetTheme", ui5SetTheme);

  return {
    setters: [],
    execute: function () {}
  };
});