import { Ui5ToastService } from 'aurelia-openui5-bridge';
import { inject } from 'aurelia-dependency-injection';
import { Ui5ValidationRenderer } from '../shared/ui5-validation-renderer';
import { ValidationControllerFactory, ValidationRules, ValidationController, validateTrigger } from 'aurelia-validation';
import { I18N } from 'aurelia-i18n';

@inject(ValidationControllerFactory, Ui5ToastService, I18N)
export class Installation {
    controller = null;
    renderer = null;
    i18n = null;
    selectedValue = null;
    nameSuggestions = [{
        key: 'Meyer', text: 'Hr. Meyer'
    }, {
        key: 'Kafka', text: 'Franz Kafka'
    }]
    constructor(factory, toast, i18n) {
        this.controller = factory.createForCurrentScope();
        this.controller.validateTrigger = validateTrigger.change;
        this.i18n = i18n;

        this.rules = ValidationRules
            .ensure('name')
            .displayName(this.i18n.tr('firstName'))
            .required()
            .minLength(3)
            .rules;
    }
    name = 'Tester';
    activate() {
        this.renderer = new Ui5ValidationRenderer();
        this.controller.addRenderer(this.renderer);

    }
    deactivate() {
        this.controller.removeRenderer(this.renderer);

    }
    onSuggest(params)
    {
        console.log(params);
    }


}

