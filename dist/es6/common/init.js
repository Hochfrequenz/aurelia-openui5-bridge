
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
export function findUi5DialogElement(name){
  return document.body.querySelector(`[ui5-dialog-id="${name}"`); 
}
export function getUi5DialogElement(name) {
  try {
    return document.body.querySelector(`[ui5-dialog-id="${name}"`).au.controller.viewModel.UIElement;
  }
  catch (exc) {
    return null;
  }
}