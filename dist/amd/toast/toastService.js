define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Ui5ToastService = exports.Ui5ToastService = function () {
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
  }();
});