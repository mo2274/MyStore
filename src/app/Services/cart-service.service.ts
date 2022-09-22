import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Item[] = [];

  constructor() { }

  AddItem(newItem: Item) : void {  
    let item = this.items.find(i => i.id === newItem.id);
    if (item)
      item.count += newItem.count;
    else
      this.items.push(newItem);
  } 

  GetItems() : Item[] {
    return this.items;
  }
}
