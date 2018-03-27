'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createJSONModel = createJSONModel;
exports.assignModel = assignModel;
exports.assignModelFromTemplate = assignModelFromTemplate;
function createJSONModel() {
  return new sap.ui.model.json.JSONModel();
}
function assignModel(tree, model, templateBinding) {
  tree.setModel(model);
  tree.bindAggregation('items', '/', new sap.m.StandardTreeItem(templateBinding));
}
function assignModelFromTemplate(tree, model, treeItem) {
  tree.setModel(model);
  tree.bindAggregation('items', '/', treeItem);
}