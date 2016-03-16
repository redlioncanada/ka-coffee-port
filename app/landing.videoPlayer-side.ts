/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;

import {Component, ElementRef, Inject} from 'angular2/core'
import {VideoPlayerVideo} from './landing.videoPlayer.video'
import {Logger} from './services/logger.service'

@Component({
    selector: 'videoplayer-side',
    templateUrl: 'app/views/landing.videoPlayer.view.html',
	directives: [VideoPlayerVideo]
})
export class VideoPlayerSide {
	public selected: boolean
	private rootElement;

	public video =  {
		id: 'gXm2NRiC0oY',
		thumb: './public/images/whatiscraftcoffee/what-topBackTexture.jpg',
		desc: 'Great coffee is made through the perfect combination of carefully sourced beans and brew method. KitchenAid worked with baristas and coffee experts to stay true to this equation, engineering a new line of coffee brewers. Each brewer is dedicated to celebrating the art of handmade craft coffee with the convenience for home because we believe Life Tastes Better with Coffee.',
		header: './public/images/whatiscraftcoffee/coffee-bean-with-line.png',
		cta: 'Watch the video'
	}

	constructor(private logger: Logger, @Inject(ElementRef) elementRef: ElementRef) {
		this.selected = false
		this.rootElement = $(elementRef.nativeElement)
	}

	ngAfterViewInit() {
		$(this.rootElement).find('iframe').attr('height', $(this.rootElement).closest('intro').height());
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