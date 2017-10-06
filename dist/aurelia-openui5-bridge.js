import {PLATFORM} from 'aurelia-pal';
import {bindable,customElement,noView,customAttribute,inlineView} from 'aurelia-templating';
import {inject} from 'aurelia-dependency-injection';
import {bindingMode} from 'aurelia-binding';
import {Animator,TaskQueue,computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {getLogger} from 'aurelia-logging';

export class ClickCounter {
  count = 0;

  increment() {
    this.count++;
  }
}

/**
* Plugin configuration builder
*/
export class ConfigBuilder {

  useGlobalResources: boolean = true;
  //  useScrollfirePatch: boolean = false;
  globalResources = [];

  useAll(): ConfigBuilder {
    return this
      .usePage()
      .useBar()
      .useContainer()
      .useHtml()
      .useButton()
      .useTiles()
      .useGrid()
      .useText()
      .useWizard()
      .useForm()
      .useLabel()
      .useInput()
      .useDatePicker()
      .useTitle()
      .useLayoutData()
      .useSelect()
      .useTable()
      .useTabs()
      .useLayout()
      .useDynamicPage()
      .useLink()
      .useBreadcrumbs()
      .useSegmentedButton()
      .useDialog()
      .useList()
      .useIcon()
      .useActionSheet()
      .useTableSelectDialog()
      .useSelectDialog()
      .useUploadCollection()
      .useViewSettingsDialog()
      .useSplitContainer()
  }

  useLink(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./link/link'));
    return this;
  }
  usePage(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./page/page'));
    this.globalResources.push(PLATFORM.moduleName('./shell/shell'));
    return this;
  }
  useBar(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./bar/bar'));
    this.globalResources.push(PLATFORM.moduleName('./overflow-toolbar/overflow-toolbar'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar-spacer/toolbar-spacer'));
    this.globalResources.push(PLATFORM.moduleName('./toolbar/toolbar'));

    return this;
  }
  useContainer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./container/container'));
    return this;
  }
  useHtml(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./html/html'));
    return this;
  }
  useButton(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./button/button'));
    return this;
  }
  useGrid(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./grid/grid'));
    return this;
  }
  useWizard(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./wizard/wizard'));
    this.globalResources.push(PLATFORM.moduleName('./wizard-step/wizard-step'));
    return this;
  }
  useText(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./text/text'));
    this.globalResources.push(PLATFORM.moduleName('./formatted-text/formatted-text'));
    return this;
  }

  useTiles(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./generic-tile/generic-tile'));
    this.globalResources.push(PLATFORM.moduleName('./tile-container/tile-container'));
    this.globalResources.push(PLATFORM.moduleName('./tile-content/tile-content'));
    this.globalResources.push(PLATFORM.moduleName('./standard-tile/standard-tile'));
    this.globalResources.push(PLATFORM.moduleName('./image-content/image-content'));
    this.globalResources.push(PLATFORM.moduleName('./numeric-content/numeric-content'));
    this.globalResources.push(PLATFORM.moduleName('./feed-content/feed-content'));
    this.globalResources.push(PLATFORM.moduleName('./slide-tile/slide-tile'));
    return this;
  }
  useForm(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./simple-form/simple-form'));
    this.globalResources.push(PLATFORM.moduleName('./form/form'));
    this.globalResources.push(PLATFORM.moduleName('./form-container/form-container'));
    this.globalResources.push(PLATFORM.moduleName('./form-element/form-element'));
    this.globalResources.push(PLATFORM.moduleName('./responsive-grid-layout/responsive-grid-layout'));
    return this;
  }
  useLabel(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./label/label'));
    return this;
  }
  useInput(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./input/input'));
    this.globalResources.push(PLATFORM.moduleName('./search-field/search-field'));

    return this;
  }
  useDatePicker(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./date-picker/date-picker'));
    return this;
  }
  useTitle(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./title/title'));
    this.globalResources.push(PLATFORM.moduleName('./m-title/m-title'));
    return this;
  }
  useLayoutData(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./grid-data/grid-data'));
    return this;
  }
  useLayout(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./vertical-layout/vertical-layout'));
    return this;
  }
  useSelect(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./select/select'));
    this.globalResources.push(PLATFORM.moduleName('./list-item/list-item'));
    return this;
  }
  useTable(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./table/table'));
    this.globalResources.push(PLATFORM.moduleName('./column/column'));
    this.globalResources.push(PLATFORM.moduleName('./column-list-item/column-list-item'));
    this.globalResources.push(PLATFORM.moduleName('./object-identifier/object-identifier'));
    this.globalResources.push(PLATFORM.moduleName('./object-number/object-number'));
    return this;
  }
  useList(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./list/list'));
    this.globalResources.push(PLATFORM.moduleName('./standard-list-item/standard-list-item'));
    return this;
  }
  useTabs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./tab-container/tab-container'));
    this.globalResources.push(PLATFORM.moduleName('./tab-container-item/tab-container-item'));
    this.globalResources.push(PLATFORM.moduleName('./icon-tab-bar/icon-tab-bar'));
    this.globalResources.push(PLATFORM.moduleName('./icon-tab-filter/icon-tab-filter'));

    return this;
  }
  useDynamicPage(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./dynamic-page/dynamic-page'));
    this.globalResources.push(PLATFORM.moduleName('./dynamic-page-header/dynamic-page-header'));
    this.globalResources.push(PLATFORM.moduleName('./dynamic-page-title/dynamic-page-title'));

    return this;
  }
  useBreadcrumbs(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  }
  useSegmentedButton(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./segmented-button/segmented-button'));
    this.globalResources.push(PLATFORM.moduleName('./segmented-button-item/segmented-button-item'));
    return this;
  }
  useDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./dialog/dialog'));
    this.globalResources.push(PLATFORM.moduleName('./responsive-popover/responsive-popover'));
    
    return this;
  }
  useIcon(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./icon/icon'));
    return this;
  }
  useActionSheet(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./action-sheet/action-sheet'));
    return this;
  }
  useTableSelectDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./table-select-dialog/table-select-dialog'));
    return this;
  }
  useUploadCollection(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./upload-collection/upload-collection'));
    this.globalResources.push(PLATFORM.moduleName('./upload-collection-item/upload-collection-item'));
    this.globalResources.push(PLATFORM.moduleName('./upload-collection-parameter/upload-collection-parameter'));
    return this;
  }
  useViewSettingsDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./view-settings-item/view-settings-item'));
    this.globalResources.push(PLATFORM.moduleName('./view-settings-filter-item/view-settings-filter-item'));
    this.globalResources.push(PLATFORM.moduleName('./view-settings-dialog/view-settings-dialog'));
    return this;
  }
  useSelectDialog(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./select-dialog/select-dialog'));
    return this;
  }
  useSplitContainer(): ConfigBuilder {
    this.globalResources.push(PLATFORM.moduleName('./split-container/split-container'));
    return this;
  }
  /**
  * Don't globalize any resources
  * Allows you to import yourself via <require></require>
  */
  withoutGlobalResources(): ConfigBuilder {
    this.useGlobalResources = false;
    return this;
  }

  /*withScrollfirePatch(): ConfigBuilder {
    this.useScrollfirePatch = true;
    return this;
  }*/
}



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



@customElement('ui5-action-sheet')
@inject(Element)
export class Ui5ActionSheet {
  _sheet = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() placement = 'Bottom';
  @bindable() title = null;
  @bindable() showCancelButton = true;
  @bindable() cancelButtonText = null;
  @bindable() beforeOpen = this.defaultFunc;
  @bindable() afterOpen = this.defaultFunc;
  @bindable() beforeClose = this.defaultFunc;
  @bindable() afterClose = this.defaultFunc;
  @bindable() cancelButtonTap = this.defaultFunc;
  @bindable() cancelButtonPress = this.defaultFunc;


  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._sheet;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'buttons') {
        this._sheet.addButton(child);
        return 'buttons';
      }
     
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'buttons') {
      this._sheet.removeButton(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      title: this.title,
      showCancelButton: getBooleanFromAttributeValue(this.showCancelButton),
      cancelButtonText: this.cancelButtonText,
      placement: this.placement,
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose,
      cancelButtonPress: this.cancelButtonPress,
      cancelButtonTap:this.cancelButtonTap
    };
    if (this.ui5Id)
      this._sheet = new sap.m.ActionSheet(this.ui5Id, props);
    else
      this._sheet = new sap.m.ActionSheet(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }

  placementChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setPlacement(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setTitle(newValue);
    }
  }
  showCancelButtonChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setShowCancelButton(getBooleanFromAttributeValue(newValue));
    }
  }
  cancelButtonTextChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setCancelButtonText(newValue);
    }
  }
  


}

@customElement('ui5-breadcrumbs')
@inject(Element)

export class Ui5BreadCrumbs {
  _crumbs = null;

  @bindable() ui5Id = null;
  @bindable() currentLocationText = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      currentLocationText: this.currentLocationText
    };
    if (this.ui5Id)
      this._crumbs = new sap.m.Breadcrumbs(this.ui5Id, params);
    else
      this._crumbs = new sap.m.Breadcrumbs(params);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._crumbs, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'links')
      { this._crumbs.addLink(child); break; }
    }
  }
  removeChild(child, elem) {
    if (this._crumbs) {
      this._crumbs.removeLink(child);
    }
  }


}

@customAttribute('md-box')
@inject(Element)
export class MdBox {
  @bindable({
    defaultBindingMode: bindingMode.oneTime
  }) caption;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }
    // FIXME:0 throws "Uncaught TypeError: Cannot read property 'css' of undefined", but so does the original
    $(this.element).materialbox();
  }

  detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  }
}

@customElement('ui5-button')
@inject(Element)
export class Ui5Button {
  @bindable() disabled = false;
  @bindable() floating = false;
  @bindable() large = false;
  @bindable() text = '';
  @bindable() press = null;
  @bindable() icon = null;
  @bindable() type = 'Default';
  @bindable() visible = true;
  @bindable() tooltip = null;
  _button = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  attached() {
    this._button = new sap.m.Button({
      text: this.text,
      type: this.type,
      icon: this.icon,
      enabled: !getBooleanFromAttributeValue(this.disabled),
      visible: getBooleanFromAttributeValue(this.visible),
      tooltip: this.tooltip,
      press: this.press != null ? this.press : this.defaultPress
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._button, this.element);
    }
  }
  defaultPress() {

  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._button, this._relation);
    }
  }
  typeChanged(newValue) {
    if (this._button !== null) {
      this._button.setType(newValue);
    }
  }
  disabledChanged(newValue) {
    if (this._button !== null) {
      this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
    }

  }
  iconChanged(newValue) {
    if (this._button !== null) {
      this._button.setIcon(newValue);
    }
  }
  textChanged(newValue) {
    if (this._button !== null) {
      this._button.setText(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._button !== null) {
      this._button.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  tooltipChanged(newValue) {
    if (this._button !== null) {
      this._button.setTooltip(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._button !== null) {
      this._button.attachPress(newValue);
    }
  }
}

@customElement('ui5-column')
@inject(Element)

export class Ui5Column {
  _column = null;
  _parent = null;
  _relation = null;
  @bindable() ui5Id = null;
  @bindable() width;
  @bindable() hAlign = 'Begin';
  @bindable() vAlign = 'Inherit';
  @bindable() styleClass = null;
  @bindable() visible = true;
  @bindable() minScreenWidth = null;
  @bindable() demandPopin = false;
  @bindable() popinHAlign = null;
  @bindable() popinDisplay = null;
  @bindable() mergeDuplicates = false;
  @bindable() mergeFunctionName = 'getText';
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      width: this.width,
      hAlign: this.hAlign,
      vAlign: this.vAlign,
      styleClass: this.styleClass,
      visible: getBooleanFromAttributeValue(this.visible),
      minScreenWidth: this.minScreenWidth,
      demandPopin: getBooleanFromAttributeValue(this.demandPopin),
      popinDisplay: this.popinDisplay,
      popinHAlign: this.popinHAlign,
      mergeDuplicates: getBooleanFromAttributeValue(this.mergeDuplicates),
      mergeFunctionName: this.mergeFunctionName
    };
    if (this.ui5Id)
      this._column = new sap.m.Column(this.ui5Id, params);
    else
      this._column = new sap.m.Column(params);
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._column, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {
    if (this._parent && this._relation) {
      this._parent.removeChildByRelation(this._column, this._relation);
    }
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'header')
      { this._column.setHeader(child); break; }
      if (elem.localName == 'footer')
      { this._column.setFooter(child); break; }
      if (elem.localName == 'content')
      { this._column.addDependent(child); break; }
    }
  }
  widthChanged(newValue) {
    if (this._column !== null) {
      this._column.setWidth(newValue);
    }
  }
  hAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setHAlign(newValue);
    }
  }
  vAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setVAlign(newValue);
    }
  }
  styleClassChanged(newValue) {
    if (this._column !== null) {
      this._column.setStyleClass(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._column !== null) {
      this._column.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  minScreenWidthChanged(newValue) {
    if (this._column !== null) {
      this._column.setMinScreenWidth(newValue);
    }
  }

  demandPopinChanged(newValue) {
    if (this._column !== null) {
      this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));
    }
  }
  popinDisplayChanged(newValue) {
    if (this._column !== null) {
      this._column.setPopinDisplay(newValue);
    }
  }
  popinHAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setPopinHAlign(newValue);
    }
  }
  mergeDuplicatesChanged(newValue) {
    if (this._column !== null) {
      this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));
    }
  }
  mergeFunctionNameChanged(newValue) {
    if (this._column !== null) {
      this._column.setMergeFunctionName(newValue);
    }
  }

}

@customElement('ui5-column-list-item')
@inject(Element)

export class Ui5ColumnListItem {
  _item = null;
  _parent = null;
  _relation = null;



  @bindable() vAlign = 'Inherit';
  @bindable() selected = false;

  constructor(element) {
    this.element = element;
  }
  get UIElement() {
    return this._item;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);

    this._item = new sap.m.ColumnListItem({
      vAlign: this.vAlign,
      selected: getBooleanFromAttributeValue(this.selected)
    });

    this._parent = this.element.closest("[ui5-container]").au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }

  }
  bind(bindingContext, overrideContext){
    console.log("bind called"+bindingContext+overrideContext);
  }
  unbind(){
    console.log('unbind called ');
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'cell')
      { this._item.addCell(child); break; }
    }
  }
  vAlignChanged(newValue) {
    if (this._item !== null) {
      this._item.setVAlign(newValue);
    }
  }
  selectedChanged(newValue) {
  if (this._item !== null) {
  this._item.setSelected(newValue);
  }
  }


}

@customElement('ui5-bar')
@inject(Element)
export class Ui5Bar {
   _bar = null;

  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'content-left')
      this._bar.addContentLeft(child);
    if (path[0].localName == 'content-middle')
      this._bar.addContentMiddle(child);
    if (path[0].localName == 'content-right')
      this._bar.addContentRight(child);
  }
  attached() {

    this._bar = new sap.m.Bar();
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._bar,this.element);

  }
}

@customAttribute('ui5-container')
@inject(Element)
export class Ui5Container {
 
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  attached() {
  
  }

  detached() {
    
  }

}

export class Ui5Control extends Ui5Element {
/*  as bindables are not inheritable (see https://github.com/aurelia/framework/issues/210  we will have to define the following
    properties as bindable on all subclasses*/
    busy = false;
    
    constructor(elem)
    {
        super(elem);
    }
    addChild(child, elem) {
        super.addChild(child, elem);
    }
   
    removeChild(child,elem){
        super.removeChild(child,elem);
    }
    attached() {
        super.attached();
    }
    fillProperties(propertyObject) {
        propertyObject.busy = this.busy;
    }
    busyChanged(newValue) {
        if (this.UIElement != null) {
            this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
        }
    }
    bind(param){
        super.bind(param);
    }
    unbind(){
        super.unbind();
    }
}
/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export class AttributeManager {
  _colorClasses = [
    'accent',
    'primary'
  ];
  addedClasses = [];
  addedAttributes = {};

  constructor(element) {
    this.element = element;
  }

  addAttributes(attrs) {
    let keys = Object.keys(attrs);
    keys.forEach(k => {
      if (!this.element.getAttribute(k)) {
        this.addedAttributes[k] = attrs[k];
        this.element.setAttribute(k, attrs[k]);
      } else if (this.element.getAttribute(k) !== attrs[k]) {
        this.element.setAttribute(k, attrs[k]);
      }
    });
  }

  removeAttributes(attrs) {
    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(a => {
      if (this.element.getAttribute(a) && !!this.addedAttributes[a]) {
        this.element.removeAttribute(a);
        this.addedAttributes[a] = null;
        delete this.addedAttributes[a];
      }
    });
  }

  addClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      let classListHasColor = this._colorClasses.filter(cc => this.element.classList.contains(cc)).length > 0;
      if (this._colorClasses.indexOf(c) > -1 && classListHasColor) {
        //
      } else {
        if (!this.element.classList.contains(c)) {
          this.addedClasses.push(c);
          this.element.classList.add(c);
        }
      }
    });
  }

  removeClasses(classes) {
    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(c => {
      if (this.element.classList.contains(c) && this.addedClasses.indexOf(c) > -1) {
        this.element.classList.remove(c);
        this.addedClasses.splice(this.addedClasses.indexOf(c), 1);
      }
    });
  }
}

export function getBooleanFromAttributeValue(value) {
  return (value === true || value === 'true');
}
export function showBusyIndicator(delay) {
    sap.ui.core.BusyIndicator.show(delay);
}
export function hideBusyIndicator() {
    sap.ui.core.BusyIndicator.hide();
}

