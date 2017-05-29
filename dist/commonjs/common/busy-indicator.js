"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.showBusyIndicator = showBusyIndicator;
exports.hideBusyIndicator = hideBusyIndicator;
function showBusyIndicator(delay) {
    sap.ui.core.BusyIndicator.show(delay);
}
function hideBusyIndicator() {
    sap.ui.core.BusyIndicator.hide();
}