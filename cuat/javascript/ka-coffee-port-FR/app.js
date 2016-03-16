System.register(['angular2/platform/browser', 'angular2/http', './services/logger.service.js', './services/googleapi.service.js', 'angular2/core', './landing.masthead.js', './landing.prodMenu.js', './coffee.footer.js'], function(exports_1, context_1) {
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
    var browser_1, http_1, logger_service_1, googleapi_service_1, core_1, landing_masthead_1, landing_prodMenu_1, coffee_footer_1;
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
            function (landing_masthead_1_1) {
                landing_masthead_1 = landing_masthead_1_1;
            },
            function (landing_prodMenu_1_1) {
                landing_prodMenu_1 = landing_prodMenu_1_1;
            },
            function (coffee_footer_1_1) {
                coffee_footer_1 = coffee_footer_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ka-coffee-port',
                        templateUrl: '/javascript/ka-coffee-port-FR/views/app.view.html',
                        directives: [landing_masthead_1.AppMasthead, landing_prodMenu_1.ProductMenu, coffee_footer_1.AppFooter]
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