export const constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export function fireEvent(element: Element, name: string, data? = {}) {
  let event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

/**
* Fire DOM event on an element with the md-on prefix
* @param element The Element which the DOM event will be fired on
* @param name The Event's name, without md-on prefix
* @param data Addition data to attach to an event
*/
export function fireMaterializeEvent(element: Element, name: string, data? = {}) {
  return fireEvent(element, `${constants.eventPrefix}${name}`, data);
}


/**
* Initialize the plugin and respond with a promise
*/
export function ui5Initialize() {
  new Promise(resolve => sap.ui.getCore().attachInit(() => {
    new sap.m.BusyIndicator().placeAt("indicator");
    resolve();
  }));
}
export function ui5SetTheme(name, path) {
  sap.ui.getCore().applyTheme(name, path);
}
export function findUi5DialogElement(name){
  return document.body.querySelector(`[ui5-dialog-id="${name}"`); 
}
export function getUi5DialogElement(name) {
  try {
    return document.body.querySelector(`[ui5-dialog-id="${name}"`).au.controller.viewModel.UIElement;
  }
  catch (exc) {
    return null;
  }
}

export function showMessageBox(vMessage,mOptions) {
    var oDialog, oMessageText, vMessageContent, oResult = null, that = this, aButtons = [], i,
							sIcon, sTitle, vActions, fnCallback, sDialogId, sClass,
							mDefaults = {
								initialFocus: null,
								textDirection: sap.ui.core.TextDirection.Inherit,
								verticalScrolling: true,
								horizontalScrolling: true,
								details: "",
								contentWidth: null
							};
                    var mIcons = {
							"INFORMATION": "sap-icon://message-information",
							"WARNING": "sap-icon://message-warning",
							"ERROR": "sap-icon://message-error",
							"SUCCESS": "sap-icon://message-success",
							"QUESTION": "sap-icon://question-mark"
						};
                    var mClasses = {
							"INFORMATION": "sapMMessageBoxInfo",
							"WARNING": "sapMMessageBoxWarning",
							"ERROR": "sapMMessageBoxError",
							"SUCCESS": "sapMMessageBoxSuccess",
							"QUESTION": "sapMMessageBoxQuestion",
							"STANDARD":  "sapMMessageBoxStandard"
						};
					if (mOptions && mOptions.hasOwnProperty("details")) {
						mDefaults.icon = "INFORMATION";
						mDefaults.actions = ["OK", "CANCEL"];
						mOptions = jQuery.extend({}, mDefaults, mOptions);
					}

					mOptions = jQuery.extend({}, mDefaults, mOptions);

					// normalize the vActions array
					if (typeof mOptions.actions !== "undefined" && !jQuery.isArray(mOptions.actions)) {
						mOptions.actions = [mOptions.actions];
					}
					if (!mOptions.actions || mOptions.actions.length === 0) {
						mOptions.actions = ["OK"];
					}

					/** creates a button for the given action */
					function button(sAction) {
						var sText;

						

						var oButton = new sap.m.Button({
							id: sap.ui.core.ElementMetadata.uid("mbox-btn-"),
							text: sText || sAction,
							press: function () {
								oResult = sAction;
								oDialog.close();
							}
						});
						return oButton;
					}

					for (i = 0; i < mOptions.actions.length; i++) {
						aButtons.push(button(mOptions.actions[i]));
					}

					function getInformationLayout(mOptions, oMessageText) {
						//Generate MessageBox Layout
						if (typeof mOptions.details == 'object') {
							//covers JSON case
							//Using stringify() with "tab" as space argument and escaping the JSON to prevent binding
							mOptions.details = "<pre>" + JSON.stringify(mOptions.details, null, '\t')
								.replace(/{/gi, "\\{") + "</pre>";
						}

						var oFT = new sap.m.FormattedText({
							htmlText: mOptions.details
						}).setVisible(false);

						var oShowLink = new sap.m.Link({
							text: sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("MSGBOX_LINK_TITLE"),
							press: function () {
								oFT.setVisible(true);
								this.setVisible(false);
								oDialog._setInitialFocus();
							}
						});

						oShowLink.addStyleClass("sapMMessageBoxLinkText");
						oFT.addStyleClass("sapMMessageBoxDetails");

						return new sap.m.VBox({
							items: [
								oMessageText,
								oShowLink,
								oFT
							]
						});
					}

					function onclose() {
						if (typeof mOptions.onClose === "function") {
							mOptions.onClose(oResult);
						}
						oDialog.detachAfterClose(onclose);
						oDialog.destroy();
					}

					function getInitialFocusControl() {
						var i = 0;
						var oInitialFocusControl = null;
						if (mOptions.initialFocus) {
							if (mOptions.initialFocus instanceof sap.ui.core.Control) {//covers sap.m.Control cases
								oInitialFocusControl = mOptions.initialFocus;
							}

							if (typeof mOptions.initialFocus === "string") {//covers string and MessageBox.Action cases
								for (i = 0; i < aButtons.length; i++) {
									{
										if (mOptions.initialFocus.toLowerCase() === aButtons[i].getText().toLowerCase()) {
											oInitialFocusControl = aButtons[i];
											break;
										}
									}
								}
							}
						}

						return oInitialFocusControl;
					}

					if (typeof (vMessage) === "string") {
						vMessageContent = new sap.m.Text({
								textDirection: mOptions.textDirection
							}).setText(vMessage).addStyleClass("sapMMsgBoxText");

						// If we have only text we need to keep a reference to it and add it to the aria-labelledby attribute of the dialog.
						oMessageText = vMessageContent;
					} else if (vMessage instanceof sap.ui.core.Control) {
						vMessageContent = vMessage.addStyleClass("sapMMsgBoxText");
					}

					// If we have additional details, we should wrap the content in a details layout.
					if (mOptions && mOptions.hasOwnProperty("details") && mOptions.details !== "") {
						vMessageContent = getInformationLayout(mOptions, vMessageContent);
					}

					function onOpen () {
						if (sap.ui.getCore().getConfiguration().getAccessibility()) {
							oDialog.$().attr("role", "alertdialog");
						}
					}

					oDialog = new sap.m.Dialog({
						id: mOptions.id,
						type: sap.m.DialogType.Message,
						title: mOptions.title,
						content: vMessageContent,
						icon: mIcons[mOptions.icon],
						initialFocus: getInitialFocusControl(),
						verticalScrolling: mOptions.verticalScrolling,
						horizontalScrolling: mOptions.horizontalScrolling,
						afterOpen: onOpen,
						afterClose: onclose,
						buttons: aButtons,
						ariaLabelledBy: oMessageText ? oMessageText.getId() : undefined,
						contentWidth: mOptions.contentWidth
					});

					if (mClasses[mOptions.icon]) {
						oDialog.addStyleClass(mClasses[mOptions.icon]);
					} else {
						oDialog.addStyleClass(mClasses.STANDARD);
					}

					if (mOptions.styleClass) {
						oDialog.addStyleClass(mOptions.styleClass);
					}

					oDialog.open();
}


// https://github.com/jonathantneal/closest/blob/master/closest.js
export function polyfillElementClosest() {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      let element = this;
      let elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      let index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      let element = this;

      while (element && element.nodeType === 1) {
        if (element.matches(selector)) {
          return element;
        }

        element = element.parentNode;
      }
      return null;
    };
  }
}

export class SmoothScroll {

    static defaultConfig = {
        duration: 400,
        easing: "ease-in"
    };

    static inject = [Animator, Router];
    constructor(animator, router) {
        this.animator = animator;
        this.router = router;
        var config = SmoothScroll.defaultConfig;
        if (config.duration) this.duration = config.duration;
        if (config.easing) this.easing = config.easing;
    }


    //    this.scrollTo(this.element.getAttribute("href"),{},document.body);

    /**
     * Scroll to an element or named anchor
     *
     * @param elementOrHash   element to scroll to or named anchor
     * @param options         animator options
     * @param container       the container element (defaults to document.body)
     *
     * @returns {Promise} resolved when scrolling is done
     */
    scrollTo(elementOrHash, options = {}, container = document.body) {

        var target = elementOrHash;
        var hash = null;
        //find target by id or name
        if (typeof elementOrHash === "string" && elementOrHash.indexOf("#") === 0) {
            hash = elementOrHash.slice(1, elementOrHash.length);
            if (hash) {
                //query main DOM element, get UIElement
                target = container.querySelector(`[data-sap-ui="${hash}"]`);
            } else {
                target = document.body;
            }

            /*if (history) {
                history.pushState(null, null, '#/' + this.router.currentInstruction.fragment + '/' + hash);
            } else {
                //fallback to location.hash
                var t = container.scrollTop;
                location.hash = hash;
                container.scrollTop = t;
            }*/

        }

        if (!target || typeof target === "string") return Promise.resolve();
        return this.animator.animate(target, "scroll",
            Object.assign({
                duration: this.duration,
                offset: SmoothScroll.getOffset(),
                easing: this.easing
            }, options)
        );

    }

    static getOffset() {
        return - document.querySelector(".sapUiBody").offsetTop;
    }

}
@customElement('ui5-dialog')
@inject(Element)
export class Ui5Dialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() icon = null;
  @bindable() title = null;
  @bindable() showHeader = true;
  @bindable() type = 'Standard';
  @bindable() state = 'None';
  @bindable() stretchOnPhone = false;
  @bindable() stretch = false;
  @bindable() contentWidth = null;
  @bindable() contentHeight = null;
  @bindable() horizontalScrolling = true;
  @bindable() verticalScrolling = true;
  @bindable() resizable = false;
  @bindable() draggable = false;
  @bindable() escapeHandler = null;
  @bindable() beforeOpen = this.defaultFunc;
  @bindable() afterOpen = this.defaultFunc;
  @bindable() beforeClose = this.defaultFunc;
  @bindable() afterClose = this.defaultFunc;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'subHeader') {
        this._dialog.setSubHeader(child);
        return 'subHeader';
      }
      if (elem.localName == 'customHeader') {
        this._dialog.setCustomHeader(child);
        return 'customHeader';
      }
      if (elem.localName == 'buttons') {
        this._dialog.addButton(child);
        return 'buttons';
      }
      if (elem.localName == 'content') {
        this._dialog.addContent(child);
        return 'content';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._dialog.removeContent(child);
    }
    else if (relation == 'buttons') {
      this._dialog.removeButton(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      type: this.type,
      state: this.state,
      stretchOnPhone: getBooleanFromAttributeValue(this.stretchOnPhone),
      stretch: getBooleanFromAttributeValue(this.stretch),
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      horizontalScrolling: getBooleanFromAttributeValue(this.horizontalScrolling),
      verticalScrolling: getBooleanFromAttributeValue(this.verticalScrolling),
      resizable: getBooleanFromAttributeValue(this.resizable),
      draggable: getBooleanFromAttributeValue(this.draggable),
      escapeHandler: this.escapeHandler,
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose
    };
    if (this.ui5Id)
      this._dialog = new sap.m.Dialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.Dialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }

  iconChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setIcon(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  showHeaderChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  }
  typeChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setType(newValue);
    }
  }
  stateChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setState(newValue);
    }
  }
  stretchOnPhoneChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setStretchOnPhone(getBooleanFromAttributeValue(newValue));
    }
  }
  stretchChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setStretch(getBooleanFromAttributeValue(newValue));
    }
  }
  contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  }
  contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  }
  horizontalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
    }
  }
  verticalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
    }
  }
  resizableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
    }
  }
  draggableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setDraggable(newValue);
    }
  }
  escapeHandlerChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setEscapeHandler(newValue);
    }
  }


}

@customElement('ui5-date-picker')
@inject(Element)

export class Ui5DatePicker extends Ui5InputBase {
  _picker = null;
  @bindable() ui5Id = null;

  @bindable() includeTime = false;

  @bindable() displayFormat = null;
  @bindable() valueFormat = null;
  @bindable() dateValue = null;
  @bindable() displayFormatType = null;
  @bindable() secondaryCalendarType = 'Gregorian';
  @bindable() minDate = null;
  @bindable() maxDate = null;

  @bindable() specialDates = [];


  /*Inherited from InputBase */
  @bindable() value = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() valueState = 'None';
  @bindable() name = null;
  @bindable() placeholder = null;
  @bindable() editable = true;
  @bindable() valueStateText = null;
  @bindable() showValueStateMessage = true;
  @bindable() textAlign = 'Initial';
  @bindable() textDirection = 'Inherit';
  @bindable() required = false;

  @bindable() change = this.defaultFunc;
  get UIElement() {
    return this._picker;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    super.addChild(child, elem);

  }
  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      displayFormat: this.displayFormat,
      valueFormat: this.valueFormat,
      dateValue: this.dateValue,
      displayFormatType: this.displayFormatType,
      secondaryCalendarType: this.secondaryCalendarType,
      minDate: this.minDate,
      maxDate: this.maxDate,
      specialDates: this.specialDates,
      /*inherited from InputBase*/
      value: this.value,
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      valueState: this.valueState,
      name: this.value,
      placeholder: this.placeholder,
      editable: getBooleanFromAttributeValue(this.editable),
      valueStateText: this.valueStateText,
      showValueStateMessage: getBooleanFromAttributeValue(this.showValueStateMessage),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      required: getBooleanFromAttributeValue(this.required),
      change: this.change
      /*inherited from InputBase*/
    };
    if (this.ui5Id) {
      if (getBooleanFromAttributeValue(this.includeTime))
        this._picker = new sap.m.DateTimePicker(this.ui5Id, params);
      else
        this._picker = new sap.m.DatePicker(this.ui5Id, params);
    }
    else {
      if (getBooleanFromAttributeValue(this.includeTime))
        this._picker = new sap.m.DateTimePicker(params);
      else
        this._picker = new sap.m.DatePicker(params);
    }
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._picker, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    var that = this;
    this._picker.attachChange((event) => {
      that.value = event.mParameters.value;
    });

    this._picker.addEventDelegate(this.element);
    super.attached();
  }
  displayFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormat(newValue);
    }
  }
  valueFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueFormat(newValue);
    }
  }
  dateValueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDateValue(newValue);
    }
  }
  displayFormatTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormatType(newValue);
    }
  }

  secondaryCalendarTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setSecondaryCalendarType(newValue);
    }
  }
  minDateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setMinDate(newValue);
    }
  }

  specialDatesChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._picker !== null) {
      this._picker.setSpecialDates(newValue);
    }
  }

  /*valueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueState(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setName(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setPlaceholder(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateTextChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueStateText(newValue);
    }
  }
  showValueStateMessageChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextDirection(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  changeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.attachChange(newValue);
    }
  }*/
}

@customElement('ui5-dynamic-page')
@inject(Element,TaskQueue)
export class Ui5DynamicPage {
  @bindable() preserveHeaderStateOnScroll = false;
  @bindable() headerExpanded = true;
  @bindable() toggleHeaderOnTitleClick = true;
  @bindable() showFooter = false;
  @bindable() fitContent = true;
  _page = null;
  _parent = null;
  _taskQueue = null;
  constructor(element,queue) {
    this.element = element;
    this._taskQueue = queue;
  }
  defaultFunc() {

  }
  @computedFrom('_page')
  get UIElement() {
    return this._page;
  }

  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'heading') {
        this._page.setHeader(child);

        break;
      }
      if (elem.localName == 'pagetitle') {
        this._page.setTitle(child);
        //reset header expanded flag as the title is required to do so
        var _self = this;
        _self._taskQueue.queueTask(function () {
          _self._page.setHeaderExpanded(getBooleanFromAttributeValue(_self.headerExpanded));
        });
        break;
      }
      if (elem.localName == 'content') {
        this._page.setContent(child);

        break;
      }
      if (elem.localName == 'footer') {
        this._page.setFooter(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'header') {
        //header is removed automatically
        break;
      }

      if (elem.localName == 'content') {
        // content is removed automatically
        break;
      }
      if (elem.localName == 'footer') {
        //footer is removed automatically
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.f.DynamicPage({
      preserveHeaderStateOnScroll: getBooleanFromAttributeValue(this.preserveHeaderStateOnScroll),
      headerExpanded: getBooleanFromAttributeValue(this.headerExpanded),
      toggleHeaderOnTitleClick: getBooleanFromAttributeValue(this.toggleHeaderOnTitleClick),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      fitContent: getBooleanFromAttributeValue(this.fitContent)
    });
    this._page = page;

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._page, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._page.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }

  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._page, this.element);
    }
    else {
      this._page.destroy();
    }
  }


  showFooterChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
    }
  }
  preserveHeaderStateOnScrollChanged(newValue) {
    if (this._page !== null) {
      this._page.setPreserveHeaderStateOnScroll(getBooleanFromAttributeValue(newValue));
    }
  }
  headerExpandedChanged(newValue) {
    if (this._page !== null) {
      this._page.setHeaderExpanded(getBooleanFromAttributeValue(newValue));
    }
  }
  toggleHeaderOnTitleClickChanged(newValue) {
    if (this._page !== null) {
      this._page.setToggleHeaderOnTitleClick(getBooleanFromAttributeValue(newValue));
    }
  }
  fitContentChanged(newValue) {
    if (this._page !== null) {
      this._page.setFitContent(getBooleanFromAttributeValue(newValue));
    }
  }
}

@customElement('ui5-dynamic-page-header')
@inject(Element)
export class Ui5DynamicPageHeader {
    _header = null;
    _parent = null;
    @bindable() pinnable = true;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'content') {
                this._header.addContent(child);
            }
        }
    }
    removeChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'content') {
                this._header.removeContent(child);
            }
        }
    }
    defaultPress() {

    }
    attached() {
        var attributeManager = new AttributeManager(this.element);

        this._header = new sap.f.DynamicPageHeader(
            {
                pinnable: getBooleanFromAttributeValue(this.pinnable),
            }
        );
        if ($(this.element).closest("[ui5-container]").length > 0) {
          this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._parent.addChild(this._header, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
        }
    }
    detached() {
        this._parent.removeChild(this._header, this.element);
    }
    pinnableChanged(newValue) {
        if (this._header !== null) {
            this._header.setPinnable(getBooleanFromAttributeValue(newValue));
        }
    }

}

@customElement('ui5-dynamic-page-title')
@inject(Element)
export class Ui5DynamicPageTitle {
 
