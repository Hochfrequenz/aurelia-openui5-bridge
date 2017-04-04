export class Ui5Element {
    addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'layout')
            this._input.setLayoutData(child);
    }
    attached()
    {
        
    }
}