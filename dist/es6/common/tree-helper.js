export function createJSONModel() {
  return new sap.ui.model.json.JSONModel();
}
export function assignModel(tree,model){
  tree._resetItemsBinding();
  tree.setModel(model);
  tree.bindObject({'path':'/'});
}
