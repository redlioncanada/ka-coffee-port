System.register(['angular2/core', './product.selector.slides.js', './product.selector.nav.js', './models/products.model.js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, product_selector_slides_1, product_selector_nav_1, products_model_1;
    var ProductSelector;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (product_selector_slides_1_1) {
                product_selector_slides_1 = product_selector_slides_1_1;
            },
            function (product_selector_nav_1_1) {
                product_selector_nav_1 = product_selector_nav_1_1;
            },
            function (products_model_1_1) {
                products_model_1 = products_model_1_1;
            }],
        execute: function() {
            ProductSelector = (function () {
                function ProductSelector() {
                    this.products = [
                        new products_model_1.ProductModel("/images/ka-refer-landing/products/5-door.png", "5-door", "The revolutionary, first-ever 5-Door freestanding refrigerator is designed for optimal organization and food freshness. Learn more about our versatile soft-close drawers, designed to help keep your favourite foods visible and easy to reach.", "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000817/", "five-door"),
                        new products_model_1.ProductModel("/images/ka-refer-landing/products/built-in.png", "Built-in", "When you picture your dream kitchen, you can bet our Built-in Refrigerator goes with it. Designed to fit your kitchen seamlessly, our panel ready options sold separately provide a sleek, premium look to complement your cabinets.", "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000258/", "built-in"),
                        new products_model_1.ProductModel("/images/ka-refer-landing/products/french-door.png", "French Door", "Need to get organized? Our French Door Refrigerators provide excellent space and organizing options for your culinary needs. With features like the humidity-controlled crispers, pantry drawer, and tiered drawer freezers, French Door Refrigerators are a contemporary fit for any kitchen.", "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000377/", "french-door"),
                        new products_model_1.ProductModel("/images/ka-refer-landing/products/side-by-side.png", "Side-By-Side", "The clean, timeless design of our Side-by-Side Refrigerators gives you eye-level access to both refrigerator and freezer, while keeping the ingredients you use most often fresh and at your fingertips.", "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000379/", "side-by-side"),
                        new products_model_1.ProductModel("/images/ka-refer-landing/products/bottom-freezer.png", "Bottom Freezer", "Beautifully designed, inside and out. Our Bottom Freezer Refrigerators are made to give you easy access to your favourite foods. They also feature humidity-controlled crispers that create the perfect environment for keeping ingredients fresh.", "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048+105000376/", "bottom-freezer"),
                        new products_model_1.ProductModel("/images/ka-refer-landing/products/under-counter.png", "Under Counter", "Looking for a great addition to your kitchen? Our wide selection of Undercounter Refrigerators, Wine Cellars, and Ice Makers are a must have for entertaining, or providing another way to keep your beverages at the perfect temperature at all times.", "http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-2/undercounter-refrigerators-3/102310356/", "under-counter")
                    ];
                    this.selectedProduct = this.products[0];
                    this.animating = false;
                }
                ProductSelector.prototype.ngOnChanges = function (changes) {
                    if ("selectedProduct" in changes) {
                        console.log('product selector changed product: ', changes.selectedProduct.currentValue);
                    }
                };
                //@Output on product.selector.nav
                ProductSelector.prototype.productSelected = function (product) {
                    if (!this.animating) {
                        this.selectedProduct = product;
                        console.log('product.selector got new product: ' + product.prodId);
                    }
                };
                //@Output on product.selector.slides
                ProductSelector.prototype.isAnimating = function (animating) {
                    this.animating = animating;
                };
                ProductSelector = __decorate([
                    core_1.Component({
                        selector: 'product-selector',
                        templateUrl: '/javascript/ka-refer-landing/views/product.selector.view.html',
                        directives: [product_selector_slides_1.ProductSlides, product_selector_nav_1.ProductSelectorNav],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductSelector);
                return ProductSelector;
            }());
            exports_1("ProductSelector", ProductSelector);
        }
    }
});
//# sourceMappingURL=product.selector.js.map