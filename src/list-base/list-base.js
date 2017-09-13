import { bindable, customElement, noView } from 'aurelia-templating';
import { inject } from 'aurelia-dependency-injection';
import { AttributeManager } from '../common/attributeManager';
import { getBooleanFromAttributeValue } from '../common/attributes';
import { Ui5Control } from '../control/control';

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
