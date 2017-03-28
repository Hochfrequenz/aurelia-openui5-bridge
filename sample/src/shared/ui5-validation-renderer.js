import {
    ValidationRenderer,
    RenderInstruction,
    ValidateResult
} from 'aurelia-validation';

export class Ui5ValidationRenderer {
    render(instruction) {
        for (let { result, elements } of instruction.unrender) {
            for (let element of elements) {
                this.remove(element, result);
            }
        }

        for (let { result, elements } of instruction.render) {
            for (let element of elements) {
                this.add(element, result);
            }
        }
    }
    add(element, result) {
        var uiElement = element.au.controller.viewModel.UIElement;
        if (uiElement != null) {
            if (uiElement.setValueState != null) {
                if(!result.valid)
                {
                    uiElement.setValueState('Error');
                    uiElement.setValueStateText(result.message);
                    uiElement.isValid = false;
                }
                else if(uiElement.isValid!=false)
                {
                    uiElement.isValid = true;
                    uiElement.setValueState('None');
                }
            }
        }
    }
    remove(element, result) {
        var uiElement = element.au.controller.viewModel.UIElement;
        if (uiElement != null) {
            uiElement.isValid = null;
            if (uiElement.setValueState != null) {
                uiElement.setValueState('None');
            }
        }
    }


}