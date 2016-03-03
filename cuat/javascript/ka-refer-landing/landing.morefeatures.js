System.register(['angular2/core', './landing.morefeatures.feature.js'], function(exports_1, context_1) {
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
    var core_1, landing_morefeatures_feature_1;
    var MoreFeatures;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_morefeatures_feature_1_1) {
                landing_morefeatures_feature_1 = landing_morefeatures_feature_1_1;
            }],
        execute: function() {
            MoreFeatures = (function () {
                function MoreFeatures() {
                    this.title = "More Fresh Features";
                    this.moreFeatures = [
                        {
                            "title": "Measured Water Fill",
                            "image": "/images/ka-refer-landing/more-features-1.jpg",
                            "link": "http://kitchenaid.ca",
                            "text": "Displays and automatically dispenses water in ounces, cups, or liters.",
                            "cta": ""
                        },
                        {
                            "title": "Platinum Interior",
                            "image": "/images/ka-refer-landing/more-features-2.jpg",
                            "link": "http://kitchenaid.ca",
                            "text": "Provides a premium look with silver glossy walls that complement the metallic accents found inside the refrigerator.",
                            "cta": ""
                        },
                        {
                            "title": "Three-Tier Freezer Drawer",
                            "image": "/images/ka-refer-landing/more-features-3.jpg",
                            "link": "http://kitchenaid.ca",
                            "text": "Gives you easy access to frozen items with a three-level drawer, plus a divider in the lower basket to help you keep smaller items readily at hand.",
                            "cta": ""
                        }
                    ];
                }
                MoreFeatures = __decorate([
                    core_1.Component({
                        selector: 'more-features',
                        templateUrl: '/javascript/ka-refer-landing/views/landing.morefeatures.view.html',
                        directives: [landing_morefeatures_feature_1.MoreFeaturesFeature],
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoreFeatures);
                return MoreFeatures;
            }());
            exports_1("MoreFeatures", MoreFeatures);
        }
    }
});
//# sourceMappingURL=landing.morefeatures.js.map