  _title = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'heading') {
        this._title.setHeading(child);
        break;
      }
      if (elem.localName == 'actions') {
        this._title.addAction(child);
        break;
      }
      if (elem.localName == 'snapped') {
        this._title.addSnappedContent(child);
        break;
      }
      if (elem.localName == 'expanded') {
        this._title.addExpandedContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'heading') {
      //heading is removed automatically
        break;
      }
      if (elem.localName == 'actions') {
        this._title.removeAction(child);
        break;
      }
      if (elem.localName == 'snapped') {
        this._title.removeSnappedContent(child);
        break;
      }
      if (elem.localName == 'expanded') {
        this._title.removeExpandedContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._title = new sap.f.DynamicPageTitle({
    
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._title, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }  
  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._title, this.element);
    }
    else {
      this._title.destroy();
    }
  }
 
  
  
}

@customElement('ui5-feed-content')
@inject(Element)
export class Ui5FeedContent {
    _content = null;
    @bindable() value = null;
    @bindable() contentText = null;
    @bindable() subheader = null;
    @bindable() valueColor  = null;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this._content = new sap.m.FeedContent({
            value: this.value,
            contentText: this.contentText,
            subheader: this.subheader,
            valueColor: this.valueColor
        });
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    valueChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValue(newValue);
        }
    }
    valueColorChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValueColor(newValue);
        }
    }
    contentTextChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setContentText(newValue);
        }
    }
    subheaderChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setSubheader(newValue);
        }
    }
    
}

@customElement('ui5-file-uploader')
@inject(Element)
export class Ui5FileUploader {
  @bindable() fileType = [];
  @bindable() maximumFilenameLength = null;
  @bindable() maximumFileSize = null;
  @bindable() mimeType = [];
  @bindable() multiple = false;
  @bindable() value = null;
  @bindable() name = null;
  @bindable() sameFilenameAllowed = false;
  @bindable() showSeperators = 'All';
  @bindable() uploadOnChange = true;
  @bindable() uploadUrl = '../../../upload';
  @bindable() enabled = true;
  @bindable() width = null;
  @bindable() valueState = 'None';
  @bindable() buttonOnly = false;
  @bindable() useMultipart = true;
  @bindable() buttonText = null;
  @bindable() sendXHR = false;
  @bindable() placeholder = null;
  @bindable() style = null;
  @bindable() icon = null;
  @bindable() iconHovered = null;
  @bindable() iconSelected = null;
  @bindable() iconFirst = true;
  @bindable() iconOnly = false;

  @bindable() change = this.defaultFunc;
  @bindable() filenameLengthExceeded = this.defaultFunc;
  @bindable() fileSizeExceeded = this.defaultFunc;
  @bindable() fileAllowed = this.defaultFunc;
  @bindable() uploadComplete = this.defaultFunc;
  @bindable() uploadAborted = this.defaultFunc;
  @bindable() uploadStart = this.defaultFunc;
  @bindable() uploadProgress = this.defaultFunc;
  _upload = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'items') {
        this._upload.addItem(child);
        return elem.localName;
      }
      else if (elem.localName == 'toolbar') {
        this._upload.setToolbar(child);
        return elem.localName;
      }
      else if (elem.localName == 'infotoolbar') {
        this._upload.setInfoToolbar(child);
        return elem.localName;
      }
      else if (elem.localName == 'parameter') {
        this._upload.addHeaderParameter(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'items' && this._upload) {
      this._upload.removeItem(child);
    }
    else if (relation === 'toolbar' && this._upload) {
      this._upload.setToolbar(null);
    }
    else if (relation === 'infotoolbar' && this._upload) {
      this._upload.setInfoToolbar(null);
    }
    else if (relation === 'parameter' && this._upload) {
      this._upload.removeHeaderParameter(null);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._upload = new sap.m.UploadCollection({
      fileType: this.fileType,
      maximumFilenameLength: this.maximumFilenameLength,
      maximumFileSize: this.maximumFileSize,
      mimeType: this.mimeType,
      multiple: getBooleanFromAttributeValue(this.multiple),
      value: this.value,
      name: this.name,
      sameFilenameAllowed: getBooleanFromAttributeValue(this.sameFilenameAllowed),
      showSeperators: this.showSeperators,
      uploadOnChange: getBooleanFromAttributeValue(this.uploadOnChange),
      uploadUrl: this.uploadUrl,
      enabled: getBooleanFromAttributeValue(this.enabled),
      width: this.width,
      useMultipart: getBooleanFromAttributeValue(this.useMultipart),
      change: this.change,
      fileDeleted: this.fileDeleted,
      filenameLengthExceeded: this.filenameLengthExceeded,
      fileSizeExceeded: this.fileSizeExceeded,
      fileAllowed: this.fileAllowed,
      uploadComplete: this.uploadComplete,
      uploadAborted: this.uploadAborted,
      uploadStart: this.uploadStart,
      uploadProgress: this.uploadProgress
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller; 
      this._parent.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._upload, this.element);
    }
    else {
      this._upload.destroy();
    }
  }
  fileTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileType(newValue);
    }
  }
  maximumFilenameLengthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMaximumFilenameLength(newValue);
    }
  }
  mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  }
  multipleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMultiple(getBooleanFromAttributeValue(newValue));
    }
  }
  valueChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setvalue(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setname(newValue);
    }
  }
  sameFilenameAllowedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));
    }
  }
  showSeperatorsChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setshowSeperators(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadOnChangeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setuploadOnChange(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadUrl(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._upload !== null) {
      //not supported by OpenUI5 (yet)
      //this._upload.setenabled(getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setwidth(newValue);
    }
  }
  valueStateChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setvalueState(newValue);
    }
  }
  buttonOnlyChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setbuttonOnly(getBooleanFromAttributeValue(newValue));
    }
  }
  useMultipartChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setuseMultipart(getBooleanFromAttributeValue(newValue));
    }
  }

  /*TODO: Add change bindings for event handlers */
}

@customElement('ui5-form')
@inject(Element)
export class Ui5Form {
  @bindable() ui5Id = null;
  @bindable() width = null;
  @bindable() editable = true;
  @bindable() title = null;
  _form = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_form')
  get UIElement() {
    return this._form;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'toolbar') {
        this._form.setToolbar(child);
        return elem.localName;
      }
      if (elem.localName == 'titleElement') {
        this._form.setTitle(child);
        return elem.localName;
      }
      if (elem.localName == 'layout') {
        this._form.setLayout(child);
        return elem.localName;
      }
      if (elem.localName == 'container') {
        this._form.addFormContainer(child);
        return elem.localName;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      editable: getBooleanFromAttributeValue(this.editable),
      width: this.width,
      title: this.title
    };
    if (this.ui5Id)
      this._form = new sap.ui.layout.form.Form(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.Form(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
       this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._form, this.element);
     attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  removeChildByRelation(child,relation){
     if (relation === 'container' && this._form && child) {
      this._form.removeFormContainer(child);
    }
  }
  detached(){
     if (this._parent && this._parent.removeChildByRelation)
      this._parent.removeChildByRelation(this._form, this._relation);
  }
  editableChanged(newValue) {
    if (this._form !== null) {
      this._form.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }

  widthChanged(newValue) {
    if (this._form !== null) {
      this._form.setWidth(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }

}

@customElement('ui5-form-container')
@inject(Element)
export class Ui5FormContainer {
  @bindable() ui5Id = null;
  @bindable() title = null;
  //TODO: expanded, visible, expandable
  _form = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'toolbar') {
        this._form.setToolbar(child);
        return elem.localName;
      }
      if (elem.localName == 'titleElement') {
        this._form.setTitle(child);
        return elem.localName;
      }
      if (elem.localName == 'element') {
        this._form.addFormElement(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'element') {
      this._form.removeFormElement(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      title: this.title,
    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.FormContainer(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.FormContainer(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }


}

@customElement('ui5-form-element')
@inject(Element)
export class Ui5FormElement {
  @bindable() ui5Id = null;
  //TODO: expanded, visible, expandable
  _form = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'label') {
        this._form.setLabel(child);
        return elem.localName;
      }
      if (elem.localName == 'field') {
        this._form.addField(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    try {
      if (relation === 'field' && this._form && child) {
        this._form.removeField(child);
      }
    }
    catch (error) {

    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.FormElement(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.FormElement(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation)
      this._parent.removeChildByRelation(this._form, this._relation);
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }


}

@customElement('ui5-formatted-text')
@inject(Element)

export class Ui5FormattedText extends Ui5Element {
  _text = null;
  @bindable() htmlText = null;
  @bindable() width = null;
  @bindable() height = null;
  @bindable() convertLinksToAnchorTags = 'None';
  @bindable() convertedLinksDefaultTarget = '_blank';
  constructor(element) {
    super(element);
    this.element = element;
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  get UIElement() {
    return this._text;
  }
  attached() {

    this._text = new sap.m.FormattedText({
      htmlText: this.htmlText != null ? this.htmlText : this.element.innerHtml.trim(),
      width: this.width,
      height: this.height,
      convertedLinksDefaultTarget: this.convertedLinksDefaultTarget,
      convertLinksToAnchorTags: this.convertLinksToAnchorTags
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  htmlTextChanged(newValue) {
    if (this._text != null) {
      this._text.setHtmlText(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._text !== null) {
      this._text.setWidth(newValue);
    }
  }
  heightChanged(newValue) {
    if (this._text !== null) {
      this._text.setHeight(newValue);
    }
  }
  convertedLinksDefaultTargetChanged(newValue) {
    if (this._text !== null) {
      this._text.setConvertedLinksDefaultTarget(newValue);
    }
  }
  convertLinksToAnchorTagsChanged(newValue) {
    if (this._text !== null) {
      this._text.setConvertLinksToAnchorTags(newValue);
    }
  }
}

@customElement('ui5-generic-tile')
@inject(Element)
export class Ui5GenericTile {
    _tile = null;
    _parent = null;
    @bindable() mode = "content";
    @bindable() header = null;
    @bindable() subheader = null;
    @bindable() press = null;
    @bindable() frameType = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        if (path[0].localName == 'content')
            this._tile.addTileContent(child);
    }
    removeChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        if (path[0].localName == 'content')
            this._tile.removeTileContent(child);
    }
    defaultPress() {

    }
    attached() {
        this._tile = new sap.m.GenericTile(
            {
                header: this.header,
                subheader: this.subheader,
                press: this.press != null ? this.press : this.defaultPress,
                frameType : this.frameType
            }
        );
        this._tile.addStyleClass('sapUiTinyMarginTop');
        this._tile.addStyleClass('sapUiTinyMarginBegin');
        this._parent =         $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
        this._parent.addChild(this._tile, this.element);
    }
    detached() {
        this._parent.removeChild(this._tile, this.element);
    }
    headerChanged(newValue) {
        if (this._tile != null) {
            this._tile.setHeader(newValue);
        }
    }
    subheaderChanged(newValue) {
        if (this._tile != null) {
            this._tile.setSubheader(newValue);
        }
    }
    pressChanged(newValue) {
        if (this._tile !== null) {
            this._tile.attachPress(newValue);
        }
    }
    frameTypeChanged(newValue) {
        if (this._tile !== null) {
            this._tile.setFrameType(newValue);
        }
    }
}

@customElement('ui5-grid')
@inject(Element)
export class Ui5Grid {
    _grid = null;
    _parent = null;
    @bindable() defaultSpan = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'content') {
                this._grid.addContent(child);
                break;
            }
        }
    }
    removeChildByRelation(child, relation) {
        if (relation == 'content') {
            this._grid.removeContent(child);
        }
    }
    removeChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        if (path[0].localName == 'content')
            this._grid.removeContent(child);
    }
    defaultPress() {

    }
    attached() {
        var attributeManager = new AttributeManager(this.element);

        this._grid = new sap.ui.layout.Grid(
            {
                defaultSpan: this.defaultSpan,
            }
        );
        if ($(this.element).closest("[ui5-container]").length > 0) {
          this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
            this._parent.addChild(this._grid, this.element);
            attributeManager.addAttributes({ "ui5-container": '' });
        }
    }
    detached() {
        this._parent.removeChild(this._grid, this.element);
    }
    defaultSpanChanged(newValue) {
        if (this._grid != null) {
            this._grid.setDefaultSpan(newValue);
        }
    }

}

@customElement('ui5-grid-data')
@inject(Element)

export class Ui5GridData {
  _gridData = null;
  @bindable() id = null;
  @bindable() span = null;
  @bindable() indent = null;
  constructor(element) {
    this.element = element;
  }

  attached() {
    this._gridData = new sap.ui.layout.GridData({
      span: this.span,
      indent: this.indent
    });
    $(this.element).closest("[ui5-layout]")[0].au.controller.viewModel.addChild(this._gridData, this.element);
  }
  indentChanged(newValue) {
    if (this._gridData !== null) {
      this._gridData.setIndent(newValue);
    }
  }
  spanChanged(newValue) {
    if (this._gridData !== null) {
      this._gridData.setSpan(newValue);
    }
  }

}

@customElement('ui5-icon')
@inject(Element)

export class Ui5Icon {
  _icon = null;
  @bindable() ui5Id = null;
  @bindable() src = null;
  @bindable() size = null;
  @bindable() color = null;
  @bindable() hoverColor = null;
  @bindable() activeColor = null;
  @bindable() width = null;
  @bindable() height = null;
  @bindable() backgroundColor = null;
  @bindable() hoverBackgroundColor = null;
  @bindable() activeBackgroundColor = null;
  @bindable() decorative = true;
  @bindable() useIconTooltip = true;
  @bindable() alt = null;
  @bindable() noTabStop = false;
  @bindable() press = this.defaultFunc;
  defaultFunc(){
    
  }
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_icon')
  get UIElement() {
    return this._icon;
  }
  attached() {
    var props = {
      src: this.src,
      size: this.size,
      color: this.color,
      hoverColor: this.hoverColor,
      activeColor: this.activeColor,
      width: this.width,
      height: this.height,
      backgroundColor: this.backgroundColor,
      activeBackgroundColor: this.activeBackgroundColor,
      decorative: getBooleanFromAttributeValue(this.decorative),
      useIconTooltip: getBooleanFromAttributeValue(this.useIconTooltip),
      alt: this.alt,
      noTabStop: getBooleanFromAttributeValue(this.noTabStop),
      press: this.press
    };
    if (this.ui5Id)
      this._icon = new sap.ui.core.Icon(this.ui5Id, props);
    else
      this._icon = new sap.ui.core.Icon(props);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._icon, this.element);
  }
  srcChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setSrc(newValue);
    }
  }
  sizeChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setSize(newValue);
    }
  }
  colorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setColor(newValue);
    }
  }
  hoverColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHoverColor(newValue);
    }
  }
  activeColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setActiveColor(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setWidth(newValue);
    }
  }
  heightChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHeight(newValue);
    }
  }
  backgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setBackgroundColor(newValue);
    }
  }
  hoverBackgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHoverBackgroundColor(newValue);
    }
  }
  activeBackgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setActiveBackgroundColor(newValue);
    }
  }
  decorativeChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setDecorative(getBooleanFromAttributeValue(newValue));
    }
  }
  useIconTooltipChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setUseIconTooltip(getBooleanFromAttributeValue(newValue));
    }
  }
  altChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setAlt(newValue);
    }
  }
  noTabStopChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setNoTabStop(getBooleanFromAttributeValue(newValue));
    }
  }

}

@customElement('ui5-icon-tab-bar')
@inject(Element)
export class Ui5IconTabBar {
  _tab = null;
  _parent = null;
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
  @bindable() select = this.defaultFunc;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addItem(child);
        return elem.localName;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.removeItem(child);
        break;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._tab.removeItem(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.IconTabBar({
      showSelection: getBooleanFromAttributeValue(this.showSelection),
      expandable: getBooleanFromAttributeValue(this.expandable),
      expanded: getBooleanFromAttributeValue(this.expanded),
      selectedKey: this.selectedKey,
      upperCase: getBooleanFromAttributeValue(this.upperCase),
      stretchContentHeight: getBooleanFromAttributeValue(this.stretchContentHeight),
      applyContentPadding: getBooleanFromAttributeValue(this.applyContentPadding),
      backgroundDesign: this.backgroundDesign,
      headerMode: this.headerMode,
      showOverflowSelectList: getBooleanFromAttributeValue(this.showOverflowSelectList),
      headerBackgroundDesign: this.headerBackgroundDesign,
      enableTabReordering: getBooleanFromAttributeValue(this.enableTabReordering),
      select: this.select
    });
    var that = this;
    this._tab.attachSelect((event) => {
      that.selectedKey = event.mParameters.selectedItem.mProperties.text;
    });
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._tab, this.element);
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
      if (this._tab.getSelectedKey() != newValue)
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

export class Ui5Element {
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        for (elem of path) {
            if (elem.localName == 'layout') {
                this.UIElement.setLayoutData(child);
                return elem.localName;
            }
        }

    }
    removeChildByRelation(child, relation) {

    }
    _customData = null;
    getCustomData(key) {
        if (this._customData) {
            return this._customData.getValue();
        }
        else
            return null;
    }
    addCustomData(key, value) {
        if (this.UIElement) {
            if (this._customData)
                this.UIElement.removeCustomData(this._customData);

            this._customData = new sap.ui.core.CustomData({
                key: key,
                value: value,
                writeToDom: false
            });
            this.UIElement.addCustomData(_customData);
        }
        else{
            //cache custom data and apply later
            this._customData = new sap.ui.core.CustomData({
                key: key,
                value: value,
                writeToDom: false
            });
        }
    }
    removeCustomData() {
        if (this._customData)
            this.UIElement.removeCustomData(this._customData);
        this._customData = null;
    }
    removeChild(child, elem) {
    }
    attached() {

    }
    detached() {
        this.removeCustomData();
    }
    bind(param){
        if(param && param.object)
            this.addCustomData('_model',param.object);
    }
    unbind(){

    }
}

@customElement('ui5-icon-tab-filter')
@inject(Element)
export class Ui5IconTabFilter {
  _tab = null;
  _parent = null;
  _relation = null;
  @bindable() text = null;
  @bindable() tabKey = null;
  @bindable() design = 'Vertical';
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.IconTabFilter({
      text: this.text,
      key: this.tabKey,
      design: this.design
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent) {
      this._parent.removeChildByRelation(this._tab, this._relation);
    }
    else {
      this._tab.destroy();
    }
  }
  tabKeyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setKey(newValue);
    }
  }
  textChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setText(newValue);
    }
  }
  designChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setDesign(newValue);
    }
  }
  /*TODO: Add change bindings for event handlers */
}

