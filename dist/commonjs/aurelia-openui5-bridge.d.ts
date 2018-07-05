import {
  PLATFORM
} from 'aurelia-pal';
import {
  bindable,
  customElement,
  noView,
  customAttribute
} from 'aurelia-templating';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  computedFrom,
  Animator
} from 'aurelia-framework';
import {
  Router
} from 'aurelia-router';
export declare class ClickCounter {
  count: any;
  increment(): any;
}

/**
* Plugin configuration builder
*/
export declare class ConfigBuilder {
  useGlobalResources: boolean;
  
  //  useScrollfirePatch: boolean = false;
  globalResources: any;
  useAll(): ConfigBuilder;
  useLink(): ConfigBuilder;
  usePage(): ConfigBuilder;
  useBar(): ConfigBuilder;
  useContainer(): ConfigBuilder;
  useHtml(): ConfigBuilder;
  useButton(): ConfigBuilder;
  useToggleButton(): ConfigBuilder;
  useGrid(): ConfigBuilder;
  useWizard(): ConfigBuilder;
  useText(): ConfigBuilder;
  useTiles(): ConfigBuilder;
  useForm(): ConfigBuilder;
  useLabel(): ConfigBuilder;
  useInput(): ConfigBuilder;
  useDatePicker(): ConfigBuilder;
  useTitle(): ConfigBuilder;
  useLayoutData(): ConfigBuilder;
  useLayout(): ConfigBuilder;
  useSelect(): ConfigBuilder;
  useTable(): ConfigBuilder;
  useList(): ConfigBuilder;
  useTabs(): ConfigBuilder;
  useDynamicPage(): ConfigBuilder;
  useBreadcrumbs(): ConfigBuilder;
  useSegmentedButton(): ConfigBuilder;
  useDialog(): ConfigBuilder;
  useIcon(): ConfigBuilder;
  useActionSheet(): ConfigBuilder;
  useTableSelectDialog(): ConfigBuilder;
  useUploadCollection(): ConfigBuilder;
  useViewSettingsDialog(): ConfigBuilder;
  useSelectDialog(): ConfigBuilder;
  useSplitContainer(): ConfigBuilder;
  useMessageView(): ConfigBuilder;
  useMaskInput(): ConfigBuilder;
  useTree(): ConfigBuilder;
  useMenu(): ConfigBuilder;
  useSplitter(): ConfigBuilder;
  usePanel(): ConfigBuilder;
  useTextArea(): ConfigBuilder;
  
  /**
    * Don't globalize any resources
    * Allows you to import yourself via <require></require>
    */
  withoutGlobalResources(): ConfigBuilder;
}
export declare function configure(aurelia?: any, configCallback?: any): any;
export declare class Ui5Button extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  type: any;
  width: any;
  enabled: any;
  icon: any;
  iconFirst: any;
  activeIcon: any;
  iconDensityAware: any;
  textDirection: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  iconFirstChanged(newValue?: any): any;
  activeIconChanged(newValue?: any): any;
  iconDensityAwareChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ActionSheet extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  placement: any;
  showCancelButton: any;
  cancelButtonText: any;
  title: any;
  beforeOpen: any;
  afterOpen: any;
  beforeClose: any;
  afterClose: any;
  cancelButtonPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  placementChanged(newValue?: any): any;
  showCancelButtonChanged(newValue?: any): any;
  cancelButtonTextChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  beforeOpenChanged(newValue?: any): any;
  afterOpenChanged(newValue?: any): any;
  beforeCloseChanged(newValue?: any): any;
  afterCloseChanged(newValue?: any): any;
  cancelButtonPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Breadcrumbs extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  currentLocationText: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  currentLocationTextChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Column extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  hAlign: any;
  vAlign: any;
  styleClass: any;
  visible: any;
  minScreenWidth: any;
  demandPopin: any;
  popinDisplay: any;
  mergeDuplicates: any;
  mergeFunctionName: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  hAlignChanged(newValue?: any): any;
  vAlignChanged(newValue?: any): any;
  styleClassChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  minScreenWidthChanged(newValue?: any): any;
  demandPopinChanged(newValue?: any): any;
  popinDisplayChanged(newValue?: any): any;
  mergeDuplicatesChanged(newValue?: any): any;
  mergeFunctionNameChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}

/**
 * Adds css classes to a given element only if these classes are not already
 * present. Keeps a record of css classes which actually have been added.
 * This way, they can also be removed in a way which keeps the original classes
 * set by the user.
 * Most useful in attached() and detached() handlers.
 */
export declare class AttributeManager {
  addedClasses: any;
  addedAttributes: any;
  constructor(element?: any);
  addAttributes(attrs?: any): any;
  removeAttributes(attrs?: any): any;
  addClasses(classes?: any): any;
  removeClasses(classes?: any): any;
}
export declare function getBooleanFromAttributeValue(value?: any): any;
export declare function showBusyIndicator(delay?: any): any;
export declare function hideBusyIndicator(): any;
export declare const constants: any;

/**
* Fire DOM event on an element
* @param element The Element which the DOM event will be fired on
* @param name The Event's name
* @param data Addition data to attach to an event
*/
export declare function fireEvent(element: Element, name: string, data?: any): any;

/**
* Fire DOM event on an element with the md-on prefix
* @param element The Element which the DOM event will be fired on
* @param name The Event's name, without md-on prefix
* @param data Addition data to attach to an event
*/
export declare function fireMaterializeEvent(element: Element, name: string, data?: any): any;

/**
* Initialize the plugin and respond with a promise
*/
export declare function ui5Initialize(debug?: any): any;
export declare function ui5SetTheme(name?: any, path?: any): any;
export declare function findUi5DialogElement(name?: any): any;
export declare function getUi5DialogElement(name?: any): any;
export declare function showMessageBox(vMessage?: any, mOptions?: any): any;

