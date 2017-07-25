'use strict';

exports.__esModule = true;
exports.Ui5UploadCollection = exports.Ui5Shell = exports.Ui5VerticalLayout = exports.Ui5ViewSettingsItem = exports.Ui5WizardStep = exports.Ui5Wizard = exports.Ui5ViewSettingsFilterItem = exports.Ui5TabContainer = exports.Ui5ViewSettingsDialog = exports.Ui5UploadCollectionParameter = exports.MaterializeFormValidationRenderer = exports.Ui5UploadCollectionItem = exports.Ui5DynamicPageTitle = exports.Ui5Toolbar = exports.Ui5ToolbarSpacer = exports.Ui5Title = exports.Ui5ToastService = exports.Ui5TileContent = exports.Ui5TileContainer = exports.Ui5Text = exports.Ui5Grid = exports.Ui5TableSelectDialog = exports.Ui5Table = exports.Ui5TabContainerItem = exports.Ui5StandardTile = exports.MdSwitch = exports.Ui5ObjectNumber = exports.Ui5StandardListItem = exports.MdSlider = exports.Ui5SlideTile = exports.Ui5SimpleForm = exports.Ui5SelectDialog = exports.Ui5Select = exports.Ui5SegmentedButtonItem = exports.Ui5SegmentedButton = exports.Ui5SearchField = exports.Ui5ResponsivePopover = exports.Ui5ResponsiveGridLayout = exports.Ui5Page = exports.Ui5OverflowToolbar = exports.Ui5ObjectIdentifier = exports.Ui5NumericContent = exports.Ui5ListBase = exports.Ui5MessageStrip = exports.Ui5MTitle = exports.Ui5ListItem = exports.Ui5List = exports.Ui5Link = exports.Ui5Label = exports.Ui5Item = exports.Ui5InputBase = exports.Ui5Input = exports.Ui5ImageContent = exports.Ui5BreadCrumbs = exports.Ui5IconTabBar = exports.Ui5IconTabFilter = exports.Ui5Icon = exports.Ui5Html = exports.Ui5GridData = exports.Ui5GenericTile = exports.Ui5FormElement = exports.Ui5FormattedText = exports.Ui5FormContainer = exports.Ui5Form = exports.Ui5Element = exports.Ui5FeedContent = exports.Ui5DynamicPageHeader = exports.SmoothScroll = exports.constants = exports.AttributeManager = exports.Ui5DynamicPage = exports.Ui5Dialog = exports.Ui5DatePicker = exports.Ui5Control = exports.Ui5Container = exports.Ui5ColumnListItem = exports.Ui5Column = exports.MdBox = exports.Ui5Button = exports.Ui5Bar = exports.Ui5ActionSheet = exports.ConfigBuilder = exports.ClickCounter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class3, _desc, _value, _class4, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _dec14, _dec15, _class6, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class8, _desc2, _value2, _class9, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _dec25, _dec26, _dec27, _class11, _desc3, _value3, _class12, _descriptor19, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _class14, _desc4, _value4, _class15, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _dec42, _dec43, _dec44, _dec45, _class17, _desc5, _value5, _class18, _descriptor32, _descriptor33, _dec46, _dec47, _class20, _dec48, _dec49, _dec50, _dec51, _dec52, _dec53, _dec54, _dec55, _dec56, _dec57, _dec58, _dec59, _dec60, _dec61, _dec62, _dec63, _dec64, _dec65, _dec66, _dec67, _dec68, _dec69, _dec70, _dec71, _dec72, _class22, _desc6, _value6, _class23, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _descriptor45, _descriptor46, _descriptor47, _descriptor48, _descriptor49, _descriptor50, _descriptor51, _descriptor52, _descriptor53, _descriptor54, _descriptor55, _descriptor56, _dec73, _dec74, _dec75, _dec76, _dec77, _dec78, _dec79, _dec80, _dec81, _dec82, _dec83, _dec84, _dec85, _dec86, _dec87, _dec88, _dec89, _dec90, _dec91, _dec92, _dec93, _class25, _desc7, _value7, _class26, _descriptor57, _descriptor58, _descriptor59, _descriptor60, _descriptor61, _descriptor62, _descriptor63, _descriptor64, _descriptor65, _descriptor66, _descriptor67, _descriptor68, _descriptor69, _descriptor70, _descriptor71, _descriptor72, _descriptor73, _descriptor74, _descriptor75, _dec94, _dec95, _dec96, _dec97, _dec98, _dec99, _dec100, _dec101, _class28, _desc8, _value8, _class29, _descriptor76, _descriptor77, _descriptor78, _descriptor79, _descriptor80, _class32, _temp, _dec102, _dec103, _dec104, _class33, _desc9, _value9, _class34, _descriptor81, _dec105, _dec106, _dec107, _dec108, _dec109, _dec110, _class36, _desc10, _value10, _class37, _descriptor82, _descriptor83, _descriptor84, _descriptor85, _dec111, _dec112, _dec113, _dec114, _dec115, _dec116, _dec117, _class40, _desc11, _value11, _class41, _descriptor86, _descriptor87, _descriptor88, _descriptor89, _dec118, _dec119, _dec120, _dec121, _class43, _desc12, _value12, _class44, _descriptor90, _descriptor91, _dec122, _dec123, _dec124, _dec125, _dec126, _dec127, _dec128, _class46, _desc13, _value13, _class47, _descriptor92, _descriptor93, _descriptor94, _descriptor95, _descriptor96, _dec129, _dec130, _dec131, _class49, _desc14, _value14, _class50, _descriptor97, _dec132, _dec133, _dec134, _dec135, _dec136, _dec137, _dec138, _class52, _desc15, _value15, _class53, _descriptor98, _descriptor99, _descriptor100, _descriptor101, _descriptor102, _dec139, _dec140, _dec141, _dec142, _dec143, _class55, _desc16, _value16, _class56, _descriptor103, _descriptor104, _descriptor105, _dec144, _dec145, _class58, _dec146, _dec147, _dec148, _dec149, _dec150, _dec151, _dec152, _dec153, _dec154, _dec155, _dec156, _dec157, _dec158, _dec159, _dec160, _dec161, _dec162, _dec163, _dec164, _class60, _desc17, _value17, _class61, _descriptor106, _descriptor107, _descriptor108, _descriptor109, _descriptor110, _descriptor111, _descriptor112, _descriptor113, _descriptor114, _descriptor115, _descriptor116, _descriptor117, _descriptor118, _descriptor119, _descriptor120, _descriptor121, _dec165, _dec166, _dec167, _class63, _desc18, _value18, _class64, _descriptor122, _dec168, _dec169, _dec170, _dec171, _dec172, _dec173, _dec174, _dec175, _dec176, _dec177, _dec178, _dec179, _dec180, _dec181, _dec182, _class66, _desc19, _value19, _class67, _descriptor123, _descriptor124, _descriptor125, _descriptor126, _descriptor127, _descriptor128, _descriptor129, _descriptor130, _descriptor131, _descriptor132, _descriptor133, _descriptor134, _descriptor135, _dec183, _dec184, _dec185, _dec186, _class69, _desc20, _value20, _class70, _descriptor136, _descriptor137, _dec187, _dec188, _dec189, _class72, _desc21, _value21, _class73, _descriptor138, _dec190, _dec191, _dec192, _dec193, _dec194, _dec195, _dec196, _dec197, _dec198, _dec199, _dec200, _dec201, _dec202, _dec203, _dec204, _dec205, _dec206, _dec207, _dec208, _dec209, _dec210, _dec211, _dec212, _dec213, _dec214, _dec215, _dec216, _dec217, _dec218, _dec219, _dec220, _dec221, _dec222, _dec223, _dec224, _dec225, _dec226, _dec227, _dec228, _dec229, _dec230, _dec231, _dec232, _class75, _desc22, _value22, _class76, _descriptor139, _descriptor140, _descriptor141, _descriptor142, _descriptor143, _descriptor144, _descriptor145, _descriptor146, _descriptor147, _descriptor148, _descriptor149, _descriptor150, _descriptor151, _descriptor152, _descriptor153, _descriptor154, _descriptor155, _descriptor156, _descriptor157, _descriptor158, _descriptor159, _descriptor160, _descriptor161, _descriptor162, _descriptor163, _descriptor164, _descriptor165, _descriptor166, _descriptor167, _descriptor168, _descriptor169, _descriptor170, _descriptor171, _descriptor172, _descriptor173, _descriptor174, _descriptor175, _descriptor176, _descriptor177, _descriptor178, _descriptor179, _dec233, _dec234, _dec235, _dec236, _dec237, _dec238, _dec239, _dec240, _dec241, _dec242, _dec243, _dec244, _dec245, _dec246, _dec247, _class78, _desc23, _value23, _class79, _descriptor180, _descriptor181, _descriptor182, _descriptor183, _descriptor184, _descriptor185, _descriptor186, _descriptor187, _descriptor188, _descriptor189, _descriptor190, _descriptor191, _descriptor192, _dec248, _dec249, _dec250, _dec251, _dec252, _dec253, _class81, _desc24, _value24, _class82, _descriptor193, _descriptor194, _descriptor195, _descriptor196, _dec254, _dec255, _dec256, _dec257, _dec258, _dec259, _dec260, _dec261, _class84, _desc25, _value25, _class85, _descriptor197, _descriptor198, _descriptor199, _descriptor200, _descriptor201, _descriptor202, _dec262, _dec263, _dec264, _dec265, _dec266, _dec267, _dec268, _dec269, _dec270, _class87, _desc26, _value26, _class88, _descriptor203, _descriptor204, _descriptor205, _descriptor206, _descriptor207, _descriptor208, _descriptor209, _dec271, _dec272, _dec273, _dec274, _dec275, _dec276, _dec277, _dec278, _dec279, _dec280, _dec281, _dec282, _dec283, _dec284, _dec285, _dec286, _dec287, _dec288, _dec289, _dec290, _dec291, _dec292, _dec293, _dec294, _dec295, _dec296, _dec297, _dec298, _dec299, _dec300, _dec301, _class90, _desc27, _value27, _class91, _descriptor210, _descriptor211, _descriptor212, _descriptor213, _descriptor214, _descriptor215, _descriptor216, _descriptor217, _descriptor218, _descriptor219, _descriptor220, _descriptor221, _descriptor222, _descriptor223, _descriptor224, _descriptor225, _descriptor226, _descriptor227, _descriptor228, _descriptor229, _descriptor230, _descriptor231, _descriptor232, _descriptor233, _descriptor234, _descriptor235, _descriptor236, _descriptor237, _descriptor238, _dec302, _dec303, _dec304, _dec305, _dec306, _dec307, _dec308, _dec309, _class93, _desc28, _value28, _class94, _descriptor239, _descriptor240, _descriptor241, _descriptor242, _descriptor243, _descriptor244, _dec310, _dec311, _dec312, _dec313, _dec314, _dec315, _class96, _desc29, _value29, _class97, _descriptor245, _descriptor246, _descriptor247, _descriptor248, _dec316, _dec317, _class99, _desc30, _value30, _class100, _descriptor249, _descriptor250, _descriptor251, _descriptor252, _descriptor253, _dec318, _dec319, _dec320, _dec321, _dec322, _dec323, _dec324, _dec325, _dec326, _dec327, _dec328, _dec329, _dec330, _dec331, _dec332, _dec333, _dec334, _dec335, _dec336, _dec337, _dec338, _dec339, _dec340, _dec341, _dec342, _dec343, _dec344, _dec345, _class102, _desc31, _value31, _class103, _descriptor254, _descriptor255, _descriptor256, _descriptor257, _descriptor258, _descriptor259, _descriptor260, _descriptor261, _descriptor262, _descriptor263, _descriptor264, _descriptor265, _descriptor266, _descriptor267, _descriptor268, _descriptor269, _descriptor270, _descriptor271, _descriptor272, _descriptor273, _descriptor274, _descriptor275, _descriptor276, _descriptor277, _descriptor278, _descriptor279, _descriptor280, _dec346, _dec347, _dec348, _dec349, _dec350, _dec351, _dec352, _class105, _desc32, _value32, _class106, _descriptor281, _descriptor282, _descriptor283, _descriptor284, _descriptor285, _dec353, _dec354, _dec355, _dec356, _dec357, _dec358, _dec359, _class108, _desc33, _value33, _class109, _descriptor286, _descriptor287, _descriptor288, _descriptor289, _descriptor290, _descriptor291, _descriptor292, _dec360, _dec361, _dec362, _dec363, _dec364, _dec365, _dec366, _dec367, _class111, _desc34, _value34, _class112, _descriptor293, _descriptor294, _descriptor295, _descriptor296, _descriptor297, _descriptor298, _dec368, _dec369, _dec370, _dec371, _dec372, _dec373, _dec374, _class114, _desc35, _value35, _class115, _descriptor299, _descriptor300, _descriptor301, _descriptor302, _descriptor303, _dec375, _dec376, _dec377, _dec378, _dec379, _dec380, _dec381, _dec382, _dec383, _dec384, _dec385, _dec386, _dec387, _dec388, _dec389, _dec390, _class117, _desc36, _value36, _class118, _descriptor304, _descriptor305, _descriptor306, _descriptor307, _descriptor308, _descriptor309, _descriptor310, _descriptor311, _descriptor312, _descriptor313, _descriptor314, _descriptor315, _descriptor316, _descriptor317, _dec391, _dec392, _dec393, _dec394, _dec395, _dec396, _dec397, _dec398, _dec399, _dec400, _dec401, _dec402, _dec403, _dec404, _dec405, _dec406, _dec407, _dec408, _dec409, _dec410, _class120, _desc37, _value37, _class121, _descriptor318, _descriptor319, _descriptor320, _descriptor321, _descriptor322, _descriptor323, _descriptor324, _descriptor325, _descriptor326, _descriptor327, _descriptor328, _descriptor329, _descriptor330, _descriptor331, _descriptor332, _descriptor333, _descriptor334, _descriptor335, _dec411, _dec412, _dec413, _dec414, _dec415, _dec416, _dec417, _dec418, _dec419, _dec420, _dec421, _dec422, _dec423, _dec424, _dec425, _dec426, _dec427, _class123, _desc38, _value38, _class124, _descriptor336, _descriptor337, _descriptor338, _descriptor339, _descriptor340, _descriptor341, _descriptor342, _descriptor343, _descriptor344, _descriptor345, _descriptor346, _descriptor347, _descriptor348, _descriptor349, _descriptor350, _dec428, _dec429, _dec430, _dec431, _dec432, _dec433, _class126, _desc39, _value39, _class127, _descriptor351, _descriptor352, _descriptor353, _descriptor354, _dec434, _dec435, _dec436, _dec437, _dec438, _dec439, _dec440, _dec441, _dec442, _dec443, _class129, _desc40, _value40, _class130, _descriptor355, _descriptor356, _descriptor357, _descriptor358, _descriptor359, _descriptor360, _descriptor361, _descriptor362, _dec444, _dec445, _dec446, _dec447, _dec448, _dec449, _dec450, _dec451, _dec452, _dec453, _dec454, _dec455, _dec456, _dec457, _dec458, _dec459, _dec460, _dec461, _dec462, _class132, _desc41, _value41, _class133, _descriptor363, _descriptor364, _descriptor365, _descriptor366, _descriptor367, _descriptor368, _descriptor369, _descriptor370, _descriptor371, _descriptor372, _descriptor373, _descriptor374, _descriptor375, _descriptor376, _descriptor377, _descriptor378, _descriptor379, _dec463, _dec464, _dec465, _dec466, _dec467, _dec468, _dec469, _dec470, _dec471, _dec472, _dec473, _dec474, _dec475, _dec476, _class135, _desc42, _value42, _class136, _descriptor380, _descriptor381, _descriptor382, _descriptor383, _descriptor384, _descriptor385, _descriptor386, _descriptor387, _descriptor388, _descriptor389, _descriptor390, _descriptor391, _dec477, _dec478, _dec479, _dec480, _dec481, _dec482, _dec483, _dec484, _dec485, _dec486, _dec487, _dec488, _dec489, _dec490, _dec491, _dec492, _dec493, _dec494, _dec495, _dec496, _dec497, _dec498, _dec499, _dec500, _class138, _desc43, _value43, _class139, _descriptor392, _descriptor393, _descriptor394, _descriptor395, _descriptor396, _descriptor397, _descriptor398, _descriptor399, _descriptor400, _descriptor401, _descriptor402, _descriptor403, _descriptor404, _descriptor405, _descriptor406, _descriptor407, _descriptor408, _descriptor409, _descriptor410, _descriptor411, _descriptor412, _descriptor413, _dec501, _dec502, _dec503, _dec504, _class141, _desc44, _value44, _class142, _descriptor414, _descriptor415, _dec505, _dec506, _dec507, _dec508, _dec509, _dec510, _dec511, _dec512, _class144, _desc45, _value45, _class145, _descriptor416, _descriptor417, _descriptor418, _descriptor419, _descriptor420, _dec513, _dec514, _dec515, _dec516, _dec517, _dec518, _dec519, _dec520, _dec521, _dec522, _dec523, _dec524, _dec525, _class147, _desc46, _value46, _class148, _descriptor421, _descriptor422, _descriptor423, _descriptor424, _descriptor425, _descriptor426, _descriptor427, _descriptor428, _descriptor429, _descriptor430, _descriptor431, _dec526, _dec527, _dec528, _dec529, _dec530, _dec531, _dec532, _dec533, _dec534, _class150, _desc47, _value47, _class151, _descriptor432, _descriptor433, _descriptor434, _descriptor435, _descriptor436, _descriptor437, _descriptor438, _descriptor439, _dec535, _dec536, _dec537, _dec538, _dec539, _dec540, _class153, _desc48, _value48, _class154, _descriptor440, _descriptor441, _descriptor442, _descriptor443, _dec541, _dec542, _dec543, _dec544, _dec545, _dec546, _dec547, _dec548, _dec549, _dec550, _dec551, _class156, _desc49, _value49, _class157, _descriptor444, _descriptor445, _descriptor446, _descriptor447, _descriptor448, _descriptor449, _descriptor450, _descriptor451, _descriptor452, _dec552, _dec553, _dec554, _dec555, _dec556, _dec557, _dec558, _class159, _desc50, _value50, _class160, _descriptor453, _descriptor454, _descriptor455, _descriptor456, _dec559, _dec560, _dec561, _dec562, _dec563, _dec564, _dec565, _dec566, _dec567, _dec568, _dec569, _dec570, _dec571, _dec572, _dec573, _dec574, _dec575, _dec576, _dec577, _dec578, _dec579, _dec580, _dec581, _dec582, _dec583, _dec584, _dec585, _dec586, _dec587, _dec588, _dec589, _dec590, _class162, _desc51, _value51, _class163, _descriptor457, _descriptor458, _descriptor459, _descriptor460, _descriptor461, _descriptor462, _descriptor463, _descriptor464, _descriptor465, _descriptor466, _descriptor467, _descriptor468, _descriptor469, _descriptor470, _descriptor471, _descriptor472, _descriptor473, _descriptor474, _descriptor475, _descriptor476, _descriptor477, _descriptor478, _descriptor479, _descriptor480, _descriptor481, _descriptor482, _descriptor483, _descriptor484, _descriptor485, _descriptor486, _dec591, _dec592, _dec593, _dec594, _dec595, _dec596, _dec597, _dec598, _dec599, _dec600, _dec601, _dec602, _dec603, _dec604, _class165, _desc52, _value52, _class166, _descriptor487, _descriptor488, _descriptor489, _descriptor490, _descriptor491, _descriptor492, _descriptor493, _descriptor494, _descriptor495, _descriptor496, _descriptor497, _descriptor498, _dec605, _dec606, _dec607, _class168, _desc53, _value53, _class169, _descriptor499, _dec608, _dec609, _dec610, _class171, _desc54, _value54, _class172, _descriptor500, _descriptor501, _descriptor502, _descriptor503, _descriptor504, _dec611, _dec612, _class174, _dec613, _dec614, _dec615, _dec616, _class176, _desc55, _value55, _class177, _descriptor505, _descriptor506, _dec617, _dec618, _dec619, _dec620, _dec621, _dec622, _class179, _desc56, _value56, _class180, _descriptor507, _descriptor508, _descriptor509, _descriptor510, _dec623, _dec624, _dec625, _class182, _desc57, _value57, _class183, _descriptor511, _dec626, _dec627, _dec628, _dec629, _dec630, _dec631, _dec632, _dec633, _class185, _desc58, _value58, _class186, _descriptor512, _descriptor513, _descriptor514, _descriptor515, _descriptor516, _descriptor517, _dec634, _dec635, _class188, _dec636, _dec637, _dec638, _dec639, _dec640, _dec641, _dec642, _dec643, _dec644, _dec645, _dec646, _dec647, _dec648, _dec649, _dec650, _dec651, _class190, _desc59, _value59, _class191, _descriptor518, _descriptor519, _descriptor520, _descriptor521, _descriptor522, _descriptor523, _descriptor524, _descriptor525, _descriptor526, _descriptor527, _descriptor528, _descriptor529, _descriptor530, _descriptor531, _dec652, _dec653, _dec654, _dec655, _class194, _desc60, _value60, _class195, _descriptor532, _descriptor533, _dec656, _dec657, _dec658, _dec659, _dec660, _dec661, _dec662, _dec663, _dec664, _dec665, _class197, _desc61, _value61, _class198, _descriptor534, _descriptor535, _descriptor536, _descriptor537, _descriptor538, _descriptor539, _descriptor540, _descriptor541, _dec666, _dec667, _dec668, _dec669, _dec670, _dec671, _dec672, _class200, _desc62, _value62, _class201, _descriptor542, _descriptor543, _descriptor544, _descriptor545, _descriptor546, _dec673, _dec674, _dec675, _dec676, _dec677, _dec678, _dec679, _dec680, _dec681, _class203, _desc63, _value63, _class204, _descriptor547, _descriptor548, _descriptor549, _descriptor550, _descriptor551, _descriptor552, _descriptor553, _dec682, _dec683, _dec684, _dec685, _dec686, _dec687, _dec688, _dec689, _dec690, _dec691, _dec692, _class206, _desc64, _value64, _class207, _descriptor554, _descriptor555, _descriptor556, _descriptor557, _descriptor558, _descriptor559, _descriptor560, _descriptor561, _dec693, _dec694, _class209, _desc65, _value65, _class210, _descriptor562, _descriptor563, _descriptor564, _descriptor565, _descriptor566, _descriptor567, _descriptor568, _dec695, _dec696, _dec697, _dec698, _dec699, _dec700, _dec701, _dec702, _class212, _desc66, _value66, _class213, _descriptor569, _descriptor570, _descriptor571, _descriptor572, _descriptor573, _descriptor574, _dec703, _dec704, _class215, _dec705, _dec706, _dec707, _dec708, _class217, _desc67, _value67, _class218, _descriptor575, _descriptor576, _dec709, _dec710, _dec711, _dec712, _dec713, _dec714, _dec715, _dec716, _dec717, _dec718, _dec719, _dec720, _dec721, _dec722, _dec723, _dec724, _dec725, _dec726, _dec727, _dec728, _dec729, _dec730, _dec731, _dec732, _dec733, _dec734, _dec735, _dec736, _class220, _desc68, _value68, _class221, _descriptor577, _descriptor578, _descriptor579, _descriptor580, _descriptor581, _descriptor582, _descriptor583, _descriptor584, _descriptor585, _descriptor586, _descriptor587, _descriptor588, _descriptor589, _descriptor590, _descriptor591, _descriptor592, _descriptor593, _descriptor594, _descriptor595, _descriptor596, _descriptor597, _descriptor598, _descriptor599, _descriptor600, _descriptor601, _descriptor602;

