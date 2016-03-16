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
            }],
        execute: function() {
            /// <reference path="../typings/jquery/jquery.d.ts" />
            VideoPlayerSide = (function () {
                function VideoPlayerSide(logger, elementRef) {
                    this.logger = logger;
                    this.video = {
                        id: 'gXm2NRiC0oY',
                        thumb: '/images/ka-coffee-port-what-fr/whatiscraftcoffee/what-topBackTexture.jpg',
                        desc: 'Un bon caf&eacute; est une combinaison subtile de grains soigneusement s&eacute;lectionn&eacute;s et d\'une m&eacute;thode d\'infusion particuli&egrave;re. KitchenAid s\'est associ&eacute; &agrave; des baristas et des experts du caf&eacute; pour appliquer consciencieusement cette formule et cr&eacute;er une nouvelle gamme d\'infuseurs &agrave; caf&eacute;. Chaque appareil est sp&eacute;cialement con&ccedil;u pour c&eacute;l&eacute;brer l\'art du caf&eacute; artisanal dans le confort de chez-vous, parce que nous sommes convaincus que <em>la vie a meilleur go&ucirc;t avec du caf&eacute;.</em>',
                        header: '/images/ka-coffee-port-what-fr/whatiscraftcoffee/coffee-bean-with-line.png',
                        cta: 'REGARDEZ LA VID&Eacute;O'
                    };
                    this.selected = false;
                    this.rootElement = $(elementRef.nativeElement);
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
                        templateUrl: '/javascript/ka-coffee-port-what-fr/views/landing.videoPlayer.view.html',
                        directives: [landing_videoPlayer_video_1.VideoPlayerVideo]
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