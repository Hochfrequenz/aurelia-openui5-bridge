import {ConfigBuilder} from './config-builder';

import {polyfillElementClosest} from './common/polyfills';

function applyPolyfills() {
  polyfillElementClosest();
}

export function configure(aurelia, configCallback) {
  applyPolyfills();
  let builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof(configCallback) === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

// build-index-remove start
export * from './exports';
// build-index-remove end
