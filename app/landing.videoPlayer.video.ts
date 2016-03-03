import {Component, Input, Output, EventEmitter} from 'angular2/core'
import {Logger} from './services/logger.service'

@Component({
	selector: 'videoplayer-video',
    templateUrl: 'app/views/landing.videoPlayer.video.view.html'
})
export class VideoPlayerVideo {
	@Input() id: string
	@Input() selected: boolean
	@Output() stoppedEvent = new EventEmitter()
	@Output() readyEvent = new EventEmitter()
	public player
	public ready: boolean
	public ended: boolean

	constructor(private logger: Logger) {
		this.ready = false
		this.selected = false
		this.ended = false
	}

	ngAfterViewInit() {
		let self = this

		this.player = new YT.Player(this.id, {
			events: {
				onReady: function() {
					self._onReady(self)
				},
				onStateChange: function(state) {
					switch(state.data) {
						case 0:
							//ended
							self._onEnded(self)
							break;
						case 1:
							//playing
							break;
						case 2:
							//paused
							self._onPaused(self)
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
		})
		
	}

	ngOnChanges(changes) {
		if ("selected" in changes) {
			if (changes.selected.currentValue) {
				this.ended = false
				this.restart(this)
			} else {
				this.pause(this)
				this.reset(this)
			}
		}
	}

	_onReady(self) {
		//need to pass a ref of `this` since this is a callback on YT.Player
		self.ready = true
		self.readyEvent.emit()
	}

	_onEnded(self) {
		self.ended = true
		self.stoppedEvent.emit()
	}

	_onPaused(self) {
		self.stoppedEvent.emit()
		self.restart()
	}

	play(self) {
		if (!self) self = this
		if (!self.ready) return
		self.player.playVideo()
	}

	pause(self) {
		if (!self) self = this
		if (!self.ready) return
		self.player.pauseVideo()
	}

	restart(self) {
		if (!self) self = this
		if (!self.ready) return
		//this is finicky, sometimes just doesn't work
		//seems to be a bug with the player
		//maybe we could que an interval on self.play until we see the state change, but that seems hacky
		//self.reset(self)
        self.player.seekTo(0)
		self.play(self)
	}

	reset(self) {
		if (!self) self = this
		if (!self.ready) return
		//self.player.seekTo(0)
	}
}