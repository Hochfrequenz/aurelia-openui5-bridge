'use strict';

exports.__esModule = true;
exports.Ui5VerticalLayout = exports.Ui5WizardStep = exports.Ui5Wizard = exports.MaterializeFormValidationRenderer = exports.Ui5ToolbarSpacer = exports.Ui5Toolbar = exports.Ui5ToastService = exports.Ui5Title = exports.Ui5TileContainer = exports.Ui5TileContent = exports.Ui5SimpleForm = exports.Ui5Text = exports.Ui5Table = exports.Ui5TabContainerItem = exports.Ui5TabContainer = exports.MdSwitch = exports.Ui5StandardTile = exports.MdSlider = exports.Ui5Element = exports.Ui5SlideTile = exports.Ui5DynamicPageHeader = exports.Ui5SegmentedButton = exports.Ui5Shell = exports.Ui5Select = exports.Ui5SearchField = exports.Ui5ResponsiveGridLayout = exports.Ui5OverflowToolbar = exports.Ui5Page = exports.Ui5ObjectNumber = exports.Ui5ObjectIdentifier = exports.Ui5NumericContent = exports.Ui5Label = exports.Ui5MessageStrip = exports.Ui5MTitle = exports.Ui5ListItem = exports.Ui5Link = exports.Ui5ImageContent = exports.Ui5Item = exports.Ui5InputBase = exports.Ui5Input = exports.Ui5IconTabFilter = exports.Ui5IconTabBar = exports.Ui5Html = exports.Ui5Grid = exports.Ui5GridData = exports.Ui5GenericTile = exports.Ui5FormattedText = exports.Ui5FormElement = exports.Ui5FormContainer = exports.Ui5Form = exports.Ui5DynamicPage = exports.Ui5FeedContent = exports.Ui5DynamicPageTitle = exports.Ui5Container = exports.Ui5DatePicker = exports.Ui5Control = exports.SmoothScroll = exports.constants = exports.AttributeManager = exports.Ui5ColumnListItem = exports.Ui5Column = exports.Ui5BreadCrumbs = exports.MdBox = exports.Ui5Button = exports.Ui5Bar = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dec, _dec2, _class3, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class5, _desc, _value, _class6, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _dec12, _dec13, _dec14, _class8, _desc2, _value2, _class9, _descriptor8, _dec15, _dec16, _dec17, _dec18, _class11, _desc3, _value3, _class12, _descriptor9, _descriptor10, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _class14, _desc4, _value4, _class15, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _dec33, _dec34, _dec35, _class17, _desc5, _value5, _class18, _descriptor23, _class21, _temp, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _class23, _desc6, _value6, _class24, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _dec60, _dec61, _class26, _dec62, _dec63, _class27, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _class29, _desc7, _value7, _class30, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _class32, _desc8, _value8, _class33, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _class35, _desc9, _value9, _class36, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _dec85, _dec86, _dec87, _dec88, _class38, _desc10, _value10, _class39, _descriptor59, _descriptor60, _dec89, _dec90, _dec91, _class41, _desc11, _value11, _class42, _descriptor61, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _class44, _desc12, _value12, _class45, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _class47, _desc13, _value13, _class48, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _dec106, _dec107, _dec108, _dec109, _class50, _desc14, _value14, _class51, _descriptor72, _descriptor73, _dec110, _dec111, _dec112, _class53, _desc15, _value15, _class54, _descriptor74, _dec113, _dec114, _class56, _dec115, _dec116, _dec117, _dec118, _dec119, _dec120, _dec121, _dec122, _dec123, _dec124, _dec125, _dec126, _dec127, _dec128, _dec129, _class58, _desc16, _value16, _class59, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _descriptor80, _descriptor81, _descriptor82, _descriptor83, _descriptor84, _descriptor85, _descriptor86, _descriptor87, _dec130, _dec131, _dec132, _class61, _desc17, _value17, _class62, _descriptor88, _dec133, _dec134, _dec135, _dec136, _dec137, _dec138, _dec139, _dec140, _dec141, _dec142, _dec143, _dec144, _dec145, _dec146, _dec147, _dec148, _dec149, _dec150, _dec151, _dec152, _dec153, _dec154, _dec155, _dec156, _dec157, _dec158, _dec159, _dec160, _dec161, _dec162, _dec163, _dec164, _dec165, _dec166, _dec167, _dec168, _dec169, _dec170, _dec171, _dec172, _dec173, _dec174, _dec175, _class64, _desc18, _value18, _class65, _descriptor89, _descriptor90, _descriptor91, _descriptor92, _descriptor93, _descriptor94, _descriptor95, _descriptor96, _descriptor97, _descriptor98, _descriptor99, _descriptor100, _descriptor101, _descriptor102, _descriptor103, _descriptor104, _descriptor105, _descriptor106, _descriptor107, _descriptor108, _descriptor109, _descriptor110, _descriptor111, _descriptor112, _descriptor113, _descriptor114, _descriptor115, _descriptor116, _descriptor117, _descriptor118, _descriptor119, _descriptor120, _descriptor121, _descriptor122, _descriptor123, _descriptor124, _descriptor125, _descriptor126, _descriptor127, _descriptor128, _descriptor129, _dec176, _dec177, _dec178, _dec179, _dec180, _dec181, _dec182, _dec183, _dec184, _dec185, _dec186, _dec187, _dec188, _dec189, _dec190, _class67, _desc19, _value19, _class68, _descriptor130, _descriptor131, _descriptor132, _descriptor133, _descriptor134, _descriptor135, _descriptor136, _descriptor137, _descriptor138, _descriptor139, _descriptor140, _descriptor141, _descriptor142, _dec191, _dec192, _dec193, _dec194, _dec195, _dec196, _class70, _desc20, _value20, _class71, _descriptor143, _descriptor144, _descriptor145, _descriptor146, _dec197, _dec198, _dec199, _class73, _desc21, _value21, _class74, _descriptor147, _dec200, _dec201, _dec202, _dec203, _dec204, _dec205, _dec206, _dec207, _dec208, _class76, _desc22, _value22, _class77, _descriptor148, _descriptor149, _descriptor150, _descriptor151, _descriptor152, _descriptor153, _descriptor154, _dec209, _dec210, _dec211, _dec212, _dec213, _dec214, _dec215, _dec216, _class79, _desc23, _value23, _class80, _descriptor155, _descriptor156, _descriptor157, _descriptor158, _descriptor159, _descriptor160, _dec217, _dec218, _dec219, _dec220, _dec221, _class82, _desc24, _value24, _class83, _descriptor161, _descriptor162, _descriptor163, _dec222, _dec223, _class85, _desc25, _value25, _class86, _descriptor164, _descriptor165, _descriptor166, _descriptor167, _descriptor168, _dec224, _dec225, _dec226, _dec227, _dec228, _dec229, _dec230, _dec231, _class88, _desc26, _value26, _class89, _descriptor169, _descriptor170, _descriptor171, _descriptor172, _descriptor173, _descriptor174, _dec232, _dec233, _dec234, _dec235, _dec236, _dec237, _dec238, _class91, _desc27, _value27, _class92, _descriptor175, _descriptor176, _descriptor177, _descriptor178, _descriptor179, _dec239, _dec240, _dec241, _dec242, _dec243, _dec244, _dec245, _class94, _desc28, _value28, _class95, _descriptor180, _descriptor181, _descriptor182, _descriptor183, _descriptor184, _descriptor185, _descriptor186, _dec246, _dec247, _dec248, _dec249, _dec250, _dec251, _dec252, _dec253, _dec254, _class97, _desc29, _value29, _class98, _descriptor187, _descriptor188, _descriptor189, _descriptor190, _descriptor191, _descriptor192, _descriptor193, _descriptor194, _dec255, _dec256, _dec257, _dec258, _dec259, _dec260, _dec261, _class100, _desc30, _value30, _class101, _descriptor195, _descriptor196, _descriptor197, _descriptor198, _descriptor199, _dec262, _dec263, _dec264, _dec265, _dec266, _dec267, _dec268, _dec269, _class103, _desc31, _value31, _class104, _descriptor200, _descriptor201, _descriptor202, _descriptor203, _descriptor204, _descriptor205, _dec270, _dec271, _dec272, _dec273, _dec274, _dec275, _dec276, _dec277, _dec278, _dec279, _dec280, _dec281, _dec282, _dec283, _dec284, _dec285, _class106, _desc32, _value32, _class107, _descriptor206, _descriptor207, _descriptor208, _descriptor209, _descriptor210, _descriptor211, _descriptor212, _descriptor213, _descriptor214, _descriptor215, _descriptor216, _descriptor217, _descriptor218, _descriptor219, _dec286, _dec287, _dec288, _dec289, _dec290, _dec291, _dec292, _dec293, _dec294, _dec295, _dec296, _dec297, _dec298, _dec299, _dec300, _dec301, _dec302, _class109, _desc33, _value33, _class110, _descriptor220, _descriptor221, _descriptor222, _descriptor223, _descriptor224, _descriptor225, _descriptor226, _descriptor227, _descriptor228, _descriptor229, _descriptor230, _descriptor231, _descriptor232, _descriptor233, _descriptor234, _dec303, _dec304, _dec305, _dec306, _dec307, _dec308, _dec309, _dec310, _dec311, _dec312, _dec313, _dec314, _dec315, _dec316, _dec317, _dec318, _dec319, _dec320, _dec321, _class112, _desc34, _value34, _class113, _descriptor235, _descriptor236, _descriptor237, _descriptor238, _descriptor239, _descriptor240, _descriptor241, _descriptor242, _descriptor243, _descriptor244, _descriptor245, _descriptor246, _descriptor247, _descriptor248, _descriptor249, _descriptor250, _descriptor251, _dec322, _dec323, _dec324, _dec325, _class115, _desc35, _value35, _class116, _descriptor252, _descriptor253, _dec326, _dec327, _dec328, _dec329, _dec330, _dec331, _class118, _desc36, _value36, _class119, _descriptor254, _descriptor255, _descriptor256, _descriptor257, _dec332, _dec333, _dec334, _class121, _desc37, _value37, _class122, _descriptor258, _dec335, _dec336, _dec337, _dec338, _class124, _desc38, _value38, _class125, _descriptor259, _descriptor260, _dec339, _dec340, _dec341, _dec342, _dec343, _dec344, _dec345, _dec346, _class128, _desc39, _value39, _class129, _descriptor261, _descriptor262, _descriptor263, _descriptor264, _descriptor265, _dec347, _dec348, _dec349, _dec350, _dec351, _dec352, _dec353, _dec354, _dec355, _dec356, _dec357, _class131, _desc40, _value40, _class132, _descriptor266, _descriptor267, _descriptor268, _descriptor269, _descriptor270, _descriptor271, _descriptor272, _descriptor273, _descriptor274, _dec358, _dec359, _dec360, _dec361, _dec362, _dec363, _class134, _desc41, _value41, _class135, _descriptor275, _descriptor276, _descriptor277, _descriptor278, _dec364, _dec365, _dec366, _dec367, _dec368, _dec369, _dec370, _class137, _desc42, _value42, _class138, _descriptor279, _descriptor280, _descriptor281, _descriptor282, _descriptor283, _dec371, _dec372, _dec373, _dec374, _dec375, _dec376, _dec377, _class140, _desc43, _value43, _class141, _descriptor284, _descriptor285, _descriptor286, _descriptor287, _dec378, _dec379, _dec380, _dec381, _dec382, _class143, _desc44, _value44, _class144, _descriptor288, _descriptor289, _descriptor290, _dec383, _dec384, _dec385, _class146, _desc45, _value45, _class147, _descriptor291, _descriptor292, _descriptor293, _descriptor294, _descriptor295, _dec386, _dec387, _dec388, _dec389, _dec390, _dec391, _dec392, _dec393, _dec394, _dec395, _dec396, _dec397, _dec398, _dec399, _dec400, _dec401, _dec402, _dec403, _dec404, _dec405, _dec406, _dec407, _dec408, _dec409, _class149, _desc46, _value46, _class150, _descriptor296, _descriptor297, _descriptor298, _descriptor299, _descriptor300, _descriptor301, _descriptor302, _descriptor303, _descriptor304, _descriptor305, _descriptor306, _descriptor307, _descriptor308, _descriptor309, _descriptor310, _descriptor311, _descriptor312, _descriptor313, _descriptor314, _descriptor315, _descriptor316, _descriptor317, _dec410, _dec411, _dec412, _dec413, _class152, _desc47, _value47, _class153, _descriptor318, _descriptor319, _dec414, _dec415, _class155, _dec416, _dec417, _dec418, _dec419, _dec420, _dec421, _class157, _desc48, _value48, _class158, _descriptor320, _descriptor321, _descriptor322, _descriptor323, _dec422, _dec423, _dec424, _dec425, _dec426, _dec427, _dec428, _dec429, _class160, _desc49, _value49, _class161, _descriptor324, _descriptor325, _descriptor326, _descriptor327, _descriptor328, _descriptor329, _dec430, _dec431, _dec432, _class163, _desc50, _value50, _class164, _descriptor330, _dec433, _dec434, _dec435, _dec436, _dec437, _dec438, _dec439, _dec440, _dec441, _dec442, _class167, _desc51, _value51, _class168, _descriptor331, _descriptor332, _descriptor333, _descriptor334, _descriptor335, _descriptor336, _descriptor337, _dec443, _dec444, _class170, _desc52, _value52, _class171, _descriptor338, _descriptor339, _descriptor340, _descriptor341, _descriptor342, _descriptor343, _descriptor344, _dec445, _dec446, _class173;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.showBusyIndicator = showBusyIndicator;
exports.hideBusyIndicator = hideBusyIndicator;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;
exports.initialize = initialize;
exports.showMessageBox = showMessageBox;
exports.polyfillElementClosest = polyfillElementClosest;

var _aureliaPal = require('aurelia-pal');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaBinding = require('aurelia-binding');

var _aureliaFramework = require('aurelia-framework');

var _aureliaRouter = require('aurelia-router');

var _aureliaLogging = require('aurelia-logging');

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickCounter = exports.ClickCounter = function () {
  function ClickCounter() {
    _classCallCheck(this, ClickCounter);

    this.count = 0;
  }

  ClickCounter.prototype.increment = function increment() {
    this.count++;
  };

  return ClickCounter;
}();

var ConfigBuilder = exports.ConfigBuilder = function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this.useGlobalResources = true;
    this.globalResources = [];
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useDatePicker().useTitle().useLayoutData().useSelect().useTable().useTabs().useLayout().useDynamicPage().useLink().useBreadcrumbs();
  };

  ConfigBuilder.prototype.useLink = function useLink() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./link/link'));
    return this;
  };

  ConfigBuilder.prototype.usePage = function usePage() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./page/page'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./shell/shell'));
    return this;
  };

  ConfigBuilder.prototype.useBar = function useBar() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./bar/bar'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./overflow-toolbar/overflow-toolbar'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./toolbar-spacer/toolbar-spacer'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./toolbar/toolbar'));

    return this;
  };

  ConfigBuilder.prototype.useContainer = function useContainer() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./container/container'));
    return this;
  };

  ConfigBuilder.prototype.useHtml = function useHtml() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./html/html'));
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./button/button'));
    return this;
  };

  ConfigBuilder.prototype.useGrid = function useGrid() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./grid/grid'));
    return this;
  };

  ConfigBuilder.prototype.useWizard = function useWizard() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./wizard/wizard'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./wizard-step/wizard-step'));
    return this;
  };

  ConfigBuilder.prototype.useText = function useText() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./text/text'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./formatted-text/formatted-text'));
    return this;
  };

  ConfigBuilder.prototype.useTiles = function useTiles() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./generic-tile/generic-tile'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tile-container/tile-container'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tile-content/tile-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./standard-tile/standard-tile'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./image-content/image-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./numeric-content/numeric-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./feed-content/feed-content'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./slide-tile/slide-tile'));
    return this;
  };

  ConfigBuilder.prototype.useForm = function useForm() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./simple-form/simple-form'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./form/form'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./form-container/form-container'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./form-element/form-element'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./responsive-grid-layout/responsive-grid-layout'));
    return this;
  };

  ConfigBuilder.prototype.useLabel = function useLabel() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./label/label'));
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./input/input'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./search-field/search-field'));

    return this;
  };

  ConfigBuilder.prototype.useDatePicker = function useDatePicker() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./date-picker/date-picker'));
    return this;
  };

  ConfigBuilder.prototype.useTitle = function useTitle() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./title/title'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./m-title/m-title'));
    return this;
  };

  ConfigBuilder.prototype.useLayoutData = function useLayoutData() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./grid-data/grid-data'));
    return this;
  };

  ConfigBuilder.prototype.useLayout = function useLayout() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./vertical-layout/vertical-layout'));
    return this;
  };

  ConfigBuilder.prototype.useSelect = function useSelect() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./select/select'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./list-item/list-item'));
    return this;
  };

  ConfigBuilder.prototype.useTable = function useTable() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./table/table'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./column/column'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./column-list-item/column-list-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./object-identifier/object-identifier'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./object-number/object-number'));
    return this;
  };

  ConfigBuilder.prototype.useTabs = function useTabs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tab-container/tab-container'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./tab-container-item/tab-container-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./icon-tab-bar/icon-tab-bar'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./icon-tab-filter/icon-tab-filter'));

    return this;
  };

  ConfigBuilder.prototype.useDynamicPage = function useDynamicPage() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dynamic-page/dynamic-page'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dynamic-page-header/dynamic-page-header'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dynamic-page-title/dynamic-page-title'));

    return this;
  };

  ConfigBuilder.prototype.useBreadcrumbs = function useBreadcrumbs() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./breadcrumbs/breadcrumbs'));
    return this;
  };

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  return ConfigBuilder;
}();

function applyPolyfills() {
  polyfillElementClosest();
}

function configure(aurelia, configCallback) {
  applyPolyfills();
  var builder = new ConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  if (builder.useGlobalResources) {
    aurelia.globalResources(builder.globalResources);
  }
}

var Ui5Bar = exports.Ui5Bar = (_dec = (0, _aureliaTemplating.customElement)('ui5-bar'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class3 = _dec2(_class3 = function () {
  function Ui5Bar(element) {
    _classCallCheck(this, Ui5Bar);

    this._bar = null;

    this.element = element;
  }

  Ui5Bar.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content-left') this._bar.addContentLeft(child);
    if (path[0].localName == 'content-middle') this._bar.addContentMiddle(child);
    if (path[0].localName == 'content-right') this._bar.addContentRight(child);
  };

  Ui5Bar.prototype.attached = function attached() {

    this._bar = new sap.m.Bar();
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._bar, this.element);
  };

  return Ui5Bar;
}()) || _class3) || _class3);
var Ui5Button = exports.Ui5Button = (_dec3 = (0, _aureliaTemplating.customElement)('ui5-button'), _dec4 = (0, _aureliaDependencyInjection.inject)(Element), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec3(_class5 = _dec4(_class5 = (_class6 = function () {
  function Ui5Button(element) {
    _classCallCheck(this, Ui5Button);

    _initDefineProp(this, 'disabled', _descriptor, this);

    _initDefineProp(this, 'floating', _descriptor2, this);

    _initDefineProp(this, 'large', _descriptor3, this);

    _initDefineProp(this, 'text', _descriptor4, this);

    _initDefineProp(this, 'press', _descriptor5, this);

    _initDefineProp(this, 'icon', _descriptor6, this);

    _initDefineProp(this, 'type', _descriptor7, this);

    this._button = null;

    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  Ui5Button.prototype.attached = function attached() {
    this._button = new sap.m.Button({
      text: this.text,
      type: this.type,
      icon: this.icon,
      enabled: !getBooleanFromAttributeValue(this.disabled),
      press: this.press != null ? this.press : this.defaultPress
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
    }
  };

  Ui5Button.prototype.defaultPress = function defaultPress() {};

  Ui5Button.prototype.detached = function detached() {};

  Ui5Button.prototype.typeChanged = function typeChanged(newValue) {
    if (this._button !== null) {
      this._button.setType(newValue);
    }
  };

  Ui5Button.prototype.disabledChanged = function disabledChanged(newValue) {
    if (this._button !== null) {
      this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Button.prototype.iconChanged = function iconChanged(newValue) {
    if (this._button !== null) {
      this._button.setIcon(newValue);
    }
  };

  Ui5Button.prototype.textChanged = function textChanged(newValue) {
    if (this._button !== null) {
      this._button.setText(newValue);
    }
  };

  Ui5Button.prototype.pressChanged = function pressChanged(newValue) {
    if (this._button !== null) {
      this._button.attachPress(newValue);
    }
  };

  return Ui5Button;
}(), (_descriptor = _applyDecoratedDescriptor(_class6.prototype, 'disabled', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class6.prototype, 'floating', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class6.prototype, 'large', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class6.prototype, 'text', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class6.prototype, 'press', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class6.prototype, 'icon', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class6.prototype, 'type', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return 'Default';
  }
})), _class6)) || _class5) || _class5);
var MdBox = exports.MdBox = (_dec12 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec13 = (0, _aureliaDependencyInjection.inject)(Element), _dec14 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec12(_class8 = _dec13(_class8 = (_class9 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor8, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBox.prototype.attached = function attached() {
    this.attributeManager.addClasses('materialboxed');
    if (this.caption) {
      this.attributeManager.addAttributes({ 'data-caption': this.caption });
    }

    $(this.element).materialbox();
  };

  MdBox.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-caption');
    this.attributeManager.removeClasses('materialboxed');
  };

  return MdBox;
}(), (_descriptor8 = _applyDecoratedDescriptor(_class9.prototype, 'caption', [_dec14], {
  enumerable: true,
  initializer: null
})), _class9)) || _class8) || _class8);
var Ui5BreadCrumbs = exports.Ui5BreadCrumbs = (_dec15 = (0, _aureliaTemplating.customElement)('ui5-breadcrumbs'), _dec16 = (0, _aureliaDependencyInjection.inject)(Element), _dec17 = (0, _aureliaTemplating.bindable)(), _dec18 = (0, _aureliaTemplating.bindable)(), _dec15(_class11 = _dec16(_class11 = (_class12 = function () {
  function Ui5BreadCrumbs(element) {
    _classCallCheck(this, Ui5BreadCrumbs);

    this._crumbs = null;

    _initDefineProp(this, 'ui5Id', _descriptor9, this);

    _initDefineProp(this, 'currentLocationText', _descriptor10, this);

    this.element = element;
  }

  Ui5BreadCrumbs.prototype.defaultFunc = function defaultFunc() {};

  Ui5BreadCrumbs.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      currentLocationText: this.currentLocationText
    };
    if (this.ui5Id) this._crumbs = new sap.m.Breadcrumbs(this.ui5Id, params);else this._crumbs = new sap.m.Breadcrumbs(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._crumbs, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5BreadCrumbs.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      if (_isArray) {
        if (_i >= _iterator.length) break;
        elem = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        elem = _i.value;
      }

      if (elem.localName == 'links') {
        this._crumbs.addLink(child);break;
      }
    }
  };

  Ui5BreadCrumbs.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        elem = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        elem = _i2.value;
      }

      if (elem.localName == 'links') {
        this._crumbs.removeLink(child);break;
      }
    }
  };

  return Ui5BreadCrumbs;
}(), (_descriptor9 = _applyDecoratedDescriptor(_class12.prototype, 'ui5Id', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class12.prototype, 'currentLocationText', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class12)) || _class11) || _class11);
var Ui5Column = exports.Ui5Column = (_dec19 = (0, _aureliaTemplating.customElement)('ui5-column'), _dec20 = (0, _aureliaDependencyInjection.inject)(Element), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec25 = (0, _aureliaTemplating.bindable)(), _dec26 = (0, _aureliaTemplating.bindable)(), _dec27 = (0, _aureliaTemplating.bindable)(), _dec28 = (0, _aureliaTemplating.bindable)(), _dec29 = (0, _aureliaTemplating.bindable)(), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec19(_class14 = _dec20(_class14 = (_class15 = function () {
  function Ui5Column(element) {
    _classCallCheck(this, Ui5Column);

    this._column = null;

    _initDefineProp(this, 'ui5Id', _descriptor11, this);

    _initDefineProp(this, 'width', _descriptor12, this);

    _initDefineProp(this, 'hAlign', _descriptor13, this);

    _initDefineProp(this, 'vAlign', _descriptor14, this);

    _initDefineProp(this, 'styleClass', _descriptor15, this);

    _initDefineProp(this, 'visible', _descriptor16, this);

    _initDefineProp(this, 'minScreenWidth', _descriptor17, this);

    _initDefineProp(this, 'demandPopin', _descriptor18, this);

    _initDefineProp(this, 'popinHAlign', _descriptor19, this);

    _initDefineProp(this, 'popinDisplay', _descriptor20, this);

    _initDefineProp(this, 'mergeDuplicates', _descriptor21, this);

    _initDefineProp(this, 'mergeFunctionName', _descriptor22, this);

    this.element = element;
  }

  Ui5Column.prototype.defaultFunc = function defaultFunc() {};

  Ui5Column.prototype.attached = function attached() {
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
    if (this.ui5Id) this._column = new sap.m.Column(this.ui5Id, params);else this._column = new sap.m.Column(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._column, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5Column.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator3 = path, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        elem = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        elem = _i3.value;
      }

      if (elem.localName == 'header') {
        this._column.setHeader(child);break;
      }
      if (elem.localName == 'footer') {
        this._column.setFooter(child);break;
      }
      if (elem.localName == 'content') {
        this._column.addDependent(child);break;
      }
    }
  };

  Ui5Column.prototype.widthChanged = function widthChanged(newValue) {
    if (this._column !== null) {
      this._column.setWidth(newValue);
    }
  };

  Ui5Column.prototype.hAlignChanged = function hAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setHAlign(newValue);
    }
  };

  Ui5Column.prototype.vAlignChanged = function vAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setVAlign(newValue);
    }
  };

  Ui5Column.prototype.styleClassChanged = function styleClassChanged(newValue) {
    if (this._column !== null) {
      this._column.setStyleClass(newValue);
    }
  };

  Ui5Column.prototype.visibleChanged = function visibleChanged(newValue) {
    if (this._column !== null) {
      this._column.setVisible(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Column.prototype.minScreenWidthChanged = function minScreenWidthChanged(newValue) {
    if (this._column !== null) {
      this._column.setMinScreenWidth(newValue);
    }
  };

  Ui5Column.prototype.demandPopinChanged = function demandPopinChanged(newValue) {
    if (this._column !== null) {
      this._column.setDemandPopin(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Column.prototype.popinDisplayChanged = function popinDisplayChanged(newValue) {
    if (this._column !== null) {
      this._column.setPopinDisplay(newValue);
    }
  };

  Ui5Column.prototype.popinHAlignChanged = function popinHAlignChanged(newValue) {
    if (this._column !== null) {
      this._column.setPopinHAlign(newValue);
    }
  };

  Ui5Column.prototype.mergeDuplicatesChanged = function mergeDuplicatesChanged(newValue) {
    if (this._column !== null) {
      this._column.setMergeDuplicates(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Column.prototype.mergeFunctionNameChanged = function mergeFunctionNameChanged(newValue) {
    if (this._column !== null) {
      this._column.setMergeFunctionName(newValue);
    }
  };

  return Ui5Column;
}(), (_descriptor11 = _applyDecoratedDescriptor(_class15.prototype, 'ui5Id', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class15.prototype, 'width', [_dec22], {
  enumerable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class15.prototype, 'hAlign', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return 'Begin';
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class15.prototype, 'vAlign', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class15.prototype, 'styleClass', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class15.prototype, 'visible', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class15.prototype, 'minScreenWidth', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class15.prototype, 'demandPopin', [_dec28], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class15.prototype, 'popinHAlign', [_dec29], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class15.prototype, 'popinDisplay', [_dec30], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class15.prototype, 'mergeDuplicates', [_dec31], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor22 = _applyDecoratedDescriptor(_class15.prototype, 'mergeFunctionName', [_dec32], {
  enumerable: true,
  initializer: function initializer() {
    return 'getText';
  }
})), _class15)) || _class14) || _class14);
var Ui5ColumnListItem = exports.Ui5ColumnListItem = (_dec33 = (0, _aureliaTemplating.customElement)('ui5-column-list-item'), _dec34 = (0, _aureliaDependencyInjection.inject)(Element), _dec35 = (0, _aureliaTemplating.bindable)(), _dec33(_class17 = _dec34(_class17 = (_class18 = function () {
  function Ui5ColumnListItem(element) {
    _classCallCheck(this, Ui5ColumnListItem);

    this._item = null;

    _initDefineProp(this, 'vAlign', _descriptor23, this);

    this.element = element;
  }

  Ui5ColumnListItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5ColumnListItem.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);

    this._item = new sap.m.ColumnListItem({
      vAlign: this.vAlign
    });
    attributeManager.addAttributes({ "ui5-container": '' });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
  };

  Ui5ColumnListItem.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator4 = path, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        elem = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        elem = _i4.value;
      }

      if (elem.localName == 'cell') {
        this._item.addCell(child);break;
      }
    }
  };

  Ui5ColumnListItem.prototype.vAlignChanged = function vAlignChanged(newValue) {
    if (this._item !== null) {
      this._item.setVAlign(newValue);
    }
  };

  return Ui5ColumnListItem;
}(), (_descriptor23 = _applyDecoratedDescriptor(_class18.prototype, 'vAlign', [_dec35], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
})), _class18)) || _class17) || _class17);

