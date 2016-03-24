System.register(['angular2/core', './landing.timeline-controller.js', './analytics.directive.js'], function(exports_1, context_1) {
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
    var core_1, landing_timeline_controller_1, analytics_directive_1;
    var FloatButton;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            },
            function (analytics_directive_1_1) {
                analytics_directive_1 = analytics_directive_1_1;
            }],
        execute: function() {
            FloatButton = (function (_super) {
                __extends(FloatButton, _super);
                function FloatButton(elementRef) {
                    _super.call(this);
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                FloatButton.prototype.playAnimations = function (self) {
                    //
                    TweenMax.to(self.targetImage, 1, { css: { transform: "scale(1.25)" }, ease: Power3.easeOut });
                };
                FloatButton.prototype.resetAnimations = function (self) {
                    //
                    TweenMax.to(self.targetImage, .5, { css: { transform: "scale(1.05)" }, ease: Power3.easeOut });
                };
                FloatButton.prototype.ngAfterViewInit = function () {
                    var self = this;
                    this.target = $(this.rootElement);
                    this.targetImage = $(this.rootElement).find('img');
                    //
                    this.target.mouseover(function () { self.playAnimations(self); });
                    this.target.mouseout(function () { self.resetAnimations(self); });
                    //
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "floatImage", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "floatName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "floatCopy", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "floatUrl", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "analyticsCategory", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "analyticsAction", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FloatButton.prototype, "analyticsLabel", void 0);
                FloatButton = __decorate([
                    core_1.Component({
                        selector: 'float-button',
                        templateUrl: '/javascript/ka-coffee-port-what-fr/views/masthead.floatButton.view.html',
                        directives: [analytics_directive_1.AnalyticsOn]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], FloatButton);
                return FloatButton;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("FloatButton", FloatButton);
        }
    }
});
//# sourceMappingURL=landing.floatButton.js.map