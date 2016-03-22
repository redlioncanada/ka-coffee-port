/// <reference path="../typings/jquery/jquery.d.ts" />
declare var $: JQueryStatic;

import {Component, ElementRef, Inject} from 'angular2/core'
import {VideoPlayerVideo} from './landing.videoPlayer.video'
import {Logger} from './services/logger.service'
import {AnalyticsOn} from './analytics.directive'


@Component({
    selector: 'videoplayer-side',
    templateUrl: 'app/views/landing.videoPlayer.view.html',
	directives: [VideoPlayerVideo, AnalyticsOn]
})
export class VideoPlayerSide {
	public selected: boolean
	private rootElement;
	public analyticsCategory: string
	public analyticsAction: string
	public analyticsLabel: string

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
		this.analyticsCategory = '@language-Craft Coffee Landing Page'
		this.analyticsAction = '@language-Clicked Learn More CTA\'s'
		this.analyticsLabel = 'KA-Craft Brewers'
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