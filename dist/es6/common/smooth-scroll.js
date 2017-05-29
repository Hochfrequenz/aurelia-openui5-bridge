import { Animator } from 'aurelia-framework';
import { Router } from 'aurelia-router';


export class SmoothScroll {

    static defaultConfig = {
        duration: 400,
        easing: "ease-in"
    };

    static inject = [Animator, Router];
    constructor(animator, router) {
        this.animator = animator;
        this.router = router;
        var config = SmoothScroll.defaultConfig;
        if (config.duration) this.duration = config.duration;
        if (config.easing) this.easing = config.easing;
    }


    //    this.scrollTo(this.element.getAttribute("href"),{},document.body);

    /**
     * Scroll to an element or named anchor
     *
     * @param elementOrHash   element to scroll to or named anchor
     * @param options         animator options
     * @param container       the container element (defaults to document.body)
     *
     * @returns {Promise} resolved when scrolling is done
     */
    scrollTo(elementOrHash, options = {}, container = document.body) {

        var target = elementOrHash;
        var hash = null;
        //find target by id or name
        if (typeof elementOrHash === "string" && elementOrHash.indexOf("#") === 0) {
            hash = elementOrHash.slice(1, elementOrHash.length);
            if (hash) {
                //query main DOM element, get UIElement
                target = container.querySelector(`[data-sap-ui="${hash}"]`);
            } else {
                target = document.body;
            }

            /*if (history) {
                history.pushState(null, null, '#/' + this.router.currentInstruction.fragment + '/' + hash);
            } else {
                //fallback to location.hash
                var t = container.scrollTop;
                location.hash = hash;
                container.scrollTop = t;
            }*/

        }

        if (!target || typeof target === "string") return Promise.resolve();
        return this.animator.animate(target, "scroll",
            Object.assign({
                duration: this.duration,
                offset: SmoothScroll.getOffset(),
                easing: this.easing
            }, options)
        );

    }

    static getOffset() {
        return - document.querySelector(".sapUiBody").offsetTop;
    }

}