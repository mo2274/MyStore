import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';
import { CartService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  item: Item;
  id: number = 0;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private _Activatedroute:ActivatedRoute, private productService : ProductsService,
    private cartService: CartService) {
    this.item = {
      id: 1,
      name: "",
      price: 0,
      url: "",
      description: "",
      count: 1
    };
   }

  ngOnInit(): void {
    this.id = this.GetItemId();
    this.productService.GetProducts().subscribe(res => {
      var temp = res.find(i => i.id == this.id);
      if (temp)
        this.item = temp;
    });
  }

  private GetItemId() : number {
    let x = 0;
    this._Activatedroute.paramMap.subscribe(params => {
      var i = params.get('id');
      if (i !== null)
        x = parseInt(i);
      return x;
    });
    return x;
  }

  AddToCart() : void {
    this.cartService.AddItem(this.item);
    alert("Item Added To The Cart");
  }

}
