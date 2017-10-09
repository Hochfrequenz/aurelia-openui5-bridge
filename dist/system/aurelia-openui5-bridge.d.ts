import {
  PLATFORM
} from 'aurelia-pal';
import {
  bindable,
  customElement,
  noView,
  customAttribute,
  inlineView
} from 'aurelia-templating';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  bindingMode
} from 'aurelia-binding';
import {
  TaskQueue,
  computedFrom,
  Animator
} from 'aurelia-framework';
import {
  Router
} from 'aurelia-router';
import {
  getLogger
} from 'aurelia-logging';
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
  
  /**
    * Don't globalize any resources
    * Allows you to import yourself via <require></require>
    */
  withoutGlobalResources(): ConfigBuilder;
}
export declare function configure(aurelia?: any, configCallback?: any): any;
export declare class Ui5ActionSheet {
  ui5Id: any;
  placement: any;
  title: any;
  showCancelButton: any;
  cancelButtonText: any;
  beforeOpen: any;
  afterOpen: any;
  beforeClose: any;
  afterClose: any;
  cancelButtonTap: any;
  cancelButtonPress: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  placementChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  showCancelButtonChanged(newValue?: any): any;
  cancelButtonTextChanged(newValue?: any): any;
}
export declare class Ui5Bar {
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
}
export declare class Ui5BreadCrumbs {
  ui5Id: any;
  currentLocationText: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
}
export declare class MdBox {
  caption: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class Ui5Column {
  ui5Id: any;
  width: any;
  hAlign: any;
  vAlign: any;
  styleClass: any;
  visible: any;
  minScreenWidth: any;
  demandPopin: any;
  popinHAlign: any;
  popinDisplay: any;
  mergeDuplicates: any;
  mergeFunctionName: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any): any;
  widthChanged(newValue?: any): any;
  hAlignChanged(newValue?: any): any;
  vAlignChanged(newValue?: any): any;
  styleClassChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  minScreenWidthChanged(newValue?: any): any;
  demandPopinChanged(newValue?: any): any;
  popinDisplayChanged(newValue?: any): any;
  popinHAlignChanged(newValue?: any): any;
  mergeDuplicatesChanged(newValue?: any): any;
  mergeFunctionNameChanged(newValue?: any): any;
}
export declare class Ui5ColumnListItem {
  vAlign: any;
  selected: any;
  constructor(element?: any);
  UIElement: any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  bind(bindingContext?: any, overrideContext?: any): any;
  unbind(): any;
  addChild(child?: any, elem?: any): any;
  vAlignChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
}
export declare class Ui5Container {
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class Ui5Control extends Ui5Element {
  
  /*  as bindables are not inheritable (see https://github.com/aurelia/framework/issues/210  we will have to define the following
      properties as bindable on all subclasses*/
  busy: any;
  constructor(elem?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  fillProperties(propertyObject?: any): any;
  busyChanged(newValue?: any): any;
  bind(param?: any): any;
  unbind(): any;
}
export declare class Ui5DatePicker extends Ui5InputBase {
  ui5Id: any;
  includeTime: any;
  displayFormat: any;
  valueFormat: any;
  dateValue: any;
  displayFormatType: any;
  secondaryCalendarType: any;
  minDate: any;
  maxDate: any;
  specialDates: any;
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
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  displayFormatChanged(newValue?: any): any;
  valueFormatChanged(newValue?: any): any;
  dateValueChanged(newValue?: any): any;
  displayFormatTypeChanged(newValue?: any): any;
  secondaryCalendarTypeChanged(newValue?: any): any;
  minDateChanged(newValue?: any): any;
  specialDatesChanged(newValue?: any): any;
}
export declare class Ui5Dialog {
  ui5Id: any;
  icon: any;
  title: any;
  showHeader: any;
  type: any;
  state: any;
  stretchOnPhone: any;
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
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  iconChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  stateChanged(newValue?: any): any;
  stretchOnPhoneChanged(newValue?: any): any;
  stretchChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  horizontalScrollingChanged(newValue?: any): any;
  verticalScrollingChanged(newValue?: any): any;
  resizableChanged(newValue?: any): any;
  draggableChanged(newValue?: any): any;
  escapeHandlerChanged(newValue?: any): any;
}
export declare class Ui5DynamicPage {
  preserveHeaderStateOnScroll: any;
  headerExpanded: any;
  toggleHeaderOnTitleClick: any;
  showFooter: any;
  fitContent: any;
  constructor(element?: any, queue?: any);
  defaultFunc(): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  showFooterChanged(newValue?: any): any;
  preserveHeaderStateOnScrollChanged(newValue?: any): any;
  headerExpandedChanged(newValue?: any): any;
  toggleHeaderOnTitleClickChanged(newValue?: any): any;
  fitContentChanged(newValue?: any): any;
}
export declare class Ui5Button {
  disabled: any;
  floating: any;
  large: any;
  text: any;
  press: any;
  icon: any;
  type: any;
  visible: any;
  tooltip: any;
  constructor(element?: any);
  attached(): any;
  defaultPress(): any;
  detached(): any;
  typeChanged(newValue?: any): any;
  disabledChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  tooltipChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
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
export declare function ui5Initialize(): any;
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
export declare class Ui5DynamicPageTitle {
  constructor(element?: any);
  defaultFunc(): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
}
export declare class Ui5Element {
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  getCustomData(key?: any): any;
  addCustomData(key?: any, value?: any): any;
  removeCustomData(): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  bind(param?: any): any;
  unbind(): any;
}
export declare class Ui5FeedContent {
  value: any;
  contentText: any;
  subheader: any;
  valueColor: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  valueChanged(newValue?: any): any;
  valueColorChanged(newValue?: any): any;
  contentTextChanged(newValue?: any): any;
  subheaderChanged(newValue?: any): any;
}
export declare class Ui5FileUploader {
  fileType: any;
  maximumFilenameLength: any;
  maximumFileSize: any;
  mimeType: any;
  multiple: any;
  value: any;
  name: any;
  sameFilenameAllowed: any;
  showSeperators: any;
  uploadOnChange: any;
  uploadUrl: any;
  enabled: any;
  width: any;
  valueState: any;
  buttonOnly: any;
  useMultipart: any;
  buttonText: any;
  sendXHR: any;
  placeholder: any;
  style: any;
  icon: any;
  iconHovered: any;
  iconSelected: any;
  iconFirst: any;
  iconOnly: any;
  change: any;
  filenameLengthExceeded: any;
  fileSizeExceeded: any;
  fileAllowed: any;
  uploadComplete: any;
  uploadAborted: any;
  uploadStart: any;
  uploadProgress: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  fileTypeChanged(newValue?: any): any;
  maximumFilenameLengthChanged(newValue?: any): any;
  mimeTypeChanged(newValue?: any): any;
  multipleChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  sameFilenameAllowedChanged(newValue?: any): any;
  showSeperatorsChanged(newValue?: any): any;
  uploadOnChangeChanged(newValue?: any): any;
  uploadUrlChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  valueStateChanged(newValue?: any): any;
  buttonOnlyChanged(newValue?: any): any;
  useMultipartChanged(newValue?: any): any;
}
export declare class Ui5Form {
  ui5Id: any;
  width: any;
  editable: any;
  title: any;
  constructor(element?: any);
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  attached(): any;
  removeChildByRelation(child?: any, relation?: any): any;
  detached(): any;
  editableChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
}
export declare class Ui5FormContainer {
  ui5Id: any;
  title: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  titleChanged(newValue?: any): any;
}
export declare class Ui5FormElement {
  ui5Id: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
}
export declare class Ui5FormattedText extends Ui5Element {
  htmlText: any;
  width: any;
  height: any;
  convertLinksToAnchorTags: any;
  convertedLinksDefaultTarget: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  UIElement: any;
  attached(): any;
  htmlTextChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  convertedLinksDefaultTargetChanged(newValue?: any): any;
  convertLinksToAnchorTagsChanged(newValue?: any): any;
}
export declare class Ui5GenericTile {
  mode: any;
  header: any;
  subheader: any;
  press: any;
  frameType: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  defaultPress(): any;
  attached(): any;
  detached(): any;
  headerChanged(newValue?: any): any;
  subheaderChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  frameTypeChanged(newValue?: any): any;
}
export declare class Ui5Grid {
  defaultSpan: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  defaultPress(): any;
  attached(): any;
  detached(): any;
  defaultSpanChanged(newValue?: any): any;
}
export declare class Ui5GridData {
  id: any;
  span: any;
  indent: any;
  constructor(element?: any);
  attached(): any;
  indentChanged(newValue?: any): any;
  spanChanged(newValue?: any): any;
}
export declare class Ui5Html {
  constructor(element?: any);
  attached(): any;
}
export declare class Ui5Icon {
  ui5Id: any;
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
  defaultFunc(): any;
  constructor(element?: any);
  UIElement: any;
  attached(): any;
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
}
export declare class Ui5IconTabBar {
  showSelection: any;
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
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  showSelectionChanged(newValue?: any): any;
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
}
export declare class Ui5IconTabFilter {
  text: any;
  tabKey: any;
  design: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any, afterElement?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  tabKeyChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  designChanged(newValue?: any): any;
}
export declare class Ui5ImageContent {
  src: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  srcChanged(newValue?: any): any;
}
export declare class Ui5DynamicPageHeader {
  pinnable: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  defaultPress(): any;
  attached(): any;
  detached(): any;
  pinnableChanged(newValue?: any): any;
}
export declare class Ui5Item {
  key: any;
  enabled: any;
  text: any;
  textDirection: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  addChild(child?: any, elem?: any): any;
  fillProperties(propertyObject?: any): any;
  keyChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
}
export declare class Ui5InputBase extends Ui5Control {
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
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
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
}
export declare class Ui5Label {
  ui5Id: any;
  labelFor: any;
  text: any;
  required: any;
  textAlign: any;
  textDirection: any;
  tooltip: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  textChanged(newValue?: any): any;
  labelForChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
  tooltipChanged(newValue?: any): any;
}
export declare class Ui5Link {
  enabled: any;
  subtle: any;
  emphasized: any;
  text: any;
  press: any;
  target: any;
  href: any;
  constructor(element?: any);
  attached(): any;
  defaultPress(): any;
  detached(): any;
  hrefChanged(newValue?: any): any;
  typeChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  targetChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
}
export declare class Ui5ListBase extends Ui5Control {
  inset: any;
  headerText: any;
  headerDesign: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparator: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  delete: any;
  itemPress: any;
  selectionChange: any;
  swipe: any;
  updateFinished: any;
  updateStarted: any;
  defaultFunc(): any;
  constructor(elem?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  fillProperties(propertyObject?: any): any;
  busyChanged(newValue?: any): any;
}
export declare class Ui5Input extends Ui5InputBase {
  ui5Id: any;
  type: any;
  maxLength: any;
  dateFormat: any;
  showValueHelp: any;
  showSuggestion: any;
  valueHelpOnly: any;
  filterSuggests: any;
  maxSuggestionWidth: any;
  showTableSuggestionValueHelp: any;
  description: any;
  fieldWidth: any;
  valueLiveUpdate: any;
  selectedKey: any;
  textFormatMode: any;
  textFormatter: any;
  suggestionRowValidator: any;
  suggestionItems: any;
  suggestionColumns: any;
  suggestionRows: any;
  selectedItem: any;
  selectedRow: any;
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
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  typeChanged(newValue?: any): any;
  maxLengthChanged(newValue?: any): any;
  dateFormatChanged(newValue?: any): any;
  showValueHelpChanged(newValue?: any): any;
  showSuggestionChanged(newValue?: any): any;
  valueHelpOnlyChanged(newValue?: any): any;
  filterSuggestsChanged(newValue?: any): any;
  maxSuggestionWidthChanged(newValue?: any): any;
  showTableSuggestionValueHelpChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  fieldWidthChanged(newValue?: any): any;
  valueLiveUpdateChanged(newValue?: any): any;
  selectedKeyChanged(newValue?: any): any;
  textFormatModeChanged(newValue?: any): any;
  textFormatterChanged(newValue?: any): any;
  suggestionRowValidatorChanged(newValue?: any): any;
  suggestionItemsChanged(newValue?: any): any;
  suggestionColumnsChanged(newValue?: any): any;
  suggestionRowsChanged(newValue?: any): any;
  selectedItemChanged(newValue?: any): any;
  selectedRowChanged(newValue?: any): any;
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
  changeChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
}
export declare class Ui5ListItem {
  icon: any;
  additionalText: any;
  key: any;
  enabled: any;
  text: any;
  textDirection: any;
  
  /* inherited from list item*/
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any): any;
  iconChanged(newValue?: any): any;
  additionalTextChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
}
export declare class Ui5ListItemBase extends Ui5Control {
  visible: any;
  type: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  tap: any;
  detailTap: any;
  press: any;
  detailPress: any;
  
  /*inherited from control*/
  defaultFunc(): any;
  constructor(elem?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  fillProperties(propertyObject?: any): any;
  busyChanged(newValue?: any): any;
  bind(param?: any): any;
  unbind(): any;
}
export declare class Ui5MTitle {
  ui5Id: any;
  text: any;
  level: any;
  titleStyle: any;
  constructor(element?: any);
  attached(): any;
  textChanged(newValue?: any): any;
  levelChanged(newValue?: any): any;
  titleStyleChanged(newValue?: any): any;
}
export declare class Ui5MessageStrip {
  ui5Id: any;
  text: any;
  wrapping: any;
  textAlign: any;
  maxLines: any;
  constructor(element?: any);
  attached(): any;
  textChanged(newValue?: any): any;
}
export declare class Ui5NumericContent {
  icon: any;
  value: any;
  indicator: any;
  scale: any;
  valueColor: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  iconChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
  indicatorChanged(newValue?: any): any;
  scaleChanged(newValue?: any): any;
  valueColorChanged(newValue?: any): any;
}
export declare class Ui5ObjectIdentifier {
  ui5Id: any;
  text: any;
  title: any;
  visible: any;
  titleActive: any;
  textDirection: any;
  titlePress: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  textChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  titleActiveChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
}
export declare class Ui5ObjectNumber {
  ui5Id: any;
  number: any;
  numberUnit: any;
  emphasized: any;
  state: any;
  unit: any;
  textDirection: any;
  textAlign: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  numberChanged(newValue?: any): any;
  numberUnitChanged(newValue?: any): any;
  emphasizedChanged(newValue?: any): any;
  stateChanged(newValue?: any): any;
  unitChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
}
export declare class Ui5Page {
  title: any;
  busy: any;
  busyIndicatorDelay: any;
  showHeader: any;
  showFooter: any;
  showNavButton: any;
  navButtonPress: any;
  constructor(element?: any);
  defaultFunc(): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  showFooterChanged(newValue?: any): any;
  showNavButtonChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
  busyIndicatorDelayChanged(newValue?: any): any;
}
export declare class Ui5ResponsiveGridLayout {
  ui5Id: any;
  labelSpanXL: any;
  labelSpanL: any;
  labelSpanM: any;
  labelSpanS: any;
  adjustLabelSpan: any;
  emptySpanXL: any;
  emptySpanL: any;
  emptySpanM: any;
  emptySpanS: any;
  singleContainerFullSize: any;
  breakpointXL: any;
  breakpointL: any;
  breakpointM: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
}
export declare class Ui5ResponsivePopover {
  ui5Id: any;
  placement: any;
  icon: any;
  title: any;
  offsetX: any;
  offsetY: any;
  showArrow: any;
  showHeader: any;
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
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  placementChanged(newValue?: any): any;
  offsetXChanged(newValue?: any): any;
  offsetYChanged(newValue?: any): any;
  showArrayChanged(newValue?: any): any;
  showCloseButtonChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  horizontalScrollingChanged(newValue?: any): any;
  verticalScrollingChanged(newValue?: any): any;
  resizableChanged(newValue?: any): any;
}
export declare class Ui5SearchField extends Ui5Control {
  value: any;
  width: any;
  enabled: any;
  visible: any;
  maxLength: any;
  placeholder: any;
  showMagnifier: any;
  showRefreshButton: any;
  refreshButtonTooltip: any;
  showSearchButton: any;
  enableSuggestions: any;
  selectOnFocus: any;
  liveChange: any;
  suggest: any;
  search: any;
  addChild(child?: any, elem?: any): any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  valueChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  maxLengthChanged(newValue?: any): any;
  placeholderChanged(newValue?: any): any;
  showMagnifierChanged(newValue?: any): any;
  showRefreshButtonChanged(newValue?: any): any;
  refreshButtonTooltipChanged(newValue?: any): any;
  showSearchButtonChanged(newValue?: any): any;
  enableSuggestionsChanged(newValue?: any): any;
  selectOnFocusChanged(newValue?: any): any;
}
export declare class Ui5SegmentedButton {
  enabled: any;
  width: any;
  selectedKey: any;
  select: any;
  defaultFunc(): any;
  constructor(element?: any);
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  enableChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  selectedKeyChanged(newValue?: any): any;
}
export declare class Ui5SegmentedButtonItem extends Ui5Item {
  icon: any;
  visible: any;
  width: any;
  press: any;
  key: any;
  enabled: any;
  text: any;
  textDirection: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  iconChanged(newValue?: any): any;
  visibleChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
}
export declare class Ui5Select {
  ui5Id: any;
  name: any;
  width: any;
  maxWidth: any;
  enabled: any;
  selectedKey: any;
  selectedItemId: any;
  icon: any;
  type: any;
  autoAdjustWidth: any;
  valueState: any;
  valueStateText: any;
  showSecondaryValues: any;
  forceSelection: any;
  items: any;
  selectedItem: any;
  change: any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
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
}
export declare class Ui5SelectDialog {
  ui5Id: any;
  title: any;
  contentHeight: any;
  noDataText: any;
  multiSelect: any;
  growingThreshold: any;
  contentWidth: any;
  rememberSelections: any;
  confirm: any;
  search: any;
  liveChange: any;
  cancel: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  multiSelectChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
}
export declare class Ui5List extends Ui5ListBase {
  backgroundDesign: any;
  inset: any;
  headerText: any;
  headerDesign: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparator: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  delete: any;
  itemPress: any;
  selectionChange: any;
  swipe: any;
  updateFinished: any;
  updateStarted: any;
  busy: any;
  constructor(element?: any);
  UIElement: any;
  defaultFunc(): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  resetLimit(): any;
  attached(): any;
  detached(): any;
  backgroundDesignChanged(newValue?: any): any;
  selectionChangeChanged(newValue?: any): any;
}
export declare class Ui5SimpleForm {
  ui5Id: any;
  title: any;
  maxContainerCols: any;
  minWidth: any;
  width: any;
  editable: any;
  labelMinWidth: any;
  layout: any;
  backgroundDesign: any;
  labelSpanXL: any;
  labelSpanL: any;
  labelSpanM: any;
  labelSpanS: any;
  adjustLabelSpan: any;
  emptySpanXL: any;
  emptySpanL: any;
  emptySpanM: any;
  emptySpanS: any;
  singleContainerFullSize: any;
  breakpointXL: any;
  breakpointL: any;
  breakpointM: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
  titleChanged(newValue?: any): any;
  maxContainerColsChanged(newValue?: any): any;
  editableChanged(newValue?: any): any;
  minWidthChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  labelMinWidthChanged(newValue?: any): any;
  layoutChanged(newValue?: any): any;
  backgroundDesignChanged(newValue?: any): any;
}
export declare class Ui5SlideTile {
  displayTime: any;
  transitionTime: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  displayTimeChanged(newValue?: any): any;
  transitionTimeChanged(newValue?: any): any;
}
export declare class MdSlider {
  mdFillContainer: any;
  mdHeight: any;
  mdIndicators: any;
  mdInterval: any;
  mdTransition: any;
  constructor(element?: any);
  attached(): any;
  pause(): any;
  start(): any;
  next(): any;
  prev(): any;
  refresh(): any;
  mdIndicatorsChanged(): any;
}
export declare class Ui5SplitContainer {
  defaultTransitionNameDetail: any;
  defaultTransitionNameMaster: any;
  mode: any;
  masterButtonText: any;
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
  constructor(element?: any);
  defaultFunc(): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  defaultTransitionNameDetailChanged(newValue?: any): any;
  defaultTransitionNameMasterChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  masterButtonTextChanged(newValue?: any): any;
  backgroundColorChanged(newValue?: any): any;
  backgroundImageChanged(newValue?: any): any;
  backgroundOpacityChanged(newValue?: any): any;
  backgroundRepeatChanged(newValue?: any): any;
}
export declare class Ui5StandardListItem extends Ui5ListItemBase {
  title: any;
  icon: any;
  description: any;
  iconInset: any;
  iconDensityAware: any;
  activeIcon: any;
  info: any;
  infoState: any;
  adaptTitleSize: any;
  titleTextDirection: any;
  infoTextDirection: any;
  visible: any;
  type: any;
  unread: any;
  selected: any;
  counter: any;
  highlight: any;
  tap: any;
  detailTap: any;
  press: any;
  detailPress: any;
  UIElement: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  descriptionChanged(newValue?: any): any;
  iconInsetChanged(newValue?: any): any;
  iconDensityAwareChanged(newValue?: any): any;
  activeIconChanged(newValue?: any): any;
  infoChanged(newValue?: any): any;
  infoStateChanged(newValue?: any): any;
  adaptTitleSizeChanged(newValue?: any): any;
  titleTextDirectionChanged(newValue?: any): any;
  infoTextDirectionChanged(newValue?: any): any;
}
export declare class Ui5StandardTile extends Ui5Control {
  type: any;
  title: any;
  number: any;
  info: any;
  infoState: any;
  numberUnit: any;
  icon: any;
  press: any;
  busy: any;
  UIElement: any;
  constructor(element?: any);
  defaultPress(): any;
  attached(): any;
  detached(): any;
  typeChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
  numberChanged(newValue?: any): any;
  numberUnitChanged(newValue?: any): any;
  infoChanged(newValue?: any): any;
  infoStateChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
  busyChanged(newValue?: any): any;
}
export declare class MdSwitch {
  mdChecked: any;
  mdDisabled: any;
  mdLabelOff: any;
  mdLabelOn: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleChange(): any;
  blur(): any;
  mdCheckedChanged(newValue?: any): any;
  mdDisabledChanged(newValue?: any): any;
}
export declare class Ui5OverflowToolbar {
  width: any;
  active: any;
  enabled: any;
  height: any;
  design: any;
  press: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  activeChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  designChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
}
export declare class Ui5TabContainerItem {
  name: any;
  key: any;
  modified: any;
  itemPropertyChanged: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  keyChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  modifiedChanged(newValue?: any): any;
}
export declare class Ui5TabContainer {
  showAddNewButton: any;
  selectedItem: any;
  itemClose: any;
  itemSelect: any;
  addNewButtonPress: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  showAddNewButtonChanged(newValue?: any): any;
}
export declare class Ui5Table extends Ui5ListBase {
  showOverlay: any;
  fixedLayout: any;
  inset: any;
  headerText: any;
  headerDesign: any;
  footerText: any;
  mode: any;
  width: any;
  includeItemInSelection: any;
  showUnread: any;
  noDataText: any;
  showNoData: any;
  enableBusyIndicator: any;
  modeAnimationOn: any;
  showSeparator: any;
  swipeDirection: any;
  growing: any;
  growingThreshold: any;
  growingTriggerText: any;
  growingScrollToLoad: any;
  growingDirection: any;
  rememberSelections: any;
  keyboardMode: any;
  delete: any;
  itemPress: any;
  selectionChange: any;
  swipe: any;
  updateFinished: any;
  updateStarted: any;
  busy: any;
  constructor(element?: any);
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  resetLimit(): any;
  attached(): any;
  detached(): any;
  fixedLayoutChanged(newValue?: any): any;
  headerTextChanged(newValue?: any): any;
  showOverlayChanged(newValue?: any): any;
}
export declare class Ui5TableSelectDialog {
  ui5Id: any;
  title: any;
  contentHeight: any;
  noDataText: any;
  multiSelect: any;
  growingThreshold: any;
  contentWidth: any;
  rememberSelections: any;
  confirm: any;
  search: any;
  liveChange: any;
  cancel: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  contentHeightChanged(newValue?: any): any;
  contentWidthChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  multiSelectChanged(newValue?: any): any;
  growingThresholdChanged(newValue?: any): any;
  rememberSelectionsChanged(newValue?: any): any;
}
export declare class Ui5Text {
  ui5Id: any;
  text: any;
  wrapping: any;
  textAlign: any;
  maxLines: any;
  constructor(element?: any);
  UIElement: any;
  attached(): any;
  detached(): any;
  textChanged(newValue?: any): any;
}
export declare class Ui5TileContainer {
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
}
export declare class Ui5TileContent {
  footer: any;
  unit: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  footerChanged(newValue?: any): any;
  unitChanged(newValue?: any): any;
}
export declare class Ui5Title {
  text: any;
  icon: any;
  level: any;
  emphasized: any;
  constructor(element?: any);
  attached(): any;
  textChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  levelChanged(newValue?: any): any;
  emphasizedChanged(newValue?: any): any;
}
export declare class Ui5Shell {
  title: any;
  appWidthLimited: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  appWidthLimitedChanged(newValue?: any): any;
}
export declare class Ui5ToastService {
  show(message?: any, displayLength?: any): any;
}
export declare class Ui5Toolbar {
  width: any;
  active: any;
  enabled: any;
  height: any;
  design: any;
  press: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  widthChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  activeChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  designChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
}
export declare class Ui5ToolbarSpacer {
  width: any;
  constructor(element?: any);
  attached(): any;
  widthChanged(newValue?: any): any;
}
export declare class Ui5UploadCollectionItem {
  contributor: any;
  documentId: any;
  fileName: any;
  fileSize: any;
  enableEdit: any;
  mimeType: any;
  thumbnailUrl: any;
  enableDelete: any;
  uploadedDate: any;
  visibleEdit: any;
  url: any;
  visibleDelete: any;
  ariaLabelForPicture: any;
  selected: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  contributorChanged(newValue?: any): any;
  documentIdChanged(newValue?: any): any;
  fileSizeChanged(newValue?: any): any;
  mimeTypeChanged(newValue?: any): any;
  thumbnailUrlChanged(newValue?: any): any;
  enableDeleteChanged(newValue?: any): any;
  uploadedDateChanged(newValue?: any): any;
  visibleEditChanged(newValue?: any): any;
  urlChanged(newValue?: any): any;
  visibleDeleteChanged(newValue?: any): any;
  ariaLabelForPictureChanged(newValue?: any): any;
  selectedChanged(newValue?: any): any;
  terminationEnabledChanged(newValue?: any): any;
}
export declare class Ui5UploadCollectionParameter {
  name: any;
  value: any;
  constructor(element?: any);
  UIElement: any;
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  nameChanged(newValue?: any): any;
  valueChanged(newValue?: any): any;
}
export declare class MaterializeFormValidationRenderer {
  className: any;
  classNameFirst: any;
  render(instruction?: any): any;
  underlineInput(element?: any): any;
  add(element?: any, result?: any): any;
  remove(element?: any, result?: any): any;
  addMessage(element?: any, result?: any): any;
  removeMessage(element?: any, result?: any): any;
}
export declare class Ui5VerticalLayout {
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
}
export declare class Ui5ViewSettingsDialog {
  ui5Id: any;
  title: any;
  sortDescending: any;
  groupDescending: any;
  confirm: any;
  cancel: any;
  resetFilters: any;
  filterDetailPageOpened: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  sortDescendingChanged(newValue?: any): any;
  groupDescendingChanged(newValue?: any): any;
}
export declare class Ui5ViewSettingsFilterItem extends Ui5Item {
  multiSelect: any;
  selected: any;
  itemPropertyChanged: any;
  key: any;
  enabled: any;
  text: any;
  textDirection: any;
  
  /* inherited from list item*/
  constructor(element?: any);
  defaultFunc(): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  selectedChanged(newValue?: any): any;
  multiSelectChanged(newValue?: any): any;
}
export declare class Ui5ViewSettingsItem extends Ui5Item {
  selected: any;
  itemPropertyChanged: any;
  key: any;
  enabled: any;
  text: any;
  textDirection: any;
  
  /* inherited from list item*/
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  detached(): any;
  addChild(child?: any, elem?: any): any;
  selectedChanged(newValue?: any): any;
}
export declare class Ui5Wizard {
  width: any;
  height: any;
  showNextButton: any;
  finishButtonText: any;
  enableBranching: any;
  stepActivate: any;
  complete: any;
  lastStep: any;
  defaultFunc(): any;
  UIElement: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  widthChanged(newValue?: any): any;
  heightChanged(newValue?: any): any;
  showNextButtonChanged(newValue?: any): any;
  finishButtonTextChanged(newValue?: any): any;
  enableBranchingChanged(newValue?: any): any;
}
export declare class Ui5WizardStep {
  nextStep: any;
  subsequentSteps: any;
  title: any;
  icon: any;
  validated: any;
  complete: any;
  activate: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  defaultFunc(): any;
  attached(): any;
  detached(): any;
}
export declare class Ui5UploadCollection {
  fileType: any;
  maximumFilenameLength: any;
  maximumFileSize: any;
  mimeType: any;
  multiple: any;
  noDataText: any;
  noDataDescription: any;
  sameFilenameAllowed: any;
  showSeperators: any;
  uploadEnabled: any;
  uploadUrl: any;
  instantUpload: any;
  numberOfAttachmentsText: any;
  mode: any;
  uploadButtonVisible: any;
  terminationEnabled: any;
  change: any;
  fileDeleted: any;
  filenameLengthExceeded: any;
  fileRenamed: any;
  fileSizeExceeded: any;
  typeMismatch: any;
  uploadComplete: any;
  uploadTerminated: any;
  beforeUploadStarts: any;
  selectionChange: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChildByRelation(child?: any, relation?: any): any;
  attached(): any;
  detached(): any;
  fileTypeChanged(newValue?: any): any;
  maximumFilenameLengthChanged(newValue?: any): any;
  mimeTypeChanged(newValue?: any): any;
  multipleChanged(newValue?: any): any;
  noDataTextChanged(newValue?: any): any;
  noDataDescriptionChanged(newValue?: any): any;
  sameFilenameAllowedChanged(newValue?: any): any;
  showSeperatorsChanged(newValue?: any): any;
  uploadEnabledChanged(newValue?: any): any;
  uploadUrlChanged(newValue?: any): any;
  instantUploadChanged(newValue?: any): any;
  numberOfAttachmentsTextChanged(newValue?: any): any;
  modeChanged(newValue?: any): any;
  uploadButtonVisibleChanged(newValue?: any): any;
  terminationEnabledChanged(newValue?: any): any;
}