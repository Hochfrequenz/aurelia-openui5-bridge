"use strict";

System.register([], function (_export, _context) {
  "use strict";

  function initialize() {
    new Promise(function (resolve) {
      return sap.ui.getCore().attachInit(function () {
        new sap.m.BusyIndicator().placeAt("indicator");
        resolve();
      });
    });
  }

  _export("initialize", initialize);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=../dist/dev/common/init.js.map
