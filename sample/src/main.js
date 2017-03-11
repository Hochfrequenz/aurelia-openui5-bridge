// import 'materialize';

//Configure Bluebird Promises.
(Promise.config || P.config)({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
   aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-openui5-bridge', plugin => {
        plugin.useAll();
      })
      .plugin('aurelia-validation');

    aurelia.use.globalResources('shared/collapse-panel');
    aurelia.use.globalResources('shared/markdown');
    aurelia.use.globalResources('shared/logger');
    aurelia.use.globalResources('shared/au-code');
    aurelia.use.globalResources('shared/sampleValueConverters');

    return aurelia.start()
      .then(au => au.setRoot('app'));
  
}