@customElement('ui5-html')
@inject(Element)

export class Ui5Html {
   _html = null;

  constructor(element) {
    this.element = element;
  }

  attached() {

    this._html = new sap.ui.core.HTML(); 
    this._html.setContent(this.content.innerHTML);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._html,this.element);  
  }
}

@customElement('ui5-image-content')
@inject(Element)
export class Ui5ImageContent {
    _content = null;
    @bindable() src = null;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this._content = new sap.m.ImageContent({
            src: this.src,
        });
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    srcChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setSrc(newValue);
        }
    }
    
}

@customElement('ui5-input-base')
@inject(Element)

export class Ui5InputBase extends Ui5Control {
  _picker = null;

  @bindable() value = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() valueState = 'None';
  @bindable() name = null;
  @bindable() placeholder = null;
  @bindable() editable = true;
  @bindable() valueStateText = null;
  @bindable() showValueStateMessage = true;
  @bindable() textAlign = 'Initial';
  @bindable() textDirection = 'Inherit';
  @bindable() required = false;

  @bindable() change = this.defaultFunc;

  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    super.attached();
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  removeChild(child, elem) {
    super.removeChild(child, elem);
  }
  valueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueState(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setName(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setPlaceholder(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateTextChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueStateText(newValue);
    }
  }
  showValueStateMessageChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextDirection(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  changeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.attachChange(newValue);
    }
  }
}

@customElement('ui5-item')
@inject(Element)

export class Ui5Item{
  _item = null;

  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text =null;
  @bindable() textDirection = null;
  
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
  }
  addChild(child, elem) {
  }
  fillProperties(propertyObject) {
        propertyObject.text = this.text;
        propertyObject.key = this.key;
        propertyObject.textDirection = this.textDirection;
        propertyObject.enabled = this.enabled;
    }
  keyChanged(newValue) {
    if (this._item !== null) {
      this._item.setKey(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._item !== null) {
      this._item.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  textChanged(newValue) {
    if (this._item !== null) {
      this._item.setText(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTextDirection(newValue);
    }
  }
  
}

@customElement('ui5-label')
@inject(Element)

export class Ui5Label {
  _label = null;
  _parent = null;
  _relation = null;
  @bindable() ui5Id = null;
  @bindable() labelFor = null;
  @bindable() text = null;
  @bindable() required = false;
  @bindable() textAlign = "Begin";
  @bindable() textDirection = null;
  @bindable() tooltip = null;
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._label = new sap.m.Label({
      text: this.text,
      labelFor: this.labelFor,
      required: getBooleanFromAttributeValue(this.required),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      tooltip: this.tooltip
    });
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._label, this.element);
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._label, this._relation);
    }
  }
  textChanged(newValue) {
    if (this._label !== null) {
      this._label.setText(newValue);
    }
  }
  labelForChanged(newValue) {
    if (this._label !== null) {
      this._label.setLabelFor(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._label !== null) {
      this._label.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._label !== null) {
      this._label.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._label !== null) {
      this._label.setTextDirection(newValue);
    }
  }
  tooltipChanged(newValue) {
    if (this._label !== null) {
      this._label.setTooltip(newValue);
    }
  }
}

@customElement('ui5-link')
@inject(Element)
export class Ui5Link {
  @bindable() enabled = true;
  @bindable() subtle = false;
  @bindable() emphasized = false;
  @bindable() text = '';
  @bindable() press = this.defaultPress;
  @bindable() target = null;
  @bindable() href = null;
  _link = null;
  _parent = null;
  constructor(element) {
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  attached() {
    this._link = new sap.m.Link({
      text: this.text,
      target: this.target,
      href: this.href,
      subtle: getBooleanFromAttributeValue(this.subtle),
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      enabled: getBooleanFromAttributeValue(this.enabled),
      press: this.press != null ? this.press : this.defaultPress
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this.parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this.parent.addChild(this._link, this.element);
    }
  }
  defaultPress() {

  }
  detached() {
    if (this.parent && this.parent.removeChild) {
      this.parent.removeChild(this._link, this.elememt);
    }
  }
  hrefChanged(newValue) {
    if (this._link !== null) {
      this._link.setHref(newValue);
    }
  }
  typeChanged(newValue) {
    if (this._link !== null) {
      this._link.setType(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._link !== null) {
      this._link.setEnabled(getBooleanFromAttributeValue(newValue));
    }

  }
  targetChanged(newValue) {
    if (this._link !== null) {
      this._link.setTarget(newValue);
    }
  }
  textChanged(newValue) {
    if (this._link !== null) {
      this._link.setText(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._link !== null) {
      if (newValue == null)
        newValue = this.defaultPress;
      this._link.attachPress(newValue);
    }
  }
}

@customElement('ui5-list')
@inject(Element)
export class Ui5List extends Ui5ListBase {
  @bindable() backgroundDesign = 'Solid';
  /*inherited from list-base*/
  @bindable() inset = false;
  @bindable() headerText = null;
  @bindable() headerDesign = 'Standard';
  @bindable() footerText = null;
  @bindable() mode = 'None';
  @bindable() width = '100%';
  @bindable() includeItemInSelection = false;
  @bindable() showUnread = false;
  @bindable() noDataText = null;
  @bindable() showNoData = true;
  @bindable() enableBusyIndicator = true;
  @bindable() modeAnimationOn = true;
  @bindable() showSeparator = 'All';
  @bindable() swipeDirection = 'Both';
  @bindable() growing = false;
  @bindable() growingThreshold = 20;
  @bindable() growingTriggerText = null;
  @bindable() growingScrollToLoad = false;
  @bindable() growingDirection = 'Downwards';
  @bindable() rememberSelections = true;
  @bindable() keyboardMode = 'Navigation';

  @bindable() delete = this.defaultFunc;
  @bindable() itemPress = this.defaultFunc;
  @bindable() selectionChange = this.defaultFunc;
  @bindable() swipe = this.defaultFunc;
  @bindable() updateFinished = this.defaultFunc;
  @bindable() updateStarted = this.defaultFunc;
  /*inherited from Ui5Control */
  @bindable() busy = false;

  _list = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    super(element);
    this.element = element;
  }
  get UIElement() {
    return this._list;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {

      if (elem.localName == 'item')
      { this._list.addItem(child); return elem.localName; }

    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._list.removeItem(child);
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item')
      { this._list.removeItem(child); break; }
    }

  }
  resetLimit() {
    this._list._oGrowingDelegate.reset();
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      backgroundDesign: this.backgroundDesign,
    };
    super.fillProperties(props);
    var list = new sap.m.List(props);
    this._list = list;
    this._list._oGrowingDelegate.updateItems = function (sChangeReason) {
      this._onBeforePageLoaded(sChangeReason);
      this._onAfterPageLoaded(sChangeReason);
    };
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._list, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._list.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._list, this._relation);
    }
    else {
      this._list.destroy();
    }
  }

  backgroundDesignChanged(newValue) {
    if (this._list !== null) {
      this._list.setBackgroundDesign(newValue);
    }
  }
  selectionChangeChanged(newValue) {
    if (this._list !== null) {
      this._list.attachSelectionChange(newValue);
    }
  }

}

@inject(Element)
export class Ui5ListBase extends Ui5Control {

  @bindable() inset = true;
  @bindable() headerText = null;
  @bindable() headerDesign = 'Standard';
  @bindable() footerText = null;
  @bindable() mode = 'None';
  @bindable() width = '100%';
  @bindable() includeItemInSelection = false;
  @bindable() showUnread = false;
  @bindable() noDataText = null;
  @bindable() showNoData = true;
  @bindable() enableBusyIndicator = true;
  @bindable() modeAnimationOn = true;
  @bindable() showSeparator = 'All';
  @bindable() swipeDirection = 'Both';
  @bindable() growing = false;
  @bindable() growingThreshold = 20;
  @bindable() growingTriggerText = null;
  @bindable() growingScrollToLoad = false;
  @bindable() growingDirection  = 'Downwards';
  @bindable() rememberSelections = true;
  @bindable() keyboardMode = 'Navigation';

  @bindable() delete = this.defaultFunc;
  @bindable() itemPress = this.defaultFunc;
  @bindable() selectionChange = this.defaultFunc;
  @bindable() swipe = this.defaultFunc;
  @bindable() updateFinished = this.defaultFunc;
  @bindable() updateStarted = this.defaultFunc;

  defaultFunc(){

  }
  constructor(elem) {
    super(elem);
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  removeChild(child, elem) {
    super.removeChild(child, elem);
  }
  removeChildByRelation(child,relation){
    super.removeChildByRelation(child,relation);
  }
  attached() {
    super.attached();
  }
  fillProperties(propertyObject) {
    propertyObject.inset = getBooleanFromAttributeValue(this.inset),
    propertyObject.headerText = this.headerText,
    propertyObject.headerDesign = this.headerDesign,
    propertyObject.footerText = this.footerText,
    propertyObject.mode = this.mode,
    propertyObject.width = this.width,
    propertyObject.includeItemInSelection = getBooleanFromAttributeValue(this.includeItemInSelection),
    propertyObject.showUnread = getBooleanFromAttributeValue(this.showUnread),
    propertyObject.noDataText = this.noDataText
    propertyObject.showNoData = getBooleanFromAttributeValue(this.showNoData),
    propertyObject.enableBusyIndicator = getBooleanFromAttributeValue(this.enableBusyIndicator),
    propertyObject.modeAnimationOn = getBooleanFromAttributeValue(this.modeAnimationOn),
    propertyObject.showSeparator = this.showSeparator,
    propertyObject.swipeDirection = this.swipeDirection,
    propertyObject.growing = getBooleanFromAttributeValue(this.growing),
    propertyObject.growingThreshold = +this.growingThreshold,
    propertyObject.growingTriggerText = this.growingTriggerText,
    propertyObject.growingScrollToLoad = getBooleanFromAttributeValue(this.growingScrollToLoad),
    propertyObject.growingDirection = this.growingDirection,
    propertyObject.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections),
    propertyObject.keyboardMode = this.keyboardMode,
    propertyObject.delete = this.delete,
    propertyObject.itemPress = this.itemPress,
    propertyObject.selectionChange = this.selectionChange,
    propertyObject.swipe = this.swipe,
    propertyObject.updateFinished = this.updateFinished,
    propertyObject.updateStarted = this.updateStarted
  }
  busyChanged(newValue) {
    if (this.UIElement != null) {
      this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
    }
  }

}

@customElement('ui5-list-item')
@inject(Element)

export class Ui5ListItem {
  _item = null;
  _container = null;

  @bindable() icon = null;
  @bindable() additionalText = null;
  /* inherited from list item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;
  /* inherited from list item*/

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    this._item = new sap.ui.core.ListItem({
      text: this.text,
      icon: this.icon,
      enabled: getBooleanFromAttributeValue(this.enabled),
      additionalText: this.additionalText,
      textDirection: this.textDirection,
      key: this.key
    });
    this._container = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  }
  detached() {
    if(this._container && this._container.removeChildByRelation)
      this._container.removeChildByRelation(this._item, this._relation);
  }
  addChild(child, elem) {
  }
  iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  }
  additionalTextChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdditionalText(newValue);
    }
  }
  keyChanged(newValue) {
    if (this._item !== null) {
      this._item.setKey(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._item !== null) {
      this._item.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  textChanged(newValue) {
    if (this._item !== null) {
      this._item.setText(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTextDirection(newValue);
    }
  }

}

@customElement('ui5-m-title')
@inject(Element)

export class Ui5MTitle {
  _title = null;
  @bindable() ui5Id = null;
  @bindable() text = null;
  @bindable() level = 'Auto';
  @bindable() titleStyle = 'Auto';
  constructor(element) {
    this.element = element;
  }

  attached() {
    var props = {
      text: this.text,
      level: this.level,
      titleStyle: this.titleStyle
    };
    if (this.ui5Id)
      this._title = new sap.m.Title(this.ui5Id, props);
    else
      this._title = new sap.m.Title(props);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  }

  textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  }
  levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  }
  titleStyleChanged(newValue) {
    if (this._title !== null) {
      this._title.setTitleStyle(newValue);
    }
  }
}

@inject(Element)
export class Ui5ListItemBase extends Ui5Control {

  @bindable() visible = true;
  @bindable() type = 'Inactive';
  @bindable() unread = false;
  @bindable() selected = false;
  @bindable() counter = null;
  @bindable() highlight = 'None';

  @bindable() tap = this.defaultFunc;
  @bindable() detailTap = this.defaultFunc;
  @bindable() press = this.defaultFunc;
  @bindable() detailPress = this.defaultFunc;

  /*inherited from control*/

  defaultFunc() {

  }
  constructor(elem) {
    super(elem);
  }
  addChild(child, elem) {
    super.addChild(child, elem);
  }
  removeChild(child, elem) {
    super.removeChild(child, elem);
  }
  removeChildByRelation(child, relation) {
    super.removeChildByRelation(child, relation);
  }
  attached() {
    super.attached();
  }
  fillProperties(propertyObject) {
    super.fillProperties(propertyObject);
    propertyObject.visible = getBooleanFromAttributeValue(this.visible);
    propertyObject.type = this.type;
    propertyObject.unread = getBooleanFromAttributeValue(this.unread);
    propertyObject.selected = getBooleanFromAttributeValue(this.selected);
    propertyObject.counter = this.counter;
    propertyObject.highlight = this.highlight;
    propertyObject.tap = this.tap;
    propertyObject.detailTap = this.detailTap;
    propertyObject.press = this.press;
    propertyObject.detailPress = this.detailPress;
  }
  busyChanged(newValue) {
    if (this.UIElement != null) {
      this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
    }
  }
  bind(param) {
    super.bind(param);
  }
  unbind() {
    super.unbind();
  }

}

@customElement('ui5-numeric-content')
@inject(Element)
export class Ui5NumericContent {
    _content = null;
    @bindable() icon = null;
    @bindable() value = null;
    @bindable() indicator = null;
    @bindable() scale = null;
    @bindable() valueColor = null;
    constructor(element) {
        this.element = element;
    }
    attached() {
        this._content = new sap.m.NumericContent({
            icon: this.icon,
            value: this.value,
            indicator: this.indicator,
            scale : this.scale,
            valueColor : this.valueColor
        });
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).closest("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    iconChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setIcon(newValue);
        }
    }
    valueChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValue(newValue);
        }
    }
    indicatorChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setIndicator(newValue);
        }
    }
    scaleChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setScale(newValue);
        }
    }
    valueColorChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setValueColor(newValue);
        }
    }
    
}

@customElement('ui5-message-strip')
@inject(Element)

export class Ui5MessageStrip {
  _text = null;
  @bindable ui5Id = null;
  @bindable text = null;
  @bindable wrapping = true;
  @bindable textAlign = "Begin";
  @bindable maxLines = null;
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._text = new sap.m.Text({
      text: this.text,
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  }
}

@customElement('ui5-object-number')
@inject(Element)

export class Ui5ObjectNumber {
  _number = null;
  @bindable ui5Id = null;
  @bindable() number = null;
  @bindable() numberUnit = null;
  @bindable() emphasized = null;
  @bindable() state = null;
  @bindable() unit = null;
  @bindable() textDirection = 'Inherit';
  @bindable() textAlign = 'Begin';

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {

    this._number = new sap.m.ObjectNumber({
      number: this.number != null ? this.number : this.element.innerText.trim(),
      numberUnit : this.numberUnit,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      state: this.state,
      unit:this.unit,
      textDirection: this.textDirection,
      textAlign: this.textAlign
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._number, this.element);
  }
  numberChanged(newValue) {
    if (this._number != null) {
      this._number.setNumber(newValue);
    }
  }
  numberUnitChanged(newValue) {
    if (this._number !== null) {
      this._number.setNumberUnit(newValue);
    }
  }
  emphasizedChanged(newValue) {
    if (this._number !== null) {
      this._number.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  }
  stateChanged(newValue) {
    if (this._number !== null) {
      this._number.setState(newValue);
    }
  }
  unitChanged(newValue) {
    if (this._number !== null) {
      this._number.setUnit(newValue);
    }
  }
  textAlignChanged(newValue) {
    if (this._number !== null) {
      this._number.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._number !== null) {
      this._number.setTextDirection(newValue);
    }
  }
}

@customElement('ui5-object-identifier')
@inject(Element)

export class Ui5ObjectIdentifier {
  _text = null;
  @bindable ui5Id = null;
  @bindable text = null;
  @bindable() title = null;
  @bindable() visible = true;
  @bindable() titleActive = false;
  @bindable() textDirection = 'Inherit';
  @bindable() titlePress = this.defaultFunc;

  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {

    this._text = new sap.m.ObjectIdentifier({
      text: this.text != null ? this.text : this.element.innerText.trim(),
      title : this.title,
      visible: getBooleanFromAttributeValue(this.visible),
      titleActive: getBooleanFromAttributeValue(this.titleActive),
      textDirection: this.textDirection,
      titlePress: this.titlePress
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  }
  textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._text !== null) {
      this._text.setTitle(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._text !== null) {
      this._text.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  titleActiveChanged(newValue) {
    if (this._text !== null) {
      this._text.setTitleActive(getBooleanFromAttributeValue(newValue));
    }
  }
  textDirectionChanged(newValue) {
    if (this._text !== null) {
      this._text.setTextDirection(newValue);
    }
  }
}

@customElement('ui5-overflow-toolbar')
@inject(Element)
export class Ui5OverflowToolbar {
  _bar = null;
  _parent = null;
  @bindable() width = null;
  @bindable() active = false;
  @bindable() enabled = true;
  @bindable() height = null;
  @bindable() design = null;
  @bindable() press = this.defaultFunc;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._bar.addContent(child);
        return elem.localName;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._bar.removeContent(child);
        break;
      }
    }
  }
  removeChildByRelation(child,relation){
    if (relation === 'content' && this._bar && child) {
     this._bar.removeContent(child);
   }
 }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._bar = new sap.m.OverflowToolbar({
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      active: getBooleanFromAttributeValue(this.active),
      height: this.height,
      design: this.design,
      press: this.press
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._bar, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._bar.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._bar, this.element);
    }
    else {
      this._bar.destroy();
    }
  }
  widthChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  activeChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setActive(getBooleanFromAttributeValue(newValue));
    }
  }
  heightChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setHeight(newValue);
    }
  }
  designChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setDesign(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setPress(newValue);
    }
  }
}

