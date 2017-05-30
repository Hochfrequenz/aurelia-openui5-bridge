export class Ui5Element {
    _container = null;
    addChild(child, elem) {
        var path = $(elem).parentsUntil(this.element);
        if (path[0].localName == 'layout')
        {
            this.UIElement.setLayoutData(child);
        }
    }
    removeChild(child,elem)
    {
    }
    attached()
    {
        
    }
}