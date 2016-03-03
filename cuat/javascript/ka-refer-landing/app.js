System.register(['angular2/platform/browser', 'angular2/http', './services/logger.service.js', './services/googleapi.service.js', 'angular2/core', './landing.video-player.js', './landing.masthead.js', './landing.feature.js', './product.selector.js', './landing.morefeatures.js', './landing.banner.js', './landing.header.js', './landing.footer.js'], function(exports_1, context_1) {
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
    var browser_1, http_1, logger_service_1, googleapi_service_1, core_1, landing_video_player_1, landing_masthead_1, landing_feature_1, product_selector_1, landing_morefeatures_1, landing_banner_1, landing_header_1, landing_footer_1;
    var AppComponent;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (googleapi_service_1_1) {
                googleapi_service_1 = googleapi_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_video_player_1_1) {
                landing_video_player_1 = landing_video_player_1_1;
            },
            function (landing_masthead_1_1) {
                landing_masthead_1 = landing_masthead_1_1;
            },
            function (landing_feature_1_1) {
                landing_feature_1 = landing_feature_1_1;
            },
            function (product_selector_1_1) {
                product_selector_1 = product_selector_1_1;
            },
            function (landing_morefeatures_1_1) {
                landing_morefeatures_1 = landing_morefeatures_1_1;
            },
            function (landing_banner_1_1) {
                landing_banner_1 = landing_banner_1_1;
            },
            function (landing_header_1_1) {
                landing_header_1 = landing_header_1_1;
            },
            function (landing_footer_1_1) {
                landing_footer_1 = landing_footer_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'rl-ka-refer-landing',
                        templateUrl: '/javascript/ka-refer-landing/views/app.view.html',
                        directives: [landing_video_player_1.VideoPlayer, landing_masthead_1.AppMasthead, landing_feature_1.Features, product_selector_1.ProductSelector, landing_banner_1.Banner, landing_morefeatures_1.MoreFeatures, landing_header_1.Header, landing_footer_1.Footer]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            browser_1.bootstrap(AppComponent, [http_1.HTTP_PROVIDERS, logger_service_1.Logger, googleapi_service_1.GoogleApi]);
        }
    }
});
//# sourceMappingURL=app.js.map