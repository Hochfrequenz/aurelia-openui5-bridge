'use strict';

exports.__esModule = true;
exports.Ui5WizardStep = exports.Ui5Wizard = exports.MdWaves = exports.MaterializeFormValidationRenderer = exports.MdStaggeredList = exports.MdFadeinImage = exports.MdTooltip = exports.Ui5ToastService = exports.Ui5Title = exports.Ui5TileContent = exports.Ui5TileContainer = exports.Ui5Text = exports.MdTabs = exports.MdSwitch = exports.Ui5StandardTile = exports.MdSlider = exports.Ui5SlideTile = exports.Ui5SimpleForm = exports.MdSidenav = exports.MdSidenavCollapse = exports.MdSelect = exports.MdScrollSpy = exports.MdScrollfire = exports.MdScrollfireTarget = exports.ScrollfirePatch = exports.MdRange = exports.MdRadio = exports.MdPushpin = exports.MdProgress = exports.MdParallax = exports.MdPagination = exports.Ui5Page = exports.Ui5NumericContent = exports.MdNavbar = exports.MdModal = exports.MdModalTrigger = exports.Ui5MessageStrip = exports.Ui5Label = exports.Ui5InputBase = exports.Ui5Input = exports.Ui5ImageContent = exports.Ui5Html = exports.Ui5GridData = exports.Ui5Grid = exports.Ui5GenericTile = exports.MdFooter = exports.MdFileInput = exports.Ui5FeedContent = exports.MdFab = exports.MdDropdown = exports.MdDropdownElement = exports.Ui5Element = exports.MdDatePicker = exports.DatePickerDefaultParser = exports.Ui5Control = exports.Ui5Container = exports.constants = exports.AttributeManager = exports.MdColors = exports.LightenValueConverter = exports.DarkenValueConverter = exports.MdlListSelector = exports.MdCollection = exports.MdCollectionItem = exports.MdCollectionHeader = exports.MdCollapsible = exports.MdChips = exports.MdChip = exports.MdCheckbox = exports.MdCharCounter = exports.MdCarousel = exports.MdCarouselItem = exports.MdCard = exports.Ui5Button = exports.InstructionFilterValueConverter = exports.MdBreadcrumbs = exports.MdBox = exports.Ui5Bar = exports.MdBadge = exports.MdAutoComplete = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class3, _desc, _value, _class4, _descriptor, _dec4, _dec5, _dec6, _dec7, _class6, _desc2, _value2, _class7, _descriptor2, _descriptor3, _dec8, _dec9, _class9, _dec10, _dec11, _dec12, _class11, _desc3, _value3, _class12, _descriptor4, _dec13, _dec14, _dec15, _class14, _desc4, _value4, _class15, _descriptor5, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _class17, _desc5, _value5, _class18, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _class20, _desc6, _value6, _class21, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _dec30, _dec31, _dec32, _class23, _desc7, _value7, _class24, _descriptor16, _descriptor17, _dec33, _dec34, _dec35, _dec36, _dec37, _class26, _desc8, _value8, _class27, _descriptor18, _descriptor19, _descriptor20, _dec38, _dec39, _dec40, _class29, _desc9, _value9, _class30, _descriptor21, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _class32, _desc10, _value10, _class33, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _class34, _temp, _dec47, _dec48, _dec49, _class35, _desc11, _value11, _class36, _descriptor27, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _class38, _desc12, _value12, _class39, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _class41, _dec62, _dec63, _class42, _dec64, _class43, _dec65, _dec66, _class44, _dec67, _dec68, _dec69, _dec70, _dec71, _class45, _desc13, _value13, _class46, _descriptor32, _descriptor33, _descriptor34, _dec72, _dec73, _dec74, _dec75, _desc14, _value14, _class48, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _dec76, _dec77, _class51, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _class52, _desc15, _value15, _class53, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _dec94, _dec95, _dec96, _dec97, _class55, _desc16, _value16, _class56, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _class57, _temp2, _dec98, _dec99, _dec100, _dec101, _dec102, _dec103, _dec104, _dec105, _dec106, _dec107, _dec108, _dec109, _class58, _desc17, _value17, _class59, _descriptor55, _descriptor56, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _class60, _temp3, _dec110, _dec111, _dec112, _dec113, _class61, _desc18, _value18, _class62, _descriptor65, _descriptor66, _dec114, _dec115, _dec116, _dec117, _dec118, _dec119, _class64, _desc19, _value19, _class65, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _dec120, _dec121, _dec122, _dec123, _dec124, _dec125, _class67, _desc20, _value20, _class68, _descriptor71, _descriptor72, _descriptor73, _descriptor74, _dec126, _dec127, _class70, _dec128, _dec129, _dec130, _dec131, _dec132, _dec133, _dec134, _class71, _desc21, _value21, _class72, _descriptor75, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _dec135, _dec136, _dec137, _class74, _desc22, _value22, _class75, _descriptor80, _dec138, _dec139, _dec140, _dec141, _class77, _desc23, _value23, _class78, _descriptor81, _descriptor82, _dec142, _dec143, _class80, _dec144, _dec145, _dec146, _class82, _desc24, _value24, _class83, _descriptor83, _dec147, _dec148, _dec149, _dec150, _dec151, _dec152, _dec153, _dec154, _dec155, _dec156, _dec157, _dec158, _dec159, _dec160, _dec161, _dec162, _dec163, _dec164, _dec165, _dec166, _dec167, _dec168, _dec169, _dec170, _dec171, _dec172, _dec173, _dec174, _dec175, _dec176, _dec177, _dec178, _dec179, _dec180, _dec181, _dec182, _dec183, _dec184, _dec185, _dec186, _dec187, _dec188, _class85, _desc25, _value25, _class86, _descriptor84, _descriptor85, _descriptor86, _descriptor87, _descriptor88, _descriptor89, _descriptor90, _descriptor91, _descriptor92, _descriptor93, _descriptor94, _descriptor95, _descriptor96, _descriptor97, _descriptor98, _descriptor99, _descriptor100, _descriptor101, _descriptor102, _descriptor103, _descriptor104, _descriptor105, _descriptor106, _descriptor107, _descriptor108, _descriptor109, _descriptor110, _descriptor111, _descriptor112, _descriptor113, _descriptor114, _descriptor115, _descriptor116, _descriptor117, _descriptor118, _descriptor119, _descriptor120, _descriptor121, _descriptor122, _descriptor123, _dec189, _dec190, _dec191, _dec192, _dec193, _dec194, _dec195, _dec196, _dec197, _dec198, _dec199, _dec200, _dec201, _dec202, _dec203, _class88, _desc26, _value26, _class89, _descriptor124, _descriptor125, _descriptor126, _descriptor127, _descriptor128, _descriptor129, _descriptor130, _descriptor131, _descriptor132, _descriptor133, _descriptor134, _descriptor135, _descriptor136, _dec204, _dec205, _dec206, _dec207, _dec208, _dec209, _dec210, _dec211, _class91, _desc27, _value27, _class92, _descriptor137, _descriptor138, _descriptor139, _descriptor140, _descriptor141, _descriptor142, _dec212, _dec213, _class94, _desc28, _value28, _class95, _descriptor143, _descriptor144, _descriptor145, _descriptor146, _descriptor147, _dec214, _dec215, _dec216, _class97, _desc29, _value29, _class98, _descriptor148, _dec217, _dec218, _dec219, _dec220, _dec221, _dec222, _dec223, _dec224, _class100, _desc30, _value30, _class101, _descriptor149, _descriptor150, _descriptor151, _descriptor152, _descriptor153, _descriptor154, _dec225, _dec226, _dec227, _dec228, _class103, _desc31, _value31, _class104, _descriptor155, _descriptor156, _dec229, _dec230, _dec231, _dec232, _dec233, _dec234, _dec235, _class106, _desc32, _value32, _class107, _descriptor157, _descriptor158, _descriptor159, _descriptor160, _descriptor161, _dec236, _dec237, _dec238, _dec239, _dec240, _dec241, _class109, _desc33, _value33, _class110, _descriptor162, _descriptor163, _descriptor164, _descriptor165, _dec242, _dec243, _dec244, _dec245, _dec246, _dec247, _dec248, _dec249, _dec250, _class112, _desc34, _value34, _class113, _descriptor166, _descriptor167, _descriptor168, _descriptor169, _descriptor170, _descriptor171, _descriptor172, _dec251, _dec252, _class115, _dec253, _dec254, _dec255, _dec256, _dec257, _dec258, _dec259, _class116, _desc35, _value35, _class117, _descriptor173, _descriptor174, _descriptor175, _descriptor176, _descriptor177, _dec260, _dec261, _dec262, _dec263, _dec264, _class119, _desc36, _value36, _class120, _descriptor178, _descriptor179, _descriptor180, _dec265, _dec266, _dec267, _dec268, _dec269, _dec270, _dec271, _dec272, _class122, _desc37, _value37, _class123, _descriptor181, _descriptor182, _descriptor183, _descriptor184, _descriptor185, _descriptor186, _class124, _temp4, _dec273, _dec274, _dec275, _dec276, _dec277, _dec278, _class125, _desc38, _value38, _class126, _descriptor187, _descriptor188, _descriptor189, _descriptor190, _class128, _temp5, _dec279, _dec280, _dec281, _dec282, _class129, _desc39, _value39, _class130, _descriptor191, _descriptor192, _dec283, _dec284, _class132, _dec285, _dec286, _dec287, _class134, _desc40, _value40, _class135, _descriptor193, _dec288, _dec289, _dec290, _dec291, _dec292, _dec293, _class137, _desc41, _value41, _class138, _descriptor194, _descriptor195, _descriptor196, _descriptor197, _dec294, _dec295, _dec296, _class140, _desc42, _value42, _class141, _descriptor198, _dec297, _dec298, _dec299, _dec300, _dec301, _dec302, _class143, _desc43, _value43, _class144, _descriptor199, _descriptor200, _descriptor201, _descriptor202, _class145, _temp6, _dec303, _dec304, _dec305, _dec306, _dec307, _dec308, _dec309, _dec310, _dec311, _dec312, _dec313, _dec314, _dec315, _dec316, _dec317, _dec318, _dec319, _dec320, _dec321, _dec322, _dec323, _dec324, _dec325, _dec326, _class146, _desc44, _value44, _class147, _descriptor203, _descriptor204, _descriptor205, _descriptor206, _descriptor207, _descriptor208, _descriptor209, _descriptor210, _descriptor211, _descriptor212, _descriptor213, _descriptor214, _descriptor215, _descriptor216, _descriptor217, _descriptor218, _descriptor219, _descriptor220, _descriptor221, _descriptor222, _descriptor223, _descriptor224, _dec327, _dec328, _dec329, _dec330, _class149, _desc45, _value45, _class150, _descriptor225, _descriptor226, _dec331, _dec332, _dec333, _dec334, _dec335, _dec336, _dec337, _dec338, _class152, _desc46, _value46, _class153, _descriptor227, _descriptor228, _descriptor229, _descriptor230, _descriptor231, _dec339, _dec340, _dec341, _dec342, _dec343, _dec344, _dec345, _dec346, _dec347, _dec348, _class155, _desc47, _value47, _class156, _descriptor232, _descriptor233, _descriptor234, _descriptor235, _descriptor236, _descriptor237, _descriptor238, _descriptor239, _dec349, _dec350, _dec351, _dec352, _dec353, _dec354, _class158, _desc48, _value48, _class159, _descriptor240, _descriptor241, _descriptor242, _descriptor243, _dec355, _dec356, _dec357, _dec358, _dec359, _dec360, _dec361, _class161, _desc49, _value49, _class162, _descriptor244, _descriptor245, _descriptor246, _descriptor247, _descriptor248, _dec362, _dec363, _class164, _desc50, _value50, _class165, _descriptor249, _descriptor250, _descriptor251, _descriptor252, _descriptor253, _dec364, _dec365, _class167, _dec366, _dec367, _dec368, _dec369, _class169, _desc51, _value51, _class170, _descriptor254, _descriptor255, _dec370, _dec371, _dec372, _dec373, _dec374, _dec375, _class172, _desc52, _value52, _class173, _descriptor256, _descriptor257, _descriptor258, _descriptor259, _dec376, _dec377, _dec378, _dec379, _dec380, _dec381, _class175, _desc53, _value53, _class176, _descriptor260, _descriptor261, _descriptor262, _descriptor263, _dec382, _dec383, _dec384, _class178, _desc54, _value54, _class179, _descriptor264, _dec385, _dec386, _dec387, _class181, _desc55, _value55, _class182, _descriptor265, _dec388, _dec389, _dec390, _dec391, _dec392, _class185, _desc56, _value56, _class186, _descriptor266, _descriptor267, _descriptor268, _dec393, _dec394, _class188, _dec395, _dec396, _class190, _desc57, _value57, _class191, _descriptor269, _descriptor270, _descriptor271, _descriptor272, _descriptor273, _descriptor274, _descriptor275;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;
exports.polyfillElementClosest = polyfillElementClosest;
exports.applyMaterializeDropdownFix = applyMaterializeDropdownFix;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaBinding = require('aurelia-binding');

var _aureliaRouter = require('aurelia-router');

var _aureliaTaskQueue = require('aurelia-task-queue');

var _aureliaLogging = require('aurelia-logging');

var _aureliaEventAggregator = require('aurelia-event-aggregator');

var _aureliaPal = require('aurelia-pal');

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
    return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useTitle().useLayoutData();
  };

  ConfigBuilder.prototype.usePage = function usePage() {
    this.globalResources.push('./page/page');
    return this;
  };

  ConfigBuilder.prototype.useBar = function useBar() {
    this.globalResources.push('./bar/bar');
    return this;
  };

  ConfigBuilder.prototype.useContainer = function useContainer() {
    this.globalResources.push('./container/container');
    return this;
  };

  ConfigBuilder.prototype.useHtml = function useHtml() {
    this.globalResources.push('./html/html');
    return this;
  };

  ConfigBuilder.prototype.useButton = function useButton() {
    this.globalResources.push('./button/button');
    return this;
  };

  ConfigBuilder.prototype.useGrid = function useGrid() {
    this.globalResources.push('./grid/grid');
    return this;
  };

  ConfigBuilder.prototype.useWizard = function useWizard() {
    this.globalResources.push('./wizard/wizard');
    this.globalResources.push('./wizard-step/wizard-step');
    return this;
  };

  ConfigBuilder.prototype.useText = function useText() {
    this.globalResources.push('./text/text');
    return this;
  };

  ConfigBuilder.prototype.useTiles = function useTiles() {
    this.globalResources.push('./generic-tile/generic-tile');
    this.globalResources.push('./tile-container/tile-container');
    this.globalResources.push('./tile-content/tile-content');
    this.globalResources.push('./standard-tile/standard-tile');
    this.globalResources.push('./image-content/image-content');
    this.globalResources.push('./numeric-content/numeric-content');
    this.globalResources.push('./feed-content/feed-content');
    this.globalResources.push('./slide-tile/slide-tile');
    return this;
  };

  ConfigBuilder.prototype.useForm = function useForm() {
    this.globalResources.push('./simple-form/simple-form');
    return this;
  };

  ConfigBuilder.prototype.useLabel = function useLabel() {
    this.globalResources.push('./label/label');
    return this;
  };

  ConfigBuilder.prototype.useInput = function useInput() {
    this.globalResources.push('./input/input');
    return this;
  };

  ConfigBuilder.prototype.useTitle = function useTitle() {
    this.globalResources.push('./title/title');
    return this;
  };

  ConfigBuilder.prototype.useLayoutData = function useLayoutData() {
    this.globalResources.push('./grid-data/grid-data');
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

var MdAutoComplete = exports.MdAutoComplete = (_dec = (0, _aureliaTemplating.customAttribute)('md-autocomplete'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec(_class3 = _dec2(_class3 = (_class4 = function () {
  function MdAutoComplete(element) {
    _classCallCheck(this, MdAutoComplete);

    this.input = null;

    _initDefineProp(this, 'values', _descriptor, this);

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
    var _this = this;

    this.detached();
    $(this.input).autocomplete({
      data: this.values
    });

    $(this.input).siblings('.autocomplete-content').on('click', function () {
      fireEvent(_this.input, 'change');
    });
  };

  MdAutoComplete.prototype.valuesChanged = function valuesChanged(newValue) {
    this.refresh();
  };

  return MdAutoComplete;
}(), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, 'values', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
})), _class4)) || _class3) || _class3);
var MdBadge = exports.MdBadge = (_dec4 = (0, _aureliaTemplating.customAttribute)('md-badge'), _dec5 = (0, _aureliaDependencyInjection.inject)(Element), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec4(_class6 = _dec5(_class6 = (_class7 = function () {
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
}(), (_descriptor2 = _applyDecoratedDescriptor(_class7.prototype, 'isNew', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class7.prototype, 'caption', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class7)) || _class6) || _class6);
var Ui5Bar = exports.Ui5Bar = (_dec8 = (0, _aureliaTemplating.customElement)('ui5-bar'), _dec9 = (0, _aureliaDependencyInjection.inject)(Element), _dec8(_class9 = _dec9(_class9 = function () {
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
}()) || _class9) || _class9);
var MdBox = exports.MdBox = (_dec10 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec11 = (0, _aureliaDependencyInjection.inject)(Element), _dec12 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec10(_class11 = _dec11(_class11 = (_class12 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor4, this);

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
}(), (_descriptor4 = _applyDecoratedDescriptor(_class12.prototype, 'caption', [_dec12], {
  enumerable: true,
  initializer: null
})), _class12)) || _class11) || _class11);
var MdBreadcrumbs = exports.MdBreadcrumbs = (_dec13 = (0, _aureliaTemplating.customElement)('md-breadcrumbs'), _dec14 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaRouter.Router), _dec15 = (0, _aureliaTemplating.bindable)(), _dec13(_class14 = _dec14(_class14 = (_class15 = function () {
  function MdBreadcrumbs(element, router) {
    _classCallCheck(this, MdBreadcrumbs);

    _initDefineProp(this, 'router', _descriptor5, this);

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
}(), (_descriptor5 = _applyDecoratedDescriptor(_class15.prototype, 'router', [_dec15], {
  enumerable: true,
  initializer: null
})), _class15)) || _class14) || _class14);

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