@customElement('ui5-page')
@inject(Element)
export class Ui5Page {
  @bindable() title = '';
  @bindable() busy = false;
  @bindable() busyIndicatorDelay = 1000;
  @bindable() showHeader = true;
  @bindable() showFooter = true;
  @bindable() showNavButton = false;
  @bindable() navButtonPress = this.defaultFunc;
  _page = null;
  _relation = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'header') {
        this._page.addHeaderContent(child);
        return elem.localName;
      }
      if (elem.localName == 'subheader') {
        this._page.setSubHeader(child);
        return elem.localName;
      }
      if (elem.localName == 'content') {
        this._page.addContent(child);
        return elem.localName;
      }
      if (elem.localName == 'footer') {
        this._page.setFooter(child);
        return elem.localName;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'header') {
        this._page.removeHeaderContent(child);
        break;
      }
      if (elem.localName == 'subheader') {
        //subheader is removed automatically
        break;
      }
      if (elem.localName == 'content') {
        this._page.removeContent(child);
        break;
      }
      if (elem.localName == 'footer') {
        //footer is removed automatically
        break;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'header') {
      this._page.removeHeaderContent(child);
    }
    else if (relation == 'content') {
      this._page.removeContent(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.m.Page({
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      showNavButton: getBooleanFromAttributeValue(this.showNavButton),
      navButtonPress: this.navButtonPress,
      busy: getBooleanFromAttributeValue(this.busy),
      busyIndicatorDelay: this.busyIndicatorDelay
    });
    this._page = page;

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._page, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._page.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      if (this._parent && this._parent.removeChildByRelation)
        this._parent.removeChildByRelation(this._relation);
      else
        $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
    }
    else {
      this._page.destroy();
    }
  }
  titleChanged(newValue) {
    if (this._page !== null) {
      this._page.setTitle(newValue);
    }
  }
  showHeaderChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  }
  showFooterChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
    }
  }
  showNavButtonChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowNavButton(getBooleanFromAttributeValue(newValue));
    }
  }
  busyChanged(newValue) {
    if (this._page !== null) {
      this._page.setBusy(getBooleanFromAttributeValue(newValue));
    }
  }
  busyIndicatorDelayChanged(newValue) {
    if (this._page !== null) {
      this._page.setBusyIndicatorDelay(newValue);
    }
  }
}

@customElement('ui5-responsive-popover')
@inject(Element)
export class Ui5ResponsivePopover {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() placement = 'Right';
  @bindable() icon = null;
  @bindable() title = null;
  @bindable() offsetX = null;
  @bindable() offsetY = null;
  @bindable() showArrow = true;
  @bindable() showHeader = true;
  @bindable() contentWidth = null;
  @bindable() contentHeight = null;
  @bindable() horizontalScrolling = true;
  @bindable() verticalScrolling = true;
  @bindable() showCloseButton = true;
  @bindable() resizable = false;
  @bindable() beforeOpen = this.defaultFunc;
  @bindable() afterOpen = this.defaultFunc;
  @bindable() beforeClose = this.defaultFunc;
  @bindable() afterClose = this.defaultFunc;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'subHeader') {
        this._dialog.setSubHeader(child);
        return 'subHeader';
      }
      if (elem.localName == 'customHeader') {
        this._dialog.setCustomHeader(child);
        return 'customHeader';
      }
      if (elem.localName == 'leftbutton') {
        this._dialog.setBeginButton(child);
        return 'leftButton';
      }
      if (elem.localName == 'rightbutton') {
        this._dialog.setEndButton(child);
        return 'rightButton';
      }
      if (elem.localName == 'content') {
        this._dialog.addContent(child);
        return 'content';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._dialog.removeContent(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      placement: this.placement,
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      showArrow : getBooleanFromAttributeValue(this.showArrow),
      showCloseButton: getBooleanFromAttributeValue(this.showCloseButton),
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      horizontalScrolling: getBooleanFromAttributeValue(this.horizontalScrolling),
      verticalScrolling: getBooleanFromAttributeValue(this.verticalScrolling),
      resizable: getBooleanFromAttributeValue(this.resizable),
      beforeOpen: this.beforeOpen,
      afterOpen: this.afterOpen,
      beforeClose: this.beforeClose,
      afterClose: this.afterClose
    };
    if (this.ui5Id)
      this._dialog = new sap.m.ResponsivePopover(this.ui5Id, props);
    else
      this._dialog = new sap.m.ResponsivePopover(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }
  placementChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setPlacement(newValue);
  }
  }
  offsetXChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setOffsetX(newValue);
  }
  }
  offsetYChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setOffsetY(newValue);
  }
  }
  showArrayChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setShowArray(getBooleanFromAttributeValue(newValue));
  }
  }
  showCloseButtonChanged(newValue) {
  if (this._dialog !== null) {
  this._dialog.setShowCloseButton(getBooleanFromAttributeValue(newValue));
  }
  }
  iconChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setIcon(newValue);
    }
  }
  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  showHeaderChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  }
  contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  }
  contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  }
  horizontalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
    }
  }
  verticalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
    }
  }
  resizableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
    }
  }


}

@customElement('ui5-search-field')
@inject(Element)

export class Ui5SearchField extends Ui5Control {
  _field = null;

  @bindable() value = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() visible = true;
  @bindable() maxLength = 0;
  @bindable() placeholder = null;
  @bindable() showMagnifier = true;
  @bindable() showRefreshButton = false;
  @bindable() refreshButtonTooltip = null;
  @bindable() showSearchButton = true;
  @bindable() enableSuggestions = false;
  @bindable() selectOnFocus = true;

  @bindable() liveChange = this.defaultFunc;
  @bindable() suggest = this.defaultFunc;
  @bindable() search = this.defaultFunc;

  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    super.addChild(child, elem);
    for (elem of path) {
      if (elem.localName == 'suggestion-item') {
        this._field.addSuggestionItem(child);
        break;
      }
    }
  }
  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      maxLength: this.maxLength,
      enableSuggestions: getBooleanFromAttributeValue(this.enableSuggestions),
      liveChange: this.liveChange,
      suggest: this.suggest,
      search: this.search,
      value: this.value,
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      placeholder: this.placeholder,
      showMagnifier: getBooleanFromAttributeValue(this.showMagnifier),
      showRefreshButton: getBooleanFromAttributeValue(this.showRefreshButton),
      refreshButtonTooltip: this.refreshButtonTooltip,
      showSearchButton: getBooleanFromAttributeValue(this.showSearchButton),
      selectOnFocus: getBooleanFromAttributeValue(this.selectOnFocus)
    };
    if (this.ui5Id)
      this._field = new sap.m.SearchField(this.ui5Id, params);
    else
      this._field = new sap.m.SearchField(params);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._field, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._field.attachLiveChange((event) => {
        that.value = event.mParameters.newValue;
    });
    this._field.addEventDelegate(this.element);
    super.attached();
  }
  valueChanged(newValue) {
    if (this._field !== null) {
      this._field.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._field !== null) {
      this._field.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._field !== null) {
      this._field.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  visibleChanged(newValue) {
    if (this._field !== null) {
      this._field.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  maxLengthChanged(newValue) {
    if (this._field !== null) {
      this._field.setMaxLength(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._field !== null) {
      this._field.setPlaceholder(newValue);
    }
  }
  showMagnifierChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowMagnifier(getBooleanFromAttributeValue(newValue));
    }
  }
  showRefreshButtonChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowRefreshButton(getBooleanFromAttributeValue(newValue));
    }
  }
  refreshButtonTooltipChanged(newValue) {
    if (this._field !== null) {
      this._field.setRefreshButtonTooltip(newValue);
    }
  }
  showSearchButtonChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowSearchButton(getBooleanFromAttributeValue(newValue));
    }
  }
  enableSuggestionsChanged(newValue) {
    if (this._field !== null) {
      this._field.setEnableSuggestions(getBooleanFromAttributeValue(newValue));
    }
  }
  selectOnFocusChanged(newValue) {
    if (this._field !== null) {
      this._field.setSelectOnFocus(getBooleanFromAttributeValue(newValue));
    }
  }
 /*Todo change event handlers*/
}

@customElement('ui5-segmented-button')
@inject(Element)
export class Ui5SegmentedButton {
  @bindable() enabled = false;
  @bindable() width = null;
  @bindable() selectedKey = null;
  @bindable() select = this.defaultFunc;
  _button = null;
  defaultFunc() {

  }
  constructor(element) {
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }
  get UIElement() {
    return this._button;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item') {
        if (this._button.getItems().length == 0) // set key when first item is added
          this.selectedKey = child.mProperties.key;
        this._button.addItem(child);

        break;
      }
    }
  }

  attached() {
    this._button = new sap.m.SegmentedButton({
      enabled: !getBooleanFromAttributeValue(this.enabled),
      width: this.width,
      selectedKey: this.selectedKey,
      select: this.select
    });
    var that = this;
    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
      this.attributeManager.addAttributes({ "ui5-container": '' });
    }
    this._button.attachSelect((event) => {
      that.selectedKey = event.mParameters.key;
    });

  }
  detached() {

  }
  enableChanged(newValue) {
    if (this._button !== null) {
      this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    if (this._button !== null) {
      this._button.setWidth(newValue);
    }
  }
  selectedKeyChanged(newValue) {
    if (this._button !== null) {
      this._button.setSelectedKey(newValue);
    }
  }

}

@customElement('ui5-responsive-grid-layout')
@inject(Element)
export class Ui5ResponsiveGridLayout {
  @bindable() ui5Id = null;

  @bindable() labelSpanXL = -1;
  @bindable() labelSpanL = 4;
  @bindable() labelSpanM = 2;
  @bindable() labelSpanS = 12;
  @bindable() adjustLabelSpan = true;
  @bindable() emptySpanXL = -1;
  @bindable() emptySpanL = 0;
  @bindable() emptySpanM = 0;
  @bindable() emptySpanS = 0;
  @bindable() singleContainerFullSize = false;
  @bindable() breakpointXL = 1440;
  @bindable() breakpointL = 1024;
  @bindable() breakpointM = 600;

  _form = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
   
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
     
      labelSpanXL: parseInt(this.labelSpanXL),
      labelSpanL: parseInt(this.labelSpanL),
      labelSpanM: parseInt(this.labelSpanM),
      labelSpanS: parseInt(this.labelSpanS),
      adjustLabelSpan: getBooleanFromAttributeValue(this.adjustLabelSpan),
      emptySpanXL: parseInt(this.emptySpanXL),
      emptySpanL: parseInt(this.emptySpanL),
      emptySpanM: parseInt(this.emptySpanM),
      emptySpanS: parseInt(this.emptySpanS),
      singleContainerFullSize: getBooleanFromAttributeValue(this.singleContainerFullSize),
      breakpointXL: parseInt(this.breakpointXL),
      breakpointL: parseInt(this.breakpointL),
      breakpointM: parseInt(this.breakpointM),

    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.ResponsiveGridLayout(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
 

}

@customElement('ui5-segmented-button-item')
@inject(Element)
export class Ui5SegmentedButtonItem extends Ui5Item {
  _item = null;

  @bindable() icon = null;
  @bindable() visible = true;
  @bindable() width = null;
  @bindable() press = this.defaultFunc;

