System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ProductSelectorNav;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProductSelectorNav = (function () {
                function ProductSelectorNav() {
                    this.productSelected = new core_1.EventEmitter();
                    this.ctaText = 'See All';
                    this.ctaLink = 'http://www.kitchenaid.ca/en_CA/shop/major-appliances-1/refrigerators-3/102310048/';
                }
                ProductSelectorNav.prototype.select = function (product) {
                    this.productSelected.emit(product);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSelectorNav.prototype, "products", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ProductSelectorNav.prototype, "selectedProduct", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], ProductSelectorNav.prototype, "productSelected", void 0);
                ProductSelectorNav = __decorate([
                    core_1.Component({
                        selector: 'product-selector-nav',
                        templateUrl: '/javascript/ka-refer-landing/views/product.selector.nav.view.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductSelectorNav);
                return ProductSelectorNav;
            }());
            exports_1("ProductSelectorNav", ProductSelectorNav);
        }
    }
});
//# sourceMappingURL=product.selector.nav.js.map