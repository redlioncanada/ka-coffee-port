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
    var ProductSlide;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_learn_more_button_1_1) {
                landing_learn_more_button_1 = landing_learn_more_button_1_1;
            }],
        execute: function() {
            ProductSlide = (function () {
                function ProductSlide() {
                }
                ProductSlide.prototype.ngOnChanges = function (changes) {
                    if ("selected" in changes) {
                        console.log(changes);
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlide.prototype, "fridge", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlide.prototype, "fridgeTitle", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlide.prototype, "fridgeDescription", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlide.prototype, "fridgeUrl", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlide.prototype, "fridgeId", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSlide.prototype, "selected", void 0);
                ProductSlide = __decorate([
                    core_1.Component({
                        selector: 'product-slide',
                        templateUrl: '/javascript/ka-refer-landing/views/product.selector.singleSlide.view.html',
                        directives: [landing_learn_more_button_1.LearnMoreButton]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductSlide);
                return ProductSlide;
            }());
            exports_1("ProductSlide", ProductSlide);
        }
    }
});
//# sourceMappingURL=product.selector.slide.js.map