// https://github.com/jonathantneal/closest/blob/master/closest.js
export declare function polyfillElementClosest(): any;
export declare class SmoothScroll {
  static defaultConfig: any;
  static inject: any;
  constructor(animator?: any, router?: any);
  
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
  scrollTo(elementOrHash?: any, options?: any, container?: any): any;
  static getOffset(): any;
}
export declare function createJSONModel(): any;
export declare function assignModel(tree?: any, model?: any, templateBinding?: any): any;
export declare function assignModelFromTemplate(tree?: any, model?: any, treeItem?: any): any;
export declare class Ui5Container {
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class Ui5Control extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5CustomData extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  key: any;
  value: any;
  writeToDom: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  keyChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  writeToDomChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5CustomTreeItem extends Ui5TreeItemBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  type: any;
  visible: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  press: any;
  detailPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  
  /* inherited from sap.m.TreeItemBase*/
  typeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  unreadChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  highlightChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListItemBase*/
  pressChanged(newValue?: any): any;
  detailPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5DatePicker extends Ui5DateTimeField {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  displayFormatType: any;
  secondaryCalendarType: any;
  minDate: any;
  maxDate: any;
  navigate: any;
  displayFormat: any;
  valueFormat: any;
  dateValue: any;
  initialFocusedDateValue: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  displayFormatTypeChanged(newValue?: any): any;
  secondaryCalendarTypeChanged(newValue?: any): any;
  minDateChanged(newValue?: any): any;
  maxDateChanged(newValue?: any): any;
  navigateChanged(newValue?: any): any;
  displayFormatChanged(newValue?: any): any;
  valueFormatChanged(newValue?: any): any;
  dateValueChanged(newValue?: any): any;
  initialFocusedDateValueChanged(newValue?: any): any;
  
  /* inherited from sap.m.DateTimeField*/
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  
  /* inherited from sap.m.InputBase*/
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5DateTimeField extends Ui5InputBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  displayFormat: any;
  valueFormat: any;
  dateValue: any;
  initialFocusedDateValue: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  displayFormatChanged(newValue?: any): any;
  valueFormatChanged(newValue?: any): any;
  dateValueChanged(newValue?: any): any;
  initialFocusedDateValueChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  
  /* inherited from sap.m.InputBase*/
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ColumnListItem extends Ui5ListItemBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  vAlign: any;
  type: any;
  visible: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  press: any;
  detailPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  vAlignChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  unreadChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  highlightChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListItemBase*/
  pressChanged(newValue?: any): any;
  detailPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5DateTimePicker extends Ui5DatePicker {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  displayFormatType: any;
  secondaryCalendarType: any;
  minDate: any;
  maxDate: any;
  navigate: any;
  displayFormat: any;
  valueFormat: any;
  dateValue: any;
  initialFocusedDateValue: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  displayFormatTypeChanged(newValue?: any): any;
  secondaryCalendarTypeChanged(newValue?: any): any;
  minDateChanged(newValue?: any): any;
  maxDateChanged(newValue?: any): any;
  
  /* inherited from sap.m.DatePicker*/
  navigateChanged(newValue?: any): any;
  displayFormatChanged(newValue?: any): any;
  valueFormatChanged(newValue?: any): any;
  dateValueChanged(newValue?: any): any;
  initialFocusedDateValueChanged(newValue?: any): any;
  
  /* inherited from sap.m.DateTimeField*/
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  
  /* inherited from sap.m.InputBase*/
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Dialog extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  icon: any;
  title: any;
  showHeader: any;
  type: any;
  state: any;
  stretch: any;
  contentWidth: any;
  contentHeight: any;
  horizontalScrolling: any;
  verticalScrolling: any;
  resizable: any;
  draggable: any;
  escapeHandler: any;
  beforeOpen: any;
  afterOpen: any;
  beforeClose: any;
  afterClose: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  iconChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  stateChanged(newValue?: any): any;
  stretchChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  horizontalScrollingChanged(newValue?: any): any;
  verticalScrollingChanged(newValue?: any): any;
  resizableChanged(newValue?: any): any;
  draggableChanged(newValue?: any): any;
  escapeHandlerChanged(newValue?: any): any;
  beforeOpenChanged(newValue?: any): any;
  afterOpenChanged(newValue?: any): any;
  beforeCloseChanged(newValue?: any): any;
  afterCloseChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Bar extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  design: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  designChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5DynamicPageHeader extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  pinnable: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  pinnableChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5DynamicPageTitle extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  areaShrinkRatio: any;
  stateChange: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  areaShrinkRatioChanged(newValue?: any): any;
  stateChangeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5EventProvider extends Ui5Object {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
}
export declare class Ui5FeedContent extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  contentText: any;
  subheader: any;
  value: any;
  valueColor: any;
  truncateValueTo: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  contentTextChanged(newValue?: any): any;
  subheaderChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  valueColorChanged(newValue?: any): any;
  truncateValueToChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Form extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  editable: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Element extends Ui5ManagedObject {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5FormContainer extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  expanded: any;
  expandable: any;
  visible: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  expandedChanged(newValue?: any): any;
  expandableChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5FormLayout extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  backgroundDesign: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5FormattedText extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  htmlText: any;
  width: any;
  convertLinksToAnchorTags: any;
  convertedLinksDefaultTarget: any;
  height: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  htmlTextChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  convertLinksToAnchorTagsChanged(newValue?: any): any;
  convertedLinksDefaultTargetChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5GenericTile extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  mode: any;
  header: any;
  subheader: any;
  failedText: any;
  frameType: any;
  backgroundImage: any;
  headerImage: any;
  state: any;
  imageDescription: any;
  scope: any;
  ariaLabel: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  modeChanged(newValue?: any): any;
  headerChanged(newValue?: any): any;
  subheaderChanged(newValue?: any): any;
  failedTextChanged(newValue?: any): any;
  frameTypeChanged(newValue?: any): any;
  backgroundImageChanged(newValue?: any): any;
  headerImageChanged(newValue?: any): any;
  stateChanged(newValue?: any): any;
  imageDescriptionChanged(newValue?: any): any;
  scopeChanged(newValue?: any): any;
  ariaLabelChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5GridData extends Ui5LayoutData {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  span: any;
  spanXL: any;
  spanL: any;
  spanM: any;
  spanS: any;
  indent: any;
  indentXL: any;
  indentL: any;
  indentM: any;
  indentS: any;
  visibleXL: any;
  visibleL: any;
  visibleM: any;
  visibleS: any;
  moveBackwards: any;
  moveForward: any;
  linebreak: any;
  linebreakXL: any;
  linebreakL: any;
  linebreakM: any;
  linebreakS: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  spanChanged(newValue?: any): any;
  spanXLChanged(newValue?: any): any;
  spanLChanged(newValue?: any): any;
  spanMChanged(newValue?: any): any;
  spanSChanged(newValue?: any): any;
  indentChanged(newValue?: any): any;
  indentXLChanged(newValue?: any): any;
  indentLChanged(newValue?: any): any;
  indentMChanged(newValue?: any): any;
  indentSChanged(newValue?: any): any;
  visibleXLChanged(newValue?: any): any;
  visibleLChanged(newValue?: any): any;
  visibleMChanged(newValue?: any): any;
  visibleSChanged(newValue?: any): any;
  moveBackwardsChanged(newValue?: any): any;
  moveForwardChanged(newValue?: any): any;
  linebreakChanged(newValue?: any): any;
  linebreakXLChanged(newValue?: any): any;
  linebreakLChanged(newValue?: any): any;
  linebreakMChanged(newValue?: any): any;
  linebreakSChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.LayoutData*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Grid extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  vSpacing: any;
  hSpacing: any;
  position: any;
  defaultSpan: any;
  defaultIndent: any;
  containerQuery: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  vSpacingChanged(newValue?: any): any;
  hSpacingChanged(newValue?: any): any;
  positionChanged(newValue?: any): any;
  defaultSpanChanged(newValue?: any): any;
  defaultIndentChanged(newValue?: any): any;
  containerQueryChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Icon extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  src: any;
  size: any;
  color: any;
  hoverColor: any;
  activeColor: any;
  width: any;
  height: any;
  backgroundColor: any;
  hoverBackgroundColor: any;
  activeBackgroundColor: any;
  decorative: any;
  useIconTooltip: any;
  alt: any;
  noTabStop: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  srcChanged(newValue?: any): any;
  sizeChanged(newValue?: any): any;
  colorChanged(newValue?: any): any;
  hoverColorChanged(newValue?: any): any;
  activeColorChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  backgroundColorChanged(newValue?: any): any;
  hoverBackgroundColorChanged(newValue?: any): any;
  activeBackgroundColorChanged(newValue?: any): any;
  decorativeChanged(newValue?: any): any;
  useIconTooltipChanged(newValue?: any): any;
  altChanged(newValue?: any): any;
  noTabStopChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5IconTabBar extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  expandable: any;
  expanded: any;
  selectedKey: any;
  upperCase: any;
  stretchContentHeight: any;
  applyContentPadding: any;
  backgroundDesign: any;
  headerMode: any;
  showOverflowSelectList: any;
  headerBackgroundDesign: any;
  enableTabReordering: any;
  select: any;
  expand: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  expandableChanged(newValue?: any): any;
  expandedChanged(newValue?: any): any;
  selectedKeyChanged(newValue?: any): any;
  upperCaseChanged(newValue?: any): any;
  stretchContentHeightChanged(newValue?: any): any;
  applyContentPaddingChanged(newValue?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  headerModeChanged(newValue?: any): any;
  showOverflowSelectListChanged(newValue?: any): any;
  headerBackgroundDesignChanged(newValue?: any): any;
  enableTabReorderingChanged(newValue?: any): any;
  selectChanged(newValue?: any): any;
  expandChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5IconTabFilter extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  count: any;
  showAll: any;
  icon: any;
  iconColor: any;
  iconDensityAware: any;
  visible: any;
  design: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  countChanged(newValue?: any): any;
  showAllChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  iconColorChanged(newValue?: any): any;
  iconDensityAwareChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  designChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ImageContent extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  src: any;
  description: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  srcChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Input extends Ui5InputBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  type: any;
  maxLength: any;
  showValueHelp: any;
  showSuggestion: any;
  valueHelpOnly: any;
  filterSuggests: any;
  maxSuggestionWidth: any;
  startSuggestion: any;
  showTableSuggestionValueHelp: any;
  description: any;
  fieldWidth: any;
  valueLiveUpdate: any;
  selectedKey: any;
  textFormatMode: any;
  textFormatter: any;
  suggestionRowValidator: any;
  enableSuggestionsHighlighting: any;
  liveChange: any;
  valueHelpRequest: any;
  suggest: any;
  suggestionItemSelected: any;
  submit: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  typeChanged(newValue?: any): any;
  maxLengthChanged(newValue?: any): any;
  showValueHelpChanged(newValue?: any): any;
  showSuggestionChanged(newValue?: any): any;
  valueHelpOnlyChanged(newValue?: any): any;
  filterSuggestsChanged(newValue?: any): any;
  maxSuggestionWidthChanged(newValue?: any): any;
  startSuggestionChanged(newValue?: any): any;
  showTableSuggestionValueHelpChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  fieldWidthChanged(newValue?: any): any;
  valueLiveUpdateChanged(newValue?: any): any;
  selectedKeyChanged(newValue?: any): any;
  textFormatModeChanged(newValue?: any): any;
  textFormatterChanged(newValue?: any): any;
  suggestionRowValidatorChanged(newValue?: any): any;
  enableSuggestionsHighlightingChanged(newValue?: any): any;
  liveChangeChanged(newValue?: any): any;
  valueHelpRequestChanged(newValue?: any): any;
  suggestChanged(newValue?: any): any;
  suggestionItemSelectedChanged(newValue?: any): any;
  submitChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  
  /* inherited from sap.m.InputBase*/
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5InputBase extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Item extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Label extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  design: any;
  text: any;
  textAlign: any;
  textDirection: any;
  width: any;
  required: any;
  displayOnly: any;
  wrapping: any;
  vAlign: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  designChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  displayOnlyChanged(newValue?: any): any;
  wrappingChanged(newValue?: any): any;
  vAlignChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5LayoutData extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Link extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  enabled: any;
  target: any;
  width: any;
  href: any;
  validateUrl: any;
  wrapping: any;
  textAlign: any;
  textDirection: any;
  subtle: any;
  emphasized: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  targetChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  hrefChanged(newValue?: any): any;
  validateUrlChanged(newValue?: any): any;
  wrappingChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  subtleChanged(newValue?: any): any;
  emphasizedChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Html extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  content: any;
  preferDOM: any;
  sanitizeContent: any;
  visible: any;
  afterRendering: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  contentChanged(newValue?: any): any;
  preferDOMChanged(newValue?: any): any;
  sanitizeContentChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  afterRenderingChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5List extends Ui5ListBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  backgroundDesign: any;
  inset: any;
  headerText: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparators: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  selectionChange: any;
  delete: any;
  swipe: any;
  updateStarted: any;
  updateFinished: any;
  itemPress: any;
  beforeOpenContextMenu: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  insetChanged(newValue?: any): any;
  headerTextChanged(newValue?: any): any;
  footerTextChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  includeItemInSelectionChanged(newValue?: any): any;
  showUnreadChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  showNoDataChanged(newValue?: any): any;
  enableBusyIndicatorChanged(newValue?: any): any;
  modeAnimationOnChanged(newValue?: any): any;
  showSeparatorsChanged(newValue?: any): any;
  swipeDirectionChanged(newValue?: any): any;
  growingChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  growingTriggerTextChanged(newValue?: any): any;
  growingScrollToLoadChanged(newValue?: any): any;
  growingDirectionChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
  keyboardModeChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListBase*/
  selectionChangeChanged(newValue?: any): any;
  deleteChanged(newValue?: any): any;
  swipeChanged(newValue?: any): any;
  updateStartedChanged(newValue?: any): any;
  updateFinishedChanged(newValue?: any): any;
  itemPressChanged(newValue?: any): any;
  beforeOpenContextMenuChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ListBase extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  inset: any;
  headerText: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparators: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  selectionChange: any;
  delete: any;
  swipe: any;
  updateStarted: any;
  updateFinished: any;
  itemPress: any;
  beforeOpenContextMenu: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  insetChanged(newValue?: any): any;
  headerTextChanged(newValue?: any): any;
  footerTextChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  includeItemInSelectionChanged(newValue?: any): any;
  showUnreadChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  showNoDataChanged(newValue?: any): any;
  enableBusyIndicatorChanged(newValue?: any): any;
  modeAnimationOnChanged(newValue?: any): any;
  showSeparatorsChanged(newValue?: any): any;
  swipeDirectionChanged(newValue?: any): any;
  growingChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  growingTriggerTextChanged(newValue?: any): any;
  growingScrollToLoadChanged(newValue?: any): any;
  growingDirectionChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
  keyboardModeChanged(newValue?: any): any;
  selectionChangeChanged(newValue?: any): any;
  deleteChanged(newValue?: any): any;
  swipeChanged(newValue?: any): any;
  updateStartedChanged(newValue?: any): any;
  updateFinishedChanged(newValue?: any): any;
  itemPressChanged(newValue?: any): any;
  beforeOpenContextMenuChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ListItem extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  icon: any;
  additionalText: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  iconChanged(newValue?: any): any;
  additionalTextChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5mTitle extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  level: any;
  titleStyle: any;
  width: any;
  textAlign: any;
  wrapping: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  levelChanged(newValue?: any): any;
  titleStyleChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  wrappingChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ListItemBase extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  type: any;
  visible: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  press: any;
  detailPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  typeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  unreadChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  highlightChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  detailPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ManagedObject extends Ui5EventProvider {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5MaskInput extends Ui5InputBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  placeholderSymbol: any;
  mask: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  placeholderSymbolChanged(newValue?: any): any;
  maskChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  
  /* inherited from sap.m.InputBase*/
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5MaskInputRule extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  maskFormatSymbol: any;
  regex: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  maskFormatSymbolChanged(newValue?: any): any;
  regexChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Menu extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  itemSelected: any;
  closed: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  itemSelectedChanged(newValue?: any): any;
  closedChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5MessageStrip extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  type: any;
  customIcon: any;
  showIcon: any;
  showCloseButton: any;
  enableFormattedText: any;
  close: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  customIconChanged(newValue?: any): any;
  showIconChanged(newValue?: any): any;
  showCloseButtonChanged(newValue?: any): any;
  enableFormattedTextChanged(newValue?: any): any;
  closeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5MessageItem extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  type: any;
  title: any;
  subtitle: any;
  description: any;
  markupDescription: any;
  longtextUrl: any;
  counter: any;
  groupName: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  typeChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  subtitleChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  markupDescriptionChanged(newValue?: any): any;
  longtextUrlChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  groupNameChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5MessageView {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  asyncDescriptionHandler: any;
  asyncURLHandler: any;
  groupItems: any;
  showDetailsPageHeader: any;
  afterOpen: any;
  itemSelect: any;
  listSelect: any;
  longtextLoaded: any;
  urlValidated: any;
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  asyncDescriptionHandlerChanged(newValue?: any): any;
  asyncURLHandlerChanged(newValue?: any): any;
  groupItemsChanged(newValue?: any): any;
  showDetailsPageHeaderChanged(newValue?: any): any;
  afterOpenChanged(newValue?: any): any;
  itemSelectChanged(newValue?: any): any;
  listSelectChanged(newValue?: any): any;
  longtextLoadedChanged(newValue?: any): any;
  urlValidatedChanged(newValue?: any): any;
}
export declare class Ui5Object {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
}
export declare class Ui5NumericContent extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  animateTextChange: any;
  formatterValue: any;
  icon: any;
  iconDescription: any;
  indicator: any;
  nullifyValue: any;
  scale: any;
  truncateValueTo: any;
  value: any;
  valueColor: any;
  width: any;
  withMargin: any;
  state: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  animateTextChangeChanged(newValue?: any): any;
  formatterValueChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  iconDescriptionChanged(newValue?: any): any;
  indicatorChanged(newValue?: any): any;
  nullifyValueChanged(newValue?: any): any;
  scaleChanged(newValue?: any): any;
  truncateValueToChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  valueColorChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  withMarginChanged(newValue?: any): any;
  stateChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ObjectNumber extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  number: any;
  emphasized: any;
  state: any;
  unit: any;
  textDirection: any;
  textAlign: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  numberChanged(newValue?: any): any;
  emphasizedChanged(newValue?: any): any;
  stateChanged(newValue?: any): any;
  unitChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ObjectIdentifier extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  text: any;
  visible: any;
  titleActive: any;
  textDirection: any;
  titlePress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  titleActiveChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  titlePressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5OverflowToolbar extends Ui5Toolbar {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  active: any;
  enabled: any;
  height: any;
  design: any;
  style: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  activeChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  designChanged(newValue?: any): any;
  styleChanged(newValue?: any): any;
  
  /* inherited from sap.m.Toolbar*/
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5MenuItem extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  icon: any;
  visible: any;
  startsSection: any;
  press: any;
  propertyChanged: any;
  aggregationChanged: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  iconChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  startsSectionChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  propertyChangedChanged(newValue?: any): any;
  aggregationChangedChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5PaneContainer extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  orientation: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  orientationChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Panel extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  headerText: any;
  width: any;
  height: any;
  expandable: any;
  expanded: any;
  expandAnimation: any;
  backgroundDesign: any;
  accessibleRole: any;
  expand: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  headerTextChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  expandableChanged(newValue?: any): any;
  expandedChanged(newValue?: any): any;
  expandAnimationChanged(newValue?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  accessibleRoleChanged(newValue?: any): any;
  expandChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ResponsivePopover extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  placement: any;
  showHeader: any;
  title: any;
  icon: any;
  modal: any;
  offsetX: any;
  offsetY: any;
  showArrow: any;
  contentWidth: any;
  contentHeight: any;
  horizontalScrolling: any;
  verticalScrolling: any;
  showCloseButton: any;
  resizable: any;
  beforeOpen: any;
  afterOpen: any;
  beforeClose: any;
  afterClose: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  placementChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  modalChanged(newValue?: any): any;
  offsetXChanged(newValue?: any): any;
  offsetYChanged(newValue?: any): any;
  showArrowChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  horizontalScrollingChanged(newValue?: any): any;
  verticalScrollingChanged(newValue?: any): any;
  showCloseButtonChanged(newValue?: any): any;
  resizableChanged(newValue?: any): any;
  beforeOpenChanged(newValue?: any): any;
  afterOpenChanged(newValue?: any): any;
  beforeCloseChanged(newValue?: any): any;
  afterCloseChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ResponsiveGridLayout extends Ui5FormLayout {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  labelSpanXL: any;
  labelSpanL: any;
  labelSpanM: any;
  labelSpanS: any;
  adjustLabelSpan: any;
  emptySpanXL: any;
  emptySpanL: any;
  emptySpanM: any;
  emptySpanS: any;
  columnsXL: any;
  columnsL: any;
  columnsM: any;
  singleContainerFullSize: any;
  breakpointXL: any;
  breakpointL: any;
  breakpointM: any;
  backgroundDesign: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  labelSpanXLChanged(newValue?: any): any;
  labelSpanLChanged(newValue?: any): any;
  labelSpanMChanged(newValue?: any): any;
  labelSpanSChanged(newValue?: any): any;
  adjustLabelSpanChanged(newValue?: any): any;
  emptySpanXLChanged(newValue?: any): any;
  emptySpanLChanged(newValue?: any): any;
  emptySpanMChanged(newValue?: any): any;
  emptySpanSChanged(newValue?: any): any;
  columnsXLChanged(newValue?: any): any;
  columnsLChanged(newValue?: any): any;
  columnsMChanged(newValue?: any): any;
  singleContainerFullSizeChanged(newValue?: any): any;
  breakpointXLChanged(newValue?: any): any;
  breakpointLChanged(newValue?: any): any;
  breakpointMChanged(newValue?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  
  /* inherited from sap.ui.layout.form.FormLayout*/
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ResponsiveSplitter extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  height: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SearchField extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  value: any;
  width: any;
  enabled: any;
  visible: any;
  maxLength: any;
  placeholder: any;
  showRefreshButton: any;
  refreshButtonTooltip: any;
  showSearchButton: any;
  enableSuggestions: any;
  search: any;
  liveChange: any;
  suggest: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  maxLengthChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  showRefreshButtonChanged(newValue?: any): any;
  refreshButtonTooltipChanged(newValue?: any): any;
  showSearchButtonChanged(newValue?: any): any;
  enableSuggestionsChanged(newValue?: any): any;
  searchChanged(newValue?: any): any;
  liveChangeChanged(newValue?: any): any;
  suggestChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SegmentedButton extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  enabled: any;
  selectedKey: any;
  selectionChange: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  selectedKeyChanged(newValue?: any): any;
  selectionChangeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SegmentedButtonItem extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  icon: any;
  visible: any;
  width: any;
  press: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  iconChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SelectDialog extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  noDataText: any;
  multiSelect: any;
  growingThreshold: any;
  contentWidth: any;
  rememberSelections: any;
  contentHeight: any;
  confirm: any;
  search: any;
  liveChange: any;
  cancel: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  multiSelectChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  confirmChanged(newValue?: any): any;
  searchChanged(newValue?: any): any;
  liveChangeChanged(newValue?: any): any;
  cancelChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Select extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  name: any;
  enabled: any;
  width: any;
  maxWidth: any;
  selectedKey: any;
  selectedItemId: any;
  icon: any;
  type: any;
  autoAdjustWidth: any;
  textAlign: any;
  textDirection: any;
  valueState: any;
  valueStateText: any;
  showSecondaryValues: any;
  forceSelection: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  nameChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  maxWidthChanged(newValue?: any): any;
  selectedKeyChanged(newValue?: any): any;
  selectedItemIdChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  autoAdjustWidthChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showSecondaryValuesChanged(newValue?: any): any;
  forceSelectionChanged(newValue?: any): any;
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Shell extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  logo: any;
  showLogout: any;
  headerRightText: any;
  appWidthLimited: any;
  backgroundColor: any;
  backgroundImage: any;
  backgroundRepeat: any;
  backgroundOpacity: any;
  homeIcon: any;
  titleLevel: any;
  logout: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  logoChanged(newValue?: any): any;
  showLogoutChanged(newValue?: any): any;
  headerRightTextChanged(newValue?: any): any;
  appWidthLimitedChanged(newValue?: any): any;
  backgroundColorChanged(newValue?: any): any;
  backgroundImageChanged(newValue?: any): any;
  backgroundRepeatChanged(newValue?: any): any;
  backgroundOpacityChanged(newValue?: any): any;
  homeIconChanged(newValue?: any): any;
  titleLevelChanged(newValue?: any): any;
  logoutChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SlideTile extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  displayTime: any;
  transitionTime: any;
  scope: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  displayTimeChanged(newValue?: any): any;
  transitionTimeChanged(newValue?: any): any;
  scopeChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SimpleForm extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  maxContainerCols: any;
  minWidth: any;
  width: any;
  editable: any;
  labelMinWidth: any;
  layout: any;
  labelSpanXL: any;
  labelSpanL: any;
  labelSpanM: any;
  labelSpanS: any;
  adjustLabelSpan: any;
  emptySpanXL: any;
  emptySpanL: any;
  emptySpanM: any;
  emptySpanS: any;
  columnsXL: any;
  columnsL: any;
  columnsM: any;
  singleContainerFullSize: any;
  breakpointXL: any;
  breakpointL: any;
  breakpointM: any;
  backgroundDesign: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  maxContainerColsChanged(newValue?: any): any;
  minWidthChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  labelMinWidthChanged(newValue?: any): any;
  layoutChanged(newValue?: any): any;
  labelSpanXLChanged(newValue?: any): any;
  labelSpanLChanged(newValue?: any): any;
  labelSpanMChanged(newValue?: any): any;
  labelSpanSChanged(newValue?: any): any;
  adjustLabelSpanChanged(newValue?: any): any;
  emptySpanXLChanged(newValue?: any): any;
  emptySpanLChanged(newValue?: any): any;
  emptySpanMChanged(newValue?: any): any;
  emptySpanSChanged(newValue?: any): any;
  columnsXLChanged(newValue?: any): any;
  columnsLChanged(newValue?: any): any;
  columnsMChanged(newValue?: any): any;
  singleContainerFullSizeChanged(newValue?: any): any;
  breakpointXLChanged(newValue?: any): any;
  breakpointLChanged(newValue?: any): any;
  breakpointMChanged(newValue?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SplitContainer extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  defaultTransitionNameDetail: any;
  defaultTransitionNameMaster: any;
  mode: any;
  masterButtonText: any;
  masterButtonTooltip: any;
  backgroundColor: any;
  backgroundImage: any;
  backgroundRepeat: any;
  backgroundOpacity: any;
  masterNavigate: any;
  afterMasterNavigate: any;
  masterButton: any;
  beforeMasterOpen: any;
  afterMasterOpen: any;
  beforeMasterClose: any;
  afterMasterClose: any;
  detailNavigate: any;
  afterDetailNavigate: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  defaultTransitionNameDetailChanged(newValue?: any): any;
  defaultTransitionNameMasterChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  masterButtonTextChanged(newValue?: any): any;
  masterButtonTooltipChanged(newValue?: any): any;
  backgroundColorChanged(newValue?: any): any;
  backgroundImageChanged(newValue?: any): any;
  backgroundRepeatChanged(newValue?: any): any;
  backgroundOpacityChanged(newValue?: any): any;
  masterNavigateChanged(newValue?: any): any;
  afterMasterNavigateChanged(newValue?: any): any;
  masterButtonChanged(newValue?: any): any;
  beforeMasterOpenChanged(newValue?: any): any;
  afterMasterOpenChanged(newValue?: any): any;
  beforeMasterCloseChanged(newValue?: any): any;
  afterMasterCloseChanged(newValue?: any): any;
  detailNavigateChanged(newValue?: any): any;
  afterDetailNavigateChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5FormElement extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  visible: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  visibleChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SplitPane extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  demandPane: any;
  requiredParentWidth: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  demandPaneChanged(newValue?: any): any;
  requiredParentWidthChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Splitter extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  orientation: any;
  width: any;
  height: any;
  resize: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  orientationChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  resizeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5StandardTile extends Ui5Tile {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  info: any;
  icon: any;
  activeIcon: any;
  number: any;
  numberUnit: any;
  infoState: any;
  type: any;
  iconDensityAware: any;
  removable: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  infoChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  activeIconChanged(newValue?: any): any;
  numberChanged(newValue?: any): any;
  numberUnitChanged(newValue?: any): any;
  infoStateChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  iconDensityAwareChanged(newValue?: any): any;
  removableChanged(newValue?: any): any;
  
  /* inherited from sap.m.Tile*/
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5SuggestionItem extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  icon: any;
  description: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  iconChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Switch extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  state: any;
  customTextOn: any;
  customTextOff: any;
  enabled: any;
  name: any;
  type: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  stateChanged(newValue?: any): any;
  customTextOnChanged(newValue?: any): any;
  customTextOffChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5StandardListItem extends Ui5ListItemBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  description: any;
  icon: any;
  iconInset: any;
  iconDensityAware: any;
  activeIcon: any;
  info: any;
  infoState: any;
  adaptTitleSize: any;
  titleTextDirection: any;
  infoTextDirection: any;
  type: any;
  visible: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  press: any;
  detailPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  iconInsetChanged(newValue?: any): any;
  iconDensityAwareChanged(newValue?: any): any;
  activeIconChanged(newValue?: any): any;
  infoChanged(newValue?: any): any;
  infoStateChanged(newValue?: any): any;
  adaptTitleSizeChanged(newValue?: any): any;
  titleTextDirectionChanged(newValue?: any): any;
  infoTextDirectionChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  unreadChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  highlightChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListItemBase*/
  pressChanged(newValue?: any): any;
  detailPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TabContainer extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  showAddNewButton: any;
  itemClose: any;
  itemSelect: any;
  addNewButtonPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  showAddNewButtonChanged(newValue?: any): any;
  itemCloseChanged(newValue?: any): any;
  itemSelectChanged(newValue?: any): any;
  addNewButtonPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TabContainerItem extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  name: any;
  key: any;
  modified: any;
  itemPropertyChanged: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  nameChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  modifiedChanged(newValue?: any): any;
  itemPropertyChangedChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5StandardTreeItem extends Ui5TreeItemBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  icon: any;
  type: any;
  visible: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  press: any;
  detailPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  
  /* inherited from sap.m.TreeItemBase*/
  typeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  unreadChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  highlightChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListItemBase*/
  pressChanged(newValue?: any): any;
  detailPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Table extends Ui5ListBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  backgroundDesign: any;
  fixedLayout: any;
  showOverlay: any;
  alternateRowColors: any;
  popinLayout: any;
  sticky: any;
  beforeOpenContextMenu: any;
  inset: any;
  headerText: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparators: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  selectionChange: any;
  delete: any;
  swipe: any;
  updateStarted: any;
  updateFinished: any;
  itemPress: any;
  beforeOpenContextMenu: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  fixedLayoutChanged(newValue?: any): any;
  showOverlayChanged(newValue?: any): any;
  alternateRowColorsChanged(newValue?: any): any;
  popinLayoutChanged(newValue?: any): any;
  stickyChanged(newValue?: any): any;
  beforeOpenContextMenuChanged(newValue?: any): any;
  insetChanged(newValue?: any): any;
  headerTextChanged(newValue?: any): any;
  footerTextChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  includeItemInSelectionChanged(newValue?: any): any;
  showUnreadChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  showNoDataChanged(newValue?: any): any;
  enableBusyIndicatorChanged(newValue?: any): any;
  modeAnimationOnChanged(newValue?: any): any;
  showSeparatorsChanged(newValue?: any): any;
  swipeDirectionChanged(newValue?: any): any;
  growingChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  growingTriggerTextChanged(newValue?: any): any;
  growingScrollToLoadChanged(newValue?: any): any;
  growingDirectionChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
  keyboardModeChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListBase*/
  selectionChangeChanged(newValue?: any): any;
  deleteChanged(newValue?: any): any;
  swipeChanged(newValue?: any): any;
  updateStartedChanged(newValue?: any): any;
  updateFinishedChanged(newValue?: any): any;
  itemPressChanged(newValue?: any): any;
  beforeOpenContextMenuChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Text extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  textDirection: any;
  wrapping: any;
  textAlign: any;
  width: any;
  maxLines: any;
  renderWhitespace: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  wrappingChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  maxLinesChanged(newValue?: any): any;
  renderWhitespaceChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TextArea extends Ui5InputBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  rows: any;
  cols: any;
  height: any;
  maxLength: any;
  showExceededText: any;
  wrapping: any;
  valueLiveUpdate: any;
  growing: any;
  growingMaxLines: any;
  liveChange: any;
  value: any;
  width: any;
  enabled: any;
  valueState: any;
  name: any;
  placeholder: any;
  editable: any;
  valueStateText: any;
  showValueStateMessage: any;
  textAlign: any;
  textDirection: any;
  required: any;
  change: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  rowsChanged(newValue?: any): any;
  colsChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  maxLengthChanged(newValue?: any): any;
  showExceededTextChanged(newValue?: any): any;
  wrappingChanged(newValue?: any): any;
  valueLiveUpdateChanged(newValue?: any): any;
  growingChanged(newValue?: any): any;
  growingMaxLinesChanged(newValue?: any): any;
  liveChangeChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  valueStateTextChanged(newValue?: any): any;
  showValueStateMessageChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  
  /* inherited from sap.m.InputBase*/
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TableSelectDialog extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  noDataText: any;
  multiSelect: any;
  growingThreshold: any;
  contentWidth: any;
  rememberSelections: any;
  contentHeight: any;
  confirm: any;
  search: any;
  liveChange: any;
  cancel: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  multiSelectChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  confirmChanged(newValue?: any): any;
  searchChanged(newValue?: any): any;
  liveChangeChanged(newValue?: any): any;
  cancelChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Tile extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  removable: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removableChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TileContainer extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  height: any;
  editable: any;
  allowAdd: any;
  tileMove: any;
  tileDelete: any;
  tileAdd: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  allowAddChanged(newValue?: any): any;
  tileMoveChanged(newValue?: any): any;
  tileDeleteChanged(newValue?: any): any;
  tileAddChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TileContent extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  footer: any;
  footerColor: any;
  unit: any;
  disabled: any;
  frameType: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  footerChanged(newValue?: any): any;
  footerColorChanged(newValue?: any): any;
  unitChanged(newValue?: any): any;
  disabledChanged(newValue?: any): any;
  frameTypeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Title extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  text: any;
  icon: any;
  level: any;
  emphasized: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  textChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  levelChanged(newValue?: any): any;
  emphasizedChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ToggleButton extends Ui5Button {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  pressed: any;
  text: any;
  type: any;
  width: any;
  enabled: any;
  icon: any;
  iconFirst: any;
  activeIcon: any;
  iconDensityAware: any;
  textDirection: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  pressedChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  iconFirstChanged(newValue?: any): any;
  activeIconChanged(newValue?: any): any;
  iconDensityAwareChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  
  /* inherited from sap.m.Button*/
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ToastService {
  show(message?: any, displayLength?: any): any;
}
export declare class Ui5Toolbar extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  active: any;
  enabled: any;
  height: any;
  design: any;
  style: any;
  press: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  activeChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  designChanged(newValue?: any): any;
  styleChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ToolbarSpacer extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Tree extends Ui5ListBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  toggleOpenState: any;
  inset: any;
  headerText: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparators: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  selectionChange: any;
  delete: any;
  swipe: any;
  updateStarted: any;
  updateFinished: any;
  itemPress: any;
  beforeOpenContextMenu: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  toggleOpenStateChanged(newValue?: any): any;
  insetChanged(newValue?: any): any;
  headerTextChanged(newValue?: any): any;
  footerTextChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  includeItemInSelectionChanged(newValue?: any): any;
  showUnreadChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  showNoDataChanged(newValue?: any): any;
  enableBusyIndicatorChanged(newValue?: any): any;
  modeAnimationOnChanged(newValue?: any): any;
  showSeparatorsChanged(newValue?: any): any;
  swipeDirectionChanged(newValue?: any): any;
  growingChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  growingTriggerTextChanged(newValue?: any): any;
  growingScrollToLoadChanged(newValue?: any): any;
  growingDirectionChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
  keyboardModeChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListBase*/
  selectionChangeChanged(newValue?: any): any;
  deleteChanged(newValue?: any): any;
  swipeChanged(newValue?: any): any;
  updateStartedChanged(newValue?: any): any;
  updateFinishedChanged(newValue?: any): any;
  itemPressChanged(newValue?: any): any;
  beforeOpenContextMenuChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5TreeItemBase extends Ui5ListItemBase {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  type: any;
  visible: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  press: any;
  detailPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  typeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  unreadChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  counterChanged(newValue?: any): any;
  highlightChanged(newValue?: any): any;
  
  /* inherited from sap.m.ListItemBase*/
  pressChanged(newValue?: any): any;
  detailPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5UploadCollection extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  fileType: any;
  maximumFilenameLength: any;
  maximumFileSize: any;
  mimeType: any;
  multiple: any;
  noDataText: any;
  noDataDescription: any;
  sameFilenameAllowed: any;
  showSeparators: any;
  uploadEnabled: any;
  uploadUrl: any;
  instantUpload: any;
  numberOfAttachmentsText: any;
  mode: any;
  uploadButtonInvisible: any;
  terminationEnabled: any;
  change: any;
  fileDeleted: any;
  filenameLengthExceed: any;
  fileRenamed: any;
  fileSizeExceed: any;
  typeMissmatch: any;
  uploadComplete: any;
  uploadTerminated: any;
  beforeUploadStarts: any;
  selectionChange: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  fileTypeChanged(newValue?: any): any;
  maximumFilenameLengthChanged(newValue?: any): any;
  maximumFileSizeChanged(newValue?: any): any;
  mimeTypeChanged(newValue?: any): any;
  multipleChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  noDataDescriptionChanged(newValue?: any): any;
  sameFilenameAllowedChanged(newValue?: any): any;
  showSeparatorsChanged(newValue?: any): any;
  uploadEnabledChanged(newValue?: any): any;
  uploadUrlChanged(newValue?: any): any;
  instantUploadChanged(newValue?: any): any;
  numberOfAttachmentsTextChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  uploadButtonInvisibleChanged(newValue?: any): any;
  terminationEnabledChanged(newValue?: any): any;
  changeChanged(newValue?: any): any;
  fileDeletedChanged(newValue?: any): any;
  filenameLengthExceedChanged(newValue?: any): any;
  fileRenamedChanged(newValue?: any): any;
  fileSizeExceedChanged(newValue?: any): any;
  typeMissmatchChanged(newValue?: any): any;
  uploadCompleteChanged(newValue?: any): any;
  uploadTerminatedChanged(newValue?: any): any;
  beforeUploadStartsChanged(newValue?: any): any;
  selectionChangeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5UploadCollectionItem extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  documentId: any;
  fileName: any;
  mimeType: any;
  thumbnailUrl: any;
  url: any;
  enableEdit: any;
  enableDelete: any;
  visibleEdit: any;
  visibleDelete: any;
  ariaLabelForPicture: any;
  selected: any;
  press: any;
  deletePress: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  documentIdChanged(newValue?: any): any;
  fileNameChanged(newValue?: any): any;
  mimeTypeChanged(newValue?: any): any;
  thumbnailUrlChanged(newValue?: any): any;
  urlChanged(newValue?: any): any;
  enableEditChanged(newValue?: any): any;
  enableDeleteChanged(newValue?: any): any;
  visibleEditChanged(newValue?: any): any;
  visibleDeleteChanged(newValue?: any): any;
  ariaLabelForPictureChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  deletePressChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5DynamicPage extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  preserveHeaderStateOnScroll: any;
  headerExpanded: any;
  toggleHeaderOnTitleClick: any;
  showFooter: any;
  fitContent: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  preserveHeaderStateOnScrollChanged(newValue?: any): any;
  headerExpandedChanged(newValue?: any): any;
  toggleHeaderOnTitleClickChanged(newValue?: any): any;
  showFooterChanged(newValue?: any): any;
  fitContentChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5UploadCollectionParameter extends Ui5Element {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  name: any;
  value: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  nameChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ViewSettingsFilterItem extends Ui5ViewSettingsItem {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  multiSelect: any;
  filterDetailItemsAggregationChange: any;
  selected: any;
  itemPropertyChanged: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  multiSelectChanged(newValue?: any): any;
  filterDetailItemsAggregationChangeChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  
  /* inherited from sap.m.ViewSettingsItem*/
  itemPropertyChangedChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ViewSettingsItem extends Ui5Item {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  selected: any;
  itemPropertyChanged: any;
  text: any;
  enabled: any;
  textDirection: any;
  key: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  selectedChanged(newValue?: any): any;
  itemPropertyChangedChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Item*/
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Wizard extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  height: any;
  showNextButton: any;
  finishButtonText: any;
  enableBranching: any;
  lastStep: any;
  stepActivate: any;
  complete: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  showNextButtonChanged(newValue?: any): any;
  finishButtonTextChanged(newValue?: any): any;
  enableBranchingChanged(newValue?: any): any;
  stepActivateChanged(newValue?: any): any;
  completeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5WizardStep extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  icon: any;
  validated: any;
  optional: any;
  complete: any;
  activate: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  validatedChanged(newValue?: any): any;
  optionalChanged(newValue?: any): any;
  completeChanged(newValue?: any): any;
  activateChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5ViewSettingsDialog extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  sortDescending: any;
  groupDescending: any;
  filterSearchOperator: any;
  confirm: any;
  cancel: any;
  resetFilters: any;
  filterDetailPageOpened: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  sortDescendingChanged(newValue?: any): any;
  groupDescendingChanged(newValue?: any): any;
  filterSearchOperatorChanged(newValue?: any): any;
  confirmChanged(newValue?: any): any;
  cancelChanged(newValue?: any): any;
  resetFiltersChanged(newValue?: any): any;
  filterDetailPageOpenedChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5Page extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  title: any;
  titleLevel: any;
  showNavButton: any;
  showHeader: any;
  showSubHeader: any;
  navButtonTooltip: any;
  enableScrolling: any;
  backgroundDesign: any;
  showFooter: any;
  contentOnlyBusy: any;
  floatingFooter: any;
  navButtonPress: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  titleChanged(newValue?: any): any;
  titleLevelChanged(newValue?: any): any;
  showNavButtonChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  showSubHeaderChanged(newValue?: any): any;
  navButtonTooltipChanged(newValue?: any): any;
  enableScrollingChanged(newValue?: any): any;
  backgroundDesignChanged(newValue?: any): any;
  showFooterChanged(newValue?: any): any;
  contentOnlyBusyChanged(newValue?: any): any;
  floatingFooterChanged(newValue?: any): any;
  navButtonPressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}
export declare class Ui5VerticalLayout extends Ui5Control {
  ui5Id: any;
  ui5Class: any;
  ui5Tooltip: any;
  prevId: any;
  width: any;
  enabled: any;
  busy: any;
  busyIndicatorDelay: any;
  busyIndicatorSize: any;
  visible: any;
  fieldGroupIds: any;
  validateFieldGroup: any;
  validationSuccess: any;
  validationError: any;
  parseError: any;
  formatError: any;
  modelContextChange: any;
  
  /* inherited from sap.ui.base.EventProvider*/
  /* inherited from sap.ui.base.Object*/
  constructor(element?: any);
  UIElement: any;
  fillProperties(params?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
  busyIndicatorSizeChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  fieldGroupIdsChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Control*/
  validateFieldGroupChanged(newValue?: any): any;
  
  /* inherited from sap.ui.core.Element*/
  /* inherited from sap.ui.base.ManagedObject*/
  validationSuccessChanged(newValue?: any): any;
  validationErrorChanged(newValue?: any): any;
  parseErrorChanged(newValue?: any): any;
  formatErrorChanged(newValue?: any): any;
  modelContextChangeChanged(newValue?: any): any;
}