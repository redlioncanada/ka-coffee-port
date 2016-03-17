/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'
import {FloatButton} from './landing.floatButton'
import {ProductModel} from './models/products.model'

declare var $: JQueryStatic;

@Component({
    selector: 'float-menu',
    templateUrl: 'app/views/masthead.floatNav.view.html',
    directives:[FloatButton]
})

export class FloatMenu extends TimelineController {

    public features:[ProductModel] = [
       
        new ProductModel("./public/images/rl-coffee-what-button.png","QU'EST CE QUE LE CAFÉ ARTISANAL?","","http://www.kitchenaid.ca/en_CA/2_1_2_3_22847/brand_small-appliances_coffee-products_test-what-is-craft-coffee.content.html?skipCache=true",""),
        new ProductModel("./public/images/rl-coffee-brewer-button.png","INFUSEURS DE CAFÉ ARTISANAL KITCHENAID®","","http://www.kitchenaid.ca/fr_CA/2_1_2_3_3449/brand_small-appliances_coffee-products_product-information.content.html?skipCache=true","")
    ];

    private rootElement;
    private elementRef: ElementRef;
    private target;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super()
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)

        
    }
    
    public playAnimations(bType:string){
        //
    }
    
    public resetAnimations(){
            //
    }
    
   

    private ngAfterViewInit() {
        
        //this.target = $(this.rootElement).find('img')
        //this.targetWidth = $(this.rootElement).find('img').parent().width()
        //this.targetHeight = $(this.rootElement).find('img').parent().height()
        
       //this.resetAnimations();
    }
}