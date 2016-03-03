/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;

import {Component, ElementRef, Inject} from 'angular2/core'
import {VideoPlayerVideo} from './landing.videoPlayer.video'
import {Logger} from './services/logger.service'

@Component({
    selector: 'videoplayer',
    templateUrl: 'app/views/landing.videoPlayer.view.html',
	directives: [VideoPlayerVideo]
})
export class VideoPlayer {
	public selected: boolean
	private rootElement;

	public video = {
		id: '9IFIdkLo29Y',
		thumb: './public/images/whatiscraftcoffee/what-topBeans.jpg',
		title: 'What is craft coffee?',
		desc: 'See the KitchenAid craft story. A collection of inspiring stories, image and people.',
		cta: 'Watch it now'
	}

	constructor(private logger: Logger, @Inject(ElementRef) elementRef: ElementRef) {
		this.selected = false
		this.rootElement = $(elementRef.nativeElement)
	}

	ngAfterViewInit() {
		$(this.rootElement).css('height', $(this.rootElement).find('videoplayer-video').height())
	}

	select() {
		this.selected = true

		let infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info')
		infoElement.animate({
			opacity: 0
		}, 1000, function() {
			infoElement.css('display', 'none')
		})
	}

	stoppedEvent() {
		this.selected = false
		
		let infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info')
		infoElement.css('display', 'block').animate({
			opacity: 1
		}, 1000)
	}
}