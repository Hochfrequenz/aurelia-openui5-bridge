import {
  PLATFORM
} from 'aurelia-pal';
import {
  bindable,
  customElement,
  noView,
  customAttribute,
  children,
  inlineView
} from 'aurelia-templating';
import {
  inject
} from 'aurelia-dependency-injection';
import {
  Router
} from 'aurelia-router';
import {
  bindingMode,
  observable,
  ObserverLocator
} from 'aurelia-binding';
import {
  TaskQueue
} from 'aurelia-task-queue';
import {
  getLogger
} from 'aurelia-logging';
import {
  EventAggregator
} from 'aurelia-event-aggregator';
export declare class ClickCounter {
  count: any;
  increment(): any;
}

/**
* Plugin configuration builder
*/
export declare class ConfigBuilder {
  useGlobalResources: boolean;
  useScrollfirePatch: boolean;
  globalResources: any;
  useAll(): ConfigBuilder;
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
  useTabs(): ConfigBuilder;
  
  /**
    * Don't globalize any resources
    * Allows you to import yourself via <require></require>
    */
  withoutGlobalResources(): ConfigBuilder;
  withScrollfirePatch(): ConfigBuilder;
}
export declare function configure(aurelia?: any, configCallback?: any): any;
export declare class Ui5Bar {
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
}

