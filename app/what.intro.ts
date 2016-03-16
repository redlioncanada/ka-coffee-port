/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'
import {FloatButton} from './landing.floatButton'
import {VideoPlayerSide} from './landing.videoPlayer-side'
import {ProductModel} from './models/products.model'

declare var $: JQueryStatic;

@Component({
    selector: 'intro',
    templateUrl: 'app/views/what.intro.view.html',
    directives:[FloatButton,VideoPlayerSide]
})

export class WhatIntro extends TimelineController {
    
    public images:[ProductModel] = [
       
        new ProductModel("./public/images/whatiscraftcoffee/what-topBeans.jpg"," "," ","https://www.youtube.com/watch?v=gXm2NRiC0oY"," "),
        new ProductModel("./public/images/whatiscraftcoffee/what-topBackTexture.jpg"," "," ","https://www.youtube.com/watch?v=gXm2NRiC0oY"," "),
    ];

    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetDiv;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)
    }
    
    public playAnimations(self){
        //
        
        TweenMax.to(self.targetDiv, .5, {css: {transform:"scale(1.1)"}, ease:Power3.easeOut});
    }
    
    public resetAnimations(self){
        //
        TweenMax.to(self.targetDiv, .5, {css: {transform:"scale(1)"}, ease:Power3.easeOut});
    }
    
   

    private ngAfterViewInit() {
        var self=this;
        this.target = $(this.rootElement).find('img');
        this.targetDiv = $(this.rootElement).find('.rl-coffee-footer-seeMore');
        //
        //
        this.target.mouseover(function(){self.playAnimations(self)});
        this.target.mouseout(function(){self.resetAnimations(self)});
    }
}