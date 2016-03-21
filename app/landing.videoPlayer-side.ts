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
		desc: 'Un bon caf&eacute; est une combinaison subtile de grains soigneusement s&eacute;lectionn&eacute;s et d\'une m&eacute;thode d\'infusion particuli&egrave;re. KitchenAid s\'est associ&eacute; &agrave; des baristas et des experts du caf&eacute; pour appliquer consciencieusement cette formule et cr&eacute;er une nouvelle gamme d\'infuseurs &agrave; caf&eacute;. Chaque appareil est sp&eacute;cialement con&ccedil;u pour c&eacute;l&eacute;brer l\'art du caf&eacute; artisanal dans le confort de chez vous, parce que nous sommes convaincus que <em>la vie a meilleur go&ucirc;t avec du caf&eacute;.</em>',
		header: './public/images/whatiscraftcoffee/coffee-bean-with-line.png',
		cta: 'REGARDEZ LA VID&Eacute;O'
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
		let videoElement = $(this.rootElement).find('videoplayer-video')
		infoElement.animate({
			opacity: 0
		}, 1000, function() {
			videoElement.css('zIndex',2)
			infoElement.css('zIndex',1)
		})
	}

	stoppedEvent() {
		this.selected = false
		
		let infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info')
		let videoElement = $(this.rootElement).find('videoplayer-video')

		videoElement.css('zIndex',1)
		infoElement.css('zIndex',2).animate({
			opacity: 1
		}, 1000)
	}
}