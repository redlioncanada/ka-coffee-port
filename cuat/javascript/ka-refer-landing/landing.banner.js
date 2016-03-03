System.register(['angular2/core', './landing.learn-more.button.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, landing_learn_more_button_1;
    var Banner;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_learn_more_button_1_1) {
                landing_learn_more_button_1 = landing_learn_more_button_1_1;
            }],
        execute: function() {
            Banner = (function () {
                function Banner() {
                    this.link = 'http://www.kitchenaid.ca/en_CA/new/';
                    this.image = '/images/ka-refer-landing/banner.jpg';
                }
                Banner = __decorate([
                    core_1.Component({
                        selector: 'banner',
                        templateUrl: '/javascript/ka-refer-landing/views/landing.banner.view.html',
                        directives: [landing_learn_more_button_1.LearnMoreButton],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Banner);
                return Banner;
            }());
            exports_1("Banner", Banner);
        }
    }
});
//# sourceMappingURL=landing.banner.js.map