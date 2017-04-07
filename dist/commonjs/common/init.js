"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = initialize;
function initialize() {
  new Promise(function (resolve) {
    return sap.ui.getCore().attachInit(function () {
      new sap.m.BusyIndicator().placeAt("indicator");
      resolve();
    });
  });
}