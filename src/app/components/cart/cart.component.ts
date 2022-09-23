import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/models/Item';
import { CartService } from 'src/app/Services/cart-service.service';
import { Router } from '@angular/router';
import { ConfirmationDataService } from 'src/app/Services/confirmation-data.service';

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
  cardNumber: string = "";
  constructor(private cartService: CartService, private router: Router, private confirmationData :ConfirmationDataService) { }

  ngOnInit(): void {
    this.GetItems();
  }

  onSubmit() : void {
    this.confirmationData.changeMessage(this.fullName + "," +  this.total);
    this.router.navigate(['/confirmation']);
  }

  private GetItems() {
    this.items = this.cartService.GetItems();
    this.CalcTotal();
  }

  public CalcTotal() {
    this.total = 0;
    this.items.forEach(i => {
      console.log(i.count);
      this.total += i.count * i.price;
    });
    console.log(this.total);
  }

  public CoutChange(item:Item, count: number) {
     item.count = count;
     this.CalcTotal();
  }

  public DeleteItem(item: Item): void {
    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }

    this.CalcTotal();
  }
}
