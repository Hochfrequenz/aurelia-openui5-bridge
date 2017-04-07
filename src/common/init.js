
/**
* Initialize the plugin and respond with a promise
*/
export function initialize() {
  new Promise(resolve => sap.ui.getCore().attachInit(() => {
    new sap.m.BusyIndicator().placeAt("indicator");
    resolve();
  }));
}
