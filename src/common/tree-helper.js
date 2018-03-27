export function createJSONModel() {
  return new sap.ui.model.json.JSONModel();
}
export function assignModel(tree, model, templateBinding) {
  tree.setModel(model);
  tree.bindAggregation('items', '/', new sap.m.StandardTreeItem(templateBinding));
}
export function assignModelFromTemplate(tree, model, treeItem) {
  tree.setModel(model);
  tree.bindAggregation('items', '/', treeItem);
}
