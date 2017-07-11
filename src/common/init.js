
/**
* Initialize the plugin and respond with a promise
*/
export function ui5Initialize() {
  new Promise(resolve => sap.ui.getCore().attachInit(() => {
    new sap.m.BusyIndicator().placeAt("indicator");
    resolve();
  }));
}
export function ui5SetTheme(name, path) {
  sap.ui.getCore().applyTheme(name, path);
}
