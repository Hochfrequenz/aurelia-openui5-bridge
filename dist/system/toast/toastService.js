"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Ui5ToastService;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("Ui5ToastService", Ui5ToastService = function () {
        function Ui5ToastService() {
          _classCallCheck(this, Ui5ToastService);
        }

        Ui5ToastService.prototype.show = function show(message, displayLength) {
          return new Promise(function (resolve, reject) {
            sap.m.MessageToast.show(message, {
              duration: displayLength,
              onClose: function onClose() {
                resolve();
              }
            });
          });
        };

        return Ui5ToastService;
      }());

      _export("Ui5ToastService", Ui5ToastService);
    }
  };
});