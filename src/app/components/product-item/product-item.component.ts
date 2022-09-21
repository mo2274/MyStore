import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Item;
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor() { 
    this.item = {
      id: 1,
      name: "",
      price: 0,
      url: "",
      description: ""
    };
  }

  ngOnInit(): void {
  }

}
