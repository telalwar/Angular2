import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: 'app/products/product-list.component.html'

})

export class ProductListComponent {
    pageTitle: string = 'Product list !';
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    products: any[] = [
        {
            "Id": 1,
            "Name": "Tea",
            "price" : 23,
            "starRating" : 4.3,
            "imageUrl" : "https://i.ytimg.com/vi/JuK-RtjLOfc/maxresdefault.jpg"
        },
        {
            "Id": 2,
            "Name": "Sugar",
            "price" : 23,
            "starRating" : 4.3,
            "imageUrl" : "http://www.thegoodshoppingguide.com/wp-content/uploads/2013/03/sugar.jpg"
        }

    ];

    toggleImage() : void{
        this.showImage = !this.showImage;
    }
}