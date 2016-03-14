System.register(['angular2/core', './landing.timeline-controller.js', './landing.floatButton.js', './models/products.model.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, landing_timeline_controller_1, landing_floatButton_1, products_model_1;
    var FloatMenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            },
            function (landing_floatButton_1_1) {
                landing_floatButton_1 = landing_floatButton_1_1;
            },
            function (products_model_1_1) {
                products_model_1 = products_model_1_1;
            }],
        execute: function() {
            FloatMenu = (function (_super) {
                __extends(FloatMenu, _super);
                function FloatMenu(elementRef) {
                    _super.call(this);
                    this.features = [
                        new products_model_1.ProductModel("/images/ka-coffee-port/rl-coffee-what-button.png", "What is craft coffee?", "", "http://kitchenaid.ca", ""),
                        new products_model_1.ProductModel("/images/ka-coffee-port/rl-coffee-brewer-button.png", "KITCHENAID® CRAFT BREWERS", "", "http://kitchenaid.ca", "")
                    ];
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                FloatMenu.prototype.playAnimations = function (bType) {
                    //
                };
                FloatMenu.prototype.resetAnimations = function () {
                    //
                };
                FloatMenu.prototype.ngAfterViewInit = function () {
                    //this.target = $(this.rootElement).find('img')
                    //this.targetWidth = $(this.rootElement).find('img').parent().width()
                    //this.targetHeight = $(this.rootElement).find('img').parent().height()
                    //this.resetAnimations();
                };
                FloatMenu = __decorate([
                    core_1.Component({
                        selector: 'float-menu',
                        templateUrl: '/javascript/ka-coffee-port/views/masthead.floatNav.view.html',
                        directives: [landing_floatButton_1.FloatButton]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FloatMenu);
                return FloatMenu;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("FloatMenu", FloatMenu);
        }
    }
});
//# sourceMappingURL=landing.floatMenu.js.map