  /*from Ui5Item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;


  constructor(element) {
    super(element);
    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  defaultFunc() {

  }
  attached() {
    var props = {
      width: this.width,
      icon: this.icon,
      visible: getBooleanFromAttributeValue(this.visible),
      press: this.press != null ? this.press : this.defaultPress
    };
    super.fillProperties(props);
    this._item = new sap.m.SegmentedButtonItem(props);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
    }
  }

  addChild(child, elem) {
  }
  removeChild(child, elem) {
  }
  iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  }
  visibleChanged(newValue) {
    if (this._item !== null) {
      this._item.setVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    this._item.setWidth(newValue);
  }

}

@customElement('ui5-select')
@inject(Element)

export class Ui5Select {
  _select = null;
  @bindable() ui5Id = null;

  @bindable() name = null;
  @bindable() width = null;
  @bindable() maxWidth = null;
  @bindable() enabled = true;
  @bindable() selectedKey = null;
  @bindable() selectedItemId = null;
  @bindable() icon = null;
  @bindable() type = null;
  @bindable() autoAdjustWidth = false;
  @bindable() valueState = null;
  @bindable() valueStateText = null;
  @bindable() showSecondaryValues = false;
  @bindable() forceSelection = true;

  @bindable() items = [];

  @bindable() selectedItem = null;

  @bindable() change = this.defaultFunc;
  get UIElement() {
    return this._select;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item') {
        //if (this._select.getItems().length) // set key when first item is added
        //  this.selectedKey = child.mProperties.key;
        this._select.addItem(child);
        //reset selected key
        var oldVal = this.selectedKey;
        this.selectedKey = null;
        this.selectedKey = oldVal;
        return elem.localName;
      }
      break;
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'item') {
      this._select.removeItem(child);
      var oldVal = this.selectedKey;
      this.selectedKey = null;
      this.selectedKey = oldVal;
    }
  }
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      name: this.name,
      width: this.width,
      maxWidth: this.maxWidth,
      enabled: getBooleanFromAttributeValue(this.enabled),
      selectedKey: this.selectedKey,
      selectedItemId: this.selectedItemId,
      icon: this.icon,
      type: this.type,
      autoAdjustWidth: getBooleanFromAttributeValue(this.autoAdjustWidth),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      valueState: this.valueState,
      valueStateText: this.valueStateText,
      showSecondaryValues: getBooleanFromAttributeValue(this.showSecondaryValues),
      forceSelection: getBooleanFromAttributeValue(this.forceSelection),
      items: this.items,
      selectedItem: this.selectedItem,
      change: this.change
    };
    if (this.ui5Id)
      this._select = new sap.m.Select(this.ui5Id, params);
    else
      this._select = new sap.m.Select(params);
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._select, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._select.attachChange((event) => {
      that.selectedItem = event.mParameters.selectedItem;
      if (event.mParameters.selectedItem)
        that.selectedKey = event.mParameters.selectedItem.mProperties.key;
      else
        that.selectedKey = null;
    });

    this._select.addEventDelegate(this.element);
  }
  nameChanged(newValue) {
    if (this._select !== null) {
      this._select.setName(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._select !== null) {
      this._select.setEnableChanged(getBooleanFromAttributeValue(newValue));
    }
  }
  widthChanged(newValue) {
    if (this._select !== null) {
      this._select.setWidth(newValue);
    }
  }
  maxWidthChanged(newValue) {
    if (this._select !== null) {
      this._select.setMaxWidth(newValue);
    }
  }

  selectedKeyChanged(newValue) {
    if (this._select !== null) {
      this._select.setSelectedKey(newValue);
    }
  }
  selectedItemIdChanged(newValue) {
    if (this._select !== null) {
      this._select.setSelectedItemId(newValue);
    }
  }

  iconChanged(newValue) {
    if (this._select !== null) {
      this._select.setIcon(newValue);
    }
  }

  typeChanged(newValue) {
    if (this._select !== null) {
      this._select.setType(newValue);
    }
  }
  autoAdjustWidthChanged(newValue) {
    if (this._select !== null) {
      this._select.setAutoAdjustWidth(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._select !== null) {
      this._select.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._select !== null) {
      this._select.setTextDirection(newValue);
    }
  }
  valueStateChanged(newValue) {
    if (this._select !== null) {
      this._select.setValueState(newValue);
    }
  }
  valueStateTextChanged(newValue) {
    if (this._select !== null) {
      this._select.setValueStateText(newValue);
    }
  }

  showSecondaryValuesChanged(newValue) {
    if (this._select !== null) {
      this._select.setShowSecondaryValues(getBooleanFromAttributeValue(newValue));
    }
  }

  forceSelectionChanged(newValue) {
    if (this._select !== null) {
      this._select.setForceSelection(getBooleanFromAttributeValue(newValue));
    }
  }
}

@customElement('ui5-select-dialog')
@inject(Element)
export class Ui5SelectDialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() title = null;
  @bindable() contentHeight = null;
  @bindable() noDataText = null;
  @bindable() multiSelect = false;
  @bindable() growingThreshold = null;
  @bindable() contentWidth = null;
  @bindable() rememberSelections = false;
  @bindable() confirm = this.defaultFunc;
  @bindable() search = this.defaultFunc;
  @bindable() liveChange = this.defaultFunc;
  @bindable() cancel = this.defaultFunc;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'items')
      { this._dialog.addItem(child); return elem.localName; }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'items') {
      try {
        this._dialog.removeItem(child);
      }
      catch (exc) { }
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      multiSelect: getBooleanFromAttributeValue(this.multiSelect),
      noDataText: this.noDataText,
      growingThreshold: this.growingThreshold,
      rememberSelections: getBooleanFromAttributeValue(this.rememberSelections),
      confirm: this.confirm,
      search: this.search,
      liveChange: this.liveChange,
      cancel: this.cancel
    };
    if (this.ui5Id)
      this._dialog = new sap.m.SelectDialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.SelectDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }

  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  }
  contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  }
  noDataTextChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setNoDataText(newValue);
    }
  }
  multiSelectChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  }
  growingThresholdChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGrowingThreshold(newValue);
    }
  }
  rememberSelectionsChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setRememberSelections(getBooleanFromAttributeValue(newValue));
    }
  }

}

@customElement('ui5-shell')
@inject(Element)
export class Ui5Shell {
  @bindable() title = '';
  @bindable() appWidthLimited = true;
  _shell = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._shell.setApp(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var shell = new sap.m.Shell({
      title: this.title,
      appWidthLimited: getBooleanFromAttributeValue(this.appWidthLimited),

    });
    this._shell = shell;

    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._shell, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._shell.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.removeChild(this._shell, this.element);
    }
    else {
      this._shell.destroy();
    }
  }
  titleChanged(newValue) {
    if (this._shell !== null) {
      this._shell.setTitle(newValue);
    }
  }
  appWidthLimitedChanged(newValue) {
    if (this._shell !== null) {
      this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));
    }
  }

}

@customElement('ui5-simple-form')
@inject(Element)
export class Ui5SimpleForm {
  @bindable() ui5Id = null;
  @bindable() title = '';
  @bindable() maxContainerCols = 2;
  @bindable() minWidth = -1;
  @bindable() width = null;
  @bindable() editable = true;
  @bindable() labelMinWidth = 192;
  @bindable() layout = 'ResponsiveLayout';
  @bindable() backgroundDesign = 'Translucent';
  @bindable() labelSpanXL = -1;
  @bindable() labelSpanL = 4;
  @bindable() labelSpanM = 2;
  @bindable() labelSpanS = 12;
  @bindable() adjustLabelSpan = true;
  @bindable() emptySpanXL = -1;
  @bindable() emptySpanL = 0;
  @bindable() emptySpanM = 0;
  @bindable() emptySpanS = 0;
  @bindable() singleContainerFullSize = false;
  @bindable() breakpointXL = 1440;
  @bindable() breakpointL = 1024;
  @bindable() breakpointM = 600;

  _form = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'toolbar')
        this._form.setToolbar(child);
      if (elem.localName == 'content')
        this._form.addContent(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      title: this.title,
      editable: getBooleanFromAttributeValue(this.editable),
      maxContainerCols: parseInt(this.maxContainerCols),
      minWidth: parseInt(this.minWidth),
      width: this.width,
      labelMinWidth: parseInt(this.labelMinWidth),
      layout: this.layout,
      backgroundDesign: this.backgroundDesign,
      labelSpanXL: parseInt(this.labelSpanXL),
      labelSpanL: parseInt(this.labelSpanL),
      labelSpanM: parseInt(this.labelSpanM),
      labelSpanS: parseInt(this.labelSpanS),
      adjustLabelSpan: getBooleanFromAttributeValue(this.adjustLabelSpan),
      emptySpanXL: parseInt(this.emptySpanXL),
      emptySpanL: parseInt(this.emptySpanL),
      emptySpanM: parseInt(this.emptySpanM),
      emptySpanS: parseInt(this.emptySpanS),
      singleContainerFullSize: getBooleanFromAttributeValue(this.singleContainerFullSize),
      breakpointXL: parseInt(this.breakpointXL),
      breakpointL: parseInt(this.breakpointL),
      breakpointM: parseInt(this.breakpointM),

    };
    if (this.uiId5)
      this._form = new sap.ui.layout.form.SimpleForm(this.ui5Id, params);
    else
      this._form = new sap.ui.layout.form.SimpleForm(params);

    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  }
  titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  }
  maxContainerColsChanged(newValue) {
    if (this._form !== null) {
      this._form.setMaxContainerCols(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._form !== null) {
      this._form.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  minWidthChanged(newValue) {
    if (this._form !== null) {
      this._form.setMinWidth(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._form !== null) {
      this._form.setWidth(newValue);
    }
  }
  labelMinWidthChanged(newValue) {
    if (this._form !== null) {
      this._form.setLabelMinWidth(newValue);
    }
  }
  layoutChanged(newValue) {
    if (this._form !== null) {
      this._form.setLayout(newValue);
    }
  }
  backgroundDesignChanged(newValue) {
    if (this._form !== null) {
      this._form.setBackgroundDesign(newValue);
    }
  }

}

@customElement('ui5-slide-tile')
@inject(Element)
export class Ui5SlideTile {
  _container = null;
  _parent = null;
  @bindable() displayTime = 5000;
  @bindable() transitionTime = 500;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'tile')
      this._container.addTile(child);
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'tile')
      this._container.removeTile(child);
  }
  attached() {
    this._container = new sap.m.SlideTile({
      displayTime: this.displayTime,
      transitionTime: this.transitionTime
    });
    this._container.addStyleClass('sapUiTinyMarginTop');
    this._container.addStyleClass('sapUiTinyMarginBegin');
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._parent.addChild(this._container, this.element);
  }
  detached() {
    this._parent.removeChild(this._container, this.element);
  }
  displayTimeChanged(newValue) {
    if (this._container != null) {
      this._container.setDisplayTime(newValue);
    }
  }
  transitionTimeChanged(newValue) {
    if (this._container != null) {
      this._container.setTransitionTime(newValue);
    }
  }
}

@customElement('md-slider')
@inject(Element)
@inlineView(`
  <template class="slider">
  <require from="./slider.css"></require>
  <ul class="slides">
    <slot></slot>
  </ul>
  </template>
`)
export class MdSlider {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdFillContainer = false;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdHeight = 400;
  @bindable() mdIndicators = true;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdInterval = 6000;
  @bindable({ defaultBindingMode: bindingMode.oneTime }) mdTransition = 500;

  constructor(element) {
    this.element = element;
    this.log = getLogger('md-slider');
  }

  attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  }

  pause() {
    $(this.element).slider('pause');
  }

  start() {
    $(this.element).slider('start');
  }

  next() {
    $(this.element).slider('next');
  }

  prev() {
    $(this.element).slider('prev');
  }

  refresh() {
    let options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  }

  mdIndicatorsChanged() {
    this.refresh();
  }

  // commented since that leads to strange effects
  // mdIntervalChanged() {
  //   this.refresh();
  // }
  //
  // mdTransitionChanged() {
  //   this.refresh();
  // }
}

@customElement('ui5-split-container')
@inject(Element)
export class Ui5SplitContainer {
  @bindable() defaultTransitionNameDetail = '';
  @bindable() defaultTransitionNameMaster = '';
  @bindable() mode = 'ShowHideMode';
  @bindable() masterButtonText = null;
  @bindable() backgroundColor = null;
  @bindable() backgroundImage = null;
  @bindable() backgroundRepeat = true;
  @bindable() backgroundOpacity = 1.0;
  @bindable() masterNavigate = this.defaultFunc;
  @bindable() afterMasterNavigate = this.defaultFunc;
  @bindable() masterButton = this.defaultFunc;
  @bindable() beforeMasterOpen = this.defaultFunc;
  @bindable() afterMasterOpen = this.defaultFunc;
  @bindable() beforeMasterClose = this.defaultFunc;
  @bindable() afterMasterClose = this.defaultFunc;
  @bindable() detailNavigate = this.defaultFunc;
  @bindable() afterDetailNavigate = this.defaultFunc;
  _container = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'master') {
        this._container.addMasterPage(child);
        return elem.localName;
      }
      if (elem.localName == 'detail') {
        this._container.addDetailPage(child);
        return elem.localName;
      }

    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'master' && this._container && child) {
      this._container.removeMasterPage(child);
    }
    else if (relation === 'detail' && this._container && child) {
      this._container.removeDetailPage(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var container = new sap.m.SplitContainer({
      defaultTransitionNameDetail: this.defaultTransitionNameDetail,
      defaultTransitionNameMaster: this.defaultTransitionNameMaster,
      mode: this.mode,
      masterButton: this.masterButton,
      backgroundImage: this.backgroundImage,
      backgroundRepeat: getBooleanFromAttributeValue(this.backgroundRepeat),
      backgroundOpacity: this.backgroundOpacity,
      masterNavigate: this.masterNavigate,
      afterMasterNavigate: this.afterMasterNavigate,
      masterButton: this.masterButton,
      beforeMasterOpen: this.beforeMasterOpen,
      afterMasterOpen: this.afterMasterOpen,
      beforeMasterClose: this.beforeMasterClose,
      afterMasterClose: this.afterMasterClose,
      detailNavigate: this.detailNavigate,
      afterDetailNavigate: this.afterDetailNavigate
    });
    this._container = container;

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._container, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._container.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent.removeChild(this._container, this.element);
    }
    else {
      this._container.destroy();
    }
  }
  defaultTransitionNameDetailChanged(newValue) {
    if (this._container !== null) {
      this._container.setDefaultTransitionNameDetail(newValue);
    }
  }
  defaultTransitionNameMasterChanged(newValue) {
    if (this._container !== null) {
      this._container.setDefaultTransitionNameMaster(newValue);
    }
  }
  modeChanged(newValue) {
    if (this._container !== null) {
      this._container.setMode(newValue);
    }
  }
  masterButtonTextChanged(newValue) {
    if (this._container !== null) {
      this._container.setMasterButtonText(newValue);
    }
  }
  backgroundColorChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundColor(newValue);
    }
  }
  backgroundImageChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundImage(newValue);
    }
  }
  backgroundOpacityChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundOpacity(newValue);
    }
  }
  backgroundRepeatChanged(newValue) {
    if (this._container !== null) {
      this._container.setBackgroundRepeat(getBooleanFromAttributeValue(newValue));
    }
  }

}

@customElement('ui5-standard-tile')
@inject(Element)
export class Ui5StandardTile extends Ui5Control {
    _tile = null;
    _parent = null;
    @bindable() type = null;
    @bindable() title = null;
    @bindable() number = null;
    @bindable() info = null;
    @bindable() infoState = null;
    @bindable() numberUnit = null;
    @bindable() icon = null;
    @bindable() press = null;

    /* from Control*/
    @bindable() busy = false;

    get UIElement() {
        return this._tile;
    }
    constructor(element) {
        super(element);
        this.element = element;
    }
    defaultPress() {

    }
    attached() {
        var props = {
            type: this.type,
            title: this.title,
            number: this.number,
            info: this.info,
            infoState: this.infoState,
            numberUnit: this.numberUnit,
            icon: this.icon,
            press: this.press != null ? this.press : this.defaultPress
        };
        super.fillProperties(props);
        this._tile = new sap.m.StandardTile(props);
        this._parent = $(this.element).closest("ui5-tile-container")[0].au.controller.viewModel;
        this._parent.addChild(this._tile, this.element);
    }
    detached() {
        this._parent.removeChild(this._tile, this.element);
    }
    typeChanged(newValue) {
        if (this._tile != null) {
            this._tile.setType(newValue);
        }
    }
    titleChanged(newValue) {
        if (this._tile != null) {
            this._tile.setTitle(newValue);
        }
    }
    numberChanged(newValue) {
        if (this._tile != null) {
            this._tile.setNumber(newValue);
        }
    }
    numberUnitChanged(newValue) {
        if (this._tile != null) {
            this._tile.setNumberUnit(newValue);
        }
    }
    infoChanged(newValue) {
        if (this._tile != null) {
            this._tile.setInfo(newValue);
        }
    }
    infoStateChanged(newValue) {
        if (this._tile != null) {
            this._tile.setInfoState(newValue);
        }
    }
    iconChanged(newValue) {
        if (this._tile != null) {
            this._tile.setIcon(newValue);
        }
    }
    pressChanged(newValue) {
        if (this._tile !== null) {
            this._tile.attachPress(newValue);
        }
    }
    busyChanged(newValue) {
        if (this._tile !== null) {
            this._tile.setBusy(getBooleanFromAttributeValue(newValue));
        }
    }
}

@customElement('ui5-standard-list-item')
@inject(Element)

export class Ui5StandardListItem extends Ui5ListItemBase {
  _item = null;
  _parent = null;
  _relation = null;
  @bindable() title = null;
  @bindable() icon = null;
  @bindable() description = null;
  @bindable() iconInset = true;
  @bindable() iconDensityAware = true;
  @bindable() activeIcon = null;
  @bindable() info = null;
  @bindable() infoState = 'None';
  @bindable() adaptTitleSize = true;
  @bindable() titleTextDirection = 'Inherit';
  @bindable() infoTextDirection = 'Inherit';
  /*inherited from list-item-base*/
  @bindable() visible = true;
  @bindable() type = 'Inactive';
  @bindable() unread = false;
  @bindable() selected = false;
  @bindable() counter = null;
  @bindable() highlight = 'None';

  @bindable() tap = this.defaultFunc;
  @bindable() detailTap = this.defaultFunc;
  @bindable() press = this.defaultFunc;
  @bindable() detailPress = this.defaultFunc;

  @computedFrom('_item')
  get UIElement() {
    return this._item;
  }
  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      title: this.title,
      icon: this.icon,
      description: this.description,
      iconInset: getBooleanFromAttributeValue(this.iconInset),
      iconDensityAware: getBooleanFromAttributeValue(this.iconDensityAware),
      activeIcon: this.activeIcon,
      info: this.info,
      infoState: this.infoState,
      adaptTitleSize: getBooleanFromAttributeValue(this.adaptTitleSize),
      titleTextDirection: this.titleTextDirection,
      infoTextDirection: this.infoTextDirection
    }
    super.fillProperties(props);
    this._item = new sap.m.StandardListItem(props);

    if (this._customData)
      this._item.addCustomData(this._customData);

    
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }

  }
  titleChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitle(newValue);
    }
  }
  iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  }
  descriptionChanged(newValue) {
    if (this._item !== null) {
      this._item.setDescription(newValue);
    }
  }
  iconInsetChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconInset(getBooleanFromAttributeValue(newValue));
    }
  }
  iconDensityAwareChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconDensityAware(getBooleanFromAttributeValue(newValue));
    }
  }
  activeIconChanged(newValue) {
    if (this._item !== null) {
      this._item.setActiveIcon(newValue);
    }
  }
  infoChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfo(newValue);
    }
  }
  infoStateChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoState(newValue);
    }
  }
  adaptTitleSizeChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));
    }
  }
  titleTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitleTextDirection(newValue);
    }
  }
  infoTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoTextDirection(newValue);
    }
  }


}

@customElement('ui5-tab-container')
@inject(Element)
export class Ui5TabContainer {
  @bindable() showAddNewButton = true;
  @bindable() selectedItem = null;
  @bindable() itemClose = this.defaultFunc;
  @bindable() itemSelect = this.defaultFunc;
  @bindable() addNewButtonPress = this.defaultFunc;
  _tab = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addItem(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'content' && this._tab && child) {
      // due to a bug in openui5-removal-code I can't remove the tabs
      this._tab.removeItem(child);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.TabContainer({
      showAddNewButton: getBooleanFromAttributeValue(this.showAddNewButton),
      itemClose: this.itemClose,
      itemSelect: this.itemSelect,
      addNewButtonPress: this.addNewButtonPress
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent.removeChild(this._tab, this.element);
    }
    else {
      this._tab.destroy();
    }
  }
  showAddNewButtonChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowAddNewButton(getBooleanFromAttributeValue(newValue));
    }
  }
  /*TODO: Add change bindings for event handlers */
}

@customElement('md-switch')
@inject(Element)
export class MdSwitch {
  @bindable({
    defaultBindingMode: bindingMode.twoWay
  }) mdChecked;
  @bindable() mdDisabled;
  @bindable() mdLabelOff = 'Off';
  @bindable() mdLabelOn = 'On';

  constructor(element) {
    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.addEventListener('change', this.handleChange);
  }

  detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  }

  handleChange() {
    this.mdChecked = this.checkbox.checked;
    fireEvent(this.element, 'blur');
  }

  blur() {
    fireEvent(this.element, 'blur');
  }

  mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  }

  mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  }
}

@customElement('ui5-table')
@inject(Element)
export class Ui5Table extends Ui5ListBase {

  @bindable() showOverlay = false;
  @bindable() fixedLayout = true;

  /*inherited from list-base*/
  @bindable() inset = true;
  @bindable() headerText = null;
  @bindable() headerDesign = 'Standard';
  @bindable() footerText = null;
  @bindable() mode = 'None';
  @bindable() width = '100%';
  @bindable() includeItemInSelection = false;
  @bindable() showUnread = false;
  @bindable() noDataText = null;
  @bindable() showNoData = true;
  @bindable() enableBusyIndicator = true;
  @bindable() modeAnimationOn = true;
  @bindable() showSeparator = 'All';
  @bindable() swipeDirection = 'Both';
  @bindable() growing = false;
  @bindable() growingThreshold = 20;
  @bindable() growingTriggerText = null;
  @bindable() growingScrollToLoad = false;
  @bindable() growingDirection = 'Downwards';
  @bindable() rememberSelections = true;
  @bindable() keyboardMode = 'Navigation';

  @bindable() delete = this.defaultFunc;
  @bindable() itemPress = this.defaultFunc;
  @bindable() selectionChange = this.defaultFunc;
  @bindable() swipe = this.defaultFunc;
  @bindable() updateFinished = this.defaultFunc;
  @bindable() updateStarted = this.defaultFunc;
  /*inherited from Ui5Control */
  @bindable() busy = false;

  _table = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    super(element);
    this.element = element;
  }
  get UIElement() {
    return this._table;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'header-toolbar')
      { this._table.setHeaderToolbar(child); return elem.localName; }
      if (elem.localName == 'info-toolbar')
      { this._table.setInfoToolbar(child); return elem.localName; }
      if (elem.localName == 'item')
      { this._table.addItem(child); return elem.localName; }
      if (elem.localName == 'column')
      { this._table.addColumn(child); return elem.localName; }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._table.removeItem(child);
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item')
      { this._table.removeItem(child); break; }
    }
  }
  resetLimit() {
    this._table._oGrowingDelegate.reset();
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      showOverlay: getBooleanFromAttributeValue(this.showOverlay),
      fixedLayout: getBooleanFromAttributeValue(this.fixedLayout)
    };
    super.fillProperties(props);
    var table = new sap.m.Table(props);
    this._table = table;
    if (this._table._oGrowingDelegate) {
      this._table._oGrowingDelegate.updateItems = function (sChangeReason) {
        this._onBeforePageLoaded(sChangeReason);
        this._onAfterPageLoaded(sChangeReason);
      };
    }
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._table, this._relation);
    }
    else {
      this._table.destroy();
    }
  }
  fixedLayoutChanged(newValue) {
    if (this._table !== null) {
      this._table.setFixedLayout(getBooleanFromAttributeValue(newValue));
    }
  }
  headerTextChanged(newValue) {
    if (this._table !== null) {
      this._table.setHeaderText(newValue);
    }
  }
  showOverlayChanged(newValue) {
    if (this._table !== null) {
      this._table.setShowOverlay(newValue);
    }
  }
}

