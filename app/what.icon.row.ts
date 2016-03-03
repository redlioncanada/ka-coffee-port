/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'

declare var $: JQueryStatic;

@Component({
    selector: 'icon-row',
    templateUrl: 'app/views/what.icon.row.view.html',
})

export class IconRow extends TimelineController {

    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetAni01;
    private targetAni02;
    private targetAni03;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)
    }
    
    public playAnimations(self){
        //
        
        TweenMax.to(self.targetAni01, .7, {delay:1.5, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
         TweenMax.to(self.targetAni02, .7, {delay:1.8,css: {transform:"scale(1)"}, ease:Elastic.easeOut});
          TweenMax.to(self.targetAni03, .7, {delay:2.1,css: {transform:"scale(1)"}, ease:Elastic.easeOut});
    }
    
    public resetAnimations(self){
        //
        TweenMax.to(self.targetAni01, .05, {css: {transform:"scale(0.01)"}, ease:Power3.easeOut});
        TweenMax.to(self.targetAni02, .05, {css: {transform:"scale(0.01)"}, ease:Power3.easeOut});
        TweenMax.to(self.targetAni03, .05, {css: {transform:"scale(0.01)"}, ease:Power3.easeOut});
    }
    
   

    private ngAfterViewInit() {
        var self=this;
        this.target = $(this.rootElement)
        this.targetAni01 = $(this.rootElement).find('.ani01');
        this.targetAni02 = $(this.rootElement).find('.ani02');
        this.targetAni03 = $(this.rootElement).find('.ani03');
        //
        //
        self.resetAnimations(self);
        self.playAnimations(self);
        
    }
}