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
       
        new ProductModel("./public/images/rl-coffee-btn-burr.jpg","Burr Grinder »","","http://kitchenaid.ca",""),
        new ProductModel("./public/images/rl-coffee-siphon.jpg","Siphon Coffee Brewer »","","http://kitchenaid.ca",""),
        new ProductModel("./public/images/rl-coffee-btn-espresso.jpg","Espresso »","","http://kitchenaid.ca",""),
        new ProductModel("./public/images/rl-coffee-btn-french.jpg","Precision Press »","","http://kitchenaid.ca",""),
        new ProductModel("./public/images/rl-coffee-btn-PO.jpg","Custom Pour Over Coffee Brewer »","","http://kitchenaid.ca","")
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