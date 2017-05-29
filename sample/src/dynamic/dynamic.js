import { Ui5ToastService } from 'aurelia-openui5-bridge';
import { inject } from 'aurelia-dependency-injection';
import { Ui5ValidationRenderer } from '../shared/ui5-validation-renderer';
import { ValidationControllerFactory, ValidationRules, ValidationController, validateTrigger } from 'aurelia-validation';
import { I18N } from 'aurelia-i18n';
import { SmoothScroll } from 'aurelia-openui5-bridge';

@inject(ValidationControllerFactory, Ui5ToastService, I18N, SmoothScroll)
export class DynamicPage {
    controller = null;
    renderer = null;
    i18n = null;
    selectedValue = null;
    nameSuggestions = [{
        key: 'Meyer', text: 'Hr. Meyer'
    }, {
        key: 'Kafka', text: 'Franz Kafka'
    }];
    smoothScroll = null;
    constructor(factory, toast, i18n, scroll) {
        this.controller = factory.createForCurrentScope();
        this.controller.validateTrigger = validateTrigger.change;
        this.i18n = i18n;
        this.smoothScroll = scroll;
    }
    activate() {

    }
    deactivate() {

    }
    pressLink() {
        this.smoothScroll.scrollTo("#MeinTest", {container:$(document.body.querySelector(`[scroll-container]`).au.controller.viewModel.UIElement.getDomRef()).children("[class=sapMWizardStepContainer]")}, document.body);
    }

}

