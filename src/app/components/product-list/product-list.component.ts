import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {  
  items: Item[] = [];
  constructor(private productService : ProductsService) {
   }

  ngOnInit(): void {
    this.productService.GetProducts().subscribe(res => {
      this.items = res;
    })
  }

}
