System.register(['angular2/core', './landing.videoPlayer.video', './services/logger.service', './analytics.directive'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, landing_videoPlayer_video_1, logger_service_1, analytics_directive_1;
    var VideoPlayerSide;
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
            function (analytics_directive_1_1) {
                analytics_directive_1 = analytics_directive_1_1;
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            VideoPlayerSide = (function () {
                function VideoPlayerSide(logger, elementRef) {
                    this.logger = logger;
                    this.video = {
                        id: 'gXm2NRiC0oY',
                        thumb: './public/images/whatiscraftcoffee/what-topBackTexture.jpg',
                        desc: 'Great coffee is made through the perfect combination of carefully sourced beans and brew method. KitchenAid worked with baristas and coffee experts to stay true to this equation, engineering a new line of coffee brewers. Each brewer is dedicated to celebrating the art of handmade craft coffee with the convenience for home because we believe Life Tastes Better with Coffee.',
                        header: './public/images/whatiscraftcoffee/coffee-bean-with-line.png',
                        cta: 'Watch the video'
                    };
                    this.selected = false;
                    this.rootElement = $(elementRef.nativeElement);
                    this.analyticsCategory = '@language-Craft Coffee Landing Page';
                    this.analyticsAction = '@language-Clicked Learn More CTA\'s';
                    this.analyticsLabel = 'KA-Craft Brewers';
                }
                VideoPlayerSide.prototype.ngAfterViewInit = function () {
                    $(this.rootElement).find('iframe').attr('height', $(this.rootElement).closest('intro').height());
                };
                VideoPlayerSide.prototype.select = function () {
                    this.selected = true;
                    var infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info');
                    var videoElement = $(this.rootElement).find('videoplayer-video');
                    infoElement.animate({
                        opacity: 0
                    }, 1000, function () {
                        videoElement.css('zIndex', 2);
                        infoElement.css('zIndex', 1);
                    });
                };
                VideoPlayerSide.prototype.stoppedEvent = function () {
                    this.selected = false;
                    var infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info');
                    var videoElement = $(this.rootElement).find('videoplayer-video');
                    videoElement.css('zIndex', 1);
                    infoElement.css('zIndex', 2).animate({
                        opacity: 1
                    }, 1000);
                };
                VideoPlayerSide = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-side',
                        templateUrl: 'app/views/landing.videoPlayer.view.html',
                        directives: [landing_videoPlayer_video_1.VideoPlayerVideo, analytics_directive_1.AnalyticsOn]
                    }),
                    __param(1, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [logger_service_1.Logger, core_1.ElementRef])
                ], VideoPlayerSide);
                return VideoPlayerSide;
            }());
            exports_1("VideoPlayerSide", VideoPlayerSide);
        }
    }
});
//# sourceMappingURL=landing.videoPlayer-side.js.map