/// <reference path="../typings/jquery/jquery.d.ts" />
/// <reference path="../typings/greensock/greensock.d.ts" />
import {bootstrap}    from 'angular2/platform/browser'
import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {TimelineController} from './landing.timeline-controller'
import {FloatButton} from './landing.floatButton'
import {ProductModel} from './models/products.model'

declare var $: JQueryStatic;

@Component({
    selector: 'products',
    templateUrl: 'app/views/product.view.html',
    directives:[FloatButton]
})

export class ProductMenu extends TimelineController {

    public products:[ProductModel] = [
       
        new ProductModel(
            "./public/images/rl-coffee-btn-burr.jpg","MOULIN À CAFÉ À MEULES »",
            "",
            "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3442/brand_small-appliances_coffee-products_burr-grinder.content.html?skipCache=true",
            "",
            "@language-Craft Coffee Landing Page",
            "@language-Clicked Main Craft Coffee Collection",
            "Burr Grinder"
        ),
        new ProductModel(
            "./public/images/rl-coffee-siphon.jpg","CAFETIÈRE À DÉCOMPRESSION »",
            "",
            "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3450/brand_small-appliances_coffee-products_siphonbrew.content.html?skipCache=true",
            "",
            "@language-Craft Coffee Landing Page",
            "@language-Clicked Main Craft Coffee Collection",
            "Siphon Coffee Brewer"
        ),
        new ProductModel(
            "./public/images/rl-coffee-btn-espresso.jpg","MACHINE À ESPRESSO »",
            "",
            "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3445/brand_small-appliances_coffee-products_espresso-coffee.content.html",
            "",
            "@language-Craft Coffee Landing Page",
            "@language-Clicked Main Craft Coffee Collection",
            "Espresso"
        ),
        new ProductModel(
            "./public/images/rl-coffee-btn-french.jpg","CAFETIÈRE À PISTON DE PRÉCISION »",
            "",
            "",
            "",
            "@language-Craft Coffee Landing Page",
            "@language-Clicked Main Craft Coffee Collection",
            "Precision Press"
        ),
        new ProductModel(
            "./public/images/rl-coffee-btn-PO.jpg","INFUSEUR DE CAFÉ À FILTRE PERSONNALISÉ »",
            "",
            "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3447/brand_small-appliances_coffee-products_pour-over-coffee.content.html?skipCache=true",
            "",
            "@language-Craft Coffee Landing Page",
            "@language-Clicked Main Craft Coffee Collection",
            "Pour Over Brewer"
        )
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