exports.configure = configure;
exports.getBooleanFromAttributeValue = getBooleanFromAttributeValue;
exports.showBusyIndicator = showBusyIndicator;
exports.hideBusyIndicator = hideBusyIndicator;
exports.fireEvent = fireEvent;
exports.fireMaterializeEvent = fireMaterializeEvent;
exports.ui5Initialize = ui5Initialize;
exports.ui5SetTheme = ui5SetTheme;
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
    return this.usePage().useBar().useContainer().useHtml().useButton().useTiles().useGrid().useText().useWizard().useForm().useLabel().useInput().useDatePicker().useTitle().useLayoutData().useSelect().useTable().useTabs().useLayout().useDynamicPage().useLink().useBreadcrumbs().useSegmentedButton().useDialog().useList().useIcon().useActionSheet().useTableSelectDialog().useSelectDialog().useUploadCollection().useViewSettingsDialog();
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

  ConfigBuilder.prototype.useList = function useList() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./list/list'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./standard-list-item/standard-list-item'));
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

  ConfigBuilder.prototype.useSegmentedButton = function useSegmentedButton() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./segmented-button/segmented-button'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./segmented-button-item/segmented-button-item'));
    return this;
  };

  ConfigBuilder.prototype.useDialog = function useDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./dialog/dialog'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./responsive-popover/responsive-popover'));

    return this;
  };

  ConfigBuilder.prototype.useIcon = function useIcon() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./icon/icon'));
    return this;
  };

  ConfigBuilder.prototype.useActionSheet = function useActionSheet() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./action-sheet/action-sheet'));
    return this;
  };

  ConfigBuilder.prototype.useTableSelectDialog = function useTableSelectDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./table-select-dialog/table-select-dialog'));
    return this;
  };

  ConfigBuilder.prototype.useUploadCollection = function useUploadCollection() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./upload-collection/upload-collection'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./upload-collection-item/upload-collection-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./upload-collection-parameter/upload-collection-parameter'));
    return this;
  };

  ConfigBuilder.prototype.useViewSettingsDialog = function useViewSettingsDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./view-settings-item/view-settings-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./view-settings-filter-item/view-settings-filter-item'));
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./view-settings-dialog/view-settings-dialog'));
    return this;
  };

  ConfigBuilder.prototype.useSelectDialog = function useSelectDialog() {
    this.globalResources.push(_aureliaPal.PLATFORM.moduleName('./select-dialog/select-dialog'));
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

var Ui5ActionSheet = exports.Ui5ActionSheet = (_dec = (0, _aureliaTemplating.customElement)('ui5-action-sheet'), _dec2 = (0, _aureliaDependencyInjection.inject)(Element), _dec3 = (0, _aureliaTemplating.bindable)(), _dec4 = (0, _aureliaTemplating.bindable)(), _dec5 = (0, _aureliaTemplating.bindable)(), _dec6 = (0, _aureliaTemplating.bindable)(), _dec7 = (0, _aureliaTemplating.bindable)(), _dec8 = (0, _aureliaTemplating.bindable)(), _dec9 = (0, _aureliaTemplating.bindable)(), _dec10 = (0, _aureliaTemplating.bindable)(), _dec11 = (0, _aureliaTemplating.bindable)(), _dec12 = (0, _aureliaTemplating.bindable)(), _dec13 = (0, _aureliaTemplating.bindable)(), _dec(_class3 = _dec2(_class3 = (_class4 = function () {
  function Ui5ActionSheet(element) {
    _classCallCheck(this, Ui5ActionSheet);

    this._sheet = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor, this);

    _initDefineProp(this, 'placement', _descriptor2, this);

    _initDefineProp(this, 'title', _descriptor3, this);

    _initDefineProp(this, 'showCancelButton', _descriptor4, this);

    _initDefineProp(this, 'cancelButtonText', _descriptor5, this);

    _initDefineProp(this, 'beforeOpen', _descriptor6, this);

    _initDefineProp(this, 'afterOpen', _descriptor7, this);

    _initDefineProp(this, 'beforeClose', _descriptor8, this);

    _initDefineProp(this, 'afterClose', _descriptor9, this);

    _initDefineProp(this, 'cancelButtonTap', _descriptor10, this);

    _initDefineProp(this, 'cancelButtonPress', _descriptor11, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5ActionSheet.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5ActionSheet.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'buttons') {
        this._sheet.addButton(child);
        return 'buttons';
      }
    }
  };

  Ui5ActionSheet.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'buttons') {
      this._sheet.removeButton(child);
    }
  };

  Ui5ActionSheet.prototype.removeChild = function removeChild(child, elem) {};

  Ui5ActionSheet.prototype.attached = function attached() {
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
      cancelButtonTap: this.cancelButtonTap
    };
    if (this.ui5Id) this._sheet = new sap.m.ActionSheet(this.ui5Id, props);else this._sheet = new sap.m.ActionSheet(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5ActionSheet.prototype.detached = function detached() {};

  Ui5ActionSheet.prototype.placementChanged = function placementChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setPlacement(newValue);
    }
  };

  Ui5ActionSheet.prototype.titleChanged = function titleChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setTitle(newValue);
    }
  };

  Ui5ActionSheet.prototype.showCancelButtonChanged = function showCancelButtonChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setShowCancelButton(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ActionSheet.prototype.cancelButtonTextChanged = function cancelButtonTextChanged(newValue) {
    if (this._sheet !== null) {
      this._sheet.setCancelButtonText(newValue);
    }
  };

  _createClass(Ui5ActionSheet, [{
    key: 'UIElement',
    get: function get() {
      return this._sheet;
    }
  }]);

  return Ui5ActionSheet;
}(), (_descriptor = _applyDecoratedDescriptor(_class4.prototype, 'ui5Id', [_dec3], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class4.prototype, 'placement', [_dec4], {
  enumerable: true,
  initializer: function initializer() {
    return 'Bottom';
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class4.prototype, 'title', [_dec5], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class4.prototype, 'showCancelButton', [_dec6], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class4.prototype, 'cancelButtonText', [_dec7], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class4.prototype, 'beforeOpen', [_dec8], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class4.prototype, 'afterOpen', [_dec9], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class4.prototype, 'beforeClose', [_dec10], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class4.prototype, 'afterClose', [_dec11], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class4.prototype, 'cancelButtonTap', [_dec12], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class4.prototype, 'cancelButtonPress', [_dec13], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class4)) || _class3) || _class3);
var Ui5Bar = exports.Ui5Bar = (_dec14 = (0, _aureliaTemplating.customElement)('ui5-bar'), _dec15 = (0, _aureliaDependencyInjection.inject)(Element), _dec14(_class6 = _dec15(_class6 = function () {
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
}()) || _class6) || _class6);
var Ui5Button = exports.Ui5Button = (_dec16 = (0, _aureliaTemplating.customElement)('ui5-button'), _dec17 = (0, _aureliaDependencyInjection.inject)(Element), _dec18 = (0, _aureliaTemplating.bindable)(), _dec19 = (0, _aureliaTemplating.bindable)(), _dec20 = (0, _aureliaTemplating.bindable)(), _dec21 = (0, _aureliaTemplating.bindable)(), _dec22 = (0, _aureliaTemplating.bindable)(), _dec23 = (0, _aureliaTemplating.bindable)(), _dec24 = (0, _aureliaTemplating.bindable)(), _dec16(_class8 = _dec17(_class8 = (_class9 = function () {
  function Ui5Button(element) {
    _classCallCheck(this, Ui5Button);

    _initDefineProp(this, 'disabled', _descriptor12, this);

    _initDefineProp(this, 'floating', _descriptor13, this);

    _initDefineProp(this, 'large', _descriptor14, this);

    _initDefineProp(this, 'text', _descriptor15, this);

    _initDefineProp(this, 'press', _descriptor16, this);

    _initDefineProp(this, 'icon', _descriptor17, this);

    _initDefineProp(this, 'type', _descriptor18, this);

    this._button = null;
    this._parent = null;
    this._relation = null;

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
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._button, this.element);
    }
  };

  Ui5Button.prototype.defaultPress = function defaultPress() {};

  Ui5Button.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._button, this._relation);
    }
  };

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
}(), (_descriptor12 = _applyDecoratedDescriptor(_class9.prototype, 'disabled', [_dec18], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class9.prototype, 'floating', [_dec19], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class9.prototype, 'large', [_dec20], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class9.prototype, 'text', [_dec21], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class9.prototype, 'press', [_dec22], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class9.prototype, 'icon', [_dec23], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor18 = _applyDecoratedDescriptor(_class9.prototype, 'type', [_dec24], {
  enumerable: true,
  initializer: function initializer() {
    return 'Default';
  }
})), _class9)) || _class8) || _class8);
var MdBox = exports.MdBox = (_dec25 = (0, _aureliaTemplating.customAttribute)('md-box'), _dec26 = (0, _aureliaDependencyInjection.inject)(Element), _dec27 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.oneTime
}), _dec25(_class11 = _dec26(_class11 = (_class12 = function () {
  function MdBox(element) {
    _classCallCheck(this, MdBox);

    _initDefineProp(this, 'caption', _descriptor19, this);

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
}(), (_descriptor19 = _applyDecoratedDescriptor(_class12.prototype, 'caption', [_dec27], {
  enumerable: true,
  initializer: null
})), _class12)) || _class11) || _class11);
var Ui5Column = exports.Ui5Column = (_dec28 = (0, _aureliaTemplating.customElement)('ui5-column'), _dec29 = (0, _aureliaDependencyInjection.inject)(Element), _dec30 = (0, _aureliaTemplating.bindable)(), _dec31 = (0, _aureliaTemplating.bindable)(), _dec32 = (0, _aureliaTemplating.bindable)(), _dec33 = (0, _aureliaTemplating.bindable)(), _dec34 = (0, _aureliaTemplating.bindable)(), _dec35 = (0, _aureliaTemplating.bindable)(), _dec36 = (0, _aureliaTemplating.bindable)(), _dec37 = (0, _aureliaTemplating.bindable)(), _dec38 = (0, _aureliaTemplating.bindable)(), _dec39 = (0, _aureliaTemplating.bindable)(), _dec40 = (0, _aureliaTemplating.bindable)(), _dec41 = (0, _aureliaTemplating.bindable)(), _dec28(_class14 = _dec29(_class14 = (_class15 = function () {
  function Ui5Column(element) {
    _classCallCheck(this, Ui5Column);

    this._column = null;
    this._parent = null;
    this._relation = null;

    _initDefineProp(this, 'ui5Id', _descriptor20, this);

    _initDefineProp(this, 'width', _descriptor21, this);

    _initDefineProp(this, 'hAlign', _descriptor22, this);

    _initDefineProp(this, 'vAlign', _descriptor23, this);

    _initDefineProp(this, 'styleClass', _descriptor24, this);

    _initDefineProp(this, 'visible', _descriptor25, this);

    _initDefineProp(this, 'minScreenWidth', _descriptor26, this);

    _initDefineProp(this, 'demandPopin', _descriptor27, this);

    _initDefineProp(this, 'popinHAlign', _descriptor28, this);

    _initDefineProp(this, 'popinDisplay', _descriptor29, this);

    _initDefineProp(this, 'mergeDuplicates', _descriptor30, this);

    _initDefineProp(this, 'mergeFunctionName', _descriptor31, this);

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
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._column, this.element);
    attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5Column.prototype.detached = function detached() {
    if (this._parent && this._relation) {
      this._parent.removeChildByRelation(this._column, this._relation);
    }
  };

  Ui5Column.prototype.addChild = function addChild(child, elem) {
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
}(), (_descriptor20 = _applyDecoratedDescriptor(_class15.prototype, 'ui5Id', [_dec30], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class15.prototype, 'width', [_dec31], {
  enumerable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class15.prototype, 'hAlign', [_dec32], {
  enumerable: true,
  initializer: function initializer() {
    return 'Begin';
  }
}), _descriptor23 = _applyDecoratedDescriptor(_class15.prototype, 'vAlign', [_dec33], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor24 = _applyDecoratedDescriptor(_class15.prototype, 'styleClass', [_dec34], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor25 = _applyDecoratedDescriptor(_class15.prototype, 'visible', [_dec35], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor26 = _applyDecoratedDescriptor(_class15.prototype, 'minScreenWidth', [_dec36], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor27 = _applyDecoratedDescriptor(_class15.prototype, 'demandPopin', [_dec37], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor28 = _applyDecoratedDescriptor(_class15.prototype, 'popinHAlign', [_dec38], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor29 = _applyDecoratedDescriptor(_class15.prototype, 'popinDisplay', [_dec39], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor30 = _applyDecoratedDescriptor(_class15.prototype, 'mergeDuplicates', [_dec40], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor31 = _applyDecoratedDescriptor(_class15.prototype, 'mergeFunctionName', [_dec41], {
  enumerable: true,
  initializer: function initializer() {
    return 'getText';
  }
})), _class15)) || _class14) || _class14);
var Ui5ColumnListItem = exports.Ui5ColumnListItem = (_dec42 = (0, _aureliaTemplating.customElement)('ui5-column-list-item'), _dec43 = (0, _aureliaDependencyInjection.inject)(Element), _dec44 = (0, _aureliaTemplating.bindable)(), _dec45 = (0, _aureliaTemplating.bindable)(), _dec42(_class17 = _dec43(_class17 = (_class18 = function () {
  function Ui5ColumnListItem(element) {
    _classCallCheck(this, Ui5ColumnListItem);

    this._item = null;
    this._parent = null;
    this._relation = null;

    _initDefineProp(this, 'vAlign', _descriptor32, this);

    _initDefineProp(this, 'selected', _descriptor33, this);

    this.element = element;
  }

  Ui5ColumnListItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5ColumnListItem.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);

    this._item = new sap.m.ColumnListItem({
      vAlign: this.vAlign,
      selected: getBooleanFromAttributeValue(this.selected)
    });
    attributeManager.addAttributes({ "ui5-container": '' });
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
  };

  Ui5ColumnListItem.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }
  };

  Ui5ColumnListItem.prototype.bind = function bind(bindingContext, overrideContext) {
    console.log("bind called" + bindingContext + overrideContext);
  };

  Ui5ColumnListItem.prototype.unbind = function unbind() {
    console.log('unbind called ');
  };

  Ui5ColumnListItem.prototype.addChild = function addChild(child, elem) {
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

  Ui5ColumnListItem.prototype.selectedChanged = function selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(newValue);
    }
  };

  _createClass(Ui5ColumnListItem, [{
    key: 'UIElement',
    get: function get() {
      return this._item;
    }
  }]);

  return Ui5ColumnListItem;
}(), (_descriptor32 = _applyDecoratedDescriptor(_class18.prototype, 'vAlign', [_dec44], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor33 = _applyDecoratedDescriptor(_class18.prototype, 'selected', [_dec45], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class18)) || _class17) || _class17);
var Ui5Container = exports.Ui5Container = (_dec46 = (0, _aureliaTemplating.customAttribute)('ui5-container'), _dec47 = (0, _aureliaDependencyInjection.inject)(Element), _dec46(_class20 = _dec47(_class20 = function () {
  function Ui5Container(element) {
    _classCallCheck(this, Ui5Container);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5Container.prototype.attached = function attached() {};

  Ui5Container.prototype.detached = function detached() {};

  return Ui5Container;
}()) || _class20) || _class20);

var Ui5Control = exports.Ui5Control = function (_Ui5Element) {
  _inherits(Ui5Control, _Ui5Element);

  function Ui5Control(elem) {
    _classCallCheck(this, Ui5Control);

    var _this = _possibleConstructorReturn(this, _Ui5Element.call(this, elem));

    _this.busy = false;
    return _this;
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

var Ui5DatePicker = exports.Ui5DatePicker = (_dec48 = (0, _aureliaTemplating.customElement)('ui5-date-picker'), _dec49 = (0, _aureliaDependencyInjection.inject)(Element), _dec50 = (0, _aureliaTemplating.bindable)(), _dec51 = (0, _aureliaTemplating.bindable)(), _dec52 = (0, _aureliaTemplating.bindable)(), _dec53 = (0, _aureliaTemplating.bindable)(), _dec54 = (0, _aureliaTemplating.bindable)(), _dec55 = (0, _aureliaTemplating.bindable)(), _dec56 = (0, _aureliaTemplating.bindable)(), _dec57 = (0, _aureliaTemplating.bindable)(), _dec58 = (0, _aureliaTemplating.bindable)(), _dec59 = (0, _aureliaTemplating.bindable)(), _dec60 = (0, _aureliaTemplating.bindable)(), _dec61 = (0, _aureliaTemplating.bindable)(), _dec62 = (0, _aureliaTemplating.bindable)(), _dec63 = (0, _aureliaTemplating.bindable)(), _dec64 = (0, _aureliaTemplating.bindable)(), _dec65 = (0, _aureliaTemplating.bindable)(), _dec66 = (0, _aureliaTemplating.bindable)(), _dec67 = (0, _aureliaTemplating.bindable)(), _dec68 = (0, _aureliaTemplating.bindable)(), _dec69 = (0, _aureliaTemplating.bindable)(), _dec70 = (0, _aureliaTemplating.bindable)(), _dec71 = (0, _aureliaTemplating.bindable)(), _dec72 = (0, _aureliaTemplating.bindable)(), _dec48(_class22 = _dec49(_class22 = (_class23 = function (_Ui5InputBase) {
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

    var _this2 = _possibleConstructorReturn(this, _Ui5InputBase.call(this, element));

    _this2._picker = null;

    _initDefineProp(_this2, 'ui5Id', _descriptor34, _this2);

    _initDefineProp(_this2, 'includeTime', _descriptor35, _this2);

    _initDefineProp(_this2, 'displayFormat', _descriptor36, _this2);

    _initDefineProp(_this2, 'valueFormat', _descriptor37, _this2);

    _initDefineProp(_this2, 'dateValue', _descriptor38, _this2);

    _initDefineProp(_this2, 'displayFormatType', _descriptor39, _this2);

    _initDefineProp(_this2, 'secondaryCalendarType', _descriptor40, _this2);

    _initDefineProp(_this2, 'minDate', _descriptor41, _this2);

    _initDefineProp(_this2, 'maxDate', _descriptor42, _this2);

    _initDefineProp(_this2, 'specialDates', _descriptor43, _this2);

    _initDefineProp(_this2, 'value', _descriptor44, _this2);

    _initDefineProp(_this2, 'width', _descriptor45, _this2);

    _initDefineProp(_this2, 'enabled', _descriptor46, _this2);

    _initDefineProp(_this2, 'valueState', _descriptor47, _this2);

    _initDefineProp(_this2, 'name', _descriptor48, _this2);

    _initDefineProp(_this2, 'placeholder', _descriptor49, _this2);

    _initDefineProp(_this2, 'editable', _descriptor50, _this2);

    _initDefineProp(_this2, 'valueStateText', _descriptor51, _this2);

    _initDefineProp(_this2, 'showValueStateMessage', _descriptor52, _this2);

    _initDefineProp(_this2, 'textAlign', _descriptor53, _this2);

    _initDefineProp(_this2, 'textDirection', _descriptor54, _this2);

    _initDefineProp(_this2, 'required', _descriptor55, _this2);

    _initDefineProp(_this2, 'change', _descriptor56, _this2);

    _this2.element = element;
    return _this2;
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
    if (this.ui5Id) {
      if (getBooleanFromAttributeValue(this.includeTime)) this._picker = new sap.m.DateTimePicker(this.ui5Id, params);else this._picker = new sap.m.DatePicker(this.ui5Id, params);
    } else {
      if (getBooleanFromAttributeValue(this.includeTime)) this._picker = new sap.m.DateTimePicker(params);else this._picker = new sap.m.DatePicker(params);
    }
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
}(Ui5InputBase), (_descriptor34 = _applyDecoratedDescriptor(_class23.prototype, 'ui5Id', [_dec50], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor35 = _applyDecoratedDescriptor(_class23.prototype, 'includeTime', [_dec51], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor36 = _applyDecoratedDescriptor(_class23.prototype, 'displayFormat', [_dec52], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor37 = _applyDecoratedDescriptor(_class23.prototype, 'valueFormat', [_dec53], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor38 = _applyDecoratedDescriptor(_class23.prototype, 'dateValue', [_dec54], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor39 = _applyDecoratedDescriptor(_class23.prototype, 'displayFormatType', [_dec55], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor40 = _applyDecoratedDescriptor(_class23.prototype, 'secondaryCalendarType', [_dec56], {
  enumerable: true,
  initializer: function initializer() {
    return 'Gregorian';
  }
}), _descriptor41 = _applyDecoratedDescriptor(_class23.prototype, 'minDate', [_dec57], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor42 = _applyDecoratedDescriptor(_class23.prototype, 'maxDate', [_dec58], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor43 = _applyDecoratedDescriptor(_class23.prototype, 'specialDates', [_dec59], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor44 = _applyDecoratedDescriptor(_class23.prototype, 'value', [_dec60], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor45 = _applyDecoratedDescriptor(_class23.prototype, 'width', [_dec61], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor46 = _applyDecoratedDescriptor(_class23.prototype, 'enabled', [_dec62], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor47 = _applyDecoratedDescriptor(_class23.prototype, 'valueState', [_dec63], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor48 = _applyDecoratedDescriptor(_class23.prototype, 'name', [_dec64], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor49 = _applyDecoratedDescriptor(_class23.prototype, 'placeholder', [_dec65], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor50 = _applyDecoratedDescriptor(_class23.prototype, 'editable', [_dec66], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor51 = _applyDecoratedDescriptor(_class23.prototype, 'valueStateText', [_dec67], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor52 = _applyDecoratedDescriptor(_class23.prototype, 'showValueStateMessage', [_dec68], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor53 = _applyDecoratedDescriptor(_class23.prototype, 'textAlign', [_dec69], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor54 = _applyDecoratedDescriptor(_class23.prototype, 'textDirection', [_dec70], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor55 = _applyDecoratedDescriptor(_class23.prototype, 'required', [_dec71], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor56 = _applyDecoratedDescriptor(_class23.prototype, 'change', [_dec72], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class23)) || _class22) || _class22);
var Ui5Dialog = exports.Ui5Dialog = (_dec73 = (0, _aureliaTemplating.customElement)('ui5-dialog'), _dec74 = (0, _aureliaDependencyInjection.inject)(Element), _dec75 = (0, _aureliaTemplating.bindable)(), _dec76 = (0, _aureliaTemplating.bindable)(), _dec77 = (0, _aureliaTemplating.bindable)(), _dec78 = (0, _aureliaTemplating.bindable)(), _dec79 = (0, _aureliaTemplating.bindable)(), _dec80 = (0, _aureliaTemplating.bindable)(), _dec81 = (0, _aureliaTemplating.bindable)(), _dec82 = (0, _aureliaTemplating.bindable)(), _dec83 = (0, _aureliaTemplating.bindable)(), _dec84 = (0, _aureliaTemplating.bindable)(), _dec85 = (0, _aureliaTemplating.bindable)(), _dec86 = (0, _aureliaTemplating.bindable)(), _dec87 = (0, _aureliaTemplating.bindable)(), _dec88 = (0, _aureliaTemplating.bindable)(), _dec89 = (0, _aureliaTemplating.bindable)(), _dec90 = (0, _aureliaTemplating.bindable)(), _dec91 = (0, _aureliaTemplating.bindable)(), _dec92 = (0, _aureliaTemplating.bindable)(), _dec93 = (0, _aureliaTemplating.bindable)(), _dec73(_class25 = _dec74(_class25 = (_class26 = function () {
  function Ui5Dialog(element) {
    _classCallCheck(this, Ui5Dialog);

    this._dialog = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor57, this);

    _initDefineProp(this, 'icon', _descriptor58, this);

    _initDefineProp(this, 'title', _descriptor59, this);

    _initDefineProp(this, 'showHeader', _descriptor60, this);

    _initDefineProp(this, 'type', _descriptor61, this);

    _initDefineProp(this, 'state', _descriptor62, this);

    _initDefineProp(this, 'stretchOnPhone', _descriptor63, this);

    _initDefineProp(this, 'stretch', _descriptor64, this);

    _initDefineProp(this, 'contentWidth', _descriptor65, this);

    _initDefineProp(this, 'contentHeight', _descriptor66, this);

    _initDefineProp(this, 'horizontalScrolling', _descriptor67, this);

    _initDefineProp(this, 'verticalScrolling', _descriptor68, this);

    _initDefineProp(this, 'resizable', _descriptor69, this);

    _initDefineProp(this, 'draggable', _descriptor70, this);

    _initDefineProp(this, 'escapeHandler', _descriptor71, this);

    _initDefineProp(this, 'beforeOpen', _descriptor72, this);

    _initDefineProp(this, 'afterOpen', _descriptor73, this);

    _initDefineProp(this, 'beforeClose', _descriptor74, this);

    _initDefineProp(this, 'afterClose', _descriptor75, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5Dialog.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5Dialog.prototype.addChild = function addChild(child, elem) {
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
  };

  Ui5Dialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._dialog.removeContent(child);
    } else if (relation == 'buttons') {
      this._dialog.removeButton(child);
    }
  };

  Ui5Dialog.prototype.removeChild = function removeChild(child, elem) {};

  Ui5Dialog.prototype.attached = function attached() {
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
    if (this.ui5Id) this._dialog = new sap.m.Dialog(this.ui5Id, props);else this._dialog = new sap.m.Dialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5Dialog.prototype.detached = function detached() {};

  Ui5Dialog.prototype.iconChanged = function iconChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setIcon(newValue);
    }
  };

  Ui5Dialog.prototype.titleChanged = function titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  };

  Ui5Dialog.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Dialog.prototype.typeChanged = function typeChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setType(newValue);
    }
  };

  Ui5Dialog.prototype.stateChanged = function stateChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setState(newValue);
    }
  };

  Ui5Dialog.prototype.stretchOnPhoneChanged = function stretchOnPhoneChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setStretchOnPhone(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Dialog.prototype.stretchChanged = function stretchChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setStretch(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Dialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  };

  Ui5Dialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  };

  Ui5Dialog.prototype.horizontalScrollingChanged = function horizontalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Dialog.prototype.verticalScrollingChanged = function verticalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Dialog.prototype.resizableChanged = function resizableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Dialog.prototype.draggableChanged = function draggableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setDraggable(newValue);
    }
  };

  Ui5Dialog.prototype.escapeHandlerChanged = function escapeHandlerChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setEscapeHandler(newValue);
    }
  };

  _createClass(Ui5Dialog, [{
    key: 'UIElement',
    get: function get() {
      return this._dialog;
    }
  }]);

  return Ui5Dialog;
}(), (_descriptor57 = _applyDecoratedDescriptor(_class26.prototype, 'ui5Id', [_dec75], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor58 = _applyDecoratedDescriptor(_class26.prototype, 'icon', [_dec76], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor59 = _applyDecoratedDescriptor(_class26.prototype, 'title', [_dec77], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor60 = _applyDecoratedDescriptor(_class26.prototype, 'showHeader', [_dec78], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor61 = _applyDecoratedDescriptor(_class26.prototype, 'type', [_dec79], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor62 = _applyDecoratedDescriptor(_class26.prototype, 'state', [_dec80], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor63 = _applyDecoratedDescriptor(_class26.prototype, 'stretchOnPhone', [_dec81], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor64 = _applyDecoratedDescriptor(_class26.prototype, 'stretch', [_dec82], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor65 = _applyDecoratedDescriptor(_class26.prototype, 'contentWidth', [_dec83], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor66 = _applyDecoratedDescriptor(_class26.prototype, 'contentHeight', [_dec84], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor67 = _applyDecoratedDescriptor(_class26.prototype, 'horizontalScrolling', [_dec85], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor68 = _applyDecoratedDescriptor(_class26.prototype, 'verticalScrolling', [_dec86], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor69 = _applyDecoratedDescriptor(_class26.prototype, 'resizable', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor70 = _applyDecoratedDescriptor(_class26.prototype, 'draggable', [_dec88], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor71 = _applyDecoratedDescriptor(_class26.prototype, 'escapeHandler', [_dec89], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor72 = _applyDecoratedDescriptor(_class26.prototype, 'beforeOpen', [_dec90], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor73 = _applyDecoratedDescriptor(_class26.prototype, 'afterOpen', [_dec91], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor74 = _applyDecoratedDescriptor(_class26.prototype, 'beforeClose', [_dec92], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor75 = _applyDecoratedDescriptor(_class26.prototype, 'afterClose', [_dec93], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class26)) || _class25) || _class25);
var Ui5DynamicPage = exports.Ui5DynamicPage = (_dec94 = (0, _aureliaTemplating.customElement)('ui5-dynamic-page'), _dec95 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaFramework.TaskQueue), _dec96 = (0, _aureliaTemplating.bindable)(), _dec97 = (0, _aureliaTemplating.bindable)(), _dec98 = (0, _aureliaTemplating.bindable)(), _dec99 = (0, _aureliaTemplating.bindable)(), _dec100 = (0, _aureliaTemplating.bindable)(), _dec101 = (0, _aureliaFramework.computedFrom)('_page'), _dec94(_class28 = _dec95(_class28 = (_class29 = function () {
  function Ui5DynamicPage(element, queue) {
    _classCallCheck(this, Ui5DynamicPage);

    _initDefineProp(this, 'preserveHeaderStateOnScroll', _descriptor76, this);

    _initDefineProp(this, 'headerExpanded', _descriptor77, this);

    _initDefineProp(this, 'toggleHeaderOnTitleClick', _descriptor78, this);

    _initDefineProp(this, 'showFooter', _descriptor79, this);

    _initDefineProp(this, 'fitContent', _descriptor80, this);

    this._page = null;
    this._taskQueue = null;

    this.element = element;
    this._taskQueue = queue;
  }

  Ui5DynamicPage.prototype.defaultFunc = function defaultFunc() {};

  Ui5DynamicPage.prototype.addChild = function addChild(child, elem) {
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
    for (var _iterator6 = path, _isArray6 = Array.isArray(_iterator6), _i6 = 0, _iterator6 = _isArray6 ? _iterator6 : _iterator6[Symbol.iterator]();;) {
      if (_isArray6) {
        if (_i6 >= _iterator6.length) break;
        elem = _iterator6[_i6++];
      } else {
        _i6 = _iterator6.next();
        if (_i6.done) break;
        elem = _i6.value;
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
}(), (_descriptor76 = _applyDecoratedDescriptor(_class29.prototype, 'preserveHeaderStateOnScroll', [_dec96], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor77 = _applyDecoratedDescriptor(_class29.prototype, 'headerExpanded', [_dec97], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor78 = _applyDecoratedDescriptor(_class29.prototype, 'toggleHeaderOnTitleClick', [_dec98], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor79 = _applyDecoratedDescriptor(_class29.prototype, 'showFooter', [_dec99], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor80 = _applyDecoratedDescriptor(_class29.prototype, 'fitContent', [_dec100], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _applyDecoratedDescriptor(_class29.prototype, 'UIElement', [_dec101], Object.getOwnPropertyDescriptor(_class29.prototype, 'UIElement'), _class29.prototype)), _class29)) || _class28) || _class28);

var AttributeManager = exports.AttributeManager = function () {
  function AttributeManager(element) {
    _classCallCheck(this, AttributeManager);

    this._colorClasses = ['accent', 'primary'];
    this.addedClasses = [];
    this.addedAttributes = {};

    this.element = element;
  }

  AttributeManager.prototype.addAttributes = function addAttributes(attrs) {
    var _this3 = this;

    var keys = Object.keys(attrs);
    keys.forEach(function (k) {
      if (!_this3.element.getAttribute(k)) {
        _this3.addedAttributes[k] = attrs[k];
        _this3.element.setAttribute(k, attrs[k]);
      } else if (_this3.element.getAttribute(k) !== attrs[k]) {
        _this3.element.setAttribute(k, attrs[k]);
      }
    });
  };

  AttributeManager.prototype.removeAttributes = function removeAttributes(attrs) {
    var _this4 = this;

    if (typeof attrs === 'string') {
      attrs = [attrs];
    }
    attrs.forEach(function (a) {
      if (_this4.element.getAttribute(a) && !!_this4.addedAttributes[a]) {
        _this4.element.removeAttribute(a);
        _this4.addedAttributes[a] = null;
        delete _this4.addedAttributes[a];
      }
    });
  };

  AttributeManager.prototype.addClasses = function addClasses(classes) {
    var _this5 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      var classListHasColor = _this5._colorClasses.filter(function (cc) {
        return _this5.element.classList.contains(cc);
      }).length > 0;
      if (_this5._colorClasses.indexOf(c) > -1 && classListHasColor) {} else {
        if (!_this5.element.classList.contains(c)) {
          _this5.addedClasses.push(c);
          _this5.element.classList.add(c);
        }
      }
    });
  };

  AttributeManager.prototype.removeClasses = function removeClasses(classes) {
    var _this6 = this;

    if (typeof classes === 'string') {
      classes = [classes];
    }
    classes.forEach(function (c) {
      if (_this6.element.classList.contains(c) && _this6.addedClasses.indexOf(c) > -1) {
        _this6.element.classList.remove(c);
        _this6.addedClasses.splice(_this6.addedClasses.indexOf(c), 1);
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

function ui5Initialize() {
  new Promise(function (resolve) {
    return sap.ui.getCore().attachInit(function () {
      new sap.m.BusyIndicator().placeAt("indicator");
      resolve();
    });
  });
}
function ui5SetTheme(name, path) {
  sap.ui.getCore().applyTheme(name, path);
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

var SmoothScroll = exports.SmoothScroll = (_temp = _class32 = function () {
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
}(), _class32.defaultConfig = {
  duration: 400,
  easing: "ease-in"
}, _class32.inject = [_aureliaFramework.Animator, _aureliaRouter.Router], _temp);
var Ui5DynamicPageHeader = exports.Ui5DynamicPageHeader = (_dec102 = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-header'), _dec103 = (0, _aureliaDependencyInjection.inject)(Element), _dec104 = (0, _aureliaTemplating.bindable)(), _dec102(_class33 = _dec103(_class33 = (_class34 = function () {
  function Ui5DynamicPageHeader(element) {
    _classCallCheck(this, Ui5DynamicPageHeader);

    this._header = null;

    _initDefineProp(this, 'pinnable', _descriptor81, this);

    this.element = element;
  }

  Ui5DynamicPageHeader.prototype.addChild = function addChild(child, elem) {
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
        this._header.addContent(child);
      }
    }
  };

  Ui5DynamicPageHeader.prototype.removeChild = function removeChild(child, elem) {
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
}(), (_descriptor81 = _applyDecoratedDescriptor(_class34.prototype, 'pinnable', [_dec104], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class34)) || _class33) || _class33);
var Ui5FeedContent = exports.Ui5FeedContent = (_dec105 = (0, _aureliaTemplating.customElement)('ui5-feed-content'), _dec106 = (0, _aureliaDependencyInjection.inject)(Element), _dec107 = (0, _aureliaTemplating.bindable)(), _dec108 = (0, _aureliaTemplating.bindable)(), _dec109 = (0, _aureliaTemplating.bindable)(), _dec110 = (0, _aureliaTemplating.bindable)(), _dec105(_class36 = _dec106(_class36 = (_class37 = function () {
  function Ui5FeedContent(element) {
    _classCallCheck(this, Ui5FeedContent);

    this._content = null;

    _initDefineProp(this, 'value', _descriptor82, this);

    _initDefineProp(this, 'contentText', _descriptor83, this);

    _initDefineProp(this, 'subheader', _descriptor84, this);

    _initDefineProp(this, 'valueColor', _descriptor85, this);

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
}(), (_descriptor82 = _applyDecoratedDescriptor(_class37.prototype, 'value', [_dec107], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor83 = _applyDecoratedDescriptor(_class37.prototype, 'contentText', [_dec108], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor84 = _applyDecoratedDescriptor(_class37.prototype, 'subheader', [_dec109], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor85 = _applyDecoratedDescriptor(_class37.prototype, 'valueColor', [_dec110], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class37)) || _class36) || _class36);

var Ui5Element = exports.Ui5Element = function () {
  function Ui5Element() {
    _classCallCheck(this, Ui5Element);

    this._container = null;
  }

  Ui5Element.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    if (path[0].localName == 'layout') {
      this.UIElement.setLayoutData(child);
    }
  };

  Ui5Element.prototype.removeChild = function removeChild(child, elem) {};

  Ui5Element.prototype.attached = function attached() {};

  return Ui5Element;
}();

var Ui5Form = exports.Ui5Form = (_dec111 = (0, _aureliaTemplating.customElement)('ui5-form'), _dec112 = (0, _aureliaDependencyInjection.inject)(Element), _dec113 = (0, _aureliaTemplating.bindable)(), _dec114 = (0, _aureliaTemplating.bindable)(), _dec115 = (0, _aureliaTemplating.bindable)(), _dec116 = (0, _aureliaTemplating.bindable)(), _dec117 = (0, _aureliaFramework.computedFrom)('_form'), _dec111(_class40 = _dec112(_class40 = (_class41 = function () {
  function Ui5Form(element) {
    _classCallCheck(this, Ui5Form);

    _initDefineProp(this, 'ui5Id', _descriptor86, this);

    _initDefineProp(this, 'width', _descriptor87, this);

    _initDefineProp(this, 'editable', _descriptor88, this);

    _initDefineProp(this, 'title', _descriptor89, this);

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
}(), (_descriptor86 = _applyDecoratedDescriptor(_class41.prototype, 'ui5Id', [_dec113], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor87 = _applyDecoratedDescriptor(_class41.prototype, 'width', [_dec114], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor88 = _applyDecoratedDescriptor(_class41.prototype, 'editable', [_dec115], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor89 = _applyDecoratedDescriptor(_class41.prototype, 'title', [_dec116], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class41.prototype, 'UIElement', [_dec117], Object.getOwnPropertyDescriptor(_class41.prototype, 'UIElement'), _class41.prototype)), _class41)) || _class40) || _class40);
var Ui5FormContainer = exports.Ui5FormContainer = (_dec118 = (0, _aureliaTemplating.customElement)('ui5-form-container'), _dec119 = (0, _aureliaDependencyInjection.inject)(Element), _dec120 = (0, _aureliaTemplating.bindable)(), _dec121 = (0, _aureliaTemplating.bindable)(), _dec118(_class43 = _dec119(_class43 = (_class44 = function () {
  function Ui5FormContainer(element) {
    _classCallCheck(this, Ui5FormContainer);

    _initDefineProp(this, 'ui5Id', _descriptor90, this);

    _initDefineProp(this, 'title', _descriptor91, this);

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
  };

  Ui5FormContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'element') {
      this._form.removeFormElement(child);
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
}(), (_descriptor90 = _applyDecoratedDescriptor(_class44.prototype, 'ui5Id', [_dec120], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor91 = _applyDecoratedDescriptor(_class44.prototype, 'title', [_dec121], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class44)) || _class43) || _class43);
var Ui5FormattedText = exports.Ui5FormattedText = (_dec122 = (0, _aureliaTemplating.customElement)('ui5-formatted-text'), _dec123 = (0, _aureliaDependencyInjection.inject)(Element), _dec124 = (0, _aureliaTemplating.bindable)(), _dec125 = (0, _aureliaTemplating.bindable)(), _dec126 = (0, _aureliaTemplating.bindable)(), _dec127 = (0, _aureliaTemplating.bindable)(), _dec128 = (0, _aureliaTemplating.bindable)(), _dec122(_class46 = _dec123(_class46 = (_class47 = function (_Ui5Element2) {
  _inherits(Ui5FormattedText, _Ui5Element2);

  function Ui5FormattedText(element) {
    _classCallCheck(this, Ui5FormattedText);

    var _this7 = _possibleConstructorReturn(this, _Ui5Element2.call(this, element));

    _this7._text = null;

    _initDefineProp(_this7, 'htmlText', _descriptor92, _this7);

    _initDefineProp(_this7, 'width', _descriptor93, _this7);

    _initDefineProp(_this7, 'height', _descriptor94, _this7);

    _initDefineProp(_this7, 'convertLinksToAnchorTags', _descriptor95, _this7);

    _initDefineProp(_this7, 'convertedLinksDefaultTarget', _descriptor96, _this7);

    _this7.element = element;
    return _this7;
  }

  Ui5FormattedText.prototype.addChild = function addChild(child, elem) {
    _Ui5Element2.prototype.addChild.call(this, child, elem);
  };

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

  _createClass(Ui5FormattedText, [{
    key: 'UIElement',
    get: function get() {
      return this._text;
    }
  }]);

  return Ui5FormattedText;
}(Ui5Element), (_descriptor92 = _applyDecoratedDescriptor(_class47.prototype, 'htmlText', [_dec124], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor93 = _applyDecoratedDescriptor(_class47.prototype, 'width', [_dec125], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor94 = _applyDecoratedDescriptor(_class47.prototype, 'height', [_dec126], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor95 = _applyDecoratedDescriptor(_class47.prototype, 'convertLinksToAnchorTags', [_dec127], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor96 = _applyDecoratedDescriptor(_class47.prototype, 'convertedLinksDefaultTarget', [_dec128], {
  enumerable: true,
  initializer: function initializer() {
    return '_blank';
  }
})), _class47)) || _class46) || _class46);
var Ui5FormElement = exports.Ui5FormElement = (_dec129 = (0, _aureliaTemplating.customElement)('ui5-form-element'), _dec130 = (0, _aureliaDependencyInjection.inject)(Element), _dec131 = (0, _aureliaTemplating.bindable)(), _dec129(_class49 = _dec130(_class49 = (_class50 = function () {
  function Ui5FormElement(element) {
    _classCallCheck(this, Ui5FormElement);

    _initDefineProp(this, 'ui5Id', _descriptor97, this);

    this._form = null;
    this._parent = null;
    this._relation = null;

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
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._form, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._form.placeAt(this.element.parentElement);
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5FormElement.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) this._parent.removeChildByRelation(this._form, this._relation);
  };

  Ui5FormElement.prototype.titleChanged = function titleChanged(newValue) {
    if (this._form !== null) {
      this._form.setTitle(newValue);
    }
  };

  return Ui5FormElement;
}(), (_descriptor97 = _applyDecoratedDescriptor(_class50.prototype, 'ui5Id', [_dec131], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class50)) || _class49) || _class49);
var Ui5GenericTile = exports.Ui5GenericTile = (_dec132 = (0, _aureliaTemplating.customElement)('ui5-generic-tile'), _dec133 = (0, _aureliaDependencyInjection.inject)(Element), _dec134 = (0, _aureliaTemplating.bindable)(), _dec135 = (0, _aureliaTemplating.bindable)(), _dec136 = (0, _aureliaTemplating.bindable)(), _dec137 = (0, _aureliaTemplating.bindable)(), _dec138 = (0, _aureliaTemplating.bindable)(), _dec132(_class52 = _dec133(_class52 = (_class53 = function () {
  function Ui5GenericTile(element) {
    _classCallCheck(this, Ui5GenericTile);

    this._tile = null;

    _initDefineProp(this, 'mode', _descriptor98, this);

    _initDefineProp(this, 'header', _descriptor99, this);

    _initDefineProp(this, 'subheader', _descriptor100, this);

    _initDefineProp(this, 'press', _descriptor101, this);

    _initDefineProp(this, 'frameType', _descriptor102, this);

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
}(), (_descriptor98 = _applyDecoratedDescriptor(_class53.prototype, 'mode', [_dec134], {
  enumerable: true,
  initializer: function initializer() {
    return "content";
  }
}), _descriptor99 = _applyDecoratedDescriptor(_class53.prototype, 'header', [_dec135], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor100 = _applyDecoratedDescriptor(_class53.prototype, 'subheader', [_dec136], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor101 = _applyDecoratedDescriptor(_class53.prototype, 'press', [_dec137], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor102 = _applyDecoratedDescriptor(_class53.prototype, 'frameType', [_dec138], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class53)) || _class52) || _class52);
var Ui5GridData = exports.Ui5GridData = (_dec139 = (0, _aureliaTemplating.customElement)('ui5-grid-data'), _dec140 = (0, _aureliaDependencyInjection.inject)(Element), _dec141 = (0, _aureliaTemplating.bindable)(), _dec142 = (0, _aureliaTemplating.bindable)(), _dec143 = (0, _aureliaTemplating.bindable)(), _dec139(_class55 = _dec140(_class55 = (_class56 = function () {
  function Ui5GridData(element) {
    _classCallCheck(this, Ui5GridData);

    this._gridData = null;

    _initDefineProp(this, 'id', _descriptor103, this);

    _initDefineProp(this, 'span', _descriptor104, this);

    _initDefineProp(this, 'indent', _descriptor105, this);

    this.element = element;
  }

  Ui5GridData.prototype.attached = function attached() {
    this._gridData = new sap.ui.layout.GridData({
      span: this.span,
      indent: this.indent
    });
    $(this.element).parents("[ui5-layout]")[0].au.controller.viewModel.addChild(this._gridData, this.element);
  };

  Ui5GridData.prototype.indentChanged = function indentChanged(newValue) {
    if (this._gridData !== null) {
      this._gridData.setIndent(newValue);
    }
  };

  Ui5GridData.prototype.spanChanged = function spanChanged(newValue) {
    if (this._gridData !== null) {
      this._gridData.setSpan(newValue);
    }
  };

  return Ui5GridData;
}(), (_descriptor103 = _applyDecoratedDescriptor(_class56.prototype, 'id', [_dec141], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor104 = _applyDecoratedDescriptor(_class56.prototype, 'span', [_dec142], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor105 = _applyDecoratedDescriptor(_class56.prototype, 'indent', [_dec143], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class56)) || _class55) || _class55);
var Ui5Html = exports.Ui5Html = (_dec144 = (0, _aureliaTemplating.customElement)('ui5-html'), _dec145 = (0, _aureliaDependencyInjection.inject)(Element), _dec144(_class58 = _dec145(_class58 = function () {
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
}()) || _class58) || _class58);
var Ui5Icon = exports.Ui5Icon = (_dec146 = (0, _aureliaTemplating.customElement)('ui5-icon'), _dec147 = (0, _aureliaDependencyInjection.inject)(Element), _dec148 = (0, _aureliaTemplating.bindable)(), _dec149 = (0, _aureliaTemplating.bindable)(), _dec150 = (0, _aureliaTemplating.bindable)(), _dec151 = (0, _aureliaTemplating.bindable)(), _dec152 = (0, _aureliaTemplating.bindable)(), _dec153 = (0, _aureliaTemplating.bindable)(), _dec154 = (0, _aureliaTemplating.bindable)(), _dec155 = (0, _aureliaTemplating.bindable)(), _dec156 = (0, _aureliaTemplating.bindable)(), _dec157 = (0, _aureliaTemplating.bindable)(), _dec158 = (0, _aureliaTemplating.bindable)(), _dec159 = (0, _aureliaTemplating.bindable)(), _dec160 = (0, _aureliaTemplating.bindable)(), _dec161 = (0, _aureliaTemplating.bindable)(), _dec162 = (0, _aureliaTemplating.bindable)(), _dec163 = (0, _aureliaTemplating.bindable)(), _dec164 = (0, _aureliaFramework.computedFrom)('_icon'), _dec146(_class60 = _dec147(_class60 = (_class61 = function () {
  Ui5Icon.prototype.defaultFunc = function defaultFunc() {};

  function Ui5Icon(element) {
    _classCallCheck(this, Ui5Icon);

    this._icon = null;

    _initDefineProp(this, 'ui5Id', _descriptor106, this);

    _initDefineProp(this, 'src', _descriptor107, this);

    _initDefineProp(this, 'size', _descriptor108, this);

    _initDefineProp(this, 'color', _descriptor109, this);

    _initDefineProp(this, 'hoverColor', _descriptor110, this);

    _initDefineProp(this, 'activeColor', _descriptor111, this);

    _initDefineProp(this, 'width', _descriptor112, this);

    _initDefineProp(this, 'height', _descriptor113, this);

    _initDefineProp(this, 'backgroundColor', _descriptor114, this);

    _initDefineProp(this, 'hoverBackgroundColor', _descriptor115, this);

    _initDefineProp(this, 'activeBackgroundColor', _descriptor116, this);

    _initDefineProp(this, 'decorative', _descriptor117, this);

    _initDefineProp(this, 'useIconTooltip', _descriptor118, this);

    _initDefineProp(this, 'alt', _descriptor119, this);

    _initDefineProp(this, 'noTabStop', _descriptor120, this);

    _initDefineProp(this, 'press', _descriptor121, this);

    this.element = element;
  }

  Ui5Icon.prototype.attached = function attached() {
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
    if (this.ui5Id) this._icon = new sap.ui.core.Icon(this.ui5Id, props);else this._icon = new sap.ui.core.Icon(props);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._icon, this.element);
  };

  Ui5Icon.prototype.srcChanged = function srcChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setSrc(newValue);
    }
  };

  Ui5Icon.prototype.sizeChanged = function sizeChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setSize(newValue);
    }
  };

  Ui5Icon.prototype.colorChanged = function colorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setColor(newValue);
    }
  };

  Ui5Icon.prototype.hoverColorChanged = function hoverColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHoverColor(newValue);
    }
  };

  Ui5Icon.prototype.activeColorChanged = function activeColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setActiveColor(newValue);
    }
  };

  Ui5Icon.prototype.widthChanged = function widthChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setWidth(newValue);
    }
  };

  Ui5Icon.prototype.heightChanged = function heightChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHeight(newValue);
    }
  };

  Ui5Icon.prototype.backgroundColorChanged = function backgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setBackgroundColor(newValue);
    }
  };

  Ui5Icon.prototype.hoverBackgroundColorChanged = function hoverBackgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setHoverBackgroundColor(newValue);
    }
  };

  Ui5Icon.prototype.activeBackgroundColorChanged = function activeBackgroundColorChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setActiveBackgroundColor(newValue);
    }
  };

  Ui5Icon.prototype.decorativeChanged = function decorativeChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setDecorative(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Icon.prototype.useIconTooltipChanged = function useIconTooltipChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setUseIconTooltip(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5Icon.prototype.altChanged = function altChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setAlt(newValue);
    }
  };

  Ui5Icon.prototype.noTabStopChanged = function noTabStopChanged(newValue) {
    if (this._icon !== null) {
      this._icon.setNoTabStop(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5Icon, [{
    key: 'UIElement',
    get: function get() {
      return this._icon;
    }
  }]);

  return Ui5Icon;
}(), (_descriptor106 = _applyDecoratedDescriptor(_class61.prototype, 'ui5Id', [_dec148], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor107 = _applyDecoratedDescriptor(_class61.prototype, 'src', [_dec149], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor108 = _applyDecoratedDescriptor(_class61.prototype, 'size', [_dec150], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor109 = _applyDecoratedDescriptor(_class61.prototype, 'color', [_dec151], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor110 = _applyDecoratedDescriptor(_class61.prototype, 'hoverColor', [_dec152], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor111 = _applyDecoratedDescriptor(_class61.prototype, 'activeColor', [_dec153], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor112 = _applyDecoratedDescriptor(_class61.prototype, 'width', [_dec154], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor113 = _applyDecoratedDescriptor(_class61.prototype, 'height', [_dec155], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor114 = _applyDecoratedDescriptor(_class61.prototype, 'backgroundColor', [_dec156], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor115 = _applyDecoratedDescriptor(_class61.prototype, 'hoverBackgroundColor', [_dec157], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor116 = _applyDecoratedDescriptor(_class61.prototype, 'activeBackgroundColor', [_dec158], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor117 = _applyDecoratedDescriptor(_class61.prototype, 'decorative', [_dec159], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor118 = _applyDecoratedDescriptor(_class61.prototype, 'useIconTooltip', [_dec160], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor119 = _applyDecoratedDescriptor(_class61.prototype, 'alt', [_dec161], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor120 = _applyDecoratedDescriptor(_class61.prototype, 'noTabStop', [_dec162], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor121 = _applyDecoratedDescriptor(_class61.prototype, 'press', [_dec163], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _applyDecoratedDescriptor(_class61.prototype, 'UIElement', [_dec164], Object.getOwnPropertyDescriptor(_class61.prototype, 'UIElement'), _class61.prototype)), _class61)) || _class60) || _class60);
var Ui5IconTabFilter = exports.Ui5IconTabFilter = (_dec165 = (0, _aureliaTemplating.customElement)('ui5-icon-tab-filter'), _dec166 = (0, _aureliaDependencyInjection.inject)(Element), _dec167 = (0, _aureliaTemplating.bindable)(), _dec165(_class63 = _dec166(_class63 = (_class64 = function () {
  function Ui5IconTabFilter(element) {
    _classCallCheck(this, Ui5IconTabFilter);

    this._tab = null;

    _initDefineProp(this, 'text', _descriptor122, this);

    this.element = element;
  }

  Ui5IconTabFilter.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5IconTabFilter.prototype.addChild = function addChild(child, elem) {
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
        this._tab.addContent(child);
        break;
      }
    }
  };

  Ui5IconTabFilter.prototype.removeChild = function removeChild(child, elem) {
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
}(), (_descriptor122 = _applyDecoratedDescriptor(_class64.prototype, 'text', [_dec167], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class64)) || _class63) || _class63);
var Ui5IconTabBar = exports.Ui5IconTabBar = (_dec168 = (0, _aureliaTemplating.customElement)('ui5-icon-tab-bar'), _dec169 = (0, _aureliaDependencyInjection.inject)(Element), _dec170 = (0, _aureliaTemplating.bindable)(), _dec171 = (0, _aureliaTemplating.bindable)(), _dec172 = (0, _aureliaTemplating.bindable)(), _dec173 = (0, _aureliaTemplating.bindable)(), _dec174 = (0, _aureliaTemplating.bindable)(), _dec175 = (0, _aureliaTemplating.bindable)(), _dec176 = (0, _aureliaTemplating.bindable)(), _dec177 = (0, _aureliaTemplating.bindable)(), _dec178 = (0, _aureliaTemplating.bindable)(), _dec179 = (0, _aureliaTemplating.bindable)(), _dec180 = (0, _aureliaTemplating.bindable)(), _dec181 = (0, _aureliaTemplating.bindable)(), _dec182 = (0, _aureliaTemplating.bindable)(), _dec168(_class66 = _dec169(_class66 = (_class67 = function () {
  function Ui5IconTabBar(element) {
    _classCallCheck(this, Ui5IconTabBar);

    this._tab = null;

    _initDefineProp(this, 'showSelection', _descriptor123, this);

    _initDefineProp(this, 'expandable', _descriptor124, this);

    _initDefineProp(this, 'expanded', _descriptor125, this);

    _initDefineProp(this, 'selectedKey', _descriptor126, this);

    _initDefineProp(this, 'upperCase', _descriptor127, this);

    _initDefineProp(this, 'stretchContentHeight', _descriptor128, this);

    _initDefineProp(this, 'applyContentPadding', _descriptor129, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor130, this);

    _initDefineProp(this, 'headerMode', _descriptor131, this);

    _initDefineProp(this, 'showOverflowSelectList', _descriptor132, this);

    _initDefineProp(this, 'headerBackgroundDesign', _descriptor133, this);

    _initDefineProp(this, 'enableTabReordering', _descriptor134, this);

    _initDefineProp(this, 'select', _descriptor135, this);

    this.element = element;
  }

  Ui5IconTabBar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5IconTabBar.prototype.addChild = function addChild(child, elem) {
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
        this._tab.addItem(child);
        break;
      }
    }
  };

  Ui5IconTabBar.prototype.removeChild = function removeChild(child, elem) {
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
}(), (_descriptor123 = _applyDecoratedDescriptor(_class67.prototype, 'showSelection', [_dec170], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor124 = _applyDecoratedDescriptor(_class67.prototype, 'expandable', [_dec171], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor125 = _applyDecoratedDescriptor(_class67.prototype, 'expanded', [_dec172], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor126 = _applyDecoratedDescriptor(_class67.prototype, 'selectedKey', [_dec173], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor127 = _applyDecoratedDescriptor(_class67.prototype, 'upperCase', [_dec174], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor128 = _applyDecoratedDescriptor(_class67.prototype, 'stretchContentHeight', [_dec175], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor129 = _applyDecoratedDescriptor(_class67.prototype, 'applyContentPadding', [_dec176], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor130 = _applyDecoratedDescriptor(_class67.prototype, 'backgroundDesign', [_dec177], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor131 = _applyDecoratedDescriptor(_class67.prototype, 'headerMode', [_dec178], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor132 = _applyDecoratedDescriptor(_class67.prototype, 'showOverflowSelectList', [_dec179], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor133 = _applyDecoratedDescriptor(_class67.prototype, 'headerBackgroundDesign', [_dec180], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor134 = _applyDecoratedDescriptor(_class67.prototype, 'enableTabReordering', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor135 = _applyDecoratedDescriptor(_class67.prototype, 'select', [_dec182], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class67)) || _class66) || _class66);
var Ui5BreadCrumbs = exports.Ui5BreadCrumbs = (_dec183 = (0, _aureliaTemplating.customElement)('ui5-breadcrumbs'), _dec184 = (0, _aureliaDependencyInjection.inject)(Element), _dec185 = (0, _aureliaTemplating.bindable)(), _dec186 = (0, _aureliaTemplating.bindable)(), _dec183(_class69 = _dec184(_class69 = (_class70 = function () {
  function Ui5BreadCrumbs(element) {
    _classCallCheck(this, Ui5BreadCrumbs);

    this._crumbs = null;

    _initDefineProp(this, 'ui5Id', _descriptor136, this);

    _initDefineProp(this, 'currentLocationText', _descriptor137, this);

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
    for (var _iterator16 = path, _isArray16 = Array.isArray(_iterator16), _i16 = 0, _iterator16 = _isArray16 ? _iterator16 : _iterator16[Symbol.iterator]();;) {
      if (_isArray16) {
        if (_i16 >= _iterator16.length) break;
        elem = _iterator16[_i16++];
      } else {
        _i16 = _iterator16.next();
        if (_i16.done) break;
        elem = _i16.value;
      }

      if (elem.localName == 'links') {
        this._crumbs.addLink(child);break;
      }
    }
  };

  Ui5BreadCrumbs.prototype.removeChild = function removeChild(child, elem) {
    if (this._crumbs) {
      this._crumbs.removeLink(child);
    }
  };

  return Ui5BreadCrumbs;
}(), (_descriptor136 = _applyDecoratedDescriptor(_class70.prototype, 'ui5Id', [_dec185], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor137 = _applyDecoratedDescriptor(_class70.prototype, 'currentLocationText', [_dec186], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class70)) || _class69) || _class69);
var Ui5ImageContent = exports.Ui5ImageContent = (_dec187 = (0, _aureliaTemplating.customElement)('ui5-image-content'), _dec188 = (0, _aureliaDependencyInjection.inject)(Element), _dec189 = (0, _aureliaTemplating.bindable)(), _dec187(_class72 = _dec188(_class72 = (_class73 = function () {
  function Ui5ImageContent(element) {
    _classCallCheck(this, Ui5ImageContent);

    this._content = null;

    _initDefineProp(this, 'src', _descriptor138, this);

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
}(), (_descriptor138 = _applyDecoratedDescriptor(_class73.prototype, 'src', [_dec189], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class73)) || _class72) || _class72);
var Ui5Input = exports.Ui5Input = (_dec190 = (0, _aureliaTemplating.customElement)('ui5-input'), _dec191 = (0, _aureliaDependencyInjection.inject)(Element), _dec192 = (0, _aureliaTemplating.bindable)(), _dec193 = (0, _aureliaTemplating.bindable)(), _dec194 = (0, _aureliaTemplating.bindable)(), _dec195 = (0, _aureliaTemplating.bindable)(), _dec196 = (0, _aureliaTemplating.bindable)(), _dec197 = (0, _aureliaTemplating.bindable)(), _dec198 = (0, _aureliaTemplating.bindable)(), _dec199 = (0, _aureliaTemplating.bindable)(), _dec200 = (0, _aureliaTemplating.bindable)(), _dec201 = (0, _aureliaTemplating.bindable)(), _dec202 = (0, _aureliaTemplating.bindable)(), _dec203 = (0, _aureliaTemplating.bindable)(), _dec204 = (0, _aureliaTemplating.bindable)(), _dec205 = (0, _aureliaTemplating.bindable)(), _dec206 = (0, _aureliaTemplating.bindable)(), _dec207 = (0, _aureliaTemplating.bindable)(), _dec208 = (0, _aureliaTemplating.bindable)(), _dec209 = (0, _aureliaTemplating.bindable)(), _dec210 = (0, _aureliaTemplating.bindable)(), _dec211 = (0, _aureliaTemplating.bindable)(), _dec212 = (0, _aureliaTemplating.bindable)(), _dec213 = (0, _aureliaTemplating.bindable)(), _dec214 = (0, _aureliaTemplating.bindable)(), _dec215 = (0, _aureliaTemplating.bindable)(), _dec216 = (0, _aureliaTemplating.bindable)(), _dec217 = (0, _aureliaTemplating.bindable)(), _dec218 = (0, _aureliaTemplating.bindable)(), _dec219 = (0, _aureliaTemplating.bindable)(), _dec220 = (0, _aureliaTemplating.bindable)(), _dec221 = (0, _aureliaTemplating.bindable)(), _dec222 = (0, _aureliaTemplating.bindable)(), _dec223 = (0, _aureliaTemplating.bindable)(), _dec224 = (0, _aureliaTemplating.bindable)(), _dec225 = (0, _aureliaTemplating.bindable)(), _dec226 = (0, _aureliaTemplating.bindable)(), _dec227 = (0, _aureliaTemplating.bindable)(), _dec228 = (0, _aureliaTemplating.bindable)(), _dec229 = (0, _aureliaTemplating.bindable)(), _dec230 = (0, _aureliaTemplating.bindable)(), _dec231 = (0, _aureliaTemplating.bindable)(), _dec232 = (0, _aureliaTemplating.bindable)(), _dec190(_class75 = _dec191(_class75 = (_class76 = function (_Ui5InputBase2) {
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

    var _this8 = _possibleConstructorReturn(this, _Ui5InputBase2.call(this, element));

    _this8._input = null;
    _this8._parent = null;
    _this8._relation = null;

    _initDefineProp(_this8, 'ui5Id', _descriptor139, _this8);

    _initDefineProp(_this8, 'type', _descriptor140, _this8);

    _initDefineProp(_this8, 'maxLength', _descriptor141, _this8);

    _initDefineProp(_this8, 'dateFormat', _descriptor142, _this8);

    _initDefineProp(_this8, 'showValueHelp', _descriptor143, _this8);

    _initDefineProp(_this8, 'showSuggestion', _descriptor144, _this8);

    _initDefineProp(_this8, 'valueHelpOnly', _descriptor145, _this8);

    _initDefineProp(_this8, 'filterSuggests', _descriptor146, _this8);

    _initDefineProp(_this8, 'maxSuggestionWidth', _descriptor147, _this8);

    _initDefineProp(_this8, 'showTableSuggestionValueHelp', _descriptor148, _this8);

    _initDefineProp(_this8, 'description', _descriptor149, _this8);

    _initDefineProp(_this8, 'fieldWidth', _descriptor150, _this8);

    _initDefineProp(_this8, 'valueLiveUpdate', _descriptor151, _this8);

    _initDefineProp(_this8, 'selectedKey', _descriptor152, _this8);

    _initDefineProp(_this8, 'textFormatMode', _descriptor153, _this8);

    _initDefineProp(_this8, 'textFormatter', _descriptor154, _this8);

    _initDefineProp(_this8, 'suggestionRowValidator', _descriptor155, _this8);

    _initDefineProp(_this8, 'suggestionItems', _descriptor156, _this8);

    _initDefineProp(_this8, 'suggestionColumns', _descriptor157, _this8);

    _initDefineProp(_this8, 'suggestionRows', _descriptor158, _this8);

    _initDefineProp(_this8, 'selectedItem', _descriptor159, _this8);

    _initDefineProp(_this8, 'selectedRow', _descriptor160, _this8);

    _initDefineProp(_this8, 'liveChange', _descriptor161, _this8);

    _initDefineProp(_this8, 'valueHelpRequest', _descriptor162, _this8);

    _initDefineProp(_this8, 'suggest', _descriptor163, _this8);

    _initDefineProp(_this8, 'suggestionItemSelected', _descriptor164, _this8);

    _initDefineProp(_this8, 'submit', _descriptor165, _this8);

    _initDefineProp(_this8, 'value', _descriptor166, _this8);

    _initDefineProp(_this8, 'width', _descriptor167, _this8);

    _initDefineProp(_this8, 'enabled', _descriptor168, _this8);

    _initDefineProp(_this8, 'valueState', _descriptor169, _this8);

    _initDefineProp(_this8, 'name', _descriptor170, _this8);

    _initDefineProp(_this8, 'placeholder', _descriptor171, _this8);

    _initDefineProp(_this8, 'editable', _descriptor172, _this8);

    _initDefineProp(_this8, 'valueStateText', _descriptor173, _this8);

    _initDefineProp(_this8, 'showValueStateMessage', _descriptor174, _this8);

    _initDefineProp(_this8, 'textAlign', _descriptor175, _this8);

    _initDefineProp(_this8, 'textDirection', _descriptor176, _this8);

    _initDefineProp(_this8, 'required', _descriptor177, _this8);

    _initDefineProp(_this8, 'change', _descriptor178, _this8);

    _initDefineProp(_this8, 'busy', _descriptor179, _this8);

    _this8.element = element;
    return _this8;
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
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._input, this.element);
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

  Ui5Input.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._input, this._relation);
    }
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
}(Ui5InputBase), (_descriptor139 = _applyDecoratedDescriptor(_class76.prototype, 'ui5Id', [_dec192], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor140 = _applyDecoratedDescriptor(_class76.prototype, 'type', [_dec193], {
  enumerable: true,
  initializer: function initializer() {
    return 'Text';
  }
}), _descriptor141 = _applyDecoratedDescriptor(_class76.prototype, 'maxLength', [_dec194], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor142 = _applyDecoratedDescriptor(_class76.prototype, 'dateFormat', [_dec195], {
  enumerable: true,
  initializer: function initializer() {
    return 'YYYY-MM-DD';
  }
}), _descriptor143 = _applyDecoratedDescriptor(_class76.prototype, 'showValueHelp', [_dec196], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor144 = _applyDecoratedDescriptor(_class76.prototype, 'showSuggestion', [_dec197], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor145 = _applyDecoratedDescriptor(_class76.prototype, 'valueHelpOnly', [_dec198], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor146 = _applyDecoratedDescriptor(_class76.prototype, 'filterSuggests', [_dec199], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor147 = _applyDecoratedDescriptor(_class76.prototype, 'maxSuggestionWidth', [_dec200], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor148 = _applyDecoratedDescriptor(_class76.prototype, 'showTableSuggestionValueHelp', [_dec201], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor149 = _applyDecoratedDescriptor(_class76.prototype, 'description', [_dec202], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor150 = _applyDecoratedDescriptor(_class76.prototype, 'fieldWidth', [_dec203], {
  enumerable: true,
  initializer: function initializer() {
    return '50%';
  }
}), _descriptor151 = _applyDecoratedDescriptor(_class76.prototype, 'valueLiveUpdate', [_dec204], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor152 = _applyDecoratedDescriptor(_class76.prototype, 'selectedKey', [_dec205], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor153 = _applyDecoratedDescriptor(_class76.prototype, 'textFormatMode', [_dec206], {
  enumerable: true,
  initializer: function initializer() {
    return 'Value';
  }
}), _descriptor154 = _applyDecoratedDescriptor(_class76.prototype, 'textFormatter', [_dec207], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor155 = _applyDecoratedDescriptor(_class76.prototype, 'suggestionRowValidator', [_dec208], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor156 = _applyDecoratedDescriptor(_class76.prototype, 'suggestionItems', [_dec209], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor157 = _applyDecoratedDescriptor(_class76.prototype, 'suggestionColumns', [_dec210], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor158 = _applyDecoratedDescriptor(_class76.prototype, 'suggestionRows', [_dec211], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor159 = _applyDecoratedDescriptor(_class76.prototype, 'selectedItem', [_dec212], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor160 = _applyDecoratedDescriptor(_class76.prototype, 'selectedRow', [_dec213], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor161 = _applyDecoratedDescriptor(_class76.prototype, 'liveChange', [_dec214], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor162 = _applyDecoratedDescriptor(_class76.prototype, 'valueHelpRequest', [_dec215], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor163 = _applyDecoratedDescriptor(_class76.prototype, 'suggest', [_dec216], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor164 = _applyDecoratedDescriptor(_class76.prototype, 'suggestionItemSelected', [_dec217], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor165 = _applyDecoratedDescriptor(_class76.prototype, 'submit', [_dec218], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor166 = _applyDecoratedDescriptor(_class76.prototype, 'value', [_dec219], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor167 = _applyDecoratedDescriptor(_class76.prototype, 'width', [_dec220], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor168 = _applyDecoratedDescriptor(_class76.prototype, 'enabled', [_dec221], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor169 = _applyDecoratedDescriptor(_class76.prototype, 'valueState', [_dec222], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor170 = _applyDecoratedDescriptor(_class76.prototype, 'name', [_dec223], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor171 = _applyDecoratedDescriptor(_class76.prototype, 'placeholder', [_dec224], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor172 = _applyDecoratedDescriptor(_class76.prototype, 'editable', [_dec225], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor173 = _applyDecoratedDescriptor(_class76.prototype, 'valueStateText', [_dec226], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor174 = _applyDecoratedDescriptor(_class76.prototype, 'showValueStateMessage', [_dec227], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor175 = _applyDecoratedDescriptor(_class76.prototype, 'textAlign', [_dec228], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor176 = _applyDecoratedDescriptor(_class76.prototype, 'textDirection', [_dec229], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor177 = _applyDecoratedDescriptor(_class76.prototype, 'required', [_dec230], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor178 = _applyDecoratedDescriptor(_class76.prototype, 'change', [_dec231], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor179 = _applyDecoratedDescriptor(_class76.prototype, 'busy', [_dec232], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class76)) || _class75) || _class75);
var Ui5InputBase = exports.Ui5InputBase = (_dec233 = (0, _aureliaTemplating.customElement)('ui5-input-base'), _dec234 = (0, _aureliaDependencyInjection.inject)(Element), _dec235 = (0, _aureliaTemplating.bindable)(), _dec236 = (0, _aureliaTemplating.bindable)(), _dec237 = (0, _aureliaTemplating.bindable)(), _dec238 = (0, _aureliaTemplating.bindable)(), _dec239 = (0, _aureliaTemplating.bindable)(), _dec240 = (0, _aureliaTemplating.bindable)(), _dec241 = (0, _aureliaTemplating.bindable)(), _dec242 = (0, _aureliaTemplating.bindable)(), _dec243 = (0, _aureliaTemplating.bindable)(), _dec244 = (0, _aureliaTemplating.bindable)(), _dec245 = (0, _aureliaTemplating.bindable)(), _dec246 = (0, _aureliaTemplating.bindable)(), _dec247 = (0, _aureliaTemplating.bindable)(), _dec233(_class78 = _dec234(_class78 = (_class79 = function (_Ui5Control) {
  _inherits(Ui5InputBase, _Ui5Control);

  function Ui5InputBase(element) {
    _classCallCheck(this, Ui5InputBase);

    var _this9 = _possibleConstructorReturn(this, _Ui5Control.call(this, element));

    _this9._picker = null;

    _initDefineProp(_this9, 'value', _descriptor180, _this9);

    _initDefineProp(_this9, 'width', _descriptor181, _this9);

    _initDefineProp(_this9, 'enabled', _descriptor182, _this9);

    _initDefineProp(_this9, 'valueState', _descriptor183, _this9);

    _initDefineProp(_this9, 'name', _descriptor184, _this9);

    _initDefineProp(_this9, 'placeholder', _descriptor185, _this9);

    _initDefineProp(_this9, 'editable', _descriptor186, _this9);

    _initDefineProp(_this9, 'valueStateText', _descriptor187, _this9);

    _initDefineProp(_this9, 'showValueStateMessage', _descriptor188, _this9);

    _initDefineProp(_this9, 'textAlign', _descriptor189, _this9);

    _initDefineProp(_this9, 'textDirection', _descriptor190, _this9);

    _initDefineProp(_this9, 'required', _descriptor191, _this9);

    _initDefineProp(_this9, 'change', _descriptor192, _this9);

    _this9.element = element;
    return _this9;
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
}(Ui5Control), (_descriptor180 = _applyDecoratedDescriptor(_class79.prototype, 'value', [_dec235], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor181 = _applyDecoratedDescriptor(_class79.prototype, 'width', [_dec236], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor182 = _applyDecoratedDescriptor(_class79.prototype, 'enabled', [_dec237], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor183 = _applyDecoratedDescriptor(_class79.prototype, 'valueState', [_dec238], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor184 = _applyDecoratedDescriptor(_class79.prototype, 'name', [_dec239], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor185 = _applyDecoratedDescriptor(_class79.prototype, 'placeholder', [_dec240], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor186 = _applyDecoratedDescriptor(_class79.prototype, 'editable', [_dec241], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor187 = _applyDecoratedDescriptor(_class79.prototype, 'valueStateText', [_dec242], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor188 = _applyDecoratedDescriptor(_class79.prototype, 'showValueStateMessage', [_dec243], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor189 = _applyDecoratedDescriptor(_class79.prototype, 'textAlign', [_dec244], {
  enumerable: true,
  initializer: function initializer() {
    return 'Initial';
  }
}), _descriptor190 = _applyDecoratedDescriptor(_class79.prototype, 'textDirection', [_dec245], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor191 = _applyDecoratedDescriptor(_class79.prototype, 'required', [_dec246], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor192 = _applyDecoratedDescriptor(_class79.prototype, 'change', [_dec247], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class79)) || _class78) || _class78);
var Ui5Item = exports.Ui5Item = (_dec248 = (0, _aureliaTemplating.customElement)('ui5-item'), _dec249 = (0, _aureliaDependencyInjection.inject)(Element), _dec250 = (0, _aureliaTemplating.bindable)(), _dec251 = (0, _aureliaTemplating.bindable)(), _dec252 = (0, _aureliaTemplating.bindable)(), _dec253 = (0, _aureliaTemplating.bindable)(), _dec248(_class81 = _dec249(_class81 = (_class82 = function () {
  function Ui5Item(element) {
    _classCallCheck(this, Ui5Item);

    this._item = null;

    _initDefineProp(this, 'key', _descriptor193, this);

    _initDefineProp(this, 'enabled', _descriptor194, this);

    _initDefineProp(this, 'text', _descriptor195, this);

    _initDefineProp(this, 'textDirection', _descriptor196, this);

    this.element = element;
  }

  Ui5Item.prototype.defaultFunc = function defaultFunc() {};

  Ui5Item.prototype.attached = function attached() {};

  Ui5Item.prototype.addChild = function addChild(child, elem) {};

  Ui5Item.prototype.fillProperties = function fillProperties(propertyObject) {
    propertyObject.text = this.text;
    propertyObject.key = this.key;
    propertyObject.textDirection = this.textDirection;
    propertyObject.enabled = this.enabled;
  };

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
}(), (_descriptor193 = _applyDecoratedDescriptor(_class82.prototype, 'key', [_dec250], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor194 = _applyDecoratedDescriptor(_class82.prototype, 'enabled', [_dec251], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor195 = _applyDecoratedDescriptor(_class82.prototype, 'text', [_dec252], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor196 = _applyDecoratedDescriptor(_class82.prototype, 'textDirection', [_dec253], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class82)) || _class81) || _class81);
var Ui5Label = exports.Ui5Label = (_dec254 = (0, _aureliaTemplating.customElement)('ui5-label'), _dec255 = (0, _aureliaDependencyInjection.inject)(Element), _dec256 = (0, _aureliaTemplating.bindable)(), _dec257 = (0, _aureliaTemplating.bindable)(), _dec258 = (0, _aureliaTemplating.bindable)(), _dec259 = (0, _aureliaTemplating.bindable)(), _dec260 = (0, _aureliaTemplating.bindable)(), _dec261 = (0, _aureliaTemplating.bindable)(), _dec254(_class84 = _dec255(_class84 = (_class85 = function () {
  function Ui5Label(element) {
    _classCallCheck(this, Ui5Label);

    this._label = null;
    this._parent = null;
    this._relation = null;

    _initDefineProp(this, 'ui5Id', _descriptor197, this);

    _initDefineProp(this, 'labelFor', _descriptor198, this);

    _initDefineProp(this, 'text', _descriptor199, this);

    _initDefineProp(this, 'required', _descriptor200, this);

    _initDefineProp(this, 'textAlign', _descriptor201, this);

    _initDefineProp(this, 'textDirection', _descriptor202, this);

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
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._label, this.element);
    }
  };

  Ui5Label.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._label, this._relation);
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
}(), (_descriptor197 = _applyDecoratedDescriptor(_class85.prototype, 'ui5Id', [_dec256], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor198 = _applyDecoratedDescriptor(_class85.prototype, 'labelFor', [_dec257], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor199 = _applyDecoratedDescriptor(_class85.prototype, 'text', [_dec258], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor200 = _applyDecoratedDescriptor(_class85.prototype, 'required', [_dec259], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor201 = _applyDecoratedDescriptor(_class85.prototype, 'textAlign', [_dec260], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor202 = _applyDecoratedDescriptor(_class85.prototype, 'textDirection', [_dec261], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class85)) || _class84) || _class84);
var Ui5Link = exports.Ui5Link = (_dec262 = (0, _aureliaTemplating.customElement)('ui5-link'), _dec263 = (0, _aureliaDependencyInjection.inject)(Element), _dec264 = (0, _aureliaTemplating.bindable)(), _dec265 = (0, _aureliaTemplating.bindable)(), _dec266 = (0, _aureliaTemplating.bindable)(), _dec267 = (0, _aureliaTemplating.bindable)(), _dec268 = (0, _aureliaTemplating.bindable)(), _dec269 = (0, _aureliaTemplating.bindable)(), _dec270 = (0, _aureliaTemplating.bindable)(), _dec262(_class87 = _dec263(_class87 = (_class88 = function () {
  function Ui5Link(element) {
    _classCallCheck(this, Ui5Link);

    _initDefineProp(this, 'enabled', _descriptor203, this);

    _initDefineProp(this, 'subtle', _descriptor204, this);

    _initDefineProp(this, 'emphasized', _descriptor205, this);

    _initDefineProp(this, 'text', _descriptor206, this);

    _initDefineProp(this, 'press', _descriptor207, this);

    _initDefineProp(this, 'target', _descriptor208, this);

    _initDefineProp(this, 'href', _descriptor209, this);

    this._link = null;
    this._parent = null;

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
      this.parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this.parent.addChild(this._link, this.element);
    }
  };

  Ui5Link.prototype.defaultPress = function defaultPress() {};

  Ui5Link.prototype.detached = function detached() {
    if (this.parent && this.parent.removeChild) {
      this.parent.removeChild(this._link, this.elememt);
    }
  };

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
}(), (_descriptor203 = _applyDecoratedDescriptor(_class88.prototype, 'enabled', [_dec264], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor204 = _applyDecoratedDescriptor(_class88.prototype, 'subtle', [_dec265], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor205 = _applyDecoratedDescriptor(_class88.prototype, 'emphasized', [_dec266], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor206 = _applyDecoratedDescriptor(_class88.prototype, 'text', [_dec267], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor207 = _applyDecoratedDescriptor(_class88.prototype, 'press', [_dec268], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultPress;
  }
}), _descriptor208 = _applyDecoratedDescriptor(_class88.prototype, 'target', [_dec269], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor209 = _applyDecoratedDescriptor(_class88.prototype, 'href', [_dec270], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class88)) || _class87) || _class87);
var Ui5List = exports.Ui5List = (_dec271 = (0, _aureliaTemplating.customElement)('ui5-list'), _dec272 = (0, _aureliaDependencyInjection.inject)(Element), _dec273 = (0, _aureliaTemplating.bindable)(), _dec274 = (0, _aureliaTemplating.bindable)(), _dec275 = (0, _aureliaTemplating.bindable)(), _dec276 = (0, _aureliaTemplating.bindable)(), _dec277 = (0, _aureliaTemplating.bindable)(), _dec278 = (0, _aureliaTemplating.bindable)(), _dec279 = (0, _aureliaTemplating.bindable)(), _dec280 = (0, _aureliaTemplating.bindable)(), _dec281 = (0, _aureliaTemplating.bindable)(), _dec282 = (0, _aureliaTemplating.bindable)(), _dec283 = (0, _aureliaTemplating.bindable)(), _dec284 = (0, _aureliaTemplating.bindable)(), _dec285 = (0, _aureliaTemplating.bindable)(), _dec286 = (0, _aureliaTemplating.bindable)(), _dec287 = (0, _aureliaTemplating.bindable)(), _dec288 = (0, _aureliaTemplating.bindable)(), _dec289 = (0, _aureliaTemplating.bindable)(), _dec290 = (0, _aureliaTemplating.bindable)(), _dec291 = (0, _aureliaTemplating.bindable)(), _dec292 = (0, _aureliaTemplating.bindable)(), _dec293 = (0, _aureliaTemplating.bindable)(), _dec294 = (0, _aureliaTemplating.bindable)(), _dec295 = (0, _aureliaTemplating.bindable)(), _dec296 = (0, _aureliaTemplating.bindable)(), _dec297 = (0, _aureliaTemplating.bindable)(), _dec298 = (0, _aureliaTemplating.bindable)(), _dec299 = (0, _aureliaTemplating.bindable)(), _dec300 = (0, _aureliaTemplating.bindable)(), _dec301 = (0, _aureliaTemplating.bindable)(), _dec271(_class90 = _dec272(_class90 = (_class91 = function (_Ui5ListBase) {
  _inherits(Ui5List, _Ui5ListBase);

  function Ui5List(element) {
    _classCallCheck(this, Ui5List);

    var _this10 = _possibleConstructorReturn(this, _Ui5ListBase.call(this, element));

    _initDefineProp(_this10, 'backgroundDesign', _descriptor210, _this10);

    _initDefineProp(_this10, 'inset', _descriptor211, _this10);

    _initDefineProp(_this10, 'headerText', _descriptor212, _this10);

    _initDefineProp(_this10, 'headerDesign', _descriptor213, _this10);

    _initDefineProp(_this10, 'footerText', _descriptor214, _this10);

    _initDefineProp(_this10, 'mode', _descriptor215, _this10);

    _initDefineProp(_this10, 'width', _descriptor216, _this10);

    _initDefineProp(_this10, 'includeItemInSelection', _descriptor217, _this10);

    _initDefineProp(_this10, 'showUnread', _descriptor218, _this10);

    _initDefineProp(_this10, 'noDataText', _descriptor219, _this10);

    _initDefineProp(_this10, 'showNoData', _descriptor220, _this10);

    _initDefineProp(_this10, 'enableBusyIndicator', _descriptor221, _this10);

    _initDefineProp(_this10, 'modeAnimationOn', _descriptor222, _this10);

    _initDefineProp(_this10, 'showSeparator', _descriptor223, _this10);

    _initDefineProp(_this10, 'swipeDirection', _descriptor224, _this10);

    _initDefineProp(_this10, 'growing', _descriptor225, _this10);

    _initDefineProp(_this10, 'growingThreshold', _descriptor226, _this10);

    _initDefineProp(_this10, 'growingTriggerText', _descriptor227, _this10);

    _initDefineProp(_this10, 'growingScrollToLoad', _descriptor228, _this10);

    _initDefineProp(_this10, 'growingDirection', _descriptor229, _this10);

    _initDefineProp(_this10, 'rememberSelections', _descriptor230, _this10);

    _initDefineProp(_this10, 'keyboardMode', _descriptor231, _this10);

    _initDefineProp(_this10, 'delete', _descriptor232, _this10);

    _initDefineProp(_this10, 'itemPress', _descriptor233, _this10);

    _initDefineProp(_this10, 'selectionChanged', _descriptor234, _this10);

    _initDefineProp(_this10, 'swipe', _descriptor235, _this10);

    _initDefineProp(_this10, 'updateFinished', _descriptor236, _this10);

    _initDefineProp(_this10, 'updateStarted', _descriptor237, _this10);

    _initDefineProp(_this10, 'busy', _descriptor238, _this10);

    _this10._list = null;
    _this10._parent = null;
    _this10._relation = null;

    _this10.element = element;
    return _this10;
  }

  Ui5List.prototype.defaultFunc = function defaultFunc() {};

  Ui5List.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._list.addItem(child);return elem.localName;
      }
    }
  };

  Ui5List.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._list.removeItem(child);
    }
  };

  Ui5List.prototype.removeChild = function removeChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._list.removeItem(child);break;
      }
    }
  };

  Ui5List.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      backgroundDesign: this.backgroundDesign
    };
    _Ui5ListBase.prototype.fillProperties.call(this, props);
    var table = new sap.m.List(props);
    this._list = table;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._list, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._list.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5List.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._list, this._relation);
    } else {
      this._list.destroy();
    }
  };

  Ui5List.prototype.backgroundDesignChanged = function backgroundDesignChanged(newValue) {
    if (this._list !== null) {
      this._list.setBackgroundDesign(newValue);
    }
  };

  Ui5List.prototype.selectionChangedChanged = function selectionChangedChanged(newValue) {
    if (this._list !== null) {
      this._list.attachSelectionChanged(newValue);
    }
  };

  _createClass(Ui5List, [{
    key: 'UIElement',
    get: function get() {
      return this._list;
    }
  }]);

  return Ui5List;
}(Ui5ListBase), (_descriptor210 = _applyDecoratedDescriptor(_class91.prototype, 'backgroundDesign', [_dec273], {
  enumerable: true,
  initializer: function initializer() {
    return 'Solid';
  }
}), _descriptor211 = _applyDecoratedDescriptor(_class91.prototype, 'inset', [_dec274], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor212 = _applyDecoratedDescriptor(_class91.prototype, 'headerText', [_dec275], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor213 = _applyDecoratedDescriptor(_class91.prototype, 'headerDesign', [_dec276], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor214 = _applyDecoratedDescriptor(_class91.prototype, 'footerText', [_dec277], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor215 = _applyDecoratedDescriptor(_class91.prototype, 'mode', [_dec278], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor216 = _applyDecoratedDescriptor(_class91.prototype, 'width', [_dec279], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor217 = _applyDecoratedDescriptor(_class91.prototype, 'includeItemInSelection', [_dec280], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor218 = _applyDecoratedDescriptor(_class91.prototype, 'showUnread', [_dec281], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor219 = _applyDecoratedDescriptor(_class91.prototype, 'noDataText', [_dec282], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor220 = _applyDecoratedDescriptor(_class91.prototype, 'showNoData', [_dec283], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor221 = _applyDecoratedDescriptor(_class91.prototype, 'enableBusyIndicator', [_dec284], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor222 = _applyDecoratedDescriptor(_class91.prototype, 'modeAnimationOn', [_dec285], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor223 = _applyDecoratedDescriptor(_class91.prototype, 'showSeparator', [_dec286], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor224 = _applyDecoratedDescriptor(_class91.prototype, 'swipeDirection', [_dec287], {
  enumerable: true,
  initializer: function initializer() {
    return 'Both';
  }
}), _descriptor225 = _applyDecoratedDescriptor(_class91.prototype, 'growing', [_dec288], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor226 = _applyDecoratedDescriptor(_class91.prototype, 'growingThreshold', [_dec289], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor227 = _applyDecoratedDescriptor(_class91.prototype, 'growingTriggerText', [_dec290], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor228 = _applyDecoratedDescriptor(_class91.prototype, 'growingScrollToLoad', [_dec291], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor229 = _applyDecoratedDescriptor(_class91.prototype, 'growingDirection', [_dec292], {
  enumerable: true,
  initializer: function initializer() {
    return 'Downwards';
  }
}), _descriptor230 = _applyDecoratedDescriptor(_class91.prototype, 'rememberSelections', [_dec293], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor231 = _applyDecoratedDescriptor(_class91.prototype, 'keyboardMode', [_dec294], {
  enumerable: true,
  initializer: function initializer() {
    return 'Navigation';
  }
}), _descriptor232 = _applyDecoratedDescriptor(_class91.prototype, 'delete', [_dec295], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor233 = _applyDecoratedDescriptor(_class91.prototype, 'itemPress', [_dec296], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor234 = _applyDecoratedDescriptor(_class91.prototype, 'selectionChanged', [_dec297], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor235 = _applyDecoratedDescriptor(_class91.prototype, 'swipe', [_dec298], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor236 = _applyDecoratedDescriptor(_class91.prototype, 'updateFinished', [_dec299], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor237 = _applyDecoratedDescriptor(_class91.prototype, 'updateStarted', [_dec300], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor238 = _applyDecoratedDescriptor(_class91.prototype, 'busy', [_dec301], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class91)) || _class90) || _class90);
var Ui5ListItem = exports.Ui5ListItem = (_dec302 = (0, _aureliaTemplating.customElement)('ui5-list-item'), _dec303 = (0, _aureliaDependencyInjection.inject)(Element), _dec304 = (0, _aureliaTemplating.bindable)(), _dec305 = (0, _aureliaTemplating.bindable)(), _dec306 = (0, _aureliaTemplating.bindable)(), _dec307 = (0, _aureliaTemplating.bindable)(), _dec308 = (0, _aureliaTemplating.bindable)(), _dec309 = (0, _aureliaTemplating.bindable)(), _dec302(_class93 = _dec303(_class93 = (_class94 = function () {
  function Ui5ListItem(element) {
    _classCallCheck(this, Ui5ListItem);

    this._item = null;
    this._container = null;

    _initDefineProp(this, 'icon', _descriptor239, this);

    _initDefineProp(this, 'additionalText', _descriptor240, this);

    _initDefineProp(this, 'key', _descriptor241, this);

    _initDefineProp(this, 'enabled', _descriptor242, this);

    _initDefineProp(this, 'text', _descriptor243, this);

    _initDefineProp(this, 'textDirection', _descriptor244, this);

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
}(), (_descriptor239 = _applyDecoratedDescriptor(_class94.prototype, 'icon', [_dec304], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor240 = _applyDecoratedDescriptor(_class94.prototype, 'additionalText', [_dec305], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor241 = _applyDecoratedDescriptor(_class94.prototype, 'key', [_dec306], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor242 = _applyDecoratedDescriptor(_class94.prototype, 'enabled', [_dec307], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor243 = _applyDecoratedDescriptor(_class94.prototype, 'text', [_dec308], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor244 = _applyDecoratedDescriptor(_class94.prototype, 'textDirection', [_dec309], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class94)) || _class93) || _class93);
var Ui5MTitle = exports.Ui5MTitle = (_dec310 = (0, _aureliaTemplating.customElement)('ui5-m-title'), _dec311 = (0, _aureliaDependencyInjection.inject)(Element), _dec312 = (0, _aureliaTemplating.bindable)(), _dec313 = (0, _aureliaTemplating.bindable)(), _dec314 = (0, _aureliaTemplating.bindable)(), _dec315 = (0, _aureliaTemplating.bindable)(), _dec310(_class96 = _dec311(_class96 = (_class97 = function () {
  function Ui5MTitle(element) {
    _classCallCheck(this, Ui5MTitle);

    this._title = null;

    _initDefineProp(this, 'ui5Id', _descriptor245, this);

    _initDefineProp(this, 'text', _descriptor246, this);

    _initDefineProp(this, 'level', _descriptor247, this);

    _initDefineProp(this, 'titleStyle', _descriptor248, this);

    this.element = element;
  }

  Ui5MTitle.prototype.attached = function attached() {
    var props = {
      text: this.text,
      level: this.level,
      titleStyle: this.titleStyle
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

  Ui5MTitle.prototype.titleStyleChanged = function titleStyleChanged(newValue) {
    if (this._title !== null) {
      this._title.setTitleStyle(newValue);
    }
  };

  return Ui5MTitle;
}(), (_descriptor245 = _applyDecoratedDescriptor(_class97.prototype, 'ui5Id', [_dec312], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor246 = _applyDecoratedDescriptor(_class97.prototype, 'text', [_dec313], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor247 = _applyDecoratedDescriptor(_class97.prototype, 'level', [_dec314], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
}), _descriptor248 = _applyDecoratedDescriptor(_class97.prototype, 'titleStyle', [_dec315], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
})), _class97)) || _class96) || _class96);
var Ui5MessageStrip = exports.Ui5MessageStrip = (_dec316 = (0, _aureliaTemplating.customElement)('ui5-message-strip'), _dec317 = (0, _aureliaDependencyInjection.inject)(Element), _dec316(_class99 = _dec317(_class99 = (_class100 = function () {
  function Ui5MessageStrip(element) {
    _classCallCheck(this, Ui5MessageStrip);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor249, this);

    _initDefineProp(this, 'text', _descriptor250, this);

    _initDefineProp(this, 'wrapping', _descriptor251, this);

    _initDefineProp(this, 'textAlign', _descriptor252, this);

    _initDefineProp(this, 'maxLines', _descriptor253, this);

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
}(), (_descriptor249 = _applyDecoratedDescriptor(_class100.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor250 = _applyDecoratedDescriptor(_class100.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor251 = _applyDecoratedDescriptor(_class100.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor252 = _applyDecoratedDescriptor(_class100.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor253 = _applyDecoratedDescriptor(_class100.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class100)) || _class99) || _class99);
var Ui5ListBase = exports.Ui5ListBase = (_dec318 = (0, _aureliaDependencyInjection.inject)(Element), _dec319 = (0, _aureliaTemplating.bindable)(), _dec320 = (0, _aureliaTemplating.bindable)(), _dec321 = (0, _aureliaTemplating.bindable)(), _dec322 = (0, _aureliaTemplating.bindable)(), _dec323 = (0, _aureliaTemplating.bindable)(), _dec324 = (0, _aureliaTemplating.bindable)(), _dec325 = (0, _aureliaTemplating.bindable)(), _dec326 = (0, _aureliaTemplating.bindable)(), _dec327 = (0, _aureliaTemplating.bindable)(), _dec328 = (0, _aureliaTemplating.bindable)(), _dec329 = (0, _aureliaTemplating.bindable)(), _dec330 = (0, _aureliaTemplating.bindable)(), _dec331 = (0, _aureliaTemplating.bindable)(), _dec332 = (0, _aureliaTemplating.bindable)(), _dec333 = (0, _aureliaTemplating.bindable)(), _dec334 = (0, _aureliaTemplating.bindable)(), _dec335 = (0, _aureliaTemplating.bindable)(), _dec336 = (0, _aureliaTemplating.bindable)(), _dec337 = (0, _aureliaTemplating.bindable)(), _dec338 = (0, _aureliaTemplating.bindable)(), _dec339 = (0, _aureliaTemplating.bindable)(), _dec340 = (0, _aureliaTemplating.bindable)(), _dec341 = (0, _aureliaTemplating.bindable)(), _dec342 = (0, _aureliaTemplating.bindable)(), _dec343 = (0, _aureliaTemplating.bindable)(), _dec344 = (0, _aureliaTemplating.bindable)(), _dec345 = (0, _aureliaTemplating.bindable)(), _dec318(_class102 = (_class103 = function (_Ui5Control2) {
  _inherits(Ui5ListBase, _Ui5Control2);

  Ui5ListBase.prototype.defaultFunc = function defaultFunc() {};

  function Ui5ListBase(elem) {
    _classCallCheck(this, Ui5ListBase);

    var _this11 = _possibleConstructorReturn(this, _Ui5Control2.call(this, elem));

    _initDefineProp(_this11, 'inset', _descriptor254, _this11);

    _initDefineProp(_this11, 'headerText', _descriptor255, _this11);

    _initDefineProp(_this11, 'headerDesign', _descriptor256, _this11);

    _initDefineProp(_this11, 'footerText', _descriptor257, _this11);

    _initDefineProp(_this11, 'mode', _descriptor258, _this11);

    _initDefineProp(_this11, 'width', _descriptor259, _this11);

    _initDefineProp(_this11, 'includeItemInSelection', _descriptor260, _this11);

    _initDefineProp(_this11, 'showUnread', _descriptor261, _this11);

    _initDefineProp(_this11, 'noDataText', _descriptor262, _this11);

    _initDefineProp(_this11, 'showNoData', _descriptor263, _this11);

    _initDefineProp(_this11, 'enableBusyIndicator', _descriptor264, _this11);

    _initDefineProp(_this11, 'modeAnimationOn', _descriptor265, _this11);

    _initDefineProp(_this11, 'showSeparator', _descriptor266, _this11);

    _initDefineProp(_this11, 'swipeDirection', _descriptor267, _this11);

    _initDefineProp(_this11, 'growing', _descriptor268, _this11);

    _initDefineProp(_this11, 'growingThreshold', _descriptor269, _this11);

    _initDefineProp(_this11, 'growingTriggerText', _descriptor270, _this11);

    _initDefineProp(_this11, 'growingScrollToLoad', _descriptor271, _this11);

    _initDefineProp(_this11, 'growingDirection', _descriptor272, _this11);

    _initDefineProp(_this11, 'rememberSelections', _descriptor273, _this11);

    _initDefineProp(_this11, 'keyboardMode', _descriptor274, _this11);

    _initDefineProp(_this11, 'delete', _descriptor275, _this11);

    _initDefineProp(_this11, 'itemPress', _descriptor276, _this11);

    _initDefineProp(_this11, 'selectionChange', _descriptor277, _this11);

    _initDefineProp(_this11, 'swipe', _descriptor278, _this11);

    _initDefineProp(_this11, 'updateFinished', _descriptor279, _this11);

    _initDefineProp(_this11, 'updateStarted', _descriptor280, _this11);

    return _this11;
  }

  Ui5ListBase.prototype.addChild = function addChild(child, elem) {
    _Ui5Control2.prototype.addChild.call(this, child, elem);
  };

  Ui5ListBase.prototype.removeChild = function removeChild(child, elem) {
    _Ui5Control2.prototype.removeChild.call(this, child, elem);
  };

  Ui5ListBase.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    _Ui5Control2.prototype.removeChildByRelation.call(this, child, relation);
  };

  Ui5ListBase.prototype.attached = function attached() {
    _Ui5Control2.prototype.attached.call(this);
  };

  Ui5ListBase.prototype.fillProperties = function fillProperties(propertyObject) {
    propertyObject.inset = getBooleanFromAttributeValue(this.inset), propertyObject.headerText = this.headerText, propertyObject.headerDesign = this.headerDesign, propertyObject.footerText = this.footerText, propertyObject.mode = this.mode, propertyObject.width = this.width, propertyObject.includeItemInSelection = getBooleanFromAttributeValue(this.includeItemInSelection), propertyObject.showUnread = getBooleanFromAttributeValue(this.showUnread), propertyObject.noDataText = this.noDataText;
    propertyObject.showNoData = getBooleanFromAttributeValue(this.showNoData), propertyObject.enableBusyIndicator = getBooleanFromAttributeValue(this.enableBusyIndicator), propertyObject.modeAnimationOn = getBooleanFromAttributeValue(this.modeAnimationOn), propertyObject.showSeparator = this.showSeparator, propertyObject.swipeDirection = this.swipeDirection, propertyObject.growing = getBooleanFromAttributeValue(this.growing), propertyObject.growingThreshold = this.growingThreshold, propertyObject.growingDirection = this.growingDirection, propertyObject.growingScrollToLoad = getBooleanFromAttributeValue(this.growingScrollToLoad), propertyObject.growingDirection = this.growingDirection, propertyObject.rememberSelections = getBooleanFromAttributeValue(this.rememberSelections), propertyObject.keyboardMode = this.keyboardMode, propertyObject.delete = this.delete, propertyObject.itemPress = this.itemPress, propertyObject.selectionChange = this.selectionChange, propertyObject.swipe = this.swipe, propertyObject.updateFinished = this.updateFinished, propertyObject.updateStarted = this.updateStarted;
  };

  Ui5ListBase.prototype.busyChanged = function busyChanged(newValue) {
    if (this.UIElement != null) {
      this.UIElement.setBusy(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5ListBase;
}(Ui5Control), (_descriptor254 = _applyDecoratedDescriptor(_class103.prototype, 'inset', [_dec319], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor255 = _applyDecoratedDescriptor(_class103.prototype, 'headerText', [_dec320], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor256 = _applyDecoratedDescriptor(_class103.prototype, 'headerDesign', [_dec321], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor257 = _applyDecoratedDescriptor(_class103.prototype, 'footerText', [_dec322], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor258 = _applyDecoratedDescriptor(_class103.prototype, 'mode', [_dec323], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor259 = _applyDecoratedDescriptor(_class103.prototype, 'width', [_dec324], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor260 = _applyDecoratedDescriptor(_class103.prototype, 'includeItemInSelection', [_dec325], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor261 = _applyDecoratedDescriptor(_class103.prototype, 'showUnread', [_dec326], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor262 = _applyDecoratedDescriptor(_class103.prototype, 'noDataText', [_dec327], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor263 = _applyDecoratedDescriptor(_class103.prototype, 'showNoData', [_dec328], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor264 = _applyDecoratedDescriptor(_class103.prototype, 'enableBusyIndicator', [_dec329], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor265 = _applyDecoratedDescriptor(_class103.prototype, 'modeAnimationOn', [_dec330], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor266 = _applyDecoratedDescriptor(_class103.prototype, 'showSeparator', [_dec331], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor267 = _applyDecoratedDescriptor(_class103.prototype, 'swipeDirection', [_dec332], {
  enumerable: true,
  initializer: function initializer() {
    return 'Both';
  }
}), _descriptor268 = _applyDecoratedDescriptor(_class103.prototype, 'growing', [_dec333], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor269 = _applyDecoratedDescriptor(_class103.prototype, 'growingThreshold', [_dec334], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor270 = _applyDecoratedDescriptor(_class103.prototype, 'growingTriggerText', [_dec335], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor271 = _applyDecoratedDescriptor(_class103.prototype, 'growingScrollToLoad', [_dec336], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor272 = _applyDecoratedDescriptor(_class103.prototype, 'growingDirection', [_dec337], {
  enumerable: true,
  initializer: function initializer() {
    return 'Downwards';
  }
}), _descriptor273 = _applyDecoratedDescriptor(_class103.prototype, 'rememberSelections', [_dec338], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor274 = _applyDecoratedDescriptor(_class103.prototype, 'keyboardMode', [_dec339], {
  enumerable: true,
  initializer: function initializer() {
    return 'Navigation';
  }
}), _descriptor275 = _applyDecoratedDescriptor(_class103.prototype, 'delete', [_dec340], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor276 = _applyDecoratedDescriptor(_class103.prototype, 'itemPress', [_dec341], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor277 = _applyDecoratedDescriptor(_class103.prototype, 'selectionChange', [_dec342], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor278 = _applyDecoratedDescriptor(_class103.prototype, 'swipe', [_dec343], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor279 = _applyDecoratedDescriptor(_class103.prototype, 'updateFinished', [_dec344], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor280 = _applyDecoratedDescriptor(_class103.prototype, 'updateStarted', [_dec345], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class103)) || _class102);
var Ui5NumericContent = exports.Ui5NumericContent = (_dec346 = (0, _aureliaTemplating.customElement)('ui5-numeric-content'), _dec347 = (0, _aureliaDependencyInjection.inject)(Element), _dec348 = (0, _aureliaTemplating.bindable)(), _dec349 = (0, _aureliaTemplating.bindable)(), _dec350 = (0, _aureliaTemplating.bindable)(), _dec351 = (0, _aureliaTemplating.bindable)(), _dec352 = (0, _aureliaTemplating.bindable)(), _dec346(_class105 = _dec347(_class105 = (_class106 = function () {
  function Ui5NumericContent(element) {
    _classCallCheck(this, Ui5NumericContent);

    this._content = null;

    _initDefineProp(this, 'icon', _descriptor281, this);

    _initDefineProp(this, 'value', _descriptor282, this);

    _initDefineProp(this, 'indicator', _descriptor283, this);

    _initDefineProp(this, 'scale', _descriptor284, this);

    _initDefineProp(this, 'valueColor', _descriptor285, this);

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
}(), (_descriptor281 = _applyDecoratedDescriptor(_class106.prototype, 'icon', [_dec348], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor282 = _applyDecoratedDescriptor(_class106.prototype, 'value', [_dec349], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor283 = _applyDecoratedDescriptor(_class106.prototype, 'indicator', [_dec350], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor284 = _applyDecoratedDescriptor(_class106.prototype, 'scale', [_dec351], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor285 = _applyDecoratedDescriptor(_class106.prototype, 'valueColor', [_dec352], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class106)) || _class105) || _class105);
var Ui5ObjectIdentifier = exports.Ui5ObjectIdentifier = (_dec353 = (0, _aureliaTemplating.customElement)('ui5-object-identifier'), _dec354 = (0, _aureliaDependencyInjection.inject)(Element), _dec355 = (0, _aureliaTemplating.bindable)(), _dec356 = (0, _aureliaTemplating.bindable)(), _dec357 = (0, _aureliaTemplating.bindable)(), _dec358 = (0, _aureliaTemplating.bindable)(), _dec359 = (0, _aureliaTemplating.bindable)(), _dec353(_class108 = _dec354(_class108 = (_class109 = function () {
  function Ui5ObjectIdentifier(element) {
    _classCallCheck(this, Ui5ObjectIdentifier);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor286, this);

    _initDefineProp(this, 'text', _descriptor287, this);

    _initDefineProp(this, 'title', _descriptor288, this);

    _initDefineProp(this, 'visible', _descriptor289, this);

    _initDefineProp(this, 'titleActive', _descriptor290, this);

    _initDefineProp(this, 'textDirection', _descriptor291, this);

    _initDefineProp(this, 'titlePress', _descriptor292, this);

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
}(), (_descriptor286 = _applyDecoratedDescriptor(_class109.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor287 = _applyDecoratedDescriptor(_class109.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor288 = _applyDecoratedDescriptor(_class109.prototype, 'title', [_dec355], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor289 = _applyDecoratedDescriptor(_class109.prototype, 'visible', [_dec356], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor290 = _applyDecoratedDescriptor(_class109.prototype, 'titleActive', [_dec357], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor291 = _applyDecoratedDescriptor(_class109.prototype, 'textDirection', [_dec358], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor292 = _applyDecoratedDescriptor(_class109.prototype, 'titlePress', [_dec359], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class109)) || _class108) || _class108);
var Ui5OverflowToolbar = exports.Ui5OverflowToolbar = (_dec360 = (0, _aureliaTemplating.customElement)('ui5-overflow-toolbar'), _dec361 = (0, _aureliaDependencyInjection.inject)(Element), _dec362 = (0, _aureliaTemplating.bindable)(), _dec363 = (0, _aureliaTemplating.bindable)(), _dec364 = (0, _aureliaTemplating.bindable)(), _dec365 = (0, _aureliaTemplating.bindable)(), _dec366 = (0, _aureliaTemplating.bindable)(), _dec367 = (0, _aureliaTemplating.bindable)(), _dec360(_class111 = _dec361(_class111 = (_class112 = function () {
  function Ui5OverflowToolbar(element) {
    _classCallCheck(this, Ui5OverflowToolbar);

    this._bar = null;

    _initDefineProp(this, 'width', _descriptor293, this);

    _initDefineProp(this, 'active', _descriptor294, this);

    _initDefineProp(this, 'enabled', _descriptor295, this);

    _initDefineProp(this, 'height', _descriptor296, this);

    _initDefineProp(this, 'design', _descriptor297, this);

    _initDefineProp(this, 'press', _descriptor298, this);

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
}(), (_descriptor293 = _applyDecoratedDescriptor(_class112.prototype, 'width', [_dec362], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor294 = _applyDecoratedDescriptor(_class112.prototype, 'active', [_dec363], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor295 = _applyDecoratedDescriptor(_class112.prototype, 'enabled', [_dec364], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor296 = _applyDecoratedDescriptor(_class112.prototype, 'height', [_dec365], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor297 = _applyDecoratedDescriptor(_class112.prototype, 'design', [_dec366], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor298 = _applyDecoratedDescriptor(_class112.prototype, 'press', [_dec367], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class112)) || _class111) || _class111);
var Ui5Page = exports.Ui5Page = (_dec368 = (0, _aureliaTemplating.customElement)('ui5-page'), _dec369 = (0, _aureliaDependencyInjection.inject)(Element), _dec370 = (0, _aureliaTemplating.bindable)(), _dec371 = (0, _aureliaTemplating.bindable)(), _dec372 = (0, _aureliaTemplating.bindable)(), _dec373 = (0, _aureliaTemplating.bindable)(), _dec374 = (0, _aureliaTemplating.bindable)(), _dec368(_class114 = _dec369(_class114 = (_class115 = function () {
  function Ui5Page(element) {
    _classCallCheck(this, Ui5Page);

    _initDefineProp(this, 'title', _descriptor299, this);

    _initDefineProp(this, 'showHeader', _descriptor300, this);

    _initDefineProp(this, 'showFooter', _descriptor301, this);

    _initDefineProp(this, 'showNavButton', _descriptor302, this);

    _initDefineProp(this, 'navButtonPress', _descriptor303, this);

    this._page = null;

    this.element = element;
  }

  Ui5Page.prototype.defaultFunc = function defaultFunc() {};

  Ui5Page.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator23 = path, _isArray23 = Array.isArray(_iterator23), _i23 = 0, _iterator23 = _isArray23 ? _iterator23 : _iterator23[Symbol.iterator]();;) {
      if (_isArray23) {
        if (_i23 >= _iterator23.length) break;
        elem = _iterator23[_i23++];
      } else {
        _i23 = _iterator23.next();
        if (_i23.done) break;
        elem = _i23.value;
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
    for (var _iterator24 = path, _isArray24 = Array.isArray(_iterator24), _i24 = 0, _iterator24 = _isArray24 ? _iterator24 : _iterator24[Symbol.iterator]();;) {
      if (_isArray24) {
        if (_i24 >= _iterator24.length) break;
        elem = _iterator24[_i24++];
      } else {
        _i24 = _iterator24.next();
        if (_i24.done) break;
        elem = _i24.value;
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
}(), (_descriptor299 = _applyDecoratedDescriptor(_class115.prototype, 'title', [_dec370], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor300 = _applyDecoratedDescriptor(_class115.prototype, 'showHeader', [_dec371], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor301 = _applyDecoratedDescriptor(_class115.prototype, 'showFooter', [_dec372], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor302 = _applyDecoratedDescriptor(_class115.prototype, 'showNavButton', [_dec373], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor303 = _applyDecoratedDescriptor(_class115.prototype, 'navButtonPress', [_dec374], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class115)) || _class114) || _class114);
var Ui5ResponsiveGridLayout = exports.Ui5ResponsiveGridLayout = (_dec375 = (0, _aureliaTemplating.customElement)('ui5-responsive-grid-layout'), _dec376 = (0, _aureliaDependencyInjection.inject)(Element), _dec377 = (0, _aureliaTemplating.bindable)(), _dec378 = (0, _aureliaTemplating.bindable)(), _dec379 = (0, _aureliaTemplating.bindable)(), _dec380 = (0, _aureliaTemplating.bindable)(), _dec381 = (0, _aureliaTemplating.bindable)(), _dec382 = (0, _aureliaTemplating.bindable)(), _dec383 = (0, _aureliaTemplating.bindable)(), _dec384 = (0, _aureliaTemplating.bindable)(), _dec385 = (0, _aureliaTemplating.bindable)(), _dec386 = (0, _aureliaTemplating.bindable)(), _dec387 = (0, _aureliaTemplating.bindable)(), _dec388 = (0, _aureliaTemplating.bindable)(), _dec389 = (0, _aureliaTemplating.bindable)(), _dec390 = (0, _aureliaTemplating.bindable)(), _dec375(_class117 = _dec376(_class117 = (_class118 = function () {
  function Ui5ResponsiveGridLayout(element) {
    _classCallCheck(this, Ui5ResponsiveGridLayout);

    _initDefineProp(this, 'ui5Id', _descriptor304, this);

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
}(), (_descriptor304 = _applyDecoratedDescriptor(_class118.prototype, 'ui5Id', [_dec377], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor305 = _applyDecoratedDescriptor(_class118.prototype, 'labelSpanXL', [_dec378], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor306 = _applyDecoratedDescriptor(_class118.prototype, 'labelSpanL', [_dec379], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor307 = _applyDecoratedDescriptor(_class118.prototype, 'labelSpanM', [_dec380], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor308 = _applyDecoratedDescriptor(_class118.prototype, 'labelSpanS', [_dec381], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor309 = _applyDecoratedDescriptor(_class118.prototype, 'adjustLabelSpan', [_dec382], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor310 = _applyDecoratedDescriptor(_class118.prototype, 'emptySpanXL', [_dec383], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor311 = _applyDecoratedDescriptor(_class118.prototype, 'emptySpanL', [_dec384], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor312 = _applyDecoratedDescriptor(_class118.prototype, 'emptySpanM', [_dec385], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor313 = _applyDecoratedDescriptor(_class118.prototype, 'emptySpanS', [_dec386], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor314 = _applyDecoratedDescriptor(_class118.prototype, 'singleContainerFullSize', [_dec387], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor315 = _applyDecoratedDescriptor(_class118.prototype, 'breakpointXL', [_dec388], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor316 = _applyDecoratedDescriptor(_class118.prototype, 'breakpointL', [_dec389], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor317 = _applyDecoratedDescriptor(_class118.prototype, 'breakpointM', [_dec390], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class118)) || _class117) || _class117);
var Ui5ResponsivePopover = exports.Ui5ResponsivePopover = (_dec391 = (0, _aureliaTemplating.customElement)('ui5-responsive-popover'), _dec392 = (0, _aureliaDependencyInjection.inject)(Element), _dec393 = (0, _aureliaTemplating.bindable)(), _dec394 = (0, _aureliaTemplating.bindable)(), _dec395 = (0, _aureliaTemplating.bindable)(), _dec396 = (0, _aureliaTemplating.bindable)(), _dec397 = (0, _aureliaTemplating.bindable)(), _dec398 = (0, _aureliaTemplating.bindable)(), _dec399 = (0, _aureliaTemplating.bindable)(), _dec400 = (0, _aureliaTemplating.bindable)(), _dec401 = (0, _aureliaTemplating.bindable)(), _dec402 = (0, _aureliaTemplating.bindable)(), _dec403 = (0, _aureliaTemplating.bindable)(), _dec404 = (0, _aureliaTemplating.bindable)(), _dec405 = (0, _aureliaTemplating.bindable)(), _dec406 = (0, _aureliaTemplating.bindable)(), _dec407 = (0, _aureliaTemplating.bindable)(), _dec408 = (0, _aureliaTemplating.bindable)(), _dec409 = (0, _aureliaTemplating.bindable)(), _dec410 = (0, _aureliaTemplating.bindable)(), _dec391(_class120 = _dec392(_class120 = (_class121 = function () {
  function Ui5ResponsivePopover(element) {
    _classCallCheck(this, Ui5ResponsivePopover);

    this._dialog = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor318, this);

    _initDefineProp(this, 'placement', _descriptor319, this);

    _initDefineProp(this, 'icon', _descriptor320, this);

    _initDefineProp(this, 'title', _descriptor321, this);

    _initDefineProp(this, 'offsetX', _descriptor322, this);

    _initDefineProp(this, 'offsetY', _descriptor323, this);

    _initDefineProp(this, 'showArrow', _descriptor324, this);

    _initDefineProp(this, 'showHeader', _descriptor325, this);

    _initDefineProp(this, 'contentWidth', _descriptor326, this);

    _initDefineProp(this, 'contentHeight', _descriptor327, this);

    _initDefineProp(this, 'horizontalScrolling', _descriptor328, this);

    _initDefineProp(this, 'verticalScrolling', _descriptor329, this);

    _initDefineProp(this, 'showCloseButton', _descriptor330, this);

    _initDefineProp(this, 'resizable', _descriptor331, this);

    _initDefineProp(this, 'beforeOpen', _descriptor332, this);

    _initDefineProp(this, 'afterOpen', _descriptor333, this);

    _initDefineProp(this, 'beforeClose', _descriptor334, this);

    _initDefineProp(this, 'afterClose', _descriptor335, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5ResponsivePopover.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5ResponsivePopover.prototype.addChild = function addChild(child, elem) {
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
  };

  Ui5ResponsivePopover.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._dialog.removeContent(child);
    }
  };

  Ui5ResponsivePopover.prototype.removeChild = function removeChild(child, elem) {};

  Ui5ResponsivePopover.prototype.attached = function attached() {
    var props = {
      icon: this.icon,
      placement: this.placement,
      title: this.title,
      showHeader: getBooleanFromAttributeValue(this.showHeader),
      offsetX: this.offsetX,
      offsetY: this.offsetY,
      showArrow: getBooleanFromAttributeValue(this.showArrow),
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
    if (this.ui5Id) this._dialog = new sap.m.ResponsivePopover(this.ui5Id, props);else this._dialog = new sap.m.ResponsivePopover(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5ResponsivePopover.prototype.detached = function detached() {};

  Ui5ResponsivePopover.prototype.placementChanged = function placementChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setPlacement(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.offsetXChanged = function offsetXChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setOffsetX(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.offsetYChanged = function offsetYChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setOffsetY(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.showArrayChanged = function showArrayChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowArray(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ResponsivePopover.prototype.showCloseButtonChanged = function showCloseButtonChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowCloseButton(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ResponsivePopover.prototype.iconChanged = function iconChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setIcon(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.titleChanged = function titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.showHeaderChanged = function showHeaderChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setShowHeader(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ResponsivePopover.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  };

  Ui5ResponsivePopover.prototype.horizontalScrollingChanged = function horizontalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setHorizontalScrolling(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ResponsivePopover.prototype.verticalScrollingChanged = function verticalScrollingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setVerticalScrolling(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ResponsivePopover.prototype.resizableChanged = function resizableChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setResizable(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5ResponsivePopover, [{
    key: 'UIElement',
    get: function get() {
      return this._dialog;
    }
  }]);

  return Ui5ResponsivePopover;
}(), (_descriptor318 = _applyDecoratedDescriptor(_class121.prototype, 'ui5Id', [_dec393], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor319 = _applyDecoratedDescriptor(_class121.prototype, 'placement', [_dec394], {
  enumerable: true,
  initializer: function initializer() {
    return 'Right';
  }
}), _descriptor320 = _applyDecoratedDescriptor(_class121.prototype, 'icon', [_dec395], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor321 = _applyDecoratedDescriptor(_class121.prototype, 'title', [_dec396], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor322 = _applyDecoratedDescriptor(_class121.prototype, 'offsetX', [_dec397], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor323 = _applyDecoratedDescriptor(_class121.prototype, 'offsetY', [_dec398], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor324 = _applyDecoratedDescriptor(_class121.prototype, 'showArrow', [_dec399], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor325 = _applyDecoratedDescriptor(_class121.prototype, 'showHeader', [_dec400], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor326 = _applyDecoratedDescriptor(_class121.prototype, 'contentWidth', [_dec401], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor327 = _applyDecoratedDescriptor(_class121.prototype, 'contentHeight', [_dec402], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor328 = _applyDecoratedDescriptor(_class121.prototype, 'horizontalScrolling', [_dec403], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor329 = _applyDecoratedDescriptor(_class121.prototype, 'verticalScrolling', [_dec404], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor330 = _applyDecoratedDescriptor(_class121.prototype, 'showCloseButton', [_dec405], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor331 = _applyDecoratedDescriptor(_class121.prototype, 'resizable', [_dec406], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor332 = _applyDecoratedDescriptor(_class121.prototype, 'beforeOpen', [_dec407], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor333 = _applyDecoratedDescriptor(_class121.prototype, 'afterOpen', [_dec408], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor334 = _applyDecoratedDescriptor(_class121.prototype, 'beforeClose', [_dec409], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor335 = _applyDecoratedDescriptor(_class121.prototype, 'afterClose', [_dec410], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class121)) || _class120) || _class120);
var Ui5SearchField = exports.Ui5SearchField = (_dec411 = (0, _aureliaTemplating.customElement)('ui5-search-field'), _dec412 = (0, _aureliaDependencyInjection.inject)(Element), _dec413 = (0, _aureliaTemplating.bindable)(), _dec414 = (0, _aureliaTemplating.bindable)(), _dec415 = (0, _aureliaTemplating.bindable)(), _dec416 = (0, _aureliaTemplating.bindable)(), _dec417 = (0, _aureliaTemplating.bindable)(), _dec418 = (0, _aureliaTemplating.bindable)(), _dec419 = (0, _aureliaTemplating.bindable)(), _dec420 = (0, _aureliaTemplating.bindable)(), _dec421 = (0, _aureliaTemplating.bindable)(), _dec422 = (0, _aureliaTemplating.bindable)(), _dec423 = (0, _aureliaTemplating.bindable)(), _dec424 = (0, _aureliaTemplating.bindable)(), _dec425 = (0, _aureliaTemplating.bindable)(), _dec426 = (0, _aureliaTemplating.bindable)(), _dec427 = (0, _aureliaTemplating.bindable)(), _dec411(_class123 = _dec412(_class123 = (_class124 = function (_Ui5Control3) {
  _inherits(Ui5SearchField, _Ui5Control3);

  Ui5SearchField.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    _Ui5Control3.prototype.addChild.call(this, child, elem);
    for (var _iterator26 = path, _isArray26 = Array.isArray(_iterator26), _i26 = 0, _iterator26 = _isArray26 ? _iterator26 : _iterator26[Symbol.iterator]();;) {
      if (_isArray26) {
        if (_i26 >= _iterator26.length) break;
        elem = _iterator26[_i26++];
      } else {
        _i26 = _iterator26.next();
        if (_i26.done) break;
        elem = _i26.value;
      }

      if (elem.localName == 'suggestion-item') {
        this._field.addSuggestionItem(child);
        break;
      }
    }
  };

  function Ui5SearchField(element) {
    _classCallCheck(this, Ui5SearchField);

    var _this12 = _possibleConstructorReturn(this, _Ui5Control3.call(this, element));

    _this12._field = null;

    _initDefineProp(_this12, 'value', _descriptor336, _this12);

    _initDefineProp(_this12, 'width', _descriptor337, _this12);

    _initDefineProp(_this12, 'enabled', _descriptor338, _this12);

    _initDefineProp(_this12, 'visible', _descriptor339, _this12);

    _initDefineProp(_this12, 'maxLength', _descriptor340, _this12);

    _initDefineProp(_this12, 'placeholder', _descriptor341, _this12);

    _initDefineProp(_this12, 'showMagnifier', _descriptor342, _this12);

    _initDefineProp(_this12, 'showRefreshButton', _descriptor343, _this12);

    _initDefineProp(_this12, 'refreshButtonTooltip', _descriptor344, _this12);

    _initDefineProp(_this12, 'showSearchButton', _descriptor345, _this12);

    _initDefineProp(_this12, 'enableSuggestions', _descriptor346, _this12);

    _initDefineProp(_this12, 'selectOnFocus', _descriptor347, _this12);

    _initDefineProp(_this12, 'liveChange', _descriptor348, _this12);

    _initDefineProp(_this12, 'suggest', _descriptor349, _this12);

    _initDefineProp(_this12, 'search', _descriptor350, _this12);

    _this12.element = element;
    return _this12;
  }

  Ui5SearchField.prototype.defaultFunc = function defaultFunc() {};

  Ui5SearchField.prototype.attached = function attached() {
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
    if (this.ui5Id) this._field = new sap.m.SearchField(this.ui5Id, params);else this._field = new sap.m.SearchField(params);
    $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._field, this.element);
    attributeManager.addAttributes({ "ui5-layout": '' });
    attributeManager.addAttributes({ "ui5-container": '' });
    var that = this;
    this._field.attachLiveChange(function (event) {
      that.value = event.mParameters.newValue;
    });
    this._field.addEventDelegate(this.element);
    _Ui5Control3.prototype.attached.call(this);
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
}(Ui5Control), (_descriptor336 = _applyDecoratedDescriptor(_class124.prototype, 'value', [_dec413], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor337 = _applyDecoratedDescriptor(_class124.prototype, 'width', [_dec414], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor338 = _applyDecoratedDescriptor(_class124.prototype, 'enabled', [_dec415], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor339 = _applyDecoratedDescriptor(_class124.prototype, 'visible', [_dec416], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor340 = _applyDecoratedDescriptor(_class124.prototype, 'maxLength', [_dec417], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor341 = _applyDecoratedDescriptor(_class124.prototype, 'placeholder', [_dec418], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor342 = _applyDecoratedDescriptor(_class124.prototype, 'showMagnifier', [_dec419], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor343 = _applyDecoratedDescriptor(_class124.prototype, 'showRefreshButton', [_dec420], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor344 = _applyDecoratedDescriptor(_class124.prototype, 'refreshButtonTooltip', [_dec421], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor345 = _applyDecoratedDescriptor(_class124.prototype, 'showSearchButton', [_dec422], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor346 = _applyDecoratedDescriptor(_class124.prototype, 'enableSuggestions', [_dec423], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor347 = _applyDecoratedDescriptor(_class124.prototype, 'selectOnFocus', [_dec424], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor348 = _applyDecoratedDescriptor(_class124.prototype, 'liveChange', [_dec425], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor349 = _applyDecoratedDescriptor(_class124.prototype, 'suggest', [_dec426], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor350 = _applyDecoratedDescriptor(_class124.prototype, 'search', [_dec427], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class124)) || _class123) || _class123);
var Ui5SegmentedButton = exports.Ui5SegmentedButton = (_dec428 = (0, _aureliaTemplating.customElement)('ui5-segmented-button'), _dec429 = (0, _aureliaDependencyInjection.inject)(Element), _dec430 = (0, _aureliaTemplating.bindable)(), _dec431 = (0, _aureliaTemplating.bindable)(), _dec432 = (0, _aureliaTemplating.bindable)(), _dec433 = (0, _aureliaTemplating.bindable)(), _dec428(_class126 = _dec429(_class126 = (_class127 = function () {
  Ui5SegmentedButton.prototype.defaultFunc = function defaultFunc() {};

  function Ui5SegmentedButton(element) {
    _classCallCheck(this, Ui5SegmentedButton);

    _initDefineProp(this, 'enabled', _descriptor351, this);

    _initDefineProp(this, 'width', _descriptor352, this);

    _initDefineProp(this, 'selectedKey', _descriptor353, this);

    _initDefineProp(this, 'select', _descriptor354, this);

    this._button = null;

    this.attributeManager = new AttributeManager(element);
    this.element = element;
  }

  Ui5SegmentedButton.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'item') {
        if (this._button.getItems().length == 0) this.selectedKey = child.mProperties.key;
        this._button.addItem(child);

        break;
      }
    }
  };

  Ui5SegmentedButton.prototype.attached = function attached() {
    this._button = new sap.m.SegmentedButton({
      enabled: !getBooleanFromAttributeValue(this.enabled),
      width: this.width,
      selectedKey: this.selectedKey,
      select: this.select
    });
    var that = this;
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._button, this.element);
      this.attributeManager.addAttributes({ "ui5-container": '' });
    }
    this._button.attachSelect(function (event) {
      that.selectedKey = event.mParameters.key;
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
      this._button.setWidth(newValue);
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
}(), (_descriptor351 = _applyDecoratedDescriptor(_class127.prototype, 'enabled', [_dec430], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor352 = _applyDecoratedDescriptor(_class127.prototype, 'width', [_dec431], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor353 = _applyDecoratedDescriptor(_class127.prototype, 'selectedKey', [_dec432], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor354 = _applyDecoratedDescriptor(_class127.prototype, 'select', [_dec433], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class127)) || _class126) || _class126);
var Ui5SegmentedButtonItem = exports.Ui5SegmentedButtonItem = (_dec434 = (0, _aureliaTemplating.customElement)('ui5-segmented-button-item'), _dec435 = (0, _aureliaDependencyInjection.inject)(Element), _dec436 = (0, _aureliaTemplating.bindable)(), _dec437 = (0, _aureliaTemplating.bindable)(), _dec438 = (0, _aureliaTemplating.bindable)(), _dec439 = (0, _aureliaTemplating.bindable)(), _dec440 = (0, _aureliaTemplating.bindable)(), _dec441 = (0, _aureliaTemplating.bindable)(), _dec442 = (0, _aureliaTemplating.bindable)(), _dec443 = (0, _aureliaTemplating.bindable)(), _dec434(_class129 = _dec435(_class129 = (_class130 = function (_Ui5Item) {
  _inherits(Ui5SegmentedButtonItem, _Ui5Item);

  function Ui5SegmentedButtonItem(element) {
    _classCallCheck(this, Ui5SegmentedButtonItem);

    var _this13 = _possibleConstructorReturn(this, _Ui5Item.call(this, element));

    _this13._item = null;

    _initDefineProp(_this13, 'icon', _descriptor355, _this13);

    _initDefineProp(_this13, 'visible', _descriptor356, _this13);

    _initDefineProp(_this13, 'width', _descriptor357, _this13);

    _initDefineProp(_this13, 'press', _descriptor358, _this13);

    _initDefineProp(_this13, 'key', _descriptor359, _this13);

    _initDefineProp(_this13, 'enabled', _descriptor360, _this13);

    _initDefineProp(_this13, 'text', _descriptor361, _this13);

    _initDefineProp(_this13, 'textDirection', _descriptor362, _this13);

    _this13.attributeManager = new AttributeManager(element);
    _this13.element = element;
    return _this13;
  }

  Ui5SegmentedButtonItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5SegmentedButtonItem.prototype.attached = function attached() {
    var props = {
      width: this.width,
      icon: this.icon,
      visible: getBooleanFromAttributeValue(this.visible),
      press: this.press != null ? this.press : this.defaultPress
    };
    _Ui5Item.prototype.fillProperties.call(this, props);
    this._item = new sap.m.SegmentedButtonItem(props);

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._item, this.element);
    }
  };

  Ui5SegmentedButtonItem.prototype.addChild = function addChild(child, elem) {};

  Ui5SegmentedButtonItem.prototype.removeChild = function removeChild(child, elem) {};

  Ui5SegmentedButtonItem.prototype.iconChanged = function iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  };

  Ui5SegmentedButtonItem.prototype.visibleChanged = function visibleChanged(newValue) {
    if (this._item !== null) {
      this._item.setVisible(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SegmentedButtonItem.prototype.widthChanged = function widthChanged(newValue) {
    this._item.setWidth(newValue);
  };

  return Ui5SegmentedButtonItem;
}(Ui5Item), (_descriptor355 = _applyDecoratedDescriptor(_class130.prototype, 'icon', [_dec436], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor356 = _applyDecoratedDescriptor(_class130.prototype, 'visible', [_dec437], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor357 = _applyDecoratedDescriptor(_class130.prototype, 'width', [_dec438], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor358 = _applyDecoratedDescriptor(_class130.prototype, 'press', [_dec439], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor359 = _applyDecoratedDescriptor(_class130.prototype, 'key', [_dec440], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor360 = _applyDecoratedDescriptor(_class130.prototype, 'enabled', [_dec441], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor361 = _applyDecoratedDescriptor(_class130.prototype, 'text', [_dec442], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor362 = _applyDecoratedDescriptor(_class130.prototype, 'textDirection', [_dec443], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class130)) || _class129) || _class129);
var Ui5Select = exports.Ui5Select = (_dec444 = (0, _aureliaTemplating.customElement)('ui5-select'), _dec445 = (0, _aureliaDependencyInjection.inject)(Element), _dec446 = (0, _aureliaTemplating.bindable)(), _dec447 = (0, _aureliaTemplating.bindable)(), _dec448 = (0, _aureliaTemplating.bindable)(), _dec449 = (0, _aureliaTemplating.bindable)(), _dec450 = (0, _aureliaTemplating.bindable)(), _dec451 = (0, _aureliaTemplating.bindable)(), _dec452 = (0, _aureliaTemplating.bindable)(), _dec453 = (0, _aureliaTemplating.bindable)(), _dec454 = (0, _aureliaTemplating.bindable)(), _dec455 = (0, _aureliaTemplating.bindable)(), _dec456 = (0, _aureliaTemplating.bindable)(), _dec457 = (0, _aureliaTemplating.bindable)(), _dec458 = (0, _aureliaTemplating.bindable)(), _dec459 = (0, _aureliaTemplating.bindable)(), _dec460 = (0, _aureliaTemplating.bindable)(), _dec461 = (0, _aureliaTemplating.bindable)(), _dec462 = (0, _aureliaTemplating.bindable)(), _dec444(_class132 = _dec445(_class132 = (_class133 = function () {
  Ui5Select.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._select.addItem(child);

        var oldVal = this.selectedKey;
        this.selectedKey = null;
        this.selectedKey = oldVal;
        return elem.localName;
      }
      break;
    }
  };

  Ui5Select.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation === 'item') {
      this._select.removeItem(child);
      var oldVal = this.selectedKey;
      this.selectedKey = null;
      this.selectedKey = oldVal;
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

    _initDefineProp(this, 'ui5Id', _descriptor363, this);

    _initDefineProp(this, 'name', _descriptor364, this);

    _initDefineProp(this, 'width', _descriptor365, this);

    _initDefineProp(this, 'maxWidth', _descriptor366, this);

    _initDefineProp(this, 'enabled', _descriptor367, this);

    _initDefineProp(this, 'selectedKey', _descriptor368, this);

    _initDefineProp(this, 'selectedItemId', _descriptor369, this);

    _initDefineProp(this, 'icon', _descriptor370, this);

    _initDefineProp(this, 'type', _descriptor371, this);

    _initDefineProp(this, 'autoAdjustWidth', _descriptor372, this);

    _initDefineProp(this, 'valueState', _descriptor373, this);

    _initDefineProp(this, 'valueStateText', _descriptor374, this);

    _initDefineProp(this, 'showSecondaryValues', _descriptor375, this);

    _initDefineProp(this, 'forceSelection', _descriptor376, this);

    _initDefineProp(this, 'items', _descriptor377, this);

    _initDefineProp(this, 'selectedItem', _descriptor378, this);

    _initDefineProp(this, 'change', _descriptor379, this);

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
}(), (_descriptor363 = _applyDecoratedDescriptor(_class133.prototype, 'ui5Id', [_dec446], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor364 = _applyDecoratedDescriptor(_class133.prototype, 'name', [_dec447], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor365 = _applyDecoratedDescriptor(_class133.prototype, 'width', [_dec448], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor366 = _applyDecoratedDescriptor(_class133.prototype, 'maxWidth', [_dec449], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor367 = _applyDecoratedDescriptor(_class133.prototype, 'enabled', [_dec450], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor368 = _applyDecoratedDescriptor(_class133.prototype, 'selectedKey', [_dec451], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor369 = _applyDecoratedDescriptor(_class133.prototype, 'selectedItemId', [_dec452], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor370 = _applyDecoratedDescriptor(_class133.prototype, 'icon', [_dec453], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor371 = _applyDecoratedDescriptor(_class133.prototype, 'type', [_dec454], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor372 = _applyDecoratedDescriptor(_class133.prototype, 'autoAdjustWidth', [_dec455], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor373 = _applyDecoratedDescriptor(_class133.prototype, 'valueState', [_dec456], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor374 = _applyDecoratedDescriptor(_class133.prototype, 'valueStateText', [_dec457], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor375 = _applyDecoratedDescriptor(_class133.prototype, 'showSecondaryValues', [_dec458], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor376 = _applyDecoratedDescriptor(_class133.prototype, 'forceSelection', [_dec459], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor377 = _applyDecoratedDescriptor(_class133.prototype, 'items', [_dec460], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor378 = _applyDecoratedDescriptor(_class133.prototype, 'selectedItem', [_dec461], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor379 = _applyDecoratedDescriptor(_class133.prototype, 'change', [_dec462], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class133)) || _class132) || _class132);
var Ui5SelectDialog = exports.Ui5SelectDialog = (_dec463 = (0, _aureliaTemplating.customElement)('ui5-select-dialog'), _dec464 = (0, _aureliaDependencyInjection.inject)(Element), _dec465 = (0, _aureliaTemplating.bindable)(), _dec466 = (0, _aureliaTemplating.bindable)(), _dec467 = (0, _aureliaTemplating.bindable)(), _dec468 = (0, _aureliaTemplating.bindable)(), _dec469 = (0, _aureliaTemplating.bindable)(), _dec470 = (0, _aureliaTemplating.bindable)(), _dec471 = (0, _aureliaTemplating.bindable)(), _dec472 = (0, _aureliaTemplating.bindable)(), _dec473 = (0, _aureliaTemplating.bindable)(), _dec474 = (0, _aureliaTemplating.bindable)(), _dec475 = (0, _aureliaTemplating.bindable)(), _dec476 = (0, _aureliaTemplating.bindable)(), _dec463(_class135 = _dec464(_class135 = (_class136 = function () {
  function Ui5SelectDialog(element) {
    _classCallCheck(this, Ui5SelectDialog);

    this._dialog = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor380, this);

    _initDefineProp(this, 'title', _descriptor381, this);

    _initDefineProp(this, 'contentHeight', _descriptor382, this);

    _initDefineProp(this, 'noDataText', _descriptor383, this);

    _initDefineProp(this, 'multiSelect', _descriptor384, this);

    _initDefineProp(this, 'growingThreshold', _descriptor385, this);

    _initDefineProp(this, 'contentWidth', _descriptor386, this);

    _initDefineProp(this, 'rememberSelections', _descriptor387, this);

    _initDefineProp(this, 'confirm', _descriptor388, this);

    _initDefineProp(this, 'search', _descriptor389, this);

    _initDefineProp(this, 'liveChange', _descriptor390, this);

    _initDefineProp(this, 'cancel', _descriptor391, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5SelectDialog.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5SelectDialog.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._dialog.addItem(child);return elem.localName;
      }
    }
  };

  Ui5SelectDialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'item') {
      try {
        this._dialog.removeItem(child);
      } catch (exc) {}
    }
  };

  Ui5SelectDialog.prototype.removeChild = function removeChild(child, elem) {};

  Ui5SelectDialog.prototype.attached = function attached() {
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
    if (this.ui5Id) this._dialog = new sap.m.SelectDialog(this.ui5Id, props);else this._dialog = new sap.m.SelectDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5SelectDialog.prototype.detached = function detached() {};

  Ui5SelectDialog.prototype.titleChanged = function titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  };

  Ui5SelectDialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  };

  Ui5SelectDialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  };

  Ui5SelectDialog.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setNoDataText(newValue);
    }
  };

  Ui5SelectDialog.prototype.multiSelectChanged = function multiSelectChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5SelectDialog.prototype.growingThresholdChanged = function growingThresholdChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGrowingThreshold(newValue);
    }
  };

  Ui5SelectDialog.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setRememberSelections(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5SelectDialog, [{
    key: 'UIElement',
    get: function get() {
      return this._dialog;
    }
  }]);

  return Ui5SelectDialog;
}(), (_descriptor380 = _applyDecoratedDescriptor(_class136.prototype, 'ui5Id', [_dec465], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor381 = _applyDecoratedDescriptor(_class136.prototype, 'title', [_dec466], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor382 = _applyDecoratedDescriptor(_class136.prototype, 'contentHeight', [_dec467], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor383 = _applyDecoratedDescriptor(_class136.prototype, 'noDataText', [_dec468], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor384 = _applyDecoratedDescriptor(_class136.prototype, 'multiSelect', [_dec469], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor385 = _applyDecoratedDescriptor(_class136.prototype, 'growingThreshold', [_dec470], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor386 = _applyDecoratedDescriptor(_class136.prototype, 'contentWidth', [_dec471], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor387 = _applyDecoratedDescriptor(_class136.prototype, 'rememberSelections', [_dec472], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor388 = _applyDecoratedDescriptor(_class136.prototype, 'confirm', [_dec473], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor389 = _applyDecoratedDescriptor(_class136.prototype, 'search', [_dec474], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor390 = _applyDecoratedDescriptor(_class136.prototype, 'liveChange', [_dec475], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor391 = _applyDecoratedDescriptor(_class136.prototype, 'cancel', [_dec476], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class136)) || _class135) || _class135);
var Ui5SimpleForm = exports.Ui5SimpleForm = (_dec477 = (0, _aureliaTemplating.customElement)('ui5-simple-form'), _dec478 = (0, _aureliaDependencyInjection.inject)(Element), _dec479 = (0, _aureliaTemplating.bindable)(), _dec480 = (0, _aureliaTemplating.bindable)(), _dec481 = (0, _aureliaTemplating.bindable)(), _dec482 = (0, _aureliaTemplating.bindable)(), _dec483 = (0, _aureliaTemplating.bindable)(), _dec484 = (0, _aureliaTemplating.bindable)(), _dec485 = (0, _aureliaTemplating.bindable)(), _dec486 = (0, _aureliaTemplating.bindable)(), _dec487 = (0, _aureliaTemplating.bindable)(), _dec488 = (0, _aureliaTemplating.bindable)(), _dec489 = (0, _aureliaTemplating.bindable)(), _dec490 = (0, _aureliaTemplating.bindable)(), _dec491 = (0, _aureliaTemplating.bindable)(), _dec492 = (0, _aureliaTemplating.bindable)(), _dec493 = (0, _aureliaTemplating.bindable)(), _dec494 = (0, _aureliaTemplating.bindable)(), _dec495 = (0, _aureliaTemplating.bindable)(), _dec496 = (0, _aureliaTemplating.bindable)(), _dec497 = (0, _aureliaTemplating.bindable)(), _dec498 = (0, _aureliaTemplating.bindable)(), _dec499 = (0, _aureliaTemplating.bindable)(), _dec500 = (0, _aureliaTemplating.bindable)(), _dec477(_class138 = _dec478(_class138 = (_class139 = function () {
  function Ui5SimpleForm(element) {
    _classCallCheck(this, Ui5SimpleForm);

    _initDefineProp(this, 'ui5Id', _descriptor392, this);

    _initDefineProp(this, 'title', _descriptor393, this);

    _initDefineProp(this, 'maxContainerCols', _descriptor394, this);

    _initDefineProp(this, 'minWidth', _descriptor395, this);

    _initDefineProp(this, 'width', _descriptor396, this);

    _initDefineProp(this, 'editable', _descriptor397, this);

    _initDefineProp(this, 'labelMinWidth', _descriptor398, this);

    _initDefineProp(this, 'layout', _descriptor399, this);

    _initDefineProp(this, 'backgroundDesign', _descriptor400, this);

    _initDefineProp(this, 'labelSpanXL', _descriptor401, this);

    _initDefineProp(this, 'labelSpanL', _descriptor402, this);

    _initDefineProp(this, 'labelSpanM', _descriptor403, this);

    _initDefineProp(this, 'labelSpanS', _descriptor404, this);

    _initDefineProp(this, 'adjustLabelSpan', _descriptor405, this);

    _initDefineProp(this, 'emptySpanXL', _descriptor406, this);

    _initDefineProp(this, 'emptySpanL', _descriptor407, this);

    _initDefineProp(this, 'emptySpanM', _descriptor408, this);

    _initDefineProp(this, 'emptySpanS', _descriptor409, this);

    _initDefineProp(this, 'singleContainerFullSize', _descriptor410, this);

    _initDefineProp(this, 'breakpointXL', _descriptor411, this);

    _initDefineProp(this, 'breakpointL', _descriptor412, this);

    _initDefineProp(this, 'breakpointM', _descriptor413, this);

    this._form = null;

    this.element = element;
  }

  Ui5SimpleForm.prototype.addChild = function addChild(child, elem) {
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
}(), (_descriptor392 = _applyDecoratedDescriptor(_class139.prototype, 'ui5Id', [_dec479], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor393 = _applyDecoratedDescriptor(_class139.prototype, 'title', [_dec480], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor394 = _applyDecoratedDescriptor(_class139.prototype, 'maxContainerCols', [_dec481], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor395 = _applyDecoratedDescriptor(_class139.prototype, 'minWidth', [_dec482], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor396 = _applyDecoratedDescriptor(_class139.prototype, 'width', [_dec483], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor397 = _applyDecoratedDescriptor(_class139.prototype, 'editable', [_dec484], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor398 = _applyDecoratedDescriptor(_class139.prototype, 'labelMinWidth', [_dec485], {
  enumerable: true,
  initializer: function initializer() {
    return 192;
  }
}), _descriptor399 = _applyDecoratedDescriptor(_class139.prototype, 'layout', [_dec486], {
  enumerable: true,
  initializer: function initializer() {
    return 'ResponsiveLayout';
  }
}), _descriptor400 = _applyDecoratedDescriptor(_class139.prototype, 'backgroundDesign', [_dec487], {
  enumerable: true,
  initializer: function initializer() {
    return 'Translucent';
  }
}), _descriptor401 = _applyDecoratedDescriptor(_class139.prototype, 'labelSpanXL', [_dec488], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor402 = _applyDecoratedDescriptor(_class139.prototype, 'labelSpanL', [_dec489], {
  enumerable: true,
  initializer: function initializer() {
    return 4;
  }
}), _descriptor403 = _applyDecoratedDescriptor(_class139.prototype, 'labelSpanM', [_dec490], {
  enumerable: true,
  initializer: function initializer() {
    return 2;
  }
}), _descriptor404 = _applyDecoratedDescriptor(_class139.prototype, 'labelSpanS', [_dec491], {
  enumerable: true,
  initializer: function initializer() {
    return 12;
  }
}), _descriptor405 = _applyDecoratedDescriptor(_class139.prototype, 'adjustLabelSpan', [_dec492], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor406 = _applyDecoratedDescriptor(_class139.prototype, 'emptySpanXL', [_dec493], {
  enumerable: true,
  initializer: function initializer() {
    return -1;
  }
}), _descriptor407 = _applyDecoratedDescriptor(_class139.prototype, 'emptySpanL', [_dec494], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor408 = _applyDecoratedDescriptor(_class139.prototype, 'emptySpanM', [_dec495], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor409 = _applyDecoratedDescriptor(_class139.prototype, 'emptySpanS', [_dec496], {
  enumerable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor410 = _applyDecoratedDescriptor(_class139.prototype, 'singleContainerFullSize', [_dec497], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor411 = _applyDecoratedDescriptor(_class139.prototype, 'breakpointXL', [_dec498], {
  enumerable: true,
  initializer: function initializer() {
    return 1440;
  }
}), _descriptor412 = _applyDecoratedDescriptor(_class139.prototype, 'breakpointL', [_dec499], {
  enumerable: true,
  initializer: function initializer() {
    return 1024;
  }
}), _descriptor413 = _applyDecoratedDescriptor(_class139.prototype, 'breakpointM', [_dec500], {
  enumerable: true,
  initializer: function initializer() {
    return 600;
  }
})), _class139)) || _class138) || _class138);
var Ui5SlideTile = exports.Ui5SlideTile = (_dec501 = (0, _aureliaTemplating.customElement)('ui5-slide-tile'), _dec502 = (0, _aureliaDependencyInjection.inject)(Element), _dec503 = (0, _aureliaTemplating.bindable)(), _dec504 = (0, _aureliaTemplating.bindable)(), _dec501(_class141 = _dec502(_class141 = (_class142 = function () {
  function Ui5SlideTile(element) {
    _classCallCheck(this, Ui5SlideTile);

    this._container = null;

    _initDefineProp(this, 'displayTime', _descriptor414, this);

    _initDefineProp(this, 'transitionTime', _descriptor415, this);

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
}(), (_descriptor414 = _applyDecoratedDescriptor(_class142.prototype, 'displayTime', [_dec503], {
  enumerable: true,
  initializer: function initializer() {
    return 5000;
  }
}), _descriptor415 = _applyDecoratedDescriptor(_class142.prototype, 'transitionTime', [_dec504], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class142)) || _class141) || _class141);
var MdSlider = exports.MdSlider = (_dec505 = (0, _aureliaTemplating.customElement)('md-slider'), _dec506 = (0, _aureliaDependencyInjection.inject)(Element), _dec507 = (0, _aureliaTemplating.inlineView)('\n  <template class="slider">\n  <require from="./slider.css"></require>\n  <ul class="slides">\n    <slot></slot>\n  </ul>\n  </template>\n'), _dec508 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec509 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec510 = (0, _aureliaTemplating.bindable)(), _dec511 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec512 = (0, _aureliaTemplating.bindable)({ defaultBindingMode: _aureliaBinding.bindingMode.oneTime }), _dec505(_class144 = _dec506(_class144 = _dec507(_class144 = (_class145 = function () {
  function MdSlider(element) {
    _classCallCheck(this, MdSlider);

    _initDefineProp(this, 'mdFillContainer', _descriptor416, this);

    _initDefineProp(this, 'mdHeight', _descriptor417, this);

    _initDefineProp(this, 'mdIndicators', _descriptor418, this);

    _initDefineProp(this, 'mdInterval', _descriptor419, this);

    _initDefineProp(this, 'mdTransition', _descriptor420, this);

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
}(), (_descriptor416 = _applyDecoratedDescriptor(_class145.prototype, 'mdFillContainer', [_dec508], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor417 = _applyDecoratedDescriptor(_class145.prototype, 'mdHeight', [_dec509], {
  enumerable: true,
  initializer: function initializer() {
    return 400;
  }
}), _descriptor418 = _applyDecoratedDescriptor(_class145.prototype, 'mdIndicators', [_dec510], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor419 = _applyDecoratedDescriptor(_class145.prototype, 'mdInterval', [_dec511], {
  enumerable: true,
  initializer: function initializer() {
    return 6000;
  }
}), _descriptor420 = _applyDecoratedDescriptor(_class145.prototype, 'mdTransition', [_dec512], {
  enumerable: true,
  initializer: function initializer() {
    return 500;
  }
})), _class145)) || _class144) || _class144) || _class144);
var Ui5StandardListItem = exports.Ui5StandardListItem = (_dec513 = (0, _aureliaTemplating.customElement)('ui5-standard-list-item'), _dec514 = (0, _aureliaDependencyInjection.inject)(Element), _dec515 = (0, _aureliaTemplating.bindable)(), _dec516 = (0, _aureliaTemplating.bindable)(), _dec517 = (0, _aureliaTemplating.bindable)(), _dec518 = (0, _aureliaTemplating.bindable)(), _dec519 = (0, _aureliaTemplating.bindable)(), _dec520 = (0, _aureliaTemplating.bindable)(), _dec521 = (0, _aureliaTemplating.bindable)(), _dec522 = (0, _aureliaTemplating.bindable)(), _dec523 = (0, _aureliaTemplating.bindable)(), _dec524 = (0, _aureliaTemplating.bindable)(), _dec525 = (0, _aureliaTemplating.bindable)(), _dec513(_class147 = _dec514(_class147 = (_class148 = function () {
  function Ui5StandardListItem(element) {
    _classCallCheck(this, Ui5StandardListItem);

    this._item = null;
    this._parent = null;
    this._relation = null;

    _initDefineProp(this, 'title', _descriptor421, this);

    _initDefineProp(this, 'icon', _descriptor422, this);

    _initDefineProp(this, 'description', _descriptor423, this);

    _initDefineProp(this, 'iconInset', _descriptor424, this);

    _initDefineProp(this, 'iconDensityAware', _descriptor425, this);

    _initDefineProp(this, 'activeIcon', _descriptor426, this);

    _initDefineProp(this, 'info', _descriptor427, this);

    _initDefineProp(this, 'infoState', _descriptor428, this);

    _initDefineProp(this, 'adaptTitleSize', _descriptor429, this);

    _initDefineProp(this, 'titleTextDirection', _descriptor430, this);

    _initDefineProp(this, 'infoTextDirection', _descriptor431, this);

    this.element = element;
  }

  Ui5StandardListItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5StandardListItem.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    var props = {
      title: this.title,
      icon: this.icon,
      iconInset: getBooleanFromAttributeValue(this.iconInset),
      iconDensityAware: getBooleanFromAttributeValue(this.iconDensityAware),
      activeIcon: this.activeIcon,
      info: this.info,
      infoState: this.infoState,
      adaptTitleSize: getBooleanFromAttributeValue(this.adaptTitleSize),
      titleTextDirection: this.titleTextDirection,
      infoTextDirection: this.infoTextDirection
    };
    this._item = new sap.m.StandardListItem(props);
    attributeManager.addAttributes({ "ui5-container": '' });
    this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._parent.addChild(this._item, this.element);
  };

  Ui5StandardListItem.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._item, this._relation);
    }
  };

  Ui5StandardListItem.prototype.titleChanged = function titleChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitle(newValue);
    }
  };

  Ui5StandardListItem.prototype.iconChanged = function iconChanged(newValue) {
    if (this._item !== null) {
      this._item.setIcon(newValue);
    }
  };

  Ui5StandardListItem.prototype.descriptionChanged = function descriptionChanged(newValue) {
    if (this._item !== null) {
      this._item.setDescription(newValue);
    }
  };

  Ui5StandardListItem.prototype.iconInsetChanged = function iconInsetChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconInset(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5StandardListItem.prototype.iconDensityAwareChanged = function iconDensityAwareChanged(newValue) {
    if (this._item !== null) {
      this._item.setIconDensityAware(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5StandardListItem.prototype.activeIconChanged = function activeIconChanged(newValue) {
    if (this._item !== null) {
      this._item.setActiveIcon(newValue);
    }
  };

  Ui5StandardListItem.prototype.infoChanged = function infoChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfo(newValue);
    }
  };

  Ui5StandardListItem.prototype.infoStateChanged = function infoStateChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoState(newValue);
    }
  };

  Ui5StandardListItem.prototype.adaptTitleSizeChanged = function adaptTitleSizeChanged(newValue) {
    if (this._item !== null) {
      this._item.setAdaptTitleSize(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5StandardListItem.prototype.titleTextDirectionChanged = function titleTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setTitleTextDirection(newValue);
    }
  };

  Ui5StandardListItem.prototype.infoTextDirectionChanged = function infoTextDirectionChanged(newValue) {
    if (this._item !== null) {
      this._item.setInfoTextDirection(newValue);
    }
  };

  return Ui5StandardListItem;
}(), (_descriptor421 = _applyDecoratedDescriptor(_class148.prototype, 'title', [_dec515], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor422 = _applyDecoratedDescriptor(_class148.prototype, 'icon', [_dec516], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor423 = _applyDecoratedDescriptor(_class148.prototype, 'description', [_dec517], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor424 = _applyDecoratedDescriptor(_class148.prototype, 'iconInset', [_dec518], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor425 = _applyDecoratedDescriptor(_class148.prototype, 'iconDensityAware', [_dec519], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor426 = _applyDecoratedDescriptor(_class148.prototype, 'activeIcon', [_dec520], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor427 = _applyDecoratedDescriptor(_class148.prototype, 'info', [_dec521], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor428 = _applyDecoratedDescriptor(_class148.prototype, 'infoState', [_dec522], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor429 = _applyDecoratedDescriptor(_class148.prototype, 'adaptTitleSize', [_dec523], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor430 = _applyDecoratedDescriptor(_class148.prototype, 'titleTextDirection', [_dec524], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor431 = _applyDecoratedDescriptor(_class148.prototype, 'infoTextDirection', [_dec525], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
})), _class148)) || _class147) || _class147);
var Ui5ObjectNumber = exports.Ui5ObjectNumber = (_dec526 = (0, _aureliaTemplating.customElement)('ui5-object-number'), _dec527 = (0, _aureliaDependencyInjection.inject)(Element), _dec528 = (0, _aureliaTemplating.bindable)(), _dec529 = (0, _aureliaTemplating.bindable)(), _dec530 = (0, _aureliaTemplating.bindable)(), _dec531 = (0, _aureliaTemplating.bindable)(), _dec532 = (0, _aureliaTemplating.bindable)(), _dec533 = (0, _aureliaTemplating.bindable)(), _dec534 = (0, _aureliaTemplating.bindable)(), _dec526(_class150 = _dec527(_class150 = (_class151 = function () {
  function Ui5ObjectNumber(element) {
    _classCallCheck(this, Ui5ObjectNumber);

    this._number = null;

    _initDefineProp(this, 'ui5Id', _descriptor432, this);

    _initDefineProp(this, 'number', _descriptor433, this);

    _initDefineProp(this, 'numberUnit', _descriptor434, this);

    _initDefineProp(this, 'emphasized', _descriptor435, this);

    _initDefineProp(this, 'state', _descriptor436, this);

    _initDefineProp(this, 'unit', _descriptor437, this);

    _initDefineProp(this, 'textDirection', _descriptor438, this);

    _initDefineProp(this, 'textAlign', _descriptor439, this);

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
}(), (_descriptor432 = _applyDecoratedDescriptor(_class151.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor433 = _applyDecoratedDescriptor(_class151.prototype, 'number', [_dec528], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor434 = _applyDecoratedDescriptor(_class151.prototype, 'numberUnit', [_dec529], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor435 = _applyDecoratedDescriptor(_class151.prototype, 'emphasized', [_dec530], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor436 = _applyDecoratedDescriptor(_class151.prototype, 'state', [_dec531], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor437 = _applyDecoratedDescriptor(_class151.prototype, 'unit', [_dec532], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor438 = _applyDecoratedDescriptor(_class151.prototype, 'textDirection', [_dec533], {
  enumerable: true,
  initializer: function initializer() {
    return 'Inherit';
  }
}), _descriptor439 = _applyDecoratedDescriptor(_class151.prototype, 'textAlign', [_dec534], {
  enumerable: true,
  initializer: function initializer() {
    return 'Begin';
  }
})), _class151)) || _class150) || _class150);
var MdSwitch = exports.MdSwitch = (_dec535 = (0, _aureliaTemplating.customElement)('md-switch'), _dec536 = (0, _aureliaDependencyInjection.inject)(Element), _dec537 = (0, _aureliaTemplating.bindable)({
  defaultBindingMode: _aureliaBinding.bindingMode.twoWay
}), _dec538 = (0, _aureliaTemplating.bindable)(), _dec539 = (0, _aureliaTemplating.bindable)(), _dec540 = (0, _aureliaTemplating.bindable)(), _dec535(_class153 = _dec536(_class153 = (_class154 = function () {
  function MdSwitch(element) {
    _classCallCheck(this, MdSwitch);

    _initDefineProp(this, 'mdChecked', _descriptor440, this);

    _initDefineProp(this, 'mdDisabled', _descriptor441, this);

    _initDefineProp(this, 'mdLabelOff', _descriptor442, this);

    _initDefineProp(this, 'mdLabelOn', _descriptor443, this);

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
}(), (_descriptor440 = _applyDecoratedDescriptor(_class154.prototype, 'mdChecked', [_dec537], {
  enumerable: true,
  initializer: null
}), _descriptor441 = _applyDecoratedDescriptor(_class154.prototype, 'mdDisabled', [_dec538], {
  enumerable: true,
  initializer: null
}), _descriptor442 = _applyDecoratedDescriptor(_class154.prototype, 'mdLabelOff', [_dec539], {
  enumerable: true,
  initializer: function initializer() {
    return 'Off';
  }
}), _descriptor443 = _applyDecoratedDescriptor(_class154.prototype, 'mdLabelOn', [_dec540], {
  enumerable: true,
  initializer: function initializer() {
    return 'On';
  }
})), _class154)) || _class153) || _class153);
var Ui5StandardTile = exports.Ui5StandardTile = (_dec541 = (0, _aureliaTemplating.customElement)('ui5-standard-tile'), _dec542 = (0, _aureliaDependencyInjection.inject)(Element), _dec543 = (0, _aureliaTemplating.bindable)(), _dec544 = (0, _aureliaTemplating.bindable)(), _dec545 = (0, _aureliaTemplating.bindable)(), _dec546 = (0, _aureliaTemplating.bindable)(), _dec547 = (0, _aureliaTemplating.bindable)(), _dec548 = (0, _aureliaTemplating.bindable)(), _dec549 = (0, _aureliaTemplating.bindable)(), _dec550 = (0, _aureliaTemplating.bindable)(), _dec551 = (0, _aureliaTemplating.bindable)(), _dec541(_class156 = _dec542(_class156 = (_class157 = function (_Ui5Control4) {
  _inherits(Ui5StandardTile, _Ui5Control4);

  _createClass(Ui5StandardTile, [{
    key: 'UIElement',
    get: function get() {
      return this._tile;
    }
  }]);

  function Ui5StandardTile(element) {
    _classCallCheck(this, Ui5StandardTile);

    var _this14 = _possibleConstructorReturn(this, _Ui5Control4.call(this, element));

    _this14._tile = null;

    _initDefineProp(_this14, 'type', _descriptor444, _this14);

    _initDefineProp(_this14, 'title', _descriptor445, _this14);

    _initDefineProp(_this14, 'number', _descriptor446, _this14);

    _initDefineProp(_this14, 'info', _descriptor447, _this14);

    _initDefineProp(_this14, 'infoState', _descriptor448, _this14);

    _initDefineProp(_this14, 'numberUnit', _descriptor449, _this14);

    _initDefineProp(_this14, 'icon', _descriptor450, _this14);

    _initDefineProp(_this14, 'press', _descriptor451, _this14);

    _initDefineProp(_this14, 'busy', _descriptor452, _this14);

    _this14.element = element;
    return _this14;
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
    _Ui5Control4.prototype.fillProperties.call(this, props);
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
}(Ui5Control), (_descriptor444 = _applyDecoratedDescriptor(_class157.prototype, 'type', [_dec543], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor445 = _applyDecoratedDescriptor(_class157.prototype, 'title', [_dec544], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor446 = _applyDecoratedDescriptor(_class157.prototype, 'number', [_dec545], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor447 = _applyDecoratedDescriptor(_class157.prototype, 'info', [_dec546], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor448 = _applyDecoratedDescriptor(_class157.prototype, 'infoState', [_dec547], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor449 = _applyDecoratedDescriptor(_class157.prototype, 'numberUnit', [_dec548], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor450 = _applyDecoratedDescriptor(_class157.prototype, 'icon', [_dec549], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor451 = _applyDecoratedDescriptor(_class157.prototype, 'press', [_dec550], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor452 = _applyDecoratedDescriptor(_class157.prototype, 'busy', [_dec551], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class157)) || _class156) || _class156);
var Ui5TabContainerItem = exports.Ui5TabContainerItem = (_dec552 = (0, _aureliaTemplating.customElement)('ui5-tab-container-item'), _dec553 = (0, _aureliaDependencyInjection.inject)(Element), _dec554 = (0, _aureliaTemplating.bindable)(), _dec555 = (0, _aureliaTemplating.bindable)(), _dec556 = (0, _aureliaTemplating.bindable)(), _dec557 = (0, _aureliaTemplating.bindable)(), _dec558 = (0, _aureliaFramework.computedFrom)('_tab'), _dec552(_class159 = _dec553(_class159 = (_class160 = function () {
  function Ui5TabContainerItem(element) {
    _classCallCheck(this, Ui5TabContainerItem);

    _initDefineProp(this, 'name', _descriptor453, this);

    _initDefineProp(this, 'key', _descriptor454, this);

    _initDefineProp(this, 'modified', _descriptor455, this);

    _initDefineProp(this, 'itemPropertyChanged', _descriptor456, this);

    this._tab = null;
    this._parent = null;
    this._relation = null;

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
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._tab, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._tab.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5TabContainerItem.prototype.detached = function detached() {
    this._parent.removeChildByRelation(this._tab, this._relation);
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
}(), (_descriptor453 = _applyDecoratedDescriptor(_class160.prototype, 'name', [_dec554], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor454 = _applyDecoratedDescriptor(_class160.prototype, 'key', [_dec555], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor455 = _applyDecoratedDescriptor(_class160.prototype, 'modified', [_dec556], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor456 = _applyDecoratedDescriptor(_class160.prototype, 'itemPropertyChanged', [_dec557], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _applyDecoratedDescriptor(_class160.prototype, 'UIElement', [_dec558], Object.getOwnPropertyDescriptor(_class160.prototype, 'UIElement'), _class160.prototype)), _class160)) || _class159) || _class159);
var Ui5Table = exports.Ui5Table = (_dec559 = (0, _aureliaTemplating.customElement)('ui5-table'), _dec560 = (0, _aureliaDependencyInjection.inject)(Element), _dec561 = (0, _aureliaTemplating.bindable)(), _dec562 = (0, _aureliaTemplating.bindable)(), _dec563 = (0, _aureliaTemplating.bindable)(), _dec564 = (0, _aureliaTemplating.bindable)(), _dec565 = (0, _aureliaTemplating.bindable)(), _dec566 = (0, _aureliaTemplating.bindable)(), _dec567 = (0, _aureliaTemplating.bindable)(), _dec568 = (0, _aureliaTemplating.bindable)(), _dec569 = (0, _aureliaTemplating.bindable)(), _dec570 = (0, _aureliaTemplating.bindable)(), _dec571 = (0, _aureliaTemplating.bindable)(), _dec572 = (0, _aureliaTemplating.bindable)(), _dec573 = (0, _aureliaTemplating.bindable)(), _dec574 = (0, _aureliaTemplating.bindable)(), _dec575 = (0, _aureliaTemplating.bindable)(), _dec576 = (0, _aureliaTemplating.bindable)(), _dec577 = (0, _aureliaTemplating.bindable)(), _dec578 = (0, _aureliaTemplating.bindable)(), _dec579 = (0, _aureliaTemplating.bindable)(), _dec580 = (0, _aureliaTemplating.bindable)(), _dec581 = (0, _aureliaTemplating.bindable)(), _dec582 = (0, _aureliaTemplating.bindable)(), _dec583 = (0, _aureliaTemplating.bindable)(), _dec584 = (0, _aureliaTemplating.bindable)(), _dec585 = (0, _aureliaTemplating.bindable)(), _dec586 = (0, _aureliaTemplating.bindable)(), _dec587 = (0, _aureliaTemplating.bindable)(), _dec588 = (0, _aureliaTemplating.bindable)(), _dec589 = (0, _aureliaTemplating.bindable)(), _dec590 = (0, _aureliaTemplating.bindable)(), _dec559(_class162 = _dec560(_class162 = (_class163 = function (_Ui5ListBase2) {
  _inherits(Ui5Table, _Ui5ListBase2);

  function Ui5Table(element) {
    _classCallCheck(this, Ui5Table);

    var _this15 = _possibleConstructorReturn(this, _Ui5ListBase2.call(this, element));

    _initDefineProp(_this15, 'showOverlay', _descriptor457, _this15);

    _initDefineProp(_this15, 'fixedLayout', _descriptor458, _this15);

    _initDefineProp(_this15, 'inset', _descriptor459, _this15);

    _initDefineProp(_this15, 'headerText', _descriptor460, _this15);

    _initDefineProp(_this15, 'headerDesign', _descriptor461, _this15);

    _initDefineProp(_this15, 'footerText', _descriptor462, _this15);

    _initDefineProp(_this15, 'mode', _descriptor463, _this15);

    _initDefineProp(_this15, 'width', _descriptor464, _this15);

    _initDefineProp(_this15, 'includeItemInSelection', _descriptor465, _this15);

    _initDefineProp(_this15, 'showUnread', _descriptor466, _this15);

    _initDefineProp(_this15, 'noDataText', _descriptor467, _this15);

    _initDefineProp(_this15, 'showNoData', _descriptor468, _this15);

    _initDefineProp(_this15, 'enableBusyIndicator', _descriptor469, _this15);

    _initDefineProp(_this15, 'modeAnimationOn', _descriptor470, _this15);

    _initDefineProp(_this15, 'showSeparator', _descriptor471, _this15);

    _initDefineProp(_this15, 'swipeDirection', _descriptor472, _this15);

    _initDefineProp(_this15, 'growing', _descriptor473, _this15);

    _initDefineProp(_this15, 'growingThreshold', _descriptor474, _this15);

    _initDefineProp(_this15, 'growingTriggerText', _descriptor475, _this15);

    _initDefineProp(_this15, 'growingScrollToLoad', _descriptor476, _this15);

    _initDefineProp(_this15, 'growingDirection', _descriptor477, _this15);

    _initDefineProp(_this15, 'rememberSelections', _descriptor478, _this15);

    _initDefineProp(_this15, 'keyboardMode', _descriptor479, _this15);

    _initDefineProp(_this15, 'delete', _descriptor480, _this15);

    _initDefineProp(_this15, 'itemPress', _descriptor481, _this15);

    _initDefineProp(_this15, 'selectionChange', _descriptor482, _this15);

    _initDefineProp(_this15, 'swipe', _descriptor483, _this15);

    _initDefineProp(_this15, 'updateFinished', _descriptor484, _this15);

    _initDefineProp(_this15, 'updateStarted', _descriptor485, _this15);

    _initDefineProp(_this15, 'busy', _descriptor486, _this15);

    _this15._table = null;
    _this15._parent = null;
    _this15._relation = null;

    _this15.element = element;
    return _this15;
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
        this._table.setHeaderToolbar(child);return elem.localName;
      }
      if (elem.localName == 'info-toolbar') {
        this._table.setInfoToolbar(child);return elem.localName;
      }
      if (elem.localName == 'item') {
        this._table.addItem(child);return elem.localName;
      }
      if (elem.localName == 'column') {
        this._table.addColumn(child);return elem.localName;
      }
    }
  };

  Ui5Table.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'item') {
      this._table.removeItem(child);
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
      showOverlay: getBooleanFromAttributeValue(this.showOverlay),
      fixedLayout: getBooleanFromAttributeValue(this.fixedLayout)
    };
    _Ui5ListBase2.prototype.fillProperties.call(this, props);
    var table = new sap.m.Table(props);
    this._table = table;

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._table, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._table.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5Table.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._table, this._relation);
    } else {
      this._table.destroy();
    }
  };

  Ui5Table.prototype.fixedLayoutChanged = function fixedLayoutChanged(newValue) {
    if (this._table !== null) {
      this._table.setFixedLayout(getBooleanFromAttributeValue(newValue));
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
}(Ui5ListBase), (_descriptor457 = _applyDecoratedDescriptor(_class163.prototype, 'showOverlay', [_dec561], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor458 = _applyDecoratedDescriptor(_class163.prototype, 'fixedLayout', [_dec562], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor459 = _applyDecoratedDescriptor(_class163.prototype, 'inset', [_dec563], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor460 = _applyDecoratedDescriptor(_class163.prototype, 'headerText', [_dec564], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor461 = _applyDecoratedDescriptor(_class163.prototype, 'headerDesign', [_dec565], {
  enumerable: true,
  initializer: function initializer() {
    return 'Standard';
  }
}), _descriptor462 = _applyDecoratedDescriptor(_class163.prototype, 'footerText', [_dec566], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor463 = _applyDecoratedDescriptor(_class163.prototype, 'mode', [_dec567], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor464 = _applyDecoratedDescriptor(_class163.prototype, 'width', [_dec568], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor465 = _applyDecoratedDescriptor(_class163.prototype, 'includeItemInSelection', [_dec569], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor466 = _applyDecoratedDescriptor(_class163.prototype, 'showUnread', [_dec570], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor467 = _applyDecoratedDescriptor(_class163.prototype, 'noDataText', [_dec571], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor468 = _applyDecoratedDescriptor(_class163.prototype, 'showNoData', [_dec572], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor469 = _applyDecoratedDescriptor(_class163.prototype, 'enableBusyIndicator', [_dec573], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor470 = _applyDecoratedDescriptor(_class163.prototype, 'modeAnimationOn', [_dec574], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor471 = _applyDecoratedDescriptor(_class163.prototype, 'showSeparator', [_dec575], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor472 = _applyDecoratedDescriptor(_class163.prototype, 'swipeDirection', [_dec576], {
  enumerable: true,
  initializer: function initializer() {
    return 'Both';
  }
}), _descriptor473 = _applyDecoratedDescriptor(_class163.prototype, 'growing', [_dec577], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor474 = _applyDecoratedDescriptor(_class163.prototype, 'growingThreshold', [_dec578], {
  enumerable: true,
  initializer: function initializer() {
    return 20;
  }
}), _descriptor475 = _applyDecoratedDescriptor(_class163.prototype, 'growingTriggerText', [_dec579], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor476 = _applyDecoratedDescriptor(_class163.prototype, 'growingScrollToLoad', [_dec580], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor477 = _applyDecoratedDescriptor(_class163.prototype, 'growingDirection', [_dec581], {
  enumerable: true,
  initializer: function initializer() {
    return 'Downwards';
  }
}), _descriptor478 = _applyDecoratedDescriptor(_class163.prototype, 'rememberSelections', [_dec582], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor479 = _applyDecoratedDescriptor(_class163.prototype, 'keyboardMode', [_dec583], {
  enumerable: true,
  initializer: function initializer() {
    return 'Navigation';
  }
}), _descriptor480 = _applyDecoratedDescriptor(_class163.prototype, 'delete', [_dec584], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor481 = _applyDecoratedDescriptor(_class163.prototype, 'itemPress', [_dec585], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor482 = _applyDecoratedDescriptor(_class163.prototype, 'selectionChange', [_dec586], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor483 = _applyDecoratedDescriptor(_class163.prototype, 'swipe', [_dec587], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor484 = _applyDecoratedDescriptor(_class163.prototype, 'updateFinished', [_dec588], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor485 = _applyDecoratedDescriptor(_class163.prototype, 'updateStarted', [_dec589], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor486 = _applyDecoratedDescriptor(_class163.prototype, 'busy', [_dec590], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class163)) || _class162) || _class162);
var Ui5TableSelectDialog = exports.Ui5TableSelectDialog = (_dec591 = (0, _aureliaTemplating.customElement)('ui5-table-select-dialog'), _dec592 = (0, _aureliaDependencyInjection.inject)(Element), _dec593 = (0, _aureliaTemplating.bindable)(), _dec594 = (0, _aureliaTemplating.bindable)(), _dec595 = (0, _aureliaTemplating.bindable)(), _dec596 = (0, _aureliaTemplating.bindable)(), _dec597 = (0, _aureliaTemplating.bindable)(), _dec598 = (0, _aureliaTemplating.bindable)(), _dec599 = (0, _aureliaTemplating.bindable)(), _dec600 = (0, _aureliaTemplating.bindable)(), _dec601 = (0, _aureliaTemplating.bindable)(), _dec602 = (0, _aureliaTemplating.bindable)(), _dec603 = (0, _aureliaTemplating.bindable)(), _dec604 = (0, _aureliaTemplating.bindable)(), _dec591(_class165 = _dec592(_class165 = (_class166 = function () {
  function Ui5TableSelectDialog(element) {
    _classCallCheck(this, Ui5TableSelectDialog);

    this._dialog = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor487, this);

    _initDefineProp(this, 'title', _descriptor488, this);

    _initDefineProp(this, 'contentHeight', _descriptor489, this);

    _initDefineProp(this, 'noDataText', _descriptor490, this);

    _initDefineProp(this, 'multiSelect', _descriptor491, this);

    _initDefineProp(this, 'growingThreshold', _descriptor492, this);

    _initDefineProp(this, 'contentWidth', _descriptor493, this);

    _initDefineProp(this, 'rememberSelections', _descriptor494, this);

    _initDefineProp(this, 'confirm', _descriptor495, this);

    _initDefineProp(this, 'search', _descriptor496, this);

    _initDefineProp(this, 'liveChange', _descriptor497, this);

    _initDefineProp(this, 'cancel', _descriptor498, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5TableSelectDialog.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TableSelectDialog.prototype.addChild = function addChild(child, elem) {
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

      if (elem.localName == 'item') {
        this._dialog.addItem(child);return elem.localName;
      }
      if (elem.localName == 'column') {
        this._dialog.addColumn(child);return elem.localName;
      }
    }
  };

  Ui5TableSelectDialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'item') {
      try {
        this._dialog.removeItem(child);
      } catch (exc) {}
    } else if (relation == 'column') {
      try {
        this._dialog.removeColumn(child);
      } catch (exc) {}
    }
  };

  Ui5TableSelectDialog.prototype.removeChild = function removeChild(child, elem) {};

  Ui5TableSelectDialog.prototype.attached = function attached() {
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
    if (this.ui5Id) this._dialog = new sap.m.TableSelectDialog(this.ui5Id, props);else this._dialog = new sap.m.TableSelectDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5TableSelectDialog.prototype.detached = function detached() {};

  Ui5TableSelectDialog.prototype.titleChanged = function titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  };

  Ui5TableSelectDialog.prototype.contentHeightChanged = function contentHeightChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentHeight(newValue);
    }
  };

  Ui5TableSelectDialog.prototype.contentWidthChanged = function contentWidthChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setContentWidth(newValue);
    }
  };

  Ui5TableSelectDialog.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setNoDataText(newValue);
    }
  };

  Ui5TableSelectDialog.prototype.multiSelectChanged = function multiSelectChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5TableSelectDialog.prototype.growingThresholdChanged = function growingThresholdChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGrowingThreshold(newValue);
    }
  };

  Ui5TableSelectDialog.prototype.rememberSelectionsChanged = function rememberSelectionsChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setRememberSelections(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5TableSelectDialog, [{
    key: 'UIElement',
    get: function get() {
      return this._dialog;
    }
  }]);

  return Ui5TableSelectDialog;
}(), (_descriptor487 = _applyDecoratedDescriptor(_class166.prototype, 'ui5Id', [_dec593], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor488 = _applyDecoratedDescriptor(_class166.prototype, 'title', [_dec594], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor489 = _applyDecoratedDescriptor(_class166.prototype, 'contentHeight', [_dec595], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor490 = _applyDecoratedDescriptor(_class166.prototype, 'noDataText', [_dec596], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor491 = _applyDecoratedDescriptor(_class166.prototype, 'multiSelect', [_dec597], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor492 = _applyDecoratedDescriptor(_class166.prototype, 'growingThreshold', [_dec598], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor493 = _applyDecoratedDescriptor(_class166.prototype, 'contentWidth', [_dec599], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor494 = _applyDecoratedDescriptor(_class166.prototype, 'rememberSelections', [_dec600], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor495 = _applyDecoratedDescriptor(_class166.prototype, 'confirm', [_dec601], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor496 = _applyDecoratedDescriptor(_class166.prototype, 'search', [_dec602], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor497 = _applyDecoratedDescriptor(_class166.prototype, 'liveChange', [_dec603], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor498 = _applyDecoratedDescriptor(_class166.prototype, 'cancel', [_dec604], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class166)) || _class165) || _class165);
var Ui5Grid = exports.Ui5Grid = (_dec605 = (0, _aureliaTemplating.customElement)('ui5-grid'), _dec606 = (0, _aureliaDependencyInjection.inject)(Element), _dec607 = (0, _aureliaTemplating.bindable)(), _dec605(_class168 = _dec606(_class168 = (_class169 = function () {
  function Ui5Grid(element) {
    _classCallCheck(this, Ui5Grid);

    this._grid = null;

    _initDefineProp(this, 'defaultSpan', _descriptor499, this);

    this.element = element;
  }

  Ui5Grid.prototype.addChild = function addChild(child, elem) {
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
        this._grid.addContent(child);
        break;
      }
    }
  };

  Ui5Grid.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._grid.removeContent(child);
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
}(), (_descriptor499 = _applyDecoratedDescriptor(_class169.prototype, 'defaultSpan', [_dec607], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class169)) || _class168) || _class168);
var Ui5Text = exports.Ui5Text = (_dec608 = (0, _aureliaTemplating.customElement)('ui5-text'), _dec609 = (0, _aureliaDependencyInjection.inject)(Element), _dec610 = (0, _aureliaFramework.computedFrom)('_text'), _dec608(_class171 = _dec609(_class171 = (_class172 = function () {
  function Ui5Text(element) {
    _classCallCheck(this, Ui5Text);

    this._text = null;

    _initDefineProp(this, 'ui5Id', _descriptor500, this);

    _initDefineProp(this, 'text', _descriptor501, this);

    _initDefineProp(this, 'wrapping', _descriptor502, this);

    _initDefineProp(this, 'textAlign', _descriptor503, this);

    _initDefineProp(this, 'maxLines', _descriptor504, this);

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
}(), (_descriptor500 = _applyDecoratedDescriptor(_class172.prototype, 'ui5Id', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor501 = _applyDecoratedDescriptor(_class172.prototype, 'text', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor502 = _applyDecoratedDescriptor(_class172.prototype, 'wrapping', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor503 = _applyDecoratedDescriptor(_class172.prototype, 'textAlign', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return "Begin";
  }
}), _descriptor504 = _applyDecoratedDescriptor(_class172.prototype, 'maxLines', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _applyDecoratedDescriptor(_class172.prototype, 'UIElement', [_dec610], Object.getOwnPropertyDescriptor(_class172.prototype, 'UIElement'), _class172.prototype)), _class172)) || _class171) || _class171);
var Ui5TileContainer = exports.Ui5TileContainer = (_dec611 = (0, _aureliaTemplating.customElement)('ui5-tile-container'), _dec612 = (0, _aureliaDependencyInjection.inject)(Element), _dec611(_class174 = _dec612(_class174 = function () {
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
}()) || _class174) || _class174);
var Ui5TileContent = exports.Ui5TileContent = (_dec613 = (0, _aureliaTemplating.customElement)('ui5-tile-content'), _dec614 = (0, _aureliaDependencyInjection.inject)(Element), _dec615 = (0, _aureliaTemplating.bindable)(), _dec616 = (0, _aureliaTemplating.bindable)(), _dec613(_class176 = _dec614(_class176 = (_class177 = function () {
  function Ui5TileContent(element) {
    _classCallCheck(this, Ui5TileContent);

    this._content = null;

    _initDefineProp(this, 'footer', _descriptor505, this);

    _initDefineProp(this, 'unit', _descriptor506, this);

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
}(), (_descriptor505 = _applyDecoratedDescriptor(_class177.prototype, 'footer', [_dec615], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor506 = _applyDecoratedDescriptor(_class177.prototype, 'unit', [_dec616], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class177)) || _class176) || _class176);

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

var Ui5Title = exports.Ui5Title = (_dec617 = (0, _aureliaTemplating.customElement)('ui5-title'), _dec618 = (0, _aureliaDependencyInjection.inject)(Element), _dec619 = (0, _aureliaTemplating.bindable)(), _dec620 = (0, _aureliaTemplating.bindable)(), _dec621 = (0, _aureliaTemplating.bindable)(), _dec622 = (0, _aureliaTemplating.bindable)(), _dec617(_class179 = _dec618(_class179 = (_class180 = function () {
  function Ui5Title(element) {
    _classCallCheck(this, Ui5Title);

    this._title = null;

    _initDefineProp(this, 'text', _descriptor507, this);

    _initDefineProp(this, 'icon', _descriptor508, this);

    _initDefineProp(this, 'level', _descriptor509, this);

    _initDefineProp(this, 'emphasized', _descriptor510, this);

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
}(), (_descriptor507 = _applyDecoratedDescriptor(_class180.prototype, 'text', [_dec619], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor508 = _applyDecoratedDescriptor(_class180.prototype, 'icon', [_dec620], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor509 = _applyDecoratedDescriptor(_class180.prototype, 'level', [_dec621], {
  enumerable: true,
  initializer: function initializer() {
    return 'Auto';
  }
}), _descriptor510 = _applyDecoratedDescriptor(_class180.prototype, 'emphasized', [_dec622], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class180)) || _class179) || _class179);
var Ui5ToolbarSpacer = exports.Ui5ToolbarSpacer = (_dec623 = (0, _aureliaTemplating.customElement)('ui5-toolbar-spacer'), _dec624 = (0, _aureliaDependencyInjection.inject)(Element), _dec625 = (0, _aureliaTemplating.bindable)(), _dec623(_class182 = _dec624(_class182 = (_class183 = function () {
  function Ui5ToolbarSpacer(element) {
    _classCallCheck(this, Ui5ToolbarSpacer);

    this._spacer = null;

    _initDefineProp(this, 'width', _descriptor511, this);

    this.element = element;
  }

  Ui5ToolbarSpacer.prototype.attached = function attached() {

    this._spacer = new sap.m.ToolbarSpacer({
      width: this.width
    });
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._spacer, this.element);
    }
  };

  Ui5ToolbarSpacer.prototype.widthChanged = function widthChanged(newValue) {
    if (this._spacer !== null) {
      this._spacer.setWidth(newValue);
    }
  };

  return Ui5ToolbarSpacer;
}(), (_descriptor511 = _applyDecoratedDescriptor(_class183.prototype, 'width', [_dec625], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class183)) || _class182) || _class182);
var Ui5Toolbar = exports.Ui5Toolbar = (_dec626 = (0, _aureliaTemplating.customElement)('ui5-toolbar'), _dec627 = (0, _aureliaDependencyInjection.inject)(Element), _dec628 = (0, _aureliaTemplating.bindable)(), _dec629 = (0, _aureliaTemplating.bindable)(), _dec630 = (0, _aureliaTemplating.bindable)(), _dec631 = (0, _aureliaTemplating.bindable)(), _dec632 = (0, _aureliaTemplating.bindable)(), _dec633 = (0, _aureliaTemplating.bindable)(), _dec626(_class185 = _dec627(_class185 = (_class186 = function () {
  function Ui5Toolbar(element) {
    _classCallCheck(this, Ui5Toolbar);

    this._bar = null;
    this._parent = null;

    _initDefineProp(this, 'width', _descriptor512, this);

    _initDefineProp(this, 'active', _descriptor513, this);

    _initDefineProp(this, 'enabled', _descriptor514, this);

    _initDefineProp(this, 'height', _descriptor515, this);

    _initDefineProp(this, 'design', _descriptor516, this);

    _initDefineProp(this, 'press', _descriptor517, this);

    this.element = element;
  }

  Ui5Toolbar.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5Toolbar.prototype.addChild = function addChild(child, elem) {
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
        this._bar.addContent(child);
        return 'content';
      }
    }
  };

  Ui5Toolbar.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'content') {
      this._bar.removeContent(child);
    }
  };

  Ui5Toolbar.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator38 = path, _isArray38 = Array.isArray(_iterator38), _i38 = 0, _iterator38 = _isArray38 ? _iterator38 : _iterator38[Symbol.iterator]();;) {
      if (_isArray38) {
        if (_i38 >= _iterator38.length) break;
        elem = _iterator38[_i38++];
      } else {
        _i38 = _iterator38.next();
        if (_i38.done) break;
        elem = _i38.value;
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
}(), (_descriptor512 = _applyDecoratedDescriptor(_class186.prototype, 'width', [_dec628], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor513 = _applyDecoratedDescriptor(_class186.prototype, 'active', [_dec629], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor514 = _applyDecoratedDescriptor(_class186.prototype, 'enabled', [_dec630], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor515 = _applyDecoratedDescriptor(_class186.prototype, 'height', [_dec631], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor516 = _applyDecoratedDescriptor(_class186.prototype, 'design', [_dec632], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor517 = _applyDecoratedDescriptor(_class186.prototype, 'press', [_dec633], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class186)) || _class185) || _class185);
var Ui5DynamicPageTitle = exports.Ui5DynamicPageTitle = (_dec634 = (0, _aureliaTemplating.customElement)('ui5-dynamic-page-title'), _dec635 = (0, _aureliaDependencyInjection.inject)(Element), _dec634(_class188 = _dec635(_class188 = function () {
  function Ui5DynamicPageTitle(element) {
    _classCallCheck(this, Ui5DynamicPageTitle);

    this._title = null;

    this.element = element;
  }

  Ui5DynamicPageTitle.prototype.defaultFunc = function defaultFunc() {};

  Ui5DynamicPageTitle.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator39 = path, _isArray39 = Array.isArray(_iterator39), _i39 = 0, _iterator39 = _isArray39 ? _iterator39 : _iterator39[Symbol.iterator]();;) {
      if (_isArray39) {
        if (_i39 >= _iterator39.length) break;
        elem = _iterator39[_i39++];
      } else {
        _i39 = _iterator39.next();
        if (_i39.done) break;
        elem = _i39.value;
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
    for (var _iterator40 = path, _isArray40 = Array.isArray(_iterator40), _i40 = 0, _iterator40 = _isArray40 ? _iterator40 : _iterator40[Symbol.iterator]();;) {
      if (_isArray40) {
        if (_i40 >= _iterator40.length) break;
        elem = _iterator40[_i40++];
      } else {
        _i40 = _iterator40.next();
        if (_i40.done) break;
        elem = _i40.value;
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
}()) || _class188) || _class188);
var Ui5UploadCollectionItem = exports.Ui5UploadCollectionItem = (_dec636 = (0, _aureliaTemplating.customElement)('ui5-upload-collection-item'), _dec637 = (0, _aureliaDependencyInjection.inject)(Element), _dec638 = (0, _aureliaTemplating.bindable)(), _dec639 = (0, _aureliaTemplating.bindable)(), _dec640 = (0, _aureliaTemplating.bindable)(), _dec641 = (0, _aureliaTemplating.bindable)(), _dec642 = (0, _aureliaTemplating.bindable)(), _dec643 = (0, _aureliaTemplating.bindable)(), _dec644 = (0, _aureliaTemplating.bindable)(), _dec645 = (0, _aureliaTemplating.bindable)(), _dec646 = (0, _aureliaTemplating.bindable)(), _dec647 = (0, _aureliaTemplating.bindable)(), _dec648 = (0, _aureliaTemplating.bindable)(), _dec649 = (0, _aureliaTemplating.bindable)(), _dec650 = (0, _aureliaTemplating.bindable)(), _dec651 = (0, _aureliaTemplating.bindable)(), _dec636(_class190 = _dec637(_class190 = (_class191 = function () {
  function Ui5UploadCollectionItem(element) {
    _classCallCheck(this, Ui5UploadCollectionItem);

    _initDefineProp(this, 'contributor', _descriptor518, this);

    _initDefineProp(this, 'documentId', _descriptor519, this);

    _initDefineProp(this, 'fileName', _descriptor520, this);

    _initDefineProp(this, 'fileSize', _descriptor521, this);

    _initDefineProp(this, 'enableEdit', _descriptor522, this);

    _initDefineProp(this, 'mimeType', _descriptor523, this);

    _initDefineProp(this, 'thumbnailUrl', _descriptor524, this);

    _initDefineProp(this, 'enableDelete', _descriptor525, this);

    _initDefineProp(this, 'uploadedDate', _descriptor526, this);

    _initDefineProp(this, 'visibleEdit', _descriptor527, this);

    _initDefineProp(this, 'url', _descriptor528, this);

    _initDefineProp(this, 'visibleDelete', _descriptor529, this);

    _initDefineProp(this, 'ariaLabelForPicture', _descriptor530, this);

    _initDefineProp(this, 'selected', _descriptor531, this);

    this._upload = null;
    this._parent = null;
    this._relation = null;


    this.element = element;
  }

  Ui5UploadCollectionItem.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5UploadCollectionItem.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator41 = path, _isArray41 = Array.isArray(_iterator41), _i41 = 0, _iterator41 = _isArray41 ? _iterator41 : _iterator41[Symbol.iterator]();;) {
      if (_isArray41) {
        if (_i41 >= _iterator41.length) break;
        elem = _iterator41[_i41++];
      } else {
        _i41 = _iterator41.next();
        if (_i41.done) break;
        elem = _i41.value;
      }

      if (elem.localName == 'attributes') {
        this._upload.addAttribute(child);
        return elem.localName;
      } else if (elem.localName == 'statuses') {
        this._upload.addStatus(child);
        return elem.localName;
      } else if (elem.localName == 'markers') {
        this._upload.addMarker(child);
        return elem.localName;
      }
    }
  };

  Ui5UploadCollectionItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation === 'attributes' && this._upload) {
      this._upload.removeAttribute(child);
    } else if (relation === 'statuses' && this._upload) {
      this._upload.removeStatus(null);
    } else if (relation === 'markers' && this._upload) {
      this._upload.removeMarker(null);
    }
  };

  Ui5UploadCollectionItem.prototype.attached = function attached() {
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
      ariaLabelForPicture: this.ariaLabelForPicture
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this._relation = this._parent.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5UploadCollectionItem.prototype.detached = function detached() {
    if (this._parent && this._parent.removeChildByRelation) {
      this._parent.removeChildByRelation(this._upload, this._relation);
    } else {
      this._upload.destroy();
    }
  };

  Ui5UploadCollectionItem.prototype.contributorChanged = function contributorChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setContributor(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.documentIdChanged = function documentIdChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setDocumentId(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.fileSizeChanged = function fileSizeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileSize(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.thumbnailUrlChanged = function thumbnailUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setThumbnailUrl(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.enableDeleteChanged = function enableDeleteChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setEnableDelete(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollectionItem.prototype.uploadedDateChanged = function uploadedDateChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadedDate(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollectionItem.prototype.visibleEditChanged = function visibleEditChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setVisibleEdit(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollectionItem.prototype.urlChanged = function urlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUrl(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.visibleDeleteChanged = function visibleDeleteChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setVisibleDelete(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollectionItem.prototype.ariaLabelForPictureChanged = function ariaLabelForPictureChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setAriaLabelForPicture(newValue);
    }
  };

  Ui5UploadCollectionItem.prototype.selectedChanged = function selectedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSelected(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollectionItem.prototype.terminationEnabledChanged = function terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setterminationEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5UploadCollectionItem;
}(), (_descriptor518 = _applyDecoratedDescriptor(_class191.prototype, 'contributor', [_dec638], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor519 = _applyDecoratedDescriptor(_class191.prototype, 'documentId', [_dec639], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor520 = _applyDecoratedDescriptor(_class191.prototype, 'fileName', [_dec640], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor521 = _applyDecoratedDescriptor(_class191.prototype, 'fileSize', [_dec641], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor522 = _applyDecoratedDescriptor(_class191.prototype, 'enableEdit', [_dec642], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor523 = _applyDecoratedDescriptor(_class191.prototype, 'mimeType', [_dec643], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor524 = _applyDecoratedDescriptor(_class191.prototype, 'thumbnailUrl', [_dec644], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor525 = _applyDecoratedDescriptor(_class191.prototype, 'enableDelete', [_dec645], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor526 = _applyDecoratedDescriptor(_class191.prototype, 'uploadedDate', [_dec646], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor527 = _applyDecoratedDescriptor(_class191.prototype, 'visibleEdit', [_dec647], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor528 = _applyDecoratedDescriptor(_class191.prototype, 'url', [_dec648], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor529 = _applyDecoratedDescriptor(_class191.prototype, 'visibleDelete', [_dec649], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor530 = _applyDecoratedDescriptor(_class191.prototype, 'ariaLabelForPicture', [_dec650], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor531 = _applyDecoratedDescriptor(_class191.prototype, 'selected', [_dec651], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class191)) || _class190) || _class190);

var MaterializeFormValidationRenderer = exports.MaterializeFormValidationRenderer = function () {
  function MaterializeFormValidationRenderer() {
    _classCallCheck(this, MaterializeFormValidationRenderer);

    this.className = 'md-input-validation';
    this.classNameFirst = 'md-input-validation-first';
  }

  MaterializeFormValidationRenderer.prototype.render = function render(instruction) {
    var _this16 = this;

    var allElements = new Array();
    for (var _iterator42 = instruction.unrender, _isArray42 = Array.isArray(_iterator42), _i42 = 0, _iterator42 = _isArray42 ? _iterator42 : _iterator42[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray42) {
        if (_i42 >= _iterator42.length) break;
        _ref2 = _iterator42[_i42++];
      } else {
        _i42 = _iterator42.next();
        if (_i42.done) break;
        _ref2 = _i42.value;
      }

      var _ref5 = _ref2;
      var result = _ref5.result,
          elements = _ref5.elements;

      for (var _iterator44 = elements, _isArray44 = Array.isArray(_iterator44), _i44 = 0, _iterator44 = _isArray44 ? _iterator44 : _iterator44[Symbol.iterator]();;) {
        var _ref6;

        if (_isArray44) {
          if (_i44 >= _iterator44.length) break;
          _ref6 = _iterator44[_i44++];
        } else {
          _i44 = _iterator44.next();
          if (_i44.done) break;
          _ref6 = _i44.value;
        }

        var element = _ref6;

        this.remove(element, result);
        if (allElements.indexOf(element) == -1) {
          allElements.push(element);
        }
      }
    }
    for (var _iterator43 = instruction.render, _isArray43 = Array.isArray(_iterator43), _i43 = 0, _iterator43 = _isArray43 ? _iterator43 : _iterator43[Symbol.iterator]();;) {
      var _ref4;

      if (_isArray43) {
        if (_i43 >= _iterator43.length) break;
        _ref4 = _iterator43[_i43++];
      } else {
        _i43 = _iterator43.next();
        if (_i43.done) break;
        _ref4 = _i43.value;
      }

      var _ref7 = _ref4;
      var result = _ref7.result,
          elements = _ref7.elements;

      for (var _iterator45 = elements, _isArray45 = Array.isArray(_iterator45), _i45 = 0, _iterator45 = _isArray45 ? _iterator45 : _iterator45[Symbol.iterator]();;) {
        var _ref8;

        if (_isArray45) {
          if (_i45 >= _iterator45.length) break;
          _ref8 = _iterator45[_i45++];
        } else {
          _i45 = _iterator45.next();
          if (_i45.done) break;
          _ref8 = _i45.value;
        }

        var _element = _ref8;

        this.add(_element, result);
        if (allElements.indexOf(_element) == -1) {
          allElements.push(_element);
        }
      }
    }
    allElements.forEach(function (e) {
      return _this16.underlineInput(e);
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

var Ui5UploadCollectionParameter = exports.Ui5UploadCollectionParameter = (_dec652 = (0, _aureliaTemplating.customElement)('ui5-upload-collection-parameter'), _dec653 = (0, _aureliaDependencyInjection.inject)(Element), _dec654 = (0, _aureliaTemplating.bindable)(), _dec655 = (0, _aureliaTemplating.bindable)(), _dec652(_class194 = _dec653(_class194 = (_class195 = function () {
  function Ui5UploadCollectionParameter(element) {
    _classCallCheck(this, Ui5UploadCollectionParameter);

    _initDefineProp(this, 'name', _descriptor532, this);

    _initDefineProp(this, 'value', _descriptor533, this);

    this._parameter = null;
    this._parent = null;
    this._relation = null;

    this.element = element;
  }

  Ui5UploadCollectionParameter.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5UploadCollectionParameter.prototype.addChild = function addChild(child, elem) {};

  Ui5UploadCollectionParameter.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {};

  Ui5UploadCollectionParameter.prototype.attached = function attached() {
    var attributeManager = new AttributeManager(this.element);
    this._parameter = new sap.m.UploadCollectionParameter({
      name: this.name,
      value: this.value
    });

    if ($(this.element).parents("[ui5-container]").length > 0) {
      this._parent = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
      this.relation = this._parent.addChild(this._parameter, this.element);
    }
  };

  Ui5UploadCollectionParameter.prototype.detached = function detached() {
    if (this._parent && this._parameter.removeChildByRelation) {
      this._parent.removeChildByRelation(this._parameter, this.relation);
    }
  };

  Ui5UploadCollectionParameter.prototype.nameChanged = function nameChanged(newValue) {
    if (this._parameter !== null) {
      this._parameter.setName(newValue);
    }
  };

  Ui5UploadCollectionParameter.prototype.valueChanged = function valueChanged(newValue) {
    if (this._parameter !== null) {
      this._parameter.setValue(newValue);
    }
  };

  _createClass(Ui5UploadCollectionParameter, [{
    key: 'UIElement',
    get: function get() {
      return this._parameter;
    }
  }]);

  return Ui5UploadCollectionParameter;
}(), (_descriptor532 = _applyDecoratedDescriptor(_class195.prototype, 'name', [_dec654], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor533 = _applyDecoratedDescriptor(_class195.prototype, 'value', [_dec655], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class195)) || _class194) || _class194);
var Ui5ViewSettingsDialog = exports.Ui5ViewSettingsDialog = (_dec656 = (0, _aureliaTemplating.customElement)('ui5-view-settings-dialog'), _dec657 = (0, _aureliaDependencyInjection.inject)(Element), _dec658 = (0, _aureliaTemplating.bindable)(), _dec659 = (0, _aureliaTemplating.bindable)(), _dec660 = (0, _aureliaTemplating.bindable)(), _dec661 = (0, _aureliaTemplating.bindable)(), _dec662 = (0, _aureliaTemplating.bindable)(), _dec663 = (0, _aureliaTemplating.bindable)(), _dec664 = (0, _aureliaTemplating.bindable)(), _dec665 = (0, _aureliaTemplating.bindable)(), _dec656(_class197 = _dec657(_class197 = (_class198 = function () {
  function Ui5ViewSettingsDialog(element) {
    _classCallCheck(this, Ui5ViewSettingsDialog);

    this._dialog = null;
    this._parent = null;

    _initDefineProp(this, 'ui5Id', _descriptor534, this);

    _initDefineProp(this, 'title', _descriptor535, this);

    _initDefineProp(this, 'sortDescending', _descriptor536, this);

    _initDefineProp(this, 'groupDescending', _descriptor537, this);

    _initDefineProp(this, 'confirm', _descriptor538, this);

    _initDefineProp(this, 'cancel', _descriptor539, this);

    _initDefineProp(this, 'resetFilters', _descriptor540, this);

    _initDefineProp(this, 'filterDetailPageOpened', _descriptor541, this);

    this.element = element;
    this.attributeManager = new AttributeManager(this.element);
  }

  Ui5ViewSettingsDialog.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5ViewSettingsDialog.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator46 = path, _isArray46 = Array.isArray(_iterator46), _i46 = 0, _iterator46 = _isArray46 ? _iterator46 : _iterator46[Symbol.iterator]();;) {
      if (_isArray46) {
        if (_i46 >= _iterator46.length) break;
        elem = _iterator46[_i46++];
      } else {
        _i46 = _iterator46.next();
        if (_i46.done) break;
        elem = _i46.value;
      }

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
  };

  Ui5ViewSettingsDialog.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'sortItems') {} else if (relation == 'groupItems') {
      this._dialog.removeGroupItem(child);
    } else if (relation == 'filterItems') {
      this._dialog.removeFilterItem(child);
    } else if (relation == 'presetFilterItems') {
      this._dialog.removePresetFilterItem(child);
    } else if (relation == 'customTabs') {
      this._dialog.removeCustomTab(child);
    }
  };

  Ui5ViewSettingsDialog.prototype.removeChild = function removeChild(child, elem) {};

  Ui5ViewSettingsDialog.prototype.attached = function attached() {
    var props = {
      icon: this.icon,
      title: this.title,
      sortDescending: getBooleanFromAttributeValue(this.sortDescending),
      groupDescending: getBooleanFromAttributeValue(this.groupDescending),
      confirm: this.confirm,
      cancel: this.cancel,
      beforeClose: this.beforeClose,
      filterDetailPageOpened: this.filterDetailPageOpened
    };
    if (this.ui5Id) this._dialog = new sap.m.ViewSettingsDialog(this.ui5Id, props);else this._dialog = new sap.m.ViewSettingsDialog(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });
  };

  Ui5ViewSettingsDialog.prototype.detached = function detached() {};

  Ui5ViewSettingsDialog.prototype.titleChanged = function titleChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setTitle(newValue);
    }
  };

  Ui5ViewSettingsDialog.prototype.sortDescendingChanged = function sortDescendingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setSortDescending(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ViewSettingsDialog.prototype.groupDescendingChanged = function groupDescendingChanged(newValue) {
    if (this._dialog !== null) {
      this._dialog.setGroupDescending(getBooleanFromAttributeValue(newValue));
    }
  };

  _createClass(Ui5ViewSettingsDialog, [{
    key: 'UIElement',
    get: function get() {
      return this._dialog;
    }
  }]);

  return Ui5ViewSettingsDialog;
}(), (_descriptor534 = _applyDecoratedDescriptor(_class198.prototype, 'ui5Id', [_dec658], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor535 = _applyDecoratedDescriptor(_class198.prototype, 'title', [_dec659], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor536 = _applyDecoratedDescriptor(_class198.prototype, 'sortDescending', [_dec660], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor537 = _applyDecoratedDescriptor(_class198.prototype, 'groupDescending', [_dec661], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor538 = _applyDecoratedDescriptor(_class198.prototype, 'confirm', [_dec662], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor539 = _applyDecoratedDescriptor(_class198.prototype, 'cancel', [_dec663], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor540 = _applyDecoratedDescriptor(_class198.prototype, 'resetFilters', [_dec664], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor541 = _applyDecoratedDescriptor(_class198.prototype, 'filterDetailPageOpened', [_dec665], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class198)) || _class197) || _class197);
var Ui5TabContainer = exports.Ui5TabContainer = (_dec666 = (0, _aureliaTemplating.customElement)('ui5-tab-container'), _dec667 = (0, _aureliaDependencyInjection.inject)(Element), _dec668 = (0, _aureliaTemplating.bindable)(), _dec669 = (0, _aureliaTemplating.bindable)(), _dec670 = (0, _aureliaTemplating.bindable)(), _dec671 = (0, _aureliaTemplating.bindable)(), _dec672 = (0, _aureliaTemplating.bindable)(), _dec666(_class200 = _dec667(_class200 = (_class201 = function () {
  function Ui5TabContainer(element) {
    _classCallCheck(this, Ui5TabContainer);

    _initDefineProp(this, 'showAddNewButton', _descriptor542, this);

    _initDefineProp(this, 'selectedItem', _descriptor543, this);

    _initDefineProp(this, 'itemClose', _descriptor544, this);

    _initDefineProp(this, 'itemSelect', _descriptor545, this);

    _initDefineProp(this, 'addNewButtonPress', _descriptor546, this);

    this._tab = null;

    this.element = element;
  }

  Ui5TabContainer.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5TabContainer.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator47 = path, _isArray47 = Array.isArray(_iterator47), _i47 = 0, _iterator47 = _isArray47 ? _iterator47 : _iterator47[Symbol.iterator]();;) {
      if (_isArray47) {
        if (_i47 >= _iterator47.length) break;
        elem = _iterator47[_i47++];
      } else {
        _i47 = _iterator47.next();
        if (_i47.done) break;
        elem = _i47.value;
      }

      if (elem.localName == 'content') {
        this._tab.addItem(child);
        return elem.localName;
      }
    }
  };

  Ui5TabContainer.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation === 'content' && this._tab && child) {}
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
}(), (_descriptor542 = _applyDecoratedDescriptor(_class201.prototype, 'showAddNewButton', [_dec668], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor543 = _applyDecoratedDescriptor(_class201.prototype, 'selectedItem', [_dec669], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor544 = _applyDecoratedDescriptor(_class201.prototype, 'itemClose', [_dec670], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor545 = _applyDecoratedDescriptor(_class201.prototype, 'itemSelect', [_dec671], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor546 = _applyDecoratedDescriptor(_class201.prototype, 'addNewButtonPress', [_dec672], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class201)) || _class200) || _class200);
var Ui5ViewSettingsFilterItem = exports.Ui5ViewSettingsFilterItem = (_dec673 = (0, _aureliaTemplating.customElement)('ui5-view-settings-filter-item'), _dec674 = (0, _aureliaDependencyInjection.inject)(Element), _dec675 = (0, _aureliaTemplating.bindable)(), _dec676 = (0, _aureliaTemplating.bindable)(), _dec677 = (0, _aureliaTemplating.bindable)(), _dec678 = (0, _aureliaTemplating.bindable)(), _dec679 = (0, _aureliaTemplating.bindable)(), _dec680 = (0, _aureliaTemplating.bindable)(), _dec681 = (0, _aureliaTemplating.bindable)(), _dec673(_class203 = _dec674(_class203 = (_class204 = function (_Ui5Item2) {
  _inherits(Ui5ViewSettingsFilterItem, _Ui5Item2);

  function Ui5ViewSettingsFilterItem(element) {
    _classCallCheck(this, Ui5ViewSettingsFilterItem);

    var _this17 = _possibleConstructorReturn(this, _Ui5Item2.call(this, element));

    _this17._item = null;
    _this17._container = null;

    _initDefineProp(_this17, 'multiSelect', _descriptor547, _this17);

    _initDefineProp(_this17, 'selected', _descriptor548, _this17);

    _initDefineProp(_this17, 'itemPropertyChanged', _descriptor549, _this17);

    _initDefineProp(_this17, 'key', _descriptor550, _this17);

    _initDefineProp(_this17, 'enabled', _descriptor551, _this17);

    _initDefineProp(_this17, 'text', _descriptor552, _this17);

    _initDefineProp(_this17, 'textDirection', _descriptor553, _this17);

    _this17.element = element;
    _this17.attributeManager = new AttributeManager(_this17.element);

    return _this17;
  }

  Ui5ViewSettingsFilterItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5ViewSettingsFilterItem.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator48 = path, _isArray48 = Array.isArray(_iterator48), _i48 = 0, _iterator48 = _isArray48 ? _iterator48 : _iterator48[Symbol.iterator]();;) {
      if (_isArray48) {
        if (_i48 >= _iterator48.length) break;
        elem = _iterator48[_i48++];
      } else {
        _i48 = _iterator48.next();
        if (_i48.done) break;
        elem = _i48.value;
      }

      if (elem.localName == 'items') {
        this._item.addItem(child);
        return 'items';
      }
    }
  };

  Ui5ViewSettingsFilterItem.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation == 'items') {
      this._item.removeItem(child);
    }
  };

  Ui5ViewSettingsFilterItem.prototype.attached = function attached() {
    var props = {
      multiSelect: getBooleanFromAttributeValue(this.multiSelect),
      selected: getBooleanFromAttributeValue(this.selected),
      itemPropertyChanged: this.itemPropertyChanged
    };
    _Ui5Item2.prototype.fillProperties.call(this, props);
    this._item = new sap.m.ViewSettingsFilterItem(props);
    this.attributeManager.addAttributes({ "ui5-dialog-id": this.ui5Id });
    this.attributeManager.addAttributes({ "ui5-layout": '' });
    this.attributeManager.addAttributes({ "ui5-container": '' });

    this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  };

  Ui5ViewSettingsFilterItem.prototype.detached = function detached() {
    if (this._container && this._container.removeChildByRelation) this._container.removeChildByRelation(this._item, this._relation);
  };

  Ui5ViewSettingsFilterItem.prototype.selectedChanged = function selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5ViewSettingsFilterItem.prototype.multiSelectChanged = function multiSelectChanged(newValue) {
    if (this._item !== null) {
      this._item.setMultiSelect(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5ViewSettingsFilterItem;
}(Ui5Item), (_descriptor547 = _applyDecoratedDescriptor(_class204.prototype, 'multiSelect', [_dec675], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor548 = _applyDecoratedDescriptor(_class204.prototype, 'selected', [_dec676], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor549 = _applyDecoratedDescriptor(_class204.prototype, 'itemPropertyChanged', [_dec677], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor550 = _applyDecoratedDescriptor(_class204.prototype, 'key', [_dec678], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor551 = _applyDecoratedDescriptor(_class204.prototype, 'enabled', [_dec679], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor552 = _applyDecoratedDescriptor(_class204.prototype, 'text', [_dec680], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor553 = _applyDecoratedDescriptor(_class204.prototype, 'textDirection', [_dec681], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class204)) || _class203) || _class203);
var Ui5Wizard = exports.Ui5Wizard = (_dec682 = (0, _aureliaTemplating.customElement)('ui5-wizard'), _dec683 = (0, _aureliaDependencyInjection.inject)(Element), _dec684 = (0, _aureliaTemplating.bindable)(), _dec685 = (0, _aureliaTemplating.bindable)(), _dec686 = (0, _aureliaTemplating.bindable)(), _dec687 = (0, _aureliaTemplating.bindable)(), _dec688 = (0, _aureliaTemplating.bindable)(), _dec689 = (0, _aureliaTemplating.bindable)(), _dec690 = (0, _aureliaTemplating.bindable)(), _dec691 = (0, _aureliaTemplating.bindable)(), _dec692 = (0, _aureliaFramework.computedFrom)('_wizard'), _dec682(_class206 = _dec683(_class206 = (_class207 = function () {
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

    _initDefineProp(this, 'width', _descriptor554, this);

    _initDefineProp(this, 'height', _descriptor555, this);

    _initDefineProp(this, 'showNextButton', _descriptor556, this);

    _initDefineProp(this, 'finishButtonText', _descriptor557, this);

    _initDefineProp(this, 'enableBranching', _descriptor558, this);

    _initDefineProp(this, 'stepActivate', _descriptor559, this);

    _initDefineProp(this, 'complete', _descriptor560, this);

    _initDefineProp(this, 'lastStep', _descriptor561, this);

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
    var that = this;
    this._wizard = new sap.m.Wizard(params);
    this._wizard.attachStepActivate(function (event) {
      that.lastStep = event.mParameters.index == that._wizard.getSteps().length;
    });
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
}(), (_descriptor554 = _applyDecoratedDescriptor(_class207.prototype, 'width', [_dec684], {
  enumerable: true,
  initializer: function initializer() {
    return 'auto';
  }
}), _descriptor555 = _applyDecoratedDescriptor(_class207.prototype, 'height', [_dec685], {
  enumerable: true,
  initializer: function initializer() {
    return '100%';
  }
}), _descriptor556 = _applyDecoratedDescriptor(_class207.prototype, 'showNextButton', [_dec686], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor557 = _applyDecoratedDescriptor(_class207.prototype, 'finishButtonText', [_dec687], {
  enumerable: true,
  initializer: function initializer() {
    return "fortfahren";
  }
}), _descriptor558 = _applyDecoratedDescriptor(_class207.prototype, 'enableBranching', [_dec688], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor559 = _applyDecoratedDescriptor(_class207.prototype, 'stepActivate', [_dec689], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor560 = _applyDecoratedDescriptor(_class207.prototype, 'complete', [_dec690], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor561 = _applyDecoratedDescriptor(_class207.prototype, 'lastStep', [_dec691], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _applyDecoratedDescriptor(_class207.prototype, 'UIElement', [_dec692], Object.getOwnPropertyDescriptor(_class207.prototype, 'UIElement'), _class207.prototype)), _class207)) || _class206) || _class206);
var Ui5WizardStep = exports.Ui5WizardStep = (_dec693 = (0, _aureliaTemplating.customElement)('ui5-wizard-step'), _dec694 = (0, _aureliaDependencyInjection.inject)(Element), _dec693(_class209 = _dec694(_class209 = (_class210 = function () {
  function Ui5WizardStep(element) {
    _classCallCheck(this, Ui5WizardStep);

    this._step = null;

    _initDefineProp(this, 'nextStep', _descriptor562, this);

    _initDefineProp(this, 'subsequentSteps', _descriptor563, this);

    _initDefineProp(this, 'title', _descriptor564, this);

    _initDefineProp(this, 'icon', _descriptor565, this);

    _initDefineProp(this, 'validated', _descriptor566, this);

    _initDefineProp(this, 'complete', _descriptor567, this);

    _initDefineProp(this, 'activate', _descriptor568, this);

    this.element = element;
  }

  Ui5WizardStep.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator49 = path, _isArray49 = Array.isArray(_iterator49), _i49 = 0, _iterator49 = _isArray49 ? _iterator49 : _iterator49[Symbol.iterator]();;) {
      if (_isArray49) {
        if (_i49 >= _iterator49.length) break;
        elem = _iterator49[_i49++];
      } else {
        _i49 = _iterator49.next();
        if (_i49.done) break;
        elem = _i49.value;
      }

      if (elem.localName == 'step') {
        this._step.addContent(child);
        break;
      }
    }
  };

  Ui5WizardStep.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator50 = path, _isArray50 = Array.isArray(_iterator50), _i50 = 0, _iterator50 = _isArray50 ? _iterator50 : _iterator50[Symbol.iterator]();;) {
      if (_isArray50) {
        if (_i50 >= _iterator50.length) break;
        elem = _iterator50[_i50++];
      } else {
        _i50 = _iterator50.next();
        if (_i50.done) break;
        elem = _i50.value;
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
}(), (_descriptor562 = _applyDecoratedDescriptor(_class210.prototype, 'nextStep', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor563 = _applyDecoratedDescriptor(_class210.prototype, 'subsequentSteps', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor564 = _applyDecoratedDescriptor(_class210.prototype, 'title', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor565 = _applyDecoratedDescriptor(_class210.prototype, 'icon', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor566 = _applyDecoratedDescriptor(_class210.prototype, 'validated', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor567 = _applyDecoratedDescriptor(_class210.prototype, 'complete', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor568 = _applyDecoratedDescriptor(_class210.prototype, 'activate', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class210)) || _class209) || _class209);
var Ui5ViewSettingsItem = exports.Ui5ViewSettingsItem = (_dec695 = (0, _aureliaTemplating.customElement)('ui5-view-settings-item'), _dec696 = (0, _aureliaDependencyInjection.inject)(Element), _dec697 = (0, _aureliaTemplating.bindable)(), _dec698 = (0, _aureliaTemplating.bindable)(), _dec699 = (0, _aureliaTemplating.bindable)(), _dec700 = (0, _aureliaTemplating.bindable)(), _dec701 = (0, _aureliaTemplating.bindable)(), _dec702 = (0, _aureliaTemplating.bindable)(), _dec695(_class212 = _dec696(_class212 = (_class213 = function (_Ui5Item3) {
  _inherits(Ui5ViewSettingsItem, _Ui5Item3);

  function Ui5ViewSettingsItem(element) {
    _classCallCheck(this, Ui5ViewSettingsItem);

    var _this18 = _possibleConstructorReturn(this, _Ui5Item3.call(this, element));

    _this18._item = null;
    _this18._container = null;

    _initDefineProp(_this18, 'selected', _descriptor569, _this18);

    _initDefineProp(_this18, 'itemPropertyChanged', _descriptor570, _this18);

    _initDefineProp(_this18, 'key', _descriptor571, _this18);

    _initDefineProp(_this18, 'enabled', _descriptor572, _this18);

    _initDefineProp(_this18, 'text', _descriptor573, _this18);

    _initDefineProp(_this18, 'textDirection', _descriptor574, _this18);

    _this18.element = element;
    return _this18;
  }

  Ui5ViewSettingsItem.prototype.defaultFunc = function defaultFunc() {};

  Ui5ViewSettingsItem.prototype.attached = function attached() {
    var props = {
      selected: getBooleanFromAttributeValue(this.selected),
      itemPropertyChanged: this.itemPropertyChanged
    };
    _Ui5Item3.prototype.fillProperties.call(this, props);
    this._item = new sap.m.ViewSettingsItem(props);
    this._container = $(this.element).parents("[ui5-container]")[0].au.controller.viewModel;
    this._relation = this._container.addChild(this._item, this.element);
  };

  Ui5ViewSettingsItem.prototype.detached = function detached() {
    if (this._container && this._container.removeChildByRelation) this._container.removeChildByRelation(this._item, this._relation);
  };

  Ui5ViewSettingsItem.prototype.addChild = function addChild(child, elem) {};

  Ui5ViewSettingsItem.prototype.selectedChanged = function selectedChanged(newValue) {
    if (this._item !== null) {
      this._item.setSelected(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5ViewSettingsItem;
}(Ui5Item), (_descriptor569 = _applyDecoratedDescriptor(_class213.prototype, 'selected', [_dec697], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor570 = _applyDecoratedDescriptor(_class213.prototype, 'itemPropertyChanged', [_dec698], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor571 = _applyDecoratedDescriptor(_class213.prototype, 'key', [_dec699], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor572 = _applyDecoratedDescriptor(_class213.prototype, 'enabled', [_dec700], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor573 = _applyDecoratedDescriptor(_class213.prototype, 'text', [_dec701], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor574 = _applyDecoratedDescriptor(_class213.prototype, 'textDirection', [_dec702], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
})), _class213)) || _class212) || _class212);
var Ui5VerticalLayout = exports.Ui5VerticalLayout = (_dec703 = (0, _aureliaTemplating.customElement)('ui5-vertical-layout'), _dec704 = (0, _aureliaDependencyInjection.inject)(Element), _dec703(_class215 = _dec704(_class215 = function () {
  function Ui5VerticalLayout(element) {
    _classCallCheck(this, Ui5VerticalLayout);

    this._layout = null;

    this.element = element;
  }

  Ui5VerticalLayout.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5VerticalLayout.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator51 = path, _isArray51 = Array.isArray(_iterator51), _i51 = 0, _iterator51 = _isArray51 ? _iterator51 : _iterator51[Symbol.iterator]();;) {
      if (_isArray51) {
        if (_i51 >= _iterator51.length) break;
        elem = _iterator51[_i51++];
      } else {
        _i51 = _iterator51.next();
        if (_i51.done) break;
        elem = _i51.value;
      }

      if (elem.localName == 'content') {
        this._layout.addContent(child);
        break;
      }
    }
  };

  Ui5VerticalLayout.prototype.removeChild = function removeChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator52 = path, _isArray52 = Array.isArray(_iterator52), _i52 = 0, _iterator52 = _isArray52 ? _iterator52 : _iterator52[Symbol.iterator]();;) {
      if (_isArray52) {
        if (_i52 >= _iterator52.length) break;
        elem = _iterator52[_i52++];
      } else {
        _i52 = _iterator52.next();
        if (_i52.done) break;
        elem = _i52.value;
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
}()) || _class215) || _class215);
var Ui5Shell = exports.Ui5Shell = (_dec705 = (0, _aureliaTemplating.customElement)('ui5-shell'), _dec706 = (0, _aureliaDependencyInjection.inject)(Element), _dec707 = (0, _aureliaTemplating.bindable)(), _dec708 = (0, _aureliaTemplating.bindable)(), _dec705(_class217 = _dec706(_class217 = (_class218 = function () {
  function Ui5Shell(element) {
    _classCallCheck(this, Ui5Shell);

    _initDefineProp(this, 'title', _descriptor575, this);

    _initDefineProp(this, 'appWidthLimited', _descriptor576, this);

    this._shell = null;

    this.element = element;
  }

  Ui5Shell.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator53 = path, _isArray53 = Array.isArray(_iterator53), _i53 = 0, _iterator53 = _isArray53 ? _iterator53 : _iterator53[Symbol.iterator]();;) {
      if (_isArray53) {
        if (_i53 >= _iterator53.length) break;
        elem = _iterator53[_i53++];
      } else {
        _i53 = _iterator53.next();
        if (_i53.done) break;
        elem = _i53.value;
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
}(), (_descriptor575 = _applyDecoratedDescriptor(_class218.prototype, 'title', [_dec707], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor576 = _applyDecoratedDescriptor(_class218.prototype, 'appWidthLimited', [_dec708], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
})), _class218)) || _class217) || _class217);
var Ui5UploadCollection = exports.Ui5UploadCollection = (_dec709 = (0, _aureliaTemplating.customElement)('ui5-upload-collection'), _dec710 = (0, _aureliaDependencyInjection.inject)(Element), _dec711 = (0, _aureliaTemplating.bindable)(), _dec712 = (0, _aureliaTemplating.bindable)(), _dec713 = (0, _aureliaTemplating.bindable)(), _dec714 = (0, _aureliaTemplating.bindable)(), _dec715 = (0, _aureliaTemplating.bindable)(), _dec716 = (0, _aureliaTemplating.bindable)(), _dec717 = (0, _aureliaTemplating.bindable)(), _dec718 = (0, _aureliaTemplating.bindable)(), _dec719 = (0, _aureliaTemplating.bindable)(), _dec720 = (0, _aureliaTemplating.bindable)(), _dec721 = (0, _aureliaTemplating.bindable)(), _dec722 = (0, _aureliaTemplating.bindable)(), _dec723 = (0, _aureliaTemplating.bindable)(), _dec724 = (0, _aureliaTemplating.bindable)(), _dec725 = (0, _aureliaTemplating.bindable)(), _dec726 = (0, _aureliaTemplating.bindable)(), _dec727 = (0, _aureliaTemplating.bindable)(), _dec728 = (0, _aureliaTemplating.bindable)(), _dec729 = (0, _aureliaTemplating.bindable)(), _dec730 = (0, _aureliaTemplating.bindable)(), _dec731 = (0, _aureliaTemplating.bindable)(), _dec732 = (0, _aureliaTemplating.bindable)(), _dec733 = (0, _aureliaTemplating.bindable)(), _dec734 = (0, _aureliaTemplating.bindable)(), _dec735 = (0, _aureliaTemplating.bindable)(), _dec736 = (0, _aureliaTemplating.bindable)(), _dec709(_class220 = _dec710(_class220 = (_class221 = function () {
  function Ui5UploadCollection(element) {
    _classCallCheck(this, Ui5UploadCollection);

    _initDefineProp(this, 'fileType', _descriptor577, this);

    _initDefineProp(this, 'maximumFilenameLength', _descriptor578, this);

    _initDefineProp(this, 'maximumFileSize', _descriptor579, this);

    _initDefineProp(this, 'mimeType', _descriptor580, this);

    _initDefineProp(this, 'multiple', _descriptor581, this);

    _initDefineProp(this, 'noDataText', _descriptor582, this);

    _initDefineProp(this, 'noDataDescription', _descriptor583, this);

    _initDefineProp(this, 'sameFilenameAllowed', _descriptor584, this);

    _initDefineProp(this, 'showSeperators', _descriptor585, this);

    _initDefineProp(this, 'uploadEnabled', _descriptor586, this);

    _initDefineProp(this, 'uploadUrl', _descriptor587, this);

    _initDefineProp(this, 'instantUpload', _descriptor588, this);

    _initDefineProp(this, 'numberOfAttachmentsText', _descriptor589, this);

    _initDefineProp(this, 'mode', _descriptor590, this);

    _initDefineProp(this, 'uploadButtonVisible', _descriptor591, this);

    _initDefineProp(this, 'terminationEnabled', _descriptor592, this);

    _initDefineProp(this, 'change', _descriptor593, this);

    _initDefineProp(this, 'fileDeleted', _descriptor594, this);

    _initDefineProp(this, 'filenameLengthExceeded', _descriptor595, this);

    _initDefineProp(this, 'fileRenamed', _descriptor596, this);

    _initDefineProp(this, 'fileSizeExceeded', _descriptor597, this);

    _initDefineProp(this, 'typeMismatch', _descriptor598, this);

    _initDefineProp(this, 'uploadComplete', _descriptor599, this);

    _initDefineProp(this, 'uploadTerminated', _descriptor600, this);

    _initDefineProp(this, 'beforeUploadStarts', _descriptor601, this);

    _initDefineProp(this, 'selectionChange', _descriptor602, this);

    this._upload = null;

    this.element = element;
  }

  Ui5UploadCollection.prototype.defaultFunc = function defaultFunc(event) {};

  Ui5UploadCollection.prototype.addChild = function addChild(child, elem) {
    var path = $(elem).parentsUntil(this.element);
    for (var _iterator54 = path, _isArray54 = Array.isArray(_iterator54), _i54 = 0, _iterator54 = _isArray54 ? _iterator54 : _iterator54[Symbol.iterator]();;) {
      if (_isArray54) {
        if (_i54 >= _iterator54.length) break;
        elem = _iterator54[_i54++];
      } else {
        _i54 = _iterator54.next();
        if (_i54.done) break;
        elem = _i54.value;
      }

      if (elem.localName == 'items') {
        this._upload.addItem(child);
        return elem.localName;
      } else if (elem.localName == 'toolbar') {
        this._upload.setToolbar(child);
        return elem.localName;
      } else if (elem.localName == 'infotoolbar') {
        this._upload.setInfoToolbar(child);
        return elem.localName;
      } else if (elem.localName == 'parameter') {
        this._upload.addHeaderParameter(child);
        return elem.localName;
      }
    }
  };

  Ui5UploadCollection.prototype.removeChildByRelation = function removeChildByRelation(child, relation) {
    if (relation === 'items' && this._upload) {
      this._upload.removeItem(child);
    } else if (relation === 'toolbar' && this._upload) {
      this._upload.setToolbar(null);
    } else if (relation === 'infotoolbar' && this._upload) {
      this._upload.setInfoToolbar(null);
    } else if (relation === 'parameter' && this._upload) {
      this._upload.removeHeaderParameter(null);
    }
  };

  Ui5UploadCollection.prototype.attached = function attached() {
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

    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.addChild(this._upload, this.element);
      attributeManager.addAttributes({ "ui5-container": '' });
    } else {
      this._upload.placeAt(this.element.parentElement);
      attributeManager.addAttributes({ "ui5-container": '' });
      attributeManager.addClasses("ui5-hide");
    }
  };

  Ui5UploadCollection.prototype.detached = function detached() {
    if ($(this.element).parents("[ui5-container]").length > 0) {
      $(this.element).parents("[ui5-container]")[0].au.controller.viewModel.removeChild(this._upload, this.element);
    } else {
      this._upload.destroy();
    }
  };

  Ui5UploadCollection.prototype.fileTypeChanged = function fileTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setFileType(newValue);
    }
  };

  Ui5UploadCollection.prototype.maximumFilenameLengthChanged = function maximumFilenameLengthChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMaximumFilenameLength(newValue);
    }
  };

  Ui5UploadCollection.prototype.mimeTypeChanged = function mimeTypeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMimeType(newValue);
    }
  };

  Ui5UploadCollection.prototype.multipleChanged = function multipleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMultiple(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollection.prototype.noDataTextChanged = function noDataTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataText(newValue);
    }
  };

  Ui5UploadCollection.prototype.noDataDescriptionChanged = function noDataDescriptionChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNoDataDescription(newValue);
    }
  };

  Ui5UploadCollection.prototype.sameFilenameAllowedChanged = function sameFilenameAllowedChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setSameFilenameAllowed(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollection.prototype.showSeperatorsChanged = function showSeperatorsChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setshowSeperators(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollection.prototype.uploadEnabledChanged = function uploadEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollection.prototype.uploadUrlChanged = function uploadUrlChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadUrl(newValue);
    }
  };

  Ui5UploadCollection.prototype.instantUploadChanged = function instantUploadChanged(newValue) {
    if (this._upload !== null) {}
  };

  Ui5UploadCollection.prototype.numberOfAttachmentsTextChanged = function numberOfAttachmentsTextChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setNumberOfAttachmentsText(newValue);
    }
  };

  Ui5UploadCollection.prototype.modeChanged = function modeChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setMode(newValue);
    }
  };

  Ui5UploadCollection.prototype.uploadButtonVisibleChanged = function uploadButtonVisibleChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setUploadButtonVisible(getBooleanFromAttributeValue(newValue));
    }
  };

  Ui5UploadCollection.prototype.terminationEnabledChanged = function terminationEnabledChanged(newValue) {
    if (this._upload !== null) {
      this._upload.setTerminationEnabled(getBooleanFromAttributeValue(newValue));
    }
  };

  return Ui5UploadCollection;
}(), (_descriptor577 = _applyDecoratedDescriptor(_class221.prototype, 'fileType', [_dec711], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor578 = _applyDecoratedDescriptor(_class221.prototype, 'maximumFilenameLength', [_dec712], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor579 = _applyDecoratedDescriptor(_class221.prototype, 'maximumFileSize', [_dec713], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor580 = _applyDecoratedDescriptor(_class221.prototype, 'mimeType', [_dec714], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor581 = _applyDecoratedDescriptor(_class221.prototype, 'multiple', [_dec715], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor582 = _applyDecoratedDescriptor(_class221.prototype, 'noDataText', [_dec716], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor583 = _applyDecoratedDescriptor(_class221.prototype, 'noDataDescription', [_dec717], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor584 = _applyDecoratedDescriptor(_class221.prototype, 'sameFilenameAllowed', [_dec718], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor585 = _applyDecoratedDescriptor(_class221.prototype, 'showSeperators', [_dec719], {
  enumerable: true,
  initializer: function initializer() {
    return 'All';
  }
}), _descriptor586 = _applyDecoratedDescriptor(_class221.prototype, 'uploadEnabled', [_dec720], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor587 = _applyDecoratedDescriptor(_class221.prototype, 'uploadUrl', [_dec721], {
  enumerable: true,
  initializer: function initializer() {
    return '../../../upload';
  }
}), _descriptor588 = _applyDecoratedDescriptor(_class221.prototype, 'instantUpload', [_dec722], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor589 = _applyDecoratedDescriptor(_class221.prototype, 'numberOfAttachmentsText', [_dec723], {
  enumerable: true,
  initializer: function initializer() {
    return null;
  }
}), _descriptor590 = _applyDecoratedDescriptor(_class221.prototype, 'mode', [_dec724], {
  enumerable: true,
  initializer: function initializer() {
    return 'None';
  }
}), _descriptor591 = _applyDecoratedDescriptor(_class221.prototype, 'uploadButtonVisible', [_dec725], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor592 = _applyDecoratedDescriptor(_class221.prototype, 'terminationEnabled', [_dec726], {
  enumerable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor593 = _applyDecoratedDescriptor(_class221.prototype, 'change', [_dec727], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor594 = _applyDecoratedDescriptor(_class221.prototype, 'fileDeleted', [_dec728], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor595 = _applyDecoratedDescriptor(_class221.prototype, 'filenameLengthExceeded', [_dec729], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor596 = _applyDecoratedDescriptor(_class221.prototype, 'fileRenamed', [_dec730], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor597 = _applyDecoratedDescriptor(_class221.prototype, 'fileSizeExceeded', [_dec731], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor598 = _applyDecoratedDescriptor(_class221.prototype, 'typeMismatch', [_dec732], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor599 = _applyDecoratedDescriptor(_class221.prototype, 'uploadComplete', [_dec733], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor600 = _applyDecoratedDescriptor(_class221.prototype, 'uploadTerminated', [_dec734], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor601 = _applyDecoratedDescriptor(_class221.prototype, 'beforeUploadStarts', [_dec735], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
}), _descriptor602 = _applyDecoratedDescriptor(_class221.prototype, 'selectionChange', [_dec736], {
  enumerable: true,
  initializer: function initializer() {
    return this.defaultFunc;
  }
})), _class221)) || _class220) || _class220);