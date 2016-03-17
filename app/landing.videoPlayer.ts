/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
declare var $: JQueryStatic;

import {Component, ElementRef, Inject} from 'angular2/core'
import {DOM} from 'angular2/src/platform/dom/dom_adapter'
import {VideoPlayerVideo} from './landing.videoPlayer.video'
import {Logger} from './services/logger.service'
import {TimelineController} from './landing.timeline-controller'

@Component({
    selector: 'videoplayer',
    templateUrl: 'app/views/landing.videoPlayer.view.html',
	directives: [VideoPlayerVideo]
})
export class VideoPlayer extends TimelineController {
	public selected: boolean
	private rootElement;
    private scrollButton;
    //private dom = new
    //private doc;

	public video = { //https://www.youtube.com/watch?v=-BPDHf3YY_g
		id: '-BPDHf3YY_g',
		thumb: './public/images/rl-coffee-masthead.jpg',
		title: 'What is craft coffee?',
		desc: 'See the KitchenAid craft story. A collection of inspiring stories, images and people.',
		cta: 'Watch it now'
	}

	constructor(private logger: Logger, @Inject(ElementRef) elementRef: ElementRef) {
        super();
		this.selected = false
		this.rootElement = $(elementRef.nativeElement)
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
       $('body').animate({
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