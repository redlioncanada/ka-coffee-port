System.register(['angular2/core', './services/logger.service', './services/googleapi.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1, googleapi_service_1;
    var VideoPlayerSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            },
            function (googleapi_service_1_1) {
                googleapi_service_1 = googleapi_service_1_1;
            }],
        execute: function() {
            VideoPlayerSelector = (function () {
                function VideoPlayerSelector(logger, api) {
                    this.logger = logger;
                    this.api = api;
                    this.selectedVideo = new core_1.EventEmitter();
                    this.ready = false;
                    this.selected = false;
                }
                VideoPlayerSelector.prototype.ngOnInit = function () {
                    var self = this;
                    this.api.video(this.data.id, function (data, err) {
                        if (data && !err) {
                            self.initialize(data);
                        }
                        else {
                            self.logger.error(err);
                        }
                    });
                };
                VideoPlayerSelector.prototype.initialize = function (data) {
                    //assumes 1 result
                    data = data.items[0];
                    this.data.desc = data.snippet.description.replace(/\\n/g, '');
                    this.ready = true;
                };
                VideoPlayerSelector.prototype.select = function () {
                    this.selectedVideo.emit(this.id);
                    this.selected = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerSelector.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerSelector.prototype, "id", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VideoPlayerSelector.prototype, "selected", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VideoPlayerSelector.prototype, "selectedVideo", void 0);
                VideoPlayerSelector = __decorate([
                    core_1.Component({
                        selector: 'videoplayer-selector',
                        templateUrl: 'app/views/landing.video-player.selector.view.html'
                    }), 
                    __metadata('design:paramtypes', [logger_service_1.Logger, googleapi_service_1.GoogleApi])
                ], VideoPlayerSelector);
                return VideoPlayerSelector;
            }());
            exports_1("VideoPlayerSelector", VideoPlayerSelector);
        }
    }
});
//# sourceMappingURL=landing.video-player.selector.js.map