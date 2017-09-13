import { Ui5Element } from '../element/element';
import { getBooleanFromAttributeValue } from '../common/attributes';

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