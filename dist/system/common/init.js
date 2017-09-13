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

  function findUi5DialogElement(name) {
    return document.body.querySelector("[ui5-dialog-id=\"" + name + "\"");
  }

  _export("findUi5DialogElement", findUi5DialogElement);

  function getUi5DialogElement(name) {
    try {
      return document.body.querySelector("[ui5-dialog-id=\"" + name + "\"").au.controller.viewModel.UIElement;
    } catch (exc) {
      return null;
    }
  }

  _export("getUi5DialogElement", getUi5DialogElement);

  return {
    setters: [],
    execute: function () {}
  };
});