// taken from: https://github.com/heruan/aurelia-breadcrumbs
export declare class MdBreadcrumbs {
  router: any;
  constructor(element?: any, router?: any);
  bind(): any;
  routerChanged(): any;
  navigate(navigationInstruction?: any): any;
}
export declare class InstructionFilterValueConverter {
  toView(navigationInstructions?: any): any;
}
export declare class MdBadge {
  isNew: any;
  caption: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  newChanged(newValue?: any): any;
  captionChanged(newValue?: any): any;
}
export declare class Ui5Button {
  disabled: any;
  floating: any;
  large: any;
  text: any;
  press: any;
  icon: any;
  constructor(element?: any);
  attached(): any;
  defaultPress(): any;
  detached(): any;
  disabledChanged(newValue?: any): any;
  iconChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  pressChanged(newValue?: any): any;
}
export declare class MdBox {
  caption: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdCard {
  mdHorizontal: any;
  mdImage: any;
  mdReveal: any;
  mdSize: any;
  mdTitle: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdCharCounter {
  length: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

// @customElement('md-carousel-item')
export declare class MdCarouselItem {
  mdHref: any;
  mdImage: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdCarousel {
  mdIndicators: any;
  mdSlider: any;
  items: any;
  constructor(element?: any, taskQueue?: any);
  attached(): any;
  itemsChanged(newValue?: any): any;
  refresh(): any;
}
export declare class MdAutoComplete {
  input: any;
  values: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  valuesChanged(newValue?: any): any;
}

// @customElement('md-checkbox')
export declare class MdCheckbox {
  static id: any;
  mdChecked: any;
  mdDisabled: any;
  mdFilledIn: any;
  mdMatcher: any;
  mdModel: any;
  constructor(element?: any);
  attached(): any;
  
  // blur() {
  //   fireEvent(this.element, 'blur');
  // }
  detached(): any;
  
  // handleChange() {
  //   this.mdChecked = this.checkbox.checked;
  //   fireEvent(this.element, 'blur');
  // }
  // mdCheckedChanged(newValue) {
  //   // if (this.checkbox) {
  //   //   this.checkbox.checked = !!newValue;
  //   // }
  //   fireEvent(this.element, 'blur');
  // }
  mdDisabledChanged(newValue?: any): any;
}
export declare class MdChip {
  mdClose: any;
  constructor(element?: any);
  attached(): any;
  close(): any;
}
export declare class MdChips {
  autocompleteData: any;
  data: any;
  placeholder: any;
  secondaryPlaceholder: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onChipAdd(e?: any, chip?: any): any;
  onChipDelete(e?: any, chip?: any): any;
  onChipSelect(e?: any, chip?: any): any;
}
export declare class MdCollectionHeader {
  constructor(element?: any);
}
export declare class MdCollectionItem {

}
export declare class MdCollection {
  constructor(element?: any);
  attached(): any;
  getSelected(): any;
  clearSelection(): any;
  selectAll(): any;
}
export declare class MdlListSelector {
  item: any;
  mdDisabled: any;
  isSelected: any;
  constructor(element?: any);
  isSelectedChanged(newValue?: any): any;
  mdDisabledChanged(newValue?: any): any;
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
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  addChild(child?: any, elem?: any): any;
  vAlignChanged(newValue?: any): any;
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
export declare function initialize(): any;

// https://github.com/jonathantneal/closest/blob/master/closest.js
export declare function polyfillElementClosest(): any;
export declare class Ui5Container {
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class Ui5DatePicker extends Ui5InputBase {
  ui5Id: any;
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
export declare class Ui5Control extends Ui5Element {
  addChild(child?: any, elem?: any): any;
  attached(): any;
}
export declare class MdDropdownElement {
  static id: any;
  alignment: any;
  belowOrigin: any;
  constrainWidth: any;
  gutter: any;
  hover: any;
  mdTitle: any;
  inDuration: any;
  outDuration: any;
  constructor(element?: any);
  attached(): any;
}
export declare function applyMaterializeDropdownFix(): any;
export declare class MdDropdown {
  static elementId: any;
  activates: any;
  ref: any;
  alignment: any;
  belowOrigin: any;
  constrainWidth: any;
  gutter: any;
  hover: any;
  mdTitle: any;
  inDuration: any;
  outDuration: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleActivateElement(): any;
}
export declare class Ui5Element {
  addChild(child?: any, elem?: any): any;
  attached(): any;
}
export declare class MdFab {
  mdFixed: any;
  mdLarge: any;
  constructor(element?: any);
  attached(): any;
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
export declare class MdFileInput {
  mdCaption: any;
  mdMultiple: any;
  mdLabelValue: any;
  disabled: any;
  files: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  handleChangeFromNativeInput(): any;
}
export declare class Ui5Form {
  ui5Id: any;
  width: any;
  editable: any;
  title: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
  editableChanged(newValue?: any): any;
  widthChanged(newValue?: any): any;
  titleChanged(newValue?: any): any;
}
export declare class MdFooter {
  constructor(element?: any);
  bind(): any;
  unbind(): any;
}
export declare class Ui5FormContainer {
  ui5Id: any;
  title: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
  titleChanged(newValue?: any): any;
}
export declare class Ui5FormElement {
  ui5Id: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  attached(): any;
  titleChanged(newValue?: any): any;
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
export declare class Ui5GridData {
  id: any;
  span: any;
  constructor(element?: any);
  attached(): any;
  spanChanged(newValue?: any): any;
}
export declare class Ui5Html {
  constructor(element?: any);
  attached(): any;
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
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
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
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  textChanged(newValue?: any): any;
}
export declare class Ui5ImageContent {
  src: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  srcChanged(newValue?: any): any;
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
  UIElement: any;
  addChild(child?: any, elem?: any): any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
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
export declare class Ui5Item {
  key: any;
  enabled: any;
  text: any;
  textDirection: any;
  constructor(element?: any);
  defaultFunc(): any;
  attached(): any;
  addChild(child?: any, elem?: any): any;
  keyChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
}
export declare class Ui5Label {
  ui5Id: any;
  labelFor: any;
  text: any;
  required: any;
  textAlign: any;
  textDirection: any;
  constructor(element?: any);
  attached(): any;
  textChanged(newValue?: any): any;
  labelForChanged(newValue?: any): any;
  requiredChanged(newValue?: any): any;
  textAlignChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
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
  addChild(child?: any, elem?: any): any;
  iconChanged(newValue?: any): any;
  additionalTextChanged(newValue?: any): any;
  keyChanged(newValue?: any): any;
  enabledChanged(newValue?: any): any;
  textChanged(newValue?: any): any;
  textDirectionChanged(newValue?: any): any;
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
export declare class Ui5MTitle {
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
export declare class Ui5Grid {
  defaultSpan: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  defaultPress(): any;
  attached(): any;
  detached(): any;
  defaultSpanChanged(newValue?: any): any;
}
export declare class MdModalTrigger {
  dismissible: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onComplete(): any;
}
export declare class MdModal {
  dismissible: any;
  opacity: any;
  inDuration: any;
  outDuration: any;
  startingTop: any;
  endingTop: any;
  
  // Ending top style attribute
  constructor(element?: any);
  attached(): any;
  detached(): any;
  onComplete(): any;
  onReady(modal?: any, trigger?: any): any;
  open(): any;
  close(): any;
}
export declare class MdNavbar {
  mdFixed: any;
  mdAutoHeight: any;
  fixedAttributeManager: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
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
export declare class Ui5OverflowToolbar {
  width: any;
  active: any;
  enabled: any;
  height: any;
  design: any;
  press: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
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
export declare class MdPagination {
  mdActivePage: any;
  mdPages: any;
  mdVisiblePageLinks: any;
  mdPageLinks: any;
  mdShowFirstLast: any;
  mdShowPrevNext: any;
  mdShowPageLinks: any;
  
  // local variables to stop Changed events when parsing to int
  numberOfLinks: any;
  pages: any;
  constructor(element?: any);
  bind(): any;
  setActivePage(page?: any): any;
  setFirstPage(): any;
  setLastPage(): any;
  setPreviousPage(): any;
  setNextPage(): any;
  mdPagesChanged(): any;
  mdVisiblePageLinksChanged(): any;
  generatePageLinks(): any;
}
export declare class MdParallax {
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdProgress {
  mdColor: any;
  mdPixelSize: any;
  mdSize: any;
  mdType: any;
  mdValue: any;
  constructor(element?: any);
  
  // mdValueChanged(newValue, oldValue) {
  //   console.log('mdValueChanged, newValue:', JSON.stringify(newValue), 'oldValue:', JSON.stringify(oldValue));
  // }
  bind(): any;
  attached(): any;
  mdSizeChanged(newValue?: any): any;
  mdPixelSizeChanged(newValue?: any): any;
}
export declare class MdPushpin {
  bottom: any;
  offset: any;
  top: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class MdRadio {
  static id: any;
  mdChecked: any;
  mdDisabled: any;
  mdGap: any;
  mdModel: any;
  mdName: any;
  mdValue: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  
  // handleChange() {
  //   this.mdChecked = this.radio.checked;
  // }
  // mdCheckedChanged(newValue) {
  //   if (this.radio) {
  //     this.radio.checked = !!newValue;
  //   }
  // }
  mdDisabledChanged(newValue?: any): any;
}
export declare class MdRange {
  mdMin: any;
  mdMax: any;
  mdStep: any;
  mdValue: any;
  constructor(element?: any);
}
export declare class Ui5Page {
  title: any;
  showHeader: any;
  showFooter: any;
  showNavButton: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  titleChanged(newValue?: any): any;
  showHeaderChanged(newValue?: any): any;
  showFooterChanged(newValue?: any): any;
  showNavButtonChanged(newValue?: any): any;
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

/* eslint no-new-func:0 */
export declare class ScrollfirePatch {
  static patched: any;
  patch(): any;
}
export declare class MdScrollfireTarget {
  callback: any;
  offset: any;
  constructor(element?: any);
}
export declare class MdScrollfire {
  targetId: any;
  constructor(element?: any);
  attached(): any;
}
export declare class MdCollapsible {
  constructor(element?: any, eventAggregator?: any);
  attached(): any;
  detached(): any;
  refresh(): any;
  accordionChanged(): any;
  buildCollapsibleOpenCloseCallbackHandler(handler?: any): any;
}
export declare class MdScrollSpy {
  target: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}

/* eslint-enable */
export declare class DarkenValueConverter {
  toView(value?: any, steps?: any): any;
}
export declare class LightenValueConverter {
  toView(value?: any, steps?: any): any;
}
export declare class MdColors {
  mdPrimaryColor: any;
  mdAccentColor: any;
  mdErrorColor: any;
  mdSuccessColor: any;
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
export declare class MdSidenavCollapse {
  ref: any;
  constructor(element?: any, observerLocator?: any);
  attached(): any;
  detached(): any;
  show(): any;
  hide(): any;
}
export declare class MdSidenav {
  static id: any;
  mdCloseOnClick: any;
  mdEdge: any;
  mdFixed: any;
  mdWidth: any;
  attachedResolver: any;
  whenAttached: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  mdFixedChanged(newValue?: any): any;
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
export declare class Ui5TabContainer {
  showAddNewButton: any;
  selectedItem: any;
  itemClose: any;
  itemSelect: any;
  addNewButtonPress: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  showAddNewButtonChanged(newValue?: any): any;
}
export declare class Ui5TabContainerItem {
  name: any;
  key: any;
  modified: any;
  itemPropertyChanged: any;
  constructor(element?: any);
  defaultFunc(event?: any): any;
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  keyChanged(newValue?: any): any;
  nameChanged(newValue?: any): any;
  modifiedChanged(newValue?: any): any;
}
export declare class Ui5Table {
  headerText: any;
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
  headerTextChanged(newValue?: any): any;
}
export declare class Ui5Text {
  ui5Id: any;
  text: any;
  wrapping: any;
  textAlign: any;
  maxLines: any;
  constructor(element?: any);
  attached(): any;
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
export declare class Ui5ToastService {
  show(message?: any, displayLength?: any): any;
}
export declare class MdTooltip {
  position: any;
  delay: any;
  html: any;
  text: any;
  constructor(element?: any);
  bind(): any;
  attached(): any;
  detached(): any;
  textChanged(): any;
  initTooltip(): any;
}
export declare class MdFadeinImage {
  ref: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  fadeInImage(): any;
  ensureOpacity(): any;
}
export declare class MdStaggeredList {
  ref: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
  staggerList(): any;
  ensureOpacity(): any;
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
export declare class Ui5ToolbarSpacer {
  width: any;
  constructor(element?: any);
  attached(): any;
  widthChanged(newValue?: any): any;
}
export declare class MdWaves {
  block: any;
  circle: any;
  color: any;
  constructor(element?: any);
  attached(): any;
  detached(): any;
}
export declare class Ui5Wizard {
  constructor(element?: any);
  addChild(child?: any, elem?: any): any;
  removeChild(child?: any, elem?: any): any;
  attached(): any;
  detached(): any;
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
  defaultFunc(): any;
  attached(): any;
  detached(): any;
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
export declare class Ui5StandardTile {
  type: any;
  title: any;
  number: any;
  info: any;
  infoState: any;
  numberUnit: any;
  icon: any;
  press: any;
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
}