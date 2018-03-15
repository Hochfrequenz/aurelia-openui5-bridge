'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function createJSONModel() {
    return new sap.ui.model.json.JSONModel();
  }

  _export('createJSONModel', createJSONModel);

  function assignModel(tree, model) {
    tree._resetItemsBinding();
    tree.setModel(model);
    tree.bindObject({ 'path': '/' });
  }

  _export('assignModel', assignModel);

  return {
    setters: [],
    execute: function () {}
  };
});