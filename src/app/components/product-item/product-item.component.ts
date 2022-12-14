import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { CartService } from 'src/app/Services/cart-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Item;
  @Output() added = new EventEmitter<Item>();
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private cartService: CartService) { 
    this.item = {
      id: 1,
      name: "",
      price: 0,
      url: "",
      description: "",
      count: 0
    };
  }

  ngOnInit(): void {
  }

  AddToCart(item: Item): void {
    this.cartService.AddItem(item);
    this.added.emit(item);
  }
}