var AttributeManager = exports.AttributeManager = function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this._colorClasses = ['accent', 'primary'];
    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this.element.getAttribute(k)) {
        _this.addedAttributes[k] = attrs[k];
        _this.element.setAttribute(k, attrs[k]);
      } else if (_this.element.getAttribute(k) !== attrs[k]) {
        _this.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this2 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this2.element.getAttribute(a) && !!_this2.addedAttributes[a]) {
        _this2.element.removeAttribute(a);
        _this2.addedAttributes[a] = null;
        delete _this2.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this3 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      var classListHasColor = _this3._colorClasses.filter(function (cc) {
        return _this3.element.classList.contains(cc);
      }).length > 0;
      if (_this3._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
        if (!_this3.element.classList.contains(c)) {
          _this3.addedClasses.push(c);
          _this3.element.classList.add(c);
        }
      }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this4 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this4.element.classList.contains(c) && _this4.addedClasses.indexOf(c) > -1) {
        _this4.element.classList.remove(c);
        _this4.addedClasses.splice(_this4.addedClasses.indexOf(c), 1);
      }
    });
  };

  return AttributeManager;
}();

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
}
function showBusyIndicator(delay) {
  sap.ui.core.BusyIndicator.show(delay);
}
function hideBusyIndicator() {
  sap.ui.core.BusyIndicator.hide();
}

var constants = exports.constants = {
  eventPrefix: 'md-on-',
  bindablePrefix: 'md-'
};

function fireEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);

  return event;
}

function fireMaterializeEvent(element, name) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  return fireEvent(element, '' + constants.eventPrefix + name, data);
}

function initialize() {
  new Promise(function (resolve) {
    return sap.ui.getCore().attachInit(function () {
      new sap.m.BusyIndicator().placeAt("indicator");
      resolve();
    });
  });
}

