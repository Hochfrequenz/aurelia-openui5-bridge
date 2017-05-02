'use strict';

exports.__esModule = true;
exports.Ui5StandardTile = exports.Ui5SlideTile = exports.Ui5WizardStep = exports.Ui5Wizard = exports.MdWaves = exports.Ui5ToolbarSpacer = exports.Ui5VerticalLayout = exports.MaterializeFormValidationRenderer = exports.MdStaggeredList = exports.MdFadeinImage = exports.MdTooltip = exports.Ui5ToastService = exports.Ui5Title = exports.Ui5TileContent = exports.Ui5TileContainer = exports.Ui5Text = exports.Ui5Table = exports.Ui5TabContainerItem = exports.Ui5TabContainer = exports.MdSwitch = exports.MdSlider = exports.Ui5SimpleForm = exports.MdSidenav = exports.MdSidenavCollapse = exports.Ui5Shell = exports.Ui5Select = exports.MdColors = exports.LightenValueConverter = exports.DarkenValueConverter = exports.MdScrollSpy = exports.MdCollapsible = exports.MdScrollfire = exports.MdScrollfireTarget = exports.ScrollfirePatch = exports.Ui5ResponsiveGridLayout = exports.Ui5Page = exports.MdRange = exports.MdRadio = exports.MdPushpin = exports.MdProgress = exports.MdParallax = exports.MdPagination = exports.Ui5OverflowToolbar = exports.Ui5ObjectIdentifier = exports.Ui5ObjectNumber = exports.Ui5NumericContent = exports.MdNavbar = exports.MdModal = exports.MdModalTrigger = exports.Ui5Grid = exports.Ui5MTitle = exports.Ui5MessageStrip = exports.Ui5ListItem = exports.Ui5Label = exports.Ui5Item = exports.Ui5InputBase = exports.Ui5Input = exports.Ui5ImageContent = exports.Ui5IconTabFilter = exports.Ui5IconTabBar = exports.Ui5Html = exports.Ui5GridData = exports.Ui5GenericTile = exports.Ui5FormElement = exports.Ui5FormContainer = exports.MdFooter = exports.Ui5Form = exports.MdFileInput = exports.Ui5FeedContent = exports.MdFab = exports.Ui5Element = exports.MdDropdown = exports.MdDropdownElement = exports.Ui5Control = exports.Ui5DatePicker = exports.Ui5Container = exports.constants = exports.AttributeManager = exports.Ui5ColumnListItem = exports.Ui5Column = exports.MdlListSelector = exports.MdCollection = exports.MdCollectionItem = exports.MdCollectionHeader = exports.MdChips = exports.MdChip = exports.MdCheckbox = exports.MdAutoComplete = exports.MdCarousel = exports.MdCarouselItem = exports.MdCharCounter = exports.MdCard = exports.MdBox = exports.Ui5Button = exports.MdBadge = exports.InstructionFilterValueConverter = exports.MdBreadcrumbs = exports.Ui5Bar = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class3, _dec3, _dec4, _dec5, _class5, _desc, _value, _class6, _descriptor, _dec6, _dec7, _dec8, _dec9, _class8, _desc2, _value2, _class9, _descriptor2, _descriptor3, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _class11, _desc3, _value3, _class12, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _dec18, _dec19, _dec20, _class14, _desc4, _value4, _class15, _descriptor10, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class17, _desc5, _value5, _class18, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec28, _dec29, _dec30, _class20, _desc6, _value6, _class21, _descriptor16, _dec31, _dec32, _dec33, _class23, _desc7, _value7, _class24, _descriptor17, _descriptor18, _dec34, _dec35, _dec36, _dec37, _dec38, _class26, _desc8, _value8, _class27, _descriptor19, _descriptor20, _descriptor21, _dec39, _dec40, _dec41, _class29, _desc9, _value9, _class30, _descriptor22, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _class32, _desc10, _value10, _class33, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _class34, _temp, _dec48, _dec49, _dec50, _class35, _desc11, _value11, _class36, _descriptor28, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _class38, _desc12, _value12, _class39, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _dec57, _dec58, _class41, _dec59, _class42, _dec60, _dec61, _class43, _dec62, _dec63, _dec64, _dec65, _dec66, _class44, _desc13, _value13, _class45, _descriptor33, _descriptor34, _descriptor35, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _class47, _desc14, _value14, _class48, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _dec81, _dec82, _dec83, _class50, _desc15, _value15, _class51, _descriptor48, _dec84, _dec85, _class54, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _class55, _desc16, _value16, _class56, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _dec110, _dec111, _dec112, _dec113, _dec114, _dec115, _dec116, _dec117, _dec118, _dec119, _class58, _desc17, _value17, _class59, _descriptor71, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _class60, _temp2, _dec120, _dec121, _dec122, _dec123, _dec124, _dec125, _dec126, _dec127, _dec128, _dec129, _dec130, _dec131, _class61, _desc18, _value18, _class62, _descriptor79, _descriptor80, _descriptor81, _descriptor82, _descriptor83, _descriptor84, _descriptor85, _descriptor86, _descriptor87, _descriptor88, _class63, _temp3, _dec132, _dec133, _dec134, _dec135, _class64, _desc19, _value19, _class65, _descriptor89, _descriptor90, _dec136, _dec137, _dec138, _dec139, _dec140, _dec141, _class67, _desc20, _value20, _class68, _descriptor91, _descriptor92, _descriptor93, _descriptor94, _dec142, _dec143, _dec144, _dec145, _dec146, _dec147, _class70, _desc21, _value21, _class71, _descriptor95, _descriptor96, _descriptor97, _descriptor98, _dec148, _dec149, _dec150, _dec151, _dec152, _dec153, _class73, _desc22, _value22, _class74, _descriptor99, _descriptor100, _descriptor101, _descriptor102, _dec154, _dec155, _class76, _dec156, _dec157, _dec158, _dec159, _class77, _desc23, _value23, _class78, _descriptor103, _descriptor104, _dec160, _dec161, _dec162, _class80, _desc24, _value24, _class81, _descriptor105, _dec163, _dec164, _dec165, _dec166, _dec167, _dec168, _dec169, _class83, _desc25, _value25, _class84, _descriptor106, _descriptor107, _descriptor108, _descriptor109, _descriptor110, _dec170, _dec171, _dec172, _dec173, _class86, _desc26, _value26, _class87, _descriptor111, _descriptor112, _dec174, _dec175, _class89, _dec176, _dec177, _dec178, _dec179, _dec180, _dec181, _dec182, _dec183, _dec184, _dec185, _dec186, _dec187, _dec188, _dec189, _class91, _desc27, _value27, _class92, _descriptor113, _descriptor114, _descriptor115, _descriptor116, _descriptor117, _descriptor118, _descriptor119, _descriptor120, _descriptor121, _descriptor122, _descriptor123, _descriptor124, _dec190, _dec191, _dec192, _class94, _desc28, _value28, _class95, _descriptor125, _dec193, _dec194, _dec195, _class97, _desc29, _value29, _class98, _descriptor126, _dec196, _dec197, _dec198, _dec199, _dec200, _dec201, _dec202, _dec203, _dec204, _dec205, _dec206, _dec207, _dec208, _dec209, _dec210, _dec211, _dec212, _dec213, _dec214, _dec215, _dec216, _dec217, _dec218, _dec219, _dec220, _dec221, _dec222, _dec223, _dec224, _dec225, _dec226, _dec227, _dec228, _dec229, _dec230, _dec231, _dec232, _dec233, _dec234, _dec235, _dec236, _dec237, _class100, _desc30, _value30, _class101, _descriptor127, _descriptor128, _descriptor129, _descriptor130, _descriptor131, _descriptor132, _descriptor133, _descriptor134, _descriptor135, _descriptor136, _descriptor137, _descriptor138, _descriptor139, _descriptor140, _descriptor141, _descriptor142, _descriptor143, _descriptor144, _descriptor145, _descriptor146, _descriptor147, _descriptor148, _descriptor149, _descriptor150, _descriptor151, _descriptor152, _descriptor153, _descriptor154, _descriptor155, _descriptor156, _descriptor157, _descriptor158, _descriptor159, _descriptor160, _descriptor161, _descriptor162, _descriptor163, _descriptor164, _descriptor165, _descriptor166, _dec238, _dec239, _dec240, _dec241, _dec242, _dec243, _dec244, _dec245, _dec246, _dec247, _dec248, _dec249, _dec250, _dec251, _dec252, _class103, _desc31, _value31, _class104, _descriptor167, _descriptor168, _descriptor169, _descriptor170, _descriptor171, _descriptor172, _descriptor173, _descriptor174, _descriptor175, _descriptor176, _descriptor177, _descriptor178, _descriptor179, _dec253, _dec254, _dec255, _dec256, _dec257, _dec258, _class106, _desc32, _value32, _class107, _descriptor180, _descriptor181, _descriptor182, _descriptor183, _dec259, _dec260, _dec261, _dec262, _dec263, _dec264, _dec265, _dec266, _class109, _desc33, _value33, _class110, _descriptor184, _descriptor185, _descriptor186, _descriptor187, _descriptor188, _descriptor189, _dec267, _dec268, _dec269, _dec270, _dec271, _dec272, _dec273, _dec274, _class112, _desc34, _value34, _class113, _descriptor190, _descriptor191, _descriptor192, _descriptor193, _descriptor194, _descriptor195, _dec275, _dec276, _class115, _desc35, _value35, _class116, _descriptor196, _descriptor197, _descriptor198, _descriptor199, _descriptor200, _dec277, _dec278, _dec279, _dec280, _dec281, _dec282, _class118, _desc36, _value36, _class119, _descriptor201, _descriptor202, _descriptor203, _descriptor204, _dec283, _dec284, _dec285, _class121, _desc37, _value37, _class122, _descriptor205, _dec286, _dec287, _dec288, _class124, _desc38, _value38, _class125, _descriptor206, _dec289, _dec290, _dec291, _dec292, _dec293, _dec294, _dec295, _dec296, _class127, _desc39, _value39, _class128, _descriptor207, _descriptor208, _descriptor209, _descriptor210, _descriptor211, _descriptor212, _dec297, _dec298, _dec299, _dec300, _class130, _desc40, _value40, _class131, _descriptor213, _descriptor214, _dec301, _dec302, _dec303, _dec304, _dec305, _dec306, _dec307, _class133, _desc41, _value41, _class134, _descriptor215, _descriptor216, _descriptor217, _descriptor218, _descriptor219, _dec308, _dec309, _dec310, _dec311, _dec312, _dec313, _dec314, _dec315, _dec316, _class136, _desc42, _value42, _class137, _descriptor220, _descriptor221, _descriptor222, _descriptor223, _descriptor224, _descriptor225, _descriptor226, _descriptor227, _dec317, _dec318, _dec319, _dec320, _dec321, _dec322, _dec323, _class139, _desc43, _value43, _class140, _descriptor228, _descriptor229, _descriptor230, _descriptor231, _descriptor232, _descriptor233, _descriptor234, _dec324, _dec325, _dec326, _dec327, _dec328, _dec329, _dec330, _dec331, _class142, _desc44, _value44, _class143, _descriptor235, _descriptor236, _descriptor237, _descriptor238, _descriptor239, _descriptor240, _dec332, _dec333, _dec334, _dec335, _dec336, _dec337, _dec338, _dec339, _dec340, _class145, _desc45, _value45, _class146, _descriptor241, _descriptor242, _descriptor243, _descriptor244, _descriptor245, _descriptor246, _descriptor247, _dec341, _dec342, _class148, _dec343, _dec344, _dec345, _dec346, _dec347, _dec348, _dec349, _class149, _desc46, _value46, _class150, _descriptor248, _descriptor249, _descriptor250, _descriptor251, _descriptor252, _dec350, _dec351, _dec352, _dec353, _dec354, _class152, _desc47, _value47, _class153, _descriptor253, _descriptor254, _descriptor255, _dec355, _dec356, _dec357, _dec358, _dec359, _dec360, _dec361, _dec362, _class155, _desc48, _value48, _class156, _descriptor256, _descriptor257, _descriptor258, _descriptor259, _descriptor260, _descriptor261, _class157, _temp4, _dec363, _dec364, _dec365, _dec366, _dec367, _dec368, _class158, _desc49, _value49, _class159, _descriptor262, _descriptor263, _descriptor264, _descriptor265, _dec369, _dec370, _dec371, _dec372, _dec373, _dec374, _class161, _desc50, _value50, _class162, _descriptor266, _descriptor267, _descriptor268, _descriptor269, _dec375, _dec376, _dec377, _dec378, _dec379, _dec380, _dec381, _dec382, _dec383, _dec384, _dec385, _dec386, _dec387, _dec388, _dec389, _dec390, _class164, _desc51, _value51, _class165, _descriptor270, _descriptor271, _descriptor272, _descriptor273, _descriptor274, _descriptor275, _descriptor276, _descriptor277, _descriptor278, _descriptor279, _descriptor280, _descriptor281, _descriptor282, _descriptor283, _class167, _temp5, _dec391, _dec392, _dec393, _dec394, _class168, _desc52, _value52, _class169, _descriptor284, _descriptor285, _dec395, _dec396, _class171, _dec397, _dec398, _dec399, _dec400, _dec401, _dec402, _class173, _dec403, _dec404, _dec405, _class174, _desc53, _value53, _class175, _descriptor286, _dec406, _dec407, _dec408, _dec409, _desc54, _value54, _class177, _descriptor287, _descriptor288, _descriptor289, _descriptor290, _dec410, _dec411, _dec412, _dec413, _dec414, _dec415, _dec416, _dec417, _dec418, _dec419, _dec420, _dec421, _dec422, _dec423, _dec424, _dec425, _dec426, _dec427, _dec428, _class179, _desc55, _value55, _class180, _descriptor291, _descriptor292, _descriptor293, _descriptor294, _descriptor295, _descriptor296, _descriptor297, _descriptor298, _descriptor299, _descriptor300, _descriptor301, _descriptor302, _descriptor303, _descriptor304, _descriptor305, _descriptor306, _descriptor307, _dec429, _dec430, _dec431, _dec432, _class182, _desc56, _value56, _class183, _descriptor308, _descriptor309, _dec433, _dec434, _dec435, _class185, _desc57, _value57, _class186, _descriptor310, _dec436, _dec437, _dec438, _dec439, _dec440, _dec441, _class188, _desc58, _value58, _class189, _descriptor311, _descriptor312, _descriptor313, _descriptor314, _class190, _temp6, _dec442, _dec443, _dec444, _dec445, _dec446, _dec447, _dec448, _dec449, _dec450, _dec451, _dec452, _dec453, _dec454, _dec455, _dec456, _dec457, _dec458, _dec459, _dec460, _dec461, _dec462, _dec463, _dec464, _dec465, _class191, _desc59, _value59, _class192, _descriptor315, _descriptor316, _descriptor317, _descriptor318, _descriptor319, _descriptor320, _descriptor321, _descriptor322, _descriptor323, _descriptor324, _descriptor325, _descriptor326, _descriptor327, _descriptor328, _descriptor329, _descriptor330, _descriptor331, _descriptor332, _descriptor333, _descriptor334, _descriptor335, _descriptor336, _dec466, _dec467, _dec468, _dec469, _dec470, _dec471, _dec472, _dec473, _class194, _desc60, _value60, _class195, _descriptor337, _descriptor338, _descriptor339, _descriptor340, _descriptor341, _dec474, _dec475, _dec476, _dec477, _dec478, _dec479, _class197, _desc61, _value61, _class198, _descriptor342, _descriptor343, _descriptor344, _descriptor345, _dec480, _dec481, _dec482, _dec483, _dec484, _dec485, _dec486, _class200, _desc62, _value62, _class201, _descriptor346, _descriptor347, _descriptor348, _descriptor349, _descriptor350, _dec487, _dec488, _dec489, _dec490, _dec491, _dec492, _class203, _desc63, _value63, _class204, _descriptor351, _descriptor352, _descriptor353, _descriptor354, _dec493, _dec494, _dec495, _class206, _desc64, _value64, _class207, _descriptor355, _dec496, _dec497, _class209, _desc65, _value65, _class210, _descriptor356, _descriptor357, _descriptor358, _descriptor359, _descriptor360, _dec498, _dec499, _class212, _dec500, _dec501, _dec502, _dec503, _class214, _desc66, _value66, _class215, _descriptor361, _descriptor362, _dec504, _dec505, _dec506, _dec507, _dec508, _dec509, _class217, _desc67, _value67, _class218, _descriptor363, _descriptor364, _descriptor365, _descriptor366, _dec510, _dec511, _dec512, _dec513, _dec514, _dec515, _class220, _desc68, _value68, _class221, _descriptor367, _descriptor368, _descriptor369, _descriptor370, _dec516, _dec517, _dec518, _class223, _desc69, _value69, _class224, _descriptor371, _dec519, _dec520, _dec521, _class226, _desc70, _value70, _class227, _descriptor372, _dec522, _dec523, _class230, _dec524, _dec525, _dec526, _class232, _desc71, _value71, _class233, _descriptor373, _dec527, _dec528, _dec529, _dec530, _dec531, _class235, _desc72, _value72, _class236, _descriptor374, _descriptor375, _descriptor376, _dec532, _dec533, _class238, _dec534, _dec535, _class240, _desc73, _value73, _class241, _descriptor377, _descriptor378, _descriptor379, _descriptor380, _descriptor381, _descriptor382, _descriptor383, _dec536, _dec537, _dec538, _dec539, _class243, _desc74, _value74, _class244, _descriptor384, _descriptor385, _dec540, _dec541, _dec542, _dec543, _dec544, _dec545, _dec546, _dec547, _dec548, _dec549, _class246, _desc75, _value75, _class247, _descriptor386, _descriptor387, _descriptor388, _descriptor389, _descriptor390, _descriptor391, _descriptor392, _descriptor393;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;
exports.initialize = initialize;
exports.polyfillElementClosest = polyfillElementClosest;
exports.applyMaterializeDropdownFix = applyMaterializeDropdownFix;

var _aureliaPal = require('aurelia-pal');

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaRouter = require('aurelia-router');

