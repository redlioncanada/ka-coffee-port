System.register(['angular2/core', './services/logger.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1;
    var VideoPlayerVideo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            VideoPlayerVideo = (function () {
                function VideoPlayerVideo(logger) {
                    this.logger = logger;
                    this.stoppedEvent = new core_1.EventEmitter();
                    this.readyEvent = new core_1.EventEmitter();
                    this.ready = false;
                    this.selected = false;
                    this.ended = false;
                }
                VideoPlayerVideo.prototype.ngAfterViewInit = function () {
                    var self = this;
                    this.player = new YT.Player(this.id, {
                        events: {
                            onReady: function () {
                                self._onReady(self);
                            },
                            onStateChange: function (state) {
                                switch (state.data) {
                                    case 0:
                                        //ended
                                        self._onEnded(self);
                                        break;
                                    case 1:
                                        //playing
                                        break;
                                    case 2:
                                        //paused
                                        self._onPaused(self);
                                        break;
                                    case 3:
                                        //buffering
                                        break;
                                    case 4:
                                        //video cued
                                        break;
                                }
                            }
                        }
                    });
                };
                VideoPlayerVideo.prototype.ngOnChanges = function (changes) {
                    if ("selected" in changes) {
                        if (changes.selected.currentValue) {
                            this.ended = false;
                            this.restart(this);
                        }
                        else {
                            this.pause(this);
                            this.reset(this);
                        }
                    }
                };
                VideoPlayerVideo.prototype._onReady = function (self) {
                    //need to pass a ref of `this` since this is a callback on YT.Player
                    self.ready = true;
                    self.readyEvent.emit();
                };
                VideoPlayerVideo.prototype._onEnded = function (self) {
                    self.ended = true;
                    self.stoppedEvent.emit();
                };
                VideoPlayerVideo.prototype._onPaused = function (self) {
                    self.stoppedEvent.emit();
                    self.reset();
                };
                VideoPlayerVideo.prototype.play = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready)
                        return;
                    self.player.playVideo();
                };
                VideoPlayerVideo.prototype.pause = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready)
                        return;
                    self.player.pauseVideo();
                };
                VideoPlayerVideo.prototype.restart = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready)
                        return;
                    //this is finicky, sometimes just doesn't work
                    //seems to be a bug with the player
                    //maybe we could que an interval on self.play until we see the state change, but that seems hacky
                    //self.reset(self)
                    self.player.seekTo(0);
                    self.play(self);
                };
                VideoPlayerVideo.prototype.reset = function (self) {
                    if (!self)
                        self = this;
                    if (!self.ready)
                        return;
                    //self.player.seekTo(0)
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], VideoPlayerVideo.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], VideoPlayerVideo.prototype, "selected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoPlayerVideo.prototype, "stoppedEvent", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoPlayerVideo.prototype, "readyEvent", void 0);
                VideoPlayerVideo = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-video',
                        templateUrl: 'app/views/landing.videoPlayer.video.view.html'
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger])
                ], VideoPlayerVideo);
                return VideoPlayerVideo;
            }());
            exports_1("VideoPlayerVideo", VideoPlayerVideo);
        }
    }
});
//# sourceMappingURL=landing.videoPlayer.video.js.map