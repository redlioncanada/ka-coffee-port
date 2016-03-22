export class ProductModel{
    
    constructor(public prodImage:string = "",
                public prodName:string = "",
                public prodDescription:string = "",
                public prodUrl:string = "",
                public prodId:string = "",
                public prodAnalyticsCategory:string = "",
                public prodAnalyticsAction: string = "",
                public prodAnalyticsLabel: string = ""
                ){}
}