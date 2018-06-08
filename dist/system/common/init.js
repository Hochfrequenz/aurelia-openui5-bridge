"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function ui5Initialize(debug) {
    if (debug) jQuery.sap.log.setLevel(jQuery.sap.log.Level.DEBUG);
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
    return document.body.querySelector("[ui5-id=\"" + name + "\"]");
  }

  _export("findUi5DialogElement", findUi5DialogElement);

  function getUi5DialogElement(name) {
    try {
      console.log("querying [ui5-id=\"" + name + "\"]");
      return document.body.querySelector("[ui5-id=\"" + name + "\"]").au.controller.viewModel.UIElement;
    } catch (exc) {
      console.log(exc);
      return null;
    }
  }

  _export("getUi5DialogElement", getUi5DialogElement);

  return {
    setters: [],
    execute: function () {}
  };
});