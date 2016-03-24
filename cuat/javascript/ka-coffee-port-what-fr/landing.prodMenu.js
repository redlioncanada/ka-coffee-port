System.register(['angular2/core', './landing.timeline-controller.js', './landing.floatButton.js', './models/products.model.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, landing_timeline_controller_1, landing_floatButton_1, products_model_1;
    var ProductMenu;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (landing_timeline_controller_1_1) {
                landing_timeline_controller_1 = landing_timeline_controller_1_1;
            },
            function (landing_floatButton_1_1) {
                landing_floatButton_1 = landing_floatButton_1_1;
            },
            function (products_model_1_1) {
                products_model_1 = products_model_1_1;
            }],
        execute: function() {
            ProductMenu = (function (_super) {
                __extends(ProductMenu, _super);
                function ProductMenu(elementRef) {
                    _super.call(this);
                    this.products = [
                        new products_model_1.ProductModel("/images/ka-coffee-port-what-fr/rl-coffee-btn-burr.jpg", "MOULIN À CAFÉ À MEULES »", "", "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3442/brand_small-appliances_coffee-products_burr-grinder.content.html?skipCache=true", "", "@language-What is Craft Coffee Landing Page", "@language-Clicked Main Craft Coffee Collection", "Burr Grinder"),
                        new products_model_1.ProductModel("/images/ka-coffee-port-what-fr/rl-coffee-siphon.jpg", "CAFETIÈRE À DÉCOMPRESSION »", "", "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3450/brand_small-appliances_coffee-products_siphonbrew.content.html?skipCache=true", "", "@language-What is Craft Coffee Landing Page", "@language-Clicked Main Craft Coffee Collection", "Siphon Coffee Brewer"),
                        new products_model_1.ProductModel("/images/ka-coffee-port-what-fr/rl-coffee-btn-espresso.jpg", "MACHINE À ESPRESSO »", "", "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3445/brand_small-appliances_coffee-products_espresso-coffee.content.html", "", "@language-What is Craft Coffee Landing Page", "@language-Clicked Main Craft Coffee Collection", "Espresso"),
                        new products_model_1.ProductModel("/images/ka-coffee-port-what-fr/rl-coffee-btn-french.jpg", "CAFETIÈRE À PISTON DE PRÉCISION »", "", "", "", "@language-What is Craft Coffee Landing Page", "@language-Clicked Main Craft Coffee Collection", "Precision Press"),
                        new products_model_1.ProductModel("/images/ka-coffee-port-what-fr/rl-coffee-btn-PO.jpg", "INFUSEUR DE CAFÉ À FILTRE PERSONNALISÉ »", "", "http://cuat.kitchenaid.ca/fr_CA/2_1_2_3_3447/brand_small-appliances_coffee-products_pour-over-coffee.content.html?skipCache=true", "", "@language-What is Craft Coffee Landing Page", "@language-Clicked Main Craft Coffee Collection", "Pour Over Brewer")
                    ];
                    this.elementRef = elementRef;
                    this.rootElement = $(this.elementRef.nativeElement);
                }
                ProductMenu.prototype.playAnimations = function (bType) {
                    //
                };
                ProductMenu.prototype.resetAnimations = function () {
                    //
                };
                ProductMenu.prototype.ngAfterViewInit = function () {
                    //this.target = $(this.rootElement).find('img')
                    //this.targetWidth = $(this.rootElement).find('img').parent().width()
                    //this.targetHeight = $(this.rootElement).find('img').parent().height()
                    //this.resetAnimations();
                };
                ProductMenu = __decorate([
                    core_1.Component({
                        selector: 'products',
                        templateUrl: '/javascript/ka-coffee-port-what-fr/views/product.view.html',
                        directives: [landing_floatButton_1.FloatButton]
                    }),
                    __param(0, core_1.Inject(core_1.ElementRef)), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], ProductMenu);
                return ProductMenu;
            }(landing_timeline_controller_1.TimelineController));
            exports_1("ProductMenu", ProductMenu);
        }
    }
});
//# sourceMappingURL=landing.prodMenu.js.map