function showMessageBox(vMessage, mOptions) {
  var oDialog,
      oMessageText,
      vMessageContent,
      oResult = null,
      that = this,
      aButtons = [],
      i,
      sIcon,
      sTitle,
      vActions,
      fnCallback,
      sDialogId,
      sClass,
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
    "STANDARD": "sapMMessageBoxStandard"
  };
  if (mOptions && mOptions.hasOwnProperty("details")) {
    mDefaults.icon = "INFORMATION";
    mDefaults.actions = ["OK", "CANCEL"];
    mOptions = jQuery.extend({}, mDefaults, mOptions);
  }

  mOptions = jQuery.extend({}, mDefaults, mOptions);

  if (typeof mOptions.actions !== "undefined" && !jQuery.isArray(mOptions.actions)) {
    mOptions.actions = [mOptions.actions];
  }
  if (!mOptions.actions || mOptions.actions.length === 0) {
    mOptions.actions = ["OK"];
  }

  function button(sAction) {
    var sText;

    var oButton = new sap.m.Button({
      id: sap.ui.core.ElementMetadata.uid("mbox-btn-"),
      text: sText || sAction,
      press: function press() {
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
    if (_typeof(mOptions.details) == 'object') {
      mOptions.details = "<pre>" + JSON.stringify(mOptions.details, null, '\t').replace(/{/gi, "\\{") + "</pre>";
    }

    var oFT = new sap.m.FormattedText({
      htmlText: mOptions.details
    }).setVisible(false);

    var oShowLink = new sap.m.Link({
      text: sap.ui.getCore().getLibraryResourceBundle("sap.m").getText("MSGBOX_LINK_TITLE"),
      press: function press() {
        oFT.setVisible(true);
        this.setVisible(false);
        oDialog._setInitialFocus();
      }
    });

    oShowLink.addStyleClass("sapMMessageBoxLinkText");
    oFT.addStyleClass("sapMMessageBoxDetails");

    return new sap.m.VBox({
      items: [oMessageText, oShowLink, oFT]
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
      if (mOptions.initialFocus instanceof sap.ui.core.Control) {
        oInitialFocusControl = mOptions.initialFocus;
      }

      if (typeof mOptions.initialFocus === "string") {
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

  if (typeof vMessage === "string") {
    vMessageContent = new sap.m.Text({
      textDirection: mOptions.textDirection
    }).setText(vMessage).addStyleClass("sapMMsgBoxText");

    oMessageText = vMessageContent;
  } else if (vMessage instanceof sap.ui.core.Control) {
    vMessageContent = vMessage.addStyleClass("sapMMsgBoxText");
  }

  if (mOptions && mOptions.hasOwnProperty("details") && mOptions.details !== "") {
    vMessageContent = getInformationLayout(mOptions, vMessageContent);
  }

  function onOpen() {
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

function polyfillElementClosest() {
  if (typeof Element.prototype.matches !== 'function') {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
      var element = this;
      var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
      var index = 0;

      while (elements[index] && elements[index] !== element) {
        ++index;
      }
      return Boolean(elements[index]);
    };
  }

  if (typeof Element.prototype.closest !== 'function') {
    Element.prototype.closest = function closest(selector) {
      var element = this;

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

var SmoothScroll = exports.SmoothScroll = (_temp = _class21 = function () {
  function SmoothScroll(animator, router) {
    _classCallCheck(this, SmoothScroll);

    this.animator = animator;
    this.router = router;
    var config = SmoothScroll.defaultConfig;
    if (config.duration) this.duration = config.duration;
    if (config.easing) this.easing = config.easing;
  }

  SmoothScroll.prototype.scrollTo = function scrollTo(elementOrHash) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.body;


    var target = elementOrHash;
    var hash = null;

    if (typeof elementOrHash === "string" && elementOrHash.indexOf("#") === 0) {
      hash = elementOrHash.slice(1, elementOrHash.length);
      if (hash) {
        target = container.querySelector('[data-sap-ui="' + hash + '"]');
      } else {
        target = document.body;
      }
    }

    if (!target || typeof target === "string") return Promise.resolve();
    return this.animator.animate(target, "scroll", Object.assign({
      duration: this.duration,
      offset: SmoothScroll.getOffset(),
      easing: this.easing
    }, options));
  };

  SmoothScroll.getOffset = function getOffset() {
    return -document.querySelector(".sapUiBody").offsetTop;
  };

  return SmoothScroll;
}(), _class21.defaultConfig = {
  duration: 400,
  easing: "ease-in"
}, _class21.inject = [_aureliaFramework.Animator, _aureliaRouter.Router], _temp);

var Ui5Control = exports.Ui5Control = function (_Ui5Element) {
  _inherits(Ui5Control, _Ui5Element);

  function Ui5Control(elem) {
    _classCallCheck(this, Ui5Control);

    var _this5 = _possibleConstructorReturn(this, _Ui5Element.call(this, elem));

    _this5.busy = false;
    return _this5;
  }

  Ui5Control.prototype.addChild = function addChild(child, elem) {
    _Ui5Element.prototype.addChild.call(this, child, elem);
  };

  Ui5Control.prototype.removeChild = function removeChild(child, elem) {
    _Ui5Element.prototype.removeChild.call(this, child, elem);
  };

  Ui5Control.prototype.attached = function attached() {
    _Ui5Element.prototype.attached.call(this);
  };

  Ui5Control.prototype.fillProperties = function fillProperties(propertyObject) {
    propertyObject.busy = this.busy;
  };

  Ui5Control.prototype.busyChanged = function busyChanged(newValue) {
    if (this.UIElement != null) {
      this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Control;
}(Ui5Element);

var Ui5DatePicker = exports.Ui5DatePicker = (_dec36 = (0, _aureliaTemplating.customElement)('ui5-date-picker'), _dec37 = (0, _aureliaDependencyInjection.inject)(Element), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaTemplating.bindable)(), _dec40 = (0, _aureliaTemplating.bindable)(), _dec41 = (0, _aureliaTemplating.bindable)(), _dec42 = (0, _aureliaTemplating.bindable)(), _dec43 = (0, _aureliaTemplating.bindable)(), _dec44 = (0, _aureliaTemplating.bindable)(), _dec45 = (0, _aureliaTemplating.bindable)(), _dec46 = (0, _aureliaTemplating.bindable)(), _dec47 = (0, _aureliaTemplating.bindable)(), _dec48 = (0, _aureliaTemplating.bindable)(), _dec49 = (0, _aureliaTemplating.bindable)(), _dec50 = (0, _aureliaTemplating.bindable)(), _dec51 = (0, _aureliaTemplating.bindable)(), _dec52 = (0, _aureliaTemplating.bindable)(), _dec53 = (0, _aureliaTemplating.bindable)(), _dec54 = (0, _aureliaTemplating.bindable)(), _dec55 = (0, _aureliaTemplating.bindable)(), _dec56 = (0, _aureliaTemplating.bindable)(), _dec57 = (0, _aureliaTemplating.bindable)(), _dec58 = (0, _aureliaTemplating.bindable)(), _dec59 = (0, _aureliaTemplating.bindable)(), _dec36(_class23 = _dec37(_class23 = (_class24 = function (_Ui5InputBase) {
  _inherits(Ui5DatePicker, _Ui5InputBase);

  Ui5DatePicker.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5InputBase.prototype.addChild.call(this, child, elem);
  };

  _createClass(Ui5DatePicker, [{
    key: 'UIElement',
    get: function get() {
      return this._picker;
    }
  }]);

  function Ui5DatePicker(element) {
    _classCallCheck(this, Ui5DatePicker);

    var _this6 = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

    _this6._picker = null;

    _initDefineProp(_this6, 'ui5Id', _descriptor24, _this6);

    _initDefineProp(_this6, 'displayFormat', _descriptor25, _this6);

    _initDefineProp(_this6, 'valueFormat', _descriptor26, _this6);

    _initDefineProp(_this6, 'dateValue', _descriptor27, _this6);

    _initDefineProp(_this6, 'displayFormatType', _descriptor28, _this6);

    _initDefineProp(_this6, 'secondaryCalendarType', _descriptor29, _this6);

    _initDefineProp(_this6, 'minDate', _descriptor30, _this6);

    _initDefineProp(_this6, 'maxDate', _descriptor31, _this6);

    _initDefineProp(_this6, 'specialDates', _descriptor32, _this6);

    _initDefineProp(_this6, 'value', _descriptor33, _this6);

    _initDefineProp(_this6, 'width', _descriptor34, _this6);

    _initDefineProp(_this6, 'enabled', _descriptor35, _this6);

    _initDefineProp(_this6, 'valueState', _descriptor36, _this6);

    _initDefineProp(_this6, 'name', _descriptor37, _this6);

    _initDefineProp(_this6, 'placeholder', _descriptor38, _this6);

    _initDefineProp(_this6, 'editable', _descriptor39, _this6);

    _initDefineProp(_this6, 'valueStateText', _descriptor40, _this6);

    _initDefineProp(_this6, 'showValueStateMessage', _descriptor41, _this6);

    _initDefineProp(_this6, 'textAlign', _descriptor42, _this6);

    _initDefineProp(_this6, 'textDirection', _descriptor43, _this6);

    _initDefineProp(_this6, 'required', _descriptor44, _this6);

    _initDefineProp(_this6, 'change', _descriptor45, _this6);

    _this6.element = element;
    return _this6;
  }

  Ui5DatePicker.prototype.defaultFunc = function defaultFunc() {};

  Ui5DatePicker.prototype.attached = function attached() {
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
    if (this.ui5Id) this._picker = new sap.m.DatePicker(this.ui5Id, params);else this._picker = new sap.m.DatePicker(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._picker, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    var that = this;
    this._picker.attachChange(function (event) {
      that.value = event.mParameters.value;
    });

    this._picker.addEventDelegate(this.element);
    _Ui5InputBase.prototype.attached.call(this);
  };

  Ui5DatePicker.prototype.displayFormatChanged = function displayFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormat(newValue);
    }
  };

  Ui5DatePicker.prototype.valueFormatChanged = function valueFormatChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueFormat(newValue);
    }
  };

  Ui5DatePicker.prototype.dateValueChanged = function dateValueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDateValue(newValue);
    }
  };

  Ui5DatePicker.prototype.displayFormatTypeChanged = function displayFormatTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setDisplayFormatType(newValue);
    }
  };

  Ui5DatePicker.prototype.secondaryCalendarTypeChanged = function secondaryCalendarTypeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setSecondaryCalendarType(newValue);
    }
  };

  Ui5DatePicker.prototype.minDateChanged = function minDateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setMinDate(newValue);
    }
  };

  Ui5DatePicker.prototype.specialDatesChanged = function specialDatesChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setSpecialDates(newValue);
    }
  };

  return Ui5DatePicker;
}(Ui5InputBase), (_descriptor24 = _applyDecoratedDescriptor(_class24.prototype, 'ui5Id', [_dec38], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class24.prototype, 'displayFormat', [_dec39], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class24.prototype, 'valueFormat', [_dec40], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class24.prototype, 'dateValue', [_dec41], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class24.prototype, 'displayFormatType', [_dec42], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class24.prototype, 'secondaryCalendarType', [_dec43], {
  enumerable: true,
  initializer: function initializer() {
    return 'Gregorian';
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class24.prototype, 'minDate', [_dec44], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class24.prototype, 'maxDate', [_dec45], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class24.prototype, 'specialDates', [_dec46], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor33 = _applyDecoratedDescriptor(_class24.prototype, 'value', [_dec47], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class24.prototype, 'width', [_dec48], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class24.prototype, 'enabled', [_dec49], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor36 = _applyDecoratedDescriptor(_class24.prototype, 'valueState', [_dec50], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor37 = _applyDecoratedDescriptor(_class24.prototype, 'name', [_dec51], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor38 = _applyDecoratedDescriptor(_class24.prototype, 'placeholder', [_dec52], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class24.prototype, 'editable', [_dec53], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class24.prototype, 'valueStateText', [_dec54], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class24.prototype, 'showValueStateMessage', [_dec55], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor42 = _applyDecoratedDescriptor(_class24.prototype, 'textAlign', [_dec56], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor43 = _applyDecoratedDescriptor(_class24.prototype, 'textDirection', [_dec57], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class24.prototype, 'required', [_dec58], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class24.prototype, 'change', [_dec59], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class24)) || _class23) || _class23);
var Ui5Container = exports.Ui5Container = (_dec60 = (0, _aureliaTemplating.customAttribute)('ui5-container'), _dec61 = (0, _aureliaDependencyInjection.inject)(Element), _dec60(_class26 = _dec61(_class26 = function () {
  function Ui5Container(element) {
    _classCallCheck(this, Ui5Container);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5Container.prototype.attached = function attached() {};

  Ui5Container.prototype.detached = function detached() {};

  return Ui5Container;
}()) || _class26) || _class26);
var Ui5DynamicPageTitle = exports.Ui5DynamicPageTitle = (_dec62 = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-title'), _dec63 = (0, _aureliaDependencyInjection.inject)(Element), _dec62(_class27 = _dec63(_class27 = function () {
  function Ui5DynamicPageTitle(element) {
    _classCallCheck(this, Ui5DynamicPageTitle);

    this._title = null;

    this.element = element;
  }

  Ui5DynamicPageTitle.prototype.defaultFunc = function defaultFunc() {};

  Ui5DynamicPageTitle.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator5 = path, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
      if (_isArray5) {
        if (_i5 >= _iterator5.length) break;
        elem = _iterator5[_i5++];
      } else {
        _i5 = _iterator5.next();
        if (_i5.done) break;
        elem = _i5.value;
      }

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
  };

  Ui5DynamicPageTitle.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator6 = path, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      if (_isArray6) {
        if (_i6 >= _iterator6.length) break;
        elem = _iterator6[_i6++];
      } else {
        _i6 = _iterator6.next();
        if (_i6.done) break;
        elem = _i6.value;
      }

      if (elem.localName == 'heading') {
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
  };

  Ui5DynamicPageTitle.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._title = new sap.f.DynamicPageTitle({});

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
  };

  Ui5DynamicPageTitle.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._title, this.element);
    } else {
      this._title.destroy();
    }
  };

  return Ui5DynamicPageTitle;
}()) || _class27) || _class27);
var Ui5FeedContent = exports.Ui5FeedContent = (_dec64 = (0, _aureliaTemplating.customElement)('ui5-feed-content'), _dec65 = (0, _aureliaDependencyInjection.inject)(Element), _dec66 = (0, _aureliaTemplating.bindable)(), _dec67 = (0, _aureliaTemplating.bindable)(), _dec68 = (0, _aureliaTemplating.bindable)(), _dec69 = (0, _aureliaTemplating.bindable)(), _dec64(_class29 = _dec65(_class29 = (_class30 = function () {
  function Ui5FeedContent(element) {
    _classCallCheck(this, Ui5FeedContent);

    this._content = null;

    _initDefineProp(this, 'value', _descriptor46, this);

    _initDefineProp(this, 'contentText', _descriptor47, this);

    _initDefineProp(this, 'subheader', _descriptor48, this);

    _initDefineProp(this, 'valueColor', _descriptor49, this);

    this.element = element;
  }

  Ui5FeedContent.prototype.attached = function attached() {
    this._content = new sap.m.FeedContent({
      value: this.value,
      contentText: this.contentText,
      subheader: this.subheader,
      valueColor: this.valueColor
    });
    $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
  };

  Ui5FeedContent.prototype.detached = function detached() {
    $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
  };

  Ui5FeedContent.prototype.valueChanged = function valueChanged(newValue) {
    if (this._content != null) {
      this._content.setValue(newValue);
    }
  };

  Ui5FeedContent.prototype.valueColorChanged = function valueColorChanged(newValue) {
    if (this._content != null) {
      this._content.setValueColor(newValue);
    }
  };

  Ui5FeedContent.prototype.contentTextChanged = function contentTextChanged(newValue) {
    if (this._content != null) {
      this._content.setContentText(newValue);
    }
  };

  Ui5FeedContent.prototype.subheaderChanged = function subheaderChanged(newValue) {
    if (this._content != null) {
      this._content.setSubheader(newValue);
    }
  };

  return Ui5FeedContent;
}(), (_descriptor46 = _applyDecoratedDescriptor(_class30.prototype, 'value', [_dec66], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor47 = _applyDecoratedDescriptor(_class30.prototype, 'contentText', [_dec67], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor48 = _applyDecoratedDescriptor(_class30.prototype, 'subheader', [_dec68], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor49 = _applyDecoratedDescriptor(_class30.prototype, 'valueColor', [_dec69], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class30)) || _class29) || _class29);
var Ui5DynamicPage = exports.Ui5DynamicPage = (_dec70 = (0, _aureliaTemplating.customElement)('ui5-dynamic-page'), _dec71 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaFramework.TaskQueue), _dec72 = (0, _aureliaTemplating.bindable)(), _dec73 = (0, _aureliaTemplating.bindable)(), _dec74 = (0, _aureliaTemplating.bindable)(), _dec75 = (0, _aureliaTemplating.bindable)(), _dec76 = (0, _aureliaTemplating.bindable)(), _dec77 = (0, _aureliaFramework.computedFrom)('_page'), _dec70(_class32 = _dec71(_class32 = (_class33 = function () {
  function Ui5DynamicPage(element, queue) {
    _classCallCheck(this, Ui5DynamicPage);

    _initDefineProp(this, 'preserveHeaderStateOnScroll', _descriptor50, this);

    _initDefineProp(this, 'headerExpanded', _descriptor51, this);

    _initDefineProp(this, 'toggleHeaderOnTitleClick', _descriptor52, this);

    _initDefineProp(this, 'showFooter', _descriptor53, this);

    _initDefineProp(this, 'fitContent', _descriptor54, this);

    this._page = null;
    this._taskQueue = null;

    this.element = element;
    this._taskQueue = queue;
  }

  Ui5DynamicPage.prototype.defaultFunc = function defaultFunc() {};

  Ui5DynamicPage.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator7 = path, _isArray7 = Array.isArray(_iterator7), _i7 = 0, _iterator7 = _isArray7 ? _iterator7 : _iterator7[Symbol.iterator]();;) {
      if (_isArray7) {
        if (_i7 >= _iterator7.length) break;
        elem = _iterator7[_i7++];
      } else {
        _i7 = _iterator7.next();
        if (_i7.done) break;
        elem = _i7.value;
      }

      if (elem.localName == 'heading') {
        this._page.setHeader(child);

        break;
      }
      if (elem.localName == 'pagetitle') {
        this._page.setTitle(child);

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
  };

  Ui5DynamicPage.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator8 = path, _isArray8 = Array.isArray(_iterator8), _i8 = 0, _iterator8 = _isArray8 ? _iterator8 : _iterator8[Symbol.iterator]();;) {
      if (_isArray8) {
        if (_i8 >= _iterator8.length) break;
        elem = _iterator8[_i8++];
      } else {
        _i8 = _iterator8.next();
        if (_i8.done) break;
        elem = _i8.value;
      }

      if (elem.localName == 'header') {
        break;
      }

      if (elem.localName == 'content') {
        break;
      }
      if (elem.localName == 'footer') {
        break;
      }
    }
  };

  Ui5DynamicPage.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.f.DynamicPage({
      preserveHeaderStateOnScroll: getBooleanFromAttributeValue(this.preserveHeaderStateOnScroll),
      headerExpanded: getBooleanFromAttributeValue(this.headerExpanded),
      toggleHeaderOnTitleClick: getBooleanFromAttributeValue(this.toggleHeaderOnTitleClick),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      fitContent: getBooleanFromAttributeValue(this.fitContent)
    });
    this._page = page;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._page, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._page.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5DynamicPage.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
    } else {
      this._page.destroy();
    }
  };

  Ui5DynamicPage.prototype.showFooterChanged = function showFooterChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5DynamicPage.prototype.preserveHeaderStateOnScrollChanged = function preserveHeaderStateOnScrollChanged(newValue) {
    if (this._page !== null) {
      this._page.setPreserveHeaderStateOnScroll(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5DynamicPage.prototype.headerExpandedChanged = function headerExpandedChanged(newValue) {
    if (this._page !== null) {
      this._page.setHeaderExpanded(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5DynamicPage.prototype.toggleHeaderOnTitleClickChanged = function toggleHeaderOnTitleClickChanged(newValue) {
    if (this._page !== null) {
      this._page.setToggleHeaderOnTitleClick(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5DynamicPage.prototype.fitContentChanged = function fitContentChanged(newValue) {
    if (this._page !== null) {
      this._page.setFitContent(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5DynamicPage, [{
    key: 'UIElement',
    get: function get() {
      return this._page;
    }
  }]);

  return Ui5DynamicPage;
}(), (_descriptor50 = _applyDecoratedDescriptor(_class33.prototype, 'preserveHeaderStateOnScroll', [_dec72], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class33.prototype, 'headerExpanded', [_dec73], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class33.prototype, 'toggleHeaderOnTitleClick', [_dec74], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor53 = _applyDecoratedDescriptor(_class33.prototype, 'showFooter', [_dec75], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor54 = _applyDecoratedDescriptor(_class33.prototype, 'fitContent', [_dec76], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class33.prototype, 'UIElement', [_dec77], Object.getOwnPropertyDescriptor(_class33.prototype, 'UIElement'), _class33.prototype)), _class33)) || _class32) || _class32);
var Ui5Form = exports.Ui5Form = (_dec78 = (0, _aureliaTemplating.customElement)('ui5-form'), _dec79 = (0, _aureliaDependencyInjection.inject)(Element), _dec80 = (0, _aureliaTemplating.bindable)(), _dec81 = (0, _aureliaTemplating.bindable)(), _dec82 = (0, _aureliaTemplating.bindable)(), _dec83 = (0, _aureliaTemplating.bindable)(), _dec84 = (0, _aureliaFramework.computedFrom)('_form'), _dec78(_class35 = _dec79(_class35 = (_class36 = function () {
  function Ui5Form(element) {
    _classCallCheck(this, Ui5Form);

    _initDefineProp(this, 'ui5Id', _descriptor55, this);

    _initDefineProp(this, 'width', _descriptor56, this);

    _initDefineProp(this, 'editable', _descriptor57, this);

    _initDefineProp(this, 'title', _descriptor58, this);

    this._form = null;

    this.element = element;
  }

  Ui5Form.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator9 = path, _isArray9 = Array.isArray(_iterator9), _i9 = 0, _iterator9 = _isArray9 ? _iterator9 : _iterator9[Symbol.iterator]();;) {
      if (_isArray9) {
        if (_i9 >= _iterator9.length) break;
        elem = _iterator9[_i9++];
      } else {
        _i9 = _iterator9.next();
        if (_i9.done) break;
        elem = _i9.value;
      }

      if (elem.localName == 'toolbar') {
        this._form.setToolbar(child);
        break;
      }
      if (elem.localName == 'titleElement') {
        this._form.setTitle(child);
        break;
      }
      if (elem.localName == 'layout') {
        this._form.setLayout(child);
        break;
      }
      if (elem.localName == 'container') {
        this._form.addFormContainer(child);
        break;
      }
    }
  };

  Ui5Form.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      editable: getBooleanFromAttributeValue(this.editable),
      width: this.width,
      title: this.title
    };
    if (this.ui5Id) this._form = new sap.ui.layout.form.Form(this.ui5Id, params);else this._form = new sap.ui.layout.form.Form(params);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Form.prototype.editableChanged = function editableChanged(newValue) {
    if (this._form !== null) {
      this._form.setEditable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Form.prototype.widthChanged = function widthChanged(newValue) {
    if (this._form !== null) {
      this._form.setWidth(newValue);
    }
  };

  Ui5Form.prototype.titleChanged = function titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  };

  _createClass(Ui5Form, [{
    key: 'UIElement',
    get: function get() {
      return this._form;
    }
  }]);

  return Ui5Form;
}(), (_descriptor55 = _applyDecoratedDescriptor(_class36.prototype, 'ui5Id', [_dec80], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor56 = _applyDecoratedDescriptor(_class36.prototype, 'width', [_dec81], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor57 = _applyDecoratedDescriptor(_class36.prototype, 'editable', [_dec82], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor58 = _applyDecoratedDescriptor(_class36.prototype, 'title', [_dec83], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class36.prototype, 'UIElement', [_dec84], Object.getOwnPropertyDescriptor(_class36.prototype, 'UIElement'), _class36.prototype)), _class36)) || _class35) || _class35);
var Ui5FormContainer = exports.Ui5FormContainer = (_dec85 = (0, _aureliaTemplating.customElement)('ui5-form-container'), _dec86 = (0, _aureliaDependencyInjection.inject)(Element), _dec87 = (0, _aureliaTemplating.bindable)(), _dec88 = (0, _aureliaTemplating.bindable)(), _dec85(_class38 = _dec86(_class38 = (_class39 = function () {
  function Ui5FormContainer(element) {
    _classCallCheck(this, Ui5FormContainer);

    _initDefineProp(this, 'ui5Id', _descriptor59, this);

    _initDefineProp(this, 'title', _descriptor60, this);

    this._form = null;

    this.element = element;
  }

  Ui5FormContainer.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator10 = path, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
      if (_isArray10) {
        if (_i10 >= _iterator10.length) break;
        elem = _iterator10[_i10++];
      } else {
        _i10 = _iterator10.next();
        if (_i10.done) break;
        elem = _i10.value;
      }

      if (elem.localName == 'toolbar') this._form.setToolbar(child);
      if (elem.localName == 'titleElement') this._form.setTitle(child);
      if (elem.localName == 'element') this._form.addFormElement(child);
    }
  };

  Ui5FormContainer.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {
      title: this.title
    };
    if (this.uiId5) this._form = new sap.ui.layout.form.FormContainer(this.ui5Id, params);else this._form = new sap.ui.layout.form.FormContainer(params);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5FormContainer.prototype.titleChanged = function titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  };

  return Ui5FormContainer;
}(), (_descriptor59 = _applyDecoratedDescriptor(_class39.prototype, 'ui5Id', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class39.prototype, 'title', [_dec88], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class39)) || _class38) || _class38);
var Ui5FormElement = exports.Ui5FormElement = (_dec89 = (0, _aureliaTemplating.customElement)('ui5-form-element'), _dec90 = (0, _aureliaDependencyInjection.inject)(Element), _dec91 = (0, _aureliaTemplating.bindable)(), _dec89(_class41 = _dec90(_class41 = (_class42 = function () {
  function Ui5FormElement(element) {
    _classCallCheck(this, Ui5FormElement);

    _initDefineProp(this, 'ui5Id', _descriptor61, this);

    this._form = null;

    this.element = element;
  }

  Ui5FormElement.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator11 = path, _isArray11 = Array.isArray(_iterator11), _i11 = 0, _iterator11 = _isArray11 ? _iterator11 : _iterator11[Symbol.iterator]();;) {
      if (_isArray11) {
        if (_i11 >= _iterator11.length) break;
        elem = _iterator11[_i11++];
      } else {
        _i11 = _iterator11.next();
        if (_i11.done) break;
        elem = _i11.value;
      }

      if (elem.localName == 'label') {
        this._form.setLabel(child);
        break;
      }
      if (elem.localName == 'field') {
        this._form.addField(child);
        break;
      }
    }
  };

  Ui5FormElement.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var params = {};
    if (this.uiId5) this._form = new sap.ui.layout.form.FormElement(this.ui5Id, params);else this._form = new sap.ui.layout.form.FormElement(params);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5FormElement.prototype.titleChanged = function titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  };

  return Ui5FormElement;
}(), (_descriptor61 = _applyDecoratedDescriptor(_class42.prototype, 'ui5Id', [_dec91], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class42)) || _class41) || _class41);
var Ui5FormattedText = exports.Ui5FormattedText = (_dec92 = (0, _aureliaTemplating.customElement)('ui5-formatted-text'), _dec93 = (0, _aureliaDependencyInjection.inject)(Element), _dec94 = (0, _aureliaTemplating.bindable)(), _dec95 = (0, _aureliaTemplating.bindable)(), _dec96 = (0, _aureliaTemplating.bindable)(), _dec97 = (0, _aureliaTemplating.bindable)(), _dec98 = (0, _aureliaTemplating.bindable)(), _dec92(_class44 = _dec93(_class44 = (_class45 = function () {
  function Ui5FormattedText(element) {
    _classCallCheck(this, Ui5FormattedText);

    this._text = null;

    _initDefineProp(this, 'htmlText', _descriptor62, this);

    _initDefineProp(this, 'width', _descriptor63, this);

    _initDefineProp(this, 'height', _descriptor64, this);

    _initDefineProp(this, 'convertLinksToAnchorTags', _descriptor65, this);

    _initDefineProp(this, 'convertedLinksDefaultTarget', _descriptor66, this);

    this.element = element;
  }

  Ui5FormattedText.prototype.attached = function attached() {

    this._text = new sap.m.FormattedText({
      htmlText: this.htmlText != null ? this.htmlText : this.element.innerHtml.trim(),
      width: this.width,
      height: this.height,
      convertedLinksDefaultTarget: this.convertedLinksDefaultTarget,
      convertLinksToAnchorTags: this.convertLinksToAnchorTags
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  };

  Ui5FormattedText.prototype.htmlTextChanged = function htmlTextChanged(newValue) {
    if (this._text != null) {
      this._text.setHtmlText(newValue);
    }
  };

  Ui5FormattedText.prototype.widthChanged = function widthChanged(newValue) {
    if (this._text !== null) {
      this._text.setWidth(newValue);
    }
  };

  Ui5FormattedText.prototype.heightChanged = function heightChanged(newValue) {
    if (this._text !== null) {
      this._text.setHeight(newValue);
    }
  };

  Ui5FormattedText.prototype.convertedLinksDefaultTargetChanged = function convertedLinksDefaultTargetChanged(newValue) {
    if (this._text !== null) {
      this._text.setConvertedLinksDefaultTarget(newValue);
    }
  };

  Ui5FormattedText.prototype.convertLinksToAnchorTagsChanged = function convertLinksToAnchorTagsChanged(newValue) {
    if (this._text !== null) {
      this._text.setConvertLinksToAnchorTags(newValue);
    }
  };

  return Ui5FormattedText;
}(), (_descriptor62 = _applyDecoratedDescriptor(_class45.prototype, 'htmlText', [_dec94], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor63 = _applyDecoratedDescriptor(_class45.prototype, 'width', [_dec95], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor64 = _applyDecoratedDescriptor(_class45.prototype, 'height', [_dec96], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor65 = _applyDecoratedDescriptor(_class45.prototype, 'convertLinksToAnchorTags', [_dec97], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor66 = _applyDecoratedDescriptor(_class45.prototype, 'convertedLinksDefaultTarget', [_dec98], {
  enumerable: true,
  initializer: function initializer() {
    return '_blank';
  }
})), _class45)) || _class44) || _class44);
var Ui5GenericTile = exports.Ui5GenericTile = (_dec99 = (0, _aureliaTemplating.customElement)('ui5-generic-tile'), _dec100 = (0, _aureliaDependencyInjection.inject)(Element), _dec101 = (0, _aureliaTemplating.bindable)(), _dec102 = (0, _aureliaTemplating.bindable)(), _dec103 = (0, _aureliaTemplating.bindable)(), _dec104 = (0, _aureliaTemplating.bindable)(), _dec105 = (0, _aureliaTemplating.bindable)(), _dec99(_class47 = _dec100(_class47 = (_class48 = function () {
  function Ui5GenericTile(element) {
    _classCallCheck(this, Ui5GenericTile);

    this._tile = null;

    _initDefineProp(this, 'mode', _descriptor67, this);

    _initDefineProp(this, 'header', _descriptor68, this);

    _initDefineProp(this, 'subheader', _descriptor69, this);

    _initDefineProp(this, 'press', _descriptor70, this);

    _initDefineProp(this, 'frameType', _descriptor71, this);

    this.element = element;
  }

  Ui5GenericTile.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._tile.addTileContent(child);
  };

  Ui5GenericTile.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._tile.removeTileContent(child);
  };

  Ui5GenericTile.prototype.defaultPress = function defaultPress() {};

  Ui5GenericTile.prototype.attached = function attached() {
    this._tile = new sap.m.GenericTile({
      header: this.header,
      subheader: this.subheader,
      press: this.press != null ? this.press : this.defaultPress,
      frameType: this.frameType
    });
    this._tile.addStyleClass('sapUiTinyMarginTop');
    this._tile.addStyleClass('sapUiTinyMarginBegin');

    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tile, this.element);
  };

  Ui5GenericTile.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tile, this.element);
  };

  Ui5GenericTile.prototype.headerChanged = function headerChanged(newValue) {
    if (this._tile != null) {
      this._tile.setHeader(newValue);
    }
  };

  Ui5GenericTile.prototype.subheaderChanged = function subheaderChanged(newValue) {
    if (this._tile != null) {
      this._tile.setSubheader(newValue);
    }
  };

  Ui5GenericTile.prototype.pressChanged = function pressChanged(newValue) {
    if (this._tile !== null) {
      this._tile.attachPress(newValue);
    }
  };

  Ui5GenericTile.prototype.frameTypeChanged = function frameTypeChanged(newValue) {
    if (this._tile !== null) {
      this._tile.setFrameType(newValue);
    }
  };

  return Ui5GenericTile;
}(), (_descriptor67 = _applyDecoratedDescriptor(_class48.prototype, 'mode', [_dec101], {
  enumerable: true,
  initializer: function initializer() {
    return "content";
  }
}), _descriptor68 = _applyDecoratedDescriptor(_class48.prototype, 'header', [_dec102], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor69 = _applyDecoratedDescriptor(_class48.prototype, 'subheader', [_dec103], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor70 = _applyDecoratedDescriptor(_class48.prototype, 'press', [_dec104], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor71 = _applyDecoratedDescriptor(_class48.prototype, 'frameType', [_dec105], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class48)) || _class47) || _class47);
var Ui5GridData = exports.Ui5GridData = (_dec106 = (0, _aureliaTemplating.customElement)('ui5-grid-data'), _dec107 = (0, _aureliaDependencyInjection.inject)(Element), _dec108 = (0, _aureliaTemplating.bindable)(), _dec109 = (0, _aureliaTemplating.bindable)(), _dec106(_class50 = _dec107(_class50 = (_class51 = function () {
  function Ui5GridData(element) {
    _classCallCheck(this, Ui5GridData);

    this._gridData = null;

    _initDefineProp(this, 'id', _descriptor72, this);

    _initDefineProp(this, 'span', _descriptor73, this);

    this.element = element;
  }

  Ui5GridData.prototype.attached = function attached() {

    this._gridData = new sap.ui.layout.GridData({
      span: this.span

    });
    $(this.element).parents("[ui5-layout]")[0].au.controller.viewModel.addChild(this._gridData, this.element);
  };

  Ui5GridData.prototype.spanChanged = function spanChanged(newValue) {
    if (this._gridData !== null) {
      this._gridData.setSpan(newValue);
    }
  };

  return Ui5GridData;
}(), (_descriptor72 = _applyDecoratedDescriptor(_class51.prototype, 'id', [_dec108], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor73 = _applyDecoratedDescriptor(_class51.prototype, 'span', [_dec109], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class51)) || _class50) || _class50);
var Ui5Grid = exports.Ui5Grid = (_dec110 = (0, _aureliaTemplating.customElement)('ui5-grid'), _dec111 = (0, _aureliaDependencyInjection.inject)(Element), _dec112 = (0, _aureliaTemplating.bindable)(), _dec110(_class53 = _dec111(_class53 = (_class54 = function () {
  function Ui5Grid(element) {
    _classCallCheck(this, Ui5Grid);

    this._grid = null;

    _initDefineProp(this, 'defaultSpan', _descriptor74, this);

    this.element = element;
  }

  Ui5Grid.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator12 = path, _isArray12 = Array.isArray(_iterator12), _i12 = 0, _iterator12 = _isArray12 ? _iterator12 : _iterator12[Symbol.iterator]();;) {
      if (_isArray12) {
        if (_i12 >= _iterator12.length) break;
        elem = _iterator12[_i12++];
      } else {
        _i12 = _iterator12.next();
        if (_i12.done) break;
        elem = _i12.value;
      }

      if (elem.localName == 'content') {
        this._grid.addContent(child);
        break;
      }
    }
  };

  Ui5Grid.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._grid.removeContent(child);
  };

  Ui5Grid.prototype.defaultPress = function defaultPress() {};

  Ui5Grid.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);

    this._grid = new sap.ui.layout.Grid({
      defaultSpan: this.defaultSpan
    });
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._grid, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
  };

  Ui5Grid.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._grid, this.element);
  };

  Ui5Grid.prototype.defaultSpanChanged = function defaultSpanChanged(newValue) {
    if (this._grid != null) {
      this._grid.setDefaultSpan(newValue);
    }
  };

  return Ui5Grid;
}(), (_descriptor74 = _applyDecoratedDescriptor(_class54.prototype, 'defaultSpan', [_dec112], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class54)) || _class53) || _class53);
var Ui5Html = exports.Ui5Html = (_dec113 = (0, _aureliaTemplating.customElement)('ui5-html'), _dec114 = (0, _aureliaDependencyInjection.inject)(Element), _dec113(_class56 = _dec114(_class56 = function () {
  function Ui5Html(element) {
    _classCallCheck(this, Ui5Html);

    this._html = null;

    this.element = element;
  }

  Ui5Html.prototype.attached = function attached() {

    this._html = new sap.ui.core.HTML();
    this._html.setContent(this.content.innerHTML);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._html, this.element);
  };

  return Ui5Html;
}()) || _class56) || _class56);
var Ui5IconTabBar = exports.Ui5IconTabBar = (_dec115 = (0, _aureliaTemplating.customElement)('ui5-icon-tab-bar'), _dec116 = (0, _aureliaDependencyInjection.inject)(Element), _dec117 = (0, _aureliaTemplating.bindable)(), _dec118 = (0, _aureliaTemplating.bindable)(), _dec119 = (0, _aureliaTemplating.bindable)(), _dec120 = (0, _aureliaTemplating.bindable)(), _dec121 = (0, _aureliaTemplating.bindable)(), _dec122 = (0, _aureliaTemplating.bindable)(), _dec123 = (0, _aureliaTemplating.bindable)(), _dec124 = (0, _aureliaTemplating.bindable)(), _dec125 = (0, _aureliaTemplating.bindable)(), _dec126 = (0, _aureliaTemplating.bindable)(), _dec127 = (0, _aureliaTemplating.bindable)(), _dec128 = (0, _aureliaTemplating.bindable)(), _dec129 = (0, _aureliaTemplating.bindable)(), _dec115(_class58 = _dec116(_class58 = (_class59 = function () {
  function Ui5IconTabBar(element) {
    _classCallCheck(this, Ui5IconTabBar);

    this._tab = null;

    _initDefineProp(this, 'showSelection', _descriptor75, this);

    _initDefineProp(this, 'expandable', _descriptor76, this);

    _initDefineProp(this, 'expanded', _descriptor77, this);

    _initDefineProp(this, 'selectedKey', _descriptor78, this);

    _initDefineProp(this, 'upperCase', _descriptor79, this);

    _initDefineProp(this, 'stretchContentHeight', _descriptor80, this);

    _initDefineProp(this, 'applyContentPadding', _descriptor81, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor82, this);

    _initDefineProp(this, 'headerMode', _descriptor83, this);

    _initDefineProp(this, 'showOverflowSelectList', _descriptor84, this);

    _initDefineProp(this, 'headerBackgroundDesign', _descriptor85, this);

    _initDefineProp(this, 'enableTabReordering', _descriptor86, this);

    _initDefineProp(this, 'select', _descriptor87, this);

    this.element = element;
  }

  Ui5IconTabBar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5IconTabBar.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator13 = path, _isArray13 = Array.isArray(_iterator13), _i13 = 0, _iterator13 = _isArray13 ? _iterator13 : _iterator13[Symbol.iterator]();;) {
      if (_isArray13) {
        if (_i13 >= _iterator13.length) break;
        elem = _iterator13[_i13++];
      } else {
        _i13 = _iterator13.next();
        if (_i13.done) break;
        elem = _i13.value;
      }

      if (elem.localName == 'content') {
        this._tab.addItem(child);
        break;
      }
    }
  };

  Ui5IconTabBar.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator14 = path, _isArray14 = Array.isArray(_iterator14), _i14 = 0, _iterator14 = _isArray14 ? _iterator14 : _iterator14[Symbol.iterator]();;) {
      if (_isArray14) {
        if (_i14 >= _iterator14.length) break;
        elem = _iterator14[_i14++];
      } else {
        _i14 = _iterator14.next();
        if (_i14.done) break;
        elem = _i14.value;
      }

      if (elem.localName == 'content') {
        this._tab.removeItem(child);
        break;
      }
    }
  };

  Ui5IconTabBar.prototype.attached = function attached() {
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
    this._tab.attachSelect(function (event) {
      that.selectedKey = event.mParameters.selectedItem.mProperties.text;
    });
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5IconTabBar.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    } else {
      this._tab.destroy();
    }
  };

  Ui5IconTabBar.prototype.showSelectionChanged = function showSelectionChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowSelection(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.expandableChanged = function expandableChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setExpandable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.expandedChanged = function expandedChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setExpanded(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setSelectedKey(newValue);
    }
  };

  Ui5IconTabBar.prototype.upperCaseChanged = function upperCaseChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setUpperCase(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.stretchContentHeightChanged = function stretchContentHeightChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setStretchContentHeight(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.applyContentPaddingChanged = function applyContentPaddingChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setApplyContentPadding(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setBackgroundDesign(newValue);
    }
  };

  Ui5IconTabBar.prototype.headerModeChanged = function headerModeChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setHeaderMode(newValue);
    }
  };

  Ui5IconTabBar.prototype.showOverflowSelectListChanged = function showOverflowSelectListChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowOverflowSelectList(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5IconTabBar.prototype.headerBackgroundDesignChanged = function headerBackgroundDesignChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setHeaderBackgroundDesign(newValue);
    }
  };

  Ui5IconTabBar.prototype.enableTabReorderingChanged = function enableTabReorderingChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setEnableTabReordering(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5IconTabBar;
}(), (_descriptor75 = _applyDecoratedDescriptor(_class59.prototype, 'showSelection', [_dec117], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor76 = _applyDecoratedDescriptor(_class59.prototype, 'expandable', [_dec118], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor77 = _applyDecoratedDescriptor(_class59.prototype, 'expanded', [_dec119], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor78 = _applyDecoratedDescriptor(_class59.prototype, 'selectedKey', [_dec120], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor79 = _applyDecoratedDescriptor(_class59.prototype, 'upperCase', [_dec121], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor80 = _applyDecoratedDescriptor(_class59.prototype, 'stretchContentHeight', [_dec122], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor81 = _applyDecoratedDescriptor(_class59.prototype, 'applyContentPadding', [_dec123], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor82 = _applyDecoratedDescriptor(_class59.prototype, 'backgroundDesign', [_dec124], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor83 = _applyDecoratedDescriptor(_class59.prototype, 'headerMode', [_dec125], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor84 = _applyDecoratedDescriptor(_class59.prototype, 'showOverflowSelectList', [_dec126], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor85 = _applyDecoratedDescriptor(_class59.prototype, 'headerBackgroundDesign', [_dec127], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor86 = _applyDecoratedDescriptor(_class59.prototype, 'enableTabReordering', [_dec128], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor87 = _applyDecoratedDescriptor(_class59.prototype, 'select', [_dec129], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class59)) || _class58) || _class58);
var Ui5IconTabFilter = exports.Ui5IconTabFilter = (_dec130 = (0, _aureliaTemplating.customElement)('ui5-icon-tab-filter'), _dec131 = (0, _aureliaDependencyInjection.inject)(Element), _dec132 = (0, _aureliaTemplating.bindable)(), _dec130(_class61 = _dec131(_class61 = (_class62 = function () {
  function Ui5IconTabFilter(element) {
    _classCallCheck(this, Ui5IconTabFilter);

    this._tab = null;

    _initDefineProp(this, 'text', _descriptor88, this);

    this.element = element;
  }

  Ui5IconTabFilter.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5IconTabFilter.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator15 = path, _isArray15 = Array.isArray(_iterator15), _i15 = 0, _iterator15 = _isArray15 ? _iterator15 : _iterator15[Symbol.iterator]();;) {
      if (_isArray15) {
        if (_i15 >= _iterator15.length) break;
        elem = _iterator15[_i15++];
      } else {
        _i15 = _iterator15.next();
        if (_i15.done) break;
        elem = _i15.value;
      }

      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  };

  Ui5IconTabFilter.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator16 = path, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
      if (_isArray16) {
        if (_i16 >= _iterator16.length) break;
        elem = _iterator16[_i16++];
      } else {
        _i16 = _iterator16.next();
        if (_i16.done) break;
        elem = _i16.value;
      }

      if (elem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  };

  Ui5IconTabFilter.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.IconTabFilter({
      text: this.text
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5IconTabFilter.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    } else {
      this._tab.destroy();
    }
  };

  Ui5IconTabFilter.prototype.textChanged = function textChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setText(newValue);
    }
  };

  return Ui5IconTabFilter;
}(), (_descriptor88 = _applyDecoratedDescriptor(_class62.prototype, 'text', [_dec132], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class62)) || _class61) || _class61);
var Ui5Input = exports.Ui5Input = (_dec133 = (0, _aureliaTemplating.customElement)('ui5-input'), _dec134 = (0, _aureliaDependencyInjection.inject)(Element), _dec135 = (0, _aureliaTemplating.bindable)(), _dec136 = (0, _aureliaTemplating.bindable)(), _dec137 = (0, _aureliaTemplating.bindable)(), _dec138 = (0, _aureliaTemplating.bindable)(), _dec139 = (0, _aureliaTemplating.bindable)(), _dec140 = (0, _aureliaTemplating.bindable)(), _dec141 = (0, _aureliaTemplating.bindable)(), _dec142 = (0, _aureliaTemplating.bindable)(), _dec143 = (0, _aureliaTemplating.bindable)(), _dec144 = (0, _aureliaTemplating.bindable)(), _dec145 = (0, _aureliaTemplating.bindable)(), _dec146 = (0, _aureliaTemplating.bindable)(), _dec147 = (0, _aureliaTemplating.bindable)(), _dec148 = (0, _aureliaTemplating.bindable)(), _dec149 = (0, _aureliaTemplating.bindable)(), _dec150 = (0, _aureliaTemplating.bindable)(), _dec151 = (0, _aureliaTemplating.bindable)(), _dec152 = (0, _aureliaTemplating.bindable)(), _dec153 = (0, _aureliaTemplating.bindable)(), _dec154 = (0, _aureliaTemplating.bindable)(), _dec155 = (0, _aureliaTemplating.bindable)(), _dec156 = (0, _aureliaTemplating.bindable)(), _dec157 = (0, _aureliaTemplating.bindable)(), _dec158 = (0, _aureliaTemplating.bindable)(), _dec159 = (0, _aureliaTemplating.bindable)(), _dec160 = (0, _aureliaTemplating.bindable)(), _dec161 = (0, _aureliaTemplating.bindable)(), _dec162 = (0, _aureliaTemplating.bindable)(), _dec163 = (0, _aureliaTemplating.bindable)(), _dec164 = (0, _aureliaTemplating.bindable)(), _dec165 = (0, _aureliaTemplating.bindable)(), _dec166 = (0, _aureliaTemplating.bindable)(), _dec167 = (0, _aureliaTemplating.bindable)(), _dec168 = (0, _aureliaTemplating.bindable)(), _dec169 = (0, _aureliaTemplating.bindable)(), _dec170 = (0, _aureliaTemplating.bindable)(), _dec171 = (0, _aureliaTemplating.bindable)(), _dec172 = (0, _aureliaTemplating.bindable)(), _dec173 = (0, _aureliaTemplating.bindable)(), _dec174 = (0, _aureliaTemplating.bindable)(), _dec175 = (0, _aureliaTemplating.bindable)(), _dec133(_class64 = _dec134(_class64 = (_class65 = function (_Ui5InputBase2) {
  _inherits(Ui5Input, _Ui5InputBase2);

  Ui5Input.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5InputBase2.prototype.addChild.call(this, child, elem);
    for (var _iterator17 = path, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
      if (_isArray17) {
        if (_i17 >= _iterator17.length) break;
        elem = _iterator17[_i17++];
      } else {
        _i17 = _iterator17.next();
        if (_i17.done) break;
        elem = _i17.value;
      }

      if (elem.localName == 'suggestion-item') {
        this._input.addSuggestionItem(child);
        return elem.localName;
      } else if (elem.localName == 'suggestion-row') {
        this._input.addSuggestionRow(child);
        return elem.localName;
      }
    }
  };

  Ui5Input.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'suggestion-item') {
      this._input.removeSuggestionItem(child);
    } else if (relation == 'suggestion-row') {
      this._input.removeSuggestionRow(child);
    }
  };

  Ui5Input.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5InputBase2.prototype.removeChild.call(this, child, elem);
    for (var _iterator18 = path, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
      if (_isArray18) {
        if (_i18 >= _iterator18.length) break;
        elem = _iterator18[_i18++];
      } else {
        _i18 = _iterator18.next();
        if (_i18.done) break;
        elem = _i18.value;
      }

      if (elem.localName == 'suggestion-item') {
        this._input.removeSuggestionItem(child);
        break;
      } else if (elem.localName == 'suggestion-row') {
        this._input.removeSuggestionRow(child);
        break;
      }
    }
  };

  _createClass(Ui5Input, [{
    key: 'UIElement',
    get: function get() {
      return this._input;
    }
  }]);

  function Ui5Input(element) {
    _classCallCheck(this, Ui5Input);

    var _this7 = _possibleConstructorReturn(this, _Ui5InputBase2.call(this, element));

    _this7._input = null;

    _initDefineProp(_this7, 'ui5Id', _descriptor89, _this7);

    _initDefineProp(_this7, 'type', _descriptor90, _this7);

    _initDefineProp(_this7, 'maxLength', _descriptor91, _this7);

    _initDefineProp(_this7, 'dateFormat', _descriptor92, _this7);

    _initDefineProp(_this7, 'showValueHelp', _descriptor93, _this7);

    _initDefineProp(_this7, 'showSuggestion', _descriptor94, _this7);

    _initDefineProp(_this7, 'valueHelpOnly', _descriptor95, _this7);

    _initDefineProp(_this7, 'filterSuggests', _descriptor96, _this7);

    _initDefineProp(_this7, 'maxSuggestionWidth', _descriptor97, _this7);

    _initDefineProp(_this7, 'showTableSuggestionValueHelp', _descriptor98, _this7);

    _initDefineProp(_this7, 'description', _descriptor99, _this7);

    _initDefineProp(_this7, 'fieldWidth', _descriptor100, _this7);

    _initDefineProp(_this7, 'valueLiveUpdate', _descriptor101, _this7);

    _initDefineProp(_this7, 'selectedKey', _descriptor102, _this7);

    _initDefineProp(_this7, 'textFormatMode', _descriptor103, _this7);

    _initDefineProp(_this7, 'textFormatter', _descriptor104, _this7);

    _initDefineProp(_this7, 'suggestionRowValidator', _descriptor105, _this7);

    _initDefineProp(_this7, 'suggestionItems', _descriptor106, _this7);

    _initDefineProp(_this7, 'suggestionColumns', _descriptor107, _this7);

    _initDefineProp(_this7, 'suggestionRows', _descriptor108, _this7);

    _initDefineProp(_this7, 'selectedItem', _descriptor109, _this7);

    _initDefineProp(_this7, 'selectedRow', _descriptor110, _this7);

    _initDefineProp(_this7, 'liveChange', _descriptor111, _this7);

    _initDefineProp(_this7, 'valueHelpRequest', _descriptor112, _this7);

    _initDefineProp(_this7, 'suggest', _descriptor113, _this7);

    _initDefineProp(_this7, 'suggestionItemSelected', _descriptor114, _this7);

    _initDefineProp(_this7, 'submit', _descriptor115, _this7);

    _initDefineProp(_this7, 'value', _descriptor116, _this7);

    _initDefineProp(_this7, 'width', _descriptor117, _this7);

    _initDefineProp(_this7, 'enabled', _descriptor118, _this7);

    _initDefineProp(_this7, 'valueState', _descriptor119, _this7);

    _initDefineProp(_this7, 'name', _descriptor120, _this7);

    _initDefineProp(_this7, 'placeholder', _descriptor121, _this7);

    _initDefineProp(_this7, 'editable', _descriptor122, _this7);

    _initDefineProp(_this7, 'valueStateText', _descriptor123, _this7);

    _initDefineProp(_this7, 'showValueStateMessage', _descriptor124, _this7);

    _initDefineProp(_this7, 'textAlign', _descriptor125, _this7);

    _initDefineProp(_this7, 'textDirection', _descriptor126, _this7);

    _initDefineProp(_this7, 'required', _descriptor127, _this7);

    _initDefineProp(_this7, 'change', _descriptor128, _this7);

    _initDefineProp(_this7, 'busy', _descriptor129, _this7);

    _this7.element = element;
    return _this7;
  }

  Ui5Input.prototype.defaultFunc = function defaultFunc() {};

  Ui5Input.prototype.attached = function attached() {
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
    if (this.ui5Id) this._input = new sap.m.Input(this.ui5Id, params);else this._input = new sap.m.Input(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._input, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._input.attachChange(function (event) {
      that.value = event.mParameters.value;
    });
    this._input.attachLiveChange(function (event) {
      if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {
        that.value = event.mParameters.value;
      }
    });
    this._input.addEventDelegate(this.element);
    _Ui5InputBase2.prototype.attached.call(this);
  };

  Ui5Input.prototype.typeChanged = function typeChanged(newValue) {
    if (this._input !== null) {
      this._input.setType(newValue);
    }
  };

  Ui5Input.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
    if (this._input !== null) {
      this._input.setMaxLength(newValue);
    }
  };

  Ui5Input.prototype.dateFormatChanged = function dateFormatChanged(newValue) {
    if (this._input !== null) {
      this._input.setDateFormat(newValue);
    }
  };

  Ui5Input.prototype.showValueHelpChanged = function showValueHelpChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueHelp(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.showSuggestionChanged = function showSuggestionChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowSuggestion(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.valueHelpOnlyChanged = function valueHelpOnlyChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueHelpOnly(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.filterSuggestsChanged = function filterSuggestsChanged(newValue) {
    if (this._input !== null) {
      this._input.setFilterSuggests(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.maxSuggestionWidthChanged = function maxSuggestionWidthChanged(newValue) {
    if (this._input !== null) {
      this._input.setMaxSuggestionWidth(newValue);
    }
  };

  Ui5Input.prototype.showTableSuggestionValueHelpChanged = function showTableSuggestionValueHelpChanged(newValue) {
    if (this._input !== null) {
      this._input.setTableSuggestionValueHelp(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.descriptionChanged = function descriptionChanged(newValue) {
    if (this._input !== null) {
      this._input.setDescription(newValue);
    }
  };

  Ui5Input.prototype.fieldWidthChanged = function fieldWidthChanged(newValue) {
    if (this._input !== null) {
      this._input.setFieldWidth(newValue);
    }
  };

  Ui5Input.prototype.valueLiveUpdateChanged = function valueLiveUpdateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueLiveUpdate(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedKey(newValue);
    }
  };

  Ui5Input.prototype.textFormatModeChanged = function textFormatModeChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextFormatMode(newValue);
    }
  };

  Ui5Input.prototype.textFormatterChanged = function textFormatterChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextFormatter(newValue);
    }
  };

  Ui5Input.prototype.suggestionRowValidatorChanged = function suggestionRowValidatorChanged(newValue) {
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  };

  Ui5Input.prototype.suggestionItemsChanged = function suggestionItemsChanged(newValue) {
    if (this._input !== null) {
      this._input.setSuggestionsItems(newValue);
    }
  };

  Ui5Input.prototype.suggestionColumnsChanged = function suggestionColumnsChanged(newValue) {
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  };

  Ui5Input.prototype.suggestionRowsChanged = function suggestionRowsChanged(newValue) {
    if (this._input !== null) {
      this._input.setSuggestionsRowValidator(newValue);
    }
  };

  Ui5Input.prototype.selectedItemChanged = function selectedItemChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedItem(newValue);
    }
  };

  Ui5Input.prototype.selectedRowChanged = function selectedRowChanged(newValue) {
    if (this._input !== null) {
      this._input.setSelectedRow(newValue);
    }
  };

  Ui5Input.prototype.liveChangeChanged = function liveChangeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachLiveChange(newValue);
    }
  };

  Ui5Input.prototype.valueHelpRequestChanged = function valueHelpRequestChanged(newValue) {
    if (this._input !== null) {
      this._input.attachValueHelpRequest(newValue);
    }
  };

  Ui5Input.prototype.suggestChanged = function suggestChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSuggest(newValue);
    }
  };

  Ui5Input.prototype.suggestionItemSelectedChanged = function suggestionItemSelectedChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSuggestionItemSelected(newValue);
    }
  };

  Ui5Input.prototype.submitChanged = function submitChanged(newValue) {
    if (this._input !== null) {
      this._input.attachSubmit(newValue);
    }
  };

  Ui5Input.prototype.valueChanged = function valueChanged(newValue) {
    if (this._input !== null) {
      this._input.setValue(newValue);
    }
  };

  Ui5Input.prototype.widthChanged = function widthChanged(newValue) {
    if (this._input !== null) {
      this._input.setWidth(newValue);
    }
  };

  Ui5Input.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._input !== null) {
      this._input.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.valueStateChanged = function valueStateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueState(newValue);
    }
  };

  Ui5Input.prototype.nameChanged = function nameChanged(newValue) {
    if (this._input !== null) {
      this._input.setName(newValue);
    }
  };

  Ui5Input.prototype.placeholderChanged = function placeholderChanged(newValue) {
    if (this._input !== null) {
      this._input.setPlaceholder(newValue);
    }
  };

  Ui5Input.prototype.editableChanged = function editableChanged(newValue) {
    if (this._input !== null) {
      this._input.setEditable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueStateText(newValue);
    }
  };

  Ui5Input.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.textAlignChanged = function textAlignChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextAlign(newValue);
    }
  };

  Ui5Input.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextDirection(newValue);
    }
  };

  Ui5Input.prototype.requiredChanged = function requiredChanged(newValue) {
    if (this._input !== null) {
      this._input.setRequired(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Input.prototype.changeChanged = function changeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachChange(newValue);
    }
  };

  Ui5Input.prototype.busyChanged = function busyChanged(newValue) {
    if (this._input !== null) {
      this._input.setBusy(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Input;
}(Ui5InputBase), (_descriptor89 = _applyDecoratedDescriptor(_class65.prototype, 'ui5Id', [_dec135], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor90 = _applyDecoratedDescriptor(_class65.prototype, 'type', [_dec136], {
  enumerable: true,
  initializer: function initializer() {
    return 'Text';
  }
}), _descriptor91 = _applyDecoratedDescriptor(_class65.prototype, 'maxLength', [_dec137], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor92 = _applyDecoratedDescriptor(_class65.prototype, 'dateFormat', [_dec138], {
  enumerable: true,
  initializer: function initializer() {
    return 'YYYY-MM-DD';
  }
}), _descriptor93 = _applyDecoratedDescriptor(_class65.prototype, 'showValueHelp', [_dec139], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor94 = _applyDecoratedDescriptor(_class65.prototype, 'showSuggestion', [_dec140], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor95 = _applyDecoratedDescriptor(_class65.prototype, 'valueHelpOnly', [_dec141], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor96 = _applyDecoratedDescriptor(_class65.prototype, 'filterSuggests', [_dec142], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor97 = _applyDecoratedDescriptor(_class65.prototype, 'maxSuggestionWidth', [_dec143], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor98 = _applyDecoratedDescriptor(_class65.prototype, 'showTableSuggestionValueHelp', [_dec144], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor99 = _applyDecoratedDescriptor(_class65.prototype, 'description', [_dec145], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor100 = _applyDecoratedDescriptor(_class65.prototype, 'fieldWidth', [_dec146], {
  enumerable: true,
  initializer: function initializer() {
    return '50%';
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class65.prototype, 'valueLiveUpdate', [_dec147], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor102 = _applyDecoratedDescriptor(_class65.prototype, 'selectedKey', [_dec148], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor103 = _applyDecoratedDescriptor(_class65.prototype, 'textFormatMode', [_dec149], {
  enumerable: true,
  initializer: function initializer() {
    return 'Value';
  }
}), _descriptor104 = _applyDecoratedDescriptor(_class65.prototype, 'textFormatter', [_dec150], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor105 = _applyDecoratedDescriptor(_class65.prototype, 'suggestionRowValidator', [_dec151], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor106 = _applyDecoratedDescriptor(_class65.prototype, 'suggestionItems', [_dec152], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor107 = _applyDecoratedDescriptor(_class65.prototype, 'suggestionColumns', [_dec153], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor108 = _applyDecoratedDescriptor(_class65.prototype, 'suggestionRows', [_dec154], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor109 = _applyDecoratedDescriptor(_class65.prototype, 'selectedItem', [_dec155], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor110 = _applyDecoratedDescriptor(_class65.prototype, 'selectedRow', [_dec156], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor111 = _applyDecoratedDescriptor(_class65.prototype, 'liveChange', [_dec157], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor112 = _applyDecoratedDescriptor(_class65.prototype, 'valueHelpRequest', [_dec158], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor113 = _applyDecoratedDescriptor(_class65.prototype, 'suggest', [_dec159], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor114 = _applyDecoratedDescriptor(_class65.prototype, 'suggestionItemSelected', [_dec160], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor115 = _applyDecoratedDescriptor(_class65.prototype, 'submit', [_dec161], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor116 = _applyDecoratedDescriptor(_class65.prototype, 'value', [_dec162], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor117 = _applyDecoratedDescriptor(_class65.prototype, 'width', [_dec163], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor118 = _applyDecoratedDescriptor(_class65.prototype, 'enabled', [_dec164], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor119 = _applyDecoratedDescriptor(_class65.prototype, 'valueState', [_dec165], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor120 = _applyDecoratedDescriptor(_class65.prototype, 'name', [_dec166], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor121 = _applyDecoratedDescriptor(_class65.prototype, 'placeholder', [_dec167], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor122 = _applyDecoratedDescriptor(_class65.prototype, 'editable', [_dec168], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor123 = _applyDecoratedDescriptor(_class65.prototype, 'valueStateText', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor124 = _applyDecoratedDescriptor(_class65.prototype, 'showValueStateMessage', [_dec170], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor125 = _applyDecoratedDescriptor(_class65.prototype, 'textAlign', [_dec171], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor126 = _applyDecoratedDescriptor(_class65.prototype, 'textDirection', [_dec172], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor127 = _applyDecoratedDescriptor(_class65.prototype, 'required', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor128 = _applyDecoratedDescriptor(_class65.prototype, 'change', [_dec174], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor129 = _applyDecoratedDescriptor(_class65.prototype, 'busy', [_dec175], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class65)) || _class64) || _class64);
var Ui5InputBase = exports.Ui5InputBase = (_dec176 = (0, _aureliaTemplating.customElement)('ui5-input-base'), _dec177 = (0, _aureliaDependencyInjection.inject)(Element), _dec178 = (0, _aureliaTemplating.bindable)(), _dec179 = (0, _aureliaTemplating.bindable)(), _dec180 = (0, _aureliaTemplating.bindable)(), _dec181 = (0, _aureliaTemplating.bindable)(), _dec182 = (0, _aureliaTemplating.bindable)(), _dec183 = (0, _aureliaTemplating.bindable)(), _dec184 = (0, _aureliaTemplating.bindable)(), _dec185 = (0, _aureliaTemplating.bindable)(), _dec186 = (0, _aureliaTemplating.bindable)(), _dec187 = (0, _aureliaTemplating.bindable)(), _dec188 = (0, _aureliaTemplating.bindable)(), _dec189 = (0, _aureliaTemplating.bindable)(), _dec190 = (0, _aureliaTemplating.bindable)(), _dec176(_class67 = _dec177(_class67 = (_class68 = function (_Ui5Control) {
  _inherits(Ui5InputBase, _Ui5Control);

  function Ui5InputBase(element) {
    _classCallCheck(this, Ui5InputBase);

    var _this8 = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

    _this8._picker = null;

    _initDefineProp(_this8, 'value', _descriptor130, _this8);

    _initDefineProp(_this8, 'width', _descriptor131, _this8);

    _initDefineProp(_this8, 'enabled', _descriptor132, _this8);

    _initDefineProp(_this8, 'valueState', _descriptor133, _this8);

    _initDefineProp(_this8, 'name', _descriptor134, _this8);

    _initDefineProp(_this8, 'placeholder', _descriptor135, _this8);

    _initDefineProp(_this8, 'editable', _descriptor136, _this8);

    _initDefineProp(_this8, 'valueStateText', _descriptor137, _this8);

    _initDefineProp(_this8, 'showValueStateMessage', _descriptor138, _this8);

    _initDefineProp(_this8, 'textAlign', _descriptor139, _this8);

    _initDefineProp(_this8, 'textDirection', _descriptor140, _this8);

    _initDefineProp(_this8, 'required', _descriptor141, _this8);

    _initDefineProp(_this8, 'change', _descriptor142, _this8);

    _this8.element = element;
    return _this8;
  }

  Ui5InputBase.prototype.defaultFunc = function defaultFunc() {};

  Ui5InputBase.prototype.attached = function attached() {
    _Ui5Control.prototype.attached.call(this);
  };

  Ui5InputBase.prototype.addChild = function addChild(child, elem) {
    _Ui5Control.prototype.addChild.call(this, child, elem);
  };

  Ui5InputBase.prototype.removeChild = function removeChild(child, elem) {
    _Ui5Control.prototype.removeChild.call(this, child, elem);
  };

  Ui5InputBase.prototype.valueChanged = function valueChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValue(newValue);
    }
  };

  Ui5InputBase.prototype.widthChanged = function widthChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setWidth(newValue);
    }
  };

  Ui5InputBase.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.valueStateChanged = function valueStateChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueState(newValue);
    }
  };

  Ui5InputBase.prototype.nameChanged = function nameChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setName(newValue);
    }
  };

  Ui5InputBase.prototype.placeholderChanged = function placeholderChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setPlaceholder(newValue);
    }
  };

  Ui5InputBase.prototype.editableChanged = function editableChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setEditable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setValueStateText(newValue);
    }
  };

  Ui5InputBase.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.textAlignChanged = function textAlignChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextAlign(newValue);
    }
  };

  Ui5InputBase.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setTextDirection(newValue);
    }
  };

  Ui5InputBase.prototype.requiredChanged = function requiredChanged(newValue) {
    if (this._picker !== null) {
      this._picker.setRequired(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.changeChanged = function changeChanged(newValue) {
    if (this._picker !== null) {
      this._picker.attachChange(newValue);
    }
  };

  return Ui5InputBase;
}(Ui5Control), (_descriptor130 = _applyDecoratedDescriptor(_class68.prototype, 'value', [_dec178], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor131 = _applyDecoratedDescriptor(_class68.prototype, 'width', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor132 = _applyDecoratedDescriptor(_class68.prototype, 'enabled', [_dec180], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor133 = _applyDecoratedDescriptor(_class68.prototype, 'valueState', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor134 = _applyDecoratedDescriptor(_class68.prototype, 'name', [_dec182], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor135 = _applyDecoratedDescriptor(_class68.prototype, 'placeholder', [_dec183], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor136 = _applyDecoratedDescriptor(_class68.prototype, 'editable', [_dec184], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor137 = _applyDecoratedDescriptor(_class68.prototype, 'valueStateText', [_dec185], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor138 = _applyDecoratedDescriptor(_class68.prototype, 'showValueStateMessage', [_dec186], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor139 = _applyDecoratedDescriptor(_class68.prototype, 'textAlign', [_dec187], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor140 = _applyDecoratedDescriptor(_class68.prototype, 'textDirection', [_dec188], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor141 = _applyDecoratedDescriptor(_class68.prototype, 'required', [_dec189], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor142 = _applyDecoratedDescriptor(_class68.prototype, 'change', [_dec190], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class68)) || _class67) || _class67);
var Ui5Item = exports.Ui5Item = (_dec191 = (0, _aureliaTemplating.customElement)('ui5-item'), _dec192 = (0, _aureliaDependencyInjection.inject)(Element), _dec193 = (0, _aureliaTemplating.bindable)(), _dec194 = (0, _aureliaTemplating.bindable)(), _dec195 = (0, _aureliaTemplating.bindable)(), _dec196 = (0, _aureliaTemplating.bindable)(), _dec191(_class70 = _dec192(_class70 = (_class71 = function () {
  function Ui5Item(element) {
    _classCallCheck(this, Ui5Item);

    this._item = null;

    _initDefineProp(this, 'key', _descriptor143, this);

    _initDefineProp(this, 'enabled', _descriptor144, this);

    _initDefineProp(this, 'text', _descriptor145, this);

    _initDefineProp(this, 'textDirection', _descriptor146, this);

    this.element = element;
  }

  Ui5Item.prototype.defaultFunc = function defaultFunc() {};

  Ui5Item.prototype.attached = function attached() {};

  Ui5Item.prototype.addChild = function addChild(child, elem) {};

  Ui5Item.prototype.keyChanged = function keyChanged(newValue) {
    if (this._item !== null) {
      this._item.setKey(newValue);
    }
  };

  Ui5Item.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._item !== null) {
      this._item.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Item.prototype.textChanged = function textChanged(newValue) {
    if (this._item !== null) {
      this._item.setText(newValue);
    }
  };

  Ui5Item.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTextDirection(newValue);
    }
  };

  return Ui5Item;
}(), (_descriptor143 = _applyDecoratedDescriptor(_class71.prototype, 'key', [_dec193], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor144 = _applyDecoratedDescriptor(_class71.prototype, 'enabled', [_dec194], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor145 = _applyDecoratedDescriptor(_class71.prototype, 'text', [_dec195], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor146 = _applyDecoratedDescriptor(_class71.prototype, 'textDirection', [_dec196], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class71)) || _class70) || _class70);
var Ui5ImageContent = exports.Ui5ImageContent = (_dec197 = (0, _aureliaTemplating.customElement)('ui5-image-content'), _dec198 = (0, _aureliaDependencyInjection.inject)(Element), _dec199 = (0, _aureliaTemplating.bindable)(), _dec197(_class73 = _dec198(_class73 = (_class74 = function () {
  function Ui5ImageContent(element) {
    _classCallCheck(this, Ui5ImageContent);

    this._content = null;

    _initDefineProp(this, 'src', _descriptor147, this);

    this.element = element;
  }

  Ui5ImageContent.prototype.attached = function attached() {
    this._content = new sap.m.ImageContent({
      src: this.src
    });
    $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
  };

  Ui5ImageContent.prototype.detached = function detached() {
    $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
  };

  Ui5ImageContent.prototype.srcChanged = function srcChanged(newValue) {
    if (this._content != null) {
      this._content.setSrc(newValue);
    }
  };

  return Ui5ImageContent;
}(), (_descriptor147 = _applyDecoratedDescriptor(_class74.prototype, 'src', [_dec199], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class74)) || _class73) || _class73);
var Ui5Link = exports.Ui5Link = (_dec200 = (0, _aureliaTemplating.customElement)('ui5-link'), _dec201 = (0, _aureliaDependencyInjection.inject)(Element), _dec202 = (0, _aureliaTemplating.bindable)(), _dec203 = (0, _aureliaTemplating.bindable)(), _dec204 = (0, _aureliaTemplating.bindable)(), _dec205 = (0, _aureliaTemplating.bindable)(), _dec206 = (0, _aureliaTemplating.bindable)(), _dec207 = (0, _aureliaTemplating.bindable)(), _dec208 = (0, _aureliaTemplating.bindable)(), _dec200(_class76 = _dec201(_class76 = (_class77 = function () {
  function Ui5Link(element) {
    _classCallCheck(this, Ui5Link);

    _initDefineProp(this, 'enabled', _descriptor148, this);

    _initDefineProp(this, 'subtle', _descriptor149, this);

    _initDefineProp(this, 'emphasized', _descriptor150, this);

    _initDefineProp(this, 'text', _descriptor151, this);

    _initDefineProp(this, 'press', _descriptor152, this);

    _initDefineProp(this, 'target', _descriptor153, this);

    _initDefineProp(this, 'href', _descriptor154, this);

    this._link = null;

    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  Ui5Link.prototype.attached = function attached() {
    this._link = new sap.m.Link({
      text: this.text,
      target: this.target,
      href: this.href,
      subtle: getBooleanFromAttributeValue(this.subtle),
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      enabled: getBooleanFromAttributeValue(this.enabled),
      press: this.press != null ? this.press : this.defaultPress
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._link, this.element);
    }
  };

  Ui5Link.prototype.defaultPress = function defaultPress() {};

  Ui5Link.prototype.detached = function detached() {};

  Ui5Link.prototype.hrefChanged = function hrefChanged(newValue) {
    if (this._link !== null) {
      this._link.setHref(newValue);
    }
  };

  Ui5Link.prototype.typeChanged = function typeChanged(newValue) {
    if (this._link !== null) {
      this._link.setType(newValue);
    }
  };

  Ui5Link.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._link !== null) {
      this._link.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Link.prototype.targetChanged = function targetChanged(newValue) {
    if (this._link !== null) {
      this._link.setTarget(newValue);
    }
  };

  Ui5Link.prototype.textChanged = function textChanged(newValue) {
    if (this._link !== null) {
      this._link.setText(newValue);
    }
  };

  Ui5Link.prototype.pressChanged = function pressChanged(newValue) {
    if (this._link !== null) {
      if (newValue == null) newValue = this.defaultPress;
      this._link.attachPress(newValue);
    }
  };

  return Ui5Link;
}(), (_descriptor148 = _applyDecoratedDescriptor(_class77.prototype, 'enabled', [_dec202], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor149 = _applyDecoratedDescriptor(_class77.prototype, 'subtle', [_dec203], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor150 = _applyDecoratedDescriptor(_class77.prototype, 'emphasized', [_dec204], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor151 = _applyDecoratedDescriptor(_class77.prototype, 'text', [_dec205], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor152 = _applyDecoratedDescriptor(_class77.prototype, 'press', [_dec206], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultPress;
  }
}), _descriptor153 = _applyDecoratedDescriptor(_class77.prototype, 'target', [_dec207], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor154 = _applyDecoratedDescriptor(_class77.prototype, 'href', [_dec208], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class77)) || _class76) || _class76);
var Ui5ListItem = exports.Ui5ListItem = (_dec209 = (0, _aureliaTemplating.customElement)('ui5-list-item'), _dec210 = (0, _aureliaDependencyInjection.inject)(Element), _dec211 = (0, _aureliaTemplating.bindable)(), _dec212 = (0, _aureliaTemplating.bindable)(), _dec213 = (0, _aureliaTemplating.bindable)(), _dec214 = (0, _aureliaTemplating.bindable)(), _dec215 = (0, _aureliaTemplating.bindable)(), _dec216 = (0, _aureliaTemplating.bindable)(), _dec209(_class79 = _dec210(_class79 = (_class80 = function () {
  function Ui5ListItem(element) {
    _classCallCheck(this, Ui5ListItem);

    this._item = null;
    this._container = null;

    _initDefineProp(this, 'icon', _descriptor155, this);

    _initDefineProp(this, 'additionalText', _descriptor156, this);

    _initDefineProp(this, 'key', _descriptor157, this);

    _initDefineProp(this, 'enabled', _descriptor158, this);

    _initDefineProp(this, 'text', _descriptor159, this);

    _initDefineProp(this, 'textDirection', _descriptor160, this);

    this.element = element;
  }

  Ui5ListItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5ListItem.prototype.attached = function attached() {
    this._item = new sap.ui.core.ListItem({
      text: this.text,
      icon: this.icon,
      enabled: getBooleanFromAttributeValue(this.enabled),
      additionalText: this.additionalText,
      textDirection: this.textDirection,
      key: this.key
    });
    this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  };

  Ui5ListItem.prototype.detached = function detached() {
    if (this._container && this._container.removeChildByRelation) this._container.removeChildByRelation(this._item, this._relation);
  };

  Ui5ListItem.prototype.addChild = function addChild(child, elem) {};

  Ui5ListItem.prototype.iconChanged = function iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  };

  Ui5ListItem.prototype.additionalTextChanged = function additionalTextChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdditionalText(newValue);
    }
  };

  Ui5ListItem.prototype.keyChanged = function keyChanged(newValue) {
    if (this._item !== null) {
      this._item.setKey(newValue);
    }
  };

  Ui5ListItem.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._item !== null) {
      this._item.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ListItem.prototype.textChanged = function textChanged(newValue) {
    if (this._item !== null) {
      this._item.setText(newValue);
    }
  };

  Ui5ListItem.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTextDirection(newValue);
    }
  };

  return Ui5ListItem;
}(), (_descriptor155 = _applyDecoratedDescriptor(_class80.prototype, 'icon', [_dec211], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor156 = _applyDecoratedDescriptor(_class80.prototype, 'additionalText', [_dec212], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor157 = _applyDecoratedDescriptor(_class80.prototype, 'key', [_dec213], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor158 = _applyDecoratedDescriptor(_class80.prototype, 'enabled', [_dec214], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor159 = _applyDecoratedDescriptor(_class80.prototype, 'text', [_dec215], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor160 = _applyDecoratedDescriptor(_class80.prototype, 'textDirection', [_dec216], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class80)) || _class79) || _class79);
var Ui5MTitle = exports.Ui5MTitle = (_dec217 = (0, _aureliaTemplating.customElement)('ui5-m-title'), _dec218 = (0, _aureliaDependencyInjection.inject)(Element), _dec219 = (0, _aureliaTemplating.bindable)(), _dec220 = (0, _aureliaTemplating.bindable)(), _dec221 = (0, _aureliaTemplating.bindable)(), _dec217(_class82 = _dec218(_class82 = (_class83 = function () {
  function Ui5MTitle(element) {
    _classCallCheck(this, Ui5MTitle);

    this._title = null;

    _initDefineProp(this, 'ui5Id', _descriptor161, this);

    _initDefineProp(this, 'text', _descriptor162, this);

    _initDefineProp(this, 'level', _descriptor163, this);

    this.element = element;
  }

  Ui5MTitle.prototype.attached = function attached() {
    var props = {
      text: this.text,
      level: this.level
    };
    if (this.ui5Id) this._title = new sap.m.Title(this.ui5Id, props);else this._title = new sap.m.Title(props);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  };

  Ui5MTitle.prototype.textChanged = function textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  };

  Ui5MTitle.prototype.levelChanged = function levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  };

  return Ui5MTitle;
}(), (_descriptor161 = _applyDecoratedDescriptor(_class83.prototype, 'ui5Id', [_dec219], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor162 = _applyDecoratedDescriptor(_class83.prototype, 'text', [_dec220], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor163 = _applyDecoratedDescriptor(_class83.prototype, 'level', [_dec221], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
})), _class83)) || _class82) || _class82);
var Ui5MessageStrip = exports.Ui5MessageStrip = (_dec222 = (0, _aureliaTemplating.customElement)('ui5-message-strip'), _dec223 = (0, _aureliaDependencyInjection.inject)(Element), _dec222(_class85 = _dec223(_class85 = (_class86 = function () {
  function Ui5MessageStrip(element) {
    _classCallCheck(this, Ui5MessageStrip);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor164, this);

    _initDefineProp(this, 'text', _descriptor165, this);

    _initDefineProp(this, 'wrapping', _descriptor166, this);

    _initDefineProp(this, 'textAlign', _descriptor167, this);

    _initDefineProp(this, 'maxLines', _descriptor168, this);

    this.element = element;
  }

  Ui5MessageStrip.prototype.attached = function attached() {

    this._text = new sap.m.Text({
      text: this.text,
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  };

  Ui5MessageStrip.prototype.textChanged = function textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  };

  return Ui5MessageStrip;
}(), (_descriptor164 = _applyDecoratedDescriptor(_class86.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor165 = _applyDecoratedDescriptor(_class86.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor166 = _applyDecoratedDescriptor(_class86.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor167 = _applyDecoratedDescriptor(_class86.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor168 = _applyDecoratedDescriptor(_class86.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class86)) || _class85) || _class85);
var Ui5Label = exports.Ui5Label = (_dec224 = (0, _aureliaTemplating.customElement)('ui5-label'), _dec225 = (0, _aureliaDependencyInjection.inject)(Element), _dec226 = (0, _aureliaTemplating.bindable)(), _dec227 = (0, _aureliaTemplating.bindable)(), _dec228 = (0, _aureliaTemplating.bindable)(), _dec229 = (0, _aureliaTemplating.bindable)(), _dec230 = (0, _aureliaTemplating.bindable)(), _dec231 = (0, _aureliaTemplating.bindable)(), _dec224(_class88 = _dec225(_class88 = (_class89 = function () {
  function Ui5Label(element) {
    _classCallCheck(this, Ui5Label);

    this._label = null;

    _initDefineProp(this, 'ui5Id', _descriptor169, this);

    _initDefineProp(this, 'labelFor', _descriptor170, this);

    _initDefineProp(this, 'text', _descriptor171, this);

    _initDefineProp(this, 'required', _descriptor172, this);

    _initDefineProp(this, 'textAlign', _descriptor173, this);

    _initDefineProp(this, 'textDirection', _descriptor174, this);

    this.element = element;
  }

  Ui5Label.prototype.attached = function attached() {

    this._label = new sap.m.Label({
      text: this.text,
      labelFor: this.labelFor,
      required: getBooleanFromAttributeValue(this.required),
      textAlign: this.textAlign,
      textDirection: this.textDirection
    });
    if ($(this.element).parents("[ui5-container]").length > 0) {

      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._label, this.element);
    }
  };

  Ui5Label.prototype.textChanged = function textChanged(newValue) {
    if (this._label !== null) {
      this._label.setText(newValue);
    }
  };

  Ui5Label.prototype.labelForChanged = function labelForChanged(newValue) {
    if (this._label !== null) {
      this._label.setLabelFor(newValue);
    }
  };

  Ui5Label.prototype.requiredChanged = function requiredChanged(newValue) {
    if (this._label !== null) {
      this._label.setRequired(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Label.prototype.textAlignChanged = function textAlignChanged(newValue) {
    if (this._label !== null) {
      this._label.setTextAlign(newValue);
    }
  };

  Ui5Label.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._label !== null) {
      this._label.setTextDirection(newValue);
    }
  };

  return Ui5Label;
}(), (_descriptor169 = _applyDecoratedDescriptor(_class89.prototype, 'ui5Id', [_dec226], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor170 = _applyDecoratedDescriptor(_class89.prototype, 'labelFor', [_dec227], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor171 = _applyDecoratedDescriptor(_class89.prototype, 'text', [_dec228], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor172 = _applyDecoratedDescriptor(_class89.prototype, 'required', [_dec229], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor173 = _applyDecoratedDescriptor(_class89.prototype, 'textAlign', [_dec230], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor174 = _applyDecoratedDescriptor(_class89.prototype, 'textDirection', [_dec231], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class89)) || _class88) || _class88);
var Ui5NumericContent = exports.Ui5NumericContent = (_dec232 = (0, _aureliaTemplating.customElement)('ui5-numeric-content'), _dec233 = (0, _aureliaDependencyInjection.inject)(Element), _dec234 = (0, _aureliaTemplating.bindable)(), _dec235 = (0, _aureliaTemplating.bindable)(), _dec236 = (0, _aureliaTemplating.bindable)(), _dec237 = (0, _aureliaTemplating.bindable)(), _dec238 = (0, _aureliaTemplating.bindable)(), _dec232(_class91 = _dec233(_class91 = (_class92 = function () {
  function Ui5NumericContent(element) {
    _classCallCheck(this, Ui5NumericContent);

    this._content = null;

    _initDefineProp(this, 'icon', _descriptor175, this);

    _initDefineProp(this, 'value', _descriptor176, this);

    _initDefineProp(this, 'indicator', _descriptor177, this);

    _initDefineProp(this, 'scale', _descriptor178, this);

    _initDefineProp(this, 'valueColor', _descriptor179, this);

    this.element = element;
  }

  Ui5NumericContent.prototype.attached = function attached() {
    this._content = new sap.m.NumericContent({
      icon: this.icon,
      value: this.value,
      indicator: this.indicator,
      scale: this.scale,
      valueColor: this.valueColor
    });
    $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.addChild(this._content, this.element);
  };

  Ui5NumericContent.prototype.detached = function detached() {
    $(this.element).parents("ui5-tile-content")[0].au.controller.viewModel.removeChild(this._content, this.element);
  };

  Ui5NumericContent.prototype.iconChanged = function iconChanged(newValue) {
    if (this._content != null) {
      this._content.setIcon(newValue);
    }
  };

  Ui5NumericContent.prototype.valueChanged = function valueChanged(newValue) {
    if (this._content != null) {
      this._content.setValue(newValue);
    }
  };

  Ui5NumericContent.prototype.indicatorChanged = function indicatorChanged(newValue) {
    if (this._content != null) {
      this._content.setIndicator(newValue);
    }
  };

  Ui5NumericContent.prototype.scaleChanged = function scaleChanged(newValue) {
    if (this._content != null) {
      this._content.setScale(newValue);
    }
  };

  Ui5NumericContent.prototype.valueColorChanged = function valueColorChanged(newValue) {
    if (this._content != null) {
      this._content.setValueColor(newValue);
    }
  };

  return Ui5NumericContent;
}(), (_descriptor175 = _applyDecoratedDescriptor(_class92.prototype, 'icon', [_dec234], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor176 = _applyDecoratedDescriptor(_class92.prototype, 'value', [_dec235], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor177 = _applyDecoratedDescriptor(_class92.prototype, 'indicator', [_dec236], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor178 = _applyDecoratedDescriptor(_class92.prototype, 'scale', [_dec237], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor179 = _applyDecoratedDescriptor(_class92.prototype, 'valueColor', [_dec238], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class92)) || _class91) || _class91);
var Ui5ObjectIdentifier = exports.Ui5ObjectIdentifier = (_dec239 = (0, _aureliaTemplating.customElement)('ui5-object-identifier'), _dec240 = (0, _aureliaDependencyInjection.inject)(Element), _dec241 = (0, _aureliaTemplating.bindable)(), _dec242 = (0, _aureliaTemplating.bindable)(), _dec243 = (0, _aureliaTemplating.bindable)(), _dec244 = (0, _aureliaTemplating.bindable)(), _dec245 = (0, _aureliaTemplating.bindable)(), _dec239(_class94 = _dec240(_class94 = (_class95 = function () {
  function Ui5ObjectIdentifier(element) {
    _classCallCheck(this, Ui5ObjectIdentifier);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor180, this);

    _initDefineProp(this, 'text', _descriptor181, this);

    _initDefineProp(this, 'title', _descriptor182, this);

    _initDefineProp(this, 'visible', _descriptor183, this);

    _initDefineProp(this, 'titleActive', _descriptor184, this);

    _initDefineProp(this, 'textDirection', _descriptor185, this);

    _initDefineProp(this, 'titlePress', _descriptor186, this);

    this.element = element;
  }

  Ui5ObjectIdentifier.prototype.defaultFunc = function defaultFunc() {};

  Ui5ObjectIdentifier.prototype.attached = function attached() {

    this._text = new sap.m.ObjectIdentifier({
      text: this.text != null ? this.text : this.element.innerText.trim(),
      title: this.title,
      visible: getBooleanFromAttributeValue(this.visible),
      titleActive: getBooleanFromAttributeValue(this.titleActive),
      textDirection: this.textDirection,
      titlePress: this.titlePress
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  };

  Ui5ObjectIdentifier.prototype.textChanged = function textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  };

  Ui5ObjectIdentifier.prototype.titleChanged = function titleChanged(newValue) {
    if (this._text !== null) {
      this._text.setTitle(newValue);
    }
  };

  Ui5ObjectIdentifier.prototype.visibleChanged = function visibleChanged(newValue) {
    if (this._text !== null) {
      this._text.setVisible(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ObjectIdentifier.prototype.titleActiveChanged = function titleActiveChanged(newValue) {
    if (this._text !== null) {
      this._text.setTitleActive(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ObjectIdentifier.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._text !== null) {
      this._text.setTextDirection(newValue);
    }
  };

  return Ui5ObjectIdentifier;
}(), (_descriptor180 = _applyDecoratedDescriptor(_class95.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor181 = _applyDecoratedDescriptor(_class95.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor182 = _applyDecoratedDescriptor(_class95.prototype, 'title', [_dec241], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor183 = _applyDecoratedDescriptor(_class95.prototype, 'visible', [_dec242], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor184 = _applyDecoratedDescriptor(_class95.prototype, 'titleActive', [_dec243], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor185 = _applyDecoratedDescriptor(_class95.prototype, 'textDirection', [_dec244], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor186 = _applyDecoratedDescriptor(_class95.prototype, 'titlePress', [_dec245], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class95)) || _class94) || _class94);
var Ui5ObjectNumber = exports.Ui5ObjectNumber = (_dec246 = (0, _aureliaTemplating.customElement)('ui5-object-number'), _dec247 = (0, _aureliaDependencyInjection.inject)(Element), _dec248 = (0, _aureliaTemplating.bindable)(), _dec249 = (0, _aureliaTemplating.bindable)(), _dec250 = (0, _aureliaTemplating.bindable)(), _dec251 = (0, _aureliaTemplating.bindable)(), _dec252 = (0, _aureliaTemplating.bindable)(), _dec253 = (0, _aureliaTemplating.bindable)(), _dec254 = (0, _aureliaTemplating.bindable)(), _dec246(_class97 = _dec247(_class97 = (_class98 = function () {
  function Ui5ObjectNumber(element) {
    _classCallCheck(this, Ui5ObjectNumber);

    this._number = null;

    _initDefineProp(this, 'ui5Id', _descriptor187, this);

    _initDefineProp(this, 'number', _descriptor188, this);

    _initDefineProp(this, 'numberUnit', _descriptor189, this);

    _initDefineProp(this, 'emphasized', _descriptor190, this);

    _initDefineProp(this, 'state', _descriptor191, this);

    _initDefineProp(this, 'unit', _descriptor192, this);

    _initDefineProp(this, 'textDirection', _descriptor193, this);

    _initDefineProp(this, 'textAlign', _descriptor194, this);

    this.element = element;
  }

  Ui5ObjectNumber.prototype.defaultFunc = function defaultFunc() {};

  Ui5ObjectNumber.prototype.attached = function attached() {

    this._number = new sap.m.ObjectNumber({
      number: this.number != null ? this.number : this.element.innerText.trim(),
      numberUnit: this.numberUnit,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      state: this.state,
      unit: this.unit,
      textDirection: this.textDirection,
      textAlign: this.textAlign
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._number, this.element);
  };

  Ui5ObjectNumber.prototype.numberChanged = function numberChanged(newValue) {
    if (this._number != null) {
      this._number.setNumber(newValue);
    }
  };

  Ui5ObjectNumber.prototype.numberUnitChanged = function numberUnitChanged(newValue) {
    if (this._number !== null) {
      this._number.setNumberUnit(newValue);
    }
  };

  Ui5ObjectNumber.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
    if (this._number !== null) {
      this._number.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ObjectNumber.prototype.stateChanged = function stateChanged(newValue) {
    if (this._number !== null) {
      this._number.setState(newValue);
    }
  };

  Ui5ObjectNumber.prototype.unitChanged = function unitChanged(newValue) {
    if (this._number !== null) {
      this._number.setUnit(newValue);
    }
  };

  Ui5ObjectNumber.prototype.textAlignChanged = function textAlignChanged(newValue) {
    if (this._number !== null) {
      this._number.setTextAlign(newValue);
    }
  };

  Ui5ObjectNumber.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._number !== null) {
      this._number.setTextDirection(newValue);
    }
  };

  return Ui5ObjectNumber;
}(), (_descriptor187 = _applyDecoratedDescriptor(_class98.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor188 = _applyDecoratedDescriptor(_class98.prototype, 'number', [_dec248], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor189 = _applyDecoratedDescriptor(_class98.prototype, 'numberUnit', [_dec249], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor190 = _applyDecoratedDescriptor(_class98.prototype, 'emphasized', [_dec250], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor191 = _applyDecoratedDescriptor(_class98.prototype, 'state', [_dec251], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor192 = _applyDecoratedDescriptor(_class98.prototype, 'unit', [_dec252], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor193 = _applyDecoratedDescriptor(_class98.prototype, 'textDirection', [_dec253], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor194 = _applyDecoratedDescriptor(_class98.prototype, 'textAlign', [_dec254], {
  enumerable: true,
  initializer: function initializer() {
    return 'Begin';
  }
})), _class98)) || _class97) || _class97);
var Ui5Page = exports.Ui5Page = (_dec255 = (0, _aureliaTemplating.customElement)('ui5-page'), _dec256 = (0, _aureliaDependencyInjection.inject)(Element), _dec257 = (0, _aureliaTemplating.bindable)(), _dec258 = (0, _aureliaTemplating.bindable)(), _dec259 = (0, _aureliaTemplating.bindable)(), _dec260 = (0, _aureliaTemplating.bindable)(), _dec261 = (0, _aureliaTemplating.bindable)(), _dec255(_class100 = _dec256(_class100 = (_class101 = function () {
  function Ui5Page(element) {
    _classCallCheck(this, Ui5Page);

    _initDefineProp(this, 'title', _descriptor195, this);

    _initDefineProp(this, 'showHeader', _descriptor196, this);

    _initDefineProp(this, 'showFooter', _descriptor197, this);

    _initDefineProp(this, 'showNavButton', _descriptor198, this);

    _initDefineProp(this, 'navButtonPress', _descriptor199, this);

    this._page = null;

    this.element = element;
  }

  Ui5Page.prototype.defaultFunc = function defaultFunc() {};

  Ui5Page.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator19 = path, _isArray19 = Array.isArray(_iterator19), _i19 = 0, _iterator19 = _isArray19 ? _iterator19 : _iterator19[Symbol.iterator]();;) {
      if (_isArray19) {
        if (_i19 >= _iterator19.length) break;
        elem = _iterator19[_i19++];
      } else {
        _i19 = _iterator19.next();
        if (_i19.done) break;
        elem = _i19.value;
      }

      if (elem.localName == 'header') {
        this._page.addHeaderContent(child);
        break;
      }
      if (elem.localName == 'subheader') {
        this._page.setSubHeader(child);
        break;
      }
      if (elem.localName == 'content') {
        this._page.addContent(child);
        break;
      }
      if (elem.localName == 'footer') {
        this._page.setFooter(child);
        break;
      }
    }
  };

  Ui5Page.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator20 = path, _isArray20 = Array.isArray(_iterator20), _i20 = 0, _iterator20 = _isArray20 ? _iterator20 : _iterator20[Symbol.iterator]();;) {
      if (_isArray20) {
        if (_i20 >= _iterator20.length) break;
        elem = _iterator20[_i20++];
      } else {
        _i20 = _iterator20.next();
        if (_i20.done) break;
        elem = _i20.value;
      }

      if (elem.localName == 'header') {
        this._page.removeHeaderContent(child);
        break;
      }
      if (elem.localName == 'subheader') {
        break;
      }
      if (elem.localName == 'content') {
        this._page.removeContent(child);
        break;
      }
      if (elem.localName == 'footer') {
        break;
      }
    }
  };

  Ui5Page.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.m.Page({
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      showNavButton: getBooleanFromAttributeValue(this.showNavButton),
      navButtonPress: this.navButtonPress
    });
    this._page = page;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._page, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._page.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Page.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._page, this.element);
    } else {
      this._page.destroy();
    }
  };

  Ui5Page.prototype.titleChanged = function titleChanged(newValue) {
    if (this._page !== null) {
      this._page.setTitle(newValue);
    }
  };

  Ui5Page.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Page.prototype.showFooterChanged = function showFooterChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowFooter(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Page.prototype.showNavButtonChanged = function showNavButtonChanged(newValue) {
    if (this._page !== null) {
      this._page.setShowNavButton(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Page;
}(), (_descriptor195 = _applyDecoratedDescriptor(_class101.prototype, 'title', [_dec257], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor196 = _applyDecoratedDescriptor(_class101.prototype, 'showHeader', [_dec258], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor197 = _applyDecoratedDescriptor(_class101.prototype, 'showFooter', [_dec259], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor198 = _applyDecoratedDescriptor(_class101.prototype, 'showNavButton', [_dec260], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor199 = _applyDecoratedDescriptor(_class101.prototype, 'navButtonPress', [_dec261], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class101)) || _class100) || _class100);
var Ui5OverflowToolbar = exports.Ui5OverflowToolbar = (_dec262 = (0, _aureliaTemplating.customElement)('ui5-overflow-toolbar'), _dec263 = (0, _aureliaDependencyInjection.inject)(Element), _dec264 = (0, _aureliaTemplating.bindable)(), _dec265 = (0, _aureliaTemplating.bindable)(), _dec266 = (0, _aureliaTemplating.bindable)(), _dec267 = (0, _aureliaTemplating.bindable)(), _dec268 = (0, _aureliaTemplating.bindable)(), _dec269 = (0, _aureliaTemplating.bindable)(), _dec262(_class103 = _dec263(_class103 = (_class104 = function () {
  function Ui5OverflowToolbar(element) {
    _classCallCheck(this, Ui5OverflowToolbar);

    this._bar = null;

    _initDefineProp(this, 'width', _descriptor200, this);

    _initDefineProp(this, 'active', _descriptor201, this);

    _initDefineProp(this, 'enabled', _descriptor202, this);

    _initDefineProp(this, 'height', _descriptor203, this);

    _initDefineProp(this, 'design', _descriptor204, this);

    _initDefineProp(this, 'press', _descriptor205, this);

    this.element = element;
  }

  Ui5OverflowToolbar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5OverflowToolbar.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator21 = path, _isArray21 = Array.isArray(_iterator21), _i21 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
      if (_isArray21) {
        if (_i21 >= _iterator21.length) break;
        elem = _iterator21[_i21++];
      } else {
        _i21 = _iterator21.next();
        if (_i21.done) break;
        elem = _i21.value;
      }

      if (elem.localName == 'content') {
        this._bar.addContent(child);
        break;
      }
    }
  };

  Ui5OverflowToolbar.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator22 = path, _isArray22 = Array.isArray(_iterator22), _i22 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
      if (_isArray22) {
        if (_i22 >= _iterator22.length) break;
        elem = _iterator22[_i22++];
      } else {
        _i22 = _iterator22.next();
        if (_i22.done) break;
        elem = _i22.value;
      }

      if (elem.localName == 'content') {
        this._bar.removeContent(child);
        break;
      }
    }
  };

  Ui5OverflowToolbar.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._bar = new sap.m.OverflowToolbar({
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      active: getBooleanFromAttributeValue(this.active),
      height: this.height,
      design: this.design,
      press: this.press
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._bar, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._bar.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5OverflowToolbar.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._bar, this.element);
    } else {
      this._bar.destroy();
    }
  };

  Ui5OverflowToolbar.prototype.widthChanged = function widthChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setWidth(newValue);
    }
  };

  Ui5OverflowToolbar.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5OverflowToolbar.prototype.activeChanged = function activeChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setActive(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5OverflowToolbar.prototype.heightChanged = function heightChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setHeight(newValue);
    }
  };

  Ui5OverflowToolbar.prototype.designChanged = function designChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setDesign(newValue);
    }
  };

  Ui5OverflowToolbar.prototype.pressChanged = function pressChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setPress(newValue);
    }
  };

  return Ui5OverflowToolbar;
}(), (_descriptor200 = _applyDecoratedDescriptor(_class104.prototype, 'width', [_dec264], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor201 = _applyDecoratedDescriptor(_class104.prototype, 'active', [_dec265], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor202 = _applyDecoratedDescriptor(_class104.prototype, 'enabled', [_dec266], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor203 = _applyDecoratedDescriptor(_class104.prototype, 'height', [_dec267], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor204 = _applyDecoratedDescriptor(_class104.prototype, 'design', [_dec268], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor205 = _applyDecoratedDescriptor(_class104.prototype, 'press', [_dec269], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class104)) || _class103) || _class103);
var Ui5ResponsiveGridLayout = exports.Ui5ResponsiveGridLayout = (_dec270 = (0, _aureliaTemplating.customElement)('ui5-responsive-grid-layout'), _dec271 = (0, _aureliaDependencyInjection.inject)(Element), _dec272 = (0, _aureliaTemplating.bindable)(), _dec273 = (0, _aureliaTemplating.bindable)(), _dec274 = (0, _aureliaTemplating.bindable)(), _dec275 = (0, _aureliaTemplating.bindable)(), _dec276 = (0, _aureliaTemplating.bindable)(), _dec277 = (0, _aureliaTemplating.bindable)(), _dec278 = (0, _aureliaTemplating.bindable)(), _dec279 = (0, _aureliaTemplating.bindable)(), _dec280 = (0, _aureliaTemplating.bindable)(), _dec281 = (0, _aureliaTemplating.bindable)(), _dec282 = (0, _aureliaTemplating.bindable)(), _dec283 = (0, _aureliaTemplating.bindable)(), _dec284 = (0, _aureliaTemplating.bindable)(), _dec285 = (0, _aureliaTemplating.bindable)(), _dec270(_class106 = _dec271(_class106 = (_class107 = function () {
  function Ui5ResponsiveGridLayout(element) {
    _classCallCheck(this, Ui5ResponsiveGridLayout);

    _initDefineProp(this, 'ui5Id', _descriptor206, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor207, this);

    _initDefineProp(this, 'labelSpanL', _descriptor208, this);

    _initDefineProp(this, 'labelSpanM', _descriptor209, this);

    _initDefineProp(this, 'labelSpanS', _descriptor210, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor211, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor212, this);

    _initDefineProp(this, 'emptySpanL', _descriptor213, this);

    _initDefineProp(this, 'emptySpanM', _descriptor214, this);

    _initDefineProp(this, 'emptySpanS', _descriptor215, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor216, this);

    _initDefineProp(this, 'breakpointXL', _descriptor217, this);

    _initDefineProp(this, 'breakpointL', _descriptor218, this);

    _initDefineProp(this, 'breakpointM', _descriptor219, this);

    this._form = null;

    this.element = element;
  }

  Ui5ResponsiveGridLayout.prototype.addChild = function addChild(child, elem) {};

  Ui5ResponsiveGridLayout.prototype.attached = function attached() {
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
      breakpointM: parseInt(this.breakpointM)

    };
    if (this.uiId5) this._form = new sap.ui.layout.form.ResponsiveGridLayout(this.ui5Id, params);else this._form = new sap.ui.layout.form.ResponsiveGridLayout(params);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  return Ui5ResponsiveGridLayout;
}(), (_descriptor206 = _applyDecoratedDescriptor(_class107.prototype, 'ui5Id', [_dec272], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor207 = _applyDecoratedDescriptor(_class107.prototype, 'labelSpanXL', [_dec273], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor208 = _applyDecoratedDescriptor(_class107.prototype, 'labelSpanL', [_dec274], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor209 = _applyDecoratedDescriptor(_class107.prototype, 'labelSpanM', [_dec275], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor210 = _applyDecoratedDescriptor(_class107.prototype, 'labelSpanS', [_dec276], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor211 = _applyDecoratedDescriptor(_class107.prototype, 'adjustLabelSpan', [_dec277], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor212 = _applyDecoratedDescriptor(_class107.prototype, 'emptySpanXL', [_dec278], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor213 = _applyDecoratedDescriptor(_class107.prototype, 'emptySpanL', [_dec279], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor214 = _applyDecoratedDescriptor(_class107.prototype, 'emptySpanM', [_dec280], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor215 = _applyDecoratedDescriptor(_class107.prototype, 'emptySpanS', [_dec281], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor216 = _applyDecoratedDescriptor(_class107.prototype, 'singleContainerFullSize', [_dec282], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor217 = _applyDecoratedDescriptor(_class107.prototype, 'breakpointXL', [_dec283], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor218 = _applyDecoratedDescriptor(_class107.prototype, 'breakpointL', [_dec284], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor219 = _applyDecoratedDescriptor(_class107.prototype, 'breakpointM', [_dec285], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class107)) || _class106) || _class106);
var Ui5SearchField = exports.Ui5SearchField = (_dec286 = (0, _aureliaTemplating.customElement)('ui5-search-field'), _dec287 = (0, _aureliaDependencyInjection.inject)(Element), _dec288 = (0, _aureliaTemplating.bindable)(), _dec289 = (0, _aureliaTemplating.bindable)(), _dec290 = (0, _aureliaTemplating.bindable)(), _dec291 = (0, _aureliaTemplating.bindable)(), _dec292 = (0, _aureliaTemplating.bindable)(), _dec293 = (0, _aureliaTemplating.bindable)(), _dec294 = (0, _aureliaTemplating.bindable)(), _dec295 = (0, _aureliaTemplating.bindable)(), _dec296 = (0, _aureliaTemplating.bindable)(), _dec297 = (0, _aureliaTemplating.bindable)(), _dec298 = (0, _aureliaTemplating.bindable)(), _dec299 = (0, _aureliaTemplating.bindable)(), _dec300 = (0, _aureliaTemplating.bindable)(), _dec301 = (0, _aureliaTemplating.bindable)(), _dec302 = (0, _aureliaTemplating.bindable)(), _dec286(_class109 = _dec287(_class109 = (_class110 = function (_Ui5Control2) {
  _inherits(Ui5SearchField, _Ui5Control2);

  Ui5SearchField.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5Control2.prototype.addChild.call(this, child, elem);
    for (var _iterator23 = path, _isArray23 = Array.isArray(_iterator23), _i23 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
      if (_isArray23) {
        if (_i23 >= _iterator23.length) break;
        elem = _iterator23[_i23++];
      } else {
        _i23 = _iterator23.next();
        if (_i23.done) break;
        elem = _i23.value;
      }

      if (elem.localName == 'suggestion-item') {
        this._field.addSuggestionItem(child);
        break;
      }
    }
  };

  function Ui5SearchField(element) {
    _classCallCheck(this, Ui5SearchField);

    var _this9 = _possibleConstructorReturn(this, _Ui5Control2.call(this, element));

    _this9._field = null;

    _initDefineProp(_this9, 'value', _descriptor220, _this9);

    _initDefineProp(_this9, 'width', _descriptor221, _this9);

    _initDefineProp(_this9, 'enabled', _descriptor222, _this9);

    _initDefineProp(_this9, 'visible', _descriptor223, _this9);

    _initDefineProp(_this9, 'maxLength', _descriptor224, _this9);

    _initDefineProp(_this9, 'placeholder', _descriptor225, _this9);

    _initDefineProp(_this9, 'showMagnifier', _descriptor226, _this9);

    _initDefineProp(_this9, 'showRefreshButton', _descriptor227, _this9);

    _initDefineProp(_this9, 'refreshButtonTooltip', _descriptor228, _this9);

    _initDefineProp(_this9, 'showSearchButton', _descriptor229, _this9);

    _initDefineProp(_this9, 'enableSuggestions', _descriptor230, _this9);

    _initDefineProp(_this9, 'selectOnFocus', _descriptor231, _this9);

    _initDefineProp(_this9, 'liveChange', _descriptor232, _this9);

    _initDefineProp(_this9, 'suggest', _descriptor233, _this9);

    _initDefineProp(_this9, 'search', _descriptor234, _this9);

    _this9.element = element;
    return _this9;
  }

  Ui5SearchField.prototype.defaultFunc = function defaultFunc() {};

  Ui5SearchField.prototype.attached = function attached() {
    var _params;

    var attributeManager = new AttributeManager(this.element);
    var params = (_params = {
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
      showSearchButton: getBooleanFromAttributeValue(this.showSearchButton)
    }, _params['enableSuggestions'] = getBooleanFromAttributeValue(this.enableSuggestions), _params.selectOnFocus = getBooleanFromAttributeValue(this.selectOnFocus), _params);
    if (this.ui5Id) this._field = new sap.m.SearchField(this.ui5Id, params);else this._field = new sap.m.SearchField(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._field, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._field.attachLiveChange(function (event) {
      if (getBooleanFromAttributeValue(that.valueLiveUpdate)) {
        that.value = event.mParameters.value;
      }
    });
    this._field.addEventDelegate(this.element);
    _Ui5Control2.prototype.attached.call(this);
  };

  Ui5SearchField.prototype.valueChanged = function valueChanged(newValue) {
    if (this._field !== null) {
      this._field.setValue(newValue);
    }
  };

  Ui5SearchField.prototype.widthChanged = function widthChanged(newValue) {
    if (this._field !== null) {
      this._field.setWidth(newValue);
    }
  };

  Ui5SearchField.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._field !== null) {
      this._field.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SearchField.prototype.visibleChanged = function visibleChanged(newValue) {
    if (this._field !== null) {
      this._field.setVisible(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SearchField.prototype.maxLengthChanged = function maxLengthChanged(newValue) {
    if (this._field !== null) {
      this._field.setMaxLength(newValue);
    }
  };

  Ui5SearchField.prototype.placeholderChanged = function placeholderChanged(newValue) {
    if (this._field !== null) {
      this._field.setPlaceholder(newValue);
    }
  };

  Ui5SearchField.prototype.showMagnifierChanged = function showMagnifierChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowMagnifier(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SearchField.prototype.showRefreshButtonChanged = function showRefreshButtonChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowRefreshButton(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SearchField.prototype.refreshButtonTooltipChanged = function refreshButtonTooltipChanged(newValue) {
    if (this._field !== null) {
      this._field.setRefreshButtonTooltip(newValue);
    }
  };

  Ui5SearchField.prototype.showSearchButtonChanged = function showSearchButtonChanged(newValue) {
    if (this._field !== null) {
      this._field.setShowSearchButton(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SearchField.prototype.enableSuggestionsChanged = function enableSuggestionsChanged(newValue) {
    if (this._field !== null) {
      this._field.setEnableSuggestions(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SearchField.prototype.selectOnFocusChanged = function selectOnFocusChanged(newValue) {
    if (this._field !== null) {
      this._field.setSelectOnFocus(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5SearchField;
}(Ui5Control), (_descriptor220 = _applyDecoratedDescriptor(_class110.prototype, 'value', [_dec288], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor221 = _applyDecoratedDescriptor(_class110.prototype, 'width', [_dec289], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor222 = _applyDecoratedDescriptor(_class110.prototype, 'enabled', [_dec290], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor223 = _applyDecoratedDescriptor(_class110.prototype, 'visible', [_dec291], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor224 = _applyDecoratedDescriptor(_class110.prototype, 'maxLength', [_dec292], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor225 = _applyDecoratedDescriptor(_class110.prototype, 'placeholder', [_dec293], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor226 = _applyDecoratedDescriptor(_class110.prototype, 'showMagnifier', [_dec294], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor227 = _applyDecoratedDescriptor(_class110.prototype, 'showRefreshButton', [_dec295], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor228 = _applyDecoratedDescriptor(_class110.prototype, 'refreshButtonTooltip', [_dec296], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor229 = _applyDecoratedDescriptor(_class110.prototype, 'showSearchButton', [_dec297], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor230 = _applyDecoratedDescriptor(_class110.prototype, 'enableSuggestions', [_dec298], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor231 = _applyDecoratedDescriptor(_class110.prototype, 'selectOnFocus', [_dec299], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor232 = _applyDecoratedDescriptor(_class110.prototype, 'liveChange', [_dec300], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor233 = _applyDecoratedDescriptor(_class110.prototype, 'suggest', [_dec301], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor234 = _applyDecoratedDescriptor(_class110.prototype, 'search', [_dec302], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class110)) || _class109) || _class109);
var Ui5Select = exports.Ui5Select = (_dec303 = (0, _aureliaTemplating.customElement)('ui5-select'), _dec304 = (0, _aureliaDependencyInjection.inject)(Element), _dec305 = (0, _aureliaTemplating.bindable)(), _dec306 = (0, _aureliaTemplating.bindable)(), _dec307 = (0, _aureliaTemplating.bindable)(), _dec308 = (0, _aureliaTemplating.bindable)(), _dec309 = (0, _aureliaTemplating.bindable)(), _dec310 = (0, _aureliaTemplating.bindable)(), _dec311 = (0, _aureliaTemplating.bindable)(), _dec312 = (0, _aureliaTemplating.bindable)(), _dec313 = (0, _aureliaTemplating.bindable)(), _dec314 = (0, _aureliaTemplating.bindable)(), _dec315 = (0, _aureliaTemplating.bindable)(), _dec316 = (0, _aureliaTemplating.bindable)(), _dec317 = (0, _aureliaTemplating.bindable)(), _dec318 = (0, _aureliaTemplating.bindable)(), _dec319 = (0, _aureliaTemplating.bindable)(), _dec320 = (0, _aureliaTemplating.bindable)(), _dec321 = (0, _aureliaTemplating.bindable)(), _dec303(_class112 = _dec304(_class112 = (_class113 = function () {
  Ui5Select.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator24 = path, _isArray24 = Array.isArray(_iterator24), _i24 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
      if (_isArray24) {
        if (_i24 >= _iterator24.length) break;
        elem = _iterator24[_i24++];
      } else {
        _i24 = _iterator24.next();
        if (_i24.done) break;
        elem = _i24.value;
      }

      if (elem.localName == 'item') if (this._select.getItems().length == 0) this.selectedKey = child.mProperties.key;
      this._select.addItem(child);

      break;
    }
  };

  _createClass(Ui5Select, [{
    key: 'UIElement',
    get: function get() {
      return this._select;
    }
  }]);

  function Ui5Select(element) {
    _classCallCheck(this, Ui5Select);

    this._select = null;

    _initDefineProp(this, 'ui5Id', _descriptor235, this);

    _initDefineProp(this, 'name', _descriptor236, this);

    _initDefineProp(this, 'width', _descriptor237, this);

    _initDefineProp(this, 'maxWidth', _descriptor238, this);

    _initDefineProp(this, 'enabled', _descriptor239, this);

    _initDefineProp(this, 'selectedKey', _descriptor240, this);

    _initDefineProp(this, 'selectedItemId', _descriptor241, this);

    _initDefineProp(this, 'icon', _descriptor242, this);

    _initDefineProp(this, 'type', _descriptor243, this);

    _initDefineProp(this, 'autoAdjustWidth', _descriptor244, this);

    _initDefineProp(this, 'valueState', _descriptor245, this);

    _initDefineProp(this, 'valueStateText', _descriptor246, this);

    _initDefineProp(this, 'showSecondaryValues', _descriptor247, this);

    _initDefineProp(this, 'forceSelection', _descriptor248, this);

    _initDefineProp(this, 'items', _descriptor249, this);

    _initDefineProp(this, 'selectedItem', _descriptor250, this);

    _initDefineProp(this, 'change', _descriptor251, this);

    this.element = element;
  }

  Ui5Select.prototype.defaultFunc = function defaultFunc() {};

  Ui5Select.prototype.attached = function attached() {
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
    if (this.ui5Id) this._select = new sap.m.Select(this.ui5Id, params);else this._select = new sap.m.Select(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._select, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._select.attachChange(function (event) {
      that.selectedItem = event.mParameters.selectedItem;
      that.selectedKey = event.mParameters.selectedItem.mProperties.key;
    });

    this._select.addEventDelegate(this.element);
  };

  Ui5Select.prototype.nameChanged = function nameChanged(newValue) {
    if (this._select !== null) {
      this._select.setName(newValue);
    }
  };

  Ui5Select.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._select !== null) {
      this._select.setEnableChanged(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Select.prototype.widthChanged = function widthChanged(newValue) {
    if (this._select !== null) {
      this._select.setWidth(newValue);
    }
  };

  Ui5Select.prototype.maxWidthChanged = function maxWidthChanged(newValue) {
    if (this._select !== null) {
      this._select.setMaxWidth(newValue);
    }
  };

  Ui5Select.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
    if (this._select !== null) {
      this._select.setSelectedKey(newValue);
    }
  };

  Ui5Select.prototype.selectedItemIdChanged = function selectedItemIdChanged(newValue) {
    if (this._select !== null) {
      this._select.setSelectedItemId(newValue);
    }
  };

  Ui5Select.prototype.iconChanged = function iconChanged(newValue) {
    if (this._select !== null) {
      this._select.setIcon(newValue);
    }
  };

  Ui5Select.prototype.typeChanged = function typeChanged(newValue) {
    if (this._select !== null) {
      this._select.setType(newValue);
    }
  };

  Ui5Select.prototype.autoAdjustWidthChanged = function autoAdjustWidthChanged(newValue) {
    if (this._select !== null) {
      this._select.setAutoAdjustWidth(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Select.prototype.textAlignChanged = function textAlignChanged(newValue) {
    if (this._select !== null) {
      this._select.setTextAlign(newValue);
    }
  };

  Ui5Select.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._select !== null) {
      this._select.setTextDirection(newValue);
    }
  };

  Ui5Select.prototype.valueStateChanged = function valueStateChanged(newValue) {
    if (this._select !== null) {
      this._select.setValueState(newValue);
    }
  };

  Ui5Select.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
    if (this._select !== null) {
      this._select.setValueStateText(newValue);
    }
  };

  Ui5Select.prototype.showSecondaryValuesChanged = function showSecondaryValuesChanged(newValue) {
    if (this._select !== null) {
      this._select.setShowSecondaryValues(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Select.prototype.forceSelectionChanged = function forceSelectionChanged(newValue) {
    if (this._select !== null) {
      this._select.setForceSelection(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Select;
}(), (_descriptor235 = _applyDecoratedDescriptor(_class113.prototype, 'ui5Id', [_dec305], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor236 = _applyDecoratedDescriptor(_class113.prototype, 'name', [_dec306], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor237 = _applyDecoratedDescriptor(_class113.prototype, 'width', [_dec307], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor238 = _applyDecoratedDescriptor(_class113.prototype, 'maxWidth', [_dec308], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor239 = _applyDecoratedDescriptor(_class113.prototype, 'enabled', [_dec309], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor240 = _applyDecoratedDescriptor(_class113.prototype, 'selectedKey', [_dec310], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor241 = _applyDecoratedDescriptor(_class113.prototype, 'selectedItemId', [_dec311], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor242 = _applyDecoratedDescriptor(_class113.prototype, 'icon', [_dec312], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor243 = _applyDecoratedDescriptor(_class113.prototype, 'type', [_dec313], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor244 = _applyDecoratedDescriptor(_class113.prototype, 'autoAdjustWidth', [_dec314], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor245 = _applyDecoratedDescriptor(_class113.prototype, 'valueState', [_dec315], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor246 = _applyDecoratedDescriptor(_class113.prototype, 'valueStateText', [_dec316], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor247 = _applyDecoratedDescriptor(_class113.prototype, 'showSecondaryValues', [_dec317], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor248 = _applyDecoratedDescriptor(_class113.prototype, 'forceSelection', [_dec318], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor249 = _applyDecoratedDescriptor(_class113.prototype, 'items', [_dec319], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor250 = _applyDecoratedDescriptor(_class113.prototype, 'selectedItem', [_dec320], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor251 = _applyDecoratedDescriptor(_class113.prototype, 'change', [_dec321], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class113)) || _class112) || _class112);
var Ui5Shell = exports.Ui5Shell = (_dec322 = (0, _aureliaTemplating.customElement)('ui5-shell'), _dec323 = (0, _aureliaDependencyInjection.inject)(Element), _dec324 = (0, _aureliaTemplating.bindable)(), _dec325 = (0, _aureliaTemplating.bindable)(), _dec322(_class115 = _dec323(_class115 = (_class116 = function () {
  function Ui5Shell(element) {
    _classCallCheck(this, Ui5Shell);

    _initDefineProp(this, 'title', _descriptor252, this);

    _initDefineProp(this, 'appWidthLimited', _descriptor253, this);

    this._shell = null;

    this.element = element;
  }

  Ui5Shell.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator25 = path, _isArray25 = Array.isArray(_iterator25), _i25 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
      if (_isArray25) {
        if (_i25 >= _iterator25.length) break;
        elem = _iterator25[_i25++];
      } else {
        _i25 = _iterator25.next();
        if (_i25.done) break;
        elem = _i25.value;
      }

      if (elem.localName == 'content') {
        this._shell.setApp(child);
        break;
      }
    }
  };

  Ui5Shell.prototype.removeChild = function removeChild(child, elem) {};

  Ui5Shell.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var shell = new sap.m.Shell({
      title: this.title,
      appWidthLimited: getBooleanFromAttributeValue(this.appWidthLimited)

    });
    this._shell = shell;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._shell, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._shell.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Shell.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._shell, this.element);
    } else {
      this._shell.destroy();
    }
  };

  Ui5Shell.prototype.titleChanged = function titleChanged(newValue) {
    if (this._shell !== null) {
      this._shell.setTitle(newValue);
    }
  };

  Ui5Shell.prototype.appWidthLimitedChanged = function appWidthLimitedChanged(newValue) {
    if (this._shell !== null) {
      this._shell.setAppWidthLimited(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Shell;
}(), (_descriptor252 = _applyDecoratedDescriptor(_class116.prototype, 'title', [_dec324], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor253 = _applyDecoratedDescriptor(_class116.prototype, 'appWidthLimited', [_dec325], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class116)) || _class115) || _class115);
var Ui5SegmentedButton = exports.Ui5SegmentedButton = (_dec326 = (0, _aureliaTemplating.customElement)('ui5-segmented-button'), _dec327 = (0, _aureliaDependencyInjection.inject)(Element), _dec328 = (0, _aureliaTemplating.bindable)(), _dec329 = (0, _aureliaTemplating.bindable)(), _dec330 = (0, _aureliaTemplating.bindable)(), _dec331 = (0, _aureliaTemplating.bindable)(), _dec326(_class118 = _dec327(_class118 = (_class119 = function () {
  Ui5SegmentedButton.prototype.defaultFunc = function defaultFunc() {};

  function Ui5SegmentedButton(element) {
    _classCallCheck(this, Ui5SegmentedButton);

    _initDefineProp(this, 'enabled', _descriptor254, this);

    _initDefineProp(this, 'width', _descriptor255, this);

    _initDefineProp(this, 'selectedKey', _descriptor256, this);

    _initDefineProp(this, 'select', _descriptor257, this);

    this._button = null;

    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  Ui5SegmentedButton.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator26 = path, _isArray26 = Array.isArray(_iterator26), _i26 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
      if (_isArray26) {
        if (_i26 >= _iterator26.length) break;
        elem = _iterator26[_i26++];
      } else {
        _i26 = _iterator26.next();
        if (_i26.done) break;
        elem = _i26.value;
      }

      if (elem.localName == 'item') if (this._button.getItems().length == 0) this.selectedKey = child.mProperties.key;
      this._button.addItem(child);

      break;
    }
  };

  Ui5SegmentedButton.prototype.attached = function attached() {
    this._button = new sap.m.SegmentedButton({
      enabled: !getBooleanFromAttributeValue(this.enabled),
      width: this.width,
      selectedKey: this.selectedKey,
      select: this.select
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
    }
    this._button.attachChange(function (event) {
      that.selectedKey = event.mParameters.selectedItem.mProperties.key;
    });
  };

  Ui5SegmentedButton.prototype.detached = function detached() {};

  Ui5SegmentedButton.prototype.enableChanged = function enableChanged(newValue) {
    if (this._button !== null) {
      this._button.setEnabled(!getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SegmentedButton.prototype.widthChanged = function widthChanged(newValue) {
    if (this._button !== null) {
      this._button.setEidth(newValue);
    }
  };

  Ui5SegmentedButton.prototype.selectedKeyChanged = function selectedKeyChanged(newValue) {
    if (this._button !== null) {
      this._button.setSelectedKey(newValue);
    }
  };

  _createClass(Ui5SegmentedButton, [{
    key: 'UIElement',
    get: function get() {
      return this._button;
    }
  }]);

  return Ui5SegmentedButton;
}(), (_descriptor254 = _applyDecoratedDescriptor(_class119.prototype, 'enabled', [_dec328], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor255 = _applyDecoratedDescriptor(_class119.prototype, 'width', [_dec329], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor256 = _applyDecoratedDescriptor(_class119.prototype, 'selectedKey', [_dec330], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor257 = _applyDecoratedDescriptor(_class119.prototype, 'select', [_dec331], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class119)) || _class118) || _class118);
var Ui5DynamicPageHeader = exports.Ui5DynamicPageHeader = (_dec332 = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-header'), _dec333 = (0, _aureliaDependencyInjection.inject)(Element), _dec334 = (0, _aureliaTemplating.bindable)(), _dec332(_class121 = _dec333(_class121 = (_class122 = function () {
  function Ui5DynamicPageHeader(element) {
    _classCallCheck(this, Ui5DynamicPageHeader);

    this._header = null;

    _initDefineProp(this, 'pinnable', _descriptor258, this);

    this.element = element;
  }

  Ui5DynamicPageHeader.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator27 = path, _isArray27 = Array.isArray(_iterator27), _i27 = 0, _iterator27 = _isArray27 ? _iterator27 : _iterator27[Symbol.iterator]();;) {
      if (_isArray27) {
        if (_i27 >= _iterator27.length) break;
        elem = _iterator27[_i27++];
      } else {
        _i27 = _iterator27.next();
        if (_i27.done) break;
        elem = _i27.value;
      }

      if (elem.localName == 'content') {
        this._header.addContent(child);
      }
    }
  };

  Ui5DynamicPageHeader.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator28 = path, _isArray28 = Array.isArray(_iterator28), _i28 = 0, _iterator28 = _isArray28 ? _iterator28 : _iterator28[Symbol.iterator]();;) {
      if (_isArray28) {
        if (_i28 >= _iterator28.length) break;
        elem = _iterator28[_i28++];
      } else {
        _i28 = _iterator28.next();
        if (_i28.done) break;
        elem = _i28.value;
      }

      if (elem.localName == 'content') {
        this._header.removeContent(child);
      }
    }
  };

  Ui5DynamicPageHeader.prototype.defaultPress = function defaultPress() {};

  Ui5DynamicPageHeader.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);

    this._header = new sap.f.DynamicPageHeader({
      pinnable: getBooleanFromAttributeValue(this.pinnable)
    });
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._header, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    }
  };

  Ui5DynamicPageHeader.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._header, this.element);
  };

  Ui5DynamicPageHeader.prototype.pinnableChanged = function pinnableChanged(newValue) {
    if (this._header !== null) {
      this._header.setPinnable(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5DynamicPageHeader;
}(), (_descriptor258 = _applyDecoratedDescriptor(_class122.prototype, 'pinnable', [_dec334], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class122)) || _class121) || _class121);
var Ui5SlideTile = exports.Ui5SlideTile = (_dec335 = (0, _aureliaTemplating.customElement)('ui5-slide-tile'), _dec336 = (0, _aureliaDependencyInjection.inject)(Element), _dec337 = (0, _aureliaTemplating.bindable)(), _dec338 = (0, _aureliaTemplating.bindable)(), _dec335(_class124 = _dec336(_class124 = (_class125 = function () {
  function Ui5SlideTile(element) {
    _classCallCheck(this, Ui5SlideTile);

    this._container = null;

    _initDefineProp(this, 'displayTime', _descriptor259, this);

    _initDefineProp(this, 'transitionTime', _descriptor260, this);

    this.element = element;
  }

  Ui5SlideTile.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'tile') this._container.addTile(child);
  };

  Ui5SlideTile.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'tile') this._container.removeTile(child);
  };

  Ui5SlideTile.prototype.attached = function attached() {
    this._container = new sap.m.SlideTile({
      displayTime: this.displayTime,
      transitionTime: this.transitionTime
    });
    this._container.addStyleClass('sapUiTinyMarginTop');
    this._container.addStyleClass('sapUiTinyMarginBegin');

    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
  };

  Ui5SlideTile.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
  };

  Ui5SlideTile.prototype.displayTimeChanged = function displayTimeChanged(newValue) {
    if (this._container != null) {
      this._container.setDisplayTime(newValue);
    }
  };

  Ui5SlideTile.prototype.transitionTimeChanged = function transitionTimeChanged(newValue) {
    if (this._container != null) {
      this._container.setTransitionTime(newValue);
    }
  };

  return Ui5SlideTile;
}(), (_descriptor259 = _applyDecoratedDescriptor(_class125.prototype, 'displayTime', [_dec337], {
  enumerable: true,
  initializer: function initializer() {
    return 5000;
  }
}), _descriptor260 = _applyDecoratedDescriptor(_class125.prototype, 'transitionTime', [_dec338], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class125)) || _class124) || _class124);

var Ui5Element = exports.Ui5Element = function () {
  function Ui5Element() {
    _classCallCheck(this, Ui5Element);

    this._container = null;
  }

  Ui5Element.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'layout') {
      this._input.setLayoutData(child);
    }
  };

  Ui5Element.prototype.removeChild = function removeChild(child, elem) {};

  Ui5Element.prototype.attached = function attached() {};

  return Ui5Element;
}();

var MdSlider = exports.MdSlider = (_dec339 = (0, _aureliaTemplating.customElement)('md-slider'), _dec340 = (0, _aureliaDependencyInjection.inject)(Element), _dec341 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <slot></slot>\n  </ul>\n  </template>\n'), _dec342 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec343 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec344 = (0, _aureliaTemplating.bindable)(), _dec345 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec346 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec339(_class128 = _dec340(_class128 = _dec341(_class128 = (_class129 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor261, this);

    _initDefineProp(this, 'mdHeight', _descriptor262, this);

    _initDefineProp(this, 'mdIndicators', _descriptor263, this);

    _initDefineProp(this, 'mdInterval', _descriptor264, this);

    _initDefineProp(this, 'mdTransition', _descriptor265, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-slider');
  }

  MdSlider.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdFillContainer)) {
      this.element.classList.add('fullscreen');
    }
    this.refresh();
  };

  MdSlider.prototype.pause = function pause() {
    $(this.element).slider('pause');
  };

  MdSlider.prototype.start = function start() {
    $(this.element).slider('start');
  };

  MdSlider.prototype.next = function next() {
    $(this.element).slider('next');
  };

  MdSlider.prototype.prev = function prev() {
    $(this.element).slider('prev');
  };

  MdSlider.prototype.refresh = function refresh() {
    var options = {
      height: parseInt(this.mdHeight, 10),
      indicators: getBooleanFromAttributeValue(this.mdIndicators),
      interval: parseInt(this.mdInterval, 10),
      transition: parseInt(this.mdTransition, 10)
    };
    this.log.debug('refreshing slider, params:', options);
    $(this.element).slider(options);
  };

  MdSlider.prototype.mdIndicatorsChanged = function mdIndicatorsChanged() {
    this.refresh();
  };

  return MdSlider;
}(), (_descriptor261 = _applyDecoratedDescriptor(_class129.prototype, 'mdFillContainer', [_dec342], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor262 = _applyDecoratedDescriptor(_class129.prototype, 'mdHeight', [_dec343], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor263 = _applyDecoratedDescriptor(_class129.prototype, 'mdIndicators', [_dec344], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor264 = _applyDecoratedDescriptor(_class129.prototype, 'mdInterval', [_dec345], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor265 = _applyDecoratedDescriptor(_class129.prototype, 'mdTransition', [_dec346], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class129)) || _class128) || _class128) || _class128);
var Ui5StandardTile = exports.Ui5StandardTile = (_dec347 = (0, _aureliaTemplating.customElement)('ui5-standard-tile'), _dec348 = (0, _aureliaDependencyInjection.inject)(Element), _dec349 = (0, _aureliaTemplating.bindable)(), _dec350 = (0, _aureliaTemplating.bindable)(), _dec351 = (0, _aureliaTemplating.bindable)(), _dec352 = (0, _aureliaTemplating.bindable)(), _dec353 = (0, _aureliaTemplating.bindable)(), _dec354 = (0, _aureliaTemplating.bindable)(), _dec355 = (0, _aureliaTemplating.bindable)(), _dec356 = (0, _aureliaTemplating.bindable)(), _dec357 = (0, _aureliaTemplating.bindable)(), _dec347(_class131 = _dec348(_class131 = (_class132 = function (_Ui5Control3) {
  _inherits(Ui5StandardTile, _Ui5Control3);

  _createClass(Ui5StandardTile, [{
    key: 'UIElement',
    get: function get() {
      return this._tile;
    }
  }]);

  function Ui5StandardTile(element) {
    _classCallCheck(this, Ui5StandardTile);

    var _this10 = _possibleConstructorReturn(this, _Ui5Control3.call(this, element));

    _this10._tile = null;

    _initDefineProp(_this10, 'type', _descriptor266, _this10);

    _initDefineProp(_this10, 'title', _descriptor267, _this10);

    _initDefineProp(_this10, 'number', _descriptor268, _this10);

    _initDefineProp(_this10, 'info', _descriptor269, _this10);

    _initDefineProp(_this10, 'infoState', _descriptor270, _this10);

    _initDefineProp(_this10, 'numberUnit', _descriptor271, _this10);

    _initDefineProp(_this10, 'icon', _descriptor272, _this10);

    _initDefineProp(_this10, 'press', _descriptor273, _this10);

    _initDefineProp(_this10, 'busy', _descriptor274, _this10);

    _this10.element = element;
    return _this10;
  }

  Ui5StandardTile.prototype.defaultPress = function defaultPress() {};

  Ui5StandardTile.prototype.attached = function attached() {
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
    _Ui5Control3.prototype.fillProperties.call(this, props);
    this._tile = new sap.m.StandardTile(props);
    $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.addChild(this._tile, this.element);
  };

  Ui5StandardTile.prototype.detached = function detached() {
    $(this.element).parents("ui5-tile-container")[0].au.controller.viewModel.removeChild(this._tile, this.element);
  };

  Ui5StandardTile.prototype.typeChanged = function typeChanged(newValue) {
    if (this._tile != null) {
      this._tile.setType(newValue);
    }
  };

  Ui5StandardTile.prototype.titleChanged = function titleChanged(newValue) {
    if (this._tile != null) {
      this._tile.setTitle(newValue);
    }
  };

  Ui5StandardTile.prototype.numberChanged = function numberChanged(newValue) {
    if (this._tile != null) {
      this._tile.setNumber(newValue);
    }
  };

  Ui5StandardTile.prototype.numberUnitChanged = function numberUnitChanged(newValue) {
    if (this._tile != null) {
      this._tile.setNumberUnit(newValue);
    }
  };

  Ui5StandardTile.prototype.infoChanged = function infoChanged(newValue) {
    if (this._tile != null) {
      this._tile.setInfo(newValue);
    }
  };

  Ui5StandardTile.prototype.infoStateChanged = function infoStateChanged(newValue) {
    if (this._tile != null) {
      this._tile.setInfoState(newValue);
    }
  };

  Ui5StandardTile.prototype.iconChanged = function iconChanged(newValue) {
    if (this._tile != null) {
      this._tile.setIcon(newValue);
    }
  };

  Ui5StandardTile.prototype.pressChanged = function pressChanged(newValue) {
    if (this._tile !== null) {
      this._tile.attachPress(newValue);
    }
  };

  Ui5StandardTile.prototype.busyChanged = function busyChanged(newValue) {
    if (this._tile !== null) {
      this._tile.setBusy(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5StandardTile;
}(Ui5Control), (_descriptor266 = _applyDecoratedDescriptor(_class132.prototype, 'type', [_dec349], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor267 = _applyDecoratedDescriptor(_class132.prototype, 'title', [_dec350], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor268 = _applyDecoratedDescriptor(_class132.prototype, 'number', [_dec351], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor269 = _applyDecoratedDescriptor(_class132.prototype, 'info', [_dec352], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor270 = _applyDecoratedDescriptor(_class132.prototype, 'infoState', [_dec353], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor271 = _applyDecoratedDescriptor(_class132.prototype, 'numberUnit', [_dec354], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor272 = _applyDecoratedDescriptor(_class132.prototype, 'icon', [_dec355], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor273 = _applyDecoratedDescriptor(_class132.prototype, 'press', [_dec356], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor274 = _applyDecoratedDescriptor(_class132.prototype, 'busy', [_dec357], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class132)) || _class131) || _class131);
var MdSwitch = exports.MdSwitch = (_dec358 = (0, _aureliaTemplating.customElement)('md-switch'), _dec359 = (0, _aureliaDependencyInjection.inject)(Element), _dec360 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec361 = (0, _aureliaTemplating.bindable)(), _dec362 = (0, _aureliaTemplating.bindable)(), _dec363 = (0, _aureliaTemplating.bindable)(), _dec358(_class134 = _dec359(_class134 = (_class135 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor275, this);

    _initDefineProp(this, 'mdDisabled', _descriptor276, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor277, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor278, this);

    this.element = element;
    this.handleChange = this.handleChange.bind(this);
  }

  MdSwitch.prototype.attached = function attached() {
    this.checkbox.checked = getBooleanFromAttributeValue(this.mdChecked);
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
    this.checkbox.addEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.detached = function detached() {
    this.checkbox.removeEventListener('change', this.handleChange);
  };

  MdSwitch.prototype.handleChange = function handleChange() {
    this.mdChecked = this.checkbox.checked;
    fireEvent(this.element, 'blur');
  };

  MdSwitch.prototype.blur = function blur() {
    fireEvent(this.element, 'blur');
  };

  MdSwitch.prototype.mdCheckedChanged = function mdCheckedChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.checked = !!newValue;
    }
  };

  MdSwitch.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  return MdSwitch;
}(), (_descriptor275 = _applyDecoratedDescriptor(_class135.prototype, 'mdChecked', [_dec360], {
  enumerable: true,
  initializer: null
}), _descriptor276 = _applyDecoratedDescriptor(_class135.prototype, 'mdDisabled', [_dec361], {
  enumerable: true,
  initializer: null
}), _descriptor277 = _applyDecoratedDescriptor(_class135.prototype, 'mdLabelOff', [_dec362], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor278 = _applyDecoratedDescriptor(_class135.prototype, 'mdLabelOn', [_dec363], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class135)) || _class134) || _class134);
var Ui5TabContainer = exports.Ui5TabContainer = (_dec364 = (0, _aureliaTemplating.customElement)('ui5-tab-container'), _dec365 = (0, _aureliaDependencyInjection.inject)(Element), _dec366 = (0, _aureliaTemplating.bindable)(), _dec367 = (0, _aureliaTemplating.bindable)(), _dec368 = (0, _aureliaTemplating.bindable)(), _dec369 = (0, _aureliaTemplating.bindable)(), _dec370 = (0, _aureliaTemplating.bindable)(), _dec364(_class137 = _dec365(_class137 = (_class138 = function () {
  function Ui5TabContainer(element) {
    _classCallCheck(this, Ui5TabContainer);

    _initDefineProp(this, 'showAddNewButton', _descriptor279, this);

    _initDefineProp(this, 'selectedItem', _descriptor280, this);

    _initDefineProp(this, 'itemClose', _descriptor281, this);

    _initDefineProp(this, 'itemSelect', _descriptor282, this);

    _initDefineProp(this, 'addNewButtonPress', _descriptor283, this);

    this._tab = null;

    this.element = element;
  }

  Ui5TabContainer.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TabContainer.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator29 = path, _isArray29 = Array.isArray(_iterator29), _i29 = 0, _iterator29 = _isArray29 ? _iterator29 : _iterator29[Symbol.iterator]();;) {
      if (_isArray29) {
        if (_i29 >= _iterator29.length) break;
        elem = _iterator29[_i29++];
      } else {
        _i29 = _iterator29.next();
        if (_i29.done) break;
        elem = _i29.value;
      }

      if (elem.localName == 'content') {
        this._tab.addItem(child);
        break;
      }
    }
  };

  Ui5TabContainer.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator30 = path, _isArray30 = Array.isArray(_iterator30), _i30 = 0, _iterator30 = _isArray30 ? _iterator30 : _iterator30[Symbol.iterator]();;) {
      if (_isArray30) {
        if (_i30 >= _iterator30.length) break;
        elem = _iterator30[_i30++];
      } else {
        _i30 = _iterator30.next();
        if (_i30.done) break;
        elem = _i30.value;
      }

      if (elem.localName == 'content') {
        break;
      }
    }
  };

  Ui5TabContainer.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.TabContainer({
      showAddNewButton: getBooleanFromAttributeValue(this.showAddNewButton),
      itemClose: this.itemClose,
      itemSelect: this.itemSelect,
      addNewButtonPress: this.addNewButtonPress
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5TabContainer.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    } else {
      this._tab.destroy();
    }
  };

  Ui5TabContainer.prototype.showAddNewButtonChanged = function showAddNewButtonChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setShowAddNewButton(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5TabContainer;
}(), (_descriptor279 = _applyDecoratedDescriptor(_class138.prototype, 'showAddNewButton', [_dec366], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor280 = _applyDecoratedDescriptor(_class138.prototype, 'selectedItem', [_dec367], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor281 = _applyDecoratedDescriptor(_class138.prototype, 'itemClose', [_dec368], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor282 = _applyDecoratedDescriptor(_class138.prototype, 'itemSelect', [_dec369], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor283 = _applyDecoratedDescriptor(_class138.prototype, 'addNewButtonPress', [_dec370], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class138)) || _class137) || _class137);
var Ui5TabContainerItem = exports.Ui5TabContainerItem = (_dec371 = (0, _aureliaTemplating.customElement)('ui5-tab-container-item'), _dec372 = (0, _aureliaDependencyInjection.inject)(Element), _dec373 = (0, _aureliaTemplating.bindable)(), _dec374 = (0, _aureliaTemplating.bindable)(), _dec375 = (0, _aureliaTemplating.bindable)(), _dec376 = (0, _aureliaTemplating.bindable)(), _dec377 = (0, _aureliaFramework.computedFrom)('_tab'), _dec371(_class140 = _dec372(_class140 = (_class141 = function () {
  function Ui5TabContainerItem(element) {
    _classCallCheck(this, Ui5TabContainerItem);

    _initDefineProp(this, 'name', _descriptor284, this);

    _initDefineProp(this, 'key', _descriptor285, this);

    _initDefineProp(this, 'modified', _descriptor286, this);

    _initDefineProp(this, 'itemPropertyChanged', _descriptor287, this);

    this._tab = null;

    this.element = element;
  }

  Ui5TabContainerItem.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TabContainerItem.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator31 = path, _isArray31 = Array.isArray(_iterator31), _i31 = 0, _iterator31 = _isArray31 ? _iterator31 : _iterator31[Symbol.iterator]();;) {
      if (_isArray31) {
        if (_i31 >= _iterator31.length) break;
        elem = _iterator31[_i31++];
      } else {
        _i31 = _iterator31.next();
        if (_i31.done) break;
        elem = _i31.value;
      }

      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  };

  Ui5TabContainerItem.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator32 = path, _isArray32 = Array.isArray(_iterator32), _i32 = 0, _iterator32 = _isArray32 ? _iterator32 : _iterator32[Symbol.iterator]();;) {
      if (_isArray32) {
        if (_i32 >= _iterator32.length) break;
        elem = _iterator32[_i32++];
      } else {
        _i32 = _iterator32.next();
        if (_i32.done) break;
        elem = _i32.value;
      }

      if (elem.localName == 'content') {
        this._tab.removeContent(child);
        break;
      }
    }
  };

  Ui5TabContainerItem.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._tab = new sap.m.TabContainerItem({
      name: this.name,
      key: this.key,
      modified: getBooleanFromAttributeValue(this.modified),
      itemPropertyChanged: this.itemPropertyChanged
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5TabContainerItem.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._tab, this.element);
    } else {
      this._tab.destroy();
    }
  };

  Ui5TabContainerItem.prototype.keyChanged = function keyChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setKey(newValue);
    }
  };

  Ui5TabContainerItem.prototype.nameChanged = function nameChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setName(newValue);
    }
  };

  Ui5TabContainerItem.prototype.modifiedChanged = function modifiedChanged(newValue) {
    if (this._tab !== null) {
      this._tab.setModified(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5TabContainerItem, [{
    key: 'UIElement',
    get: function get() {
      return this._tab;
    }
  }]);

  return Ui5TabContainerItem;
}(), (_descriptor284 = _applyDecoratedDescriptor(_class141.prototype, 'name', [_dec373], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor285 = _applyDecoratedDescriptor(_class141.prototype, 'key', [_dec374], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor286 = _applyDecoratedDescriptor(_class141.prototype, 'modified', [_dec375], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor287 = _applyDecoratedDescriptor(_class141.prototype, 'itemPropertyChanged', [_dec376], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _applyDecoratedDescriptor(_class141.prototype, 'UIElement', [_dec377], Object.getOwnPropertyDescriptor(_class141.prototype, 'UIElement'), _class141.prototype)), _class141)) || _class140) || _class140);
var Ui5Table = exports.Ui5Table = (_dec378 = (0, _aureliaTemplating.customElement)('ui5-table'), _dec379 = (0, _aureliaDependencyInjection.inject)(Element), _dec380 = (0, _aureliaTemplating.bindable)(), _dec381 = (0, _aureliaTemplating.bindable)(), _dec382 = (0, _aureliaTemplating.bindable)(), _dec378(_class143 = _dec379(_class143 = (_class144 = function (_Ui5Control4) {
  _inherits(Ui5Table, _Ui5Control4);

  function Ui5Table(element) {
    _classCallCheck(this, Ui5Table);

    var _this11 = _possibleConstructorReturn(this, _Ui5Control4.call(this, element));

    _initDefineProp(_this11, 'headerText', _descriptor288, _this11);

    _initDefineProp(_this11, 'showOverlay', _descriptor289, _this11);

    _initDefineProp(_this11, 'busy', _descriptor290, _this11);

    _this11._table = null;

    _this11.element = element;
    return _this11;
  }

  Ui5Table.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator33 = path, _isArray33 = Array.isArray(_iterator33), _i33 = 0, _iterator33 = _isArray33 ? _iterator33 : _iterator33[Symbol.iterator]();;) {
      if (_isArray33) {
        if (_i33 >= _iterator33.length) break;
        elem = _iterator33[_i33++];
      } else {
        _i33 = _iterator33.next();
        if (_i33.done) break;
        elem = _i33.value;
      }

      if (elem.localName == 'header-toolbar') {
        this._table.setHeaderToolbar(child);break;
      }
      if (elem.localName == 'info-toolbar') {
        this._table.setInfoToolbar(child);break;
      }
      if (elem.localName == 'item') {
        this._table.addItem(child);break;
      }
      if (elem.localName == 'column') {
        this._table.addColumn(child);break;
      }
    }
  };

  Ui5Table.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator34 = path, _isArray34 = Array.isArray(_iterator34), _i34 = 0, _iterator34 = _isArray34 ? _iterator34 : _iterator34[Symbol.iterator]();;) {
      if (_isArray34) {
        if (_i34 >= _iterator34.length) break;
        elem = _iterator34[_i34++];
      } else {
        _i34 = _iterator34.next();
        if (_i34.done) break;
        elem = _i34.value;
      }

      if (elem.localName == 'item') {
        this._table.removeItem(child);break;
      }
    }
  };

  Ui5Table.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      headerText: this.headerText,
      showOverlay: getBooleanFromAttributeValue(this.showOverlay)
    };
    _Ui5Control4.prototype.fillProperties.call(this, props);
    var table = new sap.m.Table(props);
    this._table = table;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Table.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._table, this.element);
    } else {
      this._table.destroy();
    }
  };

  Ui5Table.prototype.headerTextChanged = function headerTextChanged(newValue) {
    if (this._table !== null) {
      this._table.setHeaderText(newValue);
    }
  };

  Ui5Table.prototype.showOverlayChanged = function showOverlayChanged(newValue) {
    if (this._table !== null) {
      this._table.setShowOverlay(newValue);
    }
  };

  _createClass(Ui5Table, [{
    key: 'UIElement',
    get: function get() {
      return this._table;
    }
  }]);

  return Ui5Table;
}(Ui5Control), (_descriptor288 = _applyDecoratedDescriptor(_class144.prototype, 'headerText', [_dec380], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor289 = _applyDecoratedDescriptor(_class144.prototype, 'showOverlay', [_dec381], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor290 = _applyDecoratedDescriptor(_class144.prototype, 'busy', [_dec382], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class144)) || _class143) || _class143);
var Ui5Text = exports.Ui5Text = (_dec383 = (0, _aureliaTemplating.customElement)('ui5-text'), _dec384 = (0, _aureliaDependencyInjection.inject)(Element), _dec385 = (0, _aureliaFramework.computedFrom)('_text'), _dec383(_class146 = _dec384(_class146 = (_class147 = function () {
  function Ui5Text(element) {
    _classCallCheck(this, Ui5Text);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor291, this);

    _initDefineProp(this, 'text', _descriptor292, this);

    _initDefineProp(this, 'wrapping', _descriptor293, this);

    _initDefineProp(this, 'textAlign', _descriptor294, this);

    _initDefineProp(this, 'maxLines', _descriptor295, this);

    this.element = element;
  }

  Ui5Text.prototype.attached = function attached() {
    var props = {
      text: this.text != null ? this.text : this.element.innerText.trim(),
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    };
    if (this.ui5Id) this._text = new sap.m.Text(this.ui5Id, props);else this._text = new sap.m.Text(props);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  };

  Ui5Text.prototype.textChanged = function textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  };

  _createClass(Ui5Text, [{
    key: 'UIElement',
    get: function get() {
      return this._text;
    }
  }]);

  return Ui5Text;
}(), (_descriptor291 = _applyDecoratedDescriptor(_class147.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor292 = _applyDecoratedDescriptor(_class147.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor293 = _applyDecoratedDescriptor(_class147.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor294 = _applyDecoratedDescriptor(_class147.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor295 = _applyDecoratedDescriptor(_class147.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class147.prototype, 'UIElement', [_dec385], Object.getOwnPropertyDescriptor(_class147.prototype, 'UIElement'), _class147.prototype)), _class147)) || _class146) || _class146);
var Ui5SimpleForm = exports.Ui5SimpleForm = (_dec386 = (0, _aureliaTemplating.customElement)('ui5-simple-form'), _dec387 = (0, _aureliaDependencyInjection.inject)(Element), _dec388 = (0, _aureliaTemplating.bindable)(), _dec389 = (0, _aureliaTemplating.bindable)(), _dec390 = (0, _aureliaTemplating.bindable)(), _dec391 = (0, _aureliaTemplating.bindable)(), _dec392 = (0, _aureliaTemplating.bindable)(), _dec393 = (0, _aureliaTemplating.bindable)(), _dec394 = (0, _aureliaTemplating.bindable)(), _dec395 = (0, _aureliaTemplating.bindable)(), _dec396 = (0, _aureliaTemplating.bindable)(), _dec397 = (0, _aureliaTemplating.bindable)(), _dec398 = (0, _aureliaTemplating.bindable)(), _dec399 = (0, _aureliaTemplating.bindable)(), _dec400 = (0, _aureliaTemplating.bindable)(), _dec401 = (0, _aureliaTemplating.bindable)(), _dec402 = (0, _aureliaTemplating.bindable)(), _dec403 = (0, _aureliaTemplating.bindable)(), _dec404 = (0, _aureliaTemplating.bindable)(), _dec405 = (0, _aureliaTemplating.bindable)(), _dec406 = (0, _aureliaTemplating.bindable)(), _dec407 = (0, _aureliaTemplating.bindable)(), _dec408 = (0, _aureliaTemplating.bindable)(), _dec409 = (0, _aureliaTemplating.bindable)(), _dec386(_class149 = _dec387(_class149 = (_class150 = function () {
  function Ui5SimpleForm(element) {
    _classCallCheck(this, Ui5SimpleForm);

    _initDefineProp(this, 'ui5Id', _descriptor296, this);

    _initDefineProp(this, 'title', _descriptor297, this);

    _initDefineProp(this, 'maxContainerCols', _descriptor298, this);

    _initDefineProp(this, 'minWidth', _descriptor299, this);

    _initDefineProp(this, 'width', _descriptor300, this);

    _initDefineProp(this, 'editable', _descriptor301, this);

    _initDefineProp(this, 'labelMinWidth', _descriptor302, this);

    _initDefineProp(this, 'layout', _descriptor303, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor304, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor305, this);

    _initDefineProp(this, 'labelSpanL', _descriptor306, this);

    _initDefineProp(this, 'labelSpanM', _descriptor307, this);

    _initDefineProp(this, 'labelSpanS', _descriptor308, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor309, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor310, this);

    _initDefineProp(this, 'emptySpanL', _descriptor311, this);

    _initDefineProp(this, 'emptySpanM', _descriptor312, this);

    _initDefineProp(this, 'emptySpanS', _descriptor313, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor314, this);

    _initDefineProp(this, 'breakpointXL', _descriptor315, this);

    _initDefineProp(this, 'breakpointL', _descriptor316, this);

    _initDefineProp(this, 'breakpointM', _descriptor317, this);

    this._form = null;

    this.element = element;
  }

  Ui5SimpleForm.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator35 = path, _isArray35 = Array.isArray(_iterator35), _i35 = 0, _iterator35 = _isArray35 ? _iterator35 : _iterator35[Symbol.iterator]();;) {
      if (_isArray35) {
        if (_i35 >= _iterator35.length) break;
        elem = _iterator35[_i35++];
      } else {
        _i35 = _iterator35.next();
        if (_i35.done) break;
        elem = _i35.value;
      }

      if (elem.localName == 'toolbar') this._form.setToolbar(child);
      if (elem.localName == 'content') this._form.addContent(child);
    }
  };

  Ui5SimpleForm.prototype.attached = function attached() {
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
      breakpointM: parseInt(this.breakpointM)

    };
    if (this.uiId5) this._form = new sap.ui.layout.form.SimpleForm(this.ui5Id, params);else this._form = new sap.ui.layout.form.SimpleForm(params);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5SimpleForm.prototype.titleChanged = function titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  };

  Ui5SimpleForm.prototype.maxContainerColsChanged = function maxContainerColsChanged(newValue) {
    if (this._form !== null) {
      this._form.setMaxContainerCols(newValue);
    }
  };

  Ui5SimpleForm.prototype.editableChanged = function editableChanged(newValue) {
    if (this._form !== null) {
      this._form.setEditable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SimpleForm.prototype.minWidthChanged = function minWidthChanged(newValue) {
    if (this._form !== null) {
      this._form.setMinWidth(newValue);
    }
  };

  Ui5SimpleForm.prototype.widthChanged = function widthChanged(newValue) {
    if (this._form !== null) {
      this._form.setWidth(newValue);
    }
  };

  Ui5SimpleForm.prototype.labelMinWidthChanged = function labelMinWidthChanged(newValue) {
    if (this._form !== null) {
      this._form.setLabelMinWidth(newValue);
    }
  };

  Ui5SimpleForm.prototype.layoutChanged = function layoutChanged(newValue) {
    if (this._form !== null) {
      this._form.setLayout(newValue);
    }
  };

  Ui5SimpleForm.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
    if (this._form !== null) {
      this._form.setBackgroundDesign(newValue);
    }
  };

  return Ui5SimpleForm;
}(), (_descriptor296 = _applyDecoratedDescriptor(_class150.prototype, 'ui5Id', [_dec388], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor297 = _applyDecoratedDescriptor(_class150.prototype, 'title', [_dec389], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor298 = _applyDecoratedDescriptor(_class150.prototype, 'maxContainerCols', [_dec390], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor299 = _applyDecoratedDescriptor(_class150.prototype, 'minWidth', [_dec391], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor300 = _applyDecoratedDescriptor(_class150.prototype, 'width', [_dec392], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor301 = _applyDecoratedDescriptor(_class150.prototype, 'editable', [_dec393], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor302 = _applyDecoratedDescriptor(_class150.prototype, 'labelMinWidth', [_dec394], {
  enumerable: true,
  initializer: function initializer() {
    return 192;
  }
}), _descriptor303 = _applyDecoratedDescriptor(_class150.prototype, 'layout', [_dec395], {
  enumerable: true,
  initializer: function initializer() {
    return 'ResponsiveLayout';
  }
}), _descriptor304 = _applyDecoratedDescriptor(_class150.prototype, 'backgroundDesign', [_dec396], {
  enumerable: true,
  initializer: function initializer() {
    return 'Translucent';
  }
}), _descriptor305 = _applyDecoratedDescriptor(_class150.prototype, 'labelSpanXL', [_dec397], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor306 = _applyDecoratedDescriptor(_class150.prototype, 'labelSpanL', [_dec398], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor307 = _applyDecoratedDescriptor(_class150.prototype, 'labelSpanM', [_dec399], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor308 = _applyDecoratedDescriptor(_class150.prototype, 'labelSpanS', [_dec400], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor309 = _applyDecoratedDescriptor(_class150.prototype, 'adjustLabelSpan', [_dec401], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor310 = _applyDecoratedDescriptor(_class150.prototype, 'emptySpanXL', [_dec402], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor311 = _applyDecoratedDescriptor(_class150.prototype, 'emptySpanL', [_dec403], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor312 = _applyDecoratedDescriptor(_class150.prototype, 'emptySpanM', [_dec404], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor313 = _applyDecoratedDescriptor(_class150.prototype, 'emptySpanS', [_dec405], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor314 = _applyDecoratedDescriptor(_class150.prototype, 'singleContainerFullSize', [_dec406], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor315 = _applyDecoratedDescriptor(_class150.prototype, 'breakpointXL', [_dec407], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor316 = _applyDecoratedDescriptor(_class150.prototype, 'breakpointL', [_dec408], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor317 = _applyDecoratedDescriptor(_class150.prototype, 'breakpointM', [_dec409], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class150)) || _class149) || _class149);
var Ui5TileContent = exports.Ui5TileContent = (_dec410 = (0, _aureliaTemplating.customElement)('ui5-tile-content'), _dec411 = (0, _aureliaDependencyInjection.inject)(Element), _dec412 = (0, _aureliaTemplating.bindable)(), _dec413 = (0, _aureliaTemplating.bindable)(), _dec410(_class152 = _dec411(_class152 = (_class153 = function () {
  function Ui5TileContent(element) {
    _classCallCheck(this, Ui5TileContent);

    this._content = null;

    _initDefineProp(this, 'footer', _descriptor318, this);

    _initDefineProp(this, 'unit', _descriptor319, this);

    this.element = element;
  }

  Ui5TileContent.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._content.setContent(child);
  };

  Ui5TileContent.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._content.destroyContent(child);
  };

  Ui5TileContent.prototype.attached = function attached() {
    this._content = new sap.m.TileContent({
      footer: this.footer,
      unit: this.unit
    });
    $(this.element).parents("ui5-generic-tile")[0].au.controller.viewModel.addChild(this._content, this.element);
  };

  Ui5TileContent.prototype.detached = function detached() {
    $(this.element).parents("ui5-generic-tile")[0].au.controller.viewModel.removeChild(this._content, this.element);
  };

  Ui5TileContent.prototype.footerChanged = function footerChanged(newValue) {
    if (this._content != null) {
      this._content.setFooter(newValue);
    }
  };

  Ui5TileContent.prototype.unitChanged = function unitChanged(newValue) {
    if (this._content != null) {
      this._content.setUnit(newValue);
    }
  };

  return Ui5TileContent;
}(), (_descriptor318 = _applyDecoratedDescriptor(_class153.prototype, 'footer', [_dec412], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor319 = _applyDecoratedDescriptor(_class153.prototype, 'unit', [_dec413], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class153)) || _class152) || _class152);
var Ui5TileContainer = exports.Ui5TileContainer = (_dec414 = (0, _aureliaTemplating.customElement)('ui5-tile-container'), _dec415 = (0, _aureliaDependencyInjection.inject)(Element), _dec414(_class155 = _dec415(_class155 = function () {
  function Ui5TileContainer(element) {
    _classCallCheck(this, Ui5TileContainer);

    this._container = null;

    this.element = element;
  }

  Ui5TileContainer.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'tile') this._container.addTile(child);
  };

  Ui5TileContainer.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'tile') this._container.removeTile(child);
  };

  Ui5TileContainer.prototype.attached = function attached() {
    this._container = new sap.m.TileContainer();
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._container, this.element);
  };

  Ui5TileContainer.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]")[0]) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
    }
  };

  return Ui5TileContainer;
}()) || _class155) || _class155);
var Ui5Title = exports.Ui5Title = (_dec416 = (0, _aureliaTemplating.customElement)('ui5-title'), _dec417 = (0, _aureliaDependencyInjection.inject)(Element), _dec418 = (0, _aureliaTemplating.bindable)(), _dec419 = (0, _aureliaTemplating.bindable)(), _dec420 = (0, _aureliaTemplating.bindable)(), _dec421 = (0, _aureliaTemplating.bindable)(), _dec416(_class157 = _dec417(_class157 = (_class158 = function () {
  function Ui5Title(element) {
    _classCallCheck(this, Ui5Title);

    this._title = null;

    _initDefineProp(this, 'text', _descriptor320, this);

    _initDefineProp(this, 'icon', _descriptor321, this);

    _initDefineProp(this, 'level', _descriptor322, this);

    _initDefineProp(this, 'emphasized', _descriptor323, this);

    this.element = element;
  }

  Ui5Title.prototype.attached = function attached() {

    this._title = new sap.ui.core.Title({
      text: this.text,
      icon: this.icon,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      level: this.level
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  };

  Ui5Title.prototype.textChanged = function textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  };

  Ui5Title.prototype.iconChanged = function iconChanged(newValue) {
    if (this._title != null) {
      this._title.setIcon(newValue);
    }
  };

  Ui5Title.prototype.levelChanged = function levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  };

  Ui5Title.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
    if (this._title != null) {
      this._title.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Title;
}(), (_descriptor320 = _applyDecoratedDescriptor(_class158.prototype, 'text', [_dec418], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor321 = _applyDecoratedDescriptor(_class158.prototype, 'icon', [_dec419], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor322 = _applyDecoratedDescriptor(_class158.prototype, 'level', [_dec420], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
}), _descriptor323 = _applyDecoratedDescriptor(_class158.prototype, 'emphasized', [_dec421], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class158)) || _class157) || _class157);

var Ui5ToastService = exports.Ui5ToastService = function () {
  function Ui5ToastService() {
    _classCallCheck(this, Ui5ToastService);
  }

  Ui5ToastService.prototype.show = function show(message, displayLength) {
    return new Promise(function (resolve, reject) {
      sap.m.MessageToast.show(message, {
        duration: displayLength,
        onClose: function onClose() {
          resolve();
        }
      });
    });
  };

  return Ui5ToastService;
}();

var Ui5Toolbar = exports.Ui5Toolbar = (_dec422 = (0, _aureliaTemplating.customElement)('ui5-toolbar'), _dec423 = (0, _aureliaDependencyInjection.inject)(Element), _dec424 = (0, _aureliaTemplating.bindable)(), _dec425 = (0, _aureliaTemplating.bindable)(), _dec426 = (0, _aureliaTemplating.bindable)(), _dec427 = (0, _aureliaTemplating.bindable)(), _dec428 = (0, _aureliaTemplating.bindable)(), _dec429 = (0, _aureliaTemplating.bindable)(), _dec422(_class160 = _dec423(_class160 = (_class161 = function () {
  function Ui5Toolbar(element) {
    _classCallCheck(this, Ui5Toolbar);

    this._bar = null;
    this._parent = null;

    _initDefineProp(this, 'width', _descriptor324, this);

    _initDefineProp(this, 'active', _descriptor325, this);

    _initDefineProp(this, 'enabled', _descriptor326, this);

    _initDefineProp(this, 'height', _descriptor327, this);

    _initDefineProp(this, 'design', _descriptor328, this);

    _initDefineProp(this, 'press', _descriptor329, this);

    this.element = element;
  }

  Ui5Toolbar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5Toolbar.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator36 = path, _isArray36 = Array.isArray(_iterator36), _i36 = 0, _iterator36 = _isArray36 ? _iterator36 : _iterator36[Symbol.iterator]();;) {
      if (_isArray36) {
        if (_i36 >= _iterator36.length) break;
        elem = _iterator36[_i36++];
      } else {
        _i36 = _iterator36.next();
        if (_i36.done) break;
        elem = _i36.value;
      }

      if (elem.localName == 'content') {
        this._bar.addContent(child);
        break;
      }
    }
  };

  Ui5Toolbar.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator37 = path, _isArray37 = Array.isArray(_iterator37), _i37 = 0, _iterator37 = _isArray37 ? _iterator37 : _iterator37[Symbol.iterator]();;) {
      if (_isArray37) {
        if (_i37 >= _iterator37.length) break;
        elem = _iterator37[_i37++];
      } else {
        _i37 = _iterator37.next();
        if (_i37.done) break;
        elem = _i37.value;
      }

      if (elem.localName == 'content') {
        this._bar.removeContent(child);
        break;
      }
    }
  };

  Ui5Toolbar.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._bar = new sap.m.Toolbar({
      width: this.width,
      enabled: getBooleanFromAttributeValue(this.enabled),
      active: getBooleanFromAttributeValue(this.active),
      height: this.height,
      design: this.design,
      press: this.press
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this.parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this.parent.addChild(this._bar, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._bar.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Toolbar.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0 && this.parent.removeChild) {
      this.parent.removeChild(this._bar, this.element);
    } else {
      this._bar.destroy();
    }
  };

  Ui5Toolbar.prototype.widthChanged = function widthChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setWidth(newValue);
    }
  };

  Ui5Toolbar.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Toolbar.prototype.activeChanged = function activeChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setActive(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Toolbar.prototype.heightChanged = function heightChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setHeight(newValue);
    }
  };

  Ui5Toolbar.prototype.designChanged = function designChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setDesign(newValue);
    }
  };

  Ui5Toolbar.prototype.pressChanged = function pressChanged(newValue) {
    if (this._bar !== null) {
      this._bar.setPress(newValue);
    }
  };

  return Ui5Toolbar;
}(), (_descriptor324 = _applyDecoratedDescriptor(_class161.prototype, 'width', [_dec424], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor325 = _applyDecoratedDescriptor(_class161.prototype, 'active', [_dec425], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor326 = _applyDecoratedDescriptor(_class161.prototype, 'enabled', [_dec426], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor327 = _applyDecoratedDescriptor(_class161.prototype, 'height', [_dec427], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor328 = _applyDecoratedDescriptor(_class161.prototype, 'design', [_dec428], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor329 = _applyDecoratedDescriptor(_class161.prototype, 'press', [_dec429], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class161)) || _class160) || _class160);
var Ui5ToolbarSpacer = exports.Ui5ToolbarSpacer = (_dec430 = (0, _aureliaTemplating.customElement)('ui5-toolbar-spacer'), _dec431 = (0, _aureliaDependencyInjection.inject)(Element), _dec432 = (0, _aureliaTemplating.bindable)(), _dec430(_class163 = _dec431(_class163 = (_class164 = function () {
  function Ui5ToolbarSpacer(element) {
    _classCallCheck(this, Ui5ToolbarSpacer);

    this._spacer = null;

    _initDefineProp(this, 'width', _descriptor330, this);

    this.element = element;
  }

  Ui5ToolbarSpacer.prototype.attached = function attached() {

    this._spacer = new sap.m.ToolbarSpacer({
      width: this.width
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._spacer, this.element);
  };

  Ui5ToolbarSpacer.prototype.widthChanged = function widthChanged(newValue) {
    if (this._spacer !== null) {
      this._spacer.setWidth(newValue);
    }
  };

  return Ui5ToolbarSpacer;
}(), (_descriptor330 = _applyDecoratedDescriptor(_class164.prototype, 'width', [_dec432], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class164)) || _class163) || _class163);

var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
  function MaterializeFormValidationRenderer() {
    _classCallCheck(this, MaterializeFormValidationRenderer);

    this.className = 'md-input-validation';
    this.classNameFirst = 'md-input-validation-first';
  }

  MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
    var _this12 = this;

    var allElements = new Array();
    for (var _iterator38 = instruction.unrender, _isArray38 = Array.isArray(_iterator38), _i38 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray38) {
        if (_i38 >= _iterator38.length) break;
        _ref2 = _iterator38[_i38++];
      } else {
        _i38 = _iterator38.next();
        if (_i38.done) break;
        _ref2 = _i38.value;
      }

      var _ref5 = _ref2;
      var result = _ref5.result,
          elements = _ref5.elements;

      for (var _iterator40 = elements, _isArray40 = Array.isArray(_iterator40), _i40 = 0, _iterator40 = _isArray40 ? _iterator40 : _iterator40[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray40) {
          if (_i40 >= _iterator40.length) break;
          _ref6 = _iterator40[_i40++];
        } else {
          _i40 = _iterator40.next();
          if (_i40.done) break;
          _ref6 = _i40.value;
        }

        var element = _ref6;

        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (var _iterator39 = instruction.render, _isArray39 = Array.isArray(_iterator39), _i39 = 0, _iterator39 = _isArray39 ? _iterator39 : _iterator39[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray39) {
        if (_i39 >= _iterator39.length) break;
        _ref4 = _iterator39[_i39++];
      } else {
        _i39 = _iterator39.next();
        if (_i39.done) break;
        _ref4 = _i39.value;
      }

      var _ref7 = _ref4;
      var result = _ref7.result,
          elements = _ref7.elements;

      for (var _iterator41 = elements, _isArray41 = Array.isArray(_iterator41), _i41 = 0, _iterator41 = _isArray41 ? _iterator41 : _iterator41[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray41) {
          if (_i41 >= _iterator41.length) break;
          _ref8 = _iterator41[_i41++];
        } else {
          _i41 = _iterator41.next();
          if (_i41.done) break;
          _ref8 = _i41.value;
        }

        var _element = _ref8;

        this.add(_element, result);
        if (allElements.indexOf(_element) == -1) {
          allElements.push(_element);
        }
      }
    }
    allElements.forEach(function (e) {
      return _this12.underlineInput(e);
    });
  };

  MaterializeFormValidationRenderer.prototype.underlineInput = function underlineInput(element) {
    var input = void 0;
    switch (element.tagName) {
      case 'MD-INPUT':
        {
          input = element.querySelector('input') || element.querySelector('textarea');
          break;
        }
      case 'SELECT':
        {
          var selectWrapper = element.closest('.select-wrapper');
          if (selectWrapper) {
            input = selectWrapper.querySelector('input');
          }
          break;
        }
      case 'INPUT':
        {
          input = element;
          break;
        }
      default:
        break;
    }
    if (input) {
      if (element.querySelectorAll('.' + this.className).length === 0) {
        input.classList.remove('invalid');
        input.classList.add('valid');
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
      }
    }
  };

  MaterializeFormValidationRenderer.prototype.add = function add(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
      case 'MD-INPUT':
        {
          var label = element.querySelector('label');
          var input = element.querySelector('input') || element.querySelector('textarea');
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
      case 'SELECT':
        {
          var selectWrapper = element.closest('.select-wrapper');
          if (!selectWrapper) {
            return;
          }
          var _input = selectWrapper.querySelector('input');
          if (_input) {
            result.target = _input;
            if (!(_input.hasAttribute('data-show-errortext') && _input.getAttribute('data-show-errortext') === 'false')) {
              this.addMessage(selectWrapper, result);
            }
          }
          break;
        }
      case 'INPUT':
        {
          if (element.hasAttribute('md-datepicker')) {
            if (!(element.hasAttribute('data-show-errortext') && element.getAttribute('data-show-errortext') === 'false')) {
              this.addMessage(element.parentNode, result);
            }
          }
          break;
        }
      default:
        break;
    }
  };

  MaterializeFormValidationRenderer.prototype.remove = function remove(element, result) {
    if (result.valid) {
      return;
    }
    switch (element.tagName) {
      case 'MD-INPUT':
        {
          this.removeMessage(element, result);
          break;
        }
      case 'SELECT':
        {
          var selectWrapper = element.closest('.select-wrapper');
          if (!selectWrapper) {
            return;
          }

          if ($(selectWrapper.parentElement).children().hasClass('md-input-validation')) {
            this.removeMessage(selectWrapper.parentElement, result);
          } else {
            this.removeMessage(selectWrapper, result);
          }
          break;
        }
      case 'INPUT':
        {
          if (element.hasAttribute('md-datepicker')) {
            this.removeMessage(element.parentNode, result);
          }
          break;
        }
      default:
        break;
    }
  };

  MaterializeFormValidationRenderer.prototype.addMessage = function addMessage(element, result) {
    var message = document.createElement('div');
    message.id = 'md-input-validation-' + result.id;
    message.textContent = result.message;
    message.className = this.className;
    if (element.querySelectorAll('.' + this.className).length === 0) {
      message.className += ' ' + this.classNameFirst;
    }
    message.style.opacity = 0;
    element.appendChild(message, element.nextSibling);
    window.getComputedStyle(message).opacity;
    message.style.opacity = 1;
  };

  MaterializeFormValidationRenderer.prototype.removeMessage = function removeMessage(element, result) {
    var message = element.querySelector('#md-input-validation-' + result.id);
    if (message) {
      element.removeChild(message);
    }
  };

  return MaterializeFormValidationRenderer;
}();

var Ui5Wizard = exports.Ui5Wizard = (_dec433 = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec434 = (0, _aureliaDependencyInjection.inject)(Element), _dec435 = (0, _aureliaTemplating.bindable)(), _dec436 = (0, _aureliaTemplating.bindable)(), _dec437 = (0, _aureliaTemplating.bindable)(), _dec438 = (0, _aureliaTemplating.bindable)(), _dec439 = (0, _aureliaTemplating.bindable)(), _dec440 = (0, _aureliaTemplating.bindable)(), _dec441 = (0, _aureliaTemplating.bindable)(), _dec442 = (0, _aureliaFramework.computedFrom)('_wizard'), _dec433(_class167 = _dec434(_class167 = (_class168 = function () {
  Ui5Wizard.prototype.defaultFunc = function defaultFunc() {};

  _createClass(Ui5Wizard, [{
    key: 'UIElement',
    get: function get() {
      return this._wizard;
    }
  }]);

  function Ui5Wizard(element) {
    _classCallCheck(this, Ui5Wizard);

    this._wizard = null;

    _initDefineProp(this, 'width', _descriptor331, this);

    _initDefineProp(this, 'height', _descriptor332, this);

    _initDefineProp(this, 'showNextButton', _descriptor333, this);

    _initDefineProp(this, 'finishButtonText', _descriptor334, this);

    _initDefineProp(this, 'enableBranching', _descriptor335, this);

    _initDefineProp(this, 'stepActivate', _descriptor336, this);

    _initDefineProp(this, 'complete', _descriptor337, this);

    this.element = element;
  }

  Ui5Wizard.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'wizard') this._wizard.addStep(child);
  };

  Ui5Wizard.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
  };

  Ui5Wizard.prototype.attached = function attached() {
    var params = {
      width: this.width,
      height: this.height,
      showNextButton: getBooleanFromAttributeValue(this.showNextButton),
      finishButtonText: this.finishButtonText,
      enableBranching: getBooleanFromAttributeValue(this.enableBranching),
      stepActivate: this.stepActivate,
      complete: this.complete
    };
    this._wizard = new sap.m.Wizard(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
  };

  Ui5Wizard.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
  };

  Ui5Wizard.prototype.widthChanged = function widthChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setWidth(newValue);
    }
  };

  Ui5Wizard.prototype.heightChanged = function heightChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setHeight(newValue);
    }
  };

  Ui5Wizard.prototype.showNextButtonChanged = function showNextButtonChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setShowNextButton(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Wizard.prototype.finishButtonTextChanged = function finishButtonTextChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setFinishButtonText(newValue);
    }
  };

  Ui5Wizard.prototype.enableBranchingChanged = function enableBranchingChanged(newValue) {
    if (this._wizard !== null) {
      this._wizard.setEnableBranching(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5Wizard;
}(), (_descriptor331 = _applyDecoratedDescriptor(_class168.prototype, 'width', [_dec435], {
  enumerable: true,
  initializer: function initializer() {
    return 'auto';
  }
}), _descriptor332 = _applyDecoratedDescriptor(_class168.prototype, 'height', [_dec436], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor333 = _applyDecoratedDescriptor(_class168.prototype, 'showNextButton', [_dec437], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor334 = _applyDecoratedDescriptor(_class168.prototype, 'finishButtonText', [_dec438], {
  enumerable: true,
  initializer: function initializer() {
    return "fortfahren";
  }
}), _descriptor335 = _applyDecoratedDescriptor(_class168.prototype, 'enableBranching', [_dec439], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor336 = _applyDecoratedDescriptor(_class168.prototype, 'stepActivate', [_dec440], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor337 = _applyDecoratedDescriptor(_class168.prototype, 'complete', [_dec441], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _applyDecoratedDescriptor(_class168.prototype, 'UIElement', [_dec442], Object.getOwnPropertyDescriptor(_class168.prototype, 'UIElement'), _class168.prototype)), _class168)) || _class167) || _class167);
var Ui5WizardStep = exports.Ui5WizardStep = (_dec443 = (0, _aureliaTemplating.customElement)('ui5-wizard-step'), _dec444 = (0, _aureliaDependencyInjection.inject)(Element), _dec443(_class170 = _dec444(_class170 = (_class171 = function () {
  function Ui5WizardStep(element) {
    _classCallCheck(this, Ui5WizardStep);

    this._step = null;

    _initDefineProp(this, 'nextStep', _descriptor338, this);

    _initDefineProp(this, 'subsequentSteps', _descriptor339, this);

    _initDefineProp(this, 'title', _descriptor340, this);

    _initDefineProp(this, 'icon', _descriptor341, this);

    _initDefineProp(this, 'validated', _descriptor342, this);

    _initDefineProp(this, 'complete', _descriptor343, this);

    _initDefineProp(this, 'activate', _descriptor344, this);

    this.element = element;
  }

  Ui5WizardStep.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator42 = path, _isArray42 = Array.isArray(_iterator42), _i42 = 0, _iterator42 = _isArray42 ? _iterator42 : _iterator42[Symbol.iterator]();;) {
      if (_isArray42) {
        if (_i42 >= _iterator42.length) break;
        elem = _iterator42[_i42++];
      } else {
        _i42 = _iterator42.next();
        if (_i42.done) break;
        elem = _i42.value;
      }

      if (elem.localName == 'step') {
        this._step.addContent(child);
        break;
      }
    }
  };

  Ui5WizardStep.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator43 = path, _isArray43 = Array.isArray(_iterator43), _i43 = 0, _iterator43 = _isArray43 ? _iterator43 : _iterator43[Symbol.iterator]();;) {
      if (_isArray43) {
        if (_i43 >= _iterator43.length) break;
        elem = _iterator43[_i43++];
      } else {
        _i43 = _iterator43.next();
        if (_i43.done) break;
        elem = _i43.value;
      }

      if (elem.localName == 'step') {
        this._step.removeContent(child);
        break;
      }
    }
  };

  Ui5WizardStep.prototype.defaultFunc = function defaultFunc() {};

  Ui5WizardStep.prototype.attached = function attached() {
    this._step = new sap.m.WizardStep({
      title: this.title,
      icon: this.icon,
      validated: getBooleanFromAttributeValue(this.validated),
      complete: this.complete,
      activate: this.activate
    });
    $(this.element).parents("ui5-wizard")[0].au.controller.viewModel.addChild(this._step, this.element);
  };

  Ui5WizardStep.prototype.detached = function detached() {
    $(this.element).parents("ui5-wizard")[0].au.controller.viewModel.removeChild(this._step, this.element);
  };

  return Ui5WizardStep;
}(), (_descriptor338 = _applyDecoratedDescriptor(_class171.prototype, 'nextStep', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor339 = _applyDecoratedDescriptor(_class171.prototype, 'subsequentSteps', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor340 = _applyDecoratedDescriptor(_class171.prototype, 'title', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor341 = _applyDecoratedDescriptor(_class171.prototype, 'icon', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor342 = _applyDecoratedDescriptor(_class171.prototype, 'validated', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor343 = _applyDecoratedDescriptor(_class171.prototype, 'complete', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor344 = _applyDecoratedDescriptor(_class171.prototype, 'activate', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class171)) || _class170) || _class170);
var Ui5VerticalLayout = exports.Ui5VerticalLayout = (_dec445 = (0, _aureliaTemplating.customElement)('ui5-vertical-layout'), _dec446 = (0, _aureliaDependencyInjection.inject)(Element), _dec445(_class173 = _dec446(_class173 = function () {
  function Ui5VerticalLayout(element) {
    _classCallCheck(this, Ui5VerticalLayout);

    this._layout = null;

    this.element = element;
  }

  Ui5VerticalLayout.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5VerticalLayout.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator44 = path, _isArray44 = Array.isArray(_iterator44), _i44 = 0, _iterator44 = _isArray44 ? _iterator44 : _iterator44[Symbol.iterator]();;) {
      if (_isArray44) {
        if (_i44 >= _iterator44.length) break;
        elem = _iterator44[_i44++];
      } else {
        _i44 = _iterator44.next();
        if (_i44.done) break;
        elem = _i44.value;
      }

      if (elem.localName == 'content') {
        this._layout.addContent(child);
        break;
      }
    }
  };

  Ui5VerticalLayout.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator45 = path, _isArray45 = Array.isArray(_iterator45), _i45 = 0, _iterator45 = _isArray45 ? _iterator45 : _iterator45[Symbol.iterator]();;) {
      if (_isArray45) {
        if (_i45 >= _iterator45.length) break;
        elem = _iterator45[_i45++];
      } else {
        _i45 = _iterator45.next();
        if (_i45.done) break;
        elem = _i45.value;
      }

      if (elem.localName == 'content') {
        this._layout.removeContent(child);
        break;
      }
    }
  };

  Ui5VerticalLayout.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._layout = new sap.ui.layout.VerticalLayout({});

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._layout, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._layout.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5VerticalLayout.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._layout, this.element);
    } else {
      this._layout.destroy();
    }
  };

  return Ui5VerticalLayout;
}()) || _class173) || _class173);