// import 'materialize';

import { I18N, Backend } from 'aurelia-i18n';
import { ValidationMessageProvider } from 'aurelia-validation';

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
    .plugin('aurelia-validation')
    .plugin('aurelia-i18n', (instance) => {
      // register backend plugin
      instance.i18next.use(Backend.with(aurelia.loader));

      // adapt options to your needs (see http://i18next.com/docs/options/)
      // make sure to return the promise of the setup method, in order to guarantee proper loading
      return instance.setup({
        backend: {                                  // <-- configure backend settings
          loadPath: './locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
        },
        lng: 'de',
        attributes: ['t', 'i18n'],
        fallbackLng: 'en',
        debug: false
      });
    });

  aurelia.use.globalResources('shared/collapse-panel');
  aurelia.use.globalResources('shared/markdown');
  aurelia.use.globalResources('shared/logger');
  aurelia.use.globalResources('shared/au-code');
  aurelia.use.globalResources('shared/sampleValueConverters');

  ValidationMessageProvider.prototype.getMessage = function (key) {
    const i18n = aurelia.container.get(I18N);
    const translation = i18n.tr(`errorMessages.${key}`);
    return this.parser.parseMessage(translation);
  };

  ValidationMessageProvider.prototype.getDisplayName = function (propertyName, displayName) {
    if (displayName !== null && displayName !== undefined) {
      return displayName;
    }
    const i18n = aurelia.container.get(I18N);
    return i18n.tr(propertyName);
  };

  return aurelia.start()
    .then(au => au.setRoot('app'));

}
