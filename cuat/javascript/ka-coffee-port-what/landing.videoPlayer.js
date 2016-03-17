System.register(['angular2/core', './landing.videoPlayer.video.js', './services/logger.service.js', './landing.timeline-controller.js'], function(exports_1, context_1) {
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
    var core_1, landing_videoPlayer_video_1, logger_service_1, landing_timeline_controller_1;
    var VideoPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_videoPlayer_video_1_1) {
                landing_videoPlayer_video_1 = landing_videoPlayer_video_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            /// <reference path="../typings/greensock/greensock.d.ts" />
            VideoPlayer = (function (_super) {
                __extends(VideoPlayer, _super);
                function VideoPlayer(logger, elementRef) {
                    _super.call(this);
                    this.logger = logger;
                    //private dom = new
                    //private doc;
                    this.video = {
                        id: '-BPDHf3YY_g',
                        thumb: '/images/ka-coffee-port-what/rl-coffee-masthead.jpg',
                        title: 'What is craft coffee?',
                        desc: 'See the KitchenAid craft story. A collection of inspiring stories, images and people.',
                        cta: 'Watch it now'
                    };
                    this.selected = false;
                    this.rootElement = $(elementRef.nativeElement);
                }
                VideoPlayer.prototype.scrollOver = function (self) {
                    TweenMax.to(self.scrollButton, .7, { css: { opacity: 1 }, ease: Power3.easeOut });
                };
                VideoPlayer.prototype.scrollOut = function (self) {
                    TweenMax.to(self.scrollButton, .5, { css: { opacity: .5 }, ease: Power3.easeOut });
                };
                VideoPlayer.prototype.scrollClick = function (self) {
                    TweenMax.to(self.scrollButton, .5, { css: { opacity: .5 }, ease: Power3.easeOut });
                    //var doc = document.querySelector("document");
                    //$(window).scrollTop(600)
                    $('body').animate({
                        scrollTop: 600
                    }, 1000);
                    //this.rootElement.parent().animate({
                    // scrollTop:  600
                    //});
                };
                VideoPlayer.prototype.ngAfterViewInit = function () {
                    //
                    var self = this;
                    //
                    $(this.rootElement).css('height', $(this.rootElement).find('videoplayer-video').height());
                    //
                    //this.doc = DOM.query("document");
                    //
                    this.scrollButton = $(this.rootElement).find("#rl-coffee-what-scroll");
                    //
                    this.scrollButton.mouseover(function () { self.scrollOver(self); });
                    this.scrollButton.mouseout(function () { self.scrollOut(self); });
                    this.scrollButton.click(function () { self.scrollClick(self); });
                };
                VideoPlayer.prototype.select = function () {
                    this.selected = true;
                    var infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info');
                    var scrollButton = $(this.rootElement).find("#rl-coffee-what-scroll");
                    infoElement.animate({
                        opacity: 0
                    }, 1000, function () {
                        infoElement.css('display', 'none');
                        scrollButton.css('display', 'none');
                    });
                };
                VideoPlayer.prototype.stoppedEvent = function () {
                    this.selected = false;
                    var scrollButton = $(this.rootElement).find("#rl-coffee-what-scroll");
                    var infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info');
                    infoElement.css('display', 'block').animate({
                        opacity: 1
                    }, 1000, function () {
                        scrollButton.css('display', 'block');
                    });
                };
                VideoPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer',
                        templateUrl: '/javascript/ka-coffee-port-what/views/landing.videoPlayer.view.html',
                        directives: [landing_videoPlayer_video_1.VideoPlayerVideo]
                    }),
                    __param(1, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [logger_service_1.Logger, core_1.ElementRef])
                ], VideoPlayer);
                return VideoPlayer;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("VideoPlayer", VideoPlayer);
        }
    }
});
//# sourceMappingURL=landing.videoPlayer.js.map