System.register(['angular2/core', './landing.timeline-controller.js'], function(exports_1, context_1) {
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
    var core_1, landing_timeline_controller_1;
    var Footer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            }],
        execute: function() {
            Footer = (function (_super) {
                __extends(Footer, _super);
                function Footer(elementRef) {
                    _super.call(this);
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                Footer.prototype.playAnimations = function () {
                    //
                    console.log(this.target);
                    TweenMax.to(this.target, 1, { css: { transform: "scale(1.2)" }, ease: Power3.easeOut });
                };
                Footer.prototype.resetAnimations = function () {
                    //
                    TweenMax.to(this.target, .5, { css: { transform: "scale(1)" }, ease: Power3.easeOut });
                };
                Footer.prototype.ngAfterViewInit = function () {
                    this.target = $(this.rootElement).find('rl-coffee-footer-seeMore');
                    this.target.mouseover(function () { this.playAnimations(); });
                    this.target.mouseout(function () { this.resetAnimations(); });
                };
                Footer = __decorate([
                    core_1.Component({
                        selector: 'footer',
                        templateUrl: '/javascript/ka-coffee-port/views/landing.footer.view.html',
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], Footer);
                return Footer;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("Footer", Footer);
        }
    }
});
//# sourceMappingURL=landing.footer.js.map