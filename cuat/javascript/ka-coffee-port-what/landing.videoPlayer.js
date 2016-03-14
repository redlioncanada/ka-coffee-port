System.register(['angular2/core', './landing.videoPlayer.video.js', './services/logger.service.js'], function(exports_1, context_1) {
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
    var core_1, landing_videoPlayer_video_1, logger_service_1;
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
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            VideoPlayer = (function () {
                function VideoPlayer(logger, elementRef) {
                    this.logger = logger;
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
                VideoPlayer.prototype.ngAfterViewInit = function () {
                    $(this.rootElement).css('height', $(this.rootElement).find('videoplayer-video').height());
                };
                VideoPlayer.prototype.select = function () {
                    this.selected = true;
                    var infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info');
                    infoElement.animate({
                        opacity: 0
                    }, 1000, function () {
                        infoElement.css('display', 'none');
                    });
                };
                VideoPlayer.prototype.stoppedEvent = function () {
                    this.selected = false;
                    var infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info');
                    infoElement.css('display', 'block').animate({
                        opacity: 1
                    }, 1000);
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
            }());
            exports_1("VideoPlayer", VideoPlayer);
        }
    }
});
//# sourceMappingURL=landing.videoPlayer.js.map