var _aureliaBinding = require('aurelia-binding');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaLogging = require('aurelia-logging');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

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
    this.useScrollfirePatch = false;
    this.globalResources = [];
  }

  ConfigBuilder.prototype.useAll = function useAll() {
    return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useDatePicker().useTitle().useLayoutData().useSelect().useTable().useTabs().useLayout();
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

  ConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  ConfigBuilder.prototype.withScrollfirePatch = function withScrollfirePatch() {
    this.useScrollfirePatch = true;
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
  if (builder.useScrollfirePatch) {
    new ScrollfirePatch().patch();
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
var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec3 = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec4 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec5 = (0, _aureliaTemplating.bindable)(), _dec3(_class5 = _dec4(_class5 = (_class6 = function () {
  function MdBreadcrumbs(element, router) {
    _classCallCheck(this, MdBreadcrumbs);

    _initDefineProp(this, 'router', _descriptor, this);

    this.element = element;
    this.aureliaRouter = router;
  }

  MdBreadcrumbs.prototype.bind = function bind() {
    if (!this.router) {
      this.router = this.aureliaRouter;
    }
    var router = this.router;
    this._childRouter = router;
    while (router.parent) {
      router = router.parent;
    }
    this.router = router;
  };

  MdBreadcrumbs.prototype.routerChanged = function routerChanged() {};

  MdBreadcrumbs.prototype.navigate = function navigate(navigationInstruction) {
    this._childRouter.navigateToRoute(navigationInstruction.config.name);
  };

  return MdBreadcrumbs;
}(), (_descriptor = _applyDecoratedDescriptor(_class6.prototype, 'router', [_dec5], {
  enumerable: true,
  initializer: null
})), _class6)) || _class5) || _class5);

var InstructionFilterValueConverter = exports.InstructionFilterValueConverter = function () {
  function InstructionFilterValueConverter() {
    _classCallCheck(this, InstructionFilterValueConverter);
  }

  InstructionFilterValueConverter.prototype.toView = function toView(navigationInstructions) {
    return navigationInstructions.filter(function (i) {
      var result = false;
      if (i.config.title) {
        result = true;
      }
      return result;
    });
  };

  return InstructionFilterValueConverter;
}();

var MdBadge = exports.MdBadge = (_dec6 = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec6(_class8 = _dec7(_class8 = (_class9 = function () {
  function MdBadge(element) {
    _classCallCheck(this, MdBadge);

    _initDefineProp(this, 'isNew', _descriptor2, this);

    _initDefineProp(this, 'caption', _descriptor3, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdBadge.prototype.attached = function attached() {
    var classes = ['badge'];

    if (getBooleanFromAttributeValue(this.isNew)) {
      classes.push('new');
    }

    if (this.caption !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': this.caption });
    }

    this.attributeManager.addClasses(classes);
  };

  MdBadge.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['badge', 'new']);
    this.attributeManager.removeAttributes(['data-badge-caption']);
  };

  MdBadge.prototype.newChanged = function newChanged(newValue) {
    if (getBooleanFromAttributeValue(newValue)) {
      this.attributeManager.addClasses('new');
    } else {
      this.attributeManager.removeClasses('new');
    }
  };

  MdBadge.prototype.captionChanged = function captionChanged(newValue) {
    if (newValue !== null) {
      this.attributeManager.addAttributes({ 'data-badge-caption': newValue });
    } else {
      this.attributeManager.removeAttributes(['data-badge-caption']);
    }
  };

  return MdBadge;
}(), (_descriptor2 = _applyDecoratedDescriptor(_class9.prototype, 'isNew', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class9.prototype, 'caption', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class9)) || _class8) || _class8);
var Ui5Button = exports.Ui5Button = (_dec10 = (0, _aureliaTemplating.customElement)('ui5-button'), _dec11 = (0, _aureliaDependencyInjection.inject)(Element), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec14 = (0, _aureliaTemplating.bindable)(), _dec15 = (0, _aureliaTemplating.bindable)(), _dec16 = (0, _aureliaTemplating.bindable)(), _dec17 = (0, _aureliaTemplating.bindable)(), _dec10(_class11 = _dec11(_class11 = (_class12 = function () {
  function Ui5Button(element) {
    _classCallCheck(this, Ui5Button);

    _initDefineProp(this, 'disabled', _descriptor4, this);

    _initDefineProp(this, 'floating', _descriptor5, this);

    _initDefineProp(this, 'large', _descriptor6, this);

    _initDefineProp(this, 'text', _descriptor7, this);

    _initDefineProp(this, 'press', _descriptor8, this);

    _initDefineProp(this, 'icon', _descriptor9, this);

    this._button = null;

    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  Ui5Button.prototype.attached = function attached() {
    this._button = new sap.m.Button({
      text: this.text,
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
}(), (_descriptor4 = _applyDecoratedDescriptor(_class12.prototype, 'disabled', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class12.prototype, 'floating', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class12.prototype, 'large', [_dec14], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class12.prototype, 'text', [_dec15], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class12.prototype, 'press', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class12.prototype, 'icon', [_dec17], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class12)) || _class11) || _class11);
var MdBox = exports.MdBox = (_dec18 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec19 = (0, _aureliaDependencyInjection.inject)(Element), _dec20 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec18(_class14 = _dec19(_class14 = (_class15 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor10, this);

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
}(), (_descriptor10 = _applyDecoratedDescriptor(_class15.prototype, 'caption', [_dec20], {
  enumerable: true,
  initializer: null
})), _class15)) || _class14) || _class14);
var MdCard = exports.MdCard = (_dec21 = (0, _aureliaTemplating.customElement)('md-card'), _dec22 = (0, _aureliaDependencyInjection.inject)(Element), _dec23 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec24 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec25 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec26 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec27 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec21(_class17 = _dec22(_class17 = (_class18 = function () {
  function MdCard(element) {
    _classCallCheck(this, MdCard);

    _initDefineProp(this, 'mdHorizontal', _descriptor11, this);

    _initDefineProp(this, 'mdImage', _descriptor12, this);

    _initDefineProp(this, 'mdReveal', _descriptor13, this);

    _initDefineProp(this, 'mdSize', _descriptor14, this);

    _initDefineProp(this, 'mdTitle', _descriptor15, this);

    this.element = element;
  }

  MdCard.prototype.attached = function attached() {
    this.mdHorizontal = getBooleanFromAttributeValue(this.mdHorizontal);
    this.mdReveal = getBooleanFromAttributeValue(this.mdReveal);
  };

  return MdCard;
}(), (_descriptor11 = _applyDecoratedDescriptor(_class18.prototype, 'mdHorizontal', [_dec23], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class18.prototype, 'mdImage', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class18.prototype, 'mdReveal', [_dec25], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class18.prototype, 'mdSize', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class18.prototype, 'mdTitle', [_dec27], {
  enumerable: true,
  initializer: null
})), _class18)) || _class17) || _class17);
var MdCharCounter = exports.MdCharCounter = (_dec28 = (0, _aureliaTemplating.customAttribute)('md-char-counter'), _dec29 = (0, _aureliaDependencyInjection.inject)(Element), _dec30 = (0, _aureliaTemplating.bindable)(), _dec28(_class20 = _dec29(_class20 = (_class21 = function () {
  function MdCharCounter(element) {
    _classCallCheck(this, MdCharCounter);

    _initDefineProp(this, 'length', _descriptor16, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCharCounter.prototype.attached = function attached() {
    var _this = this;

    this.length = parseInt(this.length, 10);

    if (this.element.tagName.toUpperCase() === 'INPUT') {
      this.attributeManager.addAttributes({ 'length': this.length });
      $(this.element).characterCounter();
    } else {
      $(this.element).find('input').each(function (i, el) {
        $(el).attr('length', _this.length);
      });
      $(this.element).find('input').characterCounter();
    }
  };

  MdCharCounter.prototype.detached = function detached() {
    this.attributeManager.removeAttributes(['length']);
  };

  return MdCharCounter;
}(), (_descriptor16 = _applyDecoratedDescriptor(_class21.prototype, 'length', [_dec30], {
  enumerable: true,
  initializer: function initializer() {
    return 120;
  }
})), _class21)) || _class20) || _class20);
var MdCarouselItem = exports.MdCarouselItem = (_dec31 = (0, _aureliaDependencyInjection.inject)(Element), _dec32 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec33 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec31(_class23 = (_class24 = function () {
  function MdCarouselItem(element) {
    _classCallCheck(this, MdCarouselItem);

    _initDefineProp(this, 'mdHref', _descriptor17, this);

    _initDefineProp(this, 'mdImage', _descriptor18, this);

    this.element = element;
  }

  MdCarouselItem.prototype.attached = function attached() {};

  return MdCarouselItem;
}(), (_descriptor17 = _applyDecoratedDescriptor(_class24.prototype, 'mdHref', [_dec32], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class24.prototype, 'mdImage', [_dec33], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class24)) || _class23);
var MdCarousel = exports.MdCarousel = (_dec34 = (0, _aureliaTemplating.customElement)('md-carousel'), _dec35 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec38 = (0, _aureliaTemplating.children)('md-carousel-item'), _dec34(_class26 = _dec35(_class26 = (_class27 = function () {
  function MdCarousel(element, taskQueue) {
    _classCallCheck(this, MdCarousel);

    _initDefineProp(this, 'mdIndicators', _descriptor19, this);

    _initDefineProp(this, 'mdSlider', _descriptor20, this);

    _initDefineProp(this, 'items', _descriptor21, this);

    this.element = element;
    this.taskQueue = taskQueue;
  }

  MdCarousel.prototype.attached = function attached() {
    if (getBooleanFromAttributeValue(this.mdSlider)) {
      this.element.classList.add('carousel-slider');
    }

    this.refresh();
  };

  MdCarousel.prototype.itemsChanged = function itemsChanged(newValue) {
    this.refresh();
  };

  MdCarousel.prototype.refresh = function refresh() {
    var _this2 = this;

    if (this.items.length > 0) {
      var options = {
        full_width: getBooleanFromAttributeValue(this.mdSlider),
        fullWidth: getBooleanFromAttributeValue(this.mdSlider),
        indicators: this.mdIndicators
      };

      this.taskQueue.queueTask(function () {
        $(_this2.element).carousel(options);
      });
    }
  };

  return MdCarousel;
}(), (_descriptor19 = _applyDecoratedDescriptor(_class27.prototype, 'mdIndicators', [_dec36], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class27.prototype, 'mdSlider', [_dec37], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class27.prototype, 'items', [_dec38], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class27)) || _class26) || _class26);
var MdAutoComplete = exports.MdAutoComplete = (_dec39 = (0, _aureliaTemplating.customAttribute)('md-autocomplete'), _dec40 = (0, _aureliaDependencyInjection.inject)(Element), _dec41 = (0, _aureliaTemplating.bindable)(), _dec39(_class29 = _dec40(_class29 = (_class30 = function () {
  function MdAutoComplete(element) {
    _classCallCheck(this, MdAutoComplete);

    this.input = null;

    _initDefineProp(this, 'values', _descriptor22, this);

    this.element = element;
  }

  MdAutoComplete.prototype.attached = function attached() {
    if (this.element.tagName.toLowerCase() === 'input') {
      this.input = this.element;
    } else if (this.element.tagName.toLowerCase() === 'md-input') {
      this.input = this.element.au.controller.viewModel.input;
    } else {
      throw new Error('md-autocomplete must be attached to either an input or md-input element');
    }
    this.refresh();
  };

  MdAutoComplete.prototype.detached = function detached() {
    $(this.input).siblings('.autocomplete-content').off('click');
    $(this.input).siblings('.autocomplete-content').remove();
  };

  MdAutoComplete.prototype.refresh = function refresh() {
    var _this3 = this;

    this.detached();
    $(this.input).autocomplete({
      data: this.values
    });

    $(this.input).siblings('.autocomplete-content').on('click', function () {
      fireEvent(_this3.input, 'change');
    });
  };

  MdAutoComplete.prototype.valuesChanged = function valuesChanged(newValue) {
    this.refresh();
  };

  return MdAutoComplete;
}(), (_descriptor22 = _applyDecoratedDescriptor(_class30.prototype, 'values', [_dec41], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
})), _class30)) || _class29) || _class29);
var MdCheckbox = exports.MdCheckbox = (_dec42 = (0, _aureliaDependencyInjection.inject)(Element), _dec43 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec44 = (0, _aureliaTemplating.bindable)(), _dec45 = (0, _aureliaTemplating.bindable)(), _dec46 = (0, _aureliaTemplating.bindable)(), _dec47 = (0, _aureliaTemplating.bindable)(), _dec42(_class32 = (_class33 = (_temp = _class34 = function () {
  function MdCheckbox(element) {
    _classCallCheck(this, MdCheckbox);

    _initDefineProp(this, 'mdChecked', _descriptor23, this);

    _initDefineProp(this, 'mdDisabled', _descriptor24, this);

    _initDefineProp(this, 'mdFilledIn', _descriptor25, this);

    _initDefineProp(this, 'mdMatcher', _descriptor26, this);

    _initDefineProp(this, 'mdModel', _descriptor27, this);

    this.element = element;
    this.controlId = 'md-checkbox-' + MdCheckbox.id++;
  }

  MdCheckbox.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.checkbox);
    if (getBooleanFromAttributeValue(this.mdFilledIn)) {
      this.attributeManager.addClasses('filled-in');
    }
    if (this.mdChecked === null) {
      this.checkbox.indeterminate = true;
    } else {
      this.checkbox.indeterminate = false;
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.checkbox.disabled = true;
    }
  };

  MdCheckbox.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['filled-in', 'disabled']);
  };

  MdCheckbox.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.checkbox) {
      this.checkbox.disabled = !!newValue;
    }
  };

  return MdCheckbox;
}(), _class34.id = 0, _temp), (_descriptor23 = _applyDecoratedDescriptor(_class33.prototype, 'mdChecked', [_dec43], {
  enumerable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class33.prototype, 'mdDisabled', [_dec44], {
  enumerable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class33.prototype, 'mdFilledIn', [_dec45], {
  enumerable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class33.prototype, 'mdMatcher', [_dec46], {
  enumerable: true,
  initializer: null
}), _descriptor27 = _applyDecoratedDescriptor(_class33.prototype, 'mdModel', [_dec47], {
  enumerable: true,
  initializer: null
})), _class33)) || _class32);
var MdChip = exports.MdChip = (_dec48 = (0, _aureliaTemplating.customElement)('md-chip'), _dec49 = (0, _aureliaDependencyInjection.inject)(Element), _dec50 = (0, _aureliaTemplating.bindable)(), _dec48(_class35 = _dec49(_class35 = (_class36 = function () {
  function MdChip(element) {
    _classCallCheck(this, MdChip);

    _initDefineProp(this, 'mdClose', _descriptor28, this);

    this.element = element;
  }

  MdChip.prototype.attached = function attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  };

  MdChip.prototype.close = function close() {
    this.element.parentElement.removeChild(this.element);
  };

  return MdChip;
}(), (_descriptor28 = _applyDecoratedDescriptor(_class36.prototype, 'mdClose', [_dec50], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class36)) || _class35) || _class35);
var MdChips = exports.MdChips = (_dec51 = (0, _aureliaTemplating.customAttribute)('md-chips'), _dec52 = (0, _aureliaDependencyInjection.inject)(Element), _dec53 = (0, _aureliaTemplating.bindable)(), _dec54 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec55 = (0, _aureliaTemplating.bindable)(), _dec56 = (0, _aureliaTemplating.bindable)(), _dec51(_class38 = _dec52(_class38 = (_class39 = function () {
  function MdChips(element) {
    _classCallCheck(this, MdChips);

    _initDefineProp(this, 'autocompleteData', _descriptor29, this);

    _initDefineProp(this, 'data', _descriptor30, this);

    _initDefineProp(this, 'placeholder', _descriptor31, this);

    _initDefineProp(this, 'secondaryPlaceholder', _descriptor32, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-chips');

    this.onChipAdd = this.onChipAdd.bind(this);
    this.onChipDelete = this.onChipDelete.bind(this);
    this.onChipSelect = this.onChipSelect.bind(this);
  }

  MdChips.prototype.attached = function attached() {
    var options = {
      autocompleteData: this.autocompleteData,
      data: this.data,
      placeholder: this.placeholder,
      secondaryPlaceholder: this.secondaryPlaceholder
    };
    $(this.element).material_chip(options);
    $(this.element).on('chip.add', this.onChipAdd);
    $(this.element).on('chip.delete', this.onChipDelete);
    $(this.element).on('chip.select', this.onChipSelect);
  };

  MdChips.prototype.detached = function detached() {};

  MdChips.prototype.onChipAdd = function onChipAdd(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'add', target: chip, data: this.data });
  };

  MdChips.prototype.onChipDelete = function onChipDelete(e, chip) {
    this.data = $(this.element).material_chip('data');
    fireEvent(this.element, 'change', { operation: 'delete', target: chip, data: this.data });
  };

  MdChips.prototype.onChipSelect = function onChipSelect(e, chip) {
    fireEvent(this.element, 'selected', { target: chip });
  };

  return MdChips;
}(), (_descriptor29 = _applyDecoratedDescriptor(_class39.prototype, 'autocompleteData', [_dec53], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class39.prototype, 'data', [_dec54], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class39.prototype, 'placeholder', [_dec55], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor32 = _applyDecoratedDescriptor(_class39.prototype, 'secondaryPlaceholder', [_dec56], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class39)) || _class38) || _class38);
var MdCollectionHeader = exports.MdCollectionHeader = (_dec57 = (0, _aureliaTemplating.customElement)('md-collection-header'), _dec58 = (0, _aureliaDependencyInjection.inject)(Element), _dec57(_class41 = _dec58(_class41 = function MdCollectionHeader(element) {
  _classCallCheck(this, MdCollectionHeader);

  this.element = element;
}) || _class41) || _class41);
var MdCollectionItem = exports.MdCollectionItem = (_dec59 = (0, _aureliaTemplating.customElement)('md-collection-item'), _dec59(_class42 = function MdCollectionItem() {
  _classCallCheck(this, MdCollectionItem);
}) || _class42);
var MdCollection = exports.MdCollection = (_dec60 = (0, _aureliaTemplating.customElement)('md-collection'), _dec61 = (0, _aureliaDependencyInjection.inject)(Element), _dec60(_class43 = _dec61(_class43 = function () {
  function MdCollection(element) {
    _classCallCheck(this, MdCollection);

    this.element = element;
  }

  MdCollection.prototype.attached = function attached() {
    var header = this.element.querySelector('md-collection-header');
    if (header) {
      this.anchor.classList.add('with-header');
    }
  };

  MdCollection.prototype.getSelected = function getSelected() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    return items.filter(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected;
    }).map(function (i) {
      return i.au['md-collection-selector'].viewModel.item;
    });
  };

  MdCollection.prototype.clearSelection = function clearSelection() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(function (i) {
      return i.au['md-collection-selector'].viewModel.isSelected = false;
    });
  };

  MdCollection.prototype.selectAll = function selectAll() {
    var items = [].slice.call(this.element.querySelectorAll('md-collection-selector'));
    items.forEach(function (i) {
      var vm = i.au['md-collection-selector'].viewModel;
      vm.isSelected = !vm.mdDisabled;
    });
  };

  return MdCollection;
}()) || _class43) || _class43);
var MdlListSelector = exports.MdlListSelector = (_dec62 = (0, _aureliaTemplating.customElement)('md-collection-selector'), _dec63 = (0, _aureliaDependencyInjection.inject)(Element), _dec64 = (0, _aureliaTemplating.bindable)(), _dec65 = (0, _aureliaTemplating.bindable)(), _dec66 = (0, _aureliaBinding.observable)(), _dec62(_class44 = _dec63(_class44 = (_class45 = function () {
  function MdlListSelector(element) {
    _classCallCheck(this, MdlListSelector);

    _initDefineProp(this, 'item', _descriptor33, this);

    _initDefineProp(this, 'mdDisabled', _descriptor34, this);

    _initDefineProp(this, 'isSelected', _descriptor35, this);

    this.element = element;
  }

  MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  };

  MdlListSelector.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    this.mdDisabled = getBooleanFromAttributeValue(newValue);
  };

  return MdlListSelector;
}(), (_descriptor33 = _applyDecoratedDescriptor(_class45.prototype, 'item', [_dec64], {
  enumerable: true,
  initializer: null
}), _descriptor34 = _applyDecoratedDescriptor(_class45.prototype, 'mdDisabled', [_dec65], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class45.prototype, 'isSelected', [_dec66], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class45)) || _class44) || _class44);
var Ui5Column = exports.Ui5Column = (_dec67 = (0, _aureliaTemplating.customElement)('ui5-column'), _dec68 = (0, _aureliaDependencyInjection.inject)(Element), _dec69 = (0, _aureliaTemplating.bindable)(), _dec70 = (0, _aureliaTemplating.bindable)(), _dec71 = (0, _aureliaTemplating.bindable)(), _dec72 = (0, _aureliaTemplating.bindable)(), _dec73 = (0, _aureliaTemplating.bindable)(), _dec74 = (0, _aureliaTemplating.bindable)(), _dec75 = (0, _aureliaTemplating.bindable)(), _dec76 = (0, _aureliaTemplating.bindable)(), _dec77 = (0, _aureliaTemplating.bindable)(), _dec78 = (0, _aureliaTemplating.bindable)(), _dec79 = (0, _aureliaTemplating.bindable)(), _dec80 = (0, _aureliaTemplating.bindable)(), _dec67(_class47 = _dec68(_class47 = (_class48 = function () {
  function Ui5Column(element) {
    _classCallCheck(this, Ui5Column);

    this._column = null;

    _initDefineProp(this, 'ui5Id', _descriptor36, this);

    _initDefineProp(this, 'width', _descriptor37, this);

    _initDefineProp(this, 'hAlign', _descriptor38, this);

    _initDefineProp(this, 'vAlign', _descriptor39, this);

    _initDefineProp(this, 'styleClass', _descriptor40, this);

    _initDefineProp(this, 'visible', _descriptor41, this);

    _initDefineProp(this, 'minScreenWidth', _descriptor42, this);

    _initDefineProp(this, 'demandPopin', _descriptor43, this);

    _initDefineProp(this, 'popinHAlign', _descriptor44, this);

    _initDefineProp(this, 'popinDisplay', _descriptor45, this);

    _initDefineProp(this, 'mergeDuplicates', _descriptor46, this);

    _initDefineProp(this, 'mergeFunctionName', _descriptor47, this);

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
    for (var _iterator = path, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      if (_isArray) {
        if (_i >= _iterator.length) break;
        elem = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        elem = _i.value;
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
    if (controlName !== null) {
      controlName.setStyleClass(newValue);
    }
  };

  Ui5Column.prototype.visibleChanged = function visibleChanged(newValue) {
    if (controlName !== null) {
      controlName.setVisible(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Column.prototype.minScreenWidthChanged = function minScreenWidthChanged(newValue) {
    if (controlName !== null) {
      controlName.setMinScreenWidth(newValue);
    }
  };

  Ui5Column.prototype.demandPopinChanged = function demandPopinChanged(newValue) {
    if (controlName !== null) {
      controlName.setDemandPopin(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Column.prototype.popinDisplayChanged = function popinDisplayChanged(newValue) {
    if (controlName !== null) {
      controlName.setPopinDisplay(newValue);
    }
  };

  Ui5Column.prototype.popinHAlignChanged = function popinHAlignChanged(newValue) {
    if (controlName !== null) {
      controlName.setPopinHAlign(newValue);
    }
  };

  Ui5Column.prototype.mergeDuplicatesChanged = function mergeDuplicatesChanged(newValue) {
    if (controlName !== null) {
      controlName.setMergeDuplicates(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Column.prototype.mergeFunctionNameChanged = function mergeFunctionNameChanged(newValue) {
    if (controlName !== null) {
      controlName.setMergeFunctionName(newValue);
    }
  };

  return Ui5Column;
}(), (_descriptor36 = _applyDecoratedDescriptor(_class48.prototype, 'ui5Id', [_dec69], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor37 = _applyDecoratedDescriptor(_class48.prototype, 'width', [_dec70], {
  enumerable: true,
  initializer: null
}), _descriptor38 = _applyDecoratedDescriptor(_class48.prototype, 'hAlign', [_dec71], {
  enumerable: true,
  initializer: function initializer() {
    return 'Begin';
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class48.prototype, 'vAlign', [_dec72], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class48.prototype, 'styleClass', [_dec73], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class48.prototype, 'visible', [_dec74], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor42 = _applyDecoratedDescriptor(_class48.prototype, 'minScreenWidth', [_dec75], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor43 = _applyDecoratedDescriptor(_class48.prototype, 'demandPopin', [_dec76], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class48.prototype, 'popinHAlign', [_dec77], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class48.prototype, 'popinDisplay', [_dec78], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor46 = _applyDecoratedDescriptor(_class48.prototype, 'mergeDuplicates', [_dec79], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor47 = _applyDecoratedDescriptor(_class48.prototype, 'mergeFunctionName', [_dec80], {
  enumerable: true,
  initializer: function initializer() {
    return 'getText';
  }
})), _class48)) || _class47) || _class47);
var Ui5ColumnListItem = exports.Ui5ColumnListItem = (_dec81 = (0, _aureliaTemplating.customElement)('ui5-column-list-item'), _dec82 = (0, _aureliaDependencyInjection.inject)(Element), _dec83 = (0, _aureliaTemplating.bindable)(), _dec81(_class50 = _dec82(_class50 = (_class51 = function () {
  function Ui5ColumnListItem(element) {
    _classCallCheck(this, Ui5ColumnListItem);

    this._item = null;

    _initDefineProp(this, 'vAlign', _descriptor48, this);

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
    for (var _iterator2 = path, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        elem = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        elem = _i2.value;
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
}(), (_descriptor48 = _applyDecoratedDescriptor(_class51.prototype, 'vAlign', [_dec83], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
})), _class51)) || _class50) || _class50);

var AttributeManager = exports.AttributeManager = function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this._colorClasses = ['accent', 'primary'];
    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this4 = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this4.element.getAttribute(k)) {
        _this4.addedAttributes[k] = attrs[k];
        _this4.element.setAttribute(k, attrs[k]);
      } else if (_this4.element.getAttribute(k) !== attrs[k]) {
        _this4.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this5 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this5.element.getAttribute(a) && !!_this5.addedAttributes[a]) {
        _this5.element.removeAttribute(a);
        _this5.addedAttributes[a] = null;
        delete _this5.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this6 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      var classListHasColor = _this6._colorClasses.filter(function (cc) {
        return _this6.element.classList.contains(cc);
      }).length > 0;
      if (_this6._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
        if (!_this6.element.classList.contains(c)) {
          _this6.addedClasses.push(c);
          _this6.element.classList.add(c);
        }
      }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this7 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this7.element.classList.contains(c) && _this7.addedClasses.indexOf(c) > -1) {
        _this7.element.classList.remove(c);
        _this7.addedClasses.splice(_this7.addedClasses.indexOf(c), 1);
      }
    });
  };

  return AttributeManager;
}();

function getBooleanFromAttributeValue(value) {
  return value === true || value === 'true';
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

var Ui5Container = exports.Ui5Container = (_dec84 = (0, _aureliaTemplating.customAttribute)('ui5-container'), _dec85 = (0, _aureliaDependencyInjection.inject)(Element), _dec84(_class54 = _dec85(_class54 = function () {
  function Ui5Container(element) {
    _classCallCheck(this, Ui5Container);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5Container.prototype.attached = function attached() {};

  Ui5Container.prototype.detached = function detached() {};

  return Ui5Container;
}()) || _class54) || _class54);
var Ui5DatePicker = exports.Ui5DatePicker = (_dec86 = (0, _aureliaTemplating.customElement)('ui5-date-picker'), _dec87 = (0, _aureliaDependencyInjection.inject)(Element), _dec88 = (0, _aureliaTemplating.bindable)(), _dec89 = (0, _aureliaTemplating.bindable)(), _dec90 = (0, _aureliaTemplating.bindable)(), _dec91 = (0, _aureliaTemplating.bindable)(), _dec92 = (0, _aureliaTemplating.bindable)(), _dec93 = (0, _aureliaTemplating.bindable)(), _dec94 = (0, _aureliaTemplating.bindable)(), _dec95 = (0, _aureliaTemplating.bindable)(), _dec96 = (0, _aureliaTemplating.bindable)(), _dec97 = (0, _aureliaTemplating.bindable)(), _dec98 = (0, _aureliaTemplating.bindable)(), _dec99 = (0, _aureliaTemplating.bindable)(), _dec100 = (0, _aureliaTemplating.bindable)(), _dec101 = (0, _aureliaTemplating.bindable)(), _dec102 = (0, _aureliaTemplating.bindable)(), _dec103 = (0, _aureliaTemplating.bindable)(), _dec104 = (0, _aureliaTemplating.bindable)(), _dec105 = (0, _aureliaTemplating.bindable)(), _dec106 = (0, _aureliaTemplating.bindable)(), _dec107 = (0, _aureliaTemplating.bindable)(), _dec108 = (0, _aureliaTemplating.bindable)(), _dec109 = (0, _aureliaTemplating.bindable)(), _dec86(_class55 = _dec87(_class55 = (_class56 = function (_Ui5InputBase) {
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

    var _this8 = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

    _this8._picker = null;

    _initDefineProp(_this8, 'ui5Id', _descriptor49, _this8);

    _initDefineProp(_this8, 'displayFormat', _descriptor50, _this8);

    _initDefineProp(_this8, 'valueFormat', _descriptor51, _this8);

    _initDefineProp(_this8, 'dateValue', _descriptor52, _this8);

    _initDefineProp(_this8, 'displayFormatType', _descriptor53, _this8);

    _initDefineProp(_this8, 'secondaryCalendarType', _descriptor54, _this8);

    _initDefineProp(_this8, 'minDate', _descriptor55, _this8);

    _initDefineProp(_this8, 'maxDate', _descriptor56, _this8);

    _initDefineProp(_this8, 'specialDates', _descriptor57, _this8);

    _initDefineProp(_this8, 'value', _descriptor58, _this8);

    _initDefineProp(_this8, 'width', _descriptor59, _this8);

    _initDefineProp(_this8, 'enabled', _descriptor60, _this8);

    _initDefineProp(_this8, 'valueState', _descriptor61, _this8);

    _initDefineProp(_this8, 'name', _descriptor62, _this8);

    _initDefineProp(_this8, 'placeholder', _descriptor63, _this8);

    _initDefineProp(_this8, 'editable', _descriptor64, _this8);

    _initDefineProp(_this8, 'valueStateText', _descriptor65, _this8);

    _initDefineProp(_this8, 'showValueStateMessage', _descriptor66, _this8);

    _initDefineProp(_this8, 'textAlign', _descriptor67, _this8);

    _initDefineProp(_this8, 'textDirection', _descriptor68, _this8);

    _initDefineProp(_this8, 'required', _descriptor69, _this8);

    _initDefineProp(_this8, 'change', _descriptor70, _this8);

    _this8.element = element;
    return _this8;
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
}(Ui5InputBase), (_descriptor49 = _applyDecoratedDescriptor(_class56.prototype, 'ui5Id', [_dec88], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class56.prototype, 'displayFormat', [_dec89], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class56.prototype, 'valueFormat', [_dec90], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class56.prototype, 'dateValue', [_dec91], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor53 = _applyDecoratedDescriptor(_class56.prototype, 'displayFormatType', [_dec92], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor54 = _applyDecoratedDescriptor(_class56.prototype, 'secondaryCalendarType', [_dec93], {
  enumerable: true,
  initializer: function initializer() {
    return 'Gregorian';
  }
}), _descriptor55 = _applyDecoratedDescriptor(_class56.prototype, 'minDate', [_dec94], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor56 = _applyDecoratedDescriptor(_class56.prototype, 'maxDate', [_dec95], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor57 = _applyDecoratedDescriptor(_class56.prototype, 'specialDates', [_dec96], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor58 = _applyDecoratedDescriptor(_class56.prototype, 'value', [_dec97], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor59 = _applyDecoratedDescriptor(_class56.prototype, 'width', [_dec98], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class56.prototype, 'enabled', [_dec99], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor61 = _applyDecoratedDescriptor(_class56.prototype, 'valueState', [_dec100], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor62 = _applyDecoratedDescriptor(_class56.prototype, 'name', [_dec101], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor63 = _applyDecoratedDescriptor(_class56.prototype, 'placeholder', [_dec102], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor64 = _applyDecoratedDescriptor(_class56.prototype, 'editable', [_dec103], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor65 = _applyDecoratedDescriptor(_class56.prototype, 'valueStateText', [_dec104], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor66 = _applyDecoratedDescriptor(_class56.prototype, 'showValueStateMessage', [_dec105], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor67 = _applyDecoratedDescriptor(_class56.prototype, 'textAlign', [_dec106], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor68 = _applyDecoratedDescriptor(_class56.prototype, 'textDirection', [_dec107], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor69 = _applyDecoratedDescriptor(_class56.prototype, 'required', [_dec108], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor70 = _applyDecoratedDescriptor(_class56.prototype, 'change', [_dec109], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class56)) || _class55) || _class55);

var Ui5Control = exports.Ui5Control = function (_Ui5Element) {
  _inherits(Ui5Control, _Ui5Element);

  function Ui5Control() {
    _classCallCheck(this, Ui5Control);

    return _possibleConstructorReturn(this, _Ui5Element.apply(this, arguments));
  }

  Ui5Control.prototype.addChild = function addChild(child, elem) {
    _Ui5Element.prototype.addChild.call(this, child, elem);
  };

  Ui5Control.prototype.attached = function attached() {
    _Ui5Element.prototype.attached.call(this);
  };

  return Ui5Control;
}(Ui5Element);

var MdDropdownElement = exports.MdDropdownElement = (_dec110 = (0, _aureliaTemplating.customElement)('md-dropdown'), _dec111 = (0, _aureliaDependencyInjection.inject)(Element), _dec112 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec113 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec114 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec115 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec116 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec117 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec118 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec119 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec110(_class58 = _dec111(_class58 = (_class59 = (_temp2 = _class60 = function () {
  function MdDropdownElement(element) {
    _classCallCheck(this, MdDropdownElement);

    _initDefineProp(this, 'alignment', _descriptor71, this);

    _initDefineProp(this, 'belowOrigin', _descriptor72, this);

    _initDefineProp(this, 'constrainWidth', _descriptor73, this);

    _initDefineProp(this, 'gutter', _descriptor74, this);

    _initDefineProp(this, 'hover', _descriptor75, this);

    _initDefineProp(this, 'mdTitle', _descriptor76, this);

    _initDefineProp(this, 'inDuration', _descriptor77, this);

    _initDefineProp(this, 'outDuration', _descriptor78, this);

    this.element = element;
    this.controlId = 'md-dropdown-' + MdDropdown.id++;
  }

  MdDropdownElement.prototype.attached = function attached() {
    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  return MdDropdownElement;
}(), _class60.id = 0, _temp2), (_descriptor71 = _applyDecoratedDescriptor(_class59.prototype, 'alignment', [_dec112], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor72 = _applyDecoratedDescriptor(_class59.prototype, 'belowOrigin', [_dec113], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor73 = _applyDecoratedDescriptor(_class59.prototype, 'constrainWidth', [_dec114], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor74 = _applyDecoratedDescriptor(_class59.prototype, 'gutter', [_dec115], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor75 = _applyDecoratedDescriptor(_class59.prototype, 'hover', [_dec116], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor76 = _applyDecoratedDescriptor(_class59.prototype, 'mdTitle', [_dec117], {
  enumerable: true,
  initializer: null
}), _descriptor77 = _applyDecoratedDescriptor(_class59.prototype, 'inDuration', [_dec118], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor78 = _applyDecoratedDescriptor(_class59.prototype, 'outDuration', [_dec119], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class59)) || _class58) || _class58);
function applyMaterializeDropdownFix() {
  $.fn.dropdown = function (options) {
    var defaults = {
      inDuration: 300,
      outDuration: 225,
      constrain_width: true,
      hover: false,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    };

    if (options === 'open') {
      this.each(function () {
        $(this).trigger('open');
      });
      return false;
    }

    if (options === 'close') {
      this.each(function () {
        $(this).trigger('close');
      });
      return false;
    }

    this.each(function () {
      var origin = $(this);
      var currentOptions = $.extend({}, defaults, options);
      var isFocused = false;

      var activates = $('#' + origin.attr('data-activates'));

      function updateOptions() {
        if (origin.data('induration') !== undefined) {
          currentOptions.inDuration = origin.data('induration');
        }
        if (origin.data('outduration') !== undefined) {
          currentOptions.outDuration = origin.data('outduration');
        }
        if (origin.data('constrainwidth') !== undefined) {
          currentOptions.constrain_width = origin.data('constrainwidth');
        }
        if (origin.data('hover') !== undefined) {
          currentOptions.hover = origin.data('hover');
        }
        if (origin.data('gutter') !== undefined) {
          currentOptions.gutter = origin.data('gutter');
        }
        if (origin.data('beloworigin') !== undefined) {
          currentOptions.belowOrigin = origin.data('beloworigin');
        }
        if (origin.data('alignment') !== undefined) {
          currentOptions.alignment = origin.data('alignment');
        }
        if (origin.data('stoppropagation') !== undefined) {
          currentOptions.stopPropagation = origin.data('stoppropagation');
        }
      }

      updateOptions();

      origin.after(activates);

      function placeDropdown(eventType) {
        if (eventType === 'focus') {
          isFocused = true;
        }

        updateOptions();

        activates.addClass('active');
        origin.addClass('active');

        if (currentOptions.constrain_width === true) {
          activates.css('width', origin.outerWidth());
        } else {
          activates.css('white-space', 'nowrap');
        }

        var windowHeight = window.innerHeight;
        var originHeight = origin.innerHeight();
        var offsetLeft = origin.offset().left;
        var offsetTop = origin.offset().top - $(window).scrollTop();
        var currAlignment = currentOptions.alignment;
        var gutterSpacing = 0;
        var leftPosition = 0;

        var verticalOffset = 0;
        if (currentOptions.belowOrigin === true) {
          verticalOffset = originHeight;
        }

        var scrollYOffset = 0;
        var scrollXOffset = 0;
        var wrapper = origin.parent();
        if (!wrapper.is('body')) {
          if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
            scrollYOffset = wrapper[0].scrollTop;
          }
          if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
            scrollXOffset = wrapper[0].scrollLeft;
          }
        }

        if (offsetLeft + activates.innerWidth() > $(window).width()) {
          currAlignment = 'right';
        } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
          currAlignment = 'left';
        }

        if (offsetTop + activates.innerHeight() > windowHeight) {
          if (offsetTop + originHeight - activates.innerHeight() < 0) {
            var adjustedHeight = windowHeight - offsetTop - verticalOffset;
            activates.css('max-height', adjustedHeight);
          } else {
            if (!verticalOffset) {
              verticalOffset += originHeight;
            }
            verticalOffset -= activates.innerHeight();
          }
        }

        if (currAlignment === 'left') {
          gutterSpacing = currentOptions.gutter;
          leftPosition = origin.position().left + gutterSpacing;
        } else if (currAlignment === 'right') {
          var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
          gutterSpacing = -currentOptions.gutter;
          leftPosition = offsetRight + gutterSpacing;
        }

        activates.css({
          position: 'absolute',
          top: origin.position().top + verticalOffset + scrollYOffset,
          left: leftPosition + scrollXOffset
        });

        activates.stop(true, true).css('opacity', 0).slideDown({
          queue: false,
          duration: currentOptions.inDuration,
          easing: 'easeOutCubic',
          complete: function complete() {
            $(this).css('height', '');
          }
        }).animate({ opacity: 1 }, { queue: false, duration: currentOptions.inDuration, easing: 'easeOutSine' });
      }

      function hideDropdown() {
        isFocused = false;
        activates.fadeOut(currentOptions.outDuration);
        activates.removeClass('active');
        origin.removeClass('active');
        setTimeout(function () {
          activates.css('max-height', '');
        }, currentOptions.outDuration);
      }

      if (currentOptions.hover) {
        var open = false;
        origin.unbind('click.' + origin.attr('id'));

        origin.on('mouseenter', function (e) {
          if (open === false) {
            placeDropdown();
            open = true;
          }
        });
        origin.on('mouseleave', function (e) {
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-content').is(activates)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });

        activates.on('mouseleave', function (e) {
          var toEl = e.toElement || e.relatedTarget;
          if (!$(toEl).closest('.dropdown-button').is(origin)) {
            activates.stop(true, true);
            hideDropdown();
            open = false;
          }
        });
      } else {
        origin.unbind('click.' + origin.attr('id'));
        origin.bind('click.' + origin.attr('id'), function (e) {
          if (!isFocused) {
            if (origin[0] === e.currentTarget && !origin.hasClass('active') && $(e.target).closest('.dropdown-content').length === 0) {
              e.preventDefault();
              if (currentOptions.stopPropagation) {
                e.stopPropagation();
              }
              placeDropdown('click');
            } else if (origin.hasClass('active')) {
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
            }

            if (activates.hasClass('active')) {
              $(document).bind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'), function (e2) {
                if (!activates.is(e2.target) && !origin.is(e2.target) && !origin.find(e2.target).length) {
                  hideDropdown();
                  $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
                }
              });
            }
          }
        });
      }
      origin.on('open', function (e, eventType) {
        placeDropdown(eventType);
      });
      origin.on('close', hideDropdown);
    });
  };

  $(document).ready(function () {
    $('.dropdown-button').dropdown();
  });
}

var MdDropdown = exports.MdDropdown = (_dec120 = (0, _aureliaTemplating.customAttribute)('md-dropdown'), _dec121 = (0, _aureliaDependencyInjection.inject)(Element), _dec122 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec123 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec124 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec125 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec126 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec127 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec128 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec129 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec130 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec131 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec120(_class61 = _dec121(_class61 = (_class62 = (_temp3 = _class63 = function () {
  function MdDropdown(element) {
    _classCallCheck(this, MdDropdown);

    _initDefineProp(this, 'activates', _descriptor79, this);

    _initDefineProp(this, 'ref', _descriptor80, this);

    _initDefineProp(this, 'alignment', _descriptor81, this);

    _initDefineProp(this, 'belowOrigin', _descriptor82, this);

    _initDefineProp(this, 'constrainWidth', _descriptor83, this);

    _initDefineProp(this, 'gutter', _descriptor84, this);

    _initDefineProp(this, 'hover', _descriptor85, this);

    _initDefineProp(this, 'mdTitle', _descriptor86, this);

    _initDefineProp(this, 'inDuration', _descriptor87, this);

    _initDefineProp(this, 'outDuration', _descriptor88, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdDropdown.prototype.attached = function attached() {
    this.handleActivateElement();
    this.contentAttributeManager = new AttributeManager(document.getElementById(this.activates));

    this.attributeManager.addClasses('dropdown-button');
    this.contentAttributeManager.addClasses('dropdown-content');


    $(this.element).dropdown({
      alignment: this.alignment,
      belowOrigin: getBooleanFromAttributeValue(this.belowOrigin),
      constrain_width: getBooleanFromAttributeValue(this.constrainWidth),
      constrainWidth: getBooleanFromAttributeValue(this.constrainWidth),
      gutter: parseInt(this.gutter, 10),
      hover: getBooleanFromAttributeValue(this.hover),
      inDuration: parseInt(this.inDuration, 10),
      outDuration: parseInt(this.outDuration, 10)
    });
  };

  MdDropdown.prototype.detached = function detached() {
    this.attributeManager.removeAttributes('data-activates');
    this.attributeManager.removeClasses('dropdown-button');
    this.contentAttributeManager.removeClasses('dropdown-content');
  };

  MdDropdown.prototype.handleActivateElement = function handleActivateElement() {
    if (this.ref) {
      var id = this.ref.getAttribute('id');
      if (!id) {
        id = 'md-dropdown-' + MdDropdown.elementId++;
        this.ref.setAttribute('id', id);
        this.activates = id;
      }
      this.id = MdDropdown.elementId++;
    }
    this.attributeManager.addAttributes({ 'data-activates': this.activates });
  };

  return MdDropdown;
}(), _class63.elementId = 0, _temp3), (_descriptor79 = _applyDecoratedDescriptor(_class62.prototype, 'activates', [_dec122], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor80 = _applyDecoratedDescriptor(_class62.prototype, 'ref', [_dec123], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor81 = _applyDecoratedDescriptor(_class62.prototype, 'alignment', [_dec124], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor82 = _applyDecoratedDescriptor(_class62.prototype, 'belowOrigin', [_dec125], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor83 = _applyDecoratedDescriptor(_class62.prototype, 'constrainWidth', [_dec126], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor84 = _applyDecoratedDescriptor(_class62.prototype, 'gutter', [_dec127], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor85 = _applyDecoratedDescriptor(_class62.prototype, 'hover', [_dec128], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor86 = _applyDecoratedDescriptor(_class62.prototype, 'mdTitle', [_dec129], {
  enumerable: true,
  initializer: null
}), _descriptor87 = _applyDecoratedDescriptor(_class62.prototype, 'inDuration', [_dec130], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor88 = _applyDecoratedDescriptor(_class62.prototype, 'outDuration', [_dec131], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class62)) || _class61) || _class61);

var Ui5Element = exports.Ui5Element = function () {
  function Ui5Element() {
    _classCallCheck(this, Ui5Element);
  }

  Ui5Element.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'layout') this._input.setLayoutData(child);
  };

  Ui5Element.prototype.attached = function attached() {};

  return Ui5Element;
}();

var MdFab = exports.MdFab = (_dec132 = (0, _aureliaTemplating.customElement)('md-fab'), _dec133 = (0, _aureliaDependencyInjection.inject)(Element), _dec134 = (0, _aureliaTemplating.bindable)(), _dec135 = (0, _aureliaTemplating.bindable)(), _dec132(_class64 = _dec133(_class64 = (_class65 = function () {
  function MdFab(element) {
    _classCallCheck(this, MdFab);

    _initDefineProp(this, 'mdFixed', _descriptor89, this);

    _initDefineProp(this, 'mdLarge', _descriptor90, this);

    this.element = element;
  }

  MdFab.prototype.attached = function attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  };

  return MdFab;
}(), (_descriptor89 = _applyDecoratedDescriptor(_class65.prototype, 'mdFixed', [_dec134], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor90 = _applyDecoratedDescriptor(_class65.prototype, 'mdLarge', [_dec135], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class65)) || _class64) || _class64);
var Ui5FeedContent = exports.Ui5FeedContent = (_dec136 = (0, _aureliaTemplating.customElement)('ui5-feed-content'), _dec137 = (0, _aureliaDependencyInjection.inject)(Element), _dec138 = (0, _aureliaTemplating.bindable)(), _dec139 = (0, _aureliaTemplating.bindable)(), _dec140 = (0, _aureliaTemplating.bindable)(), _dec141 = (0, _aureliaTemplating.bindable)(), _dec136(_class67 = _dec137(_class67 = (_class68 = function () {
  function Ui5FeedContent(element) {
    _classCallCheck(this, Ui5FeedContent);

    this._content = null;

    _initDefineProp(this, 'value', _descriptor91, this);

    _initDefineProp(this, 'contentText', _descriptor92, this);

    _initDefineProp(this, 'subheader', _descriptor93, this);

    _initDefineProp(this, 'valueColor', _descriptor94, this);

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
}(), (_descriptor91 = _applyDecoratedDescriptor(_class68.prototype, 'value', [_dec138], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor92 = _applyDecoratedDescriptor(_class68.prototype, 'contentText', [_dec139], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor93 = _applyDecoratedDescriptor(_class68.prototype, 'subheader', [_dec140], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor94 = _applyDecoratedDescriptor(_class68.prototype, 'valueColor', [_dec141], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class68)) || _class67) || _class67);
var MdFileInput = exports.MdFileInput = (_dec142 = (0, _aureliaTemplating.customElement)('md-file'), _dec143 = (0, _aureliaDependencyInjection.inject)(Element), _dec144 = (0, _aureliaTemplating.bindable)(), _dec145 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec146 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec147 = (0, _aureliaTemplating.bindable)(), _dec142(_class70 = _dec143(_class70 = (_class71 = function () {
  function MdFileInput(element) {
    _classCallCheck(this, MdFileInput);

    _initDefineProp(this, 'mdCaption', _descriptor95, this);

    _initDefineProp(this, 'mdMultiple', _descriptor96, this);

    _initDefineProp(this, 'mdLabelValue', _descriptor97, this);

    _initDefineProp(this, 'disabled', _descriptor98, this);

    this.files = [];
    this._suspendUpdate = false;

    this.element = element;
    this.handleChangeFromNativeInput = this.handleChangeFromNativeInput.bind(this);
  }

  MdFileInput.prototype.attached = function attached() {
    this.mdMultiple = getBooleanFromAttributeValue(this.mdMultiple);
    $(this.filePath).on('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeInput);
  };

  MdFileInput.prototype.handleChangeFromNativeInput = function handleChangeFromNativeInput() {
    if (!this._suspendUpdate) {
      this._suspendUpdate = true;
      fireEvent(this.filePath, 'change', { files: this.files });
      fireMaterializeEvent(this.filePath, 'change', { files: this.files });
      this._suspendUpdate = false;
    }
  };

  return MdFileInput;
}(), (_descriptor95 = _applyDecoratedDescriptor(_class71.prototype, 'mdCaption', [_dec144], {
  enumerable: true,
  initializer: function initializer() {
    return 'File';
  }
}), _descriptor96 = _applyDecoratedDescriptor(_class71.prototype, 'mdMultiple', [_dec145], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor97 = _applyDecoratedDescriptor(_class71.prototype, 'mdLabelValue', [_dec146], {
  enumerable: true,
  initializer: null
}), _descriptor98 = _applyDecoratedDescriptor(_class71.prototype, 'disabled', [_dec147], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class71)) || _class70) || _class70);
var Ui5Form = exports.Ui5Form = (_dec148 = (0, _aureliaTemplating.customElement)('ui5-form'), _dec149 = (0, _aureliaDependencyInjection.inject)(Element), _dec150 = (0, _aureliaTemplating.bindable)(), _dec151 = (0, _aureliaTemplating.bindable)(), _dec152 = (0, _aureliaTemplating.bindable)(), _dec153 = (0, _aureliaTemplating.bindable)(), _dec148(_class73 = _dec149(_class73 = (_class74 = function () {
  function Ui5Form(element) {
    _classCallCheck(this, Ui5Form);

    _initDefineProp(this, 'ui5Id', _descriptor99, this);

    _initDefineProp(this, 'width', _descriptor100, this);

    _initDefineProp(this, 'editable', _descriptor101, this);

    _initDefineProp(this, 'title', _descriptor102, this);

    this._form = null;

    this.element = element;
  }

  Ui5Form.prototype.addChild = function addChild(child, elem) {
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
    if (this.uiId5) this._form = new sap.ui.layout.form.Form(this.ui5Id, params);else this._form = new sap.ui.layout.form.Form(params);

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

  return Ui5Form;
}(), (_descriptor99 = _applyDecoratedDescriptor(_class74.prototype, 'ui5Id', [_dec150], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor100 = _applyDecoratedDescriptor(_class74.prototype, 'width', [_dec151], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class74.prototype, 'editable', [_dec152], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor102 = _applyDecoratedDescriptor(_class74.prototype, 'title', [_dec153], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class74)) || _class73) || _class73);
var MdFooter = exports.MdFooter = (_dec154 = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec155 = (0, _aureliaDependencyInjection.inject)(Element), _dec154(_class76 = _dec155(_class76 = function () {
  function MdFooter(element) {
    _classCallCheck(this, MdFooter);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdFooter.prototype.bind = function bind() {
    this.attributeManager.addClasses('page-footer');
  };

  MdFooter.prototype.unbind = function unbind() {
    this.attributeManager.removeClasses('page-footer');
  };

  return MdFooter;
}()) || _class76) || _class76);
var Ui5FormContainer = exports.Ui5FormContainer = (_dec156 = (0, _aureliaTemplating.customElement)('ui5-form-container'), _dec157 = (0, _aureliaDependencyInjection.inject)(Element), _dec158 = (0, _aureliaTemplating.bindable)(), _dec159 = (0, _aureliaTemplating.bindable)(), _dec156(_class77 = _dec157(_class77 = (_class78 = function () {
  function Ui5FormContainer(element) {
    _classCallCheck(this, Ui5FormContainer);

    _initDefineProp(this, 'ui5Id', _descriptor103, this);

    _initDefineProp(this, 'title', _descriptor104, this);

    this._form = null;

    this.element = element;
  }

  Ui5FormContainer.prototype.addChild = function addChild(child, elem) {
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
}(), (_descriptor103 = _applyDecoratedDescriptor(_class78.prototype, 'ui5Id', [_dec158], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor104 = _applyDecoratedDescriptor(_class78.prototype, 'title', [_dec159], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class78)) || _class77) || _class77);
var Ui5FormElement = exports.Ui5FormElement = (_dec160 = (0, _aureliaTemplating.customElement)('ui5-form-element'), _dec161 = (0, _aureliaDependencyInjection.inject)(Element), _dec162 = (0, _aureliaTemplating.bindable)(), _dec160(_class80 = _dec161(_class80 = (_class81 = function () {
  function Ui5FormElement(element) {
    _classCallCheck(this, Ui5FormElement);

    _initDefineProp(this, 'ui5Id', _descriptor105, this);

    this._form = null;

    this.element = element;
  }

  Ui5FormElement.prototype.addChild = function addChild(child, elem) {
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
}(), (_descriptor105 = _applyDecoratedDescriptor(_class81.prototype, 'ui5Id', [_dec162], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class81)) || _class80) || _class80);
var Ui5GenericTile = exports.Ui5GenericTile = (_dec163 = (0, _aureliaTemplating.customElement)('ui5-generic-tile'), _dec164 = (0, _aureliaDependencyInjection.inject)(Element), _dec165 = (0, _aureliaTemplating.bindable)(), _dec166 = (0, _aureliaTemplating.bindable)(), _dec167 = (0, _aureliaTemplating.bindable)(), _dec168 = (0, _aureliaTemplating.bindable)(), _dec169 = (0, _aureliaTemplating.bindable)(), _dec163(_class83 = _dec164(_class83 = (_class84 = function () {
  function Ui5GenericTile(element) {
    _classCallCheck(this, Ui5GenericTile);

    this._tile = null;

    _initDefineProp(this, 'mode', _descriptor106, this);

    _initDefineProp(this, 'header', _descriptor107, this);

    _initDefineProp(this, 'subheader', _descriptor108, this);

    _initDefineProp(this, 'press', _descriptor109, this);

    _initDefineProp(this, 'frameType', _descriptor110, this);

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
}(), (_descriptor106 = _applyDecoratedDescriptor(_class84.prototype, 'mode', [_dec165], {
  enumerable: true,
  initializer: function initializer() {
    return "content";
  }
}), _descriptor107 = _applyDecoratedDescriptor(_class84.prototype, 'header', [_dec166], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor108 = _applyDecoratedDescriptor(_class84.prototype, 'subheader', [_dec167], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor109 = _applyDecoratedDescriptor(_class84.prototype, 'press', [_dec168], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor110 = _applyDecoratedDescriptor(_class84.prototype, 'frameType', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class84)) || _class83) || _class83);
var Ui5GridData = exports.Ui5GridData = (_dec170 = (0, _aureliaTemplating.customElement)('ui5-grid-data'), _dec171 = (0, _aureliaDependencyInjection.inject)(Element), _dec172 = (0, _aureliaTemplating.bindable)(), _dec173 = (0, _aureliaTemplating.bindable)(), _dec170(_class86 = _dec171(_class86 = (_class87 = function () {
  function Ui5GridData(element) {
    _classCallCheck(this, Ui5GridData);

    this._gridData = null;

    _initDefineProp(this, 'id', _descriptor111, this);

    _initDefineProp(this, 'span', _descriptor112, this);

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
}(), (_descriptor111 = _applyDecoratedDescriptor(_class87.prototype, 'id', [_dec172], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor112 = _applyDecoratedDescriptor(_class87.prototype, 'span', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class87)) || _class86) || _class86);
var Ui5Html = exports.Ui5Html = (_dec174 = (0, _aureliaTemplating.customElement)('ui5-html'), _dec175 = (0, _aureliaDependencyInjection.inject)(Element), _dec174(_class89 = _dec175(_class89 = function () {
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
}()) || _class89) || _class89);
var Ui5IconTabBar = exports.Ui5IconTabBar = (_dec176 = (0, _aureliaTemplating.customElement)('ui5-icon-tab-bar'), _dec177 = (0, _aureliaDependencyInjection.inject)(Element), _dec178 = (0, _aureliaTemplating.bindable)(), _dec179 = (0, _aureliaTemplating.bindable)(), _dec180 = (0, _aureliaTemplating.bindable)(), _dec181 = (0, _aureliaTemplating.bindable)(), _dec182 = (0, _aureliaTemplating.bindable)(), _dec183 = (0, _aureliaTemplating.bindable)(), _dec184 = (0, _aureliaTemplating.bindable)(), _dec185 = (0, _aureliaTemplating.bindable)(), _dec186 = (0, _aureliaTemplating.bindable)(), _dec187 = (0, _aureliaTemplating.bindable)(), _dec188 = (0, _aureliaTemplating.bindable)(), _dec189 = (0, _aureliaTemplating.bindable)(), _dec176(_class91 = _dec177(_class91 = (_class92 = function () {
  function Ui5IconTabBar(element) {
    _classCallCheck(this, Ui5IconTabBar);

    this._tab = null;

    _initDefineProp(this, 'showSelection', _descriptor113, this);

    _initDefineProp(this, 'expandable', _descriptor114, this);

    _initDefineProp(this, 'expanded', _descriptor115, this);

    _initDefineProp(this, 'selectedKey', _descriptor116, this);

    _initDefineProp(this, 'upperCase', _descriptor117, this);

    _initDefineProp(this, 'stretchContentHeight', _descriptor118, this);

    _initDefineProp(this, 'applyContentPadding', _descriptor119, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor120, this);

    _initDefineProp(this, 'headerMode', _descriptor121, this);

    _initDefineProp(this, 'showOverflowSelectList', _descriptor122, this);

    _initDefineProp(this, 'headerBackgroundDesign', _descriptor123, this);

    _initDefineProp(this, 'enableTabReordering', _descriptor124, this);

    this.element = element;
  }

  Ui5IconTabBar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5IconTabBar.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'content') {
        this._tab.addItem(child);
        break;
      }
    }
  };

  Ui5IconTabBar.prototype.removeChild = function removeChild(child, elem) {
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
      enableTabReordering: getBooleanFromAttributeValue(this.enableTabReordering)
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
}(), (_descriptor113 = _applyDecoratedDescriptor(_class92.prototype, 'showSelection', [_dec178], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor114 = _applyDecoratedDescriptor(_class92.prototype, 'expandable', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor115 = _applyDecoratedDescriptor(_class92.prototype, 'expanded', [_dec180], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor116 = _applyDecoratedDescriptor(_class92.prototype, 'selectedKey', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor117 = _applyDecoratedDescriptor(_class92.prototype, 'upperCase', [_dec182], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor118 = _applyDecoratedDescriptor(_class92.prototype, 'stretchContentHeight', [_dec183], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor119 = _applyDecoratedDescriptor(_class92.prototype, 'applyContentPadding', [_dec184], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor120 = _applyDecoratedDescriptor(_class92.prototype, 'backgroundDesign', [_dec185], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor121 = _applyDecoratedDescriptor(_class92.prototype, 'headerMode', [_dec186], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor122 = _applyDecoratedDescriptor(_class92.prototype, 'showOverflowSelectList', [_dec187], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor123 = _applyDecoratedDescriptor(_class92.prototype, 'headerBackgroundDesign', [_dec188], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor124 = _applyDecoratedDescriptor(_class92.prototype, 'enableTabReordering', [_dec189], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class92)) || _class91) || _class91);
var Ui5IconTabFilter = exports.Ui5IconTabFilter = (_dec190 = (0, _aureliaTemplating.customElement)('ui5-icon-tab-filter'), _dec191 = (0, _aureliaDependencyInjection.inject)(Element), _dec192 = (0, _aureliaTemplating.bindable)(), _dec190(_class94 = _dec191(_class94 = (_class95 = function () {
  function Ui5IconTabFilter(element) {
    _classCallCheck(this, Ui5IconTabFilter);

    this._tab = null;

    _initDefineProp(this, 'text', _descriptor125, this);

    this.element = element;
  }

  Ui5IconTabFilter.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5IconTabFilter.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  };

  Ui5IconTabFilter.prototype.removeChild = function removeChild(child, elem) {
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
}(), (_descriptor125 = _applyDecoratedDescriptor(_class95.prototype, 'text', [_dec192], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class95)) || _class94) || _class94);
var Ui5ImageContent = exports.Ui5ImageContent = (_dec193 = (0, _aureliaTemplating.customElement)('ui5-image-content'), _dec194 = (0, _aureliaDependencyInjection.inject)(Element), _dec195 = (0, _aureliaTemplating.bindable)(), _dec193(_class97 = _dec194(_class97 = (_class98 = function () {
  function Ui5ImageContent(element) {
    _classCallCheck(this, Ui5ImageContent);

    this._content = null;

    _initDefineProp(this, 'src', _descriptor126, this);

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
}(), (_descriptor126 = _applyDecoratedDescriptor(_class98.prototype, 'src', [_dec195], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class98)) || _class97) || _class97);
var Ui5Input = exports.Ui5Input = (_dec196 = (0, _aureliaTemplating.customElement)('ui5-input'), _dec197 = (0, _aureliaDependencyInjection.inject)(Element), _dec198 = (0, _aureliaTemplating.bindable)(), _dec199 = (0, _aureliaTemplating.bindable)(), _dec200 = (0, _aureliaTemplating.bindable)(), _dec201 = (0, _aureliaTemplating.bindable)(), _dec202 = (0, _aureliaTemplating.bindable)(), _dec203 = (0, _aureliaTemplating.bindable)(), _dec204 = (0, _aureliaTemplating.bindable)(), _dec205 = (0, _aureliaTemplating.bindable)(), _dec206 = (0, _aureliaTemplating.bindable)(), _dec207 = (0, _aureliaTemplating.bindable)(), _dec208 = (0, _aureliaTemplating.bindable)(), _dec209 = (0, _aureliaTemplating.bindable)(), _dec210 = (0, _aureliaTemplating.bindable)(), _dec211 = (0, _aureliaTemplating.bindable)(), _dec212 = (0, _aureliaTemplating.bindable)(), _dec213 = (0, _aureliaTemplating.bindable)(), _dec214 = (0, _aureliaTemplating.bindable)(), _dec215 = (0, _aureliaTemplating.bindable)(), _dec216 = (0, _aureliaTemplating.bindable)(), _dec217 = (0, _aureliaTemplating.bindable)(), _dec218 = (0, _aureliaTemplating.bindable)(), _dec219 = (0, _aureliaTemplating.bindable)(), _dec220 = (0, _aureliaTemplating.bindable)(), _dec221 = (0, _aureliaTemplating.bindable)(), _dec222 = (0, _aureliaTemplating.bindable)(), _dec223 = (0, _aureliaTemplating.bindable)(), _dec224 = (0, _aureliaTemplating.bindable)(), _dec225 = (0, _aureliaTemplating.bindable)(), _dec226 = (0, _aureliaTemplating.bindable)(), _dec227 = (0, _aureliaTemplating.bindable)(), _dec228 = (0, _aureliaTemplating.bindable)(), _dec229 = (0, _aureliaTemplating.bindable)(), _dec230 = (0, _aureliaTemplating.bindable)(), _dec231 = (0, _aureliaTemplating.bindable)(), _dec232 = (0, _aureliaTemplating.bindable)(), _dec233 = (0, _aureliaTemplating.bindable)(), _dec234 = (0, _aureliaTemplating.bindable)(), _dec235 = (0, _aureliaTemplating.bindable)(), _dec236 = (0, _aureliaTemplating.bindable)(), _dec237 = (0, _aureliaTemplating.bindable)(), _dec196(_class100 = _dec197(_class100 = (_class101 = function (_Ui5InputBase2) {
  _inherits(Ui5Input, _Ui5InputBase2);

  Ui5Input.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5InputBase2.prototype.addChild.call(this, child, elem);
    for (var _iterator10 = path, _isArray10 = Array.isArray(_iterator10), _i10 = 0, _iterator10 = _isArray10 ? _iterator10 : _iterator10[Symbol.iterator]();;) {
      if (_isArray10) {
        if (_i10 >= _iterator10.length) break;
        elem = _iterator10[_i10++];
      } else {
        _i10 = _iterator10.next();
        if (_i10.done) break;
        elem = _i10.value;
      }

      if (elem.localName == 'suggestion-item') {
        this._input.addSuggestionItem(child);
        break;
      } else if (elem.localName == 'suggestion-row') {
        this._input.addSuggestionRow(child);
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

    var _this10 = _possibleConstructorReturn(this, _Ui5InputBase2.call(this, element));

    _this10._input = null;

    _initDefineProp(_this10, 'ui5Id', _descriptor127, _this10);

    _initDefineProp(_this10, 'type', _descriptor128, _this10);

    _initDefineProp(_this10, 'maxLength', _descriptor129, _this10);

    _initDefineProp(_this10, 'dateFormat', _descriptor130, _this10);

    _initDefineProp(_this10, 'showValueHelp', _descriptor131, _this10);

    _initDefineProp(_this10, 'showSuggestion', _descriptor132, _this10);

    _initDefineProp(_this10, 'valueHelpOnly', _descriptor133, _this10);

    _initDefineProp(_this10, 'filterSuggests', _descriptor134, _this10);

    _initDefineProp(_this10, 'maxSuggestionWidth', _descriptor135, _this10);

    _initDefineProp(_this10, 'showTableSuggestionValueHelp', _descriptor136, _this10);

    _initDefineProp(_this10, 'description', _descriptor137, _this10);

    _initDefineProp(_this10, 'fieldWidth', _descriptor138, _this10);

    _initDefineProp(_this10, 'valueLiveUpdate', _descriptor139, _this10);

    _initDefineProp(_this10, 'selectedKey', _descriptor140, _this10);

    _initDefineProp(_this10, 'textFormatMode', _descriptor141, _this10);

    _initDefineProp(_this10, 'textFormatter', _descriptor142, _this10);

    _initDefineProp(_this10, 'suggestionRowValidator', _descriptor143, _this10);

    _initDefineProp(_this10, 'suggestionItems', _descriptor144, _this10);

    _initDefineProp(_this10, 'suggestionColumns', _descriptor145, _this10);

    _initDefineProp(_this10, 'suggestionRows', _descriptor146, _this10);

    _initDefineProp(_this10, 'selectedItem', _descriptor147, _this10);

    _initDefineProp(_this10, 'selectedRow', _descriptor148, _this10);

    _initDefineProp(_this10, 'liveChange', _descriptor149, _this10);

    _initDefineProp(_this10, 'valueHelpRequest', _descriptor150, _this10);

    _initDefineProp(_this10, 'suggest', _descriptor151, _this10);

    _initDefineProp(_this10, 'suggestionItemSelected', _descriptor152, _this10);

    _initDefineProp(_this10, 'submit', _descriptor153, _this10);

    _initDefineProp(_this10, 'value', _descriptor154, _this10);

    _initDefineProp(_this10, 'width', _descriptor155, _this10);

    _initDefineProp(_this10, 'enabled', _descriptor156, _this10);

    _initDefineProp(_this10, 'valueState', _descriptor157, _this10);

    _initDefineProp(_this10, 'name', _descriptor158, _this10);

    _initDefineProp(_this10, 'placeholder', _descriptor159, _this10);

    _initDefineProp(_this10, 'editable', _descriptor160, _this10);

    _initDefineProp(_this10, 'valueStateText', _descriptor161, _this10);

    _initDefineProp(_this10, 'showValueStateMessage', _descriptor162, _this10);

    _initDefineProp(_this10, 'textAlign', _descriptor163, _this10);

    _initDefineProp(_this10, 'textDirection', _descriptor164, _this10);

    _initDefineProp(_this10, 'required', _descriptor165, _this10);

    _initDefineProp(_this10, 'change', _descriptor166, _this10);

    _this10.element = element;
    return _this10;
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

  return Ui5Input;
}(Ui5InputBase), (_descriptor127 = _applyDecoratedDescriptor(_class101.prototype, 'ui5Id', [_dec198], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor128 = _applyDecoratedDescriptor(_class101.prototype, 'type', [_dec199], {
  enumerable: true,
  initializer: function initializer() {
    return 'Text';
  }
}), _descriptor129 = _applyDecoratedDescriptor(_class101.prototype, 'maxLength', [_dec200], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor130 = _applyDecoratedDescriptor(_class101.prototype, 'dateFormat', [_dec201], {
  enumerable: true,
  initializer: function initializer() {
    return 'YYYY-MM-DD';
  }
}), _descriptor131 = _applyDecoratedDescriptor(_class101.prototype, 'showValueHelp', [_dec202], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor132 = _applyDecoratedDescriptor(_class101.prototype, 'showSuggestion', [_dec203], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor133 = _applyDecoratedDescriptor(_class101.prototype, 'valueHelpOnly', [_dec204], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor134 = _applyDecoratedDescriptor(_class101.prototype, 'filterSuggests', [_dec205], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor135 = _applyDecoratedDescriptor(_class101.prototype, 'maxSuggestionWidth', [_dec206], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor136 = _applyDecoratedDescriptor(_class101.prototype, 'showTableSuggestionValueHelp', [_dec207], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor137 = _applyDecoratedDescriptor(_class101.prototype, 'description', [_dec208], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor138 = _applyDecoratedDescriptor(_class101.prototype, 'fieldWidth', [_dec209], {
  enumerable: true,
  initializer: function initializer() {
    return '50%';
  }
}), _descriptor139 = _applyDecoratedDescriptor(_class101.prototype, 'valueLiveUpdate', [_dec210], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor140 = _applyDecoratedDescriptor(_class101.prototype, 'selectedKey', [_dec211], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor141 = _applyDecoratedDescriptor(_class101.prototype, 'textFormatMode', [_dec212], {
  enumerable: true,
  initializer: function initializer() {
    return 'Value';
  }
}), _descriptor142 = _applyDecoratedDescriptor(_class101.prototype, 'textFormatter', [_dec213], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor143 = _applyDecoratedDescriptor(_class101.prototype, 'suggestionRowValidator', [_dec214], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor144 = _applyDecoratedDescriptor(_class101.prototype, 'suggestionItems', [_dec215], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor145 = _applyDecoratedDescriptor(_class101.prototype, 'suggestionColumns', [_dec216], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor146 = _applyDecoratedDescriptor(_class101.prototype, 'suggestionRows', [_dec217], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor147 = _applyDecoratedDescriptor(_class101.prototype, 'selectedItem', [_dec218], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor148 = _applyDecoratedDescriptor(_class101.prototype, 'selectedRow', [_dec219], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor149 = _applyDecoratedDescriptor(_class101.prototype, 'liveChange', [_dec220], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor150 = _applyDecoratedDescriptor(_class101.prototype, 'valueHelpRequest', [_dec221], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor151 = _applyDecoratedDescriptor(_class101.prototype, 'suggest', [_dec222], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor152 = _applyDecoratedDescriptor(_class101.prototype, 'suggestionItemSelected', [_dec223], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor153 = _applyDecoratedDescriptor(_class101.prototype, 'submit', [_dec224], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor154 = _applyDecoratedDescriptor(_class101.prototype, 'value', [_dec225], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor155 = _applyDecoratedDescriptor(_class101.prototype, 'width', [_dec226], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor156 = _applyDecoratedDescriptor(_class101.prototype, 'enabled', [_dec227], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor157 = _applyDecoratedDescriptor(_class101.prototype, 'valueState', [_dec228], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor158 = _applyDecoratedDescriptor(_class101.prototype, 'name', [_dec229], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor159 = _applyDecoratedDescriptor(_class101.prototype, 'placeholder', [_dec230], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor160 = _applyDecoratedDescriptor(_class101.prototype, 'editable', [_dec231], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor161 = _applyDecoratedDescriptor(_class101.prototype, 'valueStateText', [_dec232], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor162 = _applyDecoratedDescriptor(_class101.prototype, 'showValueStateMessage', [_dec233], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor163 = _applyDecoratedDescriptor(_class101.prototype, 'textAlign', [_dec234], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor164 = _applyDecoratedDescriptor(_class101.prototype, 'textDirection', [_dec235], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor165 = _applyDecoratedDescriptor(_class101.prototype, 'required', [_dec236], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor166 = _applyDecoratedDescriptor(_class101.prototype, 'change', [_dec237], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class101)) || _class100) || _class100);
var Ui5InputBase = exports.Ui5InputBase = (_dec238 = (0, _aureliaTemplating.customElement)('ui5-input-base'), _dec239 = (0, _aureliaDependencyInjection.inject)(Element), _dec240 = (0, _aureliaTemplating.bindable)(), _dec241 = (0, _aureliaTemplating.bindable)(), _dec242 = (0, _aureliaTemplating.bindable)(), _dec243 = (0, _aureliaTemplating.bindable)(), _dec244 = (0, _aureliaTemplating.bindable)(), _dec245 = (0, _aureliaTemplating.bindable)(), _dec246 = (0, _aureliaTemplating.bindable)(), _dec247 = (0, _aureliaTemplating.bindable)(), _dec248 = (0, _aureliaTemplating.bindable)(), _dec249 = (0, _aureliaTemplating.bindable)(), _dec250 = (0, _aureliaTemplating.bindable)(), _dec251 = (0, _aureliaTemplating.bindable)(), _dec252 = (0, _aureliaTemplating.bindable)(), _dec238(_class103 = _dec239(_class103 = (_class104 = function (_Ui5Control) {
  _inherits(Ui5InputBase, _Ui5Control);

  function Ui5InputBase(element) {
    _classCallCheck(this, Ui5InputBase);

    var _this11 = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

    _this11._picker = null;

    _initDefineProp(_this11, 'value', _descriptor167, _this11);

    _initDefineProp(_this11, 'width', _descriptor168, _this11);

    _initDefineProp(_this11, 'enabled', _descriptor169, _this11);

    _initDefineProp(_this11, 'valueState', _descriptor170, _this11);

    _initDefineProp(_this11, 'name', _descriptor171, _this11);

    _initDefineProp(_this11, 'placeholder', _descriptor172, _this11);

    _initDefineProp(_this11, 'editable', _descriptor173, _this11);

    _initDefineProp(_this11, 'valueStateText', _descriptor174, _this11);

    _initDefineProp(_this11, 'showValueStateMessage', _descriptor175, _this11);

    _initDefineProp(_this11, 'textAlign', _descriptor176, _this11);

    _initDefineProp(_this11, 'textDirection', _descriptor177, _this11);

    _initDefineProp(_this11, 'required', _descriptor178, _this11);

    _initDefineProp(_this11, 'change', _descriptor179, _this11);

    _this11.element = element;
    return _this11;
  }

  Ui5InputBase.prototype.defaultFunc = function defaultFunc() {};

  Ui5InputBase.prototype.attached = function attached() {
    _Ui5Control.prototype.attached.call(this);
  };

  Ui5InputBase.prototype.addChild = function addChild(child, elem) {
    _Ui5Control.prototype.addChild.call(this, child, elem);
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
}(Ui5Control), (_descriptor167 = _applyDecoratedDescriptor(_class104.prototype, 'value', [_dec240], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor168 = _applyDecoratedDescriptor(_class104.prototype, 'width', [_dec241], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor169 = _applyDecoratedDescriptor(_class104.prototype, 'enabled', [_dec242], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor170 = _applyDecoratedDescriptor(_class104.prototype, 'valueState', [_dec243], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor171 = _applyDecoratedDescriptor(_class104.prototype, 'name', [_dec244], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor172 = _applyDecoratedDescriptor(_class104.prototype, 'placeholder', [_dec245], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor173 = _applyDecoratedDescriptor(_class104.prototype, 'editable', [_dec246], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor174 = _applyDecoratedDescriptor(_class104.prototype, 'valueStateText', [_dec247], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor175 = _applyDecoratedDescriptor(_class104.prototype, 'showValueStateMessage', [_dec248], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor176 = _applyDecoratedDescriptor(_class104.prototype, 'textAlign', [_dec249], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor177 = _applyDecoratedDescriptor(_class104.prototype, 'textDirection', [_dec250], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor178 = _applyDecoratedDescriptor(_class104.prototype, 'required', [_dec251], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor179 = _applyDecoratedDescriptor(_class104.prototype, 'change', [_dec252], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class104)) || _class103) || _class103);
var Ui5Item = exports.Ui5Item = (_dec253 = (0, _aureliaTemplating.customElement)('ui5-item'), _dec254 = (0, _aureliaDependencyInjection.inject)(Element), _dec255 = (0, _aureliaTemplating.bindable)(), _dec256 = (0, _aureliaTemplating.bindable)(), _dec257 = (0, _aureliaTemplating.bindable)(), _dec258 = (0, _aureliaTemplating.bindable)(), _dec253(_class106 = _dec254(_class106 = (_class107 = function () {
  function Ui5Item(element) {
    _classCallCheck(this, Ui5Item);

    this._item = null;

    _initDefineProp(this, 'key', _descriptor180, this);

    _initDefineProp(this, 'enabled', _descriptor181, this);

    _initDefineProp(this, 'text', _descriptor182, this);

    _initDefineProp(this, 'textDirection', _descriptor183, this);

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
}(), (_descriptor180 = _applyDecoratedDescriptor(_class107.prototype, 'key', [_dec255], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor181 = _applyDecoratedDescriptor(_class107.prototype, 'enabled', [_dec256], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor182 = _applyDecoratedDescriptor(_class107.prototype, 'text', [_dec257], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor183 = _applyDecoratedDescriptor(_class107.prototype, 'textDirection', [_dec258], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class107)) || _class106) || _class106);
var Ui5Label = exports.Ui5Label = (_dec259 = (0, _aureliaTemplating.customElement)('ui5-label'), _dec260 = (0, _aureliaDependencyInjection.inject)(Element), _dec261 = (0, _aureliaTemplating.bindable)(), _dec262 = (0, _aureliaTemplating.bindable)(), _dec263 = (0, _aureliaTemplating.bindable)(), _dec264 = (0, _aureliaTemplating.bindable)(), _dec265 = (0, _aureliaTemplating.bindable)(), _dec266 = (0, _aureliaTemplating.bindable)(), _dec259(_class109 = _dec260(_class109 = (_class110 = function () {
  function Ui5Label(element) {
    _classCallCheck(this, Ui5Label);

    this._label = null;

    _initDefineProp(this, 'ui5Id', _descriptor184, this);

    _initDefineProp(this, 'labelFor', _descriptor185, this);

    _initDefineProp(this, 'text', _descriptor186, this);

    _initDefineProp(this, 'required', _descriptor187, this);

    _initDefineProp(this, 'textAlign', _descriptor188, this);

    _initDefineProp(this, 'textDirection', _descriptor189, this);

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
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._label, this.element);
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
}(), (_descriptor184 = _applyDecoratedDescriptor(_class110.prototype, 'ui5Id', [_dec261], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor185 = _applyDecoratedDescriptor(_class110.prototype, 'labelFor', [_dec262], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor186 = _applyDecoratedDescriptor(_class110.prototype, 'text', [_dec263], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor187 = _applyDecoratedDescriptor(_class110.prototype, 'required', [_dec264], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor188 = _applyDecoratedDescriptor(_class110.prototype, 'textAlign', [_dec265], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor189 = _applyDecoratedDescriptor(_class110.prototype, 'textDirection', [_dec266], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class110)) || _class109) || _class109);
var Ui5ListItem = exports.Ui5ListItem = (_dec267 = (0, _aureliaTemplating.customElement)('ui5-list-item'), _dec268 = (0, _aureliaDependencyInjection.inject)(Element), _dec269 = (0, _aureliaTemplating.bindable)(), _dec270 = (0, _aureliaTemplating.bindable)(), _dec271 = (0, _aureliaTemplating.bindable)(), _dec272 = (0, _aureliaTemplating.bindable)(), _dec273 = (0, _aureliaTemplating.bindable)(), _dec274 = (0, _aureliaTemplating.bindable)(), _dec267(_class112 = _dec268(_class112 = (_class113 = function () {
  function Ui5ListItem(element) {
    _classCallCheck(this, Ui5ListItem);

    this._item = null;

    _initDefineProp(this, 'icon', _descriptor190, this);

    _initDefineProp(this, 'additionalText', _descriptor191, this);

    _initDefineProp(this, 'key', _descriptor192, this);

    _initDefineProp(this, 'enabled', _descriptor193, this);

    _initDefineProp(this, 'text', _descriptor194, this);

    _initDefineProp(this, 'textDirection', _descriptor195, this);

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
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
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
}(), (_descriptor190 = _applyDecoratedDescriptor(_class113.prototype, 'icon', [_dec269], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor191 = _applyDecoratedDescriptor(_class113.prototype, 'additionalText', [_dec270], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor192 = _applyDecoratedDescriptor(_class113.prototype, 'key', [_dec271], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor193 = _applyDecoratedDescriptor(_class113.prototype, 'enabled', [_dec272], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor194 = _applyDecoratedDescriptor(_class113.prototype, 'text', [_dec273], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor195 = _applyDecoratedDescriptor(_class113.prototype, 'textDirection', [_dec274], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class113)) || _class112) || _class112);
var Ui5MessageStrip = exports.Ui5MessageStrip = (_dec275 = (0, _aureliaTemplating.customElement)('ui5-message-strip'), _dec276 = (0, _aureliaDependencyInjection.inject)(Element), _dec275(_class115 = _dec276(_class115 = (_class116 = function () {
  function Ui5MessageStrip(element) {
    _classCallCheck(this, Ui5MessageStrip);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor196, this);

    _initDefineProp(this, 'text', _descriptor197, this);

    _initDefineProp(this, 'wrapping', _descriptor198, this);

    _initDefineProp(this, 'textAlign', _descriptor199, this);

    _initDefineProp(this, 'maxLines', _descriptor200, this);

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
}(), (_descriptor196 = _applyDecoratedDescriptor(_class116.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor197 = _applyDecoratedDescriptor(_class116.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor198 = _applyDecoratedDescriptor(_class116.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor199 = _applyDecoratedDescriptor(_class116.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor200 = _applyDecoratedDescriptor(_class116.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class116)) || _class115) || _class115);
var Ui5MTitle = exports.Ui5MTitle = (_dec277 = (0, _aureliaTemplating.customElement)('ui5-m-title'), _dec278 = (0, _aureliaDependencyInjection.inject)(Element), _dec279 = (0, _aureliaTemplating.bindable)(), _dec280 = (0, _aureliaTemplating.bindable)(), _dec281 = (0, _aureliaTemplating.bindable)(), _dec282 = (0, _aureliaTemplating.bindable)(), _dec277(_class118 = _dec278(_class118 = (_class119 = function () {
  function Ui5MTitle(element) {
    _classCallCheck(this, Ui5MTitle);

    this._title = null;

    _initDefineProp(this, 'text', _descriptor201, this);

    _initDefineProp(this, 'icon', _descriptor202, this);

    _initDefineProp(this, 'level', _descriptor203, this);

    _initDefineProp(this, 'emphasized', _descriptor204, this);

    this.element = element;
  }

  Ui5MTitle.prototype.attached = function attached() {

    this._title = new sap.m.Title({
      text: this.text,
      icon: this.icon,
      emphasized: getBooleanFromAttributeValue(this.emphasized),
      level: this.level
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._title, this.element);
  };

  Ui5MTitle.prototype.textChanged = function textChanged(newValue) {
    if (this._title != null) {
      this._title.setText(newValue);
    }
  };

  Ui5MTitle.prototype.iconChanged = function iconChanged(newValue) {
    if (this._title != null) {
      this._title.setIcon(newValue);
    }
  };

  Ui5MTitle.prototype.levelChanged = function levelChanged(newValue) {
    if (this._title != null) {
      this._title.setLevel(newValue);
    }
  };

  Ui5MTitle.prototype.emphasizedChanged = function emphasizedChanged(newValue) {
    if (this._title != null) {
      this._title.setEmphasized(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5MTitle;
}(), (_descriptor201 = _applyDecoratedDescriptor(_class119.prototype, 'text', [_dec279], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor202 = _applyDecoratedDescriptor(_class119.prototype, 'icon', [_dec280], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor203 = _applyDecoratedDescriptor(_class119.prototype, 'level', [_dec281], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
}), _descriptor204 = _applyDecoratedDescriptor(_class119.prototype, 'emphasized', [_dec282], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class119)) || _class118) || _class118);
var Ui5Grid = exports.Ui5Grid = (_dec283 = (0, _aureliaTemplating.customElement)('ui5-grid'), _dec284 = (0, _aureliaDependencyInjection.inject)(Element), _dec285 = (0, _aureliaTemplating.bindable)(), _dec283(_class121 = _dec284(_class121 = (_class122 = function () {
  function Ui5Grid(element) {
    _classCallCheck(this, Ui5Grid);

    this._grid = null;

    _initDefineProp(this, 'defaultSpan', _descriptor205, this);

    this.element = element;
  }

  Ui5Grid.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._grid.addContent(child);
  };

  Ui5Grid.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'content') this._grid.removeContent(child);
  };

  Ui5Grid.prototype.defaultPress = function defaultPress() {};

  Ui5Grid.prototype.attached = function attached() {
    this._grid = new sap.ui.layout.Grid({
      defaultSpan: this.defaultSpan
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._grid, this.element);
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
}(), (_descriptor205 = _applyDecoratedDescriptor(_class122.prototype, 'defaultSpan', [_dec285], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class122)) || _class121) || _class121);
var MdModalTrigger = exports.MdModalTrigger = (_dec286 = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec287 = (0, _aureliaDependencyInjection.inject)(Element), _dec288 = (0, _aureliaTemplating.bindable)(), _dec286(_class124 = _dec287(_class124 = (_class125 = function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, MdModalTrigger);

    _initDefineProp(this, 'dismissible', _descriptor206, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
  }

  MdModalTrigger.prototype.attached = function attached() {
    this.attributeManager.addClasses('modal-trigger');
    $(this.element).leanModal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible)
    });
  };

  MdModalTrigger.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal-trigger');
  };

  MdModalTrigger.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  return MdModalTrigger;
}(), (_descriptor206 = _applyDecoratedDescriptor(_class125.prototype, 'dismissible', [_dec288], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class125)) || _class124) || _class124);
var MdModal = exports.MdModal = (_dec289 = (0, _aureliaTemplating.customAttribute)('md-modal'), _dec290 = (0, _aureliaDependencyInjection.inject)(Element), _dec291 = (0, _aureliaTemplating.bindable)(), _dec292 = (0, _aureliaTemplating.bindable)(), _dec293 = (0, _aureliaTemplating.bindable)(), _dec294 = (0, _aureliaTemplating.bindable)(), _dec295 = (0, _aureliaTemplating.bindable)(), _dec296 = (0, _aureliaTemplating.bindable)(), _dec289(_class127 = _dec290(_class127 = (_class128 = function () {
  function MdModal(element) {
    _classCallCheck(this, MdModal);

    _initDefineProp(this, 'dismissible', _descriptor207, this);

    _initDefineProp(this, 'opacity', _descriptor208, this);

    _initDefineProp(this, 'inDuration', _descriptor209, this);

    _initDefineProp(this, 'outDuration', _descriptor210, this);

    _initDefineProp(this, 'startingTop', _descriptor211, this);

    _initDefineProp(this, 'endingTop', _descriptor212, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
    this.onComplete = this.onComplete.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  MdModal.prototype.attached = function attached() {
    this.attributeManager.addClasses('modal');
    $(this.element).modal({
      complete: this.onComplete,
      dismissible: getBooleanFromAttributeValue(this.dismissible),
      endingTop: this.endingTop,
      inDuration: parseInt(this.inDuration, 10),
      opacity: parseFloat(this.opacity),
      outDuration: parseInt(this.outDuration, 10),
      ready: this.onReady,
      startingTop: this.startingTop
    });
  };

  MdModal.prototype.detached = function detached() {
    this.attributeManager.removeClasses('modal');
  };

  MdModal.prototype.onComplete = function onComplete() {
    fireMaterializeEvent(this.element, 'modal-complete');
  };

  MdModal.prototype.onReady = function onReady(modal, trigger) {
    fireMaterializeEvent(this.element, 'modal-ready', { modal: modal, trigger: trigger });
  };

  MdModal.prototype.open = function open() {
    $(this.element).modal('open');
  };

  MdModal.prototype.close = function close() {
    $(this.element).modal('close');
  };

  return MdModal;
}(), (_descriptor207 = _applyDecoratedDescriptor(_class128.prototype, 'dismissible', [_dec291], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor208 = _applyDecoratedDescriptor(_class128.prototype, 'opacity', [_dec292], {
  enumerable: true,
  initializer: function initializer() {
    return 0.5;
  }
}), _descriptor209 = _applyDecoratedDescriptor(_class128.prototype, 'inDuration', [_dec293], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor210 = _applyDecoratedDescriptor(_class128.prototype, 'outDuration', [_dec294], {
  enumerable: true,
  initializer: function initializer() {
    return 200;
  }
}), _descriptor211 = _applyDecoratedDescriptor(_class128.prototype, 'startingTop', [_dec295], {
  enumerable: true,
  initializer: function initializer() {
    return '4%';
  }
}), _descriptor212 = _applyDecoratedDescriptor(_class128.prototype, 'endingTop', [_dec296], {
  enumerable: true,
  initializer: function initializer() {
    return '10%';
  }
})), _class128)) || _class127) || _class127);
var MdNavbar = exports.MdNavbar = (_dec297 = (0, _aureliaTemplating.customElement)('md-navbar'), _dec298 = (0, _aureliaDependencyInjection.inject)(Element), _dec299 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec300 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec297(_class130 = _dec298(_class130 = (_class131 = function () {
  function MdNavbar(element) {
    _classCallCheck(this, MdNavbar);

    _initDefineProp(this, 'mdFixed', _descriptor213, this);

    _initDefineProp(this, 'mdAutoHeight', _descriptor214, this);

    this.element = element;
  }

  MdNavbar.prototype.attached = function attached() {
    this.fixedAttributeManager = new AttributeManager(this.fixedAnchor);
    this.navAttributeManager = new AttributeManager(this.nav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.addClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.addClasses('md-auto-height');
    }
  };

  MdNavbar.prototype.detached = function detached() {
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.fixedAttributeManager.removeClasses('navbar-fixed');
    }
    if (getBooleanFromAttributeValue(this.mdAutoHeight)) {
      this.navAttributeManager.addClasses('md-auto-height');
    }
  };

  return MdNavbar;
}(), (_descriptor213 = _applyDecoratedDescriptor(_class131.prototype, 'mdFixed', [_dec299], {
  enumerable: true,
  initializer: null
}), _descriptor214 = _applyDecoratedDescriptor(_class131.prototype, 'mdAutoHeight', [_dec300], {
  enumerable: true,
  initializer: null
})), _class131)) || _class130) || _class130);
var Ui5NumericContent = exports.Ui5NumericContent = (_dec301 = (0, _aureliaTemplating.customElement)('ui5-numeric-content'), _dec302 = (0, _aureliaDependencyInjection.inject)(Element), _dec303 = (0, _aureliaTemplating.bindable)(), _dec304 = (0, _aureliaTemplating.bindable)(), _dec305 = (0, _aureliaTemplating.bindable)(), _dec306 = (0, _aureliaTemplating.bindable)(), _dec307 = (0, _aureliaTemplating.bindable)(), _dec301(_class133 = _dec302(_class133 = (_class134 = function () {
  function Ui5NumericContent(element) {
    _classCallCheck(this, Ui5NumericContent);

    this._content = null;

    _initDefineProp(this, 'icon', _descriptor215, this);

    _initDefineProp(this, 'value', _descriptor216, this);

    _initDefineProp(this, 'indicator', _descriptor217, this);

    _initDefineProp(this, 'scale', _descriptor218, this);

    _initDefineProp(this, 'valueColor', _descriptor219, this);

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
}(), (_descriptor215 = _applyDecoratedDescriptor(_class134.prototype, 'icon', [_dec303], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor216 = _applyDecoratedDescriptor(_class134.prototype, 'value', [_dec304], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor217 = _applyDecoratedDescriptor(_class134.prototype, 'indicator', [_dec305], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor218 = _applyDecoratedDescriptor(_class134.prototype, 'scale', [_dec306], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor219 = _applyDecoratedDescriptor(_class134.prototype, 'valueColor', [_dec307], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class134)) || _class133) || _class133);
var Ui5ObjectNumber = exports.Ui5ObjectNumber = (_dec308 = (0, _aureliaTemplating.customElement)('ui5-object-number'), _dec309 = (0, _aureliaDependencyInjection.inject)(Element), _dec310 = (0, _aureliaTemplating.bindable)(), _dec311 = (0, _aureliaTemplating.bindable)(), _dec312 = (0, _aureliaTemplating.bindable)(), _dec313 = (0, _aureliaTemplating.bindable)(), _dec314 = (0, _aureliaTemplating.bindable)(), _dec315 = (0, _aureliaTemplating.bindable)(), _dec316 = (0, _aureliaTemplating.bindable)(), _dec308(_class136 = _dec309(_class136 = (_class137 = function () {
  function Ui5ObjectNumber(element) {
    _classCallCheck(this, Ui5ObjectNumber);

    this._number = null;

    _initDefineProp(this, 'ui5Id', _descriptor220, this);

    _initDefineProp(this, 'number', _descriptor221, this);

    _initDefineProp(this, 'numberUnit', _descriptor222, this);

    _initDefineProp(this, 'emphasized', _descriptor223, this);

    _initDefineProp(this, 'state', _descriptor224, this);

    _initDefineProp(this, 'unit', _descriptor225, this);

    _initDefineProp(this, 'textDirection', _descriptor226, this);

    _initDefineProp(this, 'textAlign', _descriptor227, this);

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
}(), (_descriptor220 = _applyDecoratedDescriptor(_class137.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor221 = _applyDecoratedDescriptor(_class137.prototype, 'number', [_dec310], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor222 = _applyDecoratedDescriptor(_class137.prototype, 'numberUnit', [_dec311], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor223 = _applyDecoratedDescriptor(_class137.prototype, 'emphasized', [_dec312], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor224 = _applyDecoratedDescriptor(_class137.prototype, 'state', [_dec313], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor225 = _applyDecoratedDescriptor(_class137.prototype, 'unit', [_dec314], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor226 = _applyDecoratedDescriptor(_class137.prototype, 'textDirection', [_dec315], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor227 = _applyDecoratedDescriptor(_class137.prototype, 'textAlign', [_dec316], {
  enumerable: true,
  initializer: function initializer() {
    return 'Begin';
  }
})), _class137)) || _class136) || _class136);
var Ui5ObjectIdentifier = exports.Ui5ObjectIdentifier = (_dec317 = (0, _aureliaTemplating.customElement)('ui5-object-identifier'), _dec318 = (0, _aureliaDependencyInjection.inject)(Element), _dec319 = (0, _aureliaTemplating.bindable)(), _dec320 = (0, _aureliaTemplating.bindable)(), _dec321 = (0, _aureliaTemplating.bindable)(), _dec322 = (0, _aureliaTemplating.bindable)(), _dec323 = (0, _aureliaTemplating.bindable)(), _dec317(_class139 = _dec318(_class139 = (_class140 = function () {
  function Ui5ObjectIdentifier(element) {
    _classCallCheck(this, Ui5ObjectIdentifier);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor228, this);

    _initDefineProp(this, 'text', _descriptor229, this);

    _initDefineProp(this, 'title', _descriptor230, this);

    _initDefineProp(this, 'visible', _descriptor231, this);

    _initDefineProp(this, 'titleActive', _descriptor232, this);

    _initDefineProp(this, 'textDirection', _descriptor233, this);

    _initDefineProp(this, 'titlePress', _descriptor234, this);

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
}(), (_descriptor228 = _applyDecoratedDescriptor(_class140.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor229 = _applyDecoratedDescriptor(_class140.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor230 = _applyDecoratedDescriptor(_class140.prototype, 'title', [_dec319], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor231 = _applyDecoratedDescriptor(_class140.prototype, 'visible', [_dec320], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor232 = _applyDecoratedDescriptor(_class140.prototype, 'titleActive', [_dec321], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor233 = _applyDecoratedDescriptor(_class140.prototype, 'textDirection', [_dec322], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor234 = _applyDecoratedDescriptor(_class140.prototype, 'titlePress', [_dec323], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class140)) || _class139) || _class139);
var Ui5OverflowToolbar = exports.Ui5OverflowToolbar = (_dec324 = (0, _aureliaTemplating.customElement)('ui5-overflow-toolbar'), _dec325 = (0, _aureliaDependencyInjection.inject)(Element), _dec326 = (0, _aureliaTemplating.bindable)(), _dec327 = (0, _aureliaTemplating.bindable)(), _dec328 = (0, _aureliaTemplating.bindable)(), _dec329 = (0, _aureliaTemplating.bindable)(), _dec330 = (0, _aureliaTemplating.bindable)(), _dec331 = (0, _aureliaTemplating.bindable)(), _dec324(_class142 = _dec325(_class142 = (_class143 = function () {
  function Ui5OverflowToolbar(element) {
    _classCallCheck(this, Ui5OverflowToolbar);

    this._bar = null;

    _initDefineProp(this, 'width', _descriptor235, this);

    _initDefineProp(this, 'active', _descriptor236, this);

    _initDefineProp(this, 'enabled', _descriptor237, this);

    _initDefineProp(this, 'height', _descriptor238, this);

    _initDefineProp(this, 'design', _descriptor239, this);

    _initDefineProp(this, 'press', _descriptor240, this);

    this.element = element;
  }

  Ui5OverflowToolbar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5OverflowToolbar.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'content') {
        this._bar.addContent(child);
        break;
      }
    }
  };

  Ui5OverflowToolbar.prototype.removeChild = function removeChild(child, elem) {
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
}(), (_descriptor235 = _applyDecoratedDescriptor(_class143.prototype, 'width', [_dec326], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor236 = _applyDecoratedDescriptor(_class143.prototype, 'active', [_dec327], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor237 = _applyDecoratedDescriptor(_class143.prototype, 'enabled', [_dec328], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor238 = _applyDecoratedDescriptor(_class143.prototype, 'height', [_dec329], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor239 = _applyDecoratedDescriptor(_class143.prototype, 'design', [_dec330], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor240 = _applyDecoratedDescriptor(_class143.prototype, 'press', [_dec331], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class143)) || _class142) || _class142);
var MdPagination = exports.MdPagination = (_dec332 = (0, _aureliaTemplating.customElement)('md-pagination'), _dec333 = (0, _aureliaDependencyInjection.inject)(Element), _dec334 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec335 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec336 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec337 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec338 = (0, _aureliaTemplating.bindable)(), _dec339 = (0, _aureliaTemplating.bindable)(), _dec340 = (0, _aureliaTemplating.bindable)(), _dec332(_class145 = _dec333(_class145 = (_class146 = function () {
  function MdPagination(element) {
    _classCallCheck(this, MdPagination);

    _initDefineProp(this, 'mdActivePage', _descriptor241, this);

    _initDefineProp(this, 'mdPages', _descriptor242, this);

    _initDefineProp(this, 'mdVisiblePageLinks', _descriptor243, this);

    _initDefineProp(this, 'mdPageLinks', _descriptor244, this);

    _initDefineProp(this, 'mdShowFirstLast', _descriptor245, this);

    _initDefineProp(this, 'mdShowPrevNext', _descriptor246, this);

    _initDefineProp(this, 'mdShowPageLinks', _descriptor247, this);

    this.numberOfLinks = 15;
    this.pages = 5;

    this.element = element;
  }

  MdPagination.prototype.bind = function bind() {
    this.pages = parseInt(this.mdPages, 10);

    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdShowFirstLast = getBooleanFromAttributeValue(this.mdShowFirstLast);
    this.mdShowPrevNext = getBooleanFromAttributeValue(this.mdShowPrevNext);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.setActivePage = function setActivePage(page) {
    this.mdActivePage = parseInt(page, 10);
    this.mdPageLinks = this.generatePageLinks();
    fireMaterializeEvent(this.element, 'page-changed', this.mdActivePage);
  };

  MdPagination.prototype.setFirstPage = function setFirstPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(1);
    }
  };

  MdPagination.prototype.setLastPage = function setLastPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.pages);
    }
  };

  MdPagination.prototype.setPreviousPage = function setPreviousPage() {
    if (this.mdActivePage > 1) {
      this.setActivePage(this.mdActivePage - 1);
    }
  };

  MdPagination.prototype.setNextPage = function setNextPage() {
    if (this.mdActivePage < this.pages) {
      this.setActivePage(this.mdActivePage + 1);
    }
  };

  MdPagination.prototype.mdPagesChanged = function mdPagesChanged() {
    this.pages = parseInt(this.mdPages, 10);
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.setActivePage(1);
  };

  MdPagination.prototype.mdVisiblePageLinksChanged = function mdVisiblePageLinksChanged() {
    this.numberOfLinks = Math.min(parseInt(this.mdVisiblePageLinks, 10), this.pages);
    this.mdPageLinks = this.generatePageLinks();
  };

  MdPagination.prototype.generatePageLinks = function generatePageLinks() {
    var midPoint = parseInt(this.numberOfLinks / 2, 10);
    var start = Math.max(this.mdActivePage - midPoint, 0);

    if (start + midPoint * 2 > this.pages) start = this.pages - midPoint * 2;
    var end = Math.min(start + this.numberOfLinks, this.pages);

    var list = [];
    for (var i = start; i < end; i++) {
      list.push(i);
    }

    return list;
  };

  return MdPagination;
}(), (_descriptor241 = _applyDecoratedDescriptor(_class146.prototype, 'mdActivePage', [_dec334], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor242 = _applyDecoratedDescriptor(_class146.prototype, 'mdPages', [_dec335], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor243 = _applyDecoratedDescriptor(_class146.prototype, 'mdVisiblePageLinks', [_dec336], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor244 = _applyDecoratedDescriptor(_class146.prototype, 'mdPageLinks', [_dec337], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor245 = _applyDecoratedDescriptor(_class146.prototype, 'mdShowFirstLast', [_dec338], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor246 = _applyDecoratedDescriptor(_class146.prototype, 'mdShowPrevNext', [_dec339], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor247 = _applyDecoratedDescriptor(_class146.prototype, 'mdShowPageLinks', [_dec340], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class146)) || _class145) || _class145);
var MdParallax = exports.MdParallax = (_dec341 = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec342 = (0, _aureliaDependencyInjection.inject)(Element), _dec341(_class148 = _dec342(_class148 = function () {
  function MdParallax(element) {
    _classCallCheck(this, MdParallax);

    this.element = element;
  }

  MdParallax.prototype.attached = function attached() {
    $(this.element).parallax();
  };

  MdParallax.prototype.detached = function detached() {};

  return MdParallax;
}()) || _class148) || _class148);
var MdProgress = exports.MdProgress = (_dec343 = (0, _aureliaTemplating.customElement)('md-progress'), _dec344 = (0, _aureliaDependencyInjection.inject)(Element), _dec345 = (0, _aureliaTemplating.bindable)(), _dec346 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec347 = (0, _aureliaTemplating.bindable)(), _dec348 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec349 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec343(_class149 = _dec344(_class149 = (_class150 = function () {
  function MdProgress(element) {
    _classCallCheck(this, MdProgress);

    _initDefineProp(this, 'mdColor', _descriptor248, this);

    _initDefineProp(this, 'mdPixelSize', _descriptor249, this);

    _initDefineProp(this, 'mdSize', _descriptor250, this);

    _initDefineProp(this, 'mdType', _descriptor251, this);

    _initDefineProp(this, 'mdValue', _descriptor252, this);

    this.element = element;
  }

  MdProgress.prototype.bind = function bind() {};

  MdProgress.prototype.attached = function attached() {
    this.mdPixelSizeChanged(this.mdPixelSize);
  };

  MdProgress.prototype.mdSizeChanged = function mdSizeChanged(newValue) {
    this.mdPixelSize = null;
  };

  MdProgress.prototype.mdPixelSizeChanged = function mdPixelSizeChanged(newValue) {
    if (this.wrapper) {
      newValue = newValue === null || newValue === '' || isNaN(newValue) ? '' : newValue + 'px';
      this.wrapper.style.height = newValue;
      this.wrapper.style.width = newValue;
    }
  };

  return MdProgress;
}(), (_descriptor248 = _applyDecoratedDescriptor(_class150.prototype, 'mdColor', [_dec345], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor249 = _applyDecoratedDescriptor(_class150.prototype, 'mdPixelSize', [_dec346], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor250 = _applyDecoratedDescriptor(_class150.prototype, 'mdSize', [_dec347], {
  enumerable: true,
  initializer: function initializer() {
    return 'big';
  }
}), _descriptor251 = _applyDecoratedDescriptor(_class150.prototype, 'mdType', [_dec348], {
  enumerable: true,
  initializer: function initializer() {
    return 'linear';
  }
}), _descriptor252 = _applyDecoratedDescriptor(_class150.prototype, 'mdValue', [_dec349], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class150)) || _class149) || _class149);
var MdPushpin = exports.MdPushpin = (_dec350 = (0, _aureliaTemplating.customAttribute)('md-pushpin'), _dec351 = (0, _aureliaDependencyInjection.inject)(Element), _dec352 = (0, _aureliaTemplating.bindable)(), _dec353 = (0, _aureliaTemplating.bindable)(), _dec354 = (0, _aureliaTemplating.bindable)(), _dec350(_class152 = _dec351(_class152 = (_class153 = function () {
  function MdPushpin(element) {
    _classCallCheck(this, MdPushpin);

    _initDefineProp(this, 'bottom', _descriptor253, this);

    _initDefineProp(this, 'offset', _descriptor254, this);

    _initDefineProp(this, 'top', _descriptor255, this);

    this.element = element;
  }

  MdPushpin.prototype.attached = function attached() {
    $(this.element).pushpin({
      bottom: this.bottom === Infinity ? Infinity : parseInt(this.bottom, 10),
      offset: parseInt(this.offset, 10),
      top: parseInt(this.top, 10)
    });
  };

  MdPushpin.prototype.detached = function detached() {};

  return MdPushpin;
}(), (_descriptor253 = _applyDecoratedDescriptor(_class153.prototype, 'bottom', [_dec352], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor254 = _applyDecoratedDescriptor(_class153.prototype, 'offset', [_dec353], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor255 = _applyDecoratedDescriptor(_class153.prototype, 'top', [_dec354], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class153)) || _class152) || _class152);
var MdRadio = exports.MdRadio = (_dec355 = (0, _aureliaTemplating.customElement)('md-radio'), _dec356 = (0, _aureliaDependencyInjection.inject)(Element), _dec357 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec358 = (0, _aureliaTemplating.bindable)(), _dec359 = (0, _aureliaTemplating.bindable)(), _dec360 = (0, _aureliaTemplating.bindable)(), _dec361 = (0, _aureliaTemplating.bindable)(), _dec362 = (0, _aureliaTemplating.bindable)(), _dec355(_class155 = _dec356(_class155 = (_class156 = (_temp4 = _class157 = function () {
  function MdRadio(element) {
    _classCallCheck(this, MdRadio);

    _initDefineProp(this, 'mdChecked', _descriptor256, this);

    _initDefineProp(this, 'mdDisabled', _descriptor257, this);

    _initDefineProp(this, 'mdGap', _descriptor258, this);

    _initDefineProp(this, 'mdModel', _descriptor259, this);

    _initDefineProp(this, 'mdName', _descriptor260, this);

    _initDefineProp(this, 'mdValue', _descriptor261, this);

    this.element = element;
    this.controlId = 'md-radio-' + MdRadio.id++;
  }

  MdRadio.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.radio);
    if (getBooleanFromAttributeValue(this.mdGap)) {
      this.attributeManager.addClasses('with-gap');
    }
    if (getBooleanFromAttributeValue(this.mdDisabled)) {
      this.radio.disabled = true;
    }
  };

  MdRadio.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['with-gap', 'disabled']);
  };

  MdRadio.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    if (this.radio) {
      this.radio.disabled = !!newValue;
    }
  };

  return MdRadio;
}(), _class157.id = 0, _temp4), (_descriptor256 = _applyDecoratedDescriptor(_class156.prototype, 'mdChecked', [_dec357], {
  enumerable: true,
  initializer: null
}), _descriptor257 = _applyDecoratedDescriptor(_class156.prototype, 'mdDisabled', [_dec358], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor258 = _applyDecoratedDescriptor(_class156.prototype, 'mdGap', [_dec359], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor259 = _applyDecoratedDescriptor(_class156.prototype, 'mdModel', [_dec360], {
  enumerable: true,
  initializer: null
}), _descriptor260 = _applyDecoratedDescriptor(_class156.prototype, 'mdName', [_dec361], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor261 = _applyDecoratedDescriptor(_class156.prototype, 'mdValue', [_dec362], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class156)) || _class155) || _class155);
var MdRange = exports.MdRange = (_dec363 = (0, _aureliaTemplating.customElement)('md-range'), _dec364 = (0, _aureliaDependencyInjection.inject)(Element), _dec365 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec366 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec367 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec368 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec363(_class158 = _dec364(_class158 = (_class159 = function MdRange(element) {
  _classCallCheck(this, MdRange);

  _initDefineProp(this, 'mdMin', _descriptor262, this);

  _initDefineProp(this, 'mdMax', _descriptor263, this);

  _initDefineProp(this, 'mdStep', _descriptor264, this);

  _initDefineProp(this, 'mdValue', _descriptor265, this);

  this.element = element;
  this.log = (0, _aureliaLogging.getLogger)('md-range');
}, (_descriptor262 = _applyDecoratedDescriptor(_class159.prototype, 'mdMin', [_dec365], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor263 = _applyDecoratedDescriptor(_class159.prototype, 'mdMax', [_dec366], {
  enumerable: true,
  initializer: function initializer() {
    return 100;
  }
}), _descriptor264 = _applyDecoratedDescriptor(_class159.prototype, 'mdStep', [_dec367], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor265 = _applyDecoratedDescriptor(_class159.prototype, 'mdValue', [_dec368], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class159)) || _class158) || _class158);
var Ui5Page = exports.Ui5Page = (_dec369 = (0, _aureliaTemplating.customElement)('ui5-page'), _dec370 = (0, _aureliaDependencyInjection.inject)(Element), _dec371 = (0, _aureliaTemplating.bindable)(), _dec372 = (0, _aureliaTemplating.bindable)(), _dec373 = (0, _aureliaTemplating.bindable)(), _dec374 = (0, _aureliaTemplating.bindable)(), _dec369(_class161 = _dec370(_class161 = (_class162 = function () {
  function Ui5Page(element) {
    _classCallCheck(this, Ui5Page);

    _initDefineProp(this, 'title', _descriptor266, this);

    _initDefineProp(this, 'showHeader', _descriptor267, this);

    _initDefineProp(this, 'showFooter', _descriptor268, this);

    _initDefineProp(this, 'showNavButton', _descriptor269, this);

    this._page = null;

    this.element = element;
  }

  Ui5Page.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'subheader') this._page.setSubHeader(child);
    if (path[0].localName == 'content') this._page.addContent(child);
    if (path[0].localName == 'footer') this._page.setFooter(child);
  };

  Ui5Page.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'subheader') this._page.setSubHeader(child);
    if (path[0].localName == 'content') this._page.removeContent(child);
    if (path[0].localName == 'footer') this._page.setFooter(child);
  };

  Ui5Page.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var page = new sap.m.Page({
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      showFooter: getBooleanFromAttributeValue(this.showFooter),
      showNavButton: getBooleanFromAttributeValue(this.showNavButton)
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
}(), (_descriptor266 = _applyDecoratedDescriptor(_class162.prototype, 'title', [_dec371], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor267 = _applyDecoratedDescriptor(_class162.prototype, 'showHeader', [_dec372], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor268 = _applyDecoratedDescriptor(_class162.prototype, 'showFooter', [_dec373], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor269 = _applyDecoratedDescriptor(_class162.prototype, 'showNavButton', [_dec374], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class162)) || _class161) || _class161);
var Ui5ResponsiveGridLayout = exports.Ui5ResponsiveGridLayout = (_dec375 = (0, _aureliaTemplating.customElement)('ui5-responsive-grid-layout'), _dec376 = (0, _aureliaDependencyInjection.inject)(Element), _dec377 = (0, _aureliaTemplating.bindable)(), _dec378 = (0, _aureliaTemplating.bindable)(), _dec379 = (0, _aureliaTemplating.bindable)(), _dec380 = (0, _aureliaTemplating.bindable)(), _dec381 = (0, _aureliaTemplating.bindable)(), _dec382 = (0, _aureliaTemplating.bindable)(), _dec383 = (0, _aureliaTemplating.bindable)(), _dec384 = (0, _aureliaTemplating.bindable)(), _dec385 = (0, _aureliaTemplating.bindable)(), _dec386 = (0, _aureliaTemplating.bindable)(), _dec387 = (0, _aureliaTemplating.bindable)(), _dec388 = (0, _aureliaTemplating.bindable)(), _dec389 = (0, _aureliaTemplating.bindable)(), _dec390 = (0, _aureliaTemplating.bindable)(), _dec375(_class164 = _dec376(_class164 = (_class165 = function () {
  function Ui5ResponsiveGridLayout(element) {
    _classCallCheck(this, Ui5ResponsiveGridLayout);

    _initDefineProp(this, 'ui5Id', _descriptor270, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor271, this);

    _initDefineProp(this, 'labelSpanL', _descriptor272, this);

    _initDefineProp(this, 'labelSpanM', _descriptor273, this);

    _initDefineProp(this, 'labelSpanS', _descriptor274, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor275, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor276, this);

    _initDefineProp(this, 'emptySpanL', _descriptor277, this);

    _initDefineProp(this, 'emptySpanM', _descriptor278, this);

    _initDefineProp(this, 'emptySpanS', _descriptor279, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor280, this);

    _initDefineProp(this, 'breakpointXL', _descriptor281, this);

    _initDefineProp(this, 'breakpointL', _descriptor282, this);

    _initDefineProp(this, 'breakpointM', _descriptor283, this);

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
}(), (_descriptor270 = _applyDecoratedDescriptor(_class165.prototype, 'ui5Id', [_dec377], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor271 = _applyDecoratedDescriptor(_class165.prototype, 'labelSpanXL', [_dec378], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor272 = _applyDecoratedDescriptor(_class165.prototype, 'labelSpanL', [_dec379], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor273 = _applyDecoratedDescriptor(_class165.prototype, 'labelSpanM', [_dec380], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor274 = _applyDecoratedDescriptor(_class165.prototype, 'labelSpanS', [_dec381], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor275 = _applyDecoratedDescriptor(_class165.prototype, 'adjustLabelSpan', [_dec382], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor276 = _applyDecoratedDescriptor(_class165.prototype, 'emptySpanXL', [_dec383], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor277 = _applyDecoratedDescriptor(_class165.prototype, 'emptySpanL', [_dec384], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor278 = _applyDecoratedDescriptor(_class165.prototype, 'emptySpanM', [_dec385], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor279 = _applyDecoratedDescriptor(_class165.prototype, 'emptySpanS', [_dec386], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor280 = _applyDecoratedDescriptor(_class165.prototype, 'singleContainerFullSize', [_dec387], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor281 = _applyDecoratedDescriptor(_class165.prototype, 'breakpointXL', [_dec388], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor282 = _applyDecoratedDescriptor(_class165.prototype, 'breakpointL', [_dec389], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor283 = _applyDecoratedDescriptor(_class165.prototype, 'breakpointM', [_dec390], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class165)) || _class164) || _class164);
var ScrollfirePatch = exports.ScrollfirePatch = (_temp5 = _class167 = function () {
  function ScrollfirePatch() {
    _classCallCheck(this, ScrollfirePatch);
  }

  ScrollfirePatch.prototype.patch = function patch() {
    if (!ScrollfirePatch.patched) {
      ScrollfirePatch.patched = true;

      window.Materialize.scrollFire = function (options) {
        var didScroll = false;
        window.addEventListener('scroll', function () {
          didScroll = true;
        });

        setInterval(function () {
          if (didScroll) {
            didScroll = false;

            var windowScroll = window.pageYOffset + window.innerHeight;
            for (var i = 0; i < options.length; i++) {
              var value = options[i];
              var selector = value.selector;
              var offset = value.offset;
              var callback = value.callback;

              var currentElement = document.querySelector(selector);
              if (currentElement !== null) {
                var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                if (windowScroll > elementOffset + offset) {
                  if (value.done !== true) {
                    if (typeof callback === 'string') {
                      var callbackFunc = new Function(callback);
                      callbackFunc();
                    } else if (typeof callback === 'function') {
                      callback();
                    }
                    value.done = true;
                  }
                }
              }
            }
          }
        }, 100);
      };
    }
  };

  return ScrollfirePatch;
}(), _class167.patched = false, _temp5);
var MdScrollfireTarget = exports.MdScrollfireTarget = (_dec391 = (0, _aureliaTemplating.customAttribute)('md-scrollfire-target'), _dec392 = (0, _aureliaDependencyInjection.inject)(Element), _dec393 = (0, _aureliaTemplating.bindable)(), _dec394 = (0, _aureliaTemplating.bindable)(), _dec391(_class168 = _dec392(_class168 = (_class169 = function MdScrollfireTarget(element) {
  _classCallCheck(this, MdScrollfireTarget);

  _initDefineProp(this, 'callback', _descriptor284, this);

  _initDefineProp(this, 'offset', _descriptor285, this);

  this.element = element;
}, (_descriptor284 = _applyDecoratedDescriptor(_class169.prototype, 'callback', [_dec393], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor285 = _applyDecoratedDescriptor(_class169.prototype, 'offset', [_dec394], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class169)) || _class168) || _class168);
var MdScrollfire = exports.MdScrollfire = (_dec395 = (0, _aureliaTemplating.customAttribute)('md-scrollfire'), _dec396 = (0, _aureliaDependencyInjection.inject)(Element), _dec395(_class171 = _dec396(_class171 = function () {
  function MdScrollfire(element) {
    _classCallCheck(this, MdScrollfire);

    this.targetId = 0;

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-scrollfire');
  }

  MdScrollfire.prototype.attached = function attached() {
    var targets = $('[md-scrollfire-target]', this.element);
    if (targets.length > 0) {
      this.log.debug('targets', targets);
      var self = this;
      var options = [];
      targets.each(function (i, el) {
        var target = $(el);
        if (!target.attr('id')) {
          target.attr('id', 'md-scrollfire-target-' + self.targetId++);
        }
        options.push({
          selector: '#' + target.attr('id'),
          callback: target.get(0).au['md-scrollfire-target'].viewModel.callback,
          offset: parseInt(target.get(0).au['md-scrollfire-target'].viewModel.offset, 10)
        });
      });
      if (options.length > 0) {
        this.log.debug('configuring scrollFire with these options:', options);
        Materialize.scrollFire(options);
      }
    }
  };

  return MdScrollfire;
}()) || _class171) || _class171);
var MdCollapsible = exports.MdCollapsible = (_dec397 = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec398 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec399 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec400 = (0, _aureliaTemplating.bindable)({ name: 'onOpen' }), _dec401 = (0, _aureliaTemplating.bindable)({ name: 'onClose' }), _dec402 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec397(_class173 = _dec398(_class173 = _dec399(_class173 = _dec400(_class173 = _dec401(_class173 = _dec402(_class173 = function () {
  function MdCollapsible(element, eventAggregator) {
    _classCallCheck(this, MdCollapsible);

    this.element = element;
    this.eventAggregator = eventAggregator;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCollapsible.prototype.attached = function attached() {
    this.attributeManager.addClasses('collapsible');
    if (getBooleanFromAttributeValue(this.popout)) {
      this.attributeManager.addClasses('popout');
    }
    this.refresh();
  };

  MdCollapsible.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['collapsible', 'popout']);
    this.attributeManager.removeAttributes(['data-collapsible']);
  };

  MdCollapsible.prototype.refresh = function refresh() {
    var accordion = getBooleanFromAttributeValue(this.accordion);
    var dataCollapsibleAttributeValue = accordion ? 'accordion' : 'expandable';

    this.attributeManager.addAttributes({ 'data-collapsible': dataCollapsibleAttributeValue });

    $(this.element).collapsible({
      accordion: accordion,
      onOpen: this.buildCollapsibleOpenCloseCallbackHandler(this.onOpen),
      onClose: this.buildCollapsibleOpenCloseCallbackHandler(this.onClose)
    });
  };

  MdCollapsible.prototype.accordionChanged = function accordionChanged() {
    this.refresh();
  };

  MdCollapsible.prototype.buildCollapsibleOpenCloseCallbackHandler = function buildCollapsibleOpenCloseCallbackHandler(handler) {
    return typeof handler === 'function' ? function (targetElementJquery) {
      var targetElement = targetElementJquery[0];

      handler(targetElement);
    } : null;
  };

  return MdCollapsible;
}()) || _class173) || _class173) || _class173) || _class173) || _class173) || _class173);
var MdScrollSpy = exports.MdScrollSpy = (_dec403 = (0, _aureliaTemplating.customAttribute)('md-scrollspy'), _dec404 = (0, _aureliaDependencyInjection.inject)(Element), _dec405 = (0, _aureliaTemplating.bindable)(), _dec403(_class174 = _dec404(_class174 = (_class175 = function () {
  function MdScrollSpy(element) {
    _classCallCheck(this, MdScrollSpy);

    _initDefineProp(this, 'target', _descriptor286, this);

    this.element = element;
  }

  MdScrollSpy.prototype.attached = function attached() {
    $(this.target, this.element).scrollSpy();
  };

  MdScrollSpy.prototype.detached = function detached() {};

  return MdScrollSpy;
}(), (_descriptor286 = _applyDecoratedDescriptor(_class175.prototype, 'target', [_dec405], {
  enumerable: true,
  initializer: null
})), _class175)) || _class174) || _class174);

function shadeBlendConvert(p, from, to) {
  if (typeof p != "number" || p < -1 || p > 1 || typeof from != "string" || from[0] != 'r' && from[0] != '#' || typeof to != "string" && typeof to != "undefined") return null;
  var sbcRip = function sbcRip(d) {
    var l = d.length,
        RGB = new Object();
    if (l > 9) {
      d = d.split(",");
      if (d.length < 3 || d.length > 4) return null;
      RGB[0] = i(d[0].slice(4)), RGB[1] = i(d[1]), RGB[2] = i(d[2]), RGB[3] = d[3] ? parseFloat(d[3]) : -1;
    } else {
      switch (l) {case 8:case 6:case 3:case 2:case 1:
          return null;}
      if (l < 6) d = "#" + d[1] + d[1] + d[2] + d[2] + d[3] + d[3] + (l > 4 ? d[4] + "" + d[4] : "");
      d = i(d.slice(1), 16), RGB[0] = d >> 16 & 255, RGB[1] = d >> 8 & 255, RGB[2] = d & 255, RGB[3] = l == 9 || l == 5 ? r((d >> 24 & 255) / 255 * 10000) / 10000 : -1;
    }
    return RGB;
  };
  var i = parseInt,
      r = Math.round,
      h = from.length > 9,
      h = typeof to == "string" ? to.length > 9 ? true : to == "c" ? !h : false : h,
      b = p < 0,
      p = b ? p * -1 : p,
      to = to && to != "c" ? to : b ? "#000000" : "#FFFFFF",
      f = sbcRip(from),
      t = sbcRip(to);
  if (!f || !t) return null;
  if (h) return "rgb(" + r((t[0] - f[0]) * p + f[0]) + "," + r((t[1] - f[1]) * p + f[1]) + "," + r((t[2] - f[2]) * p + f[2]) + (f[3] < 0 && t[3] < 0 ? ")" : "," + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000 : t[3] < 0 ? f[3] : t[3]) + ")");else return "#" + (0x100000000 + (f[3] > -1 && t[3] > -1 ? r(((t[3] - f[3]) * p + f[3]) * 255) : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) * 0x1000000 + r((t[0] - f[0]) * p + f[0]) * 0x10000 + r((t[1] - f[1]) * p + f[1]) * 0x100 + r((t[2] - f[2]) * p + f[2])).toString(16).slice(f[3] > -1 || t[3] > -1 ? 1 : 3);
}

var DarkenValueConverter = exports.DarkenValueConverter = function () {
  function DarkenValueConverter() {
    _classCallCheck(this, DarkenValueConverter);
  }

  DarkenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(-0.3 * parseFloat(steps, 10), value);
  };

  return DarkenValueConverter;
}();

var LightenValueConverter = exports.LightenValueConverter = function () {
  function LightenValueConverter() {
    _classCallCheck(this, LightenValueConverter);
  }

  LightenValueConverter.prototype.toView = function toView(value, steps) {
    return shadeBlendConvert(0.3 * parseFloat(steps, 10), value);
  };

  return LightenValueConverter;
}();

var MdColors = exports.MdColors = (_dec406 = (0, _aureliaTemplating.bindable)(), _dec407 = (0, _aureliaTemplating.bindable)(), _dec408 = (0, _aureliaTemplating.bindable)(), _dec409 = (0, _aureliaTemplating.bindable)(), (_class177 = function MdColors() {
  _classCallCheck(this, MdColors);

  _initDefineProp(this, 'mdPrimaryColor', _descriptor287, this);

  _initDefineProp(this, 'mdAccentColor', _descriptor288, this);

  _initDefineProp(this, 'mdErrorColor', _descriptor289, this);

  _initDefineProp(this, 'mdSuccessColor', _descriptor290, this);
}, (_descriptor287 = _applyDecoratedDescriptor(_class177.prototype, 'mdPrimaryColor', [_dec406], {
  enumerable: true,
  initializer: null
}), _descriptor288 = _applyDecoratedDescriptor(_class177.prototype, 'mdAccentColor', [_dec407], {
  enumerable: true,
  initializer: null
}), _descriptor289 = _applyDecoratedDescriptor(_class177.prototype, 'mdErrorColor', [_dec408], {
  enumerable: true,
  initializer: function initializer() {
    return '#F44336';
  }
}), _descriptor290 = _applyDecoratedDescriptor(_class177.prototype, 'mdSuccessColor', [_dec409], {
  enumerable: true,
  initializer: null
})), _class177));
var Ui5Select = exports.Ui5Select = (_dec410 = (0, _aureliaTemplating.customElement)('ui5-select'), _dec411 = (0, _aureliaDependencyInjection.inject)(Element), _dec412 = (0, _aureliaTemplating.bindable)(), _dec413 = (0, _aureliaTemplating.bindable)(), _dec414 = (0, _aureliaTemplating.bindable)(), _dec415 = (0, _aureliaTemplating.bindable)(), _dec416 = (0, _aureliaTemplating.bindable)(), _dec417 = (0, _aureliaTemplating.bindable)(), _dec418 = (0, _aureliaTemplating.bindable)(), _dec419 = (0, _aureliaTemplating.bindable)(), _dec420 = (0, _aureliaTemplating.bindable)(), _dec421 = (0, _aureliaTemplating.bindable)(), _dec422 = (0, _aureliaTemplating.bindable)(), _dec423 = (0, _aureliaTemplating.bindable)(), _dec424 = (0, _aureliaTemplating.bindable)(), _dec425 = (0, _aureliaTemplating.bindable)(), _dec426 = (0, _aureliaTemplating.bindable)(), _dec427 = (0, _aureliaTemplating.bindable)(), _dec428 = (0, _aureliaTemplating.bindable)(), _dec410(_class179 = _dec411(_class179 = (_class180 = function () {
  Ui5Select.prototype.addChild = function addChild(child, elem) {
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

    _initDefineProp(this, 'ui5Id', _descriptor291, this);

    _initDefineProp(this, 'name', _descriptor292, this);

    _initDefineProp(this, 'width', _descriptor293, this);

    _initDefineProp(this, 'maxWidth', _descriptor294, this);

    _initDefineProp(this, 'enabled', _descriptor295, this);

    _initDefineProp(this, 'selectedKey', _descriptor296, this);

    _initDefineProp(this, 'selectedItemId', _descriptor297, this);

    _initDefineProp(this, 'icon', _descriptor298, this);

    _initDefineProp(this, 'type', _descriptor299, this);

    _initDefineProp(this, 'autoAdjustWidth', _descriptor300, this);

    _initDefineProp(this, 'valueState', _descriptor301, this);

    _initDefineProp(this, 'valueStateText', _descriptor302, this);

    _initDefineProp(this, 'showSecondaryValues', _descriptor303, this);

    _initDefineProp(this, 'forceSelection', _descriptor304, this);

    _initDefineProp(this, 'items', _descriptor305, this);

    _initDefineProp(this, 'selectedItem', _descriptor306, this);

    _initDefineProp(this, 'change', _descriptor307, this);

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
}(), (_descriptor291 = _applyDecoratedDescriptor(_class180.prototype, 'ui5Id', [_dec412], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor292 = _applyDecoratedDescriptor(_class180.prototype, 'name', [_dec413], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor293 = _applyDecoratedDescriptor(_class180.prototype, 'width', [_dec414], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor294 = _applyDecoratedDescriptor(_class180.prototype, 'maxWidth', [_dec415], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor295 = _applyDecoratedDescriptor(_class180.prototype, 'enabled', [_dec416], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor296 = _applyDecoratedDescriptor(_class180.prototype, 'selectedKey', [_dec417], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor297 = _applyDecoratedDescriptor(_class180.prototype, 'selectedItemId', [_dec418], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor298 = _applyDecoratedDescriptor(_class180.prototype, 'icon', [_dec419], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor299 = _applyDecoratedDescriptor(_class180.prototype, 'type', [_dec420], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor300 = _applyDecoratedDescriptor(_class180.prototype, 'autoAdjustWidth', [_dec421], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor301 = _applyDecoratedDescriptor(_class180.prototype, 'valueState', [_dec422], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor302 = _applyDecoratedDescriptor(_class180.prototype, 'valueStateText', [_dec423], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor303 = _applyDecoratedDescriptor(_class180.prototype, 'showSecondaryValues', [_dec424], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor304 = _applyDecoratedDescriptor(_class180.prototype, 'forceSelection', [_dec425], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor305 = _applyDecoratedDescriptor(_class180.prototype, 'items', [_dec426], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor306 = _applyDecoratedDescriptor(_class180.prototype, 'selectedItem', [_dec427], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor307 = _applyDecoratedDescriptor(_class180.prototype, 'change', [_dec428], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class180)) || _class179) || _class179);
var Ui5Shell = exports.Ui5Shell = (_dec429 = (0, _aureliaTemplating.customElement)('ui5-shell'), _dec430 = (0, _aureliaDependencyInjection.inject)(Element), _dec431 = (0, _aureliaTemplating.bindable)(), _dec432 = (0, _aureliaTemplating.bindable)(), _dec429(_class182 = _dec430(_class182 = (_class183 = function () {
  function Ui5Shell(element) {
    _classCallCheck(this, Ui5Shell);

    _initDefineProp(this, 'title', _descriptor308, this);

    _initDefineProp(this, 'appWidthLimited', _descriptor309, this);

    this._shell = null;

    this.element = element;
  }

  Ui5Shell.prototype.addChild = function addChild(child, elem) {
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
}(), (_descriptor308 = _applyDecoratedDescriptor(_class183.prototype, 'title', [_dec431], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor309 = _applyDecoratedDescriptor(_class183.prototype, 'appWidthLimited', [_dec432], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class183)) || _class182) || _class182);
var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec433 = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec434 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.ObserverLocator), _dec435 = (0, _aureliaTemplating.bindable)(), _dec433(_class185 = _dec434(_class185 = (_class186 = function () {
  function MdSidenavCollapse(element, observerLocator) {
    _classCallCheck(this, MdSidenavCollapse);

    _initDefineProp(this, 'ref', _descriptor310, this);

    this.element = element;
    this.observerLocator = observerLocator;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this12 = this;

    this.ref.whenAttached.then(function () {

      var closeOnClick = _this12.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(_this12.ref.mdCloseOnClick);

      _this12.element.setAttribute('data-activates', _this12.ref.controlId);
      var sideNavConfig = {
        edge: _this12.ref.mdEdge || 'left',

        closeOnClick: closeOnClick,
        menuWidth: parseInt(_this12.ref.mdWidth, 10)
      };

      $(_this12.element).sideNav(sideNavConfig);
    });
  };

  MdSidenavCollapse.prototype.detached = function detached() {};

  MdSidenavCollapse.prototype.show = function show() {
    $(this.element).sideNav('show');
  };

  MdSidenavCollapse.prototype.hide = function hide() {
    $(this.element).sideNav('hide');
  };

  return MdSidenavCollapse;
}(), (_descriptor310 = _applyDecoratedDescriptor(_class186.prototype, 'ref', [_dec435], {
  enumerable: true,
  initializer: null
})), _class186)) || _class185) || _class185);
var MdSidenav = exports.MdSidenav = (_dec436 = (0, _aureliaTemplating.customElement)('md-sidenav'), _dec437 = (0, _aureliaDependencyInjection.inject)(Element), _dec438 = (0, _aureliaTemplating.bindable)(), _dec439 = (0, _aureliaTemplating.bindable)(), _dec440 = (0, _aureliaTemplating.bindable)(), _dec441 = (0, _aureliaTemplating.bindable)(), _dec436(_class188 = _dec437(_class188 = (_class189 = (_temp6 = _class190 = function () {
  function MdSidenav(element) {
    var _this13 = this;

    _classCallCheck(this, MdSidenav);

    _initDefineProp(this, 'mdCloseOnClick', _descriptor311, this);

    _initDefineProp(this, 'mdEdge', _descriptor312, this);

    _initDefineProp(this, 'mdFixed', _descriptor313, this);

    _initDefineProp(this, 'mdWidth', _descriptor314, this);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav');
    this.whenAttached = new Promise(function (resolve, reject) {
      _this13.attachedResolver = resolve;
    });
  }

  MdSidenav.prototype.attached = function attached() {
    this.attributeManager = new AttributeManager(this.sidenav);
    if (getBooleanFromAttributeValue(this.mdFixed)) {
      this.attributeManager.addClasses('fixed');
      if (this.mdEdge === 'right') {
        this.attributeManager.addClasses('right-aligned');
      }
    }

    this.attachedResolver();
  };

  MdSidenav.prototype.detached = function detached() {
    this.attributeManager.removeClasses(['fixed', 'right-aligned']);
  };

  MdSidenav.prototype.mdFixedChanged = function mdFixedChanged(newValue) {
    if (this.attributeManager) {
      if (getBooleanFromAttributeValue(newValue)) {
        this.attributeManager.addClasses('fixed');
      } else {
        this.attributeManager.removeClasses('fixed');
      }
    }
  };

  return MdSidenav;
}(), _class190.id = 0, _temp6), (_descriptor311 = _applyDecoratedDescriptor(_class189.prototype, 'mdCloseOnClick', [_dec438], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor312 = _applyDecoratedDescriptor(_class189.prototype, 'mdEdge', [_dec439], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor313 = _applyDecoratedDescriptor(_class189.prototype, 'mdFixed', [_dec440], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor314 = _applyDecoratedDescriptor(_class189.prototype, 'mdWidth', [_dec441], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
})), _class189)) || _class188) || _class188);
var Ui5SimpleForm = exports.Ui5SimpleForm = (_dec442 = (0, _aureliaTemplating.customElement)('ui5-simple-form'), _dec443 = (0, _aureliaDependencyInjection.inject)(Element), _dec444 = (0, _aureliaTemplating.bindable)(), _dec445 = (0, _aureliaTemplating.bindable)(), _dec446 = (0, _aureliaTemplating.bindable)(), _dec447 = (0, _aureliaTemplating.bindable)(), _dec448 = (0, _aureliaTemplating.bindable)(), _dec449 = (0, _aureliaTemplating.bindable)(), _dec450 = (0, _aureliaTemplating.bindable)(), _dec451 = (0, _aureliaTemplating.bindable)(), _dec452 = (0, _aureliaTemplating.bindable)(), _dec453 = (0, _aureliaTemplating.bindable)(), _dec454 = (0, _aureliaTemplating.bindable)(), _dec455 = (0, _aureliaTemplating.bindable)(), _dec456 = (0, _aureliaTemplating.bindable)(), _dec457 = (0, _aureliaTemplating.bindable)(), _dec458 = (0, _aureliaTemplating.bindable)(), _dec459 = (0, _aureliaTemplating.bindable)(), _dec460 = (0, _aureliaTemplating.bindable)(), _dec461 = (0, _aureliaTemplating.bindable)(), _dec462 = (0, _aureliaTemplating.bindable)(), _dec463 = (0, _aureliaTemplating.bindable)(), _dec464 = (0, _aureliaTemplating.bindable)(), _dec465 = (0, _aureliaTemplating.bindable)(), _dec442(_class191 = _dec443(_class191 = (_class192 = function () {
  function Ui5SimpleForm(element) {
    _classCallCheck(this, Ui5SimpleForm);

    _initDefineProp(this, 'ui5Id', _descriptor315, this);

    _initDefineProp(this, 'title', _descriptor316, this);

    _initDefineProp(this, 'maxContainerCols', _descriptor317, this);

    _initDefineProp(this, 'minWidth', _descriptor318, this);

    _initDefineProp(this, 'width', _descriptor319, this);

    _initDefineProp(this, 'editable', _descriptor320, this);

    _initDefineProp(this, 'labelMinWidth', _descriptor321, this);

    _initDefineProp(this, 'layout', _descriptor322, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor323, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor324, this);

    _initDefineProp(this, 'labelSpanL', _descriptor325, this);

    _initDefineProp(this, 'labelSpanM', _descriptor326, this);

    _initDefineProp(this, 'labelSpanS', _descriptor327, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor328, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor329, this);

    _initDefineProp(this, 'emptySpanL', _descriptor330, this);

    _initDefineProp(this, 'emptySpanM', _descriptor331, this);

    _initDefineProp(this, 'emptySpanS', _descriptor332, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor333, this);

    _initDefineProp(this, 'breakpointXL', _descriptor334, this);

    _initDefineProp(this, 'breakpointL', _descriptor335, this);

    _initDefineProp(this, 'breakpointM', _descriptor336, this);

    this._form = null;

    this.element = element;
  }

  Ui5SimpleForm.prototype.addChild = function addChild(child, elem) {
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
}(), (_descriptor315 = _applyDecoratedDescriptor(_class192.prototype, 'ui5Id', [_dec444], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor316 = _applyDecoratedDescriptor(_class192.prototype, 'title', [_dec445], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor317 = _applyDecoratedDescriptor(_class192.prototype, 'maxContainerCols', [_dec446], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor318 = _applyDecoratedDescriptor(_class192.prototype, 'minWidth', [_dec447], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor319 = _applyDecoratedDescriptor(_class192.prototype, 'width', [_dec448], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor320 = _applyDecoratedDescriptor(_class192.prototype, 'editable', [_dec449], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor321 = _applyDecoratedDescriptor(_class192.prototype, 'labelMinWidth', [_dec450], {
  enumerable: true,
  initializer: function initializer() {
    return 192;
  }
}), _descriptor322 = _applyDecoratedDescriptor(_class192.prototype, 'layout', [_dec451], {
  enumerable: true,
  initializer: function initializer() {
    return 'ResponsiveLayout';
  }
}), _descriptor323 = _applyDecoratedDescriptor(_class192.prototype, 'backgroundDesign', [_dec452], {
  enumerable: true,
  initializer: function initializer() {
    return 'Translucent';
  }
}), _descriptor324 = _applyDecoratedDescriptor(_class192.prototype, 'labelSpanXL', [_dec453], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor325 = _applyDecoratedDescriptor(_class192.prototype, 'labelSpanL', [_dec454], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor326 = _applyDecoratedDescriptor(_class192.prototype, 'labelSpanM', [_dec455], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor327 = _applyDecoratedDescriptor(_class192.prototype, 'labelSpanS', [_dec456], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor328 = _applyDecoratedDescriptor(_class192.prototype, 'adjustLabelSpan', [_dec457], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor329 = _applyDecoratedDescriptor(_class192.prototype, 'emptySpanXL', [_dec458], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor330 = _applyDecoratedDescriptor(_class192.prototype, 'emptySpanL', [_dec459], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor331 = _applyDecoratedDescriptor(_class192.prototype, 'emptySpanM', [_dec460], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor332 = _applyDecoratedDescriptor(_class192.prototype, 'emptySpanS', [_dec461], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor333 = _applyDecoratedDescriptor(_class192.prototype, 'singleContainerFullSize', [_dec462], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor334 = _applyDecoratedDescriptor(_class192.prototype, 'breakpointXL', [_dec463], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor335 = _applyDecoratedDescriptor(_class192.prototype, 'breakpointL', [_dec464], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor336 = _applyDecoratedDescriptor(_class192.prototype, 'breakpointM', [_dec465], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class192)) || _class191) || _class191);
var MdSlider = exports.MdSlider = (_dec466 = (0, _aureliaTemplating.customElement)('md-slider'), _dec467 = (0, _aureliaDependencyInjection.inject)(Element), _dec468 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <slot></slot>\n  </ul>\n  </template>\n'), _dec469 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec470 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec471 = (0, _aureliaTemplating.bindable)(), _dec472 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec473 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec466(_class194 = _dec467(_class194 = _dec468(_class194 = (_class195 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor337, this);

    _initDefineProp(this, 'mdHeight', _descriptor338, this);

    _initDefineProp(this, 'mdIndicators', _descriptor339, this);

    _initDefineProp(this, 'mdInterval', _descriptor340, this);

    _initDefineProp(this, 'mdTransition', _descriptor341, this);

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
}(), (_descriptor337 = _applyDecoratedDescriptor(_class195.prototype, 'mdFillContainer', [_dec469], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor338 = _applyDecoratedDescriptor(_class195.prototype, 'mdHeight', [_dec470], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor339 = _applyDecoratedDescriptor(_class195.prototype, 'mdIndicators', [_dec471], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor340 = _applyDecoratedDescriptor(_class195.prototype, 'mdInterval', [_dec472], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor341 = _applyDecoratedDescriptor(_class195.prototype, 'mdTransition', [_dec473], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class195)) || _class194) || _class194) || _class194);
var MdSwitch = exports.MdSwitch = (_dec474 = (0, _aureliaTemplating.customElement)('md-switch'), _dec475 = (0, _aureliaDependencyInjection.inject)(Element), _dec476 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec477 = (0, _aureliaTemplating.bindable)(), _dec478 = (0, _aureliaTemplating.bindable)(), _dec479 = (0, _aureliaTemplating.bindable)(), _dec474(_class197 = _dec475(_class197 = (_class198 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor342, this);

    _initDefineProp(this, 'mdDisabled', _descriptor343, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor344, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor345, this);

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
}(), (_descriptor342 = _applyDecoratedDescriptor(_class198.prototype, 'mdChecked', [_dec476], {
  enumerable: true,
  initializer: null
}), _descriptor343 = _applyDecoratedDescriptor(_class198.prototype, 'mdDisabled', [_dec477], {
  enumerable: true,
  initializer: null
}), _descriptor344 = _applyDecoratedDescriptor(_class198.prototype, 'mdLabelOff', [_dec478], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor345 = _applyDecoratedDescriptor(_class198.prototype, 'mdLabelOn', [_dec479], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class198)) || _class197) || _class197);
var Ui5TabContainer = exports.Ui5TabContainer = (_dec480 = (0, _aureliaTemplating.customElement)('ui5-tab-container'), _dec481 = (0, _aureliaDependencyInjection.inject)(Element), _dec482 = (0, _aureliaTemplating.bindable)(), _dec483 = (0, _aureliaTemplating.bindable)(), _dec484 = (0, _aureliaTemplating.bindable)(), _dec485 = (0, _aureliaTemplating.bindable)(), _dec486 = (0, _aureliaTemplating.bindable)(), _dec480(_class200 = _dec481(_class200 = (_class201 = function () {
  function Ui5TabContainer(element) {
    _classCallCheck(this, Ui5TabContainer);

    _initDefineProp(this, 'showAddNewButton', _descriptor346, this);

    _initDefineProp(this, 'selectedItem', _descriptor347, this);

    _initDefineProp(this, 'itemClose', _descriptor348, this);

    _initDefineProp(this, 'itemSelect', _descriptor349, this);

    _initDefineProp(this, 'addNewButtonPress', _descriptor350, this);

    this._tab = null;

    this.element = element;
  }

  Ui5TabContainer.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TabContainer.prototype.addChild = function addChild(child, elem) {
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
        this._tab.addItem(child);
        break;
      }
    }
  };

  Ui5TabContainer.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator17 = path, _isArray17 = Array.isArray(_iterator17), _i17 = 0, _iterator17 = _isArray17 ? _iterator17 : _iterator17[Symbol.iterator]();;) {
      if (_isArray17) {
        if (_i17 >= _iterator17.length) break;
        elem = _iterator17[_i17++];
      } else {
        _i17 = _iterator17.next();
        if (_i17.done) break;
        elem = _i17.value;
      }

      if (elem.localName == 'content') {
        this._tab.removeItem(child);
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
}(), (_descriptor346 = _applyDecoratedDescriptor(_class201.prototype, 'showAddNewButton', [_dec482], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor347 = _applyDecoratedDescriptor(_class201.prototype, 'selectedItem', [_dec483], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor348 = _applyDecoratedDescriptor(_class201.prototype, 'itemClose', [_dec484], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor349 = _applyDecoratedDescriptor(_class201.prototype, 'itemSelect', [_dec485], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor350 = _applyDecoratedDescriptor(_class201.prototype, 'addNewButtonPress', [_dec486], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class201)) || _class200) || _class200);
var Ui5TabContainerItem = exports.Ui5TabContainerItem = (_dec487 = (0, _aureliaTemplating.customElement)('ui5-tab-container-item'), _dec488 = (0, _aureliaDependencyInjection.inject)(Element), _dec489 = (0, _aureliaTemplating.bindable)(), _dec490 = (0, _aureliaTemplating.bindable)(), _dec491 = (0, _aureliaTemplating.bindable)(), _dec492 = (0, _aureliaTemplating.bindable)(), _dec487(_class203 = _dec488(_class203 = (_class204 = function () {
  function Ui5TabContainerItem(element) {
    _classCallCheck(this, Ui5TabContainerItem);

    _initDefineProp(this, 'name', _descriptor351, this);

    _initDefineProp(this, 'key', _descriptor352, this);

    _initDefineProp(this, 'modified', _descriptor353, this);

    _initDefineProp(this, 'itemPropertyChanged', _descriptor354, this);

    this._tab = null;

    this.element = element;
  }

  Ui5TabContainerItem.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TabContainerItem.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator18 = path, _isArray18 = Array.isArray(_iterator18), _i18 = 0, _iterator18 = _isArray18 ? _iterator18 : _iterator18[Symbol.iterator]();;) {
      if (_isArray18) {
        if (_i18 >= _iterator18.length) break;
        elem = _iterator18[_i18++];
      } else {
        _i18 = _iterator18.next();
        if (_i18.done) break;
        elem = _i18.value;
      }

      if (elem.localName == 'content') {
        this._tab.addContent(child);
        break;
      }
    }
  };

  Ui5TabContainerItem.prototype.removeChild = function removeChild(child, elem) {
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

  return Ui5TabContainerItem;
}(), (_descriptor351 = _applyDecoratedDescriptor(_class204.prototype, 'name', [_dec489], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor352 = _applyDecoratedDescriptor(_class204.prototype, 'key', [_dec490], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor353 = _applyDecoratedDescriptor(_class204.prototype, 'modified', [_dec491], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor354 = _applyDecoratedDescriptor(_class204.prototype, 'itemPropertyChanged', [_dec492], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class204)) || _class203) || _class203);
var Ui5Table = exports.Ui5Table = (_dec493 = (0, _aureliaTemplating.customElement)('ui5-table'), _dec494 = (0, _aureliaDependencyInjection.inject)(Element), _dec495 = (0, _aureliaTemplating.bindable)(), _dec493(_class206 = _dec494(_class206 = (_class207 = function () {
  function Ui5Table(element) {
    _classCallCheck(this, Ui5Table);

    _initDefineProp(this, 'headerText', _descriptor355, this);

    this._table = null;

    this.element = element;
  }

  Ui5Table.prototype.addChild = function addChild(child, elem) {
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
    for (var _iterator21 = path, _isArray21 = Array.isArray(_iterator21), _i21 = 0, _iterator21 = _isArray21 ? _iterator21 : _iterator21[Symbol.iterator]();;) {
      if (_isArray21) {
        if (_i21 >= _iterator21.length) break;
        elem = _iterator21[_i21++];
      } else {
        _i21 = _iterator21.next();
        if (_i21.done) break;
        elem = _i21.value;
      }

      if (elem.localName == 'item') {
        this._table.removeItem(child);break;
      }
    }
  };

  Ui5Table.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var table = new sap.m.Table({
      headerText: this.headerText
    });
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

  return Ui5Table;
}(), (_descriptor355 = _applyDecoratedDescriptor(_class207.prototype, 'headerText', [_dec495], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class207)) || _class206) || _class206);
var Ui5Text = exports.Ui5Text = (_dec496 = (0, _aureliaTemplating.customElement)('ui5-text'), _dec497 = (0, _aureliaDependencyInjection.inject)(Element), _dec496(_class209 = _dec497(_class209 = (_class210 = function () {
  function Ui5Text(element) {
    _classCallCheck(this, Ui5Text);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor356, this);

    _initDefineProp(this, 'text', _descriptor357, this);

    _initDefineProp(this, 'wrapping', _descriptor358, this);

    _initDefineProp(this, 'textAlign', _descriptor359, this);

    _initDefineProp(this, 'maxLines', _descriptor360, this);

    this.element = element;
  }

  Ui5Text.prototype.attached = function attached() {

    this._text = new sap.m.Text({
      text: this.text != null ? this.text : this.element.innerText.trim(),
      wrapping: getBooleanFromAttributeValue(this.wrapping),
      textAlign: this.textAlign,
      maxLines: this.maxLines
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._text, this.element);
  };

  Ui5Text.prototype.textChanged = function textChanged(newValue) {
    if (this._text != null) {
      this._text.setText(newValue);
    }
  };

  return Ui5Text;
}(), (_descriptor356 = _applyDecoratedDescriptor(_class210.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor357 = _applyDecoratedDescriptor(_class210.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor358 = _applyDecoratedDescriptor(_class210.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor359 = _applyDecoratedDescriptor(_class210.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor360 = _applyDecoratedDescriptor(_class210.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class210)) || _class209) || _class209);
var Ui5TileContainer = exports.Ui5TileContainer = (_dec498 = (0, _aureliaTemplating.customElement)('ui5-tile-container'), _dec499 = (0, _aureliaDependencyInjection.inject)(Element), _dec498(_class212 = _dec499(_class212 = function () {
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
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._container, this.element);
  };

  return Ui5TileContainer;
}()) || _class212) || _class212);
var Ui5TileContent = exports.Ui5TileContent = (_dec500 = (0, _aureliaTemplating.customElement)('ui5-tile-content'), _dec501 = (0, _aureliaDependencyInjection.inject)(Element), _dec502 = (0, _aureliaTemplating.bindable)(), _dec503 = (0, _aureliaTemplating.bindable)(), _dec500(_class214 = _dec501(_class214 = (_class215 = function () {
  function Ui5TileContent(element) {
    _classCallCheck(this, Ui5TileContent);

    this._content = null;

    _initDefineProp(this, 'footer', _descriptor361, this);

    _initDefineProp(this, 'unit', _descriptor362, this);

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
}(), (_descriptor361 = _applyDecoratedDescriptor(_class215.prototype, 'footer', [_dec502], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor362 = _applyDecoratedDescriptor(_class215.prototype, 'unit', [_dec503], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class215)) || _class214) || _class214);
var Ui5Title = exports.Ui5Title = (_dec504 = (0, _aureliaTemplating.customElement)('ui5-title'), _dec505 = (0, _aureliaDependencyInjection.inject)(Element), _dec506 = (0, _aureliaTemplating.bindable)(), _dec507 = (0, _aureliaTemplating.bindable)(), _dec508 = (0, _aureliaTemplating.bindable)(), _dec509 = (0, _aureliaTemplating.bindable)(), _dec504(_class217 = _dec505(_class217 = (_class218 = function () {
  function Ui5Title(element) {
    _classCallCheck(this, Ui5Title);

    this._title = null;

    _initDefineProp(this, 'text', _descriptor363, this);

    _initDefineProp(this, 'icon', _descriptor364, this);

    _initDefineProp(this, 'level', _descriptor365, this);

    _initDefineProp(this, 'emphasized', _descriptor366, this);

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
}(), (_descriptor363 = _applyDecoratedDescriptor(_class218.prototype, 'text', [_dec506], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor364 = _applyDecoratedDescriptor(_class218.prototype, 'icon', [_dec507], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor365 = _applyDecoratedDescriptor(_class218.prototype, 'level', [_dec508], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
}), _descriptor366 = _applyDecoratedDescriptor(_class218.prototype, 'emphasized', [_dec509], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class218)) || _class217) || _class217);

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

var MdTooltip = exports.MdTooltip = (_dec510 = (0, _aureliaTemplating.customAttribute)('md-tooltip'), _dec511 = (0, _aureliaDependencyInjection.inject)(Element), _dec512 = (0, _aureliaTemplating.bindable)(), _dec513 = (0, _aureliaTemplating.bindable)(), _dec514 = (0, _aureliaTemplating.bindable)(), _dec515 = (0, _aureliaTemplating.bindable)(), _dec510(_class220 = _dec511(_class220 = (_class221 = function () {
  function MdTooltip(element) {
    _classCallCheck(this, MdTooltip);

    _initDefineProp(this, 'position', _descriptor367, this);

    _initDefineProp(this, 'delay', _descriptor368, this);

    _initDefineProp(this, 'html', _descriptor369, this);

    _initDefineProp(this, 'text', _descriptor370, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdTooltip.prototype.bind = function bind() {
    this.html = getBooleanFromAttributeValue(this.html);
  };

  MdTooltip.prototype.attached = function attached() {
    this.attributeManager.addClasses('tooltipped');
    this.attributeManager.addAttributes({ 'data-position': this.position, 'data-tooltip': this.text });
    this.initTooltip();
  };

  MdTooltip.prototype.detached = function detached() {
    $(this.element).tooltip('remove');
    this.attributeManager.removeClasses('tooltipped');
    this.attributeManager.removeAttributes(['data-position', 'data-tooltip']);
  };

  MdTooltip.prototype.textChanged = function textChanged() {
    this.attributeManager.addAttributes({ 'data-tooltip': this.text });
    this.initTooltip();
  };

  MdTooltip.prototype.initTooltip = function initTooltip() {
    $(this.element).tooltip('remove');
    $(this.element).tooltip({
      delay: parseInt(this.delay, 10),
      html: this.html
    });
  };

  return MdTooltip;
}(), (_descriptor367 = _applyDecoratedDescriptor(_class221.prototype, 'position', [_dec512], {
  enumerable: true,
  initializer: function initializer() {
    return 'bottom';
  }
}), _descriptor368 = _applyDecoratedDescriptor(_class221.prototype, 'delay', [_dec513], {
  enumerable: true,
  initializer: function initializer() {
    return 50;
  }
}), _descriptor369 = _applyDecoratedDescriptor(_class221.prototype, 'html', [_dec514], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor370 = _applyDecoratedDescriptor(_class221.prototype, 'text', [_dec515], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class221)) || _class220) || _class220);
var MdFadeinImage = exports.MdFadeinImage = (_dec516 = (0, _aureliaTemplating.customAttribute)('md-fadein-image'), _dec517 = (0, _aureliaDependencyInjection.inject)(Element), _dec518 = (0, _aureliaTemplating.bindable)(), _dec516(_class223 = _dec517(_class223 = (_class224 = function () {
  function MdFadeinImage(element) {
    _classCallCheck(this, MdFadeinImage);

    _initDefineProp(this, 'ref', _descriptor371, this);

    this.element = element;
    this.fadeInImage = this.fadeInImage.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-fadein-image');
  }

  MdFadeinImage.prototype.attached = function attached() {
    this.element.addEventListener('click', this.fadeInImage);
    this.ensureOpacity();
  };

  MdFadeinImage.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.fadeInImage);
  };

  MdFadeinImage.prototype.fadeInImage = function fadeInImage() {
    Materialize.fadeInImage($(this.ref));
  };

  MdFadeinImage.prototype.ensureOpacity = function ensureOpacity() {
    var opacity = window.getComputedStyle(this.ref).opacity;
    if (opacity !== 0) {
      this.ref.style.opacity = 0;
    }
  };

  return MdFadeinImage;
}(), (_descriptor371 = _applyDecoratedDescriptor(_class224.prototype, 'ref', [_dec518], {
  enumerable: true,
  initializer: null
})), _class224)) || _class223) || _class223);
var MdStaggeredList = exports.MdStaggeredList = (_dec519 = (0, _aureliaTemplating.customAttribute)('md-staggered-list'), _dec520 = (0, _aureliaDependencyInjection.inject)(Element), _dec521 = (0, _aureliaTemplating.bindable)(), _dec519(_class226 = _dec520(_class226 = (_class227 = function () {
  function MdStaggeredList(element) {
    _classCallCheck(this, MdStaggeredList);

    _initDefineProp(this, 'ref', _descriptor372, this);

    this.element = element;
    this.staggerList = this.staggerList.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-staggered-list');
  }

  MdStaggeredList.prototype.attached = function attached() {
    this.element.addEventListener('click', this.staggerList);
    this.ensureOpacity();
  };

  MdStaggeredList.prototype.detached = function detached() {
    this.element.removeEventListener('click', this.staggerList);
  };

  MdStaggeredList.prototype.staggerList = function staggerList() {
    Materialize.showStaggeredList($(this.ref));
  };

  MdStaggeredList.prototype.ensureOpacity = function ensureOpacity() {
    var items = this.ref.querySelectorAll('li');
    [].forEach.call(items, function (item) {
      var opacity = window.getComputedStyle(item).opacity;
      if (opacity !== 0) {
        item.style.opacity = 0;
      }
    });
  };

  return MdStaggeredList;
}(), (_descriptor372 = _applyDecoratedDescriptor(_class227.prototype, 'ref', [_dec521], {
  enumerable: true,
  initializer: null
})), _class227)) || _class226) || _class226);

var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
  function MaterializeFormValidationRenderer() {
    _classCallCheck(this, MaterializeFormValidationRenderer);

    this.className = 'md-input-validation';
    this.classNameFirst = 'md-input-validation-first';
  }

  MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
    var _this14 = this;

    var allElements = new Array();
    for (var _iterator22 = instruction.unrender, _isArray22 = Array.isArray(_iterator22), _i22 = 0, _iterator22 = _isArray22 ? _iterator22 : _iterator22[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray22) {
        if (_i22 >= _iterator22.length) break;
        _ref2 = _iterator22[_i22++];
      } else {
        _i22 = _iterator22.next();
        if (_i22.done) break;
        _ref2 = _i22.value;
      }

      var _ref5 = _ref2;
      var result = _ref5.result,
          elements = _ref5.elements;

      for (var _iterator24 = elements, _isArray24 = Array.isArray(_iterator24), _i24 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray24) {
          if (_i24 >= _iterator24.length) break;
          _ref6 = _iterator24[_i24++];
        } else {
          _i24 = _iterator24.next();
          if (_i24.done) break;
          _ref6 = _i24.value;
        }

        var element = _ref6;

        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (var _iterator23 = instruction.render, _isArray23 = Array.isArray(_iterator23), _i23 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray23) {
        if (_i23 >= _iterator23.length) break;
        _ref4 = _iterator23[_i23++];
      } else {
        _i23 = _iterator23.next();
        if (_i23.done) break;
        _ref4 = _i23.value;
      }

      var _ref7 = _ref4;
      var result = _ref7.result,
          elements = _ref7.elements;

      for (var _iterator25 = elements, _isArray25 = Array.isArray(_iterator25), _i25 = 0, _iterator25 = _isArray25 ? _iterator25 : _iterator25[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray25) {
          if (_i25 >= _iterator25.length) break;
          _ref8 = _iterator25[_i25++];
        } else {
          _i25 = _iterator25.next();
          if (_i25.done) break;
          _ref8 = _i25.value;
        }

        var _element = _ref8;

        this.add(_element, result);
        if (allElements.indexOf(_element) == -1) {
          allElements.push(_element);
        }
      }
    }
    allElements.forEach(function (e) {
      return _this14.underlineInput(e);
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

var Ui5VerticalLayout = exports.Ui5VerticalLayout = (_dec522 = (0, _aureliaTemplating.customElement)('ui5-vertical-layout'), _dec523 = (0, _aureliaDependencyInjection.inject)(Element), _dec522(_class230 = _dec523(_class230 = function () {
  function Ui5VerticalLayout(element) {
    _classCallCheck(this, Ui5VerticalLayout);

    this._layout = null;

    this.element = element;
  }

  Ui5VerticalLayout.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5VerticalLayout.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'content') {
        this._layout.addContent(child);
        break;
      }
    }
  };

  Ui5VerticalLayout.prototype.removeChild = function removeChild(child, elem) {
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
}()) || _class230) || _class230);
var Ui5ToolbarSpacer = exports.Ui5ToolbarSpacer = (_dec524 = (0, _aureliaTemplating.customElement)('ui5-toolbar-spacer'), _dec525 = (0, _aureliaDependencyInjection.inject)(Element), _dec526 = (0, _aureliaTemplating.bindable)(), _dec524(_class232 = _dec525(_class232 = (_class233 = function () {
  function Ui5ToolbarSpacer(element) {
    _classCallCheck(this, Ui5ToolbarSpacer);

    this._spacer = null;

    _initDefineProp(this, 'width', _descriptor373, this);

    this.element = element;
  }

  Ui5ToolbarSpacer.prototype.attached = function attached() {

    this._spacer = new sap.m.ToolbarSpacer({
      widtht: this.width
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._spacer, this.element);
  };

  Ui5ToolbarSpacer.prototype.widthChanged = function widthChanged(newValue) {
    if (this._spacer !== null) {
      this._spacer.setWidth(newValue);
    }
  };

  return Ui5ToolbarSpacer;
}(), (_descriptor373 = _applyDecoratedDescriptor(_class233.prototype, 'width', [_dec526], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class233)) || _class232) || _class232);
var MdWaves = exports.MdWaves = (_dec527 = (0, _aureliaTemplating.customAttribute)('md-waves'), _dec528 = (0, _aureliaDependencyInjection.inject)(Element), _dec529 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec530 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec531 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec527(_class235 = _dec528(_class235 = (_class236 = function () {
  function MdWaves(element) {
    _classCallCheck(this, MdWaves);

    _initDefineProp(this, 'block', _descriptor374, this);

    _initDefineProp(this, 'circle', _descriptor375, this);

    _initDefineProp(this, 'color', _descriptor376, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdWaves.prototype.attached = function attached() {
    var classes = ['waves-effect'];
    if (getBooleanFromAttributeValue(this.block)) {
      classes.push('waves-block');
    }
    if (getBooleanFromAttributeValue(this.circle)) {
      classes.push('waves-circle');
    }
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.addClasses(classes);
    Waves.attach(this.element);
  };

  MdWaves.prototype.detached = function detached() {
    var classes = ['waves-effect', 'waves-block'];
    if (this.color) {
      classes.push('waves-' + this.color);
    }

    this.attributeManager.removeClasses(classes);
  };

  return MdWaves;
}(), (_descriptor374 = _applyDecoratedDescriptor(_class236.prototype, 'block', [_dec529], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor375 = _applyDecoratedDescriptor(_class236.prototype, 'circle', [_dec530], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor376 = _applyDecoratedDescriptor(_class236.prototype, 'color', [_dec531], {
  enumerable: true,
  initializer: null
})), _class236)) || _class235) || _class235);
var Ui5Wizard = exports.Ui5Wizard = (_dec532 = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec533 = (0, _aureliaDependencyInjection.inject)(Element), _dec532(_class238 = _dec533(_class238 = function () {
  function Ui5Wizard(element) {
    _classCallCheck(this, Ui5Wizard);

    this._wizard = null;

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
    this._wizard = new sap.m.Wizard();
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
  };

  Ui5Wizard.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
  };

  return Ui5Wizard;
}()) || _class238) || _class238);
var Ui5WizardStep = exports.Ui5WizardStep = (_dec534 = (0, _aureliaTemplating.customElement)('ui5-wizard-step'), _dec535 = (0, _aureliaDependencyInjection.inject)(Element), _dec534(_class240 = _dec535(_class240 = (_class241 = function () {
  function Ui5WizardStep(element) {
    _classCallCheck(this, Ui5WizardStep);

    this._step = null;

    _initDefineProp(this, 'nextStep', _descriptor377, this);

    _initDefineProp(this, 'subsequentSteps', _descriptor378, this);

    _initDefineProp(this, 'title', _descriptor379, this);

    _initDefineProp(this, 'icon', _descriptor380, this);

    _initDefineProp(this, 'validated', _descriptor381, this);

    _initDefineProp(this, 'complete', _descriptor382, this);

    _initDefineProp(this, 'activate', _descriptor383, this);

    this.element = element;
  }

  Ui5WizardStep.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'step') {
        this._step.addContent(child);
        break;
      }
    }
  };

  Ui5WizardStep.prototype.removeChild = function removeChild(child, elem) {
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
}(), (_descriptor377 = _applyDecoratedDescriptor(_class241.prototype, 'nextStep', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor378 = _applyDecoratedDescriptor(_class241.prototype, 'subsequentSteps', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor379 = _applyDecoratedDescriptor(_class241.prototype, 'title', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor380 = _applyDecoratedDescriptor(_class241.prototype, 'icon', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor381 = _applyDecoratedDescriptor(_class241.prototype, 'validated', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor382 = _applyDecoratedDescriptor(_class241.prototype, 'complete', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor383 = _applyDecoratedDescriptor(_class241.prototype, 'activate', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class241)) || _class240) || _class240);
var Ui5SlideTile = exports.Ui5SlideTile = (_dec536 = (0, _aureliaTemplating.customElement)('ui5-slide-tile'), _dec537 = (0, _aureliaDependencyInjection.inject)(Element), _dec538 = (0, _aureliaTemplating.bindable)(), _dec539 = (0, _aureliaTemplating.bindable)(), _dec536(_class243 = _dec537(_class243 = (_class244 = function () {
  function Ui5SlideTile(element) {
    _classCallCheck(this, Ui5SlideTile);

    this._container = null;

    _initDefineProp(this, 'displayTime', _descriptor384, this);

    _initDefineProp(this, 'transitionTime', _descriptor385, this);

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
}(), (_descriptor384 = _applyDecoratedDescriptor(_class244.prototype, 'displayTime', [_dec538], {
  enumerable: true,
  initializer: function initializer() {
    return 5000;
  }
}), _descriptor385 = _applyDecoratedDescriptor(_class244.prototype, 'transitionTime', [_dec539], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class244)) || _class243) || _class243);
var Ui5StandardTile = exports.Ui5StandardTile = (_dec540 = (0, _aureliaTemplating.customElement)('ui5-standard-tile'), _dec541 = (0, _aureliaDependencyInjection.inject)(Element), _dec542 = (0, _aureliaTemplating.bindable)(), _dec543 = (0, _aureliaTemplating.bindable)(), _dec544 = (0, _aureliaTemplating.bindable)(), _dec545 = (0, _aureliaTemplating.bindable)(), _dec546 = (0, _aureliaTemplating.bindable)(), _dec547 = (0, _aureliaTemplating.bindable)(), _dec548 = (0, _aureliaTemplating.bindable)(), _dec549 = (0, _aureliaTemplating.bindable)(), _dec540(_class246 = _dec541(_class246 = (_class247 = function () {
  function Ui5StandardTile(element) {
    _classCallCheck(this, Ui5StandardTile);

    this._tile = null;

    _initDefineProp(this, 'type', _descriptor386, this);

    _initDefineProp(this, 'title', _descriptor387, this);

    _initDefineProp(this, 'number', _descriptor388, this);

    _initDefineProp(this, 'info', _descriptor389, this);

    _initDefineProp(this, 'infoState', _descriptor390, this);

    _initDefineProp(this, 'numberUnit', _descriptor391, this);

    _initDefineProp(this, 'icon', _descriptor392, this);

    _initDefineProp(this, 'press', _descriptor393, this);

    this.element = element;
  }

  Ui5StandardTile.prototype.defaultPress = function defaultPress() {};

  Ui5StandardTile.prototype.attached = function attached() {
    this._tile = new sap.m.StandardTile({
      type: this.type,
      title: this.title,
      number: this.number,
      info: this.info,
      infoState: this.infoState,
      numberUnit: this.numberUnit,
      icon: this.icon,
      press: this.press != null ? this.press : this.defaultPress
    });
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

  return Ui5StandardTile;
}(), (_descriptor386 = _applyDecoratedDescriptor(_class247.prototype, 'type', [_dec542], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor387 = _applyDecoratedDescriptor(_class247.prototype, 'title', [_dec543], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor388 = _applyDecoratedDescriptor(_class247.prototype, 'number', [_dec544], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor389 = _applyDecoratedDescriptor(_class247.prototype, 'info', [_dec545], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor390 = _applyDecoratedDescriptor(_class247.prototype, 'infoState', [_dec546], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor391 = _applyDecoratedDescriptor(_class247.prototype, 'numberUnit', [_dec547], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor392 = _applyDecoratedDescriptor(_class247.prototype, 'icon', [_dec548], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor393 = _applyDecoratedDescriptor(_class247.prototype, 'press', [_dec549], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class247)) || _class246) || _class246);