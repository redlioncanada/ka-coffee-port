System.register(['angular2/core', './landing.feature.button.js', './models/features.model.js'], function(exports_1, context_1) {
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
    var core_1, landing_feature_button_1, features_model_1;
    var Features;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_feature_button_1_1) {
                landing_feature_button_1 = landing_feature_button_1_1;
            },
            function (features_model_1_1) {
                features_model_1 = features_model_1_1;
            }],
        execute: function() {
            Features = (function () {
                function Features() {
                    this.featureButtons = [
                        // new FeatureModel("/images/ka-refer-landing/refer-landing-shopping-cart.png",
                        // 				"Buying Guide",
                        // 				"What to look for when you are buying",
                        // 				"Click Here",
                        // 				"http://kitchenaid.ca",
                        // 				"cart"),
                        new features_model_1.FeatureModel("/images/ka-refer-landing/refer-landing-star.png", "Ratings & Reviews", "See what others are saying", "Click Here", "http://www.kitchenaid.ca/en_CA/2_2_89/global_best-products.content.html", "star"),
                        new features_model_1.FeatureModel("/images/ka-refer-landing/refer-landing-mag-glass.png", "Find Your Kitchenaid", "Need help finding your refrigerator?", "Click Here", "http://findmy.kitchenaid.ca/#/question/Appliance", "magnifier")
                    ];
                }
                Features = __decorate([
                    core_1.Component({
                        selector: 'features',
                        templateUrl: '/javascript/ka-refer-landing/views/landing.feature.view.html',
                        directives: [landing_feature_button_1.FeatureButton],
                    }), 
                    __metadata('design:paramtypes', [])
                ], Features);
                return Features;
            }());
            exports_1("Features", Features);
        }
    }
});
//# sourceMappingURL=landing.feature.js.map