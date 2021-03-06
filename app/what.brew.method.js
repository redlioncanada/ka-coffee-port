System.register(['angular2/core', './landing.timeline-controller', './landing.floatButton', './models/products.model'], function(exports_1, context_1) {
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
    var BrewMethod;
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
            BrewMethod = (function (_super) {
                __extends(BrewMethod, _super);
                function BrewMethod(elementRef) {
                    _super.call(this);
                    this.images = [
                        new products_model_1.ProductModel("./public/images/whatiscraftcoffee/what-water-temp.jpg", "WATER TEMPERATURE", "The correct water temperature allows the grinds to awaken and reveal their flavour.", " ", " "),
                        new products_model_1.ProductModel("./public/images/whatiscraftcoffee/what-brew-time.jpg", "OPTIMAL BREW TIME", "The proper brew time is essential to ensuring the roast, grind, and temperature extract properly.", " ", " "),
                    ];
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                BrewMethod.prototype.playAnimations = function (self) {
                    //
                    //TweenMax.to(self.targetDiv, .5, {css: {transform:"scale(1.1)"}, ease:Power3.easeOut});
                };
                BrewMethod.prototype.resetAnimations = function (self) {
                    //
                    // TweenMax.to(self.targetDiv, .5, {css: {transform:"scale(1)"}, ease:Power3.easeOut});
                };
                BrewMethod.prototype.ngAfterViewInit = function () {
                    // var self=this;
                    //this.target = $(this.rootElement)
                    //this.targetDiv = $(this.rootElement).find('.rl-coffee-footer-seeMore');
                    //
                    //
                    //this.targetDiv.mouseover(function(){self.playAnimations(self)});
                    // this.targetDiv.mouseout(function(){self.resetAnimations(self)});
                };
                BrewMethod = __decorate([
                    core_1.Component({
                        selector: 'brew-method',
                        templateUrl: 'app/views/what.brew.method.view.html',
                        directives: [landing_floatButton_1.FloatButton]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], BrewMethod);
                return BrewMethod;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("BrewMethod", BrewMethod);
        }
    }
});
//# sourceMappingURL=what.brew.method.js.map