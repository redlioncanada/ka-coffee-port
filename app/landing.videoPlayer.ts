/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
declare var $: JQueryStatic;

import {Component, ElementRef, Inject} from 'angular2/core'
import {DOM} from 'angular2/src/platform/dom/dom_adapter'
import {VideoPlayerVideo} from './landing.videoPlayer.video'
import {Logger} from './services/logger.service'
import {TimelineController} from './landing.timeline-controller'
import {AnalyticsOn} from './analytics.directive'


@Component({
    selector: 'videoplayer',
    templateUrl: 'app/views/landing.videoPlayer.view.html',
	directives: [VideoPlayerVideo, AnalyticsOn]
})
export class VideoPlayer extends TimelineController {
	public selected: boolean
	private rootElement;
    private scrollButton;
	public analyticsCategory: string
	public analyticsAction: string
	public analyticsLabel: string

	public video = { //https://www.youtube.com/watch?v=-BPDHf3YY_g
		id: '-BPDHf3YY_g',
		thumb: './public/images/rl-coffee-masthead.jpg',
		title: "QU'EST CE QUE LE CAFÉ ARTISANAL?",
		desc: "DÉCOUVREZ L'HISTOIRE DU CAFÉ ARTISANAL DE KITCHENAID, UNE COLLECTION D'HISTOIRES, D’IMAGES ET DE PERSONNAGES CAPTIVANTS",
		cta: "REGARDEZ LA VIDÉO"
	}

	constructor(private logger: Logger, @Inject(ElementRef) elementRef: ElementRef) {
        super();
		this.selected = false
		this.rootElement = $(elementRef.nativeElement)
		this.analyticsCategory = '@language-Craft Coffee Landing Page'
		this.analyticsAction = '@language-Clicked Learn More CTA\'s'
		this.analyticsLabel = 'What is Craft Coffee'
	}

    private scrollOver(self){
         TweenMax.to(self.scrollButton, .7, {css: {opacity:1}, ease:Power3.easeOut});
    }
    
    private scrollOut(self){
        TweenMax.to(self.scrollButton, .5, {css: {opacity:.5}, ease:Power3.easeOut});
    }
    
    private scrollClick(self){
        TweenMax.to(self.scrollButton, .5, {css: {opacity:.5}, ease:Power3.easeOut});
        //var doc = document.querySelector("document");
       //$(window).scrollTop(600)
      $('body, html').animate({
		    scrollTop:  600
	    },1000);
        
        //this.rootElement.parent().animate({
		   // scrollTop:  600
	    //});
    }
    
	ngAfterViewInit() {
        //
        var self=this;
        //
		$(this.rootElement).css('height', $(this.rootElement).find('videoplayer-video').height());
        //
        //this.doc = DOM.query("document");
        //
        this.scrollButton = $(this.rootElement).find("#rl-coffee-what-scroll");
        //
        this.scrollButton.mouseover(function(){self.scrollOver(self)});
        this.scrollButton.mouseout(function(){self.scrollOut(self)});
        this.scrollButton.click(function(){self.scrollClick(self)});
        
	}

	select() {
		this.selected = true

		let infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info')
        let scrollButton = $(this.rootElement).find("#rl-coffee-what-scroll")
		infoElement.animate({
			opacity: 0
		}, 1000, function() {
			infoElement.css('display', 'none')
            scrollButton.css('display', 'none')
		})
	}

	stoppedEvent() {
		this.selected = false
		let scrollButton = $(this.rootElement).find("#rl-coffee-what-scroll")
		let infoElement = $(this.rootElement).find('.rl-coffee-videoPlayer-info')
		infoElement.css('display', 'block').animate({
			opacity: 1
		}, 1000, function() {
            scrollButton.css('display', 'block')
		})
	}
}