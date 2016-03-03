/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'
import {FloatButton} from './landing.floatButton'
import {ProductModel} from './models/products.model'

declare var $: JQueryStatic;

@Component({
    selector: 'brew-method',
    templateUrl: 'app/views/what.brew.method.view.html',
    directives:[FloatButton]
})

export class BrewMethod extends TimelineController {

    public images:[ProductModel] = [
       
        new ProductModel("./public/images/whatiscraftcoffee/what-water-temp.jpg","WATER TEMPERATURE","The correct water temperature allows the grinds to awaken and reveal their flavour."," "," "),
        new ProductModel("./public/images/whatiscraftcoffee/what-brew-time.jpg","OPTIMAL BREW TIME","The proper brew time is essential to ensuring the roast, grind, and temperature extract properly."," "," "),
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
        
        //TweenMax.to(self.targetDiv, .5, {css: {transform:"scale(1.1)"}, ease:Power3.easeOut});
    }
    
    public resetAnimations(self){
        //
       // TweenMax.to(self.targetDiv, .5, {css: {transform:"scale(1)"}, ease:Power3.easeOut});
    }
    
   

    private ngAfterViewInit() {
       // var self=this;
        //this.target = $(this.rootElement)
        //this.targetDiv = $(this.rootElement).find('.rl-coffee-footer-seeMore');
        //
        //
        //this.targetDiv.mouseover(function(){self.playAnimations(self)});
       // this.targetDiv.mouseout(function(){self.resetAnimations(self)});
    }
}