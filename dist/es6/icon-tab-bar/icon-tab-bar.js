import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';

@customElement('ui5-icon-tab-bar')
@inject(Element)
export class Ui5IconTabBar {
  _tab = null;
  @bindable() showSelection = true;
  @bindable() expandable = true;
  @bindable() expanded = true;
  @bindable() selectedKey = null;
  @bindable() upperCase = false;
  @bindable() stretchContentHeight = false;
  @bindable() applyContentPadding = true;
  @bindable() backgroundDesign = 'Solid';
  @bindable() headerMode = 'Standard';
  @bindable() showOverflowSelectList = false;
  @bindable() headerBackgroundDesign = 'Solid';
  @bindable() enableTabReordering = false;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addItem(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.removeItem(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.IconTabBar({
      showSelection: getBooleanFromAttributeValue(this.showSelection),
      expandable: getBooleanFromAttributeValue(this.expandable),
      expanded: getBooleanFromAttributeValue(this.expanded),
      selectedKey:this.selectedKey,
      upperCase: getBooleanFromAttributeValue(this.upperCase),
      stretchContentHeight: getBooleanFromAttributeValue(this.stretchContentHeight),
      applyContentPadding: getBooleanFromAttributeValue(this.applyContentPadding),
      backgroundDesign: this.backgroundDesign,
      headerMode:this.headerMode,
      showOverflowSelectList: getBooleanFromAttributeValue(this.showOverflowSelectList),
      headerBackgroundDesign: this.headerBackgroundDesign,
      enableTabReordering: getBooleanFromAttributeValue (this.enableTabReordering)
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    }
    else {
      this._tab.destroy();
    }
  }
  showSelectionChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowSelection(getBooleanFromAttributeValue(newValue));
    }
  }
  expandableChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setExpandable(getBooleanFromAttributeValue(newValue));
    }
  }
  expandedChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setExpanded(getBooleanFromAttributeValue(newValue));
    }
  }
  selectedKeyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setSelectedKey(newValue);
    }
  }
  upperCaseChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setUpperCase(getBooleanFromAttributeValue(newValue));
    }
  }

  stretchContentHeightChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setStretchContentHeight(getBooleanFromAttributeValue(newValue));
    }
  }
  applyContentPaddingChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setApplyContentPadding(getBooleanFromAttributeValue(newValue));
    }
  }
  backgroundDesignChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setBackgroundDesign(newValue);
    }
  }
  headerModeChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setHeaderMode(newValue);
    }
  }
  showOverflowSelectListChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));
    }
  }
  headerBackgroundDesignChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setHeaderBackgroundDesign(newValue);
    }
  }
  enableTabReorderingChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setEnableTabReordering(getBooleanFromAttributeValue(newValue));
    }
  }
  /*TODO: Add change bindings for event handlers */
}
