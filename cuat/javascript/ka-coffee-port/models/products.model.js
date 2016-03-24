System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductModel;
    return {
        setters:[],
        execute: function() {
            ProductModel = (function () {
                function ProductModel(prodImage, prodName, prodDescription, prodUrl, prodId, prodAnalyticsCategory, prodAnalyticsAction, prodAnalyticsLabel) {
                    if (prodImage === void 0) { prodImage = ""; }
                    if (prodName === void 0) { prodName = ""; }
                    if (prodDescription === void 0) { prodDescription = ""; }
                    if (prodUrl === void 0) { prodUrl = ""; }
                    if (prodId === void 0) { prodId = ""; }
                    if (prodAnalyticsCategory === void 0) { prodAnalyticsCategory = ""; }
                    if (prodAnalyticsAction === void 0) { prodAnalyticsAction = ""; }
                    if (prodAnalyticsLabel === void 0) { prodAnalyticsLabel = ""; }
                    this.prodImage = prodImage;
                    this.prodName = prodName;
                    this.prodDescription = prodDescription;
                    this.prodUrl = prodUrl;
                    this.prodId = prodId;
                    this.prodAnalyticsCategory = prodAnalyticsCategory;
                    this.prodAnalyticsAction = prodAnalyticsAction;
                    this.prodAnalyticsLabel = prodAnalyticsLabel;
                }
                return ProductModel;
            }());
            exports_1("ProductModel", ProductModel);
        }
    }
});
//# sourceMappingURL=products.model.js.map