/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'float-button',
    templateUrl: 'app/views/masthead.floatButton.view.html',
})

export class FloatButton extends TimelineController {
    @Input() floatImage
    @Input() floatName
    @Input() floatCopy
    @Input() floatUrl

    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetImage;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)

        super()
    }
    
    public playAnimations(self){
        //
        console.log(self.targetImage);
        TweenMax.to(self.targetImage, 1, {css: {transform:"scale(1.25)"}, ease:Power3.easeOut});
    }
    
    public resetAnimations(self){
        //
        TweenMax.to(self.targetImage, .5, {css: {transform:"scale(1.05)"}, ease:Power3.easeOut});
    }
    
   

    private ngAfterViewInit() {
        var self=this;
        this.target = $(this.rootElement)
        this.targetImage = $(this.rootElement).find('img');
        //
        this.target.mouseover(function(){self.playAnimations(self)});
        this.target.mouseout(function(){self.resetAnimations(self)});
        //
        
    }
}