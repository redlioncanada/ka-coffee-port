/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'footer',
    templateUrl: 'app/views/landing.footer.view.html',
})
export class Footer extends TimelineController {
    
    private rootElement;
    private elementRef: ElementRef;
    private target;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)


    }
    
    public playAnimations(){
        //
        console.log(this.target);
        TweenMax.to(this.target, 1, {css: {transform:"scale(1.2)"}, ease:Power3.easeOut});
    }
    
    public resetAnimations(){
        //
        TweenMax.to(this.target, .5, {css: {transform:"scale(1)"}, ease:Power3.easeOut});
    }
    
    private ngAfterViewInit() {
        this.target = $(this.rootElement).find('rl-coffee-footer-seeMore')
        
        this.target.mouseover(function(){this.playAnimations()});
        this.target.mouseout(function(){this.resetAnimations()});
    }
    
}