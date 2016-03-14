/// <reference path="../typings/greensock/greensock.d.ts" />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimelineController;
    return {
        setters:[],
        execute: function() {
            TimelineController = (function () {
                function TimelineController() {
                    this.timeline = new TimelineMax();
                }
                TimelineController.prototype.start = function () {
                    this.timeline.play();
                };
                TimelineController.prototype.pause = function () {
                    this.timeline.pause();
                };
                TimelineController.prototype.restart = function () {
                    this.timeline.seek(0);
                    this.timeline.play();
                };
                TimelineController.prototype.reset = function () {
                    this.timeline.seek(0);
                };
                return TimelineController;
            }());
            exports_1("TimelineController", TimelineController);
        }
    }
});
//# sourceMappingURL=landing.timeline-controller.js.map