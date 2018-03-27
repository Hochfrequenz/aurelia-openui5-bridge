'use strict';

System.register([], function (_export, _context) {
  "use strict";

  function createJSONModel() {
    return new sap.ui.model.json.JSONModel();
  }

  _export('createJSONModel', createJSONModel);

  function assignModel(tree, model, templateBinding) {
    tree.setModel(model);
    tree.bindAggregation('items', '/', new sap.m.StandardTreeItem(templateBinding));
  }

  _export('assignModel', assignModel);

  function assignModelFromTemplate(tree, model, treeItem) {
    tree.setModel(model);
    tree.bindAggregation('items', '/', treeItem);
  }

  _export('assignModelFromTemplate', assignModelFromTemplate);

  return {
    setters: [],
    execute: function () {}
  };
});