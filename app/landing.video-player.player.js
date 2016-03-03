System.register(['angular2/core', './services/logger.service', './landing.video-player.video'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, landing_video_player_video_1;
    var VideoPlayerPlayer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (landing_video_player_video_1_1) {
                landing_video_player_video_1 = landing_video_player_video_1_1;
            }],
        execute: function() {
            VideoPlayerPlayer = (function () {
                function VideoPlayerPlayer(logger) {
                    this.logger = logger;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerPlayer.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerPlayer.prototype, "currentId", void 0);
                VideoPlayerPlayer = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-player',
                        templateUrl: 'app/views/landing.video-player.player.view.html',
                        directives: [landing_video_player_video_1.VideoPlayerVideo]
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], VideoPlayerPlayer);
                return VideoPlayerPlayer;
            }());
            exports_1("VideoPlayerPlayer", VideoPlayerPlayer);
        }
    }
});
//# sourceMappingURL=landing.video-player.player.js.map