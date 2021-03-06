System.register(['angular2/core', './landing.timeline-controller', './landing.floatButton', './models/products.model'], function(exports_1, context_1) {
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
                        new products_model_1.ProductModel("./public/images/rl-coffee-btn-burr.jpg", "Burr Grinder »", "", "http://kitchenaid.ca", ""),
                        new products_model_1.ProductModel("./public/images/rl-coffee-siphon.jpg", "Siphon Coffee Brewer »", "", "http://kitchenaid.ca", ""),
                        new products_model_1.ProductModel("./public/images/rl-coffee-btn-espresso.jpg", "Esspresso »", "", "http://kitchenaid.ca", ""),
                        new products_model_1.ProductModel("./public/images/rl-coffee-btn-french.jpg", "Precision Press »", "", "http://kitchenaid.ca", ""),
                        new products_model_1.ProductModel("./public/images/rl-coffee-btn-PO.jpg", "Custom Pour Over Coffee Brewer »", "", "http://kitchenaid.ca", "")
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
                        templateUrl: 'app/views/product.view.html',
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