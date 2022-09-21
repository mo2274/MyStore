import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Item[] = [];
  total: number = 0;
  fullName: string = "";
  address: string = "";
  cardNumber: number = 0;
  constructor(private productService : ProductsService) { }

  ngOnInit(): void {
    this.GetItems();
  }

  onSubmit() : void {
    alert("sfgs");
  }

  private GetItems() {
    this.productService.GetProducts().subscribe(res => {
      for (let i = 0; i < res.length; i++) {
        var item = res[i];
        item['count'] = 1;
        this.total += item.price * item.count;
      }
      this.items = res;
    });
  }
}