var Ui5Button = exports.Ui5Button = (_dec16 = (0, _aureliaTemplating.customElement)('ui5-button'), _dec17 = (0, _aureliaDependencyInjection.inject)(Element), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec16(_class17 = _dec17(_class17 = (_class18 = function () {
  function Ui5Button(element) {
    _classCallCheck(this, Ui5Button);

    _initDefineProp(this, 'disabled', _descriptor6, this);

    _initDefineProp(this, 'floating', _descriptor7, this);

    _initDefineProp(this, 'large', _descriptor8, this);

    _initDefineProp(this, 'text', _descriptor9, this);

    _initDefineProp(this, 'press', _descriptor10, this);

    this._button = null;

    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  Ui5Button.prototype.attached = function attached() {
    this._button = new sap.m.Button({
      text: this.text,
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
}(), (_descriptor6 = _applyDecoratedDescriptor(_class18.prototype, 'disabled', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class18.prototype, 'floating', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class18.prototype, 'large', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class18.prototype, 'text', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class18.prototype, 'press', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class18)) || _class17) || _class17);
var MdCard = exports.MdCard = (_dec23 = (0, _aureliaTemplating.customElement)('md-card'), _dec24 = (0, _aureliaDependencyInjection.inject)(Element), _dec25 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec26 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec27 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec28 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec29 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec23(_class20 = _dec24(_class20 = (_class21 = function () {
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
}(), (_descriptor11 = _applyDecoratedDescriptor(_class21.prototype, 'mdHorizontal', [_dec25], {
  enumerable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class21.prototype, 'mdImage', [_dec26], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class21.prototype, 'mdReveal', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class21.prototype, 'mdSize', [_dec28], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class21.prototype, 'mdTitle', [_dec29], {
  enumerable: true,
  initializer: null
})), _class21)) || _class20) || _class20);
var MdCarouselItem = exports.MdCarouselItem = (_dec30 = (0, _aureliaDependencyInjection.inject)(Element), _dec31 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec32 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec30(_class23 = (_class24 = function () {
  function MdCarouselItem(element) {
    _classCallCheck(this, MdCarouselItem);

    _initDefineProp(this, 'mdHref', _descriptor16, this);

    _initDefineProp(this, 'mdImage', _descriptor17, this);

    this.element = element;
  }

  MdCarouselItem.prototype.attached = function attached() {};

  return MdCarouselItem;
}(), (_descriptor16 = _applyDecoratedDescriptor(_class24.prototype, 'mdHref', [_dec31], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class24.prototype, 'mdImage', [_dec32], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class24)) || _class23);
var MdCarousel = exports.MdCarousel = (_dec33 = (0, _aureliaTemplating.customElement)('md-carousel'), _dec34 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec37 = (0, _aureliaTemplating.children)('md-carousel-item'), _dec33(_class26 = _dec34(_class26 = (_class27 = function () {
  function MdCarousel(element, taskQueue) {
    _classCallCheck(this, MdCarousel);

    _initDefineProp(this, 'mdIndicators', _descriptor18, this);

    _initDefineProp(this, 'mdSlider', _descriptor19, this);

    _initDefineProp(this, 'items', _descriptor20, this);

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
}(), (_descriptor18 = _applyDecoratedDescriptor(_class27.prototype, 'mdIndicators', [_dec35], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class27.prototype, 'mdSlider', [_dec36], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class27.prototype, 'items', [_dec37], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class27)) || _class26) || _class26);
var MdCharCounter = exports.MdCharCounter = (_dec38 = (0, _aureliaTemplating.customAttribute)('md-char-counter'), _dec39 = (0, _aureliaDependencyInjection.inject)(Element), _dec40 = (0, _aureliaTemplating.bindable)(), _dec38(_class29 = _dec39(_class29 = (_class30 = function () {
  function MdCharCounter(element) {
    _classCallCheck(this, MdCharCounter);

    _initDefineProp(this, 'length', _descriptor21, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  MdCharCounter.prototype.attached = function attached() {
    var _this3 = this;

    this.length = parseInt(this.length, 10);

    if (this.element.tagName.toUpperCase() === 'INPUT') {
      this.attributeManager.addAttributes({ 'length': this.length });
      $(this.element).characterCounter();
    } else {
      $(this.element).find('input').each(function (i, el) {
        $(el).attr('length', _this3.length);
      });
      $(this.element).find('input').characterCounter();
    }
  };

  MdCharCounter.prototype.detached = function detached() {
    this.attributeManager.removeAttributes(['length']);
  };

  return MdCharCounter;
}(), (_descriptor21 = _applyDecoratedDescriptor(_class30.prototype, 'length', [_dec40], {
  enumerable: true,
  initializer: function initializer() {
    return 120;
  }
})), _class30)) || _class29) || _class29);
var MdCheckbox = exports.MdCheckbox = (_dec41 = (0, _aureliaDependencyInjection.inject)(Element), _dec42 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec43 = (0, _aureliaTemplating.bindable)(), _dec44 = (0, _aureliaTemplating.bindable)(), _dec45 = (0, _aureliaTemplating.bindable)(), _dec46 = (0, _aureliaTemplating.bindable)(), _dec41(_class32 = (_class33 = (_temp = _class34 = function () {
  function MdCheckbox(element) {
    _classCallCheck(this, MdCheckbox);

    _initDefineProp(this, 'mdChecked', _descriptor22, this);

    _initDefineProp(this, 'mdDisabled', _descriptor23, this);

    _initDefineProp(this, 'mdFilledIn', _descriptor24, this);

    _initDefineProp(this, 'mdMatcher', _descriptor25, this);

    _initDefineProp(this, 'mdModel', _descriptor26, this);

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
}(), _class34.id = 0, _temp), (_descriptor22 = _applyDecoratedDescriptor(_class33.prototype, 'mdChecked', [_dec42], {
  enumerable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class33.prototype, 'mdDisabled', [_dec43], {
  enumerable: true,
  initializer: null
}), _descriptor24 = _applyDecoratedDescriptor(_class33.prototype, 'mdFilledIn', [_dec44], {
  enumerable: true,
  initializer: null
}), _descriptor25 = _applyDecoratedDescriptor(_class33.prototype, 'mdMatcher', [_dec45], {
  enumerable: true,
  initializer: null
}), _descriptor26 = _applyDecoratedDescriptor(_class33.prototype, 'mdModel', [_dec46], {
  enumerable: true,
  initializer: null
})), _class33)) || _class32);
var MdChip = exports.MdChip = (_dec47 = (0, _aureliaTemplating.customElement)('md-chip'), _dec48 = (0, _aureliaDependencyInjection.inject)(Element), _dec49 = (0, _aureliaTemplating.bindable)(), _dec47(_class35 = _dec48(_class35 = (_class36 = function () {
  function MdChip(element) {
    _classCallCheck(this, MdChip);

    _initDefineProp(this, 'mdClose', _descriptor27, this);

    this.element = element;
  }

  MdChip.prototype.attached = function attached() {
    this.mdClose = getBooleanFromAttributeValue(this.mdClose);
  };

  MdChip.prototype.close = function close() {
    this.element.parentElement.removeChild(this.element);
  };

  return MdChip;
}(), (_descriptor27 = _applyDecoratedDescriptor(_class36.prototype, 'mdClose', [_dec49], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class36)) || _class35) || _class35);
var MdChips = exports.MdChips = (_dec50 = (0, _aureliaTemplating.customAttribute)('md-chips'), _dec51 = (0, _aureliaDependencyInjection.inject)(Element), _dec52 = (0, _aureliaTemplating.bindable)(), _dec53 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec54 = (0, _aureliaTemplating.bindable)(), _dec55 = (0, _aureliaTemplating.bindable)(), _dec50(_class38 = _dec51(_class38 = (_class39 = function () {
  function MdChips(element) {
    _classCallCheck(this, MdChips);

    _initDefineProp(this, 'autocompleteData', _descriptor28, this);

    _initDefineProp(this, 'data', _descriptor29, this);

    _initDefineProp(this, 'placeholder', _descriptor30, this);

    _initDefineProp(this, 'secondaryPlaceholder', _descriptor31, this);

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
}(), (_descriptor28 = _applyDecoratedDescriptor(_class39.prototype, 'autocompleteData', [_dec52], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class39.prototype, 'data', [_dec53], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class39.prototype, 'placeholder', [_dec54], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class39.prototype, 'secondaryPlaceholder', [_dec55], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class39)) || _class38) || _class38);
var MdCollapsible = exports.MdCollapsible = (_dec56 = (0, _aureliaTemplating.customAttribute)('md-collapsible'), _dec57 = (0, _aureliaTemplating.bindable)({ name: 'accordion', defaultValue: false }), _dec58 = (0, _aureliaTemplating.bindable)({ name: 'popout', defaultValue: false }), _dec59 = (0, _aureliaTemplating.bindable)({ name: 'onOpen' }), _dec60 = (0, _aureliaTemplating.bindable)({ name: 'onClose' }), _dec61 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaEventAggregator.EventAggregator), _dec56(_class41 = _dec57(_class41 = _dec58(_class41 = _dec59(_class41 = _dec60(_class41 = _dec61(_class41 = function () {
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
}()) || _class41) || _class41) || _class41) || _class41) || _class41) || _class41);
var MdCollectionHeader = exports.MdCollectionHeader = (_dec62 = (0, _aureliaTemplating.customElement)('md-collection-header'), _dec63 = (0, _aureliaDependencyInjection.inject)(Element), _dec62(_class42 = _dec63(_class42 = function MdCollectionHeader(element) {
  _classCallCheck(this, MdCollectionHeader);

  this.element = element;
}) || _class42) || _class42);
var MdCollectionItem = exports.MdCollectionItem = (_dec64 = (0, _aureliaTemplating.customElement)('md-collection-item'), _dec64(_class43 = function MdCollectionItem() {
  _classCallCheck(this, MdCollectionItem);
}) || _class43);
var MdCollection = exports.MdCollection = (_dec65 = (0, _aureliaTemplating.customElement)('md-collection'), _dec66 = (0, _aureliaDependencyInjection.inject)(Element), _dec65(_class44 = _dec66(_class44 = function () {
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
}()) || _class44) || _class44);
var MdlListSelector = exports.MdlListSelector = (_dec67 = (0, _aureliaTemplating.customElement)('md-collection-selector'), _dec68 = (0, _aureliaDependencyInjection.inject)(Element), _dec69 = (0, _aureliaTemplating.bindable)(), _dec70 = (0, _aureliaTemplating.bindable)(), _dec71 = (0, _aureliaBinding.observable)(), _dec67(_class45 = _dec68(_class45 = (_class46 = function () {
  function MdlListSelector(element) {
    _classCallCheck(this, MdlListSelector);

    _initDefineProp(this, 'item', _descriptor32, this);

    _initDefineProp(this, 'mdDisabled', _descriptor33, this);

    _initDefineProp(this, 'isSelected', _descriptor34, this);

    this.element = element;
  }

  MdlListSelector.prototype.isSelectedChanged = function isSelectedChanged(newValue) {
    fireMaterializeEvent(this.element, 'selection-changed', { item: this.item, isSelected: this.isSelected });
  };

  MdlListSelector.prototype.mdDisabledChanged = function mdDisabledChanged(newValue) {
    this.mdDisabled = getBooleanFromAttributeValue(newValue);
  };

  return MdlListSelector;
}(), (_descriptor32 = _applyDecoratedDescriptor(_class46.prototype, 'item', [_dec69], {
  enumerable: true,
  initializer: null
}), _descriptor33 = _applyDecoratedDescriptor(_class46.prototype, 'mdDisabled', [_dec70], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor34 = _applyDecoratedDescriptor(_class46.prototype, 'isSelected', [_dec71], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class46)) || _class45) || _class45);

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

var MdColors = exports.MdColors = (_dec72 = (0, _aureliaTemplating.bindable)(), _dec73 = (0, _aureliaTemplating.bindable)(), _dec74 = (0, _aureliaTemplating.bindable)(), _dec75 = (0, _aureliaTemplating.bindable)(), (_class48 = function MdColors() {
  _classCallCheck(this, MdColors);

  _initDefineProp(this, 'mdPrimaryColor', _descriptor35, this);

  _initDefineProp(this, 'mdAccentColor', _descriptor36, this);

  _initDefineProp(this, 'mdErrorColor', _descriptor37, this);

  _initDefineProp(this, 'mdSuccessColor', _descriptor38, this);
}, (_descriptor35 = _applyDecoratedDescriptor(_class48.prototype, 'mdPrimaryColor', [_dec72], {
  enumerable: true,
  initializer: null
}), _descriptor36 = _applyDecoratedDescriptor(_class48.prototype, 'mdAccentColor', [_dec73], {
  enumerable: true,
  initializer: null
}), _descriptor37 = _applyDecoratedDescriptor(_class48.prototype, 'mdErrorColor', [_dec74], {
  enumerable: true,
  initializer: function initializer() {
    return '#F44336';
  }
}), _descriptor38 = _applyDecoratedDescriptor(_class48.prototype, 'mdSuccessColor', [_dec75], {
  enumerable: true,
  initializer: null
})), _class48));

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

var Ui5Container = exports.Ui5Container = (_dec76 = (0, _aureliaTemplating.customAttribute)('ui5-container'), _dec77 = (0, _aureliaDependencyInjection.inject)(Element), _dec76(_class51 = _dec77(_class51 = function () {
  function Ui5Container(element) {
    _classCallCheck(this, Ui5Container);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5Container.prototype.attached = function attached() {};

  Ui5Container.prototype.detached = function detached() {};

  return Ui5Container;
}()) || _class51) || _class51);

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

var DatePickerDefaultParser = exports.DatePickerDefaultParser = function () {
  function DatePickerDefaultParser() {
    _classCallCheck(this, DatePickerDefaultParser);
  }

  DatePickerDefaultParser.prototype.canParse = function canParse(value) {
    if (value) {
      return true;
    }
    return false;
  };

  DatePickerDefaultParser.prototype.parse = function parse(value) {
    if (value) {
      var result = value.split('/').join('-');
      result = new Date(result);
      return isNaN(result) ? null : result;
    }
    return null;
  };

  return DatePickerDefaultParser;
}();

var MdDatePicker = exports.MdDatePicker = (_dec78 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue, DatePickerDefaultParser), _dec79 = (0, _aureliaTemplating.customAttribute)('md-datepicker'), _dec80 = (0, _aureliaTemplating.bindable)(), _dec81 = (0, _aureliaTemplating.bindable)(), _dec82 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec83 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.twoWay }), _dec84 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec85 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec86 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec87 = (0, _aureliaTemplating.bindable)(), _dec78(_class52 = _dec79(_class52 = (_class53 = function () {
  function MdDatePicker(element, taskQueue, defaultParser) {
    _classCallCheck(this, MdDatePicker);

    _initDefineProp(this, 'container', _descriptor39, this);

    _initDefineProp(this, 'translation', _descriptor40, this);

    _initDefineProp(this, 'value', _descriptor41, this);

    _initDefineProp(this, 'parsers', _descriptor42, this);

    _initDefineProp(this, 'selectMonths', _descriptor43, this);

    _initDefineProp(this, 'selectYears', _descriptor44, this);

    _initDefineProp(this, 'options', _descriptor45, this);

    _initDefineProp(this, 'showErrortext', _descriptor46, this);

    this.element = element;
    this.log = (0, _aureliaLogging.getLogger)('md-datepicker');
    this.taskQueue = taskQueue;
    this.parsers.push(defaultParser);
  }

  MdDatePicker.prototype.bind = function bind() {
    var _this9 = this;

    this.selectMonths = getBooleanFromAttributeValue(this.selectMonths);
    this.selectYears = parseInt(this.selectYears, 10);
    this.element.classList.add('date-picker');

    var options = {
      selectMonths: this.selectMonths,
      selectYears: this.selectYears,
      onClose: function onClose() {
        $(document.activeElement).blur();
      }
    };
    var i18n = {};

    Object.assign(options, i18n);

    if (this.options) {
      Object.assign(options, this.options);

      if (this.options.onClose) {
        options.onClose = function () {
          this.options.onClose();
          $(document.activeElement).blur();
        };
      }
    }
    if (this.container) {
      options.container = this.container;
    }
    this.picker = $(this.element).pickadate(options).pickadate('picker');
    this.picker.on({
      'close': this.onClose.bind(this),
      'set': this.onSet.bind(this)
    });

    if (this.value) {
      this.picker.set('select', this.value);
    }
    if (this.options && this.options.editable) {
      $(this.element).on('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 9) {
          if (_this9.parseDate($(_this9.element).val())) {
            _this9.closeDatePicker();
          } else {
            _this9.openDatePicker();
          }
        } else {
          _this9.value = null;
        }
      });
    } else {
      $(this.element).on('focusin', function () {
        _this9.openDatePicker();
      });
    }
    if (this.options.showIcon) {
      this.element.classList.add('left');
      var calendarIcon = document.createElement('i');
      calendarIcon.classList.add('right');
      calendarIcon.classList.add('material-icons');
      calendarIcon.textContent = 'today';
      this.element.parentNode.insertBefore(calendarIcon, this.element.nextSibling);
      $(calendarIcon).on('click', this.onCalendarIconClick.bind(this));

      options.iconClass = options.iconClass || 'std-icon-fixup';
      calendarIcon.classList.add(options.iconClass);
    }

    this.movePickerCloserToSrc();
    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.parseDate = function parseDate(value) {
    if (this.parsers && this.parsers.length && this.parsers.length > 0) {
      for (var _iterator = this.parsers, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var parser = _ref;

        if (parser.canParse(value)) {
          var parsedDate = parser.parse(value);
          if (parsedDate !== null) {
            this.picker.set('select', parsedDate);
            return true;
          }
        }
      }
    }
    return false;
  };

  MdDatePicker.prototype.movePickerCloserToSrc = function movePickerCloserToSrc() {
    $(this.picker.$root).appendTo($(this.element).parent());
  };

  MdDatePicker.prototype.detached = function detached() {
    if (this.picker) {
      this.picker.stop();
    }
  };

  MdDatePicker.prototype.openDatePicker = function openDatePicker() {
    $(this.element).pickadate('open');
  };

  MdDatePicker.prototype.closeDatePicker = function closeDatePicker() {
    $(this.element).pickadate('close');
  };

  MdDatePicker.prototype.onClose = function onClose() {
    var selected = this.picker.get('select');
    this.value = selected ? selected.obj : null;
    fireEvent(this.element, 'blur');
  };

  MdDatePicker.prototype.onCalendarIconClick = function onCalendarIconClick(event) {
    event.stopPropagation();
    this.openDatePicker();
  };

  MdDatePicker.prototype.onSet = function onSet(value) {
    if (this.options && this.options.closeOnSelect && value.select) {
      this.value = value.select;
      this.picker.close();
    }
  };

  MdDatePicker.prototype.valueChanged = function valueChanged(newValue) {
    if (this.options.max && newValue > this.options.max) {
      this.value = this.options.max;
    }
    this.log.debug('selectedChanged', this.value);

    this.picker.set('select', this.value);
  };

  MdDatePicker.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdDatePicker.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    var element = this.element;
    if (!element) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    element.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  };

  return MdDatePicker;
}(), (_descriptor39 = _applyDecoratedDescriptor(_class53.prototype, 'container', [_dec80], {
  enumerable: true,
  initializer: null
}), _descriptor40 = _applyDecoratedDescriptor(_class53.prototype, 'translation', [_dec81], {
  enumerable: true,
  initializer: null
}), _descriptor41 = _applyDecoratedDescriptor(_class53.prototype, 'value', [_dec82], {
  enumerable: true,
  initializer: null
}), _descriptor42 = _applyDecoratedDescriptor(_class53.prototype, 'parsers', [_dec83], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor43 = _applyDecoratedDescriptor(_class53.prototype, 'selectMonths', [_dec84], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class53.prototype, 'selectYears', [_dec85], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class53.prototype, 'options', [_dec86], {
  enumerable: true,
  initializer: function initializer() {
    return {};
  }
}), _descriptor46 = _applyDecoratedDescriptor(_class53.prototype, 'showErrortext', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class53)) || _class52) || _class52);

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

var MdDropdownElement = exports.MdDropdownElement = (_dec88 = (0, _aureliaTemplating.customElement)('md-dropdown'), _dec89 = (0, _aureliaDependencyInjection.inject)(Element), _dec90 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec91 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec92 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec93 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec94 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec95 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec96 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec97 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec88(_class55 = _dec89(_class55 = (_class56 = (_temp2 = _class57 = function () {
  function MdDropdownElement(element) {
    _classCallCheck(this, MdDropdownElement);

    _initDefineProp(this, 'alignment', _descriptor47, this);

    _initDefineProp(this, 'belowOrigin', _descriptor48, this);

    _initDefineProp(this, 'constrainWidth', _descriptor49, this);

    _initDefineProp(this, 'gutter', _descriptor50, this);

    _initDefineProp(this, 'hover', _descriptor51, this);

    _initDefineProp(this, 'mdTitle', _descriptor52, this);

    _initDefineProp(this, 'inDuration', _descriptor53, this);

    _initDefineProp(this, 'outDuration', _descriptor54, this);

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
}(), _class57.id = 0, _temp2), (_descriptor47 = _applyDecoratedDescriptor(_class56.prototype, 'alignment', [_dec90], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor48 = _applyDecoratedDescriptor(_class56.prototype, 'belowOrigin', [_dec91], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor49 = _applyDecoratedDescriptor(_class56.prototype, 'constrainWidth', [_dec92], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class56.prototype, 'gutter', [_dec93], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class56.prototype, 'hover', [_dec94], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class56.prototype, 'mdTitle', [_dec95], {
  enumerable: true,
  initializer: null
}), _descriptor53 = _applyDecoratedDescriptor(_class56.prototype, 'inDuration', [_dec96], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor54 = _applyDecoratedDescriptor(_class56.prototype, 'outDuration', [_dec97], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class56)) || _class55) || _class55);
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

var MdDropdown = exports.MdDropdown = (_dec98 = (0, _aureliaTemplating.customAttribute)('md-dropdown'), _dec99 = (0, _aureliaDependencyInjection.inject)(Element), _dec100 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec101 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec102 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec103 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec104 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec105 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec106 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec107 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec108 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec109 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec98(_class58 = _dec99(_class58 = (_class59 = (_temp3 = _class60 = function () {
  function MdDropdown(element) {
    _classCallCheck(this, MdDropdown);

    _initDefineProp(this, 'activates', _descriptor55, this);

    _initDefineProp(this, 'ref', _descriptor56, this);

    _initDefineProp(this, 'alignment', _descriptor57, this);

    _initDefineProp(this, 'belowOrigin', _descriptor58, this);

    _initDefineProp(this, 'constrainWidth', _descriptor59, this);

    _initDefineProp(this, 'gutter', _descriptor60, this);

    _initDefineProp(this, 'hover', _descriptor61, this);

    _initDefineProp(this, 'mdTitle', _descriptor62, this);

    _initDefineProp(this, 'inDuration', _descriptor63, this);

    _initDefineProp(this, 'outDuration', _descriptor64, this);

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
}(), _class60.elementId = 0, _temp3), (_descriptor55 = _applyDecoratedDescriptor(_class59.prototype, 'activates', [_dec100], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor56 = _applyDecoratedDescriptor(_class59.prototype, 'ref', [_dec101], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor57 = _applyDecoratedDescriptor(_class59.prototype, 'alignment', [_dec102], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor58 = _applyDecoratedDescriptor(_class59.prototype, 'belowOrigin', [_dec103], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor59 = _applyDecoratedDescriptor(_class59.prototype, 'constrainWidth', [_dec104], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class59.prototype, 'gutter', [_dec105], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor61 = _applyDecoratedDescriptor(_class59.prototype, 'hover', [_dec106], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor62 = _applyDecoratedDescriptor(_class59.prototype, 'mdTitle', [_dec107], {
  enumerable: true,
  initializer: null
}), _descriptor63 = _applyDecoratedDescriptor(_class59.prototype, 'inDuration', [_dec108], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor64 = _applyDecoratedDescriptor(_class59.prototype, 'outDuration', [_dec109], {
  enumerable: true,
  initializer: function initializer() {
    return 225;
  }
})), _class59)) || _class58) || _class58);
var MdFab = exports.MdFab = (_dec110 = (0, _aureliaTemplating.customElement)('md-fab'), _dec111 = (0, _aureliaDependencyInjection.inject)(Element), _dec112 = (0, _aureliaTemplating.bindable)(), _dec113 = (0, _aureliaTemplating.bindable)(), _dec110(_class61 = _dec111(_class61 = (_class62 = function () {
  function MdFab(element) {
    _classCallCheck(this, MdFab);

    _initDefineProp(this, 'mdFixed', _descriptor65, this);

    _initDefineProp(this, 'mdLarge', _descriptor66, this);

    this.element = element;
  }

  MdFab.prototype.attached = function attached() {
    this.mdFixed = getBooleanFromAttributeValue(this.mdFixed);
    this.mdLarge = getBooleanFromAttributeValue(this.mdLarge);
  };

  return MdFab;
}(), (_descriptor65 = _applyDecoratedDescriptor(_class62.prototype, 'mdFixed', [_dec112], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor66 = _applyDecoratedDescriptor(_class62.prototype, 'mdLarge', [_dec113], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class62)) || _class61) || _class61);
var Ui5FeedContent = exports.Ui5FeedContent = (_dec114 = (0, _aureliaTemplating.customElement)('ui5-feed-content'), _dec115 = (0, _aureliaDependencyInjection.inject)(Element), _dec116 = (0, _aureliaTemplating.bindable)(), _dec117 = (0, _aureliaTemplating.bindable)(), _dec118 = (0, _aureliaTemplating.bindable)(), _dec119 = (0, _aureliaTemplating.bindable)(), _dec114(_class64 = _dec115(_class64 = (_class65 = function () {
  function Ui5FeedContent(element) {
    _classCallCheck(this, Ui5FeedContent);

    this._content = null;

    _initDefineProp(this, 'value', _descriptor67, this);

    _initDefineProp(this, 'contentText', _descriptor68, this);

    _initDefineProp(this, 'subheader', _descriptor69, this);

    _initDefineProp(this, 'valueColor', _descriptor70, this);

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
}(), (_descriptor67 = _applyDecoratedDescriptor(_class65.prototype, 'value', [_dec116], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor68 = _applyDecoratedDescriptor(_class65.prototype, 'contentText', [_dec117], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor69 = _applyDecoratedDescriptor(_class65.prototype, 'subheader', [_dec118], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor70 = _applyDecoratedDescriptor(_class65.prototype, 'valueColor', [_dec119], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class65)) || _class64) || _class64);
var MdFileInput = exports.MdFileInput = (_dec120 = (0, _aureliaTemplating.customElement)('md-file'), _dec121 = (0, _aureliaDependencyInjection.inject)(Element), _dec122 = (0, _aureliaTemplating.bindable)(), _dec123 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec124 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec125 = (0, _aureliaTemplating.bindable)(), _dec120(_class67 = _dec121(_class67 = (_class68 = function () {
  function MdFileInput(element) {
    _classCallCheck(this, MdFileInput);

    _initDefineProp(this, 'mdCaption', _descriptor71, this);

    _initDefineProp(this, 'mdMultiple', _descriptor72, this);

    _initDefineProp(this, 'mdLabelValue', _descriptor73, this);

    _initDefineProp(this, 'disabled', _descriptor74, this);

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
}(), (_descriptor71 = _applyDecoratedDescriptor(_class68.prototype, 'mdCaption', [_dec122], {
  enumerable: true,
  initializer: function initializer() {
    return 'File';
  }
}), _descriptor72 = _applyDecoratedDescriptor(_class68.prototype, 'mdMultiple', [_dec123], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor73 = _applyDecoratedDescriptor(_class68.prototype, 'mdLabelValue', [_dec124], {
  enumerable: true,
  initializer: null
}), _descriptor74 = _applyDecoratedDescriptor(_class68.prototype, 'disabled', [_dec125], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class68)) || _class67) || _class67);
var MdFooter = exports.MdFooter = (_dec126 = (0, _aureliaTemplating.customAttribute)('md-footer'), _dec127 = (0, _aureliaDependencyInjection.inject)(Element), _dec126(_class70 = _dec127(_class70 = function () {
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
}()) || _class70) || _class70);
var Ui5GenericTile = exports.Ui5GenericTile = (_dec128 = (0, _aureliaTemplating.customElement)('ui5-generic-tile'), _dec129 = (0, _aureliaDependencyInjection.inject)(Element), _dec130 = (0, _aureliaTemplating.bindable)(), _dec131 = (0, _aureliaTemplating.bindable)(), _dec132 = (0, _aureliaTemplating.bindable)(), _dec133 = (0, _aureliaTemplating.bindable)(), _dec134 = (0, _aureliaTemplating.bindable)(), _dec128(_class71 = _dec129(_class71 = (_class72 = function () {
  function Ui5GenericTile(element) {
    _classCallCheck(this, Ui5GenericTile);

    this._tile = null;

    _initDefineProp(this, 'mode', _descriptor75, this);

    _initDefineProp(this, 'header', _descriptor76, this);

    _initDefineProp(this, 'subheader', _descriptor77, this);

    _initDefineProp(this, 'press', _descriptor78, this);

    _initDefineProp(this, 'frameType', _descriptor79, this);

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
}(), (_descriptor75 = _applyDecoratedDescriptor(_class72.prototype, 'mode', [_dec130], {
  enumerable: true,
  initializer: function initializer() {
    return "content";
  }
}), _descriptor76 = _applyDecoratedDescriptor(_class72.prototype, 'header', [_dec131], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor77 = _applyDecoratedDescriptor(_class72.prototype, 'subheader', [_dec132], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor78 = _applyDecoratedDescriptor(_class72.prototype, 'press', [_dec133], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor79 = _applyDecoratedDescriptor(_class72.prototype, 'frameType', [_dec134], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class72)) || _class71) || _class71);
var Ui5Grid = exports.Ui5Grid = (_dec135 = (0, _aureliaTemplating.customElement)('ui5-grid'), _dec136 = (0, _aureliaDependencyInjection.inject)(Element), _dec137 = (0, _aureliaTemplating.bindable)(), _dec135(_class74 = _dec136(_class74 = (_class75 = function () {
  function Ui5Grid(element) {
    _classCallCheck(this, Ui5Grid);

    this._grid = null;

    _initDefineProp(this, 'defaultSpan', _descriptor80, this);

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
}(), (_descriptor80 = _applyDecoratedDescriptor(_class75.prototype, 'defaultSpan', [_dec137], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class75)) || _class74) || _class74);
var Ui5GridData = exports.Ui5GridData = (_dec138 = (0, _aureliaTemplating.customElement)('ui5-grid-data'), _dec139 = (0, _aureliaDependencyInjection.inject)(Element), _dec140 = (0, _aureliaTemplating.bindable)(), _dec141 = (0, _aureliaTemplating.bindable)(), _dec138(_class77 = _dec139(_class77 = (_class78 = function () {
  function Ui5GridData(element) {
    _classCallCheck(this, Ui5GridData);

    this._gridData = null;

    _initDefineProp(this, 'id', _descriptor81, this);

    _initDefineProp(this, 'span', _descriptor82, this);

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
}(), (_descriptor81 = _applyDecoratedDescriptor(_class78.prototype, 'id', [_dec140], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor82 = _applyDecoratedDescriptor(_class78.prototype, 'span', [_dec141], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class78)) || _class77) || _class77);
var Ui5Html = exports.Ui5Html = (_dec142 = (0, _aureliaTemplating.customElement)('ui5-html'), _dec143 = (0, _aureliaDependencyInjection.inject)(Element), _dec142(_class80 = _dec143(_class80 = function () {
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
}()) || _class80) || _class80);
var Ui5ImageContent = exports.Ui5ImageContent = (_dec144 = (0, _aureliaTemplating.customElement)('ui5-image-content'), _dec145 = (0, _aureliaDependencyInjection.inject)(Element), _dec146 = (0, _aureliaTemplating.bindable)(), _dec144(_class82 = _dec145(_class82 = (_class83 = function () {
  function Ui5ImageContent(element) {
    _classCallCheck(this, Ui5ImageContent);

    this._content = null;

    _initDefineProp(this, 'src', _descriptor83, this);

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
}(), (_descriptor83 = _applyDecoratedDescriptor(_class83.prototype, 'src', [_dec146], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class83)) || _class82) || _class82);
var Ui5Input = exports.Ui5Input = (_dec147 = (0, _aureliaTemplating.customElement)('ui5-input'), _dec148 = (0, _aureliaDependencyInjection.inject)(Element), _dec149 = (0, _aureliaTemplating.bindable)(), _dec150 = (0, _aureliaTemplating.bindable)(), _dec151 = (0, _aureliaTemplating.bindable)(), _dec152 = (0, _aureliaTemplating.bindable)(), _dec153 = (0, _aureliaTemplating.bindable)(), _dec154 = (0, _aureliaTemplating.bindable)(), _dec155 = (0, _aureliaTemplating.bindable)(), _dec156 = (0, _aureliaTemplating.bindable)(), _dec157 = (0, _aureliaTemplating.bindable)(), _dec158 = (0, _aureliaTemplating.bindable)(), _dec159 = (0, _aureliaTemplating.bindable)(), _dec160 = (0, _aureliaTemplating.bindable)(), _dec161 = (0, _aureliaTemplating.bindable)(), _dec162 = (0, _aureliaTemplating.bindable)(), _dec163 = (0, _aureliaTemplating.bindable)(), _dec164 = (0, _aureliaTemplating.bindable)(), _dec165 = (0, _aureliaTemplating.bindable)(), _dec166 = (0, _aureliaTemplating.bindable)(), _dec167 = (0, _aureliaTemplating.bindable)(), _dec168 = (0, _aureliaTemplating.bindable)(), _dec169 = (0, _aureliaTemplating.bindable)(), _dec170 = (0, _aureliaTemplating.bindable)(), _dec171 = (0, _aureliaTemplating.bindable)(), _dec172 = (0, _aureliaTemplating.bindable)(), _dec173 = (0, _aureliaTemplating.bindable)(), _dec174 = (0, _aureliaTemplating.bindable)(), _dec175 = (0, _aureliaTemplating.bindable)(), _dec176 = (0, _aureliaTemplating.bindable)(), _dec177 = (0, _aureliaTemplating.bindable)(), _dec178 = (0, _aureliaTemplating.bindable)(), _dec179 = (0, _aureliaTemplating.bindable)(), _dec180 = (0, _aureliaTemplating.bindable)(), _dec181 = (0, _aureliaTemplating.bindable)(), _dec182 = (0, _aureliaTemplating.bindable)(), _dec183 = (0, _aureliaTemplating.bindable)(), _dec184 = (0, _aureliaTemplating.bindable)(), _dec185 = (0, _aureliaTemplating.bindable)(), _dec186 = (0, _aureliaTemplating.bindable)(), _dec187 = (0, _aureliaTemplating.bindable)(), _dec188 = (0, _aureliaTemplating.bindable)(), _dec147(_class85 = _dec148(_class85 = (_class86 = function (_Ui5InputBase) {
  _inherits(Ui5Input, _Ui5InputBase);

  Ui5Input.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5InputBase.prototype.addChild.call(this, child, elem);
  };

  _createClass(Ui5Input, [{
    key: 'UIElement',
    get: function get() {
      return this._input;
    }
  }]);

  function Ui5Input(element) {
    _classCallCheck(this, Ui5Input);

    var _this10 = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

    _this10._input = null;

    _initDefineProp(_this10, 'ui5Id', _descriptor84, _this10);

    _initDefineProp(_this10, 'type', _descriptor85, _this10);

    _initDefineProp(_this10, 'maxLength', _descriptor86, _this10);

    _initDefineProp(_this10, 'dateFormat', _descriptor87, _this10);

    _initDefineProp(_this10, 'showValueHelp', _descriptor88, _this10);

    _initDefineProp(_this10, 'showSuggestion', _descriptor89, _this10);

    _initDefineProp(_this10, 'valueHelpOnly', _descriptor90, _this10);

    _initDefineProp(_this10, 'filterSuggests', _descriptor91, _this10);

    _initDefineProp(_this10, 'maxSuggestionWidth', _descriptor92, _this10);

    _initDefineProp(_this10, 'showTableSuggestionValueHelp', _descriptor93, _this10);

    _initDefineProp(_this10, 'description', _descriptor94, _this10);

    _initDefineProp(_this10, 'fieldWidth', _descriptor95, _this10);

    _initDefineProp(_this10, 'valueLiveUpdate', _descriptor96, _this10);

    _initDefineProp(_this10, 'selectedKey', _descriptor97, _this10);

    _initDefineProp(_this10, 'textFormatMode', _descriptor98, _this10);

    _initDefineProp(_this10, 'textFormatter', _descriptor99, _this10);

    _initDefineProp(_this10, 'suggestionRowValidator', _descriptor100, _this10);

    _initDefineProp(_this10, 'suggestionItems', _descriptor101, _this10);

    _initDefineProp(_this10, 'suggestionColumns', _descriptor102, _this10);

    _initDefineProp(_this10, 'suggestionRows', _descriptor103, _this10);

    _initDefineProp(_this10, 'selectedItem', _descriptor104, _this10);

    _initDefineProp(_this10, 'selectedRow', _descriptor105, _this10);

    _initDefineProp(_this10, 'liveChange', _descriptor106, _this10);

    _initDefineProp(_this10, 'valueHelpRequest', _descriptor107, _this10);

    _initDefineProp(_this10, 'suggest', _descriptor108, _this10);

    _initDefineProp(_this10, 'suggestionItemSelected', _descriptor109, _this10);

    _initDefineProp(_this10, 'submit', _descriptor110, _this10);

    _initDefineProp(_this10, 'value', _descriptor111, _this10);

    _initDefineProp(_this10, 'width', _descriptor112, _this10);

    _initDefineProp(_this10, 'enabled', _descriptor113, _this10);

    _initDefineProp(_this10, 'valueState', _descriptor114, _this10);

    _initDefineProp(_this10, 'name', _descriptor115, _this10);

    _initDefineProp(_this10, 'placeholder', _descriptor116, _this10);

    _initDefineProp(_this10, 'editable', _descriptor117, _this10);

    _initDefineProp(_this10, 'valueStateText', _descriptor118, _this10);

    _initDefineProp(_this10, 'showValueStateMessage', _descriptor119, _this10);

    _initDefineProp(_this10, 'textAlign', _descriptor120, _this10);

    _initDefineProp(_this10, 'textDirection', _descriptor121, _this10);

    _initDefineProp(_this10, 'required', _descriptor122, _this10);

    _initDefineProp(_this10, 'change', _descriptor123, _this10);

    _this10.element = element;
    return _this10;
  }

  Ui5Input.prototype.defaultFunc = function defaultFunc() {};

  Ui5Input.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._input = new sap.m.Input(this.ui5Id, {
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
      valueHelpRequest: this.valueHelpRequest,
      suggest: this.suggest,
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
    });
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._input, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
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
    _Ui5InputBase.prototype.attached.call(this);
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
}(Ui5InputBase), (_descriptor84 = _applyDecoratedDescriptor(_class86.prototype, 'ui5Id', [_dec149], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor85 = _applyDecoratedDescriptor(_class86.prototype, 'type', [_dec150], {
  enumerable: true,
  initializer: function initializer() {
    return 'Text';
  }
}), _descriptor86 = _applyDecoratedDescriptor(_class86.prototype, 'maxLength', [_dec151], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor87 = _applyDecoratedDescriptor(_class86.prototype, 'dateFormat', [_dec152], {
  enumerable: true,
  initializer: function initializer() {
    return 'YYYY-MM-DD';
  }
}), _descriptor88 = _applyDecoratedDescriptor(_class86.prototype, 'showValueHelp', [_dec153], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor89 = _applyDecoratedDescriptor(_class86.prototype, 'showSuggestion', [_dec154], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor90 = _applyDecoratedDescriptor(_class86.prototype, 'valueHelpOnly', [_dec155], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor91 = _applyDecoratedDescriptor(_class86.prototype, 'filterSuggests', [_dec156], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor92 = _applyDecoratedDescriptor(_class86.prototype, 'maxSuggestionWidth', [_dec157], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor93 = _applyDecoratedDescriptor(_class86.prototype, 'showTableSuggestionValueHelp', [_dec158], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor94 = _applyDecoratedDescriptor(_class86.prototype, 'description', [_dec159], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor95 = _applyDecoratedDescriptor(_class86.prototype, 'fieldWidth', [_dec160], {
  enumerable: true,
  initializer: function initializer() {
    return '50%';
  }
}), _descriptor96 = _applyDecoratedDescriptor(_class86.prototype, 'valueLiveUpdate', [_dec161], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor97 = _applyDecoratedDescriptor(_class86.prototype, 'selectedKey', [_dec162], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor98 = _applyDecoratedDescriptor(_class86.prototype, 'textFormatMode', [_dec163], {
  enumerable: true,
  initializer: function initializer() {
    return 'Value';
  }
}), _descriptor99 = _applyDecoratedDescriptor(_class86.prototype, 'textFormatter', [_dec164], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor100 = _applyDecoratedDescriptor(_class86.prototype, 'suggestionRowValidator', [_dec165], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class86.prototype, 'suggestionItems', [_dec166], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor102 = _applyDecoratedDescriptor(_class86.prototype, 'suggestionColumns', [_dec167], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor103 = _applyDecoratedDescriptor(_class86.prototype, 'suggestionRows', [_dec168], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor104 = _applyDecoratedDescriptor(_class86.prototype, 'selectedItem', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor105 = _applyDecoratedDescriptor(_class86.prototype, 'selectedRow', [_dec170], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor106 = _applyDecoratedDescriptor(_class86.prototype, 'liveChange', [_dec171], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor107 = _applyDecoratedDescriptor(_class86.prototype, 'valueHelpRequest', [_dec172], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor108 = _applyDecoratedDescriptor(_class86.prototype, 'suggest', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor109 = _applyDecoratedDescriptor(_class86.prototype, 'suggestionItemSelected', [_dec174], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor110 = _applyDecoratedDescriptor(_class86.prototype, 'submit', [_dec175], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor111 = _applyDecoratedDescriptor(_class86.prototype, 'value', [_dec176], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor112 = _applyDecoratedDescriptor(_class86.prototype, 'width', [_dec177], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor113 = _applyDecoratedDescriptor(_class86.prototype, 'enabled', [_dec178], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor114 = _applyDecoratedDescriptor(_class86.prototype, 'valueState', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor115 = _applyDecoratedDescriptor(_class86.prototype, 'name', [_dec180], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor116 = _applyDecoratedDescriptor(_class86.prototype, 'placeholder', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor117 = _applyDecoratedDescriptor(_class86.prototype, 'editable', [_dec182], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor118 = _applyDecoratedDescriptor(_class86.prototype, 'valueStateText', [_dec183], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor119 = _applyDecoratedDescriptor(_class86.prototype, 'showValueStateMessage', [_dec184], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor120 = _applyDecoratedDescriptor(_class86.prototype, 'textAlign', [_dec185], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor121 = _applyDecoratedDescriptor(_class86.prototype, 'textDirection', [_dec186], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor122 = _applyDecoratedDescriptor(_class86.prototype, 'required', [_dec187], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor123 = _applyDecoratedDescriptor(_class86.prototype, 'change', [_dec188], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class86)) || _class85) || _class85);
var Ui5InputBase = exports.Ui5InputBase = (_dec189 = (0, _aureliaTemplating.customElement)('ui5-input-base'), _dec190 = (0, _aureliaDependencyInjection.inject)(Element), _dec191 = (0, _aureliaTemplating.bindable)(), _dec192 = (0, _aureliaTemplating.bindable)(), _dec193 = (0, _aureliaTemplating.bindable)(), _dec194 = (0, _aureliaTemplating.bindable)(), _dec195 = (0, _aureliaTemplating.bindable)(), _dec196 = (0, _aureliaTemplating.bindable)(), _dec197 = (0, _aureliaTemplating.bindable)(), _dec198 = (0, _aureliaTemplating.bindable)(), _dec199 = (0, _aureliaTemplating.bindable)(), _dec200 = (0, _aureliaTemplating.bindable)(), _dec201 = (0, _aureliaTemplating.bindable)(), _dec202 = (0, _aureliaTemplating.bindable)(), _dec203 = (0, _aureliaTemplating.bindable)(), _dec189(_class88 = _dec190(_class88 = (_class89 = function (_Ui5Control) {
  _inherits(Ui5InputBase, _Ui5Control);

  function Ui5InputBase(element) {
    _classCallCheck(this, Ui5InputBase);

    var _this11 = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

    _this11._input = null;

    _initDefineProp(_this11, 'value', _descriptor124, _this11);

    _initDefineProp(_this11, 'width', _descriptor125, _this11);

    _initDefineProp(_this11, 'enabled', _descriptor126, _this11);

    _initDefineProp(_this11, 'valueState', _descriptor127, _this11);

    _initDefineProp(_this11, 'name', _descriptor128, _this11);

    _initDefineProp(_this11, 'placeholder', _descriptor129, _this11);

    _initDefineProp(_this11, 'editable', _descriptor130, _this11);

    _initDefineProp(_this11, 'valueStateText', _descriptor131, _this11);

    _initDefineProp(_this11, 'showValueStateMessage', _descriptor132, _this11);

    _initDefineProp(_this11, 'textAlign', _descriptor133, _this11);

    _initDefineProp(_this11, 'textDirection', _descriptor134, _this11);

    _initDefineProp(_this11, 'required', _descriptor135, _this11);

    _initDefineProp(_this11, 'change', _descriptor136, _this11);

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
    if (this._input !== null) {
      this._input.setValue(newValue);
    }
  };

  Ui5InputBase.prototype.widthChanged = function widthChanged(newValue) {
    if (this._input !== null) {
      this._input.setWidth(newValue);
    }
  };

  Ui5InputBase.prototype.enabledChanged = function enabledChanged(newValue) {
    if (this._input !== null) {
      this._input.setEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.valueStateChanged = function valueStateChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueState(newValue);
    }
  };

  Ui5InputBase.prototype.nameChanged = function nameChanged(newValue) {
    if (this._input !== null) {
      this._input.setName(newValue);
    }
  };

  Ui5InputBase.prototype.placeholderChanged = function placeholderChanged(newValue) {
    if (this._input !== null) {
      this._input.setPlaceholder(newValue);
    }
  };

  Ui5InputBase.prototype.editableChanged = function editableChanged(newValue) {
    if (this._input !== null) {
      this._input.setEditable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.valueStateTextChanged = function valueStateTextChanged(newValue) {
    if (this._input !== null) {
      this._input.setValueStateText(newValue);
    }
  };

  Ui5InputBase.prototype.showValueStateMessageChanged = function showValueStateMessageChanged(newValue) {
    if (this._input !== null) {
      this._input.setShowValueStateMessage(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.textAlignChanged = function textAlignChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextAlign(newValue);
    }
  };

  Ui5InputBase.prototype.textDirectionChanged = function textDirectionChanged(newValue) {
    if (this._input !== null) {
      this._input.setTextDirection(newValue);
    }
  };

  Ui5InputBase.prototype.requiredChanged = function requiredChanged(newValue) {
    if (this._input !== null) {
      this._input.setRequired(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5InputBase.prototype.changeChanged = function changeChanged(newValue) {
    if (this._input !== null) {
      this._input.attachChange(newValue);
    }
  };

  return Ui5InputBase;
}(Ui5Control), (_descriptor124 = _applyDecoratedDescriptor(_class89.prototype, 'value', [_dec191], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor125 = _applyDecoratedDescriptor(_class89.prototype, 'width', [_dec192], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor126 = _applyDecoratedDescriptor(_class89.prototype, 'enabled', [_dec193], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor127 = _applyDecoratedDescriptor(_class89.prototype, 'valueState', [_dec194], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor128 = _applyDecoratedDescriptor(_class89.prototype, 'name', [_dec195], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor129 = _applyDecoratedDescriptor(_class89.prototype, 'placeholder', [_dec196], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor130 = _applyDecoratedDescriptor(_class89.prototype, 'editable', [_dec197], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor131 = _applyDecoratedDescriptor(_class89.prototype, 'valueStateText', [_dec198], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor132 = _applyDecoratedDescriptor(_class89.prototype, 'showValueStateMessage', [_dec199], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor133 = _applyDecoratedDescriptor(_class89.prototype, 'textAlign', [_dec200], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor134 = _applyDecoratedDescriptor(_class89.prototype, 'textDirection', [_dec201], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor135 = _applyDecoratedDescriptor(_class89.prototype, 'required', [_dec202], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor136 = _applyDecoratedDescriptor(_class89.prototype, 'change', [_dec203], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class89)) || _class88) || _class88);
var Ui5Label = exports.Ui5Label = (_dec204 = (0, _aureliaTemplating.customElement)('ui5-label'), _dec205 = (0, _aureliaDependencyInjection.inject)(Element), _dec206 = (0, _aureliaTemplating.bindable)(), _dec207 = (0, _aureliaTemplating.bindable)(), _dec208 = (0, _aureliaTemplating.bindable)(), _dec209 = (0, _aureliaTemplating.bindable)(), _dec210 = (0, _aureliaTemplating.bindable)(), _dec211 = (0, _aureliaTemplating.bindable)(), _dec204(_class91 = _dec205(_class91 = (_class92 = function () {
  function Ui5Label(element) {
    _classCallCheck(this, Ui5Label);

    this._label = null;

    _initDefineProp(this, 'ui5Id', _descriptor137, this);

    _initDefineProp(this, 'labelFor', _descriptor138, this);

    _initDefineProp(this, 'text', _descriptor139, this);

    _initDefineProp(this, 'required', _descriptor140, this);

    _initDefineProp(this, 'textAlign', _descriptor141, this);

    _initDefineProp(this, 'textDirection', _descriptor142, this);

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
}(), (_descriptor137 = _applyDecoratedDescriptor(_class92.prototype, 'ui5Id', [_dec206], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor138 = _applyDecoratedDescriptor(_class92.prototype, 'labelFor', [_dec207], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor139 = _applyDecoratedDescriptor(_class92.prototype, 'text', [_dec208], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor140 = _applyDecoratedDescriptor(_class92.prototype, 'required', [_dec209], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor141 = _applyDecoratedDescriptor(_class92.prototype, 'textAlign', [_dec210], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor142 = _applyDecoratedDescriptor(_class92.prototype, 'textDirection', [_dec211], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class92)) || _class91) || _class91);
var Ui5MessageStrip = exports.Ui5MessageStrip = (_dec212 = (0, _aureliaTemplating.customElement)('ui5-message-strip'), _dec213 = (0, _aureliaDependencyInjection.inject)(Element), _dec212(_class94 = _dec213(_class94 = (_class95 = function () {
  function Ui5MessageStrip(element) {
    _classCallCheck(this, Ui5MessageStrip);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor143, this);

    _initDefineProp(this, 'text', _descriptor144, this);

    _initDefineProp(this, 'wrapping', _descriptor145, this);

    _initDefineProp(this, 'textAlign', _descriptor146, this);

    _initDefineProp(this, 'maxLines', _descriptor147, this);

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
}(), (_descriptor143 = _applyDecoratedDescriptor(_class95.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor144 = _applyDecoratedDescriptor(_class95.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor145 = _applyDecoratedDescriptor(_class95.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor146 = _applyDecoratedDescriptor(_class95.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor147 = _applyDecoratedDescriptor(_class95.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class95)) || _class94) || _class94);
var MdModalTrigger = exports.MdModalTrigger = (_dec214 = (0, _aureliaTemplating.customAttribute)('md-modal-trigger'), _dec215 = (0, _aureliaDependencyInjection.inject)(Element), _dec216 = (0, _aureliaTemplating.bindable)(), _dec214(_class97 = _dec215(_class97 = (_class98 = function () {
  function MdModalTrigger(element) {
    _classCallCheck(this, MdModalTrigger);

    _initDefineProp(this, 'dismissible', _descriptor148, this);

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
}(), (_descriptor148 = _applyDecoratedDescriptor(_class98.prototype, 'dismissible', [_dec216], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class98)) || _class97) || _class97);
var MdModal = exports.MdModal = (_dec217 = (0, _aureliaTemplating.customAttribute)('md-modal'), _dec218 = (0, _aureliaDependencyInjection.inject)(Element), _dec219 = (0, _aureliaTemplating.bindable)(), _dec220 = (0, _aureliaTemplating.bindable)(), _dec221 = (0, _aureliaTemplating.bindable)(), _dec222 = (0, _aureliaTemplating.bindable)(), _dec223 = (0, _aureliaTemplating.bindable)(), _dec224 = (0, _aureliaTemplating.bindable)(), _dec217(_class100 = _dec218(_class100 = (_class101 = function () {
  function MdModal(element) {
    _classCallCheck(this, MdModal);

    _initDefineProp(this, 'dismissible', _descriptor149, this);

    _initDefineProp(this, 'opacity', _descriptor150, this);

    _initDefineProp(this, 'inDuration', _descriptor151, this);

    _initDefineProp(this, 'outDuration', _descriptor152, this);

    _initDefineProp(this, 'startingTop', _descriptor153, this);

    _initDefineProp(this, 'endingTop', _descriptor154, this);

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
}(), (_descriptor149 = _applyDecoratedDescriptor(_class101.prototype, 'dismissible', [_dec219], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor150 = _applyDecoratedDescriptor(_class101.prototype, 'opacity', [_dec220], {
  enumerable: true,
  initializer: function initializer() {
    return 0.5;
  }
}), _descriptor151 = _applyDecoratedDescriptor(_class101.prototype, 'inDuration', [_dec221], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
}), _descriptor152 = _applyDecoratedDescriptor(_class101.prototype, 'outDuration', [_dec222], {
  enumerable: true,
  initializer: function initializer() {
    return 200;
  }
}), _descriptor153 = _applyDecoratedDescriptor(_class101.prototype, 'startingTop', [_dec223], {
  enumerable: true,
  initializer: function initializer() {
    return '4%';
  }
}), _descriptor154 = _applyDecoratedDescriptor(_class101.prototype, 'endingTop', [_dec224], {
  enumerable: true,
  initializer: function initializer() {
    return '10%';
  }
})), _class101)) || _class100) || _class100);
var MdNavbar = exports.MdNavbar = (_dec225 = (0, _aureliaTemplating.customElement)('md-navbar'), _dec226 = (0, _aureliaDependencyInjection.inject)(Element), _dec227 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec228 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec225(_class103 = _dec226(_class103 = (_class104 = function () {
  function MdNavbar(element) {
    _classCallCheck(this, MdNavbar);

    _initDefineProp(this, 'mdFixed', _descriptor155, this);

    _initDefineProp(this, 'mdAutoHeight', _descriptor156, this);

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
}(), (_descriptor155 = _applyDecoratedDescriptor(_class104.prototype, 'mdFixed', [_dec227], {
  enumerable: true,
  initializer: null
}), _descriptor156 = _applyDecoratedDescriptor(_class104.prototype, 'mdAutoHeight', [_dec228], {
  enumerable: true,
  initializer: null
})), _class104)) || _class103) || _class103);
var Ui5NumericContent = exports.Ui5NumericContent = (_dec229 = (0, _aureliaTemplating.customElement)('ui5-numeric-content'), _dec230 = (0, _aureliaDependencyInjection.inject)(Element), _dec231 = (0, _aureliaTemplating.bindable)(), _dec232 = (0, _aureliaTemplating.bindable)(), _dec233 = (0, _aureliaTemplating.bindable)(), _dec234 = (0, _aureliaTemplating.bindable)(), _dec235 = (0, _aureliaTemplating.bindable)(), _dec229(_class106 = _dec230(_class106 = (_class107 = function () {
  function Ui5NumericContent(element) {
    _classCallCheck(this, Ui5NumericContent);

    this._content = null;

    _initDefineProp(this, 'icon', _descriptor157, this);

    _initDefineProp(this, 'value', _descriptor158, this);

    _initDefineProp(this, 'indicator', _descriptor159, this);

    _initDefineProp(this, 'scale', _descriptor160, this);

    _initDefineProp(this, 'valueColor', _descriptor161, this);

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
}(), (_descriptor157 = _applyDecoratedDescriptor(_class107.prototype, 'icon', [_dec231], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor158 = _applyDecoratedDescriptor(_class107.prototype, 'value', [_dec232], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor159 = _applyDecoratedDescriptor(_class107.prototype, 'indicator', [_dec233], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor160 = _applyDecoratedDescriptor(_class107.prototype, 'scale', [_dec234], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor161 = _applyDecoratedDescriptor(_class107.prototype, 'valueColor', [_dec235], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class107)) || _class106) || _class106);
var Ui5Page = exports.Ui5Page = (_dec236 = (0, _aureliaTemplating.customElement)('ui5-page'), _dec237 = (0, _aureliaDependencyInjection.inject)(Element), _dec238 = (0, _aureliaTemplating.bindable)(), _dec239 = (0, _aureliaTemplating.bindable)(), _dec240 = (0, _aureliaTemplating.bindable)(), _dec241 = (0, _aureliaTemplating.bindable)(), _dec236(_class109 = _dec237(_class109 = (_class110 = function () {
  function Ui5Page(element) {
    _classCallCheck(this, Ui5Page);

    _initDefineProp(this, 'title', _descriptor162, this);

    _initDefineProp(this, 'showHeader', _descriptor163, this);

    _initDefineProp(this, 'showFooter', _descriptor164, this);

    _initDefineProp(this, 'showNavButton', _descriptor165, this);

    this._page = null;

    this.element = element;
  }

  Ui5Page.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'subheader') this._page.setSubHeader(child);
    if (path[0].localName == 'content') this._page.addContent(child);
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
    } else {
      page.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
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
}(), (_descriptor162 = _applyDecoratedDescriptor(_class110.prototype, 'title', [_dec238], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor163 = _applyDecoratedDescriptor(_class110.prototype, 'showHeader', [_dec239], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor164 = _applyDecoratedDescriptor(_class110.prototype, 'showFooter', [_dec240], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor165 = _applyDecoratedDescriptor(_class110.prototype, 'showNavButton', [_dec241], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class110)) || _class109) || _class109);
var MdPagination = exports.MdPagination = (_dec242 = (0, _aureliaTemplating.customElement)('md-pagination'), _dec243 = (0, _aureliaDependencyInjection.inject)(Element), _dec244 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec245 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec246 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec247 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneWay
}), _dec248 = (0, _aureliaTemplating.bindable)(), _dec249 = (0, _aureliaTemplating.bindable)(), _dec250 = (0, _aureliaTemplating.bindable)(), _dec242(_class112 = _dec243(_class112 = (_class113 = function () {
  function MdPagination(element) {
    _classCallCheck(this, MdPagination);

    _initDefineProp(this, 'mdActivePage', _descriptor166, this);

    _initDefineProp(this, 'mdPages', _descriptor167, this);

    _initDefineProp(this, 'mdVisiblePageLinks', _descriptor168, this);

    _initDefineProp(this, 'mdPageLinks', _descriptor169, this);

    _initDefineProp(this, 'mdShowFirstLast', _descriptor170, this);

    _initDefineProp(this, 'mdShowPrevNext', _descriptor171, this);

    _initDefineProp(this, 'mdShowPageLinks', _descriptor172, this);

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
}(), (_descriptor166 = _applyDecoratedDescriptor(_class113.prototype, 'mdActivePage', [_dec244], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor167 = _applyDecoratedDescriptor(_class113.prototype, 'mdPages', [_dec245], {
  enumerable: true,
  initializer: function initializer() {
    return 5;
  }
}), _descriptor168 = _applyDecoratedDescriptor(_class113.prototype, 'mdVisiblePageLinks', [_dec246], {
  enumerable: true,
  initializer: function initializer() {
    return 15;
  }
}), _descriptor169 = _applyDecoratedDescriptor(_class113.prototype, 'mdPageLinks', [_dec247], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor170 = _applyDecoratedDescriptor(_class113.prototype, 'mdShowFirstLast', [_dec248], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor171 = _applyDecoratedDescriptor(_class113.prototype, 'mdShowPrevNext', [_dec249], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor172 = _applyDecoratedDescriptor(_class113.prototype, 'mdShowPageLinks', [_dec250], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class113)) || _class112) || _class112);
var MdParallax = exports.MdParallax = (_dec251 = (0, _aureliaTemplating.customAttribute)('md-parallax'), _dec252 = (0, _aureliaDependencyInjection.inject)(Element), _dec251(_class115 = _dec252(_class115 = function () {
  function MdParallax(element) {
    _classCallCheck(this, MdParallax);

    this.element = element;
  }

  MdParallax.prototype.attached = function attached() {
    $(this.element).parallax();
  };

  MdParallax.prototype.detached = function detached() {};

  return MdParallax;
}()) || _class115) || _class115);
var MdProgress = exports.MdProgress = (_dec253 = (0, _aureliaTemplating.customElement)('md-progress'), _dec254 = (0, _aureliaDependencyInjection.inject)(Element), _dec255 = (0, _aureliaTemplating.bindable)(), _dec256 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec257 = (0, _aureliaTemplating.bindable)(), _dec258 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec259 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec253(_class116 = _dec254(_class116 = (_class117 = function () {
  function MdProgress(element) {
    _classCallCheck(this, MdProgress);

    _initDefineProp(this, 'mdColor', _descriptor173, this);

    _initDefineProp(this, 'mdPixelSize', _descriptor174, this);

    _initDefineProp(this, 'mdSize', _descriptor175, this);

    _initDefineProp(this, 'mdType', _descriptor176, this);

    _initDefineProp(this, 'mdValue', _descriptor177, this);

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
}(), (_descriptor173 = _applyDecoratedDescriptor(_class117.prototype, 'mdColor', [_dec255], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor174 = _applyDecoratedDescriptor(_class117.prototype, 'mdPixelSize', [_dec256], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor175 = _applyDecoratedDescriptor(_class117.prototype, 'mdSize', [_dec257], {
  enumerable: true,
  initializer: function initializer() {
    return 'big';
  }
}), _descriptor176 = _applyDecoratedDescriptor(_class117.prototype, 'mdType', [_dec258], {
  enumerable: true,
  initializer: function initializer() {
    return 'linear';
  }
}), _descriptor177 = _applyDecoratedDescriptor(_class117.prototype, 'mdValue', [_dec259], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class117)) || _class116) || _class116);
var MdPushpin = exports.MdPushpin = (_dec260 = (0, _aureliaTemplating.customAttribute)('md-pushpin'), _dec261 = (0, _aureliaDependencyInjection.inject)(Element), _dec262 = (0, _aureliaTemplating.bindable)(), _dec263 = (0, _aureliaTemplating.bindable)(), _dec264 = (0, _aureliaTemplating.bindable)(), _dec260(_class119 = _dec261(_class119 = (_class120 = function () {
  function MdPushpin(element) {
    _classCallCheck(this, MdPushpin);

    _initDefineProp(this, 'bottom', _descriptor178, this);

    _initDefineProp(this, 'offset', _descriptor179, this);

    _initDefineProp(this, 'top', _descriptor180, this);

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
}(), (_descriptor178 = _applyDecoratedDescriptor(_class120.prototype, 'bottom', [_dec262], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor179 = _applyDecoratedDescriptor(_class120.prototype, 'offset', [_dec263], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor180 = _applyDecoratedDescriptor(_class120.prototype, 'top', [_dec264], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class120)) || _class119) || _class119);
var MdRadio = exports.MdRadio = (_dec265 = (0, _aureliaTemplating.customElement)('md-radio'), _dec266 = (0, _aureliaDependencyInjection.inject)(Element), _dec267 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec268 = (0, _aureliaTemplating.bindable)(), _dec269 = (0, _aureliaTemplating.bindable)(), _dec270 = (0, _aureliaTemplating.bindable)(), _dec271 = (0, _aureliaTemplating.bindable)(), _dec272 = (0, _aureliaTemplating.bindable)(), _dec265(_class122 = _dec266(_class122 = (_class123 = (_temp4 = _class124 = function () {
  function MdRadio(element) {
    _classCallCheck(this, MdRadio);

    _initDefineProp(this, 'mdChecked', _descriptor181, this);

    _initDefineProp(this, 'mdDisabled', _descriptor182, this);

    _initDefineProp(this, 'mdGap', _descriptor183, this);

    _initDefineProp(this, 'mdModel', _descriptor184, this);

    _initDefineProp(this, 'mdName', _descriptor185, this);

    _initDefineProp(this, 'mdValue', _descriptor186, this);

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
}(), _class124.id = 0, _temp4), (_descriptor181 = _applyDecoratedDescriptor(_class123.prototype, 'mdChecked', [_dec267], {
  enumerable: true,
  initializer: null
}), _descriptor182 = _applyDecoratedDescriptor(_class123.prototype, 'mdDisabled', [_dec268], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor183 = _applyDecoratedDescriptor(_class123.prototype, 'mdGap', [_dec269], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor184 = _applyDecoratedDescriptor(_class123.prototype, 'mdModel', [_dec270], {
  enumerable: true,
  initializer: null
}), _descriptor185 = _applyDecoratedDescriptor(_class123.prototype, 'mdName', [_dec271], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor186 = _applyDecoratedDescriptor(_class123.prototype, 'mdValue', [_dec272], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class123)) || _class122) || _class122);
var MdRange = exports.MdRange = (_dec273 = (0, _aureliaTemplating.customElement)('md-range'), _dec274 = (0, _aureliaDependencyInjection.inject)(Element), _dec275 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec276 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec277 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec278 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec273(_class125 = _dec274(_class125 = (_class126 = function MdRange(element) {
  _classCallCheck(this, MdRange);

  _initDefineProp(this, 'mdMin', _descriptor187, this);

  _initDefineProp(this, 'mdMax', _descriptor188, this);

  _initDefineProp(this, 'mdStep', _descriptor189, this);

  _initDefineProp(this, 'mdValue', _descriptor190, this);

  this.element = element;
  this.log = (0, _aureliaLogging.getLogger)('md-range');
}, (_descriptor187 = _applyDecoratedDescriptor(_class126.prototype, 'mdMin', [_dec275], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor188 = _applyDecoratedDescriptor(_class126.prototype, 'mdMax', [_dec276], {
  enumerable: true,
  initializer: function initializer() {
    return 100;
  }
}), _descriptor189 = _applyDecoratedDescriptor(_class126.prototype, 'mdStep', [_dec277], {
  enumerable: true,
  initializer: function initializer() {
    return 1;
  }
}), _descriptor190 = _applyDecoratedDescriptor(_class126.prototype, 'mdValue', [_dec278], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class126)) || _class125) || _class125);
var ScrollfirePatch = exports.ScrollfirePatch = (_temp5 = _class128 = function () {
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
}(), _class128.patched = false, _temp5);
var MdScrollfireTarget = exports.MdScrollfireTarget = (_dec279 = (0, _aureliaTemplating.customAttribute)('md-scrollfire-target'), _dec280 = (0, _aureliaDependencyInjection.inject)(Element), _dec281 = (0, _aureliaTemplating.bindable)(), _dec282 = (0, _aureliaTemplating.bindable)(), _dec279(_class129 = _dec280(_class129 = (_class130 = function MdScrollfireTarget(element) {
  _classCallCheck(this, MdScrollfireTarget);

  _initDefineProp(this, 'callback', _descriptor191, this);

  _initDefineProp(this, 'offset', _descriptor192, this);

  this.element = element;
}, (_descriptor191 = _applyDecoratedDescriptor(_class130.prototype, 'callback', [_dec281], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor192 = _applyDecoratedDescriptor(_class130.prototype, 'offset', [_dec282], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
})), _class130)) || _class129) || _class129);
var MdScrollfire = exports.MdScrollfire = (_dec283 = (0, _aureliaTemplating.customAttribute)('md-scrollfire'), _dec284 = (0, _aureliaDependencyInjection.inject)(Element), _dec283(_class132 = _dec284(_class132 = function () {
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
}()) || _class132) || _class132);
var MdScrollSpy = exports.MdScrollSpy = (_dec285 = (0, _aureliaTemplating.customAttribute)('md-scrollspy'), _dec286 = (0, _aureliaDependencyInjection.inject)(Element), _dec287 = (0, _aureliaTemplating.bindable)(), _dec285(_class134 = _dec286(_class134 = (_class135 = function () {
  function MdScrollSpy(element) {
    _classCallCheck(this, MdScrollSpy);

    _initDefineProp(this, 'target', _descriptor193, this);

    this.element = element;
  }

  MdScrollSpy.prototype.attached = function attached() {
    $(this.target, this.element).scrollSpy();
  };

  MdScrollSpy.prototype.detached = function detached() {};

  return MdScrollSpy;
}(), (_descriptor193 = _applyDecoratedDescriptor(_class135.prototype, 'target', [_dec287], {
  enumerable: true,
  initializer: null
})), _class135)) || _class134) || _class134);
var MdSelect = exports.MdSelect = (_dec288 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.BindingEngine, _aureliaTaskQueue.TaskQueue), _dec289 = (0, _aureliaTemplating.customAttribute)('md-select'), _dec290 = (0, _aureliaTemplating.bindable)(), _dec291 = (0, _aureliaTemplating.bindable)(), _dec292 = (0, _aureliaTemplating.bindable)(), _dec293 = (0, _aureliaTemplating.bindable)(), _dec288(_class137 = _dec289(_class137 = (_class138 = function () {
  function MdSelect(element, bindingEngine, taskQueue) {
    _classCallCheck(this, MdSelect);

    _initDefineProp(this, 'disabled', _descriptor194, this);

    _initDefineProp(this, 'enableOptionObserver', _descriptor195, this);

    _initDefineProp(this, 'label', _descriptor196, this);

    _initDefineProp(this, 'showErrortext', _descriptor197, this);

    this._suspendUpdate = false;
    this.subscriptions = [];
    this.input = null;
    this.dropdownMutationObserver = null;
    this.optionsMutationObserver = null;
    this._taskqueueRunning = false;

    this.element = element;
    this.taskQueue = taskQueue;
    this.handleChangeFromViewModel = this.handleChangeFromViewModel.bind(this);
    this.handleChangeFromNativeSelect = this.handleChangeFromNativeSelect.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.log = (0, _aureliaLogging.getLogger)('md-select');
    this.bindingEngine = bindingEngine;
  }

  MdSelect.prototype.attached = function attached() {
    var _this12 = this;

    this.taskQueue.queueTask(function () {
      _this12.createMaterialSelect(false);

      if (_this12.label) {
        var wrapper = $(_this12.element).parent('.select-wrapper');
        var div = $('<div class="input-field"></div>');
        var va = _this12.element.attributes.getNamedItem('validate');
        if (va) {
          div.attr(va.name, va.label);
        }
        wrapper.wrap(div);
        $('<label>' + _this12.label + '</label>').insertAfter(wrapper);
      }
    });
    this.subscriptions.push(this.bindingEngine.propertyObserver(this.element, 'value').subscribe(this.handleChangeFromViewModel));


    $(this.element).on('change', this.handleChangeFromNativeSelect);
  };

  MdSelect.prototype.detached = function detached() {
    $(this.element).off('change', this.handleChangeFromNativeSelect);
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    this.dropdownMutationObserver = null;
    $(this.element).material_select('destroy');
    this.subscriptions.forEach(function (sub) {
      return sub.dispose();
    });
  };

  MdSelect.prototype.refresh = function refresh() {
    var _this13 = this;

    this.taskQueue.queueTask(function () {
      _this13.createMaterialSelect(true);
    });
  };

  MdSelect.prototype.disabledChanged = function disabledChanged(newValue) {
    this.toggleControl(newValue);
  };

  MdSelect.prototype.showErrortextChanged = function showErrortextChanged() {
    this.setErrorTextAttribute();
  };

  MdSelect.prototype.setErrorTextAttribute = function setErrorTextAttribute() {
    var input = this.element.parentElement.querySelector('input.select-dropdown');
    if (!input) return;
    this.log.debug('showErrortextChanged: ' + this.showErrortext);
    input.setAttribute('data-show-errortext', getBooleanFromAttributeValue(this.showErrortext));
  };

  MdSelect.prototype.notifyBindingEngine = function notifyBindingEngine() {
    this.log.debug('selectedOptions changed', arguments);
  };

  MdSelect.prototype.handleChangeFromNativeSelect = function handleChangeFromNativeSelect() {
    if (!this._suspendUpdate) {
      this.log.debug('handleChangeFromNativeSelect', this.element.value, $(this.element).val());
      this._suspendUpdate = true;
      fireEvent(this.element, 'change');
      this._suspendUpdate = false;
    }
  };

  MdSelect.prototype.handleChangeFromViewModel = function handleChangeFromViewModel(newValue) {
    this.log.debug('handleChangeFromViewModel', newValue, $(this.element).val());
    if (!this._suspendUpdate) {
      this.createMaterialSelect(false);
    }
  };

  MdSelect.prototype.toggleControl = function toggleControl(disable) {
    var $wrapper = $(this.element).parent('.select-wrapper');
    if ($wrapper.length > 0) {
      if (disable) {
        $('.caret', $wrapper).addClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', 'disabled');
        $wrapper.attr('disabled', 'disabled');
      } else {
        $('.caret', $wrapper).removeClass('disabled');
        $('input.select-dropdown', $wrapper).attr('disabled', null);
        $wrapper.attr('disabled', null);
        $('.select-dropdown', $wrapper).dropdown({ 'hover': false, 'closeOnClick': false });
      }
    }
  };

  MdSelect.prototype.createMaterialSelect = function createMaterialSelect(destroy) {
    this.observeVisibleDropdownContent(false);
    this.observeOptions(false);
    if (destroy) {
      $(this.element).material_select('destroy');
    }
    $(this.element).material_select();
    this.toggleControl(this.disabled);
    this.observeVisibleDropdownContent(true);
    this.observeOptions(true);
    this.setErrorTextAttribute();
  };

  MdSelect.prototype.observeVisibleDropdownContent = function observeVisibleDropdownContent(attach) {
    var _this14 = this;

    if (attach) {
      if (!this.dropdownMutationObserver) {
        this.dropdownMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
          var isHidden = false;
          for (var _iterator2 = mutations, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
            var _ref2;

            if (_isArray2) {
              if (_i2 >= _iterator2.length) break;
              _ref2 = _iterator2[_i2++];
            } else {
              _i2 = _iterator2.next();
              if (_i2.done) break;
              _ref2 = _i2.value;
            }

            var mutation = _ref2;

            if (window.getComputedStyle(mutation.target).getPropertyValue('display') === 'none') {
              isHidden = true;
            }
          }
          if (isHidden) {
            _this14.dropdownMutationObserver.takeRecords();
            _this14.handleBlur();
          }
        });
      }
      this.dropdownMutationObserver.observe(this.element.parentElement.querySelector('.dropdown-content'), {
        attributes: true,
        attributeFilter: ['style']
      });
    } else {
      if (this.dropdownMutationObserver) {
        this.dropdownMutationObserver.disconnect();
        this.dropdownMutationObserver.takeRecords();
      }
    }
  };

  MdSelect.prototype.observeOptions = function observeOptions(attach) {
    var _this15 = this;

    if (getBooleanFromAttributeValue(this.enableOptionObserver)) {
      if (attach) {
        if (!this.optionsMutationObserver) {
          this.optionsMutationObserver = _aureliaPal.DOM.createMutationObserver(function (mutations) {
            _this15.refresh();
          });
        }
        this.optionsMutationObserver.observe(this.element, {
          characterData: true,
          subtree: true
        });
      } else {
        if (this.optionsMutationObserver) {
          this.optionsMutationObserver.disconnect();
          this.optionsMutationObserver.takeRecords();
        }
      }
    }
  };

  MdSelect.prototype.handleBlur = function handleBlur() {
    var _this16 = this;

    if (this._taskqueueRunning) return;
    this._taskqueueRunning = true;
    this.taskQueue.queueTask(function () {
      _this16.log.debug('fire blur event');
      fireEvent(_this16.element, 'blur');
      _this16._taskqueueRunning = false;
    });
  };

  return MdSelect;
}(), (_descriptor194 = _applyDecoratedDescriptor(_class138.prototype, 'disabled', [_dec290], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor195 = _applyDecoratedDescriptor(_class138.prototype, 'enableOptionObserver', [_dec291], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor196 = _applyDecoratedDescriptor(_class138.prototype, 'label', [_dec292], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor197 = _applyDecoratedDescriptor(_class138.prototype, 'showErrortext', [_dec293], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class138)) || _class137) || _class137);
var MdSidenavCollapse = exports.MdSidenavCollapse = (_dec294 = (0, _aureliaTemplating.customAttribute)('md-sidenav-collapse'), _dec295 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaBinding.ObserverLocator), _dec296 = (0, _aureliaTemplating.bindable)(), _dec294(_class140 = _dec295(_class140 = (_class141 = function () {
  function MdSidenavCollapse(element, observerLocator) {
    _classCallCheck(this, MdSidenavCollapse);

    _initDefineProp(this, 'ref', _descriptor198, this);

    this.element = element;
    this.observerLocator = observerLocator;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav-collapse');
  }

  MdSidenavCollapse.prototype.attached = function attached() {
    var _this17 = this;

    this.ref.whenAttached.then(function () {

      var closeOnClick = _this17.ref.mdFixed && window.innerWidth > 992 ? false : getBooleanFromAttributeValue(_this17.ref.mdCloseOnClick);

      _this17.element.setAttribute('data-activates', _this17.ref.controlId);
      var sideNavConfig = {
        edge: _this17.ref.mdEdge || 'left',

        closeOnClick: closeOnClick,
        menuWidth: parseInt(_this17.ref.mdWidth, 10)
      };

      $(_this17.element).sideNav(sideNavConfig);
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
}(), (_descriptor198 = _applyDecoratedDescriptor(_class141.prototype, 'ref', [_dec296], {
  enumerable: true,
  initializer: null
})), _class141)) || _class140) || _class140);
var MdSidenav = exports.MdSidenav = (_dec297 = (0, _aureliaTemplating.customElement)('md-sidenav'), _dec298 = (0, _aureliaDependencyInjection.inject)(Element), _dec299 = (0, _aureliaTemplating.bindable)(), _dec300 = (0, _aureliaTemplating.bindable)(), _dec301 = (0, _aureliaTemplating.bindable)(), _dec302 = (0, _aureliaTemplating.bindable)(), _dec297(_class143 = _dec298(_class143 = (_class144 = (_temp6 = _class145 = function () {
  function MdSidenav(element) {
    var _this18 = this;

    _classCallCheck(this, MdSidenav);

    _initDefineProp(this, 'mdCloseOnClick', _descriptor199, this);

    _initDefineProp(this, 'mdEdge', _descriptor200, this);

    _initDefineProp(this, 'mdFixed', _descriptor201, this);

    _initDefineProp(this, 'mdWidth', _descriptor202, this);

    this.element = element;
    this.controlId = 'md-sidenav-' + MdSidenav.id++;
    this.log = (0, _aureliaLogging.getLogger)('md-sidenav');
    this.whenAttached = new Promise(function (resolve, reject) {
      _this18.attachedResolver = resolve;
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
}(), _class145.id = 0, _temp6), (_descriptor199 = _applyDecoratedDescriptor(_class144.prototype, 'mdCloseOnClick', [_dec299], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor200 = _applyDecoratedDescriptor(_class144.prototype, 'mdEdge', [_dec300], {
  enumerable: true,
  initializer: function initializer() {
    return 'left';
  }
}), _descriptor201 = _applyDecoratedDescriptor(_class144.prototype, 'mdFixed', [_dec301], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor202 = _applyDecoratedDescriptor(_class144.prototype, 'mdWidth', [_dec302], {
  enumerable: true,
  initializer: function initializer() {
    return 300;
  }
})), _class144)) || _class143) || _class143);
var Ui5SimpleForm = exports.Ui5SimpleForm = (_dec303 = (0, _aureliaTemplating.customElement)('ui5-simple-form'), _dec304 = (0, _aureliaDependencyInjection.inject)(Element), _dec305 = (0, _aureliaTemplating.bindable)(), _dec306 = (0, _aureliaTemplating.bindable)(), _dec307 = (0, _aureliaTemplating.bindable)(), _dec308 = (0, _aureliaTemplating.bindable)(), _dec309 = (0, _aureliaTemplating.bindable)(), _dec310 = (0, _aureliaTemplating.bindable)(), _dec311 = (0, _aureliaTemplating.bindable)(), _dec312 = (0, _aureliaTemplating.bindable)(), _dec313 = (0, _aureliaTemplating.bindable)(), _dec314 = (0, _aureliaTemplating.bindable)(), _dec315 = (0, _aureliaTemplating.bindable)(), _dec316 = (0, _aureliaTemplating.bindable)(), _dec317 = (0, _aureliaTemplating.bindable)(), _dec318 = (0, _aureliaTemplating.bindable)(), _dec319 = (0, _aureliaTemplating.bindable)(), _dec320 = (0, _aureliaTemplating.bindable)(), _dec321 = (0, _aureliaTemplating.bindable)(), _dec322 = (0, _aureliaTemplating.bindable)(), _dec323 = (0, _aureliaTemplating.bindable)(), _dec324 = (0, _aureliaTemplating.bindable)(), _dec325 = (0, _aureliaTemplating.bindable)(), _dec326 = (0, _aureliaTemplating.bindable)(), _dec303(_class146 = _dec304(_class146 = (_class147 = function () {
  function Ui5SimpleForm(element) {
    _classCallCheck(this, Ui5SimpleForm);

    _initDefineProp(this, 'ui5Id', _descriptor203, this);

    _initDefineProp(this, 'title', _descriptor204, this);

    _initDefineProp(this, 'maxContainerCols', _descriptor205, this);

    _initDefineProp(this, 'minWidth', _descriptor206, this);

    _initDefineProp(this, 'width', _descriptor207, this);

    _initDefineProp(this, 'editable', _descriptor208, this);

    _initDefineProp(this, 'labelMinWidth', _descriptor209, this);

    _initDefineProp(this, 'layout', _descriptor210, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor211, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor212, this);

    _initDefineProp(this, 'labelSpanL', _descriptor213, this);

    _initDefineProp(this, 'labelSpanM', _descriptor214, this);

    _initDefineProp(this, 'labelSpanS', _descriptor215, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor216, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor217, this);

    _initDefineProp(this, 'emptySpanL', _descriptor218, this);

    _initDefineProp(this, 'emptySpanM', _descriptor219, this);

    _initDefineProp(this, 'emptySpanS', _descriptor220, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor221, this);

    _initDefineProp(this, 'breakpointXL', _descriptor222, this);

    _initDefineProp(this, 'breakpointL', _descriptor223, this);

    _initDefineProp(this, 'breakpointM', _descriptor224, this);

    this._form = null;

    this.element = element;
  }

  Ui5SimpleForm.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'toolbar') this._form.setToolbar(child);
    if (path[0].localName == 'content') this._form.addContent(child);
  };

  Ui5SimpleForm.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._form = new sap.ui.layout.form.SimpleForm(this.ui5Id, {
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

    });

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
}(), (_descriptor203 = _applyDecoratedDescriptor(_class147.prototype, 'ui5Id', [_dec305], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor204 = _applyDecoratedDescriptor(_class147.prototype, 'title', [_dec306], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor205 = _applyDecoratedDescriptor(_class147.prototype, 'maxContainerCols', [_dec307], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor206 = _applyDecoratedDescriptor(_class147.prototype, 'minWidth', [_dec308], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor207 = _applyDecoratedDescriptor(_class147.prototype, 'width', [_dec309], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor208 = _applyDecoratedDescriptor(_class147.prototype, 'editable', [_dec310], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor209 = _applyDecoratedDescriptor(_class147.prototype, 'labelMinWidth', [_dec311], {
  enumerable: true,
  initializer: function initializer() {
    return 192;
  }
}), _descriptor210 = _applyDecoratedDescriptor(_class147.prototype, 'layout', [_dec312], {
  enumerable: true,
  initializer: function initializer() {
    return 'ResponsiveLayout';
  }
}), _descriptor211 = _applyDecoratedDescriptor(_class147.prototype, 'backgroundDesign', [_dec313], {
  enumerable: true,
  initializer: function initializer() {
    return 'Translucent';
  }
}), _descriptor212 = _applyDecoratedDescriptor(_class147.prototype, 'labelSpanXL', [_dec314], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor213 = _applyDecoratedDescriptor(_class147.prototype, 'labelSpanL', [_dec315], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor214 = _applyDecoratedDescriptor(_class147.prototype, 'labelSpanM', [_dec316], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor215 = _applyDecoratedDescriptor(_class147.prototype, 'labelSpanS', [_dec317], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor216 = _applyDecoratedDescriptor(_class147.prototype, 'adjustLabelSpan', [_dec318], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor217 = _applyDecoratedDescriptor(_class147.prototype, 'emptySpanXL', [_dec319], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor218 = _applyDecoratedDescriptor(_class147.prototype, 'emptySpanL', [_dec320], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor219 = _applyDecoratedDescriptor(_class147.prototype, 'emptySpanM', [_dec321], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor220 = _applyDecoratedDescriptor(_class147.prototype, 'emptySpanS', [_dec322], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor221 = _applyDecoratedDescriptor(_class147.prototype, 'singleContainerFullSize', [_dec323], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor222 = _applyDecoratedDescriptor(_class147.prototype, 'breakpointXL', [_dec324], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor223 = _applyDecoratedDescriptor(_class147.prototype, 'breakpointL', [_dec325], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor224 = _applyDecoratedDescriptor(_class147.prototype, 'breakpointM', [_dec326], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class147)) || _class146) || _class146);
var Ui5SlideTile = exports.Ui5SlideTile = (_dec327 = (0, _aureliaTemplating.customElement)('ui5-slide-tile'), _dec328 = (0, _aureliaDependencyInjection.inject)(Element), _dec329 = (0, _aureliaTemplating.bindable)(), _dec330 = (0, _aureliaTemplating.bindable)(), _dec327(_class149 = _dec328(_class149 = (_class150 = function () {
  function Ui5SlideTile(element) {
    _classCallCheck(this, Ui5SlideTile);

    this._container = null;

    _initDefineProp(this, 'displayTime', _descriptor225, this);

    _initDefineProp(this, 'transitionTime', _descriptor226, this);

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
}(), (_descriptor225 = _applyDecoratedDescriptor(_class150.prototype, 'displayTime', [_dec329], {
  enumerable: true,
  initializer: function initializer() {
    return 5000;
  }
}), _descriptor226 = _applyDecoratedDescriptor(_class150.prototype, 'transitionTime', [_dec330], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class150)) || _class149) || _class149);
var MdSlider = exports.MdSlider = (_dec331 = (0, _aureliaTemplating.customElement)('md-slider'), _dec332 = (0, _aureliaDependencyInjection.inject)(Element), _dec333 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <slot></slot>\n  </ul>\n  </template>\n'), _dec334 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec335 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec336 = (0, _aureliaTemplating.bindable)(), _dec337 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec338 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec331(_class152 = _dec332(_class152 = _dec333(_class152 = (_class153 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor227, this);

    _initDefineProp(this, 'mdHeight', _descriptor228, this);

    _initDefineProp(this, 'mdIndicators', _descriptor229, this);

    _initDefineProp(this, 'mdInterval', _descriptor230, this);

    _initDefineProp(this, 'mdTransition', _descriptor231, this);

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
}(), (_descriptor227 = _applyDecoratedDescriptor(_class153.prototype, 'mdFillContainer', [_dec334], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor228 = _applyDecoratedDescriptor(_class153.prototype, 'mdHeight', [_dec335], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor229 = _applyDecoratedDescriptor(_class153.prototype, 'mdIndicators', [_dec336], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor230 = _applyDecoratedDescriptor(_class153.prototype, 'mdInterval', [_dec337], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor231 = _applyDecoratedDescriptor(_class153.prototype, 'mdTransition', [_dec338], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class153)) || _class152) || _class152) || _class152);
var Ui5StandardTile = exports.Ui5StandardTile = (_dec339 = (0, _aureliaTemplating.customElement)('ui5-standard-tile'), _dec340 = (0, _aureliaDependencyInjection.inject)(Element), _dec341 = (0, _aureliaTemplating.bindable)(), _dec342 = (0, _aureliaTemplating.bindable)(), _dec343 = (0, _aureliaTemplating.bindable)(), _dec344 = (0, _aureliaTemplating.bindable)(), _dec345 = (0, _aureliaTemplating.bindable)(), _dec346 = (0, _aureliaTemplating.bindable)(), _dec347 = (0, _aureliaTemplating.bindable)(), _dec348 = (0, _aureliaTemplating.bindable)(), _dec339(_class155 = _dec340(_class155 = (_class156 = function () {
  function Ui5StandardTile(element) {
    _classCallCheck(this, Ui5StandardTile);

    this._tile = null;

    _initDefineProp(this, 'type', _descriptor232, this);

    _initDefineProp(this, 'title', _descriptor233, this);

    _initDefineProp(this, 'number', _descriptor234, this);

    _initDefineProp(this, 'info', _descriptor235, this);

    _initDefineProp(this, 'infoState', _descriptor236, this);

    _initDefineProp(this, 'numberUnit', _descriptor237, this);

    _initDefineProp(this, 'icon', _descriptor238, this);

    _initDefineProp(this, 'press', _descriptor239, this);

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
}(), (_descriptor232 = _applyDecoratedDescriptor(_class156.prototype, 'type', [_dec341], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor233 = _applyDecoratedDescriptor(_class156.prototype, 'title', [_dec342], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor234 = _applyDecoratedDescriptor(_class156.prototype, 'number', [_dec343], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor235 = _applyDecoratedDescriptor(_class156.prototype, 'info', [_dec344], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor236 = _applyDecoratedDescriptor(_class156.prototype, 'infoState', [_dec345], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor237 = _applyDecoratedDescriptor(_class156.prototype, 'numberUnit', [_dec346], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor238 = _applyDecoratedDescriptor(_class156.prototype, 'icon', [_dec347], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor239 = _applyDecoratedDescriptor(_class156.prototype, 'press', [_dec348], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class156)) || _class155) || _class155);
var MdSwitch = exports.MdSwitch = (_dec349 = (0, _aureliaTemplating.customElement)('md-switch'), _dec350 = (0, _aureliaDependencyInjection.inject)(Element), _dec351 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec352 = (0, _aureliaTemplating.bindable)(), _dec353 = (0, _aureliaTemplating.bindable)(), _dec354 = (0, _aureliaTemplating.bindable)(), _dec349(_class158 = _dec350(_class158 = (_class159 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor240, this);

    _initDefineProp(this, 'mdDisabled', _descriptor241, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor242, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor243, this);

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
}(), (_descriptor240 = _applyDecoratedDescriptor(_class159.prototype, 'mdChecked', [_dec351], {
  enumerable: true,
  initializer: null
}), _descriptor241 = _applyDecoratedDescriptor(_class159.prototype, 'mdDisabled', [_dec352], {
  enumerable: true,
  initializer: null
}), _descriptor242 = _applyDecoratedDescriptor(_class159.prototype, 'mdLabelOff', [_dec353], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor243 = _applyDecoratedDescriptor(_class159.prototype, 'mdLabelOn', [_dec354], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class159)) || _class158) || _class158);
var MdTabs = exports.MdTabs = (_dec355 = (0, _aureliaTemplating.customAttribute)('md-tabs'), _dec356 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTaskQueue.TaskQueue), _dec357 = (0, _aureliaTemplating.bindable)(), _dec358 = (0, _aureliaTemplating.bindable)(), _dec359 = (0, _aureliaTemplating.bindable)(), _dec360 = (0, _aureliaTemplating.bindable)(), _dec361 = (0, _aureliaTemplating.bindable)(), _dec355(_class161 = _dec356(_class161 = (_class162 = function () {
  function MdTabs(element, taskQueue) {
    _classCallCheck(this, MdTabs);

    _initDefineProp(this, 'fixed', _descriptor244, this);

    _initDefineProp(this, 'onShow', _descriptor245, this);

    _initDefineProp(this, 'responsiveThreshold', _descriptor246, this);

    _initDefineProp(this, 'swipeable', _descriptor247, this);

    _initDefineProp(this, 'transparent', _descriptor248, this);

    this.element = element;
    this.taskQueue = taskQueue;
    this.fireTabSelectedEvent = this.fireTabSelectedEvent.bind(this);
    this.attributeManager = new AttributeManager(this.element);
    this.tabAttributeManagers = [];
  }

  MdTabs.prototype.attached = function attached() {
    var _this19 = this;

    this.attributeManager.addClasses('tabs');

    var children = this.element.querySelectorAll('li');
    [].forEach.call(children, function (child) {
      var setter = new AttributeManager(child);
      setter.addClasses(['tab', 'primary-text']);
      _this19.tabAttributeManagers.push(setter);
    });

    var self = this;
    $(this.element).tabs({
      onShow: function onShow(jQueryElement) {
        if (self.onShow) {
          self.onShow({ element: jQueryElement });
        }
      },
      swipeable: getBooleanFromAttributeValue(this.swipeable),
      responsiveThreshold: this.responsiveThreshold
    });
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.addEventListener('click', _this19.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.detached = function detached() {
    var _this20 = this;

    this.attributeManager.removeClasses('tabs');

    this.tabAttributeManagers.forEach(function (setter) {
      setter.removeClasses('tab');
    });
    this.tabAttributeManagers = [];
    var childAnchors = this.element.querySelectorAll('li a');
    [].forEach.call(childAnchors, function (a) {
      a.removeEventListener('click', _this20.fireTabSelectedEvent);
    });
  };

  MdTabs.prototype.refresh = function refresh() {
    var _this21 = this;

    this.taskQueue.queueTask(function () {
      var hrefs = [];
      $('li a', _this21.element).each(function (i, tab) {
        $(tab).parent().addClass('tab');
        hrefs.push($(tab).attr('href'));
      });
      $(hrefs).each(function (i, tab) {
        if (_this21.selectedTab.index != i) {
          $(tab).hide();
        }
      });
      _this21.taskQueue.queueTask(function () {
        $(window).trigger('resize');
      });
    });
  };

  MdTabs.prototype.fixedChanged = function fixedChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-fixed-width');
    } else {
      this.attributeManager.removeClasses('tabs-fixed-width');
    }
  };

  MdTabs.prototype.transparentChanged = function transparentChanged(newValue) {
    if (newValue) {
      this.attributeManager.addClasses('tabs-transparent');
    } else {
      this.attributeManager.removeClasses('tabs-transparent');
    }
  };

  MdTabs.prototype.fireTabSelectedEvent = function fireTabSelectedEvent(e) {
    var href = e.target.getAttribute('href');
    fireMaterializeEvent(this.element, 'selected', href);
  };

  MdTabs.prototype.selectTab = function selectTab(id) {
    $(this.element).tabs('select_tab', id);
    this.fireTabSelectedEvent({
      target: { getAttribute: function getAttribute() {
          return '#' + id;
        } }
    });
  };

  _createClass(MdTabs, [{
    key: 'selectedTab',
    get: function get() {
      var children = this.element.querySelectorAll('li.tab a');
      var index = -1;
      var href = null;
      [].forEach.call(children, function (a, i) {
        if (a.classList.contains('active')) {
          index = i;
          href = a.href;
          return;
        }
      });
      return { href: href, index: index };
    }
  }]);

  return MdTabs;
}(), (_descriptor244 = _applyDecoratedDescriptor(_class162.prototype, 'fixed', [_dec357], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor245 = _applyDecoratedDescriptor(_class162.prototype, 'onShow', [_dec358], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor246 = _applyDecoratedDescriptor(_class162.prototype, 'responsiveThreshold', [_dec359], {
  enumerable: true,
  initializer: function initializer() {
    return Infinity;
  }
}), _descriptor247 = _applyDecoratedDescriptor(_class162.prototype, 'swipeable', [_dec360], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor248 = _applyDecoratedDescriptor(_class162.prototype, 'transparent', [_dec361], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class162)) || _class161) || _class161);
var Ui5Text = exports.Ui5Text = (_dec362 = (0, _aureliaTemplating.customElement)('ui5-text'), _dec363 = (0, _aureliaDependencyInjection.inject)(Element), _dec362(_class164 = _dec363(_class164 = (_class165 = function () {
  function Ui5Text(element) {
    _classCallCheck(this, Ui5Text);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor249, this);

    _initDefineProp(this, 'text', _descriptor250, this);

    _initDefineProp(this, 'wrapping', _descriptor251, this);

    _initDefineProp(this, 'textAlign', _descriptor252, this);

    _initDefineProp(this, 'maxLines', _descriptor253, this);

    this.element = element;
  }

  Ui5Text.prototype.attached = function attached() {

    this._text = new sap.m.Text({
      text: this.text,
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
}(), (_descriptor249 = _applyDecoratedDescriptor(_class165.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor250 = _applyDecoratedDescriptor(_class165.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor251 = _applyDecoratedDescriptor(_class165.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor252 = _applyDecoratedDescriptor(_class165.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor253 = _applyDecoratedDescriptor(_class165.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class165)) || _class164) || _class164);
var Ui5TileContainer = exports.Ui5TileContainer = (_dec364 = (0, _aureliaTemplating.customElement)('ui5-tile-container'), _dec365 = (0, _aureliaDependencyInjection.inject)(Element), _dec364(_class167 = _dec365(_class167 = function () {
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
}()) || _class167) || _class167);
var Ui5TileContent = exports.Ui5TileContent = (_dec366 = (0, _aureliaTemplating.customElement)('ui5-tile-content'), _dec367 = (0, _aureliaDependencyInjection.inject)(Element), _dec368 = (0, _aureliaTemplating.bindable)(), _dec369 = (0, _aureliaTemplating.bindable)(), _dec366(_class169 = _dec367(_class169 = (_class170 = function () {
  function Ui5TileContent(element) {
    _classCallCheck(this, Ui5TileContent);

    this._content = null;

    _initDefineProp(this, 'footer', _descriptor254, this);

    _initDefineProp(this, 'unit', _descriptor255, this);

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
}(), (_descriptor254 = _applyDecoratedDescriptor(_class170.prototype, 'footer', [_dec368], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor255 = _applyDecoratedDescriptor(_class170.prototype, 'unit', [_dec369], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class170)) || _class169) || _class169);
var Ui5Title = exports.Ui5Title = (_dec370 = (0, _aureliaTemplating.customElement)('ui5-title'), _dec371 = (0, _aureliaDependencyInjection.inject)(Element), _dec372 = (0, _aureliaTemplating.bindable)(), _dec373 = (0, _aureliaTemplating.bindable)(), _dec374 = (0, _aureliaTemplating.bindable)(), _dec375 = (0, _aureliaTemplating.bindable)(), _dec370(_class172 = _dec371(_class172 = (_class173 = function () {
  function Ui5Title(element) {
    _classCallCheck(this, Ui5Title);

    this._title = null;

    _initDefineProp(this, 'text', _descriptor256, this);

    _initDefineProp(this, 'icon', _descriptor257, this);

    _initDefineProp(this, 'level', _descriptor258, this);

    _initDefineProp(this, 'emphasized', _descriptor259, this);

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
}(), (_descriptor256 = _applyDecoratedDescriptor(_class173.prototype, 'text', [_dec372], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor257 = _applyDecoratedDescriptor(_class173.prototype, 'icon', [_dec373], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor258 = _applyDecoratedDescriptor(_class173.prototype, 'level', [_dec374], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
}), _descriptor259 = _applyDecoratedDescriptor(_class173.prototype, 'emphasized', [_dec375], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class173)) || _class172) || _class172);

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

var MdTooltip = exports.MdTooltip = (_dec376 = (0, _aureliaTemplating.customAttribute)('md-tooltip'), _dec377 = (0, _aureliaDependencyInjection.inject)(Element), _dec378 = (0, _aureliaTemplating.bindable)(), _dec379 = (0, _aureliaTemplating.bindable)(), _dec380 = (0, _aureliaTemplating.bindable)(), _dec381 = (0, _aureliaTemplating.bindable)(), _dec376(_class175 = _dec377(_class175 = (_class176 = function () {
  function MdTooltip(element) {
    _classCallCheck(this, MdTooltip);

    _initDefineProp(this, 'position', _descriptor260, this);

    _initDefineProp(this, 'delay', _descriptor261, this);

    _initDefineProp(this, 'html', _descriptor262, this);

    _initDefineProp(this, 'text', _descriptor263, this);

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
}(), (_descriptor260 = _applyDecoratedDescriptor(_class176.prototype, 'position', [_dec378], {
  enumerable: true,
  initializer: function initializer() {
    return 'bottom';
  }
}), _descriptor261 = _applyDecoratedDescriptor(_class176.prototype, 'delay', [_dec379], {
  enumerable: true,
  initializer: function initializer() {
    return 50;
  }
}), _descriptor262 = _applyDecoratedDescriptor(_class176.prototype, 'html', [_dec380], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor263 = _applyDecoratedDescriptor(_class176.prototype, 'text', [_dec381], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
})), _class176)) || _class175) || _class175);
var MdFadeinImage = exports.MdFadeinImage = (_dec382 = (0, _aureliaTemplating.customAttribute)('md-fadein-image'), _dec383 = (0, _aureliaDependencyInjection.inject)(Element), _dec384 = (0, _aureliaTemplating.bindable)(), _dec382(_class178 = _dec383(_class178 = (_class179 = function () {
  function MdFadeinImage(element) {
    _classCallCheck(this, MdFadeinImage);

    _initDefineProp(this, 'ref', _descriptor264, this);

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
}(), (_descriptor264 = _applyDecoratedDescriptor(_class179.prototype, 'ref', [_dec384], {
  enumerable: true,
  initializer: null
})), _class179)) || _class178) || _class178);
var MdStaggeredList = exports.MdStaggeredList = (_dec385 = (0, _aureliaTemplating.customAttribute)('md-staggered-list'), _dec386 = (0, _aureliaDependencyInjection.inject)(Element), _dec387 = (0, _aureliaTemplating.bindable)(), _dec385(_class181 = _dec386(_class181 = (_class182 = function () {
  function MdStaggeredList(element) {
    _classCallCheck(this, MdStaggeredList);

    _initDefineProp(this, 'ref', _descriptor265, this);

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
}(), (_descriptor265 = _applyDecoratedDescriptor(_class182.prototype, 'ref', [_dec387], {
  enumerable: true,
  initializer: null
})), _class182)) || _class181) || _class181);

var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
  function MaterializeFormValidationRenderer() {
    _classCallCheck(this, MaterializeFormValidationRenderer);

    this.className = 'md-input-validation';
    this.classNameFirst = 'md-input-validation-first';
  }

  MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
    var _this22 = this;

    var allElements = new Array();
    for (var _iterator3 = instruction.unrender, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray3) {
        if (_i3 >= _iterator3.length) break;
        _ref4 = _iterator3[_i3++];
      } else {
        _i3 = _iterator3.next();
        if (_i3.done) break;
        _ref4 = _i3.value;
      }

      var _ref7 = _ref4;
      var result = _ref7.result,
          elements = _ref7.elements;

      for (var _iterator5 = elements, _isArray5 = Array.isArray(_iterator5), _i5 = 0, _iterator5 = _isArray5 ? _iterator5 : _iterator5[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray5) {
          if (_i5 >= _iterator5.length) break;
          _ref8 = _iterator5[_i5++];
        } else {
          _i5 = _iterator5.next();
          if (_i5.done) break;
          _ref8 = _i5.value;
        }

        var element = _ref8;

        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (var _iterator4 = instruction.render, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref6;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref6 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref6 = _i4.value;
      }

      var _ref9 = _ref6;
      var result = _ref9.result,
          elements = _ref9.elements;

      for (var _iterator6 = elements, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
        var _ref10;

        if (_isArray6) {
          if (_i6 >= _iterator6.length) break;
          _ref10 = _iterator6[_i6++];
        } else {
          _i6 = _iterator6.next();
          if (_i6.done) break;
          _ref10 = _i6.value;
        }

        var _element = _ref10;

        this.add(_element, result);
        if (allElements.indexOf(_element) == -1) {
          allElements.push(_element);
        }
      }
    }
    allElements.forEach(function (e) {
      return _this22.underlineInput(e);
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

var MdWaves = exports.MdWaves = (_dec388 = (0, _aureliaTemplating.customAttribute)('md-waves'), _dec389 = (0, _aureliaDependencyInjection.inject)(Element), _dec390 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec391 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec392 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec388(_class185 = _dec389(_class185 = (_class186 = function () {
  function MdWaves(element) {
    _classCallCheck(this, MdWaves);

    _initDefineProp(this, 'block', _descriptor266, this);

    _initDefineProp(this, 'circle', _descriptor267, this);

    _initDefineProp(this, 'color', _descriptor268, this);

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
}(), (_descriptor266 = _applyDecoratedDescriptor(_class186.prototype, 'block', [_dec390], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor267 = _applyDecoratedDescriptor(_class186.prototype, 'circle', [_dec391], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor268 = _applyDecoratedDescriptor(_class186.prototype, 'color', [_dec392], {
  enumerable: true,
  initializer: null
})), _class186)) || _class185) || _class185);
var Ui5Wizard = exports.Ui5Wizard = (_dec393 = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec394 = (0, _aureliaDependencyInjection.inject)(Element), _dec393(_class188 = _dec394(_class188 = function () {
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
    if (path[0].localName == 'wizard') this._wizard.removeStep(child);
  };

  Ui5Wizard.prototype.attached = function attached() {
    this._wizard = new sap.m.Wizard();
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._wizard, this.element);
  };

  Ui5Wizard.prototype.detached = function detached() {
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._wizard, this.element);
  };

  return Ui5Wizard;
}()) || _class188) || _class188);
var Ui5WizardStep = exports.Ui5WizardStep = (_dec395 = (0, _aureliaTemplating.customElement)('ui5-wizard-step'), _dec396 = (0, _aureliaDependencyInjection.inject)(Element), _dec395(_class190 = _dec396(_class190 = (_class191 = function () {
  function Ui5WizardStep(element) {
    _classCallCheck(this, Ui5WizardStep);

    this._step = null;

    _initDefineProp(this, 'nextStep', _descriptor269, this);

    _initDefineProp(this, 'subsequentSteps', _descriptor270, this);

    _initDefineProp(this, 'title', _descriptor271, this);

    _initDefineProp(this, 'icon', _descriptor272, this);

    _initDefineProp(this, 'validated', _descriptor273, this);

    _initDefineProp(this, 'complete', _descriptor274, this);

    _initDefineProp(this, 'activate', _descriptor275, this);

    this.element = element;
  }

  Ui5WizardStep.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'step') this._step.addContent(child);
  };

  Ui5WizardStep.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'step') this._step.removeContent(child);
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
}(), (_descriptor269 = _applyDecoratedDescriptor(_class191.prototype, 'nextStep', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor270 = _applyDecoratedDescriptor(_class191.prototype, 'subsequentSteps', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor271 = _applyDecoratedDescriptor(_class191.prototype, 'title', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor272 = _applyDecoratedDescriptor(_class191.prototype, 'icon', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor273 = _applyDecoratedDescriptor(_class191.prototype, 'validated', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor274 = _applyDecoratedDescriptor(_class191.prototype, 'complete', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor275 = _applyDecoratedDescriptor(_class191.prototype, 'activate', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class191)) || _class190) || _class190);