@customElement('ui5-table-select-dialog')
@inject(Element)
export class Ui5TableSelectDialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() title = null;
  @bindable() contentHeight = null;
  @bindable() noDataText = null;
  @bindable() multiSelect = false;
  @bindable() growingThreshold = null;
  @bindable() contentWidth = null;
  @bindable() rememberSelections = false;
  @bindable() confirm = this.defaultFunc;
  @bindable() search = this.defaultFunc;
  @bindable() liveChange = this.defaultFunc;
  @bindable() cancel = this.defaultFunc;
  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'item')
      { this._dialog.addItem(child); return elem.localName; }
      if (elem.localName == 'column')
      { this._dialog.addColumn(child); return elem.localName; }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'item') {
      try {
        this._dialog.removeItem(child);
      }
      catch (exc) { }
    }
    else if (relation == 'column') {
      try {
        this._dialog.removeColumn(child);
      }
      catch (exc) { }
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      contentWidth: this.contentWidth,
      contentHeight: this.contentHeight,
      multiSelect: getBooleanFromAttributeValue(this.multiSelect),
      noDataText: this.noDataText,
      growingThreshold: this.growingThreshold,
      rememberSelections: getBooleanFromAttributeValue(this.rememberSelections),
      confirm: this.confirm,
      search: this.search,
      liveChange: this.liveChange,
      cancel: this.cancel
    };
    if (this.ui5Id)
      this._dialog = new sap.m.TableSelectDialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.TableSelectDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }

  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  }
  contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  }
  noDataTextChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setNoDataText(newValue);
    }
  }
  multiSelectChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  }
  growingThresholdChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGrowingThreshold(newValue);
    }
  }
  rememberSelectionsChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setRememberSelections(getBooleanFromAttributeValue(newValue));
    }
  }

}

@customElement('ui5-text')
@inject(Element)

export class Ui5Text {
  _text = null;
  _parent = null;
  _relation = null;
  @bindable ui5Id = null;
  @bindable text = null;
  @bindable wrapping = true;
  @bindable textAlign = "Begin";
  @bindable maxLines = null;
  constructor(element) {
    this.element = element;
  }
  @computedFrom('_text')
  get UIElement() {
    return this._text;
  }
  attached() {
    var props = {
      text: this.text != null ? this.text : this.element.innerText.trim(),
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    };
    if(this.ui5Id)
      this._text = new sap.m.Text(this.ui5Id,props);
    else
      this._text = new sap.m.Text(props);
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._text, this.element);
    
  }
  detached(){
    if(this._parent && this._parent.removeChildByRelation){
      this._parent.removeChildByRelation(this._text,this._relation);
    }
  }
  textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  }
}

@customElement('ui5-tab-container-item')
@inject(Element)
export class Ui5TabContainerItem {
  @bindable() name = null;
  @bindable() key = null;
  @bindable() modified = false;
  @bindable() itemPropertyChanged = this.defaultFunc;
  _tab = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  @computedFrom('_tab')
  get UIElement() {
    return this._tab;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.TabContainerItem({
      name: this.name,
      key: this.key,
      modified: getBooleanFromAttributeValue(this.modified),
      itemPropertyChanged: this.itemPropertyChanged,
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
      this._parent.removeChildByRelation(this._tab, this._relation);
  }
  keyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setKey(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setName(newValue);
    }
  }
  modifiedChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setModified(getBooleanFromAttributeValue(newValue));
    }
  }
  /*TODO: Add change bindings for event handlers */
}

@customElement('ui5-tile-content')
@inject(Element)
export class Ui5TileContent {
    _content = null;
    @bindable() footer = null;
    @bindable() unit = null;
    constructor(element) {
        this.element = element;
    }
    addChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        if (path[0].localName == 'content')
            this._content.setContent(child);
    }
    removeChild(child, elem) {
        var path = jQuery.makeArray($(elem).parentsUntil(this.element));
        if (path[0].localName == 'content')
            this._content.destroyContent(child);
    }
    attached() {
        this._content = new sap.m.TileContent({
            footer: this.footer,
            unit: this.unit
        });
        $(this.element).closest("ui5-generic-tile")[0].au.controller.viewModel.addChild(this._content, this.element);
    }
    detached() {
        $(this.element).closest("ui5-generic-tile")[0].au.controller.viewModel.removeChild(this._content, this.element);
    }
    footerChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setFooter(newValue);
        }
    }
    unitChanged(newValue)
    {
        if(this._content!=null)
        {
            this._content.setUnit(newValue);
        }
    }
}

@customElement('ui5-title')
@inject(Element)

export class Ui5Title {
  _title = null;
  @bindable() text = null;
  @bindable() icon = null;
  @bindable() level = 'Auto';
  @bindable() emphasized = false;
  constructor(element) {
    this.element = element;
  }

  attached() {

    this._title = new sap.ui.core.Title({
      text: this.text,
      icon: this.icon,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      level: this.level,
    });
    $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  }
  textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  }
  iconChanged(newValue) {
    if (this._title != null) {
      this._title.setIcon(newValue);
    }
  }
   levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  }
   emphasizedChanged(newValue) {
    if (this._title != null) {
      this._title.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  }
}

export class Ui5ToastService {
  show(message, displayLength, ) {
    return new Promise((resolve, reject) => {
      sap.m.MessageToast.show(message,{
        duration: displayLength,
        onClose: () => {
          resolve();
        }
      });
    });
  }
}

@customElement('ui5-toolbar')
@inject(Element)
export class Ui5Toolbar {
  _bar = null;
  _parent = null;
  @bindable() width = null;
  @bindable() active = false;
  @bindable() enabled = true;
  @bindable() height = null;
  @bindable() design = null;
  @bindable() press = this.defaultFunc;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._bar.addContent(child);
        return 'content';
      }
    }
  }
  removeChildByRelation(child,relation)
  {
    if (relation == 'content') {
        this._bar.removeContent(child);
      }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._bar.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._bar = new sap.m.Toolbar({
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      active: getBooleanFromAttributeValue(this.active),
      height: this.height,
      design: this.design,
      press: this.press
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this.parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this.parent.addChild(this._bar, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._bar.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0 && this.parent.removeChild) {
      this.parent.removeChild(this._bar, this.element);
    }
    else {
      this._bar.destroy();
    }
  }
  widthChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  activeChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setActive(getBooleanFromAttributeValue(newValue));
    }
  }
  heightChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setHeight(newValue);
    }
  }
  designChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setDesign(newValue);
    }
  }
  pressChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setPress(newValue);
    }
  }
}

@customElement('ui5-toolbar-spacer')
@inject(Element)

export class Ui5ToolbarSpacer {
  _spacer = null;
  @bindable() width = null;
  constructor(element) {
    this.element = element;
  }

  attached() {


    this._spacer = new sap.m.ToolbarSpacer({
      width: this.width,
    });
    if ($(this.element).closest("[ui5-container]").length > 0) {
      $(this.element).closest("[ui5-container]")[0].au.controller.viewModel.addChild(this._spacer, this.element);
    }
  }
  widthChanged(newValue) {
    if (this._spacer !== null) {
      this._spacer.setWidth(newValue);
    }
  }

}

@customElement('ui5-upload-collection')
@inject(Element)
export class Ui5UploadCollection {
  @bindable() fileType = [];
  @bindable() maximumFilenameLength = null;
  @bindable() maximumFileSize = null;
  @bindable() mimeType = [];
  @bindable() multiple = false;
  @bindable() noDataText = null;
  @bindable() noDataDescription = null;
  @bindable() sameFilenameAllowed = false;
  @bindable() showSeperators = 'All';
  @bindable() uploadEnabled = true;
  @bindable() uploadUrl = '../../../upload';
  @bindable() instantUpload = true;
  @bindable() numberOfAttachmentsText = null;
  @bindable() mode = 'None';
  @bindable() uploadButtonVisible = false;
  @bindable() terminationEnabled = true;

  @bindable() change = this.defaultFunc;
  @bindable() fileDeleted = this.defaultFunc;
  @bindable() filenameLengthExceeded = this.defaultFunc;
  @bindable() fileRenamed = this.defaultFunc;
  @bindable() fileSizeExceeded = this.defaultFunc;
  @bindable() typeMismatch = this.defaultFunc;
  @bindable() uploadComplete = this.defaultFunc;
  @bindable() uploadTerminated = this.defaultFunc;
  @bindable() beforeUploadStarts = this.defaultFunc;
  @bindable() selectionChange = this.defaultFunc;
  _upload = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'items') {
        this._upload.addItem(child);
        return elem.localName;
      }
      else if (elem.localName == 'toolbar') {
        this._upload.setToolbar(child);
        return elem.localName;
      }
      else if (elem.localName == 'infotoolbar') {
        this._upload.setInfoToolbar(child);
        return elem.localName;
      }
      else if (elem.localName == 'parameter') {
        this._upload.addHeaderParameter(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'items' && this._upload) {
      this._upload.removeItem(child);
    }
    else if (relation === 'toolbar' && this._upload) {
      this._upload.setToolbar(null);
    }
    else if (relation === 'infotoolbar' && this._upload) {
      this._upload.setInfoToolbar(null);
    }
    else if (relation === 'parameter' && this._upload) {
      this._upload.removeHeaderParameter(null);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._upload = new sap.m.UploadCollection({
      fileType: this.fileType,
      maximumFilenameLength: this.maximumFilenameLength,
      maximumFileSize: this.maximumFileSize,
      mimeType: this.mimeType,
      multiple: getBooleanFromAttributeValue(this.multiple),
      noDataText: this.noDataText,
      noDataDescription: this.noDataDescription,
      sameFilenameAllowed: getBooleanFromAttributeValue(this.sameFilenameAllowed),
      showSeperators: this.showSeperators,
      uploadEnabled: getBooleanFromAttributeValue(this.uploadEnabled),
      uploadUrl: this.uploadUrl,
      instantUpload: getBooleanFromAttributeValue(this.instantUpload),
      numberOfAttachmentsText: this.numberOfAttachmentsText,
      terminationEnabled: getBooleanFromAttributeValue(this.terminationEnabled),
      change: this.change,
      fileDeleted: this.fileDeleted,
      filenameLengthExceeded: this.filenameLengthExceeded,
      fileSizeExceeded: this.fileSizeExceeded,
      typeMismatch: this.typeMismatch,
      uploadComplete: this.uploadComplete,
      uploadTerminated: this.uploadTerminated,
      beforeUploadStarts: this.beforeUploadStarts,
      selectionChange: this.selectionChange
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent.removeChild(this._upload, this.element);
    }
    else {
      this._upload.destroy();
    }
  }
  fileTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileType(newValue);
    }
  }
  maximumFilenameLengthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMaximumFilenameLength(newValue);
    }
  }
  mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  }
  multipleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMultiple(getBooleanFromAttributeValue(newValue));
    }
  }
  noDataTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataText(newValue);
    }
  }
  noDataDescriptionChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataDescription(newValue);
    }
  }
  sameFilenameAllowedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));
    }
  }
  showSeperatorsChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setshowSeperators(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadUrl(newValue);
    }
  }
  instantUploadChanged(newValue) {
    if (this._upload !== null) {
      //not supported by OpenUI5 (yet)
      //this._upload.setInstantUpload(getBooleanFromAttributeValue(newValue));
    }
  }
  numberOfAttachmentsTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNumberOfAttachmentsText(newValue);
    }
  }
  modeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMode(newValue);
    }
  }
  uploadButtonVisibleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadButtonVisible(getBooleanFromAttributeValue(newValue));
    }
  }
  terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setTerminationEnabled(getBooleanFromAttributeValue(newValue));
    }
  }

  /*TODO: Add change bindings for event handlers */
}

@customElement('ui5-upload-collection-item')
@inject(Element)
export class Ui5UploadCollectionItem {
  @bindable() contributor = null;
  @bindable() documentId = null;
  @bindable() fileName = null;
  @bindable() fileSize = null;
  @bindable() enableEdit = true;
  @bindable() mimeType = null;
  @bindable() thumbnailUrl = null;
  @bindable() enableDelete = true;
  @bindable() uploadedDate = null;
  @bindable() visibleEdit = true;
  @bindable() url = null;
  @bindable() visibleDelete = true;
  @bindable() ariaLabelForPicture = null;
  @bindable() selected = false;

  _upload = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'attributes') {
        this._upload.addAttribute(child);
        return elem.localName;
      }
      else if (elem.localName == 'statuses') {
        this._upload.addStatus(child);
        return elem.localName;
      }
      else if (elem.localName == 'markers') {
        this._upload.addMarker(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation === 'attributes' && this._upload) {
      this._upload.removeAttribute(child);
    }
    else if (relation === 'statuses' && this._upload) {
      this._upload.removeStatus(null);
    }
    else if (relation === 'markers' && this._upload) {
      this._upload.removeMarker(null);
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._upload = new sap.m.UploadCollectionItem({
      contributor: this.contributor,
      documentId: this.documentId,
      fileName: this.fileName,
      fileSize: this.fileSize,
      mimeType: this.mimeType,
      thumbnailUrl: this.thumbnailUrl,
      enableDelete: getBooleanFromAttributeValue(this.enableDelete),
      uploadedDate: this.uploadedDate,
      visibleEdit: getBooleanFromAttributeValue(this.visibleEdit),
      url: this.url,
      visibleDelete: getBooleanFromAttributeValue(this.visibleDelete),
      ariaLabelForPicture: this.ariaLabelForPicture,
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent =$(this.element).closest("[ui5-container]")[0].au.controller.viewModel; 
      this._relation = this._parent.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._upload, this._relation);
    }
    else {
      this._upload.destroy();
    }
  }
  contributorChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setContributor(newValue);
    }
  }
  documentIdChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setDocumentId(newValue);
    }
  }
  fileSizeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileSize(newValue);
    }
  }
  mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  }
  thumbnailUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setThumbnailUrl(newValue);
    }
  }
  enableDeleteChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setEnableDelete(getBooleanFromAttributeValue(newValue));
    }
  }
  uploadedDateChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadedDate(getBooleanFromAttributeValue(newValue));
    }
  }
  visibleEditChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setVisibleEdit(getBooleanFromAttributeValue(newValue));
    }
  }
  urlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUrl(newValue);
    }
  }
  visibleDeleteChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setVisibleDelete(getBooleanFromAttributeValue(newValue));
    }
  }
  ariaLabelForPictureChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setAriaLabelForPicture(newValue);
    }
  }
  selectedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSelected(getBooleanFromAttributeValue(newValue));
    }
  }
  terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setterminationEnabled(getBooleanFromAttributeValue(newValue));
    }
  }

  /*TODO: Add change bindings for event handlers */
}

@customElement('ui5-upload-collection-parameter')
@inject(Element)
export class Ui5UploadCollectionParameter {
  @bindable() name = null;
  @bindable() value = null;

  _parameter = null;
  _parent = null;
  _relation = null;
  constructor(element) {
    this.element = element;
  }
  get UIElement() {
    return this._parameter;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
  }
  removeChildByRelation(child, relation) {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._parameter = new sap.m.UploadCollectionParameter({
      name: this.name,
      value: this.value,
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this.relation = this._parent.addChild(this._parameter, this.element);
    }
    
  }
  detached() {
    if (this._parent && this._parameter.removeChildByRelation) {
      this._parent.removeChildByRelation(this._parameter, this.relation);
    }
    
  }
  nameChanged(newValue) {
    if (this._parameter !== null) {
      this._parameter.setName(newValue);
    }
  }
  valueChanged(newValue) {
    if (this._parameter !== null) {
      this._parameter.setValue(newValue);
    }
  }
  
}

export class MaterializeFormValidationRenderer {

  className = 'md-input-validation';
  classNameFirst = 'md-input-validation-first';

  render(instruction) {
    let allElements = new Array();
    for (let { result, elements } of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (let { result, elements } of instruction.render) {
      for (let element of elements) {
        this.add(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    allElements.forEach(e => this.underlineInput(e));
  }

  underlineInput(element) {
    let input;
    switch (element.tagName) {
      case 'MD-INPUT': {
        input = element.querySelector('input') || element.querySelector('textarea');
        break;
      }
      case 'SELECT': {
        const selectWrapper = element.closest('.select-wrapper');
        if (selectWrapper) {
          input = selectWrapper.querySelector('input');
        }
        break;
      }
      case 'INPUT': {
        input = element;
        break;
      }
      default: break;
    }
    if (input) {
      if (element.querySelectorAll('.' + this.className).length === 0) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      }
      else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    }
  }

  add(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
    case 'MD-INPUT': {
      let label = element.querySelector('label');
      let input = element.querySelector('input') || element.querySelector('textarea');
      if (label) {
        label.removeAttribute('data-error');
      }
      if (input) {
        result.target = input;
        if (input.hasAttribute('data-show-errortext')) {
          this.addMessage(element, result);
        }
      }
      break;
    }
    case 'SELECT': {
      const selectWrapper = element.closest('.select-wrapper');
      if (!selectWrapper) {
        return;
      }
      let input = selectWrapper.querySelector('input');
      if (input) {
        result.target = input;
        if (!(input.hasAttribute('data-show-errortext') &&
            input.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(selectWrapper, result);
        }
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        if (!(element.hasAttribute('data-show-errortext') &&
            element.getAttribute('data-show-errortext') === 'false')) {
          this.addMessage(element.parentNode, result);
        }
      }
      break;
    }
    default: break;
    }
  }

  remove(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
    case 'MD-INPUT': {
      this.removeMessage(element, result);
      break;
    }
    case 'SELECT': {
      const selectWrapper = element.closest('.select-wrapper');
      if (!selectWrapper) {
        return;
      }

      if ($(selectWrapper.parentElement).children().hasClass('md-input-validation') ) {
        this.removeMessage(selectWrapper.parentElement, result);
      } else {
        this.removeMessage(selectWrapper, result);
      }
      break;
    }
    case 'INPUT' : {
      if (element.hasAttribute('md-datepicker')) {
        this.removeMessage(element.parentNode, result);
      }
      break;
    }
    default: break;
    }
  }

  addMessage(element, result) {
    let message = document.createElement('div');
    message.id = `md-input-validation-${result.id}`;
    message.textContent = result.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  }

  removeMessage(element, result) {
    let message = element.querySelector(`#md-input-validation-${result.id}`);
    if (message) {
      element.removeChild(message);
    }
  }

}

@customElement('ui5-tile-container')
@inject(Element)
export class Ui5TileContainer {
  _container = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'tile')
      this._container.addTile(child);
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'tile')
      this._container.removeTile(child);
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._container = new sap.m.TileContainer();
    this._parent = this.element.closest("[ui5-container]").au.controller.viewModel;
    this._parent.addChild(this._container, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  }
  detached() {
    if (this._parent) {
      this._parent.removeChild(this._container, this.element);
    }
  }
}

@customElement('ui5-input')
@inject(Element)

export class Ui5Input extends Ui5InputBase {
  _input = null;
  _parent = null;
  _relation = null;
  @bindable() ui5Id = null;
  @bindable() type = 'Text';
  @bindable() maxLength = 0;
  @bindable() dateFormat = 'YYYY-MM-DD';
  @bindable() showValueHelp = false;
  @bindable() showSuggestion = false;
  @bindable() valueHelpOnly = false;
  @bindable() filterSuggests = true;
  @bindable() maxSuggestionWidth = null;
  @bindable() showTableSuggestionValueHelp = true;
  @bindable() description = null;
  @bindable() fieldWidth = '50%';
  @bindable() valueLiveUpdate = false;
  @bindable() selectedKey = '';
  @bindable() textFormatMode = 'Value';
  @bindable() textFormatter = '';
  @bindable() suggestionRowValidator = '';

