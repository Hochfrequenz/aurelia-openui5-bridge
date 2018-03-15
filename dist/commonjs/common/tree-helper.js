'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createJSONModel = createJSONModel;
exports.assignModel = assignModel;
function createJSONModel() {
  return new sap.ui.model.json.JSONModel();
}
function assignModel(tree, model) {
  tree._resetItemsBinding();
  tree.setModel(model);
  tree.bindObject({ 'path': '/' });
}