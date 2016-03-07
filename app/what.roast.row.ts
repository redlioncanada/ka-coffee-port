/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'roast-row',
    templateUrl: 'app/views/what.roast.row.view.html',
})

export class RoastRow extends TimelineController {

    private rootElement;
    private elementRef: ElementRef;
    private hasPlayed;
    private target;
    private targetAni01;
    private targetAni02;
    private targetAni03;
    private pAni01;
    private pAni02;
    private pAni03;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.hasPlayed = false;
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)
    }
    
    public playAnimations(self){
        //
        TweenMax.to(self.targetAni01, 1,  {delay: .5, opacity: 1, x:0, directionalRotation:"0_cw", ease:Power3.easeOut});
        TweenMax.to(self.targetAni02, 1, {delay: .8, opacity: 1, x:0, directionalRotation:"0_cw", ease:Power3.easeOut});
        TweenMax.to(self.targetAni03, 1, {delay: 1.1, opacity: 1, x:0, directionalRotation:"0_cw", ease:Power3.easeOut});
        //
        TweenMax.to(self.pAni01, 1, {delay:1.5,css: {opacity: 1}, ease:Power3.easeOut});
        TweenMax.to(self.pAni02, 1, {delay:1.8,css: {opacity: 1}, ease:Power3.easeOut});
        TweenMax.to(self.pAni03, 1, {delay:2.1,css: {opacity: 1}, ease:Power3.easeOut});
    }
    
    public resetAnimations(self){
        //, directionalRotation:"35_cw"
        TweenMax.to(self.targetAni01, .05, {css: {opacity: 0, x:-100, directionalRotation:"-35_cw"}, ease:Power3.easeOut});
        TweenMax.to(self.targetAni02, .05, {css: {opacity: 0, x:-100, directionalRotation:"-35_cw"}, ease:Power3.easeOut});
        TweenMax.to(self.targetAni03, .05, {css: {opacity: 0, x:-100, directionalRotation:"-35_cw"}, ease:Power3.easeOut});
        //
        TweenMax.to(self.pAni01, .05, {css: {opacity: 0}, ease:Power3.easeOut});
        TweenMax.to(self.pAni02, .05, {css: {opacity: 0}, ease:Power3.easeOut});
        TweenMax.to(self.pAni03, .05, {css: {opacity: 0}, ease:Power3.easeOut});
    }
    
   

    private ngAfterViewInit() {
        var self=this;
        this.target = $(this.rootElement)
        this.targetAni01 = $(this.rootElement).find('.ani01');
        this.targetAni02 = $(this.rootElement).find('.ani02');
        this.targetAni03 = $(this.rootElement).find('.ani03');
        this.pAni01 = $(this.targetAni01).find('p');
        this.pAni02 = $(this.targetAni02).find('p');
        this.pAni03 = $(this.targetAni03).find('p');
        //
        self.resetAnimations(self);
        //
        $(document).scroll(function(){
            var $window = $(window);

            var docViewTop = $window.scrollTop();
            var docViewBottom = docViewTop + $window.height();

            var elemTop = self.target.offset().top;
            var elemBottom = elemTop + self.target.height();
            
            
            if (((elemBottom +-125) <= docViewBottom) && !self.hasPlayed){
                self.hasPlayed = true;
                self.playAnimations(self);
            }
            
        });
        
        //self.resetAnimations(self);
        //setTimeout(function(){self.playAnimations(self)}, 500);
        
    }
}