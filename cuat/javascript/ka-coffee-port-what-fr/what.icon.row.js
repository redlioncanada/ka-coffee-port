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
    var IconRow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            }],
        execute: function() {
            IconRow = (function (_super) {
                __extends(IconRow, _super);
                function IconRow(elementRef) {
                    _super.call(this);
                    this.hasPlayed = false;
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                IconRow.prototype.playAnimations = function (self) {
                    //
                    TweenMax.to(self.targetAni01, .7, { delay: .5, css: { transform: "scale(1)" }, ease: Elastic.easeOut });
                    TweenMax.to(self.targetAni02, .7, { delay: .8, css: { transform: "scale(1)" }, ease: Elastic.easeOut });
                    TweenMax.to(self.targetAni03, .7, { delay: 1.1, css: { transform: "scale(1)" }, ease: Elastic.easeOut });
                };
                IconRow.prototype.resetAnimations = function (self) {
                    //
                    TweenMax.to(self.targetAni01, .05, { css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                    TweenMax.to(self.targetAni02, .05, { css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                    TweenMax.to(self.targetAni03, .05, { css: { transform: "scale(0.01)" }, ease: Power3.easeOut });
                };
                IconRow.prototype.ngAfterViewInit = function () {
                    var self = this;
                    this.target = $(this.rootElement);
                    this.targetAni01 = $(this.rootElement).find('.ani01');
                    this.targetAni02 = $(this.rootElement).find('.ani02');
                    this.targetAni03 = $(this.rootElement).find('.ani03');
                    //
                    self.resetAnimations(self);
                    //
                    $(document).scroll(function () {
                        var $window = $(window);
                        var docViewTop = $window.scrollTop();
                        var docViewBottom = docViewTop + $window.height();
                        var elemTop = self.target.offset().top;
                        var elemBottom = elemTop + self.target.height();
                        //console.log("Element top =: " + (elemBottom +-125)  + " dovViewTop =: " + docViewBottom)
                        //if ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)){
                        if (((docViewBottom - 150) >= elemTop) && !self.hasPlayed) {
                            self.hasPlayed = true;
                            self.playAnimations(self);
                        }
                    });
                    //
                };
                IconRow = __decorate([
                    core_1.Component({
                        selector: 'icon-row',
                        templateUrl: '/javascript/ka-coffee-port-what-fr/views/what.icon.row.view.html',
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], IconRow);
                return IconRow;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("IconRow", IconRow);
        }
    }
});
//# sourceMappingURL=what.icon.row.js.map