/**
 * Initialize the plugin and respond with a promise
 */
export function ui5Initialize(debug) {
  var Log = sap.ui.require('sap/base/Log');

  if (debug) Log.setLevel(Log.Level.DEBUG);
  else Log.setLevel(Log.Level.WARNING);

  new Promise((resolve) =>
    sap.ui.getCore().attachInit(() => {
      new sap.m.BusyIndicator().placeAt('indicator');
      resolve();
    })
  );
}
export function ui5SetTheme(name, path) {
  sap.ui.getCore().applyTheme(name, path);
}
export function findUi5DialogElement(name) {
  // jQuery.sap.log.warning(`querying [ui5-id="${name}"]`);
  return document.body.querySelector(`[ui5-id="${name}"]`);
}
export function getUi5DialogElement(name) {
  try {
    // jQuery.sap.log.warning(`querying [ui5-id="${name}"]`);
    console.log(`querying [ui5-id="${name}"]`);
    return document.body.querySelector(`[ui5-id="${name}"]`).au.controller
      .viewModel.UIElement;
  } catch (exc) {
    //jQuery.sap.log.warning(exc);
    console.log(exc);
    return null;
  }
}