  @bindable() suggestionItems = [];
  @bindable() suggestionColumns = [];
  @bindable() suggestionRows = [];
  @bindable() selectedItem = null;
  @bindable() selectedRow = null;

  @bindable() liveChange = this.defaultFunc;
  @bindable() valueHelpRequest = this.defaultFunc;
  @bindable() suggest = this.defaultFunc;
  @bindable() suggestionItemSelected = this.defaultFunc;
  @bindable() submit = this.defaultFunc;

  @bindable() value = null;
  @bindable() width = null;
  @bindable() enabled = true;
  @bindable() valueState = 'None';
  @bindable() name = null;
  @bindable() placeholder = null;
  @bindable() editable = true;
  @bindable() valueStateText = null;
  @bindable() showValueStateMessage = true;
  @bindable() textAlign = 'Initial';
  @bindable() textDirection = 'Inherit';
  @bindable() required = false;

  @bindable() change = this.defaultFunc;

  /* from Control*/
  @bindable() busy = false;

  get UIElement() {
    return this._input;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    super.addChild(child, elem);
    for (elem of path) {
      if (elem.localName == 'suggestion-item') {
        this._input.addSuggestionItem(child);
        return elem.localName;
      }
      else if (elem.localName == 'suggestion-row') {
        this._input.addSuggestionRow(child);
        return elem.localName;
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'suggestion-item') {
      this._input.removeSuggestionItem(child);
    }
    else if (relation == 'suggestion-row') {
      this._input.removeSuggestionRow(child);
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    super.removeChild(child, elem);
    for (elem of path) {
      if (elem.localName == 'suggestion-item') {
        this._input.removeSuggestionItem(child);
        break;
      }
      else if (elem.localName == 'suggestion-row') {
        this._input.removeSuggestionRow(child);
        break;
      }
    }
  }
  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      type: this.type,
      maxLength: this.maxLength,
      dateFormat: this.dateFormat,
      showValueHelp: getBooleanFromAttributeValue(this.showValueHelp),
      showSuggestion: getBooleanFromAttributeValue(this.showSuggestion),
      valueHelpOnly: getBooleanFromAttributeValue(this.valueHelpOnly),
      filterSuggests: getBooleanFromAttributeValue(this.filterSuggests),
      maxSuggestionWidth: this.maxSuggestionWidth,
      showTableSuggestionValueHelp: getBooleanFromAttributeValue(this.showTableSuggestionValueHelp),
      description: this.description,
      fieldWidth: this.fieldWidth,
      valueLiveUpdate: getBooleanFromAttributeValue(this.valueLiveUpdate),
      selectedKey: this.selectedKey,
      textFormatMode: this.textFormatMode,
      suggestionRowValidator: this.suggestionRowValidator,
      suggestionItems: this.suggestionItems,
      suggestionColumns: this.suggestionColumns,
      suggestionRows: this.suggestionRows,
      selectedItem: this.selectedItem,
      selectedRow: this.selectedRow,
      liveChange: this.liveChange,
      suggest: this.suggest,
      valueHelpRequest: this.valueHelpRequest,
      suggestionItemSelected: this.suggestionItemSelected,
      submit: this.submit,
      value: this.value,
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      valueState: this.valueState,
      name: this.value,
      placeholder: this.placeholder,
      editable: getBooleanFromAttributeValue(this.editable),
      valueStateText: this.valueStateText,
      showValueStateMessage: getBooleanFromAttributeValue(this.showValueStateMessage),
      textAlign: this.textAlign,
      textDirection: this.textDirection,
      required: getBooleanFromAttributeValue(this.required),
      change: this.change
    };
    if (this.ui5Id)
      this._input = new sap.m.Input(this.ui5Id, params);
    else
      this._input = new sap.m.Input(params);
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._input, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._input.attachChange((event) => {
      that.value = event.mParameters.value;
    });
    this._input.attachLiveChange((event) => {
      if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {
        that.value = event.mParameters.value;
      }
    });
    this._input.addEventDelegate(this.element);
    super.attached();
  }
  detached(){
    if(this._parent && this._parent.removeChildByRelation){
      this._parent.removeChildByRelation(this._input,this._relation);
    }
  }
  typeChanged(newValue) {
    if (this._input !== null) {
      this._input.setType(newValue);
    }
  }
  maxLengthChanged(newValue) {
    if (this._input !== null) {
      this._input.setMaxLength(newValue);
    }
  }
  dateFormatChanged(newValue) {
    if (this._input !== null) {
      this._input.setDateFormat(newValue);
    }
  }
  showValueHelpChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));
    }
  }
  showSuggestionChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));
    }
  }
  valueHelpOnlyChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));
    }
  }
  filterSuggestsChanged(newValue) {
    if (this._input !== null) {
      this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));
    }
  }
  maxSuggestionWidthChanged(newValue) {
    if (this._input !== null) {
      this._input.setMaxSuggestionWidth(newValue);
    }
  }
  showTableSuggestionValueHelpChanged(newValue) {
    if (this._input !== null) {
      this._input.setTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));
    }
  }
  descriptionChanged(newValue) {
    if (this._input !== null) {
      this._input.setDescription(newValue);
    }
  }
  fieldWidthChanged(newValue) {
    if (this._input !== null) {
      this._input.setFieldWidth(newValue);
    }
  }
  valueLiveUpdateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));
    }
  }
  selectedKeyChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedKey(newValue);
    }
  }
  textFormatModeChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextFormatMode(newValue);
    }
  }
  textFormatterChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextFormatter(newValue);
    }
  }
  suggestionRowValidatorChanged(newValue) {
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  }
  suggestionItemsChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._input !== null) {
      this._input.setSuggestionsItems(newValue);
    }
  }
  suggestionColumnsChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  }
  suggestionRowsChanged(newValue) {
    //TODO: Need to add and remove values separately
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  }
  selectedItemChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedItem(newValue);
    }
  }
  selectedRowChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedRow(newValue);
    }
  }
  liveChangeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachLiveChange(newValue);
    }
  }
  valueHelpRequestChanged(newValue) {
    if (this._input !== null) {
      this._input.attachValueHelpRequest(newValue);
    }
  }
  suggestChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSuggest(newValue);
    }
  }
  suggestionItemSelectedChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSuggestionItemSelected(newValue);
    }
  }
  submitChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSubmit(newValue);
    }
  }
  valueChanged(newValue) {
    if (this._input !== null) {
      this._input.setValue(newValue);
    }
  }
  widthChanged(newValue) {
    if (this._input !== null) {
      this._input.setWidth(newValue);
    }
  }
  enabledChanged(newValue) {
    if (this._input !== null) {
      this._input.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueState(newValue);
    }
  }
  nameChanged(newValue) {
    if (this._input !== null) {
      this._input.setName(newValue);
    }
  }
  placeholderChanged(newValue) {
    if (this._input !== null) {
      this._input.setPlaceholder(newValue);
    }
  }
  editableChanged(newValue) {
    if (this._input !== null) {
      this._input.setEditable(getBooleanFromAttributeValue(newValue));
    }
  }
  valueStateTextChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueStateText(newValue);
    }
  }
  showValueStateMessageChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  }
  textAlignChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextAlign(newValue);
    }
  }
  textDirectionChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextDirection(newValue);
    }
  }
  requiredChanged(newValue) {
    if (this._input !== null) {
      this._input.setRequired(getBooleanFromAttributeValue(newValue));
    }
  }
  changeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachChange(newValue);
    }
  }
  busyChanged(newValue) {
    if (this._input !== null) {
      this._input.setBusy(getBooleanFromAttributeValue(newValue));
    }
  }
}

@customElement('ui5-view-settings-dialog')
@inject(Element)
export class Ui5ViewSettingsDialog {
  _dialog = null;
  _parent = null;
  @bindable() ui5Id = null;
  @bindable() title = null;
  @bindable() sortDescending = false;
  @bindable() groupDescending = false;
  @bindable() confirm = this.defaultFunc;
  @bindable() cancel = this.defaultFunc;
  @bindable() resetFilters = this.defaultFunc;
  @bindable() filterDetailPageOpened = this.defaultFunc;

  constructor(element) {
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }
  defaultFunc(event) {

  }
  get UIElement() {
    return this._dialog;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'sortitems') {
        this._dialog.addSortItem(child);
        return 'sortItems';
      }
      if (elem.localName == 'groupitems') {
        this._dialog.addGroupItem(child);
        return 'groupItems';
      }
      if (elem.localName == 'filteritems') {
        this._dialog.addFilterItem(child);
        return 'filterItems';
      }
      if (elem.localName == 'presetfilteritems') {
        this._dialog.addPresetFilterItem(child);
        return 'presetFilterItems';
      }
      if (elem.localName == 'customtabs') {
        this._dialog.addCustomTab(child);
        return 'customTabs';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'sortItems') {
      //skip removal of sortItems (gives error)
      //this._dialog.removeSortItem(child);
    }
    else if (relation == 'groupItems') {
      this._dialog.removeGroupItem(child);
    }
    else if (relation == 'filterItems') {
      this._dialog.removeFilterItem(child);
    }
    else if (relation == 'presetFilterItems') {
      this._dialog.removePresetFilterItem(child);
    }
    else if (relation == 'customTabs') {
      this._dialog.removeCustomTab(child);
    }
  }
  removeChild(child, elem) {

  }
  attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      sortDescending: getBooleanFromAttributeValue(this.sortDescending),
      groupDescending: getBooleanFromAttributeValue(this.groupDescending),
      confirm: this.confirm,
      cancel: this.cancel,
      beforeClose: this.beforeClose,
      filterDetailPageOpened  : this.filterDetailPageOpened
    };
    if (this.ui5Id)
      this._dialog = new sap.m.ViewSettingsDialog(this.ui5Id, props);
    else
      this._dialog = new sap.m.ViewSettingsDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

  }
  detached() {

  }


  titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  }
  sortDescendingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setSortDescending(getBooleanFromAttributeValue(newValue));
    }
  }
  
  groupDescendingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGroupDescending(getBooleanFromAttributeValue(newValue));
    }
  }
  }

@customElement('ui5-vertical-layout')
@inject(Element)
export class Ui5VerticalLayout {
  _layout = null;
  _parent = null;
  constructor(element) {
    this.element = element;
  }
  defaultFunc(event) {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._layout.addContent(child);
        break;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'content') {
        this._layout.removeContent(child);
        break;
      }
    }
  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._layout = new sap.ui.layout.VerticalLayout({
    });

    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
      this._parent.addChild(this._layout, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
    else {
      this._layout.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  }
  detached() {
    if ($(this.element).closest("[ui5-container]").length > 0) {
      this._parent.removeChild(this._layout, this.element);
    }
    else {
      this._layout.destroy();
    }
  }

  /*TODO: Add change bindings for event handlers */
}

@customElement('ui5-view-settings-filter-item')
@inject(Element)

export class Ui5ViewSettingsFilterItem extends Ui5Item {
  _item = null;
  _container = null;

  @bindable() multiSelect = true;

  @bindable() selected = null;
  @bindable() itemPropertyChanged = this.defaultFunc;
  /* inherited from list item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;
  /* inherited from list item*/

  constructor(element) {
    super(element);
    this.element = element;
    this.attributeManager = new AttributeManager(this.element);

  }
  defaultFunc() {

  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'items') {
        this._item.addItem(child);
        return 'items';
      }
    }
  }
  removeChildByRelation(child, relation) {
    if (relation == 'items') {
      this._item.removeItem(child);
    }

  }

  attached() {
    var props = {
      multiSelect: getBooleanFromAttributeValue(this.multiSelect),
      selected: getBooleanFromAttributeValue(this.selected),
      itemPropertyChanged: this.itemPropertyChanged,
    };
    super.fillProperties(props);
    this._item = new sap.m.ViewSettingsFilterItem(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

    this._container = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  }
  detached() {
    if (this._container && this._container.removeChildByRelation)
      this._container.removeChildByRelation(this._item, this._relation);
  }
  selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(getBooleanFromAttributeValue(newValue));
    }
  }
  multiSelectChanged(newValue) {
    if (this._item !== null) {
      this._item.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  }
}

@customElement('ui5-wizard')
@inject(Element)
export class Ui5Wizard {
  _wizard = null;
  _parent = null;
  @bindable() width = 'auto';
  @bindable() height = '100%';
  @bindable() showNextButton = true;
  @bindable() finishButtonText = "fortfahren";
  @bindable() enableBranching = false;
  @bindable() stepActivate = this.defaultFunc;
  @bindable() complete = this.defaultFunc;

  @bindable() lastStep = false;
  defaultFunc() {

  }

  @computedFrom('_wizard')
  get UIElement() {
    return this._wizard;
  }
  constructor(element) {
    this.element = element;
  }
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    if (path[0].localName == 'wizard')
      this._wizard.addStep(child);
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    //FIXME: Dynamic step removal is not supported by openui5 yet, will be removed with the wizard itself
    //if (path[0].localName == 'wizard')
    // this._wizard.removeStep(child);
  }
  attached() {
    var params = {
      width: this.width,
      height: this.height,
      showNextButton: getBooleanFromAttributeValue(this.showNextButton),
      finishButtonText: this.finishButtonText,
      enableBranching: getBooleanFromAttributeValue(this.enableBranching),
      stepActivate: this.stepActivate,
      complete: this.complete
    };
    var that = this;
    this._wizard = new sap.m.Wizard(params);
    this._wizard.attachStepActivate((event) => {
      that.lastStep = event.mParameters.index == that._wizard.getSteps().length;
    });
    this._parent = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._parent.addChild(this._wizard, this.element);
  }
  detached() {
    this._parent.removeChild(this._wizard, this.element);
  }
  widthChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setWidth(newValue);
    }
  }
  heightChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setHeight(newValue);
    }
  }
  showNextButtonChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setShowNextButton(getBooleanFromAttributeValue(newValue));
    }
  }
  finishButtonTextChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setFinishButtonText(newValue);
    }
  }
  enableBranchingChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setEnableBranching(getBooleanFromAttributeValue(newValue));
    }
  }
}

@customElement('ui5-wizard-step')
@inject(Element)
export class Ui5WizardStep {
  _step = null;
  @bindable nextStep = null;
  @bindable subsequentSteps = [];
  @bindable title = null;
  @bindable icon = null;
  @bindable validated = true;
  @bindable complete = this.defaultFunc;
  @bindable activate = this.defaultFunc;
  constructor(element) {
    this.element = element;
  }
  _parent = null;
  addChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'step') {
        this._step.addContent(child);
        return elem.localName;
      }
    }
  }
  removeChild(child, elem) {
    var path = jQuery.makeArray($(elem).parentsUntil(this.element));
    for (elem of path) {
      if (elem.localName == 'step') {
        this._step.removeContent(child);
        break;
      }
    }
  }
  removeChildByRelation(child,relation){
    if (relation === 'step' && this._step && child) {
     this._step.removeContent(child);
   }
 }
  defaultFunc() {

  }
  attached() {
    var attributeManager = new AttributeManager(this.element);
    this._step = new sap.m.WizardStep({
      title: this.title,
      icon: this.icon,
      validated: getBooleanFromAttributeValue(this.validated),
      complete: this.complete,
      activate: this.activate
    });
    this._parent = this.element.closest("ui5-wizard").au.controller.viewModel;
    this._parent.addChild(this._step, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  }
  detached() {
    this._parent.removeChild(this._step, this.element);
  }
}

@customElement('ui5-view-settings-item')
@inject(Element)

export class Ui5ViewSettingsItem extends Ui5Item {
  _item = null;
  _container = null;

  @bindable() selected = null;
  @bindable() itemPropertyChanged = this.defaultFunc;
  /* inherited from list item*/
  @bindable() key = null;
  @bindable() enabled = true;
  @bindable() text = null;
  @bindable() textDirection = null;
  /* inherited from list item*/

  constructor(element) {
    super(element);
    this.element = element;
  }
  defaultFunc() {

  }
  attached() {
    var props = {
      selected: getBooleanFromAttributeValue(this.selected),
      itemPropertyChanged: this.itemPropertyChanged,
    };
    super.fillProperties(props);
    this._item = new sap.m.ViewSettingsItem(props);
    this._container = $(this.element).closest("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  }
  detached() {
    if (this._container && this._container.removeChildByRelation)
      this._container.removeChildByRelation(this._item, this._relation);
  }
  addChild(child, elem) {
  }
  selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(getBooleanFromAttributeValue(newValue));
    }
  }
}
