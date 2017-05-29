'use strict';

System.register(['aurelia-framework', 'aurelia-router'], function (_export, _context) {
    "use strict";

    var Animator, Router, _class, _temp, SmoothScroll;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            Animator = _aureliaFramework.Animator;
        }, function (_aureliaRouter) {
            Router = _aureliaRouter.Router;
        }],
        execute: function () {
            _export('SmoothScroll', SmoothScroll = (_temp = _class = function () {
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
            }(), _class.defaultConfig = {
                duration: 400,
                easing: "ease-in"
            }, _class.inject = [Animator, Router], _temp));

            _export('SmoothScroll', SmoothScroll);
        }
    };
});