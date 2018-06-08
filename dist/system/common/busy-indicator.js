"use strict";

System.register([], function (_export, _context) {
    "use strict";

    function showBusyIndicator(delay) {
        sap.ui.core.BusyIndicator.show(delay);
    }

    _export("showBusyIndicator", showBusyIndicator);

    function hideBusyIndicator() {
        sap.ui.core.BusyIndicator.hide();
    }

    _export("hideBusyIndicator", hideBusyIndicator);

    return {
        setters: [],
        execute: function () {}
    };
});